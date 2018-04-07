import React from 'react';
import styled from 'styled-components';

const Navigation = ({ className, children }) => (
    <nav className={className}>

    </nav>
);

export default styled(Navigation) `
    background-color: black;
    display: flex;
    height: 1em;
    width: 100%;
`;