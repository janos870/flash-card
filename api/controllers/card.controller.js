import Card from "../models/card.model.js";

// Get all cards
export const getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new card
export const createCard = async (req, res) => {
  const { front, back, category } = req.body;
  const newCard = new Card({ front, back, category });
  try {
    newCard.save();
    res.json(newCard)
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
