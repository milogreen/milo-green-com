import React from "react";
import { Grid, Column, Form, Stack, TextInput, TextArea } from "@carbon/react";
import "./_contact.scss";

const Contact = () => {
	return (
		<Form>
			<Stack gap={7}>
				<TextInput
					type="text"
					labelText="First name"
				/>
				<TextInput
					type="text"
					labelText="Last name"
				/>
				<TextInput
					type="text"
					labelText="Email"
				/>
				<TextInput
					type="text"
					labelText="Phone"
				/>
				<TextArea
					type="text"
					labelText="Message"
				/>
			</Stack>
		</Form>
	);
};

export default Contact;
