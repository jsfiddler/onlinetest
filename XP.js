Javascript:
Document.body.innerHTML="" ;

function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));

  bytes.forEach((b) => binary += String.fromCharCode(b));

  return window.btoa(binary);
};


var url = 'https://worldwide.espacenet.com/3.2/rest-services/images/documents/XP/055783968/formats/png/pages/1?EPO-Trace-Id=sb30vo-6tqx98' ;
var headers = new Headers({'X-Mashape-Key': 'API_KEY'});
var options = {
  method: 'GET',
  headers: headers,
  mode: 'cors',
  cache: 'default'
};
var request = new Request(url);

fetch(request, options).then((response) => {
  response.arrayBuffer().then((buffer) => {
    var base64Flag = 'data:image/jpeg;base64,';
    var imageStr = arrayBufferToBase64(buffer);
    img=document.createElement("img") ;
    document.body.appendChild(img);
    img.setAttribute("src", base64Flag + imageStr);
  });
});


