import React,{ Component } from 'react';
import axios from '../../axios';
import Hero from '../Hero/Hero';
import classes from './Superhero.module.css';


class Superhero extends Component {
    state = {
        heroes: [],
        query: ''
    }
    getresult=()=>{
        
        axios.get(`/${this.state.query}`)
        .then(response => {
            this.setState({heroes: response.data.results});
            console.log(response)
            })
        .catch(error =>{
                console.log(error)
            });
    }

    inputHandler=(event)=>{
        this.setState({query:event.target.value},()=>{

        })
    }

    submitHandler=()=>{
        this.getresult();
    }

    render() {
        const heroes = this.state.heroes.map(hero =>{
            return <Hero
                data={hero}
                key={hero.id}
                />
        });
        return(
            <div className={classes.Background}>
                <div className={classes.SearchBar}>
                    <input className={classes.Input} type='text' placeholder='Search Heroes and Villains' value={this.state.query} onChange={this.inputHandler}/>
                    <button className={classes.Button} onClick={this.submitHandler} type="submit">Search</button>
                </div>
                <div>
                    {heroes}
                </div>
            </div>
        );
    }
}

export default Superhero;