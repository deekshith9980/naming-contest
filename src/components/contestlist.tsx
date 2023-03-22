/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ContestPreview from './contestpreview';
import { useEffect } from 'react';
import { fetchContests } from '../api-client';
import Header from './header';

const ContestList = ({initialContests, onContestClick}) => {
  const [contests,setContests] = useState(initialContests);

  useEffect(() => {
    //fetchContests().then((contests) => {
      //  setContests(contests);
    //})
  },[]);   


  return (
    <>
    <Header message="Naming Contests" />
    <div className="contest-list link">
        {initialContests.map((contest)=> {
            return <ContestPreview key= {contest.id} contest={contest} onClick={onContestClick}/>;  
        })}
    </div>
    </>
    
  );
}

export default ContestList;
