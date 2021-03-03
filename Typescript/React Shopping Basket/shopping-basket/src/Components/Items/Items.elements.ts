import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 2px;
    height: 100%;

    img {
        max-height: 250px;
        object-fit: cover;
    }

    div {
        font-family: Arial, Helvetica, sans-serif;
        padding: 10px;
        height: 100%;
    }
`;