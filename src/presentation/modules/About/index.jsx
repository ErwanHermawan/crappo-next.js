"use client";

// -- core
import { useEffect, useState } from "react";

// -- states
import useStateHeader from "@states/header";

// -- widgets
import WhyCrappoWidget from "@widgets/WhyCrappoWidget";
import SubsribeWidget from "@widgets/SubscribeWidget";

// -- organisms
import HeroBanner from "@organisms/HeroBanner";
import Numbers from "@organisms/Numbers";

const About = (props) => {
	// data
	const { ssrData } = props;
	const { heroBanner, numbers } = ssrData;

	// heroBanner
	const { data: heroBannerData, error: heroBannerError } = heroBanner;

	// numbers
	const { data: numbersData, error: numbersError } = numbers;

	// set menu
	const { setMenu } = useStateHeader();

	useEffect(() => {
		setMenu("about");
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{/* SSR */}
			<HeroBanner
				ready={true}
				data={heroBannerData?.data}
				title="About"
				error={heroBannerError}
			/>
			<Numbers ready={true} data={numbersData?.data} error={numbersError} />
			{/* SUBMIT */}
			<SubsribeWidget />
		</>
	);
};

export default About;
