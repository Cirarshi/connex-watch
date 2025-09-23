# 🎬 Connex-Watch App
<!--
![GitHub stars](https://img.shields.io/github/stars/your-username/ott-app?style=social)
![GitHub forks](https://img.shields.io/github/forks/your-username/ott-app?style=social)
![GitHub issues](https://img.shields.io/github/issues/your-username/ott-app)
![License](https://img.shields.io/github/license/your-username/ott-app)
-->

An **Over-the-Top (OTT) streaming platform** built with **React** for frontend, **Node.js/Express** for backend, and **Firebase** as the database. Stream movies, series, and videos seamlessly with a responsive interface.  

---

## 🌟 Features

- Browse movies, series, and videos  
- Search & filter content easily  
- Responsive video player  
- User authentication via **Firebase Auth**  
- Favorites and watchlist stored in **Firebase Firestore**  
- Admin panel to manage content (Add/Update/Delete)  

---

## 🛠️ Tech Stack

| Layer        | Technology |
| ------------ | ---------- |
| Frontend     | React, React Router, CSS/Styled Components |
| Backend      | Node.js, Express.js |
| Database     | Firebase Firestore |
| Auth         | Firebase Auth |
| Deployment   | Netlify |

---
<!--
## 🚀 Live Demo

[Visit Live App](https://your-app-link.com)  

---

## 💻 Screenshots

**Home Page**  
![Home Page](./screenshots/home.png)

**Video Player**  
![Video Player](./screenshots/player.png)

**Admin Dashboard**  
![Admin Dashboard](./screenshots/admin.png)

> Replace these images with your actual screenshots.  
-->
---

## 📂 Folder Structure

```bash
connex-watch/
│
├─ backend/
│ ├─ controllers/
│ ├─ routes/
│ ├─ models/
│ ├─ app.js
│ └─ server.js
│
├─ frontend/
│ ├─ public/
│ ├─ src/
│ │ ├─ components/
│ │ ├─ pages/
│ │ ├─ context/ (or redux/)
│ │ ├─ api/
│ │ └─ App.js
│
└─ README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js >= 18.x  
- npm or yarn  
- Firebase CLI  

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/ott-app.git
cd ott-app
```

2. **Backend Setup**

```bash
cd backend
npm install
npm run dev
```
  - Runs on http://localhost:5000
  - API routes under /api/*
  - Frontend Setup

3. **Frontend Setup**
 
```bash
cd ../frontend
npm install
npm start
```
  - Runs on http://localhost:3000

---

## 🔑 Environment Variables

Create a .env file in frontend and backend folders.

### Backend .env

```bash
PORT=5000
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY="your_private_key"
```

### Frontend .env

```bash
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
```

---

##⚡ Future Enhancements

  - Video recommendations based on user activity
  - Admin dashboard analytics
  - Subscription-based payment integration
  - Offline downloads & mobile support

---

❤️ Contributing

Contributions are welcome! Please fork the repo, make your changes, and submit a pull request.

---

📬 Contact

  - GitHub: @Cirarshi
  - Email: 22.utkarsh.kapoor@gmail.com

---
