import React from "react";

import { Grid, Column, AspectRatio, ClickableTile } from "@carbon/react";
import { ArrowRight } from "@carbon/react/icons";
import Layer from "../Layer";
import "./_project-card.scss";

const ProjectCard = (props) => {
	let appearance;
	let projectCardBase=(
		<AspectRatio className="project-card__container" ratio="2x1">
			<div className="project-card">
				<ClickableTile href={props.href}>
					<div className="project-card__copy">
						<h5 className="project-card__heading">{props.heading}</h5>	
						<ArrowRight className="project-card__icon"></ArrowRight>
					</div>
				</ClickableTile>
			</div>
		</AspectRatio>
	);
	if (props.appearance=="on-layer") {
		return <Layer>{projectCardBase}</Layer>;
	} else {
		return projectCardBase;
	};
};

export default ProjectCard;
