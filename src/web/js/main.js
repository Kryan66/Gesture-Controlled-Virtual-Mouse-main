// existing event handlers...
document.getElementById("userInputButton").addEventListener("click", getUserInput, false);
document.getElementById("userInput").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        getUserInput();
    }
});

eel.expose(addUserMsg);
eel.expose(addAppMsg);

function addAppMsg(msg) {
    let messagesDiv = document.getElementById('messages');
    let messageHtml = "<div class='bot-message'>" + msg + "</div><br>";
    messagesDiv.innerHTML += messageHtml;
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function addUserMsg(msg) {
    let element = document.getElementById("messages");
    element.innerHTML += '<div class="message from ready rtol">' + msg + '</div>';
    element.scrollTop = element.scrollHeight - element.clientHeight - 15;
    let index = element.childElementCount - 1;
    setTimeout(changeClass.bind(null, element, index, "message from"), 500);
}

function addAppMsg(msg) {
    let element = document.getElementById("messages");
    element.innerHTML += '<div class="message to ready ltor">' + msg + '</div>';
    element.scrollTop = element.scrollHeight - element.clientHeight - 15;
    let index = element.childElementCount - 1;
    setTimeout(changeClass.bind(null, element, index, "message to"), 500);
}

function changeClass(element, index, newClass) {
    console.log(newClass + ' ' + index);
    element.children[index].className = newClass;
}

function getUserInput() {
    let element = document.getElementById("userInput");
    let msg = element.value;
    if (msg.length !== 0) {
        element.value = "";
        eel.getUserInput(msg);
    }
}

// tell Python we're ready once the window finishes loading
window.addEventListener('load', function() {
    eel.notifyLoaded();
});
