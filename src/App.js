import React from "react";
import authors from "./data";
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <AuthorList authors={authors} key={authors.first_name} />
      </div>
    </div>
  );
}

export default App;
