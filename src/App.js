import "./App.css";
import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import axios from "axios";
function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [Repos, setRepos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    searchRepos();
  }
  function searchRepos() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos`,
    }).then((res) => {
      setLoading(false);
      setRepos(res.data);
    });
  }
  function renderRepo(repo) {
    return (
      <div className="row" key={repo.id}>
        <h2 className="repo-name">{repo.name}</h2>
      </div>
    );
  }
  return (
    <div className="page">
      <div className="landing-page-container">
        <div className="left-side">
          <form className="form">
            <input
              className="input"
              placeholder="Github Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button
              className="button"
              onClick={handleSubmit}
            >
              {loading ? "Searching.." : "Search"}
              
            </Button>
          </form>
          <div className="results-container">{Repos.map(renderRepo)}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
