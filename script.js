// TODO: tagged template literal
// TODO: Study recursion
// TODO: Study nodes (we have only covered elements till now)
// TODO: Remove data in a different file

// Count: 53
// import {handleAllTabsPermission} from "./modal.js";



console.log("content script working");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse) {
  if (request.msg === "allowAccessToAllTabs") {
      console.log("Acess Working");

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
        which: "कोणते",
        work: "काम",
        world: "जग",
        you: "आपण",
        your: "आपले"
      };
      
      /*
        Replacer function for extracting and replacing the text
        @param: element (HTML element in which we want to replace the word)
      */
      
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
              secondPart.classList.add("quosh__keyword");
              secondPart.innerText = marathi[word];
      
              let thirdPart = focusText.substr(focusText.indexOf(word) + word.length);
      
              elem.textContent = firstPart;
              elem.after(secondPart);
              secondPart.after(thirdPart);
              // console.log(elem.parentNode);
            }
          }
        }
      };
      
      // Function to get the key value associated with the key
          getKeyByValue = (val, obj) => {
            return Object.keys(obj)[Object.values(obj).indexOf(val)];
          };
      
      replacer(document.body);
      
      // Popup Code
      
      let keywords = document.querySelectorAll('.quosh__keyword');
      
      keywords.forEach(val => {
      
          // Popup
          let popup = document.createElement('div');
          popup.classList.add('quosh__popup');
          val.appendChild(popup);
      
          let feedback = document.createElement('p');
          let meaning = document.createElement('h5');
          let pronounce = document.createElement('div');
          let soundIcon = document.createElement('span');
          let pronounceText = document.createElement('span');
      
          feedback.classList.add('quosh__feedback');
          meaning.classList.add('quosh__meaning');
          pronounce.classList.add('quosh__pronounce');
          soundIcon.classList.add("quosh__volume");
          pronounceText.classList.add('quosh__pronounce-text');
      
          pronounce.append(soundIcon, pronounceText);
          popup.append(feedback, meaning, pronounce);
      
          // Styling
          val.style.fontWeight = "700";
          val.style.backgroundColor = "#ecdbef";
          val.style.display = "inline-block";
          val.style.padding = "0.1rem 0.5rem";
          val.style.color = "#272727";
          val.style.position = "relative";
      
          // popup.style.position = "absolute";
          // popup.style.top = "24px";
          // popup.style.zIndex = "99999999";
          // popup.style.left = "0px";
          // popup.style.border = "3px solid salmon";
      
          meaning.innerText = getKeyByValue(
            meaning.parentElement.parentElement.innerText,
            marathi
          );
          // console.log(getKeyByValue(meaning.parentElement.parentElement.innerText, marathi));
          feedback.innerText = "Feedback";
          pronounceText.innerText = getKeyByValue(
            meaning.parentElement.parentElement.innerText,
            marathi
          );
          soundIcon.innerText = "🔊";
          // popup.style.backgroundColor = "#2980b9";
      
          // popup.style.opacity = "0";
          // popup.style.visibility = "hidden";
      });

  }
};

// Function to get the key value associated with the key
    getKeyByValue = (val, obj) => {
      return Object.keys(obj)[Object.values(obj).indexOf(val)];
    };

replacer(document.body);

// Pronounciation

function speech(marathiWord) {
  let textToSpeech = window.speechSynthesis;
  let toSpeak = new SpeechSynthesisUtterance(marathiWord);
  setTimeout(() => {
    [...window.speechSynthesis.getVoices()].forEach((voice)=> {
      if (voice.name == "Google हिन्दी") {
          toSpeak.voice = voice;
          toSpeak.lang='hi-IN';
          textToSpeech.speak(toSpeak);
          // console.log(window.speechSynthesis.getVoices());
        }
  });
  }, 5);
}

// Popup Code

let keywords = document.querySelectorAll('.quosh__keyword');

keywords.forEach(val => {

    // Popup
    let popup = document.createElement('div');
    popup.classList.add('quosh__popup');
    val.appendChild(popup);

    let feedback = document.createElement('p');
    let meaning = document.createElement('h5');
    let pronounce = document.createElement('div');
    let soundIcon = document.createElement('span');
    let pronounceText = document.createElement('span');

    feedback.classList.add('quosh__feedback');
    meaning.classList.add('quosh__meaning');
    pronounce.classList.add('quosh__pronounce');
    soundIcon.classList.add("quosh__volume");
    pronounceText.classList.add('quosh__pronounce-text');

    pronounce.append(soundIcon, pronounceText);
    popup.append(feedback, meaning, pronounce);

    // Pronounciation
    pronounce.addEventListener("click", () => {
      speech(marathi[meaning.innerText]);
    });

    // Styling
    val.style.fontWeight = "700";
    val.style.backgroundColor = "#ecdbef";
    val.style.display = "inline-block";
    val.style.padding = "0.1rem 0.5rem";
    val.style.color = "#272727";
    val.style.position = "relative";

    // popup.style.position = "absolute";
    // popup.style.top = "24px";
    // popup.style.zIndex = "99999999";
    // popup.style.left = "0px";
    // popup.style.border = "3px solid salmon";

    meaning.innerText = getKeyByValue(
      meaning.parentElement.parentElement.innerText,
      marathi
    );
    console.log(getKeyByValue(meaning.parentElement.parentElement.innerText, marathi));
    feedback.innerText = "Feedback";
    pronounceText.innerText = getKeyByValue(
      meaning.parentElement.parentElement.innerText,
      marathi
    );
    soundIcon.innerText = "🔊";
    // popup.style.backgroundColor = "#2980b9";

    // popup.style.opacity = "0";
    // popup.style.visibility = "hidden";
});

