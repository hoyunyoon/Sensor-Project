import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { images } from 'theme'

const styles = StyleSheet.create({
  logo: {
    width: 32,
    height: 32,
  },
})

const HeaderTitle = () => <Image source={images.kc} style={styles.logo} />

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle
