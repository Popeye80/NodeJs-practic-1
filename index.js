// const { getCurrentDate } = require("./dateUtils");
// console.log(`get current date function result: ${getCurrentDate()}`);

// переменные
// global=window
// console.log(process.env)
// console.log(process.argv);
// process.exit();
// console.log(__dirname)
// console.log(__filename);

// Самый простой CLI
// const Calc = require("calc-js").Calc;
// console.log(process.argv);
// const [, , a, b] = process.argv;
// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());
// node index 2 3
// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());

// Работа с файловой системой
// const path = require("path");
// console.log(path.resolve("dateUtils.js"));

// FS
// const fs = require("fs");
// fs.readFile("./data.txt", "utf8", (error, data) => {
//   if (error) {
//     console.error(err);
//   }
//   console.log(data);
// });
// console.log(12345)

///////////////////////
// const fs = require("fs").promises;
// const path = require("path");
// fs.readFile(path.resolve("./data.txt"), "utf8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.error);

// console.log(12345);

//////////////////////
// const fs = require("fs").promises;
// const path = require("path");
// (async () => {
//   try {
//     const data = await fs.readFile(path.resolve("./data.txt"), "utf8");
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// })();

// запись файла
// const fs = require("fs").promises;
// const path = require("path");
// (async () => {
//   try {
//     const data = await fs.readFile(path.resolve("./data.txt"), "utf8");
//     console.log(data);

//     const newContent = `${data} school`;
//       await fs.writeFile("./data1.txt", newContent, "utf8");
//       переименование,перемещение
//       await fs.rename("./dateUtils.js", './tmp/data2.js');
//       /////////////////////////////
//       читаем файл
//       console.log(await fs.readdir('./tmp'))
//       ///////////////////////////////
//       удаление
//       await fs.unlink("./tmp/data2.js");
//       //////////////////////////////////
//   } catch (err) {
//     console.error(err);
//   }
// })();
