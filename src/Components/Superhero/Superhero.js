import React, { Component } from 'react';
import axios from '../../axios';
import Hero from '../Hero/Hero';
import classes from './Superhero.module.css';


class Superhero extends Component {
    constructor(){
        super();
        this.state = {
            heroes: [],
            query: '',
            error: null,
            loading : false
    }
    }
    getresult = () => {
        axios.get(`/${this.state.query}`)
            .then(response => {
                if (response.data.error) {
                    this.setState({ error: response.data.error,loading:false});
                }
                else {
                    this.setState({ heroes: response.data.results,error: null,loading:false });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    inputHandler = (event) => {
        this.setState({ query: event.target.value }, () => {
        })
    }

    submitHandler = () => {
        this.getresult();
        console.log(this.state.heroes.length)
        this.setState({loading:true})
    }


    render() {
        if(this.state.loading){
            return(<h2>Loading...</h2>)
        }
        else{
        return (
            <div className={classes.Background}>
                <div className={classes.SearchBar}>
                    <input className={classes.Input} type='text' placeholder='Search Heroes and Villains' value={this.state.query} onChange={this.inputHandler} />
                    <button className={classes.Button} onClick={this.submitHandler} type="submit">Search</button>
                </div>
                <div>
                    {this.state.error ? <h2>{this.state.error}</h2> : this.state.heroes.map(hero => {
                        return <Hero
                            data={hero}
                            key={hero.id}
                        />
                    })}
                </div>
            </div>
        );
    }
    }
}

export default Superhero;