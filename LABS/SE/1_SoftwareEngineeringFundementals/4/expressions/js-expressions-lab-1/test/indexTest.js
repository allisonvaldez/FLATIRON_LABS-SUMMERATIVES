require('./helpers.js');


describe('index.js', function () {
    // Temperature Data
    const celsiusTemps = [25, 18, 15, 28, 20, 23, 30, 22, 24, 21, 27, 19, 26, 17, 29];
    const fahrenheitTemps = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];

    // Data Conversions
    const celsiusTempsToFahrenheit = celsiusTemps.map(temp => ((temp * 9 / 5) + 32));
    const fahrenheitTempsToCelsius = fahrenheitTemps.map(temp => ((temp - 32) * 5 / 9));

    // Data in full list
    const allTempsInFahrenheit = fahrenheitTemps.concat(celsiusTempsToFahrenheit)
    const allTempsInCelsius = celsiusTemps.concat(fahrenheitTempsToCelsius)

    // Calculate the total temperatures
    const temperature_in_fahrenheit = allTempsInFahrenheit.reduce((sum, temp) => sum + temp, 0);
    const temperature_in_celsius = allTempsInCelsius.reduce((sum, temp) => sum + temp, 0);
    
    // Calculate mean of temperatures
    const meanCelsius = temperature_in_celsius / allTempsInCelsius.length;
    const meanFahrenheit = temperature_in_fahrenheit / allTempsInFahrenheit.length;

    describe('tot_temperature_in_fahrenheit', function () {
        it('is a floating number', function () {
            float_check = tot_temperature_in_fahrenheit % 1 !== 0;
            
            expect(tot_temperature_in_fahrenheit).to.be.a('number');
            expect(float_check).to.be.true;
        });

        it('is accurate with a tolerance of 0.2 degrees', function () {
            expect(tot_temperature_in_fahrenheit).to.be.closeTo(temperature_in_fahrenheit, 0.2)
        });
    });

    describe('tot_temperature_in_celsius', function () {
        it('is a floating number', function () {
            float_check = tot_temperature_in_celsius % 1 !== 0;
            
            expect(tot_temperature_in_celsius).to.be.a('number');
            expect(float_check).to.be.true;
        });

        it('is accurate with a tolerance of 0.2 degrees', function () {
            expect(tot_temperature_in_celsius).to.be.closeTo(temperature_in_celsius, 0.2)
        });
    });

    describe('avg_temperature_in_fahrenheit', function () {
        it('is a floating number', function () {
            float_check = meanFahrenheit % 1 !== 0;
            
            expect(avg_temperature_in_fahrenheit).to.be.a('number');
            expect(float_check).to.be.true;
        });

        it('is accurate with a tolerance of 0.2 degrees', function () {
            expect(avg_temperature_in_fahrenheit).to.be.closeTo(meanFahrenheit, 0.2)
        });
    });

    describe('avg_temperature_in_celsius', function () {
        it('is a floating number', function () {
            float_check = avg_temperature_in_celsius % 1 !== 0;
            
            expect(avg_temperature_in_celsius).to.be.a('number');
            expect(float_check).to.be.true;
        });

        it('is accurate with a tolerance of 0.2 degrees', function () {
            expect(avg_temperature_in_celsius).to.be.closeTo(meanCelsius, 0.2)
        });
    });

});