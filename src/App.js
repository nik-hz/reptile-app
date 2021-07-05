import React, { useState, useEffect } from 'react'

import axios from 'axios'

import NavbarModule from './Components/NavbarModule'
import Navigator from './Components/Navigator'

const App = () => {
    const [active, setActive] = useState('')
    const [reptile, setReptile] = useState({})
    const [markdown, setMarkdown] = useState(null)

    useEffect(() => {
        // gets a snake and sets reptile
        ;(async function () {
            try {
                const res = await axios.get(
                    'https://reptile-api.herokuapp.com/api/reptiles/get_one'
                )

                setReptile(res.data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    useEffect(() => {
        import(`./api.md`)
            .then((res) => {
                fetch(res.default)
                    .then((res) => res.text())
                    .then((res) => setMarkdown(res))
                    .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
    }, [])

    const onButtonSubmit = (e) => {
        e.preventDefault()
        window.open(
            `https://www.google.com/search?tbm=isch&q=${reptile.Species}`
        )
    }

    const handleNavChange = (value) => {
        setActive(value)
    }

    return (
        <div className="App">
            <NavbarModule navigate={handleNavChange} />
            <Navigator
                active={active}
                reptile={reptile}
                onButtonSubmit={onButtonSubmit}
                markdown={markdown}
            />
            <div
                className="footer"
                style={{
                    background: '#EEEEEE',
                    display: 'flex-grow',
                    height: '50vh',
                }}
            >
                <div style={{ padding: 50 }}>
                    hello and welcome to the snake api by{' '}
                    <span>
                        <a
                            style={{ color: '#31CDC9' }}
                            href="https://github.com/nik-hz"
                            target="_blank"
                            rel="noreferrer"
                        >
                            @nik-hz
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default App
