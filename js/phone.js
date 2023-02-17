
// click plus btn
document.getElementById('btn-phone-plus').addEventListener('click', function () {

    updateQuantityPrice('phone', true)


})

// click minus btn
document.getElementById('btn-phone-minus').addEventListener('click', function () {

    updateQuantityPrice('phone', false)

})

// phone area remove
document.getElementById("phone-remove").addEventListener('click', function(e){
    // e.target.parentNode.parentNode.parentNode.remove()
    removeProduct('phone')
});