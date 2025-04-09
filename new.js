const express = require('express')
const app = express()

const mongoose = require('mongoose')
const port = 4040

const mongo_uri = "mongodb://localhost:27017/new"
app.use(express.json())

mongoose.connect(mongo_uri).then(() => {
    console.log("connected to database")
})
    .catch((err) => {
        console.log("connection failed")
    })
const productSchema = mongoose.Schema({
    _id: Number,
    name: String,
    price: Number,
    description: String

})
const Product = mongoose.model("Product", productSchema)

app.post("/products", async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()
        res.json(product)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

app.get("/products", async (req, res) => {
    try {
        const product = await Product.find();
        res.json(product)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

app.get("/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }
        res.json(product)

    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})


app.delete("/products/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }
        res.json(product)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

app.listen(port, () => console.log("listemi"))