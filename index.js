// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2) 
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2, 4)
}

const selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers]);

const createFareMultiplier = (multiplier) => {
    return function(fare) {
        return fare * multiplier
    }
}

const fareDoubler = (fare) => {
    return fare * 2
}

const fareTripler = (fare) => {
    return fare * 3
}

const selectDifferentDrivers = (drivers, foo) => {
    return foo(drivers)
}