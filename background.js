var startTime, endTime, diff;
var on = false, isAcademic = false;
var academic = ["pearsonmylabandmastering",
"portal.mypearson", "tophat", "github", "w3schools",
"stackoverflow"];
// var link = {website: "", academic : false, startTime : new Date(), endTime: new Date()};
var history = new Array();
var numOfLinks = 0;
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(history);
        if (on === true) {
            console.log(request);
            startTime = new Date();
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
            var link = {website: request, academic : isAcademic, startTime : startTime, endTime : new Date()};
            console.log(link);
            history[numOfLinks] = link;
            console.log(history);
            numOfLinks++;
        }
        if (request === "on") {
            on = true;
            console.log("Work Mode has been turned on");

        } else if (request === "off") {
            console.log("Work Mode is turning off");
            on = false;
        }

});