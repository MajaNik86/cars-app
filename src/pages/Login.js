import React, { useState } from "react";
import AppLogin from "../components/AppLogin";
import { useHistory } from "react-router-dom";
import { authService } from "../services/AuthService";

export default function Login() {
    const [user, setUser] = useState({ email: "", password: "" });
    const history = useHistory();

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        // await authService.login(user);
        // history.push("/cars");
        const response = await authService.login(user);
        history.push("/cars");
        if (response.status === 200) {
            alert(response.data.status);
        }
    };
    return <AppLogin
        handleOnLogin={handleSubmitForm}
        user={user}
        setUser={setUser} />;
}
