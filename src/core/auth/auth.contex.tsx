import React, {FunctionComponent} from "react";
import User from "../models/user";

// Create the default value for the context
let emptyContextUser: [User, React.Dispatch<React.SetStateAction<User>>] = [new User(), () => {}];
// Create the context
const AuthContext = React.createContext(emptyContextUser);

// Create the provider and pass th user as a prop
export const AuthProvider: FunctionComponent<{user: User, children: React.ReactNode}> = (props) => {
    let [user, setUser] = React.useState(props.user);
    user = user as User;
    return (
        <AuthContext.Provider value={[user, setUser]}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
