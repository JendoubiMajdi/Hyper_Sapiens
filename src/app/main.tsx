import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ApolloWrapper from "../shared/apollo/ApolloProvider";
import {AuthProvider} from "../shared/store/AuthProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ApolloWrapper>
            <AuthProvider>
                <App />
            </AuthProvider>
        </ApolloWrapper>
    </React.StrictMode>
);
