(function() {
  'use strict';

  angular
    .module('x1group')
    .controller('LandingCtrl', LandingCtrl);
 
 LandingCtrl.$inject = [];
 function LandingCtrl() {
 	var vm = this;
 	vm.myInterval = 50000;
 	vm.slides = [
 		{
 			url: 'http://netdna.webdesignerdepot.com/uploads/2013/07/featured10@wdd2x.jpg',
 			title: 'Bootstrap',
 			parag: '<p>Bootstrap is a mobile-first front-end framework for Web development. It is the most-popular project on GitHub by far. Originally created by Twitter as a framework for the Twitter GUI, Bootstrap was first released two years ago. Version 3 of Bootstrap was launched in August, featuring a new design with an optional theme, a mobile-first perspective, a new customizer, and more responsive models.</p>'
 		},
 		{
 			url: 'https://node-arm.herokuapp.com/images/nodejs.png',
 			title: 'Node.js',
 			parag: '<p>Node.js is a server-side JavaScript platform for building network applications. It features an event-driven, nonblocking I/O model, and it\'s long been popular with the GitHub set.</p><p>"It\'s always been meant to handle a lot of connections and move a lot of data," says Jason Hoffman, CTO at Joyent, which has overseen development of Node.js.</p><p>Hoffman cites GitHub\'s usefulness as a social and collaboration platform as well as providing a distributed, centralized way to manage source code. Hoffman also notes hosting Node.js on GitHub gives people the power to fork it -- there have been many forks but not one that has emerged as a separate project.'
 		},
 		{
 			url: 'http://forwww.com/wp-content/uploads/2015/04/yeti-jquery.png',
 			title: 'jQuery',
 			parag: '<p>Query is a popular JavaScript library, enabling activities such as HTML document traversal, event handling, and animation. Source code, documentation, and meeting notes on the project are stored on GitHub.</p><p>"We make extensive use of [GitHub] for just about everything because we find it’s a really good way to organize the project," says David Methvin, JQuery core lead and president of the JQuery Foundation. Although there are fewer than 100 regular contributors, Methvin says thousands have chipped in on the project, which many contend to be the most popular JavaScript framework. "You can pretty much count on just about any Web site using JQuery," Methvin says.</p><p>The project features the original core library, as well as UI and mobile components.</p>'
 		},
 		{
 			url: 'https://railskey.files.wordpress.com/2013/11/rubyonrails.jpg?w=646',
 			title: 'Ruby on Rails',
 			parag: '<p>Ruby on Rails needs no introduction. The popular Web framework based on Ruby, and often referred to as Rails, has been downloaded many millions of times, says Rails founder David Heinemeier Hansson, who sees several advantages to hosting Rails on GitHub.</p><p>"GitHub is simply the best way to organize a big open source project," he says. "It provides a wonderful Web UI to Git, it has pull requests to discuss changes and a simple ticketing system to deal with bug reports. We also use comments on commits a lot to discuss the implementation."</p><p>Hansson, a partner at Web application builder 37signals, sees little downside to residing on GitHub. "Like any comment forum, you sometimes get your trolls. But it\'s less prevalent than most other places."</p>'
 		},
 		{
 			url: 'http://imperio.djdesignerlab.com/wp-content/uploads/2014/05/Fontawesome-Icons.jpg',
 			title: 'Font Awesome',
 			parag: '<p>Font Awesome is a font designed for the Bootstrap framework. Leveraging CSS, Font Awesome features scalable vector icons that can be customized for size, color, and drop shadow. Version 3.2, the latest release, features 58 new icons, as well as new styles. Font Awesone is free for commercial use and desktop-friendly, Font Awesome advocates say</p>'
 		}
 	]
  } 
})();
