import React, { useEffect, useState } from "react";
import teacherApi from "../Services/teacherApi";
import TeacherTable from "../Components/Teachers/TeacherTable";
import TeacherDetails from "../Components/Teachers/TeacherDetails";
import TeacherFilters from "../Components/Teachers/TeacherFilters";
import TeacherForm from "../Components/Teachers/TeacherForm";
import Modal from "../Components/CommonComponents/Modal";
import Loader from "../Components/CommonComponents/Loader";
import useDebounce from "../Hooks/useDebounce";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const fetchTeachers = async () => {
    try {
      const data = await teacherApi.getAllTeachers();
      setTeachers(data);
      setFilteredTeachers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  useEffect(() => {
    let result = [...teachers];

    if (debouncedSearch) {
      result = result.filter((teacher) =>
        teacher.name?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        teacher.email?.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }

    if (department) {
      result = result.filter((teacher) => teacher.department === department);
    }

    setFilteredTeachers(result);
  }, [teachers, debouncedSearch, department]);

  const saveTeacher = async (teacherData) => {
    try {
      if (editingTeacher) {
        await teacherApi.updateTeacher(editingTeacher.id, teacherData);
      } else {
        await teacherApi.addTeacher(teacherData);
      }
      fetchTeachers();
      setEditingTeacher(null);
      setShowForm(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      try {
        await teacherApi.deleteTeacher(id);
        fetchTeachers();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleEdit = (teacher) => {
    setEditingTeacher(teacher);
    setShowForm(true);
  };

  const clearFilters = () => {
    setSearch("");
    setDepartment("");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="page-container">
      <div className="page-header-section" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
        <div className="page-title-area">
          <h5>Faculty Registry</h5>
          <h1 style={{ color: "var(--text-main)" }}>Manage Teachers</h1>
          <p>View, edit, and remove teacher records. Keep track of departments, subjects and course schedules.</p>
        </div>
        <button
          className="btn"
          onClick={() => {
            setEditingTeacher(null);
            setShowForm(true);
          }}
        >
          Add Teacher
        </button>
      </div>

      <div className="card-container" style={{ marginBottom: "1.5rem", padding: "1rem" }}>
        <TeacherFilters
          search={search}
          setSearch={setSearch}
          department={department}
          setDepartment={setDepartment}
          clearFilters={clearFilters}
        />
      </div>

      <TeacherTable
        teachers={filteredTeachers}
        onView={setSelectedTeacher}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
          setEditingTeacher(null);
        }}
        title={editingTeacher ? "Edit Teacher" : "Add Teacher"}
      >
        <TeacherForm
          initialData={editingTeacher}
          onSubmit={saveTeacher}
        />
      </Modal>

      <Modal
        isOpen={!!selectedTeacher}
        onClose={() => setSelectedTeacher(null)}
        title="Teacher Details"
      >
        <TeacherDetails teacher={selectedTeacher} />
      </Modal>
    </div>
  );
}
