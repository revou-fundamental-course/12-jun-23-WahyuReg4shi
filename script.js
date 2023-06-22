function convertTemperature() {
  var celsiusInput = document.getElementById("celsius");
  var celsius = parseFloat(celsiusInput.value);

  var fahrenheit = (celsius * 9) / 5 + 32;

  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "Fahrenheit: " + fahrenheit.toFixed(2);
}

function convertsTemperature() {
  var fahrenheitInput = document.getElementById("Fahrenheit");
  var fahrenheit = parseFloat(fahrenheitInput.value);

  var celsius = ((fahrenheit - 32) * 5) / 9;

  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "celcius:" + celsius.toFixed(2);
}

function tampilkanRumus() {
  var rumus = "Rumus Kalkulasi Suhu:\n";
  rumus += "Celcius ke Fahrenheit: (Celcius * 9/5) + 32\n";
  rumus += "Fahrenheit ke Celcius: (Fahrenheit - 32) * 5/9\n";

  document.getElementById("rumusSuhu").value = rumus;
}
