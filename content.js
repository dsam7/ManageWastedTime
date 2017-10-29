var firstHref = $("a[href^='http']").eq(0).attr("href");
chrome.runtime.sendMessage(firstHref);

