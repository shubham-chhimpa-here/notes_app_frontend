import { Link } from "react-router-dom";

export default function CalltoActionHome() {
    return <>
    <section className="py-6  text-gray-800">
	<div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48 max-w-5xl">
		<h1 className="text-6xl font-semibold leadi text-center">The simplest way to keep notes</h1>
		<p className="pt-2 pb-8 text-xl font-medium text-center">All your notes, synced on all your devices. Get Simplenote now for iOS, Android, Mac, Windows, Linux, or in your browser.</p>
        <Link to={'/signup'} className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50">Sign up now</Link>
	</div>
</section>
    </>
}