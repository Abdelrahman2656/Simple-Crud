"use strict";
function getProductId(id) {
    const productInput = document.getElementById('productInput');
    // Check if the element exists and is an HTMLInputElement
    if (productInput instanceof HTMLInputElement) {
        productInput.value = id;
    }
    else {
        console.error("Element with ID 'productInput' is not found or is not an input element.");
    }
}
// function getProductId(id){
//     document.getElementById('productInput').value=id
// }
