import Button from "./recycle/Button";

const Card = (props) => {
	return (
		<div
			className="grid grid-cols-2 p-5 bg-indigo-500 rounded-md"
			key={props.id}
		>
			<div className="text-white font-medium flex flex-col">
				<h2 className="text-3xl content-center text-yellow-300">
					{props.name}
				</h2>
				<p className="text-lg m-1">
					Min:{" "}
					<span className="text-xl text-yellow-300">
						{props.min}°
					</span>
				</p>
				<p className="text-lg m-1">
					Max:{" "}
					<span className="text-xl text-yellow-300">
						{props.max}°
					</span>
				</p>
				<p className="text-lg m-1 mb-3">
					Temperatura Actual:{" "}
					<span className="text-xl text-yellow-300">
						{props.current}°
					</span>
				</p>
			</div>
			<div className="rounded-full flex justify-end">
				<img
					src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
					alt="clima"
					className="w-38 mr-6 pt-5"
				/>
				<Button
					text="X"
					bg="bg-red-500"
					textColor="text-white"
					size="p-1"
					rounded="md"
					onClick={() => props.onClose(props.name)}
				/>
			</div>
			{/* <Button
				text="Ver Mas"
				bg="bg-yellow-300"
				textColor="text-indigo-500"
				size="p-2"
				rounded="lg"
			/> */}
		</div>
	);
};

export default Card;
