/*<div class="item">
          <p>item1</p>
          <input type="checkbox" id="item1box">
          <input type="text" placeholder="Update the item?">
          <input type="text" placeholder="Update the store?">
          <button type="button" id="item1update">Update</button>
        </div>*/

function addItem (id, name, store) {
  const itemDiv = document.createElement('div')
  itemDiv.setAttribute('class', 'item')
  const itemP = document.createElement('p')
  itemP.innerHTML = `${name} (${store})`
  itemDiv.append(itemP)
  const checkboxInput = document.createElement('input')
  checkboxInput.setAttribute('type', 'checkbox')
  itemDiv.append(checkboxInput)
  const nameInput = document.createElement('input')
  nameInput.setAttribute('type', 'text')
  nameInput.setAttribute('placeholder', 'Update the name?')
  itemDiv.append(nameInput)
  const storeInput = document.createElement('input')
  storeInput.setAttribute('type', 'text')
  storeInput.setAttribute('placeholder', 'Update the store?')
  itemDiv.append(storeInput)
  const updateButton = document.createElement('button')
  updateButton.setAttribute('type', 'button')
  updateButton.textContent = 'Update'
  updateButton.addEventListener('click', async () => {
    const body = {
      name: nameInput.value,
      store: storeInput.value
    }
    const response = await axios.put(`http://localhost:3003/items/${id}`, body)
    console.log('update response', response)
    itemP.innerHTML = `${response.data.name} (${response.data.store})`
  })
  itemDiv.append(updateButton)
  container.append(itemDiv)
}

async function download() {
  const response = await axios.get('http://localhost:3003/items')
  console.log('download response', response)
  const container = document.getElementById('container')
  response.data.forEach(element => {
    addItem(element._id, element.name, element.store) 
  })
}

download()

const addItemForm = document.getElementById('add-item-form')
console.log('addItemForm', addItemForm)
const addItemName = document.getElementById('add-item-name')
const addItemStore = document.getElementById('add-item-store')
addItemForm.addEventListener('submit', async (event) => {
  console.log('submit', event)
  event.preventDefault()

  const body = {
    name: addItemName.value,
    store: addItemStore.value
  }
  const response = await axios.post('http://localhost:3003/items', body)
  console.log('add response', response)
  addItem(response.data.item._id, response.data.item.name, response.data.item.store)
})