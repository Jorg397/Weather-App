import { useState } from "react";
import Button from "../recycle/Button";

const Contacto = () => {
	const [inputName, setInputName] = useState("");
	const [inputSurname, setInputSurname] = useState("");
	const [inputEmail, setInputEmail] = useState("");
	const [inputDesc, setInputDesc] = useState("");

	const handleSubmit = () => {
		if (!inputName || !inputSurname || !inputEmail || !inputDesc) {
			alert("Al menos un campo esta vacio");
		} else {
			setInputName("");
			setInputSurname("");
			setInputEmail("");
			setInputDesc("");
			alert(`Muy bien ${inputName}, mensaje enviado correctamente!`);
		}
	};

	return (
		<div className="flex justify-center mt-14 p-10 bg-indigo-500 flex-col h-full rounded-lg mx-5 md:w-1/2 md:mx-auto md:items-center sm:">
			<form
				name="contact"
				className="flex flex-col w-full md:items-center"
				onSubmit={(e) => {
					e.preventDefault();
				}}
				method="POST"
				netlify
			>
				<h3 className="self-center text-white text-2xl font-medium -mt-5 mb-5">
					Contáctanos
				</h3>
				<label htmlFor="name" className="text-white text-xl">
					Nombre
				</label>
				<input
					value={inputName}
					onChange={(e) => {
						setInputName(e.target.value);
					}}
					type="text"
					id="name"
					className=" mb-2 p-2 border-b-4 border-yellow-400 rounded-md outline-none focus:border-2 shadow-md md:w-1/2 text-indigo-800 font-medium"
				/>
				<label htmlFor="surname" className="text-white text-xl">
					Apellido
				</label>
				<input
					value={inputSurname}
					onChange={(e) => {
						setInputSurname(e.target.value);
					}}
					type="text"
					id="surname"
					className=" mb-2 p-2 border-b-4 border-yellow-400 rounded-md outline-none focus:border-2 shadow-md md:w-1/2 text-indigo-800 font-medium"
				/>
				<label htmlFor="email" className="text-white text-xl">
					Correo Electronico
				</label>
				<input
					value={inputEmail}
					onChange={(e) => {
						setInputEmail(e.target.value);
					}}
					type="email"
					id="email"
					className=" mb-2 p-2 border-b-4 border-yellow-400 rounded-md outline-none focus:border-2 shadow-md md:w-1/2 text-indigo-800 font-medium"
				/>
				<label htmlFor="description" className="text-white text-xl">
					Dejanos tu mensaje!!
				</label>
				<textarea
					value={inputDesc}
					onChange={(e) => {
						setInputDesc(e.target.value);
					}}
					name="description"
					id="description"
					cols="10"
					rows="5"
					className=" mb-5 p-2 border-b-4 border-yellow-400 rounded-md outline-none focus:border-2 shadow-md md:w-1/2 text-indigo-800 font-medium"
					resize="none"
				></textarea>
				<Button
					type="submit"
					text="Enviar"
					textColor="text-indigo-500"
					size="p-3"
					bg="bg-yellow-300"
					rounded="md"
					align=""
					onClick={handleSubmit}
				/>
			</form>
		</div>
	);
};

export default Contacto;
