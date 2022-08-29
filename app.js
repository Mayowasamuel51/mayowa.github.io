const addButton = document.querySelector('.addTask')
function addTask() {
    const clinetName = document.querySelector('.clinetName').value;
    const Apponintment = document.querySelector('.Apponintment').value;
    const Reason = document.querySelector('.Reason').value;
    const text_danger = document.querySelector('.text-danger')
    let ul = document.querySelector('.ul');
    if (clinetName === '' || Apponintment === '' || Reason === '') {
        text_danger.textContent = 'This Input is empty'
        setTimeout(() => {
            text_danger.remove();
        }, 4000)
    } else {
        let li = document.createElement('li');
        li.innerHTML = '<h6>' + 'Client Name: ' + clinetName + '  ' + '<br> ' + '' + '  ' + Apponintment + '  ' + '<br> ' + '' + ' Reason: ' + Reason + '</h6>';

        li.className = 'li'
        let Dbutton = document.createElement('button');
        Dbutton.className = 'dbtn float-end';
        Dbutton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        let checkbox = document.createElement('button');
        checkbox.innerHTML = '<i class="fa-solid fa-check"></i';
        checkbox.className = 'float-end check mx-3 button'
        li.append(checkbox)
        li.append(Dbutton)
        ul.append(li)

        checkbox.addEventListener('click', function () {
            li.style.textDecoration = 'line-through';
        })
        Dbutton.addEventListener('click', function () {
            ul.removeChild(li)
        })

      
    }
}
addButton.addEventListener('click', addTask)


