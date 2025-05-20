declare namespace NodeJS {
    interface ProcessEnv {
        POSTGRES_USER: string;
        POSTGRES_PASSWORD: string;
        POSTGRES_DB: string;

        PGADMIN_DEFAULT_EMAIL: string;
        PGADMIN_DEFAULT_PASSWORD: string;

        NODE_PORT: string;
        PYTHON_PORT: string | undefined;
        GO_PORT: string | undefined;
        PG_PORT: string;
        PG_ADMIN_PORT: string;
        TRAEFIK_DASHBOARD_PORT: string;
    }
}
