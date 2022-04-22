import React from "react";
import { Grid, Column, Row } from "@carbon/react";
import Cta from "../Cta";
import FeatureCard from "../FeatureCard";
import SectionHeading from "../SectionHeading";
import "./_projects.scss";

const Projects = () => {
	return (
		<section className="content-section">
		<SectionHeading offset={4}>Featured projects</SectionHeading>
		<Grid>
			<Column lg={{span: 8, offset: 4}} md={8} sm={4}>
				<Grid>
					<Column lg={8} md={8} sm={4}>
						<FeatureCard 
							heading="Vertical Plotter"
							src="https://i.imgur.com/aRxCo34.png"
							style={{
								backgroundImage: 'url("https://i.imgur.com/AeFxXsE.png")',
							}}
							href="/plotter"
						></FeatureCard>
						<FeatureCard 
							heading="Revolute Coffee"
							src="https://i.imgur.com/aRxCo34.png"
							style={{
								backgroundImage: 'url("https://i.imgur.com/aRxCo34.png")',
							}}
							href="/revolute"
						></FeatureCard>
					</Column>
				</Grid>
			</Column>
		</Grid>
		</section>
	);
};

export default Projects;
