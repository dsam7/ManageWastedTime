var startTime, endTime, diff;
var on = false;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (on === true) {
            console.log(request);
            startTime = new Date();
            console.log(startTime);
            function() {
                if (request.indexOf(".edu") > 0) {
                    conosle.log("academic");
                }
            }
        }
        if (request === "on") {
            on = true;
            console.log("Work Mode has been turned on");

        } else if (request === "off") {
            console.log("Work Mode is turning off");
            on = false;
        }

});