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

    componentDidMount(){
        this.getDateTime();
    }

    inputHandler = (event) => {
        this.setState({ query: event.target.value }, () => {
        })
    }
    getDateTime=()=>{
        const today = new Date();
        const dt= ("0"+today.getDate()).slice(-2)+"/"+("0" +today.getMonth()).slice(-2)+"/"+today.getUTCFullYear()+" "+("0"+today.getHours()).slice(-2)+":"+("0"+today.getMinutes()).slice(-2);
        console.log(dt);
        return dt;
    }

    submitHandler = () => {
        this.getresult();
        console.log(this.state.heroes.length)
        this.setState({loading:true})
        this.datakeeper();
    }

    datakeeper=()=>{
        const searchedItems = {
            searched : this.state.query,
            dt: this.getDateTime()
        }
        axios.post('https://dc-marvel-universe.firebaseio.com/searched-items.json',searchedItems)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    keyPressHandler=(event)=>{
        if(event.key==="Enter"){
            this.getresult();
        this.setState({loading:true})
        this.datakeeper();
    }
    }


    render() {
        if(this.state.loading){
            return(<h2 style={{color:'#5e0e0e'}}>Loading...</h2>)
        }
        else{
        return (
            <div className={classes.Background}>
                <div className={classes.SearchBar}>
                    <input className={classes.Input} type='text' placeholder='Search Heroes and Villains'  onKeyPress={this.keyPressHandler} value={this.state.query} onChange={this.inputHandler} />
                    <button className={classes.Button} onClick={this.submitHandler} type="submit">Search</button>
                </div>
                <div>
                    {this.state.error ? <h2 style={{color:'#5e0e0e'}}>{this.state.error}</h2> : this.state.heroes.map(hero => {
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