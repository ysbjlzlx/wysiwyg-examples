'use client'

import {MarkdownEditor} from '@ant-design/md-editor';

const Page = () => {
    const defaultValue = `
# @ant-design/md-editor

* [https://md-to-json-schema.antdigital.dev/](https://md-to-json-schema.antdigital.dev/)
* https://github.com/ant-design/md-editor
* https://www.npmjs.com/package/@ant-design/md-editor

## 安装

\`\`\`bash
pnpm add @ant-design/md-editor
\`\`\`
  
        `;
    return <div>
        <MarkdownEditor
            width={'100vw'}
            height={'100vh'}
            reportMode
            toolBar={{enable: true}}
            initValue={defaultValue}
            onChange={(e, s) => {
                console.log('onChange', e, s);
            }}
        />
    </div>
}
export default Page;