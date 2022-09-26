import styled from 'styled-components'

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-bottom: ${({ theme }) => theme.border.width.thin} solid ${props => props.theme.colors.border.subtle};
`
