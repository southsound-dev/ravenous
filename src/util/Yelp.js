const apiKey = 'Mh86mLdPvDcr7uB8InEE0bx2H9-CeNvw56TxdtFJ2F3mZjzRNw1Y1fJC15DjXeHMjZJncso5gHsQZGn4dCY_UXwuF0Mr-w8rk80milNEHU8mQ9gx1aM7Gvsa_ojTXnYx';

const Yelp  = {
    searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
        headers: { 
            Authorization: `Bearer ${apiKey}`
        }

    }).then((response) => {
        return response.json();
    } ).then((jsonResponse) => {
        if(jsonResponse.businesses) {
            return jsonResponse.businesses.map(((business) => {
                console.log(business);
                return {
                id: business.id,
                imageSrc: business.imageSrc,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipcode: business.location.zipcode,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.reviewCount,
            }
        }));
    }
})
}
};


export default Yelp;

