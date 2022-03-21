const router = require("express").Router();
const db = require("../modules/connect-db");

// Get all spmenu : http://localhost:3000/api/spmenu
// Get specific spmenu : http://localhost:3000/api/spmenu?resId=1
router.get("/", async (req, res) => {
  if (req.query.event_id) {
    const { event_id} = req.query;
    const sql = `SELECT * FROM event e LEFT JOIN event_cat ec ON e.event_cat_id = ec.event_cat_id WHERE e.event_id = ${event_id}`;
    const [rs, fields] = await db.query(sql);
    return res.json(rs);
  }
  const sql = "SELECT * FROM event e LEFT JOIN event_cat ec ON e.event_cat_id = ec.event_cat_id";
  const [rs, fields] = await db.query(sql);
  res.json(rs);
});

module.exports = router;
