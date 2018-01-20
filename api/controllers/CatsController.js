/**
 * CatsController
 *
 * @description :: Server-side logic for managing cats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  myFunc1: function (req, res) {
    var count = req.param('count')
    return res.json({ ans: count })
  // console.log(1)
  },
  myFunc2: function () {
    console.log(2)
  }
}
