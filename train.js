// 21-22 Dars

const { log } = require("console");

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


// ===================================================================================
// ===================================================================================
// ===================================================================================






// 23-24-25 Dars

// MIT 14 TASK B

// Shunday, function tuzingki, bu function yagona parametrga ega bo'lib
// string tarkibidagi sonlar miqdorini qaytarsin

// Masalan: countDigits("ad2a54y79wet0sfgb9")
// Yoqoridagi string tarkibida 7 dona raqam qatnashganligi uchun, natija 7 qaytadi

// ===================================================================================
// const countDigits_2 = (text) => {
//     return text.replace(/[^0-9]/g, "").length;
// };

// console.log("Answer:", countDigits_2("ad2a54y79wet0sfgb9"));


// 2024-05-26
// 26-27 Dars
// MIT 14 TASK-C

// Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
// Hamda classning quyidagdek 3'ta metodi bo'lsin:

// 1) qoldiq
// 2) sotish
// 3) qabul

// Har bir metod ishga tushgan vaqtda log qilinsin

// MASALAN:
// const shop = new Shop(4, 5, 2)

// shop.qoldiq();
// natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

// shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
// Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!
// ===================================================================================
// class Shop {
//     constructor(side_menu, food_name, drinks, count) {
//         this.side_menu = side_menu;
//         this.food_name = food_name;
//         this.drinks = drinks;
//         this.count = count
//     }
//     qoldiq() {
//         const date = new Date()
//         if (this.side_menu <= 0 || this.food_name <= 0 || this.drinks <= 0) {
// 			console.log("Hozircha omborda mahsulotlar tugaganlari bor");
// 		} 
//         else {
//             const ombor = (`
//                 Hozir 
//                 ${date.toLocaleTimeString()} da 
//                 ${this.side_menu}ta non, 
//                 ${this.food_name}ta lag'mon va 
//                 ${this.drinks} blok cola mavjud`);
// 			console.log(ombor);
//             }
//     }
//     sotish(mahsulot, soni) {
//         switch (mahsulot.toLowerCase()) {
//             case "non":
//                 this.side_menu -= soni;
//                 break;
//             case "lag'mon":
//                 this.food_name -= soni;
//                 break;
//             case "cola":
//                 this.drinks -= soni;
//                 break;
//             default:
//                 console.log(`Hozirda omborda '${mahsulot}' mavjud emas`);
//                 break;
//     }
//     }
//     qabul(mahsulot, qabul_soni) {
//         switch (mahsulot.toLowerCase()) {
//             case "non":
//                 this.side_menu += qabul_soni;
//                 break;
//             case "lag'mon":
//                 this.food_name += qabul_soni;
//                 break;
//             case "cola":
//                 this.drinks += qabul_soni;
//                 break;
//             default:
//                 console.log(`Hozirda omborda '${mahsulot}' mavjud emas`);
//                 break;
//             }
//     }
// }
// const shop = new Shop(4, 5, 2)
// // shop.qoldiq()
// shop.sotish("non", 1)
// shop.qabul('cola', 50)
// shop.qoldiq()
// ===================================================================================

// 2024-05-29
// 28-29 Dars
// MIT 14 TASK-D

//D-TASK: 
//Shunday function tuzing, u 2ta string parametr ega bolsin,
//hamda agar har ikkala string bir hil harflardan iborat bolsa 
//true aks holda false qaytarsin
//MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;


// function compareStrings(str1, str2) {
//     if (typeof str1 !== 'string' || typeof str2 !== 'string') {
//         console.error('Both parameters must be strings');
//         return;
//     }

//     // Convert strings to arrays of characters
//     let arr1 = str1.split('');
//     let arr2 = str2.split('');

//     // Sort the arrays to compare characters regardless of their order
//     arr1.sort();
//     arr2.sort();

//     // Join the arrays back to strings for easy comparison
//     let sortedStr1 = arr1.join('');
//     let sortedStr2 = arr2.join('');

//     if (sortedStr1 === sortedStr2) {
//         console.log('All strings match');
//     } else {
//         console.error('Error: Strings do not match');
//         console.error('Difference in str1: ', str1.split('').filter(char => !str2.includes(char)));
//         console.error('Difference in str2: ', str2.split('').filter(char => !str1.includes(char)));
//     }
// }

// // Example usage:
// compareStrings("mitgroup", "gmtiprou"); // All strings match
// compareStrings("mitgroup", "lmtdpreu"); // Error: Strings do not match

// ===================================================================================

// E-TASK: 

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"


function getReverse(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
  }
  
  // Misol uchun:
  let result = getReverse("Khabibullo");
  console.log(result);

// ETASK