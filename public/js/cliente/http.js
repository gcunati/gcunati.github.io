// ****************************************************************************************
//                                Clase para ABM desde Mockapi.io                         * 
// ****************************************************************************************

// La URL, el ID y los datos vienen del script product.js de "Servicios"

class Http {

    // ******************** GET ********************

    async get(url,id) {
        try {
            return await fetch(url + (id||''), { method: 'get' }).then(r => r.json())
        }
        catch(error) {
            console.error('FETCH GET ERROR: ', error)
        }
    }

    // ******************** POST ********************

    async post(url,data) {
        try {
            return await fetch(url, { 
                method: 'post',
                body: JSON.stringify(data),
                headers : { 'content-type':'application/json' }
            }).then(r => r.json())
        }
        catch(error) {
            console.error('FETCH POST ERROR: ', error)
        }
    }

    // ******************** PUT ********************

    async put(url, id, data) {
        try {
            return await fetch(url + id, { 
                method: 'put',
                body: JSON.stringify(data),
                headers : { 'content-type':'application/json' }
            }).then(r => r.json())
        }
        catch(error) {
            console.error('FETCH PUT ERROR: ', error)
        }
    }

    // ******************** DELETE ********************

    async delete(url,id) {
        try {
            return await fetch(url + id, { 
                method: 'delete'
            }).then(r => r.json())
        }
        catch(error) {
            console.error('FETCH DELETE ERROR: ', error)
        }
    }
}

const http = new Http()