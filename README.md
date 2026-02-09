# Elegant Shop App

💎 **Bootcamp Project - React**

This learning project is an online store application for stylish clothing made with React/Vite. The goal of the project is to learn and practice the concepts of Advanced State Management.

---

## 🧠 About the Project
This project is part of React Bootcamp. The main goal is to practice and understand React concepts of Advanced State Management (The Problem Of Shared State, Component Composition, Context, Reducers).

---

## 📚 What I Learned
Prop Drilling occurs when I have information in the parent component and I want to pass it to a child component lower down in the tree, and the intermediate components receive that information only to pass it on. This makes the code difficult to read and maintain.

One solution is Component Composition, which does not send information to components that do not use it, but moves the content of the component that uses the information as close as possible to where it is needed by using the special children prop. This makes the code easier to read, understand, and maintain. The main disadvantage is that if this method is used for all components, it would result in a bloated parent component (in this project, the App component).

Another solution is Context, which allows global information to be shared between components. This way, any component in the tree can read or modify the information. I created the context using the createContext function from the react module, provided all components with the information through the value attribute, used the use hook (React 19+) to connect the context to the components, and linked the context to the state.

---

## 🖼️ Screenshots

Screenshots coming soon

---

## ⚙️ Features
- Shopping cart state management with useState (add/remove/update quantity)
- Automatic quantity increment if the product already exists in the cart
- Automatic removal of products when quantity reaches 0
- Rendering the product list from a local data source (DUMMY_PRODUCTS)
- Passing actions down to child components (Header, Product) via props

---

## 🧩 Concepts Practiced
- Avoiding the problem of Shared State (Prop Drilling)
- Embracing Component Composition
- Sharing State with Context
- Managing Complex State with Reducers

---

## 🛠️ Tech Stack
- React/Vite
- JavaScript
- HTML5
- CSS3

---

## 📂 Project Structure

```
10-react-context-api/
├─ public/               # static public files
├─ src/
│  ├─ assets/            # product images
│  ├─ components/        # reusable UI components
│  ├─ App.jsx            # main app logic
│  ├─ dummy-products.js  # mock product data
│  ├─ index.css          # global styles
│  └─ main.jsx           # React entry point
├─ index.html            # Vite HTML template
├─ vite.config.js        # Vite config
├─ package.json          # scripts and dependencies
└─ package-lock.json     # npm lockfile
```

---

## 🔮 Possible Improvements
Not yet completed...

---

## 🚀 Getting Started

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Start the dev server
```bash
npm run dev
```

Visit:
```
http://localhost:5173/
```