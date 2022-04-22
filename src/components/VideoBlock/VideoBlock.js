import React from "react";
import { Grid, Column } from "@carbon/react";
import Inverse from "../Inverse";
import "./_video-block.scss";

const VideoBlock = (props) => {
	if (props.layout=="right") {
		return (
			<Grid className="video-block">
				<Column 
					className="content-item"
					lg={{span: 6, offset: 2}} md={4} sm={4}
				>
					{props.copy}
				</Column>
				<Column className="content-item" lg={8} md={4} sm={4}>
					<div className="video-container">
						<iframe 
							src={props.src}
							frameBorder="0" 
							allow="autoplay; fullscreen; picture-in-picture" 
							allowFullScreen>
						</iframe>
					</div>
				</Column>
			</Grid>
		);
	} else {
		return (
			<Grid className="video-block">
				<Column className="content-item"
					lg={{span: 14, offset: 1}} md={8} sm={4}
				>
					<div className="video-container">
						<iframe 
							src={props.src}
							frameBorder="0" 
							allow="autoplay; fullscreen; picture-in-picture" 
							allowFullScreen>
						</iframe>
					</div>
				</Column>
			</Grid>
		);
	};
};

export default VideoBlock;
