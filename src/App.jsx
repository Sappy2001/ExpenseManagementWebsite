import { useState } from "react";

import "./App.css";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import SidebarCompomnent from "./components/SidebarComponent";
import { Outlet } from "react-router";

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}

export default App;
