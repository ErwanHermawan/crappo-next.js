"use client";

// -- core
import { useEffect } from "react";

// -- states
import useStateHeader from "core/states/header";

// -- widgets
import WhyCrappoWidget from "@widgets/WhyCrappoWidget";
import CalculateWidget from "@widgets/CalculateWidget";
import CryptoCurrenciesWidget from "@widgets/CryptoCurrenciesWidget";
import InvestSmartWidget from "@widgets/InvestSmartWidget";
import StatisticsWidget from "@widgets/StatisticsWidget";
import ProfitInvestmentsWidget from "@widgets/ProfitInvestmentsWidget";
import SubsribeWidget from "@widgets/SubscribeWidget";

// -- components
import HeroBanner from "@organisms/HeroBanner";
import Numbers from "@organisms/Numbers";

const Home = (props) => {
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
		setMenu("");
	}, [setMenu]);

	return (
		<>
			{/* SSR */}
			<HeroBanner
				ready={true}
				data={heroBannerData.data}
				error={heroBannerError}
			/>
			<Numbers ready={true} data={numbersData.data} error={numbersError} />
			{/* CSR */}
			<WhyCrappoWidget />
			<CalculateWidget />
			<CryptoCurrenciesWidget />
			<InvestSmartWidget />
			<StatisticsWidget />
			<ProfitInvestmentsWidget />
			<SubsribeWidget />
		</>
	);
};

export default Home;
