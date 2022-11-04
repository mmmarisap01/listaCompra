function addToList () {
  const product = document.getElementById('product');
  if (product.value) {
    let list = document.getElementById('list');
    let listChilds = list.childElementCount;
    let exist = true
    do {
      listChilds++;
      exist = document.getElementById(`i-${listChilds}`);
    } while (exist)
    list.innerHTML += `

    <li id="i-${listChilds}" class="parent list-group-item d-flex justify-content-between align-items-center">
      <span id="i-${listChilds}-p">
        ${product.value}
      </span>
      <span>  
        <button type="button" class="btn btn-secondary" onclick="edit('i-${listChilds}-p')">
          <i class="bi bi-pencil-fill"></i>
        </button>
        <button type="button" class="btn btn-secondary" onclick="remove('i-${listChilds}')">
          <i class="bi bi-trash3-fill"></i>
        </button>
      </span>  
    </li>`;
    product.value = '';
  } else {
    alert("Introduce un item")
  }
}

function remove (id) {
  let element = document.getElementById(id);
  element.remove();
}

function removeAll(id) {
  let element = document.getElementById(id);
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function edit (id) {
  let element = document.getElementById(id);
  const product = element.textContent.trim();
  const newValue = prompt(`Estas modificando el producto '${product}'`);
  if (newValue) element.textContent = newValue;
}
