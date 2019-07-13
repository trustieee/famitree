import React, { useState, useEffect } from "react";

function App() {
  const [genders, setGenders] = useState([]);
  const [people, setPeople] = useState([]);
  const [surnames, setSurnames] = useState([]);

  useEffect(() => {
    if (genders.length === 0)
      fetch("http://localhost:3001/genders")
        .then(res => res.json())
        .then(res => setGenders(res));

    if (people.length === 0)
      fetch("http://localhost:3001/people")
        .then(res => res.json())
        .then(res => setPeople(res));

    if (surnames.length === 0)
      fetch("http://localhost:3001/surnames")
        .then(res => res.json())
        .then(res => setSurnames(res));
  }, [genders, people, surnames]);

  return <></>;
}

export default App;
