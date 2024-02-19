
let count = 0;
let totalPrice = 0;

const allSeat = document.getElementsByClassName("seat");

for (const seat of allSeat) {
    seat.addEventListener("click", function handleSelect(event) {
        seat.classList.add('bg-[#1DD100]', 'text-white');
        document.getElementById('next-btn').disabled = false;

        


        const busSeat = seat.innerText;
        //    handleSeatSelection(busSeat, 'Economy', '550');

        if (handleSeatSelection(busSeat, 'Economy', '550')) {
            count++;
            totalPrice = totalPrice + 550;
            setInnerText("seat-count", count);
            setInnerText("seat-left", 8 - count);
            setInnerText("total-price", totalPrice);
            setInnerText("grand-total", totalPrice);

        if(count === 1){
                //coupon part
        const couponBtn = document.getElementById('coupon');
        couponBtn.disabled = false;

        const couponDiv = document.getElementById('coupon-div');

        const couponText = document.getElementById('coupon-txt');
        couponBtn.addEventListener("click", function () {

            if (couponText.value === 'NEW15') {
                setInnerText("grand-total", (totalPrice - (totalPrice * 0.15)));
                couponDiv.classList.add('hidden');
            }
            else if (couponText.value === 'Couple 20') {
                setInnerText("grand-total", (totalPrice - (totalPrice * 0.20)));
                couponDiv.classList.add('hidden');
            }
            else {
              alert("Inavlid coupon");
            }
        })
        }
            if (count === 4) {
                for (const eachSeat of allSeat) {
                    if (!eachSeat.classList.contains('bg-[#1DD100]')) {
                        eachSeat.disabled = true;
                    }
                }
                
             

            }
        }





    })
}