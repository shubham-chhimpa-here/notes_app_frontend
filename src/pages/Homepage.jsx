import CalltoActionHome from "../components/CalltoActionHome";
import Notes from "../components/Notes";

export default function Homepage({ data }) {
    const { isLogin } = data;

    if (isLogin) return <Notes />

    return <>
        <CalltoActionHome />
    </>
}