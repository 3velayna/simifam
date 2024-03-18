import { Head } from "@inertiajs/react";

export default function Policy() {
    return (
        <>
            <Head title="Política de privacidad" />
            <div className="py-2 px-3 bg-zinc-100 min-h-screen">
                <div className="max-w-prose mx-auto">
                    <h1 className="text-3xl font-bold text-teal-800">
                        Política de Privacidad
                    </h1>
                    <p>
                        Fecha de entrada en vigor:
                        <span className="italic">11 de marzo de 2024</span>
                    </p>
                    <section className="mb-4">
                        <h2 className="text-xl font-semibold text-teal-700">
                            Introducción
                        </h2>
                        <p>
                            Bienvenido a SimiFam® ("Nosotros", "Nuestro", o
                            "Sistema"). En SimiFam®, nos comprometemos a
                            proteger tu privacidad y a desarrollar tecnologías
                            que te proporcionen una experiencia segura y eficaz.
                            Esta Política de Privacidad se aplica a SimiFam® y
                            rige la recopilación y uso de datos. Al utilizar
                            SimiFam®, aceptas las prácticas descritas en esta
                            declaración.
                        </p>
                    </section>
                    <section className="mb-4">
                        <h2 className="text-xl font-semibold text-teal-700">
                            Información Recopilada
                        </h2>
                        <p>
                            Recopilamos información que nos proporcionas
                            directamente, así como datos automáticamente
                            recopilados cuando utilizas nuestro sistema.
                        </p>
                        <h3 className="font-semibold text-lg my-1 text-teal-600">
                            Información que nos proporcionas directamente
                        </h3>
                        <ul role="list">
                            <li>
                                <span className="italic font-semibold">
                                    Registro de cuenta:
                                </span>{" "}
                                Al registrarte en SimiFam®, recopilamos
                                información personal como tu nombre, dirección
                                de correo electrónico y cualquier otra
                                información que decidas proporcionar.
                            </li>
                            <li>
                                <span className="italic font-semibold">
                                    Medicamentos:
                                </span>{" "}
                                Si decides hacer públicos ciertos medicamentos
                                para intercambio, recopilaremos información
                                sobre esos medicamentos y su disponibilidad.
                            </li>
                        </ul>
                        <h3 className="font-semibold text-lg my-1 text-teal-600">
                            Datos automáticamente recopilados
                        </h3>
                        <ul role="list">
                            <li>
                                <span className="italic font-semibold">
                                    Registro de actividad:
                                </span>{" "}
                                Recopilamos información sobre tu interacción con
                                el sistema, incluyendo las páginas visitadas y
                                las acciones realizadas.
                            </li>
                        </ul>
                    </section>
                    <section className="mb-4">
                        <h2 className="text-xl font-semibold text-teal-700">
                            Uso de la Información
                        </h2>
                        <p>Utilizamos la información recopilada para:</p>
                        <ul className="list-disc list-inside">
                            <li>Proporcionar y mantener nuestro sistema.</li>
                            <li>Personalizar y mejorar tu experiencia.</li>
                            <li>
                                Facilitar intercambios de medicamentos entre
                                usuarios.
                            </li>
                            <li>
                                Comunicarnos contigo sobre el sistema y sus
                                actualizaciones.
                            </li>
                        </ul>
                    </section>
                    <section className="mb-4">
                        <h2 className="text-xl font-semibold text-teal-700">
                            Compartir Información
                        </h2>
                        No compartimos tu información personal con terceros sin
                        tu consentimiento, excepto cuando sea necesario para
                        proporcionar servicios o cumplir con la ley.
                    </section>
                    <section className="mb-4">
                        <h2 className="text-xl font-semibold text-teal-700">
                            Seguridad
                        </h2>
                        Implementamos medidas de seguridad para proteger tu
                        información contra accesos no autorizados o
                        alteraciones.
                    </section>
                    <section className="mb-4">
                        <h2 className="text-xl font-semibold text-teal-700">
                            Tus Derechos
                        </h2>
                        Puedes acceder, corregir o eliminar tu información
                        personal en cualquier momento.
                    </section>
                    <section className="mb-4">
                        <h2 className="text-xl font-semibold text-teal-700">
                            Cambios en la Política de Privacidad
                        </h2>
                        Esta Política de Privacidad puede ser actualizada
                        periódicamente. Te notificaremos sobre cambios
                        significativos y te animamos a revisarla regularmente.
                    </section>
                    <section className="mb-4">
                        <h2 className="text-xl font-semibold text-teal-700">
                            Contacto
                        </h2>
                        Si tienes preguntas sobre esta Política de Privacidad,
                        por favor, contáctanos en hali [@] halivert [.] dev
                    </section>
                </div>
            </div>
        </>
    );
}
