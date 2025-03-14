const units = {
    energy: {
        joule: 1,
        kilojoule: 0.001,
        calorygram: 0.239006,
        kilocalory: 0.000239006,
        watthour: 0.000277778,
        kilowatthour: 2.7778e-7,
        electronvolt: 6.242e18
    },
    area: {
        squarekilometer: 1,
        squaremeter: 1e+6,
        squaremile: 0.386102,
        squareyard: 1.196e+6,
        squarefoot: 1.076e+7,
        squareinch: 1.55e+9,
        acre: 247.105,
        hectare: 100
    },
    mass: {
        gram: 1,
        kilogram: 0.001,
        tonnel: 1e-6,
        milligram: 1000,
        microgram: 1e+6,
        pound: 0.00220462,
        ounce: 0.035274
    },
    volume: {
        gallon: 0.264172,
        fluidounce: 33.814,
        cubicmeter: 0.001,
        liter: 1,
        milliliter: 1000
    },
    frequency: {
        hertz: 1,
        kilohertz: 0.001,
        megahertz: 1e-6,
        gigahertz: 1e-9
    },
    length: {
        meter: 1,
        kilometer: 0.001,
        centimeter: 100,
        millimeter: 1000,
        micrometer: 1e+6,
        nanometer: 1e+9,
        mile: 0.000621371,
        yard: 1.09361,
        foot: 3.28084,
        inch: 39.3701
    },
    pressure: {
        bar: 1,
        atmosphere: 0.986923,
        pascal: 100000,
        torr: 750.062
    },
    temperature: {

    },
    time: {
        nanosecond: 1e+9,
        microsecond: 1e+6,
        millisecond: 1000,
        second: 1,
        minute: 1 / 60,
        hour: 1 / 3600,
        day: 1 / 86400,
        week: 1 / 604800,
        month: 1 / 2.628e+6,
        year: 1 / 3.154e+7, 
        decade: 1 / 3.154e+8,
        century: 1 / 3.154e+9
    },
    speed: {
        kmph: 1,
        mps: 0.277778,
        feetspersecond: 0.911344,
        mph: 0.621371,
        knot: 0.539957
    },
    money: {
        dolar: 1,
        euro: 0,
        pound: 0,
        yen: 0,
        bitcoin:0,
        ethereum: 0
    }
};

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
        <option value="hectare">Hectare</option>
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
    money:`
    <select id="magnitudes1" name="magnitudes" onchange="convertRightToLeft()">
        <option value="dolar">Dolar</option>
        <option value="euro">Euro</option>
        <option value="pound">Pound</option>
        <option value="yen">Yen</option>
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
    </select>
    `,
}

window.onload = function() {
    document.getElementById("magnitudes").value = "energy";
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
};



function convertLeftToRight() {
    let unit1 = document.getElementById("magnitudes1").value
    let unit2 = document.getElementById("magnitudes2").value
    let magnitude = document.getElementById("magnitudes").value
    let value1 = parseFloat(document.getElementById("value1").value);
    if (magnitude == "temperature") {
        if (!isNaN(value1)) {
            let value2 = convertTemperature(unit1,unit2,value1);
            document.getElementById("value2").value = formatNumber(value2);
        } else {
            document.getElementById("value2").value = "";
        }
    }else {
        let factor1 = units[magnitude][unit1]
        let factor2 = units[magnitude][unit2]
        if (!isNaN(value1)) {
            let value2 = value1 * (factor2/factor1);
            document.getElementById("value2").value = formatNumber(value2);
        } else {
            document.getElementById("value2").value = "";
        }
    }
}

function convertRightToLeft() {
    let unit1 = document.getElementById("magnitudes1").value
    let unit2 = document.getElementById("magnitudes2").value
    let magnitude = document.getElementById("magnitudes").value
    let value2 = parseFloat(document.getElementById("value2").value);
    if (magnitude == "temperature") {
        if (!isNaN(value2)) {
            let value1 = convertTemperature(unit2,unit1,value2);
            document.getElementById("value1").value = formatNumber(value1);
        } else {
            document.getElementById("value1").value = "";
        }
    }else {
        let factor1 = units[magnitude][unit1]
        let factor2 = units[magnitude][unit2]
        if (!isNaN(value2)) {
            let value1 = value2 * (factor1/factor2);
            document.getElementById("value1").value = formatNumber(value1);
        } else {
            document.getElementById("value1").value = "";
        }
    }

}

function changeMagnitude() {
    const magnitudeOption = document.getElementById("magnitudes").value;

    const magnitudeSelect1 = document.getElementById("unit_selector1")
    const magnitudeSelect2 = document.getElementById("unit_selector2")

    magnitudeSelect1.innerHTML = magnitudes[magnitudeOption]
    magnitudeSelect2.innerHTML = magnitudes[magnitudeOption]

    let select2 = magnitudeSelect2.querySelector("select");

    if (select2) {
        select2.id = "magnitudes2";
        select2.onchange = convertLeftToRight;
    };

    const input1 = document.getElementById("value1")
    const input2 = document.getElementById("value2")

    input1.value = ""
    input2.value = ""

    convertLeftToRight();
}

function convertTemperature(temperature1,temperature2,value) {
    if (temperature1 == "celsius") {
        if (temperature2 == "kelvin") {
            return value + 273.15
        } else if (temperature2 == "fahrenheit") {
            return (value*(9/5))+32
        } else{
            return value
        }
    } else if (temperature1 == "fahrenheit"){
        if (temperature2 == "kelvin") {
            return ((value-32)*(5/9))+273.15
        } else if (temperature2 == "celsius") {
            return (value-32)*(5/9)
        } else{
            return value
        }
    } else if (temperature1 == "kelvin") {
        if (temperature2 == "celsius") {
            return value - 273.15
        } else if (temperature2 == "fahrenheit") {
            return ((value-273.15)*(9/5))+32
        } else{
            return value
        }
    }
}

function formatNumber(num) {
    if (Math.abs(num) >= 1e6 || Math.abs(num) < 1e-3 && num !== 0) {
        return num.toExponential(2); 
    } else {
        return parseFloat(num.toFixed(4)); 
    }
}

function fetchExchangeRates() {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=usd,bitcoin,ethereum&vs_currencies=eur,gbp,jpy,usd")
        .then(response => response.json())
        .then(data => {
            units.money.euro = data.usd.eur;
            units.money.pound = data.usd.gbp;
            units.money.yen = data.usd.jpy;

            units.money.bitcoin = 1/data.bitcoin.usd;
            units.money.ethereum = 1/data.ethereum.usd;
        })
        .catch(error => console.error("Error al obtener los datos:", error));
}

fetchExchangeRates();
setInterval(fetchExchangeRates, 60000);
