var startTime, endTime, diff;
var on = false, isAcademic = false;
var academic = ["pearsonmylabandmastering",
"portal.mypearson", "tophat", "github", "w3schools",
"stackoverflow"];

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (on === true) {
            console.log(request);
            startTime = new Date();
            console.log(startTime);
            if (request.indexOf(".edu") > 0 ||
                request.indexOf(".org") > 0 ||
                request.indexOf(".gov") > 0) {
                isAcademic = true;
                console.log("academic");
            } else {
                var found = false;
                var counter = 0;
                while (!found && counter < academic.length) {
                    if (request.indexOf(academic[counter]) >= 0) {
                        found = true;
                        isAcademic = true;
                        console.log("academic loop");
                    }
                    counter++;
                }
                console.log("loop finished");
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