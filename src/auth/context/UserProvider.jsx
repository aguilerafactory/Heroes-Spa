import { UserContext } from "./UserContext";

const user = {
    id: 1,
    name: 'Ismael Aguilera',
    email: 'iaguilera@aguilerafactory.mx'
}

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={ user }>
            { children }
        </UserContext.Provider>
    )
}