import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './apolloClient';

const ApolloWrapper = ({ children }: { children: React.ReactNode }) => (
    <ApolloProvider client={apolloClient}>
        {children}
    </ApolloProvider>
);

export default ApolloWrapper;