import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-4xl bg-slate-50 dark:bg-gray-800 shadow-lg rounded-2xl m-2  p-3">
        <h1 className="text-2xl font-bold text-center mb-4">User List</h1>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {users.map(user => (
            <div
              key={user.id}
              className="border border-gray-300 dark:border-gray-700 p-4 rounded-xl bg-gray-50 dark:bg-gray-700"
            >
              <p className="text-lg font-medium">{user.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
              <Link
                to={`/users/${user.id}`}
                className="bg-purple-600 p-1 text-white text-sm  mt-2 inline-block"
              >
                View Profile
              </Link>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}
