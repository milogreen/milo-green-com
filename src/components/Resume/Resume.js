import React from "react";
import { Grid, Column } from "@carbon/react";
import SectionHeading from "../SectionHeading";
import ProjectCard from "../ProjectCard";
import Cta from "../Cta";
import ResumeItem from "../ResumeItem";
import Layer from "../Layer";
import FeatureCard from "../FeatureCard";
import "./_resume.scss";

const Resume = () => {
	return (
		<div>
			<Layer>
				<section className="content-section">
					<SectionHeading offset={4}>Education</SectionHeading>
					<div className="content-group">
						<ResumeItem
							company="Purdue University"
							dates="Aug 2016-May 2020"
							position="Aeronautical and Astronautical Engineering"
							description={
								<ul>
									<li>Bachelor of Science</li>
									<li>Recipient of Northrop Grumman S.P.A.C.E. Award for Aerospace Design</li>
								</ul>
							}
							cta={
								<Cta heading="A-10 Warthog Redesign"></Cta>
							}
						></ResumeItem>
						<ResumeItem
							company="Product Faculty"
							dates="Jun-Jul 2021"
							position="Advanced Product Management Course"
							description={
								<ul>
									<li>Seven-week collaborative course on product vision and strategy, discovery and delivery, and growth and optimization</li>
								</ul>
							}
						></ResumeItem>
					</div>
				</section>
			</Layer>
		<section className="content-section">
			<SectionHeading offset={4}>Experience</SectionHeading>
			<div className="content-group">
				<ResumeItem
					company="CoinFlip"
					dates="Mar 2021-Jan 2022"
					position="Product Manager"
					media=<FeatureCard 
						heading="CoinFlip Wallet"
						src="https://i.imgur.com/aRxCo34.png"
						style={{
							backgroundImage: 'url("https://i.imgur.com/ZAfTqcf.png")',
						}}
					></FeatureCard>
					description={
						<ul>
							<li>Maximized the potential of a small team to design, build and test CoinFlip’s first app—a mobile cryptocurrency wallet—in under nine months.</li>
							<li>Balanced user research, stakeholder interests, and industry regulations to produce a requirements document, UX flowchart, UI prototype, and roadmap.</li>
							<li>Ensured quality and timeliness during the development phase by initiating a beta testing program, welcoming feedback, and prioritizing backlog items.</li>
							<li>Synthesized resources across departments to create marketing materials, prepare customer support, and verify compliance before release. Presented a compelling finished product and launch plan to executives.</li>
						</ul>
					}
				></ResumeItem>
				<ResumeItem
					company="TEC Systems"
					dates="May-Aug 2019"
					position="UX/UI Intern"
					description={
						<ul>
							<li>Exceeded clients’ usability and performance expectations by redesigning the user interface of TEC’s building automation system.</li>
							<li>Transformed engineering diagrams and specifications into intuitive visualizations to effectively communicate plans to high-profile customers.</li>
							<li>Facilitated an exchange of knowledge and experience between departments by creating reports based on interviews, field research, and technical documents.</li>
						</ul>
					}
					media=<img src="https://uploads-ssl.webflow.com/5ee3b848add438e19c2a0cc4/5ef0eb8295001847a473bed0_amnh-01-p-1600.png" />
				></ResumeItem>
				<ResumeItem
					company="Purdue Athletics Creative Services"
					dates="Aug 2018-Jan 2019"
					position="Video Production Intern"
					description={
						<ul>
							<li>Created engaging content to be viewed by thousands of social media followers, fans at games, and on ESPN.</li>
							<li>Brainstormed concepts, embraced feedback, and produced quality work on tight deadlines.</li>
						</ul>
					}
				></ResumeItem>
				</div>
		</section>
		</div>
	);
};

export default Resume;
