import express from "express";
import { Router } from "./Routes/router";
import { pool } from "./DBLogic/DBConfig/DBConfig";
import { PORT } from "./Common/enum/common.enum";
import cors from "cors";

const app = express();
const router = new Router();

// Define middleware to parse incoming request bodies
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define your routes
router.intializeRoutes();
app.get("/health_check",async (req:any, res: any) => {
  res.status(200).json({"message":"ok"})
})
// Use the router object to handle routes
app.use("/", router.router);

// Start listening (using async/await)
async function startServer() {
  try {
    console.log("Attempting to connect to the database...");
    await pool.connect(); // Connect to the database
    console.log("Connected to the database!");

    // Listen for 'connect' event
    pool.on("connect", () => {
      console.log("Connected to PostgreSQL database");
    });

    // Listen for 'error' event
    pool.on("error", (err) => {
      console.error("Error connecting to PostgreSQL database:", err);
    });

    // Listen for 'remove' event
    pool.on("remove", () => {
      console.log("Client removed");
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

startServer();
