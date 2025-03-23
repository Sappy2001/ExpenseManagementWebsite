import { useState } from "react";
import FormComponent from "./FormComponent";
import { DrawerComponent } from "./DrawerComponent";
import { Link } from "react-router-dom";
import Auth from "./Auth";
const Navbar = () => {
	const [open, setOpen] = useState(false);
	const content = "Enter Login Credentials";
	return (
		<nav className="flex flex-col md:flex-row w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-gray-700">
			<div className="flex items-center gap-2">
				<h1 className="text-base font-bold md:text-2xl text-transparent bg-gradient-to-br from-violet-500 to-pink-300 bg-clip-text font-mono">
					Expenza
				</h1>
			</div>
			<div className="flex gap-4 justify-around text-purple-600">
				<Link
					to="/"
					className="text-lg text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
				>
					Home
				</Link>
				<Link
					to="/dashboard"
					className="text-lg text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
				>
					Dashboard
				</Link>
			</div>
			<button
				className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-white dark:hover:bg-gray-200"
				onClick={() => {
					setOpen(true);
				}}
			>
				{" "}
				Login
			</button>
			<DrawerComponent text={content} open={open} setOpen={setOpen}>
				<Auth />
			</DrawerComponent>
		</nav>
	);
};

export default Navbar;
