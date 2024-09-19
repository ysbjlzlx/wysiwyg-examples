import {FC} from "react";
import Link from "next/link";

const Home: FC = () => {
    return (
        <div>
            <ol>
                <li><Link href={'/ant-design/md-editor'}>@ant-design/md-editor</Link></li>
            </ol>
        </div>
    );
}

export default Home;