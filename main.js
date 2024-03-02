const Input = document.querySelector('#input');
const Button = document.querySelector('#bt_input');
const full_list = document.querySelector('.list_task');
const msg_null = document.querySelector('.alert');
let list_item = [];



function add_task() {
    list_item.push({
        task: Input.value,

        check: false

    });

    valorInput = Input.value
    if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {


        valorInput.value = ''
        show_task()
    } else {

        del_item(index = -1)


        alertnull()


        setTimeout(function () {
            alertnull();
            new_p =
                `<p </p> `

            msg_null.innerHTML = new_p
        }, 500);
    }
}



function alertnull() {

    new_p =
        `<p id="enter_Input">Digite uma tarefa!</p> `

    msg_null.innerHTML = new_p

}


function show_task() {



    let new_li = ''

    list_item.forEach((item, index) => {

        new_li = new_li + `

<li class="task ${item.check ? "done" : ''}">
<img id="img_check" src="/src/assets/checked.png" onclick="check_item(${index})">
<p>${item.task}</p>
<img id="img_del" src="/src/assets/trash.png" onclick="del_item(${index})">
</li> 

`

    })

    full_list.innerHTML = new_li;
    localStorage.setItem('list_storage', JSON.stringify(list_item))

}
function check_item(index) {
    list_item[index].check = !list_item[index].check
    show_task()

}

function del_item(index) {
    list_item.splice(index, 1)
    show_task()

}

/*
function del_inputVazio(index) {
    list_item.splice(index, 1)
}
*/


function save_task() {
    const task_storage = localStorage.getItem('list_storage')


    list_item = JSON.parse(task_storage)
    show_task();
}





save_task()
Button.addEventListener('click', add_task)