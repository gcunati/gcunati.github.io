// Creación de Instancia de Conexión con el Servidor

function ajax(url, metodo) {
    let xhr = new XMLHttpRequest
    xhr.open(metodo||'get', url)
    xhr.send()

    return xhr
}

// Función que retorna la URL de la plantilla a insertar

function getURL(id) {
    return 'plantillas/' + (id||'inicio') + '.html'
}

// Función que marca como activa la plantilla insertada

function marcarPlantilla(id) {
    let links = document.querySelectorAll ('a')
    links.forEach( link =>{
        if (link.id == id){
            link.classList.add ('nav-bar__nav-link-active')
        } else {
            link.classList.remove ('nav-bar__nav-link-active')
        }
    })
}

// Llamado a ejecutar scripts de la plantilla inyectada

function initJs(id) {
    if(window.location.href == "https://gcunati.github.io/"){
        location.href = "https://connecticus-ecommerce.glitch.me/#inicio"
    }
    else{
        switch(id) {
            case 'inicio':
                initInicio()
                break
            case 'alta':
                initAlta()
                break
            case 'contacto':
                break
            case 'nosotros':
                break
            default:
                initInicio()
        }
    }

}


// Función selectora de plantillas deseadas

function getPlantilla(id) {
    let title = document.querySelector ('title')
    let main = document.querySelector ('main')

    let plantilla = getURL(id)
    let xhr = ajax(plantilla)
    xhr.addEventListener ('load', () => {
        if (xhr.status == 200){
            main.innerHTML = xhr.response
            initJs(id)

            id = location.hash.charAt(1)
            id = id.toUpperCase()
            idmin = location.hash.slice(2)
            title.innerHTML = id + idmin || 'Inicio'    
        }
    })
}

// Función que carga las plantillas

function loadPlantilla() {
    let links = document.querySelectorAll('a')

    // Carga de la página inicial, sin clickear ningún link
    let id = location.hash.slice(1) || 'inicio'
    marcarPlantilla(id)
    getPlantilla(id)

    // Carga del resto de páginas al ser clickeadas
    links.forEach( link => {
        link.addEventListener ('click', e => {
            e.preventDefault()

            let id = link.id
            location.hash = id
        })
    })

    window.addEventListener('hashchange', () => {
        let id = location.hash.slice(1) || 'inicio'
        marcarPlantilla(id)
        getPlantilla(id)
        let slogan = document.querySelector('.change-parentClass')
        if (id == 'nosotros'){
            slogan.parentNode.classList.replace('search-bar__logo-container__slogan','search-bar__logo-container__slogan-us')
        } else{
            slogan.parentNode.classList.replace('search-bar__logo-container__slogan-us','search-bar__logo-container__slogan')
        }
    })
}

loadPlantilla()