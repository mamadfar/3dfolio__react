/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_EMAIL_SERVICE_ID: string;
    readonly VITE_EMAIL_TEMPLATE_ID: string;
    readonly VITE_EMAIL_PUBLIC_KEY: string;
    readonly VITE_EMAIL_TO_NAME: string;
    readonly VITE_EMAIL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
