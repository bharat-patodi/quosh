// TODO: tagged template literal
// TODO: Study recursion
// TODO: Study nodes (we have only covered elements till now)
// TODO: Remove data in a different file

// Count: 53
let marathi = {
  above: "वरील",
  administration: "प्रशासन",
  available: "उपलब्ध",
  book: "पुस्तक",
  brother: "भाऊ",
  culture: "संस्कृती",
  develop: "विकसित",
  difficult: "कठीण",
  education: "शिक्षण",
  employment: "रोजगार",
  entertainment: "करमणूक",
  event: "कार्यक्रम",
  family: "कुटुंब",
  father: "वडील",
  game: "खेळ",
  general: "सामान्य",
  government: "सरकार",
  girl: "मुलगी",
  happy: "आनंदी",
  industry: "उद्योग",
  land: "जमीन",
  law: "कायदा",
  least: "किमान",
  management: "व्यवस्थापन",
  map: "नकाशा",
  member: "सदस्य",
  milk: "दूध",
  month: "महिना",
  mother: "आई",
  national: "राष्ट्रीय",
  necessary: "आवश्यक",
  position: "स्थिती",
  president: "अध्यक्ष",
  progress: "प्रगती",
  school: "शाळा",
  search: "शोध",
  sister: "बहीण",
  sudden: "अचानक",
  region: "प्रदेश",
  respect: "आदर",
  temperature: "तापमान",
  training: "प्रशिक्षण",
  transformation: "परिवर्तन",
  voice: "आवाज",
  water: "पाणी",
  what: "काय",
  when: "कधी",
  why: "का",
  where: "कुठे",
  which: "जे",
  work: "काम",
  world: "जग",
  you: "आपण",
};

replacer = (elem) => {
  let focusText = elem.textContent;
  if (elem.hasChildNodes()) {
    elem.childNodes.forEach(replacer);
  } else if (elem.nodeType === Text.TEXT_NODE) {
    // element.textContent = focusText.replace(/government/gi, "सरकार");
    for (word in marathi) {
      if (focusText.includes(word)) {
        let firstPart = focusText.substr(0, focusText.indexOf(word));
        let secondPart = document.createElement("span");

        // secondPart.setAttribute("data-tooltip", `${word}`);
        secondPart.classList.add("keyword");
        secondPart.innerText = marathi[word];

        let thirdPart = focusText.substr(focusText.indexOf(word) + word.length);

        elem.textContent = firstPart;
        elem.after(secondPart);
        secondPart.after(thirdPart);
        console.log(elem.parentNode);
      }
    }
  }
};

replacer(document.body);


// Temporary styling

let keywords = document.querySelectorAll('.keyword');

keywords.forEach(val => {

    // Popup
    let popup = document.createElement('div');
    popup.classList.add('popup');
    val.appendChild(popup);

    let feedback = document.createElement('p');
    let meaning = document.createElement('h5');
    let pronounce = document.createElement('div');
    let soundIcon = document.createElement('span');
    let pronounceText = document.createElement('span');

    feedback.classList.add('feedback');
    meaning.classList.add('meaning');
    pronounce.classList.add('pronounce');
    soundIcon.classList.add("volume");
    pronounceText.classList.add('pronounce-text');

    pronounce.append(soundIcon, pronounceText);
    popup.append(feedback, meaning, pronounce);

    // Styling
    val.style.fontWeight = "700";
    val.style.backgroundColor = "#3498db";
    val.style.display = "inline-block";
    val.style.padding = "0.1rem 0.5rem";
    val.style.color = "white";
    val.style.position = "relative";

    // popup.style.position = "absolute";
    // popup.style.top = "24px";
    // popup.style.zIndex = "99999999";
    // popup.style.left = "0px";
    // popup.style.border = "3px solid salmon";
    meaning.innerText = "Government";
    feedback.innerText = "Feedback";
    pronounceText.innerText = "Sarkar";
    soundIcon.innerText = "🔊";
    // popup.style.backgroundColor = "#2980b9";

    // popup.style.opacity = "0";
    // popup.style.visibility = "hidden";
});