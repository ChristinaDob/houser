import React, { Component } from 'react';
import House from './../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    axios
      .get('/api/houses')
      .then(res => {
        console.log('axios call for get', res.data);
        this.setState({
          houses: res.data
        });
      })
      .catch(err => {
        console.log('problem with get', err);
      });
  }

  deleteHouse(id) {
    axios
      .delete(`/api/houses/${id}`)
      .then(res => {
        console.log(`delete the house`, res.data);
        this.setState({
          houses: res.data
        });
      })
      .catch(err => {
        console.log('something went wrong when deleting the house', err);
      });
  }

  render() {
    return (
      <div>
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
        {this.state.houses.map(house => {
          return (
            <House
              id={house.id}
              name={house.name}
              address={house.address}
              city={house.city}
              state={house.state}
              zip={house.zip}
            />
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
