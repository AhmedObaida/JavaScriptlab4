var image = document.createElement("img");
image.setAttribute("src","./download.jpeg");

myDiv = document.getElementById("myDiv");
myDiv.appendChild(image);

// appendChild() put the child in the end of its parent
// inserBefore() put the child in the statrt of its parent 

noOfNodes = myDiv.childNodes.length ;
console.log(noOfNodes);

// myDiv.removeChild(image);