import styled, { css } from 'styled-components'

export const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  position: ${props => props.top ? 'absolute' : 'relative'}
  ${props => props.top && 'top: 15px;'}
  ${props => props.top && 'right: 15px;'}
  
  &:hover {
    border: 2px solid ${props => props.theme.bgColor}
    color: ${props => props.theme.textColor};
  }

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

export const ButtonExtended = Button.extend`
  padding: .75em 2em;
`