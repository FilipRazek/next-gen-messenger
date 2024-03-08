const msgs = [
    { msg: "Hello World" },
    { msg: "Blah Blah" },
    { msg: "I love cats" }
];

function buildListItem(text) {
    const listItem = document.createElement("li");
    listItem.innerText = text;
    return listItem;
}

function update(messages) {
    const container = document.getElementById("messages");
    const newChildren = messages.map(message => buildListItem(message.msg));
    container.replaceChildren(...newChildren);
}

