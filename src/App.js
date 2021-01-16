import "./App.css";
import React, { useState } from "react";
import { Button ,Form,FormControl} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <h1 className>GitHub Repo Search🔎 </h1>
      <Form >
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          name="query"
          
         
        />
        <Button type="submit">
          Search🔍
        </Button>
      </Form>
    </div>
  );
}

export default App;
