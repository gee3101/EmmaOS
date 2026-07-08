import { Product } from "../types/Product";

export function identifyProduct(product: Product): Product {
  const title = product.title.toLowerCase();

  let relationship = "";
  let occasion = "";
  let emotion = "";
  let giftType = "";
  let confidence = 0;

  //--------------------------------------------------
  // RELATIONSHIPS
  //--------------------------------------------------

  const relationships = [
    { words: ["mother", "mom", "mama", "mommy", "mum"], value: "Mother", score: 100 },
    { words: ["father", "dad", "daddy", "papa", "pops"], value: "Father", score: 100 },
    { words: ["wife", "wifey", "bride", "spouse"], value: "Wife", score: 98 },
    { words: ["husband", "hubby"], value: "Husband", score: 98 },
    { words: ["girlfriend"], value: "Girlfriend", score: 95 },
    { words: ["boyfriend"], value: "Boyfriend", score: 95 },
    { words: ["son"], value: "Son", score: 100 },
    { words: ["daughter"], value: "Daughter", score: 100 },
    { words: ["grandma", "grandmother", "nana", "gigi"], value: "Grandmother", score: 96 },
    { words: ["grandpa", "grandfather"], value: "Grandfather", score: 96 },
    { words: ["sister"], value: "Sister", score: 94 },
    { words: ["brother"], value: "Brother", score: 94 },
    { words: ["friend", "best friend"], value: "Friend", score: 90 },
    { words: ["teacher"], value: "Teacher", score: 90 },
    { words: ["nurse"], value: "Nurse", score: 90 },
    { words: ["doctor"], value: "Doctor", score: 90 }
  ];

  //--------------------------------------------------
  // OCCASIONS
  //--------------------------------------------------

  const occasions = [
    { words: ["mother"], value: "Mother's Day" },
    { words: ["father", "dad"], value: "Father's Day" },
    { words: ["birthday"], value: "Birthday" },
    { words: ["anniversary"], value: "Anniversary" },
    { words: ["christmas"], value: "Christmas" },
    { words: ["valentine"], value: "Valentine's Day" },
    { words: ["graduation"], value: "Graduation" },
    { words: ["retirement"], value: "Retirement" },
    { words: ["wedding"], value: "Wedding" },
    { words: ["memorial"], value: "Memorial" },
    { words: ["sympathy"], value: "Sympathy" }
  ];

  //--------------------------------------------------
  // EMOTIONS
  //--------------------------------------------------

  const emotions = [
    { words: ["love"], value: "Love" },
    { words: ["miss"], value: "Missing" },
    { words: ["always"], value: "Faith" },
    { words: ["strong"], value: "Strength" },
    { words: ["proud"], value: "Pride" },
    { words: ["thank"], value: "Gratitude" },
    { words: ["appreciate"], value: "Appreciation" },
    { words: ["family"], value: "Family" },
    { words: ["friend"], value: "Friendship" }
  ];

  //--------------------------------------------------
  // GIFT TYPES
  //--------------------------------------------------

  const giftTypes = [
    { words: ["necklace"], value: "Necklace" },
    { words: ["bracelet"], value: "Bracelet" },
    { words: ["ring"], value: "Ring" },
    { words: ["watch"], value: "Watch" },
    { words: ["tumbler"], value: "Tumbler" },
    { words: ["mug"], value: "Mug" },
    { words: ["blanket"], value: "Blanket" },
    { words: ["canvas"], value: "Canvas" },
    { words: ["journal"], value: "Journal" },
    { words: ["wallet"], value: "Wallet" },
    { words: ["keychain"], value: "Keychain" },
    { words: ["ornament"], value: "Ornament" },
    { words: ["plaque"], value: "Plaque" }
  ];

  //--------------------------------------------------
  // DETECT RELATIONSHIP
  //--------------------------------------------------

  for (const item of relationships) {
    if (item.words.some(word => title.includes(word))) {
      relationship = item.value;
      confidence = item.score;
      break;
    }
  }

  //--------------------------------------------------
  // DETECT OCCASION
  //--------------------------------------------------

  for (const item of occasions) {
    if (item.words.some(word => title.includes(word))) {
      occasion = item.value;
      break;
    }
  }

  //--------------------------------------------------
  // DETECT EMOTION
  //--------------------------------------------------

  for (const item of emotions) {
    if (item.words.some(word => title.includes(word))) {
      emotion = item.value;
      break;
    }
  }

  //--------------------------------------------------
  // DETECT GIFT TYPE
  //--------------------------------------------------

  for (const item of giftTypes) {
    if (item.words.some(word => title.includes(word))) {
      giftType = item.value;
      break;
    }
  }

  //--------------------------------------------------
  // SMART INFERENCE
  //--------------------------------------------------

  if (!relationship && title.includes("woman")) {
    relationship = "Wife";
    confidence = 80;
  }

  if (!occasion && relationship === "Wife") {
    occasion = "Anniversary";
  }

  if (!emotion && title.includes("love")) {
    emotion = "Love";
  }

  if (!emotion && title.includes("family")) {
    emotion = "Family";
  }

  //--------------------------------------------------

  return {
    ...product,
    relationship,
    occasion,
    emotion,
    giftType,
    confidence
  };
}