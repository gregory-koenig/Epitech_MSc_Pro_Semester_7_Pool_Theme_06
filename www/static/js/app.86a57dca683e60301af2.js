webpackJsonp([2],{KYwn:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[s("a",{staticClass:"navbar-brand",attrs:{href:""},on:{click:function(t){t.preventDefault()}}},[t._v("TimeManager")]),t._v(" "),s("div",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/home"}},[s("font-awesome-icon",{attrs:{icon:"home"}}),t._v("Home\n        ")],1)],1),t._v(" "),t.showAdminBoard?s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin"}},[t._v("Admin Board")])],1):t._e(),t._v(" "),t.showModeratorBoard?s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/mod"}},[t._v("Moderator Board")])],1):t._e(),t._v(" "),s("li",{staticClass:"nav-item"},[t.currentUser?s("router-link",{staticClass:"nav-link",attrs:{to:"/user"}},[t._v("User")]):t._e()],1)]),t._v(" "),t.currentUser?t._e():s("div",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[s("font-awesome-icon",{attrs:{icon:"user-plus"}}),t._v("Sign Up\n        ")],1)],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[s("font-awesome-icon",{attrs:{icon:"sign-in-alt"}}),t._v("Login\n        ")],1)],1)]),t._v(" "),t.currentUser?s("div",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[s("font-awesome-icon",{attrs:{icon:"user"}}),t._v("\n          "+t._s(t.currentUser.username)+"\n        ")],1)],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.logOut(e)}}},[s("font-awesome-icon",{attrs:{icon:"sign-out-alt"}}),t._v("LogOut\n        ")],1)])]):t._e()]),t._v(" "),s("div",{staticClass:"container"},[s("router-view")],1)])},staticRenderFns:[]},n=s("VU/8")({computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_MODERATOR")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}},r,!1,null,null,null).exports,i=s("/ocq"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("header",{staticClass:"jumbotron"},[e("h3",[this._v(this._s(this.content))])])])},staticRenderFns:[]},l=s("VU/8")({name:"Home",data:function(){return{content:"Welcome"}}},o,!1,null,null,null).exports,u=s("Zrlr"),c=s.n(u),d=function t(e,s,a){c()(this,t),this.email=e,this.password=s,this.password_confirmation=a},m={name:"Login",data:function(){return{user:new d("",""),loading:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin:function(){var t=this;this.loading=!0,this.$validator.validateAll().then(function(e){e?t.user.email&&t.user.password&&t.$store.dispatch("auth/login",t.user).then(function(){t.$router.push("/profile")},function(e){t.loading=!1,t.message=e.response&&e.response.data||e.message||e.toString()}):t.loading=!1})}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card card-container"},[s("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),t._v(" "),s("form",{attrs:{name:"form"},on:{submit:function(e){return e.preventDefault(),t.handleLogin(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t._v(" "),t.errors.has("email")?s("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("email is required!")]):t._e()]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),t.errors.has("password")?s("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("Password is required!")]):t._e()]),t._v(" "),s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:t.loading}},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"spinner-border spinner-border-sm"}),t._v(" "),s("span",[t._v("Login")])])]),t._v(" "),s("div",{staticClass:"form-group"},[t.message?s("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(t._s(t.message))]):t._e()])])])])},staticRenderFns:[]};var p=s("VU/8")(m,v,!1,function(t){s("XrRJ")},"data-v-da525070",null).exports,g={name:"Register",data:function(){return{user:new d("","",""),submitted:!1,successful:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(){var t=this;this.message="",this.submitted=!0,this.$validator.validate().then(function(e){e&&t.$store.dispatch("auth/register",t.user).then(function(e){t.message=e.message,t.successful=!0},function(e){t.message=e.response&&e.response.data||e.message||e.toString(),t.successful=!1})})}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card card-container"},[s("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),t._v(" "),s("form",{attrs:{name:"form"},on:{submit:function(e){return e.preventDefault(),t.handleRegister(e)}}},[t.successful?t._e():s("div",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate",value:"required|email|max:50",expression:"'required|email|max:50'"}],staticClass:"form-control",attrs:{type:"email",name:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t._v(" "),t.submitted&&t.errors.has("email")?s("div",{staticClass:"alert-danger"},[t._v(t._s(t.errors.first("email")))]):t._e()]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required|min:6|max:40",expression:"'required|min:6|max:40'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),t.submitted&&t.errors.has("password")?s("div",{staticClass:"alert-danger"},[t._v(t._s(t.errors.first("password")))]):t._e()]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password_confirmation"}},[t._v("password_confirmation")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password_confirmation,expression:"user.password_confirmation"},{name:"validate",rawName:"v-validate",value:"required|min:6|max:40",expression:"'required|min:6|max:40'"}],staticClass:"form-control",attrs:{type:"password",name:"password_confirmation"},domProps:{value:t.user.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.user,"password_confirmation",e.target.value)}}}),t._v(" "),t.submitted&&t.errors.has("password_confirmation")?s("div",{staticClass:"alert-danger"},[t._v(t._s(t.errors.first("password_confirmation")))]):t._e()]),t._v(" "),t._m(0)])]),t._v(" "),t.message?s("div",{staticClass:"alert",class:t.successful?"alert-success":"alert-danger"},[t._v(t._s(t.message))]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-primary btn-block"},[this._v("Sign Up")])])}]};var _=s("VU/8")(g,f,!1,function(t){s("KYwn")},"data-v-3762a95a",null).exports;a.a.use(i.a);var h=new i.a({mode:"history",routes:[{path:"/",name:"home",component:l},{path:"/home",component:l},{path:"/login",component:p},{path:"/register",component:_},{path:"/profile",name:"profile",component:function(){return s.e(0).then(s.bind(null,"Twgf"))}}]}),w=s("NYxO"),C=s("//Fk"),b=s.n(C),k=s("mvHQ"),x=s.n(k),$=s("wxAW"),U=s.n($),I=s("mtWM"),N=s.n(I),q="http://0.0.0.0:4000/api/v1/",R=new(function(){function t(){c()(this,t)}return U()(t,[{key:"login",value:function(t){return N.a.post(q+"sign_in",{email:t.email,password:t.password}).then(function(t){return t.data.accessToken&&localStorage.setItem("user",x()(t.data)),t.data})}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(t){return N.a.post(q+"sign_up",{user:{email:t.email,password:t.password,role_id:1,password_confirmation:t.password_confirmation}})}}]),t}()),S=JSON.parse(localStorage.getItem("user")),y={namespaced:!0,state:S?{status:{loggedIn:!0},user:S}:{status:{loggedIn:!1},user:null},actions:{login:function(t,e){var s=t.commit;return R.login(e).then(function(t){return s("loginSuccess",t),b.a.resolve(t)},function(t){return s("loginFailure"),b.a.reject(t)})},logout:function(t){var e=t.commit;R.logout(),e("logout")},register:function(t,e){var s=t.commit;return R.register(e).then(function(t){return s("registerSuccess"),b.a.resolve(t.data)},function(t){return s("registerFailure"),b.a.reject(t)})}},mutations:{loginSuccess:function(t,e){t.status.loggedIn=!0,t.user=e},loginFailure:function(t){t.status.loggedIn=!1,t.user=null},logout:function(t){t.status.loggedIn=!1,t.user=null},registerSuccess:function(t){t.status.loggedIn=!1},registerFailure:function(t){t.status.loggedIn=!1}}};a.a.use(w.a);var E=new w.a.Store({modules:{auth:y}}),F=(s("K3J8"),s("qb6w"),s("sUu7")),O=s("C/JF"),P=s("1e6/"),L=s("fhbW");O.c.add(L.a,L.d,L.e,L.b,L.c),a.a.config.productionTip=!1,a.a.use(F.a),a.a.component("font-awesome-icon",P.a),new a.a({router:h,store:E,render:function(t){return t(n)}}).$mount("#app")},XrRJ:function(t,e){},qb6w:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.86a57dca683e60301af2.js.map