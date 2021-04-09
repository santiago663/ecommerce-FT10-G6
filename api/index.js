//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const {Products, Series, Authors} = conn.models
//PRUEBA INGRESO DE DATOS EN AUTORES SE DEBE BORRAR

// const seed = () => {
//   return Promise.all([
//     Authors.create(
//       {
//         "name": "Sam Gilliam",
//         "email": "",

//       }),
//   ])
// };


// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  
  server.listen(3001, () => {
    // seed();
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
