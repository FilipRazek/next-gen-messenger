import Sentiment from "sentiment";

export function getSentimentScore(msg) {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(msg);
    return result.score;
}
