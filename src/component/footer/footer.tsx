import React from 'react';
import { RiGooglePlayFill, RiStarSFill } from "react-icons/ri";
import "./footer.scss";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='res-pt6 res-pb6 white-color'>
            <section className='container'>
                <div className='row'>

                    <div className="col-sm-12 col-md-3 col-lg-3 mb-6 flex flex-col gap-8">
                        <div className="flex items-center justify-start gap-2" style={{ width: '230px' }}>

                            <img src="/logo3.png" style={{ width: '100%', maxHeight: '100%' }} alt="" className="" />
                            {/* <div className='text-center leading-4'>
                                <h5 className='' style={{ margin: '0!important' }}>FLASH</h5>
                                <span style={{ fontSize: '10px' }}>
                                    <span className='primary-color'>AU</span>DIT
                                </span>
                            </div> */}
                        </div>
                        <p className="grey-color">
                            Senior Fullstack & Blockchain Developer, The Acapulco, Mexico.
                        </p>
                    </div>


                    <div className="col-sm-12 col-md-3 col-lg-2 mb-6">
                        <h5 className="">Contact</h5>
                        <br />
                        <h6 className="">
                            <a href="https://twitter.com/Flash_Techno_Of" target={'_blank'} className="">Twitter</a>
                        </h6>
                        <h6 className="">
                            <a href="https://t.me/flashtokenenglish" target={'_blank'} className="">Telegram</a>
                        </h6>
                        <h6 className="">
                            <a href="https://instagram.com/flash_token_off" target={'_blank'} className="">Facebook</a>
                        </h6>
                        <h6 className="">
                            <a href="https://www.facebook.com/flashtechnologiesoff" target={'_blank'} className="">Instagram</a>
                        </h6>
                        <h6 className="">
                            <a href="https://github.com/FlashTechnologiesOff" target={'_blank'} className="">GitHub</a>
                        </h6>
                    </div>

                    <div className="col-sm-12 col-md-3 col-lg-3 mb-6">
                        <h5 className="">Join Our Newsletter</h5>
                        <br />
                        <div className='justify-s gap20 w10 relative'>
                            <input className='email-input flex1' type="input" placeholder='Your email address' />
                            <button className='btn submit-btn'>Submit</button>
                        </div>
                        <br />
                        <p>
                            Will send you weekly updates for your better
                            finance management.
                        </p>
                    </div>
                </div>
                <div className='res-mt3' style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}></div>
                <div className="mt-4 text-center">
                    <h6 className="grey-color">
                        ©2022 Pedro Diaz
                    </h6>
                </div>
            </section>
        </footer>
    )
};

export default Footer; 