import { env } from '$env/dynamic/private';

let app: any

export const initializeFirebaseAdmin = () => {
    try {
        console.log('🔥 Initializing Firebase Admin SDK');
        getFirebaseAdmin();
    } catch (e) {
        console.log('💀 Firebase Admin SDK failed to initialize', e);
    }
}

export const getFirebaseAdmin = () => {
    if(!app) {
         console.log('FOO ENV VAR IS', env.FOO);
    }

    return app;
}
