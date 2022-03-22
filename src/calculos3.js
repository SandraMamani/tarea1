function porcentaje_Descuento(a)
{
    var resp = 0;
    if(a >= 1000 && a < 3000)
    {
        resp = 3;    
    }
    if(a >= 3000 && a < 7000)
    {
       resp = 5;
    }
    if(a >= 7000 && a < 10000 )
    {
       resp = 7;
    } 
    if(a >= 10000 && a < 30000 )
    {
       resp = 10;
    }
    if(a >= 30000 )
    {
       resp = 15;
    }
    return resp;
}

export default porcentaje_Descuento;
