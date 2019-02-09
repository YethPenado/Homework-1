(function(){
  let name = document.getElementById('name');
  let amount = document.getElementById('amount');
  let date = document.getElementById('date');
  let type = document.getElementById('type');
  const saveButton = document.getElementById('save');
  const resetButton = document.getElementById('reset');
  const form = document.getElementById('form');

  function validation(){
    document.addEventListener('DOMContentLoaded', disabled);
    name.addEventListener('blur', validationInputs);
    amount.addEventListener('blur', validationInputs);
    type.addEventListener('blur', validationInputs);
    resetButton.addEventListener('click', resetForm);
    saveButton.addEventListener('click', formData);
    form[0];
  }
  validation();

  // Deshabilita el botón "Save" por defecto
  function disabled(){
    saveButton.disabled = true;
  }

  // Se asegura de que el usuario no deje los inputs vacíos
  function validationInputs(){
    validatePlaceholder(this);
    let mistakes = document.querySelectorAll('.error');
    if(name.value !== '' && amount.value !== '' && type.value !== ''){
      if(mistakes.length === 0){
        saveButton.disabled = false;
        saveButton.style.backgroundColor = '#73B15A';
      }
    }
  }

  // Resetear formulario
  function resetForm(e){
    form.reset();
    e.preventDefault();
  }

  // Alerta (visualmente) al usuario cuando hay inputs vacíos
  function validatePlaceholder(placeholder){
    if(placeholder.value.length > 0 ){
      placeholder.style.borderColor = 'green';
      placeholder.classList.remove('error');
    } else {
      placeholder.style.borderColor = 'red';
      placeholder.classList.add('error')
      alert('Error. Please, complete the fields');
    }
  }

  // Esto no es del todo funcional :( 
  const objects = {
    name: name.value,
    amount: amount.value,
    date: date.value,
    type: type.value
  }

  const table = document.getElementById('bill-table');

  function bill(){
    const rows = document.createElement('tr');
    for (const data in objects){
      const cells = document.createElement('td');

      rows.appendChild(cells);
      table.appendChild(rows);

      cells.innerText = data.name;
      cells.innerText = data.amount;
      cells.innerText = data.date;
      cells.innerText = data.type;
    }
  }
  saveButton.addEventListener('click', bill);


})();