import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("DB connected");
    }
    catch(error) {
        throw error;
    }
}

export default connectDB;