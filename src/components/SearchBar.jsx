import { useState } from "react";
import Button from "./recycle/Button";

const SearchBar = ({ cities, setCities }) => {
	const [inputValue, setInputValue] = useState("");

	function onSearch(ciudad) {
		let apiKey = `4ae2636d8dfbdc3044bede63951a019b`;
		fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
		)
			.then((r) => r.json())
			.then((recurso) => {
				if (recurso.main !== undefined) {
					const ciudad = {
						min: Math.round(recurso.main.temp_min),
						max: Math.round(recurso.main.temp_max),
						img: recurso.weather[0].icon,
						id: recurso.id,
						wind: recurso.wind.speed,
						temp: recurso.main.temp,
						name: recurso.name,
						weather: recurso.weather[0].main,
						clouds: recurso.clouds.all,
						latitud: recurso.coord.lat,
						longitud: recurso.coord.lon,
					};
					setCities((cities) => [...cities, ciudad]);
				} else {
					alert("Ciudad no encontrada");
				}
			});
	}
	return (
		<div className="sm:w-full">
			<form
				action="submit"
				onSubmit={(e) => {
					e.preventDefault();
					onSearch(inputValue);
				}}
				className="flex mt-5 gap-3 justify-center"
			>
				<input
					type="text"
					placeholder="Ingresa una ciudad!"
					className=" w-2/4 p-2 border-b-4 border-yellow-400 rounded-md outline-none focus:border-2 shadow-md md:w-1/2 text-indigo-800 font-medium"
					onChange={(evn) => setInputValue(evn.target.value)}
					value={inputValue}
				/>
				<Button
					onClick={(evnt) => {
						evnt.preventDefault;
					}}
					text="Agregar"
					bg="bg-indigo-500"
					textColor="text-white"
					hoverBg="bg-indigo-300"
					size="p-3"
					rounded="xl"
				/>
			</form>
		</div>
	);
};

export default SearchBar;
