
replacer = (element) => {
    if(element.hasChildNodes()) {
        element.childNodes.forEach(replacer);
    } else if(element.nodeType === Text.TEXT_NODE) {
        console.log(element.textContent);
        element.textContent = element.textContent.replace(
          /government/gi,
          "<span>सरकार</span>"
        );
    }
}

replacer(document.body);