import {WithUpdate} from "./abstract";

export type UserProps = {
    name: string;
    password: string;
}

export class User extends WithUpdate {
    id: string;
    name: string;
    password: string;

    constructor(id: string, props: UserProps) {
        super();
        const {name, password} = props

        this.id = id
        this.name = name
        this.password = password
    }

    get isName(): boolean {
        return this.name === "name"
    }
}
