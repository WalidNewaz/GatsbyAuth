/* eslint-disable no-console */
import * as React from 'react'

import './src/css/style.css'

import Layout from './src/components/main/layout'

type wrapPageElementParams = {
    element, props
}

// Wraps every page in a component
export const wrapPageElement: React.FC<{ element, props }> = ({ element, props }: wrapPageElementParams): React.ReactElement => {
    return <Layout {...props}>{element}</Layout>
}