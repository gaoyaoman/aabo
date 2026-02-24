import { useState, useEffect } from 'react';

export type Role = 'guest' | 'client' | 'admin' | 'supplier';

export function getRoleFromCookie(): Role {
  if (typeof document === 'undefined') return 'guest';
  const match = document.cookie.match(/(^| )userRole=([^;]+)/);
  if (match) return match[2] as Role;
  return 'guest';
}

export function setRoleCookie(role: Role) {
  document.cookie = `userRole=${role}; path=/; max-age=31536000`;
  window.dispatchEvent(new Event('roleChange'));
}

export function useAuth() {
  const [userRole, setUserRole] = useState<Role>('guest');

  useEffect(() => {
    setUserRole(getRoleFromCookie());
    const handleRoleChange = () => {
      setUserRole(getRoleFromCookie());
    };
    window.addEventListener('roleChange', handleRoleChange);
    return () => window.removeEventListener('roleChange', handleRoleChange);
  }, []);

  const isLoggedIn = userRole !== 'guest';

  return { userRole, isLoggedIn, setRole: setRoleCookie };
}
