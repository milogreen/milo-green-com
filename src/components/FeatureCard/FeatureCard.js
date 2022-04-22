import React from "react";
import {Grid, Column, AspectRatio } from "@carbon/react";
import ProjectCard from "../ProjectCard";
import Cta from "../Cta";
import "./_feature-card.scss";

const FeatureCard = (props) => {
	return (
		<div className="feature-card" src={props.src} style={props.style} href={props.href}>
			<a href={props.href}>
				<Grid className="cds--subgrid--narrow">
					<Column lg={{span: 4, offset: 4}}>
						<AspectRatio ratio="2x1"></AspectRatio>
						<Cta eyebrow={props.eyebrow} heading={props.heading}></Cta>
					</Column>
				</Grid>
			</a>
		</div>
	)
};

export default FeatureCard;
