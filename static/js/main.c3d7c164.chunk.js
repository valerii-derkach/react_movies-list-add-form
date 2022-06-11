(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){},20:function(e,t,i){"use strict";i.r(t);var a=i(7),s=i.n(a),l=(i(15),i(9)),c=i(2),n=i(1),r=(i(16),i(10)),d=(i(17),i(18),i(0)),m=function(e){var t=e.title,i=e.description,a=e.imgUrl,s=e.imdbUrl;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{src:a,alt:"Film logo"})})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-left",children:Object(d.jsx)("figure",{className:"image is-48x48",children:Object(d.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(d.jsx)("div",{className:"media-content",children:Object(d.jsx)("p",{className:"title is-8",children:t})})]}),Object(d.jsxs)("div",{className:"content",children:[i,Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:s,children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(d.jsx)("div",{className:"movies",children:t.map((function(e){return Object(d.jsx)(m,Object(r.a)({},e),e.imdbId)}))})},j=i(4),b=i.n(j),h=function(e){var t=e.addMovie,i=Object(n.useState)(""),a=Object(c.a)(i,2),s=a[0],l=a[1],r=Object(n.useState)(!1),m=Object(c.a)(r,2),o=m[0],j=m[1],h=Object(n.useState)(""),u=Object(c.a)(h,2),O=u[0],p=u[1],g=Object(n.useState)(""),x=Object(c.a)(g,2),v=x[0],N=x[1],f=Object(n.useState)(!1),M=Object(c.a)(f,2),w=M[0],U=M[1],y=Object(n.useState)(""),I=Object(c.a)(y,2),T=I[0],B=I[1],S=Object(n.useState)(!1),_=Object(c.a)(S,2),k=_[0],z=_[1],F=Object(n.useState)(""),D=Object(c.a)(F,2),A=D[0],V=D[1],Y=Object(n.useState)(!1),C=Object(c.a)(Y,2),X=C[0],E=C[1];return Object(d.jsxs)("form",{className:"form",onSubmit:function(e){(e.preventDefault(),j(!s),U(!v),z(!T),E(!A),s&&v&&T&&A)&&(t({title:s,description:O,imgUrl:v,imdbUrl:T,imdbId:A}),l(""),p(""),N(""),B(""),V(""))},children:[Object(d.jsx)("h1",{className:"title is-3",children:"Add new film:"}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{className:"label",htmlFor:"title",children:"Title:"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{className:b()("input",{"is-danger":o}),type:"text",id:"title",placeholder:"e.g. 'Terminator-2'",value:s,onChange:function(e){l(e.target.value),j(!1)}})}),o&&Object(d.jsx)("p",{className:"help is-danger",children:"Please enter the title!"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{className:"label",htmlFor:"description",children:"Description:"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{className:"input",id:"description",type:"text",placeholder:"e.g. 'Everybody will die in the end'",value:O,onChange:function(e){p(e.target.value)}})})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{className:"label",htmlFor:"imgUrl",children:"ImgUrl:"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{className:b()("input",{"is-danger":w}),id:"imgUrl",type:"url",placeholder:"Put the imgUrl here",value:v,onChange:function(e){N(e.target.value),U(!1)}})}),w&&Object(d.jsx)("p",{className:"help is-danger",children:"Please insert the imgUrl!"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{className:"label",htmlFor:"imdbUrl",children:"imdbUrl:"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{className:b()("input",{"is-danger":k}),id:"imdbUrl",type:"url",placeholder:"Insert the imdbUrl link",value:T,onChange:function(e){B(e.target.value),z(!1)}})}),k&&Object(d.jsx)("p",{className:"help is-danger",children:"Please insert the imdbUrl!"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{className:"label",htmlFor:"imdbId",children:"imdbId:"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{className:b()("input",{"is-danger":X}),id:"imdbId",type:"text",placeholder:"Enter the imdbId",value:A,onChange:function(e){V(e.target.value),E(!1)}})}),X&&Object(d.jsx)("p",{className:"help is-danger",children:"Please write the imdbId!"})]}),Object(d.jsx)("button",{className:"button is-info",type:"submit",children:"Add"})]})},u=i(8),O=function(){var e=Object(n.useState)(u),t=Object(c.a)(e,2),i=t[0],a=t[1];return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"page-content",children:Object(d.jsx)(o,{movies:i})}),Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsx)(h,{addMovie:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}})})]})};s.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[20,1,2]]]);
//# sourceMappingURL=main.c3d7c164.chunk.js.map