import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import authRouter from "./auth/routes/auth.route.js";
import categoryRouter from "./category/routes/category.route.js";
import productRouter from "./product/routers/product.router.js";
import corsOptions from "./shared/config/cors.config.js";
import connectMongoDB from "./shared/config/mongodb.config.js";
import logger from "./shared/config/winston.config.js";

dotenv.config();

const app = express();

/* MIDDLEWARES */
app.use(express.json());
app.use(express.static('storage'));
app.use(cors(corsOptions))

const ENV = process.env.ENV;
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

/* LOGGER */
app.use((req, _, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

/* RUTAS */
app.use("/api/product", productRouter)
app.use("/api/category", categoryRouter)
app.use("/api/auth", authRouter)
app.get((_, res) => res.status(404).json("404"))

/* BBDD & SERVER */
connectMongoDB()
app.listen(PORT, () => console.log(`Server levantado 🤙 http://${HOST}:${PORT}`));
