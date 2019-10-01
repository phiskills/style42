import React, {createContext} from 'react'
import PropTypes from 'prop-types'
import appConfig from '../../appConfig'

const DEFAULT_CONFIG = {
  title: 'Style 42',
  subTitle: 'Gallery of AI generated paintings',
  // formLink: 'https://goo.gl/forms/u00WBxeK1kQco0uQ2',
  // maxAmountEvents: 2,
  // limitMonthInTheFuture: 2,
}

const { Provider, Consumer } = createContext(DEFAULT_CONFIG)

const ConfigProvider = ({ children }) => (
  <Provider value={appConfig}>{children}</Provider>
)

ConfigProvider.propTypes = {
  children: PropTypes.node,
}

const ConfigContext = {
  Provider: ConfigProvider,
  Consumer,
}

export default ConfigContext