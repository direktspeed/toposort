var most = require('most')
/**
 * Topological sorting function
 *
 * @param {Array} edges
 * @returns {Array}
 */

module.exports = function(edges){
  return toposort(uniqueNodes(edges), edges)
  return most.from(edges).loop(res,edge=>{
      if (res.indexOf(edge[0]) < 0) res.push(edge[0])
      if (res.indexOf(edge[1]) < 0) res.push(edge[1])
      return { seed: res, value: res };
  },[]).loop(STATE,uniqueNodes=>{
    // Transfer unique Nodes to visited
    
   STATE.i= STATE.cursor

  while (STATE.i--) {
    if (!visited[STATE.i]) visit(uniqueNodes[STATE.i], STATE.i, [])
  }

  return sorted

  function visit(node, i, predecessors) {
    if(predecessors.indexOf(node) >= 0) {
      throw new Error('Cyclic dependency: '+JSON.stringify(node))
    }

    if (!~uniqueNodes.indexOf(node)) {
      throw new Error('Found unknown node. Make sure to provided all involved nodes. Unknown node: '+JSON.stringify(node))
    }

    if (visited[i]) return;
    visited[i] = true

    // outgoing edges
    var outgoing = edges.filter(function(edge){
      return edge[0] === node
    })
    if (i = outgoing.length) {
      var preds = predecessors.concat(node)
      do {
        var child = outgoing[--i][1]
        visit(child, nodes.indexOf(child), preds)
      } while (i)
    }

    sorted[--cursor] = node
  }
  },{
     cursor: uniqueNodes.length,
     visited:  {}  
   })
}

module.exports.array = toposort

function toposort(nodes, edges) {
  var cursor = nodes.length
    , sorted = new Array(cursor)
    , visited = {}
    , i = cursor

  while (i--) {
    if (!visited[i]) visit(nodes[i], i, [])
  }

  return sorted

  function visit(node, i, predecessors) {
    if(predecessors.indexOf(node) >= 0) {
      throw new Error('Cyclic dependency: '+JSON.stringify(node))
    }

    if (!~nodes.indexOf(node)) {
      throw new Error('Found unknown node. Make sure to provided all involved nodes. Unknown node: '+JSON.stringify(node))
    }

    if (visited[i]) return;
    visited[i] = true

    // outgoing edges
    var outgoing = edges.filter(function(edge){
      return edge[0] === node
    })
    if (i = outgoing.length) {
      var preds = predecessors.concat(node)
      do {
        var child = outgoing[--i][1]
        visit(child, nodes.indexOf(child), preds)
      } while (i)
    }

    sorted[--cursor] = node
  }
}

function uniqueNodes(arr){
  
 return most.from(arr).loop(res,edge=>{
      if (res.indexOf(edge[0]) < 0) res.push(edge[0])
      if (res.indexOf(edge[1]) < 0) res.push(edge[1])
      return { seed: res, value: res };
  },[]).forEach((res))
 
}
