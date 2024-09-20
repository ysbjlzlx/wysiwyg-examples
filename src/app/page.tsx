'use client'

import {FC} from "react";
import {Link} from "@fluentui/react-components";
import {List, ListItem} from "@fluentui/react-list-preview";

const Home: FC = () => {
    return (
        <div>
            <List>
                <ListItem><Link href={'/ant-design/md-editor'}>@ant-design/md-editor</Link></ListItem>
            </List>
        </div>
    );
}

export default Home;