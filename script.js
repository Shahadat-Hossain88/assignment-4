function ticketBooking(className,isIncrese){
    const ticketInput = document.getElementById(className+'-ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrese == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrese == false && ticketNewCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    let ticketAmount = 0;
    if(className == 'firstclass'){
        ticketAmount = ticketNewCount * 150;
        
    }
    if(className == 'economy'){
        ticketAmount = ticketNewCount * 100;
       
    }
    totalCalculate();
}

function totalCalculate(){
    const firstclassTicketCount = takeValue('firstclass')
    const economyTicketCount = takeValue('economy')
    let totalAmount = firstclassTicketCount * 150 +  economyTicketCount* 100  ;
    document.getElementById('total-amount').innerText = '$'+ totalAmount;
    const vat = Math.round(totalAmount * 0.1);
    document.getElementById('vat').innerText = '$'+vat;

    totalCost = totalAmount - vat;
    document.getElementById('total-cost').innerText = '$'+totalCost ;


}
function takeValue(className){
    const ticketInput = document.getElementById(className+'-ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}