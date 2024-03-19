import React, { useRef, HTMLProps } from "react"; // Import HTMLProps

const NoPage = () => {
	return (
		<div className={""} onClick={() => console.log("click")}>
			<div></div>
			{"Please go to /wallet , or /monitor"}
		</div>
	);
};

export default NoPage;
