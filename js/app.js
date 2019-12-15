const
// data employ   
name= document.getElementById(`name`),
levelEmplo= document.getElementById(`levelEmplo`),
dayB= document.getElementById(`dayB`),
monthB= document.getElementById(`monthB`),
yearB= document.getElementById(`yearB`),
// start work that date
dayStart = document.getElementById(`day`),
monthStart = document.getElementById(`month`),
yearStart = document.getElementById(`year`),
submitForm = document.getElementById(`submit`),

arrayOfYear = [1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014],//28 year - 27 length
arrayOfPer = [0.20,0.15,0.15,0.15,0.15,0.20,0.10,0.10,0.10,0.10,0.10,0.10,0.10,0.10,0.10,0.10,0.10,0.10,0.20,0.10,0.15,0.30,0.10],//23 year - 22 length
// مربوط الدرجة
arrayOfStartSalry = [35,36,38,42,48],
// دورية-ترقية-تشجيعية حتى درجة كبير
arrayOfYearly =[1.5,1.5,2,2,4,5,5,6],
// ضم علمية او عملية
arrayOfSinc = [1.5,1.5,2,2,3,3,3,3]
;


    
between = (dateStartDay,dateStartMonth,dateStartYear)=>{

    let betweenDay = 1-dateStartDay,
    betweenMonth = 7-dateStartMonth;
    
    arrayOfYear.forEach((element,index) => {
        let 
        
        if(betweenDay >= 0 && betweenMonth>=0){
            // console.log(dateStartYear);
            // console.log(arrayOfPer[index]);

        }
    });
};


submitForm.addEventListener('submit',function (){
    let dayStartV = dayStart.value,
    monthStartV =monthStart.value,    
    yearStartV =yearStart.value;
    
    between(dayStartV,monthStartV,yearStartV);
    debugger
})
