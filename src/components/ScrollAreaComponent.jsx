import { useEffect, useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { DrawerComponent } from "./DrawerComponent";
import Auth from "./db/Auth";
import TransactionComponent from "./ui/TransactionComponent";
export default function ScrollAreaComponent() {
	const [transactions, setTransactions] = useState([]);
	useEffect(() => {
		getTransactions();
	}, []);
	const [open, setOpen] = useState(false);
	const content = "Enter Transaction Details";
	async function getTransactions() {
		try {
			const response = await fetch(
				"https://mocki.io/v1/d7596265-640e-4661-b5be-ba375b57badd"
			);
			if (!response.ok) throw new Error("Respnse Status:" + response.status);
			const json = await response.json();
			console.log(json);
			setTransactions(json);
		} catch (err) {
			console.log("Error occured " + err);
		}
	}
	const addTransaction = (value) => {
		setTransactions((prev) => [value, ...prev]);
	};
	useEffect(() => {
		console.log("Updated transactions:", transactions);
	}, [transactions]);

	return (
		<ScrollArea className="  w-full rounded-md border p-2 px-4 md:h-80 md:max-w-[40%]">
			<div className="flex justify-between items-center my-2">
				<h4 className=" text-xl font-medium leading-none m-3 ">Transactions</h4>
				<Button
					variant="outline"
					className="!border-blue-300 !border-2"
					onClick={() => setOpen(true)}
				>
					+
				</Button>
			</div>
			{transactions?.map((item) => (
				<>
					<div
						key={item?.id}
						className="text-sm !bg-blue-950 py-2 px-4 hover:scale-105 transition-all duration-300 hover:!bg-blue-600  hover:!shadow-lg rounded-sm justify-between  items-center flex"
					>
						<div className="flex flex-col">
							<span className="font-semibold">{item?.description}</span>
							<span className="text-sm text-gray-400">{item?.date}</span>
						</div>
						<div
							className={
								item?.type === "credit" ? "text-green-400" : "text-red-500"
							}
						>{`${item?.type === "credit" ? "+" : "-"} ${item?.amount}`}</div>
					</div>
					<Separator className="my-1" />
				</>
			))}
			<DrawerComponent text={content} open={open} setOpen={setOpen}>
				<TransactionComponent
					setOpen={setOpen}
					addTransaction={addTransaction}
				/>
			</DrawerComponent>
		</ScrollArea>
	);
}
