import {list} from "postcss";

export type Student = {
    username: string;
    last_name: string;
    first_name: string;
    email: string;
    info: {
        grade: number;
        subject: [string];
    }
    text: string;
};