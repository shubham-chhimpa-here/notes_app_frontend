import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotesForm({data}) {
	const {setNotes, notes} = data
	const navigate = useNavigate()
	const [state, setState] = useState({ title: "", content: "" });

	const handleChange = (e) => {
		setState(() => ({ ...state, [e.target.name]: e.target.value }))
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch('http://localhost:8080/blog/create', {
			method: 'POST',
			body: JSON.stringify(state),
			headers: {
				'content-type': 'application/json',
				'Authorization': document.cookie.split('token=')[1]
			}
		})
			.then(res => res.json())
			.then(res => {
				setNotes([...notes, res.response])
			})

			.catch(err => {
				console.log(err)
			})
			return navigate('/')
	}
	return <>
		<section className="p-6 text-gray-800">
			<form onSubmit={handleSubmit} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md ">
				<div>
					<input id="name" onChange={handleChange}  type="text" name="title" placeholder="Title" required className="block w-full p-2 text-4xl font-bold rounded focus:outline-none  " />
				</div>
				{/* <div>
			<input id="" type="text" placeholder="Description" required className="block w-full p-2 rounded focus:outline-none " />
		</div> */}
				<div>
					<textarea id="" onChange={handleChange} type="text"  name="content" placeholder="content..." className="block w-full p-2 rounded autoexpand focus:outline-none h-64"></textarea>
				</div>
				<div>
					<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-violet-600 focus:ri hover:ri text-gray-50">Save note</button>
				</div>
			</form>
		</section>
	</>
}