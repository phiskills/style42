import PropTypes from 'prop-types'

setUrl.prototypes = {
  url: PropTypes.string.isRequired,
  params: PropTypes.shape({
    proportion: PropTypes.string,
    width: PropTypes.string,
    quality: PropTypes.string
  })
}

export default function setUrl(url, params) {
  let options = `${params.width? params.width : 'w_auto'},${params.proportion ? params.proportion : 'ar_4:3'},dpr_auto,f_auto,${params.quality? params.quality : 'q_auto'},c_fill,g_auto,e_sharpen`
  let urlArr = url.split('/')
  let indexToReplace =  urlArr.findIndex(value => value === 'upload') + 1 // it's always after /upload/ in cloudinary
  const arr = urlArr.map((value, index) => index === indexToReplace ? options : value)
  return arr.join('/')
}


