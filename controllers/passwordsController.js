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

// Fetch all passwords
export const fetchPasswords = async (req, res) => {
  // take id from req obj
  const userId = req.token.id;

  try {
    const response = await Password.findOne({ userId });
    res.status(200).json({ user: response });
  } catch (error) {
    // res.status(401).json({ error });
    console.log(error);
  }
};

// update passwords
export const updatePassword = async (req, res) => {
  // take id from req obj
  const userId = req.token.id;
  const { id, title, username, password } = req.body;
  console.log(id);
  try {
    const user = await Password.findOne({ userId });
    if (user) {
      user.passwords.map((currentUser) => {
        if (currentUser._id == id) {
          currentUser.title = title;
          currentUser.username = username;
          currentUser.password = password;
        }
      });
    }

    const savedUser = await user.save();
    res.status(200).json({ updatedUser: savedUser });
    // console.log(savedUser);
  } catch (error) {
    console.log(error);
  }
};

// Delete passwords
export const deletePassword = async (req, res) => {
  // take id from req obj
  const userId = req.token.id;
  const { id: msgId } = req.body;
  console.log("deleting", msgId);
  try {
    // const user = await Password.findOneAndUpdate(
    //   { userId },
    //   { passwords: { $pull: { _id: msgId } } }
    // );
    // const user = await Password.findOneAndDelete({
    //   passwords: {
    //     $pop: { _id: msgId },
    //   },
    // });
    // if (user) {
    //   console.log(user);
    // }
    // await user.save;

    const user = await Password.findOne({ userId });
    if (user) {
      const temp = user.passwords.filter((password) => password._id != msgId);
      console.log(temp);
      await temp.save();
      // user.passwords.map((currentUser) => {
      //   if (currentUser._id == id) {
      //     currentUser.title = title;
      //     currentUser.username = username;
      //     currentUser.password = password;
      //   }
      // });
    }

    // const savedUser = await user.save();
    // res.status(200).json({ updatedUser: savedUser });
    // console.log(savedUser);
  } catch (error) {
    console.log(error);
  }
};
