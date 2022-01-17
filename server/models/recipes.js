const db = require('./db')

exports.getById = async (id) => {
  try {
    const result = await db.select('*').from('recipes').where({ id }).first()
    return result
  } catch (e) {
    return e
  }
}
exports.list = async () => {
  try {
    const result = await db
      .select('*')
      .from('recipes')
      .orderBy('updated_at', 'desc')
    return result
  } catch (e) {
    return e
  }
}
exports.add = async (data) => {
  try {
    const result = await db.insert(data).into('recipes').returning('*')
    return result
  } catch (e) {
    return e
  }
}

exports.edit = async (data) => {
  try {
    const result = await db.update(data).from('recipes').where({ id: data.id })
    return result
  } catch (e) {
    return e
  }
}

exports.deleteById = async (id) => {
  try {
    const result = await db.from('recipes').where({ id }).del()
    return result
  } catch (e) {
    return e
  }
}
