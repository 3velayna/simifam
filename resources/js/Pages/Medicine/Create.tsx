import { ChangeEvent, FormEventHandler, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import { ActiveIngredient, PageProps } from "@/types";
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
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        quantity: 0 as number | "",
        unit: "ampoules",
        expires_at: "",
        active_ingredients: [] as ActiveIngredient[],
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("medicines.store"));
    };

    function processActiveIngredientChange(
        name: "name" | "quantity" | "unit",
        value: string,
        index: number,
    ) {
        setData((oldData) => {
            const activeIngredient = {
                ...oldData.active_ingredients[index],
                unit: oldData.active_ingredients[index]?.unit ?? "grams",
                [name]: value,
            };

            const validActiveIngredient =
                !!activeIngredient?.name || !!activeIngredient?.quantity;

            const activeIngredientArray = validActiveIngredient
                ? [activeIngredient]
                : [];

            return {
                ...oldData,
                active_ingredients: [
                    ...oldData.active_ingredients.slice(0, index),
                    ...activeIngredientArray,
                    ...oldData.active_ingredients.slice(index + 1),
                ],
            };
        });
    }

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

                <div className="mt-4">
                    <InputLabel value="Principio(s) activo(s)" />

                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>Unidad</th>
                            </tr>
                        </thead>

                        <tbody>
                            {Array.from({
                                length: data.active_ingredients.length + 1,
                            }).map((_, index) => {
                                const activeIngredient =
                                    data.active_ingredients[index];

                                return (
                                    <tr key={index}>
                                        <td>
                                            <TextInput
                                                name={`active_ingredients[${index}][name]`}
                                                className="mt-1 block w-full"
                                                value={
                                                    activeIngredient?.name ?? ""
                                                }
                                                onChange={(e) =>
                                                    processActiveIngredientChange(
                                                        "name",
                                                        e.target.value,
                                                        index,
                                                    )
                                                }
                                            />
                                        </td>
                                        <td>
                                            <TextInput
                                                name={`active_ingredients[${index}][quantity]`}
                                                className="mt-1 block w-full"
                                                type="number"
                                                step={0.01}
                                                value={
                                                    activeIngredient?.quantity ??
                                                    ""
                                                }
                                                onChange={(e) =>
                                                    processActiveIngredientChange(
                                                        "quantity",
                                                        e.target.value,
                                                        index,
                                                    )
                                                }
                                            />
                                        </td>
                                        <td>
                                            <Select
                                                name={`active_ingredients[${index}][unit]`}
                                                className="mt-1 block w-full"
                                                options={{
                                                    grams: "Gramos",
                                                    miligrams: "Miligramos",
                                                    micrograms: "Microgramos",
                                                }}
                                                value={
                                                    activeIngredient?.unit ?? ""
                                                }
                                                onChange={(e) =>
                                                    processActiveIngredientChange(
                                                        "unit",
                                                        e.target.value,
                                                        index,
                                                    )
                                                }
                                            ></Select>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
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
