import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business,business,business,business,business,business
]

class App extends React.Component {
render() {
  return (
    <div className="App">
  <h1>Top Restaurants Around you</h1>
  <SearchBar searchYelp={this.searchYelp} />
  <BusinessList businesses={businesses}/>
</div>
    )
} 

searchYelp(term,location,best_match) {
  console.log(`You are searching for ${term}, ${location} and ${best_match}`)
}

}



export default App;
