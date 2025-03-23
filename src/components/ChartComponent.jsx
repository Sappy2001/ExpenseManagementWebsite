import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
	plugins,
} from "chart.js";

//setting up for rendering chart components
ChartJS.register(
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend,
	PointElement,
	LineElement
);

const ChartComponent = () => {
	const [transactions, setTransactions] = useState([]);
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
	useEffect(() => {
		getTransactions();
	}, []);
	//create all unique dates
	const uniqueDates = [...new Set(transactions.map((item) => item?.date))];

	//calculate amount for each date (credit,debit) if null then 0 for that date
	const getAmountForEachDate = (date, type) => {
		const transaction = transactions.find(
			(item) => item.date === date && item.type === type
		);
		return transaction ? transaction.amount : 0;
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: true,
				position: "top",
			},
			title: {
				display: true,
				text: "Transaction Overview",
				font: { size: 18 },
				color: "white",
			},
		},
		scales: {
			x: {
				title: {
					display: true,
					text: "Date",
					font: { size: 14 },
					color: "white",
				},
				border: { color: "white" },
			},
			y: {
				title: {
					display: true,
					text: "Amount ($)",
					font: { size: 14 },
					color: "white",
				},
				beginAtZero: true,
				border: { color: "white" },
			},
		},
	};
	const lineChartData = {
		labels: uniqueDates,
		datasets: [
			{
				label: "credit",
				data: transactions.map((item) =>
					getAmountForEachDate(item?.date, "credit")
				),
				borderColor: "green",
				tension: 0.3,
			},
			{
				label: "debit",
				data: transactions.map((item) =>
					getAmountForEachDate(item?.date, "debit")
				),
				borderColor: "red",
				tension: 0.3,
			},
		],
	};
	return (
		<div className="m-2 relative h-[50vh] w-full justify-center max-h-[400px]">
			<Line options={options} data={lineChartData} />
		</div>
	);
};

export default ChartComponent;
