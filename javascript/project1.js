function submit() {
const comment = document.getElementById('comment')
const test = document.getElementById('test')

const content = comment.value;
test.textContent = content;
}
