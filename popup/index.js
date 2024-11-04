async function sayHello() {
    let [tab] = await chrome.tabs.query({active: true});
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func : ()=> {
            alert('hello form my extension')
        }
    })
}

document.getElementById('MyButton').addEventListener('click',sayHello)