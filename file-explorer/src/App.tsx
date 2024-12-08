import FileExplorer from "./FileExplorer";

export default function App() {
  const data = [
    {
      id: 2,
      name: "Documents",
      children: [
        {
          id: 3,
          name: "Word.doc",
        },
        {
          id: 4,
          name: "Powerpoint.ppt",
        },
      ],
    },
    {
      id: 5,
      name: "Downloads",
      children: [
        {
          id: 7,
          name: "Misc",
          children: [
            {
              id: 8,
              name: "foo.txt",
            },
            {
              id: 9,
              name: "bar.txt",
            },
          ],
        },
        {
          id: 6,
          name: "unnamed.txt",
        },
      ],
    },
    {
      id: 1,
      name: "README.md",
    },
  ];
  const depth = 0;

  return <FileExplorer data={data} depth={depth} />;
}

