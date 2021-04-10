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

const {Products, Series, Authors, Categories} = conn.models
//PRUEBA INGRESO DE DATOS EN AUTORES SE DEBE BORRAR

const seed = () => {
  return Promise.all([
    Authors.findOrCreate({
      where:{
        "name": "Sam Gilliam",
        "email": "",
      }
    }),
  ])
};
const seed2 = () => {
  return Promise.all([
    Series.findOrCreate({
      where:{
        "name": "Sam Gilliam",
        "description": "alalalalla",

      }
    }),
  ])
};
const seed3 = () => {
  return Promise.all([
    Categories.findOrCreate({
      where:{
        "name": "ART MOD",
       

      }
    }),
  ])
};

// Syncing all the models at once.
conn.sync({ truncate: true }).then(() => {
  
  server.listen(3001, () => {
    seed();
    seed2();
    seed3();
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
