import {list} from "postcss";

export type Student = {
    username: string;
    last_name: string;
    first_name: string;
    email: string;
    grade: string;
    info: {
        grade: number;
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
    date: Date;
}