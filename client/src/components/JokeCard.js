import React from 'react'
import '../App.css'
export default class JokeCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            partOne: '',
            partTwo: '',
        }
    }
  rotateCard = e =>{
    e.target.parentNode.classList.toggle('isFlipped')
  }
  componentDidMount(){
      this.splitJoke()
  }
  splitJoke = () =>{
      const joke = (this.props.joke);
      const splitQ = joke.split('?');
      const splitJ = splitQ.map(v => v.split('. '));
      console.log(splitJ)
      if(splitJ.length<2){
        return
      } else{
        this.setState({partOne: splitJ[0]})
        this.setState({partTwo: splitJ[1]})
    }
  }
  render(){
  return (
      <>
      {this.state.partOne || this.state.partTwo ? 
       <div className="flex my-4 flex-wrap card-container mx-1">
        <div className="card text-center shadow-lg" onClick={e=>this.rotateCard(e)}>
          <div className="front flex flex-col justify-center items-center ">
            <p>{this.state.partOne}</p>
          </div>
           <div className="back flex flex-col justify-center items-center text-xl p-2">
            <div className="flex mx-auto">
                {this.state.partTwo}
            </div>
          </div>
        </div>
        </div>
     : null}
     </> 
  )}
}
