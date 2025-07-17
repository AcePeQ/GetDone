import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const dbURL = process.env.MONGODB_URL;

    if (!dbURL) {
      throw new Error("MONGODB_URL environment variable is not defined.");
    }

    const connection = await mongoose.connect(dbURL);

    console.log(
      `Connected to the database successfully at ${connection.connection.host}:${connection.connection.port}`
    );
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

export default connectDatabase;
