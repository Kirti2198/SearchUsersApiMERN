import React from 'react';
import './search.css';

class Search extends React.Component {
  state = {
    query: "",
    // data: [],
    filteredData: []
  };

  handleInputChange = event => {
    const query = event.target.value;
    console.log(query)
    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });
       
      console.log("FILTERDADATA",filteredData)
      return {
        query,
        filteredData
      };
    });
  };

  getData = () => {
    fetch('/users/')
      .then(response => response.json())
      .then(data => {
        const { query } = this.state;
        console.log("DATA",data)
        const filteredData = data.filter(element => {
          return element.name.toLowerCase().includes(query.toLowerCase());
        });

        this.setState({
          data,
          filteredData
        });
      });
  };

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <div className="searchForm">
        <form>
          <input
            className="SearchInput"
            placeholder="Search for Users by Name..."
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
        <div>{this.state.filteredData.map((i,key)=> 
        <div className="UserCard">
          <p>{i.id}</p>
          <p>{i.name}</p>
          <p>{i.address}</p>
        </div>   
        )}
        </div>
      </div>
    );
  }
}

export default Search;