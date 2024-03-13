import { Link, Head, type InertiaLinkProps } from "@inertiajs/react";
import { PageProps } from "@/types";

function NavLink({ children, ...rest }: InertiaLinkProps) {
    return (
        <Link
            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm outline-accent"
            {...rest}
        >
            {children}
        </Link>
    );
}

export default function Welcome({ auth }: PageProps) {
    return (
        <>
            <Head title="Bienvenida" />
            <div className="relative flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white flex-col">
                <div className="p-6 text-end self-end space-x-2">
                    {auth.user ? (
                        <NavLink href={route("dashboard")}>Dashboard</NavLink>
                    ) : (
                        <>
                            <NavLink href={route("login")}>Log in</NavLink>

                            <NavLink href={route("register")}>Register</NavLink>
                        </>
                    )}
                </div>

                <div className="bg-white w-full flex-1 p-2">
                    <h1 className="text-3xl font-bold mb-3">SimiFam®</h1>

                    <p>
                        Aquí podrás llevar un inventario de tus medicinas para
                        un mejor control de ellas
                    </p>
                </div>
            </div>
        </>
    );
}
