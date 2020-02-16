import React from 'react';
import styled from "styled-components";

const ToolTip = styled.span`
    cursor: initial;
`

const SimpleTooltip = (props) => {
    return <ToolTip data-toggle="tooltip" title={props.title}>
        {props.children}
    </ToolTip>;
}

export default SimpleTooltip;