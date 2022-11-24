import React, { createContext, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { authService } from "../services/AuthService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const history = useHistory();
    const [user, setUser] = useState({});

    const handleLogin = async (data) => {
        try {
            const response = await authService.login(data);
            setUser(response.data.user);
            history.push("/cars");
        } catch (error) { }
    };

    const handleRefreshToken = async () => {
        const token = handleGetItemFromLS("token");

        if (token) {
            try {
                const response = await authService.refresh();
                setUser(response.data.user);
            } catch (error) { }
        }
    };

    const handleGetItemFromLS = (value) => {
        return localStorage.getItem(value);
    };

    useEffect(() => {
        handleRefreshToken();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                login: handleLogin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext);
}
