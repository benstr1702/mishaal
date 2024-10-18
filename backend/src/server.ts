import express from "express";
import { testConnection, sequelize } from "./config/database";
import dotenv from "dotenv";
dotenv.config();

// Initialize Express server
const app = express();
const port = process.env.PORT;
console.log("port", port);

// Middleware
app.use(express.json());

//Test express server
const startServer = async (): Promise<void> => {
	try {
		await testConnection();
		app.listen(port, () => {
			console.log(`Server running at http://localhost:${port}`);
		});
	} catch (error) {
		console.error(
			"Failed to start server:",
			error instanceof Error ? error.message : String(error)
		);
		process.exit(1); // Exit the process with an error code
	}
};

app.get("/", (req, res) => {
	res.send("CANNOT GET /dd");
});

startServer();
