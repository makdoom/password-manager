import Password from "../models/PasswordModel.js";

// Add password
export const addPassword = async (req, res) => {
  const password = req.body;
  // User id from req
  const userId = req.token.id;

  // if user add password for the first time
  try {
    const passwordList = await Password.findOne({ userId });
    if (!passwordList) {
      const response = await Password.create({ userId, passwords: password });
      res.status(200).json({ newPasswordObj: response });
    } else {
      // Adding the password in passwords array
      try {
        const newPasswordObj = { $push: { passwords: password } };
        const response = await Password.findOneAndUpdate(
          { userId },
          newPasswordObj,
          { new: true }
        );
        res.status(200).json({ newPasswordObj: response });
      } catch (error) {
        res.status(401).json({ error });
      }
    }
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
    res.status(200).json({ passwords: response.passwords });
  } catch (error) {
    res.status(401).json({ error });
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
    const response = await Password.findOneAndUpdate(
      { "passwords._id": id },
      {
        $set: {
          "passwords.$.title": title,
          "passwords.$.username": username,
          "passwords.$.password": password,
        },
      }
    );
    console.log(response);
    res.status(200).send("Updated sucessfully");
  } catch (error) {
    console.log(error);
  }

  // try {
  //   const user = await Password.findOne({ userId });
  //   if (user) {
  //     user.passwords.map((currentUser) => {
  //       if (currentUser._id == id) {
  //         currentUser.title = title;
  //         currentUser.username = username;
  //         currentUser.password = password;
  //       }
  //     });
  //   }

  //   const savedUser = await user.save();
  //   res.status(200).json({ updatedUser: savedUser });
  //   // console.log(savedUser);
  // } catch (error) {
  //   console.log(error);
  // }
};

// Delete passwords
export const deletePassword = async (req, res) => {
  //   // take id from req obj
  //   const userId = req.token.id;
  //   const { id: msgId } = req.body;
  //   console.log("deleting", msgId);
  //   try {
  //     // const user = await Password.findOneAndUpdate(
  //     //   { userId },
  //     //   { passwords: { $pull: { _id: msgId } } }
  //     // );
  //     // const user = await Password.findOneAndDelete({
  //     //   passwords: {
  //     //     $pop: { _id: msgId },
  //     //   },
  //     // });
  //     // if (user) {
  //     //   console.log(user);
  //     // }
  //     // await user.save;
  //   //   const user = await Password.findOne({ userId });
  //   //   if (user) {
  //   //     const temp = user.passwords.filter((password) => password._id != msgId);
  //   //     console.log(temp);
  //   //     await temp.save();
  //   //     // user.passwords.map((currentUser) => {
  //   //     //   if (currentUser._id == id) {
  //   //     //     currentUser.title = title;
  //   //     //     currentUser.username = username;
  //   //     //     currentUser.password = password;
  //   //     //   }
  //   //     // });
  //   //   }
  //   //   // const savedUser = await user.save();
  //   //   // res.status(200).json({ updatedUser: savedUser });
  //   //   // console.log(savedUser);
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
};
