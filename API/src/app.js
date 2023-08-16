import express from "express";
import morgan from "morgan";
import cors from "cors";
// routes
import languageRoutes from "./routes/language.routes"

const app = express();

// settings

app.set("port",5000);

// midelware

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// route
app.use("/api",languageRoutes);

export default app;