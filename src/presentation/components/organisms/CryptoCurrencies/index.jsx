// -- style
import style from "./style.module.scss";

// -- atoms
import CryptoItem from "@molecules/CryptoItem";

const CryptoCurrencies = (props) => {
	const { ready = false, data, error } = props;

	console.log("data", data);

	if (!ready) {
		return (
			<section className="placeholder">
				<h1>Content not loaded</h1>
			</section>
		);
	}

	return (
		<section className={style.crypto} id="crypto-currencies">
			<div className="container">
				<h2 className={style.title}>{data?.title}</h2>
				<div className={style.list}>
					{data?.list.map((val, idx) => {
						return (
							<div className={style.item} key={`ci-${idx}`}>
								<CryptoItem data={val} />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default CryptoCurrencies;
