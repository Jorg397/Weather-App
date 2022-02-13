const Button = (props) => {
	return (
		<div>
			<button
				className={`uppercase ${props.bg} ${props.textColor} font-medium ${props.size} border rounded-${props.rounded} hover:${props.hoverBg} shadow-md ${props.align}`}
				onClick={props.onClick}
			>
				{props.text}
			</button>
		</div>
	);
};

export default Button;
