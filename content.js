$(document).ready(function(){
    var firstHref = $("a[href^='http']").eq(0).attr("href");
    $("#on").click(function(){
        chrome.runtime.sendMessage("on");
    });
    $("#off").click(function(){
        chrome.runtime.sendMessage("off");
    });
    chrome.runtime.sendMessage(firstHref);
});
