document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitResult = document.getElementById("fahrenheitResult");
    const kelvinResult = document.getElementById("kelvinResult");

    convertButton.addEventListener("click", function () {
        const celsiusValue = parseFloat(celsiusInput.value);

        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = (celsiusValue * 9/5) + 32;
            const kelvinValue = celsiusValue + 273.15;

            fahrenheitResult.textContent = fahrenheitValue.toFixed(2) + " °F";
            kelvinResult.textContent = kelvinValue.toFixed(2) + " K";
        } else {
            alert("Please enter a valid temperature in Celsius.");
        }
    });
});
