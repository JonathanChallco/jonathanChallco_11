let pagoMes = 10000; // pago mensual
let consumoKWH = 250; //kilovatios hora
let aumento = 20; // aumento de 20%

// Ajuste tarifa
let pagoAjustado = consumoKWH >= 300 ? pagoMes * aumento/100 : pagoMes;

console.log("Debido a que su hogar tuvo un consumo de", consumoKWH,"kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $",pagoAjustado);