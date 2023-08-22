

const returnFirstTwoDrivers = function(drivers){
     const copyOfDrivers = drivers.slice(0,2);
     return copyOfDrivers;
}

const returnLastTwoDrivers = function(drivers){
    const copyOfDrivers = drivers.slice(-2);
    return copyOfDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function fare(value){
        return multiplier * value;
    }
}


const fareDoubler = createFareMultiplier(2)


/*Declare a variable with const and assign a function returned by 
createFareMultiplier() to it. Invoke createFareMultiplier() in 
such a way that the new fareDoubler() function 
accepts a fare as its lone argument and doubles it.*/


const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, selection){

if (selection === returnFirstTwoDrivers){

return returnFirstTwoDrivers(drivers);
}

else {

 return returnLastTwoDrivers(drivers);
}
}

function selectDifferentDrivers(drivers, selection){

return selection(drivers)

}




