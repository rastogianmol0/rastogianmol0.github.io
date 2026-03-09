
function generateTOC(){

const content = document.querySelector(".content");
if(!content) return;

const headings = content.querySelectorAll("h2");

const toc = document.createElement("div");
toc.className="toc";
toc.innerHTML="<h3>Contents</h3>";

headings.forEach(h=>{

const id = h.innerText.toLowerCase().replaceAll(" ","-");
h.id=id;

const link=document.createElement("a");
link.href="#"+id;
link.innerText=h.innerText;

const div=document.createElement("div");
div.appendChild(link);

toc.appendChild(div);

});

content.prepend(toc);

}

setTimeout(generateTOC,500);
