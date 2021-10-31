const openInWsa = "openInWSA";

chrome.runtime.onInstalled.addListener(details =>
    chrome.contextMenus.create({
        title: "Open link in WSA",
        id: openInWsa,
        contexts: ["link"]
    })
);

chrome.contextMenus.onClicked.addListener((info, tab) => info.menuItemId === openInWsa && chrome.tabs.update({url:`openinwsaurl://${info.linkUrl}`}));