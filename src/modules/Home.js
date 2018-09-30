import React, { Component } from 'react';
import { Button, Card, Col, Row, Table } from 'react-materialize';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {

        return (
            <div className="Home">
            <Row></Row>
            <Row></Row>
                <Row>
                    <Col m={6} s={6}>
                        <Card id="Prueba de Maquillaje (Free)" className='grey lighten-5' textclassname='grey-text' title='Prueba de Maquillaje (Free)' actions={[<Link to={{
                            pathname: '/register',
                            state: 'Prueba de Maquillaje (Free)'
                        }}> <Button waves="light" className="Green floatRight" textclassname="white">
                                Maquillaje Free </Button></Link>]}>
<Table>
  <thead>
    <tr>
      <th data-field="id">Name</th>
      <th data-field="name">Available</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Prueba de Maquillaje</td>
      <td><i className="material-icons">done_outline</i></td>
    </tr>
    <tr>
      <td>Maquillaje final completo</td>
      <td><i className="material-icons">clear</i></td>
    </tr>
    <tr>
      <td>Retoques dia evento</td>
      <td><i className="material-icons">clear</i></td>
    </tr>
  </tbody>
</Table>
    </Card>
                    </Col>
                    <Col m={6} s={6}>
                        <Card id="Maquillaje Completo" className='grey lighten-5' textclassname='grey-text' title='Maquillaje Completo (U$S 100)' actions={[<Link to={{
                            pathname: '/register',
                            state: 'Maquillaje Completo (U$S 100)'
                        }}><Button waves="light" className="pink floatRight" textclassname="white">
                                Maquillaje Completo </Button></Link>]}>
                                <Table>
  <thead>
    <tr>
      <th data-field="id">Name</th>
      <th data-field="name">Available</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Prueba de Maquillaje</td>
      <td><i className="material-icons">done_outline</i></td>
    </tr>
    <tr>
      <td>Maquillaje final completo</td>
      <td><i className="material-icons">done_outline</i></td>
    </tr>
    <tr>
      <td>Retoques dia evento</td>
      <td><i className="material-icons">done_outline</i></td>
    </tr>
  </tbody>
</Table>
    </Card>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Home;
