import express from "express";
const app = express();

// Enabling Cors
import cors from "cors";
app.use(cors());

// Configuring dotenv
import dotenv from "dotenv";
dotenv.config();

// Body Parser
app.use(express.json());

// Routes
import movieRouter from "./routes/movieRoutes.js";
app.use("/api/v1", movieRouter);

async function start() {
  try {
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
      console.log(`Server running at PORT:${PORT}`);
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

start();
