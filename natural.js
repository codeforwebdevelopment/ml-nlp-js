const { SentimentAnalyzer, PorterStemmer, BayesClassifier } = require('natural');

const analyzer = new SentimentAnalyzer("English", PorterStemmer, "afinn");
const result = analyzer.getSentiment(["I", "love", "cakes"]);

console.log(result); // 0.66


const classifier = new BayesClassifier();

classifier.addDocument('buy our limited offer', 'spam');
classifier.addDocument('grow your audience with us', 'spam');
classifier.addDocument('our company provides a great deal', 'spam');
classifier.addDocument('I like to read books and watch movies', 'regular');
classifier.addDocument('My friend likes to walk near the mall', 'regular');
classifier.addDocument('Pizza was awesome yesterday', 'regular');

classifier.train();

console.log(classifier.classify('we would like to propose our offer')); // spam
console.log(classifier.classify('I\'m feeling tired and want to watch something')); // regular