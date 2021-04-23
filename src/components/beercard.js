import React from 'react'

function BeerCard(props){
    return(
        <div className="beerContainer" >
            <div className="beerSingle">
                <img alt="Punk Beer Collection" className="beerImage" src={props.image_url}></img>
                    <div className="beerInfo">
                        <h1>{props.name}</h1>
                        <h3>ABV:{props.abv}</h3>                     
                        <h4>{props.tagline}</h4>                      
                    </div>
            </div>
        </div>
    )
}

export default BeerCard