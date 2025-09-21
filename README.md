# TradeWise AI
#### (Trading website with AI News Summarizer)

A full-stack Trading website enhanced with **AI-powered features** using **LangChain** and **RAG (Retrieval-Augmented Generation)**. Demonstrates practical full-stack skills combined with cutting-edge AI technologies.

---

## 🛠 Tech Stack

**Frontend:**

* React.js
* Axios for API calls
* Bootstrap / CSS for styling

**Backend:**

* Node.js + Express
* MongoDB with Mongoose

**AI Integration:**

* LangChain (Google Gemini Model)
* RAG (Retrieval-Augmented Generation) for stock news summarization
* NewsAPI for fetching stock-related articles

---

## 🚀 Features

### 1. Portfolio Dashboard

* Displays user holdings with:

  * Stock name
  * Quantity
  * Average buy price
  * Current price
  * Net gain/loss
  * Daily change
* Dynamic view of positions, holdings, and orders.

### 2. Place and Track Orders

* Add buy/sell orders with quantity, price, and mode.
* View all orders placed.

### 3. AI-Powered Stock News Summarizer

* Click any stock to fetch **latest news**.
* Uses **LangChain + Google Gemini** to summarize top news in 2 sentences.
* Summaries are generated dynamically for beginner investors.

### 4. RAG Integration

* Feeds latest news articles to AI if it lacks prior knowledge.
* Ensures **up-to-date, relevant summaries**.

### 5. Dynamic Interaction

* Users select any stock to get AI-generated summaries.
* Backend fetches articles dynamically and updates UI in real-time.

---

## 💡 How It Works

1. **Frontend**: React displays holdings and triggers API calls on interaction.
2. **Backend**: Node.js + Express handles MongoDB queries and news fetching.
3. **News Fetching**: Backend uses NewsAPI to retrieve top articles.
4. **LangChain + RAG**:

   * Articles are fed to LangChain pipeline.
   * Google Gemini model summarizes content concisely.
   * RAG ensures external knowledge is included.
5. **Response**: Summary returned to frontend and displayed to the user.

---

## ⚡ Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd zerodha-clone
```

2. Backend dependencies:

```bash
cd backend
npm install
```

3. Frontend dependencies:

```bash
cd ../frontend
npm install
```

4. Add environment variables in `.env` (backend):

```
GEMINI_API_KEY=<your_google_gemini_api_key>
NEWS_API_KEY=<your_newsapi_key>
MONGO_URL=<your_mongodb_connection_string>
PORT=3003
```

5. Run backend:

```bash
cd backend
nodemon index.js
```

6. Run frontend:

```bash
cd frontend
npm start
```

---

## 📌 Future Enhancements

* Real-time stock prices with live stock APIs.
* User authentication and personalized portfolios.
* Charts and analytics for holdings and trends.
* AI features for buy/sell suggestions or risk analysis using LangChain + RAG.

---

## 🔗 References

* Apna College Zerodha Clone Tutorial
* LangChain Documentation
* Google Gemini API
* NewsAPI

---

## 🎯 Summary

This project showcases full-stack development skills combined with AI integration. By adding LangChain and RAG to a traditional trading website like Zerodha, it becomes a modern, AI-enhanced portfolio platform, highlighting capabilities in frontend, backend, and AI pipelines.
