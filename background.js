
function activated(info) 
{
	console.log(info)
	chrome.tabs.executeScript({file:"script.js"});
}

chrome.tabs.onActivated.addListener(activated);
   

