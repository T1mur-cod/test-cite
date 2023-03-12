 export default function validateForm() {
  const nameInput = document.querySelector('input[name="user_name"]');
  const ageInput = document.querySelector('input[name="age"]');
  const competenceInput = document.querySelector('input[name="competence"]');

  if (nameInput.value === '' || ageInput.value === '' || competenceInput.value === '') {
    alert('Пожалуйста, заполните все поля формы');
    return false;
  }

  return true; 
}
