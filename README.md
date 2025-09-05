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

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase project setup

### Installation

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd CriptoTraker
```

2. **Install root dependencies:**
```bash
npm install
```

3. **Install backend dependencies:**
```bash
cd backend
npm install
cd ..
```

4. **Install frontend dependencies:**
```bash
cd frontend
npm install
cd ..
```

### Environment Setup

1. **Create environment file:**
```bash
# Copy the example environment file
cp backend/environment.example backend/.env
```

2. **Configure your Firebase credentials in `backend/.env`:**
```env
FIREBASE_API_KEY=your_firebase_api_key_here
FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
```

### Running the Application

**Option 1: Run both servers together**
```bash
npm start
```

**Option 2: Run servers individually**

Backend (Terminal 1):
```bash
cd backend
npm start
```

Frontend (Terminal 2):
```bash
cd frontend
npm start
```

### Access Points
- **Frontend:** http://localhost:4200
- **Backend API:** http://localhost:3000

---

## 🔐 Firebase Configuration

The project uses environment variables for Firebase configuration. Make sure to:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication and Firestore
3. Copy your Firebase config to the `backend/.env` file
4. The backend will automatically use these environment variables

---

##💡 Tips
**Make sure both frontend and backend servers are running simultaneously.**

**You can install Nodemon for auto-reloading backend:**

<pre><code>npm install -g nodemon</code></pre>
<pre><code>nodemon index.js</code></pre>
