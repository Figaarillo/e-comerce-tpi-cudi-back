import mongoose from "mongoose";

// const URI = process.env.ENV === "prod" ? process.env.URLDB : process.env.MONGO_URI

const connectMongoDB = () => {
  mongoose
    .connect(process.env.URLDB)
    .then(() => console.log("base de datos conectada 🤟🔥: ", process.env.URLDB)
    ).catch((error) => {
      console.log("Conexion fallida:", error)
    });
}

export default connectMongoDB
