import calcular_Descuento from "./calculos4";

describe("Porcentaje de Descuento", () => {
    it("No deberia calcular el descuento", () => {
       var resp = calcular_Descuento(4000,5);
       expect(resp).toEqual(0.3);
    });
    it("Deberia calcular el descuento", () => {
        var resp = calcular_Descuento(4000,5);
        expect(resp).toEqual(200);
     });
});
