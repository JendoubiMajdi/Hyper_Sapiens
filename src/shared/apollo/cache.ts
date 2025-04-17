import { InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                clients: {
                    merge(existing = [], incoming: any[]) {
                        return incoming;
                    },
                },
            },
        },
    },
});