var startTime;
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request === "on") {
            startTime = new Date();
            console.log(startTime);
        }
});