import React from 'react';
import moment from 'moment'
import './App.scss';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentDate: moment().format('L'),
      date: moment().format('L')
    }
  }

  daysInMoth = (month) =>{
    return moment(month, 'L').daysInMonth()
  }

  moveMonth = (next) =>{
    const { date } = this.state
    const current = moment(date, 'L')
    this.setState({
      date: next ? current.add('month', 1).format('L') : current.subtract('month', 1).format('L'),
    })
  }

  render(){
    const { currentDate, date } = this.state
    
    return (
      <div className="App">
        <header>
          <h1>Calendar</h1>
        </header>
        <section id="date">
          <h3>date: { date } </h3>
          <h3>current date: { currentDate }</h3>
          <h3>days in month: { this.daysInMoth(date) }</h3>
          <div className="control">
            <button className="control-btn" onClick={() => this.moveMonth(false)}>last month</button>
            <button className="control-btn" onClick={() => this.moveMonth(true)}>next month</button>
          </div>
        </section>
        <h3 className="comment" style={{textAlign: "center", color: 'blue'}}>
          You can change everything that you can see here but this should
          give you a general idea of how to do thing. Look at the classNames
          in control inside of scss. I used different tools that I hope you 
          can find helpful to this project. 
        </h3>
      </div>
    );
  }
}

export default App;
