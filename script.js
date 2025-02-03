//your JS code here. If required.
let status = document.getElementById("status");
let enterBtn = document.getElementById("enterBtn");

let h1Element = document.createElement("h1");
h1Element.textContent = "Entered Metaverse";
enterBtn.addEventListener('click',function(){
	status.parentNode.replaceChild(h1Element,status);
	
})
