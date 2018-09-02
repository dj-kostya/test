import React, {Component} from 'react';
import logo from '../logo.svg';
import Axios from 'axios';
class News extends Component 
{
    state=
    {
        result: null,
        id:1,
        persons:null
    }
    async componentDidMount()
    {
       let access_taken="442dc7919c3e91243f971811c8e92895d700ef11a1f5b04e29dfa96b90f35297a05127b5bbe6115f04fd3";
       const id=1;
       const proxy = "https://cors-anywhere.herokuapp.com/"; 
        Axios.get(proxy+'https://api.vk.com/method/users.get?user_ids='+id+'&access_token='+access_taken+'&v=5.84',{
        headers:
        {
            'Access-Control-Allow-Origin':'*'
        } 
       
       })
       .then(function(res)
    {
        const persons = res.data;
        console.log(persons);
        this.setState({ persons });
        
    }).catch(function (e)
    {
      console.log(e.code);  
    });
    }
    render()
   {
       console.log(this.state.persons)
    const o={     
        "response": {
        "first_name": "Костя",
        "last_name": "Носорев",
        "screen_name": "kostyn_kem",
        "sex": 2,
        "relation": 6,
        "bdate": "10.1.2001",
        "bdate_visibility": 1,
        "home_town": "114",
        "country": {
        "id": 1,
        "title": "Россия"
        },
        "city": {
        "id": 64,
        "title": "Кемерово"
        },
        "status": "",
        "phone": "+7 *** *** ** 31"
        }           
    };
       return (
           <div>
               <img src={logo} className="App-logo" alt="logo" />
               <h1 >Привет, {o.response.first_name} {o.response.last_name} </h1>
           </div>
       )
   }
}
export default News