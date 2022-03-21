const router = require("express").Router();
const db = require("../modules/connect-db");

// Get all spmenu : http://localhost:3000/api/spmenu
// Get specific spmenu : http://localhost:3000/api/spmenu?resId=1

router.post("/", async (req, res) => {
  const output = {
    success: false,
    error: "",
  };

  const sql =
    "INSERT INTO `cart_sake`(`cart_sake_id`,`member_id`, `pro_id`, `cart_quantity`) VALUES (? ,?, ?, ?)";

  const [result] = await db.query(sql, [
    req.body.cart_sake_id,
    req.body.member_id,
    req.body.pro_id,
    req.body.cart_quantity,
  ]);

  output.success = !!result.affectedRows; //rowcount主為布林職
  output.result = result;

  res.json(output);
});

module.exports = router;
