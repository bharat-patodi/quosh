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


// Temporary styling

let keywords = document.querySelectorAll('.keyword');

keywords.forEach(val => {

    // Popup
    let popup = document.createElement('span');
    popup.classList.add('popup');
    val.appendChild(popup);

    // Styling
    val.style.fontWeight = "700";
    val.style.backgroundColor = "#3498db";
    val.style.display = "inline-block";
    val.style.padding = "0.1rem 0.5rem";
    val.style.color = "white";
    val.style.position = "relative";

    popup.style.position = "absolute";
    popup.style.top = "24px";
    popup.style.left = "0px";
    popup.style.border = "3px solid salmon";
    popup.innerText = "Hi, this should work";
    popup.style.backgroundColor = "#2980b9";

    // popup.style.display = "none";
});