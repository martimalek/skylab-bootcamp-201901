const express = require('express')
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()
const logic = require('../logic')
const router = express.Router()
require('dotenv').config()

const jwt = require('jsonwebtoken')
const jwtValidation = require('./utils/jwt-validation')

const { env: { TOKEN_SECRET, TOKEN_EXP } } = process

const jwtValidator = jwtValidation(TOKEN_SECRET)

// router.patch('/users/:userId', [jwtValidator, jsonBodyParser], (req, res) => {
//     const { params: { userId }, body: { name, surname, phone, address, email, password, newEmail, newPassword } } = req

//     logic.updateUser(userId, name, surname, phone, address, email, password, newEmail, newPassword)
//         .then(() => {
//             res.status(200)
//             res.json({ status: 'OK' })
//         })
//         .catch(({ message }) => {
//             res.status(400)
//             res.json({ status: 'KO', error: message })
//         })
// })

// router.delete('/users/:userId', [jwtValidator, jsonBodyParser], (req, res) => {
//     const { params: { userId }, body: { email, password } } = req

//     logic.unregisterUser(userId, email, password)
//         .then(() => {
//             res.status(200)
//             res.json({ status: 'OK' })
//         })
//         .catch(({ message }) => {
//             res.status(400)
//             res.json({ status: 'KO', error: message })
//         })
// })

router.post('/register', jsonBodyParser, (req, res) => {
    const { body: { name, surname, email, password, passwordConfirmation } } = req

    return logic.registerUser(name, surname, email, password, passwordConfirmation)
        .then(() => {
            res.status(201)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})


router.get('/users/:userId', jwtValidator, (req, res) => {
    const { params: { userId } } = req

    return logic.retrieveUser(userId)
        .then(user => {
            res.status(200)
            res.json({ status: 'OK', data: user })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.post('/user/auth', jsonBodyParser, (req, res) => {
    const { body: { email, password } } = req
    logic.authenticateUser(email, password)
        .then(id => {
            const token = jwt.sign({ id }, TOKEN_SECRET, { expiresIn: TOKEN_EXP })
            res.status(200)
            res.json({ status: 'OK', data: { id, token } })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})


router.get('/categories/products/:productId', (req, res) => {
    const { params: { productId } } = req

    return logic.retrieveProduct(productId)
        .then(product => {
            res.status(200)
            res.json({ status: 'OK', data: product })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.get('/categories/:id', (req, res) => {
    const { params: { id } } = req

    return logic.listProducts(id)
        .then(products => {
            res.status(200)
            res.json({ status: 'OK', data: products })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })

})


router.get('/products', (req, res) => {
    const { query: { ids } } = req



    if (!ids)
        logic.listTheProducts()
            .then(products => {
                res.status(200)
                res.json({ status: 'OK', data: products })
            })
            .catch(({ message }) => {
                res.status(400)
                res.json({ status: 'KO', error: message })
            })
    else
        return logic.listProductsByIds(ids)
            .then(products => {
                res.status(200)
                res.json({ status: 'OK', data: products })

            })
            .catch(({ message }) => {
                res.status(400)
                res.json({ status: 'KO', error: message })
            })
})



module.exports = router