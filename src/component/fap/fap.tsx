import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slice from "../../reducer";
import { FaTelegramPlane, FaPlus, FaMinus } from "react-icons/fa";

import "../../pages/home/home.scss";

const Home = () => {
    const global = useSelector((state: any) => state);
    const dispatch = useDispatch();
    const update = (payload: { [key: string]: any }) => {
        dispatch(Slice.actions.update(payload));
    };

    const [activeIndex1, setActiveIndex1] = useState(null);
    const handleOnClickForleft = (index: any) => {
        if (activeIndex1 === index) {
            setActiveIndex1(null);
        } else {
            setActiveIndex1(index);
        }
    };
    const [activeIndex2, setActiveIndex2] = useState(null);
    const handleOnClickForRight = (index: any) => {
        if (activeIndex2 === index) {
            setActiveIndex2(null);
        } else {
            setActiveIndex2(index);
        }
    };
    const faqContent = [
        {
            id: 1,
            question: 'How do you carry out the audit?',
            answer: 'A smart contract audit is an in-depth analysis of the solidity code. FlashAudit provides a fast,comprehensive,  comprehensive, affordable, and easy-to-understand smart contract security audit. We perform manual, static and dynamic analysis of the solidity source code'
        },
        {
            id: 2,
            question: 'Do you provide the reassessment of the audit?',
            answer: 'A smart contract audit is an in-depth analysis of the solidity code. FlashAudit provides a fast,comprehensive,  comprehensive, affordable, and easy-to-understand smart contract security audit. We perform manual, static and dynamic analysis of the solidity source code'
        },
        {
            id: 3,
            question: 'What other services do you offer?',
            answer: 'A smart contract audit is an in-depth analysis of the solidity code. FlashAudit provides a fast,comprehensive,  comprehensive, affordable, and easy-to-understand smart contract security audit. We perform manual, static and dynamic analysis of the solidity source code'
        },
        {
            id: 4,
            question: 'How much does the smart contract audit cost?',
            answer: 'A smart contract audit is an in-depth analysis of the solidity code. FlashAudit provides a fast,comprehensive,  comprehensive, affordable, and easy-to-understand smart contract security audit. We perform manual, static and dynamic analysis of the solidity source code'
        },
        {
            id: 5,
            question: 'What is Flash Technologies?',
            answer: 'A smart contract audit is an in-depth analysis of the solidity code. FlashAudit provides a fast,comprehensive,  comprehensive, affordable, and easy-to-understand smart contract security audit. We perform manual, static and dynamic analysis of the solidity source code'
        }
    ]

    return (
        <section className="faq-section pt-4">
            <div className="container mx-auto flex  py-12 sm:py-32">
                <div className="m-auto container text-center">
                    <h3>FAQ</h3>
                    <h5 className="">If you can't find the information you're looking for, send us a message </h5>
                    <div className="p-8"></div>
                    <div className="faq">
                        {
                            faqContent.map((data, index) => (
                                <div key={index} className="faq-content py-3 text-white">
                                    <ul className="menu" >
                                        <li>
                                            <div className="faq-title" onClick={() => handleOnClickForleft(index)}>
                                                <a key={index} style={{ color: 'white' }} className={` ${activeIndex1 === index ? 'active' : ''} `} >
                                                    {data.question}
                                                </a>
                                                {
                                                    activeIndex1 === index ?
                                                        <FaMinus />
                                                        :
                                                        <FaPlus />
                                                }
                                            </div>
                                            <ul className={`faq-content ${activeIndex1 === index ? 'content-visable' : ''}`}>
                                                <li>
                                                    {data.answer}
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Home;
