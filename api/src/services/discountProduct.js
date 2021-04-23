let discountProduct = (name2, dateBasicOrder, dataOrder) => {

    var msg = {};

    if(!!name2 && dateBasicOrder.length !==0 && dataOrder.length !==0){
        
        msg["to"] = "lls28programacion@hotmail.com",
        msg["from"] = "lu_23-7-92@hotmail.com",
        msg["subject"] = "DESCUENTOS EN PRODUCTOS",
        msg["html"] = `
            <div>
                <h1>DigitalArt LOGO<h1/>
                <h2>${name2}:tienes una compra pendiente en DigitalArt (orden ID:${dateBasicOrder[0]}), algunos de los productos tienen descuento. Aprovecha ésta oportunidad para Comprarlos!</h2>
                    <table width="300" height="50" align="center" >
                        <tr>
                            <h2>Products:</h2>
                ${dataOrder.map((m) => {
                    return(`
                        <div>
                            <table width="300" height="50" align="center" style="background:#FFFFFF; padding:15px 15px 15px 15px; border:solid 2px #E5E5E5; border-bottom:5; width:70%">
                                <tr bgcolor="#6a7da5" >
                                    <td >
                                        <img src="${m.image}" alt="${m.product} style="border:solid 1px #E5E5E5; border-radius:5" height="125" align="center" />
                                    </td>
                                    <th align="center" style="padding: 0 20px 20px 0;"height="115"  style="padding: 0 20px 20px 0;">
                                        producto: ${m.product}
                                        <br/>
                                        precio: $${m.price}
                                        
                                        PRECIO CON DESCUENTO: $${m.priceDiscount}
                                    </th>
                                </tr>
                            </table>
                        </div>
                        `
                    )
                })}
                            <h2>Valor Total de la compra sin descuento: $${dateBasicOrder[3]}</h2>
                            <h2>Valor Total conDescuento: $${dateBasicOrder[4]}</h2>
                        </tr>
                    </table>
                
                <h2>Pasa por DigitalArt para hacer tu Compra</h2>
            </div> 
        `
        return msg
    }
    else{
        msg["Error"]="incomplete data"
        return (msg)
    } 

}

module.exports = discountProduct;