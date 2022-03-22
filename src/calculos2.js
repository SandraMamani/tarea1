function calcular_Impuesto(precio,estadoImpuesto,nombreEstado)
{
    var resp;
    if(nombreEstado = "CA")
    {
        resp = precio * (estadoImpuesto/100);
    }
    if(nombreEstado = "TX")
    {
        resp = precio * (estadoImpuesto/100);
    }
    if(nombreEstado = "AL")
    {
        resp = precio * (estadoImpuesto/100);
    }
    if(nombreEstado = "NV")
    {
        resp = precio * (estadoImpuesto/100);
    }
    if(nombreEstado = "UT")
    {
        resp = precio * (estadoImpuesto/100);
    }
    return resp;
}

export default calcular_Impuesto;