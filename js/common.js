
// get input value
function getInputValue(inputId) {
    const currentInput = document.getElementById(inputId);
    const currentInputQuantity = currentInput.value;
    return parseInt(currentInputQuantity);

}

// get element text value
function getElementValue(elementId) {
    const elementField = document.getElementById(elementId);
    const elementValue = elementField.innerText;

    return parseInt(elementValue);

}

// set input value
function setInputValue(inputId, setValue) {
    const inputField = document.getElementById(inputId);
    inputField.value = setValue;

}

// set element text value
function setElemetValue(elementId, setValue) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = setValue;

}

// increasing and decreasing value and product price updated
function updateQuantityPrice(productName, isIncrease) {

    const currentInputQuantity = getInputValue(productName + '-number-field');
    console.log(typeof currentInputQuantity)

    // let updateQuantity = currentInputQuantity;
    let updateQuantity;
    if (isIncrease) {
        updateQuantity = currentInputQuantity + 1;
    }
    else {
        if (currentInputQuantity > 0) {
            updateQuantity = currentInputQuantity - 1;
        }
        else {
            updateQuantity = currentInputQuantity;
        }
    }
    setInputValue(productName + '-number-field', updateQuantity)

    // price update with quantity update
    let productPriceTotal = 0;
    if (productName == 'phone') {
        productPriceTotal = updateQuantity * 1219
    }
    else if (productName == 'case') {
        productPriceTotal = updateQuantity * 59
    }
    setElemetValue(productName + '-total', productPriceTotal);

    calculateTotalPrice();

}

function calculateTotalPrice() {

    const phonePrice = getElementValue('phone-total');
    const casePrice = getElementValue('case-total');

    const subTotal = phonePrice + casePrice;
    setElemetValue('sub-total', subTotal);

    const taxAmount = Math.round(subTotal * 0.1);
    setElemetValue('tax-amount', taxAmount);

    const finalTotal = subTotal + taxAmount;
    setElemetValue('final-total', finalTotal)

    // console.log(finalTotal)


}

function removeProduct(item) {

    const productArea = document.getElementById(item + '-cart');
    productArea.style.display = 'none';

    if (item === 'phone') {

        const casePrice = getElementValue('case-total');
        setElemetValue('sub-total', casePrice);

        const tax = Math.round(casePrice / 10);
        setElemetValue('tax-amount', tax);
        const grandTotal = casePrice + tax;
        setElemetValue('final-total', grandTotal);
        setElemetValue('phone-total', 0)
    }
    else if (item === 'case') {
        const phonePrice = getElementValue('phone-total');
        setElemetValue('sub-total', phonePrice);

        const tax = Math.round(phonePrice / 10);
        setElemetValue('tax-amount', tax);
        const grandTotal = phonePrice + tax;
        setElemetValue('final-total', grandTotal);
        setElemetValue('case-total', 0)
    }
    goNextPage();
}

function goNextPage() {
    const finalTotal = getElementValue('final-total');
    if (finalTotal <= 0) {
        document.getElementById('btn-checkout').setAttribute("disabled", true)

    }
    else {
        document.getElementById('btn-checkout').addEventListener('click', function () {
            window.location.href = './nextPage.html'
        })
    }
}
goNextPage()

// function removeItem(item) {
//     const productArea = document.getElementById(item + 'Cart');
//     productArea.style.display = "none";
//     if (item == 'phone') {
//         const caseQuantity = getInputValue('case-count');
//         const totalPrice = caseQuantity * 59;
//         document.getElementById('sub-total').innerText = totalPrice;
//         const tax = Math.round(totalPrice * 0.1);
//         document.getElementById('tax-amount').innerText = tax;
//         const grandTotal = totalPrice + tax;
//         document.getElementById('total').innerText = grandTotal;
//         document.getElementById('phone-count').value = 0;

//     }
//     else if (item == 'case') {
//         const phoneQuantity = getInputValue("phone-count");
//         const totalPrice = phoneQuantity * 1219;
//         document.getElementById('sub-total').innerText = totalPrice;
//         const tax = Math.round(totalPrice * 0.1);
//         document.getElementById('tax-amount').innerText = tax;
//         const grandTotal = totalPrice + tax;
//         document.getElementById('total').innerText = grandTotal;
//         document.getElementById('case-count').value = 0;

//     }
// }
