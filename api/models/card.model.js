import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  front: {
    type: String,
    required: true,
  },
  back: {
    type: String,
    reqired: true,
  },
  category: {
    type: String,
    default: 'General',
  },
  
  
});

const Card = mongoose.model('Card', cardSchema);

export default Card;




