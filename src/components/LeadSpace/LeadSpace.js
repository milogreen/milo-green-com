import React from "react";
import { Grid, Column } from "@carbon/react";
import Button from "../Button";
import "./_lead-space.scss";

const LeadSpace = (props) => {
	let cta;
	if (props.ctaCopy) {
		cta = <Button className="lead-space__cta" href={props.href}>{props.ctaCopy}</Button>
	}
	return (
		<div className="lead-space">
			<div lg={16} md={6} sm={4} className="lead-space__r1">
				<h1>{props.heading}</h1>
			</div>
			<div lg={4} md={4} sm={4} className="lead-space__r2">
				{cta}
			</div>
		</div>
	);
};

export default LeadSpace;
