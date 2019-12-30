import React, { Component } from 'react'
import './bootstrap.css'
import './styles.css'
import Word from './Word'
import Button from './Button'
import Input from './Input'
import Score from './Score'
import Table from './Table'
export default class Container extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        shouldBeNum:false, 
        value:'',
         game:{
             1:['a','b','c',' '],
             2:['d','e','f',' '],
             3:['g','h','i',' '],
             4:['j','k','l',' '],
             5:['m','n','o',' '],
             6:['p','q','r','s'],
             7:['t','u','v',' '],
             8:['w','x','y','z'],
         },
         words:['bishop','hi','to','are','to'],
         wordToSpell:'bishop',
         score:1,
         userWord:[],
         wordLength:0,
         counter:20,
         ckSsp:[null,null],
         dotun:1,
         stop:false,
         toggleTable:false
      }
    }
    componentDidMount(){ 
        let x = this.interval()
        x.clear()
    }
        sizeCheck=(a)=>{ 
            let c = []
            for (let i = 0;i <a.length;i++){
                for (let j = 0;j <i;j++){
                c.push(j)
                }
                }
                this.setState({
                    wordLength:c.length
                })
           return c
            }
    change=(e)=>{
        
if(this.state.ckSsp[0] === true  && this.state.ckSsp[1] === true){
        let a = e.target.value.split("")
       let lastIndex = a[a.length-1]
        if(this.state.game[lastIndex]){
            this.setState({
                value:e.target.value,
                shouldBeNum:false
            })
            for(let letter in a){ 
            let a  = this.state.game[e.target.value[letter]]
            try{
                let b  = this.state.wordToSpell[letter]
            if(a.includes(b)){
            this.state.userWord.push(b)
            let nonso = this.sizeCheck(this.state.wordToSpell)  
            if(nonso.length+1 === this.state.userWord.length){
            console.log(this.state.dotun,nonso.length,this.state.userWord.length) 
                let timilehin = this.state.dotun+1    
                this.setState({
                    dotun:timilehin,
                })
                this.setState({
                    counter:20
                })
                this.setState({
                    value:""
                })
                this.setState({  
                userWord:[]
                })
                this.setState({  
                wordLength:0
                })
                this.setState({
                wordToSpell:this.state.word[Math.round(Math.random()*5)],
                })    
                }    
//136356
            }
            else{
                this.setState(prevState => {
                    return { value: "",
                            wordToSpell:prevState.words[Math.round(Math.random()*5)], 
                            userWord:[],
                            dotun:this.state.dotun<1 ? 0 : prevState.dotun - 1,
                            counter:20
                        }
                });
                break
            }}catch(err){
                this.setState(prevState => {
                    return { value: "",
                            wordToSpell:prevState.words[Math.round(Math.random()*5)] };
                });
                break  
            }
            }
        }
        
        console.log(this.state.score)        
    }}
    interval =(resume,clear)=>{
        let obj  = {
            set:setInterval(() => {
                if(this.state.counter && !this.state.stop){
                    this.setState({
                                counter:this.state.counter-1
                            })
                        }else {
                            if(!this.state.stop){                            
                                this.setState({
                                    wordToSpell:this.state.words[Math.round(Math.random()*5)]
                                })
                                }
                                if(!this.state.stop){
                            this.setState(prevState => {
                                return { value: "",
                                        wordToSpell:prevState.words[Math.round(Math.random()*5)], 
                                        userWord:[],
                                        score:this.state.score-1,
                                        counter:20
                                    }
                            });
                        }
                        }
            }, 1000),
            clear:function (){
                clearInterval(obj.set)
            }
        }
        return obj
    }
    startButton=()=>{
        if(
            this.state.ckSsp[0] === true
            &&
            this.state.ckSsp[1] === true
            ){
                return
            }
        this.setState(prevState => {
            return {
                    ckSsp:[true,true],
                    wordToSpell:prevState.words[Math.round(Math.random()*5)],
                    stop:false
                }
        });
        console.log(this.state.stop,'and aother ',this.state.ckSsp)
        let start = this.interval()
        return start.set


    }
    stopButton=()=>{
        if(this.state.ckSsp[1]){
      this.setState({
          stop:true
      })
      console.log(this.state.stop,"bishop")
    }
    }
    toggleTable=()=>{
        console.log('table',this.state.toggleTable)
        if(this.state.toggleTable){
            this.setState({
                toggleTable:false
            })
        }
        else{
            this.setState({
                toggleTable:true
            })
        }
    }
    render() {
    return (
      <div className="container bg-primary">
      <p className="para">SPELL THE WORLD</p>
        <Word word={this.state.wordToSpell} counter={this.state.counter}/>
        {this.state.shouldBeNum ?"you can only enter numbers" : null }
        <Input value={this.state.value} onPaste={this.paste} change={this.change}/>
        <Score score={this.state.dotun}/>
        <Button
        toggleTable={this.toggleTable} 
        stopButton={this.startButton}
        type={"START"}
        />
        {/* <Button 
        stopButton={this.stopButton} 
        type={"STOP"}
        /> */}
        <Table  state={this.state.toggleTable}game={this.state.game}/>
      </div>
    )
  }
}
