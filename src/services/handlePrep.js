const { globalPrep } = require('../schemas')
const { datetime, adminIds, parseLeads, parseTags } = require('../utils')
const { createSubtasks } = require('../controllers')


/**
 * 
 * @param {object} task The original request object sent from CU passed in from our route
 * @param {array} assigneeIds Array of assignee ID's from the task body above parsed by taskHandler
 * @returns {array} taskArray is then sent to createSubtasks.js
 */
async function handlePrep(task, assigneeIds) {
  const listId = task.list.id
  const finalArray = globalPrep.map(obj => {
    return {
      ...obj,
      parent: task.id,
      due_date: obj.due_date + datetime(),
      assignees: [44588182]
    }
  })
  console.log(finalArray)
  await createSubtasks(finalArray, listId)
}

module.exports = handlePrep