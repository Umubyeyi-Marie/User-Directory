import React, { createContext, useState } from "react";

export interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

interface UserContextType {
  users: User[];
  addUser: (user: Omit<User, 'id'>) => void;
}

export const UserContext = createContext<UserContextType>({
  users: [],
  addUser: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: Omit<User, 'id'>) => {
    setUsers(prev => [...prev, { ...user, id: prev.length + 100 }]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
