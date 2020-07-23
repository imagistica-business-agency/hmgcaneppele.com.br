import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyles from './global'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    {/* <Header siteTitle={siteTitle} /> */}
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
