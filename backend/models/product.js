import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    stockQuantity: {
        type: Number,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const Product = mongoose.Model("Product", productSchema);

export default Product;