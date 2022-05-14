function displayItems(sender) {
	
    var items = document.querySelectorAll(".content_item");
    var itemsPerPage = 6;
    var minIndex = itemsPerPage * (sender - 1);
    var maxIndex = itemsPerPage * sender;

    for (let i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }
    for (let i = minIndex; i < maxIndex && i < items.length; i++) {
        items[i].style.display = "inline-block";
    }
	var pages = document.querySelectorAll(".content_page-number");
	for (let i = 0; i < pages.length; i++) {
		
        pages[i].classList.remove("content_page-number_current");
    }
	pages[sender - 1].classList.add("content_page-number_current");
}