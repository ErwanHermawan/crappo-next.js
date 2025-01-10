// -- utils
import metaTag from "@utils/metaTag";
import schema from "@utils/schema";

// -- model
import heroBannerModel from "@models/heroBanner";
import numbersModel from "@models/numbers";

// -- modules
import Home from "@modules/Home";

// -- metadata
const metadata = metaTag.dynamic();

// -- schemadata
const schemadata = schema.dynamic();

// ==================
// HomePage
// ==================

const HomePage = async () => {
	const heroBanner = await heroBannerModel.list();
	const numbers = await numbersModel.list();

	const props = {
		ssrData: { heroBanner, numbers },
	};

	return <Home {...props} />;
};

export { metadata, schemadata };
export default HomePage;
