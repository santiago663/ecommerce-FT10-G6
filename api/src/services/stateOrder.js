
let stateOrder = (name2, prodsImgPrice,) => {

    var msg = {};

    if(!!name2 && prodsImgPrice.length !==0){
        
        msg["to"] = "lls28programacion@hotmail.com",
        msg["from"] = "lu_23-7-92@hotmail.com",
        msg["subject"] = "DigitalArt: Orden Completada",
        msg["html"] = `
            <div>
                <h1>DigitalArt LOGO<h1/>
                <h2>${name2}: DigitalArt te informa que tu orden ID:${prodsImgPrice[0].Graldate[0]}, con fecha de creación ${prodsImgPrice[0].Graldate[1]} se encuentra en estado ${prodsImgPrice[0].Graldate[2]}</h2>
                    <table width="300" height="50" align="center" >
                        <tr>
                            <h2>Products:</h2>
                ${prodsImgPrice.map((m) => {
                    return(`
                        <div>
                            <table width="800" height="150" align="center" style="background:#FFFFFF; padding:15px 15px 15px 15px; border:solid 2px #E5E5E5; border-bottom:5; width:80%">
                                <tr bgcolor="#6a7da5" >
                                    <td >
                                        <img src="${m.image}" alt="${m.product} style="border:solid 1px #E5E5E5; border-radius:5" height="200" align="center" />
                                    </td>
                                    <th align="center" style="padding: 0 20px 20px 0;"height="200"  style="padding: 0 20px 20px 0;">
                                        producto:${m.product}
                                        <br/>
                                        precio: $${m.price}
                                        <br/>
                                        
                                    </th>
                                </tr>
                                
                            </table>
                            <h5 align="center">Download Link: ${m.image}</h5>
                        </div>
                        `
                    )
                })}
                            <h2>Valor Total de la compra: $${prodsImgPrice[0].Graldate[3]}</h2>
                        </tr>
                    </table>
                
                <h2>Gracias por tu Compra</h2>
            </div> 
        `
        return msg
    }
    else{
        msg["Error"]="incomplete data"
        return (msg)
    } 

}

module.exports = stateOrder;