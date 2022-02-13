const Hamburger = ({ hamburgerisActive, handleToggle }) => {
	return (
		<button
			className={`hamburger hamburger--collapse-r ${
				hamburgerisActive ? "is-active z-20" : null
			}`}
			type="button"
			onClick={handleToggle}
		>
			<span className="hamburger-box">
				<span className="hamburger-inner"></span>
			</span>
		</button>
	);
};

export default Hamburger;
