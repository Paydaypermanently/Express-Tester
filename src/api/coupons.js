const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    coupons: [
      {
        type: "rate",
        title: "10% 할인 쿠폰",
        discountRate: 10,
      },
      {
        type: "amount",
        title: "10,000원 할인 쿠폰",
        discountAmount: 10000,
      },
    ],
  });
});

module.exports = router;
