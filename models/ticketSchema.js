import mongoose from "mongoose";
const Schema = mongoose.Schema;
//ticket schema
const ticketSchema = new Schema({
  uid: {
    type: String,
    required: true,
  },
  tickets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight",
    },
  ],
});

export default mongoose.model("Ticket", ticketSchema);
