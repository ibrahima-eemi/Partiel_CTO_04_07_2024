import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MemberList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('/api/members')
      .then(response => setMembers(response.data))
      .catch(error => console.error('Error fetching members:', error));
  }, []);

  return (
    <div>
      <h1>Member List</h1>
      <ul>
        {members.map(member => (
          <li key={member.id}>{member.first_name} {member.last_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MemberList;
