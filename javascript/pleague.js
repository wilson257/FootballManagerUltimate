let ul = document.getElementById("parent")

// btnLogin.onclick = function() {
//     document.getElementById("homeImage").src = "../resources/cr7.png";
// }

fetch(
  `pleague.json`
)
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
       

    obj.clubs.forEach(element => {
        var li = document.createElement(
            'li'
        );
        li.innerHTML = element.name;
        
        ul.append(li)
    });


  });
