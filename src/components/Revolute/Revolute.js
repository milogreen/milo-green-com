import React from "react";
import { Grid, Column, AspectRatio } from "@carbon/react";
import Layer from "../Layer";
import ImageBlock from "../ImageBlock";
import VideoBlock from "../VideoBlock";
import SectionHeading from "../SectionHeading";
import LeadSpace from "../LeadSpace";
import TextBlock from "../TextBlock";
import Inverse from "../Inverse";
import "./_revolute.scss";

const Revolute = () => {
	return (
		<div>
			<Inverse>
			<LeadSpace heading="Revolute Coffee"></LeadSpace>
			</Inverse>
			<section className="video-block__container">
				<VideoBlock src="https://player.vimeo.com/video/413791863?h=4c72d9268c"></VideoBlock>
			</section>
			<section className="content-section">
				<SectionHeading>Introduction</SectionHeading>
				<ImageBlock 
					layout="right"
					copy="With so many types of coffeemaker available and a coffee shop on every corner, getting your morning brew should be a smooth operation. Still, every option requires some amount of time and energy and adds one more task to a busy day. The Revolute team believes enjoying a fresh cup of coffee should be a relaxing experience, a moment of peace before work begins. We dreamed of a product that allowed us to simply have coffee: no lever-pulling, button-pushing, or timer-setting required, eliminating as many human steps from the process as possible. We were also determined to keep flavor and sustainability in mind, giving Revolute an advantage over other convenient coffeemakers on the market."
				>
					<img src="https://i.imgur.com/hwyqSAi.png"/>
				</ImageBlock>
			</section>
			<Layer>
				<section>
					<SectionHeading>Approach</SectionHeading>
					<ImageBlock 
						layout="left"
						copy="We began by analyzing our favorite brew method: pour over. It was simple to replicate the dispersion of water over grounds in a conical filter - the steps at the beginning and end of the process were more challenging. In order to close the loop, we realized our product must store and grind coffee beans before brewing and empty the used grounds afterward."
					>
						<img src="https://i.imgur.com/lvUd4o4.png" />
					</ImageBlock>
					<VideoBlock 
						layout="right"
						src= "https://player.vimeo.com/video/423729383?h=2c7a8b73f4"
						copy="Through sketches, physical prototypes, and CAD modeling, we developed a rotating brew cone that moves from its upright position beneath the grinder to an inverted position above the disposal container, where it is rinsed and reset for the next cup."
					></VideoBlock>
				</section>
			</Layer>
			<section>
				<SectionHeading>Solution</SectionHeading>
				<ImageBlock layout="feature">
					<img src="https://i.imgur.com/aRxCo34.png"/>
				</ImageBlock>
				<TextBlock 
					layout="left"
				>
					With the mechanical design and vital features finalized, we designed Revolute's exterior shell. The matte white finish and smooth curves allow the product to mingle with (but not overwhelm) the other items on a kitchen counter, and reinforce our original goal: don't think about it too much, just enjoy the coffee.
				</TextBlock>
				<ImageBlock 
					layout="left"
					copy="The mobile app keeps the user informed of how much water and coffee beans remain, ensuring the machine never misses a brew. It also provides complex scheduling capabilities and settings to fine-tune the flavor of the coffee."
				>
					<img src="https://i.imgur.com/qZ9Z9aS.png" />
				</ImageBlock>
			</section>
		</div>
	);
};

export default Revolute;
