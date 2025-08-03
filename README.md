# ✅ To-Do App — React + Vite + Tailwind CSS

This is a beautifully styled and fully functional **To-Do App** built using **React**, **Vite**, and **Tailwind CSS**. The app allows you to:

- Add tasks 📝
- Mark tasks as complete ✅
- Delete tasks ❌
- Enjoy a smooth, responsive, and modern UI 💚

---

## 🚀 Why I Built This

I built this project as a hands-on way to **improve my skills** in:

- **React** — building dynamic component-based interfaces
- **Vite** — fast frontend tooling for development
- **Tailwind CSS** — utility-first CSS framework for building professional UIs

This project helped me understand how these modern tools work together in a real-world UI/UX scenario.

---

## 📸 Preview

<img width="1920" height="1080" alt="Screenshot 2025-08-02 140613" src="https://github.com/user-attachments/assets/59a475f3-e157-4d24-a1a3-b90e1be5ac72" />


---

## 🛠️ Tech Stack

- ⚛️ React (Functional Components + Hooks)
- ⚡ Vite (Fast development build tool)
- 🎨 Tailwind CSS (Modern UI styling)

---

## 🧩 Features

- Full-screen responsive layout
- Add and delete tasks
- Mark tasks as completed
- Clean, modern green-white color palette
- Beautiful interactive UI using Tailwind CSS

---

## 🔧 Installation & Setup Instructions

### 1️⃣ Clone this repository

git clone https://github.com/Osagani31/To-Do-App.git
cd To-Do-App

2️⃣ Install Dependencies

Make sure you have Node.js installed. Then run:

npm install

3️⃣ Start the Development Server

npm run dev

## 🧪 Setup Tailwind CSS with Vite + React (Manual Steps I Learned)

If you're starting from scratch, here are the steps I followed:

📦 Step 1: Create Vite + React Project

npm create vite@latest my-app -- --template react
cd my-app
npm install

🎨 Step 2: Install Tailwind CSS

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

🧾 Step 3: Configure Tailwind

Edit tailwind.config.js:

content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],

📁 Step 4: Include Tailwind in CSS

In src/index.css, add:
@tailwind base;
@tailwind components;
@tailwind utilities;

✅ Step 5: Run Your App

npm run dev
