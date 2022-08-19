// This is crazy 🤯

interface Lift {
  sets: number
  reps: number
  weight: number
}

interface Exercise {
  name: string
  lift: Lift
}

interface Workout {
  name: string
  exercises: Exercise[]
}

export const workout: Workout = {
  name: 'Workout',
  exercises: [
    {
      name: 'Bench Press',
      lift: {
        sets: 3,
        reps: 10,
        weight: 225
      }
    }
  ]
}

export const getExercise = (workout: Workout, exerciseName: string): Exercise | undefined => {
  return workout.exercises.find(exercise => exercise.name === exerciseName)
}
