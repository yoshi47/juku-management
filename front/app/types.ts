import {list} from "postcss";

export type Student = {
    username: string;
    last_name: string;
    first_name: string;
    email: string;
    info: {
        school: string;
        grade: string;
        subject: [string];
    }
    text: string;
};

export type Lesson = {
    id: number;
    username: string;
    student: string;
    teacher: string;
    subject: string;
    period: number;
    date: string;
}