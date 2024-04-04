import { User } from "../model/user.model.js";

const findExistingUser = async (email) => {
    try {
        return await User.findOne({ email })
    } catch (error) {
        console.log(error)
        throw error
    }
}

const createNewUser = async (fullName, email, password) => {
    try {
        return await User.create({
            fullName,
            email,
            password
        })
    } catch (error) {
        console.log(error)
        throw error
    }
}

const findUserById = async (id) => {
    try {
        return await User.findById(id)
    } catch (error) {
        console.log(error)
        throw error
    }
}

const findUserByIdAndUpdateToken = async (id) => {
    try {
        return await User.findByIdAndUpdate(id, {
            $set: {
                refreshToken: undefined
            }
        }, { new: true })
    } catch (error) {
        console.log(error)
        throw error
    }
}

export {
    createNewUser, findExistingUser, findUserById, findUserByIdAndUpdateToken
};

