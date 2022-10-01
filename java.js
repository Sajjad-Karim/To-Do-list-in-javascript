window.addEventListener('load', () => {
    const form = document.querySelector(".maindiv");
    const input = document.querySelector('.inputtext');
    const tast_el = document.querySelector(".content_container");
    const messageShow = document.querySelector(".label");

    const icon = document.querySelector('.fa-times')
    icon.addEventListener('click', () => {
        input.value = ''
    })
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputTask = input.value;
        // inputTask=''
        if (inputTask.length<=0) {
            messageShow.innerHTML = "Please Enter Task Which you want toDo"
            tast_el.removeChild(task_el)
            // document.getElementById('fa').style.display = 'none'
        } else {

            messageShow.innerHTML = "Task Added"
            input.value = ''

            //This is for Icon 
            // document.getElementById('fa').style.display = 'block'
            
            icon.addEventListener('click', () => {
                input.value = ''
            })
            
        }
        let task_el = document.createElement('div');
        task_el.classList.add('task');

        let content_el = document.createElement('div')
        content_el.classList.add('content')
        // content_el.innerText= inputTask;

        task_el.appendChild(content_el);
        tast_el.appendChild(task_el)


        const input_el = document.createElement('input');
        input_el.classList.add('contentoutput')
        input_el.type = 'text';
        input_el.value = inputTask;
        input_el.setAttribute('readonly', 'readonly')

        content_el.appendChild(input_el)

        //buttons
        const input_buttons = document.createElement('div');
        input_buttons.classList.add('buttons')

        //edit
        const edit_buttons = document.createElement('button');
        edit_buttons.classList.add('edit');
        edit_buttons.innerHTML = 'Edit';
        //delete
        const delete_buttons = document.createElement('button')
        delete_buttons.classList.add('delete');
        delete_buttons.innerHTML = 'Delete'

        task_el.appendChild(input_buttons)
        input_buttons.appendChild(edit_buttons);
        input_buttons.appendChild(delete_buttons);

        // input.value=''
        edit_buttons.addEventListener('click', () => {
            if (edit_buttons.innerHTML == 'Edit') {
                input_el.removeAttribute('readonly');
                input_el.focus();
                edit_buttons.innerText = 'Save'
            } else {
                input_el.setAttribute('readonly', 'readonly')
                edit_buttons.innerText = 'Edit';
            }
        })
        delete_buttons.addEventListener('click', () => {
            tast_el.removeChild(task_el)
        })
    })
}) 