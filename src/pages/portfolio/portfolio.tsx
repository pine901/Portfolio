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
import "./portfolio.scss";

const Portfolio = () => {
	const global = useSelector((state: any) => state);
	const dispatch = useDispatch();
	const update = (payload: { [key: string]: any }) => {
		dispatch(Slice.actions.update(payload));
	};

	return (
		<Layout>
			<section className="request-section">
				<div className="container mx-auto flex flex-col py-32">
				</div>
			</section>

			<section className="feature-section pt-4 ">
				<div className="container mx-auto flex flex-col py-16 sm:py-32">
					<div className="row m-auto text-center">
						<span className="primary-color">
							Portfolio
						</span>
					</div>
					
				</div>
			</section>

			<FAQ />
		</Layout>
	);
};
export default Portfolio; 
