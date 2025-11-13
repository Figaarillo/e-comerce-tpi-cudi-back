import dotenv from "dotenv";
import express from "express";
import authRouter from "./auth/routes/auth.route.js";
import categoryRouter from "./category/routes/category.route.js";
import productRouter from "./product/routers/product.router.js";
import connectMongoDB from "./shared/config/mongodb.config.js";

dotenv.config();

const app = express();

/* MIDDLEWARES */
// TODO: añadir cors
app.use(express.json());
app.use(express.static('storage'));


const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

// TODO: añadir morgan / winston



/* RUTAS */
app.use("/api/product", productRouter)
app.use("/api/category", categoryRouter)
app.use("/api/auth", authRouter)
app.get((_, res) => res.status(404).json("404"))

connectMongoDB()
app.listen(PORT, () => console.log(`Server levantado 🤙 http://${HOST}:${PORT}`));
