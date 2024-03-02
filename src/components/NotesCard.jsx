import { Link } from "react-router-dom";

export default function NotesCard({ item }) {
    const { title, _id } = item;
    return <>
        <article className="flex flex-col bg-gray-50">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                {/* <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" /> */}
            </a>
            <div className="flex flex-col flex-1 p-6">
                <Link to={`/notes/${_id}`} className="text-xs tracki  hover:underline text-violet-600">More</Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leadi">{title}</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                    <span>June 1, 2020</span>
                    {/* <span>2.1K views</span> */}
                </div>
            </div>
        </article>
    </>
}