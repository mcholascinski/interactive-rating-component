var activeListItem = null; // Variable to store the currently active list item

function toggleListItem(event) {
  var listItem = event.target;

  if (activeListItem === listItem) {
    // Clicked item is already active, deactivate it
    listItem.classList.remove("active");
    activeListItem = null;
  } else {
    // Deactivate previously active item (if any)
    if (activeListItem !== null) {
      activeListItem.classList.remove("active");
    }

    // Activate the clicked item
    listItem.classList.add("active");
    activeListItem = listItem;
  }
}

function submitRating() {
  if (activeListItem !== null) {
    var textContent = activeListItem.textContent;
    var ratingStateElement = document.querySelector(".rating-state");
    ratingStateElement.style.display = "none";

    var thankYouStateElement = document.querySelector(".thank-you-state");
    thankYouStateElement.style.display = "block";

    var selectedElement = document.querySelector(".selected");
    selectedElement.textContent = textContent;
  } else {
    // No list item selected, display an error or perform desired action
  }
}