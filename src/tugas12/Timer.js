import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 101,
      date: new Date()
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1 
    });
  }


  render(){
    return(
      <>
      {this.state.time >= 0 &&
        <>
        <p style={{textAlign: "left", display: "inline"}}>
        sekarang jam : {this.state.date.toLocaleTimeString()}
        </p>
        <p style={{float: "right", display: "inline"}}>
         hitung mundur : {this.state.time}
        </p>
        </>}
      </>
    )
  }
}

export default Timer