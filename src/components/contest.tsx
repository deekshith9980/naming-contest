import { useEffect, useState } from "react";

import { addNewNametoContest, fetchContest } from "../api-client";

import Header from "./header";

const Contest = ({ id, onContestListClick }) => {
  const [contest, setContest] = useState({});


  useEffect(() => {
    fetchContest(id).then((contest) => {
      setContest(contest);
    });
  },[id]);

  const handleClickContestList = (event) => {
    event.preventDefault();
    onContestListClick();
  }

  const handlenewNameSubmit = async (event) => {
    event.preventDefault();
    const newNameInput = event.target.newName;
    const updatedContest = await addNewNametoContest({contestId: contest.id, newNameValue: newNameInput.value});
    setContest(updatedContest);
  }

  return (
    <>
      <Header message={contest.contestName} />
      <div className="contest">
        <div className="title">Contest Description</div>
        <div className="description">{contest.description}</div>

        <div className="title">Proposed Names</div>
        <div className="body">
          {contest.names?.length > 0 ? <div className="list">
            {contest.names.map((proposedName) => (
              <div key={proposedName.id} className="item">
                {proposedName.name}
              </div>
            ))}
          </div> : <div>No names proposed yet</div>}
        </div>
        <div className="title">Propose a new Name</div>
        <div className="body">
          <form onSubmit={handlenewNameSubmit}>
            <input type="text" name="newName" id="newName" placeholder="Type a new name here"/>
            <button type="submit">Submit</button>
          </form>
        </div>
        <a href="/" className="link" onClick={handleClickContestList}>Contest List</a>
        
      </div>
    </>
  );
};

export default Contest;