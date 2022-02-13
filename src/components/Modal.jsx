import { Link } from "react-router-dom";

const Modal = ({ activeModal, setActiveModal, setIsActive }) => {
	const handleClick = () => {
		setActiveModal(false);
		setIsActive(false);
	};
	return (
		<div
			className={`bg-indigo-500 z-10 absolute top-0 w-screen h-screen bg-opacity-70 ${
				!activeModal ? "hidden" : null
			} transition-transform`}
		>
			<ul className="flex flex-col text-center mt-32 mx-5">
				<Link
					to={"/"}
					className="w-100 bg-yellow-300 p-10 my-2 text-indigo-500 font-semibold text-xl rounded shadow-md"
					onClick={handleClick}
				>
					Home
				</Link>
				<Link
					to={"/contact"}
					className="w-100 bg-yellow-300 p-10 my-5 text-indigo-500 font-semibold text-xl rounded shadow-md"
					onClick={handleClick}
				>
					Contacto
				</Link>
				<Link
					to={"/about"}
					className="w-100 bg-yellow-300 p-10 my-2 text-indigo-500 font-semibold text-xl rounded shadow-md"
					onClick={handleClick}
				>
					About
				</Link>
			</ul>
		</div>
	);
};

export default Modal;
