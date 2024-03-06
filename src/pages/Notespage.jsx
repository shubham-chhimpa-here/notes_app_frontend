import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Notespage({ data }) {
	const { notesId } = useParams();
	const { setNotes, notes } = data
	const navigate = useNavigate()
	const [state, setState] = useState({ title: "", content: "" });

	const handleChange = (e) => {
		setState(() => ({ ...state, [e.target.name]: e.target.value }))
	}

	async function getData(notesId) {
		fetch(`${import.meta.env.VITE_BASE_URL}/blog/${notesId}`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				'Authorization': document.cookie.split('token=')[1]
			}
		})
			.then(res => res.json())
			.then(res => {

				console.log(res)
				if (res.data) {					
					setState(res.data)
				}
			})
			.catch(err => {
				console.log(err)
			})
	}

	useEffect(() => {
		getData(notesId)
	}, [])

	const handleClick = (type) => {
		if(type == 'update') {
			return navigate('/')
		}
		else {
			fetch(`${import.meta.env.VITE_BASE_URL}/blog/delete/${blogId}`, {
				method: 'DELETE',
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
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(`${import.meta.env.VITE_BASE_URL}/blog/create`, {
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
			<div  className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md ">

				<div className="flex justify-between gap-4">
					<button onClick={() => {
						handleClick('update')
					}} className=" px-4 py-2 w-full font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-violet-600 focus:ri hover:ri text-gray-50">Edit</button>
					<button  onClick={() => {
						handleClick('delete')
					}} className=" px-4 py-2 w-full font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-red-500 focus:ri hover:ri text-gray-50">Delete</button>
				</div>
				<div>
					<input id="name" onChange={handleChange} value={state.title} type="text" name="title" placeholder="Title" required className="block w-full p-2 text-4xl font-bold rounded focus:outline-none  " readOnly/>
				</div>
				{/* <div>
			<input id="" type="text" placeholder="Description" required className="block w-full p-2 rounded focus:outline-none " />
		</div> */}
				<div>
					<textarea id="" onChange={handleChange} value={state.content} type="text" name="content" placeholder="content..." className="block w-full p-2 rounded autoexpand focus:outline-none h-64" readOnly></textarea>
				</div>

			</div>
		</section>
	</>
}