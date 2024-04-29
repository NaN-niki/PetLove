const { hasUser, isOwner } = require('../middlewares/guards')
const preloader = require('../middlewares/preloader')
const { getAllPets,
    addNewPet,
    getOnePet,
    editPet,
    deletePet,
    getPetByUser,
    getPet } = require('../services/petService')
const parseError = require('../util/parseError')

const petController = require('express').Router()

petController.get('/', async (req, res) => {
    try {
        let pets = []
        pets = await getAllPets()
        res.json(pets)

    } catch (error) {
        const message = parseError(error)
        res.status(400).json({ message })
    }
})

petController.post('/create', hasUser(), async (req, res) => {
    try {
        const body = req.body

        const item = {  
            animalType : body.animalType,
            breed: body.breed,
            name: body.name,
            skin_color: body.skin_color,
            imageUrl: body.imageUrl,
            description: body.description,
            contactInfo: body.contactInfo,
            address: body.address,
            createdAt: new Date(),
            owner: req.user._id
        }
        const pet = await addNewPet(item)
        res.json(pet)
    } catch (error) {
        const message = parseError(error)
        res.status(400).json({ message })
    }
})
petController.get('/:id', async (req, res) => {
    try {
        const pet = await getOnePet(req.params.id)
        res.json(pet)
    } catch (error) {
        const message = parseError(error)
        res.status(400).json({ message })
    }
})

petController.put('/:id', hasUser(), preloader(), isOwner(), async (req, res) => {

    try {
        const pet = await editPet(req.params.id, req.body)
        res.json(pet)
    } catch (error) {
        const message = parseError(error)
        res.status(400).json({ message })
    }
})

petController.delete('/:id', hasUser(), preloader(), isOwner(), async (req, res) => {

    try {
        await deletePet(req.params.id)
        res.status(204).end()
    } catch (error) {
        const message = parseError(error)
        res.status(400).json({ message })
    }
})

petController.post('/getPetInfo', preloader(), async (req, res) => {
    try {
        if (req.body.id !== undefined) {
            const pet = await getOnePet(req.body.id)
            res.json(pet)
        } else {
            res.status(204).json({ message: 'No Pet' })
        }
    } catch (err) {
        console.log(err)
        const message = parseError(err)
        res.status(204).json({ message })
    }
})

petController.get('/buy/:id', hasUser(), async (req, res) => {
    try {
        await getPet(req.params.id, req.user._id)
        res.status(200).end()
    } catch (error) {
        const message = parseError(error)
        res.status(400).json({ message })
    }
})

module.exports = petController