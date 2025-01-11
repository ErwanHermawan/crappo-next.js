// -- utils
import metaTag, { MetaTagDefault } from "@utils/metaTag";
import { SchemaDefault } from "@utils/schema";
import { GoogleAnalytics } from "@next/third-parties/google";

// -- style
import "@styles/app.scss";

// -- metadata
const metadata = metaTag.data();

// -- viewport
const viewport = metaTag.viewport();

// -- RootLayout --
const RootLayout = (props) => {
	const { children } = props;

	return (
		<html lang="en">
			{/* -- THE HEAD -- */}
			<head>
				<MetaTagDefault />
				{<SchemaDefault />}
			</head>
			<GoogleAnalytics gaId="G-MWDGM2FQET" />

			{/* -- THE HEAD -- */}
			<body>{children}</body>
		</html>
	);
};

export { metadata, viewport };
export default RootLayout;
