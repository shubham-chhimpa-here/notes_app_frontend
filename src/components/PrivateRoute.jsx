import { Link } from "react-router-dom";

export default function PrivateRoute({ data }) {
    const { isLogin, setLogin } = data;

    const handleClick = () => {
        document.cookie = 'token=null';

        setLogin(false)
    }


    if (isLogin) {
        return <>
            <Link to={'/notes/add'} className="flex items-center px-4 -mb-1  border-transparent 
        hover:text-violet-600 hover:border-violet-600">Write</Link>
            <Link to={'/'} onClick={handleClick} className="flex items-center px-4 -mb-1  border-transparent 
        hover:text-violet-600 hover:border-violet-600">Logout</Link>
        </>
    }

    return <>
        <Link to={'/signin'} className="self-center px-8 py-3 rounded">Sign in</Link>
        <Link to={'/signup'} className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50">Sign up</Link>
    </>
}