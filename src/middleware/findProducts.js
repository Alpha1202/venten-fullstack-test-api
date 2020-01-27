import { Product, Category} from '../db/models';

/**
*
*@description This class checks a table for the presence or absence of a row
* @class FindItem
*/
class FindItem{
    /**
   *@description This method checks if there are products in the table
   * @param {object} req
   * @param {object} res
   * @param {function} next
   * @returns {function} next
   * @memberof FindItem
   */
  static async findAllProducts(req, res, next) {
    const findAllProducts = await Product.findAll({});

    if (findAllProducts.length === 0) {
      return res.status(404).json({
        status: 404,
        message: 'no product'
      });
    }
    return next();
  }

}
export default FindItem;