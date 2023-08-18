import {menuArray} from "./data.js"

const menuItemInnerHTML = document.getElementById("menu-items")
const costInnerHTML = document.getElementById("total-cost")
const basketEl = document.getElementById("basket-el")
const purchaseBtn = document.getElementById("purchase-btn")
const checkoutModal = document.getElementById("pop-up-modal")
const checkoutInnerHTML = document.getElementById("pop-up-contents")
const closebtn = document.getElementById("close-btn")
const purchaseform = document.getElementById("purchase-form")

let itemsInBasket = 0
let totalCost = 0
let basketArray = []

//CLICK EVENTS

document.addEventListener("click", function (e){
    if (e.target.dataset.purchase){
        HandlePurchaseClick(e.target.dataset.purchase)}
    else if (e.target.dataset.remove){
        HandleRemoveClick(e.target.dataset.remove)}
    else if (e.target.id === "purchase-btn"){
        HandleCheckout(basketArray)}
    else if (e.target.id==="close-btn"){
        checkoutModal.classList.add("hidden")}
})

purchaseform.addEventListener("submit", function(e){
    e.preventDefault()
    console.log("form submitted")
})

//CLICK FUNCTIONS

function HandlePurchaseClick(id){
    const selectedItem = menuArray.filter(function(item){
    return item.id === id})[0] 
    if(!selectedItem.isinBasket){
        selectedItem.isinBasket = true 
        basketArray.push(selectedItem)  
    }
    itemsInBasket++
    selectedItem.inBasket++
    totalCost += selectedItem.price
    getBasketHTML(basketArray)
    render()
}

function HandleRemoveClick(id){
    const selectedItem = menuArray.filter(function(item){
    return item.id === id})[0]
    
    if (selectedItem.inBasket > 0){
    itemsInBasket--
    selectedItem.inBasket--
    totalCost -= selectedItem.price
    }

    if (selectedItem.inBasket === 0){
        selectedItem.isinBasket = false
        basketArray.pop(selectedItem)
    }
    
    getBasketHTML(basketArray)
    render()
}

//HANDLE VALUES (REFACTOR TO REMOVE)

function HandleValues(item)
{
     if (totalCost < 0)
                {
                    totalCost=0
                }
            if (itemsInBasket < 0)
                {
                    itemsInBasket=0
                }
            if (item.inBasket < 0)
            {
                item.inBasket = 0
            }
}

//FEED HTML

function getFeedHTML(){
    let feedHTML = ""
    let costHTML = `<p>£${totalCost}<p>`
    
    menuArray.forEach(function(item){
        feedHTML +=`<div class="item-container" id="item-${item.id}" data-uuid"${item.id}">
                        <img class="item-img" data-uniqueid="${item.id}" src="./assets/${item.img}">
                            <div>
                                <p class="item-title">${item.name}</p>
                                <p class="item-genre">${item.tags}</p>
                                <p class="item-price">£${item.price}</p>
                            </div>
                            <i class="fa-solid fa-plus plus-btn btn" id="plus-btn" data-purchase="${item.id}"></i>
                    </div>`
    })
    costInnerHTML.innerHTML = costHTML 
    menuItemInnerHTML.innerHTML = feedHTML
}

function getBasketHTML(item){
        let basketInnerHTML = ""
            
            if(basketArray.length > 0){
                basketEl.classList.remove("hidden") 
                document.getElementById("basket-header").style.display = "flex"
                purchaseBtn.classList.remove("hidden")
            }
            else{ //CAN THESE VALUES BE TOGGLED INSTEAD?
                basketEl.classList.add("hidden")
                document.getElementById("basket-header").style.display = "none"
                purchaseBtn.classList.add("hidden")
            }
            
            HandleValues(item)
            
            menuArray.forEach(function(item){
                    if (item.isinBasket)
                    {
                    basketInnerHTML += `<div class="flex" id="basket-item-name">
                    <p class="item-title basket-content" id="basket-title">${item.name}<p>
                    <p class="basket-content">£${item.price}</p>
                    </div>
                    <p class="remove-btn basket-content" id="remove-btn" data-remove="${item.id}">remove</p></div>`    
                    }
                    })         
                                 
        basketEl.innerHTML = basketInnerHTML
}

function HandleCheckout(basket){
    checkoutModal.classList.remove("hidden")
        let checkoutHTML = ""
       basket.forEach(function (item){
           checkoutHTML += `<p class="item-title">${item.name}</p>
                            <p>x${item.inBasket} = £${item.price * item.inBasket}<p>`
                            
       })
       
    checkoutInnerHTML.innerHTML = `<div class="basket-menu-header">
                            <i class="fa-solid fa-xmark" id="close-btn"></i>
                          <p class="item-title">Your Order<p>
                          </div> 
                          ${checkoutHTML}`
}

//REQUIRED

function render(){
   getFeedHTML()
}

render()
