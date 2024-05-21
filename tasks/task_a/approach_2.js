// MIT 14 TASK A
// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi


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

