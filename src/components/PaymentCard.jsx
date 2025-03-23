import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { Button } from "@/components/ui/button";

const PaymentForm = ({ onSave }) => {
	const [state, setState] = useState({
		number: "",
		expiry: "",
		cvc: "",
		name: "",
		focus: "",
	});

	const formatExpiryDate = (value) => {
		// Remove any non-numeric characters
		let cleanValue = value.replace(/\D/g, "");

		if (cleanValue.substring(0, 2) <= 12) {
			// Format as MM/YY
			if (cleanValue.length >= 2) {
				cleanValue =
					cleanValue.substring(0, 2) + "/" + cleanValue.substring(2, 4);
			}
		} else cleanValue = cleanValue.slice(0, 1);
		return cleanValue;
	};

	const formatCVC = (value) => {
		let cleanValue = value.replace(/\D/g, "");
		cleanValue = cleanValue.slice(0, 3);
		return cleanValue;
	};

	const formatNumber = (value) => {
		let cleanValue = value.replace(/\D/g, "");
		cleanValue = cleanValue.slice(0, 16);

		return cleanValue;
	};
	const handleInputChange = ({ target }) => {
		if (target.name === "expiry") {
			target.value = formatExpiryDate(target.value);
		} else if (target.name === "cvc") {
			target.value = formatCVC(target.value);
		} else if (target.name === "number") {
			target.value = formatNumber(target.value);
		}
		setState((prevState) => ({
			...prevState,
			[target.name]: target.value,
		}));
	};

	const handleInputFocus = ({ target }) => {
		setState((prev) => ({
			...prev,
			focus: target.name,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		onSave(state);
		setState({
			number: "",
			expiry: "",
			cvc: "",
			name: "",
			focus: "",
		});
	};

	return (
		<>
			<Cards
				number={state.number}
				expiry={state.expiry}
				cvc={state.cvc}
				name={state.name}
				focused={state.focus}
				className="aspect-1/2"
			/>
			<form
				className=" text-white my-5 flex flex-col md:h-[40vh] justify-around m-2 "
				onSubmit={handleSubmit}
			>
				<input
					className="border-2 border-solid border-blue-400 p-2 rounded-lg"
					type="number"
					name="number"
					placeholder="Card Number"
					value={state.number}
					onChange={handleInputChange}
					onFocus={handleInputFocus}
				/>
				<input
					className="border-2 border-solid border-blue-400 p-2 rounded-lg"
					type="text"
					name="name"
					placeholder="Your Name here"
					required
					value={state.name}
					onChange={handleInputChange}
					onFocus={handleInputFocus}
				/>
				<input
					className="border-2 border-solid border-blue-400 p-2 rounded-lg"
					type="tel"
					name="expiry"
					placeholder="Valid Till (dd/mm)"
					pattern="\d\d/\d\d"
					value={state.expiry}
					required
					onChange={handleInputChange}
					onFocus={handleInputFocus}
				/>
				<input
					className="border-2 border-solid border-blue-400 p-2 rounded-lg"
					type="tel"
					name="cvc"
					placeholder="CVC"
					pattern="\d{3,4}"
					value={state.cvc}
					required
					onChange={handleInputChange}
					onFocus={handleInputFocus}
				/>
				<Button variant="secondary" type="submit">
					Save Card
				</Button>
			</form>
		</>
	);
};

export default PaymentForm;
