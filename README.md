DoodleBlue — React University Management Portal

A full-featured React + Vite **University Management System** for managing student and teacher records, performance analytics, form validation, and REST API operations[cite: 1, 3, 4].

---

## 📁 Repository Structure

```text
DoodleBlue/
└── university/                 # React + Vite University Management App
    ├── public/                 # Static public assets
    ├── src/
    │   ├── Components/
    │   │   ├── Students/       # Student UI components
    │   │   └── Teachers/       # TeacherTable & TeacherRow components
    │   ├── Constants/          # Dropdown options & form validation rules
    │   ├── Hooks/              # Custom hooks (e.g., useDebounce)
    │   ├── Pages/              # Home, Students, Teachers, TopPerformers views
    │   ├── Services/           # API service modules (studentApi.js, teacherApi.js)
    │   ├── Styles/             # Component and page stylesheets
    │   ├── App.jsx             # Main application routing & layout
    │   └── main.jsx            # React DOM entry point
    ├── db.json                 # Mock REST API database (JSON Server)
    ├── package.json            # Project dependencies and scripts
    └── vite.config.js          # Vite bundler configuration

```

---

## 📄 Application Modules

* **`Home.jsx`:** Main dashboard overview and quick navigation across university modules.


* **`Students.jsx`:** Full CRUD interface to view, search, filter, add, and update student records via `studentApi.js` (`http://localhost:3001/students`).


* **`Teachers.jsx`:** Faculty directory and management view powered by `TeacherTable`, `TeacherRow`, and `teacherApi.js` (`http://localhost:3001/teachers`).


* **`TopPerformers.jsx`:** Dedicated leaderboard and analytics view highlighting top-achieving students from `db.json`.



---

## ✨ Key Features

* **Student & Teacher Management:** Complete data management with dedicated views (`Home`, `Students`, `Teachers`, `TopPerformers`).


* **Top Performers Tracking:** Filters and highlights top-scoring students dynamically.


* **Debounced Search & Filtering:** Custom `useDebounce` hook for smooth, real-time filtering without excessive API requests.


* **Form Validation & Constants:** Centralized validation rules and selectable options in `src/Constants/`.


* **Mock REST API Integration:** Uses `db.json` with modular service layers (`studentApi.js` and `teacherApi.js`) connected to `http://localhost:3001`.



---

## 🛠️ Tech Stack

* **Frontend Framework:** React (Vite)


* **Languages:** JavaScript (ES6+), HTML5, CSS3


* **Mock Backend:** JSON Server (`db.json`)


* **Linting & Tooling:** ESLint, npm



---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone [https://github.com/Joslin18/DoodleBlue.git](https://github.com/Joslin18/DoodleBlue.git)
cd DoodleBlue/university

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Start the Mock JSON Server (Port 3001)

Open a terminal inside `university/` and start the local database API (`http://localhost:3001/students` & `/teachers`):

```bash
npx json-server --watch db.json --port 3001

```

### 4. Start the Vite Development Server

In a second terminal inside `university/`, launch the React app:

```bash
npm run dev

```

Open the local URL shown in your terminal (typically `http://localhost:5173`) in your browser.

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR) |

```
