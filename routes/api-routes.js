const router = require("express").Router();
const Workout = require("../models/workouts");

// GET getLastWorkout() from api.js
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// PUT addExercise()
router.put("/api/workouts/:id", ({ body, params }, res) => {
  const workoutId = params.id;

  // function updateWorkout(exercises){
  Workout.findByIdAndUpdate(workoutId, { $push: { exercises: body } })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// POST new workout createWorkout()
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET getWorkoutsInRange()
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
