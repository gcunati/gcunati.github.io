// ****************************************************************************************
//                             DECLARACIÓN DE VARIABLES HTML                              *
// ****************************************************************************************


const form = document.querySelector('.section-form__form')
const input = document.querySelectorAll('.section-form__form input')
const _range = document.querySelector ('select')
const _details = document.querySelector('textarea')
const button = document.querySelector('button')


// ****************************************************************************************
//                                  ARRAY DE PRODUCTOS                                    *
// ****************************************************************************************


const products = []


// ****************************************************************************************
//                              FUNCIÓN QUE DESPLIEGA ERRORES                             *
// ****************************************************************************************


const setCustomValidity = function (mensaje, index) {
    const errorDivs = document.querySelectorAll('.error-detail')
    errorDivs[index].innerHTML = mensaje
    if (mensaje) {
        errorDivs[index].parentNode.classList.add('section-form__form__field--error')
    } else {
        errorDivs[index].parentNode.classList.remove('section-form__form__field--error')
    }
}


// ****************************************************************************************
//                                 VALIDACIONES DE CAMPOS                                 * 
// ****************************************************************************************


// ******************** Nombre ********************

input[0].addEventListener('keyup', () => {
    let inputName = input[0].value.trim()
    let nameRegExp = /^([A-Z][a-z]{3,10}|([A-Z][a-z]{3,10} ([A-Z][0-9]{1,3}|[A-Z][a-z]{2,10})))$/
    if (nameRegExp.test(inputName)){
        mensaje = ''
    } else {
        mensaje = 'Nombre inválido'
    }
    index = 0
    setCustomValidity (mensaje, index)
})

// ******************** Precio ********************

input[1].addEventListener('keyup', () => {
    let inputPrice = input[1].value.trim()
    let priceRegExp = /^[1-9][0-9]{3,5}$/
    if (priceRegExp.test(inputPrice)){
        mensaje = ''
    } else {
        mensaje = 'Precio inválido'
    }
    index = 1
    setCustomValidity (mensaje, index)
})

// ******************** Stock ********************

input[2].addEventListener('keyup', () => {
    let inputStock = input[2].value.trim()
    let stockRegExp = /^[1-9][0-9]{0,2}$/
    if (stockRegExp.test(inputStock)){
        mensaje = ''
    } else {
        mensaje = 'Stock inválido'
    }
    index = 2
    setCustomValidity (mensaje, index)
})

// ******************** Marca ********************

input[3].addEventListener('keyup', () => {
    let inputBrand = input[3].value.trim()
    let brandRegExp = /^[A-Z][a-z]{2,20}$/
    if (brandRegExp.test(inputBrand)){
        mensaje = ''
    } else {
        mensaje = 'La marca debe iniciar en mayúsculas'
    }
    index = 3
    setCustomValidity (mensaje, index)
})


// ****************************************************************************************
//                                 SUBMIT DEL FORMULARIO                                  * 
// ****************************************************************************************


form.addEventListener('submit', e => {
    e.preventDefault()

    let product = {
        name: input[0].value.trim(),
        price: input[1].value.trim(),
        stock: input[2].value.trim(),
        brand: input[3].value.trim(),
        range: _range.value.trim(),
        photo: input[4].value.trim(),
        details: _details.value.trim(),
        freeDelivery: input[5].checked,
    }

    products.push(product)
    console.log(products)

    input.forEach((input) => {
        input.value = ""
        input.checked = false
    })

    _details.value = ""
})