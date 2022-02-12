// ****************************************************************************************
//                             DECLARACIÓN DE VARIABLES HTML                              *
// ****************************************************************************************


let form = null 
let input = null  
let _range = null 
let _details = null 
let button = null 
let camposValidos = null


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
//                     FUNCIÓN QUE INSERTA PRODUCTOS CARGADOS EN TABLA                    *
// ****************************************************************************************

function renderProds(products) {

    fetch('vistas/alta.hbs')
    .then(r => r.text())
    .then( plantilla => {
        var template = Handlebars.compile(plantilla);
        let html = template({ products: products });

        document.querySelector('.section-form__loaded__products').innerHTML = html
    })
}


// ****************************************************************************************
//                          FUNCIÓN QUE LEE EL PRODUCTO CARGADO                           *
// ****************************************************************************************


function readProduct() {
    return{
        name: input[0].value.trim(),
        price: input[1].value.trim(),
        stock: input[2].value.trim(),
        brand: input[3].value.trim(),
        range: _range.value.trim(),
        photo: input[4].value.trim(),
        details: _details.value.trim(),
        freeDelivery: input[5].checked,
    }
}


// ****************************************************************************************
//                             FUNCIÓN QUE LIMPIA EL FORMULARIO                           *
// ****************************************************************************************


function cleanForm() {

    input.forEach((input) => {
        input.value = ""
        input.checked = false
    })
    
    button.disabled = true
    camposValidos = [false, false, false, false]
    
    _details.value = ""
}


// ****************************************************************************************
//                                 VALIDACIONES DE CAMPOS                                 * 
// ****************************************************************************************

async function initAlta(){

    form = document.querySelector('.section-form__form')
    input = document.querySelectorAll('.section-form__form input')
    _range = document.querySelector ('select')
    _details = document.querySelector('textarea')
    button = document.querySelector('button')

    // Carga en el modelo de productos los que traiga el controlador. Después los imprime en vista
    productsModel.initproducts(await productsController.getProducts())
    renderProds(productsModel.get())

    button.disabled = true

    camposValidos = [false, false, false, false]

    function toggleButton (){
        if (camposValidos[0] && camposValidos[1] && camposValidos[2] && camposValidos[3]){
            button.disabled = false
        } else {
            button.disabled = true
        }
    }

    // ******************** Nombre ********************
    
    input[0].addEventListener('keyup', () => {
        let inputName = input[0].value.trim()
        let nameRegExp = /^([A-Z][a-z]{3,10}|([A-Z][a-z]{3,10} ([A-Z][0-9]{1,3}|[A-Z][a-z]{1,10}|[1-9][0-9]{1,2})))$/
        index = 0
        if (nameRegExp.test(inputName)){
            mensaje = ''
            camposValidos[index] = true
            toggleButton()
        } else {
            mensaje = 'Nombre inválido'
            button.disabled = true
        }
        setCustomValidity (mensaje, index)
    })
    
    // ******************** Precio ********************
    
    input[1].addEventListener('keyup', () => {
        let inputPrice = input[1].value.trim()
        let priceRegExp = /^[1-9][0-9]{3,5}$/
        index = 1
        if (priceRegExp.test(inputPrice)){
            mensaje = ''
            camposValidos[index] = true
            toggleButton()
        } else {
            mensaje = 'Precio inválido'
            button.disabled = true
        }
        setCustomValidity (mensaje, index)
    })
    
    // ******************** Stock ********************
    
    input[2].addEventListener('keyup', () => {
        let inputStock = input[2].value.trim()
        let stockRegExp = /^[1-9][0-9]{0,2}$/
        index = 2
        if (stockRegExp.test(inputStock)){
            mensaje = ''
            camposValidos[index] = true
            toggleButton()
        } else {
            mensaje = 'Stock inválido'
            button.disabled = true
        }
        setCustomValidity (mensaje, index)
    })
    
    // ******************** Marca ********************
    
    input[3].addEventListener('keyup', () => {
        let inputBrand = input[3].value.trim()
        let brandRegExp = /^[A-Z][a-z]{2,20}$/
        index = 3
        if (brandRegExp.test(inputBrand)){
            mensaje = ''
            camposValidos[index] = true
            toggleButton()
        } else {
            mensaje = 'La marca debe iniciar en mayúsculas'
            button.disabled = true
        }
        setCustomValidity (mensaje, index)
    })
    
    
    // ****************************************************************************************
    //                                 SUBMIT DEL FORMULARIO                                  * 
    // ****************************************************************************************
    
    
    form.addEventListener('submit', async e => {
        e.preventDefault()
    
        let product = readProduct()
        cleanForm()
    
        await productsController.postProduct(product)
    })
    
}
