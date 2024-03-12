import Sentiment from "sentiment";

export function getSentimentScore(msg){
    var sentiment = new Sentiment();
    var result = sentiment.analyze(msg);
    return result.score;
}