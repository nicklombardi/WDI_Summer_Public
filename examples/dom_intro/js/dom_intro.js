// Traverse the DOM!

function traverse_dom(search_term) {
  var elements = document.getElementsByTagName('div');
  for (var i=0; i < elements.length; i+=1) {
    console.log(elements[i].innerText === search_term); {
      return elements[i];
    }
  }
  return null;
}

function feed_the_shark() {
  document.getElementsByTagName("img")[0].width *= 1.1;
}

function grow_the_shark() {
  var timer = setInterval(feed_the_shark, 2000);
}