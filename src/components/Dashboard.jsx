import React from "react";
import { CarouselComponent } from "./CarouselComponent";

import ScrollAreaComponent from "./ScrollAreaComponent.jsx";
import ChartComponent from "./ChartComponent.jsx";

const Dashboard = () => {
	return (
		<div className="flex flex-1 min-h-screen">
			<div className="flex flex-col  w-full gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900 overflow-auto">
				<div className="mx-5 flex justify-center">
					<CarouselComponent />
				</div>

				<div className="flex flex-col md:flex-row justify-center items-center md:justify-between mb-10">
					<ChartComponent />
					<ScrollAreaComponent />
				</div>
			</div>
		</div>
	);
};
export default Dashboard;
