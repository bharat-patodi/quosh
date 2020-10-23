function activated(info) 
{
	chrome.tabs.executeScript({file:"script.js"});
}

chrome.tabs.onActivated.addListener(activated);
   