var getPosts = $.ajax( "https://jsonplaceholder.typicode.com/posts" );
var handlePost = function( post ){
  var title = "<h3 class ='post-headline'>" + post.title + "</h3>";
  var content = "<p class ='post-content'>" + post.body + "</p>";
  var blurb = "<div class='post'>" + title + content + "</div>";

  $( ".content" ).append( blurb );
}

getPosts.then(
  ( posts ) => posts.forEach( handlePost )
);
