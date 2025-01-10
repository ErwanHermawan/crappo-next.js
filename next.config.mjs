/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "x-api.alpha-x.id",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
