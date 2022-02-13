import { useState } from "react";
import Cards from "./components/Cards";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacto from "./components/pages/Contacto";
import Err404NotFound from "./components/pages/Err404NotFound";
import About from "./components/pages/About";

function App() {
	const [activeModal, setActiveModal] = useState(false);
	const [hamburgerisActive, setIsActive] = useState(false);

	const [cities, setCities] = useState([]);

	const onClose = (name) => {
		confirm("Seguro que desea elimar la ciudad?")
			? setCities((cities) => cities.filter((c) => c.name !== name))
			: null;
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
						<Cards cities={cities} onClose={onClose} />
					</Route>
					<Route exact path={"/contact"} component={Contacto} />
					<Route path="/about" component={About} />

					<Route path="*" component={Err404NotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
