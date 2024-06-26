//  const heading = React.createElement("h1",{id:"heading"},"Hello world")
//  console.log(heading)



const parent = React.createElement("div",{id:"parent"},
        [
            React.createElement("div",{id:"child1"},[
                React.createElement("h1",{},"i the h1 tag in child1"),React.createElement("h2",{},"i the h2 tag in child1")
        ]
    ),
    React.createElement("div",{id:"child2"},[
                React.createElement("h1",{},"i the h1 tag in child2"),React.createElement("h2",{},"i the h2 tag in child2")
    ]
)
]


)


const root = ReactDOM.createRoot(document.getElementById('root'))
        root.render(parent)
