const form = document.getElementById('todo-form')
const input = document.getElementById('todo-input')
const list = document.getElementById('todo-list')
const empty = document.getElementById('empty')

let todos = []

function render() {
  list.innerHTML = ''

  todos.forEach((todo, index) => {
    const li = document.createElement('li')
    if (todo.done) li.classList.add('done')

    const text = document.createElement('span')
    text.textContent = todo.text
    text.addEventListener('click', () => {
      todo.done = !todo.done
      render()
    })

    const remove = document.createElement('button')
    remove.textContent = 'Delete'
    remove.className = 'remove'
    remove.addEventListener('click', () => {
      todos.splice(index, 1)
      render()
    })

    li.append(text, remove)
    list.appendChild(li)
  })

  empty.hidden = todos.length > 0
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const value = input.value.trim()
  if (!value) return
  todos.push({ text: value, done: false })
  input.value = ''
  render()
})

render()
