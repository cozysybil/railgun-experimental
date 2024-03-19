import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ethers } from "ethers";
import Wallet from "./view/wallet";
import Monitor from "./view/monitor";
import NoPage from "./view/nopage";

async function initializeApp() {
	// Check if MetaMask is installed
	if (typeof window.ethereum !== "undefined") {
		try {
			// Request user's permission to connect
			await window.ethereum.request({ method: "eth_requestAccounts" });
		} catch (error) {
			console.error("Error connecting to MetaMask:", error);
		}
	} else {
		console.log("MetaMask not detected");
	}

	// Render the app
	const root = ReactDOM.createRoot(
		document.getElementById("root") as HTMLElement
	);

	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<NoPage />} />
					<Route path="/old" element={<App />} />
					<Route path="/wallet" element={<Wallet />} />
					<Route path="/monitor" element={<Monitor />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}

initializeApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
