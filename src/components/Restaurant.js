import React, {useState, useEffect} from 'react'


const Restaurant = (props) => {
    const guid = "908ed631-u";
    const apiKey = "defaultlive.a8a4822112770eebf869d899c7b008af4d9445274d6499baaf1daafbd3b2f139";
    const name = props.match.params.name
    // console.log("clicked name",name)
    
    const url = `https://api.aglty.io/${guid}/fetch/en-us/list/restaurants`
    

    const [restaurants, setRestaurants] = useState([])
    // console.log("set",restaurants)
    // const [restaurant, setRestaruant] = useState(null)

   

    const getRestaurant = async () => {
        const response = await fetch(url,{
            headers: {
                accept: "application/json",
                APIkey: apiKey,  
            }
            
    })
        const data = await response.json();
    //   console.log(data) 
        setRestaurants(data.items)
    
    }
    

    useEffect(() => {getRestaurant()},[])

    // const selectRestaurant = (r) => {
    //     setRestaruant(r)
    // }
    const selectedRestaurant = restaurants.filter(restaurant => restaurant.fields.name === name)[0]
    // console.log("selected",selectedRestaurant)
const loaded = () =>{
    // const r = restaurant ?? restaurants.items[0]
    // return <> 
    //         <Restaurant r={r} />
    //         {restaurant.items.map((item) =>{
    //     console.log('loaded ran',)
    //     return (
    //         <p onClick={()=>{selectRestaurant(item)}}>{item.fields.name}</p>
    //     )
    // })}
    //   
    
    return (
        <div>
            <h1>{selectedRestaurant.fields.name}</h1>
            <h1>{selectedRestaurant.fields.aboutChef}</h1>
            <h1>{selectedRestaurant.fields.description}</h1>
        </div>
    )
    
     
    }
const loading = () => {
    return <h1>...Un Momento...</h1>
}
    return selectedRestaurant ? loaded() : loading()
}

export default Restaurant