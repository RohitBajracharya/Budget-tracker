class ApiError {
    constructor(
        statusCode,
        message = "Oops Something went wrong"
    ) {
        this.statusCode = statusCode
        this.message = message
        this.success = false
    }
}

export { ApiError }

