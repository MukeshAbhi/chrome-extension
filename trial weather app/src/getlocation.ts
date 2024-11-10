export const getCurrentTabUrl = ()=> {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=> {
        const activeTab = tabs[0];
        const url = activeTab.url;
    })
}