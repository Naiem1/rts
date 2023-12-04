import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 30 },
  { name: 'Michael', age: 35 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number | undefined }>();

  const onClick = () => {
    setName('');

    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };
  return (
    <div>
      <h4>User Search</h4>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <button onClick={onClick}>Find User</button>
      <div>
        {user?.name}
        {user?.age}
        <br />
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
