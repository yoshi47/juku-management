import {Student} from "@/app/types";
import {Main} from "next/document";
import {METHODS} from "http";

async function getStudents() {
    // const res = await fetch(process.env.HOST + '/api/students', {
    const res = await fetch(`${process.env.HOST}/api/students`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!res.ok) {
        const message = `An error has occurred: ${res.status}`;
        throw new Error(message);
    }
    const data = await res.json();
    return data as Student[];
}

export default async function StudentList() {
    const students = await getStudents();

    return (
        <div>
            <ul>
                {students.map((student) => (
                    <li key={student.username}>{student.username} {student.last_name} {student.first_name}</li>
                ))}
            </ul>
        </div>
    )
}

