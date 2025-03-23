import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import { Home } from "./components/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		// Layout is entrypoint with outlet in it
		<Route path="/" element={<App />}>
			{/* App is in the first default component */}
			<Route index element={<Home />} />
			<Route path="dashboard" element={<Dashboard />} />
		</Route>
	)
);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
