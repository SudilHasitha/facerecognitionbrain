(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{289:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),o=a(39),s=a.n(o),r=(a(80),a(14)),l=a(15),c=a(17),m=a(16),p=a(18),u=(a(41),function(e){var t=e.onRouteChange;return e.isSignedIn?i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),i.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))}),h=a(72),d=a.n(h),g=(a(81),a(73)),b=a.n(g),f=function(){return i.a.createElement("div",null,i.a.createElement(d.a,{className:"Tilt br2 shadow-2",options:{max:25},style:{height:150,width:150}},i.a.createElement("div",{className:"Tilt-inner pa3"}," ",i.a.createElement("img",{style:{paddingTop:"20px"},alt:"logo",src:b.a})," ")))},w=function(e){var t=e.onInputChange,a=e.onSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"f3"},"Face Detection API demo"),i.a.createElement("div",{style:{width:700},className:"center"},i.a.createElement("div",{className:"pa4 br3 shadow-5"},i.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),i.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib Black bg-light-green",onClick:a}," Detect "))))},E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignin=function(){fetch("https://polar-gorge-45728.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json",Accepts:"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then(function(e){return e.json()}).then(function(e){e.id?(a.props.loadUser(e),a.props.onRouteChange("home")):"error logging in"===e&&a.props.onRouteChange("signin")})},a.state={signInEmail:"",signInPassword:""},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return i.a.createElement("main",{className:"pa4 black-80 br3 ba w-100 w-50-m w-25-l mw5 center"},i.a.createElement("div",{className:"measure center"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitSignin,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer"},"Register"))))}}]),t}(i.a.Component),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onEmailEntry=function(e){a.setState({email:e.target.value})},a.onPasswordEntry=function(e){a.setState({password:e.target.value})},a.onNameEntry=function(e){a.setState({name:e.target.value})},a.onSubmitRegister=function(){fetch("https://polar-gorge-45728.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json",Accepts:"application/json"},body:JSON.stringify({email:a.state.email,name:a.state.name,password:a.state.password})}).then(function(e){return e.json()}).then(function(e){e.id?(a.props.loadUser(e),a.props.onRouteChange("home")):"error logging in"===e&&a.props.onRouteChange("signin")})},a.state={email:"",password:"",name:""},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("main",{className:"pa4 black-80 br3 ba w-100 w-50-m w-25-l mw5 center"},i.a.createElement("div",{className:"measure center"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameEntry})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailEntry})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordEntry}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"}))))}}]),t}(i.a.Component),y=function(e){var t=e.name,a=e.rank;return i.a.createElement("div",null,i.a.createElement("div",{className:"white f3"},"".concat(t,", your current rank is...")),i.a.createElement("div",{className:"white f3"},"".concat(a)))},N=(a(82),function(e){var t=e.imageURL,a=e.box;return i.a.createElement("main",{className:"centerImageBox"},i.a.createElement("div",{className:"centerImageBox ma"},i.a.createElement("div",{className:"absolute mt2"},i.a.createElement("img",{id:"inputimage",src:t,alt:"face",width:"500px",height:"auto"}),i.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}}))))}),C=(a(83),a(74)),A=a.n(C),k={Particles:{line_linked:{shadow:{enable:!0,color:"#3CA9D1",blur:5}}}},S={input:"",imageURL:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},j=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),i=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*i,rightCol:n-t.right_col*n,bottomRow:i-t.bottom_row*i}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageURL:e.state.input}),fetch("https://polar-gorge-45728.herokuapp.com/imageURL",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then(function(e){return e.json()}).then(function(t){t&&fetch("https://polar-gorge-45728.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then(function(e){return e.json()}).then(function(t){e.setState(Object.assign(e.state.user,{entries:t}))}).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))}).catch(function(e){return console.log(e)})},e.onRouteChange=function(t){"signout"===t?e.setState(S):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=S,e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageURL,n=e.route,o=e.box;return i.a.createElement("div",{className:"App"},i.a.createElement(A.a,{className:"Particles",params:k}),i.a.createElement(u,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===n?i.a.createElement("div",null,i.a.createElement(f,null),i.a.createElement(y,{rank:this.state.user.entries,name:this.state.user.name}),i.a.createElement(w,{onInputChange:this.onInputChange,onSubmit:this.onButtonSubmit}),i.a.createElement(N,{box:o,imageURL:a})):"signin"===n?i.a.createElement(E,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):i.a.createElement(v,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})},41:function(e,t,a){},73:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAGrElEQVR4nO2af4hcVxXHP+fdNxtqIgraQnag5g+hKZhNY1KrZHVjsZpqtlLoSjHNJH91SxvQbonZTZvsbrLJbppm/5AaS0E005WGbImQSt1NtD/SjTVJYQX/iKKoFLMBC2Jlgzi7c49/zMzuZPP2zbvvvdlGnC8MD2bO+d5zz5x7zrn3PmiggQYaaOD/F5IW0e2Pa7sKXQJ3A8tDRD9AuWTh6N+OyRjAp3bq/ao8BWwAPhaiew24CAy/9wP5eRp2p+KAVU/oIVF6XPVU6fUET6E3xrAH/3JMnomhdx0SO+DTndouwmmgAOz1fEb+8LxMLSZ/x05tLhbZJsp+oKn8dVzd9j++kE4kxMbqTn1jdafqnZ2620nvUe1e3amaUPdXbtbeCC8pgVE2GAWUvIuewHGjkFD3bhe9ICR3gGWFsXD5Rbnqonf5RblqLCTU/aibtTfCT0pg9H9PtxqJHeAnMOTD0r2OJ4rQ53doO9BFUI23pcc9O/TZW1ax580+mY06uLFRJeex/lHN+AUOip2zbaErriFcFBh+58e1K0TNHLBxux4yymmjbDLK8kriWvjxlV0zf+aQy2TmkqADlv2HQV/ZtZgdRlluLF/2LK+2bteBWnyhEdC2TdvV0gMUBPbOzjBy/sSNdXpTTlut8jawA/he1MnEiQDfsh0AZeO5Efn1wt83PqzNxmcbwn7g6dac/mYiv3gkhEaAp3QZBU/Z99ZL8mzQ5AHezMtE2fu3ukwmTgQY5ZNGIWjyAOdPyNS5ETnsW3qNQsbyZBhfqAN8ZYOvsIzaddpX98RUT52McNyP0CuEOqBS48dHatfpSk13QT11xkdKvYJfo1cIzQEu4Tn2sjjtK7Z0aLaSvx94WJtPL7K8kowTxf5aERArUUWBJ+Qq/FIkV48xotifWgRERUeHZmeUnCh9VV/3P9ihFA35qJEQBVHsD3VAWt1Wx0NVzYpCpvysQhMw6M8y2PHQ/A+jr7gtq4WIYv+SLIEKT/nzd8/ymlja5paApc0ovzCW96tl0xo3DEuyBE6cCv4ntz5YGuDEz+QccC6d0eaReAnUIwfcbPzhDqhTBbiZ+JckCd7M/OGtsOWasbDzAW1Oy6hq1LPPeGyLZsv802Fy4ZshyyWjYGfr1KjE2AxF5rbkyvwXw+TCl4BwVJVNQP93NivFIvnnzy5to+KKJ7dotmjJUW60LDwXJl+z0Xjqq3pAhZoXEMPj7k1L19dKDVIS3Ro4MDwu+8IEap4IHT0je0X5ulHOGqWw2ElMHKShG/ApGOVMpsjmWpMHx5uh7vt0ClipwsbDZ4IPJBz5FGDobLKWF2D3V7RVhLeBq0NnJXLSdroXMJaVxkIaky/zpVYFDv9SJsp8K130nI7F005aNwOfUwT4pROWVDBwr2YrfH33pdNnxLHPbQmkWLelOFenaZpJp8+IY9+SL4GBezWbmSGn1QciSv/QlxQpkt99Pn6fEcc+NwfEDP8jrVU1u1B+KoqyD8ED+oBBhMEjrfOiuybcqkOsewanARLU7Cr8U+CSWI5+9x0ZBxhu1QuidGnp6u3j8UZZggiImwC7zof/k10TMgaMxWOfRxz7PtQymDbqnwMiDvDCPaU1/9iF5B2eC1/d+wCjTBsLP1oXXrfT3udH4fvhF0r7f8/yLxdu11b4klHAC6/bae/zo/Atmy31FT6868Lt6oBhv3Su359fr90vB0TCS5/VL5YvMK+4cIeOq0z5Cvn12rrwt+NrNZtfrz2+pc8v3QYPu3A7r9GRu3RAhKcjEA9+e1L2hMn8dF1pbW+dDF/bI+t0UKA7gnkDWydlbwS5OTi/JfbIb+UZY2n34XWjTAfsx694yqBfuO7q6wacXKvZik5QJFWjqUCvsQwZZSpgvGkfXveULa6TTw2ja/SN0RbV0TUa+e2Q0RbtGW1RHW1RPblWo/y7lbF2l/VejWft9Uj8lhiApzwn0AYcPNWiOmv4ybcm5f0g2ZNrNZspklPor7ofPHBqjWJ88t+cDN4LnFynt/pFdqAMlNvo76dhe2pvi5/+jO4BDrqMfO1+EAsfcewBRehp/50MuWktakZ6eG21tqnHPoXPCawIFLoF7O0wuwnsHaWvvN+D/xZ47wH/DuZWmAYuiLL/G5cltXvEVB0QhrE7Sxm/6Ui4XGFX6bn5cjpdZC2kkgOiwChTQPOKP0FmVbDMzF/hg1JeSK2HqIUlc4BvySt0Tx8LlzOlh9Pb40mwZA64LUPvP2ZAlRwQWPcVroiS/8Sy8B6igQYaaKCBBtLBfwGc6tf0SbEkygAAAABJRU5ErkJggg=="},75:function(e,t,a){e.exports=a(289)},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.dbb27382.chunk.js.map