// TODO: Study recursion
// TODO: Study nodes (we have only covered elements till now)
// TODO: Remove data in a different file

let data = {
  temperature: "तापमान",
  industry: "उद्योग",
  difficult: "कठीण",
  necessary: "आवश्यक",
  milk: "दूध",
  least: "किमान",
  happy: "आनंदी",
  month: "महिना",
  general: "सामान्य",
  region: "प्रदेश",
  sudden: "अचानक",
  brother: "भाऊ",
  sister: "बहीण",
  mother: "आई",
  father: "वडील",
  world: "जग",
  voice: "आवाज",
  develop: "विकसित",
  girl: "मुलगी",
  above: "वरील",
  event: "कार्यक्रम",
  administration: "प्रशासन",
  management: "व्यवस्थापन",
  law: "कायदा",
  book: "पुस्तक",
  search: "शोध",
  you: "आपण",
  what: "काय",
  land: "जमीन",
  national: "राष्ट्रीय",
  training: "प्रशिक्षण",
  education: "शिक्षण",
  culture: "संस्कृती",
  game: "खेळ",
  map: "नकाशा",
  family: "कुटुंब",
  world: "जग",
  work: "काम",
  entertainment: "करमणूक",
  available: "उपलब्ध",
  transformation: "परिवर्तन",
  school: "शाळा",
  president: "अध्यक्ष",
  respect: "आदर",
  member: "सदस्य",
  progress: "प्रगती",
  position: "स्थिती",
  employment: "रोजगार",
  water: "पाणी",
  government: "सरकार",
};

replacer = (elem) => {
    let focusText = elem.textContent;
    let keyword = 'government';
    let translation = "सरकार";
    if(elem.hasChildNodes()) {
        elem.childNodes.forEach(replacer);
    } else if(elem.nodeType === Text.TEXT_NODE) {
        // element.textContent = focusText.replace(/government/gi, "सरकार");
        if (focusText.includes(keyword)) {
        //   let focusText = focusNode.textContent;
          let firstPart = focusText.substr(0, focusText.indexOf(keyword));
          let secondPart = document.createElement("span");

          secondPart.classList.add("keyword");
          secondPart.innerText = translation;

          let thirdPart = focusText.substr(
            focusText.indexOf(keyword) + keyword.length
          );

          elem.textContent = firstPart;
          elem.after(secondPart);
          secondPart.after(thirdPart);
          console.log(elem.parentNode);

        //   elem.insertAdjacentHTML("afterend", secondPart);
        //   secondPart.insertAdjacentText("afterend", thirdPart);
        }
    }
}

replacer(document.body);
