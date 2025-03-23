import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormComponent from "./FormComponent";

const Auth = () => {
	return (
		<div>
			<Tabs defaultValue="Login" className="w-[400px]">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="Login">Account</TabsTrigger>
					<TabsTrigger value="Signup">Password</TabsTrigger>
				</TabsList>
				<TabsContent value="login">
					<FormComponent />
				</TabsContent>
				<TabsContent value="signup">Signup Component</TabsContent>
			</Tabs>
		</div>
	);
};

export default Auth;
