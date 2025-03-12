const unitsEnergy = {
    joule:1,
    kilojoule:0.001,
    calorygram:0.239006,
    kilocalory:0.000239006,
    watthour:0.000277778,
    kilowatthour:2.7778e-7,
    electronvolt:6.242e18
}

const magnitudes = {
    energy:`
    <select id="magnitudes1" name="magnitudes" onchange="convertRightToLeft()">
        <option value="joule">Joule</option>
        <option value="kilojoule">Kilojoule</option>
        <option value="calorygram">Calory-gram</option>
        <option value="kilocalory">Kilocalory</option>
        <option value="watthour">Watt-hour</option>
        <option value="kilowatthour">Kilowatt-hour</option>
        <option value="electronvolt">Electronvolt</option>
    </select>
    `,
    area:`
    <select id="magnitudes1" name="magnitudes" onchange="convertRightToLeft()">
        <option value="squarekilometer">Square kilometer</option>
        <option value="squaremeter">Square meter</option>
        <option value="squaremile">Square mile</option>
        <option value="squareyard">Square yard</option>
        <option value="squarefoot">Square foot</option>
        <option value="squareinch">Square inch</option>
        <option value="acre">Acre</option>
        <option value="Hectare">Hectare</option>
    </select>
    `,
    mass:`
    <select id="magnitudes1" name="magnitudes" onchange="convertRightToLeft()">
        <option value="gram">Gram</option>
        <option value="kilogram">Kilogram</option>
        <option value="tonnel">Tonnel</option>
        <option value="milligram">Miligram</option>
        <option value="microgram">Microgram</option>
        <option value="pound">Pound</option>
        <option value="ounce">Ounce</option>
    </select>
    `,
    volume:`
    <select id="magnitudes1" name="magnitudes" onchange="convertRightToLeft()">
        <option value="gallon">Gallon</option>
        <option value="fluidounce">Fluid ounce</option>
        <option value="cubicmeter">Cubic meter</option>
        <option value="liter">Liter</option>
        <option value="milliliter">Milliliter</option>
    </select>
    `,
    frequency:`
    <select id="magnitudes1" name="magnitudes" onchange="convertRightToLeft()">
        <option value="hertz">Hertz</option>
        <option value="kilohertz">Kilohertz</option>
        <option value="megahertz">Megahertz</option>
        <option value="gigahertz">Gigahertz</option>
    </select>
    `,
    length:`
    <select id="magnitudes1" name="magnitudes" onchange="convertRightToLeft()">
        <option value="meter">Meter</option>
        <option value="kilometer">Kilometer</option>
        <option value="centimeter">Centimeter</option>
        <option value="millimeter">Millimeter</option>
        <option value="micrometer">Micrometer</option>
        <option value="nanometer">Nanometer</option>
        <option value="mile">Mile</option>
        <option value="yard">Yard</option>
        <option value="foot">Foot</option>
        <option value="inch">Inch</option>
    </select>
    `,
    pressure:`
    <select id="magnitudes1" name="magnitudes" onchange="convertRightToLeft()">
        <option value="bar">Bar</option>
        <option value="atmosphere">Atmosphere</option>
        <option value="pascal">Pascal</option>
        <option value="torr">Torr</option>
    </select>
    `,
    temperature:`
    <select id="magnitudes1" name="magnitudes" onchange="convertRightToLeft()">
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>
    </select>
    `,
    time:`
    <select id="magnitudes1" name="magnitudes" onchange="convertRightToLeft()">
        <option value="nanosecond">Nanosecond</option>
        <option value="microsecond">Microsecond</option>
        <option value="millisecond">Millisecond</option>
        <option value="second">Second</option>
        <option value="minute">Minute</option>
        <option value="hour">Hour</option>
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
        <option value="decade">Decade</option>
        <option value="century">Century</option>
    </select>
    `,
    speed:`
    <select id="magnitudes1" name="magnitudes" onchange="convertRightToLeft()">
        <option value="kmph">Kilometers per hour</option>
        <option value="mps">Meters per second</option>
        <option value="feetspersecond">Feet per second</option>
        <option value="mph">Miles per hour</option>
        <option value="knot">Knot</option>
    </select>
    `,
}

window.onload = function() {
    document.getElementById("magnitudes").value = "energy"; 
};



function convertLeftToRight() {
    let unit1 = document.getElementById("magnitudes1").value
    let unit2 = document.getElementById("magnitudes2").value
    let factor1 = unitsEnergy[unit1]
    let factor2 = unitsEnergy[unit2]
    let value1 = parseFloat(document.getElementById("value1").value);
    if (!isNaN(value1)) {
        let value2 = value1 * (factor2/factor1);
        document.getElementById("value2").value = value2;
    } else {
        document.getElementById("value2").value = "";
    }
}

function convertRightToLeft() {
    let unit1 = document.getElementById("magnitudes1").value
    let unit2 = document.getElementById("magnitudes2").value
    let factor1 = unitsEnergy[unit1]
    let factor2 = unitsEnergy[unit2]
    let value2 = parseFloat(document.getElementById("value2").value);
    if (!isNaN(value2)) {
        let value1 = value2 * (factor1/factor2);
        document.getElementById("value1").value = value1;
    } else {
        document.getElementById("value1").value = "";
    }
}

function changeMagnitude() {
    const magnitudeOption = document.getElementById("magnitudes").value;

    const magnitudeSelect1 = document.getElementById("unit_selector1")
    const magnitudeSelect2 = document.getElementById("unit_selector2")

    magnitudeSelect1.innerHTML = magnitudes[magnitudeOption]
    magnitudeSelect2.innerHTML = magnitudes[magnitudeOption]

    convertLeftToRight();
}

//Colocar el cambio de unidades

//Colocar que el primeor sea la primera unidad y el segundo la segunda

//Hacer las formulas