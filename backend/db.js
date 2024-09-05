const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aruj17:lCtXb7eAPfCtI1HG@cluster0.65r4erq.mongodb.net/paytm")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        minLength: 3,
        maxLength: 50,
        trim: true,
        required: true
    }, 

    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 50
    },

    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
        trim: true
    }
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const Account = mongoose.model('Account', accountSchema)
const User = mongoose.model("User", userSchema)

module.exports = {
    User,
    Account
}

