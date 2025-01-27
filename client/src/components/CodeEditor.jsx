// import { useState } from "react";
import { useRef, useState } from "react";
import { Box } from "@chakra-ui/react"
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import { HStack } from "@chakra-ui/react";
const CodeEditor = () => {
    const [value, setValue] = useState("");
    const editorRef = useRef();
    const [language, setLanguage] = useState("javascript");

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const onSelect = (language) => {
        setLanguage(language);
        setValue(CODE_SNIPPETS[language]);
      };

  return (
    <Box>
        <HStack spacing={4}>
            <Box  w="50%">
                <LanguageSelector language={language} onSelect={onSelect} />
                <Editor
                    options={{minimap: {enabled: false}}}
                    height="80vh"
                    theme="vs-dark"
                    language={language}
                    defaultValue={CODE_SNIPPETS[language]}
                    onMount={onMount}
                    value={value}
                    onChange={(value) => setValue(value)}
                />
            </Box>
            <Output editorRef={editorRef} language={language} />
        </HStack>
    </Box>
  )
}

export default CodeEditor