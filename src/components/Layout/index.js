import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyles from './global'
// import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    {/* <Header siteTitle={siteTitle} /> */}
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
