// frontend/src/components/YamlEditor.tsx
import CodeMirror from "@uiw/react-codemirror";
import { yaml } from "@codemirror/lang-yaml";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function YamlEditor({ value, onChange }: Props) {
  return (
    <CodeMirror
      value={value}
      onChange={onChange}
      height="100%"
      extensions={[yaml()]}
      theme="dark"
      style={{ height: "100%", overflow: "auto" }}
    />
  );
}
