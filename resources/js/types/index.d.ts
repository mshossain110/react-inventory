import { User } from './resources';

export * from './resources'

declare module 'popmotion';

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    meta?: {
        pageTitle?: string
    }
};
