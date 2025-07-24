const defaultMarkdown = `# Welcome to My Markdown Previewer!

## This is a sub-heading

Here is a [link](https://tobilobacodes00.github.io/Portfolio).

Inline code: \`<div>Hello</div>\`

\`\`\`js
function greet(name) {
  return "Hello, " + name;
}
\`\`\`

- List item 1
- List item 2

> Blockquote example

**Bold text example**

![Image](https://i.postimg.cc/NF5mTdbQ/tobiloba-Codes-logo-1.png)
`;

const editor = document.getElementById("editor");
const preview = document.getElementById("preview");


editor.value = defaultMarkdown;


function renderMarkdown() {
  preview.innerHTML = marked.parse(editor.value);
}

editor.addEventListener("input", renderMarkdown);

renderMarkdown();
