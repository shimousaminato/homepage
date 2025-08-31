function submit() {
 const selectElement = document.getElementById('mySelect');
 const selectedOption = selectElement.options[selectElement.selectedIndex];
 const optionId = selectedOption.id;
 test.textContent = optionId.value;
}
