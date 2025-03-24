import { useState } from "react";

import "./App.css";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import SidebarCompomnent from "./components/SidebarComponent";

function App() {
	const [authCheck, setAuthCheck] = useState(null);
	return (
		<>
			<Navbar setAuthCheck={setAuthCheck} />
			{authCheck ? <SidebarCompomnent /> : <Outlet />}
		</>
	);
}

export default App;
