import express from 'express';
import { getCards } from "../controllers/card.controller.js"

const router = express.Router();

router.get('/cards', getCards)

export default router;