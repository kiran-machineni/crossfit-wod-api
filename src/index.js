const express = require("express")
const apicache = require("apicache")
const app = express()
const cache = apicache.middleware;


const v1WorkoutRouter = require("./v1/routes/workoutRoutes")
const { swaggerDocs: V1SwaggerDocs } = require("./v1/routes/swagger");

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cache("2 minutes"))
app.use("/api/v1/workouts", v1WorkoutRouter)

app.listen(PORT, () => {
	console.log(`API is listening on port ${PORT}`)
	V1SwaggerDocs(app, PORT);
})
