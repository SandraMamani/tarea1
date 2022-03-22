import porcentaje_Impuesto from "./calculos";
import calcular_Impuesto from "./calculos2";
import porcentaje_Descuento from "./calculos3";
import calcular_Descuento from "./calculos4";
import total from "./calculo5";

const cantidad_1 = document.querySelector("#cantidad");
const precio_1 = document.querySelector("#precio");
const div = document.querySelector("#resul");
const div_2 = document.querySelector("#resul_2");
const div_3 = document.querySelector("#resul_3");
const div_4 = document.querySelector("#resul_4");

const estados_1 = document.querySelector("#estados");
const form = document.querySelector("#ventas-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cantidad_2 = cantidad_1.value;
  const precio_2 = precio_1.value;
  const estados_2 = estados_1.value;
  const precio_Neto = cantidad_2 *precio_2;
  const impuesto =  calcular_Impuesto(precio_Neto, porcentaje_Impuesto(estados_2),estados_2);
  const descuento =  calcular_Descuento(precio_Neto,porcentaje_Descuento(precio_Neto));
  
  //div.innerHTML = "<p>" + cantidad_2 +"&nbsp"+ precio_2 + "&nbsp" + estados_2 + "&nbsp" + porcentaje_Impuesto(estados_2) +  "</p>";
  div.innerHTML = "<p>" + "Precio neto ("+ cantidad_2 + "*" + "$" + precio_2 + ") :" + "&nbsp" + "$"  + precio_Neto + "</p>";
  div_2.innerHTML = "<p>" + "Impuesto para: " + estados_2 + "(%" + porcentaje_Impuesto(estados_2) + "):" +
   "&nbsp" + impuesto + "</p>";
  div_3.innerHTML = "<p>" + "Descuento (" +  porcentaje_Descuento(precio_Neto) + " %): " +  descuento + "</p>"; 
  div_4.innerHTML = "<p>" + "Calcular el Precio Total: "+ "$" + total(precio_Neto,descuento,impuesto) + "</p>"
});
