import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [role, setRole] = useState('viewer'); // 'admin' or 'viewer'

  const loginAsAdmin = () => setRole('admin');
  const loginAsViewer = () => setRole('viewer');

  return (
    <AuthContext.Provider value={{ role, loginAsAdmin, loginAsViewer }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
