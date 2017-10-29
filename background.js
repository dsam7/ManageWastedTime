var startTime;
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request);
        startTime = new Date();
        console.log(startTime);
});