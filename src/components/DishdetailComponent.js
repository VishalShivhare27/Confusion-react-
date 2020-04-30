import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
              	<Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                      <CardTitle>{this.props.dish.name}</CardTitle>
                      <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }
        else
            return(
                <div />
            );
    }

    renderComments(comments) {
    	if(comments != null){
    		const comments = this.props.dish.comments.map((cc) => {
           		return (
       		     	<li key={cc.id}>
           				<p>{cc.comment}</p>
       			  		<p>--{cc.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cc.date)))}</p>
       		    	</li> 	
       		   	);
        	});
        	return(
        		<div className="col-12 col-md-5 m-1">
                	<h4>Comments</h4>
                	 <ul className='list-unstyled'>
                    	{comments}
               		 </ul>
                </div>
        	);
    	}
    	else
    		return(
    			<div/>
    		);
    }


    render() {
    	const dish = this.props.dish
        if (dish == null) {
            return (<div></div>)
        }
        const dishItem = this.renderDish(dish)
        const commentItem = this.renderComments(dish.comments)
        return (
          <div class="container">
            <div className='row'>
                {dishItem}
                {commentItem}
            </div>
            </div>
        );
    }
}

export default Dishdetail;