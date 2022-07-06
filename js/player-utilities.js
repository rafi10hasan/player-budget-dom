
function getTextInputFieldValue(playerCostId){
    let playerInputField=document.getElementById(playerCostId);
    playerInputField=parseFloat(playerInputField.value);
    return playerInputField;
}


function setPerPlayerCostById(totalplayerCostId, playerValue){
    const playerTotalCost = document.getElementById(totalplayerCostId);
    playerTotalCost.innerText = playerValue;
}

function setTotalCostById(totalCostId, totalValue){
    const totalCostText = document.getElementById(totalCostId);
    totalCostText.innerText = totalValue;
}