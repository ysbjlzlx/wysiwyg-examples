'use client'

import Quill from "quill";
import type { FC } from "react";
import { useCallback, useState } from "react";

import "quill/dist/quill.snow.css";

 const Page: FC = () => {
    const [value, setValue] = useState<string>("");

    const quillRef = useCallback((node: HTMLElement | null) => {
        if (node) {
            const quill = new Quill(node, {
                modules: {
                    toolbar: true,
                },
                theme: "snow",
            });
            setValue(quill.getSemanticHTML());
            quill.on("text-change", () => {
                setValue(quill.getSemanticHTML());
            });
        }
    }, []);

    return (
        <div className="flex h-[100dvh] flex-col">
            <div ref={quillRef} className="flex-1 overflow-auto rounded-b-[8px] bg-white">
                <h2>Demo Content</h2>
                <p>
                    Preset build with <code>snow</code> theme, and some common formats.
                </p>
            </div>
        </div>
    );
 };

export default Page;