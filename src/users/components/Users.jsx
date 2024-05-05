import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
const Users = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({ mode: "all" });
	const onSubmit = () => {
		console.log("Submit");
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className=" items-center  ">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						placeholder="m@example.com"
						{...register("email", {
							required: { value: true, message: "email Required" },
							maxLength: { value: 10, message: "too many characters" },
						})}
					/>
					<p> {errors.email?.message} </p>
				</div>
			</form>
		</>
	);
};

export default Users;
