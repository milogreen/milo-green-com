import React from "react";
import { Grid, Column } from "@carbon/react";
import "./_section-heading.scss";

const SectionHeading = (props) => {
	let offset=2;
	if (props.offset) {
		offset=props.offset
	}
	return (
		<Grid className="section-heading">
			<Column lg={{span: 12, offset: offset}} md={8} sm={4}>
				<h2>{props.children}</h2>
			</Column>
		</Grid>
	);
};

export default SectionHeading;
