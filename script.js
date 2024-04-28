const ul = document.querySelector('ul');
const textField = document.querySelector('#textField');
const form = document.querySelector('form');

const list = [];

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = textField.value;
    list.push({ text: text, checked: false });
    renderList();
});
function renderList() {
    ul.innerHTML = ''; 
    list.forEach((item, index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.checked; 
        checkbox.addEventListener('change', function() {
            list[index].checked = this.checked; 
            li.classList.toggle('checked', this.checked);
            renderList();
        });
        const textNode = document.createElement('span');
        textNode.textContent = item.text;
        console.log(item.checked);
        if (item.checked) {
            li.style.textDecoration = 'line-through';
        }
        const button = document.createElement('input');
        button.type = 'button';
        button.value = 'x';
        button.addEventListener('click', function() {
            list.splice(index, 1);
            renderList();
        });

        li.appendChild(checkbox);
        li.appendChild(textNode);
        li.appendChild(button);
        ul.appendChild(li);

    });
}
