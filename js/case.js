

// click plus btn
document.getElementById('btn-case-plus').addEventListener('click', function () {

    updateQuantityPrice('case', true)


})

// click minus btn
document.getElementById('btn-case-minus').addEventListener('click', function () {

    updateQuantityPrice('case', false)

})

// case area remove
document.getElementById("case-remove").addEventListener('click', function (e) {
    // e.target.parentNode.parentNode.parentNode.remove()
    removeProduct('case')
});