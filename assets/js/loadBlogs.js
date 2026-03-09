
const posts = [
{file:"blogs/haiku-sonnet.md", id:"haiku-sonnet"},
{file:"blogs/haiku-opus.md", id:"haiku-opus"},
{file:"blogs/gpt-claude.md", id:"gpt-claude"},
{file:"blogs/agents-mcp.md", id:"agents-mcp"}
];

function mdToHtml(md){
return md
.replace(/^### (.*$)/gim,'<h3>$1</h3>')
.replace(/^## (.*$)/gim,'<h2>$1</h2>')
.replace(/^# (.*$)/gim,'<h1>$1</h1>')
.replace(/^- (.*$)/gim,'<li>$1</li>')
.replace(/\n\n/g,'<p>');
}

async function loadBlogs(){

const container = document.getElementById("blogs");

for(const p of posts){

const res = await fetch(p.file);
const text = await res.text();
const html = mdToHtml(text);

const div = document.createElement("div");
div.className="blog";
div.id=p.id;
div.innerHTML = html;

container.appendChild(div);

}

}
loadBlogs();
