import React from 'react';
import classes from './Hero.module.css';

const hero = ( props ) => (
    <div className={classes.Hero}>
        <article className={classes.Card}>
            <img className={classes.Image} src={props.data.image.url} alt={props.name} />
            <p><b>ID- </b>{props.data.id}</p> 
            <p><b>NAME- </b>{props.data.name}</p>
            <p><b>REALNAME- </b>{props.data.biography["full-name"]}</p>  
            <p><b>CHARACTER- </b>{props.data.biography.alignment}</p>
            <p><b>POWER- </b>{props.data.powerstats.power}</p> 
            <p><b>INTELLIGENCE- </b>{props.data.powerstats.intelligence}</p>
            <p><b>SPEED- </b>{props.data.powerstats.speed}</p>
            <p><b>COMBAT- </b>{props.data.powerstats.combat}</p>
            <p><b>STRENGTH- </b>{props.data.powerstats.strength}</p>
            <p><b>DURABILITY- </b>{props.data.powerstats.durability}</p> 

        </article>
    </div>
);

export default hero;