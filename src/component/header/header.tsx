
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, } from "react-redux";
import { simpleAddress } from "../../util";
import { BsChevronDown, BsChevronCompactUp } from "react-icons/bs";
import { AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { FaTwitter, FaTelegramPlane, FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";
import "./header.scss";
import RequestModal from '../RequestModal';

const Header = () => {
	const G = useSelector((state: any) => state);
	const [requestModal, setRequestModal] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	return (
		<header className='white'>
			<div className='container dis-f'>
				<div className='flex items-center justify-between mobile-just-start flex4 row-reverse-991'>
					<div className='flex items-center justify-between w-full sm:w-0'>
						<div onClick={() => setIsMobile(true)} className='hamburger-icon-container'>
							<AiOutlineMinus className='' style={{ position: 'absolute', top: '0%' }} fontSize={'25px'} />
							<AiOutlineMinus className='' style={{ position: 'absolute', top: '20%' }} fontSize={'25px'} />
							<AiOutlineMinus className='' style={{ position: 'absolute', top: '40%' }} fontSize={'25px'} />
						</div>
						<Link to='/'>
							<div className="flex items-center justify-start gap-2" style={{ width: '230px' }} >
								<h4 style={{ maxHeight: '100%', width: '100%' }}  className="" >
									Pedro Diaz
								</h4>
								{/* <div className='text-center leading-4'>
									<h5 className='' style={{ margin: '0!important' }}>FLASH</h5>
									<span style={{ fontSize: '10px' }}>
										<span className='primary-color'>AU</span>DIT
									</span>
								</div> */}
							</div>
						</Link>
					</div>

					<div className={`${isMobile ? 'hamburger-box' : ''} justify`}>
						<div className={`${isMobile ? 'hamburger-cancel-container' : ''} dis-n`}>
							<AiOutlineClose onClick={() => setIsMobile(false)} className='cu-po hamburger-cancel-btn' fontSize={'35px'} color="white-color" />
						</div>
						<ul className='hamburger justify li-none-style'>
							<li className='hamburger-list'>
								<Link to='/'>Home</Link>
							</li>
							<li className='hamburger-list'>
								<Link to='/portfolio'>Portfolio</Link>
							</li>
							<li className='hamburger-list' onClick={() => setRequestModal(true)}>
								Contact
							</li>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<div className='justify flex2 gap-3 sm:gap-1 mt-10 sm:mt-0'>
								<div className="frame-div-con">
									<div className='hamburger-list frame-div justify' style={{ padding: '7px', width: '40px', height: '40px' }}>
										<a target={'_blank'} href="https://twitter.com/Flash_Techno_Of" className="">
											<FaTwitter />
										</a>
									</div>
								</div>
								<div className="frame-div-con">
									<div className='hamburger-list frame-div justify' style={{ padding: '7px', width: '40px', height: '40px' }}>
										<a target={'_blank'} href="https://t.me/talentdev610" className="">
											<FaTelegramPlane />
										</a>
									</div>
								</div>
								<div className="frame-div-con">
									<div className='hamburger-list frame-div justify' style={{ padding: '7px', width: '40px', height: '40px' }}>
										<a target={'_blank'} href="https://instagram.com/flash_token_off" className="">
											<FaInstagram />
										</a>
									</div>
								</div>
								<div className="frame-div-con">
									<div className='hamburger-list frame-div justify' style={{ padding: '7px', width: '40px', height: '40px' }}>
										<a target={'_blank'} href="https://www.facebook.com/flashtechnologiesoff" className="">
											<FaFacebookF />
										</a>
									</div>
								</div>
								<div className="frame-div-con">
									<div className='hamburger-list frame-div justify' style={{ padding: '7px', width: '40px', height: '40px' }}>
										<a target={'_blank'} href="https://github.com/FlashTechnologiesOff" className="">
											<FaGithub />
										</a>
									</div>
								</div>


							</div>
						</ul>

					</div>
					<div onClick={() => setIsMobile(false)} className={`${isMobile ? 'hamburger-bg' : ''} dis-n`}></div>
				</div>
				<div className='dis-f ai-c flex1'>
					<div className='justify jc-e flex2'>
						<button className=' btn-small w10 gap-2'>
							<div className='justify gap-2'>
								<img className="" width='30px' height='30px' src='/assets/images/flags/united-states.png' alt='' />
								<span>EN</span>
								<BsChevronDown color='white' fontSize="18px" />
							</div>
						</button>
					</div>
				</div>
			</div>
			{requestModal &&
				<RequestModal setRequestModal={setRequestModal} />
			}
		</header>
	);
};

export default Header;
