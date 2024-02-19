
let count = 0;

const allSeat = document.getElementsByClassName("seat");

for (const seat of allSeat){
    seat.addEventListener("click", function handleSelect(event){
        seat.classList.add('bg-[#1DD100]', 'text-white');
        

       const busSeat = seat.innerText;      
    //    handleSeatSelection(busSeat, 'Economy', '550');
       
       if(handleSeatSelection(busSeat, 'Economy', '550')){
        count++;
        if(count === 4){
            for (const eachSeat of allSeat) {
                if (!eachSeat.classList.contains('bg-[#1DD100]')) {
                    eachSeat.disabled = true;
                }
            }
            const couponBtn = document.getElementById('coupon');
            couponBtn.disabled =false;

        }
       }

        
        
       

    })
}