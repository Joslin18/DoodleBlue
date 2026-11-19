DoodleBlue — Frontend & React University Management Portal

A collection of frontend web development exercises and a full-featured React + Vite **University Management System** for managing student and teacher records, performance analytics, validation, and REST API operations[cite: 3, 4].

---

## 📁 Repository Structure

```text
DoodleBlue/
├── university/                 # React + Vite University Management App
│   ├── public/                 # Static public assets
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Students/       # Student UI components
│   │   │   └── Teachers/       # TeacherTable & TeacherRow components
│   │   ├── Constants/          # Dropdown options & form validation rules
│   │   ├── Hooks/              # Custom hooks (e.g., useDebounce)
│   │   ├── Pages/              # Home, Students, Teachers, TopPerformers views
│   │   ├── Services/           # API service modules (studentApi.js, teacherApi.js)
│   │   ├── Styles/             # Component and page stylesheets
│   │   ├── App.jsx             # Main application routing & layout
│   │   └── main.jsx            # React DOM entry point
│   ├── db.json                 # Mock REST API database (JSON Server)
│   ├── package.json            # Project dependencies and scripts
│___└── vite.config.js          # Vite bundler configuration

```

---

## 📄 Module & Task Breakdown

### 1. University Management System (`university/`)

* **`Home.jsx`:** Main dashboard overview and quick navigation across university modules.


* **`Students.jsx`:** Full CRUD interface to view, search, filter, add, and update student records via `studentApi.js` (`http://localhost:3001/students`).


* **`Teachers.jsx`:** Faculty directory and management view powered by `TeacherTable`, `TeacherRow`, and `teacherApi.js`.


* **`TopPerformers.jsx`:** Dedicated leaderboard/analytics view that highlights high-achieving students based on [mention criteria, e.g., GPA / marks / attendance].



### 2. Standalone Frontend Tasks (Root Directory)

* **`task1.html`:** [Describe what Task 1 builds—e.g., "Implements a semantic multi-section webpage layout using Flexbox/Grid and responsive media queries."]


* **`task2.html`:** [Describe what Task 2 builds—e.g., "Demonstrates interactive UI components, structured data tables, and custom CSS styling."]


* **`form_controls.html`:** Showcases HTML5 form elements, input types, labels, and client-side validation paired with `styles.css`.



---

## ✨ Key Features

* **Student & Teacher Management:** Complete data management with dedicated views (`Home`, `Students`, `Teachers`, `TopPerformers`).


* **Top Performers Tracking:** Filters and ranks top-scoring students dynamically from `db.json`.


* **Debounced Search & Filtering:** Custom `useDebounce` hook for smooth, real-time filtering without excessive API requests.


* **Form Validation & Constants:** Centralized validation rules and selectable options in `src/Constants/`.


* **Mock REST API Integration:** Uses `db.json` with separate service layers (`studentApi.js` and `teacherApi.js`) connected to `http://localhost:3001`.



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
cd DoodleBlue

```

### 2. Run the University React Application

Navigate into the `university` directory and install dependencies:

```bash
cd university
npm install

```

#### Start the Mock JSON Server (Port 3001)

Open a terminal inside `university/` and start the local database API (`http://localhost:3001/students` & `/teachers`):

```bash
npx json-server --watch db.json --port 3001

```

#### Start the Vite Development Server

In a second terminal inside `university/`, launch the React app:

```bash
npm run dev

```

Open the local URL shown in your terminal (typically `http://localhost:5173`) in your browser.

### 3. View Standalone HTML Tasks

Open `task1.html`, `task2.html`, or `form_controls.html` directly in any web browser or using the VS Code **Live Server** extension.

---

## 📜 Available Scripts (inside `university/`)

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR) |
| `npm run build` | Builds the production-ready bundle into `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check for code quality and formatting issues |

```

---

### Quick Tip to Auto-Fill the Exact Details
If you want me to replace the bracketed placeholders with the exact features from your actual code, paste the contents of `task1.html`, `task2.html`, and `TopPerformers.jsx` here (or tell me briefly what each one displays). Once you save `README.md`, push it with:
```bash
git add README.md
git commit -m "Update README with task and TopPerformers details"
git push origin main

```

*Verification:* Refresh `[https://github.com/Joslin18/DoodleBlue](https://github.com/Joslin18/DoodleBlue)` in your browser to see the updated sections live.
