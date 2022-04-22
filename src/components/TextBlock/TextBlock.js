import React from "react";
import { Grid, Column } from "@carbon/react";
import "./_text-block.scss";

const TextBlock = (props) => {
	if (props.layout=="feature") {
		return (
			<Grid className="text-block">
				<Column className="content-item"
					lg={{span: 8, offset: 4}}
					md={{span: 6, offset: 1}}
					sm={4}
				>
					<p className="feature-paragraph">{props.children}</p>
				</Column>
			</Grid>
		);
	} else if (props.layout=="left") {
		return (
			<Grid className="text-block">
				<Column className="content-item"
					lg={{span: 6, offset: 2}}
					md={4}
					sm={4}
				>
					<p>{props.children}</p>
				</Column>
			</Grid>
		)
	} else if (props.layout=="right") {
		return (
			<Grid className="text-block">
				<Column className="content-item"
					lg={{span: 6, offset: 9}}
					md={{span: 4, offset: 4}}
					sm={4}
				>
					<p>{props.children}</p>
				</Column>
			</Grid>
		)
	}
};

export default TextBlock;
