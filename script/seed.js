import mongoose from "mongoose";
import dotenv from "dotenv";
import Contract from "../server/src/models/Contract.js";

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Contract.deleteMany();

    await Contract.create({
      title: "Sample Contract",
      text: "This agreement includes termination and liability clauses...",
    });

    console.log("✅ Database Seeded");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();