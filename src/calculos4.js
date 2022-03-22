function calcular_Descuento(precio,descuento)
{
    var resp = 0;
    resp = precio * (descuento/100)
    return resp;
}

export default calcular_Descuento;