import { useState } from "react";
import Cards from "./components/Cards";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacto from "./components/pages/Contacto";
import Err404NotFound from "./components/pages/Err404NotFound";
import About from "./components/pages/About";
import CityDetails from "./components/CityDetails";

function App() {
	const [activeModal, setActiveModal] = useState(false);
	const [hamburgerisActive, setIsActive] = useState(false);

	const [cities, setCities] = useState([]);
	const [ciudad, setCiudad] = useState([]);

	const onClose = (id) => {
		confirm("Seguro que desea eliminar la ciudad?")
			? setCities((cities) => cities.filter((c) => c.id !== id))
			: null;
	};

	const showMore = (id) => {
		let city = cities.filter((c) => {
			if (c.id === id) return c;
		});
		console.log(city);
		setCiudad(city[0]);
	};

	return (
		<div className="App z-0">
			<Router>
				<NavBar
					setActiveModal={setActiveModal}
					activeModal={activeModal}
					hamburgerisActive={hamburgerisActive}
					setIsActive={setIsActive}
				/>
				<Modal
					activeModal={activeModal}
					setActiveModal={setActiveModal}
					setIsActive={setIsActive}
				/>
				<Switch>
					<Route exact path={"/"}>
						<SearchBar cities={cities} setCities={setCities} />
						{cities != "" ? (
							<Cards
								cities={cities}
								onClose={onClose}
								showMore={showMore}
							/>
						) : (
							<h2 className="text-2xl text-center mt-20 mx-20 text-indigo-500 font-semibold bg-yellow-300 block p-5 rounded-lg pointer-events-none">
								Agrega tu primera ciudad!!
							</h2>
						)}
					</Route>
					<Route exact path={"/contact"} component={Contacto} />
					<Route path="/about" component={About} />
					<Route path="/details/:name/:id">
						<CityDetails ciudad={ciudad} />
					</Route>

					<Route path="*" component={Err404NotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
