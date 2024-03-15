import { Link, Head, type InertiaLinkProps } from "@inertiajs/react";
import { PageProps } from "@/types";

function TextLink({ children, ...rest }: InertiaLinkProps) {
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
                        <TextLink href={route("dashboard")}>Inicio</TextLink>
                    ) : (
                        <>
                            <TextLink href={route("login")}>
                                Iniciar sesión
                            </TextLink>

                            <TextLink href={route("register")}>
                                Registrarse
                            </TextLink>
                        </>
                    )}
                </div>

                <div className="bg-white w-full flex-1 p-2 flex flex-col gap-3">
                    <h1 className="text-3xl font-bold">SimiFam®</h1>

                    <p className="flex-1">
                        Aquí podrás llevar un inventario de tus medicinas para
                        un mejor control de ellas
                    </p>

                    <p className="text-sm">
                        Por favor revisa la
                        <TextLink
                            href="#"
                            className="hover:underline mx-1 text-accent"
                        >
                            política de privacidad
                        </TextLink>
                        y los
                        <TextLink
                            href="#"
                            className="hover:underline mx-1 text-accent"
                        >
                            términos y condiciones de uso
                        </TextLink>
                    </p>
                </div>
            </div>
        </>
    );
}
