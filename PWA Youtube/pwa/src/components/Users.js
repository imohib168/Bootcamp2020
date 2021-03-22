import React, { useState, useEffect } from 'react'

export const Users = () => {
    const [data, setData] = useState([]);
    const [mode, setMode] = useState(true);

    useEffect(() => {
        let url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(response => {
                response.json()
                    .then(data => {
                        setData(data);
                        localStorage.setItem("users", JSON.stringify(data));
                    })
            })
            .catch(err => {
                setMode(false);
                let collection = localStorage.getItem("users");
                setData(JSON.parse(collection));
            })
    }, []);

    return (
        <>
            <div>
                {mode ? (
                    <>
                        <h1>You're in Online Mode</h1>
                        <hr />
                    </>
                ) : (
                    <>
                        <h1>You're in Offline Mode</h1>
                        <hr />
                    </>
                )}
            </div>
            <div>
                {data?.map(({ id, name, phone, username, website }) => (
                    <div key={id}>
                        <h1>{name}</h1>
                        <p>{phone}</p>
                        <p>{username}</p>
                        <p>{website}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
