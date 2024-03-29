import React, { ChangeEvent, useEffect, useState } from "react";
import { ethers } from "ethers";
import Input from "./component/Input";
import "./App.css";
import SubUserSection from "./component/SubUserSection";
import ActionWithAddress from "./component/ActionWithAddress";

// @ts-ignore
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import io from "socket.io-client";
import { getTransactionDetails } from "./services/transaction";
import {
	getWallet1PrivateAdress,
	getWallet2PrivateAdress,
	swap,
	testLogic,
} from "./services/railgun";
import { Currency, getBalance } from "./services/coin";
import { formatEther, parseEther, parseUnits } from "ethers/lib/utils";

interface Wallet {
	railgunAddress: string;
	id: string;
}

const RALGUN_CONTRACT = "0x610178dA211FEF7D417bC0e6FeD39F05609AD788";
const TREASURY = "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318";

function App() {
	const [showMessage, setShowMessage] = useState(false);
	const [viewLoading, setViewLoading] = useState(false);
	const [receipt, setReceipt] = useState("Nothing to show here");
	const [accountAddress, setAccountAddress] = useState<string | null>(null);
	const [private1, setPrivate1] = useState<Wallet | null>({
		railgunAddress:
			"0zk1qyk9nn28x0u3rwn5pknglda68wrn7gw6anjw8gg94mcj6eq5u48tlrv7j6fe3z53lama02nutwtcqc979wnce0qwly4y7w4rls5cq040g7z8eagshxrw5ajy990",
		id: "bee63912e0e4cfa6830ebc8342d3efa9aa1336548c77bf4336c54c17409f2990",
	});
	const [private2, setPrivate2] = useState<Wallet | null>({
		railgunAddress:
			"0zk1qys03pzsamp83ym7856e80jwhey8zs2rxged0pn2g0crnq2wssh6hrv7j6fe3z53llcgr39fw4erjaf8ju69ymydafwmxlgpj25kynejdepgggu8eu94kwsrufh",
		id: "253d960f17ab921d024bf4980c6ff1dfa87a1d36d97f1208712262d36acb33bc",
	});
	const [BobAABalance, setBobAABalance] = useState("0");
	const [BobBBBalance, setBobBBBalance] = useState("0");
	const [BobZkAABalance, setBobZkAABalance] = useState("0");
	const [BobZkBBBalance, setBobZkBBBalance] = useState("0");
	const [zkAABalance, setZkAABalance] = useState("0");
	const [zkBBBalance, setZkBBBalance] = useState("0");
	const [poolAABalance, setPoolAABalance] = useState("0");
	const [poolBBBalance, setPoolBBBalance] = useState("0");
	const [trasuryAABalance, setTreasuryAABalance] = useState("0");
	const [trasuryBBBalance, setTreasuryBBBalance] = useState("0");
	const [componentsUpdate, setComponentsUpdate] = useState(false);
	const [showModal, setShowModal] = React.useState(false);
	const [swapCurrency, setSwapCurrency] = React.useState(Currency.AA);
	const [swapValue, setSwapValue] = React.useState("");
	const [swapBuyValue, setSwapBuyValue] = React.useState("");
	const [txHash, setTxHash] = useState("");
	const [isSwapping, setIsSwapping] = useState(false);

	const handleButtonClick = () => {
		setShowMessage(true);
		setTimeout(() => {
			setShowMessage(false);
		}, 2000);
	};

	useEffect(() => {
		const fetchAccount = async () => {
			setShowMessage(true);

			const address = await getAccount();
			setAccountAddress(address);

			const private1 = await getWallet1PrivateAdress();
			setPrivate1(private1);

			const private2 = await getWallet2PrivateAdress();
			setPrivate2(private2);

			const balance = await getBalance(
				process.env.REACT_APP_B_PUBLIC_KEY || "",
				Currency.AA
			);
			setBobAABalance(balance);

			const bbBalance = await getBalance(
				process.env.REACT_APP_B_PUBLIC_KEY || "",
				Currency.BB
			);
			setBobBBBalance(bbBalance);

			const poolBalance = await getBalance(RALGUN_CONTRACT, Currency.AA);
			setPoolAABalance(poolBalance);
			const poolBBBalance = await getBalance(RALGUN_CONTRACT, Currency.BB);
			setPoolBBBalance(poolBBBalance);

			const trasuryBalance = await getBalance(TREASURY, Currency.AA);
			setTreasuryAABalance(trasuryBalance);
			const trasuryBBBalance = await getBalance(TREASURY, Currency.BB);
			setTreasuryBBBalance(trasuryBBBalance);

			setShowMessage(false);
		};

		fetchAccount();
		setComponentsUpdate(false);
	}, []);

	useEffect(() => {
		const fetchAccount = async () => {
			setShowMessage(true);

			const address = await getAccount();
			setAccountAddress(address);

			const private1 = await getWallet1PrivateAdress();
			setPrivate1(private1);

			const private2 = await getWallet2PrivateAdress();
			setPrivate2(private2);

			const balance = await getBalance(
				process.env.REACT_APP_B_PUBLIC_KEY || "",
				Currency.AA
			);
			setBobAABalance(balance);

			const bbBalance = await getBalance(
				process.env.REACT_APP_B_PUBLIC_KEY || "",
				Currency.BB
			);
			setBobBBBalance(bbBalance);

			const poolBalance = await getBalance(RALGUN_CONTRACT, Currency.AA);
			setPoolAABalance(poolBalance);
			const poolBBBalance = await getBalance(RALGUN_CONTRACT, Currency.BB);
			setPoolBBBalance(poolBBBalance);

			const trasuryBalance = await getBalance(TREASURY, Currency.AA);
			setTreasuryAABalance(trasuryBalance);
			const trasuryBBBalance = await getBalance(TREASURY, Currency.BB);
			setTreasuryBBBalance(trasuryBBBalance);

			setShowMessage(false);
		};

		if (componentsUpdate) {
			fetchAccount();
			setComponentsUpdate(false);
		}
	}, [componentsUpdate]);

	useEffect(() => {
		// connect to WebSocket server
		const newSocket = io("http://localhost:3012", {
			transports: ["websocket"],
		});

		// set up event listeners for incoming messages
		newSocket.on("connect", () => console.log("Connected to WebSocket"));
		newSocket.on("disconnect", () =>
			console.log("Disconnected from WebSocket")
		);
		newSocket.on("newBalanceForYouKa", (data) => {
			// console.log("new data arrived");
			// console.log("event id:" + data?.railgunWalletID);
			// console.log("event amount:" + data?.erc20Amounts[0]?.amount);
			// console.log("private2 id:" + private2?.id);
			// console.log("private1 id:" + private1?.id);

			if (data?.railgunWalletID === private2?.id) {
				if (data.erc20Amounts) {
					for (let index = 0; index < data.erc20Amounts.length; index++) {
						console.log("got zk currency for bob", data.erc20Amounts[index]);
						const tokenAddress = data.erc20Amounts[index].tokenAddress;
						if (tokenAddress.toLowerCase() === Currency.AA.toLowerCase()) {
							setBobZkAABalance(
								ethers.utils.formatEther(data.erc20Amounts[index].amount)
							);
						} else if (
							tokenAddress.toLowerCase() === Currency.BB.toLowerCase()
						) {
							setBobZkBBBalance(
								ethers.utils.formatEther(data.erc20Amounts[index].amount)
							);
						} else {
						}
					}
				}
			}
			if (data?.railgunWalletID === private1?.id) {
				if (data.erc20Amounts) {
					for (let index = 0; index < data.erc20Amounts.length; index++) {
						const tokenAddress: string = data.erc20Amounts[index].tokenAddress;
						if (tokenAddress.toLowerCase() === Currency.AA.toLowerCase()) {
							setZkAABalance(
								ethers.utils.formatEther(data.erc20Amounts[index].amount)
							);
						} else if (
							tokenAddress.toLowerCase() === Currency.BB.toLowerCase()
						) {
							setZkBBBalance(
								ethers.utils.formatEther(data.erc20Amounts[index].amount)
							);
						} else {
						}
					}
				}
			}
		});

		// clean up on unmount
		// return () => {
		//   newSocket.disconnect();
		// };
	}, []);

	const getAccount = async (): Promise<string> => {
		try {
			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			return accounts[0];
		} catch (error) {
			console.error("Error fetching Ethereum account:", error);
			return "0";
		}
	};

	const handleViewTransactionClick = async (txHash: string) => {
		try {
			setViewLoading(true);
			const receipt = await getTransactionDetails(txHash);
			if (receipt.length > 0) {
				setReceipt(receipt);
			} else {
				setReceipt("Transaction not found");
			}
			setViewLoading(false);
		} catch (error) {
			console.error("Error view transaction:", error);
			setViewLoading(false);
		}
	};

	const handleSwapCurrency = (event: any) => {
		setSwapCurrency(event.target.value);
	};

	const handleSwapInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSwapValue(event.target.value);

		const allFee = 0.99500625;
		const inputValue = parseFloat(event.target.value); // Convert to wei

		const someHowBugOrSomethingElse = allFee * inputValue;

		setSwapBuyValue(someHowBugOrSomethingElse.toString()); // TODO: cause of rate 1:1
	};

	return (
		<div className="w-full h-screen bg-slate-900">
			<div className="grid grid-cols-6 grid-rows-6 gap-4 h-full p-5 pt-10">
				<button
					type="submit"
					onClick={handleButtonClick}
					className="absolute top-1 right-5 bg-violet-500 text-white text-sm font-bold py-1 px-3 rounded-full flex items-center"
				>
					<ArrowPathIcon className="w-4 h-4 mr-1" /> Refresh
				</button>
				<button
					type="submit"
					onClick={() => setShowModal(true)}
					className="absolute top-1 right-40 bg-violet-500 text-white text-sm font-bold py-1 px-3 rounded-full flex items-center"
				>
					SWAP
				</button>
				{showModal && (
					<>
						<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
							<div className="relative w-auto my-6 mx-auto max-w-3xl">
								{/*content*/}
								<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-stone-200 outline-none focus:outline-none">
									{/*header*/}
									<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
										<h3 className="text-xl font-semibold">
											Simple swap contract call
										</h3>
										<button
											className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl opacity-5 h-6 w-6 leading-none font-semibold outline-none focus:outline-none"
											onClick={() => setShowModal(false)}
										>
											x
										</button>
									</div>
									{/*body*/}
									<div className="relative p-6 flex-auto">
										<div className="flex items-start gap-2 p-2">
											<p className="text-blueGray-500 text-lg leading-relaxed">
												Pay with
											</p>
											<div className="flex flex-col">
												<select
													className="basis-1/6 text-sm py-2 px-4 rounded"
													onChange={handleSwapCurrency}
												>
													<option value={Currency.AA}>{"zkAA"}</option>
													<option value={Currency.BB}>{"zkBB"}</option>
												</select>
												<p className="text-blueGray-500 text-sm leading-relaxed">
													Balance:{" "}
													{swapCurrency === Currency.AA
														? zkAABalance + " zkAA"
														: zkBBBalance + " zkBB"}
												</p>
											</div>
											<Input
												id={"Swap"}
												placeholder={"Sell amount"}
												type={"text"}
												containerClassName={"grow"}
												required
												value={swapValue}
												onChange={handleSwapInputChange}
											/>
										</div>
										<div className="flex items-start gap-2 p-2">
											<p className="text-blueGray-500 text-lg leading-relaxed">
												You recieve
											</p>
											<div className="flex flex-col">
												<select
													className="basis-1/6 text-sm py-2 px-4 rounded"
													onChange={() => {}}
													disabled={true}
												>
													<option value={Currency.AA}>
														{swapCurrency === Currency.AA ? "zkBB" : "zkAA"}
													</option>
													{/* <option value={Currency.BB}>{"zkBB"}</option> */}
												</select>
												<p className="text-blueGray-500 text-sm leading-relaxed">
													Balance:{" "}
													{swapCurrency === Currency.AA
														? zkBBBalance + " zkBB"
														: zkAABalance + " zkAA"}
												</p>
											</div>
											<Input
												id={"SwapBuy"}
												placeholder={"Buy amount"}
												type={"text"}
												containerClassName={"grow"}
												required
												value={swapBuyValue}
												onChange={() => {}}
												disabled={true}
											/>
										</div>
									</div>
									{/*footer*/}
									<div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
										<button
											className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
											type="button"
											onClick={() => setShowModal(false)}
										>
											Close
										</button>
										<button
											className={
												isSwapping
													? "bg-slate-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
													: "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
											}
											type="button"
											disabled={isSwapping}
											onClick={async () => {
												setIsSwapping(true);
												const receipt = await swap(
													swapCurrency,
													swapCurrency === Currency.AA
														? Currency.BB
														: Currency.AA,
													swapValue,
													private1?.id ||
														"bee63912e0e4cfa6830ebc8342d3efa9aa1336548c77bf4336c54c17409f2990",
													private1?.railgunAddress ||
														"0zk1qyk9nn28x0u3rwn5pknglda68wrn7gw6anjw8gg94mcj6eq5u48tlrv7j6fe3z53lama02nutwtcqc979wnce0qwly4y7w4rls5cq040g7z8eagshxrw5ajy990"
												);
												setTxHash(receipt.transactionHash);
												setComponentsUpdate(true);
												setIsSwapping(false);
											}}
										>
											{isSwapping ? "loading..." : "Confirm"}
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
					</>
				)}
				{showMessage && (
					<div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-300 shadow p-2 rounded w-50">
						Fetching new data ...
					</div>
				)}
				<div className="absolute top-1 left-5 text-2xl font-extrabold flex items-center">
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
						Railgun Lab
					</span>
				</div>
				<div className="col-span-3 row-span-3 bg-zinc-100 rounded flex flex-col p-3 grid grid-cols-4 gap-4 h-full">
					<div className="row-span-2 col-span-4 text-m grid place-items-center">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
							My MetaMask Account
						</span>
					</div>
					{accountAddress && (
						<SubUserSection
							privateAddress={private1?.railgunAddress || ""}
							publicAddress={accountAddress || ""}
							id={private1?.id || ""}
							toPrivateBob={private2?.railgunAddress || ""}
							zkBalance={zkAABalance}
							zkBBBalance={zkBBBalance}
							setComponentsUpdate={setComponentsUpdate}
							setShowMessage={setShowMessage}
							txHash={txHash}
							setTxHash={setTxHash}
						/>
					)}
				</div>
				<div className="col-span-2 row-span-3 bg-zinc-100 rounded flex flex-col p-3 grid grid-cols-4 gap-4 h-full">
					<div className="row-span-2 col-span-4 text-m grid place-items-center">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
							Bob's Account
						</span>
					</div>
					<div className="row-span-6 col-span-2 rounded flex flex-col p-1 gap-1 h-full overflow-auto h-full">
						<div className="basis-1/12 break-words text-m text-center">
							{"Private Wallet"}
						</div>
						<div className="basis-5/12 flex flex-row grid grid-cols-2 gap-2">
							<div className="basis-1/2 flex flex-col h-full">
								<div className="text-sm">{"Address:"}</div>
								<div className="text-stone-400 break-words text-sm">
									{private2?.railgunAddress || ""}
								</div>
							</div>
							<div className="basis-1/2 flex flex-col h-full">
								<div className="text-sm">{"Tokens:"}</div>
								<div className="flex flex-col gap-2">
									<div className="h-10 break-words text-l font-bold border-2 rounded border-stone-200 items-center py-1 px-0">
										{BobZkAABalance + " zkAA"}
									</div>
									<div className="h-10 break-words text-l font-bold border-2 rounded border-stone-200 items-center py-1 px-0">
										{BobZkBBBalance + " zkBB"}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row-span-6 col-span-2 rounded flex flex-col p-1 gap-1 h-full overflow-auto h-full">
						<div className="basis-1/12 break-words text-m text-center">
							{"Public Wallet"}
						</div>
						<div className="basis-5/12 flex flex-row grid grid-cols-2 gap-2">
							<div className="basis-1/2 flex flex-col h-full">
								<div className="text-sm">{"Address:"}</div>
								<div className="text-stone-400 break-words text-sm">
									{process.env.REACT_APP_B_PUBLIC_KEY || ""}
								</div>
							</div>
							<div className="basis-1/2 flex flex-col h-full">
								<div className="text-sm">{"Tokens:"}</div>
								<div className="flex flex-col gap-2">
									<div className="break-words text-l font-bold border-2 rounded border-stone-200 items-center py-1 px-0">
										{BobAABalance + " AA"}
									</div>
									<div className="break-words text-l font-bold border-2 rounded border-stone-200 items-center py-1 px-0">
										{BobBBBalance + " BB"}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-1 row-span-3 flex flex-col grid grid-cols-1 gap-4 h-full">
					<div className="col-span-1 row-span-1 bg-zinc-100 rounded flex flex-col p-1 grid grid-cols-4 gap-1 h-full">
						<div className="row-span-1 col-span-4 text-m grid place-items-center">
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
								Pool's
							</span>
						</div>
						<div className="row-span-4 col-span-4 rounded flex flex-col p-1 gap-2 h-full overflow-auto">
							<div className="basis-2/12 break-words text-xs">
								{"Contract address:"}
								<div className="text-stone-400 break-words text-xs">
									{RALGUN_CONTRACT}
								</div>
							</div>
							<div className="basis-10/12 flex flex-col items-stretch gap-2">
								<div className="text-xs">{"Tokens:"}</div>
								<div className="flex flex-col gap-2">
									<div className="h-10 break-words text-l font-bold border-2 rounded border-stone-200 items-center py-1 px-0">
										{poolAABalance + " AA"}
									</div>
									<div className="h-10 break-words text-l font-bold border-2 rounded border-stone-200 items-center py-1 px-0">
										{poolBBBalance + " BB"}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-1 row-span-1 bg-zinc-100 rounded flex flex-col p-1 grid grid-cols-4 gap-1 h-full">
						<div className="row-span-1 col-span-4 text-m grid place-items-center">
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
								Treasury's
							</span>
						</div>
						<div className="row-span-4 col-span-4 rounded flex flex-col p-1 gap-2 h-full overflow-auto">
							<div className="basis-2/12 break-words text-xs">
								{"Contract address:"}
								<div className="text-stone-400 break-words text-xs">
									{TREASURY}
								</div>
							</div>
							<div className="basis-10/12 flex flex-col items-stretch gap-2">
								<div className="text-xs">{"Tokens:"}</div>
								<div className="flex flex-col gap-2">
									<div className="break-words text-l font-bold border-2 rounded border-stone-200 items-center py-1 px-0">
										{trasuryAABalance + " AA"}
									</div>
									<div className="break-words text-l font-bold border-2 rounded border-stone-200 items-center py-1 px-0">
										{trasuryBBBalance + " BB"}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-6 row-span-3 bg-zinc-100 rounded flex flex-col p-5">
					<div className="basis-1/6 flex items-center">
						<ActionWithAddress
							buttonName={viewLoading ? "looking ..." : "View"}
							buttonAction={(value) => {
								handleViewTransactionClick(value);
							}}
							buttonContainerClassName="basis-1/12 bg-violet-500 text-white text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							buttonDisabled={false}
							inputId="viewTx"
							inputPlaceHolder="Enter transaction you want to view"
							inputType="text"
							inputContainerClassName="grow"
						/>
					</div>
					<div className="basis-5/6 mt-4 bg-gray-200 p-4 rounded overflow-auto">
						{receipt === "Nothing to show here" ? (
							<p className="text-gray-400">{receipt}</p>
						) : (
							<pre className="bg-gray-100 p-4 rounded text-sm">
								{JSON.stringify(JSON.parse(receipt), null, 2)}
							</pre>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
