export default function setUrl(url, options='dpr_auto,f_auto,q_auto:low,w_auto,c_scale') {
  let urlArr = url.split('/')
  let indexToReplace =  urlArr.findIndex(value => value === 'upload') + 1 // it's always after /upload/ in cloudinary
  const arr = urlArr.map((value, index) => index === indexToReplace ? options : value)
  return arr.join('/')
}


