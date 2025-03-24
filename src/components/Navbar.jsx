import { useEffect, useState } from "react";
import FormComponent from "./FormComponent";
import { DrawerComponent } from "./DrawerComponent";
import { Link, useNavigate } from "react-router-dom";
import Auth from "./db/Auth";
const Navbar = ({ setAuthCheck }) => {
	const [open, setOpen] = useState(false);
	const content = "Enter Login Credentials";
	const [user, setUser] = useState("");
	const navigate = useNavigate();
	useEffect(() => {
		const fetchUser = () => {
			const storedUser = localStorage.getItem("user");
			console.log("Fetched user:", storedUser);
			setUser(storedUser);
			setAuthCheck(storedUser);
			if (storedUser) setOpen(false);
		};

		fetchUser();

		window.addEventListener("userUpdated", fetchUser);

		return () => {
			window.removeEventListener("userUpdated", fetchUser);
		};
	}, [user]);
	useEffect(() => {
		if (!user) {
			console.log("triigered");
			navigate("/");
		}
	}, [user, navigate]);

	return (
		<nav className="flex flex-col md:flex-row w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-gray-700">
			<div className="flex items-center gap-2">
				<h1 className="text-base font-bold md:text-2xl text-transparent bg-gradient-to-br from-violet-500 to-pink-300 bg-clip-text font-mono">
					Expenza
				</h1>
			</div>

			<button
				className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-white dark:hover:bg-gray-200"
				onClick={() => {
					if (!user) setOpen(true);
					else {
						localStorage.removeItem("user");
						console.log("Logout Successful");
						setUser("");
					}
				}}
			>
				{" "}
				{user ? "Logout" : "Login"}
			</button>
			<DrawerComponent text={content} open={open} setOpen={setOpen}>
				<Auth />
				{/* <FormComponent /> */}
			</DrawerComponent>
		</nav>
	);
};

export default Navbar;
