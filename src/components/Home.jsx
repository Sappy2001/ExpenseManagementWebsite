"use client";

// import Image from "next/image";
import { motion } from "motion/react";
import { LayoutGrid } from "./LayoutGrid";

export function Home() {
	return (
		<div className="relative mx-auto my-0 flex max-w-[97vw] flex-col items-center justify-center ">
			<div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
				<div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
			</div>
			<div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
				<div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
			</div>
			<div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
				<div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
			</div>
			<div className="px-4 py-10 md:py-20">
				<h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
					{"Get started on your journey to smarter expense management today!"
						.split(" ")
						.map((word, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
								animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
								transition={{
									duration: 0.3,
									delay: index * 0.1,
									ease: "easeInOut",
								}}
								className="mr-2 inline-block"
							>
								{word}
							</motion.span>
						))}
				</h1>
				<motion.p
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={{
						duration: 0.3,
						delay: 0.8,
					}}
					className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
				>
					Introducing A Perfect Expense Management System—your one-stop solution
					for seamless financial planning and tracking. Empower your finances
					with precision, convenience, and ultimate control!
				</motion.p>

				<motion.div
					initial={{
						opacity: 0,
						y: 10,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.3,
						delay: 1.2,
					}}
					className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
				>
					<div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
						<LayoutGrid />
					</div>
				</motion.div>
			</div>
		</div>
	);
}
