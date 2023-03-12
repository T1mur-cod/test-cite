const tableBody = document.querySelector('tbody');

tableBody.addEventListener('click', function(event) {
  if (event.target.classList.contains('remove-row-button')) {
    const row = event.target.parentNode.parentNode;
    tableBody.removeChild(row);
  }
});


export default { tableBody }
