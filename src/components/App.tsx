import {ChangeEvent, useState} from "react";
import {User} from "../entity";

export function App(): JSX.Element {
    const [user, setUser] = useState<User>(new User("id", {
        name: "name",
        password: "password"
    }))

    const onChange = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUser(user.withUpdate(target))
    }

    return <div>
        <input name="name" value={user.name} onChange={onChange}/>
        <br/>
        <input name="password" value={user.password} onChange={onChange}/>
        <br/>
        is name: {user.isName ? 'Yes' : 'no'}
    </div>
}
