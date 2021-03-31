import React from 'react'
import { useQuery, gql } from '@apollo/client';

const GET_USER_DATA = gql`
    {
        user {
            name
        }
    }
`;

export const BioData = () => {

    const { loading, error, data } = useQuery(GET_USER_DATA);

    console.log(data);

    // if (loading) return <div>Loading...</div>
    if (error) return <div>Error...</div>

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {data.user.map(({ name }) => (
                        <h2>{name}</h2>
                    ))}
                    
                    {JSON.stringify(data)}
                </div>
            )}
        </div>
    )
}
