import Express, { json } from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { schema } from "./graphql/schema";
import { createResolvers } from "./graphql/resolvers";
import cors from "cors";

const Server = () => {
	const httpApplication = Express();
	const httpAddress = Number.parseInt(process.env.SERVER_PORT ?? "7000");

	const createMiddleware = () => {
		httpApplication.use(json());
		httpApplication.use(cors());
	};

	const createRoutes = () => {
		httpApplication.all(
			"/graphql",
			createHandler({ schema, rootValue: createResolvers() }),
		);
	};

	const createListner = () => {
		httpApplication.listen(httpAddress, () =>
			console.log(`Server initialized on PORT:${httpAddress}!`),
		);
	};

	return {
		createMiddleware,
		createRoutes,
		createListner,
	};
};

const { createMiddleware, createRoutes, createListner } = Server();

createMiddleware();
createRoutes();
createListner();
