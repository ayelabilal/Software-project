
import React from "react";
import { Routes, Route } from "react-router-dom";

import StudentList from "./Components/StudentList";
import Dashboard from "./Screens/Dashboard";
import StudentRegister from "./Components/StudentRegister";
import TeacherRegister from "./Components/TeacherRegister";
import TeacherList from "./Components/TeacherList";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import SubjectsAdd from "./Components/SubjectsAdd";
import SubjectList from "./Components/SubjectList";
import StudentRegistration from "./Components/SchoolStudentRegistration";
import TeacherRegistration from "./Components/SchoolTeacherRegistration";
import SchoolStudentRegistration from "./Components/SchoolStudentRegistration";
import SchoolTeacherRegistration from "./Components/SchoolTeacherRegistration";
import ClassList from "./Components/ClassList";
import ClassForm from "./Components/ClassForm";
import FeeStructure from "./Components/FeesStructure";
import FeesStructure from "./Components/FeesSubmission.jsx";
import FeesSubmission from "./Components/FeesSubmission.jsx";
import AdmissionForm from "./Components/AdmissionForm.jsx";
import ExamsSchedule from "./Components/ExamsSchedule.jsx";
import ExamResult from "./Components/ExamResult.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
                       
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<StudentList text={"Students List"} />} />

        {/* Student Routes */}
        <Route
          path="students/registration"
          element={<StudentRegister heading={"Students Registration Form"} />}
        />
        <Route
          path="students/list"
          element={<StudentList text={"Students List"} />}
        />

        {/* Teacher Routes */}
        <Route
          path="teachers/registration"
          element={<TeacherRegister heading={"Teachers Registration Form"} />}
        />
        <Route
          path="teachers/list"
          element={<TeacherList text={"Teachers List"} />}
        />
        {/* Subjects Route */}
        <Route path="subjects/add" element={<SubjectsAdd heading={"Add Subjects"} />} />
        <Route path="subjects/list" element={<SubjectList text={"Subjects List"} />} />

           {/* School Routes */}
           <Route path="school/registration" element={<SchoolStudentRegistration heading={"Students Registration"} />} />
        <Route path="school/Tearegistration" element={<SchoolTeacherRegistration heading={"Teachers Registration Form"} />} />

        <Route path="class/add" element={<ClassForm heading={"Admission Form"}/>} />
        <Route path="class/list" element={<ClassList text={"Class List"} />} />

         {/* Fees Routes */}
         <Route path="fees/add" element={<FeeStructure heading={"Fee Structure"} />} />
        <Route path="fees/list" element={<FeesSubmission text={"Payment For"} />} />

         {/* Admission Routes */}
         <Route path="admission/add" element={<AdmissionForm heading={"Admission Form"} />} />
        
        {/* Exam Routes */}
        <Route path="exam/add" element={<ExamsSchedule heading={"Exam Schedule"} />} />
        <Route path="exam/list" element={<ExamResult text={"Exam Result"} />} />

      </Route>
    </Routes>
  );
}

export default App;
