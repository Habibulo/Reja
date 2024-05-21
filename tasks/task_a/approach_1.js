// MIT 14 TASK A
// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi
// ===================================================================================
const letter = "e"
const sentence = "engineer"
let count = 0;
const countLetter = (letter, sentence) => {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === letter) {
        count++;
        }
    }
    return count;
}
const result = countLetter(letter, sentence)
console.log(result)
console.log(`The letter "${letter}" is found ${result} times in the sentence.`);