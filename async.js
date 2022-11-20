// async.json






// async function addAsync(x) {
//     const a = await doubleAfter2Seconds(10);
//     const b = await doubleAfter2Seconds(20);
//     const c = await doubleAfter2Seconds(30);
//     return x + a + b + c;
// }

// addAsync(10).then((sum) => {
//     console.log(sum);
// });




// function addPromise(x) {
//     return new Promise(resolve => {
//         doubleAfter2Seconds(10).then((a) => {
//             doubleAfter2Seconds(20).then((b) => {
//                 doubleAfter2Seconds(30).then((c) => {
//                     resolve(x + a + b + c);
//                 })
//             })
//         })
//     });
// }

// addPromise(1).then((r) => {
//     console.log(r);
// });


// function doubleAfter2Seconds(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(x * 2);
//         }, 2000);
//     });
// }

// doubleAfter2Seconds(10).then((r) => {
//     console.log(r);
// });

// async function loadJson(url) {
//     let response = await fetch(url);
//     if (response.status == 200) {
//         let json = await response.json();
//         return json;
//     }
//     throw new Error(response.status);
// }

// loadJson('https://javascript.info/no-such-user.json')
//     .catch(alert); // Error: 404

///////    
// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         });
// }

// loadJson('https://javascript.info/no-such-user.json')
//     .catch(alert); // Error: 404






// async function f() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done!"), 1000)
//     });

//     let result = await promise;
//     alert(result);

// }

// f();

// const img = document.querySelector('img');

// async function getCats() {
//     const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=Y9fe8s3khPIuGfg4CO8Cr83q33h1S94Y&s=cats', { mode: 'cors' })
//     const catData = await response.json();
//     img.src = catData.data.images.original.url;
// }

// getCats();














// const img = document.querySelector('img');

// fetch('https://api.giphy.com/v1/gifs/translate?api_key=Y9fe8s3khPIuGfg4CO8Cr83q33h1S94Y&s=ship', { mode: 'cors' })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (response) {
//         img.src = response.data.images.original.url;
//     });
