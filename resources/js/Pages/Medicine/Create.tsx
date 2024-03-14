import { FormEventHandler, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import Select from "@/Components/Select";

function getNumber(target: HTMLInputElement): number | "" {
    const value = target.valueAsNumber;
    if (Number.isNaN(value)) return "";
    return value;
}

export default function Create({
    auth,
    status,
}: PageProps<{ status?: string }>) {
    const [api, setApi] = useState<number | "">(0);
    const [apiUnit, setApiUnit] = useState(1000000);

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        micrograms: 0,
        quantity: 0 as number | "",
        unit: "ampoules",
        expires_at: "",
    });

    useEffect(() => {
        setData("micrograms", (api || 0) * apiUnit);
    }, [api, apiUnit]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("medicines.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Guardar medicina
                </h2>
            }
        >
            <Head title="Medicina"></Head>

            {status}

            <form className="m-4" onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Nombre" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="api" value="Principio activo" />

                    <div className="sm:flex gap-3">
                        <TextInput
                            id="api"
                            name="api"
                            type="number"
                            step={0.01}
                            min={0}
                            value={api}
                            className="mt-1 block w-full"
                            onChange={(e) => setApi(getNumber(e.target))}
                            required
                        />

                        <Select
                            name="api_type"
                            className="mt-1 block w-full"
                            value={apiUnit}
                            options={{
                                1000000: "Gramos",
                                1000: "Miligramos",
                                1: "Microgramos",
                            }}
                            onChange={(e) =>
                                setApiUnit(parseInt(e.target.value, 10))
                            }
                            required
                        ></Select>
                    </div>

                    <InputError message={errors.micrograms} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="quantity" value="Cantidad" />

                    <div className="sm:flex gap-3">
                        <TextInput
                            id="quantity"
                            name="quantity"
                            type="number"
                            value={data.quantity}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("quantity", getNumber(e.target))
                            }
                            required
                        />

                        <Select
                            name="unit"
                            className="mt-1 block w-full"
                            value={data.unit}
                            options={{
                                ampoules: "Ampolletas",
                                capsules: "Cápsulas",
                                grams: "Gramos",
                                milliliters: "Mililitros",
                                tablets: "Tabletas",
                            }}
                            onChange={(e) => setData("unit", e.target.value)}
                            required
                        ></Select>
                    </div>

                    <InputError message={errors.quantity} className="mt-2" />
                    <InputError message={errors.unit} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="expires_at"
                        value="Fecha de expiración"
                    />

                    <TextInput
                        id="expires_at"
                        name="expires_at"
                        type="date"
                        value={data.expires_at}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("expires_at", e.target.value)}
                        required
                    />

                    <InputError message={errors.expires_at} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Guardar
                    </PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
