import React,{ Component } from 'react';

class App extends Component {
	state = {
		renderedResponse: ''
	}

  getResponse = async() => {
    const response = await fetch('/api/hello');
    const body = await response.json();
	
    if (response.status !== 200) throw Error(body.message);
	
    return body;
  }

  componentDidMount() {
      this.getResponse().then(res => {
          const someData = res;
		  console.info(someData)
          this.setState({renderedResponse: someData});
		  
      });
  }

  render() {

      const { renderedResponse } = this.state;

      return (
          <div>
			  Learn React
			  <div>
				  {renderedResponse.express}
			  </div>
          </div>
      );
  }

}

export default App;
