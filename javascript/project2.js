function submit() {
 const selectElement = document.getElementById('testselect');
 const selectedOption = selectElement.options[selectElement.selectedIndex];
 const optionId = selectedOption.id;
 test.textContent = optionId.value;
}
