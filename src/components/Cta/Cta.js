import React from "react";
import { AspectRatio } from "@carbon/react";
import { ArrowRight } from "@carbon/react/icons";
import "./_cta.scss";

const Cta = (props) => {
	let eyebrow;
	if (props.eyebrow) {
		eyebrow=<p className="cta__eyebrow label-02">{props.eyebrow}</p>
	}
	return (
		<div className="cta">
			<a href={props.href}>
				<AspectRatio ratio="2x1" href={props.href}>
					<div className="cta__content">
						{eyebrow}
						<p className="cta__heading">{props.heading}</p>
						<ArrowRight className="cta__icon"/>
					</div>
				</AspectRatio>
			</a>
		</div>
	);
};

export default Cta;
