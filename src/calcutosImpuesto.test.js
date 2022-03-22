import calcular_Impuesto from "./calculos2";
import porcentaje_Impuesto from "./calculos";

describe("Porcentaje de Impuesto", () => {
    it("No deberia calcular el impuesto", () => {
       var resp = calcular_Impuesto(30,6.25,"TX");
       expect(resp).toEqual(0.665);
    });

   it("Deberia calcular el impuesto", () => {
        var resp = calcular_Impuesto(30,6.25,"TX");
        expect(resp).toEqual(1.875);
     });
});
