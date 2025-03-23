import { useState } from "react";

import { Eye, EyeOff } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import React from "react";

//defining formSchema
const formSchema = z.object({
	username: z.string().min(5, {
		message: "Minimum length is 5",
	}),
	password: z.string().min(8, {
		message: "passowrd length minimum 8 ",
	}),
	email: z
		.string()
		.email({ message: "Invalid email" })
		.regex(/(\.com|\.in|\.co)$/, {
			message: "Invalid email",
		}),
});

const FormComponent = () => {
	const [show, setShow] = useState(false);

	//initializing react-form
	const form = useForm({
		//using zod validation
		resolver: zodResolver(formSchema),
		//initial value
		defaultValues: {
			username: "",
			email: "",
			password: "",
		},
	});

	const onSubmit = () => {};
	return (
		//spreading the useForm obj-(control,state,errors,handleSubmit)
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 m-2">
				<FormField
					// control connects react-form with shadCN
					control={form.control}
					//username from zod forSchema & defaultValues
					name="username"
					//obj form reactFrom to handle input(value,onChange,blur)
					render={({ field }) => (
						//container to wrap
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="enter name" {...field} classname="mt-2" />
							</FormControl>
							{/*FormMessage- displays error message */}
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					// control connects react-form with shadCN
					control={form.control}
					//username from zod forSchema & defaultValues
					name="email"
					//obj form reactFrom to handle input(value,onChange,blur)
					render={({ field }) => (
						//container to wrap
						<FormItem>
							<FormLabel>email</FormLabel>
							<FormControl>
								<Input placeholder="enter email" {...field} classname="mt-2" />
							</FormControl>
							{/*FormMessage- displays error message */}
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					// control connects react-form with shadCN
					control={form.control}
					//username from zod forSchema & defaultValues
					name="password"
					//obj form reactFrom to handle input(value,onChange,blur)
					render={({ field }) => (
						//container to wrap
						<FormItem>
							<FormLabel>Password</FormLabel>
							<div className="flex">
								<FormControl>
									<Input
										type={show ? "text" : "password"}
										placeholder="enter password"
										{...field}
										classname="mt-2"
									/>
								</FormControl>
								<Button
									onClick={() => setShow((prev) => !prev)}
									type="button"
									variant="ghost"
									className="ml-1"
								>
									{show ? <EyeOff /> : <Eye />}
								</Button>
							</div>
							{/*FormMessage- displays error message */}
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" variant="ghost">
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default FormComponent;
