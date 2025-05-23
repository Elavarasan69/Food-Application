import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://elavarasantamil:1234@elavarasancluster.oxh3vfs.mongodb.net/food_application')
    .then(()=>console.log('Database Connected'))
}

