import mongoose from "mongoose";
const {Schema} = mongoose;

const RoomSchema = new mongoose.Schema({
  bookingID: {
    type: Number
  },
  roomNumbers:{
    type: Number,
    required: true,
  },
  title: {
      type: String,
      required: true,
    },
    StartTime: {
      type: Number,
      required: true,
    },
    EndTime: {
      type: Number,
      required: true,
    },
    Duration: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    useremail: {
      type: String,
      required: true,
    },

  },
  { timestamps: true });

export default mongoose.model("Room",RoomSchema)