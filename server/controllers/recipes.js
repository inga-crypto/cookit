// const User = require('../models/users')
const Recipe = require('../models/recipes')
// const User = require('../models/users')

exports.create = async (req, res) => {
  const { title, description, ingredients, steps, cuisine_id } = req.body
  const user_id = req.user.id
  try {
    const result = await Recipe.add({
      title,
      description,
      ingredients,
      steps,
      user_id,
      cuisine_id,
    })
    res.status(201).send(result)
  } catch (error) {
    console.log(error)
    res.status(400).send({ error, message: 'Could not create recipe' })
  }
}
