import { Link } from "react-router-dom";

export default function Signup() {
    return <>
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  text-gray-800 m-auto" >
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign up</h1>
                <p className="text-sm text-gray-600">Create your free account</p>
            </div>
            <form novalidate="" action="" className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label for="username" className="block mb-2 text-sm">Username</label>
                        <input type="text" name="username" id="username" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" required/>
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" required/>
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label for="password" className="text-sm">Password</label>
                            {/* <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">Forgot password?</a> */}
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" required/>
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50">Register</button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-600">Already have an account?
                        <Link to={'/signin'} className="hover:underline text-violet-600">Sign in</Link>.
                    </p>
                </div>
            </form>
        </div>
    </>
}