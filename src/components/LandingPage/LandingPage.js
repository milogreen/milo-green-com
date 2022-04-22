import React from "react";
import Inverse from "../Inverse";
import SectionHeading from "../SectionHeading";
import Projects from "../Projects";
import Resume from "../Resume";
import LeadSpace from "../LeadSpace";
import "./_landing-page.scss";

const LandingPage = () => {
	return (
		<div>
			<Inverse>
			<LeadSpace heading="Milo Green" ctaCopy="Get in touch" href="/contact"></LeadSpace>
			</Inverse>
			<Projects />
			<Resume />
		</div>
	);
};

export default LandingPage;
