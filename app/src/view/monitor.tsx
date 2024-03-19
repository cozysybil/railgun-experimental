import React, { useRef, HTMLProps } from "react"; // Import HTMLProps

const Monitor = () => {
	return (
		<div className={""} onClick={() => console.log("click")}>
			<div></div>
			{"Hi"}
		</div>
	);
};

export default Monitor;
