import React from "react";
import classes from "./AddCar.module.css";

export default function AppLogin({ handleOnLogin, user, setUser }) {

    return (
        <div>
            <form className={classes.form} onSubmit={handleOnLogin}>
                <label htmlFor="email">Email:</label>
                <input className={classes.control}
                    required
                    type="email"
                    value={user.email}
                    onChange={({ target }) => setUser({ ...user, email: target.value })}
                />
                <label htmlFor="password">Password:</label>
                <input className={classes.control}
                    required
                    type="password"
                    value={user.password}
                    onChange={({ target }) =>
                        setUser({ ...user, password: target.value })
                    }
                />
                <button type="submit">login</button>
            </form>
        </div>
    );
}