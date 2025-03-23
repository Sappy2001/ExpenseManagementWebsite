import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { DrawerComponent } from "./DrawerComponent";
import PaymentForm from "./PaymentCard";

export function CarouselComponent() {
	const [open, setOpen] = useState(false);
	const [cardDetails, setCardDetails] = useState(Array.from({ length: 2 }));
	const handleCardDetails = (value) => {
		setCardDetails((prev) => [...prev, value]);
	};
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="md:w-[80vw]"
		>
			<CarouselContent>
				{cardDetails
					.slice()
					.reverse()
					.map((card, index) => (
						<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
							<div className="p-1 mx-[2px]">
								{cardDetails.length > 2 && card ? (
									<Cards
										number={card.number}
										expiry={card.expiry}
										cvc={card.cvc}
										name={card.name}
										className="aspect-1/2"
									/>
								) : (
									<Card
										onClick={() => {
											setOpen(true);
										}}
									>
										<CardContent className="flex aspect-2/1 items-center justify-center p-6 bg-gradient-to-br to-gray-800 rounded-lg">
											<span className="text-3xl font-semibold">+ Add Card</span>
										</CardContent>
									</Card>
								)}
							</div>
						</CarouselItem>
					))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
			<DrawerComponent open={open} setOpen={setOpen}>
				<PaymentForm onSave={handleCardDetails} />
			</DrawerComponent>
		</Carousel>
	);
}
