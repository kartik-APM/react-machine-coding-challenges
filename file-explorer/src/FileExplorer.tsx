import { useState } from "react";

interface FileItem {
  id: number;
  name: string;
  children?: FileItem[];
}

interface FileExplorerProps {
  data: FileItem[];
  depth: number;
}

export default function FileExplorer({ data, depth }: FileExplorerProps) {
  const [isOpen, setIsOpen] = useState(data.map((item: any) => false));

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    e.stopPropagation(); //to prevent the bubbling behavior
    const newIsOpen: boolean[] = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div>
      {data.map((item: any, index: any) => {
        if (item.children) {
          return (
            <div onClick={(e) => handleClick(e, index)} key={item.id}>
              <span
                className="folder-name"
                style={{ padding: `0px ${depth * 5}px` }}
              >
                {item.name}
                {isOpen[index] ? "[-]" : "[+]"}
              </span>
              {isOpen[index] ? (
                <FileExplorer data={item.children} depth={depth + 1} />
              ) : null}
            </div>
          );
        } else
          return (
            <div style={{ padding: `0px ${depth * 5}px` }}>{item.name}</div>
          );
      })}
    </div>
  );
}
