(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{JfYB:function(e,t,s){"use strict";s.r(t),s.d(t,"UserDetailModule",function(){return a});var r=s("ofXK"),n=s("5GyC"),i=s("tyNb"),c=s("fXoL");const b=[{path:"",component:(()=>{class e{constructor(e,t){this.userService=e,this.route=t,this.user={}}ngOnInit(){this.id=this.route.snapshot.params.id,this.userService.getUserByID(this.id).subscribe(e=>this.user=e)}deleteUser(e){this.userService.deleteUser(e)}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(n.a),c.Ib(i.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-user-detail"]],decls:17,vars:3,consts:[[1,"container"],["role","navigation","aria-label","main navigation",1,"navbar"],[1,"navbar-item","button","m-5",3,"click"],[1,"block"],[1,"is-size-1","mb-5"],[1,"has-text-grey-light"],[1,"is-size-3"]],template:function(e,t){1&e&&(c.Ob(0,"div",0),c.Ob(1,"nav",1),c.Ob(2,"button",2),c.Vb("click",function(){return t.deleteUser(t.user.id)}),c.jc(3,"Delete user"),c.Nb(),c.Nb(),c.Ob(4,"div",3),c.Ob(5,"h1",4),c.Ob(6,"span",5),c.jc(7,"Login: "),c.Nb(),c.jc(8),c.Nb(),c.Ob(9,"h2",6),c.Ob(10,"span",5),c.jc(11," ID: "),c.Nb(),c.jc(12),c.Nb(),c.Ob(13,"h2",6),c.Ob(14,"span",5),c.jc(15," Role: "),c.Nb(),c.jc(16),c.Nb(),c.Nb(),c.Nb()),2&e&&(c.yb(8),c.lc(" ",t.user.login," "),c.yb(4),c.lc(" ",t.user.id," "),c.yb(4),c.lc(" ",t.user.role," "))},encapsulation:2}),e})()}];let o=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[i.f.forChild(b)],i.f]}),e})(),a=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},providers:[n.a],imports:[[r.b,o]]}),e})()}}]);