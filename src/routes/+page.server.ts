import { env } from "$env/dynamic/private";

export const load = () => {
    return {
        env: env.FOO
    };
}