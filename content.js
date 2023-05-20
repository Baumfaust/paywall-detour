function createDetourButton() {
    var button = document.createElement("button");
    button.innerHTML = "Detour Paywall";
    button.style.position = "fixed";
    button.style.top = "10px";
    button.style.left = "50%";
    button.style.transform = "translateX(-50%)";
    button.style.zIndex = "9999";
    document.body.appendChild(button);
  
    button.addEventListener("click", function() {
      console.log("Detour button clicked");
      chrome.runtime.sendMessage({ url: window.location.href }, function(response) {
        console.log(response);
      });
    });
  }
  
  createDetourButton();
  