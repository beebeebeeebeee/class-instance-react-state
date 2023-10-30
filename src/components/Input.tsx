import {InputHTMLAttributes} from "react";

export type InputProps<T> = Omit<InputHTMLAttributes<HTMLInputElement>, "name"> & {
    name: T
}

export function Input<T extends string>(props: InputProps<T>): JSX.Element{
    return <input {...props}/>
}
