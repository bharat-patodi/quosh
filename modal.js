let closeButton = document.querySelector('.close-button');
let quoshModal = document.querySelector(".quosh-modal")
let allTabsAccessPermission = document.getElementById("checkbox-2");
let radioThree = document.getElementById('radio-3')

function handleClose(){
    quoshModal.style.display = "none";
}
closeButton.addEventListener('click', handleClose);


// function handlePermission(){
//     console.log("button clicked")
//     chrome.tabs.query({}, function(tabs) {
//         console.log(tabs)
//         tabs.forEach(tb => {
//             console.log(tb.id)       
//             chrome.tabs.sendMessage(tb.id, {'message': "allowAccess"})
//         })
//     })

// }



// accessPermission.addEventListener('click', handlePermission);

// document.addEventListener("DOMContentLoaded", function() {
//     accessPermission.addEventListener("click", handlePermission);
//   });






function handleAllTabsPermission(event) {
  console.dir(event)
  if (document.querySelector("#checkbox-2").checked == true) {
    console.log("working if")
    chrome.tabs.query({}, tabs => {
      tabs.forEach(tab => 
        chrome.tabs.sendMessage(tab.id, {'msg' : "allowAccessToAllTabs"})
      );
    });
  }else{
    return false;
  }
 
};

// handleAllTabsPermission();

// export {handleAllTabsPermission};


allTabsAccessPermission.addEventListener("change", handleAllTabsPermission);
