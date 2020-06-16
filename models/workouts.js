const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
  {
    type: {
    type: String,
    trim: true,
    required: "Enter type of workout.",
    },
  name: {
    type: String,
    trim: true,
    },
  distance: {
      type: Number,
    },
  duration: {
    type: Number,
    required: "Enter duration of workout.",
    },
  weight: {
      type: Number
    },
  sets: {
      type: Number
    },
  reps: {
      type: Number
    }
  }
]},
{
  date: {
    type: Date,
    default: Date.now,
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;