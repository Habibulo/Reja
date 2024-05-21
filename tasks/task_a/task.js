// Here 21th & 22th Tasks start!
// 2024-05-20
// MIT 14 TASK A
// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi

const kerakli_harf = "e";
const sentence = "engineer";

const countLetter = (letter, sentence) => {
  const times = [];

  for (let letter of sentence.split("")) {
    if (letter.includes(kerakli_harf)) {
      times.push(letter);
    }
  }

  return times.length;
};

const result = countLetter(lt, sentence);
console.log(`'${kerakli_harf}' letter is repeated in '${sentence}' sentence '${result}' times`);
