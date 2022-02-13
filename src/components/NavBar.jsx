import { Link } from "react-router-dom";
import LinksNavBar from "./LinksNavBar";
import Hamburger from "./recycle/Hamburger";

const NavBar = ({
	setActiveModal,
	activeModal,
	setIsActive,
	hamburgerisActive,
}) => {
	const handleToggle = () => {
		setIsActive(!hamburgerisActive);
		setActiveModal(!activeModal);
	};

	return (
		<div className="flex justify-between bg-indigo-500 px-5">
			<Link to={"/"} className="text-4xl font-semibold p-5 text-white">
				Weather <span className=" text-yellow-300 ">App</span>
			</Link>

			<LinksNavBar />
			<Hamburger
				hamburgerisActive={hamburgerisActive}
				handleToggle={handleToggle}
			/>
		</div>
	);
};

export default NavBar;
