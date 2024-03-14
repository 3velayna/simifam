export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Medicine {
    id: string;
    owner_id: number;
    name: string;
    micrograms: number;
    quantity: number;
    unit: string;
    expires_at: string;
    created_at: string;
    updated_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
