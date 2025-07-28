/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convert = document.querySelector('#convert')
const results = document.querySelector('#results')

convert.addEventListener('click', () => {
    let placeholderResult = document.querySelector('#placeholder-result')
    let userInput = document.getElementById('user-input').value
    
    results.innerHTML = `
        <div>
            <h3>Length (Meter/Feet)</h3>
            <span>${length(userInput)}</span>
        </div>
        
        <div>
            <h3>Volume (Liters/Gallons)</h3>
            <span>${volume(userInput)}</span>
        </div>
        
        <div>
            <h3>Mass (Kilograms/Pounds)</h3>
            <span>${mass(userInput)}</span>
        </div>
    `
     
     
})



const length = (value) => {
    const meterToFeet = value * 3.281
    const feetToMeter = value / 3.281
    
    return `${value} meters = ${meterToFeet.toFixed(3)} feet | ${value} feet = ${feetToMeter.toFixed(3)} meters`
}

const volume = (value) => {
    const literToGallon = value * 0.264
    const gallonToLiter = value / 0.264
    
    return `${value} liters = ${literToGallon.toFixed(3)} gallon | ${value} gallons = ${gallonToLiter.toFixed(3)} liters`
}

const mass = (value) => {
    const kilogramToPounds = value * 2.204
    const poundsToKilogram = value / 2.204
    
    return `${value} kilograms = ${kilogramToPounds.toFixed(3)} pounds | ${value} pounds = ${poundsToKilogram.toFixed(3)} kilograms`
}
