const User = require('../models/user model');

const createUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password, position } = req.body;

    const user = new User({
      firstname,
      lastname,
      email,
      password,
      position,
    });

    await user.save();

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, email, password, position } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      { firstname, lastname, email, password, position },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
