(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(5),r=n.n(o),i=(n(15),n(16),n(8)),s=n(3),u=(n(17),n(4)),l=n(10),b=n.n(l),j=(n(38),n(1));function d(e){var t=e.image,n=e.openModal,c=t.webformatURL,a=t.largeImageURL;return Object(j.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return n(a)},children:Object(j.jsx)("img",{src:c,alt:"",className:"ImageGalleryItem-image"})})}n(40);function h(e){var t=e.images,n=e.openModal;return Object(j.jsx)(j.Fragment,{children:t&&Object(j.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(j.jsx)(d,{image:e,openModal:n},e.id)}))})})}n(41),n(42);function O(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(s.a)(n,2),o=a[0],r=a[1],i=Object(c.useState)(""),l=Object(s.a)(i,2),b=l[0],d=l[1];return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==o.trim()?o.trim().toLowerCase()!==b?(t(o.toLowerCase()),d(o.toLowerCase())):Object(u.b)("enter a new search query"):Object(u.b)("enter your search term")},className:"SearchForm",children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",name:"inputText",value:o,onChange:function(e){r(e.currentTarget.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}n(43);function f(e){var t=e.clickBtn;return Object(j.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})}n(44);var m=document.querySelector("#modal-root");function g(e){var t=e.largeImageURL,n=e.closeModal;Object(c.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}),[]);var a=function(e){"Escape"===e.code&&n()};return Object(o.createPortal)(Object(j.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&n()},children:Object(j.jsx)("div",{className:"Modal",children:Object(j.jsx)("img",{src:t,alt:""})})}),m)}var p=n.p+"static/media/pixabay.97bc8187.svg";function A(e){var t=e.searchQuery;return Object(j.jsxs)("div",{className:"Div-loader",children:[Object(j.jsxs)("p",{children:['by request: "',Object(j.jsx)("span",{children:t}),'" nothing found']}),Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAD8/Pz5+fnc3NzIyMjp6em3t7f29vakpKTv7+/FxcXCwsLz8/O9vb3s7OwdHR3i4uLR0dGcnJxaWlqNjY1iYmI3NzcvLy9SUlKBgYFycnIXFxempqawsLA/Pz8PDw+VlZVtbW1JSUkmJiZ5eXlbW1uCgoI7OztEREQxMTEpKSnduM7VAAAKUklEQVR4nO1d2WKqMBCtgLi0LkBRcau4XFv7//93xaVacyYEnQS1Oc+aZMhkljNZXl4sLCwsLCwsLCwsLCwsLCwsKLhNPwi8AwK/0yp7QJxww0a8ev/4nlV+0O0v5sO05pc9tNvhVie9bkWCj3jqlT3Iq1EPJ8lMJt3PhI7egrIHWxyuFy9UpDtg2Zs2yx5yIfhRv4B4B4zaZQ9bFc5rUly8PeJH0NbWtIh2XqI7une740y+b5Bvh3lYthAyNMa3ypehd7fz+PrBIV+G4V2ux6DHJd8Wy0bZ4ohoMMqXIbkzVQ2v8H95iN2ypTrBmfDLt8XiblZjc65FwEplNi1btD1CTfJlmDtlS7eFHg09IilfU4daBaxUBiWHOM57gbEm83UaTRpRvOp9KSWOe7yWKaCvFmUvhlG1/ntFOU4wjedqPqZEe+MrpEn9eTUgWaeON0mW+W2UFuA08/OIKH8V+e1/+c0YkAYNbZAzrmFVsaX6JE8ZShExZw32406BxtxqTtxegqI6cgEbhYmlUD6PNR1CSCF1E9FVQXMobdO0X5Q5+tHVxGBbsrRnZtMpSai2uYUU7Ei+3JdJRlUSbI/qtzVdpZvu8QxeBU1yEN3bWd06nYvFDGNXgkNa9gXLWqEJEVUHq20EPSbe4Y3qoG+m6kguQj4lCiibOmfrQgYqIeAMO3yKejXh+Ckd5Y2rWsQszvQTcIERAbciEqoyZO5HBGFH+SPjDqGouqM3wszp8FQ+ZjoSzfQb1h090QZhtPUaG2xmFpqW/xSLqKezPRyoOF1tnGYMJZzo6u6FSin07TBwYZq91OcxWpB6Gmnrj/JN+igNOIX9G9MlOeDC/9AVnjpfZnV01ydkb3SZU+gLdepoBg9OoqbO4LLXTi1Ae6onUfRRV/qp2jrqdq2lqwh1ZaDWDvvVEbq5KGAzQUXXUe1GRz0KLfm+EYIPeQwdyf4a9JNq6EeEDyZxzL+Buo4saZHiyw1A5pTfJaJURn++vQey4vwJG1oMxooloGSzYY/ckJJy90ECJYrcTr8OMkPo7YNGxq9046Lz26rtItDRG+wdSMgda7yqKakT/eyhHRVSo9qPt4WbEoGaLq6UhAJInPrir9zzqspHAUt7vsq7QP9q4ANfLwwEKAitxF/93lWhnsZdfD9xFj2wSJgrpuBoj/ipLw0C+AYQl55oI0adIE3kDdxcsYOZwD/VLyNX1cK0wDKLg1+JA+ANqIC/TwT2QizfqhHFYsH1XZhEsBB5d2YCfy8GNOJ37io1DkYv6EdH/M2A1eeDyFD0R6CkodQ4sNOCerdA9M2a2IBlIBoanRK6YPMbZ3rhAo8rkog6JURaxBm3NUGlS1zn4iDUODGRw1uK0wO4DE523xfJ7o34K5EFUCM5XMGdgwweBN+c7iIQQ4pE/JXA3qom4gJ9ADY+g51EnIQbKB8gouTSa6qG/52LUAFlt4Am4iSjQfPwA/52myNll/z708DkFuzD4mSjgIR4EZyLWCTmOBfxE5YjQdzISWQACQkN9I5+pV8sMG7+bEqk7IdxCSkz6XjxvNcbVgvX3Pxo+79VjQxU7kZCbTAuoRky+AzGJTS21/MAQEZpllA1f+eCoktmbN7gluQdQA7O+ZF9kab5YmxeBW29C+UyrNpibPh0J2AZODnhFuD0DUuYiiNgLT8ButTw8dWR5hGAgx6ForKOF07Wva/P/mYw2PQ/klHU9oIiYU8d5OCsPA3QEdV17rRqwx7aA9BdjCJPdacDSC3GrFwboiuV/liN5GfcZiu165OAR05Y94GAKuwgP4EPU6XbXJJ2fg0nFf/GvKcGDCyHsq+31S9T2gzzPhfg8ZgLiGChS7MLp1HwspqVtKQKHHIF1lKvB6ArARd1hHvNRQvvEqVA+ySYHTIwNYDU3MOpfV4h4BYrUlfBBx7zCgh3RBExRZB/+pzCbEJMDKhasCc3oI9/8Ifp1fJlwOf7kJKy79wFtRlQuoDRVTGgWAwoKf8BAbQZA1nTW2+rQYGEC9wq91aM7eoClXwYVcDtoMr4RqEYyA118EToSBesb910pxLyivCKGA2pDdp5BamMjvRKVjlgnIIUf6HhDAQ8wA0DEaRUasDUCNIeLWQmspI4rkF2VwnQ40PbpeUGYnjcAk4i3G2rABxCoACe35LugAaFJ5FyGePu8vt72SUuicJRCrxkQdPFSinqC4cWIjPWH07bYdByX5x6x6vWUtE+LqHxcNFRpLGmQxDIJVYGOHv9JcBg3QZD8qLfJgSnT/CzaispwIgM69Zpf/14XqV4CieITlkkto4eYgnG2ng+eMqK2NZyTLfWcirAPWZaC5xVQJul8TQZDlcw57WLlmMFPuwtk3GGzX8KO9RI1eJJxKyb+ynN2s+QbZ3GjgLbZK1lL3zfAOaEwoayxfOw6fDx2XitbDueRG5S6AhM1mmuXKLTTxX2Pdd74GSapIeYAHa4ZVCghwuDSDS1b5EgLm/hP15NdaT/TCfBZA+YjyJSVIGBW9sIY1Ppsx7VoyhlI8fl8GUVlcon41qkZhDSOOzAlwBkYNuWTFKShq4zA/tpD+BJ2+irbY1txCLujanw3BQfbqjWdV8vdAaa2P66OaRKybZNHTvOQC/FrUe+6UN7EorH1J2CO5CX4lVuerfBlZXFdV4tBEB5xR1UskKEKrwe5gBTB8dPo5GJWImukDHnImHzL3rQBjXDslHM/zth3iMuM/MX7Oe8u9Jdq8vothXu5++aFzG3jpZMleonYaxYyzGvqAqlwveaJ/UezTBWuFj/CPOzqLKpZJaspp0WiHXqTS/qFdu1UYKionPyCMt/cTStes3dfLaCsD1JR9e8f2X4Uu8MYYGnOK7DUHegnwdP5qUZsI1kQtIQmXkxscn5GpmAXSxK7+/QRGNegkr6b0dyyCboGNHQu5c63iTLkP5YYFpRDT1C09Lxatf3ebZEWzRDivpSY7epw9/BO62opkR0eJ+2+hB8O/1bY68lyZ8YKYQueORE8nNzz+yqRjh5WCGyR/YHg896TQqE0YXkk0to8p0dt3FbjDMbUWSd/H8mnxJqta9/UnYc05F1zl/Nvj8XEnXUHMgT5rx/m37Vezov+PjxIs0hPXJbMP7mlV/rkfT8BbqLNP8gW34zplz/GVp557oyjFdtpUqAwpcq6S1Ib5rOMUM+TtbRm3INQEHCEh5nO8BpNf3qJB2O5r0d5qs4qgVNRN7QUJHQuLlhhVrAVMJa5AP5CtR9KCoH5KWSI+7kHejroHYI4KEVVU3EhzY3f0BR0QGzJ5tF6zQO+ANO46FFtE7jgIc2N3/AaaiZm4eexT/gNP6Aov4Bp/EHFFXN3Gg+gKIXKopaEv/GhXzX/9AOI0OeiA9taPaQK+qDq+gespT4oe3oCbTTeAIV3YNyGg9vZE7Aa/Ep1uARyKI+jYruIYr4ZAKKivpUKrrHb3PzREbmhHOn8XQqusfJ9T+JoxdRfd41eET7mVV0j/azGpkTqs+sons8NGVhYWFhYWFhYWFhYWFhYWFREP8B3SCFWTvkgQoAAAAASUVORK5CYII=",alt:"",className:"Logo-image"})]})}var x=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(1),r=Object(s.a)(o,2),l=r[0],d=r[1],m=Object(c.useState)([]),x=Object(s.a)(m,2),v=x[0],E=x[1],q=Object(c.useState)("idle"),y=Object(s.a)(q,2),w=y[0],I=y[1],C=Object(c.useState)(!1),N=Object(s.a)(C,2),S=N[0],Y=N[1],F=Object(c.useState)(null),Q=Object(s.a)(F,2),U=Q[0],B=Q[1],G=function(){Y((function(e){return!e}))},J=function(){return fetch("https://pixabay.com/api/?q=".concat(n,"&page=").concat(l,"&key=").concat("23100345-a1985f2d3b70e4240f74cca05","&image_type=").concat("photo","&orientation=").concat("horizontal","&per_page=").concat(12)).then((function(e){return e.ok?e.json():Promise.reject(Object(u.b)("nothing found for this request: ".concat(n)))}))},R=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.reduce((function(e,t){return e.some((function(e,t){return t.id===e.id}))?e:[].concat(Object(i.a)(e),[t])}),t)};if(0===v.length)E(t(e.hits));else{var n=t(e.hits);E((function(e){return[].concat(Object(i.a)(e),Object(i.a)(n))}))}};return Object(c.useEffect)((function(){""!==n&&(I("pending"),J().then((function(e){0!==e.hits.length?(R(e),I("resolved")):I("rejected")})).catch((function(){I("rejected")})))}),[n]),Object(c.useEffect)((function(){1!==l&&J().then((function(e){if(0===e.hits.length)return I("rejected"),void Object(u.b)('no more images found for the search query "'.concat(n,'""'));R(e),I("resolved")})).catch((function(e){I("rejected")}))}),[l]),Object(c.useEffect)((function(){1!==l&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[v]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(O,{onSubmit:function(e){a(e),d(1),E([])}}),"idle"===w&&Object(j.jsx)("img",{src:p,alt:"",className:"Logo-image"}),"pending"===w&&Object(j.jsx)("div",{className:"Div-loader",children:Object(j.jsx)(b.a,{type:"ThreeDots",color:"blue"})}),"resolved"===w&&Object(j.jsx)(h,{images:v,openModal:function(e){G(),B(e)}}),"rejected"===w&&Object(j.jsx)(A,{searchQuery:n}),function(){if(v!==[]&&0!==v.length&&v.length%12===0)return!0}()&&Object(j.jsx)(f,{clickBtn:function(){d((function(e){return e+1}))}}),S&&Object(j.jsx)(g,{closeModal:G,largeImageURL:U}),Object(j.jsx)(u.a,{autoClose:2e3})]})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.5f1a35fb.chunk.js.map