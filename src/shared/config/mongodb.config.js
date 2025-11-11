const connectMongoDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("base de datos conectada 🤟🔥: ", process.env.URLDB)
    ).catch((error) => {
      console.log("Conexion fallida:", error)
    });
}

export default connectMongoDB
