import React from "react";
import { Grid, Column, AspectRatio } from "@carbon/react";
import "./_image-block.scss";

const ImageBlock = (props) => {
	let contentLeft;
	let contentRight;

	if (props.layout=="left") {
		contentLeft = (
			<Column lg={8} md={4} sm={4} className="content-item">
					{props.children}
			</Column>
		)
		contentRight = (
			<Column lg={{span: 6, offset: 9}} md={4} sm={4} className="content-item">
				{props.copy}
			</Column>
		)
	} else if (props.layout=="right") {
		contentLeft = 
			(
				<Column className="content-item" lg={{span: 6, offset: 2}} md={4} sm={4}>
					{props.copy}
				</Column>
			)
		contentRight = (
			<Column lg={8} md={4} sm={4} className="content-item">
					{props.children}
			</Column>
		)
	} else if (props.layout=="feature") {
		contentLeft = 
			(
				<Column lg={{span: 14, offset: 1}} md={8} sm={4} className="content-item">
						{props.children}
				</Column>
			)
	}

	return (
		<Grid className="image-block">{contentLeft}{contentRight}</Grid>
	);
};

export default ImageBlock;

