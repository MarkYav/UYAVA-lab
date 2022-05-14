var coll = document.querySelectorAll(".content_nav-aside-link");

function loadPage() {
	displayItems(1);
	
    var i;
    for (i = 0; i < coll.length; i++) {
		
        coll[i].addEventListener("click", function() {
    
            var content = this.nextElementSibling;
            if (content.style.maxHeight != "0px"){
				content.style.maxHeight = "0px";
            } else {
				content.style.maxHeight = content.scrollHeight + "px";
            }
        });
		var content = coll[i].nextElementSibling;
		if (i != 0) content.style.maxHeight = "0px";
    }
}