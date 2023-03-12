const addTableButton = document.querySelector('.add-table-button');
const tableBody = document.querySelector('tbody');

addTableButton.addEventListener('click', function() {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td><input type="text"></td>
    <td>
      <select>
        <option value="analyst">Аналитик</option>
        <option value="manager">Менеджер</option>
        <option value="programmer">Программист</option>
        <option value="lawyer">Юрист</option>
      </select>
    </td>
    <td><input type="number"></td>
    <td><input type="text"></td>
    <td><button class="remove-row-button">Удалить</button></td>
  `;
  tableBody.appendChild(newRow);
});

export default { addTableButton }
