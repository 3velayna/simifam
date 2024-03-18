import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Medicine, PageProps } from "@/types";

const abbr: Record<string, string> = {
    grams: "g",
    miligrams: "mg",
    micrograms: "μg",
};

function getUnit(quantity: number, unit: string): string {
    const units =
        {
            tablets: "tableta|tabletas",
            capsules: "cápsula|cápsulas",
            ampoules: "ampolleta|ampolletas",
            grams: "gramo|gramos",
            milliliters: "mililitro|mililitros",
        }[unit] ?? "|";

    const [singular, plural] = units.split("|");

    return [quantity, quantity === 1 ? singular : plural].join(" ");
}

function formatDate(date: Date | string): string {
    return new Intl.DateTimeFormat("es-MX").format(
        typeof date === "string" ? new Date(date) : date,
    );
}

export default function Index({
    auth,
    medicines,
}: PageProps<{ medicines: Medicine[] }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Medicinas
                </h2>
            }
        >
            <Head title="Medicina"></Head>

            <section className="flex flex-col gap-3 mt-3 px-3">
                {medicines.map((medicine) => (
                    <article
                        key={medicine.id}
                        className="bg-white rounded p-3 group hover:shadow hover:bg-zinc-50"
                    >
                        <div className="flex justify-between">
                            <h2 className="text-xl font-bold">
                                {medicine.name}
                            </h2>
                            <span className="italic font-serif">
                                {formatDate(medicine.expires_at)}
                            </span>
                        </div>
                        <span>{getUnit(medicine.quantity, medicine.unit)}</span>
                        <div className="flex justify-between items-end">
                            <ul className="list-disc list-inside text-sm">
                                {medicine.active_ingredients?.map(
                                    (active_ingredient) => (
                                        <li key={active_ingredient.name}>
                                            {active_ingredient.name} -{" "}
                                            {active_ingredient.quantity}
                                            {abbr[active_ingredient.unit] ?? ""}
                                        </li>
                                    ),
                                )}
                            </ul>

                            <Link href={route("medicines.edit", { medicine })}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-accent group-hover:opacity-100 opacity-0 group-focus-within:opacity-100"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </article>
                ))}
            </section>
        </AuthenticatedLayout>
    );
}
