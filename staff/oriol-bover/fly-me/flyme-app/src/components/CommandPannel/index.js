import React, { useState } from 'react'
import logic from '../../logic'
import Terminal from './Terminal'
import Keyboard from './Keyboard'
import commands from './commands'

function CommandPannel({ droneId, historyP }) {
    const [history, setHistory] = useState([])

    function startDrone(e) {
        e.preventDefault()

        logic.startDrone(droneId)
            .then(res => {
                if (res.start === 'OK') setHistory(res.history)
            })
    }

    function sendCommand(command) {
        logic.sendDroneCommand(command, droneId)
            .then(res => {
                if (res.command === 'OK') setHistory(res.history)
            })
    }

    function keyboard(key) {
        if (commands[key]) {
            const command = commands[key].command
            sendCommand(command)
        }
    }

    function stopDrone(e) {
        e.preventDefault()

        logic.stopDrone(droneId)
            .then(res => console.log(res))
    }

    const buttonsStyle = {
        marginLeft: '13.5em',
    }

    console.log('historyP', historyP)

    return (<section className="section">
        <Terminal history={history} />
        <div className="columns is-centered is-hidden-touch">
            <div className="column is-10-desktop is-10-widescreen">
                <div className="buttons buttons--panel" style={buttonsStyle}>
                    <button className="button is-success is-outlined" onClick={e => startDrone(e)}>ON</button>
                    <button className="button is-danger is-outlined" onClick={e => stopDrone(e)}>OFF</button>
                    <button className="button is-info is-outlined" onClick={() => sendCommand('battery?')}>BATTERY</button>
                    <button className="button is-info is-outlined" onClick={() => sendCommand('takeoff')}>TAKE OFF</button>
                    <button className="button is-info is-outlined" onClick={() => sendCommand('land')}>LAND</button>
                </div>
                < Keyboard onActiveKey={keyboard} />
            </div>
        </div>
    </section>)
}

export default CommandPannel