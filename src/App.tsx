import { useState } from "react";
import "./App.css";
import MainContent from "./componante/mainContent";
import Sidebar from "./componante/Sidebar";
import UsersProfileSuggetions from "./componante/UsersProfileSuggetions";

function App() {

  return (
    <div className="page-container">
      <Sidebar />
      <MainContent />
      <UsersProfileSuggetions />
    </div>
  );
}

export default App;
