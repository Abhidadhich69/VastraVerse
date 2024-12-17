import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [{
        product: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Product',
            required: true,
        },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true },

    }],
    totalAmount: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'], 
        default: 'Pending',
        message: "{VALUE} is not a valid order status" 
    },
    paymentMethod: { 
        type: String, 
        enum: ["UPI", "COD"], 
        required: true,
        message: "{VALUE} is not a valid order payment method" 
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid', 'Failed', 'Refunded'],
        default: 'Pending',
        message: "{VALUE} is not a valid order payment status" 
    },
    shippingAddress: {
        fullName: { type: String, required: true },
        addressLine1: { type: String, required: true },
        addressLine2: { type: String },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
        phoneNumber: { type: String, required: true },
    }
}, { timestamps: true });

const Order = mongoose.Model("Order", orderSchema);

export default Order;