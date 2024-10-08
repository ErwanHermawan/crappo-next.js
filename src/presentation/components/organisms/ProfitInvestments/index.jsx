// -- core
import Image from "next/image";

// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "@atoms/Button";

const ProfitInvestments = (props) => {
	const { ready, data, error } = props;

	if (!ready) {
		return (
			<section className={style.profit} id="profit-investments">
				<div className="container">
					<div className={style.inner}>
						<div className={`${style.img} placeholder`}></div>
						<div className={style.text}>
							<div className={style.wrapper}>
								<h2 className={`${style.textTitle} placeholder`}></h2>
								<p className={`${style.textDesc} placeholder`}></p>
								<div className={`${style.textBtn} placeholder`}></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className={style.profit} id="profit-investments">
			<div className="container">
				<div className={style.inner}>
					<div className={style.img}>
						{data?.image && (
							<Image
								className={style.el}
								src={data?.image}
								alt={data?.title}
								width={660}
								height={340}
							/>
						)}
					</div>
					<div className={style.text}>
						<div className={style.wrapper}>
							<h2 className={style.textTitle}>{data?.title}</h2>
							<p className={style.textDesc}>{data?.description}</p>
							<Button variant="accent" href={data?.button.to}>
								<span>{data?.button.text}</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProfitInvestments;
