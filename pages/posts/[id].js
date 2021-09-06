import { render } from "react-dom";
import { useRouter } from "next/router";

function Post() {
    const router = useRouter();
    return <div>MMalac{router.query.id}</div>;
}

export default Post;
