import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slice from "../reducer";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";

const RequestModal = ({ setRequestModal }: any) => {
	const global = useSelector((state: any) => state);
	const dispatch = useDispatch();
	const update = (payload: { [key: string]: any }) => {
		dispatch(Slice.actions.update(payload));
	};

	const [tokenAudit, setTokenAudit] = useState<boolean>(false);
	const [solidityDev, setSolidityDev] = useState<boolean>(false);
	const [NFTAudit, setNFTAudit] = useState<boolean>(false);
	const [contractTest, setContractTest] = useState<boolean>(false);
	const [centralized, setCentralized] = useState<boolean>(false);
	const [tokenAudit2, setTokenAudit2] = useState<boolean>(false);

	const [binanceChain, setBinanceChain] = useState<boolean>(false);
	const [ethereumChain, setEthereumChain] = useState<boolean>(false);
	const [cronosChain, setCronosChain] = useState<boolean>(false);
	const [fantomChain, setFantomChain] = useState<boolean>(false);
	const [polygonChain, setPolygonChain] = useState<boolean>(false);
	const [avalanceChain, setAvalanceChain] = useState<boolean>(false);
	const [otherChain, setOtherChain] = useState<boolean>(false);

	const [createNFT, setCreateNFT] = useState<boolean>(false);
	const [design, setDesign] = useState<boolean>(false);

	const [height, setHeight] = useState<number>(0);
	useEffect(() => {
		setHeight(window.innerHeight);
	}, [window.innerHeight])

	return (
		<>

			<div className="request-setting-modal-container">
				<div
					className="request-setting-modal-bg"
					onClick={() => setRequestModal(false)}
				></div>
				<div className="request-setting-modal-body" style={{ maxHeight: `${height - 150}px` }}>
					<div className="request-modal-header w-full m-auto py-10 px-10 ">
						<div className="flex items-center justify-between w-full">
							<h4 className="">Request an audit</h4>
							<div onClick={() => setRequestModal(false)} className="p-2 rounded-full border border-gray-600 cursor-pointer">
								<AiOutlineClose fontSize={'25px'} />
							</div>
						</div>
						<div className="w-full grey-color">
							<h6>
								Message on <a target={'_blank'} href="https://twitter.com/Flash_Techno_Of" className="primary-color">Twitter</a> or <a target={'_blank'} href="https://t.me/aladdinbusiness" className="primary-color">Telegram</a> for a faster response!
							</h6>
							<h6 className="">
								( <span className="red-color">*</span> ) Required fields
							</h6>
						</div>
					</div>
					<div className="p-10 w-full modal-content">
						<div className="mt-4 mb-5 w-full flex flex-col justify-start">
							<div className="row flex-1">
								<div className="col-sm-12 col-md-6 mb-6">
									<div className="rect-frame-modal w-full">
										<input onFocus={(e) => { e.target.placeholder = '' }} onBlur={(e) => { e.target.placeholder = "Johan Smith" }} placeholder={'Johan Smith'} type="text" />
										<div className="react-frame-title"> Your Name <span className="red-color">*</span> </div>
									</div>
								</div>
								<div className="col-sm-12 col-md-6 mb-6">
									<div className="rect-frame-modal w-full">
										<input onFocus={(e) => { e.target.placeholder = '' }} onBlur={(e) => { e.target.placeholder = "Type here" }} placeholder={'Type here'} type="text" />
										<div className="react-frame-title"> Your Twitter or Telegram <span className="red-color">*</span> </div>
									</div>
								</div>
							</div>
							<div className="row flex-1">
								<div className="col-sm-12 col-md-12 mb-6">
									<div className="rect-frame-modal w-full">
										<input onFocus={(e) => { e.target.placeholder = '' }} onBlur={(e) => { e.target.placeholder = "Type here" }} placeholder={'Type here'} type="text" />
										<div className="react-frame-title"> Project Name </div>
									</div>
								</div>
							</div>
							<div className="row flex-1">
								<div className="col-sm-12 col-md-6 mb-6">
									<div className="rect-frame-modal w-full">
										<input onFocus={(e) => { e.target.placeholder = '' }} onBlur={(e) => { e.target.placeholder = "Type here" }} placeholder={'Type here'} type="text" />
										<div className="react-frame-title"> Project Telegram </div>
									</div>
								</div>
								<div className="col-sm-12 col-md-6 mb-6">
									<div className="rect-frame-modal w-full">
										<input onFocus={(e) => { e.target.placeholder = '' }} onBlur={(e) => { e.target.placeholder = "Type here" }} placeholder={'Type here'} type="text" />
										<div className="react-frame-title"> Project Email <span className="red-color">*</span> </div>
									</div>
								</div>
							</div>
							<div className="row flex-1">
								<div className="col-sm-12 col-md-6 mb-6">
									<div className="rect-frame-modal w-full">
										<input onFocus={(e) => { e.target.placeholder = '' }} onBlur={(e) => { e.target.placeholder = "Jenny" }} placeholder={'Jenny'} type="text" />
										<div className="react-frame-title"> Project website </div>
									</div>
								</div>
								<div className="col-sm-12 col-md-6 mb-6">
									<div className="rect-frame-modal w-full">
										<div className="flex items-center justify-between">
											<input onFocus={(e) => { e.target.placeholder = '' }} onBlur={(e) => { e.target.placeholder = "Type here" }} placeholder={'Type here'} type="text" />
										</div>
										<div className="react-frame-title"> Project country <span className="red-color">*</span> </div>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-6">
							<div className="row">
								<div className="col-sm-12 col-md-6 mb-4">
									Select the services
									<div onClick={() => setTokenAudit(!tokenAudit)} className="checker-container">
										<img src={`/assets/images/check/${tokenAudit ? 'check' : 'uncheck'}.png`} alt="" className="" />
										<span>Token Contract Audit</span>
									</div>
									<div onClick={() => setSolidityDev(!solidityDev)} className="checker-container">
										<img src={`/assets/images/check/${solidityDev ? 'check' : 'uncheck'}.png`} alt="" className="" />
										<span>Solidity contract development</span>
									</div>
									<div onClick={() => setNFTAudit(!NFTAudit)} className="checker-container">
										<img src={`/assets/images/check/${NFTAudit ? 'check' : 'uncheck'}.png`} alt="" className="" />
										<span>Staking / NFT Contract Audit</span>
									</div>
									<div onClick={() => setContractTest(!contractTest)} className="checker-container">
										<img src={`/assets/images/check/${contractTest ? 'check' : 'uncheck'}.png`} alt="" className="" />
										<span>Smart Contract Test</span>
									</div>
									<div onClick={() => setCentralized(!centralized)} className="checker-container">
										<img src={`/assets/images/check/${centralized ? 'check' : 'uncheck'}.png`} alt="" className="" />
										<span>Listing on a centralized</span>
									</div>
									<div onClick={() => setTokenAudit2(!tokenAudit2)} className="checker-container">
										<img src={`/assets/images/check/${tokenAudit2 ? 'check' : 'uncheck'}.png`} alt="" className="" />
										<span>Token Contract Audit</span>
									</div>
									<br />
									exchange (CEX)
									<br />
									<div onClick={() => setCreateNFT(!createNFT)} className="checker-container">
										<img src={`/assets/images/check/${createNFT ? 'check' : 'uncheck'}.png`} alt="" className="" />
										<span>Creating Nfts</span>
									</div>
									<div onClick={() => setDesign(!design)} className="checker-container">
										<img src={`/assets/images/check/${design ? 'check' : 'uncheck'}.png`} alt="" className="" />
										<span>Marketing / Graphic Design</span>
									</div>
								</div>
								<div className="col-sm-12 col-md-6 mb-4">
									Select the blockchain *
									<div onClick={() => setBinanceChain(!binanceChain)} className="checker-container">
										<img src={`/assets/images/check/${binanceChain ? 'check' : 'uncheck'}.png`} alt="" className="" />
										<span>Binance Smart Chain (BSC)</span>
									</div>
									<div onClick={() => setEthereumChain(!ethereumChain)} className="checker-container">
										<img src={`/assets/images/check/${ethereumChain ? 'check' : 'uncheck'}.png`} alt="" className="" />
										<span>Ethereum Chain (ETH)</span>
									</div>
									<div onClick={() => setCronosChain(!cronosChain)} className="checker-container">
										<img src={`/assets/images/check/${cronosChain ? 'check' : 'uncheck'}.png`} alt="" className="" />
										<span>Cronos Chain (CRONOS)</span>
									</div>
									<div onClick={() => setFantomChain(!fantomChain)} className="checker-container">
										<img src={`/assets/images/check/${fantomChain ? 'check' : 'uncheck'}.png`} alt="" className="" />
										<span>Fantom Opera Chain (FTM)</span>
									</div>
									<div onClick={() => setPolygonChain(!polygonChain)} className="checker-container">
										<img src={`/assets/images/check/${polygonChain ? 'check' : 'uncheck'}.png`} alt="" className="" />
										<span>Polygon Chain (MATIC)</span>
									</div>
									<div onClick={() => setAvalanceChain(!avalanceChain)} className="checker-container">
										<img src={`/assets/images/check/${avalanceChain ? 'check' : 'uncheck'}.png`} alt="" className="" />
										<span>Avalanche Chain (AVAX)</span>
									</div>
									<div onClick={() => setOtherChain(!otherChain)} className="checker-container">
										<img src={`/assets/images/check/${otherChain ? 'check' : 'uncheck'}.png`} alt="" className="" />
										<span>Other blockchains</span>
									</div>
								</div>
							</div>

						</div>
						<div className="mt-6">
							<div className="row flex-1">
								<div className="col-sm-12 col-md-12 mb-6">
									<div className="rect-frame-modal w-full">
										<input onFocus={(e) => { e.target.placeholder = '' }} onBlur={(e) => { e.target.placeholder = "Type here" }} defaultValue={''} type="text" />
										<div className="react-frame-title"> Project Name </div>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-6 w-full flex justify-end">
							<button className="btn primary-bg text-black">
								<span className="px-28">Send</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default RequestModal;
