import React from "react";
import { Grid, Column } from "@carbon/react";
import "./_resume-item.scss";

const ResumeItem=(props) => {
	return (
		<Grid className="content-item">
			<Column lg={4} md={8} sm={4}>
				<h5 className="company">{props.company}</h5>
				<p className="dates">{props.dates}</p>
			</Column>
			<Column lg={8} md={6} sm={4}>
				<h3 className="position">{props.position}</h3>
				<div>{props.media}</div>
				{props.description}
			</Column>
			<Column lg={{span:4, offset:4}} md={4} sm={2}>
				{props.cta}
			</Column>
		</Grid>
	);
};

export default ResumeItem;
