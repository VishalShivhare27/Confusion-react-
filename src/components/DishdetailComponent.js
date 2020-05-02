  
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem  } from 'reactstrap';
import {Link} from 'react-router-dom';


     function RenderDish({dish}) {
        if (dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
              	<Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
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

   function RenderComments({comments}) {
    	if(comments != null){
    		const commentsshow = comments.map((cc) => {
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
                    	{commentsshow}
               		 </ul>
                </div>
        	);
    	}
    	else
    		return(
    			<div/>
    		);
    }


    const DishDetail = (props) => {
    	const dish = props.dish
        if (dish == null) {
            return (<div></div>)
        }
        const dishItem = <RenderDish dish={props.dish}/>
        const commentItem = <RenderComments comments={props.comments} />
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
          
            <div className='row'>
                {dishItem}
                {commentItem}
            </div>
            </div>
        );
    }


export default DishDetail;