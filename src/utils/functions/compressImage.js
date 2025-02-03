export const compressImage = async (blobImg, percent) => {
  let bitmap = await createImageBitmap(blobImg)
  let canvas = document.createElement('canvas')
  let ctx = canvas.getContext('2d')
  canvas.width = bitmap.width
  canvas.height = bitmap.height
  ctx.drawImage(bitmap, 0, 0)
  let dataUrl = canvas.toDataURL('image/jpeg', percent / 100)
  let dataUrlFile = dataURLtoFile(dataUrl, `compressed${bitmap.filename}`)
  return dataUrlFile
}
// https://medium.com/@impulsejs/convert-dataurl-to-a-file-in-javascript-1921b8c3f4b
function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[arr.length - 1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}
