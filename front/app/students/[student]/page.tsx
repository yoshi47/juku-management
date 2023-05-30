import {notFound} from "next/navigation";
import {Lesson, Student} from "types";

async function getStudentInfo(username: string) {
    const res = await fetch(`${process.env.HOST}/api/students/${username}`, {
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
    const res = await fetch(`${process.env.HOST}/api/lessons/?student_username=${username}`, {
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
    data.date = new Date(data.date);
    const month = data.date.getMonth() + 1;
    const day = data.date.getDate();
    data.date = `${month}/${day}`;
    return data as Lesson[];
}

export default async function StudentPage({params,}: { params: { student: string }; }) {
    const studentPromise = getStudentInfo(params.student);
    const schedulePromise = getStudentSchedule(params.student);

    const [student, schedule] = await Promise.all([
        studentPromise,
        schedulePromise
    ]);
    console.log(student)

    return (
        <div className="container flex flex-col items-center justify-center w-full mx-auto">
            <div className="w-full px-4 py-5 classNamebg-white border rounded-md shadow sm:px-6 dark:bg-gray-800 mb-3">
                <h3 className="text-lg font-mediclassNameading-6 text-gray-900 dark:text-white">
                    {student.last_name} {student.first_name} さんの時間割
                </h3>
                <p className="max-w-2xl mt-1 teclassName text-gray-500 dark:text-gray-200">
                    {student.student.school} {student.student.grade}年生
                </p>
            </div>
            <ul className="flex flex-col w-full">
                {schedule.map((lesson) => (
                    <li key={student.username} className="flex flex-row mb-2 border-gray-400">
                        <div
                            className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                            <div
                                className="flex flex-col items-center justify-center h-10 ml-10 mr-4 text-gray-600 dark:text-gray-200">
                                {lesson.date} {lesson.period}限
                            </div>
                            <div className="flex-1 pl-1 md:mr-16">
                                <div className="font-medium dark:text-white">
                                    {lesson.subject}
                                </div>
                                <div className="dark:text-white">
                                    {lesson.teacher}先生
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}












