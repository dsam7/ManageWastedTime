var startTime;
var on = false;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (on === true) {
            console.log(request);
            startTime = new Date();
            console.log(startTime);
        }
        if (request === "on") {
            on = true;
        } else if (request === "off") {
            on = false;
        }

});