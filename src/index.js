import React, {Component} from 'react'
import Tabletop from 'tabletop';
import './App.css'

 class NPSWidget extends Component {
  constructor() {
    super();
    this.state = {
      npsScore: undefined,
      totalReviews: undefined
    }
  }
  componentDidMount() {
    const component = this;
    const { nps, tabletop, totalReviews } = this.props;
    if(nps && totalReviews) {
      this.setState({
        npsScore: nps,
        totalReviews: totalReviews,
      })
    } else if(tabletop) {
    const webPage = tabletop;
    Tabletop.init({
    key: webPage,
    callback: function(data, tabletop) {
        component.setState({ npsScore: data[0]['NPS Score'], totalReviews: data[0]['Total votes']});
     },
     simpleSheet: true })
   } else {
     console.log('Please provide your NPS Score')
   }
}
  render() {
    const { npsScore, totalReviews } = this.state;
    const { minimumDisplay, logo } = this.props;
    const npsPercentage = ((Number(npsScore) + 100) / 200) * 100;
    const difference = Number(100 - npsPercentage);
    return (
      <div className="NPS-Widget-Container">
      {!minimumDisplay || npsScore >= minimumDisplay ?
        npsScore ? (
          <div className="NPS-Widget">
            <div className="NPS-Widget-Bar-Container">
              <div className="NPS-Widget-Bar" style={{width: `${npsPercentage}%`, backgroundImage: ''}}></div>
            </div>
            <div className="NPS-Widget-Details-Container">
              <div className="NPS-Widget-Score-Container">
                <h1 className="NPS-Widget-Score">{npsScore}</h1></div>
              <div className="NPS-Widget-Text-Container">
                <h2>Net Promoter Score™</h2>
                <p>Based on {totalReviews} reviews</p>
              </div>
            </div>
            {logo  && <img src={logo}></img>}
          </div>) : <div className="NPS-Widget-Loading-Container">
          <div class="lds-facebook"><div></div><div></div><div></div></div>
        </div> : null}
      </div>
    )
  }
}

export default NPSWidget
