import React from 'react'

import { Button, Card } from 'react-bootstrap'

import Markdown from 'markdown-to-jsx'

const Navigator = ({ active, reptile, onButtonSubmit, markdown }) => {
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
        default:
            return (
                <div style={{ padding: 50 }}>
                    <div style={{ padding: 10 }}>Random Reptile:</div>
                    <Card>
                        <Card.Header>Here's your random reptile</Card.Header>
                        <Card.Body>
                            <Card.Title>Species: {reptile.Species}</Card.Title>
                            <Card.Text>Author: {reptile.Author}</Card.Text>
                            <Card.Text>
                                Common Name: {reptile.Common_name}
                            </Card.Text>
                            <Card.Text>
                                Subspecies: {reptile.Subspecies}
                            </Card.Text>
                            <Card.Text>Familyetc: {reptile.Author}</Card.Text>

                            <Button variant="primary" onClick={onButtonSubmit}>
                                google images
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            )
    }
}

export default Navigator
