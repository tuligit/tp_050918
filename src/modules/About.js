import React, { Component } from 'react';
import {Col, Card, CardTitle, Badge} from 'react-materialize';


class About extends Component {


  render() {

    return (
      <div className="About">

        <Col m={4} s={4}>
  <Card horizontal header={<CardTitle image="https://cdn.shopify.com/s/files/1/1265/7867/files/bluemercury_makeup_header_mobile.jpg?8053509952735372281"></CardTitle>} actions={[<a href='https://github.com/gtulino'>Go to GitHub</a>]}>
      <h3>Gustavo Tulino</h3>
      <p>IFTS16</p>
      <p>gustavo.tulino@gmail.com</p>   
    </Card>
</Col>

      </div>
    );
  }
}

export default About;
