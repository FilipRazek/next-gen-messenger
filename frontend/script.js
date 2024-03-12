const BASE_URL = "http://localhost:8080";

function fetchMessages() {
    fetch(`${BASE_URL}/msg/getAll`)
        .then(response => response.json())
        .then(updateMessages);
}

function buildListItem({ msg, sentimentScore }) {
    const listItem = document.createElement("li");
    listItem.innerText = msg;
    const newClass = sentimentScore > 0
        ? 'messagePositiv'
        : sentimentScore == 0
            ? 'messageNeutral'
            : 'messageNegativ';
    listItem.classList.add(newClass);
    return listItem;
}

function updateMessages(messages) {
    const container = document.getElementById("messages");
    container.replaceChildren(...messages.map(buildListItem));
    container.scrollTop = container.scrollHeight;
}

function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value;
    fetch(`${BASE_URL}/msg/post`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ msg: message })
    })
        .then(response => response.json())
        .then(({ code }) => {
            if (code === 0) {
                fetchMessages();
                messageInput.value = "";
            } else {
                alert("Failed to send message");
            }
        });
}
fetchMessages();
