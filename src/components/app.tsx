
import ContestList from "./contestlist";
import { useState, useEffect } from "react";
import Contest from "./contest";

const App= ({initialData}) => {
  const [page,setPage] = useState<"contestList" | "contest">("contestList");
  const [currentContestId, setCurrentContestId] = useState();

  useEffect(() => {
    window.onpopstate = (event) => {
      const newPage = event.state?.contestId ? "contest" : "contestList";
      setPage(newPage);
      setCurrentContestId(event.state?.contestId);
    }
  },[])

  const navigateToContest = (contestId) => {
    window.history.pushState({contestId},"",`/contest/${contestId}`)
    setPage("contest");
    setCurrentContestId(contestId);
  }

  const navigateToContestList = () => {
    window.history.pushState({},"","/")
    setPage("contestList");
    setCurrentContestId(undefined);
  }

  const pageContent = () => {
    switch(page) {
      case "contestList":
        return (
          <ContestList initialContests={initialData.contests} onContestClick={navigateToContest} />
        );
      case "contest":
        return <Contest id={currentContestId} onContestListClick = {navigateToContestList} />;    
    }
  }

    return (
      <div className='container'>
          
          {pageContent()}
      </div>
    )
  }

export default App  