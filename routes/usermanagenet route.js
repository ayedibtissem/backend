
const express = require('express');
const {
  createUser,
  getAllUsers,

  updateUser,
  deleteUser,
} = require('../controllers/usermanagment.controller');

const router = express.Router();

router.post('/user', createUser);
router.get('/user', getAllUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
module.exports = router;
