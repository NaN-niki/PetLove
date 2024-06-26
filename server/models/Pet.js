const { model, Schema, Types } = require('mongoose')

const httpRegex = /https?:\/\/.*/

const petSchema = new Schema({
    animalType : {type : String, required: true},
    breed: { type: String, required: true},
    name: { type: String, required: true },
    skin_color: { type: String, required: true },
    imageUrl: { type: String, required: true, validate: {
        validator: (v) => httpRegex.test(v),
        message : 'URL must start with http:// or https://'
    }},
    description: { type: String, required: true, minLength: [10, 'Description must be at least 10 symbols'] },
    contactInfo: { type: Number, required: true },
    address: { type: String, required: true },
    createdAt: { type: String },
    bought: { type: Boolean, default: false },
    owner: { type: Types.ObjectId, ref: 'User', required: true },
})

const Pet = model('Pet', petSchema)

module.exports = Pet