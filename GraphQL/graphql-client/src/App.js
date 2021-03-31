import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './App.css';
import { BioData } from './BioData';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                Hello From GraphQL
                <BioData />
            </div>
        </ApolloProvider>
    );
}

export default App;
