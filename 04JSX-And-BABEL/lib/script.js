"use strict";

// const container = React.createElement('div', {} ,
//     [
//     React.createElement('section' , {key : 1} , 
//         React.createElement('p' , {} , "Hello This is me Starting of with React")
//     ),
//     React.createElement('section' , {key : 2} , 
//         React.createElement('img' , {src : 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' , style : {width : 200}
//         } , )
//     ),
//     React.createElement('section' , {key : 3} , 
//         React.createElement('form' , {} , 
//             [
//                 React.createElement('div', {key: 1} , [
//                     React.createElement('label' , {key : 1,className :'input-username',htmlFor : 'username'}, 'UserName'),
//                     React.createElement('input' , {key : 2,id : 'username'})

//                 ]),
//                 React.createElement('div', {key: 2} , [
//                     React.createElement('label' , {key : 1,className :'input-password',htmlFor : 'password'}, 'Password'),
//                     React.createElement('input' , {key : 2,id : 'password' , type : 'password'})
//                 ])

//             ]
//         )
//     )
//     ]
// )

//JSX 
var user = 'Anurag';
var h2 = /*#__PURE__*/React.createElement("h2", null, "Hello ", /*#__PURE__*/React.createElement("b", null, user));
console.log(h2);
var root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(h2);