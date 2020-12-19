import Password from "../models/PasswordModel.js";

// Add password
export const addPassword = async (req, res) => {
  const { title, username, password } = req.body;
  // take id from req obj
  const userId = req.token.id;
  // Creating new obj
  const newPaswordObj = {
    $push: {
      passwords: {
        title,
        username,
        password,
      },
    },
  };

  // Query
  const query = { userId };

  try {
    const response = await Password.findOneAndUpdate(query, newPaswordObj, {
      new: true,
    });
    res.status(200).json({ newPaswordObj: response });
  } catch (error) {
    res.status(401).json({ error });
  }
};
