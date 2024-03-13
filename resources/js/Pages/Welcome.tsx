import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Welcome({ auth }: PageProps) {
    return (
        <>
            <Head title="Bienvenida" />
            <div className="relative flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white flex-col">
                <div className="p-6 text-end self-end">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="bg-white w-full flex-1 p-2">
                    <h1 className="text-3xl font-bold mb-3">
                        SimiFam®
                    </h1>

                    <p>
                        Aquí podrás llevar un inventario de tus medicinas para
                        un mejor control de ellas
                    </p>
                </div>
            </div>
        </>
    );
}
