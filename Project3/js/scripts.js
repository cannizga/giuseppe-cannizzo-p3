var messages = [];

var prevMessages = ["Hows It Going", "Anyone There?", "Hey! Are You Ignoring Me!"];

function savedMessages() {
  for (i = 0; i < 3; i++) {
    document.getElementById('UserMessages').innerHTML += '<font color = salmon>' + "-" + "Connor" + ": " + prevMessages[i].toString() + " " + "<br>";
  }
}
savedMessages();

function Message(name1, name2, m2, m, userInput) {
  this.name1 = name1
  this.name2 = name2;
  this.userInput = userInput;
  this.m2 = m2;
  this.m = m;
}

function init(nameSwitch) {
  var user, type;
  var messageType = {
    out: 'out-message',
    in: 'in-message'
  };

  m2 = document.getElementById("message-container");
  m = m2.elements["name"].value
  name1 = "Alessandro";
  name2 = "Connor";

  switch (nameSwitch) {

    case "send-button":
      userInput = name1 + ": " + m;
      type = messageType.out;
      document.getElementById("message-container").reset();
      break;

    case "reply-button":
      userInput = name2 + ": " + m;
      type = messageType.in;
      document.getElementById("message-container").reset();
      break;

    default:
      userInput = "No Message";
      break;
  }

  if (type === 'out-message') {
    messages.push('<font color = steelblue>' + '-' + userInput + "<br>");
    document.getElementById('displayMessage').innerHTML = messages.join('');
  } else if (type === 'in-message') {
    messages.push('<font color = salmon>' + '-' + userInput + "<br>");
    document.getElementById('displayMessage').innerHTML = messages.join('');
  }

}

var information = {
  appname: ['Atom Preview HTML', 'Atom Beautify', 'Ask Stack'],
  downloads: ["810,957", "6,032,186", "87,591"],
  stars: [673, "5,054", 293],
  description: ["A live preview tool for Atom Editor.", "Better organizes your code and makes it look more beautiful.",
  "Quickly get answers and code samples from Stack Overflow directly in Atom editor."],
  author: ["harmsk", "Glavin001", "Chris911"]
};

//*Dynamic Content *\\
var data = [{
    id: 1,
    title: information.appname[0],
    body: 'Number Of Downloads: ' + information.downloads[0],
    description: 'Description: ' + information.description[0],
    stars: 'Stars: ' + information.stars[0],
    author: 'Developer: ' + information.author[0]
  },
  {
    id: 2,
    title: information.appname[1],
    body: 'Number Of Downloads: ' + information.downloads[1],
    description: 'Description: ' + information.description[1],
    stars: 'Stars: ' + information.stars[1],
    author: 'Developer: ' + information.author[1]
  },
  {
    id: 3,
    title: information.appname[2],
    body: 'Number Of Downloads: ' + information.downloads[2],
    description: 'Description: ' + information.description[2],
    stars: 'Stars: ' + information.stars[2],
    author: 'Developer: ' + information.author[2]
  }
]

var $nav = $('#nav-container')
var $intro = $('#intro')
var $posts = $('#post-container')

function initPosts() {
  for (var i = 0; i < data.length; i++) {

    var postId = 'post-' + data[i].id,
      $post = $('<section class="post"></section'),
      $title = $('<h2 class="title"></h2>'),
      $description = $('<blockquote></blockquote>'),
      $stars = $('<blockquote></blockquote>'),
      $body = $('<p class="quote"></p>'),
      $body = $('<blockquote></blockquote>'),
      $author = $('<span class="author"></span>'),
      $navItem = $('<li></li>')

    $title.text(data[i].title)
    $body.text(data[i].body)
    $author.text(data[i].author)
    $description.text(data[i].description)
    $stars.text(data[i].stars)

    $navItem.attr('id', data[i].id)
    $navItem.text(data[i].title)

    $post.attr('id', postId)
    $post.append($title)
    $post.append($body)
    $post.append($description)
    $post.append($stars)
    $post.append($author)

    $posts.append($post)
    $nav.append($navItem)

    $navItem.on('click', function() {
      var id = $(this).attr('id')
      $posts.children().hide()
      $posts.find('#post-' + id).fadeIn()

      if($(this).attr('id') == 1)
      {
        document.getElementById("preview").style.width = "550";
        document.getElementById("preview").style.height = "250";
        document.getElementById('preview').style.display = 'block';
        document.getElementById("beautify").style.display='none';
        document.getElementById("askstack").style.display='none';
      }
      else if($(this).attr('id') == 2)
      {
        document.getElementById("beautify").style.width = "550";
        document.getElementById("beautify").style.height = "250";
        document.getElementById('beautify').style.display = 'block';
        document.getElementById("preview").style.display='none';
        document.getElementById("askstack").style.display='none';
      }
      else if($(this).attr('id') == 3)
      {
        document.getElementById("askstack").style.width = "550";
        document.getElementById("askstack").style.height = "250";
        document.getElementById('askstack').style.display = 'block';
        document.getElementById("preview").style.display='none';
        document.getElementById("beautify").style.display='none';
      }
    })

    $posts.children('.post').hide()
    $intro.fadeIn(1000)
  }
}

initPosts()

/*Display GIF*/
function outputname() {
  var name, x, y;
  x = document.getElementById("form1");
  y = x.elements["name"].value;
  document.getElementById("displayName").innerHTML = "Your Answer: " + y + "<br>";
}

function picture() {
  document.getElementById("coolgif").style.width = "320";
  document.getElementById("coolgif").style.height = "320";
  document.getElementById('coolgif').style.display = 'block';

  document.getElementById("coolgif2").style.width = "320";
  document.getElementById("coolgif2").style.height = "320";
  document.getElementById('coolgif2').style.display = 'block';

  document.getElementById("coolgif3").style.width = "320";
  document.getElementById("coolgif3").style.height = "320";
  document.getElementById('coolgif3').style.display = 'block';
}
