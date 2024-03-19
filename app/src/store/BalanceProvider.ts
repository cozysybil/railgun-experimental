export {};
// import React, {
// 	createContext,
// 	useReducer,
// 	useContext,
// 	Dispatch,
// 	ReactNode,
// 	SetStateAction,
// 	useState,
// } from "react";

// // Define types for your state
// interface GlobalState {
// 	qAlice: string;
// 	daiAlice: string;
// 	zkQAlice: string;
// 	zkDaiAlice: string;
// 	qBob: string;
// 	daiBob: string;
// 	zkQBob: string;
// 	zkDaiBob: string;
// 	qTreasury: string;
// 	daiTreasury: string;
// 	qPool: string;
// 	daiPool: string;
// }

// // Define the actions that can be performed on the state
// type Action =
// 	| { type: "SET_Q_ALICE"; payload: string }
// 	| { type: "SET_DAI_ALICE"; payload: string }
// 	| { type: "SET_ZKQ_ALICE"; payload: string }
// 	| { type: "SET_ZKDAI_ALICE"; payload: string }
// 	| { type: "SET_Q_BOB"; payload: string }
// 	| { type: "SET_DAI_BOB"; payload: string }
// 	| { type: "SET_ZKQ_BOB"; payload: string }
// 	| { type: "SET_ZKDAI_BOB"; payload: string }
// 	| { type: "SET_Q_TREASURY"; payload: string }
// 	| { type: "SET_DAI_TREASURY"; payload: string }
// 	| { type: "SET_Q_POOL"; payload: string }
// 	| { type: "SET_DAI_POOL"; payload: string };

// // Define initial state
// const initialState: GlobalState = {
// 	qAlice: "",
// 	daiAlice: "",
// 	zkQAlice: "",
// 	zkDaiAlice: "",
// 	qBob: "",
// 	daiBob: "",
// 	zkQBob: "",
// 	zkDaiBob: "",
// 	qTreasury: "",
// 	daiTreasury: "",
// 	qPool: "",
// 	daiPool: "",
// };

// // Define reducer function
// function globalStateReducer(state: GlobalState, action: Action): GlobalState {
// 	switch (action.type) {
// 		case "SET_Q_ALICE":
// 			return { ...state, qAlice: action.payload };
// 		case "SET_DAI_ALICE":
// 			return { ...state, daiAlice: action.payload };
// 		case "SET_ZKQ_ALICE":
// 			return { ...state, zkQAlice: action.payload };
// 		case "SET_ZKDAI_ALICE":
// 			return { ...state, zkDaiAlice: action.payload };
// 		case "SET_Q_BOB":
// 			return { ...state, qBob: action.payload };
// 		case "SET_DAI_BOB":
// 			return { ...state, daiBob: action.payload };
// 		case "SET_ZKQ_BOB":
// 			return { ...state, zkQBob: action.payload };
// 		case "SET_ZKDAI_BOB":
// 			return { ...state, zkDaiBob: action.payload };
// 		case "SET_Q_TREASURY":
// 			return { ...state, qTreasury: action.payload };
// 		case "SET_DAI_TREASURY":
// 			return { ...state, daiTreasury: action.payload };
// 		case "SET_Q_POOL":
// 			return { ...state, qPool: action.payload };
// 		case "SET_DAI_POOL":
// 			return { ...state, daiPool: action.payload };
// 		default:
// 			return state;
// 	}
// }

// // Define context
// export const GlobalStateContext = createContext<{
// 	state: GlobalState;
// 	dispatch: Dispatch<Action>;
// }>({
// 	state: initialState,
// 	dispatch: () => null,
// });

// export const GlobalStateProvider: React.FC<{ children: React.ReactNode }> = ({
// 	children,
// }) => {
// 	const [state, dispatch] = useReducer(globalStateReducer, initialState);

// 	return (
// 		<GlobalStateContext.Provider value={{ state, dispatch }}>
// 			{children}
// 		</GlobalStateContext.Provider>
// 	);
// };

// // Custom hook to use the balance state and dispatch function
// export const useGlobalState = () => {
// 	const context = useContext(GlobalStateContext);
// 	if (!context) {
// 		throw new Error("useGlobalState must be used within a GlobalStateProvider");
// 	}
// 	return context;
// };
