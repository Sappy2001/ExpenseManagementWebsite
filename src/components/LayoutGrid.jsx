"use client";
import React from "react";
import { LayoutGridCard } from "./ui/layout-grid";

export function LayoutGrid() {
	return (
		<div className="h-screen py-20 w-full">
			<LayoutGridCard cards={cards} />
		</div>
	);
}

const SkeletonOne = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">
				Customizable Dashboard
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				A Perfect Dashboard for all of your needs
			</p>
		</div>
	);
};

const SkeletonTwo = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">Payements</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Providing payments and security solutions for all your needs end-to-end
			</p>
		</div>
	);
};
const SkeletonThree = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">Savings</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Make sure you save for all of your needs and vacations
			</p>
		</div>
	);
};
const SkeletonFour = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">
				Expense tracker
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				A personalized expense management tool designed for you.
			</p>
		</div>
	);
};

const cards = [
	{
		id: 1,
		content: <SkeletonOne />,
		className: "md:col-span-2",
		thumbnail:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 2,
		content: <SkeletonTwo />,
		className: "col-span-1",
		thumbnail:
			"https://images.unsplash.com/photo-1726137569997-d3f2c20bff3b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 3,
		content: <SkeletonThree />,
		className: "col-span-1",
		thumbnail:
			"https://images.unsplash.com/photo-1633158829556-6ea20ad39b4f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 4,
		content: <SkeletonFour />,
		className: "md:col-span-2",
		thumbnail:
			"https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];
