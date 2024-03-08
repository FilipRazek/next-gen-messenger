const BASE_URL = "https://next-gen-messenger.onrender.com";

fetch(`${BASE_URL}/msg/getAll`)
    .then(response => response.json())
    .then(updateMessages);

function buildListItem(text) {
    const listItem = document.createElement("li");
    listItem.innerText = text;
    return listItem;
}

function updateMessages(messages) {
    const container = document.getElementById("messages");
    container.replaceChildren(...messages.map(buildListItem));
}

