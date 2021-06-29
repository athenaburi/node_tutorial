//npm - global command, comes with node
// npm --version

//local dependency - use it only in this particular project
// npm i <packagename>

//global dependency - use it in any project
//npm install -g <packagename>
// sudo npm install -g <packagename> (mac)

//package.json - manifest file
//manual approach - tedious
//npm init
//npm init -y (everything set to default)

const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)


