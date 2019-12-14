const DropBtn = document.getElementById(`dropBtn`);
let dateStartDay = 1,
    dateStartMonth = 5,
    dateStartYear = 1992,
    day = 1,
    month = 7,
    year = 1991,
    between = (dateStartDay,dateStartMonth,dateStartYear)=>{
        let betweenDay = 1-dateStartDay,
        betweenMonth = 7-dateStartMonth,
        betweenYear = dateStartYear-1991;
        console.log(`${betweenDay}/${betweenMonth}/${betweenYear}`);
    };
    // betweenMonth = ()=>{},
    // betweenYear = ()=>{},;

DropBtn.addEventListener('click',function (){
    // console.log('oiyhiouyhioh');
    between(1,6,1993)
    
})