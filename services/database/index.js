const mongoose = require("mongoose");

const connectDB = async () => {
    // Database connection
    try {
        const conn = await mongoose.connect(process.env.DB_URL, {
            dbName: "justpantry",
            user: "admin-akash",
            pass: process.env.DB_PASS,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;