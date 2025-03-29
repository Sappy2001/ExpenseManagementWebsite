import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TransactionComponent({ setOpen, addTransaction }) {
	const [formData, setFormData] = useState({
		id: Date.now(),
		description: "",
		currency: "₹",
		amount: "",
		type: "",
		date: new Date().toISOString().split("T")[0],
	});
	const currencySymbols = {
		dollar: "$",
		inr: "₹",
		ruble: "₽",
		yen: "¥",
		euro: "€",
		pounds: "£",
	};
	const handleChange = (e) => {
		if (e === "debit" || e === "credit") {
			setFormData({ ...formData, ["type"]: e });
		} else setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	function handleCurencyChange(value) {
		setFormData({ ...formData, currency: currencySymbols[value] });
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("formData : ", formData);
		addTransaction(formData);
		setFormData({
			id: Date.now(),
			description: "",
			currency: "₹",
			amount: "",
			type: "",
			date: new Date().toISOString().split("T")[0],
		});
		setOpen((prev) => !prev);
	};
	return (
		<Card className="w-[350px] mt-5 m-auto">
			<CardContent className="mt-2">
				<form onSubmit={handleSubmit}>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="description">Transaction Name</Label>
							<Input
								id="description"
								name="description"
								placeholder="Transaction Description"
								value={formData.description}
								onChange={handleChange}
							/>
						</div>
						<div className="my-2">
							<TabsComponent tabValue={formData.type} onChange={handleChange} />
						</div>
						<div className="relative w-full my-2">
							<Input
								name="amount"
								type="number"
								placeholder="Enter Amount"
								className=" text-center"
								value={formData.amount}
								onChange={handleChange}
							/>
							<div className="absolute left-0 top-1/2 -translate-y-1/2">
								<Select
									onValueChange={(value) => {
										handleCurencyChange(value);
									}}
								>
									<SelectTrigger id="amount" defaultValue={formData.currency}>
										<SelectValue placeholder={formData.currency}>
											{formData.currency}
										</SelectValue>
									</SelectTrigger>
									<SelectContent position="popper">
										<SelectItem value="inr">₹ inr</SelectItem>
										<SelectItem value="dollar">$ dollar</SelectItem>
										<SelectItem value="ruble">₽ ruble</SelectItem>
										<SelectItem value="yen">¥ yen</SelectItem>
										<SelectItem value="euro">€ euro</SelectItem>
										<SelectItem value="pounds">£ pounds</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</div>
					<Button variant="outline" type="submit">
						Add
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}

export function TabsComponent({ tabValue, onChange }) {
	const handleTabChange = (value) => {
		onChange(value);
	};
	return (
		<Tabs
			defaultValue={tabValue}
			onValueChange={handleTabChange}
			className="w-[200px]"
		>
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="credit">credit</TabsTrigger>
				<TabsTrigger value="debit">debit</TabsTrigger>
			</TabsList>
		</Tabs>
	);
}
