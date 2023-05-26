import {notFound} from "next/navigation";
import {Lesson, Student} from "@/app/types";

async function getStudentInfo(username: string) {
    const res = await fetch(`http://django:8000/api/students/${username}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (res.status === 404) {
        // notFound 関数を呼び出すと not-fount.tsx を表示する
        notFound();
    }

    const data = await res.json();
    return data as Student;
}

async function getStudentSchedule(username: string) {
    const res = await fetch(`http://django:8000/api/lessons/?username=${username}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache',
    });

    if (!res.ok) {
        throw new Error("Failed to fetch schedule");
    }

    const data = await res.json();
    return data as Lesson[];
}

export default async function StudentPage({
                                              params,
                                          }: {
    params: { student: string };
}) {
    const studentPromise = getStudentInfo(params.student);
    const schedulePromise = getStudentSchedule(params.student);

    const [student, schedule] = await Promise.all([
        studentPromise,
        schedulePromise
    ]);

    return (
        <div>
            <p>{student.last_name} {student.first_name}</p>
            <ul>
                {schedule.map((lesson) => (
                    <li key={lesson.id}>{lesson.period}</li>
                    ))}
            </ul>
        </div>
    )
}












