(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),a=n(2),s=n(3),i=n(5),l=n(4),r=n(1),u=n.n(r),h=(n(12),function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={date:new Date},t.timerID=void 0,t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=window.setInterval((function(){t.setState({date:new Date}),console.log(t.state.date)}),1e3)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return this.state.date.toLocaleTimeString()}}]),n}(u.a.Component)),m=n(0),b=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,clockName:0},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t.setClockName=function(){t.setState({clockName:Math.round(10*Math.random())})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.isClockVisible,n=t.clockName;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React Clock ".concat(n)}),Object(m.jsxs)("p",{className:"text",children:["Current time:"," ",e&&Object(m.jsx)(h,{name:n})]}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("button",{className:"show-button",type:"button",onClick:this.showClock,children:"Show Clock"}),Object(m.jsx)("button",{className:"hide-button",type:"button",onClick:this.hideClock,children:"Hide Clock"}),Object(m.jsx)("button",{className:"random-button",type:"button",onClick:this.setClockName,children:"Random name"})]})]})}}]),n}(u.a.Component);o.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6c291bee.chunk.js.map