import { Head } from "@inertiajs/react";

export default function Terms() {
    return (
        <>
            <Head title="Términos de uso" />
            <div className="py-2 px-3 bg-zinc-100 min-h-screen">
                <div className="max-w-prose mx-auto">
                    <h1 className="text-3xl font-bold text-teal-800">
                        Términos y Condiciones de SimiFam®
                    </h1>
                    <p>
                        Bienvenido al SimiFam® (Sistema de Intercambio de
                        Medicinas). Estos términos y condiciones rigen tu uso de
                        la plataforma. Al acceder y utilizar este servicio,
                        aceptas estos términos en su totalidad. Si no estás de
                        acuerdo con alguno de los términos, te solicitamos que
                        no utilices nuestra plataforma.
                    </p>
                    <section className="mb-4">
                        <h2 className="text-xl font-semibold text-teal-700">
                            Uso del Servicio
                        </h2>
                        <p>
                            El servicio proporciona una plataforma para
                            facilitar el intercambio de medicinas entre usuarios
                            registrados.
                        </p>
                        <p>
                            Te comprometes a utilizar la plataforma de manera
                            ética y conforme a las leyes y regulaciones
                            mexicanas.
                        </p>
                    </section>
                    <section className="mb-4">
                        <h2 className="text-xl font-semibold text-teal-700">
                            Registro y Cuentas de Usuario
                        </h2>
                        <p>
                            Para acceder a ciertas funciones de la plataforma,
                            es necesario registrarse y crear una cuenta de
                            usuario.
                        </p>
                        <p>
                            Proporcionar información falsa o incorrecta durante
                            el registro es motivo de suspensión o cancelación de
                            la cuenta.
                        </p>
                    </section>
                    <section className="mb-4">
                        <h2 className="text-xl font-semibold text-teal-700">
                            Publicación de Medicinas
                        </h2>
                        <p>
                            Al publicar medicinas disponibles para intercambio,
                            confirmas que posees legalmente dichos medicamentos.
                        </p>
                        <p>
                            No se permiten medicamentos controlados, ilegales o
                            vencidos en la plataforma.
                        </p>
                    </section>
                    <section className="mb-4">
                        <h2 className="text-xl font-semibold text-teal-700">
                            Intercambio y Responsabilidades
                        </h2>
                        <p>
                            El intercambio de medicinas se realiza directamente
                            entre los usuarios. La plataforma no es responsable
                            de la calidad, eficacia o seguridad de los
                            medicamentos intercambiados.
                        </p>
                        <p>
                            Los usuarios son responsables de verificar la
                            autenticidad y legalidad de los medicamentos antes
                            de aceptar un intercambio.
                        </p>
                    </section>
                    <section className="mb-4">
                        <h2 className="text-xl font-semibold text-teal-700">
                            Privacidad y Seguridad
                        </h2>
                        <p>
                            La privacidad de la información del usuario es una
                            prioridad. Consulta nuestra Política de Privacidad
                            para obtener detalles sobre cómo manejamos tus
                            datos.
                        </p>
                        <p>
                            Es responsabilidad del usuario mantener segura su
                            información de inicio de sesión y notificar
                            cualquier actividad no autorizada.
                        </p>
                    </section>
                    <section className="mb-4">
                        <h2 className="text-xl font-semibold text-teal-700">
                            Modificaciones y Terminación del Servicio
                        </h2>
                        <p>
                            Nos reservamos el derecho de realizar modificaciones
                            en la plataforma y estos términos en cualquier
                            momento.
                        </p>
                        <p>
                            Nos reservamos el derecho de suspender o terminar tu
                            acceso al servicio en caso de violación de estos
                            términos.
                        </p>
                    </section>
                    <section className="mb-4">
                        <h2 className="text-xl font-semibold text-teal-700">
                            Ley Aplicable
                        </h2>
                        <p>
                            Estos términos se rigen por las leyes de México.
                            Cualquier disputa se resolverá conforme a dichas
                            leyes.
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
}
