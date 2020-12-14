import jwt from "jsonwebtoken";

export const requireAuth = (req, res) => {
  // token
  const token = req.cookies.jwt;
  //   // token exists or not
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
      // if token isn't verified
      if (error) {
        res.json({ auth: false });
      } else {
        res.status(200).json({ auth: true, token: decodedToken });
      }
    });
  } else {
    res.json({ auth: false });
  }
};
