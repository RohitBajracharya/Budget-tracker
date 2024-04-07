import { COOKIE_OPTIONS } from "../constants.js"
import { addBudgetByUserId } from "../services/budget.services.js"
import { createNewUser, findExistingUser, findUserById, findUserByIdAndUpdateToken } from "../services/user.services.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const registerUser = async (req, res) => {
    const { fullName, email, password } = req.body
    if ([fullName, email, password].some((field) => field?.trim() === "")) {
        return res.status(400).json(new ApiError(404, "All fields are required"))
    }

    try {
        const existingUser = await findExistingUser(email);
        if (existingUser) {
            return res.status(409).json(new ApiError(409, "Email already exists."))
        }
        const user = await createNewUser(fullName, email, password);
        if (!user) {
            return res.status(500).json(new ApiError(500, "User not created"))
        }
        await addBudgetByUserId(user._id)
        return res.status(201).json(new ApiResponse(201, user, "User registered successfully"))
    } catch (error) {
        res.status(500).json(new ApiError(500, "Error while registering user"))
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email && !password) {
            return res.status(400).json(new ApiError(400, "Email and Password are required"))
        }
        const user = await findExistingUser(email);
        if (!user) {
            return res.status(400).json(new ApiError(400, "Email not found"))
        }
        const isPasswordCorrect = await user.isPasswordCorrect(password)
        if (!isPasswordCorrect) {
            return res.status(401).json(new ApiError(401, "Wrong password"))
        }
        const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id)

        return res.status(200)
            .cookie("accessToken", accessToken, COOKIE_OPTIONS)
            .cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
            .json(new ApiResponse(200, user, "User Login Successfully"))
    } catch (error) {
        return res.status(500)
            .json(new ApiError(500, "User Login Failed"))
    }

}

const logoutUser = async (req, res) => {
    try {
        await findUserByIdAndUpdateToken(req.user._id)
        return res.status(200)
            .clearCookie("accessToken", COOKIE_OPTIONS)
            .clearCookie("refreshToken", COOKIE_OPTIONS)
            .json(new ApiResponse(200, {}, "User Logout Successfully"))
    } catch (error) {
        return res.status(500)
            .json(new ApiError(500, "Failed to logout"))
    }
}

const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await findUserById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        user.accessToken = accessToken
        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })
        return { accessToken, refreshToken }
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token")
    }
}

export { loginUser, logoutUser, registerUser }

