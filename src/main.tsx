import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Products } from "./routes/products.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/products" element={<Products />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
