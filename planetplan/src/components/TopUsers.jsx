import { useEffect, useState } from 'react';

function TopUsers() {
    const [topUsers, setTopUsers] = useState([]);
  
    useEffect(() => {
      const fetchTopUsers = async () => {
        // Fetch the top 5 users with the highest counts
        const { data, error } = await supabase
          .from('id')
          .select('*')
          .order('completed', { ascending: false })
          .limit(10);
  
        if (error) {
          console.error('Error fetching top users:', error);
        } else {
          setTopUsers(data);
        }
      };
  
      fetchTopUsers();
    }, []);
  
    return (
      <div>
        <h2>Top Completed Tasks Leaderboard</h2>
        <ul>
          {topUsers.map(user => (
            <li key={user.id}>{user.name} - Completed: {user.completed}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TopUsers;