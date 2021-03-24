// var onloadCallback = function() {
//   grecaptcha.render('html_element', {
//     'sitekey' : 'your_site_key',
//     'callback' : correctCaptcha
//   });
// };

var correctCaptcha = function(response) {
  alert(response);
};

