const Chance = require("chance");

export default function handler(req, res) {
  let method = req.method;
  const ch = new Chance();
  // let body = req.body;
  try {
    let id = ch.android_id();
    switch (method) {
      case "GET":
        res.status(200).json({
          response: id,
          code: 200,
          success: true,
          category: "generator",
        });
        break;
      default:
        res.status(400).json({
          response: "Bad Request",
          code: 400,
          success: false,
          category: "general",
        });
        break;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      response: "Internal Server Error",
      code: 500,
      success: false,
      category: "general",
    });
  }
}
