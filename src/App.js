import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Test />
      <QuoteBox />
    </div>
  );
}

class Test extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: Date()
    }
    this.updateTime = this.updateTime.bind(this)
  }
  updateTime(){
    this.setState({
      text: Date()
    })
  }
  componentDidMount(){
    const timerID = setInterval(this.updateTime, 100)
  }

  render(){
    return (
      <div>
        <h1 id="time">{this.state.text}</h1>
      </div>
    )
  }
}


class QuoteBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quotes : [
        ['Socialism never took root in America because the poor see themselves not as an exploited proletariat but as temporarily embarrassed millionaires', "Steinbck"],
        ["どう生きても今日も明日にはすぎた昨日", "鬼"],
        ["We live in a country where if you want to go bomb somebody, there’s remarkably little discussion about how much it might cost. But when you have a discussion about whether or not we can assist people who are suffering, then suddenly we become very cost-conscious.", "Prof. Andrew Bacevich"],
        ["A bore is someone who deprives you of solitude without providing you with company.", "Oscar Wilde"],
        ["プロはいかなる時でも、言い訳をしない", "千代の富士"],
        ["是非に及ばず", "織田信長"],
        ["Some day you will be old enough to start reading fairy tales again.", "C.S. Lewis"],
        [`今隣には誰もいないや寂しくなんかない幸せだ痛みも消えるはず時が経てば`, "ANARCHY"],
        ["They kill you for the truth faster than the lies, man", "Ka"]
      ],
      selected : 0,
    }
    this.pickQuote = this.pickQuote.bind(this);
  }
  pickQuote(){
    this.setState({
      selected: Math.floor(Math.random() * this.state.quotes.length )
    })
  }
  componentDidMount(){
    this.pickQuote()
  }
  render(){
    let quote = this.state.quotes[this.state.selected]
    return(
      <div id="quote-box"> 
        <p id="text">“{quote[0]}“</p>
        <p id="author">- {quote[1]} </p>
        
        <div id="quote-box-footer"> 
          <button id="new-quote" onClick={this.pickQuote}>NEW QUOTE</button>
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote[0]}%0a-${quote[1]}`} target="_blank">TWEET QUOTE </a>
        </div>
        
      </div>
    )
  }
}
export default App;
