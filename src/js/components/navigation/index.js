import React from 'react';
import Logo from './logo';
import styled from 'styled-components';
import { variables } from '../../styles';

const Navigation = ({ className, children }) => (
    <nav className={className}>
        <Logo />
    </nav>
);

export default styled(Navigation) `
    align-items: center;
    background-color: ${variables.colors.background};
    box-shadow: ${variables.shadows.navShadow};
    display: flex;
    font-size: 0.75em;
    height: 5em;
    padding: 0 2em;
    width: 100%;
`;