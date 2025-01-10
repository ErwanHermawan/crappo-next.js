// -- config
import DefaultSEO from "@configs/SEO";

// -- metaTagDynamic
const metaTagDynamic = (data) => {
	const metadataBase = new URL(
		process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
	);

	return {
		title: data?.page
			? `${data?.page} | ${DefaultSEO.title}`
			: DefaultSEO.title,
		description: data?.page
			? `${data?.page} | ${DefaultSEO.description}`
			: DefaultSEO.description,
		keywords: data?.page
			? `${data?.page} | ${DefaultSEO.keywords}`
			: DefaultSEO.keywords,
		metadataBase,
		alternates: {
			canonical: new URL(
				data?.link ? data?.link : "",
				DefaultSEO.siteURL
			).toString(),
		},
		...(DefaultSEO.openGraph.enable && {
			openGraph: {
				locale: DefaultSEO.openGraph.locale,
				type: DefaultSEO.openGraph.type,
				siteName: DefaultSEO.siteName,
				title: data?.page
					? `${data?.page} | ${DefaultSEO.title}`
					: DefaultSEO.title,
				description: data?.page
					? `${data?.page} | ${DefaultSEO.description}`
					: DefaultSEO.description,
				url: new URL(data?.link || "", metadataBase).toString(),
				images: [
					{
						url: new URL(
							data?.ogImage ? data?.ogImage : DefaultSEO.openGraph.image,
							metadataBase
						).toString(),
						alt: data?.title ? data?.title : DefaultSEO.title,
					},
				],
			},
		}),
		...(DefaultSEO.twitter.enable && {
			twitter: {
				card: DefaultSEO.twitter.card,
				site: DefaultSEO.twitter.username,
				siteId: DefaultSEO.twitter.username,
				creator: DefaultSEO.twitter.username,
				title: data?.page
					? `${data?.page} | ${DefaultSEO.title}`
					: DefaultSEO.title,
				description: data?.page
					? `${data?.page} | ${DefaultSEO.description}`
					: DefaultSEO.description,
				images: [
					new URL(
						data?.twitterImage ? data?.twitterImage : DefaultSEO.twitter.image,
						metadataBase
					).toString(),
				],
			},
		}),
	};
};

export default metaTagDynamic;
