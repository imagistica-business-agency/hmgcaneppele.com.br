import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background: #071530;
  color: rgba(255, 255, 255, 0.67);
  padding: 180px 0 40px;
`

export const FooterList = styled.div`
  display: flex;
`

export const FooterItem = styled.div`
  width: 25%;
  margin: 0 10px;
  padding-bottom: 100px;

  &:nth-child(1) {
    margin-left: 0;
  }

  &:nth-child(4) {
    margin-right: 0;
  }

  a {
    color: rgba(255, 255, 255, 0.67);
    text-decoration: none;

    &:hover {
      color: #00c89c;
    }
  }
`

export const FooterAddress = styled.div``

export const NoBreak = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const FooterCopy = styled.div`
  border-style: solid;
  border-width: 01px 0px 0px 0px;
  border-color: rgba(255, 255, 255, 0.1);
  padding-top: 40px;
`
