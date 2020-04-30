import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Detail extends Component {
  render() {
    const comments = this.props.dish.comments.map(dish => (
        <li>
          {dish.comment}
          <br/><br/>
          -- {dish.author},  {dish.date}
          <br/><br/>
        </li>
      )
    );
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <ul>{comments}</ul>
        </div>
      </div>
    );
  }
}

export default Detail;