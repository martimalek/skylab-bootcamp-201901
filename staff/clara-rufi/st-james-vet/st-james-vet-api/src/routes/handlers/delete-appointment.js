const logic = require('../../logic')

module.exports = (req, res) => {
    debugger
    
    const { body: { Id } } = req
    try {
        logic.deleteAppointment(Id)
         
            .then(res.json({message: 'OK'}))
            // .then(Id => res.json({message: 'OK'}))
            
            .catch(({ message }) => {
                res.status(409).json({
                    error: message
                })
            })
    } catch ({ message }) {
        res.status(409).json({
            error: message
        })
    }
}