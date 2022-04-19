function howMany(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }
  let btn = document.getElementById('btn');
  btn.addEventListener('click', function() {
    alert('Número de opciones seleccionadas: ' + howMany(document.selectForm.formestacion));
  });