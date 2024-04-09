const { getAllPets, getOnePet } = require('../services/petService')


module.exports = () => async (req, res, next) => {

    if (req.params.id) {
        const data = await getOnePet(req.params.id)
        req.pet = data
    } else {
        const data = await getAllPets()
        req.pets = data
    }

    next()
}