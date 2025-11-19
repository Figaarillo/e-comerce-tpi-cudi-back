import mongoose from "mongoose";

// const URI = process.env.ENV === "prod" ? process.env.URLDB : process.env.MONGO_URI

const connectMongoDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("base de datos conectada 🤟🔥: ", process.env.MONGO_URI))
    .catch((err) => console.error('❌ Error conectando a MongoDB:', err));
  ;
}

export default connectMongoDB
