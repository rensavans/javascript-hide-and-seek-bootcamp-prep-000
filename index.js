function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let rank = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n
  }
}

function deepestChild() {
  let grandeNode = document.getElementById('grand-node')
  let deepestChild = grandeNode.children[0]
  while (deepestChild) {
    grandeNode = deepestChild
    deepestChild = grandeNode.children[0]
  }
  return grandeNode
}