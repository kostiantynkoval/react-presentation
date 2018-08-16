import React from 'react';
import styled from 'styled-components'


const Link = ({ className, children }) => (
    <a className={className}>
        {children}
    </a>
)

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

export default class Links extends React.Component {
    render() {
        return (
            <div>
                <Link>Unstyled, boring Link</Link>
                <br />
                <StyledLink>Styled, exciting Link</StyledLink>
            </div>
        )
    }
}