import Card from "../models/card.model.js";
import { errorHandler } from "../utils/error.js";

// Get all cards
export const getCards = async (req, res, next) => {
  try {
    const cards = await Card.findOne();
    res.json(cards);
  } catch (error) {
    next(error);
  }
};

// Create new card
export const createCard = async (req, res, next) => {
  const { front, back, category } = req.body;
  const newCard = new Card({ front, back, category });
  try {
    await newCard.validate();
    const savedCard = await newCard.save();
    if (!savedCard) return next(errorHandler(404, "Card not found"));
    res.status(201).json(savedCard);
  } catch (error) {
    next(error);
  }
};

// Delete card by ID
export const deleteCard = async (req, res, next) => {
  const cardId = req.params.id;
  try {
    const card = await Card.findByIdAndDelete(cardId);
    if (!card) return next(errorHandler(404, "Card not found!"));  
    res.json({ message: "Card deleted successfully" });
  } catch (error) {
    next(error);
  }
};


