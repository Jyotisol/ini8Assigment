import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import route from "./routes/userRoute.js";




dotenv.config();
const app = express();

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(URL).then(() =>{
  console.log("MongoDB connected");

  app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
  })
  
}).catch((error) => console.error("MongoDB connection error:", error));

// // CRUD Routes
app.use("/api", route);


// GET all users
// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//     console.log(users)
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// GET a specific user
// app.get("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// POST create a new user
// app.post("/users", async (req, res) => {
//   const { name, email, dob } = req.body;
//   try {
//     const newUser = new User({ name, email, dob });
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// PUT update an existing user
// app.put("/users/:id", async (req, res) => {
//   const { name, email, dob } = req.body;
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { name, email, dob },
//       { new: true, runValidators: true }
//     );
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.json(user);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// DELETE a user
// app.delete("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.listen(PORT, ()=>{
//       console.log(`Server is running on port: ${PORT}`);
//     })



