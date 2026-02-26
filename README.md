# 📚 Book Tracker App

A modern React + TypeScript web application that allows users to discover books, search by genre or author, view detailed information, and manage a personal reading list with persistent storage.

This project demonstrates reusable components, state management, routing, API integration, and local data persistence.

# 🚀 Features
## 🏠 Home

- Hero carousel with navigation to main sections

- Featured books fetched from Google Books API

- Reusable book cards

## 🔎 Search by Genre

- Search books by category

- Dynamic results from Google Books API

- Add books to reading list

## ✍️ Search by Author

- Search books by specific authors

- Real-time API results

- One-click add to reading list

## 📖 Book Details

- Detailed information page

- Title, authors, description, and cover image

## 📚 Reading List

- Personal reading list management

- Book status organization:

- To Read

- Reading

- Finished

- Change status dynamically

- Remove books

# 🛠️ Tech Stack

- React

- TypeScript

- React Router

- CSS Modules

- Google Books API

# 📂 Project Structure
src/
│
├── components/
│   ├── BookCard.tsx
│   ├── BookGrid.tsx
│   ├── Button.tsx
│   ├── Footer.tsx
│
├── layout/
│   └── MainLayout.tsx
│
├── routes/
│   ├── Home.tsx
│   ├── SearchByGenre.tsx
│   ├── SearchByAuthor.tsx
│   ├── BookDetails.tsx
│   ├── ReadingList.tsx
│
├── types/
│   └── Book.ts
│
├── App.tsx
└── main.tsx

# 🧠 Architecture Overview
## Global State Management

The reading list is managed in App.tsx using: useState<Book[]>

Functions passed down as props: addBook, removeBook, updateStatus

This centralizes state and keeps components reusable and clean.

# ⚠️ API Rate Limiting

The Google Books API has daily query limits.

To avoid 429 Rate Limit Exceeded errors:
The Home page uses a single API request

React StrictMode behavior was considered during development

The reading list is not locally stored (for the moment)

# 🎯 Key Concepts Demonstrated

- Functional React components

- TypeScript interfaces and type safety

- Lifting state up

- Reusable UI components

- Conditional rendering

- Nested routing with React Router

- API data mapping

- Preventing duplicated state entries

# 📦 Installation

Clone the repository:

git clone https://github.com/alumno709600/Book-Discovery-App.git

Install dependencies:

npm install

Run development server:

npm run dev

Build for production:

npm run build

# 🔮 Future Improvements

- Add authentication system

- Backend integration (Node.js / Firebase)

- Replace localStorage (is not implemented) with database storage

- Implement pagination

- Add search debouncing

- Add book rating system

- Add dark mode

- Add testing (Jest / React Testing Library)

- Use TanStack Query for API caching
