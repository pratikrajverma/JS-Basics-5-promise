// setTimeout(() => {
//     console.log('first')
// }, 3000);

// console.log('hiii')

let first = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log("first");
        resolve();
      }, 5000);
    } catch (err) {
      console.log("error: in first");
      reject(err);
    }
  });
};

let second = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log("second");
        resolve();
      }, 3000);
    } catch (err) {
      console.log("error: in second");
      reject(err);
    }
  });
};

let third = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log("third");
        resolve();
      }, 1000);
    } catch (err) {
      console.log("error: in third");
      reject(err);
    }
  });
};

//.....................  Promise chaining  ....................

first()
  .then(() => {
    return second();
  })
  .then(() => {
    return third();
  })
  .catch((err) => {
    console.log("promise ended",err);
  });

// ............ this is example of complex code due to codeback hell ......................
// first(()=>{

//     second(()=>{

//         third(()=>{

//             forth(()=>{

//                 fifth(()=>{

//                     six(()=>{

//                         seven(()=>{

//                             eight(()=>{

//                                 ten(()=>{

//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })


//.......................... async await ..............................

// let first = () => {
//   return new Promise((resolve, reject) => {
//     try {
//       setTimeout(() => {
//         console.log("first");
//         resolve();
//       }, 5000);
//     } catch (err) {
//       reject(err);
//     }
//   });
// };

// let second = () => {
//   return new Promise((resolve, reject) => {
//     try {
//       setTimeout(() => {
//         console.log("second");
//         resolve();
//       }, 3000);
//     } catch (err) {
//       reject(err);
//     }
//   });
// };

// let third = () => {
//   return new Promise((resolve, reject) => {
//     try {
//       setTimeout(() => {
//         console.log("third");
//         resolve();
//       }, 0);
//     } catch (err) {
//       reject(err);
//     }
//   });
// };

//   async function asycawait(){

//     await first();

//     await second();

//        third();

//     console.log('hiii')

// }

// asycawait();


// await works on async function which returns promise otherwise it will not work as expected


// async  function temp(){

//    let res =  await fetch('./index.html')

//    console.log(res)

//    await  setTimeout(() => {
//         console.log('first')
//     }, 1000);

//      setTimeout(() => {
//          console.log('second')
//    }, 2000);

// }

// temp()



