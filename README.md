# Graph Visualiztion (Semantic Health)

This project is hosted at https://semantic-health-assignment.vercel.app/ via vercel.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `Architecture`

create-react-app for bootstrapping app

recoil js for state managment

react-lineto package for drawing line between to points

### `Graph Implementation`

Graph object looks like following.
 {
  undirected: true,
  nodes: [
    { key: "node-1", value: "node-1", xAxis: "0", yAxis: "0" },
    { key: "node-2", value: "node-2", xAxis: "0", yAxis: "0" },
    { key: "node-3", value: "node-3", xAxis: "0", yAxis: "0" },
    { key: "node-4", value: "node-4", xAxis: "0", yAxis: "0" },
    { key: "node-5", value: "node-5", xAxis: "0", yAxis: "0" },
  ],
  edges: [
    ["node-1", "node-2"],
    ["node-1", "node-3"],
    ["node-2", "node-4"],
    ["node-3", "node-4"],
    ["node-4", "node-5"],
  ],
}

## Nodes 
Nodes are points when user clicks on screen, node-[index of node in array + 1] is node identifier.
xAxis position of node on xAxis and yAxis is it's postion on yAxis. They will be treated left and top in css styling.


## Edges / Vertices 
These are lines between two nodes. Edges will be drwan betwewn nodes using key as class names in JSX(using div). When given two classes LineTo packages draws line between these two divs. 

## Neighbors 
Neighbors are all nodes pointed from a single node. eg, if there are two egdes from node-1 (to node-2, node-2 respectively), then node-1 will have two neighbors that are node-2 and node-3. All edges pointed from a particular node are neighbors of that particular node.

## PageRank 
Initial page rank would be **1/Number of Nodes in grpah**.
If a graph have three nodes (node-1, node-2 , node-3), initially all will have 1/3 = 0.333 pagerank.
If any node have neighbors then its page rank would be divided among its neighbors. This node will have zero page rank. And **NodeRank/Neighbors** will be added to each neighbors node.

If node-1 has two neighbors (node-2, node-3).
Page rank of node-1 will be divided by 2(number of neighbors) . 0.333/2 = 0.166
We will assign 0 to node-1, so page rank of node-1 will be zero.
We will add 0.166 to page rank of node-2 and node-3 separately. .333+0.166 = .49

**page rank of node-2 and node-3 will be .49 or .5**



