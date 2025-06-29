//type , props , children
// const h2 = React.createElement(
//   "h2",
//   { className: "Sub-Heading" },
//   "Hello React"
// );

// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(h2); //This is how react element is rendered on DOM
//Behind the scene,render creating the React element via DOM methods (Check by debugger)

//Rendering React element using React object
// root.render({
//   $$typeof: Symbol.for('react.element'),
//   type: "h2",
//   key: null,
//   ref: null,
//   props: {
//     className: "Sub-Heading",
//     children: [{
//       $$typeof: Symbol.for('react.element'),
//       type: "span",
//       key: null,
//       ref: null,
//       props: {
//         className: "Sub-Heading",
//         children: "Hello!!",
//       },
//     }],
//   },
// });

//DOM Element
// const h3 = document.createElement('h3');
// h3.innerText = "Hello JS"

// document.querySelector('#root').append(h3)
// console.dir(h3)

//Working with React.createElement()
const container = React.createElement('div', {} ,
    [
    React.createElement('section' , {key : 1} , 
        React.createElement('p' , {} , "Hello This is me Starting of with React")
    ),
    React.createElement('section' , {key : 2} , 
        React.createElement('img' , {src : 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' , style : {width : 200}
        } , )
    ),
    React.createElement('section' , {key : 3} , 
        React.createElement('form' , {} , 
            [
                React.createElement('div', {key: 1} , [
                    React.createElement('label' , {key : 1,className :'input-username',htmlFor : 'username'}, 'UserName'),
                    React.createElement('input' , {key : 2,id : 'username'})

                ]),
                React.createElement('div', {key: 2} , [
                    React.createElement('label' , {key : 1,className :'input-password',htmlFor : 'password'}, 'Password'),
                    React.createElement('input' , {key : 2,id : 'password' , type : 'password'})
                ])
                
            ]
        )
    )
    ]
)

// It takes a DOM node (in this case, an element with the id root) and prepares it as the entry point for our React application.
const root = ReactDOM.createRoot(document.querySelector("#root")); //DOM node is simply a JavaScript object representation of an HTML element, and React uses it as the target where it injects and manages its rendered content.
root.render(container); //renders the React element or component (container) into the DOM.


//