'use client';

import {FC} from "react";
import { MarkdownEditor, } from '@ant-design/md-editor';

const Page:FC = () => {
    const defaultValue = `
# @ant-design/md-editor
        
\`\`\`bash
pnpm add @ant-design/md-editor
\`\`\`
  
        `;
    return <div>
        <MarkdownEditor
            width={'100vw'}
            height={'100vh'}
            reportMode
            initValue={defaultValue}
            onChange={(e, s) => {
                console.log('onChange', e, s);
            }}
        />
    </div>
}
export default Page;