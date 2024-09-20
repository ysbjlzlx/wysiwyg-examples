'use client'

import type {FC} from "react";
import {useEffect, useRef} from "react";
import Vditor from "vditor";

import "vditor/dist/index.css";

const defaultValue = `
# Vditor

* [https://github.com/Vanessa219/vditor](https://github.com/Vanessa219/vditor)
* [https://www.npmjs.com/package/vditor](https://www.npmjs.com/package/vditor)

## 安装

\`\`\`bash
npm i vditor
\`\`\`

`;

const Page: FC = () => {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const toolbar: Array<string | IMenuItem> = [
            "headings",
            "bold",
            "italic",
            "strike",
            "link",
            "|",
            "list",
            "ordered-list",
            "check",
            "outdent",
            "indent",
            "|",
            "quote",
            "line",
            "code",
            "inline-code",
            "insert-before",
            "insert-after",
            "|",
            "table",
            "|",
            "undo",
            "redo",
            "|",
            "edit-mode",
            {
                name: "more",
                toolbar: ["both", "export", "outline", "preview", "devtools", "info", "help"],
            },
        ];
        if (editorRef?.current) {
            const vditor = new Vditor(editorRef.current, {
                cache: {id: "veditor"},
                height: "100%",
                mode: "sv",
                preview: {
                    mode: "both",
                },
                toolbar: toolbar,
                after: () => {
                    vditor.setValue(defaultValue);
                },
            });
        }
    }, []);
    return (
        <div className="w-full h-[100dvh] pt-10">
            <div className="h-full w-full">
                <div ref={editorRef} className="vditor"/>
            </div>
        </div>

    );
};

export default Page;