import React,{Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import 'tachyons';
import Particles from 'react-particles-js';




const particleOptions = {
  Particles:{ 
                line_linked:{
                    shadow: {
                        enable: true,
                        color: '#3CA9D1',
                        blur: 5
                    }
                }
              }
            }

const initialState = {
      input: '',
      imageURL:'',
      box:{},
      route:'signin',
      isSignedIn: false,
      user:{
        id:'',
        name:'',
        email:'',
        entries: 0,
        joined:''
  }           
} 
class App extends Component {

  constructor(){
    super();
    this.state = initialState;
    
  }

  loadUser = (data) => {
    this.setState({user:{
      id: data.id,
      name:data.name,
      email:data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  
  calculateFaceLocation = (data) => {
    const clarifaiface = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol: clarifaiface.left_col * width,
      topRow: clarifaiface.top_row * height,
      rightCol: width - (clarifaiface.right_col * width),
      bottomRow: height - (clarifaiface.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  
  onButtonSubmit = () => {
    
    this.setState({imageURL:this.state.input});
    fetch('https://polar-gorge-45728.herokuapp.com/imageURL',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(response=>response.json())
    .then(response => {
      if(response){
        fetch('https://polar-gorge-45728.herokuapp.com/image',{
          method:'put',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(res=>res.json())
        .then(count => {
          this.setState(Object.assign(this.state.user,{entries:count}))
        })
        .catch(console.log)
    }
    this.displayFaceBox(this.calculateFaceLocation(response))
  })
  .catch(erro => console.log(erro));
}

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState(initialState)
    }else if(route === 'home'){
      this.setState({isSignedIn:true})
    }
     this.setState({route:route})
  }

  render() {
     const { isSignedIn,imageURL,route,box} = this.state;
  return (
    <div className="App">
      <Particles className='Particles'
                params={particleOptions} />
      
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      {route === 'home' 
      ?
      <div>
      <Logo/>
      <Rank rank={this.state.user.entries} name={this.state.user.name}/>
      <ImageLinkForm onInputChange={this.onInputChange}
                      onSubmit={this.onButtonSubmit}/>
      
      <FaceRecognition box={box} imageURL={imageURL}/>
      </div>
      :
      (route  === 'signin'
      ?
      <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
      :
      <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
      )
      }
      </div>
   );
  }
}

export default App;
