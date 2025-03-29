import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerComponent({ children, open, setOpen, text }) {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild></DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						{text ? <DialogTitle>{text}</DialogTitle> : <></>}
					</DialogHeader>
					{children}
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild></DrawerTrigger>
			<DrawerContent>
				<DialogHeader>
					<DialogTitle>{text ? text : "Add Your Card"}</DialogTitle>
					{!text ? (
						<DialogDescription>
							Enter your card details to track savings and expenses
						</DialogDescription>
					) : (
						<></>
					)}
				</DialogHeader>
				{children}
				<DrawerFooter className="pt-2">
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
