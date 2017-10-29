$(document).ready(function(){
    var firstHref = $("a[href^='http']").eq(0).attr("href");
    $("#on").click(function(){
        chrome.runtime.sendMessage("on", function(response){
            console.log(response);
            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyBK-zT_h5YFjj2PfdvpH73HZWovJlxPhcI",
                authDomain: "managewastedtime-c05da.firebaseapp.com",
                databaseURL: "https://managewastedtime-c05da.firebaseio.com",
                projectId: "managewastedtime-c05da",
                storageBucket: "",
                messagingSenderId: "851180734893"
            };
            firebase.initializeApp(config);
        });
    });
    $("#off").click(function(){
        chrome.runtime.sendMessage("off");
    });
    chrome.runtime.sendMessage(firstHref);
});
