import { Lesson } from "types";

async function getLessons() {
    const res = await fetch(`${process.env.HOST}/api/lessons`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache',
    });

    if (!res.ok) {
        const message = `An error has occurred: ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();

    data = data.map((item: Lesson) => {
        const date = new Date(item.date);
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
        return {
            ...item,
            date: formattedDate,
        };
    });

    return data as Lesson[];
}

export default async function LessonList() {
    const lessons = await getLessons();

    return (
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light rounded-md">
                        <thead className="border-b font-medium bg-green-100 dark:border-neutral-500">
                            <tr>
                                <th scope="col" className="px-6 py-4">日にち</th>
                                <th scope="col" className="px-6 py-4">時間</th>
                                <th scope="col" className="px-6 py-4">生徒</th>
                                <th scope="col" className="px-6 py-4">先生</th>
                                <th scope="col" className="px-6 py-4">教科</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lessons.map((lesson) => (
                                <tr key={lesson.id}
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td className="whitespace-nowrap px-6 py-4">{lesson.date}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{lesson.period}時限目</td>
                                    <td className="whitespace-nowrap px-6 py-4">{lesson.student}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{lesson.teacher}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{lesson.subject}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}