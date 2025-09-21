const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { PromptTemplate } = require("@langchain/core/prompts");
const { StringOutputParser } = require("@langchain/core/output_parsers");
const fetch = require("node-fetch");

//Setting up the Gemini Model
const model = new ChatGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
    model: 'gemini-1.5-flash'
})

const prompt = PromptTemplate.fromTemplate(`
You are a financial assistant. Summarize the following stock news in extreme detail sentences for beginner investors:

{articles}
`);

const summarizeChain = prompt.pipe(model).pipe(new StringOutputParser());
async function fetchStockNews(symbol){
    const url = `https://newsapi.org/v2/everything?q=${symbol}&sortBy=publishedAt&language=en&apiKey=${process.env.NEWS_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    if(!data.articles || data.articles.length === 0){
        return `No recent news found for ${symbol}.`;
    }
    return data.articles.slice(0,5).map((a)=> a.title +"."+a.description).join("\n");

}

async function getStockNewsSummary(symbol) {
    const articles = await fetchStockNews(symbol);
    const summary = await summarizeChain.invoke({articles});
    return summary;
}
module.exports = { getStockNewsSummary };
