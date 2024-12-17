import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
    isActive: {
        type: Boolean,
        default: false
    }
});

const Category = mongoose.model("Category", categorySchema); 

export default Category;