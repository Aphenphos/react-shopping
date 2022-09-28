// TODO -- create the user provider!

const { createContext, useState } = require("react");
const { getUser } = require("../services/auth");

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const curUser = getUser();
    const [user, setUser] = useState(curUser);

    return  <UserContext.Provider value={{ user, setUser}}>
            {children}
            </UserContext.Provider>
}

export { UserProvider, UserContext }