(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),c=t.n(o),l=t(13),i=t(42),s=t(28),m=t(73),u=t(74),d=t(84),p=t(39),g=t(30),f=t(170),h=t(141),b=t(142),y=t(63),E=t(143),v=t(55),k=t(164),N=t(145),C=t(165),S=t(77),w=t.n(S),x=t(107),O=Object(x.a)(function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random?nature)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},paper_wrapper:{display:"flex",justifyContent:"center",alignItems:"center"},paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main},header:{textTransform:"capitalize"},subheader:{margin:e.spacing(1,0,0)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},author:{textAlign:"center"},author_link:{color:"inherit",textDecoration:"none"}}}),_=function(e){var a=e.onClick,t=O();return r.a.createElement(g.b,{render:function(e){var n=e.history;return r.a.createElement(h.a,{container:!0,component:"main",className:t.root},r.a.createElement(b.a,null),r.a.createElement(h.a,{item:!0,xs:!1,sm:4,md:7,className:t.image}),r.a.createElement(h.a,{className:t.paper_wrapper,item:!0,xs:12,sm:8,md:5,component:y.a,elevation:6,square:!0},r.a.createElement("div",{className:t.paper},r.a.createElement(E.a,{className:t.avatar},r.a.createElement(w.a,null)),r.a.createElement(v.a,{className:t.header,component:"h1",variant:"h5"},"Chat App"),r.a.createElement(v.a,{className:t.subheader,variant:"subtitle1"},"Please, enter your name to proceed"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"nameBar",label:"Name",name:"name",autoComplete:"name",autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),a()&&n.push("/"))}}),r.a.createElement(N.a,{fullWidth:!0,variant:"contained",color:"primary",size:"large",onClick:function(){a()&&n.push("/")},className:t.submit},"Submit"),r.a.createElement(C.a,{mt:5},r.a.createElement(v.a,{className:t.author,variant:"body2",color:"textSecondary"},r.a.createElement("a",{className:t.author_link,href:"https://github.com/Arthur199212",target:"_blank",rel:"noopener noreferrer"},"This Chat App was made by Arthur Rubchenko")))))))}})},j=t(146),D=t(169),F=t(147),I=t(148),M=t(80),L=t.n(M),T=Object(x.a)({wrapper:{position:"fixed",bottom:0,display:"flex",alignItems:"flex-start",justifyContent:"center",width:"100%",height:"55px",backgroundColor:"#F5F5F5"},container:{margin:"0 auto",padding:"2px 4px",display:"flex",alignItems:"center",width:"90%"},input:{marginLeft:8,flex:1},iconButton:{padding:10,color:j.a[600]},divider:{width:1,height:28,margin:4}}),B=function(e){var a=e.handleSubmit,t=T();return r.a.createElement("div",{className:t.wrapper},r.a.createElement(y.a,{className:t.container},r.a.createElement(D.a,{id:"inputBar",className:t.input,placeholder:"Type a message...",onKeyPress:function(e){"Enter"===e.key&&a()},autoComplete:"off"}),r.a.createElement(F.a,{className:t.divider}),r.a.createElement(I.a,{className:t.iconButton,color:"primary",onClick:a},r.a.createElement(L.a,null))))},A=t(54),P=t(153),q=t(4),z=t(168),W=t(154),R=t(155),H=t(156),J=t(81),K=t.n(J),Y=t(167),$=t(149),U=t(150),V=t(151),G=t(152),Q=function(e){var a=e.name,t=e.open,n=e.onClose,o=e.handleSubmiteName,c=e.hadleLogOut;return r.a.createElement("div",null,r.a.createElement(Y.a,{open:t,onClose:n,"aria-labelledby":"form-dialog"},r.a.createElement($.a,{id:"form-dialog"},"Hey, ",a,"!"),r.a.createElement(U.a,null,r.a.createElement(V.a,null,"You can change your name or log out if you want"),r.a.createElement(k.a,{margin:"dense",id:"userName",label:"Type your name here...",type:"name",fullWidth:!0,autoComplete:"false",onKeyPress:function(e){"Enter"===e.key&&o()}})),r.a.createElement(G.a,null,r.a.createElement(N.a,{onClick:c,color:"secondary"},"Log out"),r.a.createElement(N.a,{onClick:n,color:"primary"},"Cancel"),r.a.createElement(N.a,{onClick:o,color:"primary"},"Submit"))))},X=Object(x.a)(function(e){return{menu_bar:{backgroundColor:j.a[600]},menu_toolbar:{margin:"0 auto",display:"flex",justifyContent:"space-between",width:"95%"},menu_statuses_bar:{display:"flex"}}}),Z=Object(q.a)({switchBase:{color:A.a[500],"&$checked":{color:P.a.A400},"&$checked + $track":{backgroundColor:P.a.A400}},checked:{},track:{}})(z.a),ee=function(e){var a=e.connection,t=e.dialog,n=e.name,o=e.handleDialogOpen,c=e.handleDialogClose,l=e.handleSubmiteName,i=e.hadleLogOut,s=X(),m="Online";return a||(m="Offline"),r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{position:"fixed",className:s.menu_bar},r.a.createElement(R.a,{className:s.menu_toolbar},r.a.createElement(v.a,{variant:"h6"},"Chat App"),r.a.createElement("div",{className:s.menu_statuses_bar},r.a.createElement(H.a,{control:r.a.createElement(Z,{checked:a}),label:m,labelPlacement:"end"}),r.a.createElement("div",null,r.a.createElement(I.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:o,color:"inherit"},r.a.createElement(K.a,null)),r.a.createElement(Q,{open:t,name:n,onClose:c,handleSubmiteName:l,hadleLogOut:i}))))),r.a.createElement(R.a,null))},ae=t(82),te=t.n(ae),ne=t(158),re=["#f44336","#0097a7","#673ab7","#c62828","#43a047","#1976d2","#0277bd","#f44336","#616161","#689f38","#26a69a","#3f51b5","#607d8b","#d81b60","#d84315","#d32f2f","#006064","#33691e","#ef6c00","#795548","#0d47a1","#039be5","#827717","#e65100","#f06292","#1565c0","#4527a0","#d81b60","#ec407a","#ab47bc","#558b2f","#ff5722","#283593","#00897b","#ad1457","#00838f","#ab47bc","#1e88e5","#e64a19","#0288d1","#2196f3"],oe=t(53),ce=t(157),le=Object(x.a)(function(e){return{card:{padding:10},card_self:{padding:10,backgroundColor:j.a[500],color:"#FFF"},card_self_unsent:{padding:10,backgroundColor:oe.a[600],color:"#FFF"},avatar:{margin:"0 7px"},message_container:{margin:10,display:"flex"},message_container_reverse:{margin:10,display:"flex",flexDirection:"row-reverse"},message_header:{display:"flex",alignItems:"center",flexWrap:"wrap"},message_header_item:{marginRight:10}}}),ie=function(e){var a=e.id,t=e.from,n=e.message,o=(e.time,e.unsent),c=e.cardClass,l=e.message_container,i=e.textPrimary,s=e.textSecondary,m=e.avatarColor,u=e.messageTime,d=le();return r.a.createElement("div",{className:d[l],key:a},r.a.createElement(E.a,{"aria-label":"avatar",className:d.avatar,style:{backgroundColor:m}},t[0].toUpperCase()),r.a.createElement(ce.a,{className:d[c]},r.a.createElement("div",{className:d.message_header},r.a.createElement(v.a,{className:d.message_header_item,variant:"body2",color:i,component:"p"},t),r.a.createElement(v.a,{variant:"body2",color:s,component:"p"},o?"[not sent yet]":u)),r.a.createElement(v.a,{variant:"body1",color:i,component:"p"},n)))},se=function(e){var a=e.name,t=e.chatMessages;return Object(n.useEffect)(function(){var e=document.body.offsetHeight;window.scrollTo(0,e)},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null),r.a.createElement(ne.a,{style:{margin:"10px auto 70px",width:"95%"}},t.map(function(e){var t=e.id,n=e.from,o=e.message,c=e.time,l=e.unsent,i=te()(c).tz("Europe/Minsk").format("LT"),s="card",m="message_container",u="textPrimary",d="textSecondary";a===n&&(s=l?"card_self_unsent":"card_self",m="message_container_reverse",u=d="initial");var p=function(e){var a=e[0].toLocaleLowerCase(),t="abcdefjhigklmnoprstvwyz\u0430\u0431\u0432\u0433\u0434\u0435\u0437\u0438\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442".indexOf(a);return t>=0?re[t]:re.slice(-1)}(n);return r.a.createElement(ie,{key:t,id:t,from:n,message:o,time:c,unsent:l,cardClass:s,message_container:m,textPrimary:u,textSecondary:d,avatarColor:p,messageTime:i})})))},me=t(160),ue=t(161),de=t(159),pe=Object(x.a)(function(e){return{info_wrapper:{display:"flex",alignItems:"center",flexWrap:"nowrap",backgroundColor:e.palette.primary.main},info_container:{display:"flex",alignItems:"center"},infoIcon:{marginRight:7},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}),ge=function(e){var a=e.onClose,t=pe();return r.a.createElement(de.a,{className:t.info_wrapper,"aria-describedby":"client-snackbar",message:r.a.createElement("div",{className:t.info_container},r.a.createElement(me.a,{className:t.infoIcon}),r.a.createElement(v.a,{variant:"body2",id:"client-snackbar",className:t.message},"Your message will be sent when the app is online again.")),action:[r.a.createElement(I.a,{key:"close","aria-label":"close",color:"inherit",onClick:a},r.a.createElement(ue.a,{className:t.icon}))]})},fe=t(83),he=t(163),be=t(162),ye=Object(x.a)(function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"95vh"},header:{margin:e.spacing(2,0),color:j.a[500]},subheader:{color:be.a[500]},button:{margin:e.spacing(2,0),textDecoration:"none"}}}),Ee=Object(fe.a)({palette:{primary:j.a}}),ve=function(){var e=ye();return r.a.createElement("div",{className:e.root},r.a.createElement(v.a,{className:e.header,variant:"h1",component:"h2",fontWeight:700},"Oops!"),r.a.createElement(v.a,{className:e.subheader,variant:"h5"},"404 - Page not found"),r.a.createElement(he.a,{theme:Ee},r.a.createElement(p.b,{to:"/",className:e.button},r.a.createElement(N.a,{variant:"contained",color:"primary"},"Back to chat"))))},ke=function(){var e=new Notification("Chat App",{icon:"https://arthur199212.github.io/chat-app/favicon.ico",body:"You have at least 1 new message in Chat App"});setTimeout(e.close.bind(e),4e3)},Ne=new WebSocket("wss://wssproxy.herokuapp.com/"),Ce=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={connection:!1,name:"user name",chatMessages:[],unSentMessages:[],offlineNotification:!1,dialog:!1},t.handleLogin=function(){var e=document.body.querySelector("#nameBar").value;if(e)return localStorage.setItem("name",e),t.setState({name:e}),void(document.body.querySelector("#nameBar").value="")},t.handleSubmit=function(){var e=document.body.querySelector("#inputBar").value,a=t.state,n=a.name,r=a.connection,o=a.chatMessages,c=a.unSentMessages;if(""!==e){if(Ne.send(JSON.stringify({from:n,message:e})),!r){var i={from:n,message:e,id:Math.random().toString(36).substr(2,9),time:(new Date).getTime(),unsent:!0};t.setState({offlineNotification:!0,unSentMessages:[].concat(Object(l.a)(c),[i]),chatMessages:[].concat(Object(l.a)(o),[i])})}document.body.querySelector("#inputBar").value=""}},t.updateOnlineStatus=function(){t.setState({connection:navigator.onLine})},t.handleCloseSnackbar=function(e,a){"clickaway"!==a&&t.setState({offlineNotification:!1})},t.handleDialogOpen=function(){t.setState({dialog:!0})},t.handleSubmiteName=function(){var e=document.body.querySelector("#userName").value;t.setState({name:e,dialog:!1})},t.handleDialogClose=function(){t.setState({dialog:!1})},t.hadleLogOut=function(){localStorage.removeItem("name"),t.setState({name:null,dialog:!1})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=localStorage.getItem("name");Ne.onopen=function(){e.setState({connection:!0,name:a})},window.ononline=this.updateOnlineStatus,window.onoffline=this.updateOnlineStatus,Ne.onmessage=function(a){var t,n=a.data,r=e.state,o=r.chatMessages,c=r.unSentMessages.length;t=c?Object(l.a)(o.slice(0,-c)):Object(l.a)(o),e.setState({chatMessages:[].concat(Object(l.a)(t),Object(l.a)(JSON.parse(n).reverse())),unSentMessages:[]}),document.hasFocus()||("Notification"in window?"granted"===Notification.permission?ke():"denied"!==Notification.permission&&Notification.requestPermission().then(function(e){"granted"===e&&ke()}):console.log("This browser does not support desktop notification"))};var t=document.body.offsetHeight;window.scrollTo(0,t)}},{key:"componentDidUpdate",value:function(){if(document.body.getBoundingClientRect().bottom<1e3){var e=document.body.offsetHeight;window.scrollTo(0,e)}}},{key:"render",value:function(){var e=this;document.body.style.margin=0,document.body.style.backgroundColor="#F5F5F5";var a=this.state,t=a.name,n=a.connection,o=a.chatMessages,c=a.offlineNotification,l=a.dialog;return r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(_,{onClick:e.handleLogin})}}),r.a.createElement(g.b,{exact:!0,path:"/",render:function(){return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,{connection:n,name:t,dialog:l,hadleLogOut:e.hadleLogOut,handleDialogOpen:e.handleDialogOpen,handleDialogClose:e.handleDialogClose,handleSubmiteName:e.handleSubmiteName}),r.a.createElement(se,{name:t,chatMessages:o}),r.a.createElement(B,{handleSubmit:e.handleSubmit}),r.a.createElement(f.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:c,autoHideDuration:4e3,onClose:e.handleCloseSnackbar},r.a.createElement(ge,{onClose:e.handleCloseSnackbar}))):r.a.createElement(g.a,{to:"/login"})}}),r.a.createElement(g.b,{path:"/",component:ve}))))}}]),a}(n.Component);c.a.render(r.a.createElement(Ce,null),document.getElementById("root"))},94:function(e,a,t){e.exports=t(106)}},[[94,1,2]]]);
//# sourceMappingURL=main.0763804e.chunk.js.map