(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Fractal1",image:"https://fractals.erucolindo3.com/images/blue-eggs.jpg"},{id:2,name:"Fractal2",image:"https://i.pinimg.com/originals/c8/c8/e4/c8c8e4aba9999b77ddf6c4bdfffb636e.jpg"},{id:3,name:"Fractal3",image:"https://fractalformulas.files.wordpress.com/2017/05/170422-1a.png"},{id:4,name:"Fractal4",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_LF99dgpeVnApjiT3ujsAiQn_EaCJZHEuXZykcozhjEm3Nddlg"},{id:5,name:"Fractal5",image:"https://steemitimages.com/DQmNouvK7uGhQvdyG5YsroLAqHgBwXkL4qXAi37TzYSVs7y/343.png"},{id:6,name:"Fractal6",image:"https://steemitimages.com/DQmaFGz657id31QEQTLe75BKeRmmaEK9yCKHDYPw5uwgYTv/334.png"},{id:7,name:"Fractal7",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjx_Gl6m9ieQOvh1ff07YR0O9JB6t2VguVF-nrzlsgy8pSf84Y"},{id:8,name:"Fractal8",image:"https://bw-1651cf0d2f737d7adeab84d339dbabd3-gallery.s3.amazonaws.com/images/image_453537/file_453537.jpg"},{id:9,name:"Fractal9",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRak7Ksxfpzpc3cQO57gFFySJjB_w0kTYvWgQeeIJ-lliZdvn6E"},{id:10,name:"Fractal10",image:"https://steemitimages.com/DQmUcq1byZHaMMnM5zccFsCYAAmDBotRyAKntrT3PcBVXVp/21408.png"},{id:11,name:"Fractal11",image:"https://i2.wp.com/www.linuxlinks.com/wp-content/uploads/2018/09/Fractals.png?resize=750%2C235&ssl=1"},{id:12,name:"Fractal12",image:"https://cdn.solacore.net/ipfs/2018-10-13/QmTg244b9FcP9yJxEDfWgNsj1APSjGFEFR2K11p6ABvu3g.jpg"}]},,,function(e,a,t){e.exports=t(19)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(8),i=t.n(r),s=t(1),l=t(2),o=t(4),m=t(3),d=t(5),p=(t(15),function(e){return n.a.createElement("div",{className:"navbar sticky-top"},n.a.createElement("a",{className:"navbar-brand",href:"/React-Clicky-Game/"}),n.a.createElement("li",{style:{listStyleType:"none"},className:"score"},"Score: ",e.score," | Top Score: ",e.topScore))}),g=(t(16),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"header"},n.a.createElement("h1",null,"Fractal Clicky Game"),n.a.createElement("div",{className:"container"},n.a.createElement("h4",null,"Click on each image only 1 time and you win.  Click on the same image 2 times and you lose."),n.a.createElement("p",null,'"Fractals are infinitely complex patterns that are self-similar across different scales. They are created by repeating a simple process over and over in an ongoing feedback loop. Driven by recursion, fractals are images of dynamic systems \u2013 the pictures of Chaos."  -  The Fractal Foundation')))}}]),a}(c.Component)),u=(t(17),function(e){return n.a.createElement("div",{className:"card",onClick:function(){return e.clickedImage(e.id)}},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image})))}),f=(t(18),function(e){return n.a.createElement("div",{className:"wrapper"},e.children)}),h=t(6);function y(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),c=[e[t],e[a]];e[a]=c[0],e[t]=c[1]}return e}var b=function(e){function a(){var e,t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={fractals:h,score:0,topScore:0,clickedFractals:[]},t.clickedImage=function(e){var a=t.state.clickedFractals,c=t.state.score,n=t.state.topScore;-1===a.indexOf(e)?(a.push(e),t.handleIncrement(),t.makeShuffle()):12===t.state.score?(alert("Winner! You clicked each fractal once"),t.setState({score:0,clickedFractals:[]})):(t.setState({score:0,clickedFractals:[]}),alert("Sorry you lost, please start over")),c>n&&t.setState({topScore:c})},t.handleIncrement=function(){t.setState({score:t.state.score+1})},t.makeShuffle=function(){t.setState({fractals:y(h)})},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(p,{score:this.state.score,topScore:this.state.topScore}),n.a.createElement(g,null),n.a.createElement(f,null,this.state.fractals.map(function(a){return n.a.createElement(u,{key:a.id,id:a.id,name:a.name,image:a.image,clickedImage:e.clickedImage})})))}}]),a}(c.Component);i.a.render(n.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.fb7cdd18.chunk.js.map