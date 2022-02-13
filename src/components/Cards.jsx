import Card from "./Card";

const Cards = ({ cities, onClose, showMore }) => {
	return (
		<>
			{cities.length >= 0 ? (
				<div className="grid mx-5 mt-10 gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{cities.map((el) => {
						return (
							<Card
								img={el.img}
								current={el.temp}
								name={el.name}
								min={el.min}
								max={el.max}
								id={el.id}
								onClose={onClose}
								showMore={showMore}
								key={el.id}
							/>
						);
					})}
				</div>
			) : (
				<h3>Agrega tu primera ciudad</h3>
			)}
		</>
	);
};

export default Cards;
