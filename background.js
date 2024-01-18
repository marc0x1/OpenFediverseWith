function openPage() {
  browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
    let currentUrl = tabs[0].url;
    browser.tabs.update({
      url: currentUrl.replace("https","web+ap"),
    });
  }, console.error)  
}

browser.browserAction.onClicked.addListener(openPage);


