import React from "react";
import "./_layer.scss";

const Layer = (props) => {
	return <div className="layer">{props.children}</div>;
};

export default Layer;
