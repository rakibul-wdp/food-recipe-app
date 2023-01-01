import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected ${response.connection.host}`);
  } catch (error) {
    console.error(`Database Error: ${error.message}`);
  }
};

export default connectDB;
