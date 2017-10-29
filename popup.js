$(document).ready(function(){
    $("#on").click(function() {
        console.log("on");
        chrome.runtime.sendMessage("on");
    });
    $("#off").click(function() {
        console.log("off");
    });
});