import React, { useEffect, useState } from "react";
import studentApi from "../Services/studentApi";
import StudentForm from "../Components/Students/StudentForm";
import StudentList from "../Components/Students/StudentList";
import StudentDetails from "../Components/Students/StudentDetails";
import TopPerformers from "../Components/Students/TopPerformers";
import SearchBar from "../Components/CommonComponents/SearchBar";
import Modal from "../Components/CommonComponents/Modal";
import Loader from "../Components/CommonComponents/Loader";
import useDebounce from "../Hooks/useDebounce";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [sortBy, setSortBy] = useState("name-asc");

  const debouncedSearch = useDebounce(search, 500);

  const fetchStudents = async () => {
    try {
      const data = await studentApi.getAllStudents();
      setStudents(data);
      setFilteredStudents(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    let result = [...students];

    if (debouncedSearch) {
      result = result.filter((student) =>
        student.name?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        student.email?.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }

    if (department) {
      result = result.filter((student) => student.department === department);
    }

    if (year) {
      result = result.filter((student) => student.year === year);
    }

    if (sortBy === "name-asc") {
      result.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    } else if (sortBy === "name-desc") {
      result.sort((a, b) => (b.name || "").localeCompare(a.name || ""));
    }

    setFilteredStudents(result);
  }, [debouncedSearch, department, year, sortBy, students]);

  const addStudent = async (studentData) => {
    try {
      await studentApi.addStudent(studentData);
      fetchStudents();
    } catch (error) {
      console.error(error);
    }
  };

  const clearFilters = () => {
    setSearch("");
    setDepartment("");
    setYear("");
    setSortBy("name-asc");
  };

  const closeModal = () => {
    setSelectedStudent(null);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="page-container">
      <div className="page-header-section">
        <div className="page-title-area">
          <h5>Student Directory</h5>
          <h1>Find, manage and know your students.</h1>
          <p>Search, filter, sort and add student records. View top performers and explore the complete directory.</p>
        </div>
        <div className="counter-box">
          <div>
            <h5>Total Students</h5>
            <span>{students.length}</span>
          </div>
        </div>
      </div>

      <TopPerformers students={students} />

      <div className="student-dashboard">
        <div className="form-container">
          <h2>Add New Student</h2>
          <p className="panel-subtext">Enter student details to add them to the directory</p>
          <StudentForm onSubmit={addStudent} />
        </div>

        <div className="card-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <h2>All Students</h2>
            <span className="badge-count-pill">{filteredStudents.length} Students</span>
          </div>

          <div className="filter-row-container">
            <div className="filter-item search-box">
              <label>Search by name or email</label>
              <SearchBar
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search..."
              />
            </div>

            <div className="filter-item">
              <label>Department</label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="form-selectField"
              >
                <option value="">All Departments</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
                <option value="Electronics">Electronics</option>
              </select>
            </div>

            <div className="filter-item">
              <label>Year</label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="form-selectField"
              >
                <option value="">All Years</option>
                <option value="Year 1">Year 1</option>
                <option value="Year 2">Year 2</option>
                <option value="Year 3">Year 3</option>
                <option value="Year 4">Year 4</option>
              </select>
            </div>

            <div className="filter-item">
              <label>Sort by</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="form-selectField"
              >
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
              </select>
            </div>

            <button className="btn-clear" onClick={clearFilters}>
              Clear Filters
            </button>
          </div>

          <StudentList
            students={filteredStudents}
            onView={setSelectedStudent}
          />
        </div>
      </div>

      <Modal
        isOpen={!!selectedStudent}
        onClose={closeModal}
        title="Student Details"
      >
        <StudentDetails student={selectedStudent} />
      </Modal>
    </div>
  );
}