import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CityDetails = ({ ciudad }) => {
	let { name, id } = useParams();
	return (
		<div className="bg-indigo-500 mt-16 mx-3 rounded-md sm:w-1/2 sm:mx-auto py-5">
			<h3 className="text-center text-3xl text-yellow-300 font-medium">
				{name} <span className="text-sm block">ID: {id}</span>
			</h3>
			<div className="p-5 text-center">
				<p className="text-2xl text-white font-medium">
					Longitud:{" "}
					<span className="text-yellow-300 text-2xl">
						{ciudad.longitud}
					</span>
				</p>
				<p className="text-2xl text-white font-medium">
					Latitud:{" "}
					<span className="text-yellow-300 text-2xl">
						{ciudad.latitud}
					</span>
				</p>
				<p className="text-2xl text-white font-medium">
					Humedad:{" "}
					<span className="text-yellow-300 text-2xl">
						{ciudad.humedad}
					</span>
				</p>
				<p className="text-2xl text-white font-medium">
					Presión:{" "}
					<span className="text-yellow-300 text-2xl">
						{ciudad.presion}
					</span>
				</p>
				<p className="text-2xl text-white font-medium">
					Vientos:{" "}
					<span className="text-yellow-300 text-2xl">
						{ciudad.wind}
					</span>
				</p>
				<p className="text-2xl text-white font-medium">
					Nubes:{" "}
					<span className="text-yellow-300 text-2xl">
						{ciudad.clouds}
					</span>
				</p>
			</div>
			<div className="grid grid-cols-2 text-center">
				<p className="text-2xl text-white font-medium">
					Temp. Mínima:{" "}
					<span className="text-yellow-300 text-2xl">
						{ciudad.min}°
					</span>
				</p>
				<p className="text-2xl text-white font-medium">
					Temp. Máxima:{" "}
					<span className="text-yellow-300 text-2xl">
						{ciudad.max}°
					</span>
				</p>
			</div>

			<p className="text-2xl text-white font-medium text-center mt-5">
				Temp. Actual:{" "}
				<span className="text-2xl block text-yellow-300">
					{ciudad.temp}°
				</span>
			</p>
			<div className="text-right mx-16">
				<Link to={`/`}>
					<button
						className={`uppercase bg-yellow-300 text-indigo-600 font-medium text-lg border rounded-md hover:bg-yellow-200 shadow-md p-2 `}
					>
						Volver
					</button>
				</Link>
			</div>
		</div>
	);
};

export default CityDetails;
