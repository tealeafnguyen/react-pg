(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:"1",image:"https://images-na.ssl-images-amazon.com/images/I/41QlFvElJ3L._SX425_.jpg"},{id:"2",image:"https://s.yimg.com/ny/api/res/1.2/MMILiLp6TUOqRGnJWwzfTA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://l.yimg.com/cd/resizer/2.0/original/h-zI26nKTDBpSD6ahPmqFoFhzM8"},{id:"3",image:"http://thezilla.com/wp-content/uploads/2015/07/orange.jpg"},{id:"4",image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/lemon-uses-0-1494115921.jpg?resize=480:*"},{id:"5",image:"https://cdn.shopify.com/s/files/1/1566/5231/products/MMP_077_RAF_Dark_Green_large.jpg?v=1488071545"},{id:"6",image:"https://img.promgirl.com/_img/SWATCHES/sapphire-699330.jpg"},{id:"7",image:"https://images-na.ssl-images-amazon.com/images/I/31j04SBhvbL._SX463_.jpg"},{id:"8",image:"https://www.solidbackgrounds.com/images/2560x1600/2560x1600-salmon-solid-color-background.jpg"},{id:"9",image:"https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Donkey_%28Shrek%29.png/170px-Donkey_%28Shrek%29.png"}]},,,,,,,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(3),s=a.n(c),o=(a(15),a(4)),r=a(5),l=a(7),m=a(6),u=a(8),p=(a(17),function(e){return i.a.createElement("span",{onClick:function(){return e.clicked(e.id)},className:"click"},i.a.createElement("div",{className:"card"},i.a.createElement("img",{alt:e.id,src:e.image})))}),d=(a(19),a(21),function(e){return i.a.createElement("center",null,i.a.createElement("div",{className:"headerBar"},i.a.createElement("p",null,"Score: ",e.score),i.a.createElement("button",{onClick:function(){return e.reset()}},"Reset")))}),g=a(1),h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={clicked:[],clickables:g,score:0,size:g.length},a.reset=function(){a.state.score=0,a.state.clicked=[],a.state.clickables=a.shuffle(a.state.clickables),a.forceUpdate()},a.clicked=function(e){for(var t=!1,n=0;n<a.state.clicked.length;n++)a.state.clicked[n]==e.toString()&&(t=!0,a.lose());0==t&&(a.state.clicked.push(e.toString()),a.state.clickables=a.shuffle(a.state.clickables),a.state.score++,a.forceUpdate(),a.state.score==a.state.size&&a.win())},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"shuffle",value:function(e){var t,a,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e}},{key:"lose",value:function(){alert("You lose"),this.reset()}},{key:"win",value:function(){alert("You Win"),this.reset()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(d,{score:this.state.score,reset:this.reset}),i.a.createElement("center",null,i.a.createElement("div",{className:"playArea"},this.state.clickables.map(function(t){return i.a.createElement(p,{id:t.id,image:t.image,clicked:e.clicked})}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.b3ce4174.chunk.js.map