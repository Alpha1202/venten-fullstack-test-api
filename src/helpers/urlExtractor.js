/**
   * @description - Extracts image urls
   * @param {array} image - array of image(s) object
   * @returns {string} image urls string
*/
const urlExtractor = (image) => {
    let imageUrl;
  
    if (image) {
      imageUrl = images.map(image => image.url).toString();
      return imageUrl;
    }
    return '';
  };
  
  export default urlExtractor;