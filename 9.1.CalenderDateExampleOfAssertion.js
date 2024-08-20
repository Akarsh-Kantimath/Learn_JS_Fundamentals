var date = '7';
var modifiedDate = date;
var monthNumber = '7';
var modifiedMonthNumber = monthNumber;
const year = '2022';

//console.log(modifiedDate.length);
if(date.length === 1){
    var modifiedDate = '0'+date;
}
//console.log(date);
if(monthNumber.length === 1) {
    var modifiedMonthNumber = '0'+monthNumber;
}
//console.log(monthNumber);

const concatenatedDate = year+'-'+modifiedMonthNumber+'-'+modifiedDate;