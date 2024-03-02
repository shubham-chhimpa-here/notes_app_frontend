export default function NotesForm() {
    return <>
    <section className="p-6 text-gray-800">
	<form  className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md ">
		<div>
			<input id="name" type="text" placeholder="Title" required className="block w-full p-2 text-4xl font-bold rounded focus:outline-none  " />
		</div>
		<div>
			<input id="" type="text" placeholder="Description" required className="block w-full p-2 rounded focus:outline-none " />
		</div>
		<div>
			<textarea id="" type="text" placeholder="content..." className="block w-full p-2 rounded autoexpand focus:outline-none h-64"></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-violet-600 focus:ri hover:ri text-gray-50">Save note</button>
		</div>
	</form>
</section>
    </>
}