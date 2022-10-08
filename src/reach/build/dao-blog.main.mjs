const _version="0.1.12",_versionHash="0.1.12 (ae94865f)",_backendVersion=24;function getExports(a){a.reachStdlib;return{}}function _getEvents(a){var a=a.reachStdlib,e=a.T_Address,t=a.T_UInt,n=a.T_Tuple([e,t]),o=a.T_Bool,c=a.T_Struct([["admin",e],["registerSelf",o],["fee",t],["quorum",t],["openTreasury",o]]),r=a.T_Null,n=a.T_Data({AllocateFunds:n,ChangeAdmin:c,EjectMember:e,None:r,Stop:r});return{MemberExited:[e],MemberJoined:[e],MotionCreated:[n,e],MotionEnacted:[t,n],MotionFailed:[t,n],MotionRejected:[t,n],commented:[e,a.T_Bytes(a.checkedBigNumberify("<builtin>",a.UInt_max,"256")),a.T_Object({i:t,sign:o})],posted:[e,a.T_Bytes(a.checkedBigNumberify("<builtin>",a.UInt_max,"128"))]}}function _getViews(a,N){const T=a.reachStdlib,I=T.T_Address;var a=T.T_Bytes(T.checkedBigNumberify("<builtin>",T.UInt_max,"128")),e=T.T_Bytes(T.checkedBigNumberify("<builtin>",T.UInt_max,"256")),t=T.T_Contract,n=T.T_UInt,o=T.T_Tuple([I,n]),c=T.T_Bool,r=T.T_Struct([["admin",I],["registerSelf",c],["fee",n],["quorum",n],["openTreasury",c]]),i=T.T_Null,o=T.T_Data({AllocateFunds:o,ChangeAdmin:r,EjectMember:I,None:i,Stop:i}),r=T.T_Object({admin:I,fee:n,openTreasury:c,quorum:n,registerSelf:c}),d=T.T_Object({Against:n,For:n,action:o,index:n}),s=T.T_Struct([["name",a],["founder",I],["admin",I],["description",e],["fee",n],["registerSelf",c],["quorum",n],["openTreasury",c]]),l=T.T_Tuple([n,n]);const B=T.T_Data({None:i,Some:l});return{infos:{Proposal:{decode:async(a,e,t)=>{if(T.eq(a,T.checkedBigNumberify("<builtin>",T.UInt_max,"3"))){const[,,,,,,,,,,,,,,,n,,,,]=e;return[...t],n}T.assert(!1,"illegal view")},dom:[],rng:o},currentVotes:{decode:async(a,e,t)=>{if(T.eq(a,T.checkedBigNumberify("<builtin>",T.UInt_max,"3"))){const[,,,,,,,,n,,,,,,,,,,,]=e;return[...t],a=n.For,e=n.Against,T.add(a,e)}T.assert(!1,"illegal view")},dom:[],rng:n},info:{decode:async(a,e,t)=>{if(T.eq(a,T.checkedBigNumberify("<builtin>",T.UInt_max,"3"))){const[n,o,c,,,,,,,,r,i,d,s,l,,,,,]=e;return[...t],{admin:r,description:c,fee:i,founder:n,name:o,openTreasury:d,quorum:s,registerSelf:l}}T.assert(!1,"illegal view")},dom:[],rng:s},isMember:{decode:async(a,e,t)=>{var n,o,c,r,i,d,s,l,b,m,p,u,f,h,y,g,_,x,k;if(T.eq(a,T.checkedBigNumberify("<builtin>",T.UInt_max,"3")))return[n,o,c,r,i,d,s,l,b,m,p,u,f,h,y,g,_,x,k]=e,(async a=>{a=T.protect(I,a,null),a={None:0,Some:1}[T.protect(B,await N.viewMapRef(0,a),null)[0]];return T.eq(a,T.checkedBigNumberify("reach standard library:38:41:application",T.UInt_max,"1"))})(...t);T.assert(!1,"illegal view")},dom:[I],rng:c},myRank:{decode:async(a,e,t)=>{var n,o,c,r,i,d,s,l,b,m,p,u,f,h,y,g,_,x,k;if(T.eq(a,T.checkedBigNumberify("<builtin>",T.UInt_max,"3")))return[n,o,c,r,i,d,s,l,b,m,p,u,f,h,y,g,_,x,k]=e,a=[...t][0],a=T.protect(I,a,null),a=T.protect(B,await N.viewMapRef(0,a),null),e=[T.checkedBigNumberify("<builtin>",T.UInt_max,"0"),T.checkedBigNumberify("<builtin>",T.UInt_max,"0")],T.fromSome(a,e)[T.checkedBigNumberify("./dao/contracts/dao-blog.rsh:129:11:array",T.UInt_max,"0")];T.assert(!1,"illegal view")},dom:[I],rng:n}},views:{3:[I,a,e,t,n,t,o,r,d,n,I,n,c,n,c,o,n,c,n]}}}function _getMaps(a){var a=a.reachStdlib,e=a.T_Null,t=a.T_UInt,t=a.T_Tuple([t,t]),e=a.T_Data({None:e,Some:t});return{mapDataTy:a.T_Tuple([e])}}async function Founder(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for Founder expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for Founder expects to receive an interact object as its second argument."));const s=a._initialize(),l=s.stdlib;var i=l.T_Null,a=l.T_UInt,M=l.T_Tuple([a,a]),M=l.T_Data({None:i,Some:M}),C=l.T_Contract,D=l.T_Bytes(l.checkedBigNumberify("<builtin>",l.UInt_max,"256")),t=l.T_Bytes(l.checkedBigNumberify("<builtin>",l.UInt_max,"128")),n=l.T_Bool;const q=l.T_Tuple([a,i]);var R=l.T_Object({i:a,sign:n}),R=l.T_Tuple([D,R]),o=l.T_Tuple([]),z=l.T_Tuple([t]),c=l.T_Address,r=l.T_Tuple([c,a]),V=l.T_Struct([["admin",c],["registerSelf",n],["fee",a],["quorum",a],["openTreasury",n]]),r=l.T_Data({AllocateFunds:r,ChangeAdmin:V,EjectMember:c,None:i,Stop:i}),V=l.T_Tuple([r]),c=l.T_Data({Against:i,For:i}),r=l.T_Tuple([c]),J=l.T_Data({comment0_343:R,join0_343:o,leave0_343:o,post0_343:z,registerProposal0_343:V,voteProposal0_343:r}),d=M;const b=l.newMap({ctc:s,idx:0,isAPI:!1,ty:d});var c=l.protect(C,e.announcerCtc,"for Founder's interact field announcerCtc"),R=l.protect(D,e.description,"for Founder's interact field description"),o=l.protect(a,e.fee,"for Founder's interact field fee"),z=l.protect(t,e.name,"for Founder's interact field name"),V=l.protect(n,e.openTreasury,"for Founder's interact field openTreasury"),r=l.protect(a,e.quorum,"for Founder's interact field quorum"),M=l.protect(n,e.registerSelf,"for Founder's interact field registerSelf"),m=l.gt(l.UInt_max,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:98:22:decimal",l.UInt_max,"1000000000")),m=(l.assert(m,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:98:10:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:79:15:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:79:19:function exp)"],msg:"Invalid consensus state",who:"Founder"}),l.ge(r,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:75:18:decimal",l.UInt_max,"1"))),m=(l.assert(m,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:75:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:99:24:application call to "checkValidateQuorum" (defined at: ./dao/contracts/dao-blog.rsh:74:37:function exp)',"at ./dao/contracts/dao-blog.rsh:79:15:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:79:19:function exp)"],msg:"Quorum cannot be 0",who:"Founder"}),l.div(l.UInt_max,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:76:28:decimal",l.UInt_max,"10"))),m=l.lt(r,m),m=(l.assert(m,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:76:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:99:24:application call to "checkValidateQuorum" (defined at: ./dao/contracts/dao-blog.rsh:74:37:function exp)',"at ./dao/contracts/dao-blog.rsh:79:15:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:79:19:function exp)"],msg:"Quorum seems worryingly large",who:"Founder"}),await s.sendrecv({args:[z,R,M,r,V,o,c],evt_cnt:7,funcNum:0,lct:l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:102:11:dot",l.UInt_max,"0"),onlyIf:!0,out_tys:[t,D,n,a,n,a,C],pay:[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:102:11:decimal",l.UInt_max,"0"),[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};l.UInt_max;l.simMapDupe(t,0,b);var{data:[,,n,o,a,c,r],from:i}=e,d=(l.div(l.UInt_max,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:76:28:decimal",l.UInt_max,"10")),await s.getContractInfo(),[l.UInt_max,l.checkedBigNumberify("<builtin>",l.UInt_max,"0")]),d=(await l.simMapSet(t,0,i,d),[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:123:23:application",l.UInt_max,"0"),void t.txns.push({kind:"remote",obj:r,remote:{accs:[],apps:[],bills:l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:123:23:application",l.UInt_max,"0"),fees:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),pays:l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:123:23:application",l.UInt_max,"0"),toks:[]}})]),r=(await e.getOutput("internal","v2924",q,d))[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:123:23:application",l.UInt_max,"0")],e={admin:i,fee:c,openTreasury:a,quorum:o,registerSelf:n},d={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:["None",null],index:l.checkedBigNumberify("<builtin>",l.UInt_max,"0")},i=e;c=d,a=r;if(await!0){o=c.index,n=l.ge(o,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",l.UInt_max,"10"));let a;a=n?(e=l.mod(o,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",l.UInt_max,"10")),d=l.sub(o,e),l.div(d,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",l.UInt_max,"10"))):l.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",l.UInt_max,"1"),t.isHalt=!1}else{r=i.admin,c=l.sub(a,a);t.txns.push({kind:"from",to:r,tok:void 0}),l.le(await s.getBalance(),c)?l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:347:29:application",l.UInt_max,"0"):l.safeSub(await s.getBalance(),c);t.txns.push({kind:"from",to:r,tok:void 0}),t.txns.push({kind:"halt",tok:void 0}),t.isHalt=!0}return t},soloSend:!0,timeoutAt:void 0,tys:[t,D,n,a,n,a,C],waitIfNotPresent:!1})),{data:[,,z,R,M,r,,],time:V,from:o}=m,c=l.gt(l.UInt_max,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:111:20:decimal",l.UInt_max,"1000000000")),t=(l.assert(c,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:111:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],msg:"Invalid consensus state",who:"Founder"}),l.ge(R,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:75:18:decimal",l.UInt_max,"1"))),O=(l.assert(t,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:75:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:112:22:application call to "checkValidateQuorum" (defined at: ./dao/contracts/dao-blog.rsh:74:37:function exp)'],msg:"Quorum cannot be 0",who:"Founder"}),l.div(l.UInt_max,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:76:28:decimal",l.UInt_max,"10"))),D=l.lt(R,O),n=(l.assert(D,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:76:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:112:22:application call to "checkValidateQuorum" (defined at: ./dao/contracts/dao-blog.rsh:74:37:function exp)'],msg:"Quorum seems worryingly large",who:"Founder"}),await s.getContractInfo()),a=[l.UInt_max,l.checkedBigNumberify("<builtin>",l.UInt_max,"0")],C=(await l.mapSet(b,o,a),(await m.getOutput("internal","v2924",q,void 0))[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:123:23:application",l.UInt_max,"0")]),c=l.le(C,l.UInt_max),t=(l.assert(c,{at:"./dao/contracts/dao-blog.rsh:123:23:application",fs:[],msg:"assume <= UInt.max",who:"Founder"}),l.eq(l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),C)),D=(l.assert(t,{at:"./dao/contracts/dao-blog.rsh:123:23:application",fs:[],msg:"remote bill check",who:"Founder"}),l.protect(i,await e.done(n),{at:"./dao/contracts/dao-blog.rsh:124:24:application",fs:["at ./dao/contracts/dao-blog.rsh:124:24:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:124:24:function exp)",'at ./dao/contracts/dao-blog.rsh:124:24:application call to "liftedInteract" (defined at: ./dao/contracts/dao-blog.rsh:124:24:application)'],msg:"done",who:"Founder"}),{admin:o,fee:r,openTreasury:M,quorum:R,registerSelf:z}),p=["None",null],a={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:p,index:l.checkedBigNumberify("<builtin>",l.UInt_max,"0")};let u=D,f=!0,h=a,y=V,g=C,_=m;for(;await f;){var H,X=u.admin,G=u.fee,W=u.openTreasury,Z=u.quorum,Y=u.registerSelf,x=h.action,k=h.index,K=l.ge(k,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",l.UInt_max,"10"));let r;r=K?(H=l.mod(k,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",l.UInt_max,"10")),H=l.sub(k,H),l.div(H,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",l.UInt_max,"10"))):l.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",l.UInt_max,"1");var N=await s.recv({didSend:!1,evt_cnt:1,funcNum:2,out_tys:[J],timeoutAt:void 0,waitIfNotPresent:!1}),{data:[T],time:I,from:B}=N;switch(T[0]){case"comment0_343":var L=T[1],$=l.le(g,l.UInt_max),$=(l.assert($,{at:"./dao/contracts/dao-blog.rsh:203:50:dot",fs:[],msg:"assume <= UInt.max",who:"Founder"}),L[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:334:10:spread",l.UInt_max,"0")],L[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:334:10:spread",l.UInt_max,"1")],{None:0,Some:1}[l.protect(d,await l.mapRef(b,B),null)[0]]),L=l.eq($,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),$=(l.assert(L,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:335:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:338:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:338:13:function exp)"],msg:"Address is not a member",who:"Founder"}),await N.getOutput("comment","v3495",i,null),u),L=h,a0=g;u=$,f=!0,h=L,y=I,g=a0,_=N;continue;case"join0_343":T[1];l.assert(Y,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:231:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:231:28:function exp)","at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:231:28:function exp)","at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"An existing user has to add you to this DAO",who:"Founder"});var $=l.protect(d,await l.mapRef(b,B),null),L={None:0,Some:1}[$[0]],a0=l.eq(L,l.checkedBigNumberify("reach standard library:39:41:application",l.UInt_max,"0")),e0=(l.assert(a0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:231:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:231:28:function exp)","at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:231:28:function exp)","at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Address is already a member",who:"Founder"}),l.sub(l.UInt_max,g)),e0=l.lt(G,e0),e0=(l.assert(e0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:234:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:231:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:231:28:function exp)","at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:231:28:function exp)","at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Membership is at maximum capacity",who:"Founder"}),l.add(g,G)),t0=l.le(e0,l.UInt_max),t0=(l.assert(t0,{at:"./dao/contracts/dao-blog.rsh:203:50:dot",fs:[],msg:"assume <= UInt.max",who:"Founder"}),l.sub(l.UInt_max,e0)),t0=l.lt(G,t0),t0=(l.assert(t0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:234:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:239:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:239:13:function exp)"],msg:"Membership is at maximum capacity",who:"Founder"}),await N.getOutput("join","v4586",i,null),[r,l.checkedBigNumberify("<builtin>",l.UInt_max,"0")]),t0=(await l.mapSet(b,B,t0),u),n0=h;u=t0,f=!0,h=n0,y=I,g=e0,_=N;continue;case"leave0_343":T[1];var t0={None:0,Some:1}[l.protect(d,await l.mapRef(b,B),null)[0]],n0=l.eq(t0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),e0=(l.assert(n0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:249:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:248:29:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:248:29:function exp)","at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:248:29:function exp)","at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Address is not a member",who:"Founder"}),l.le(g,l.UInt_max)),o0=(l.assert(e0,{at:"./dao/contracts/dao-blog.rsh:203:50:dot",fs:[],msg:"assume <= UInt.max",who:"Founder"}),await N.getOutput("leave","v5665",i,null),await l.mapSet(b,B,void 0),u),c0=h,r0=g;u=o0,f=!0,h=c0,y=I,g=r0,_=N;continue;case"post0_343":var o0=T[1],c0=l.le(g,l.UInt_max),r0=(l.assert(c0,{at:"./dao/contracts/dao-blog.rsh:203:50:dot",fs:[],msg:"assume <= UInt.max",who:"Founder"}),o0[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:323:10:spread",l.UInt_max,"0")],{None:0,Some:1}[l.protect(d,await l.mapRef(b,B),null)[0]]),i0=l.eq(r0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),i0=(l.assert(i0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:324:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:326:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:326:13:function exp)"],msg:"Address is not a member",who:"Founder"}),await N.getOutput("post","v6745",i,null),u),d0=h,s0=g;u=i0,f=!0,h=d0,y=I,g=s0,_=N;continue;case"registerProposal0_343":{var i0=T[1],d0=l.le(g,l.UInt_max),A=(l.assert(d0,{at:"./dao/contracts/dao-blog.rsh:203:50:dot",fs:[],msg:"assume <= UInt.max",who:"Founder"}),i0[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:262:10:spread",l.UInt_max,"0")]);let a;a=K?(s0=l.mod(k,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",l.UInt_max,"10")),l0=l.sub(k,s0),l.div(l0,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",l.UInt_max,"10"))):l.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",l.UInt_max,"1");var l0=l.protect(d,await l.mapRef(b,B),null),b0=[l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),l.checkedBigNumberify("<builtin>",l.UInt_max,"0")],U=l.fromSome(l0,b0)[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:134:11:array",l.UInt_max,"0")],m0=l.ge(U,a),m0=(l.assert(m0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:135:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:263:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-blog.rsh:132:36:function exp)',"at ./dao/contracts/dao-blog.rsh:275:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:275:13:function exp)"],msg:"THIEF! SEIZE THEM!",who:"Founder"}),l.ge(U,r));l.assert(m0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:264:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:275:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:275:13:function exp)"],msg:"User is below Citizen Rank threshold",who:"Founder"});let e;switch(x[0]){case"AllocateFunds":var p0=x[1],u0=p0[l.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",l.UInt_max,"0")],p0=p0[l.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",l.UInt_max,"1")],p0=l.lt(p0,g),u0={None:0,Some:1}[l.protect(d,await l.mapRef(b,u0),null)[0]],u0=l.eq(u0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1"));e=W?p0:!!u0&&p0;break;case"ChangeAdmin":{var u0=x[1],p0=u0.admin,f0=u0.fee,h0=u0.quorum,w=l.protect(d,await l.mapRef(b,p0),null),y0=l.fromSome(w,b0)[l.checkedBigNumberify("./dao/contracts/shared.rsh:85:13:array",l.UInt_max,"0")],w={None:0,Some:1}[w[0]],w=l.eq(w,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),y0=l.gt(y0,r),w=!!w&&y0,y0=l.gt(h0,l.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",l.UInt_max,"0"));let a;a=!!y0&&l.lt(h0,O);y0=l.ge(f0,l.checkedBigNumberify("./dao/contracts/shared.rsh:88:34:decimal",l.UInt_max,"0")),h0=l.lt(f0,l.UInt_max),f0=!!w&&a;e=!!f0&&(!!y0&&h0);break}case"EjectMember":w=x[1],f0={None:0,Some:1}[l.protect(d,await l.mapRef(b,w),null)[0]],y0=l.eq(f0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),h0=l.addressEq(w,X);e=!!y0&&!h0;break;case"None":x[1];e=!1;break;case"Stop":x[1];e=!0}U=!e,m0=(l.assert(U,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:275:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:275:13:function exp)"],msg:"A Proposal is already active.",who:"Founder"}),l.sub(l.UInt_max,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:271:32:decimal",l.UInt_max,"1"))),U=l.lt(k,m0);l.assert(U,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:271:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:275:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:275:13:function exp)"],msg:"Governance limit reached",who:"Founder"});let t;switch(A[0]){case"AllocateFunds":var g0=A[1],_0=g0[l.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",l.UInt_max,"0")],g0=g0[l.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",l.UInt_max,"1")],g0=l.lt(g0,g),_0={None:0,Some:1}[l.protect(d,await l.mapRef(b,_0),null)[0]],_0=l.eq(_0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1"));t=W?g0:!!_0&&g0;break;case"ChangeAdmin":{var _0=A[1],g0=_0.admin,x0=_0.fee,k0=_0.quorum,v=l.protect(d,await l.mapRef(b,g0),null),N0=l.fromSome(v,b0)[l.checkedBigNumberify("./dao/contracts/shared.rsh:85:13:array",l.UInt_max,"0")],v={None:0,Some:1}[v[0]],v=l.eq(v,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),N0=l.gt(N0,r),v=!!v&&N0,N0=l.gt(k0,l.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",l.UInt_max,"0"));let a;a=!!N0&&l.lt(k0,O);N0=l.ge(x0,l.checkedBigNumberify("./dao/contracts/shared.rsh:88:34:decimal",l.UInt_max,"0")),k0=l.lt(x0,l.UInt_max),x0=!!v&&a;t=!!x0&&(!!N0&&k0);break}case"EjectMember":v=A[1],x0={None:0,Some:1}[l.protect(d,await l.mapRef(b,v),null)[0]],N0=l.eq(x0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),k0=l.addressEq(v,X);t=!!N0&&!k0;break;case"None":A[1];t=!1;break;case"Stop":A[1];t=!0}l.assert(t,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:275:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:275:13:function exp)"],msg:"Bad suggestion is bad. Apologize to everyone.",who:"Founder"});await N.getOutput("registerProposal","v7950",i,null);var m0=l.add(k,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:197:30:decimal",l.UInt_max,"1")),U={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:A,index:m0},m0=u,T0=g;u=m0,f=!0,h=U,y=I,g=T0,_=N;continue}case"voteProposal0_343":{var m0=T[1],U=l.le(g,l.UInt_max),I0=(l.assert(U,{at:"./dao/contracts/dao-blog.rsh:203:50:dot",fs:[],msg:"assume <= UInt.max",who:"Founder"}),m0[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:284:10:spread",l.UInt_max,"0")]);let a;a=K?(T0=l.mod(k,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",l.UInt_max,"10")),B0=l.sub(k,T0),l.div(B0,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",l.UInt_max,"10"))):l.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",l.UInt_max,"1");var B0=l.protect(d,await l.mapRef(b,B),null),A0=[l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),l.checkedBigNumberify("<builtin>",l.UInt_max,"0")],S=l.fromSome(B0,A0),E=S[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:134:11:array",l.UInt_max,"0")],S=S[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:134:11:array",l.UInt_max,"1")],P=l.ge(E,a),U0=(l.assert(P,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:135:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:285:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-blog.rsh:132:36:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"THIEF! SEIZE THEM!",who:"Founder"}),h.For),w0=h.Against;let e;switch(x[0]){case"AllocateFunds":var v0=x[1],S0=v0[l.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",l.UInt_max,"0")],v0=v0[l.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",l.UInt_max,"1")],v0=l.lt(v0,g),S0={None:0,Some:1}[l.protect(d,await l.mapRef(b,S0),null)[0]],S0=l.eq(S0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1"));e=W?v0:!!S0&&v0;break;case"ChangeAdmin":{var S0=x[1],v0=S0.admin,E0=S0.fee,P0=S0.quorum,j=l.protect(d,await l.mapRef(b,v0),null),j0=l.fromSome(j,A0)[l.checkedBigNumberify("./dao/contracts/shared.rsh:85:13:array",l.UInt_max,"0")],j={None:0,Some:1}[j[0]],j=l.eq(j,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),j0=l.gt(j0,r),j=!!j&&j0,j0=l.gt(P0,l.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",l.UInt_max,"0"));let a;a=!!j0&&l.lt(P0,O);j0=l.ge(E0,l.checkedBigNumberify("./dao/contracts/shared.rsh:88:34:decimal",l.UInt_max,"0")),P0=l.lt(E0,l.UInt_max),E0=!!j&&a;e=!!E0&&(!!j0&&P0);break}case"EjectMember":j=x[1],E0={None:0,Some:1}[l.protect(d,await l.mapRef(b,j),null)[0]],j0=l.eq(E0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),P0=l.addressEq(j,X);e=!!j0&&!P0;break;case"None":x[1];e=!1;break;case"Stop":x[1];e=!0}l.assert(e,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:287:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"No Proposal is currently active",who:"Founder"});l.gt(U0,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:292:17:decimal",l.UInt_max,"0"))&&(P=l.sub(l.UInt_max,w0),P=l.lt(U0,P),l.assert(P,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:293:14:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"Voting limit reached",who:"Founder"}));var P=l.gt(w0,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:295:21:decimal",l.UInt_max,"0")),P=(P&&(P=l.sub(l.UInt_max,U0),P=l.lt(w0,P),l.assert(P,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:296:14:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"Voting limit reached",who:"Founder"})),l.add(U0,w0)),P=l.lt(P,Z),P=(l.assert(P,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:299:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"Quorum reached",who:"Founder"}),l.lt(S,k));l.assert(P,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:302:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"Address has already voted in this session",who:"Founder"});let t;switch(I0[0]){case"Against":I0[1];var Q0=l.add(w0,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:306:40:decimal",l.UInt_max,"1"));t=[U0,Q0];break;case"For":I0[1];Q0=l.add(U0,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:305:27:decimal",l.UInt_max,"1"));t=[Q0,w0]}var S=t[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:304:13:array",l.UInt_max,"0")],P=t[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:304:13:array",l.UInt_max,"1")],Q=l.sub(l.UInt_max,P),Q=l.lt(S,Q),Q=(l.assert(Q,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:308:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"Voting limit reached (2)",who:"Founder"}),l.sub(l.UInt_max,S)),Q=l.lt(P,Q),Q=(l.assert(Q,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:309:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"Voting limit reached (2)",who:"Founder"}),await N.getOutput("voteProposal","v9175",i,null),l.lt(E,l.UInt_max));let n;n=Q?[l.add(E,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:316:45:decimal",l.UInt_max,"1")),k]:[E,k],await l.mapSet(b,B,n);Q=l.add(S,P),E=l.ge(Q,Z);let o;o=K?(Q=l.mod(k,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",l.UInt_max,"10")),Q=l.sub(k,Q),l.div(Q,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",l.UInt_max,"10"))):l.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",l.UInt_max,"1");let c;switch(x[0]){case"AllocateFunds":var F0=x[1],M0=F0[l.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",l.UInt_max,"0")],F0=F0[l.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",l.UInt_max,"1")],F0=l.lt(F0,g),M0={None:0,Some:1}[l.protect(d,await l.mapRef(b,M0),null)[0]],M0=l.eq(M0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1"));c=W?F0:!!M0&&F0;break;case"ChangeAdmin":{var M0=x[1],F0=M0.admin,C0=M0.fee,D0=M0.quorum,F=l.protect(d,await l.mapRef(b,F0),null),q0=l.fromSome(F,A0)[l.checkedBigNumberify("./dao/contracts/shared.rsh:85:13:array",l.UInt_max,"0")],F={None:0,Some:1}[F[0]],F=l.eq(F,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),q0=l.gt(q0,o),F=!!F&&q0,q0=l.gt(D0,l.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",l.UInt_max,"0"));let a;a=!!q0&&l.lt(D0,O);q0=l.ge(C0,l.checkedBigNumberify("./dao/contracts/shared.rsh:88:34:decimal",l.UInt_max,"0")),D0=l.lt(C0,l.UInt_max),C0=!!F&&a;c=!!C0&&(!!q0&&D0);break}case"EjectMember":F=x[1],C0={None:0,Some:1}[l.protect(d,await l.mapRef(b,F),null)[0]],q0=l.eq(C0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),D0=l.addressEq(F,X);c=!!q0&&!D0;break;case"None":x[1];c=!1;break;case"Stop":x[1];c=!0}if(E){Q=l.gt(S,P);if(!!c&&Q)switch(x[0]){case"AllocateFunds":var R0=x[1],R0=(R0[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:164:32:application",l.UInt_max,"0")],R0[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:164:32:application",l.UInt_max,"1")]),R0=l.sub(g,R0),z0=l.ge(R0,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:168:29:application",l.UInt_max,"0")),z0=(l.assert(z0,{at:"./dao/contracts/dao-blog.rsh:168:29:application",fs:["at ./dao/contracts/dao-blog.rsh:166:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:167:44:function exp)","at ./dao/contracts/dao-blog.rsh:166:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:166:28:function exp)",'at ./dao/contracts/dao-blog.rsh:318:28:application call to "doProposal" (defined at: ./dao/contracts/dao-blog.rsh:146:51:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"assume >= 0",who:"Founder"}),{Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:p,index:k}),V0=u;u=V0,f=!0,h=z0,y=I,g=R0,_=N;continue;case"ChangeAdmin":var V0=x[1],z0=V0.admin,R0=V0.registerSelf,J0=V0.fee,O0=V0.quorum,H0=V0.openTreasury,X0={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:p,index:k},G0=g;u={admin:z0,fee:J0,openTreasury:H0,quorum:O0,registerSelf:R0},f=!0,h=X0,y=I,g=G0,_=N;continue;case"EjectMember":J0=x[1],H0=(await l.mapSet(b,J0,void 0),{Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:p,index:k}),O0=u,X0=g;u=O0,f=!0,h=H0,y=I,g=X0,_=N;continue;case"None":x[1];var G0={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:p,index:k},W0=u,Z0=g;u=W0,f=!0,h=G0,y=I,g=Z0,_=N;continue;case"Stop":x[1];var W0=(await N.getOutput("internal","v9722",q,void 0))[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:182:32:application",l.UInt_max,"0")],Z0=l.add(g,W0),Y0=l.le(Z0,l.UInt_max),Y0=(l.assert(Y0,{at:"./dao/contracts/dao-blog.rsh:182:32:application",fs:["at ./dao/contracts/dao-blog.rsh:166:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:181:20:function exp)","at ./dao/contracts/dao-blog.rsh:166:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:166:28:function exp)",'at ./dao/contracts/dao-blog.rsh:318:28:application call to "doProposal" (defined at: ./dao/contracts/dao-blog.rsh:146:51:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"assume <= UInt.max",who:"Founder"}),l.eq(l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),W0)),Y0=(l.assert(Y0,{at:"./dao/contracts/dao-blog.rsh:182:32:application",fs:["at ./dao/contracts/dao-blog.rsh:166:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:181:20:function exp)","at ./dao/contracts/dao-blog.rsh:166:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:166:28:function exp)",'at ./dao/contracts/dao-blog.rsh:318:28:application call to "doProposal" (defined at: ./dao/contracts/dao-blog.rsh:146:51:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"remote bill check",who:"Founder"}),{Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:p,index:k}),K0=u;u=K0,f=!1,h=Y0,y=I,g=Z0,_=N;continue}else if(Q)switch(x[0]){case"AllocateFunds":x[1];var L0={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:p,index:k},$0=u,a1=g;u=$0,f=!0,h=L0,y=I,g=a1,_=N;continue;case"ChangeAdmin":x[1];$0={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:p,index:k},L0=u,a1=g;u=L0,f=!0,h=$0,y=I,g=a1,_=N;continue;case"EjectMember":x[1];var e1={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:p,index:k},t1=u,n1=g;u=t1,f=!0,h=e1,y=I,g=n1,_=N;continue;case"None":x[1];t1={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:p,index:k},e1=u,n1=g;u=e1,f=!0,h=t1,y=I,g=n1,_=N;continue;case"Stop":x[1];var o1={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:p,index:k},c1=u,r1=g;u=c1,f=!0,h=o1,y=I,g=r1,_=N;continue}else switch(x[0]){case"AllocateFunds":x[1];var i1={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:p,index:k},d1=u,s1=g;u=d1,f=!0,h=i1,y=I,g=s1,_=N;continue;case"ChangeAdmin":x[1];d1={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:p,index:k},i1=u,s1=g;u=i1,f=!0,h=d1,y=I,g=s1,_=N;continue;case"EjectMember":x[1];var l1={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:p,index:k},b1=u,m1=g;u=b1,f=!0,h=l1,y=I,g=m1,_=N;continue;case"None":x[1];b1={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:p,index:k},l1=u,m1=g;u=l1,f=!0,h=b1,y=I,g=m1,_=N;continue;case"Stop":x[1];var p1={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:p,index:k},u1=u,f1=g;u=u1,f=!0,h=p1,y=I,g=f1,_=N;continue}}else{E=u,Q=g;u=E,f=!0,h={Against:P,For:S,action:x,index:k},y=I,g=Q,_=N}}}}u.admin;c=l.sub(g,g),t=l.ge(c,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:346:25:application",l.UInt_max,"0")),l.assert(t,{at:"./dao/contracts/dao-blog.rsh:346:25:application",fs:[],msg:"assume >= 0",who:"Founder"}),e=l.le(await s.getBalance(),c)?l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:347:29:application",l.UInt_max,"0"):l.safeSub(await s.getBalance(),c),n=l.safeAdd(e,c),o=l.sub(n,e),r=l.ge(o,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:347:35:application",l.UInt_max,"0"));l.assert(r,{at:"./dao/contracts/dao-blog.rsh:347:35:application",fs:[],msg:"assume >= 0",who:"Founder"})}async function _comment3(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for _comment3 expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for _comment3 expects to receive an interact object as its second argument."));a=a._initialize();const i=a.stdlib,d=i.T_Null;var t=i.T_UInt,n=i.T_Tuple([t,t]),n=i.T_Data({None:d,Some:n}),o=i.T_Address,c=i.T_Bytes(i.checkedBigNumberify("<builtin>",i.UInt_max,"128")),r=i.T_Bytes(i.checkedBigNumberify("<builtin>",i.UInt_max,"256")),s=i.T_Contract,l=i.T_Tuple([o,t]),b=i.T_Bool,m=i.T_Struct([["admin",o],["registerSelf",b],["fee",t],["quorum",t],["openTreasury",b]]),l=i.T_Data({AllocateFunds:l,ChangeAdmin:m,EjectMember:o,None:d,Stop:d}),m=i.T_Object({admin:o,fee:t,openTreasury:b,quorum:t,registerSelf:b}),p=i.T_Object({Against:t,For:t,action:l,index:t}),u=i.T_Object({i:t,sign:b}),u=i.T_Tuple([r,u]),f=i.T_Tuple([]),h=i.T_Tuple([c]),y=i.T_Tuple([l]),g=i.T_Data({Against:d,For:d}),g=i.T_Tuple([g]),f=i.T_Data({comment0_343:u,join0_343:f,leave0_343:f,post0_343:h,registerProposal0_343:y,voteProposal0_343:g});const _=n,x=i.newMap({ctc:a,idx:0,isAPI:!0,ty:_}),[k,N,T,I,B,A,U,w,v,S,E,M,C,D,q,R,z,V,J]=await a.getState(i.checkedBigNumberify("<builtin>",i.UInt_max,"3"),[o,c,r,s,t,s,l,m,p,t,o,t,b,t,b,l,t,b,t]);var h=a.selfAddress(),y=i.protect(u,await e.in(),{at:"./dao/contracts/dao-blog.rsh:1:23:application",fs:["at ./dao/contracts/dao-blog.rsh:334:55:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:334:55:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runcomment0_343" (defined at: ./dao/contracts/dao-blog.rsh:334:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"in",who:"comment"}),g={None:0,Some:1}[i.protect(_,await i.mapRef(x,h),null)[0]],n=i.eq(g,i.checkedBigNumberify("reach standard library:38:41:application",i.UInt_max,"1")),u=(i.assert(n,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:335:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:334:55:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:334:55:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runcomment0_343" (defined at: ./dao/contracts/dao-blog.rsh:334:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Address is not a member",who:"comment"}),["comment0_343",y]),P=await a.sendrecv({args:[k,N,T,I,B,A,U,w,v,S,E,M,C,D,q,R,z,V,J,u],evt_cnt:1,funcNum:2,lct:i.checkedBigNumberify("<builtin>",i.UInt_max,"0"),onlyIf:!0,out_tys:[f],pay:[i.checkedBigNumberify("./dao/contracts/dao-blog.rsh:334:10:decimal",i.UInt_max,"0"),[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};i.UInt_max;i.simMapDupe(t,0,x);var{data:[n],from:o}=e;switch(n[0]){case"comment0_343":{var c=n[1],c=(t.txns.push({kind:"api",who:"comment"}),c[i.checkedBigNumberify("./dao/contracts/dao-blog.rsh:334:10:spread",i.UInt_max,"0")],c[i.checkedBigNumberify("./dao/contracts/dao-blog.rsh:334:10:spread",i.UInt_max,"1")],i.protect(_,await i.simMapRef(t,0,o),null),await e.getOutput("comment","v3495",d,null),w,v,S,w.admin,w.fee,w.openTreasury,w.quorum,w.registerSelf,v.action,v.index),r=i.ge(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",i.UInt_max,"10"));let a;a=r?(r=i.mod(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",i.UInt_max,"10")),c=i.sub(c,r),i.div(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",i.UInt_max,"10"))):i.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",i.UInt_max,"1"),t.isHalt=!1;break}case"join0_343":n[1];break;case"leave0_343":n[1];break;case"post0_343":n[1];break;case"registerProposal0_343":n[1];break;case"voteProposal0_343":n[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[o,c,r,s,t,s,l,m,p,t,o,t,b,t,b,l,t,b,t,f],waitIfNotPresent:!1}),{data:[j],didSend:O,from:H}=P;switch(j[0]){case"comment0_343":{var Q=j[1],F=i.le(S,i.UInt_max),F=(i.assert(F,{at:"./dao/contracts/dao-blog.rsh:203:50:dot",fs:[],msg:"assume <= UInt.max",who:"comment"}),Q[i.checkedBigNumberify("./dao/contracts/dao-blog.rsh:334:10:spread",i.UInt_max,"0")],Q[i.checkedBigNumberify("./dao/contracts/dao-blog.rsh:334:10:spread",i.UInt_max,"1")],{None:0,Some:1}[i.protect(_,await i.mapRef(x,H),null)[0]]),F=i.eq(F,i.checkedBigNumberify("reach standard library:38:41:application",i.UInt_max,"1")),F=(i.assert(F,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:335:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:338:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:338:13:function exp)"],msg:"Address is not a member",who:"comment"}),await P.getOutput("comment","v3495",d,null)),Q=(O&&i.protect(d,await e.out(Q,F),{at:"./dao/contracts/dao-blog.rsh:334:11:application",fs:["at ./dao/contracts/dao-blog.rsh:334:11:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:334:11:function exp)",'at ./dao/contracts/dao-blog.rsh:339:12:application call to "k" (defined at: ./dao/contracts/dao-blog.rsh:338:13:function exp)',"at ./dao/contracts/dao-blog.rsh:338:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:338:13:function exp)"],msg:"out",who:"comment"}),w,v,S,w.admin,w.fee,w.openTreasury,w.quorum,w.registerSelf,v.action,v.index),F=i.ge(Q,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",i.UInt_max,"10"));let a;return void(a=F?(F=i.mod(Q,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",i.UInt_max,"10")),Q=i.sub(Q,F),i.div(Q,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",i.UInt_max,"10"))):i.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",i.UInt_max,"1"))}case"join0_343":j[1];return;case"leave0_343":j[1];return;case"post0_343":j[1];return;case"registerProposal0_343":j[1];return;case"voteProposal0_343":j[1]}}async function _join3(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for _join3 expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for _join3 expects to receive an interact object as its second argument."));a=a._initialize();const i=a.stdlib,d=i.T_Null;var t=i.T_UInt,n=i.T_Tuple([t,t]),n=i.T_Data({None:d,Some:n}),o=i.T_Address,c=i.T_Bytes(i.checkedBigNumberify("<builtin>",i.UInt_max,"128")),r=i.T_Bytes(i.checkedBigNumberify("<builtin>",i.UInt_max,"256")),s=i.T_Contract,l=i.T_Tuple([o,t]),b=i.T_Bool,m=i.T_Struct([["admin",o],["registerSelf",b],["fee",t],["quorum",t],["openTreasury",b]]),l=i.T_Data({AllocateFunds:l,ChangeAdmin:m,EjectMember:o,None:d,Stop:d}),m=i.T_Object({admin:o,fee:t,openTreasury:b,quorum:t,registerSelf:b}),p=i.T_Object({Against:t,For:t,action:l,index:t}),u=i.T_Tuple([]),f=i.T_Object({i:t,sign:b}),f=i.T_Tuple([r,f]),h=i.T_Tuple([c]),y=i.T_Tuple([l]),g=i.T_Data({Against:d,For:d}),g=i.T_Tuple([g]),f=i.T_Data({comment0_343:f,join0_343:u,leave0_343:u,post0_343:h,registerProposal0_343:y,voteProposal0_343:g});const _=n,x=i.newMap({ctc:a,idx:0,isAPI:!0,ty:_}),[k,N,T,M,C,D,q,I,B,A,R,U,z,V,w,J,O,H,v]=await a.getState(i.checkedBigNumberify("<builtin>",i.UInt_max,"3"),[o,c,r,s,t,s,l,m,p,t,o,t,b,t,b,l,t,b,t]);var h=a.selfAddress(),y=i.protect(u,await e.in(),{at:"./dao/contracts/dao-blog.rsh:1:23:application",fs:["at ./dao/contracts/dao-blog.rsh:231:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:231:28:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runjoin0_343" (defined at: ./dao/contracts/dao-blog.rsh:231:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"in",who:"join"}),g=(i.assert(w,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:231:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:231:28:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runjoin0_343" (defined at: ./dao/contracts/dao-blog.rsh:231:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"An existing user has to add you to this DAO",who:"join"}),i.protect(_,await i.mapRef(x,h),null)),n={None:0,Some:1}[g[0]],u=i.eq(n,i.checkedBigNumberify("reach standard library:39:41:application",i.UInt_max,"0")),h=(i.assert(u,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:231:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:231:28:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runjoin0_343" (defined at: ./dao/contracts/dao-blog.rsh:231:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Address is already a member",who:"join"}),i.sub(i.UInt_max,A)),g=i.lt(U,h),n=(i.assert(g,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:234:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:231:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:231:28:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runjoin0_343" (defined at: ./dao/contracts/dao-blog.rsh:231:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Membership is at maximum capacity",who:"join"}),["join0_343",y]),S=await a.sendrecv({args:[k,N,T,M,C,D,q,I,B,A,R,U,z,V,w,J,O,H,v,n],evt_cnt:1,funcNum:2,lct:i.checkedBigNumberify("<builtin>",i.UInt_max,"0"),onlyIf:!0,out_tys:[f],pay:[U,[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};i.UInt_max;i.simMapDupe(t,0,x);var{data:[n],from:o}=e;switch(n[0]){case"comment0_343":n[1];break;case"join0_343":{n[1],t.txns.push({kind:"api",who:"join"}),i.protect(_,await i.simMapRef(t,0,o),null),i.add(A,U),t.txns.push({amt:U,kind:"to",tok:void 0}),await e.getOutput("join","v4586",d,null);var c=[v,i.checkedBigNumberify("<builtin>",i.UInt_max,"0")],c=(await i.simMapSet(t,0,o,c),I,B,I.admin,I.fee,I.openTreasury,I.quorum,I.registerSelf,B.action,B.index),r=i.ge(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",i.UInt_max,"10"));let a;a=r?(r=i.mod(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",i.UInt_max,"10")),c=i.sub(c,r),i.div(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",i.UInt_max,"10"))):i.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",i.UInt_max,"1"),t.isHalt=!1;break}case"leave0_343":n[1];break;case"post0_343":n[1];break;case"registerProposal0_343":n[1];break;case"voteProposal0_343":n[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[o,c,r,s,t,s,l,m,p,t,o,t,b,t,b,l,t,b,t,f],waitIfNotPresent:!1}),{data:[E],didSend:X,from:P}=S;switch(E[0]){case"comment0_343":E[1];return;case"join0_343":{var j=E[1],Q=(i.assert(w,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:231:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:231:28:function exp)","at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:231:28:function exp)","at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"An existing user has to add you to this DAO",who:"join"}),i.protect(_,await i.mapRef(x,P),null)),Q={None:0,Some:1}[Q[0]],Q=i.eq(Q,i.checkedBigNumberify("reach standard library:39:41:application",i.UInt_max,"0")),Q=(i.assert(Q,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:231:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:231:28:function exp)","at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:231:28:function exp)","at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Address is already a member",who:"join"}),i.sub(i.UInt_max,A)),Q=i.lt(U,Q),Q=(i.assert(Q,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:234:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:231:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:231:28:function exp)","at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:231:28:function exp)","at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Membership is at maximum capacity",who:"join"}),i.add(A,U)),F=i.le(Q,i.UInt_max),F=(i.assert(F,{at:"./dao/contracts/dao-blog.rsh:203:50:dot",fs:[],msg:"assume <= UInt.max",who:"join"}),i.sub(i.UInt_max,Q)),Q=i.lt(U,F),F=(i.assert(Q,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:234:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:239:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:239:13:function exp)"],msg:"Membership is at maximum capacity",who:"join"}),await S.getOutput("join","v4586",d,null)),Q=(X&&i.protect(d,await e.out(j,F),{at:"./dao/contracts/dao-blog.rsh:231:11:application",fs:["at ./dao/contracts/dao-blog.rsh:231:11:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:231:11:function exp)",'at ./dao/contracts/dao-blog.rsh:240:12:application call to "k" (defined at: ./dao/contracts/dao-blog.rsh:239:13:function exp)',"at ./dao/contracts/dao-blog.rsh:239:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:239:13:function exp)"],msg:"out",who:"join"}),[v,i.checkedBigNumberify("<builtin>",i.UInt_max,"0")]),j=(await i.mapSet(x,P,Q),I,B,I.admin,I.fee,I.openTreasury,I.quorum,I.registerSelf,B.action,B.index),F=i.ge(j,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",i.UInt_max,"10"));let a;return void(a=F?(Q=i.mod(j,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",i.UInt_max,"10")),F=i.sub(j,Q),i.div(F,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",i.UInt_max,"10"))):i.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",i.UInt_max,"1"))}case"leave0_343":E[1];return;case"post0_343":E[1];return;case"registerProposal0_343":E[1];return;case"voteProposal0_343":E[1]}}async function _leave3(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for _leave3 expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for _leave3 expects to receive an interact object as its second argument."));a=a._initialize();const i=a.stdlib,d=i.T_Null;var t=i.T_UInt,n=i.T_Tuple([t,t]),n=i.T_Data({None:d,Some:n}),o=i.T_Address,c=i.T_Bytes(i.checkedBigNumberify("<builtin>",i.UInt_max,"128")),r=i.T_Bytes(i.checkedBigNumberify("<builtin>",i.UInt_max,"256")),s=i.T_Contract,l=i.T_Tuple([o,t]),b=i.T_Bool,m=i.T_Struct([["admin",o],["registerSelf",b],["fee",t],["quorum",t],["openTreasury",b]]),l=i.T_Data({AllocateFunds:l,ChangeAdmin:m,EjectMember:o,None:d,Stop:d}),m=i.T_Object({admin:o,fee:t,openTreasury:b,quorum:t,registerSelf:b}),p=i.T_Object({Against:t,For:t,action:l,index:t}),u=i.T_Tuple([]),f=i.T_Object({i:t,sign:b}),f=i.T_Tuple([r,f]),h=i.T_Tuple([c]),y=i.T_Tuple([l]),g=i.T_Data({Against:d,For:d}),g=i.T_Tuple([g]),f=i.T_Data({comment0_343:f,join0_343:u,leave0_343:u,post0_343:h,registerProposal0_343:y,voteProposal0_343:g});const _=n,x=i.newMap({ctc:a,idx:0,isAPI:!0,ty:_}),[k,N,T,I,B,A,U,w,v,S,M,C,D,q,R,z,V,J,O]=await a.getState(i.checkedBigNumberify("<builtin>",i.UInt_max,"3"),[o,c,r,s,t,s,l,m,p,t,o,t,b,t,b,l,t,b,t]);var h=a.selfAddress(),y=i.protect(u,await e.in(),{at:"./dao/contracts/dao-blog.rsh:1:23:application",fs:["at ./dao/contracts/dao-blog.rsh:248:29:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:248:29:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runleave0_343" (defined at: ./dao/contracts/dao-blog.rsh:248:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"in",who:"leave"}),g={None:0,Some:1}[i.protect(_,await i.mapRef(x,h),null)[0]],n=i.eq(g,i.checkedBigNumberify("reach standard library:38:41:application",i.UInt_max,"1")),u=(i.assert(n,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:249:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:248:29:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:248:29:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runleave0_343" (defined at: ./dao/contracts/dao-blog.rsh:248:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Address is not a member",who:"leave"}),["leave0_343",y]),E=await a.sendrecv({args:[k,N,T,I,B,A,U,w,v,S,M,C,D,q,R,z,V,J,O,u],evt_cnt:1,funcNum:2,lct:i.checkedBigNumberify("<builtin>",i.UInt_max,"0"),onlyIf:!0,out_tys:[f],pay:[i.checkedBigNumberify("./dao/contracts/dao-blog.rsh:251:9:decimal",i.UInt_max,"0"),[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};i.UInt_max;i.simMapDupe(t,0,x);var{data:[n],from:o}=e;switch(n[0]){case"comment0_343":n[1];break;case"join0_343":n[1];break;case"leave0_343":{n[1],t.txns.push({kind:"api",who:"leave"}),i.protect(_,await i.simMapRef(t,0,o),null),await e.getOutput("leave","v5665",d,null),await i.simMapSet(t,0,o,void 0),w,v,S,w.admin,w.fee,w.openTreasury,w.quorum,w.registerSelf,v.action;var c=v.index,r=i.ge(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",i.UInt_max,"10"));let a;a=r?(r=i.mod(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",i.UInt_max,"10")),c=i.sub(c,r),i.div(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",i.UInt_max,"10"))):i.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",i.UInt_max,"1"),t.isHalt=!1;break}case"post0_343":n[1];break;case"registerProposal0_343":n[1];break;case"voteProposal0_343":n[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[o,c,r,s,t,s,l,m,p,t,o,t,b,t,b,l,t,b,t,f],waitIfNotPresent:!1}),{data:[P],didSend:H,from:j}=E;switch(P[0]){case"comment0_343":P[1];return;case"join0_343":P[1];return;case"leave0_343":{var Q=P[1],F={None:0,Some:1}[i.protect(_,await i.mapRef(x,j),null)[0]],F=i.eq(F,i.checkedBigNumberify("reach standard library:38:41:application",i.UInt_max,"1")),F=(i.assert(F,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:249:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:248:29:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:248:29:function exp)","at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:248:29:function exp)","at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Address is not a member",who:"leave"}),i.le(S,i.UInt_max)),F=(i.assert(F,{at:"./dao/contracts/dao-blog.rsh:203:50:dot",fs:[],msg:"assume <= UInt.max",who:"leave"}),await E.getOutput("leave","v5665",d,null)),Q=(H&&i.protect(d,await e.out(Q,F),{at:"./dao/contracts/dao-blog.rsh:248:11:application",fs:["at ./dao/contracts/dao-blog.rsh:248:11:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:248:11:function exp)",'at ./dao/contracts/dao-blog.rsh:254:12:application call to "k" (defined at: ./dao/contracts/dao-blog.rsh:253:13:function exp)',"at ./dao/contracts/dao-blog.rsh:253:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:253:13:function exp)"],msg:"out",who:"leave"}),await i.mapSet(x,j,void 0),w,v,S,w.admin,w.fee,w.openTreasury,w.quorum,w.registerSelf,v.action,v.index),F=i.ge(Q,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",i.UInt_max,"10"));let a;return void(a=F?(F=i.mod(Q,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",i.UInt_max,"10")),Q=i.sub(Q,F),i.div(Q,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",i.UInt_max,"10"))):i.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",i.UInt_max,"1"))}case"post0_343":P[1];return;case"registerProposal0_343":P[1];return;case"voteProposal0_343":P[1]}}async function _post3(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for _post3 expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for _post3 expects to receive an interact object as its second argument."));a=a._initialize();const i=a.stdlib,d=i.T_Null;var t=i.T_UInt,n=i.T_Tuple([t,t]),n=i.T_Data({None:d,Some:n}),o=i.T_Address,c=i.T_Bytes(i.checkedBigNumberify("<builtin>",i.UInt_max,"128")),r=i.T_Bytes(i.checkedBigNumberify("<builtin>",i.UInt_max,"256")),s=i.T_Contract,l=i.T_Tuple([o,t]),b=i.T_Bool,m=i.T_Struct([["admin",o],["registerSelf",b],["fee",t],["quorum",t],["openTreasury",b]]),l=i.T_Data({AllocateFunds:l,ChangeAdmin:m,EjectMember:o,None:d,Stop:d}),m=i.T_Object({admin:o,fee:t,openTreasury:b,quorum:t,registerSelf:b}),p=i.T_Object({Against:t,For:t,action:l,index:t}),u=i.T_Tuple([c]),f=i.T_Object({i:t,sign:b}),f=i.T_Tuple([r,f]),h=i.T_Tuple([]),y=i.T_Tuple([l]),g=i.T_Data({Against:d,For:d}),g=i.T_Tuple([g]),f=i.T_Data({comment0_343:f,join0_343:h,leave0_343:h,post0_343:u,registerProposal0_343:y,voteProposal0_343:g});const _=n,x=i.newMap({ctc:a,idx:0,isAPI:!0,ty:_}),[k,N,T,I,B,A,U,w,v,S,E,M,C,D,q,R,z,V,J]=await a.getState(i.checkedBigNumberify("<builtin>",i.UInt_max,"3"),[o,c,r,s,t,s,l,m,p,t,o,t,b,t,b,l,t,b,t]);var h=a.selfAddress(),y=i.protect(u,await e.in(),{at:"./dao/contracts/dao-blog.rsh:1:23:application",fs:["at ./dao/contracts/dao-blog.rsh:323:32:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:323:32:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runpost0_343" (defined at: ./dao/contracts/dao-blog.rsh:323:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"in",who:"post"}),g={None:0,Some:1}[i.protect(_,await i.mapRef(x,h),null)[0]],n=i.eq(g,i.checkedBigNumberify("reach standard library:38:41:application",i.UInt_max,"1")),u=(i.assert(n,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:324:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:323:32:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:323:32:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runpost0_343" (defined at: ./dao/contracts/dao-blog.rsh:323:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Address is not a member",who:"post"}),["post0_343",y]),P=await a.sendrecv({args:[k,N,T,I,B,A,U,w,v,S,E,M,C,D,q,R,z,V,J,u],evt_cnt:1,funcNum:2,lct:i.checkedBigNumberify("<builtin>",i.UInt_max,"0"),onlyIf:!0,out_tys:[f],pay:[i.checkedBigNumberify("./dao/contracts/dao-blog.rsh:323:10:decimal",i.UInt_max,"0"),[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};i.UInt_max;i.simMapDupe(t,0,x);var{data:[n],from:o}=e;switch(n[0]){case"comment0_343":n[1];break;case"join0_343":n[1];break;case"leave0_343":n[1];break;case"post0_343":{var c=n[1],c=(t.txns.push({kind:"api",who:"post"}),c[i.checkedBigNumberify("./dao/contracts/dao-blog.rsh:323:10:spread",i.UInt_max,"0")],i.protect(_,await i.simMapRef(t,0,o),null),await e.getOutput("post","v6745",d,null),w,v,S,w.admin,w.fee,w.openTreasury,w.quorum,w.registerSelf,v.action,v.index),r=i.ge(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",i.UInt_max,"10"));let a;a=r?(r=i.mod(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",i.UInt_max,"10")),c=i.sub(c,r),i.div(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",i.UInt_max,"10"))):i.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",i.UInt_max,"1"),t.isHalt=!1;break}case"registerProposal0_343":n[1];break;case"voteProposal0_343":n[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[o,c,r,s,t,s,l,m,p,t,o,t,b,t,b,l,t,b,t,f],waitIfNotPresent:!1}),{data:[j],didSend:O,from:H}=P;switch(j[0]){case"comment0_343":j[1];return;case"join0_343":j[1];return;case"leave0_343":j[1];return;case"post0_343":{var Q=j[1],F=i.le(S,i.UInt_max),F=(i.assert(F,{at:"./dao/contracts/dao-blog.rsh:203:50:dot",fs:[],msg:"assume <= UInt.max",who:"post"}),Q[i.checkedBigNumberify("./dao/contracts/dao-blog.rsh:323:10:spread",i.UInt_max,"0")],{None:0,Some:1}[i.protect(_,await i.mapRef(x,H),null)[0]]),F=i.eq(F,i.checkedBigNumberify("reach standard library:38:41:application",i.UInt_max,"1")),F=(i.assert(F,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:324:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:326:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:326:13:function exp)"],msg:"Address is not a member",who:"post"}),await P.getOutput("post","v6745",d,null)),Q=(O&&i.protect(d,await e.out(Q,F),{at:"./dao/contracts/dao-blog.rsh:323:11:application",fs:["at ./dao/contracts/dao-blog.rsh:323:11:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:323:11:function exp)",'at ./dao/contracts/dao-blog.rsh:327:12:application call to "k" (defined at: ./dao/contracts/dao-blog.rsh:326:13:function exp)',"at ./dao/contracts/dao-blog.rsh:326:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:326:13:function exp)"],msg:"out",who:"post"}),w,v,S,w.admin,w.fee,w.openTreasury,w.quorum,w.registerSelf,v.action,v.index),F=i.ge(Q,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",i.UInt_max,"10"));let a;return void(a=F?(F=i.mod(Q,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",i.UInt_max,"10")),Q=i.sub(Q,F),i.div(Q,i.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",i.UInt_max,"10"))):i.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",i.UInt_max,"1"))}case"registerProposal0_343":j[1];return;case"voteProposal0_343":j[1]}}async function _registerProposal3(a,M){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for _registerProposal3 expects to receive a contract as its first argument."));if("object"!=typeof M)return Promise.reject(new Error("The backend for _registerProposal3 expects to receive an interact object as its second argument."));a=a._initialize();const l=a.stdlib,b=l.T_Null;var e=l.T_UInt,t=l.T_Tuple([e,e]),t=l.T_Data({None:b,Some:t}),n=l.T_Address,C=l.T_Bytes(l.checkedBigNumberify("<builtin>",l.UInt_max,"128")),D=l.T_Bytes(l.checkedBigNumberify("<builtin>",l.UInt_max,"256")),q=l.T_Contract,o=l.T_Tuple([n,e]),c=l.T_Bool,R=l.T_Struct([["admin",n],["registerSelf",c],["fee",e],["quorum",e],["openTreasury",c]]),o=l.T_Data({AllocateFunds:o,ChangeAdmin:R,EjectMember:n,None:b,Stop:b}),R=l.T_Object({admin:n,fee:e,openTreasury:c,quorum:e,registerSelf:c}),z=l.T_Object({Against:e,For:e,action:o,index:e}),V=l.T_Tuple([o]),J=l.T_Object({i:e,sign:c}),J=l.T_Tuple([D,J]),O=l.T_Tuple([]),H=l.T_Tuple([C]),r=l.T_Data({Against:b,For:b}),r=l.T_Tuple([r]),J=l.T_Data({comment0_343:J,join0_343:O,leave0_343:O,post0_343:H,registerProposal0_343:V,voteProposal0_343:r});const m=t,p=l.newMap({ctc:a,idx:0,isAPI:!0,ty:m}),[X,G,W,Z,Y,K,L,u,$,f,a0,e0,t0,n0,o0,h,y,c0,i]=await a.getState(l.checkedBigNumberify("<builtin>",l.UInt_max,"3"),[n,C,D,q,e,q,o,R,z,e,n,e,c,e,c,o,e,c,e]);var O=a.selfAddress(),H=l.protect(V,await M.in(),{at:"./dao/contracts/dao-blog.rsh:1:23:application",fs:["at ./dao/contracts/dao-blog.rsh:262:44:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:262:44:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runregisterProposal0_343" (defined at: ./dao/contracts/dao-blog.rsh:262:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"in",who:"registerProposal"}),d=H[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:1:23:application",l.UInt_max,"0")];let r0;r0=c0?(r=l.mod(y,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",l.UInt_max,"10")),t=l.sub(y,r),l.div(t,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",l.UInt_max,"10"))):l.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",l.UInt_max,"1");var V=l.protect(m,await l.mapRef(p,O),null),i0=[l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),l.checkedBigNumberify("<builtin>",l.UInt_max,"0")],r=l.fromSome(V,i0)[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:134:11:array",l.UInt_max,"0")],t=l.ge(r,r0),O=(l.assert(t,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:135:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:263:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-blog.rsh:132:36:function exp)',"at ./dao/contracts/dao-blog.rsh:262:44:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:262:44:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runregisterProposal0_343" (defined at: ./dao/contracts/dao-blog.rsh:262:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"THIEF! SEIZE THEM!",who:"registerProposal"}),l.ge(r,i));l.assert(O,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:264:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:262:44:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:262:44:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runregisterProposal0_343" (defined at: ./dao/contracts/dao-blog.rsh:262:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"User is below Citizen Rank threshold",who:"registerProposal"});let s;switch(h[0]){case"AllocateFunds":var g=h[1],_=g[l.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",l.UInt_max,"0")],g=g[l.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",l.UInt_max,"1")],g=l.lt(g,f),_={None:0,Some:1}[l.protect(m,await l.mapRef(p,_),null)[0]],_=l.eq(_,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1"));s=t0?g:!!_&&g;break;case"ChangeAdmin":{var _=h[1],g=_.admin,x=_.fee,_=_.quorum,g=l.protect(m,await l.mapRef(p,g),null),k=l.fromSome(g,i0)[l.checkedBigNumberify("./dao/contracts/shared.rsh:85:13:array",l.UInt_max,"0")],g={None:0,Some:1}[g[0]],g=l.eq(g,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),k=l.gt(k,i),g=!!g&&k,k=l.gt(_,l.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",l.UInt_max,"0"));let a;a=!!k&&l.lt(_,Y);k=l.ge(x,l.checkedBigNumberify("./dao/contracts/shared.rsh:88:34:decimal",l.UInt_max,"0")),_=l.lt(x,l.UInt_max),x=!!g&&a;s=!!x&&(!!k&&_);break}case"EjectMember":g=h[1],x={None:0,Some:1}[l.protect(m,await l.mapRef(p,g),null)[0]],k=l.eq(x,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),_=l.addressEq(g,a0);s=!!k&&!_;break;case"None":h[1];s=!1;break;case"Stop":h[1];s=!0}V=!s,l.assert(V,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:262:44:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:262:44:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runregisterProposal0_343" (defined at: ./dao/contracts/dao-blog.rsh:262:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"A Proposal is already active.",who:"registerProposal"}),t=l.sub(l.UInt_max,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:271:32:decimal",l.UInt_max,"1")),r=l.lt(y,t);l.assert(r,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:271:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:262:44:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:262:44:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runregisterProposal0_343" (defined at: ./dao/contracts/dao-blog.rsh:262:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Governance limit reached",who:"registerProposal"});let N;switch(d[0]){case"AllocateFunds":var T=d[1],I=T[l.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",l.UInt_max,"0")],T=T[l.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",l.UInt_max,"1")],T=l.lt(T,f),I={None:0,Some:1}[l.protect(m,await l.mapRef(p,I),null)[0]],I=l.eq(I,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1"));N=t0?T:!!I&&T;break;case"ChangeAdmin":{var I=d[1],T=I.admin,d0=I.fee,I=I.quorum,T=l.protect(m,await l.mapRef(p,T),null),B=l.fromSome(T,i0)[l.checkedBigNumberify("./dao/contracts/shared.rsh:85:13:array",l.UInt_max,"0")],T={None:0,Some:1}[T[0]],T=l.eq(T,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),B=l.gt(B,i),T=!!T&&B,B=l.gt(I,l.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",l.UInt_max,"0"));let a;a=!!B&&l.lt(I,Y);B=l.ge(d0,l.checkedBigNumberify("./dao/contracts/shared.rsh:88:34:decimal",l.UInt_max,"0")),I=l.lt(d0,l.UInt_max),d0=!!T&&a;N=!!d0&&(!!B&&I);break}case"EjectMember":T=d[1],d0={None:0,Some:1}[l.protect(m,await l.mapRef(p,T),null)[0]],B=l.eq(d0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),I=l.addressEq(T,a0);N=!!B&&!I;break;case"None":d[1];N=!1;break;case"Stop":d[1];N=!0}l.assert(N,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:262:44:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:262:44:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runregisterProposal0_343" (defined at: ./dao/contracts/dao-blog.rsh:262:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Bad suggestion is bad. Apologize to everyone.",who:"registerProposal"});var s0=await a.sendrecv({args:[X,G,W,Z,Y,K,L,u,$,f,a0,e0,t0,n0,o0,h,y,c0,i,["registerProposal0_343",H]],evt_cnt:1,funcNum:2,lct:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),onlyIf:!0,out_tys:[J],pay:[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:262:10:decimal",l.UInt_max,"0"),[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};l.UInt_max;l.simMapDupe(t,0,p);var{data:[n],from:o}=e;switch(n[0]){case"comment0_343":n[1];break;case"join0_343":n[1];break;case"leave0_343":n[1];break;case"post0_343":n[1];break;case"registerProposal0_343":{var c=n[1],r=(t.txns.push({kind:"api",who:"registerProposal"}),c[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:262:10:spread",l.UInt_max,"0")]);switch(l.protect(m,await l.simMapRef(t,0,o),null),h[0]){case"AllocateFunds":var i=h[1][l.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",l.UInt_max,"0")];l.protect(m,await l.simMapRef(t,0,i),null);break;case"ChangeAdmin":i=h[1].admin;l.protect(m,await l.simMapRef(t,0,i),null);break;case"EjectMember":i=h[1];l.protect(m,await l.simMapRef(t,0,i),null);break;case"None":h[1];break;case"Stop":h[1]}switch(r[0]){case"AllocateFunds":var d=r[1][l.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",l.UInt_max,"0")];l.protect(m,await l.simMapRef(t,0,d),null);break;case"ChangeAdmin":d=r[1].admin;l.protect(m,await l.simMapRef(t,0,d),null);break;case"EjectMember":d=r[1];l.protect(m,await l.simMapRef(t,0,d),null);break;case"None":r[1];break;case"Stop":r[1]}await e.getOutput("registerProposal","v7950",b,null);var c=l.add(y,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:197:30:decimal",l.UInt_max,"1")),c={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:r,index:c},c=(u,f,u.admin,u.fee,u.openTreasury,u.quorum,u.registerSelf,c.index),s=l.ge(c,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",l.UInt_max,"10"));let a;a=s?(s=l.mod(c,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",l.UInt_max,"10")),c=l.sub(c,s),l.div(c,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",l.UInt_max,"10"))):l.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",l.UInt_max,"1"),t.isHalt=!1;break}case"voteProposal0_343":n[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[n,C,D,q,e,q,o,R,z,e,n,e,c,e,c,o,e,c,e,J],waitIfNotPresent:!1}),{data:[A],didSend:l0,from:b0}=s0;switch(A[0]){case"comment0_343":A[1];return;case"join0_343":A[1];return;case"leave0_343":A[1];return;case"post0_343":A[1];return;case"registerProposal0_343":{var m0=A[1],U=l.le(f,l.UInt_max),w=(l.assert(U,{at:"./dao/contracts/dao-blog.rsh:203:50:dot",fs:[],msg:"assume <= UInt.max",who:"registerProposal"}),m0[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:262:10:spread",l.UInt_max,"0")]);let a;a=c0?(U=l.mod(y,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",l.UInt_max,"10")),U=l.sub(y,U),l.div(U,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",l.UInt_max,"10"))):l.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",l.UInt_max,"1");var U=l.protect(m,await l.mapRef(p,b0),null),p0=[l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),l.checkedBigNumberify("<builtin>",l.UInt_max,"0")],U=l.fromSome(U,p0)[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:134:11:array",l.UInt_max,"0")],v=l.ge(U,a),v=(l.assert(v,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:135:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:263:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-blog.rsh:132:36:function exp)',"at ./dao/contracts/dao-blog.rsh:275:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:275:13:function exp)"],msg:"THIEF! SEIZE THEM!",who:"registerProposal"}),l.ge(U,i));l.assert(v,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:264:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:275:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:275:13:function exp)"],msg:"User is below Citizen Rank threshold",who:"registerProposal"});let e;switch(h[0]){case"AllocateFunds":var S=h[1],E=S[l.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",l.UInt_max,"0")],S=S[l.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",l.UInt_max,"1")],S=l.lt(S,f),E={None:0,Some:1}[l.protect(m,await l.mapRef(p,E),null)[0]],E=l.eq(E,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1"));e=t0?S:!!E&&S;break;case"ChangeAdmin":{var E=h[1],S=E.admin,u0=E.fee,E=E.quorum,S=l.protect(m,await l.mapRef(p,S),null),P=l.fromSome(S,p0)[l.checkedBigNumberify("./dao/contracts/shared.rsh:85:13:array",l.UInt_max,"0")],S={None:0,Some:1}[S[0]],S=l.eq(S,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),P=l.gt(P,i),S=!!S&&P,P=l.gt(E,l.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",l.UInt_max,"0"));let a;a=!!P&&l.lt(E,Y);P=l.ge(u0,l.checkedBigNumberify("./dao/contracts/shared.rsh:88:34:decimal",l.UInt_max,"0")),E=l.lt(u0,l.UInt_max),u0=!!S&&a;e=!!u0&&(!!P&&E);break}case"EjectMember":S=h[1],u0={None:0,Some:1}[l.protect(m,await l.mapRef(p,S),null)[0]],P=l.eq(u0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),E=l.addressEq(S,a0);e=!!P&&!E;break;case"None":h[1];e=!1;break;case"Stop":h[1];e=!0}U=!e,v=(l.assert(U,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:275:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:275:13:function exp)"],msg:"A Proposal is already active.",who:"registerProposal"}),l.sub(l.UInt_max,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:271:32:decimal",l.UInt_max,"1"))),U=l.lt(y,v);l.assert(U,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:271:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:275:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:275:13:function exp)"],msg:"Governance limit reached",who:"registerProposal"});let t;switch(w[0]){case"AllocateFunds":var j=w[1],Q=j[l.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",l.UInt_max,"0")],j=j[l.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",l.UInt_max,"1")],j=l.lt(j,f),Q={None:0,Some:1}[l.protect(m,await l.mapRef(p,Q),null)[0]],Q=l.eq(Q,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1"));t=t0?j:!!Q&&j;break;case"ChangeAdmin":{var Q=w[1],j=Q.admin,f0=Q.fee,Q=Q.quorum,j=l.protect(m,await l.mapRef(p,j),null),F=l.fromSome(j,p0)[l.checkedBigNumberify("./dao/contracts/shared.rsh:85:13:array",l.UInt_max,"0")],j={None:0,Some:1}[j[0]],j=l.eq(j,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),F=l.gt(F,i),j=!!j&&F,F=l.gt(Q,l.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",l.UInt_max,"0"));let a;a=!!F&&l.lt(Q,Y);F=l.ge(f0,l.checkedBigNumberify("./dao/contracts/shared.rsh:88:34:decimal",l.UInt_max,"0")),Q=l.lt(f0,l.UInt_max),f0=!!j&&a;t=!!f0&&(!!F&&Q);break}case"EjectMember":j=w[1],f0={None:0,Some:1}[l.protect(m,await l.mapRef(p,j),null)[0]],F=l.eq(f0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),Q=l.addressEq(j,a0);t=!!F&&!Q;break;case"None":w[1];t=!1;break;case"Stop":w[1];t=!0}l.assert(t,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:275:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:275:13:function exp)"],msg:"Bad suggestion is bad. Apologize to everyone.",who:"registerProposal"});var v=await s0.getOutput("registerProposal","v7950",b,null),U=(l0&&l.protect(b,await M.out(m0,v),{at:"./dao/contracts/dao-blog.rsh:262:11:application",fs:["at ./dao/contracts/dao-blog.rsh:262:11:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:262:11:function exp)",'at ./dao/contracts/dao-blog.rsh:276:12:application call to "k" (defined at: ./dao/contracts/dao-blog.rsh:275:13:function exp)',"at ./dao/contracts/dao-blog.rsh:275:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:275:13:function exp)"],msg:"out",who:"registerProposal"}),l.add(y,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:197:30:decimal",l.UInt_max,"1"))),m0={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:w,index:U},v=(u,f,u.admin,u.fee,u.openTreasury,u.quorum,u.registerSelf,m0.index),U=l.ge(v,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",l.UInt_max,"10"));let n;return void(n=U?(m0=l.mod(v,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",l.UInt_max,"10")),U=l.sub(v,m0),l.div(U,l.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",l.UInt_max,"10"))):l.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",l.UInt_max,"1"))}case"voteProposal0_343":A[1]}}async function _voteProposal3(a,B){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for _voteProposal3 expects to receive a contract as its first argument."));if("object"!=typeof B)return Promise.reject(new Error("The backend for _voteProposal3 expects to receive an interact object as its second argument."));const w=a._initialize(),v=w.stdlib,S=v.T_Null;var a=v.T_UInt,e=v.T_Tuple([a,a]),e=v.T_Data({None:S,Some:e}),t=v.T_Address,A=v.T_Bytes(v.checkedBigNumberify("<builtin>",v.UInt_max,"128")),U=v.T_Bytes(v.checkedBigNumberify("<builtin>",v.UInt_max,"256")),q=v.T_Contract,n=v.T_Tuple([t,a]),o=v.T_Bool,R=v.T_Struct([["admin",t],["registerSelf",o],["fee",a],["quorum",a],["openTreasury",o]]),n=v.T_Data({AllocateFunds:n,ChangeAdmin:R,EjectMember:t,None:S,Stop:S}),R=v.T_Object({admin:t,fee:a,openTreasury:o,quorum:a,registerSelf:o}),z=v.T_Object({Against:a,For:a,action:n,index:a}),c=v.T_Data({Against:S,For:S}),c=v.T_Tuple([c]),V=v.T_Object({i:a,sign:o}),V=v.T_Tuple([U,V]),J=v.T_Tuple([]),O=v.T_Tuple([A]),r=v.T_Tuple([n]),V=v.T_Data({comment0_343:V,join0_343:J,leave0_343:J,post0_343:O,registerProposal0_343:r,voteProposal0_343:c});const H=v.T_Tuple([a,S]),E=e,P=v.newMap({ctc:w,idx:0,isAPI:!0,ty:E}),[X,G,W,Z,Y,K,j,Q,F,M,L,$,a0,e0,t0,C,D,n0,o0]=await w.getState(v.checkedBigNumberify("<builtin>",v.UInt_max,"3"),[t,A,U,q,a,q,n,R,z,a,t,a,o,a,o,n,a,o,a]);var J=w.selfAddress(),O=v.protect(c,await B.in(),{at:"./dao/contracts/dao-blog.rsh:1:23:application",fs:["at ./dao/contracts/dao-blog.rsh:284:38:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:284:38:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runvoteProposal0_343" (defined at: ./dao/contracts/dao-blog.rsh:284:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"in",who:"voteProposal"}),c0=O[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:1:23:application",v.UInt_max,"0")];let r0;r0=n0?(r=v.mod(D,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),e=v.sub(D,r),v.div(e,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1");var c=v.protect(E,await v.mapRef(P,J),null),i0=[v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),v.checkedBigNumberify("<builtin>",v.UInt_max,"0")],r=v.fromSome(c,i0),e=r[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:134:11:array",v.UInt_max,"0")],J=r[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:134:11:array",v.UInt_max,"1")],c=v.ge(e,r0),d0=(v.assert(c,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:135:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:285:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-blog.rsh:132:36:function exp)',"at ./dao/contracts/dao-blog.rsh:284:38:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:284:38:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runvoteProposal0_343" (defined at: ./dao/contracts/dao-blog.rsh:284:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"THIEF! SEIZE THEM!",who:"voteProposal"}),F.For),s0=F.Against;let l0;switch(C[0]){case"AllocateFunds":var i=C[1],d=i[v.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",v.UInt_max,"0")],i=i[v.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",v.UInt_max,"1")],i=v.lt(i,M),d={None:0,Some:1}[v.protect(E,await v.mapRef(P,d),null)[0]],d=v.eq(d,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),d=a0?i:!!d&&i;l0=d;break;case"ChangeAdmin":{var i=C[1],d=i.admin,b0=i.fee,i=i.quorum,d=v.protect(E,await v.mapRef(P,d),null),s=v.fromSome(d,i0)[v.checkedBigNumberify("./dao/contracts/shared.rsh:85:13:array",v.UInt_max,"0")],d={None:0,Some:1}[d[0]],d=v.eq(d,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),s=v.gt(s,o0),d=!!d&&s,s=v.gt(i,v.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",v.UInt_max,"0"));let a;a=!!s&&v.lt(i,Y);s=v.ge(b0,v.checkedBigNumberify("./dao/contracts/shared.rsh:88:34:decimal",v.UInt_max,"0")),i=v.lt(b0,v.UInt_max),b0=!!d&&a;l0=!!b0&&(!!s&&i);break}case"EjectMember":d=C[1],b0={None:0,Some:1}[v.protect(E,await v.mapRef(P,d),null)[0]],s=v.eq(b0,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),i=v.addressEq(d,L);l0=!!s&&!i;break;case"None":C[1];l0=!1;break;case"Stop":C[1];l0=!0}v.assert(l0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:287:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:284:38:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:284:38:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runvoteProposal0_343" (defined at: ./dao/contracts/dao-blog.rsh:284:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"No Proposal is currently active",who:"voteProposal"});v.gt(d0,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:292:17:decimal",v.UInt_max,"0"))&&(r=v.sub(v.UInt_max,s0),e=v.lt(d0,r),v.assert(e,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:293:14:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:284:38:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:284:38:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runvoteProposal0_343" (defined at: ./dao/contracts/dao-blog.rsh:284:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Voting limit reached",who:"voteProposal"}));c=v.gt(s0,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:295:21:decimal",v.UInt_max,"0")),c&&(r=v.sub(v.UInt_max,d0),e=v.lt(s0,r),v.assert(e,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:296:14:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:284:38:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:284:38:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runvoteProposal0_343" (defined at: ./dao/contracts/dao-blog.rsh:284:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Voting limit reached",who:"voteProposal"})),c=v.add(d0,s0),r=v.lt(c,e0),v.assert(r,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:299:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:284:38:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:284:38:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runvoteProposal0_343" (defined at: ./dao/contracts/dao-blog.rsh:284:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Quorum reached",who:"voteProposal"}),e=v.lt(J,D);v.assert(e,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:302:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:284:38:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:284:38:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runvoteProposal0_343" (defined at: ./dao/contracts/dao-blog.rsh:284:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Address has already voted in this session",who:"voteProposal"});let m0;switch(c0[0]){case"Against":c0[1];var p0=v.add(s0,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:306:40:decimal",v.UInt_max,"1"));m0=[d0,p0];break;case"For":c0[1];p0=v.add(d0,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:305:27:decimal",v.UInt_max,"1"));m0=[p0,s0]}var c=m0[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:304:13:array",v.UInt_max,"0")],r=m0[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:304:13:array",v.UInt_max,"1")],J=v.sub(v.UInt_max,r),e=v.lt(c,J),J=(v.assert(e,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:308:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:284:38:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:284:38:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runvoteProposal0_343" (defined at: ./dao/contracts/dao-blog.rsh:284:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Voting limit reached (2)",who:"voteProposal"}),v.sub(v.UInt_max,c)),e=v.lt(r,J),c=(v.assert(e,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:309:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:284:38:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:284:38:function exp)",'at ./dao/contracts/dao-blog.rsh:203:50:application call to "runvoteProposal0_343" (defined at: ./dao/contracts/dao-blog.rsh:284:10:function exp)',"at ./dao/contracts/dao-blog.rsh:203:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:203:50:function exp)"],msg:"Voting limit reached (2)",who:"voteProposal"}),["voteProposal0_343",O]),u0=await w.sendrecv({args:[X,G,W,Z,Y,K,j,Q,F,M,L,$,a0,e0,t0,C,D,n0,o0,c],evt_cnt:1,funcNum:2,lct:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),onlyIf:!0,out_tys:[V],pay:[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:284:10:decimal",v.UInt_max,"0"),[]],sim_p:async o=>{var c={txns:[],mapRefs:[],maps:[]};v.UInt_max;v.simMapDupe(c,0,P);var{data:[r],from:i}=o;switch(r[0]){case"comment0_343":r[1];break;case"join0_343":r[1];break;case"leave0_343":r[1];break;case"post0_343":r[1];break;case"registerProposal0_343":r[1];break;case"voteProposal0_343":{var d=r[1],s=(c.txns.push({kind:"api",who:"voteProposal"}),d[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:284:10:spread",v.UInt_max,"0")]),d=v.protect(E,await v.simMapRef(c,0,i),null),l=[v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),v.checkedBigNumberify("<builtin>",v.UInt_max,"0")],d=v.fromSome(d,l)[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:134:11:array",v.UInt_max,"0")],b=F.For,m=F.Against;switch(C[0]){case"AllocateFunds":var p=C[1][v.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",v.UInt_max,"0")];v.protect(E,await v.simMapRef(c,0,p),null);break;case"ChangeAdmin":p=C[1].admin;v.protect(E,await v.simMapRef(c,0,p),null);break;case"EjectMember":p=C[1];v.protect(E,await v.simMapRef(c,0,p),null);break;case"None":C[1];break;case"Stop":C[1]}let a;switch(s[0]){case"Against":s[1];var u=v.add(m,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:306:40:decimal",v.UInt_max,"1"));a=[b,u];break;case"For":s[1];u=v.add(b,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:305:27:decimal",v.UInt_max,"1"));a=[u,m]}var f=a[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:304:13:array",v.UInt_max,"0")],h=a[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:304:13:array",v.UInt_max,"1")],y=(await o.getOutput("voteProposal","v9175",S,null),v.lt(d,v.UInt_max));let e;e=y?[v.add(d,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:316:45:decimal",v.UInt_max,"1")),D]:[d,D],await v.simMapSet(c,0,i,e);var y=v.add(f,h),d=v.ge(y,e0);let t;t=n0?(y=v.mod(D,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),y=v.sub(D,y),v.div(y,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1");let n;switch(C[0]){case"AllocateFunds":var g=C[1],_=g[v.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",v.UInt_max,"0")],g=g[v.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",v.UInt_max,"1")],g=v.lt(g,M),_={None:0,Some:1}[v.protect(E,await v.simMapRef(c,0,_),null)[0]],_=!!v.eq(_,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1"))&&g,g=a0?g:_;n=g;break;case"ChangeAdmin":{var _=C[1],g=_.admin,x=_.fee,_=_.quorum,g=v.protect(E,await v.simMapRef(c,0,g),null),k=v.fromSome(g,l)[v.checkedBigNumberify("./dao/contracts/shared.rsh:85:13:array",v.UInt_max,"0")],g={None:0,Some:1}[g[0]],g=v.eq(g,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),k=v.gt(k,t),g=!!g&&k,k=v.gt(_,v.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",v.UInt_max,"0"));let a;a=!!k&&v.lt(_,Y);k=v.ge(x,v.checkedBigNumberify("./dao/contracts/shared.rsh:88:34:decimal",v.UInt_max,"0")),_=v.lt(x,v.UInt_max),x=!!g&&a;n=!!x&&(!!k&&_);break}case"EjectMember":g=C[1],x={None:0,Some:1}[v.protect(E,await v.simMapRef(c,0,g),null)[0]],k=v.eq(x,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),_=v.addressEq(g,L);n=!!k&&!_;break;case"None":C[1];n=!1;break;case"Stop":C[1];n=!0}if(d){y=v.gt(f,h);if(!!n&&y)switch(C[0]){case"AllocateFunds":{var N=C[1],T=N[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:164:32:application",v.UInt_max,"0")],N=N[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:164:32:application",v.UInt_max,"1")],N=(v.sub(M,N),c.txns.push({kind:"from",to:T,tok:void 0}),{Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D}),T=(Q,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,N.index),N=v.ge(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;a=N?(N=v.mod(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),T=v.sub(T,N),v.div(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"ChangeAdmin":{N=C[1],T=(N.admin,N.registerSelf,N.fee,N.quorum,N.openTreasury,{Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D}),N=(M,T.index),T=v.ge(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;a=T?(T=v.mod(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),N=v.sub(N,T),v.div(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"EjectMember":{T=C[1],N=(await v.simMapSet(c,0,T,void 0),{Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D}),T=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,N.index),N=v.ge(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;a=N?(N=v.mod(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),T=v.sub(T,N),v.div(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"None":{C[1];N={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},T=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,N.index),N=v.ge(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;a=N?(N=v.mod(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),T=v.sub(T,N),v.div(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"Stop":C[1];N=[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:182:32:application",v.UInt_max,"0"),void c.txns.push({kind:"remote",obj:Z,remote:{accs:[],apps:[],bills:v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:182:32:application",v.UInt_max,"0"),fees:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),pays:v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:182:32:application",v.UInt_max,"0"),toks:[]}})],T=(await o.getOutput("internal","v9722",H,N))[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:182:32:application",v.UInt_max,"0")],N=v.add(M,T),T=Q.admin,N=v.sub(N,N);c.txns.push({kind:"from",to:T,tok:void 0}),v.le(await w.getBalance(),N)?v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:347:29:application",v.UInt_max,"0"):v.safeSub(await w.getBalance(),N);c.txns.push({kind:"from",to:T,tok:void 0}),c.txns.push({kind:"halt",tok:void 0}),c.isHalt=!0}else if(y)switch(C[0]){case"AllocateFunds":{C[1];var I={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},I=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,I.index),B=v.ge(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;a=B?(B=v.mod(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),I=v.sub(I,B),v.div(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"ChangeAdmin":{C[1];var B={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},I=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,B.index),B=v.ge(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;a=B?(B=v.mod(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),I=v.sub(I,B),v.div(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"EjectMember":{C[1];B={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},I=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,B.index),B=v.ge(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;a=B?(B=v.mod(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),I=v.sub(I,B),v.div(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"None":{C[1];B={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},I=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,B.index),B=v.ge(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;a=B?(B=v.mod(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),I=v.sub(I,B),v.div(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"Stop":{C[1];B={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},I=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,B.index),B=v.ge(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;a=B?(B=v.mod(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),I=v.sub(I,B),v.div(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}}else switch(C[0]){case"AllocateFunds":{C[1];var A={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},A=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,A.index),U=v.ge(A,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;a=U?(U=v.mod(A,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),A=v.sub(A,U),v.div(A,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"ChangeAdmin":{C[1];var U={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},A=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,U.index),U=v.ge(A,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;a=U?(U=v.mod(A,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),A=v.sub(A,U),v.div(A,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"EjectMember":{C[1];U={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},A=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,U.index),U=v.ge(A,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;a=U?(U=v.mod(A,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),A=v.sub(A,U),v.div(A,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"None":{C[1];U={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},A=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,U.index),U=v.ge(A,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;a=U?(U=v.mod(A,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),A=v.sub(A,U),v.div(A,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"Stop":{C[1];U={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},A=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,U.index),U=v.ge(A,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;a=U?(U=v.mod(A,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),A=v.sub(A,U),v.div(A,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}}}else{d={Against:h,For:f,action:C,index:D},y=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,d.index),h=v.ge(y,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;a=h?(f=v.mod(y,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),d=v.sub(y,f),v.div(d,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"),c.isHalt=!1}break}}return c},soloSend:!1,timeoutAt:void 0,tys:[t,A,U,q,a,q,n,R,z,a,t,a,o,a,o,n,a,o,a,V],waitIfNotPresent:!1}),{data:[f0],didSend:h0,from:y0}=u0;switch(f0[0]){case"comment0_343":f0[1];return;case"join0_343":f0[1];return;case"leave0_343":f0[1];return;case"post0_343":f0[1];return;case"registerProposal0_343":f0[1];return;case"voteProposal0_343":{var l=f0[1],b=v.le(M,v.UInt_max),g0=(v.assert(b,{at:"./dao/contracts/dao-blog.rsh:203:50:dot",fs:[],msg:"assume <= UInt.max",who:"voteProposal"}),l[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:284:10:spread",v.UInt_max,"0")]);let a;a=n0?(b=v.mod(D,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),b=v.sub(D,b),v.div(b,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1");var b=v.protect(E,await v.mapRef(P,y0),null),_0=[v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),v.checkedBigNumberify("<builtin>",v.UInt_max,"0")],b=v.fromSome(b,_0),m=b[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:134:11:array",v.UInt_max,"0")],b=b[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:134:11:array",v.UInt_max,"1")],p=v.ge(m,a),x0=(v.assert(p,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:135:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:285:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-blog.rsh:132:36:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"THIEF! SEIZE THEM!",who:"voteProposal"}),F.For),k0=F.Against;let e;switch(C[0]){case"AllocateFunds":var u=C[1],f=u[v.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",v.UInt_max,"0")],u=u[v.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",v.UInt_max,"1")],u=v.lt(u,M),f={None:0,Some:1}[v.protect(E,await v.mapRef(P,f),null)[0]],f=v.eq(f,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),f=a0?u:!!f&&u;e=f;break;case"ChangeAdmin":{var u=C[1],f=u.admin,N0=u.fee,u=u.quorum,f=v.protect(E,await v.mapRef(P,f),null),T0=v.fromSome(f,_0)[v.checkedBigNumberify("./dao/contracts/shared.rsh:85:13:array",v.UInt_max,"0")],f={None:0,Some:1}[f[0]],f=v.eq(f,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),T0=v.gt(T0,o0),f=!!f&&T0,T0=v.gt(u,v.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",v.UInt_max,"0"));let a;a=!!T0&&v.lt(u,Y);T0=v.ge(N0,v.checkedBigNumberify("./dao/contracts/shared.rsh:88:34:decimal",v.UInt_max,"0")),u=v.lt(N0,v.UInt_max),N0=!!f&&a;e=!!N0&&(!!T0&&u);break}case"EjectMember":f=C[1],N0={None:0,Some:1}[v.protect(E,await v.mapRef(P,f),null)[0]],T0=v.eq(N0,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),u=v.addressEq(f,L);e=!!T0&&!u;break;case"None":C[1];e=!1;break;case"Stop":C[1];e=!0}v.assert(e,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:287:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"No Proposal is currently active",who:"voteProposal"});v.gt(x0,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:292:17:decimal",v.UInt_max,"0"))&&(p=v.sub(v.UInt_max,k0),p=v.lt(x0,p),v.assert(p,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:293:14:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"Voting limit reached",who:"voteProposal"}));var p=v.gt(k0,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:295:21:decimal",v.UInt_max,"0")),p=(p&&(p=v.sub(v.UInt_max,x0),p=v.lt(k0,p),v.assert(p,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:296:14:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"Voting limit reached",who:"voteProposal"})),v.add(x0,k0)),p=v.lt(p,e0),p=(v.assert(p,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:299:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"Quorum reached",who:"voteProposal"}),v.lt(b,D));v.assert(p,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:302:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"Address has already voted in this session",who:"voteProposal"});let t;switch(g0[0]){case"Against":g0[1];var I0=v.add(k0,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:306:40:decimal",v.UInt_max,"1"));t=[x0,I0];break;case"For":g0[1];I0=v.add(x0,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:305:27:decimal",v.UInt_max,"1"));t=[I0,k0]}var b=t[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:304:13:array",v.UInt_max,"0")],p=t[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:304:13:array",v.UInt_max,"1")],h=v.sub(v.UInt_max,p),h=v.lt(b,h),h=(v.assert(h,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:308:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"Voting limit reached (2)",who:"voteProposal"}),v.sub(v.UInt_max,b)),h=v.lt(p,h),h=(v.assert(h,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:309:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"Voting limit reached (2)",who:"voteProposal"}),await u0.getOutput("voteProposal","v9175",S,null)),l=(h0&&v.protect(S,await B.out(l,h),{at:"./dao/contracts/dao-blog.rsh:284:11:application",fs:["at ./dao/contracts/dao-blog.rsh:284:11:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:284:11:function exp)",'at ./dao/contracts/dao-blog.rsh:313:12:application call to "k" (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"out",who:"voteProposal"}),v.lt(m,v.UInt_max));let n;n=l?[v.add(m,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:316:45:decimal",v.UInt_max,"1")),D]:[m,D],await v.mapSet(P,y0,n);h=v.add(b,p),l=v.ge(h,e0);let o;o=n0?(m=v.mod(D,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),h=v.sub(D,m),v.div(h,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1");let c;switch(C[0]){case"AllocateFunds":var y=C[1],g=y[v.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",v.UInt_max,"0")],y=y[v.checkedBigNumberify("./dao/contracts/shared.rsh:77:21:array",v.UInt_max,"1")],y=v.lt(y,M),g={None:0,Some:1}[v.protect(E,await v.mapRef(P,g),null)[0]],g=v.eq(g,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),g=a0?y:!!g&&y;c=g;break;case"ChangeAdmin":{var y=C[1],g=y.admin,B0=y.fee,y=y.quorum,g=v.protect(E,await v.mapRef(P,g),null),A0=v.fromSome(g,_0)[v.checkedBigNumberify("./dao/contracts/shared.rsh:85:13:array",v.UInt_max,"0")],g={None:0,Some:1}[g[0]],g=v.eq(g,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),A0=v.gt(A0,o),g=!!g&&A0,A0=v.gt(y,v.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",v.UInt_max,"0"));let a;a=!!A0&&v.lt(y,Y);A0=v.ge(B0,v.checkedBigNumberify("./dao/contracts/shared.rsh:88:34:decimal",v.UInt_max,"0")),y=v.lt(B0,v.UInt_max),B0=!!g&&a;c=!!B0&&(!!A0&&y);break}case"EjectMember":g=C[1],B0={None:0,Some:1}[v.protect(E,await v.mapRef(P,g),null)[0]],A0=v.eq(B0,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),y=v.addressEq(g,L);c=!!A0&&!y;break;case"None":C[1];c=!1;break;case"Stop":C[1];c=!0}if(l){m=v.gt(b,p);if(!!c&&m)switch(C[0]){case"AllocateFunds":{var _=C[1],_=(_[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:164:32:application",v.UInt_max,"0")],_[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:164:32:application",v.UInt_max,"1")]),_=v.sub(M,_),_=v.ge(_,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:168:29:application",v.UInt_max,"0")),_=(v.assert(_,{at:"./dao/contracts/dao-blog.rsh:168:29:application",fs:["at ./dao/contracts/dao-blog.rsh:166:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:167:44:function exp)","at ./dao/contracts/dao-blog.rsh:166:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:166:28:function exp)",'at ./dao/contracts/dao-blog.rsh:318:28:application call to "doProposal" (defined at: ./dao/contracts/dao-blog.rsh:146:51:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"assume >= 0",who:"voteProposal"}),{Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D}),_=(Q,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,_.index),x=v.ge(_,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;return void(a=x?(x=v.mod(_,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),_=v.sub(_,x),v.div(_,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"))}case"ChangeAdmin":{var x=C[1],_=(x.admin,x.registerSelf,x.fee,x.quorum,x.openTreasury,{Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D}),x=(M,_.index),_=v.ge(x,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;return void(a=_?(_=v.mod(x,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),x=v.sub(x,_),v.div(x,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"))}case"EjectMember":{_=C[1],x=(await v.mapSet(P,_,void 0),{Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D}),_=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,x.index),x=v.ge(_,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;return void(a=x?(x=v.mod(_,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),_=v.sub(_,x),v.div(_,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"))}case"None":{C[1];x={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},_=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,x.index),x=v.ge(_,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;return void(a=x?(x=v.mod(_,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),_=v.sub(_,x),v.div(_,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"))}case"Stop":C[1];var x=(await u0.getOutput("internal","v9722",H,void 0))[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:182:32:application",v.UInt_max,"0")],_=v.add(M,x),U0=v.le(_,v.UInt_max),U0=(v.assert(U0,{at:"./dao/contracts/dao-blog.rsh:182:32:application",fs:["at ./dao/contracts/dao-blog.rsh:166:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:181:20:function exp)","at ./dao/contracts/dao-blog.rsh:166:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:166:28:function exp)",'at ./dao/contracts/dao-blog.rsh:318:28:application call to "doProposal" (defined at: ./dao/contracts/dao-blog.rsh:146:51:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"assume <= UInt.max",who:"voteProposal"}),v.eq(v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),x)),x=(v.assert(U0,{at:"./dao/contracts/dao-blog.rsh:182:32:application",fs:["at ./dao/contracts/dao-blog.rsh:166:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:181:20:function exp)","at ./dao/contracts/dao-blog.rsh:166:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:166:28:function exp)",'at ./dao/contracts/dao-blog.rsh:318:28:application call to "doProposal" (defined at: ./dao/contracts/dao-blog.rsh:146:51:function exp)',"at ./dao/contracts/dao-blog.rsh:312:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:312:13:function exp)"],msg:"remote bill check",who:"voteProposal"}),Q.admin,v.sub(_,_)),U0=v.ge(x,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:346:25:application",v.UInt_max,"0")),_=(v.assert(U0,{at:"./dao/contracts/dao-blog.rsh:346:25:application",fs:[],msg:"assume >= 0",who:"voteProposal"}),v.le(await w.getBalance(),x)?v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:347:29:application",v.UInt_max,"0"):v.safeSub(await w.getBalance(),x)),U0=v.safeAdd(_,x),x=v.sub(U0,_),U0=v.ge(x,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:347:35:application",v.UInt_max,"0"));return void v.assert(U0,{at:"./dao/contracts/dao-blog.rsh:347:35:application",fs:[],msg:"assume >= 0",who:"voteProposal"})}else if(m)switch(C[0]){case"AllocateFunds":{C[1];var k={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},k=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,k.index),N=v.ge(k,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;return void(a=N?(N=v.mod(k,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),k=v.sub(k,N),v.div(k,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"))}case"ChangeAdmin":{C[1];var N={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},k=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,N.index),N=v.ge(k,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;return void(a=N?(N=v.mod(k,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),k=v.sub(k,N),v.div(k,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"))}case"EjectMember":{C[1];N={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},k=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,N.index),N=v.ge(k,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;return void(a=N?(N=v.mod(k,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),k=v.sub(k,N),v.div(k,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"))}case"None":{C[1];N={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},k=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,N.index),N=v.ge(k,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;return void(a=N?(N=v.mod(k,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),k=v.sub(k,N),v.div(k,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"))}case"Stop":{C[1];N={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},k=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,N.index),N=v.ge(k,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;return void(a=N?(N=v.mod(k,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),k=v.sub(k,N),v.div(k,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"))}}else switch(C[0]){case"AllocateFunds":{C[1];var T={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},T=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,T.index),I=v.ge(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;return void(a=I?(I=v.mod(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),T=v.sub(T,I),v.div(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"))}case"ChangeAdmin":{C[1];var I={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},T=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,I.index),I=v.ge(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;return void(a=I?(I=v.mod(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),T=v.sub(T,I),v.div(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"))}case"EjectMember":{C[1];I={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},T=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,I.index),I=v.ge(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;return void(a=I?(I=v.mod(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),T=v.sub(T,I),v.div(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"))}case"None":{C[1];I={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},T=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,I.index),I=v.ge(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;return void(a=I?(I=v.mod(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),T=v.sub(T,I),v.div(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"))}case"Stop":{C[1];I={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:j,index:D},T=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,I.index),I=v.ge(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;return void(a=I?(I=v.mod(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),T=v.sub(T,I),v.div(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"))}}}else{h={Against:p,For:b,action:C,index:D},l=(Q,M,Q.admin,Q.fee,Q.openTreasury,Q.quorum,Q.registerSelf,h.index),m=v.ge(l,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:12:decimal",v.UInt_max,"10"));let a;void(a=m?(p=v.mod(l,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:35:decimal",v.UInt_max,"10")),b=v.sub(l,p),v.div(b,v.checkedBigNumberify("./dao/contracts/shared.rsh:53:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:53:47:decimal",v.UInt_max,"1"))}}}}async function comment(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for comment expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for comment expects to receive an interact object as its second argument."));var t=a._initialize(),n=t.stdlib,t=await t.getCurrentStep();if(3==t)return _comment3(a,e);throw n.apiStateMismatchError({_stateSourceMap:_stateSourceMap},[n.checkedBigNumberify("<builtin>",n.UInt_max,"3")],n.checkedBigNumberify("<builtin>",n.UInt_max,t))}async function join(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for join expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for join expects to receive an interact object as its second argument."));var t=a._initialize(),n=t.stdlib,t=await t.getCurrentStep();if(3==t)return _join3(a,e);throw n.apiStateMismatchError({_stateSourceMap:_stateSourceMap},[n.checkedBigNumberify("<builtin>",n.UInt_max,"3")],n.checkedBigNumberify("<builtin>",n.UInt_max,t))}async function leave(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for leave expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for leave expects to receive an interact object as its second argument."));var t=a._initialize(),n=t.stdlib,t=await t.getCurrentStep();if(3==t)return _leave3(a,e);throw n.apiStateMismatchError({_stateSourceMap:_stateSourceMap},[n.checkedBigNumberify("<builtin>",n.UInt_max,"3")],n.checkedBigNumberify("<builtin>",n.UInt_max,t))}async function post(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for post expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for post expects to receive an interact object as its second argument."));var t=a._initialize(),n=t.stdlib,t=await t.getCurrentStep();if(3==t)return _post3(a,e);throw n.apiStateMismatchError({_stateSourceMap:_stateSourceMap},[n.checkedBigNumberify("<builtin>",n.UInt_max,"3")],n.checkedBigNumberify("<builtin>",n.UInt_max,t))}async function registerProposal(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for registerProposal expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for registerProposal expects to receive an interact object as its second argument."));var t=a._initialize(),n=t.stdlib,t=await t.getCurrentStep();if(3==t)return _registerProposal3(a,e);throw n.apiStateMismatchError({_stateSourceMap:_stateSourceMap},[n.checkedBigNumberify("<builtin>",n.UInt_max,"3")],n.checkedBigNumberify("<builtin>",n.UInt_max,t))}async function voteProposal(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for voteProposal expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for voteProposal expects to receive an interact object as its second argument."));var t=a._initialize(),n=t.stdlib,t=await t.getCurrentStep();if(3==t)return _voteProposal3(a,e);throw n.apiStateMismatchError({_stateSourceMap:_stateSourceMap},[n.checkedBigNumberify("<builtin>",n.UInt_max,"3")],n.checkedBigNumberify("<builtin>",n.UInt_max,t))}const _ALGO={ABI:{impure:["comment(byte[256],(uint64,byte))byte[0]","join()byte[0]","leave()byte[0]","post(byte[128])byte[0]","registerProposal((byte,byte[50]))byte[0]","voteProposal((byte,byte[0]))byte[0]"],pure:["Proposal()(byte,byte[50])","currentVotes()uint64","info()(byte[128],address,address,byte[256],uint64,byte,uint64,byte)","isMember(address)byte","myRank(address)uint64"],sigs:["Proposal()(byte,byte[50])","comment(byte[256],(uint64,byte))byte[0]","currentVotes()uint64","info()(byte[128],address,address,byte[256],uint64,byte,uint64,byte)","isMember(address)byte","join()byte[0]","leave()byte[0]","myRank(address)uint64","post(byte[128])byte[0]","registerProposal((byte,byte[50]))byte[0]","voteProposal((byte,byte[0]))byte[0]"]},appApproval:"ByAmAAH///////////8BEAMEAgoIIIACBikRBSGJAjOo/cjfBJmG0PIM+5bDug3jy/SWD50ES/HG0dwGj6KvlAqiBfAEoAGQBaEFmQWYBbe8z7EDsu3pwAPqlan4A6vHkbUBfyYMAQAAAQEBAgEDAQQBBQTjht/SBGiwvLEEQuL4EwVhcHBJRAQMmUlpIjUAMRhBELYpZEkiWzUBSSEIWzUCJVs1CDEZIxJBAAoxACghDa9mQhB9NhoAF0lBAcsiNQQjNQZJIRIMQAE2SSETDEAAdEkhFAxAADZJIRUMQAASIRUSRCk1/ys0/1AhEK9QQgGvIRQSRDQBIQQSRDYaAYgQaSJVIxIWUQcINQdCEDMhExJENAEhBBJEKGQqZFArZFAnBGRQJwVkUCcGZFBJNQMhFiEXWEk1/yEIWzT/IlsIFjUHQg/8SSEYDEAAV0khGQxAACUhGRJENAEhBBJEJa82GgGIEAVJNf9XARA0/yJVTVcACDUHQg/JIRgSRDQBIQQSRChkKmRQK2RQJwRkUCcFZFAnBmRQSTUDIRohEVg1B0IPniESEkQ0ASEEEkQoZCpkUCtkUCcEZFAnBWRQJwZkUEk1A1cggDQDVwAgUDQDIRshCVhQNAMhHCEKWFA0AyEdIQhYUDQDIR4jWFA0AyEfIQhYUDQDISAjWFA1B0IPQUkhIQxAAExJISIMQAAzSSEjDEAAFiEjEkQ2GgE1/ycFNP9QgdYBr1BCAHUhIhJENhoBNf8nBDT/UIGJAa9QQgBfISESRCk1/yo0/1AhEK9QQgBNSSEkDEAAFCEkEkQ2GgE2GgJQNf8oNP9QQgAygba3mZUBEkQ2GgE1/ycGNP9QgYgCr1BCABg2GgIXNQQ2GgM2GgEXSSEGDEALXiEGEkQhBDQBEkQ0BEkiEkw0AhIRRChkKmRQK2RQJwRkUCcFZFAnBmRQSTUDSUpKSkpKSkpKVwAgNf9XIIA1/iEcIQpYNf2BoANbNfyBqANbNfuBsANbNfqBuAMhEVg1+YHrA4EyWDX4IRYhF1g194HoBFs19iEbIQlYNfUhHVs19CEgI1gXNfMhH1s18iEaIRFYNfGB1QVbNfCB3QUjWBc174HeBVs17kk1BTXtgARY2B9tNO1QsDTtIlVJIQQMQAl/SSEFDEAJLEkhDgxABuEhDhJENO1XAQE16LEisgEhC7IQNAiyGLM09iQORDTvQQAPNPBJIQcYCSEHCjXnQgADIzXnJa9JNeYxAIgNwEk15FcBEDTkIlVNSTXlIltJNeQ05w9ENPchCFs14zT3Ils14jTxIlVJIQYMQAA7SSEEDEAAGEkhBQxAAAohBRJEIzXhQgCzSCI14UIArEg08VcBIDXgNOCIDWUiVSMSNOA09RMQNeFCAJBJIwxAAGBINPFXATJJNeAhD1s13zTgIQxbNd404FcAIIgNMzXdNN4iDUEACjTeNPsMNdxCAAMiNdw03SJVIxI05jTdSTXbVwEQNNsiVU0iWzTuDRA03BA03yIPNN8kDBAQNeFCACpINPFXAShJNeAhCVs09gw13zTgVwAgiAzXIlUjEjTfEDTfNPNNNeFCAAA04UQ04yINQQALNOMkNOIJDERCAAA04iINQQALNOIkNOMJDERCAAA04zTiCDTyDEQ05SEIWzTwDEQ06Ek13yJVQAAONOMWNOIjCBZQNeBCAA404yMIFjTiFlA14EIAADTgIls13zTgIQhbNd403yQ03gkMRDTeJDTfCQxEgAgAAAAAAAAj17ApNQc05CQMQQAONOQjCBY08BZQNd1CAAk05BY08BZQNd0xACgqNN1QZjTvQQAPNPBJIQcYCSEHCjXcQgADIzXcNPEiVUkhBgxAADtJIQQMQAAYSSEFDEAACiEFEkQjNdtCALNIIjXbQgCsSDTxVwEgNdo02ogLyCJVIxI02jT1ExA120IAkEkjDEAAYEg08VcBMkk12iEPWzXZNNohDFs12DTaVwAgiAuWNdc02CINQQAKNNg0+ww11kIAAyI11jTXIlUjEjTmNNdJNdVXARA01SJVTSJbNNwNEDTWEDTZIg802SQMEBA120IAKkg08VcBKEk12iEJWzT2DDXZNNpXACCICzoiVSMSNNkQNNk0800120IAADTfNN4INPIPQQPbNN803g012jTbNNoQQQHLNPEiVUkhBgxAARVJIQQMQADOSSEFDEAAmyEFEkQnBzTwFlA08VCwJwo0/BZQAzXYMgp4NdcyCmA01wkWNdaxIrIBIQuyEDT8shiABOzzOtmyGjT6FrIaszIKYDTXCTTWFwkWtwA+VwQAUDXZgAgAAAAAAAAl+jTZULA02Uk12CJbNdc09jTXCEk11iQORCI01xJENP80/jT9NPw0+zT6NPk0+CIlrzT5UDTwFlAyBjTWQgiRSCcHNPAWUDTxULA0/zT+NP00/DT7NPo0+TT4IyWvNPlQNPAWUDIGNPZCCGVINPFXASA12ScHNPAWUDTxULA02SghDa9mJws02VCwNP80/jT9NPw0+zT6NPk0+CMlrzT5UDTwFlAyBjT2QgglSSMMQABOSDTxVwEyNdknBzTwFlA08VCwNP80/jT9NPw0+zT6NPk02VcAIDTZVyEIUDTZVzEBUDTZVykIUDTZVyABUCMlrzT5UDTwFlAyBjT2QgfRSDTxVwEoSTXZIQlbNdgnBzTwFlA08VCwNPY02AlJNdciD0SxIrIBNNiyCCOyEDTZVwAgsgezNP80/jT9NPw0+zT6NPk0+CMlrzT5UDTwFlAyBjTXQgd6NNpBAP408SJVSSEGDEAAlUkhBAxAAGJJIQUMQAAvIQUSRCcINPAWUDTxULA0/zT+NP00/DT7NPo0+TT4IyWvNPlQNPAWUDIGNPZCBy1IJwg08BZQNPFQsDT/NP40/TT8NPs0+jT5NPgjJa80+VA08BZQMgY09kIHAUgnCDTwFlA08VCwNP80/jT9NPw0+zT6NPk0+CMlrzT5UDTwFlAyBjT2QgbVSSMMQAAsSCcINPAWUDTxULA0/zT+NP00/DT7NPo0+TT4IyWvNPlQNPAWUDIGNPZCBqNIJwg08BZQNPFQsDT/NP40/TT8NPs0+jT5NPgjJa80+VA08BZQMgY09kIGdzTxIlVJIQYMQACVSSEEDEAAYkkhBQxAAC8hBRJEJwk08BZQNPFQsDT/NP40/TT8NPs0+jT5NPgjJa80+VA08BZQMgY09kIGL0gnCTTwFlA08VCwNP80/jT9NPw0+zT6NPk0+CMlrzT5UDTwFlAyBjT2QgYDSCcJNPAWUDTxULA0/zT+NP00/DT7NPo0+TT4IyWvNPlQNPAWUDIGNPZCBddJIwxAACxIJwk08BZQNPFQsDT/NP40/TT8NPs0+jT5NPgjJa80+VA08BZQMgY09kIFpUgnCTTwFlA08VCwNP80/jT9NPw0+zT6NPk0+CMlrzT5UDTwFlAyBjT2QgV5NP80/jT9NPw0+zT6NPk0+CM03hY03xZQNPFQNPAWUDIGNPZCBVNINO1XATM16DT2JA5ENOg15zTvQQAPNPBJIQcYCSEHCjXmQgADIzXmJa9JNeUxAIgG60k141cBEDTjIlVNIltJNeQ05g9ENOQ07g9ENPEiVUkhBgxAADtJIQQMQAAYSSEFDEAACiEFEkQjNeNCALNIIjXjQgCsSDTxVwEgNeI04ogGmiJVIxI04jT1ExA140IAkEkjDEAAYEg08VcBMkk14iEPWzXhNOIhDFs14DTiVwAgiAZoNd804CINQQAKNOA0+ww13kIAAyI13jTfIlUjEjTlNN9JNd1XARA03SJVTSJbNO4NEDTeEDThIg804SQMEBA140IAKkg08VcBKEk14iEJWzT2DDXhNOJXACCIBgwiVSMSNOEQNOE0800140IAADTjFEQ08CQjCQxENOciVUkhBgxAADtJIQQMQAAYSSEFDEAACiEFEkQjNeJCALNIIjXiQgCsSDTnVwEgNeE04YgFuSJVIxI04TT1ExA14kIAkEkjDEAAYEg051cBMkk14SEPWzXgNOEhDFs13zThVwAgiAWHNd403yINQQAKNN80+ww13UIAAyI13TTeIlUjEjTlNN5JNdxXARA03CJVTSJbNO4NEDTdEDTgIg804CQMEBA14kIAKkg051cBKEk14SEJWzT2DDXgNOFXACCIBSsiVSMSNOAQNOA080014kIAADTiRIAIAAAAAAAAHw6wKTUHgASWlKetNOdQMQBQsDT/NP40/TT8NPs0+jT5NPgjJa8051A08CMIFlAyBjT2QgMPSDTtVwGANeg09iQORDEAiATHIlUjEkSACAAAAAAAABpZsCk1B4AEaBJC/TEAUDToULA0/zT+NP00/DT7NPo0+TT4IzT3MgY09kICw0kjDEAAvkkhBgxAAEVIMQCIBHoiVSMSRDT2JA5EgAgAAAAAAAAWIbApNQcxACghDa9mJwsxAFCwNP80/jT9NPw0+zT6NPk0+CM09zIGNPZCAnFINAMhHiNYF0QxAIgELSJVIhJENPQkNPYJDEQ09jT0CEk16CQORDT0iAQfNPQkNOgJDESACAAAAAAAABHqsCk1BzEAKCo07hYhCK9QUGaABH5kmAsxAFCwNP80/jT9NPw0+zT6NPk0+CM09zIGNOhCAf9INO0jIRBYNeg09iQORDEAiAO2IlUjEkSACAAAAAAAAA2nsCk1B4AEa7xybjEAUDToIiEKWFA06CEKgQlYULA0/zT+NP00/DT7NPo0+TT4IzT3MgY09kIBpiISRIHAmgyIA3WxIrIBIQuyECKyGIAGBzEAMgkSsh6AAQeyH7O0PTUIIjQBEkQ0BEkiEkw0AhIRREk1BUlKSklXAIA1/4GAASEKWDX+gYADI1gXNf2BgQNbNfyBiQMjWBc1+4GKA1s1+oGSA1s1+YAEE+eoCDT/UDT+UDT9FlEHCFA0/BZQNPsWUQcIUDT6FlA0+RZQsCSBgJTr3AMNRDT8Iw9EJCEHCjX4NPw0+AxEMRg19zEAKIARAf//////////AAAAAAAAAABmJwo0+RZQAzX1Mgp4NfQyCmA09AkWNfOxIrIBIQuyEDT5shiABOC8OEGyGjT3FrIaNP+yGjT+shqzMgpgNPQJNPMXCRa3AD5XBABQNfaACAAAAAAAAAtsNPZQsDT2STX1IltJNfQkDkQiNPQSRIAzAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANfMxADT/NP40+TT4NPc08zEANPoWUDT7FlEHCFA0/BZQNP0WUQcIUCMlrzTzUCEIr1AyBjT0QgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NPxBAN00+1cAIDXzNPshCVs18jT7VygBFzXxNPshDFs18DT7VzEBFzXvNP1XEDM17jT9gUNbSTXtIQcPSTXsQQAPNO1JIQcYCSEHCjXrQgADIzXrNPQ09VA09lA09xZQNPgWUDT5FlA0+lA0+1A0/VA0/xZQNPNQNPIWUDTxFlEHCFA08BZQNO8WUQcIUDTuUDTtFlA07BZRBwhQNOsWUChLAVcAf2cqSwFXf39nK0sBV/5/ZycESwGB/QIhJVhnJwVLAYH8AyElWGcnBksBgfsEgWtYZ0ghBDUBMgY1AkIAdzT7VwAgNfM0/0kJSTXyIg9EsSKyATT/sggjshA087IHszIKYDIKeAk08glJNfE08gg08QkiD0SxIrIBNPGyCCOyEDTzsgezQgAAMRkhDhJEsSKyASELshA0CLIYIQ6yGbOxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEHMTUSRCIxNhJEIzE3EkQiNQEiNQIiNQhC/6dJMRhhQAAFSCENr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=",appClear:"Bw==",companionInfo:{api_voteProposal:1},extraPages:2,mapDataKeys:1,mapDataSize:17,stateKeys:6,stateSize:742,unsupported:["API api_comment uses 1049 bytes of logs, but the limit is 1024. API api_comment starts at /app/dao/contracts/dao-blog.rsh:203:50:application.","Step 2 uses 1049 bytes of logs, but the limit is 1024. Step 2 starts at /app/dao/contracts/dao-blog.rsh:203:50:dot."],version:11,warnings:["Step 0 calls a remote object at /app/dao/contracts/dao-blog.rsh:123:23:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.","Step 2 calls a remote object at /app/dao/contracts/dao-blog.rsh:182:32:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards."]},_ETH={ABI:`[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T6",
                "name": "v2902",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem5",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem6",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem7",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T7",
                "name": "v2903",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v2904",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v2905",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v2906",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v2907",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v2908",
                "type": "address"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "MemberExited",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "MemberJoined",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T5",
            "name": "which",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "elem0",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "_AllocateFunds",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "admin",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "registerSelf",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "quorum",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "openTreasury",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "_ChangeAdmin",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "_EjectMember",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Stop",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "v0",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v1",
        "type": "address"
      }
    ],
    "name": "MotionCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "enum _enum_T5",
            "name": "which",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "elem0",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "_AllocateFunds",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "admin",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "registerSelf",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "quorum",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "openTreasury",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "_ChangeAdmin",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "_EjectMember",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Stop",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "v1",
        "type": "tuple"
      }
    ],
    "name": "MotionEnacted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "enum _enum_T5",
            "name": "which",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "elem0",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "_AllocateFunds",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "admin",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "registerSelf",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "quorum",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "openTreasury",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "_ChangeAdmin",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "_EjectMember",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Stop",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "v1",
        "type": "tuple"
      }
    ],
    "name": "MotionFailed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "enum _enum_T5",
            "name": "which",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "elem0",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "_AllocateFunds",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "admin",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "registerSelf",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "quorum",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "openTreasury",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "_ChangeAdmin",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "_EjectMember",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Stop",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "v1",
        "type": "tuple"
      }
    ],
    "name": "MotionRejected",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T6",
                "name": "v2902",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem5",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem6",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem7",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T7",
                "name": "v2903",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v2904",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v2905",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v2906",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v2907",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v2908",
                "type": "address"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T25",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem2",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem3",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem4",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem5",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem6",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem7",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T7",
                        "name": "elem0",
                        "type": "tuple"
                      },
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "_i",
                            "type": "uint256"
                          },
                          {
                            "internalType": "bool",
                            "name": "_sign",
                            "type": "bool"
                          }
                        ],
                        "internalType": "struct T19",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_comment0_343",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_join0_343",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_leave0_343",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem2",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem3",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T6",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_post0_343",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T5",
                            "name": "which",
                            "type": "uint8"
                          },
                          {
                            "components": [
                              {
                                "internalType": "address payable",
                                "name": "elem0",
                                "type": "address"
                              },
                              {
                                "internalType": "uint256",
                                "name": "elem1",
                                "type": "uint256"
                              }
                            ],
                            "internalType": "struct T3",
                            "name": "_AllocateFunds",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "address payable",
                                "name": "admin",
                                "type": "address"
                              },
                              {
                                "internalType": "bool",
                                "name": "registerSelf",
                                "type": "bool"
                              },
                              {
                                "internalType": "uint256",
                                "name": "fee",
                                "type": "uint256"
                              },
                              {
                                "internalType": "uint256",
                                "name": "quorum",
                                "type": "uint256"
                              },
                              {
                                "internalType": "bool",
                                "name": "openTreasury",
                                "type": "bool"
                              }
                            ],
                            "internalType": "struct T4",
                            "name": "_ChangeAdmin",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable",
                            "name": "_EjectMember",
                            "type": "address"
                          },
                          {
                            "internalType": "bool",
                            "name": "_None",
                            "type": "bool"
                          },
                          {
                            "internalType": "bool",
                            "name": "_Stop",
                            "type": "bool"
                          }
                        ],
                        "internalType": "struct T5",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_registerProposal0_343",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T23",
                            "name": "which",
                            "type": "uint8"
                          },
                          {
                            "internalType": "bool",
                            "name": "_Against",
                            "type": "bool"
                          },
                          {
                            "internalType": "bool",
                            "name": "_For",
                            "type": "bool"
                          }
                        ],
                        "internalType": "struct T23",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T24",
                    "name": "_voteProposal0_343",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T25",
                "name": "v3452",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2924",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v3495",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v4586",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v5665",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v6745",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v7950",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v9175",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v9722",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem4",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem5",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem6",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem7",
            "type": "bytes32"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "v1",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "_i",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "_sign",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "v2",
        "type": "tuple"
      }
    ],
    "name": "commented",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "v1",
        "type": "tuple"
      }
    ],
    "name": "posted",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Proposal",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T5",
            "name": "which",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "elem0",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "_AllocateFunds",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "admin",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "registerSelf",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "quorum",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "openTreasury",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "_ChangeAdmin",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "_EjectMember",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Stop",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T25",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem2",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem3",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem4",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem5",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem6",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem7",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T7",
                        "name": "elem0",
                        "type": "tuple"
                      },
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "_i",
                            "type": "uint256"
                          },
                          {
                            "internalType": "bool",
                            "name": "_sign",
                            "type": "bool"
                          }
                        ],
                        "internalType": "struct T19",
                        "name": "elem1",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_comment0_343",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_join0_343",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_leave0_343",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem2",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem3",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T6",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_post0_343",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T5",
                            "name": "which",
                            "type": "uint8"
                          },
                          {
                            "components": [
                              {
                                "internalType": "address payable",
                                "name": "elem0",
                                "type": "address"
                              },
                              {
                                "internalType": "uint256",
                                "name": "elem1",
                                "type": "uint256"
                              }
                            ],
                            "internalType": "struct T3",
                            "name": "_AllocateFunds",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "address payable",
                                "name": "admin",
                                "type": "address"
                              },
                              {
                                "internalType": "bool",
                                "name": "registerSelf",
                                "type": "bool"
                              },
                              {
                                "internalType": "uint256",
                                "name": "fee",
                                "type": "uint256"
                              },
                              {
                                "internalType": "uint256",
                                "name": "quorum",
                                "type": "uint256"
                              },
                              {
                                "internalType": "bool",
                                "name": "openTreasury",
                                "type": "bool"
                              }
                            ],
                            "internalType": "struct T4",
                            "name": "_ChangeAdmin",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable",
                            "name": "_EjectMember",
                            "type": "address"
                          },
                          {
                            "internalType": "bool",
                            "name": "_None",
                            "type": "bool"
                          },
                          {
                            "internalType": "bool",
                            "name": "_Stop",
                            "type": "bool"
                          }
                        ],
                        "internalType": "struct T5",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_registerProposal0_343",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T23",
                            "name": "which",
                            "type": "uint8"
                          },
                          {
                            "internalType": "bool",
                            "name": "_Against",
                            "type": "bool"
                          },
                          {
                            "internalType": "bool",
                            "name": "_For",
                            "type": "bool"
                          }
                        ],
                        "internalType": "struct T23",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T24",
                    "name": "_voteProposal0_343",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T25",
                "name": "v3452",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem4",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem5",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem6",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem7",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T7",
        "name": "_a0",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "_i",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "_sign",
            "type": "bool"
          }
        ],
        "internalType": "struct T19",
        "name": "_a1",
        "type": "tuple"
      }
    ],
    "name": "comment",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentVotes",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "info",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T6",
            "name": "name",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "founder",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "admin",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem4",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem5",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem6",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem7",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T7",
            "name": "description",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "fee",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "registerSelf",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "quorum",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "openTreasury",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v19462",
        "type": "address"
      }
    ],
    "name": "isMember",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "join",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "leave",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v19464",
        "type": "address"
      }
    ],
    "name": "myRank",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T6",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "post",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T5",
            "name": "which",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "elem0",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "_AllocateFunds",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "admin",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "registerSelf",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "quorum",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "openTreasury",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "_ChangeAdmin",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "_EjectMember",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Stop",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "registerProposal",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T23",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_Against",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_For",
            "type": "bool"
          }
        ],
        "internalType": "struct T23",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "voteProposal",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,Bytecode:"0x608060405260405162006bc338038062006bc3833981016040819052620000269162000df5565b600080554360035562000038620007cc565b7f927c905cb3af375a1b9a2cd5adae779caf03eceeb088d42dc5d109b736c54f6833836040516200006b92919062000eef565b60405180910390a1620000813415600c620003d7565b6200008f6001600d620003d7565b620000ae60018360200151606001511015600e620003d760201b60201c565b620000bd600019600a62000402565b808252602083015160600151620000d79111600f620003d7565b3060208281019182526040808401805160001990528051600090840181905233815260048452828120805460ff1916600190811782559251805193820193909355918401516002909201919091554761010086015292518583015180519301519151633dc9135360e21b936200015293909160240162000fe2565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600080846020015160c001516001600160a01b0316600084604051620001ae919062001081565b60006040518083038185875af1925050503d8060008114620001ed576040519150601f19603f3d011682016040523d82523d6000602084013e620001f2565b606091505b509092509050620002068282601062000423565b506200021e478561010001516200041e60201b60201c565b60608501805191909152516080850181905260408051825181526020928301511515928101929092527f6a9fb5fd43bcceed0b5af2627a822f4e765a06b964b47ff716ed1915f8eeab5c9450019150620002759050565b60405180910390a16200028b60016011620003d7565b6080810151516200029f90156012620003d7565b60a08181018051339052602084810180519093015182518201528251608090810151835190151560409182015284516060908101518551820152945181015193519315159382019390935260c0850180516003905280516000920182905260e086018051839052805190930182905251825190930192909252519091015262000327620008b0565b80513390526020808401805151835183015280518201518351604090810191909152905160c09081015184516001600160a01b0391821660609182015286518651608090810191909152878601518751931660a09384015287840151875190940193909352908601518486018051919091528051600195019490945260e0860151845190930192909252825143920191909152808401515191510152620003ce8162000469565b5050506200141b565b81620003fe5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000818381620004165762000416620010bf565b049392505050565b900390565b606083156200043457508162000462565b825115620004455782518084602001fd5b60405163100960cb60e01b815260048101839052602401620003f5565b9392505050565b6200049760405180608001604052806000151581526020016000815260200160008152602001600081525090565b816020015160200151156200063b5760208201516040015160600151600a1180158252620004f65760208201516040015160600151620004eb90620004e3906200041e81600a62000759565b600a62000402565b6020820152620004fe565b600160208201525b62000508620008d9565b8251516001600160a01b0390811682528351602090810151818401528451604090810151818501528551606090810151841681860152865160809081015181870152875160a090810151861690870152875160c0908101519087015283880180515160e0880152805184015161010088015280518201516101208801528051515190951661014087015284515184015161016087015284515183015115156101808701528451518201516101a0870152845151015115156101c086015283518201518201516101e0860152925181015190920151610200840152835115156102208401528381015161024084015260036000554360015590516200060f91839101620011c0565b604051602081830303815290604052600290805190602001906200063592919062000a0a565b50505050565b600060408201526200065060016013620003d7565b60208201518051516080909101516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562000695573d6000803e3d6000fd5b50604081015147908110620006c057620006ba8183604001516200041e60201b60201c565b620006c3565b60005b606083018190526040830151620006fd9250600091620006f391620006e9919062000775565b6060850151900390565b10156014620003d7565b6020820151515160608201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562000740573d6000803e3d6000fd5b5060008080556001819055620003fe9060029062000a99565b60008183816200076d576200076d620010bf565b069392505050565b600082620007848382620013b7565b9150811015620007c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401620003f5565b92915050565b6040518061012001604052806000815260200160006001600160a01b031681526020016200080d604051806040016040528060008152602001600081525090565b8152602001620008326040518060400160405280600081526020016000151581525090565b8152602001620008576040518060400160405280600081526020016000151581525090565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526020016200089462000adb565b8152602001620008a362000b5e565b8152602001600081525090565b6040518060400160405280620008c562000b81565b8152602001620008d462000c1e565b905290565b6040805161026081018252600080825282516080810184528181526020818101839052938101829052606081019190915290918201908152604080516101008101825260008082526020828101829052928201819052606082018190526080820181905260a0820181905260c0820181905260e082015291019081526000602082018190526040820181905260608201526080016200097762000adb565b81526040805160a081018252600080825260208281018290529282018190526060820181905260808201529101908152602001620009b462000b5e565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c082015260e001620009ed62000adb565b815260200160008152602001600015158152602001600081525090565b82805462000a1890620013de565b90600052602060002090601f01602090048101928262000a3c576000855562000a87565b82601f1062000a5757805160ff191683800117855562000a87565b8280016001018555821562000a87579182015b8281111562000a8757825182559160200191906001019062000a6a565b5062000a9592915062000c78565b5090565b50805462000aa790620013de565b6000825580601f1062000ab8575050565b601f01602090049060005260206000209081019062000ad8919062000c78565b50565b6040805160c08101909152806000815260200162000b15604051806040016040528060006001600160a01b03168152602001600081525090565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526000602082018190526040820181905260609091015290565b60405180608001604052806000815260200160008152602001620008a362000adb565b6040805160e081018252600080825282516080810184528181526020818101839052938101829052606081019190915290918201908152604080516101008101825260008082526020828101829052928201819052606082018190526080820181905260a0820181905260c0820181905260e08201529101908152600060208201819052604082018190526060820152608001620008d462000adb565b6040805161014081018252600060a0820181815260c0830182905260e08301829052610100830182905261012083018290528252602082015290810162000c6462000b5e565b815260200160008152602001600081525090565b5b8082111562000a95576000815560010162000c79565b604080519081016001600160401b038111828210171562000cc057634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b038111828210171562000cc057634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b038111828210171562000cc057634e487b7160e01b600052604160045260246000fd5b600061010080838503121562000d3d57600080fd5b604051908101906001600160401b038211818310171562000d6e57634e487b7160e01b600052604160045260246000fd5b81604052809250835181526020840151602082015260408401516040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152505092915050565b8051801515811462000dd857600080fd5b919050565b80516001600160a01b038116811462000dd857600080fd5b600081830361024081121562000e0a57600080fd5b62000e1462000c8f565b83518152601f19820191506102208083121562000e3057600080fd5b62000e3a62000cc6565b608084121562000e4957600080fd5b62000e5362000cf7565b93506020860151845260408601516020850152606086015160408501526080860151606085015283815262000e8c8760a0880162000d28565b602082015262000ea06101a0870162000dc7565b60408201526101c0860151606082015262000ebf6101e0870162000dc7565b608082015261020086015160a082015262000edc82870162000ddd565b60c0820152602083015250949350505050565b60006102608201905060018060a01b03808516835283516020840152602084015162000f40604085018251805182526020810151602083015260408101516040830152606081015160608301525050565b602081015162000f9c60c0860182805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b50604081015115156101c085015260608101516101e08501526080810151151561020085015260a081015161022085015260c00151166102409092019190915292915050565b6001600160a01b03841681526101a08101620010226020830185805182526020810151602083015260408101516040830152606081015160608301525050565b6200107960a0830184805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b949350505050565b6000825160005b81811015620010a4576020818601810151858301520162001088565b81811115620010b4576000828501525b509190910192915050565b634e487b7160e01b600052601260045260246000fd5b805160058110620010f657634e487b7160e01b600052602160045260246000fd5b825260208181015180516001600160a01b03168285015201516040808401919091528101516200115e606084018280516001600160a01b0316825260208082015115159083015260408082015190830152606080820151908301526080908101511515910152565b5060608101516001600160a01b03166101008301526080810151151561012083015260a00151151561014090910152565b80518252602081015160208301526040810151620011b16040840182620010d5565b50606001516101a09190910152565b81516001600160a01b0316815261084081016020830151620012066020840182805182526020810151602083015260408101516040830152606081015160608301525050565b5060408301516200126360a0840182805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b5060608301516101a062001281818501836001600160a01b03169052565b608085015191506101c0828186015260a086015192506101e0620012af818701856001600160a01b03169052565b60c08701519350610200620012c781880186620010d5565b60e088015180516001600160a01b03166103608901526020810151610380890152604081015115156103a089015260608101516103c08901526080015115156103e08801526101008801519450620013246104008801866200118f565b6101208801516105c08801526101408801516001600160a01b03166105e08801526101608801516106008801526101808801511515610620880152838801516106408801528288015115156106608801528188015194506200138b610680880186620010d5565b8701516107e0870152505050610220840151151561080084015250610240909201516108209091015290565b60008219821115620013d957634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620013f357607f821691505b602082108114156200141557634e487b7160e01b600052602260045260246000fd5b50919050565b615798806200142b6000396000f3fe6080604052600436106100eb5760003560e01c8063994ba4d211610084578063c4d7841a11610056578063c4d7841a14610245578063d292f36b14610267578063d66d9e191461027a578063dff5c8aa1461028257005b8063994ba4d2146101e5578063a230c524146101fa578063ab53f2c61461021a578063b688a3631461023d57005b80633bc5b7bf116100bd5780633bc5b7bf146101705780635cc4f6491461019d57806383230757146101bd5780638dae6f17146101d257005b8063170aa95b146100f45780631a777ba8146101075780631e93b0f11461012f578063370158ea1461014e57005b366100f257005b005b6100f26101023660046145ba565b610295565b61011a610115366004614804565b6102b9565b60405190151581526020015b60405180910390f35b34801561013b57600080fd5b506003545b604051908152602001610126565b34801561015a57600080fd5b506101636102ca565b604051610126919061486e565b34801561017c57600080fd5b5061019061018b366004614914565b6102e3565b6040516101269190614957565b3480156101a957600080fd5b506101406101b8366004614914565b6102f4565b3480156101c957600080fd5b50600154610140565b61011a6101e03660046149e3565b61031e565b3480156101f157600080fd5b50610140610329565b34801561020657600080fd5b5061011a610215366004614914565b610335565b34801561022657600080fd5b5061022f610358565b604051610126929190614a2b565b61011a6103f5565b34801561025157600080fd5b5061025a610404565b6040516101269190614b10565b61011a610275366004614bc5565b610417565b61011a610423565b61011a610290366004614d29565b61042d565b61029d613b18565b6102b56102af36849003840184614df8565b82610438565b5050565b60006102c48261306e565b92915050565b6102d2613b4d565b60006102dd816130a9565b91505090565b6102eb613bb8565b6102c4826131f1565b60408051602081019091526001600160a01b0382168152600090610317816132c5565b9392505050565b60006102c4826133f2565b6000806102dd8161342d565b60408051602081019091526001600160a01b0382168152600090610317816134fc565b60006060600054600280805461036d90614ed1565b80601f016020809104026020016040519081016040528092919081815260200182805461039990614ed1565b80156103e65780601f106103bb576101008083540402835291602001916103e6565b820191906000526020600020905b8154815290600101906020018083116103c957829003601f168201915b50505050509050915091509091565b60006103ff6135e0565b905090565b61040c613bf6565b60006102dd81613610565b600061031783836136db565b60006103ff613715565b60006102c482613745565b6104486003600054146039613780565b815161046390158061045c57508251600154145b603a613780565b60008080556002805461047590614ed1565b80601f01602080910402602001604051908101604052809291908181526020018280546104a190614ed1565b80156104ee5780601f106104c3576101008083540402835291602001916104ee565b820191906000526020600020905b8154815290600101906020018083116104d157829003601f168201915b50505050508060200190518101906105069190615183565b9050610510613c4b565b7f5eb2016dfa8368fbc7b03e4ae6060fd74df6fa9a073c025acc79ae61d1151d86338560405161054192919061533f565b60405180910390a1600060208501515151600581111561056357610563614931565b14156106db57602080850151510151815261058060016015613780565b61058c34156016613780565b6105b4600161059a336131f1565b5160018111156105ac576105ac614931565b146017613780565b604051600081527f5d24cef8aa2fb7a19d0bda0da8e220ce05666c1c1fefb0f1dda876c507043fa59060200160405180910390a160008352805180516020909101516040517fac86fd75f7431de078e910f101752c87e40273b5835704ff34559f24ff41187592610626923392615408565b60405180910390a1610636614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c08088015186519091015260e0870151838601805191909152805160019401939093526101008701518351909201919091528151439101526101208501519051909101526106d5816137a6565b50613068565b60016020850151515160058111156106f5576106f5614931565b14156108ed5761070b826101c001516018613780565b6107336000610719336131f1565b51600181111561072b5761072b614931565b146019613780565b61012082015161074c901983610160015110601a613780565b61012082015161016083015101602082015261076a6001601b613780565b61077c8261016001513414601c613780565b6020810151610794901983610160015110601d613780565b604051600081527f7a672d0e8f31c589dc0d3755e098196d99458ac46f98b9e05ef1add0a02bbf579060200160405180910390a160006020848101829052610240840151604084810180519290925281518301849052338085526004845293819020805460ff191660019081178255925180519382019390935591830151600290920191909155519182527f0abf3b3f643594d958297062a019458e27d7766629590ac621aa1000fa1298ab910160405180910390a1610852614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c08088015186519091015260e08701518386018051919091528051600190850152610100880151815190930192909252815143910152908401519051909101526106d5816137a6565b600260208501515151600581111561090757610907614931565b14156109dd57610935600161091b336131f1565b51600181111561092d5761092d614931565b14601e613780565b6109416001601f613780565b61094d34156020613780565b604051600081527f39c6d72bf2beb699a901ffc2fbefa6894e1240b3c7d551de5f72b24ccce03f099060200160405180910390a1600060408481018290523380835260046020908152828420805461ffff19168155600181018590556002019390935590519081527f81df7148ed3a9aa51bafe04f44371e89b96f47294267fbf6ab28b7aa8c87b3869101610626565b60036020850151515160058111156109f7576109f7614931565b1415610ac057602084015151608001516060820152610a1860016021613780565b610a2434156022613780565b610a4c6001610a32336131f1565b516001811115610a4457610a44614931565b146023613780565b604051600081527fb8308aa082a69bb2d9cdd1e57517277e343ae2050a17797e661c23c346321a279060200160405180910390a16000606080850191909152810151516040517fce04ae17e1fcd552b5bab3e870a4e31342815a3654ee1dafb53bfb837a0a97a89161062691339190615443565b6004602085015151516005811115610ada57610ada614931565b14156112c55760208401515160a001516080820152610afb60016024613780565b610b0734156025613780565b81610220015115610b4157610200820151610b3790610b3090610b2b81600a613a5e565b900390565b600a613a77565b60a0820152610b49565b600160a08201525b60c08101805160009081905290516020015260a0810151610ba8906001610b6f336131f1565b516001811115610b8157610b81614931565b14610b90578260c00151610b9e565b610b99336131f1565b604001515b5110156026613780565b610240820151610bf6906001610bbd336131f1565b516001811115610bcf57610bcf614931565b14610bde578260c00151610bec565b610be7336131f1565b604001515b5110156027613780565b60006101e0830151516004811115610c1057610c10614931565b1415610c95576101e082015160209081015161010083018190526101208085015191909201511090820152610180820151610c82576001610c59826101000151600001516131f1565b516001811115610c6b57610c6b614931565b14610c77576000610c89565b806101200151610c89565b8061012001515b151560e0820152610e91565b60016101e0830151516004811115610caf57610caf614931565b1415610da2576101e082015160400151610140820181905251610cd1906131f1565b6101608201526101408101516060015115610d015760808201516101408201516060015110610180820152610d0a565b60006101808201525b6101608101515160019081811115610d2457610d24614931565b14610d30576000610d6d565b6102408201516001610160830151516001811115610d5057610d50614931565b14610d5f578160c00151610d6a565b816101600151604001515b51115b610d78576000610d7f565b8061018001515b610d8a576000610c89565b610140810151604001516000191160e0820152610e91565b60026101e0830151516004811115610dbc57610dbc614931565b1415610e3d576101e0820151606001516001600160a01b03166101a08201819052600190610de9906131f1565b516001811115610dfb57610dfb614931565b14610e07576000610c89565b8161014001516001600160a01b0316816101a001516001600160a01b031614610e31576001610c89565b600060e0820152610e91565b60036101e0830151516004811115610e5757610e57614931565b1415610e6957600060e0820152610e91565b60046101e0830151516004811115610e8357610e83614931565b1415610e9157600160e08201525b610eae8160e00151610ea4576001610ea7565b60005b6028613780565b610ec2600119836102000151106029613780565b6000608082015151516004811115610edc57610edc614931565b1415610f61576080810151516020908101516101e0830181905261012084015191015110610200820152610180820151610f4d576001610f24826101e00151600001516131f1565b516001811115610f3657610f36614931565b14610f42576000610f54565b806102000151610f54565b8061020001515b15156101c0820152611161565b6001608082015151516004811115610f7b57610f7b614931565b141561106f5760808101515160400151610220820181905251610f9d906131f1565b6102408201526102208101516060015115610fcd5760808201516102208201516060015110610260820152610fd6565b60006102608201525b6102408101515160019081811115610ff057610ff0614931565b14610ffc576000611039565b610240820151600161024083015151600181111561101c5761101c614931565b1461102b578160c00151611036565b816102400151604001515b51115b61104457600061104b565b8061026001515b611056576000610f54565b61022081015160400151600019116101c0820152611161565b600260808201515151600481111561108957611089614931565b141561110b57608081015151606001516001600160a01b031661028082018190526001906110b6906131f1565b5160018111156110c8576110c8614931565b146110d4576000610f54565b8161014001516001600160a01b03168161028001516001600160a01b0316146110fe576001610f54565b60006101c0820152611161565b600360808201515151600481111561112557611125614931565b14156111385760006101c0820152611161565b600460808201515151600481111561115257611152614931565b14156111615760016101c08201525b611171816101c00151602a613780565b604051600081527f4286f35d2c5a7272dae7c3467307fbaeb2dc926caffa4a127296af9a6807c5c59060200160405180910390a16000608080850191909152810151516040517f18f2698e4794214ca6e5e526501521f9e9e882fe9c8490e38a1a71c7bad7a10c916111e4913390615481565b60405180910390a16102a0810180516000908190528151602001526080820151519051604001526102008201516001016102a082015160600152611226614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c08088015186519091015260e0870151838601805191909152805160019401939093526102a08601518351909201919091528151439101526101208501519051909101526106d5816137a6565b60056020850151515160058111156112df576112df614931565b14156130685760208401515160c001516102c08201526113016001602b613780565b61130d3415602c613780565b8161022001511561133c5761020082015161133190610b3090610b2b81600a613a5e565b6102e0820152611345565b60016102e08201525b610300810180516000908190529051602001526001611363336131f1565b51600181111561137557611375614931565b1461138557806103000151611393565b61138e336131f1565b604001515b61032082018190526102e082015190516113b0911115602d613780565b60006101e08301515160048111156113ca576113ca614931565b141561144f576101e082015160209081015161036083018190526101208401519101511061038082015261018082015161143b576001611412826103600151600001516131f1565b51600181111561142457611424614931565b14611430576000611442565b806103800151611442565b8061038001515b1515610340820152611650565b60016101e083015151600481111561146957611469614931565b141561155e576101e0820151604001516103a082018190525161148b906131f1565b6103c08201526103a081015160600151156114bb5760808201516103a082015160600151106103e08201526114c4565b60006103e08201525b6103c081015151600190818111156114de576114de614931565b146114ea576000611528565b61024082015160016103c083015151600181111561150a5761150a614931565b1461151a57816103000151611525565b816103c00151604001515b51115b61153357600061153a565b806103e001515b611545576000611442565b6103a08101516040015160001911610340820152611650565b60026101e083015151600481111561157857611578614931565b14156115fa576101e0820151606001516001600160a01b031661040082018190526001906115a5906131f1565b5160018111156115b7576115b7614931565b146115c3576000611442565b8161014001516001600160a01b03168161040001516001600160a01b0316146115ed576001611442565b6000610340820152611650565b60036101e083015151600481111561161457611614614931565b1415611627576000610340820152611650565b60046101e083015151600481111561164157611641614931565b14156116505760016103408201525b611660816103400151602e613780565b610100820151602001511561168d576101008201515161168d90198361010001516020015110602f613780565b61010082015151156116b357610100820151602081015190516116b39119116030613780565b6101a0820151610100830151602081015190516116d4929101106031613780565b6116ef82610200015182610320015160200151106032613780565b60006102c08201515151600181111561170a5761170a614931565b141561174157610100820180516020015161044083015152515160010161044082018051602001919091525161042082015261178f565b60016102c08201515151600181111561175c5761175c614931565b141561178f5761010082015160200151600101610460820180519190915261010083015151815160200152516104208201525b610420810151602081015190516117a99119116033613780565b610420810151516117c7901982610420015160200151106034613780565b604051600081527f1e3f075df2e997395768f495d715590cce93f812fac23488834630e0c57801509060200160405180910390a1600060a084015261032081015151600019111561183f57610320810151516001016104a0820180519190915261020083015181516020015251610480820152611865565b610320810151516104c08201805191909152610200830151815160200152516104808201525b336000908152600460209081526040909120805460ff19166001908117825561048084015180519183019190915590910151600290910155610220820151156118cc576102008201516118c190610b3090610b2b81600a613a5e565b6104e08201526118d5565b60016104e08201525b60006101e08301515160048111156118ef576118ef614931565b1415611974576101e0820151602090810151610520830181905261012084015191015110610540820152610180820151611960576001611937826105200151600001516131f1565b51600181111561194957611949614931565b14611955576000611967565b806105400151611967565b8061054001515b1515610500820152611b75565b60016101e083015151600481111561198e5761198e614931565b1415611a83576101e0820151604001516105608201819052516119b0906131f1565b61058082015261056081015160600151156119e057608082015161056082015160600151106105a08201526119e9565b60006105a08201525b6105808101515160019081811115611a0357611a03614931565b14611a0f576000611a4d565b6104e08101516001610580830151516001811115611a2f57611a2f614931565b14611a3f57816103000151611a4a565b816105800151604001515b51115b611a58576000611a5f565b806105a001515b611a6a576000611967565b6105608101516040015160001911610500820152611b75565b60026101e0830151516004811115611a9d57611a9d614931565b1415611b1f576101e0820151606001516001600160a01b03166105c08201819052600190611aca906131f1565b516001811115611adc57611adc614931565b14611ae8576000611967565b8161014001516001600160a01b0316816105c001516001600160a01b031614611b12576001611967565b6000610500820152611b75565b60036101e0830151516004811115611b3957611b39614931565b1415611b4c576000610500820152611b75565b60046101e0830151516004811115611b6657611b66614931565b1415611b755760016105008201525b6101a082015161042082015180516020909101510110612f885761042081015160208101519051116105e0820152610500810151611bb4576000611bbb565b806105e001515b156124295760006101e0830151516004811115611bda57611bda614931565b1415611d59576101e08201805160200151610600830152610200830151905160405160008051602061572383398151915292611c179290916154a9565b60405180910390a1610120820151610600820151602001519003610620820152611c4360016035613780565b61060081015180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611c87573d6000803e3d6000fd5b506106408101805160009081905281516020015260c0830151815160400152610200830151905160600152611cba614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c08088015186519091015260e0870151838601805191909152805160019401939093526106408601518351909201919091528151439101526106208401519051909101526106d5816137a6565b60016101e0830151516004811115611d7357611d73614931565b1415611eef576101e0820180516040908101516106608401526102008401519151905160008051602061572383398151915292611db19290916154a9565b60405180910390a161068081018051600090819052815160209081019190915260c08401518251604090810191909152610200850151925160609081019390935261066084018051516106a0860180516001600160a01b039092169091528151830151815185015281516080908101518251901515940193909352815185015181519095019490945251909101519151911515910152611e4f614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c0808801518651909101526106a0860151838601805191909152805160019401939093526106808601518351909201919091528151439101526101208501519051909101526106d5816137a6565b60026101e0830151516004811115611f0957611f09614931565b1415612095576101e082018051606001516001600160a01b03166106c0830152610200830151905160405160008051602061572383398151915292611f4f9290916154a9565b60405180910390a16106c0810180516001600160a01b039081166000908152600460209081526040808320805461ffff19168155600181018490556002019290925592519051911681527f81df7148ed3a9aa51bafe04f44371e89b96f47294267fbf6ab28b7aa8c87b386910160405180910390a16106e08101805160009081905281516020015260c0830151815160400152610200830151905160600152611ff6614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c08088015186519091015260e0870151838601805191909152805160019401939093526106e08601518351909201919091528151439101526101208501519051909101526106d5816137a6565b60036101e08301515160048111156120af576120af614931565b14156121b757600080516020615723833981519152826102000151836101e001516040516120de9291906154a9565b60405180910390a16107008101805160009081905281516020015260c0830151815160400152610200830151905160600152612118614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c08088015186519091015260e0870151838601805191909152805160019401939093526107008601518351909201919091528151439101526101208501519051909101526106d5816137a6565b60046101e08301515160048111156121d1576121d1614931565b141561242457600080516020615723833981519152826102000151836101e001516040516122009291906154a9565b60405180910390a14761090082015260a0820151604080516001600160a01b0392831660248083019190915282518083039091018152604490910182526020810180516001600160e01b0316636b3894c560e01b179052606085015191519092600092839291169082906122759086906154be565b60006040518083038185875af1925050503d80600081146122b2576040519150601f19603f3d011682016040523d82523d6000602084013e6122b7565b606091505b50915091506122c882826036613a90565b50610900840151470361072085018051919091525161074085018190526040517f8135b61767df646375a6e4daf53c23fd4545069d1d1e9fe89e79fd15e10b005c945061231893509091506154da565b60405180910390a1610120820151610740820151510161076082015261234060016037613780565b6107408101515161235390156038613780565b6107808101805160009081905281516020015260c0830151815160400152610200830151905160600152612385614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c08088015186519091015260e0870151838601805191909152805160009401939093526107808601518351909201919091528151439101526107608401519051909101526106d5816137a6565b613068565b806105e00151156129de5760006101e083015151600481111561244e5761244e614931565b141561255657600080516020615743833981519152826102000151836101e0015160405161247d9291906154a9565b60405180910390a16107a08101805160009081905281516020015260c08301518151604001526102008301519051606001526124b7614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c08088015186519091015260e0870151838601805191909152805160019401939093526107a08601518351909201919091528151439101526101208501519051909101526106d5816137a6565b60016101e083015151600481111561257057612570614931565b141561267857600080516020615743833981519152826102000151836101e0015160405161259f9291906154a9565b60405180910390a16107c08101805160009081905281516020015260c08301518151604001526102008301519051606001526125d9614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c08088015186519091015260e0870151838601805191909152805160019401939093526107c08601518351909201919091528151439101526101208501519051909101526106d5816137a6565b60026101e083015151600481111561269257612692614931565b141561279a57600080516020615743833981519152826102000151836101e001516040516126c19291906154a9565b60405180910390a16107e08101805160009081905281516020015260c08301518151604001526102008301519051606001526126fb614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c08088015186519091015260e0870151838601805191909152805160019401939093526107e08601518351909201919091528151439101526101208501519051909101526106d5816137a6565b60036101e08301515160048111156127b4576127b4614931565b14156128bc57600080516020615743833981519152826102000151836101e001516040516127e39291906154a9565b60405180910390a16108008101805160009081905281516020015260c083015181516040015261020083015190516060015261281d614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c08088015186519091015260e0870151838601805191909152805160019401939093526108008601518351909201919091528151439101526101208501519051909101526106d5816137a6565b60046101e08301515160048111156128d6576128d6614931565b141561242457600080516020615743833981519152826102000151836101e001516040516129059291906154a9565b60405180910390a16108208101805160009081905281516020015260c083015181516040015261020083015190516060015261293f614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c08088015186519091015260e0870151838601805191909152805160019401939093526108208601518351909201919091528151439101526101208501519051909101526106d5816137a6565b60006101e08301515160048111156129f8576129f8614931565b1415612b0057600080516020615703833981519152826102000151836101e00151604051612a279291906154a9565b60405180910390a16108408101805160009081905281516020015260c0830151815160400152610200830151905160600152612a61614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c08088015186519091015260e0870151838601805191909152805160019401939093526108408601518351909201919091528151439101526101208501519051909101526106d5816137a6565b60016101e0830151516004811115612b1a57612b1a614931565b1415612c2257600080516020615703833981519152826102000151836101e00151604051612b499291906154a9565b60405180910390a16108608101805160009081905281516020015260c0830151815160400152610200830151905160600152612b83614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c08088015186519091015260e0870151838601805191909152805160019401939093526108608601518351909201919091528151439101526101208501519051909101526106d5816137a6565b60026101e0830151516004811115612c3c57612c3c614931565b1415612d4457600080516020615703833981519152826102000151836101e00151604051612c6b9291906154a9565b60405180910390a16108808101805160009081905281516020015260c0830151815160400152610200830151905160600152612ca5614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c08088015186519091015260e0870151838601805191909152805160019401939093526108808601518351909201919091528151439101526101208501519051909101526106d5816137a6565b60036101e0830151516004811115612d5e57612d5e614931565b1415612e6657600080516020615703833981519152826102000151836101e00151604051612d8d9291906154a9565b60405180910390a16108a08101805160009081905281516020015260c0830151815160400152610200830151905160600152612dc7614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c08088015186519091015260e0870151838601805191909152805160019401939093526108a08601518351909201919091528151439101526101208501519051909101526106d5816137a6565b60046101e0830151516004811115612e8057612e80614931565b141561242457600080516020615703833981519152826102000151836101e00151604051612eaf9291906154a9565b60405180910390a16108c08101805160009081905281516020015260c0830151815160400152610200830151905160600152612ee9614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c08088015186519091015260e0870151838601805191909152805160019401939093526108c08601518351909201919091528151439101526101208501519051909101526106d5816137a6565b610420810180516020908101516108e084018051919091529151518251909101526101e0830151815160400152610200830151905160600152612fc9614142565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855190851690820152608080880151865182015260a0808901518751961695019490945260c08088015186519091015260e0870151838601805191909152805160019401939093526108e08601518351909201919091528151439101526101208501519051909101526106d5816137a6565b50505050565b6000613078614162565b6020810180515160059052515160c00151839052613094613b18565b61309e8282610438565b60a001519392505050565b6130b1613b4d565b600360005414156131e0576000600280546130cb90614ed1565b80601f01602080910402602001604051908101604052809291908181526020018280546130f790614ed1565b80156131445780601f1061311957610100808354040283529160200191613144565b820191906000526020600020905b81548152906001019060200180831161312757829003601f168201915b505050505080602001905181019061315c9190615183565b905061316661417c565b602080830151825152825182516001600160a01b03918216920191909152610140830151825191166040918201528201518151606001526101608201518151608001526101c0820151815190151560a0909101526101a0820151815160c0015261018090910151815190151560e091909101525192915050565b6131ec60006009613780565b919050565b6131f9613bb8565b60016001600160a01b03831660009081526004602052604090205460ff16600181111561322857613228614931565b14156132b6576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561326957613269614931565b600181111561327a5761327a614931565b81528154610100900460ff1615156020808301919091526040805180820182526001850154815260029094015491840191909152015292915050565b60008082526020820152919050565b6000600360005414156133e6576000600280546132e190614ed1565b80601f016020809104026020016040519081016040528092919081815260200182805461330d90614ed1565b801561335a5780601f1061332f5761010080835404028352916020019161335a565b820191906000526020600020905b81548152906001019060200180831161333d57829003601f168201915b50505050508060200190518101906133729190615183565b9050613394604080516060810182526000602082018181529282015290815290565b8051600090819052815160200152600184516133af906131f1565b5160018111156133c1576133c1614931565b146133cd5780516133dd565b83516133d8906131f1565b604001515b51949350505050565b6131ec6000600b613780565b60006133fc614162565b6020810180515160039052515160800151839052613418613b18565b6134228282610438565b606001519392505050565b6000600360005414156134f05760006002805461344990614ed1565b80601f016020809104026020016040519081016040528092919081815260200182805461347590614ed1565b80156134c25780601f10613497576101008083540402835291602001916134c2565b820191906000526020600020905b8154815290600101906020018083116134a557829003601f168201915b50505050508060200190518101906134da9190615183565b6101008101516020810151905191925001610317565b6131ec60006008613780565b6000600360005414156135d45760006002805461351890614ed1565b80601f016020809104026020016040519081016040528092919081815260200182805461354490614ed1565b80156135915780601f1061356657610100808354040283529160200191613591565b820191906000526020600020905b81548152906001019060200180831161357457829003601f168201915b50505050508060200190518101906135a99190615183565b905060016135ba84600001516131f1565b5160018111156135cc576135cc614931565b149392505050565b6131ec6000600a613780565b60006135ea614162565b602081015151600190526135fc613b18565b6136068282610438565b6020015192915050565b613618613bf6565b600360005414156136cf5760006002805461363290614ed1565b80601f016020809104026020016040519081016040528092919081815260200182805461365e90614ed1565b80156136ab5780601f10613680576101008083540402835291602001916136ab565b820191906000526020600020905b81548152906001019060200180831161368e57829003601f168201915b50505050508060200190518101906136c39190615183565b6101e001519392505050565b6131ec60006007613780565b60006136e5614162565b60208181018051516000905280515182015186905251518101510183905261370b613b18565b6133dd8282610438565b600061371f614162565b60208101515160029052613731613b18565b61373b8282610438565b6040015192915050565b600061374f614162565b6020810180515160049052515160a0015183905261376b613b18565b6137758282610438565b608001519392505050565b816102b55760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6137d360405180608001604052806000151581526020016000815260200160008152602001600081525090565b8160200151602001511561395c5760208201516040015160600151600a1180158252613823576020820151604001516060015161381990610b3090610b2b81600a613a5e565b602082015261382b565b600160208201525b61383361418f565b8251516001600160a01b0390811682528351602090810151818401528451604090810151818501528551606090810151841681860152865160809081015181870152875160a090810151861690870152875160c0908101519087015283880180515160e0880152805184015161010088015280518201516101208801528051515190951661014087015284515184015161016087015284515183015115156101808701528451518201516101a0870152845151015115156101c086015283518201518201516101e08601529251810151909201516102008401528351151561022084015283810151610240840152600360005543600155905161393891839101615522565b60405160208183030381529060405260029080519060200190613068929190614293565b6000604082015261396f60016013613780565b60208201518051516080909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156139b3573d6000803e3d6000fd5b506040810151479081106139cd57604082015181036139d0565b60005b606083018190526040830151613a0592506000916139fc916139f29190613acb565b8460600151900390565b10156014613780565b6020820151515160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613a47573d6000803e3d6000fd5b50600080805560018190556102b590600290614317565b6000818381613a6f57613a6f6156c6565b069392505050565b6000818381613a8857613a886156c6565b049392505050565b60608315613a9f575081610317565b825115613aaf5782518084602001fd5b60405163100960cb60e01b81526004810183905260240161379d565b600082613ad883826156dc565b91508110156102c45760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161379d565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b6040805161018081018252600061010082018181526101208301829052610140830182905261016083018290528252602082018190529181019190915260608101613b96614354565b8152600060208201819052604082018190526060820181905260809091015290565b60408051606081019091528060008152602001600015158152602001613bf1604051806040016040528060008152602001600081525090565b905290565b6040805160c081019091528060008152602001613c23604080518082019091526000808252602082015290565b8152602001613c30614398565b81526000602082018190526040820181905260609091015290565b604051806109200160405280613c5f6143c6565b815260200160008152602001613c88604051806040016040528060008152602001600081525090565b8152602001613cbb6040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b8152602001613cc86143fd565b815260200160008152602001613cf1604051806040016040528060008152602001600081525090565b815260006020820152604001613d17604080518082019091526000808252602082015290565b815260006020820152604001613d2b614398565b8152602001613d38613bb8565b8152600060208201819052604082018190526060820152608001613d6c604080518082019091526000808252602082015290565b815260006020820152604001613d80614398565b8152602001613d8d613bb8565b81526000602082018190526040820152606001613da8614410565b8152602001613dd460408051608081018252600060208201818152928201819052606082015290815290565b815260200160008152602001613dfd604051806040016040528060008152602001600081525090565b8152602001613e1f604051806040016040528060008152602001600081525090565b815260006020820152604001613e45604080518082019091526000808252602082015290565b815260006020820152604001613e59614398565b8152602001613e66613bb8565b815260200160001515815260200160006001600160a01b03168152602001613ea1604051806040016040528060008152602001600081525090565b8152602001613ec3604051806040016040528060008152602001600081525090565b8152602001613ee5604051806040016040528060008152602001600081525090565b8152602001613f07604051806040016040528060008152602001600081525090565b8152602001613f29604051806040016040528060008152602001600081525090565b8152602001613f4b604051806040016040528060008152602001600081525090565b81526000602082018190526040820152606001613f78604080518082019091526000808252602082015290565b815260006020820152604001613f8c614398565b8152602001613f99613bb8565b8152600060208201819052604082018190526060820152608001613fcd604080518082019091526000808252602082015290565b815260200160008152602001613fe1614410565b8152602001613fee614398565b8152602001613ffb614410565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526000602082015260400161403d614410565b815260200161404a614410565b815260200161406e6040518060400160405280600081526020016000151581525090565b81526020016140926040518060400160405280600081526020016000151581525090565b8152602001600081526020016140a6614410565b81526020016140b3614410565b81526020016140c0614410565b81526020016140cd614410565b81526020016140da614410565b81526020016140e7614410565b81526020016140f4614410565b8152602001614101614410565b815260200161410e614410565b815260200161411b614410565b8152602001614128614410565b8152602001614135614410565b8152602001600081525090565b6040518060400160405280614155614431565b8152602001613bf16144a5565b604051806040016040528060008152602001613bf16144fd565b6040518060200160405280613bf1613b4d565b60405180610260016040528060006001600160a01b031681526020016141d560408051608081018252600080825260208201819052918101829052606081019190915290565b81526020016141e2614354565b8152600060208201819052604082018190526060820152608001614204613bf6565b81526040805160a08101825260008082526020828101829052928201819052606082018190526080820152910190815260200161423f614410565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c082015260e001614276613bf6565b815260200160008152602001600015158152602001600081525090565b82805461429f90614ed1565b90600052602060002090601f0160209004810192826142c15760008555614307565b82601f106142da57805160ff1916838001178555614307565b82800160010185558215614307579182015b828111156143075782518255916020019190600101906142ec565b50614313929150614510565b5090565b50805461432390614ed1565b6000825580601f10614333575050565b601f0160209004906000526020600020908101906143519190614510565b50565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b60405180604001604052806143d9614354565b8152602001613bf16040518060400160405280600081526020016000151581525090565b6040518060200160405280613bf1613bf6565b60405180608001604052806000815260200160008152602001614135613bf6565b6040518060e0016040528060006001600160a01b0316815260200161447660408051608081018252600080825260208201819052918101829052606081019190915290565b8152602001614483614354565b8152600060208201819052604082018190526060820152608001613bf1613bf6565b6040805161014081018252600060a0820181815260c0830182905260e0830182905261010083018290526101208301829052825260208201529081016144e9614410565b815260200160008152602001600081525090565b6040518060200160405280613bf1614525565b5b808211156143135760008155600101614511565b6040805160e0810190915280600081526020016145406143c6565b815260006020820181905260408201526060016145816040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b815260200161458e6143fd565b8152602001613bf160408051608081018252600060208201818152928201819052606082015290815290565b600061040082840312156145cd57600080fd5b50919050565b6040516080810167ffffffffffffffff8111828210171561460457634e487b7160e01b600052604160045260246000fd5b60405290565b604051610100810167ffffffffffffffff8111828210171561460457634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561460457634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff8111828210171561460457634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561460457634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff8111828210171561460457634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561460457634e487b7160e01b600052604160045260246000fd5b604051610260810167ffffffffffffffff8111828210171561460457634e487b7160e01b600052604160045260246000fd5b801515811461435157600080fd5b80356131ec81614763565b60006060828403121561478e57600080fd5b6040516060810181811067ffffffffffffffff821117156147bf57634e487b7160e01b600052604160045260246000fd5b6040529050808235600281106147d457600080fd5b815260208301356147e481614763565b602082015260408301356147f781614763565b6040919091015292915050565b60006060828403121561481657600080fd5b610317838361477c565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b815180518252602080820151908301526040808201519083015260609081015190820152610240810160208301516001600160a01b03908116608084015260408401511660a083015260608301516148c960c0840182614820565b5060808301516101c083015260a083015115156101e083015260c083015161020083015260e09092015115156102209091015290565b6001600160a01b038116811461435157600080fd5b60006020828403121561492657600080fd5b8135610317816148ff565b634e487b7160e01b600052602160045260246000fd5b6002811061435157614351614931565b8151608082019061496781614947565b80835250602083015115156020830152604083015180516040840152602081015160608401525092915050565b80356131ec816148ff565b6000608082840312156149b157600080fd5b6149b96145d3565b90508135815260208201356020820152604082013560408201526060820135606082015292915050565b6000608082840312156149f557600080fd5b610317838361499f565b60005b83811015614a1a578181015183820152602001614a02565b838111156130685750506000910152565b8281526040602082015260008251806040840152614a508160608501602087016149ff565b601f01601f1916919091016060019392505050565b805160058110614a7757614a77614931565b80835250602081015160018060a01b03808251166020850152602082015160408501526040830151915080825116606085015250602081015115156080840152604081015160a0840152606081015160c08401526080810151151560e0840152506060810151614af36101008401826001600160a01b03169052565b506080810151151561012083015260a00151151561014090910152565b61016081016102c48284614a65565b60006101008284031215614b3257600080fd5b614b3a61460a565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015292915050565b600060408284031215614b9e57600080fd5b614ba661463c565b9050813581526020820135614bba81614763565b602082015292915050565b6000806101408385031215614bd957600080fd5b614be38484614b1f565b9150614bf3846101008501614b8c565b90509250929050565b6005811061435157600080fd5b600060a08284031215614c1b57600080fd5b614c2361466d565b90508135614c30816148ff565b81526020820135614c4081614763565b8060208301525060408201356040820152606082013560608201526080820135614c6981614763565b608082015292915050565b6000818303610160811215614c8857600080fd5b614c9061469e565b91508235614c9d81614bfc565b82526040601f1982011215614cb157600080fd5b50614cba61463c565b6020830135614cc8816148ff565b81526040830135602080830191909152820152614ce88360608401614c09565b6040820152614cfa6101008301614994565b6060820152614d0c6101208301614771565b6080820152614d1e6101408301614771565b60a082015292915050565b60006101608284031215614d3c57600080fd5b6103178383614c74565b60006101408284031215614d5957600080fd5b614d6161463c565b9050614d6d8383614b1f565b8152614bba836101008401614b8c565b600060808284031215614d8f57600080fd5b614d976146cf565b9050614da3838361499f565b815292915050565b60006101608284031215614dbe57600080fd5b614dc66146cf565b9050614da38383614c74565b600060608284031215614de457600080fd5b614dec6146cf565b9050614da3838361477c565b6000818303610400811215614e0c57600080fd5b614e1461463c565b833581526103e0601f1983011215614e2b57600080fd5b614e336146cf565b9150614e3d614700565b602085013560068110614e4f57600080fd5b8152614e5e8660408701614d46565b6020820152614e706101808601614771565b6040820152614e826101a08601614771565b6060820152614e95866101c08701614d7d565b6080820152614ea8866102408701614dab565b60a0820152614ebb866103a08701614dd2565b60c0820152825260208101919091529392505050565b600181811c90821680614ee557607f821691505b602082108114156145cd57634e487b7160e01b600052602260045260246000fd5b80516131ec816148ff565b600060808284031215614f2357600080fd5b614f2b6145d3565b90508151815260208201516020820152604082015160408201526060820151606082015292915050565b60006101008284031215614f6857600080fd5b614f7061460a565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015292915050565b80516131ec81614763565b600060a08284031215614fdf57600080fd5b614fe761466d565b90508151614ff4816148ff565b8152602082015161500481614763565b8060208301525060408201516040820152606082015160608201526080820151614c6981614763565b600081830361016081121561504157600080fd5b61504961469e565b9150825161505681614bfc565b82526040601f198201121561506a57600080fd5b5061507361463c565b6020830151615081816148ff565b815260408301516020808301919091528201526150a18360608401614fcd565b60408201526150b36101008301614f06565b60608201526150c56101208301614fc2565b6080820152614d1e6101408301614fc2565b600060a082840312156150e957600080fd5b6150f161466d565b905081516150fe816148ff565b815260208281015190820152604082015161511881614763565b6040820152606082810151908201526080820151614c6981614763565b60006101c0828403121561514857600080fd5b6151506145d3565b9050815181526020820151602082015261516d836040840161502d565b60408201526101a0820151606082015292915050565b6000610840828403121561519657600080fd5b61519e614731565b6151a783614f06565b81526151b68460208501614f11565b60208201526151c88460a08501614f55565b60408201526101a06151db818501614f06565b60608301526101c08085015160808401526101e06151fa818701614f06565b60a085015261020061520e8882890161502d565b60c08601526152218861036089016150d7565b60e0860152615234886104008901615135565b6101008601526105c08701516101208601526152536105e08801614f06565b6101408601526106008701516101608601526152726106208801614fc2565b6101808601526106408701518486015261528f6106608801614fc2565b838601526152a188610680890161502d565b828601526107e087015181860152505050506152c06108008401614fc2565b610220820152610820929092015161024083015250919050565b6102b5828251805182526020810151602083015260408101516040830152606081015160608301525050565b6102b5828251614a65565b8051805161531e81614947565b80845250602081015115156020840152604081015115156040840152505050565b6001600160a01b03831681528151602080830191909152820151518051610420830191906006811061537357615373614931565b80604085015250602081015161538d606085018251614820565b602001516153ab610160850182805182526020908101511515910152565b50604081015115156101a0840152606081015115156101c084015260808101516153d96101e08501826152da565b5060a08101516153ed610260850182615306565b5060c001516154006103c0840182615311565b509392505050565b6001600160a01b038416815261016081016154266020830185614820565b825161012083015260208301511515610140830152949350505050565b6001600160a01b038316815260a081016103176020830184805182526020810151602083015260408101516040830152606081015160608301525050565b61018081016154908285614a65565b6001600160a01b03929092166101609190910152919050565b82815261018081016103176020830184614a65565b600082516154d08184602087016149ff565b9190910192915050565b81518152602080830151151590820152604081016102c4565b805182526020810151602083015260408101516155136040840182614a65565b50606001516101a09190910152565b81516001600160a01b03168152610840810160208301516155676020840182805182526020810151602083015260408101516040830152606081015160608301525050565b50604083015161557a60a0840182614820565b5060608301516101a0615597818501836001600160a01b03169052565b608085015191506101c0828186015260a086015192506101e06155c4818701856001600160a01b03169052565b60c087015193506102006155da81880186614a65565b60e088015180516001600160a01b03166103608901526020810151610380890152604081015115156103a089015260608101516103c08901526080015115156103e088015261010088015194506156356104008801866154f3565b6101208801516105c08801526101408801516001600160a01b03166105e088015261016088015161060088015261018088015115156106208801528388015161064088015282880151151561066088015281880151945061569a610680880186614a65565b8701516107e0870152505050610220840151151561080084015250610240909201516108209091015290565b634e487b7160e01b600052601260045260246000fd5b600082198211156156fd57634e487b7160e01b600052601160045260246000fd5b50019056fea0c08e29c71350e40fbb4cf003989233b13d526e69962aefa0a312080ee1fc54f825aeeaf8a98d102cfef2ce8a456afbe776ac52abc49aed0689abcbcf31c12f4eb456086f80a7670898a2f96c26b017204aad3098f1aeb032d9b4edbe0ef5c9a2646970667358221220c792a5ceacb05050037358731695b1a61b7d49634aa4c42f6fd10b3d7ec7e1b364736f6c634300080c0033",BytecodeLen:27587,Which:"oD",version:8,views:{Proposal:"Proposal",currentVotes:"currentVotes",info:"info",isMember:"isMember",myRank:"myRank"}},_stateSourceMap={2:{at:"./dao/contracts/dao-blog.rsh:348:11:after expr stmt semicolon",fs:[],msg:null,who:"Module"},3:{at:"./dao/contracts/dao-blog.rsh:203:50:after expr stmt semicolon",fs:[],msg:null,who:"Module"}},_Connectors={ALGO:_ALGO,ETH:_ETH},_Participants={Founder:Founder,comment:comment,join:join,leave:leave,post:post,registerProposal:registerProposal,voteProposal:voteProposal},_APIs={comment:comment,join:join,leave:leave,post:post,registerProposal:registerProposal,voteProposal:voteProposal};export{_version,_versionHash,_backendVersion,getExports,_getEvents,_getViews,_getMaps,Founder,_comment3,_join3,_leave3,_post3,_registerProposal3,_voteProposal3,comment,join,leave,post,registerProposal,voteProposal,_stateSourceMap,_Connectors,_Participants,_APIs};