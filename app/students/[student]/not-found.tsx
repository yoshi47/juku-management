import Link from "next/link";

export default function StudentNotFound() {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-4xl font-extrabold dark:text-white pb-5">見つけることができませんでした。</h2>
            <Link href="/students">
                <button
                    className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                    一覧に戻る
                </button>
            </Link>
        </div>
    );
}