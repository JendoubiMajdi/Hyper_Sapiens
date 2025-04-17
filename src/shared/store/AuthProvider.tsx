// src/shared/store/AuthProvider.tsx

import { createContext, useReducer, useContext } from 'react';
import { authReducer } from './reducers/authReducer';
import { AuthState, AuthAction } from './types/authTypes';

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
};

const AuthContext = createContext<{
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
}>({ state: initialState, dispatch: () => null });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
