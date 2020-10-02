console.log("running bg")

chrome.browserAction.onClicked.addListener(handlePermission)

function handlePermission(tab) {
    let msg = {
        txt = "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg)
}