import React, { useRef, HTMLProps, useState } from "react"; // Import HTMLProps

enum WalletType {
	public = 0,
	private = 1,
}

const Wallet = () => {
	const [activeTabs, setActiveTabs] = useState(WalletType.public);

	const clickTab = (select: number) => {
		if (select !== activeTabs) {
			setActiveTabs(select);
		}
	};
	return (
		<div className="w-full h-screen bg-gradient-to-r from-pink-500 to-slate-900 grid grid-rows-6">
			<div className="row-span-2">01</div>
			<div className="row-span-4 bg-stone-200 rounded-t-lg gap-4">
				<div className="text-sm font-medium text-center text-gray-500">
					<div className="flex flex-wrap -mb-px grid grid-cols-2">
						<div
							className={
								"m-2 inline-block p-4 rounded-t-lg " +
								(activeTabs === WalletType.public
									? "active text-pink-500 border-b-2 border-pink-500"
									: "")
							}
							onClick={() => clickTab(WalletType.public)}
						>
							Public Wallet
						</div>
						<div
							className={
								"m-2 inline-block p-4 rounded-t-lg" +
								(activeTabs === WalletType.private
									? "active text-violet-500 border-b-2 border-violet-500"
									: "")
							}
							onClick={() => clickTab(WalletType.private)}
						>
							Private Wallet
						</div>
					</div>
				</div>
				<div>02</div>
			</div>
		</div>
	);
};

export default Wallet;
