## ✨ Features

- ✅ Live price updates for **100+ cryptocurrencies**
- 📈 Interactive charts for prices, volume & market cap
- 🔍 Powerful search and filter by coin name or symbol
- ⭐ Favorite your coins for easy tracking
- 📊 Market details:
  - Market Cap, Volume, Rank
  - Supply, Sentiment, Diluted Valuation
- 🔁 **Carousel** for top coins (BTC, ETH, USDT, etc.)

---

## 📦 Technologies Used

- **Angular 17** — Frontend framework
- **TypeScript** — Strongly typed scripting
- **RxJS** — Reactive programming
- **SCSS / Tailwind CSS** — Modern styling
- **CoinGecko API** — Real-time crypto data
- **Chart.js / ng2-charts** — For chart rendering
- **Node.js** — For backend (optional, if any)

---

## ✨ Features of Demo Trading

💰 Virtual Portfolio: Start with a default balance (e.g., $10,000) in virtual money.

📈 Buy & Sell Crypto: Simulate trades based on live price data.

📊 Track PnL (Profit & Loss): Monitor your trading performance in real-time.

⏳ Trade History: View your transaction history and learning curve.

🎯 Real-Time Price Feed: Live market data integration ensures an authentic experience.

---

## 🌐 Backend (Node.js) Configuration
**Install dependencies:**

<pre> <code> cd node </code></pre>
<pre> <code> npm install </code></pre>
<pre> <code> node index.js </code></pre>

---

## 🌐 Frontend (Angular)
**Go to the Angular frontend folder:**

<pre> <code>cd cripto</code></pre>

**Install frontend dependencies:**

<pre> <code>npm install</code></pre>

**Run the Angular app:**

<pre> <code>ng serve</code></pre>
App will be available at: <pre> <code>http://localhost:4200</code></pre>

---

## 🔐 Firebase Configuration

**Open node/index.js and configure it like this:**
<pre><code>
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-app.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-app.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
  }
};</pre></code>

---

##💡 Tips
**Make sure both frontend and backend servers are running simultaneously.**

**You can install Nodemon for auto-reloading backend:**

<pre><code>npm install -g nodemon</code></pre>
<pre><code>nodemon index.js</code></pre>
