import React from 'react';
import { transparentize } from 'polished';
import styled from 'styled-components';
import { variables } from '../../styles';

const Logo = ({ className, children }) => (
    <div className={className}>
        <span>冒険</span>
        <em>BOUKEN</em>
    </div>
);

export default styled(Logo) `
    color: ${variables.colors.darkText};
    display: flex;
    flex-direction: column;
    font-family: ${variables.fonts.japanese};
    font-size: 2em;

    em {
        color: ${transparentize(0.4, variables.colors.darkText)};
        font-size: 0.5em;
        font-style: normal;
    }
`;