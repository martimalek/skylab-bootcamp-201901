const osiApi = {
    url: 'http://localhost:8000/api/',

    register(name, surname, email, password, passwordConfirm) {

        if (typeof name !== 'string') throw TypeError(`${name} should be a string`)

        if (!name.trim().length) throw Error('name cannot be empty')

        if (typeof surname !== 'string') throw TypeError(`${surname} should be a string`)

        if (!surname.trim().length) throw Error('surname cannot be empty')

        if (typeof email !== 'string') throw TypeError(`${email} should be a string`)

        if (!email.trim().length) throw Error('email cannot be empty')

        if (typeof password !== 'string') throw TypeError(`${password} should be a string`)

        if (!password.trim().length) throw Error('password cannot be empty')

        if (typeof passwordConfirm !== 'string') throw TypeError(`${passwordConfirm} should be a string`)

        if (!passwordConfirm.trim().length) throw Error('passwordConfirm cannot be empty')

        return fetch(this.url + '/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, surname, email, password, passwordConfirm })
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw response.error
                else return response
            })
    },

    login(email, password) {

        if (typeof email !== 'string') throw TypeError(`${email} should be a string`)

        if (!email.trim().length) throw Error('email cannot be empty')

        if (typeof password !== 'string') throw TypeError(`${password} should be a string`)

        if (!password.trim().length) throw Error('password cannot be empty')

        return fetch(this.url + '/user/auth', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw response.error
                else return response
            })
    },

    retrieve(token) {

        if (typeof token !== 'string') throw TypeError(`${token} should be a string`)

        if (!token.trim().length) throw Error('token cannot be empty')

        return fetch(this.url + '/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`
            },
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw response.error
                else return response
            })
    },

    update(token, data) {

        if (typeof token !== 'string') throw TypeError(`${token} should be a string`)

        if (!token.trim().length) throw Error('token cannot be empty')

        if (!data) throw Error('data must exist')

        if (data.constructor !== Object) throw TypeError(`${data} should be an object`)

        return fetch(this.url + '/user/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ data })
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw response.error
                else return response
            })
    },

    remove(token) {

        if (typeof token !== 'string') throw TypeError(`${token} should be a string`)

        if (!token.trim().length) throw Error('token cannot be empty')

        return fetch(this.url + '/user', {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`
            },
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw response.error
                else return response
            })
    },

    createRootDir(token) {
        if (typeof token !== 'string') throw TypeError(`${token} should be a string`)

        if (!token.trim().length) throw Error('token cannot be empty')

        return fetch(this.url + '/create/root', {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`
            },
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw response.error
                else return response
            })
    },

    createDir(token, dirPath) {
        if (typeof token !== 'string') throw TypeError(`${token} should be a string`)

        if (!token.trim().length) throw Error('token cannot be empty')

        if (typeof dirPath !== 'string') throw TypeError(`${dirPath} should be a string`)

        if (!dirPath.trim().length) throw Error('dirPath cannot be empty')

        return fetch(this.url + `create/dir?dirPath=${dirPath}`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`
            },
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw response.error
                else return response
            })
    },

    retrieveDir(token, dirPath) {
        if (typeof token !== 'string') throw TypeError(`${token} should be a string`)

        if (!token.trim().length) throw Error('token cannot be empty')

        if (typeof dirPath !== 'string') throw TypeError(`${dirPath} should be a string`)

        if (!dirPath.trim().length) throw Error('dirPath cannot be empty')

        return fetch(this.url + `dir?path=${dirPath}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw response.error
                else return response
            })
    },

    createFile(token, fileContent) {
        if (typeof token !== 'string') throw TypeError(`${token} should be a string`)

        if (!token.trim().length) throw Error('token cannot be empty')

        if (!fileContent) throw Error(`fileContent must exist`)

        if (fileContent.constructor !== Object) throw TypeError(`${fileContent} should be an object`)

        return fetch(this.url + `create/file`, {
            headers: {
                authorization: `Bearer ${token}`
            },
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw response.error
                else return response
            })
    },

    retrieveFile(token, filePath) {
        if (typeof token !== 'string') throw TypeError(`${token} should be a string`)

        if (!token.trim().length) throw Error('token cannot be empty')

        if (typeof filePath !== 'string') throw TypeError(`${filePath} should be a string`)

        if (!filePath.trim().length) throw Error('filePath cannot be empty')

        return fetch(this.url + `file?path=${filePath}`, {
            headers: {
                authorization: `Bearer ${token}`
            },
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw response.error
                else return response
            })
    },

    updatePositions(token, positions) {
        if (typeof token !== 'string') throw TypeError(`${token} should be a string`)

        if (!token.trim().length) throw Error('token cannot be empty')

        if (!positions) throw Error('positions must be defined')

        if (positions.constructor !== Array) throw TypeError(`${positions} is not an array`)
        
        return fetch(this.url + `positions`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ positions })
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw response.error
                else return response
            })
    },

    removeDir(token, dirPath) {
        if (typeof token !== 'string') throw TypeError(`${token} should be a string`)

        if (!token.trim().length) throw Error('token cannot be empty')

        if (typeof dirPath !== 'string') throw TypeError(`${dirPath} should be a string`)

        if (!dirPath.trim().length) throw Error('dirPath cannot be empty')
        return fetch(this.url + `dir?dirPath=${dirPath}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`
            },
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw response.error
                else return response
            })
    },

    rename(token, oldName, newName) {
        if (typeof token !== 'string') throw TypeError(`${token} should be a string`)

        if (!token.trim().length) throw Error('token cannot be empty')

        if (typeof oldName !== 'string') throw TypeError(`${oldName} should be a string`)

        if (!oldName.trim().length) throw Error('oldName cannot be empty')

        if (typeof newName !== 'string') throw TypeError(`${newName} should be a string`)

        if (!newName.trim().length) throw Error('newName cannot be empty')

        return fetch(this.url + `rename?newName=${newName}&oldName=${oldName}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`
            },
        })
            .then(response => {
                return response.json()
            })
            .then(response => {
                if (response.error) throw response.error
                else return response
            })
    }

}

export default osiApi