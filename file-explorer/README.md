# File-Explorer

Given an array of file objects, build a component that displays them in a hierarchical tree format.

There are two types of objects – files and directories:

- Files are essentially leaf nodes of the tree, they do not have children.
- Directories can contain other objects – either files or directories.

```
interface FileItem {
    id: number;
    name: string;
    children?: FileItem[];
}
```
