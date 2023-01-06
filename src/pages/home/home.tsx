import { useState, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { roulettes } from "../../config/global.const";
import { useSelector, useDispatch } from "react-redux";
import Slice from "../../reducer";
import axios from "axios";
import { FaTelegramPlane, FaPlus, FaMinus } from "react-icons/fa";

import FAQ from '../../component/fap/fap';
import Layout from "../../component/layout/layout";
import RequestModal from "../../component/RequestModal";
import "./home.scss";

const Home = () => {
	const global = useSelector((state: any) => state);
	const dispatch = useDispatch();
	const update = (payload: { [key: string]: any }) => {
		dispatch(Slice.actions.update(payload));
	};
	const [requestModal, setRequestModal] = useState(false);

	return (
		<Layout>
			<section className="request-section h-screen">
				<div className="container mx flex flex-col py-16 sm:py-32 text-center sm:text-left">
					<div className="row">
						<div className="col-sm-12 col-md-6 mb-9">
							<h4 className="primary-color">Pedro Diaz</h4>
							<div className="text-2xl">
								<div className="text-5xl">
									Hello!&nbsp;
									<br/>
									<span className="primary-color relative">
										<span className="smart"></span>
										Senior Fullstack & Blockchain developer
									</span>
									<br/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="security-section pt-4 ">
				<div className="container mx-auto flex flex-col py-4 sm:py-32">
					<div className="row m-auto text-center">
						<span className="primary-color">
							Security
						</span>
						<h4 className="">
							Flash Audit Security Architecture
						</h4>
						<h5 className="grey-color">
							Flash Audit combines the most popular chain security services into an attractive package.
						</h5>
					</div>
					<div className="mt-16">
						<div className="row">
							<div className="col-sm-12 col-md-4 mb-4">
								<div className="frame-div-con">
									<div className="security-card frame-div p-7">
										<div className="">
											<img src="/assets/images/security/1contract-audit.png" alt="" />
										</div>
										<div>
											<h5 className="primary-color">
												1. Smart Contract Audit
											</h5>

										</div>
										<div>
											<span className="grey-color">
												A smart contract audit is an in-depth analysis of the solidity code. FlashAudit provides a fast, comprehensive, comprehensive, affordable, and easy-to-understand smart contract security audit. We perform manual, static and dynamic analysis of the solidity source code
											</span>
										</div>
									</div>

								</div>
							</div>
							<div className="col-sm-12 col-md-4 mb-4">
								<div className="frame-div-con">

									<div className="security-card frame-div p-7">
										<img src="/assets/images/security/2contract-dev.png" alt="" />
										<h5 className="primary-color">
											2. Contract development
										</h5>
										<span className="grey-color">
											Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met. Flash Audit can develop and test custom smart contracts, staking and presale contracts, and NFT contracts.
											<br />
											<br />
										</span>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-md-4 mb-4">
								<div className="frame-div-con">
									<div className="security-card frame-div p-7">
										<img src="/assets/images/security/3contract-audit.png" alt="" />
										<h5 className="primary-color">
											3. Smart Contract Audit
										</h5>
										<span className="grey-color">
											The project evaluation is an in-depth analysis of the public project. This analysis is freely accessible. Flash Audit provides an independent evaluation of projects by evaluating vision, team, technology stack, maturity, funding and community.
										</span>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="methodology-section pt-4 ">
				<div className="container mx-auto flex flex-col py-4 sm:py-32 text-center sm:text-left">
					<div className="primary-color">
						<h5>METHODOLOGY</h5>
					</div>
					<h4>Our audit methodology</h4>
					<h5 className="grey-color">
						Flash Token smart contract audit is reliable, fast, secure and cost-effective!
					</h5>

					<div className="row">
						<div className="col-sm-12 col-md-6 mb-6">
							<img src="/assets/images/methodology.png" alt="" />
						</div>
						<div className="col-sm-12 col-md-6 mb-6">
							<div className="flex flex-col gap-5">
								<div className="rect-frame">
									<div className="react-frame-title"> 1 </div>
									<h4 className="primary-color"> Solidity Code Evaluation </h4>
									<h6 className="grey-color">
										Line-by-line review of the project code by our experts. Simulations to identify the vulnerability of malicious code.
									</h6>
								</div>
								<div className="rect-frame">
									<div className="react-frame-title"> 2 </div>
									<h4 className="primary-color"> Recommendation </h4>
									<h6 className="grey-color">
										Identify errors, issues, and security vulnerabilities in the code in order to propose improvements.
									</h6>
								</div>
								<div className="rect-frame">
									<div className="react-frame-title"> 3 </div>
									<h4 className="primary-color"> Validation </h4>
									<h6 className="grey-color">
										Review the audit with improvements and validation of outstanding issues.
									</h6>
								</div>
								<div className="rect-frame">
									<div className="react-frame-title"> 4 </div>
									<h4 className="primary-color"> Reports </h4>
									<h6 className="grey-color">
										Comprehensive and transparent reports on smart contract evaluation. Deployment on our platform (Github & Flash-audit.com)
									</h6>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>

			<section className="request-btn-section">
				<div className="container mx-auto flex flex-col">
					<div className="flex items-center justify-between">
						<div className="py-6 sm:py-24 flex-1">
							<h4 className="text-[20px] sm:text-lg">Request a smart contract audit</h4>
						</div>
						<div className=" bg-transparent py-6 sm:py-24 flex-1">
							<button onClick={() => setRequestModal(true)} className="audit-btn-shadow m-auto btn primary-bg text-black font-bold">
								Request an audit
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="feature-section pt-4 ">
				<div className="container mx-auto flex flex-col py-8 sm:py-32">
					<div className="row m-auto text-center">
						<span className="primary-color">
							FEATURES
						</span>
						<h4 className="">
							Audit features
						</h4>
						<h5 className="grey-color">
							Flash Audit provides the best approach to smart contract security auditing. Our audits are rigorous, affordable, reliable and fast!
						</h5>
					</div>
					<div className="mt-16">
						<div className="row">
							<div className="col-sm-12 col-md-4 mb-4">
								<div className="frame-div-con-30">
									<div className="feature-card frame-div-30 p-7">
										<div className="round-frame-con">
											<div className="round-frame">
												<img src="/assets/images/feature/code.png" alt="" />
											</div>
										</div>
										<h5 className="primary-color">
											Auditing code manually
										</h5>
										<span className="grey-color">
											We discover errors, issues, and security vulnerabilities in the solidity contract code in order to propose improvements.
											<br />
											<br />
											<br />
										</span>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-md-4 mb-4">
								<div className="frame-div-con-30">
									<div className="feature-card frame-div-30 p-7">
										<div className="round-frame-con">
											<div className="round-frame">
												<img src="/assets/images/feature/fast.png" alt="" />
											</div>
										</div>
										<h5 className="primary-color">
											Fast and affordable
										</h5>
										<span className="grey-color">
											Our pricing is time and complexity dependent. A typical audit costs only $399. Faster turnaround time may incur additional charges. We provide an audit period of 5 days, 4 days or 3 days.
										</span>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-md-4 mb-4">
								<div className="frame-div-con-30">
									<div className="feature-card frame-div-30 p-7">
										<div className="round-frame-con">
											<div className="round-frame">
												<img src="/assets/images/feature/solution.png" alt="" />
											</div>
										</div>
										<h5 className="primary-color">
											3. Smart Contract Audit
										</h5>
										<span className="grey-color">
											We discover errors, issues, and security vulnerabilities in the solidity contract code in order to propose improvements. The first revision of the preliminary report is free of charge.
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-16">
						<div className="row">
							<div className="col-12">
								<div className="w-full flash-ecosystem">
									<div className="py-12 text-center">
										<h5 className="primary-color">FLASH TECHNOLOGIES</h5>
										<h2>Get to know the Flash Technologies <br /> ecosystem</h2>
										<button className="btn primary-bg text-black m-auto font-bold mt-4">
											<a href="https://linktr.ee/FlashTechnologies" target={'_blank'}>
												Our social networks
											</a>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-16 sm:mt-32">
						<div className="row row-reverse">
							<div className="col-sm-12 col-md-6">
								<div className="relative">
									<img className="cert-cap" src="/assets/images/cert-cap.png" alt="" />
									<img className="rounded" src="/assets/images/cert.jpg" alt="" />
								</div>
							</div>
							<div className="col-sm-12 col-md-6 flex items-center">
								<div className="m-auto">
									<h5 className="primary-color">CERTIFICATE</h5>
									<h3>Green Certificate</h3>
									<br />
									<h5 className="grey-color">
										Our "green certificate" by Flash Audit guarantees that the project has been audited by the Flash Audit security architecture. So that investors get the right amount of information about the smart contract.
									</h5>
									<br />
									<h5 className="grey-color">
										Contact us to request a smart contract audit with a green certificate to show your transparency.
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


		</Layout>
	);
};
export default Home;
