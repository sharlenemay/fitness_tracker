const router = require("express").Router();
const Workout = require("../models/workouts");
const { db } = require("../models/workouts");

// GET getLastWorkout() from api.js
router.get("/api/workouts" , (req, res) => {
    db.Workout.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err)
    });
});

// PUT addExercise()
router.put("/api/workouts/:id", (body, res) => {
    const workoutId = body.params.id;
    let savedWorkouts = [];
    Workout.find({_id: workoutId})
    .then (dbWorkout => {
        console.log("*********dbWorkout*******", dbWorkout);
        savedWorkouts = dbWorkout[0].exercises;
        res.json(dbWorkout[0].exercises);
        let allWorkouts = [...savedWorkouts, body]
        console.log("******* allWorkouts *******", allWorkouts);
        updateWorkout(allWorkouts);
    })
    .catch(err => {
        res.json(err);
    });

    function updateWorkout(exercises){
        db.Workout.findByIdandUpdate(workoutId, {exercises: exercises}, function(err, data) {
            if (err){
                console.log(err)
            }
        })
    }
});

// POST new workout createWorkout()
router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err)
    });
});

// GET getWorkoutsInRange()
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err)
    });
});

module.exports = router;