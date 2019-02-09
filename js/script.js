(function(){
  const name = document.getElementById('name');
  const amount = document.getElementById('amount');
  const type = document.getElementById('type');
  const saveButton = document.getElementById('save');
  const resetButton = document.getElementById('reset');
  const form = document.getElementById('form');

  function validation(){
    document.addEventListener('DOMContentLoaded', disabled);
    name.addEventListener('blur', validationInputs);
    amount.addEventListener('blur', validationInputs);
    type.addEventListener('blur', validationInputs);
    resetButton.addEventListener('click', resetForm);
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


})();