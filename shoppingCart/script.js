
const removeCartProductButtons = document.querySelector('#remove-product-button')
for (let i = 0; i < removeCartProductButtons ; i++) {
  removeCartProductButtons[i].addEventListener("click" , removeProduct)
}

//Mudança valor inputs
const quantityInputs = document.querySelector("#product-qtd-input")
for (let i = 0; i < quantityInputs; i++) {
  quantityInputs[i].addEventListener("change", checkIfInputIsNull)
}

const addToCartButtons = document.querySelector(".add-cart")
addToCartButtons.addEventListener("click" , addProductToCart);

function removeProduct(event) {
  event.target.parentElement.remove()
  updateTotal()
}

function checkIfInputIsNull(event) {
  if (event.target.value === "0") {
    event.target.parentElement.parentElement.remove()
  }
  updateTotal()
}

function addProductToCart(event) {
  const button = event.target
  const productInfos = button.parentElement.parentElement
  const productImage = productInfos.querySelector(".carrousel img")[0].src
  const productTitle = productInfos.querySelector('.product h4')[0].innerText
  const productPrice = productInfos.querySelector('.preco')[0].innerText

  const productsCartName = document.querySelector('.product h4')
  for(let i = 0 ; i < productsCartName.lenght ; i++) {
    if(productsCartName[i].innerText === productTitle) {
      productsCartName[i].querySelector('product-qtd-input')[0].value++
      updateTotal()
      return
    }
  }

}

function updateTotal() {
  const cartProducts = document.querySelector('#container')
  totalAmount = 0
  for (let i = 0; i < cartProducts.lenght; i++) {
    const productPrice = cartProducts[i].querySelector('.preco')[0].innerText.replace("R$" , " ").replace("," , ".")
    const productQuantity = cartProducts[i].querySelector("product-qtd-input")[0].value

    totalAmount += productPrice * productQuantity
  }

  totalAmount = totalAmount.toFixed(2)
  totalAmount = totalAmount.replace("." , ",")
  document.querySelector('.cart-total-container span').innerText = "R$" + totalAmount
}