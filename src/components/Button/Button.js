import React, { Component } from "react";
import "./_button.scss";

class Button extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<button className="btn">
				<a href={this.props.href}>
				{this.props.children}
				</a>
			</button>
		);
	}
}
export default Button;
