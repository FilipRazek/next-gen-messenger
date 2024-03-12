import { isPositiveInteger } from "./utils.js";
import { getSentimentScore } from "./sentimentAnalysis.js";

const allMsgs = [];
init();

export function getSingleMessage(req, res) {
    const { id } = req.params;
    if (isPositiveInteger(id)) {
        const index = Number.parseInt(id, 10);
        if (index < allMsgs.length) {
            // On modifie légèrement le format de la réponse par
            // rapport à l'énoncé pour respecter la convention
            // code de retour = 0 si tout s'est bien passé
            res.json({ msg: allMsgs[index], code: 0 });
            return;
        }
    }
    // Le code de retour est alors 1 en cas d'erreur
    res.json({ code: 1 });
}

export function getMessageCount(req, res) {
    res.json(allMsgs.length);
}

export function getAllMessages(req, res) {
    res.json(allMsgs);
}

function addMessageToList(msg) {
    const sentimentScore = getSentimentScore(msg);
    allMsgs.push({ msg, sentimentScore });
}

function init() {
    const initialMessages = ["Welcome to NextGenMessenger.com!", "Try sending a message to see how it renders", "Negative messages render in red:", "I hate this website!", "Positive messages render in green:", "I love this website!"];
    initialMessages.forEach(addMessageToList);
}

export function addMessage(req, res) {
    // On dévie légèrement de l'énoncé pour
    // permettre un POST pour l'ajout de message
    const { msg } = req.body;
    if (msg) {
        addMessageToList(msg);
        res.json({ code: 0, index: allMsgs.length - 1 });
    } else {
        res.json({ code: 1 });
    }
}
