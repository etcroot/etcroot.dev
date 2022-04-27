export default function handler(req, res) {
  let method = req.method;
  // let body = req.body;
  try {
    switch (method) {
      case "GET":
        res.status(200).json({
          response: "Successful GET",
          code: 200,
          success: true,
          category: "general",
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
