import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected...");
    await sequelize.sync({ force: true });

    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });P
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
