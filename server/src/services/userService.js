const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const secret = 'hahaha'
const blackList = new Set() 

async function register(username, firstName, lastName, email, password) {
    const existng = await User.findOne({ username }).collation({ locale: 'en', strength: 2 })

    if (existng) {
        throw new Error('Username is taken')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        username,
        firstName,
        lastName,
        email,
        password: hashedPassword
    })

    const token = createToken(user)

    return {
        _id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token
    }
}

async function login(username, password) {
    const existng = await User.findOne({ username }).collation({ locale: 'en', strength: 2 })

    if (!existng) {
        throw new Error('Username or password don\'t match')
    }

    const match = await bcrypt.compare(password, existng.password)

    if (!match) {
        throw new Error('Username or password don\'t match')
    }

    const token = createToken(existng)

    return {
        _id: existng._id,
        username: existng.username,
        firstName: existng.firstName,
        lastName: existng.lastName,
        email: existng.email,
        token
    }

}

async function logout(token) {
    blackList.add(token)
}

async function updateProfile(userid, newData) {
    const user = await User.findById(userid)

    user.username = newData.username
    user.firstName = newData.firstName
    user.lastName = newData.lastName
    user.email = newData.email

    await user.save()

    return getProfileInfo(userid)
}


async function getProfileInfo(userId) {
    return User.findById(userId).populate('adoptedPet')
}

function createToken(user) {
    const payload = {
        _id: user._id,
    }

    return jwt.sign(payload, secret)
}

function parseToken(token) {
    if (blackList.has(token)) {
        throw new Error('Token is blacklisted')
    }

    return jwt.verify(token, secret)
}



module.exports = {
    login,
    logout,
    register,
    parseToken,
    getProfileInfo,
    updateProfile
}