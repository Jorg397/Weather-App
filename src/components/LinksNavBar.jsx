import { NavLink } from "react-router-dom";

const LinksNavBar = () => {
	return (
		<div className="self-center text-xl hidden sm:block">
			<NavLink
				to={"/contact"}
				className="mx-5 text-white font-medium hover:text-yellow-400"
			>
				Contacto
			</NavLink>
			<NavLink
				to={"/about"}
				className="mx-5 text-white font-medium hover:text-yellow-200"
			>
				About
			</NavLink>
		</div>
	);
};

export default LinksNavBar;
