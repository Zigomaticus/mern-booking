import express from "express";
// Controllers
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create
router.post("/", verifyAdmin, createHotel);

// Update
router.put("/:id", verifyAdmin, updateHotel);

// Delete
router.delete("/:id", verifyAdmin, deleteHotel);

// Get one
router.get("/:id", getHotel);

// Get all
router.get("/", getAllHotels);
router.get("/countByCity", getAllHotels);
router.get("/countByType", getAllHotels);

export default router;
