function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}


function handleSeatSelection(selectedSeat, seatType, seatPrice){
    const selectedSeatDiv = document.getElementById('selected-seat');

    if(!selectedSeatDiv.querySelector(`[data-seat="${selectedSeat}"]`)){
        const seatContainer = document.createElement('div');

    seatContainer.className = 'flex justify-between text-gray-500 font-medium gap-28 mb-2';

    const seatName = document.createElement('p');
    const seatTypes = document.createElement('p');
    const seatPrices = document.createElement('p');
    seatName.innerText = `${selectedSeat}`;
    seatTypes.innerText = `${seatType}`;
    seatPrices.innerText = `${seatPrice}`;
   
    seatContainer.setAttribute('data-seat', selectedSeat);

    seatContainer.appendChild(seatName);
    seatContainer.appendChild(seatTypes);
    seatContainer.appendChild(seatPrices);

    
    selectedSeatDiv.appendChild(seatContainer);
    return true;
    }
    else{
        return false;
    }
}