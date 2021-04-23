// var name2 = "luci";
// var dateBasicOrder = [ 27, "2021-04-22T22:08:35.181Z", 'completed', '5419.00' ];

// var dataOrder = [
//     {
//       product: 'Whisper',
//       image: 'https://deliciousthemes-ourtutscom.netdna-ssl.com/wp-content/uploads/2013/02/link-2-flaming_cat___psd_by_pshoudini-d4uzbee.jpg',
//       price: '5000'
//     },
//     {
//       product: 'What You Want',
//       image: 'https://p4.wallpaperbetter.com/wallpaper/796/270/435/cyberpunk-digital-art-futuristic-wallpaper-preview.jpg',
//       price: '130'
//     },
//     {
//       product: 'Sick',
//       image: 'https://c4.wallpaperflare.com/wallpaper/846/57/155/digital-art-rabbits-horns-women-comic-art-hd-wallpaper-preview.jpg',
//       price: '289'
//     }
// ];
  
let stateOrder = (name2, dateBasicOrder, dataOrder) => {

    var msg = {};

    if(!!name2 && dateBasicOrder.length !==0 && dataOrder.length !==0){
        
        msg["to"] = "lls28programacion@hotmail.com",
        msg["from"] = "lu_23-7-92@hotmail.com",
        msg["subject"] = "Testing Node Emailulitma11?",
        msg["html"] = `
            <div>
                <h1>DigitalArt LOGO<h1/>
                <h2>${name2}: DigitalArt te informa que tu orden ID:${dateBasicOrder[0]}, con fecha de creación ${dateBasicOrder[1]} se encuentra en estado ${dateBasicOrder[2]}</h2>
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
                                        producto:${m.product}
                                        <br/>
                                        precio: $${m.price}
                                    </th>
                                </tr>
                                
                            </table>
                        </div>
                        `
                    )
                })}
                            <h2>Valor Total de la compra: $${dateBasicOrder[3]}</h2>
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

// console.log(stateOrder(name2, dateBasicOrder, dataOrder))
module.exports = stateOrder;