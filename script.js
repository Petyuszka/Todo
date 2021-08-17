$(document).ready(function(){
    $('#add').click(() => {
        let listaInput = $('#szovegDoboz').val()
        $("ul").append(
            `<li>
                <span>
                    <p class = "listaElem">${listaInput}</p>
                    <p>
                        <button class = "myButton"><img src = "./content/del.svg" width = "20px" height = "20px"></button>
                        <input type = "checkbox"/>
                    </p>
                </span>
            </li>`)
    })
    $('ul').on('change', 'input[type="checkbox"]', function() {
        if (this.checked) {
            $(this).closest('li').css('color', 'gainsboro')
        }
        else {
            $(this).closest('li').css('color', 'dimgray')
        }
    })
    $('ul').on('click', '.myButton', function() {
        $(this).closest('li').remove()
    })
})