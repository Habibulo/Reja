// 21-22 Dars

// const { rejects } = require("assert");
// const { resolve } = require("path");


/*
    Backend Lang => Single Thread with Event Loop => Thread Pools [Libuv Engine]
        - Assynchronious Function
        - CallBack Function larni 
            yaxshi ornatishimiz muhim!
        
*/ 
// console.log("Jack Ma maslahatlari");
// const list = [
// "yahshi talaba boling", // 0-20
// "togri boshliq tanlang va koproq hato qiling", // 20-30
// "uzingizga ishlashingizni boshlang", // 30-40
// "siz kuchli bolgan narsalarni qiling", // 40-50
// "yoshlarga investitsiya qiling", // 50-60
// "endi dam oling, foydasi yoq endi", // 60
// ];

// function giveAdvice(a, callback) {
//     if(typeof a !=="number") callback("ERROR!!! Please insert number", null)
//     else if( a <= 20) callback(null, list[0])
//     else if( a > 20 && a <=30) callback(null, list[1])
//     else if( a > 30 && a <=40) callback(null, list[2])
//     else if( a > 40 && a <=50) callback(null, list[3])
//     else if( a > 50 && a <=60) callback(null, list[4])
//     else {
//         setTimeout(function() {
//             callback(null, list[5])
//             }, 5000)
//         }
// };

// /* Function ni ishga tushirish

//     [const app = express();
//     const server = http.createServer(app)] =>
//         =>  server.js dagi shu app serverda 
//             single thread ga tushib shuyerda amalga oshirilyabdi

// */

// console.log("train started here")
// giveAdvice(65, (err, data)=> {
//     if(err) console.log("ERROR:", err)
//     else {
//         console.log("Answer:", data)
//     }    
// })
// console.log("train finished here")    


/*  
    22-Dars dan 
        asyncronious function larga ozgartiramiz
    
*/

// async function giveAdvice(a) {
//     if(typeof a !=="number") throw new Error("ERROR!!! Please insert number")
//     else if( a <= 20) return list[0];
//     else if( a > 20 && a <=30)  return list[1];
//     else if( a > 30 && a <=40)  return list[2];
//     else if( a > 40 && a <=50)  return list[3];
//     else if( a > 50 && a <=60)  return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//                 }, 5000)
//         })
        // Promise function lar ni ishlatamiz keyinchalik
        // Async function larda setTimeout va SetInterval 
        // core method lar ishga tushmaydi
            // setTimeout(function() {
            //     returnlist[0];
            //     }, 5000)
    // }
// };

/*
    call back qismida sync function orqali .then() .catch() ni ishlatdik
    console.log("train started here")
    
    giveAdvice(65)
    .then((data) => {
        console.log("Answer:", data)
    })
    .catch((err) => {
        console.log("Error:", err)
    })
    console.log("train finished here");
*/


// endi call qismida endi async function ni ishlatamiz
// async function run() {
//     let advices = await giveAdvice(20);
//     console.log("20 yoshda: ", advices)
//     advices = await giveAdvice(30);
//     console.log("30 yoshda: ", advices)
//     advices = await giveAdvice(45);
//     console.log("45 yoshda: ", advices)
//     advices = await giveAdvice(65);
//     console.log("65 yoshda: ", advices)
//     advices = await giveAdvice(27);
//     console.log("27 yoshda: ", advices)
// }
// run()
// ===================================================================================
/*     // MIT 14 TASK A
    // Harf sifatida kiritilgan birinchi parametr, 
    // kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
    // Funktsiya tuzing

    // Masalan: countLetter("e", "engineer")
    // 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
    // 3 sonini qaytaradi


    // ===================================================================================
    // APPROACH 1
    const character = "e";
    const sentence = "engineer";

    const countLetter = (character, sentence) => {
    let count = 0;

    // Split the sentence into an array of characters
    const characters = sentence.split("");

    for (let i = 0; i < characters.length; i++) {
        if (characters[i] === character) {
        count++;
        }
    }
    return count;
    };

    const result = countLetter(character, sentence);
    console.log(`'${character}' letter is repeated in '${sentence}' sentence '${result}' times`);  // Output: 'e' letter is repeated in 'engineer' sentence '3' times


    // APPROACH 2
    const letter = "e"
    const soz = "engineer"
    let count = 0;
    const countLetters = (letter, soz) => {
        let count = 0;
        for (let i = 0; i < soz.length; i++) {
            if (soz[i] === letter) {
            count++;
            }
        }
        return count;
    }
    const resultat = countLetter(letter, soz)
    console.log(resultat)
    console.log(`The letter "${letter}" is found ${resultat} times in the sentence.`); */
