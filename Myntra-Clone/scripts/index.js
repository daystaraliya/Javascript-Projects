let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector(".bag-item-count");

  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = "visible";
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector(".items-container");

  if (!itemsContainerElement) {
    return;
  }

  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += ` 
        <div class="item-container">
            <img class="item-img" src="${item.image}" alt="Earings img">
                <div class="rating">
                ${item.rating.stars}⭐| ${item.rating.count}
                </div>
            <div class="company">
                ${item.company}
            </div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="curr-price">Rs ${item.current_price}</span>
                <span class="orginal-price">Rs ${item.original_price} </span>
                <span class="discount">(${item.discount_percentage} % OFF)</span>
            </div>
            <button class="btn-add-bag" type="button" onClick ="
                addToBag(${item.id})
            " >Add to Bag</button>
        </div>`;
  });
  itemsContainerElement.innerHTML = innerHTML;
}
