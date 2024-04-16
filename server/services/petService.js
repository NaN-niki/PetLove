const Pet = require("../models/Pet")
const User = require("../models/User")

async function getAllPets() {
    return Pet.find({bought : false})
}
async function addNewPet(newPet) {
    return Pet.create(newPet)
}
async function getOnePet(petId) {
    return Pet.findById(petId)
}
async function editPet(petId, pet) {
    const editetPet = await Pet.findById(petId)

    editetPet.animalType = pet.animalType
    editetPet.breed = pet.breed
    editetPet.name = pet.name
    editetPet.skin_color = pet.skin_color
    editetPet.imageUrl = pet.imageUrl
    editetPet.description = pet.description
    editetPet.contactInfo = pet.contactInfo
    editetPet.address = pet.address

    return editetPet.save()
}
async function deletePet(petId) {
    return Pet.findOneAndDelete({_id : petId})
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