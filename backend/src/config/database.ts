import test from "node:test";
import { Sequelize } from "sequelize";

// Create a new instance of Sequelize
const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./mishaal.sqlite",
});

const testConnection = async (): Promise<void> => {
	try {
		sequelize.authenticate();
		console.log("Database Connection established successfully :)");
	} catch (error) {
		console.log("There was an Error connecting to Database :( ", error);
	}
};

export { sequelize, testConnection };
