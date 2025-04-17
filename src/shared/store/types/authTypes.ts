// src/shared/store/types/authTypes.ts

export type User = {
    id: string;
    email: string;
    role: 'ADMIN' | 'CLIENT';
    firstLogin?: boolean;
};

export type AuthState = {
    user: User | null;
    isAuthenticated: boolean;
};

export type AuthAction =
    | { type: 'LOGIN'; payload: User }
    | { type: 'LOGOUT' };
