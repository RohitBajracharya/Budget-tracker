const cors = require("cors")
const dotenv = require("dotenv")
const express = require("express")
const mongoose = require("mongoose")
const route = require("./routes/shiftRoute.js")

const app = express();
app.use(cors())
app.use(express.json())
dotenv.config()

app.use("/api/shift", route)

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
    console.log("Database connected successfully")
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`)
    })
}).catch(error => console.log(error));
