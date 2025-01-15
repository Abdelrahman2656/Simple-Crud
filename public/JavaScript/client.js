

function getProductId(id){
    document.getElementById('productInput').value=id
}

function getProductIdToUpdate(id, name, price, description) {
    // Make sure the modal is shown before attempting to update values
    document.getElementById('editName').value = name;
    document.getElementById('editPrice').value = price;
    document.getElementById('editDescription').value = description;
     document.getElementById('productIdToUpdate').value=id;

 
}
