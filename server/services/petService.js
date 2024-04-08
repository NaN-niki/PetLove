const Pet = require("../models/Pet")
const User = require("../models/User")

async function getAllPets() {
    const user = await User.findById(userId)
    const pets =  (await Clothing.find({})).filter(c => user.boughtClothing.includes(c._id) == false )
    return pets
}
async function addNewPet(newPet) {
    return Pet.create(newPet)
}
async function getOnePet(petId) {
    return Pet.findById(petId)
}
async function editPet(petId, pet) {
    const editetPet = await Pet.findById(petId)

    editetPet.breed = pet.breed
    editetPet.name = pet.name
    editetPet.skin_color = pet.skin_color
    editetPet.imageUrl = pet.imageUrl
    editetPet.description = pet.description
    editetPet.contactInfo = pet.contactInfo
    editetPet.adress = pet.adress

    return editetPet.save()
}
async function deletePet(petId) {
    return Pet.findOneAndDelete(petId)
}

async function getPetByUser(userId) {
    return Pet.find({ creator: userId })
} // owner ??

async function getPet(petId, userId) {
    const pet = await Pet.findById(petId)
    const user = await User.findById(userId)

    user.boughtPet.push(pet)
    Pet.bought = true

    Pet.save()
    user.save()
    return
}


module.exports = {
    getAllPets,
    addNewPet,
    getOnePet,
    editPet,
    deletePet,
    getPetByUser,
    getPet,
}