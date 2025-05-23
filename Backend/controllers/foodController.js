import foodModel from "../models/foodModel.js";
import fs from 'fs'

//add food item
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`

    const food = new foodModel({
        name: req.body.name,
        image: image_filename,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category
    })
    try {
        await food.save()
        res.json({
            success: true,
            message: "Food Added"
        })
    }
    catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "error"
        })
    }
}

//display all food items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({
            success: true,
            data:foods,
            message: "food list displayed"
        })

    }
    catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "error"
        })
    }
}

//remove food item
const removeFood = async (req,res) => {
try {
        const foods = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${foods.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({
            success: true,
            message: "Food removed"
        })
    }
    catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "error"
        })
    }
}

export { addFood, listFood, removeFood }