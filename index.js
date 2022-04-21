var plusBtn = document.querySelectorAll(".plus");
var minusBtn = document.querySelectorAll(".minus");
var likeBtn = document.querySelectorAll(".like-btn");
var deleteBtn = document.querySelectorAll(".delete-btn");
var addNewProduct = document.querySelector(".new-article");
var PriceTotal = (document.querySelector(".total-price").innerText = 954 + "$");

// quantity
function plusAdd() {
  document.querySelector(".quantity").value =
    parseInt(document.querySelector(".quantity").value) + 1;
  total();
}
function minusAdd() {
  if (
    (document.querySelector(".quantity").value =
      parseInt(document.querySelector(".quantity").value) - 1) < 0
  )
    total();
}

// price
function total() {
  var price = parseInt(document.querySelector(".price").innerText);
  var quantity = parseInt(document.querySelector(".quantity").value);
  var totalPrice = price * quantity;

  document.querySelector(".total-price").innerText = totalPrice + "$";
  if (document.querySelector(".quantity").value <= 0) {
    document.querySelector(".total-price").innerText = 0;
  }
}

plusBtn.forEach((element) => {
  element.addEventListener("click", plusAdd);
});
minusBtn.forEach((element) => {
  element.addEventListener("click", minusAdd);
});

// like button
likeBtn.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("btn-liked");
  });
});

//delete button
// delete cart;
// for (var i = 0; i < deleteBtn.length; i++) {
//   var remove = deleteBtn[i];

//   remove.addEventListener("click", function (event) {
//     buttonClicked = event.target;
//     buttonClicked.remove();
//     cartTotal();
//   });
// }
deleteBtn.forEach((element) => {
  element.addEventListener("click", () => {
    element.parentElement.remove();
  });
  cartTotal();
});

//add new product
cartMain = document.querySelector(".cart-items");
addNewProduct.addEventListener("click", () => {
  cartMain.innerHTML += `<div class="cart-rows">

  <img src="/assets/iphone11.png" alt="" class="img-product" >
  Apple IPhone 11 – 4G - 12 Mpx <br> – 6.1’’- 4/64 Go - Noir
  
  <span class="price">954$</span>

  <button class="like-btn">
  <i class="uil uil-heart"></i>
  </button>

  <div class="quantity-btn">
   <button class="btn minus">-</button>
   <input type="number" value ="1" readonly class="quantity">
   <button class="btn plus">+</button>
  </div>

  <button class="delete-btn">
   <i class="uil uil-trash-alt"></i>
  </button>
  
</div>`;
});
//prix

function cartTotal() {
  // cartItemContainer;
  // cartRows;
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-rows");
  for (var i = 0; i < cartRows.length; i++) {
    // cartRow;
    // priceElement;
    // quantityElement;
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("price")[0];
    var quantityElement = cartRow.getElementsByClassName("quantity")[0];
  }
}
