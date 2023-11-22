import express from 'express';
import { getCards, createCard, deleteCard } from "../controllers/card.controller.js"

const router = express.Router();

router.get('/cards', getCards)
router.post('/card', createCard)
router.delete('/card/:id', deleteCard);

export default router;