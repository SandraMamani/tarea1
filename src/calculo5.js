function total(precio,descuento,Impuesto)
{
    var resp= precio + Impuesto - descuento;
    return resp;
}

export default total;
