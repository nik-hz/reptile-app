import React, { useState, useEffect } from 'react'

import { Navbar, Nav, Button, Card } from 'react-bootstrap'

import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Markdown from 'markdown-to-jsx'
import axios from 'axios'

const App = () => {
    const [active, setActive] = useState('')
    const [searchValue, setSearchValue] = useState('')
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
                console.log(res.data)
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

    const renderSwitch = () => {
        switch (active) {
            case 'api':
                return (
                    <div
                        style={{
                            marginLeft: '15%',
                            marginRight: '15%',
                            marginTop: 20,
                        }}
                    >
                        <Markdown options={{ forceBlock: true }}>
                            {markdown}
                        </Markdown>
                    </div>
                )
            // case 'find':
            //     return (
            //         <div>
            //             {for const }

            //         </div>
            //     )
            default:
                return (
                    <div style={{ padding: 50 }}>
                        <div style={{ padding: 10 }}>Random Reptile:</div>
                        <Card>
                            <Card.Header>
                                Here's your random reptile
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    Species: {reptile.Species}
                                </Card.Title>
                                <Card.Text>Author: {reptile.Author}</Card.Text>
                                <Card.Text>
                                    Common Name: {reptile.Common_name}
                                </Card.Text>
                                <Card.Text>
                                    Subspecies: {reptile.Subspecies}
                                </Card.Text>
                                <Card.Text>
                                    Familyetc: {reptile.Author}
                                </Card.Text>

                                <Button
                                    variant="primary"
                                    onClick={onButtonSubmit}
                                >
                                    google images
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
        }
    }

    const onButtonSubmit = (e) => {
        e.preventDefault()
        window.open(
            `https://www.google.com/search?tbm=isch&q=${reptile.Species}`
        )
    }

    const onClick = (e) => {
        e.preventDefault()
        setActive(e.target.name)
    }

    // const onSearchChange = (e) => {
    //     e.preventDefault()
    //     setSearchValue(e.target.value)
    // }

    // const onFormSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(searchValue)
    // }

    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand name="home">Reptile-API</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link name="home" onClick={onClick}>
                            Random Reptile
                        </Nav.Link>
                        <Nav.Link name="api" onClick={onClick}>
                            API
                        </Nav.Link>
                        {/* <Nav.Link name="find" onClick={onClick}>
                            Find Reptile
                        </Nav.Link> */}
                    </Nav>
                    {/* <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search Reptile"
                            className="mr-2"
                            aria-label="Search"
                            value={searchValue}
                            onChange={onSearchChange}
                        />
                        <Button
                            variant="outline-success"
                            onClick={onFormSubmit}
                        >
                            Search
                        </Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
            <div>{renderSwitch()}</div>
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
