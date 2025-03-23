import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormComponent from "../FormComponent";

const Auth = () => {
	return (
		<div>
			<Tabs defaultValue="Login" className="w-[400px]">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="Login">Login</TabsTrigger>
					<TabsTrigger value="Signup">Signup</TabsTrigger>
				</TabsList>
				<TabsContent value="Login" className="my-2">
					<FormComponent type={"Login"} />
				</TabsContent>
				<TabsContent value="Signup" className="my-2">
					<FormComponent type={"Signup"} />
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default Auth;
