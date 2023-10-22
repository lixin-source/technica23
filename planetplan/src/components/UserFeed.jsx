import { useState, useEffect } from "react";

function UserFeed() {
  const [feedData, setFeedData] = useState([]);
  useEffect(() => {
    fetch('https://data/users/feed-data')
      .then(response => response.json())
      .then(data => {
        setFeedData(data);
      })
      .catch(error => {
        console.error("Error retrieving data: ", error);
      }, []);
  return (
    <div className="UserFeed">
     {feedData.map((item, index) => (
       <div key={index} className="feed-item">
         <p>{item.user} marked {item.taskName} as complete</p>
    </div>
  ))}
  </div>
  )
})
}

export default UserFeed;