declare global {
    namespace NodeJS {
        interface ProcessEnv {
            [key: string]: string | undefined;
            PORT: string;
            DATABASE_URL: string;
            JWT_SECRET: string;
        }
    }
}

export {};
