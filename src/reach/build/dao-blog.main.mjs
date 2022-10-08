const _version="0.1.12",_versionHash="0.1.12 (ae94865f)",_backendVersion=24;function getExports(a){a.reachStdlib;return{}}function _getEvents(a){var a=a.reachStdlib,e=a.T_Address,t=a.T_UInt,o=a.T_Tuple([e,t]),n=a.T_Bool,n=a.T_Struct([["admin",e],["registerSelf",n],["fee",t],["quorum",t],["openTreasury",n]]),c=a.T_Null,a=a.T_Data({AllocateFunds:o,ChangeAdmin:n,EjectMember:e,None:c,Stop:c});return{MemberExited:[e],MemberJoined:[e],MotionCreated:[a,e],MotionEnacted:[t,a],MotionFailed:[t,a],MotionRejected:[t,a]}}function _getViews(a,k){const N=a.reachStdlib,T=N.T_Address;var a=N.T_Bytes(N.checkedBigNumberify("<builtin>",N.UInt_max,"128")),e=N.T_Contract,t=N.T_UInt,o=N.T_Tuple([T,t]),n=N.T_Bool,c=N.T_Struct([["admin",T],["registerSelf",n],["fee",t],["quorum",t],["openTreasury",n]]),r=N.T_Null,o=N.T_Data({AllocateFunds:o,ChangeAdmin:c,EjectMember:T,None:r,Stop:r}),c=N.T_Object({admin:T,fee:t,openTreasury:n,quorum:t,registerSelf:n}),i=N.T_Object({Against:t,For:t,action:o,index:t}),d=N.T_Struct([["name",a],["founder",T],["admin",T],["fee",t],["registerSelf",n],["quorum",t],["openTreasury",n]]),s=N.T_Tuple([t,t]);const I=N.T_Data({None:r,Some:s});return{infos:{Proposal:{decode:async(a,e,t)=>{if(N.eq(a,N.checkedBigNumberify("<builtin>",N.UInt_max,"3"))){const[,,,,,,,,,,,,,,o,,,,]=e;return[...t],o}N.assert(!1,"illegal view")},dom:[],rng:o},currentVotes:{decode:async(a,e,t)=>{if(N.eq(a,N.checkedBigNumberify("<builtin>",N.UInt_max,"3"))){const[,,,,,,,o,,,,,,,,,,,]=e;return[...t],a=o.For,e=o.Against,N.add(a,e)}N.assert(!1,"illegal view")},dom:[],rng:t},info:{decode:async(a,e,t)=>{if(N.eq(a,N.checkedBigNumberify("<builtin>",N.UInt_max,"3"))){const[o,n,,,,,,,,c,r,i,d,s,,,,,]=e;return[...t],{admin:c,fee:r,founder:o,name:n,openTreasury:i,quorum:d,registerSelf:s}}N.assert(!1,"illegal view")},dom:[],rng:d},isMember:{decode:async(a,e,t)=>{var o,n,c,r,i,d,s,l,b,m,p,u,f,h,g,y,_,x;if(N.eq(a,N.checkedBigNumberify("<builtin>",N.UInt_max,"3")))return[o,n,c,r,i,d,s,l,b,m,p,u,f,h,g,y,_,x]=e,(async a=>{a=N.protect(T,a,null),a={None:0,Some:1}[N.protect(I,await k.viewMapRef(0,a),null)[0]];return N.eq(a,N.checkedBigNumberify("reach standard library:38:41:application",N.UInt_max,"1"))})(...t);N.assert(!1,"illegal view")},dom:[T],rng:n},myRank:{decode:async(a,e,t)=>{var o,n,c,r,i,d,s,l,b,m,p,u,f,h,g,y,_,x;if(N.eq(a,N.checkedBigNumberify("<builtin>",N.UInt_max,"3")))return[o,n,c,r,i,d,s,l,b,m,p,u,f,h,g,y,_,x]=e,a=[...t][0],a=N.protect(T,a,null),a=N.protect(I,await k.viewMapRef(0,a),null),e=[N.checkedBigNumberify("<builtin>",N.UInt_max,"0"),N.checkedBigNumberify("<builtin>",N.UInt_max,"0")],N.fromSome(a,e)[N.checkedBigNumberify("./dao/contracts/dao-blog.rsh:134:11:array",N.UInt_max,"0")];N.assert(!1,"illegal view")},dom:[T],rng:t}},views:{3:[T,a,e,t,e,o,c,i,t,T,t,n,t,n,o,t,n,t]}}}function _getMaps(a){var a=a.reachStdlib,e=a.T_Null,t=a.T_UInt,t=a.T_Tuple([t,t]),e=a.T_Data({None:e,Some:t});return{mapDataTy:a.T_Tuple([e])}}async function Founder(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for Founder expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for Founder expects to receive an interact object as its second argument."));const s=a._initialize(),l=s.stdlib;var i=l.T_Null,a=l.T_UInt,r=l.T_Tuple([a,a]),r=l.T_Data({None:i,Some:r}),Q=l.T_Contract,D=l.T_Bytes(l.checkedBigNumberify("<builtin>",l.UInt_max,"256")),q=l.T_Bytes(l.checkedBigNumberify("<builtin>",l.UInt_max,"128")),t=l.T_Bool;const R=l.T_Tuple([a,i]);var o=l.T_Address,z=l.T_Tuple([o]),J=l.T_Object({i:a,sign:t}),J=l.T_Tuple([D,J]),O=l.T_Tuple([a]),V=l.T_Tuple([]),X=l.T_Tuple([q]),n=l.T_Tuple([o,a]),H=l.T_Struct([["admin",o],["registerSelf",t],["fee",a],["quorum",a],["openTreasury",t]]),n=l.T_Data({AllocateFunds:n,ChangeAdmin:H,EjectMember:o,None:i,Stop:i}),H=l.T_Tuple([n]),o=l.T_Data({Against:i,For:i}),n=l.T_Tuple([o]),Y=l.T_Data({addMember0_346:z,comment0_346:J,donate0_346:O,eject0_346:z,join0_346:V,leave0_346:V,post0_346:X,registerProposal0_346:H,voteProposal0_346:n}),d=r;const b=l.newMap({ctc:s,idx:0,isAPI:!1,ty:d});var o=l.protect(Q,e.announcerCtc,"for Founder's interact field announcerCtc"),J=l.protect(D,e.description,"for Founder's interact field description"),O=l.protect(a,e.fee,"for Founder's interact field fee"),z=l.protect(q,e.name,"for Founder's interact field name"),V=l.protect(t,e.openTreasury,"for Founder's interact field openTreasury"),X=l.protect(a,e.quorum,"for Founder's interact field quorum"),H=l.protect(t,e.registerSelf,"for Founder's interact field registerSelf"),n=l.gt(l.UInt_max,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:103:22:decimal",l.UInt_max,"1000000000")),r=(l.assert(n,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:103:10:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:84:15:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:84:19:function exp)"],msg:"Invalid consensus state",who:"Founder"}),l.ge(X,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:80:18:decimal",l.UInt_max,"1"))),n=(l.assert(r,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:80:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:104:24:application call to "checkValidateQuorum" (defined at: ./dao/contracts/dao-blog.rsh:79:37:function exp)',"at ./dao/contracts/dao-blog.rsh:84:15:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:84:19:function exp)"],msg:"Quorum cannot be 0",who:"Founder"}),l.div(l.UInt_max,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:81:28:decimal",l.UInt_max,"10"))),r=l.lt(X,n),n=(l.assert(r,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:81:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:104:24:application call to "checkValidateQuorum" (defined at: ./dao/contracts/dao-blog.rsh:79:37:function exp)',"at ./dao/contracts/dao-blog.rsh:84:15:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:84:19:function exp)"],msg:"Quorum seems worryingly large",who:"Founder"}),await s.sendrecv({args:[z,J,H,X,V,O,o],evt_cnt:7,funcNum:0,lct:l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:107:11:dot",l.UInt_max,"0"),onlyIf:!0,out_tys:[q,D,t,a,t,a,Q],pay:[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:107:11:decimal",l.UInt_max,"0"),[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};l.UInt_max;l.simMapDupe(t,0,b);var{data:[,,o,n,a,c,r],from:i}=e,d=(l.div(l.UInt_max,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:81:28:decimal",l.UInt_max,"10")),await s.getContractInfo(),[l.UInt_max,l.checkedBigNumberify("<builtin>",l.UInt_max,"0")]),d=(await l.simMapSet(t,0,i,d),[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:128:23:application",l.UInt_max,"0"),void t.txns.push({kind:"remote",obj:r,remote:{accs:[],apps:[],bills:l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:128:23:application",l.UInt_max,"0"),fees:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),pays:l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:128:23:application",l.UInt_max,"0"),toks:[]}})]),r=(await e.getOutput("internal","v3901",R,d))[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:128:23:application",l.UInt_max,"0")],e={admin:i,fee:c,openTreasury:a,quorum:n,registerSelf:o},d={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:["None",null],index:l.checkedBigNumberify("<builtin>",l.UInt_max,"0")},i=e;c=d,a=r;if(await!0){n=c.index,o=l.ge(n,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",l.UInt_max,"10"));let a;a=o?(e=l.mod(n,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",l.UInt_max,"10")),d=l.sub(n,e),l.div(d,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",l.UInt_max,"10"))):l.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",l.UInt_max,"1"),t.isHalt=!1}else{r=i.admin,c=l.sub(a,a);t.txns.push({kind:"from",to:r,tok:void 0}),l.le(await s.getBalance(),c)?l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:419:29:application",l.UInt_max,"0"):l.safeSub(await s.getBalance(),c);t.txns.push({kind:"from",to:r,tok:void 0}),t.txns.push({kind:"halt",tok:void 0}),t.isHalt=!0}return t},soloSend:!0,timeoutAt:void 0,tys:[q,D,t,a,t,a,Q],waitIfNotPresent:!1})),{data:[,,r,z,J,H,,],time:X,from:V}=n,O=l.gt(l.UInt_max,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:116:20:decimal",l.UInt_max,"1000000000")),o=(l.assert(O,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:116:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],msg:"Invalid consensus state",who:"Founder"}),l.ge(z,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:80:18:decimal",l.UInt_max,"1"))),W=(l.assert(o,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:80:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:117:22:application call to "checkValidateQuorum" (defined at: ./dao/contracts/dao-blog.rsh:79:37:function exp)'],msg:"Quorum cannot be 0",who:"Founder"}),l.div(l.UInt_max,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:81:28:decimal",l.UInt_max,"10"))),q=l.lt(z,W),D=(l.assert(q,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:81:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:117:22:application call to "checkValidateQuorum" (defined at: ./dao/contracts/dao-blog.rsh:79:37:function exp)'],msg:"Quorum seems worryingly large",who:"Founder"}),await s.getContractInfo()),t=[l.UInt_max,l.checkedBigNumberify("<builtin>",l.UInt_max,"0")],a=(await l.mapSet(b,V,t),(await n.getOutput("internal","v3901",R,void 0))[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:128:23:application",l.UInt_max,"0")]),Q=l.le(a,l.UInt_max),O=(l.assert(Q,{at:"./dao/contracts/dao-blog.rsh:128:23:application",fs:[],msg:"assume <= UInt.max",who:"Founder"}),l.eq(l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),a)),o=(l.assert(O,{at:"./dao/contracts/dao-blog.rsh:128:23:application",fs:[],msg:"remote bill check",who:"Founder"}),l.protect(i,await e.done(D),{at:"./dao/contracts/dao-blog.rsh:129:24:application",fs:["at ./dao/contracts/dao-blog.rsh:129:24:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:129:24:function exp)",'at ./dao/contracts/dao-blog.rsh:129:24:application call to "liftedInteract" (defined at: ./dao/contracts/dao-blog.rsh:129:24:application)'],msg:"done",who:"Founder"}),{admin:V,fee:H,openTreasury:J,quorum:z,registerSelf:r}),m=["None",null],q={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:m,index:l.checkedBigNumberify("<builtin>",l.UInt_max,"0")};let p=o,u=!0,f=q,h=X,g=a,y=n;for(;await u;){var G,Z=p.admin,K=p.fee,L=p.openTreasury,$=p.quorum,a0=p.registerSelf,_=f.action,x=f.index,e0=l.ge(x,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",l.UInt_max,"10"));let r;r=e0?(G=l.mod(x,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",l.UInt_max,"10")),G=l.sub(x,G),l.div(G,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",l.UInt_max,"10"))):l.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",l.UInt_max,"1");var k=await s.recv({didSend:!1,evt_cnt:1,funcNum:2,out_tys:[Y],timeoutAt:void 0,waitIfNotPresent:!1}),{data:[N],time:T,from:I}=k;switch(N[0]){case"addMember0_346":var t0=N[1][l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:235:10:spread",l.UInt_max,"0")],o0=l.protect(d,await l.mapRef(b,t0),null),n0=[l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),l.checkedBigNumberify("<builtin>",l.UInt_max,"0")],n0=l.fromSome(o0,n0)[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:134:11:array",l.UInt_max,"0")],n0=l.ge(n0,r),n0=(l.assert(n0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:236:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:235:36:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:235:36:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:235:36:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"User is below Citizen Rank threshold",who:"Founder"}),{None:0,Some:1}[o0[0]]),o0=l.eq(n0,l.checkedBigNumberify("reach standard library:39:41:application",l.UInt_max,"0")),n0=(l.assert(o0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:235:36:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:235:36:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:235:36:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Address is already a member",who:"Founder"}),l.add(g,K)),o0=l.le(n0,l.UInt_max),o0=(l.assert(o0,{at:"./dao/contracts/dao-blog.rsh:208:50:dot",fs:[],msg:"assume <= UInt.max",who:"Founder"}),[r,l.checkedBigNumberify("<builtin>",l.UInt_max,"0")]),t0=(await l.mapSet(b,t0,o0),await k.getOutput("addMember","v4648",i,null),p),o0=f;p=t0,u=!0,f=o0,h=T,g=n0,y=k;continue;case"comment0_346":var t0=N[1],o0=l.le(g,l.UInt_max),n0=(l.assert(o0,{at:"./dao/contracts/dao-blog.rsh:208:50:dot",fs:[],msg:"assume <= UInt.max",who:"Founder"}),t0[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:406:10:spread",l.UInt_max,"0")],t0[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:406:10:spread",l.UInt_max,"1")],{None:0,Some:1}[l.protect(d,await l.mapRef(b,I),null)[0]]),c0=l.eq(n0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),c0=(l.assert(c0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:407:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:410:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:410:13:function exp)"],msg:"Address is not a member",who:"Founder"}),await k.getOutput("comment","v5958",i,null),p),r0=f,i0=g;p=c0,u=!0,f=r0,h=T,g=i0,y=k;continue;case"donate0_346":var c0=N[1][l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:251:10:spread",l.UInt_max,"0")],r0=l.sub(l.UInt_max,c0),i0=l.lt(g,r0),c=(l.assert(i0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:252:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:251:33:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:251:33:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:251:33:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Donation is too generous",who:"Founder"}),l.add(g,c0)),U=l.le(c,l.UInt_max),U=(l.assert(U,{at:"./dao/contracts/dao-blog.rsh:208:50:dot",fs:[],msg:"assume <= UInt.max",who:"Founder"}),l.lt(c,r0)),U=(l.assert(U,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:252:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:257:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:257:13:function exp)"],msg:"Donation is too generous",who:"Founder"}),l.protect(d,await l.mapRef(b,I),null)),B={None:0,Some:1}[U[0]];if(l.eq(B,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1"))){var B=[l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),l.checkedBigNumberify("<builtin>",l.UInt_max,"0")],U=l.fromSome(U,B),B=U[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:259:19:array",l.UInt_max,"0")],U=U[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:259:19:array",l.UInt_max,"1")],d0=l.sub(l.UInt_max,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:261:36:decimal",l.UInt_max,"1")),d0=l.lt(B,d0);let a;a=d0?[l.add(B,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:262:30:decimal",l.UInt_max,"1")),U]:[l.ge(B,r)?B:r,U],await l.mapSet(b,I,a);await k.getOutput("donate","v7291",i,null);d0=p,B=f;p=d0,u=!0,f=B,h=T,g=c,y=k;continue}await k.getOutput("donate","v7299",i,null);U=p,d0=f;p=U,u=!0,f=d0,h=T,g=c,y=k;continue;case"eject0_346":var B=N[1],U=l.le(g,l.UInt_max),c=(l.assert(U,{at:"./dao/contracts/dao-blog.rsh:208:50:dot",fs:[],msg:"assume <= UInt.max",who:"Founder"}),B[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:272:10:spread",l.UInt_max,"0")]),A={None:0,Some:1}[l.protect(d,await l.mapRef(b,c),null)[0]],A=l.eq(A,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),w=l.addressEq(c,Z),w=!!A&&!w,v=l.addressEq(I,c),v=(l.assert(!v,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:275:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:289:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:289:13:function exp)"],msg:"Use 'Leave' API to exit",who:"Founder"}),l.assert(A,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:276:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:289:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:289:13:function exp)"],msg:"Address is not a member",who:"Founder"}),l.assert(w,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:277:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:289:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:289:13:function exp)"],msg:"Requires ChangeAdmin proposal",who:"Founder"}),l.addressEq(I,Z));if(v){await k.getOutput("eject","v8708",i,null),await l.mapSet(b,c,void 0);A=p,w=f,v=g;p=A,u=!0,f=w,h=T,g=v,y=k;continue}{A=l.sub(l.UInt_max,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:281:35:decimal",l.UInt_max,"1")),w=l.le(x,A);l.assert(w,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:281:14:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:289:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:289:13:function exp)"],msg:"Proposals Limit reached",who:"Founder"});let e;switch(_[0]){case"AllocateFunds":var s0=_[1],l0=s0[l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"0")],s0=s0[l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"1")],s0=l.lt(s0,g),l0={None:0,Some:1}[l.protect(d,await l.mapRef(b,l0),null)[0]],l0=l.eq(l0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1"));e=L?s0:!!l0&&s0;break;case"ChangeAdmin":{var l0=_[1],s0=l0.admin,b0=l0.fee,m0=l0.quorum,S=l.protect(d,await l.mapRef(b,s0),null),E=[l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),l.checkedBigNumberify("<builtin>",l.UInt_max,"0")],E=l.fromSome(S,E)[l.checkedBigNumberify("./dao/contracts/shared.rsh:84:13:array",l.UInt_max,"0")],S={None:0,Some:1}[S[0]],S=l.eq(S,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),E=l.gt(E,r),S=!!S&&E,E=l.gt(m0,l.checkedBigNumberify("./dao/contracts/shared.rsh:86:34:decimal",l.UInt_max,"0"));let a;a=!!E&&l.lt(m0,W);E=l.ge(b0,l.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",l.UInt_max,"0")),m0=l.lt(b0,l.UInt_max),b0=!!S&&a;e=!!b0&&(!!E&&m0);break}case"EjectMember":S=_[1],b0={None:0,Some:1}[l.protect(d,await l.mapRef(b,S),null)[0]],E=l.eq(b0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),m0=l.addressEq(S,Z);e=!!E&&!m0;break;case"None":_[1];e=!1;break;case"Stop":_[1];e=!0}l.assert(e,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:282:14:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:289:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:289:13:function exp)"],msg:"A Proposal is already active.",who:"Founder"});await k.getOutput("eject","v8676",i,null);v=l.add(x,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:202:30:decimal",l.UInt_max,"1")),A=["EjectMember",c],w={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:A,index:v},A=p,v=g;p=A,u=!0,f=w,h=T,g=v,y=k;continue}case"join0_346":N[1];l.assert(a0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:304:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:303:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:303:28:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:303:28:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"An existing user has to add you to this DAO",who:"Founder"});var A=l.protect(d,await l.mapRef(b,I),null),w={None:0,Some:1}[A[0]],v=l.eq(w,l.checkedBigNumberify("reach standard library:39:41:application",l.UInt_max,"0")),p0=(l.assert(v,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:305:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:303:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:303:28:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:303:28:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Address is already a member",who:"Founder"}),l.sub(l.UInt_max,g)),p0=l.lt(K,p0),p0=(l.assert(p0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:306:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:303:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:303:28:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:303:28:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Membership is at maximum capacity",who:"Founder"}),l.add(g,K)),u0=l.le(p0,l.UInt_max),u0=(l.assert(u0,{at:"./dao/contracts/dao-blog.rsh:208:50:dot",fs:[],msg:"assume <= UInt.max",who:"Founder"}),l.sub(l.UInt_max,p0)),u0=l.lt(K,u0),u0=(l.assert(u0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:306:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:311:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:311:13:function exp)"],msg:"Membership is at maximum capacity",who:"Founder"}),await k.getOutput("join","v10045",i,null),[r,l.checkedBigNumberify("<builtin>",l.UInt_max,"0")]),u0=(await l.mapSet(b,I,u0),p),f0=f;p=u0,u=!0,f=f0,h=T,g=p0,y=k;continue;case"leave0_346":N[1];var u0={None:0,Some:1}[l.protect(d,await l.mapRef(b,I),null)[0]],f0=l.eq(u0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),p0=(l.assert(f0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:321:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:320:29:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:320:29:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:320:29:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Address is not a member",who:"Founder"}),l.le(g,l.UInt_max)),h0=(l.assert(p0,{at:"./dao/contracts/dao-blog.rsh:208:50:dot",fs:[],msg:"assume <= UInt.max",who:"Founder"}),await k.getOutput("leave","v11352",i,null),await l.mapSet(b,I,void 0),p),g0=f,y0=g;p=h0,u=!0,f=g0,h=T,g=y0,y=k;continue;case"post0_346":var h0=N[1],g0=l.le(g,l.UInt_max),y0=(l.assert(g0,{at:"./dao/contracts/dao-blog.rsh:208:50:dot",fs:[],msg:"assume <= UInt.max",who:"Founder"}),h0[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:395:10:spread",l.UInt_max,"0")],{None:0,Some:1}[l.protect(d,await l.mapRef(b,I),null)[0]]),_0=l.eq(y0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),_0=(l.assert(_0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:396:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:398:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:398:13:function exp)"],msg:"Address is not a member",who:"Founder"}),await k.getOutput("post","v12660",i,null),p),x0=f,k0=g;p=_0,u=!0,f=x0,h=T,g=k0,y=k;continue;case"registerProposal0_346":{var _0=N[1],x0=l.le(g,l.UInt_max),N0=(l.assert(x0,{at:"./dao/contracts/dao-blog.rsh:208:50:dot",fs:[],msg:"assume <= UInt.max",who:"Founder"}),_0[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:334:10:spread",l.UInt_max,"0")]);let a;a=e0?(k0=l.mod(x,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",l.UInt_max,"10")),T0=l.sub(x,k0),l.div(T0,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",l.UInt_max,"10"))):l.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",l.UInt_max,"1");var T0=l.protect(d,await l.mapRef(b,I),null),I0=[l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),l.checkedBigNumberify("<builtin>",l.UInt_max,"0")],j=l.fromSome(T0,I0)[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:139:11:array",l.UInt_max,"0")],U0=l.ge(j,a),U0=(l.assert(U0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:140:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:335:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-blog.rsh:137:36:function exp)',"at ./dao/contracts/dao-blog.rsh:347:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:347:13:function exp)"],msg:"THIEF! SEIZE THEM!",who:"Founder"}),l.ge(j,r));l.assert(U0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:336:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:347:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:347:13:function exp)"],msg:"User is below Citizen Rank threshold",who:"Founder"});let e;switch(_[0]){case"AllocateFunds":var B0=_[1],A0=B0[l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"0")],B0=B0[l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"1")],B0=l.lt(B0,g),A0={None:0,Some:1}[l.protect(d,await l.mapRef(b,A0),null)[0]],A0=l.eq(A0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1"));e=L?B0:!!A0&&B0;break;case"ChangeAdmin":{var A0=_[1],B0=A0.admin,w0=A0.fee,v0=A0.quorum,P=l.protect(d,await l.mapRef(b,B0),null),S0=l.fromSome(P,I0)[l.checkedBigNumberify("./dao/contracts/shared.rsh:84:13:array",l.UInt_max,"0")],P={None:0,Some:1}[P[0]],P=l.eq(P,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),S0=l.gt(S0,r),P=!!P&&S0,S0=l.gt(v0,l.checkedBigNumberify("./dao/contracts/shared.rsh:86:34:decimal",l.UInt_max,"0"));let a;a=!!S0&&l.lt(v0,W);S0=l.ge(w0,l.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",l.UInt_max,"0")),v0=l.lt(w0,l.UInt_max),w0=!!P&&a;e=!!w0&&(!!S0&&v0);break}case"EjectMember":P=_[1],w0={None:0,Some:1}[l.protect(d,await l.mapRef(b,P),null)[0]],S0=l.eq(w0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),v0=l.addressEq(P,Z);e=!!S0&&!v0;break;case"None":_[1];e=!1;break;case"Stop":_[1];e=!0}j=!e,U0=(l.assert(j,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:338:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:347:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:347:13:function exp)"],msg:"A Proposal is already active.",who:"Founder"}),l.sub(l.UInt_max,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:343:32:decimal",l.UInt_max,"1"))),j=l.lt(x,U0);l.assert(j,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:343:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:347:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:347:13:function exp)"],msg:"Governance limit reached",who:"Founder"});let t;switch(N0[0]){case"AllocateFunds":var E0=N0[1],j0=E0[l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"0")],E0=E0[l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"1")],E0=l.lt(E0,g),j0={None:0,Some:1}[l.protect(d,await l.mapRef(b,j0),null)[0]],j0=l.eq(j0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1"));t=L?E0:!!j0&&E0;break;case"ChangeAdmin":{var j0=N0[1],E0=j0.admin,P0=j0.fee,M0=j0.quorum,M=l.protect(d,await l.mapRef(b,E0),null),F0=l.fromSome(M,I0)[l.checkedBigNumberify("./dao/contracts/shared.rsh:84:13:array",l.UInt_max,"0")],M={None:0,Some:1}[M[0]],M=l.eq(M,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),F0=l.gt(F0,r),M=!!M&&F0,F0=l.gt(M0,l.checkedBigNumberify("./dao/contracts/shared.rsh:86:34:decimal",l.UInt_max,"0"));let a;a=!!F0&&l.lt(M0,W);F0=l.ge(P0,l.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",l.UInt_max,"0")),M0=l.lt(P0,l.UInt_max),P0=!!M&&a;t=!!P0&&(!!F0&&M0);break}case"EjectMember":M=N0[1],P0={None:0,Some:1}[l.protect(d,await l.mapRef(b,M),null)[0]],F0=l.eq(P0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),M0=l.addressEq(M,Z);t=!!F0&&!M0;break;case"None":N0[1];t=!1;break;case"Stop":N0[1];t=!0}l.assert(t,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:344:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:347:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:347:13:function exp)"],msg:"Bad suggestion is bad. Apologize to everyone.",who:"Founder"});await k.getOutput("registerProposal","v14093",i,null);var U0=l.add(x,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:202:30:decimal",l.UInt_max,"1")),j={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:N0,index:U0},U0=p,C0=g;p=U0,u=!0,f=j,h=T,g=C0,y=k;continue}case"voteProposal0_346":{var U0=N[1],j=l.le(g,l.UInt_max),Q0=(l.assert(j,{at:"./dao/contracts/dao-blog.rsh:208:50:dot",fs:[],msg:"assume <= UInt.max",who:"Founder"}),U0[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:356:10:spread",l.UInt_max,"0")]);let a;a=e0?(C0=l.mod(x,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",l.UInt_max,"10")),D0=l.sub(x,C0),l.div(D0,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",l.UInt_max,"10"))):l.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",l.UInt_max,"1");var D0=l.protect(d,await l.mapRef(b,I),null),q0=[l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),l.checkedBigNumberify("<builtin>",l.UInt_max,"0")],R0=l.fromSome(D0,q0),z0=R0[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:139:11:array",l.UInt_max,"0")],R0=R0[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:139:11:array",l.UInt_max,"1")],F=l.ge(z0,a),J0=(l.assert(F,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:140:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:357:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-blog.rsh:137:36:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"THIEF! SEIZE THEM!",who:"Founder"}),f.For),O0=f.Against;let e;switch(_[0]){case"AllocateFunds":var V0=_[1],X0=V0[l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"0")],V0=V0[l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"1")],V0=l.lt(V0,g),X0={None:0,Some:1}[l.protect(d,await l.mapRef(b,X0),null)[0]],X0=l.eq(X0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1"));e=L?V0:!!X0&&V0;break;case"ChangeAdmin":{var X0=_[1],V0=X0.admin,H0=X0.fee,Y0=X0.quorum,W0=l.protect(d,await l.mapRef(b,V0),null),G0=l.fromSome(W0,q0)[l.checkedBigNumberify("./dao/contracts/shared.rsh:84:13:array",l.UInt_max,"0")],W0={None:0,Some:1}[W0[0]],W0=l.eq(W0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),G0=l.gt(G0,r),W0=!!W0&&G0,G0=l.gt(Y0,l.checkedBigNumberify("./dao/contracts/shared.rsh:86:34:decimal",l.UInt_max,"0"));let a;a=!!G0&&l.lt(Y0,W);G0=l.ge(H0,l.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",l.UInt_max,"0")),Y0=l.lt(H0,l.UInt_max),H0=!!W0&&a;e=!!H0&&(!!G0&&Y0);break}case"EjectMember":W0=_[1],H0={None:0,Some:1}[l.protect(d,await l.mapRef(b,W0),null)[0]],G0=l.eq(H0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),Y0=l.addressEq(W0,Z);e=!!G0&&!Y0;break;case"None":_[1];e=!1;break;case"Stop":_[1];e=!0}l.assert(e,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:359:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"No Proposal is currently active",who:"Founder"});l.gt(J0,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:364:17:decimal",l.UInt_max,"0"))&&(F=l.sub(l.UInt_max,O0),F=l.lt(J0,F),l.assert(F,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:365:14:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"Voting limit reached",who:"Founder"}));var F=l.gt(O0,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:367:21:decimal",l.UInt_max,"0")),F=(F&&(F=l.sub(l.UInt_max,J0),F=l.lt(O0,F),l.assert(F,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:368:14:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"Voting limit reached",who:"Founder"})),l.add(J0,O0)),F=l.lt(F,$),F=(l.assert(F,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:371:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"Quorum reached",who:"Founder"}),l.lt(R0,x));l.assert(F,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:374:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"Address has already voted in this session",who:"Founder"});let t;switch(Q0[0]){case"Against":Q0[1];var Z0=l.add(O0,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:378:40:decimal",l.UInt_max,"1"));t=[J0,Z0];break;case"For":Q0[1];Z0=l.add(J0,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:377:27:decimal",l.UInt_max,"1"));t=[Z0,O0]}var R0=t[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:376:13:array",l.UInt_max,"0")],F=t[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:376:13:array",l.UInt_max,"1")],C=l.sub(l.UInt_max,F),C=l.lt(R0,C),C=(l.assert(C,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:380:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"Voting limit reached (2)",who:"Founder"}),l.sub(l.UInt_max,R0)),C=l.lt(F,C),C=(l.assert(C,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:381:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"Voting limit reached (2)",who:"Founder"}),await k.getOutput("voteProposal","v15546",i,null),l.lt(z0,l.UInt_max));let o;o=C?[l.add(z0,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:388:45:decimal",l.UInt_max,"1")),x]:[z0,x],await l.mapSet(b,I,o);C=l.add(R0,F),z0=l.ge(C,$);let n;n=e0?(C=l.mod(x,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",l.UInt_max,"10")),C=l.sub(x,C),l.div(C,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",l.UInt_max,"10"))):l.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",l.UInt_max,"1");let c;switch(_[0]){case"AllocateFunds":var K0=_[1],L0=K0[l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"0")],K0=K0[l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"1")],K0=l.lt(K0,g),L0={None:0,Some:1}[l.protect(d,await l.mapRef(b,L0),null)[0]],L0=l.eq(L0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1"));c=L?K0:!!L0&&K0;break;case"ChangeAdmin":{var L0=_[1],K0=L0.admin,$0=L0.fee,aa=L0.quorum,ea=l.protect(d,await l.mapRef(b,K0),null),ta=l.fromSome(ea,q0)[l.checkedBigNumberify("./dao/contracts/shared.rsh:84:13:array",l.UInt_max,"0")],ea={None:0,Some:1}[ea[0]],ea=l.eq(ea,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),ta=l.gt(ta,n),ea=!!ea&&ta,ta=l.gt(aa,l.checkedBigNumberify("./dao/contracts/shared.rsh:86:34:decimal",l.UInt_max,"0"));let a;a=!!ta&&l.lt(aa,W);ta=l.ge($0,l.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",l.UInt_max,"0")),aa=l.lt($0,l.UInt_max),$0=!!ea&&a;c=!!$0&&(!!ta&&aa);break}case"EjectMember":ea=_[1],$0={None:0,Some:1}[l.protect(d,await l.mapRef(b,ea),null)[0]],ta=l.eq($0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),aa=l.addressEq(ea,Z);c=!!ta&&!aa;break;case"None":_[1];c=!1;break;case"Stop":_[1];c=!0}if(z0){C=l.gt(R0,F);if(!!c&&C)switch(_[0]){case"AllocateFunds":var oa=_[1],oa=(oa[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:169:32:application",l.UInt_max,"0")],oa[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:169:32:application",l.UInt_max,"1")]),oa=l.sub(g,oa),na=l.ge(oa,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:173:29:application",l.UInt_max,"0")),na=(l.assert(na,{at:"./dao/contracts/dao-blog.rsh:173:29:application",fs:["at ./dao/contracts/dao-blog.rsh:171:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:172:44:function exp)","at ./dao/contracts/dao-blog.rsh:171:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:171:28:function exp)",'at ./dao/contracts/dao-blog.rsh:390:28:application call to "doProposal" (defined at: ./dao/contracts/dao-blog.rsh:151:51:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"assume >= 0",who:"Founder"}),{Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:m,index:x}),ca=p;p=ca,u=!0,f=na,h=T,g=oa,y=k;continue;case"ChangeAdmin":var ca=_[1],na=ca.admin,oa=ca.registerSelf,ra=ca.fee,ia=ca.quorum,da=ca.openTreasury,sa={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:m,index:x},la=g;p={admin:na,fee:ra,openTreasury:da,quorum:ia,registerSelf:oa},u=!0,f=sa,h=T,g=la,y=k;continue;case"EjectMember":ra=_[1],da=(await l.mapSet(b,ra,void 0),{Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:m,index:x}),ia=p,sa=g;p=ia,u=!0,f=da,h=T,g=sa,y=k;continue;case"None":_[1];var la={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:m,index:x},ba=p,ma=g;p=ba,u=!0,f=la,h=T,g=ma,y=k;continue;case"Stop":_[1];var ba=(await k.getOutput("internal","v16093",R,void 0))[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:187:32:application",l.UInt_max,"0")],ma=l.add(g,ba),pa=l.le(ma,l.UInt_max),pa=(l.assert(pa,{at:"./dao/contracts/dao-blog.rsh:187:32:application",fs:["at ./dao/contracts/dao-blog.rsh:171:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:186:20:function exp)","at ./dao/contracts/dao-blog.rsh:171:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:171:28:function exp)",'at ./dao/contracts/dao-blog.rsh:390:28:application call to "doProposal" (defined at: ./dao/contracts/dao-blog.rsh:151:51:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"assume <= UInt.max",who:"Founder"}),l.eq(l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),ba)),pa=(l.assert(pa,{at:"./dao/contracts/dao-blog.rsh:187:32:application",fs:["at ./dao/contracts/dao-blog.rsh:171:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:186:20:function exp)","at ./dao/contracts/dao-blog.rsh:171:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:171:28:function exp)",'at ./dao/contracts/dao-blog.rsh:390:28:application call to "doProposal" (defined at: ./dao/contracts/dao-blog.rsh:151:51:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"remote bill check",who:"Founder"}),{Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:m,index:x}),ua=p;p=ua,u=!1,f=pa,h=T,g=ma,y=k;continue}else if(C)switch(_[0]){case"AllocateFunds":_[1];var fa={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:m,index:x},ha=p,ga=g;p=ha,u=!0,f=fa,h=T,g=ga,y=k;continue;case"ChangeAdmin":_[1];ha={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:m,index:x},fa=p,ga=g;p=fa,u=!0,f=ha,h=T,g=ga,y=k;continue;case"EjectMember":_[1];var ya={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:m,index:x},_a=p,xa=g;p=_a,u=!0,f=ya,h=T,g=xa,y=k;continue;case"None":_[1];_a={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:m,index:x},ya=p,xa=g;p=ya,u=!0,f=_a,h=T,g=xa,y=k;continue;case"Stop":_[1];var ka={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:m,index:x},Na=p,Ta=g;p=Na,u=!0,f=ka,h=T,g=Ta,y=k;continue}else switch(_[0]){case"AllocateFunds":_[1];var Ia={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:m,index:x},Ua=p,Ba=g;p=Ua,u=!0,f=Ia,h=T,g=Ba,y=k;continue;case"ChangeAdmin":_[1];Ua={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:m,index:x},Ia=p,Ba=g;p=Ia,u=!0,f=Ua,h=T,g=Ba,y=k;continue;case"EjectMember":_[1];var Aa={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:m,index:x},wa=p,va=g;p=wa,u=!0,f=Aa,h=T,g=va,y=k;continue;case"None":_[1];wa={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:m,index:x},Aa=p,va=g;p=Aa,u=!0,f=wa,h=T,g=va,y=k;continue;case"Stop":_[1];var Sa={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:m,index:x},Ea=p,ja=g;p=Ea,u=!0,f=Sa,h=T,g=ja,y=k;continue}}else{z0=p,C=g;p=z0,u=!0,f={Against:F,For:R0,action:_,index:x},h=T,g=C,y=k}}}}p.admin;t=l.sub(g,g),Q=l.ge(t,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:418:25:application",l.UInt_max,"0")),l.assert(Q,{at:"./dao/contracts/dao-blog.rsh:418:25:application",fs:[],msg:"assume >= 0",who:"Founder"}),O=l.le(await s.getBalance(),t)?l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:419:29:application",l.UInt_max,"0"):l.safeSub(await s.getBalance(),t),e=l.safeAdd(O,t),D=l.sub(e,O),V=l.ge(D,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:419:35:application",l.UInt_max,"0"));l.assert(V,{at:"./dao/contracts/dao-blog.rsh:419:35:application",fs:[],msg:"assume >= 0",who:"Founder"})}async function _addMember3(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for _addMember3 expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for _addMember3 expects to receive an interact object as its second argument."));a=a._initialize();const r=a.stdlib,i=r.T_Null;var t=r.T_UInt,o=r.T_Tuple([t,t]),o=r.T_Data({None:i,Some:o}),n=r.T_Address,c=r.T_Bytes(r.checkedBigNumberify("<builtin>",r.UInt_max,"128")),d=r.T_Contract,s=r.T_Tuple([n,t]),l=r.T_Bool,b=r.T_Struct([["admin",n],["registerSelf",l],["fee",t],["quorum",t],["openTreasury",l]]),s=r.T_Data({AllocateFunds:s,ChangeAdmin:b,EjectMember:n,None:i,Stop:i}),b=r.T_Object({admin:n,fee:t,openTreasury:l,quorum:t,registerSelf:l}),m=r.T_Object({Against:t,For:t,action:s,index:t}),p=r.T_Tuple([n]),u=r.T_Bytes(r.checkedBigNumberify("<builtin>",r.UInt_max,"256")),f=r.T_Object({i:t,sign:l}),u=r.T_Tuple([u,f]),f=r.T_Tuple([t]),h=r.T_Tuple([]),g=r.T_Tuple([c]),y=r.T_Tuple([s]),_=r.T_Data({Against:i,For:i}),_=r.T_Tuple([_]),u=r.T_Data({addMember0_346:p,comment0_346:u,donate0_346:f,eject0_346:p,join0_346:h,leave0_346:h,post0_346:g,registerProposal0_346:y,voteProposal0_346:_});const x=o,k=r.newMap({ctc:a,idx:0,isAPI:!0,ty:x}),[N,T,I,C,Q,D,U,B,A,q,w,R,z,J,O,V,X,v]=await a.getState(r.checkedBigNumberify("<builtin>",r.UInt_max,"3"),[n,c,d,t,d,s,b,m,t,n,t,l,t,l,s,t,l,t]);var f=r.protect(p,await e.in(),{at:"./dao/contracts/dao-blog.rsh:1:23:application",fs:["at ./dao/contracts/dao-blog.rsh:235:36:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:235:36:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runaddMember0_346" (defined at: ./dao/contracts/dao-blog.rsh:235:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"in",who:"addMember"}),h=f[r.checkedBigNumberify("./dao/contracts/dao-blog.rsh:1:23:application",r.UInt_max,"0")],g=r.protect(x,await r.mapRef(k,h),null),y=[r.checkedBigNumberify("<builtin>",r.UInt_max,"0"),r.checkedBigNumberify("<builtin>",r.UInt_max,"0")],_=r.fromSome(g,y)[r.checkedBigNumberify("./dao/contracts/dao-blog.rsh:134:11:array",r.UInt_max,"0")],o=r.ge(_,v),p=(r.assert(o,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:236:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:235:36:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:235:36:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runaddMember0_346" (defined at: ./dao/contracts/dao-blog.rsh:235:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"User is below Citizen Rank threshold",who:"addMember"}),{None:0,Some:1}[g[0]]),h=r.eq(p,r.checkedBigNumberify("reach standard library:39:41:application",r.UInt_max,"0")),y=(r.assert(h,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:235:36:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:235:36:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runaddMember0_346" (defined at: ./dao/contracts/dao-blog.rsh:235:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Address is already a member",who:"addMember"}),["addMember0_346",f]),S=await a.sendrecv({args:[N,T,I,C,Q,D,U,B,A,q,w,R,z,J,O,V,X,v,y],evt_cnt:1,funcNum:2,lct:r.checkedBigNumberify("<builtin>",r.UInt_max,"0"),onlyIf:!0,out_tys:[u],pay:[w,[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};r.UInt_max;var[o]=(r.simMapDupe(t,0,k),e)["data"];switch(o[0]){case"addMember0_346":{var n=o[1],n=(t.txns.push({kind:"api",who:"addMember"}),n[r.checkedBigNumberify("./dao/contracts/dao-blog.rsh:235:10:spread",r.UInt_max,"0")]),c=(r.protect(x,await r.simMapRef(t,0,n),null),r.add(A,w),t.txns.push({amt:w,kind:"to",tok:void 0}),[v,r.checkedBigNumberify("<builtin>",r.UInt_max,"0")]),n=(await r.simMapSet(t,0,n,c),await e.getOutput("addMember","v4648",i,null),U,B,U.admin,U.fee,U.openTreasury,U.quorum,U.registerSelf,B.action,B.index),c=r.ge(n,r.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",r.UInt_max,"10"));let a;a=c?(c=r.mod(n,r.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",r.UInt_max,"10")),n=r.sub(n,c),r.div(n,r.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",r.UInt_max,"10"))):r.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",r.UInt_max,"1"),t.isHalt=!1;break}case"comment0_346":o[1];break;case"donate0_346":o[1];break;case"eject0_346":o[1];break;case"join0_346":o[1];break;case"leave0_346":o[1];break;case"post0_346":o[1];break;case"registerProposal0_346":o[1];break;case"voteProposal0_346":o[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[n,c,d,t,d,s,b,m,t,n,t,l,t,l,s,t,l,t,u],waitIfNotPresent:!1}),{data:[E],didSend:H}=S;switch(E[0]){case"addMember0_346":{var j=E[1],P=j[r.checkedBigNumberify("./dao/contracts/dao-blog.rsh:235:10:spread",r.UInt_max,"0")],M=r.protect(x,await r.mapRef(k,P),null),F=[r.checkedBigNumberify("<builtin>",r.UInt_max,"0"),r.checkedBigNumberify("<builtin>",r.UInt_max,"0")],F=r.fromSome(M,F)[r.checkedBigNumberify("./dao/contracts/dao-blog.rsh:134:11:array",r.UInt_max,"0")],F=r.ge(F,v),F=(r.assert(F,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:236:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:235:36:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:235:36:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:235:36:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"User is below Citizen Rank threshold",who:"addMember"}),{None:0,Some:1}[M[0]]),M=r.eq(F,r.checkedBigNumberify("reach standard library:39:41:application",r.UInt_max,"0")),F=(r.assert(M,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:235:36:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:235:36:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:235:36:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Address is already a member",who:"addMember"}),r.add(A,w)),M=r.le(F,r.UInt_max),F=(r.assert(M,{at:"./dao/contracts/dao-blog.rsh:208:50:dot",fs:[],msg:"assume <= UInt.max",who:"addMember"}),[v,r.checkedBigNumberify("<builtin>",r.UInt_max,"0")]),M=(await r.mapSet(k,P,F),await S.getOutput("addMember","v4648",i,null)),P=(H&&r.protect(i,await e.out(j,M),{at:"./dao/contracts/dao-blog.rsh:235:11:application",fs:["at ./dao/contracts/dao-blog.rsh:235:11:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:235:11:function exp)",'at ./dao/contracts/dao-blog.rsh:244:12:application call to "k" (defined at: ./dao/contracts/dao-blog.rsh:242:13:function exp)',"at ./dao/contracts/dao-blog.rsh:242:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:242:13:function exp)"],msg:"out",who:"addMember"}),U,B,U.admin,U.fee,U.openTreasury,U.quorum,U.registerSelf,B.action,B.index),F=r.ge(P,r.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",r.UInt_max,"10"));let a;return void(a=F?(j=r.mod(P,r.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",r.UInt_max,"10")),M=r.sub(P,j),r.div(M,r.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",r.UInt_max,"10"))):r.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",r.UInt_max,"1"))}case"comment0_346":E[1];return;case"donate0_346":E[1];return;case"eject0_346":E[1];return;case"join0_346":E[1];return;case"leave0_346":E[1];return;case"post0_346":E[1];return;case"registerProposal0_346":E[1];return;case"voteProposal0_346":E[1]}}async function _comment3(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for _comment3 expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for _comment3 expects to receive an interact object as its second argument."));a=a._initialize();const i=a.stdlib,d=i.T_Null;var t=i.T_UInt,o=i.T_Tuple([t,t]),o=i.T_Data({None:d,Some:o}),n=i.T_Address,c=i.T_Bytes(i.checkedBigNumberify("<builtin>",i.UInt_max,"128")),r=i.T_Contract,s=i.T_Tuple([n,t]),l=i.T_Bool,b=i.T_Struct([["admin",n],["registerSelf",l],["fee",t],["quorum",t],["openTreasury",l]]),s=i.T_Data({AllocateFunds:s,ChangeAdmin:b,EjectMember:n,None:d,Stop:d}),b=i.T_Object({admin:n,fee:t,openTreasury:l,quorum:t,registerSelf:l}),m=i.T_Object({Against:t,For:t,action:s,index:t}),p=i.T_Bytes(i.checkedBigNumberify("<builtin>",i.UInt_max,"256")),u=i.T_Object({i:t,sign:l}),p=i.T_Tuple([p,u]),u=i.T_Tuple([n]),f=i.T_Tuple([t]),h=i.T_Tuple([]),g=i.T_Tuple([c]),y=i.T_Tuple([s]),_=i.T_Data({Against:d,For:d}),_=i.T_Tuple([_]),f=i.T_Data({addMember0_346:u,comment0_346:p,donate0_346:f,eject0_346:u,join0_346:h,leave0_346:h,post0_346:g,registerProposal0_346:y,voteProposal0_346:_});const x=o,k=i.newMap({ctc:a,idx:0,isAPI:!0,ty:x}),[N,T,I,U,B,A,w,v,S,E,C,Q,D,q,R,z,J,O]=await a.getState(i.checkedBigNumberify("<builtin>",i.UInt_max,"3"),[n,c,r,t,r,s,b,m,t,n,t,l,t,l,s,t,l,t]);var u=a.selfAddress(),h=i.protect(p,await e.in(),{at:"./dao/contracts/dao-blog.rsh:1:23:application",fs:["at ./dao/contracts/dao-blog.rsh:406:58:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:406:58:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runcomment0_346" (defined at: ./dao/contracts/dao-blog.rsh:406:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"in",who:"comment"}),g={None:0,Some:1}[i.protect(x,await i.mapRef(k,u),null)[0]],y=i.eq(g,i.checkedBigNumberify("reach standard library:38:41:application",i.UInt_max,"1")),_=(i.assert(y,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:407:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:406:58:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:406:58:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runcomment0_346" (defined at: ./dao/contracts/dao-blog.rsh:406:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Address is not a member",who:"comment"}),["comment0_346",h]),j=await a.sendrecv({args:[N,T,I,U,B,A,w,v,S,E,C,Q,D,q,R,z,J,O,_],evt_cnt:1,funcNum:2,lct:i.checkedBigNumberify("<builtin>",i.UInt_max,"0"),onlyIf:!0,out_tys:[f],pay:[i.checkedBigNumberify("./dao/contracts/dao-blog.rsh:406:10:decimal",i.UInt_max,"0"),[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};i.UInt_max;i.simMapDupe(t,0,k);var{data:[o],from:n}=e;switch(o[0]){case"addMember0_346":o[1];break;case"comment0_346":{var c=o[1],c=(t.txns.push({kind:"api",who:"comment"}),c[i.checkedBigNumberify("./dao/contracts/dao-blog.rsh:406:10:spread",i.UInt_max,"0")],c[i.checkedBigNumberify("./dao/contracts/dao-blog.rsh:406:10:spread",i.UInt_max,"1")],i.protect(x,await i.simMapRef(t,0,n),null),await e.getOutput("comment","v5958",d,null),w,v,S,w.admin,w.fee,w.openTreasury,w.quorum,w.registerSelf,v.action,v.index),r=i.ge(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",i.UInt_max,"10"));let a;a=r?(r=i.mod(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",i.UInt_max,"10")),c=i.sub(c,r),i.div(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",i.UInt_max,"10"))):i.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",i.UInt_max,"1"),t.isHalt=!1;break}case"donate0_346":o[1];break;case"eject0_346":o[1];break;case"join0_346":o[1];break;case"leave0_346":o[1];break;case"post0_346":o[1];break;case"registerProposal0_346":o[1];break;case"voteProposal0_346":o[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[n,c,r,t,r,s,b,m,t,n,t,l,t,l,s,t,l,t,f],waitIfNotPresent:!1}),{data:[P],didSend:V,from:X}=j;switch(P[0]){case"addMember0_346":P[1];return;case"comment0_346":{var M=P[1],F=i.le(S,i.UInt_max),F=(i.assert(F,{at:"./dao/contracts/dao-blog.rsh:208:50:dot",fs:[],msg:"assume <= UInt.max",who:"comment"}),M[i.checkedBigNumberify("./dao/contracts/dao-blog.rsh:406:10:spread",i.UInt_max,"0")],M[i.checkedBigNumberify("./dao/contracts/dao-blog.rsh:406:10:spread",i.UInt_max,"1")],{None:0,Some:1}[i.protect(x,await i.mapRef(k,X),null)[0]]),F=i.eq(F,i.checkedBigNumberify("reach standard library:38:41:application",i.UInt_max,"1")),F=(i.assert(F,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:407:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:410:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:410:13:function exp)"],msg:"Address is not a member",who:"comment"}),await j.getOutput("comment","v5958",d,null)),M=(V&&i.protect(d,await e.out(M,F),{at:"./dao/contracts/dao-blog.rsh:406:11:application",fs:["at ./dao/contracts/dao-blog.rsh:406:11:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:406:11:function exp)",'at ./dao/contracts/dao-blog.rsh:411:12:application call to "k" (defined at: ./dao/contracts/dao-blog.rsh:410:13:function exp)',"at ./dao/contracts/dao-blog.rsh:410:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:410:13:function exp)"],msg:"out",who:"comment"}),w,v,S,w.admin,w.fee,w.openTreasury,w.quorum,w.registerSelf,v.action,v.index),F=i.ge(M,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",i.UInt_max,"10"));let a;return void(a=F?(F=i.mod(M,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",i.UInt_max,"10")),M=i.sub(M,F),i.div(M,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",i.UInt_max,"10"))):i.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",i.UInt_max,"1"))}case"donate0_346":P[1];return;case"eject0_346":P[1];return;case"join0_346":P[1];return;case"leave0_346":P[1];return;case"post0_346":P[1];return;case"registerProposal0_346":P[1];return;case"voteProposal0_346":P[1]}}async function _donate3(a,t){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for _donate3 expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for _donate3 expects to receive an interact object as its second argument."));a=a._initialize();const d=a.stdlib,s=d.T_Null;var e=d.T_UInt,o=d.T_Tuple([e,e]),o=d.T_Data({None:s,Some:o}),n=d.T_Address,c=d.T_Bytes(d.checkedBigNumberify("<builtin>",d.UInt_max,"128")),r=d.T_Contract,i=d.T_Tuple([n,e]),l=d.T_Bool,b=d.T_Struct([["admin",n],["registerSelf",l],["fee",e],["quorum",e],["openTreasury",l]]),i=d.T_Data({AllocateFunds:i,ChangeAdmin:b,EjectMember:n,None:s,Stop:s}),b=d.T_Object({admin:n,fee:e,openTreasury:l,quorum:e,registerSelf:l}),m=d.T_Object({Against:e,For:e,action:i,index:e}),p=d.T_Tuple([e]),u=d.T_Tuple([n]),f=d.T_Bytes(d.checkedBigNumberify("<builtin>",d.UInt_max,"256")),h=d.T_Object({i:e,sign:l}),f=d.T_Tuple([f,h]),h=d.T_Tuple([]),g=d.T_Tuple([c]),y=d.T_Tuple([i]),_=d.T_Data({Against:s,For:s}),_=d.T_Tuple([_]),f=d.T_Data({addMember0_346:u,comment0_346:f,donate0_346:p,eject0_346:u,join0_346:h,leave0_346:h,post0_346:g,registerProposal0_346:y,voteProposal0_346:_});const x=o,k=d.newMap({ctc:a,idx:0,isAPI:!0,ty:x}),[N,T,C,Q,D,q,I,U,B,R,z,J,O,V,X,H,Y,A]=await a.getState(d.checkedBigNumberify("<builtin>",d.UInt_max,"3"),[n,c,r,e,r,i,b,m,e,n,e,l,e,l,i,e,l,e]);var u=d.protect(p,await t.in(),{at:"./dao/contracts/dao-blog.rsh:1:23:application",fs:["at ./dao/contracts/dao-blog.rsh:251:33:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:251:33:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "rundonate0_346" (defined at: ./dao/contracts/dao-blog.rsh:251:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"in",who:"donate"}),h=u[d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:1:23:application",d.UInt_max,"0")],g=d.sub(d.UInt_max,h),y=d.lt(B,g),_=(d.assert(y,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:252:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:251:33:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:251:33:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "rundonate0_346" (defined at: ./dao/contracts/dao-blog.rsh:251:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Donation is too generous",who:"donate"}),["donate0_346",u]),w=await a.sendrecv({args:[N,T,C,Q,D,q,I,U,B,R,z,J,O,V,X,H,Y,A,_],evt_cnt:1,funcNum:2,lct:d.checkedBigNumberify("<builtin>",d.UInt_max,"0"),onlyIf:!0,out_tys:[f],pay:[h,[]],sim_p:async t=>{var o={txns:[],mapRefs:[],maps:[]};d.UInt_max;d.simMapDupe(o,0,k);var{data:[a],from:n}=t;switch(a[0]){case"addMember0_346":a[1];break;case"comment0_346":a[1];break;case"donate0_346":var c=a[1],c=(o.txns.push({kind:"api",who:"donate"}),c[d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:251:10:spread",d.UInt_max,"0")]),c=(d.add(B,c),o.txns.push({amt:c,kind:"to",tok:void 0}),d.protect(x,await d.simMapRef(o,0,n),null)),r={None:0,Some:1}[c[0]];if(d.eq(r,d.checkedBigNumberify("reach standard library:38:41:application",d.UInt_max,"1"))){var r=[d.checkedBigNumberify("<builtin>",d.UInt_max,"0"),d.checkedBigNumberify("<builtin>",d.UInt_max,"0")],c=d.fromSome(c,r),r=c[d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:259:19:array",d.UInt_max,"0")],c=c[d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:259:19:array",d.UInt_max,"1")],i=d.sub(d.UInt_max,d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:261:36:decimal",d.UInt_max,"1")),i=d.lt(r,i);let a;a=i?[d.add(r,d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:262:30:decimal",d.UInt_max,"1")),c]:[d.ge(r,A)?r:A,c],await d.simMapSet(o,0,n,a);await t.getOutput("donate","v7291",s,null),I,U,I.admin,I.fee,I.openTreasury,I.quorum,I.registerSelf,U.action;i=U.index,r=d.ge(i,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",d.UInt_max,"10"));let e;e=r?(c=d.mod(i,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",d.UInt_max,"10")),r=d.sub(i,c),d.div(r,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",d.UInt_max,"10"))):d.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",d.UInt_max,"1")}else{await t.getOutput("donate","v7299",s,null),I,U,I.admin,I.fee,I.openTreasury,I.quorum,I.registerSelf,U.action;i=U.index,c=d.ge(i,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",d.UInt_max,"10"));let a;a=c?(r=d.mod(i,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",d.UInt_max,"10")),c=d.sub(i,r),d.div(c,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",d.UInt_max,"10"))):d.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",d.UInt_max,"1")}o.isHalt=!1;break;case"eject0_346":a[1];break;case"join0_346":a[1];break;case"leave0_346":a[1];break;case"post0_346":a[1];break;case"registerProposal0_346":a[1];break;case"voteProposal0_346":a[1]}return o},soloSend:!1,timeoutAt:void 0,tys:[n,c,r,e,r,i,b,m,e,n,e,l,e,l,i,e,l,e,f],waitIfNotPresent:!1}),{data:[v],didSend:S,from:E}=w;switch(v[0]){case"addMember0_346":v[1];return;case"comment0_346":v[1];return;case"donate0_346":var j=v[1],P=j[d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:251:10:spread",d.UInt_max,"0")],M=d.sub(d.UInt_max,P),F=d.lt(B,M),F=(d.assert(F,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:252:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:251:33:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:251:33:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:251:33:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Donation is too generous",who:"donate"}),d.add(B,P)),P=d.le(F,d.UInt_max),P=(d.assert(P,{at:"./dao/contracts/dao-blog.rsh:208:50:dot",fs:[],msg:"assume <= UInt.max",who:"donate"}),d.lt(F,M)),F=(d.assert(P,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:252:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:257:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:257:13:function exp)"],msg:"Donation is too generous",who:"donate"}),d.protect(x,await d.mapRef(k,E),null)),M={None:0,Some:1}[F[0]];if(d.eq(M,d.checkedBigNumberify("reach standard library:38:41:application",d.UInt_max,"1"))){P=[d.checkedBigNumberify("<builtin>",d.UInt_max,"0"),d.checkedBigNumberify("<builtin>",d.UInt_max,"0")],M=d.fromSome(F,P),F=M[d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:259:19:array",d.UInt_max,"0")],P=M[d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:259:19:array",d.UInt_max,"1")],M=d.sub(d.UInt_max,d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:261:36:decimal",d.UInt_max,"1")),M=d.lt(F,M);let a;a=M?[d.add(F,d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:262:30:decimal",d.UInt_max,"1")),P]:[d.ge(F,A)?F:A,P],await d.mapSet(k,E,a);M=await w.getOutput("donate","v7291",s,null),F=(S&&d.protect(s,await t.out(j,M),{at:"./dao/contracts/dao-blog.rsh:251:11:application",fs:["at ./dao/contracts/dao-blog.rsh:251:11:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:251:11:function exp)",'at ./dao/contracts/dao-blog.rsh:265:12:application call to "k" (defined at: ./dao/contracts/dao-blog.rsh:257:13:function exp)',"at ./dao/contracts/dao-blog.rsh:257:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:257:13:function exp)"],msg:"out",who:"donate"}),I,U,I.admin,I.fee,I.openTreasury,I.quorum,I.registerSelf,U.action,U.index),P=d.ge(F,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",d.UInt_max,"10"));let e;return void(e=P?(M=d.mod(F,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",d.UInt_max,"10")),P=d.sub(F,M),d.div(P,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",d.UInt_max,"10"))):d.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",d.UInt_max,"1"))}{F=await w.getOutput("donate","v7299",s,null),M=(S&&d.protect(s,await t.out(j,F),{at:"./dao/contracts/dao-blog.rsh:251:11:application",fs:["at ./dao/contracts/dao-blog.rsh:251:11:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:251:11:function exp)",'at ./dao/contracts/dao-blog.rsh:265:12:application call to "k" (defined at: ./dao/contracts/dao-blog.rsh:257:13:function exp)',"at ./dao/contracts/dao-blog.rsh:257:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:257:13:function exp)"],msg:"out",who:"donate"}),I,U,I.admin,I.fee,I.openTreasury,I.quorum,I.registerSelf,U.action,U.index),P=d.ge(M,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",d.UInt_max,"10"));let a;return void(a=P?(j=d.mod(M,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",d.UInt_max,"10")),F=d.sub(M,j),d.div(F,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",d.UInt_max,"10"))):d.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",d.UInt_max,"1"))}case"eject0_346":v[1];return;case"join0_346":v[1];return;case"leave0_346":v[1];return;case"post0_346":v[1];return;case"registerProposal0_346":v[1];return;case"voteProposal0_346":v[1]}}async function _eject3(a,C){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for _eject3 expects to receive a contract as its first argument."));if("object"!=typeof C)return Promise.reject(new Error("The backend for _eject3 expects to receive an interact object as its second argument."));a=a._initialize();const d=a.stdlib,s=d.T_Null;var e=d.T_UInt,t=d.T_Tuple([e,e]),t=d.T_Data({None:s,Some:t}),o=d.T_Address,Q=d.T_Bytes(d.checkedBigNumberify("<builtin>",d.UInt_max,"128")),D=d.T_Contract,n=d.T_Tuple([o,e]),c=d.T_Bool,q=d.T_Struct([["admin",o],["registerSelf",c],["fee",e],["quorum",e],["openTreasury",c]]),n=d.T_Data({AllocateFunds:n,ChangeAdmin:q,EjectMember:o,None:s,Stop:s}),q=d.T_Object({admin:o,fee:e,openTreasury:c,quorum:e,registerSelf:c}),R=d.T_Object({Against:e,For:e,action:n,index:e}),r=d.T_Tuple([o]),z=d.T_Bytes(d.checkedBigNumberify("<builtin>",d.UInt_max,"256")),i=d.T_Object({i:e,sign:c}),z=d.T_Tuple([z,i]),i=d.T_Tuple([e]),l=d.T_Tuple([]),b=d.T_Tuple([Q]),m=d.T_Tuple([n]),p=d.T_Data({Against:s,For:s}),p=d.T_Tuple([p]),z=d.T_Data({addMember0_346:r,comment0_346:z,donate0_346:i,eject0_346:r,join0_346:l,leave0_346:l,post0_346:b,registerProposal0_346:m,voteProposal0_346:p});const u=t,f=d.newMap({ctc:a,idx:0,isAPI:!0,ty:u}),[J,O,V,X,H,Y,h,g,y,_,W,G,Z,K,x,k,L,$]=await a.getState(d.checkedBigNumberify("<builtin>",d.UInt_max,"3"),[o,Q,D,e,D,n,q,R,e,o,e,c,e,c,n,e,c,e]);i=a.selfAddress(),l=d.protect(r,await C.in(),{at:"./dao/contracts/dao-blog.rsh:1:23:application",fs:["at ./dao/contracts/dao-blog.rsh:272:32:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:272:32:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runeject0_346" (defined at: ./dao/contracts/dao-blog.rsh:272:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"in",who:"eject"}),b=l[d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:1:23:application",d.UInt_max,"0")],m={None:0,Some:1}[d.protect(u,await d.mapRef(f,b),null)[0]],p=d.eq(m,d.checkedBigNumberify("reach standard library:38:41:application",d.UInt_max,"1")),t=d.addressEq(b,_),r=!!p&&!t,m=d.addressEq(i,b),d.assert(!m,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:275:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:272:32:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:272:32:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runeject0_346" (defined at: ./dao/contracts/dao-blog.rsh:272:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Use 'Leave' API to exit",who:"eject"}),d.assert(p,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:276:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:272:32:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:272:32:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runeject0_346" (defined at: ./dao/contracts/dao-blog.rsh:272:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Address is not a member",who:"eject"}),d.assert(r,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:277:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:272:32:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:272:32:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runeject0_346" (defined at: ./dao/contracts/dao-blog.rsh:272:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Requires ChangeAdmin proposal",who:"eject"}),t=d.addressEq(i,_);if(!t){b=d.sub(d.UInt_max,d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:281:35:decimal",d.UInt_max,"1")),m=d.le(k,b);d.assert(m,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:281:14:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:272:32:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:272:32:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runeject0_346" (defined at: ./dao/contracts/dao-blog.rsh:272:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Proposals Limit reached",who:"eject"});let e;switch(x[0]){case"AllocateFunds":var N=x[1],T=N[d.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",d.UInt_max,"0")],N=N[d.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",d.UInt_max,"1")],N=d.lt(N,y),T={None:0,Some:1}[d.protect(u,await d.mapRef(f,T),null)[0]],T=d.eq(T,d.checkedBigNumberify("reach standard library:38:41:application",d.UInt_max,"1"));e=G?N:!!T&&N;break;case"ChangeAdmin":{var T=x[1],N=T.admin,I=T.fee,T=T.quorum,N=d.protect(u,await d.mapRef(f,N),null),U=[d.checkedBigNumberify("<builtin>",d.UInt_max,"0"),d.checkedBigNumberify("<builtin>",d.UInt_max,"0")],U=d.fromSome(N,U)[d.checkedBigNumberify("./dao/contracts/shared.rsh:84:13:array",d.UInt_max,"0")],N={None:0,Some:1}[N[0]],N=d.eq(N,d.checkedBigNumberify("reach standard library:38:41:application",d.UInt_max,"1")),U=d.gt(U,$),N=!!N&&U,U=d.gt(T,d.checkedBigNumberify("./dao/contracts/shared.rsh:86:34:decimal",d.UInt_max,"0"));let a;a=!!U&&d.lt(T,X);U=d.ge(I,d.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",d.UInt_max,"0")),T=d.lt(I,d.UInt_max),I=!!N&&a;e=!!I&&(!!U&&T);break}case"EjectMember":N=x[1],I={None:0,Some:1}[d.protect(u,await d.mapRef(f,N),null)[0]],U=d.eq(I,d.checkedBigNumberify("reach standard library:38:41:application",d.UInt_max,"1")),T=d.addressEq(N,_);e=!!U&&!T;break;case"None":x[1];e=!1;break;case"Stop":x[1];e=!0}d.assert(e,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:282:14:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:272:32:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:272:32:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runeject0_346" (defined at: ./dao/contracts/dao-blog.rsh:272:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"A Proposal is already active.",who:"eject"})}var a0=await a.sendrecv({args:[J,O,V,X,H,Y,h,g,y,_,W,G,Z,K,x,k,L,$,["eject0_346",l]],evt_cnt:1,funcNum:2,lct:d.checkedBigNumberify("<builtin>",d.UInt_max,"0"),onlyIf:!0,out_tys:[z],pay:[d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:272:10:decimal",d.UInt_max,"0"),[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};d.UInt_max;d.simMapDupe(t,0,f);var{data:[a],from:o}=e;switch(a[0]){case"addMember0_346":a[1];break;case"comment0_346":a[1];break;case"donate0_346":a[1];break;case"eject0_346":var n=a[1],n=(t.txns.push({kind:"api",who:"eject"}),n[d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:272:10:spread",d.UInt_max,"0")]),c=(d.protect(u,await d.simMapRef(t,0,n),null),d.addressEq(o,_));if(c){await e.getOutput("eject","v8708",s,null),await d.simMapSet(t,0,n,void 0),h,g,y,h.admin,h.fee,h.openTreasury,h.quorum,h.registerSelf,g.action;var c=g.index,r=d.ge(c,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",d.UInt_max,"10"));let a;a=r?(r=d.mod(c,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",d.UInt_max,"10")),c=d.sub(c,r),d.div(c,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",d.UInt_max,"10"))):d.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",d.UInt_max,"1")}else{switch(x[0]){case"AllocateFunds":var i=x[1][d.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",d.UInt_max,"0")];d.protect(u,await d.simMapRef(t,0,i),null);break;case"ChangeAdmin":i=x[1].admin;d.protect(u,await d.simMapRef(t,0,i),null);break;case"EjectMember":i=x[1];d.protect(u,await d.simMapRef(t,0,i),null);break;case"None":x[1];break;case"Stop":x[1]}await e.getOutput("eject","v8676",s,null);var r=d.add(k,d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:202:30:decimal",d.UInt_max,"1")),c=["EjectMember",n],n={Against:d.checkedBigNumberify("<builtin>",d.UInt_max,"0"),For:d.checkedBigNumberify("<builtin>",d.UInt_max,"0"),action:c,index:r},c=(h,y,h.admin,h.fee,h.openTreasury,h.quorum,h.registerSelf,n.index),r=d.ge(c,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",d.UInt_max,"10"));let a;a=r?(n=d.mod(c,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",d.UInt_max,"10")),r=d.sub(c,n),d.div(r,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",d.UInt_max,"10"))):d.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",d.UInt_max,"1")}t.isHalt=!1;break;case"join0_346":a[1];break;case"leave0_346":a[1];break;case"post0_346":a[1];break;case"registerProposal0_346":a[1];break;case"voteProposal0_346":a[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[o,Q,D,e,D,n,q,R,e,o,e,c,e,c,n,e,c,e,z],waitIfNotPresent:!1}),{data:[B],didSend:e0,from:t0}=a0;switch(B[0]){case"addMember0_346":B[1];return;case"comment0_346":B[1];return;case"donate0_346":B[1];return;case"eject0_346":var A=B[1],w=d.le(y,d.UInt_max),w=(d.assert(w,{at:"./dao/contracts/dao-blog.rsh:208:50:dot",fs:[],msg:"assume <= UInt.max",who:"eject"}),A[d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:272:10:spread",d.UInt_max,"0")]),v={None:0,Some:1}[d.protect(u,await d.mapRef(f,w),null)[0]],v=d.eq(v,d.checkedBigNumberify("reach standard library:38:41:application",d.UInt_max,"1")),S=d.addressEq(w,_),S=!!v&&!S,E=d.addressEq(t0,w),E=(d.assert(!E,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:275:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:289:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:289:13:function exp)"],msg:"Use 'Leave' API to exit",who:"eject"}),d.assert(v,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:276:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:289:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:289:13:function exp)"],msg:"Address is not a member",who:"eject"}),d.assert(S,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:277:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:289:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:289:13:function exp)"],msg:"Requires ChangeAdmin proposal",who:"eject"}),d.addressEq(t0,_));if(E){v=await a0.getOutput("eject","v8708",s,null),S=(e0&&d.protect(s,await C.out(A,v),{at:"./dao/contracts/dao-blog.rsh:272:11:application",fs:["at ./dao/contracts/dao-blog.rsh:272:11:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:272:11:function exp)",'at ./dao/contracts/dao-blog.rsh:290:12:application call to "k" (defined at: ./dao/contracts/dao-blog.rsh:289:13:function exp)',"at ./dao/contracts/dao-blog.rsh:289:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:289:13:function exp)"],msg:"out",who:"eject"}),await d.mapSet(f,w,void 0),h,g,y,h.admin,h.fee,h.openTreasury,h.quorum,h.registerSelf,g.action,g.index),E=d.ge(S,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",d.UInt_max,"10"));let a;return void(a=E?(v=d.mod(S,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",d.UInt_max,"10")),E=d.sub(S,v),d.div(E,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",d.UInt_max,"10"))):d.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",d.UInt_max,"1"))}{S=d.sub(d.UInt_max,d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:281:35:decimal",d.UInt_max,"1")),v=d.le(k,S);d.assert(v,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:281:14:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:289:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:289:13:function exp)"],msg:"Proposals Limit reached",who:"eject"});let e;switch(x[0]){case"AllocateFunds":var j=x[1],P=j[d.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",d.UInt_max,"0")],j=j[d.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",d.UInt_max,"1")],j=d.lt(j,y),P={None:0,Some:1}[d.protect(u,await d.mapRef(f,P),null)[0]],P=d.eq(P,d.checkedBigNumberify("reach standard library:38:41:application",d.UInt_max,"1"));e=G?j:!!P&&j;break;case"ChangeAdmin":{var P=x[1],j=P.admin,M=P.fee,P=P.quorum,j=d.protect(u,await d.mapRef(f,j),null),F=[d.checkedBigNumberify("<builtin>",d.UInt_max,"0"),d.checkedBigNumberify("<builtin>",d.UInt_max,"0")],F=d.fromSome(j,F)[d.checkedBigNumberify("./dao/contracts/shared.rsh:84:13:array",d.UInt_max,"0")],j={None:0,Some:1}[j[0]],j=d.eq(j,d.checkedBigNumberify("reach standard library:38:41:application",d.UInt_max,"1")),F=d.gt(F,$),j=!!j&&F,F=d.gt(P,d.checkedBigNumberify("./dao/contracts/shared.rsh:86:34:decimal",d.UInt_max,"0"));let a;a=!!F&&d.lt(P,X);F=d.ge(M,d.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",d.UInt_max,"0")),P=d.lt(M,d.UInt_max),M=!!j&&a;e=!!M&&(!!F&&P);break}case"EjectMember":j=x[1],M={None:0,Some:1}[d.protect(u,await d.mapRef(f,j),null)[0]],F=d.eq(M,d.checkedBigNumberify("reach standard library:38:41:application",d.UInt_max,"1")),P=d.addressEq(j,_);e=!!F&&!P;break;case"None":x[1];e=!1;break;case"Stop":x[1];e=!0}d.assert(e,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:282:14:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:289:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:289:13:function exp)"],msg:"A Proposal is already active.",who:"eject"});E=await a0.getOutput("eject","v8676",s,null),S=(e0&&d.protect(s,await C.out(A,E),{at:"./dao/contracts/dao-blog.rsh:272:11:application",fs:["at ./dao/contracts/dao-blog.rsh:272:11:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:272:11:function exp)",'at ./dao/contracts/dao-blog.rsh:290:12:application call to "k" (defined at: ./dao/contracts/dao-blog.rsh:289:13:function exp)',"at ./dao/contracts/dao-blog.rsh:289:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:289:13:function exp)"],msg:"out",who:"eject"}),d.add(k,d.checkedBigNumberify("./dao/contracts/dao-blog.rsh:202:30:decimal",d.UInt_max,"1"))),v=["EjectMember",w],A={Against:d.checkedBigNumberify("<builtin>",d.UInt_max,"0"),For:d.checkedBigNumberify("<builtin>",d.UInt_max,"0"),action:v,index:S},E=(h,y,h.admin,h.fee,h.openTreasury,h.quorum,h.registerSelf,A.index),w=d.ge(E,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",d.UInt_max,"10"));let a;return void(a=w?(v=d.mod(E,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",d.UInt_max,"10")),S=d.sub(E,v),d.div(S,d.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",d.UInt_max,"10"))):d.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",d.UInt_max,"1"))}case"join0_346":B[1];return;case"leave0_346":B[1];return;case"post0_346":B[1];return;case"registerProposal0_346":B[1];return;case"voteProposal0_346":B[1]}}async function _join3(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for _join3 expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for _join3 expects to receive an interact object as its second argument."));a=a._initialize();const i=a.stdlib,d=i.T_Null;var t=i.T_UInt,o=i.T_Tuple([t,t]),o=i.T_Data({None:d,Some:o}),n=i.T_Address,c=i.T_Bytes(i.checkedBigNumberify("<builtin>",i.UInt_max,"128")),r=i.T_Contract,s=i.T_Tuple([n,t]),l=i.T_Bool,b=i.T_Struct([["admin",n],["registerSelf",l],["fee",t],["quorum",t],["openTreasury",l]]),s=i.T_Data({AllocateFunds:s,ChangeAdmin:b,EjectMember:n,None:d,Stop:d}),b=i.T_Object({admin:n,fee:t,openTreasury:l,quorum:t,registerSelf:l}),m=i.T_Object({Against:t,For:t,action:s,index:t}),p=i.T_Tuple([]),u=i.T_Tuple([n]),f=i.T_Bytes(i.checkedBigNumberify("<builtin>",i.UInt_max,"256")),h=i.T_Object({i:t,sign:l}),f=i.T_Tuple([f,h]),h=i.T_Tuple([t]),g=i.T_Tuple([c]),y=i.T_Tuple([s]),_=i.T_Data({Against:d,For:d}),_=i.T_Tuple([_]),f=i.T_Data({addMember0_346:u,comment0_346:f,donate0_346:h,eject0_346:u,join0_346:p,leave0_346:p,post0_346:g,registerProposal0_346:y,voteProposal0_346:_});const x=o,k=i.newMap({ctc:a,idx:0,isAPI:!0,ty:x}),[N,T,C,Q,D,q,I,U,B,R,A,z,J,w,O,V,X,v]=await a.getState(i.checkedBigNumberify("<builtin>",i.UInt_max,"3"),[n,c,r,t,r,s,b,m,t,n,t,l,t,l,s,t,l,t]);var h=a.selfAddress(),u=i.protect(p,await e.in(),{at:"./dao/contracts/dao-blog.rsh:1:23:application",fs:["at ./dao/contracts/dao-blog.rsh:303:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:303:28:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runjoin0_346" (defined at: ./dao/contracts/dao-blog.rsh:303:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"in",who:"join"}),g=(i.assert(w,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:304:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:303:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:303:28:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runjoin0_346" (defined at: ./dao/contracts/dao-blog.rsh:303:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"An existing user has to add you to this DAO",who:"join"}),i.protect(x,await i.mapRef(k,h),null)),y={None:0,Some:1}[g[0]],_=i.eq(y,i.checkedBigNumberify("reach standard library:39:41:application",i.UInt_max,"0")),o=(i.assert(_,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:305:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:303:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:303:28:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runjoin0_346" (defined at: ./dao/contracts/dao-blog.rsh:303:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Address is already a member",who:"join"}),i.sub(i.UInt_max,B)),p=i.lt(A,o),h=(i.assert(p,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:306:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:303:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:303:28:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runjoin0_346" (defined at: ./dao/contracts/dao-blog.rsh:303:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Membership is at maximum capacity",who:"join"}),["join0_346",u]),S=await a.sendrecv({args:[N,T,C,Q,D,q,I,U,B,R,A,z,J,w,O,V,X,v,h],evt_cnt:1,funcNum:2,lct:i.checkedBigNumberify("<builtin>",i.UInt_max,"0"),onlyIf:!0,out_tys:[f],pay:[A,[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};i.UInt_max;i.simMapDupe(t,0,k);var{data:[o],from:n}=e;switch(o[0]){case"addMember0_346":o[1];break;case"comment0_346":o[1];break;case"donate0_346":o[1];break;case"eject0_346":o[1];break;case"join0_346":{o[1],t.txns.push({kind:"api",who:"join"}),i.protect(x,await i.simMapRef(t,0,n),null),i.add(B,A),t.txns.push({amt:A,kind:"to",tok:void 0}),await e.getOutput("join","v10045",d,null);var c=[v,i.checkedBigNumberify("<builtin>",i.UInt_max,"0")],c=(await i.simMapSet(t,0,n,c),I,U,I.admin,I.fee,I.openTreasury,I.quorum,I.registerSelf,U.action,U.index),r=i.ge(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",i.UInt_max,"10"));let a;a=r?(r=i.mod(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",i.UInt_max,"10")),c=i.sub(c,r),i.div(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",i.UInt_max,"10"))):i.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",i.UInt_max,"1"),t.isHalt=!1;break}case"leave0_346":o[1];break;case"post0_346":o[1];break;case"registerProposal0_346":o[1];break;case"voteProposal0_346":o[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[n,c,r,t,r,s,b,m,t,n,t,l,t,l,s,t,l,t,f],waitIfNotPresent:!1}),{data:[E],didSend:H,from:j}=S;switch(E[0]){case"addMember0_346":E[1];return;case"comment0_346":E[1];return;case"donate0_346":E[1];return;case"eject0_346":E[1];return;case"join0_346":{var P=E[1],M=(i.assert(w,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:304:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:303:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:303:28:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:303:28:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"An existing user has to add you to this DAO",who:"join"}),i.protect(x,await i.mapRef(k,j),null)),M={None:0,Some:1}[M[0]],M=i.eq(M,i.checkedBigNumberify("reach standard library:39:41:application",i.UInt_max,"0")),M=(i.assert(M,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:305:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:303:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:303:28:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:303:28:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Address is already a member",who:"join"}),i.sub(i.UInt_max,B)),M=i.lt(A,M),M=(i.assert(M,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:306:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:303:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:303:28:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:303:28:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Membership is at maximum capacity",who:"join"}),i.add(B,A)),F=i.le(M,i.UInt_max),F=(i.assert(F,{at:"./dao/contracts/dao-blog.rsh:208:50:dot",fs:[],msg:"assume <= UInt.max",who:"join"}),i.sub(i.UInt_max,M)),M=i.lt(A,F),F=(i.assert(M,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:306:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:311:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:311:13:function exp)"],msg:"Membership is at maximum capacity",who:"join"}),await S.getOutput("join","v10045",d,null)),M=(H&&i.protect(d,await e.out(P,F),{at:"./dao/contracts/dao-blog.rsh:303:11:application",fs:["at ./dao/contracts/dao-blog.rsh:303:11:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:303:11:function exp)",'at ./dao/contracts/dao-blog.rsh:312:12:application call to "k" (defined at: ./dao/contracts/dao-blog.rsh:311:13:function exp)',"at ./dao/contracts/dao-blog.rsh:311:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:311:13:function exp)"],msg:"out",who:"join"}),[v,i.checkedBigNumberify("<builtin>",i.UInt_max,"0")]),P=(await i.mapSet(k,j,M),I,U,I.admin,I.fee,I.openTreasury,I.quorum,I.registerSelf,U.action,U.index),F=i.ge(P,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",i.UInt_max,"10"));let a;return void(a=F?(M=i.mod(P,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",i.UInt_max,"10")),F=i.sub(P,M),i.div(F,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",i.UInt_max,"10"))):i.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",i.UInt_max,"1"))}case"leave0_346":E[1];return;case"post0_346":E[1];return;case"registerProposal0_346":E[1];return;case"voteProposal0_346":E[1]}}async function _leave3(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for _leave3 expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for _leave3 expects to receive an interact object as its second argument."));a=a._initialize();const i=a.stdlib,d=i.T_Null;var t=i.T_UInt,o=i.T_Tuple([t,t]),o=i.T_Data({None:d,Some:o}),n=i.T_Address,c=i.T_Bytes(i.checkedBigNumberify("<builtin>",i.UInt_max,"128")),r=i.T_Contract,s=i.T_Tuple([n,t]),l=i.T_Bool,b=i.T_Struct([["admin",n],["registerSelf",l],["fee",t],["quorum",t],["openTreasury",l]]),s=i.T_Data({AllocateFunds:s,ChangeAdmin:b,EjectMember:n,None:d,Stop:d}),b=i.T_Object({admin:n,fee:t,openTreasury:l,quorum:t,registerSelf:l}),m=i.T_Object({Against:t,For:t,action:s,index:t}),p=i.T_Tuple([]),u=i.T_Tuple([n]),f=i.T_Bytes(i.checkedBigNumberify("<builtin>",i.UInt_max,"256")),h=i.T_Object({i:t,sign:l}),f=i.T_Tuple([f,h]),h=i.T_Tuple([t]),g=i.T_Tuple([c]),y=i.T_Tuple([s]),_=i.T_Data({Against:d,For:d}),_=i.T_Tuple([_]),f=i.T_Data({addMember0_346:u,comment0_346:f,donate0_346:h,eject0_346:u,join0_346:p,leave0_346:p,post0_346:g,registerProposal0_346:y,voteProposal0_346:_});const x=o,k=i.newMap({ctc:a,idx:0,isAPI:!0,ty:x}),[N,T,I,U,B,A,w,v,S,C,Q,D,q,R,z,J,O,V]=await a.getState(i.checkedBigNumberify("<builtin>",i.UInt_max,"3"),[n,c,r,t,r,s,b,m,t,n,t,l,t,l,s,t,l,t]);var h=a.selfAddress(),u=i.protect(p,await e.in(),{at:"./dao/contracts/dao-blog.rsh:1:23:application",fs:["at ./dao/contracts/dao-blog.rsh:320:29:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:320:29:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runleave0_346" (defined at: ./dao/contracts/dao-blog.rsh:320:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"in",who:"leave"}),g={None:0,Some:1}[i.protect(x,await i.mapRef(k,h),null)[0]],y=i.eq(g,i.checkedBigNumberify("reach standard library:38:41:application",i.UInt_max,"1")),_=(i.assert(y,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:321:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:320:29:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:320:29:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runleave0_346" (defined at: ./dao/contracts/dao-blog.rsh:320:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Address is not a member",who:"leave"}),["leave0_346",u]),E=await a.sendrecv({args:[N,T,I,U,B,A,w,v,S,C,Q,D,q,R,z,J,O,V,_],evt_cnt:1,funcNum:2,lct:i.checkedBigNumberify("<builtin>",i.UInt_max,"0"),onlyIf:!0,out_tys:[f],pay:[i.checkedBigNumberify("./dao/contracts/dao-blog.rsh:323:9:decimal",i.UInt_max,"0"),[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};i.UInt_max;i.simMapDupe(t,0,k);var{data:[o],from:n}=e;switch(o[0]){case"addMember0_346":o[1];break;case"comment0_346":o[1];break;case"donate0_346":o[1];break;case"eject0_346":o[1];break;case"join0_346":o[1];break;case"leave0_346":{o[1],t.txns.push({kind:"api",who:"leave"}),i.protect(x,await i.simMapRef(t,0,n),null),await e.getOutput("leave","v11352",d,null),await i.simMapSet(t,0,n,void 0),w,v,S,w.admin,w.fee,w.openTreasury,w.quorum,w.registerSelf,v.action;var c=v.index,r=i.ge(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",i.UInt_max,"10"));let a;a=r?(r=i.mod(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",i.UInt_max,"10")),c=i.sub(c,r),i.div(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",i.UInt_max,"10"))):i.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",i.UInt_max,"1"),t.isHalt=!1;break}case"post0_346":o[1];break;case"registerProposal0_346":o[1];break;case"voteProposal0_346":o[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[n,c,r,t,r,s,b,m,t,n,t,l,t,l,s,t,l,t,f],waitIfNotPresent:!1}),{data:[j],didSend:X,from:P}=E;switch(j[0]){case"addMember0_346":j[1];return;case"comment0_346":j[1];return;case"donate0_346":j[1];return;case"eject0_346":j[1];return;case"join0_346":j[1];return;case"leave0_346":{var M=j[1],F={None:0,Some:1}[i.protect(x,await i.mapRef(k,P),null)[0]],F=i.eq(F,i.checkedBigNumberify("reach standard library:38:41:application",i.UInt_max,"1")),F=(i.assert(F,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:321:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:320:29:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:320:29:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:320:29:function exp)","at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Address is not a member",who:"leave"}),i.le(S,i.UInt_max)),F=(i.assert(F,{at:"./dao/contracts/dao-blog.rsh:208:50:dot",fs:[],msg:"assume <= UInt.max",who:"leave"}),await E.getOutput("leave","v11352",d,null)),M=(X&&i.protect(d,await e.out(M,F),{at:"./dao/contracts/dao-blog.rsh:320:11:application",fs:["at ./dao/contracts/dao-blog.rsh:320:11:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:320:11:function exp)",'at ./dao/contracts/dao-blog.rsh:326:12:application call to "k" (defined at: ./dao/contracts/dao-blog.rsh:325:13:function exp)',"at ./dao/contracts/dao-blog.rsh:325:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:325:13:function exp)"],msg:"out",who:"leave"}),await i.mapSet(k,P,void 0),w,v,S,w.admin,w.fee,w.openTreasury,w.quorum,w.registerSelf,v.action,v.index),F=i.ge(M,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",i.UInt_max,"10"));let a;return void(a=F?(F=i.mod(M,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",i.UInt_max,"10")),M=i.sub(M,F),i.div(M,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",i.UInt_max,"10"))):i.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",i.UInt_max,"1"))}case"post0_346":j[1];return;case"registerProposal0_346":j[1];return;case"voteProposal0_346":j[1]}}async function _post3(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for _post3 expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for _post3 expects to receive an interact object as its second argument."));a=a._initialize();const i=a.stdlib,d=i.T_Null;var t=i.T_UInt,o=i.T_Tuple([t,t]),o=i.T_Data({None:d,Some:o}),n=i.T_Address,c=i.T_Bytes(i.checkedBigNumberify("<builtin>",i.UInt_max,"128")),r=i.T_Contract,s=i.T_Tuple([n,t]),l=i.T_Bool,b=i.T_Struct([["admin",n],["registerSelf",l],["fee",t],["quorum",t],["openTreasury",l]]),s=i.T_Data({AllocateFunds:s,ChangeAdmin:b,EjectMember:n,None:d,Stop:d}),b=i.T_Object({admin:n,fee:t,openTreasury:l,quorum:t,registerSelf:l}),m=i.T_Object({Against:t,For:t,action:s,index:t}),p=i.T_Tuple([c]),u=i.T_Tuple([n]),f=i.T_Bytes(i.checkedBigNumberify("<builtin>",i.UInt_max,"256")),h=i.T_Object({i:t,sign:l}),f=i.T_Tuple([f,h]),h=i.T_Tuple([t]),g=i.T_Tuple([]),y=i.T_Tuple([s]),_=i.T_Data({Against:d,For:d}),_=i.T_Tuple([_]),f=i.T_Data({addMember0_346:u,comment0_346:f,donate0_346:h,eject0_346:u,join0_346:g,leave0_346:g,post0_346:p,registerProposal0_346:y,voteProposal0_346:_});const x=o,k=i.newMap({ctc:a,idx:0,isAPI:!0,ty:x}),[N,T,I,U,B,A,w,v,S,E,C,Q,D,q,R,z,J,O]=await a.getState(i.checkedBigNumberify("<builtin>",i.UInt_max,"3"),[n,c,r,t,r,s,b,m,t,n,t,l,t,l,s,t,l,t]);var h=a.selfAddress(),u=i.protect(p,await e.in(),{at:"./dao/contracts/dao-blog.rsh:1:23:application",fs:["at ./dao/contracts/dao-blog.rsh:395:35:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:395:35:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runpost0_346" (defined at: ./dao/contracts/dao-blog.rsh:395:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"in",who:"post"}),g={None:0,Some:1}[i.protect(x,await i.mapRef(k,h),null)[0]],y=i.eq(g,i.checkedBigNumberify("reach standard library:38:41:application",i.UInt_max,"1")),_=(i.assert(y,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:396:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:395:35:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:395:35:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runpost0_346" (defined at: ./dao/contracts/dao-blog.rsh:395:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Address is not a member",who:"post"}),["post0_346",u]),j=await a.sendrecv({args:[N,T,I,U,B,A,w,v,S,E,C,Q,D,q,R,z,J,O,_],evt_cnt:1,funcNum:2,lct:i.checkedBigNumberify("<builtin>",i.UInt_max,"0"),onlyIf:!0,out_tys:[f],pay:[i.checkedBigNumberify("./dao/contracts/dao-blog.rsh:395:10:decimal",i.UInt_max,"0"),[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};i.UInt_max;i.simMapDupe(t,0,k);var{data:[o],from:n}=e;switch(o[0]){case"addMember0_346":o[1];break;case"comment0_346":o[1];break;case"donate0_346":o[1];break;case"eject0_346":o[1];break;case"join0_346":o[1];break;case"leave0_346":o[1];break;case"post0_346":{var c=o[1],c=(t.txns.push({kind:"api",who:"post"}),c[i.checkedBigNumberify("./dao/contracts/dao-blog.rsh:395:10:spread",i.UInt_max,"0")],i.protect(x,await i.simMapRef(t,0,n),null),await e.getOutput("post","v12660",d,null),w,v,S,w.admin,w.fee,w.openTreasury,w.quorum,w.registerSelf,v.action,v.index),r=i.ge(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",i.UInt_max,"10"));let a;a=r?(r=i.mod(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",i.UInt_max,"10")),c=i.sub(c,r),i.div(c,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",i.UInt_max,"10"))):i.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",i.UInt_max,"1"),t.isHalt=!1;break}case"registerProposal0_346":o[1];break;case"voteProposal0_346":o[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[n,c,r,t,r,s,b,m,t,n,t,l,t,l,s,t,l,t,f],waitIfNotPresent:!1}),{data:[P],didSend:V,from:X}=j;switch(P[0]){case"addMember0_346":P[1];return;case"comment0_346":P[1];return;case"donate0_346":P[1];return;case"eject0_346":P[1];return;case"join0_346":P[1];return;case"leave0_346":P[1];return;case"post0_346":{var M=P[1],F=i.le(S,i.UInt_max),F=(i.assert(F,{at:"./dao/contracts/dao-blog.rsh:208:50:dot",fs:[],msg:"assume <= UInt.max",who:"post"}),M[i.checkedBigNumberify("./dao/contracts/dao-blog.rsh:395:10:spread",i.UInt_max,"0")],{None:0,Some:1}[i.protect(x,await i.mapRef(k,X),null)[0]]),F=i.eq(F,i.checkedBigNumberify("reach standard library:38:41:application",i.UInt_max,"1")),F=(i.assert(F,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:396:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:398:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:398:13:function exp)"],msg:"Address is not a member",who:"post"}),await j.getOutput("post","v12660",d,null)),M=(V&&i.protect(d,await e.out(M,F),{at:"./dao/contracts/dao-blog.rsh:395:11:application",fs:["at ./dao/contracts/dao-blog.rsh:395:11:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:395:11:function exp)",'at ./dao/contracts/dao-blog.rsh:399:12:application call to "k" (defined at: ./dao/contracts/dao-blog.rsh:398:13:function exp)',"at ./dao/contracts/dao-blog.rsh:398:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:398:13:function exp)"],msg:"out",who:"post"}),w,v,S,w.admin,w.fee,w.openTreasury,w.quorum,w.registerSelf,v.action,v.index),F=i.ge(M,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",i.UInt_max,"10"));let a;return void(a=F?(F=i.mod(M,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",i.UInt_max,"10")),M=i.sub(M,F),i.div(M,i.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",i.UInt_max,"10"))):i.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",i.UInt_max,"1"))}case"registerProposal0_346":P[1];return;case"voteProposal0_346":P[1]}}async function _registerProposal3(a,C){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for _registerProposal3 expects to receive a contract as its first argument."));if("object"!=typeof C)return Promise.reject(new Error("The backend for _registerProposal3 expects to receive an interact object as its second argument."));a=a._initialize();const l=a.stdlib,b=l.T_Null;var e=l.T_UInt,Q=l.T_Tuple([e,e]),Q=l.T_Data({None:b,Some:Q}),t=l.T_Address,D=l.T_Bytes(l.checkedBigNumberify("<builtin>",l.UInt_max,"128")),q=l.T_Contract,o=l.T_Tuple([t,e]),n=l.T_Bool,R=l.T_Struct([["admin",t],["registerSelf",n],["fee",e],["quorum",e],["openTreasury",n]]),o=l.T_Data({AllocateFunds:o,ChangeAdmin:R,EjectMember:t,None:b,Stop:b}),R=l.T_Object({admin:t,fee:e,openTreasury:n,quorum:e,registerSelf:n}),z=l.T_Object({Against:e,For:e,action:o,index:e}),J=l.T_Tuple([o]),O=l.T_Tuple([t]),V=l.T_Bytes(l.checkedBigNumberify("<builtin>",l.UInt_max,"256")),X=l.T_Object({i:e,sign:n}),V=l.T_Tuple([V,X]),X=l.T_Tuple([e]),H=l.T_Tuple([]),Y=l.T_Tuple([D]),W=l.T_Data({Against:b,For:b}),W=l.T_Tuple([W]),V=l.T_Data({addMember0_346:O,comment0_346:V,donate0_346:X,eject0_346:O,join0_346:H,leave0_346:H,post0_346:Y,registerProposal0_346:J,voteProposal0_346:W});const m=Q,p=l.newMap({ctc:a,idx:0,isAPI:!0,ty:m}),[G,Z,K,L,$,a0,u,e0,f,t0,o0,n0,c0,r0,h,g,i0,c]=await a.getState(l.checkedBigNumberify("<builtin>",l.UInt_max,"3"),[t,D,q,e,q,o,R,z,e,t,e,n,e,n,o,e,n,e]);var X=a.selfAddress(),O=l.protect(J,await C.in(),{at:"./dao/contracts/dao-blog.rsh:1:23:application",fs:["at ./dao/contracts/dao-blog.rsh:334:44:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:334:44:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runregisterProposal0_346" (defined at: ./dao/contracts/dao-blog.rsh:334:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"in",who:"registerProposal"}),r=O[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:1:23:application",l.UInt_max,"0")];let d0;d0=i0?(H=l.mod(g,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",l.UInt_max,"10")),Y=l.sub(g,H),l.div(Y,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",l.UInt_max,"10"))):l.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",l.UInt_max,"1");var W=l.protect(m,await l.mapRef(p,X),null),s0=[l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),l.checkedBigNumberify("<builtin>",l.UInt_max,"0")],Q=l.fromSome(W,s0)[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:139:11:array",l.UInt_max,"0")],J=l.ge(Q,d0),H=(l.assert(J,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:140:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:335:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-blog.rsh:137:36:function exp)',"at ./dao/contracts/dao-blog.rsh:334:44:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:334:44:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runregisterProposal0_346" (defined at: ./dao/contracts/dao-blog.rsh:334:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"THIEF! SEIZE THEM!",who:"registerProposal"}),l.ge(Q,c));l.assert(H,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:336:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:334:44:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:334:44:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runregisterProposal0_346" (defined at: ./dao/contracts/dao-blog.rsh:334:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"User is below Citizen Rank threshold",who:"registerProposal"});let i;switch(h[0]){case"AllocateFunds":var d=h[1],s=d[l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"0")],d=d[l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"1")],d=l.lt(d,f),s={None:0,Some:1}[l.protect(m,await l.mapRef(p,s),null)[0]],s=l.eq(s,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1"));i=n0?d:!!s&&d;break;case"ChangeAdmin":{var s=h[1],d=s.admin,y=s.fee,s=s.quorum,d=l.protect(m,await l.mapRef(p,d),null),_=l.fromSome(d,s0)[l.checkedBigNumberify("./dao/contracts/shared.rsh:84:13:array",l.UInt_max,"0")],d={None:0,Some:1}[d[0]],d=l.eq(d,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),_=l.gt(_,c),d=!!d&&_,_=l.gt(s,l.checkedBigNumberify("./dao/contracts/shared.rsh:86:34:decimal",l.UInt_max,"0"));let a;a=!!_&&l.lt(s,L);_=l.ge(y,l.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",l.UInt_max,"0")),s=l.lt(y,l.UInt_max),y=!!d&&a;i=!!y&&(!!_&&s);break}case"EjectMember":d=h[1],y={None:0,Some:1}[l.protect(m,await l.mapRef(p,d),null)[0]],_=l.eq(y,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),s=l.addressEq(d,t0);i=!!_&&!s;break;case"None":h[1];i=!1;break;case"Stop":h[1];i=!0}Y=!i,l.assert(Y,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:338:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:334:44:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:334:44:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runregisterProposal0_346" (defined at: ./dao/contracts/dao-blog.rsh:334:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"A Proposal is already active.",who:"registerProposal"}),X=l.sub(l.UInt_max,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:343:32:decimal",l.UInt_max,"1")),W=l.lt(g,X);l.assert(W,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:343:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:334:44:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:334:44:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runregisterProposal0_346" (defined at: ./dao/contracts/dao-blog.rsh:334:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Governance limit reached",who:"registerProposal"});let x;switch(r[0]){case"AllocateFunds":var k=r[1],N=k[l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"0")],k=k[l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"1")],k=l.lt(k,f),N={None:0,Some:1}[l.protect(m,await l.mapRef(p,N),null)[0]],N=l.eq(N,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1"));x=n0?k:!!N&&k;break;case"ChangeAdmin":{var N=r[1],k=N.admin,T=N.fee,N=N.quorum,k=l.protect(m,await l.mapRef(p,k),null),I=l.fromSome(k,s0)[l.checkedBigNumberify("./dao/contracts/shared.rsh:84:13:array",l.UInt_max,"0")],k={None:0,Some:1}[k[0]],k=l.eq(k,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),I=l.gt(I,c),k=!!k&&I,I=l.gt(N,l.checkedBigNumberify("./dao/contracts/shared.rsh:86:34:decimal",l.UInt_max,"0"));let a;a=!!I&&l.lt(N,L);I=l.ge(T,l.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",l.UInt_max,"0")),N=l.lt(T,l.UInt_max),T=!!k&&a;x=!!T&&(!!I&&N);break}case"EjectMember":k=r[1],T={None:0,Some:1}[l.protect(m,await l.mapRef(p,k),null)[0]],I=l.eq(T,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),N=l.addressEq(k,t0);x=!!I&&!N;break;case"None":r[1];x=!1;break;case"Stop":r[1];x=!0}l.assert(x,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:344:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:334:44:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:334:44:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runregisterProposal0_346" (defined at: ./dao/contracts/dao-blog.rsh:334:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Bad suggestion is bad. Apologize to everyone.",who:"registerProposal"});var l0=await a.sendrecv({args:[G,Z,K,L,$,a0,u,e0,f,t0,o0,n0,c0,r0,h,g,i0,c,["registerProposal0_346",O]],evt_cnt:1,funcNum:2,lct:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),onlyIf:!0,out_tys:[V],pay:[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:334:10:decimal",l.UInt_max,"0"),[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};l.UInt_max;l.simMapDupe(t,0,p);var{data:[o],from:n}=e;switch(o[0]){case"addMember0_346":o[1];break;case"comment0_346":o[1];break;case"donate0_346":o[1];break;case"eject0_346":o[1];break;case"join0_346":o[1];break;case"leave0_346":o[1];break;case"post0_346":o[1];break;case"registerProposal0_346":{var c=o[1],r=(t.txns.push({kind:"api",who:"registerProposal"}),c[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:334:10:spread",l.UInt_max,"0")]);switch(l.protect(m,await l.simMapRef(t,0,n),null),h[0]){case"AllocateFunds":var i=h[1][l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"0")];l.protect(m,await l.simMapRef(t,0,i),null);break;case"ChangeAdmin":i=h[1].admin;l.protect(m,await l.simMapRef(t,0,i),null);break;case"EjectMember":i=h[1];l.protect(m,await l.simMapRef(t,0,i),null);break;case"None":h[1];break;case"Stop":h[1]}switch(r[0]){case"AllocateFunds":var d=r[1][l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"0")];l.protect(m,await l.simMapRef(t,0,d),null);break;case"ChangeAdmin":d=r[1].admin;l.protect(m,await l.simMapRef(t,0,d),null);break;case"EjectMember":d=r[1];l.protect(m,await l.simMapRef(t,0,d),null);break;case"None":r[1];break;case"Stop":r[1]}await e.getOutput("registerProposal","v14093",b,null);var c=l.add(g,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:202:30:decimal",l.UInt_max,"1")),c={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:r,index:c},c=(u,f,u.admin,u.fee,u.openTreasury,u.quorum,u.registerSelf,c.index),s=l.ge(c,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",l.UInt_max,"10"));let a;a=s?(s=l.mod(c,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",l.UInt_max,"10")),c=l.sub(c,s),l.div(c,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",l.UInt_max,"10"))):l.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",l.UInt_max,"1"),t.isHalt=!1;break}case"voteProposal0_346":o[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[t,D,q,e,q,o,R,z,e,t,e,n,e,n,o,e,n,e,V],waitIfNotPresent:!1}),{data:[U],didSend:b0,from:m0}=l0;switch(U[0]){case"addMember0_346":U[1];return;case"comment0_346":U[1];return;case"donate0_346":U[1];return;case"eject0_346":U[1];return;case"join0_346":U[1];return;case"leave0_346":U[1];return;case"post0_346":U[1];return;case"registerProposal0_346":{var p0=U[1],B=l.le(f,l.UInt_max),A=(l.assert(B,{at:"./dao/contracts/dao-blog.rsh:208:50:dot",fs:[],msg:"assume <= UInt.max",who:"registerProposal"}),p0[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:334:10:spread",l.UInt_max,"0")]);let a;a=i0?(B=l.mod(g,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",l.UInt_max,"10")),B=l.sub(g,B),l.div(B,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",l.UInt_max,"10"))):l.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",l.UInt_max,"1");var B=l.protect(m,await l.mapRef(p,m0),null),u0=[l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),l.checkedBigNumberify("<builtin>",l.UInt_max,"0")],B=l.fromSome(B,u0)[l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:139:11:array",l.UInt_max,"0")],w=l.ge(B,a),w=(l.assert(w,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:140:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:335:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-blog.rsh:137:36:function exp)',"at ./dao/contracts/dao-blog.rsh:347:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:347:13:function exp)"],msg:"THIEF! SEIZE THEM!",who:"registerProposal"}),l.ge(B,c));l.assert(w,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:336:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:347:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:347:13:function exp)"],msg:"User is below Citizen Rank threshold",who:"registerProposal"});let e;switch(h[0]){case"AllocateFunds":var v=h[1],S=v[l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"0")],v=v[l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"1")],v=l.lt(v,f),S={None:0,Some:1}[l.protect(m,await l.mapRef(p,S),null)[0]],S=l.eq(S,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1"));e=n0?v:!!S&&v;break;case"ChangeAdmin":{var S=h[1],v=S.admin,E=S.fee,S=S.quorum,v=l.protect(m,await l.mapRef(p,v),null),j=l.fromSome(v,u0)[l.checkedBigNumberify("./dao/contracts/shared.rsh:84:13:array",l.UInt_max,"0")],v={None:0,Some:1}[v[0]],v=l.eq(v,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),j=l.gt(j,c),v=!!v&&j,j=l.gt(S,l.checkedBigNumberify("./dao/contracts/shared.rsh:86:34:decimal",l.UInt_max,"0"));let a;a=!!j&&l.lt(S,L);j=l.ge(E,l.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",l.UInt_max,"0")),S=l.lt(E,l.UInt_max),E=!!v&&a;e=!!E&&(!!j&&S);break}case"EjectMember":v=h[1],E={None:0,Some:1}[l.protect(m,await l.mapRef(p,v),null)[0]],j=l.eq(E,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),S=l.addressEq(v,t0);e=!!j&&!S;break;case"None":h[1];e=!1;break;case"Stop":h[1];e=!0}B=!e,w=(l.assert(B,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:338:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:347:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:347:13:function exp)"],msg:"A Proposal is already active.",who:"registerProposal"}),l.sub(l.UInt_max,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:343:32:decimal",l.UInt_max,"1"))),B=l.lt(g,w);l.assert(B,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:343:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:347:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:347:13:function exp)"],msg:"Governance limit reached",who:"registerProposal"});let t;switch(A[0]){case"AllocateFunds":var P=A[1],M=P[l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"0")],P=P[l.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",l.UInt_max,"1")],P=l.lt(P,f),M={None:0,Some:1}[l.protect(m,await l.mapRef(p,M),null)[0]],M=l.eq(M,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1"));t=n0?P:!!M&&P;break;case"ChangeAdmin":{var M=A[1],P=M.admin,f0=M.fee,M=M.quorum,P=l.protect(m,await l.mapRef(p,P),null),F=l.fromSome(P,u0)[l.checkedBigNumberify("./dao/contracts/shared.rsh:84:13:array",l.UInt_max,"0")],P={None:0,Some:1}[P[0]],P=l.eq(P,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),F=l.gt(F,c),P=!!P&&F,F=l.gt(M,l.checkedBigNumberify("./dao/contracts/shared.rsh:86:34:decimal",l.UInt_max,"0"));let a;a=!!F&&l.lt(M,L);F=l.ge(f0,l.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",l.UInt_max,"0")),M=l.lt(f0,l.UInt_max),f0=!!P&&a;t=!!f0&&(!!F&&M);break}case"EjectMember":P=A[1],f0={None:0,Some:1}[l.protect(m,await l.mapRef(p,P),null)[0]],F=l.eq(f0,l.checkedBigNumberify("reach standard library:38:41:application",l.UInt_max,"1")),M=l.addressEq(P,t0);t=!!F&&!M;break;case"None":A[1];t=!1;break;case"Stop":A[1];t=!0}l.assert(t,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:344:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:347:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:347:13:function exp)"],msg:"Bad suggestion is bad. Apologize to everyone.",who:"registerProposal"});var w=await l0.getOutput("registerProposal","v14093",b,null),B=(b0&&l.protect(b,await C.out(p0,w),{at:"./dao/contracts/dao-blog.rsh:334:11:application",fs:["at ./dao/contracts/dao-blog.rsh:334:11:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:334:11:function exp)",'at ./dao/contracts/dao-blog.rsh:348:12:application call to "k" (defined at: ./dao/contracts/dao-blog.rsh:347:13:function exp)',"at ./dao/contracts/dao-blog.rsh:347:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:347:13:function exp)"],msg:"out",who:"registerProposal"}),l.add(g,l.checkedBigNumberify("./dao/contracts/dao-blog.rsh:202:30:decimal",l.UInt_max,"1"))),p0={Against:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),For:l.checkedBigNumberify("<builtin>",l.UInt_max,"0"),action:A,index:B},w=(u,f,u.admin,u.fee,u.openTreasury,u.quorum,u.registerSelf,p0.index),B=l.ge(w,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",l.UInt_max,"10"));let o;return void(o=B?(p0=l.mod(w,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",l.UInt_max,"10")),B=l.sub(w,p0),l.div(B,l.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",l.UInt_max,"10"))):l.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",l.UInt_max,"1"))}case"voteProposal0_346":U[1]}}async function _voteProposal3(a,B){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for _voteProposal3 expects to receive a contract as its first argument."));if("object"!=typeof B)return Promise.reject(new Error("The backend for _voteProposal3 expects to receive an interact object as its second argument."));const w=a._initialize(),v=w.stdlib,S=v.T_Null;var a=v.T_UInt,e=v.T_Tuple([a,a]),e=v.T_Data({None:S,Some:e}),t=v.T_Address,A=v.T_Bytes(v.checkedBigNumberify("<builtin>",v.UInt_max,"128")),D=v.T_Contract,o=v.T_Tuple([t,a]),n=v.T_Bool,q=v.T_Struct([["admin",t],["registerSelf",n],["fee",a],["quorum",a],["openTreasury",n]]),o=v.T_Data({AllocateFunds:o,ChangeAdmin:q,EjectMember:t,None:S,Stop:S}),q=v.T_Object({admin:t,fee:a,openTreasury:n,quorum:a,registerSelf:n}),R=v.T_Object({Against:a,For:a,action:o,index:a}),c=v.T_Data({Against:S,For:S}),c=v.T_Tuple([c]),z=v.T_Tuple([t]),J=v.T_Bytes(v.checkedBigNumberify("<builtin>",v.UInt_max,"256")),r=v.T_Object({i:a,sign:n}),J=v.T_Tuple([J,r]),r=v.T_Tuple([a]),O=v.T_Tuple([]),i=v.T_Tuple([A]),V=v.T_Tuple([o]),J=v.T_Data({addMember0_346:z,comment0_346:J,donate0_346:r,eject0_346:z,join0_346:O,leave0_346:O,post0_346:i,registerProposal0_346:V,voteProposal0_346:c});const X=v.T_Tuple([a,S]),E=e,j=v.newMap({ctc:w,idx:0,isAPI:!0,ty:E}),[H,Y,W,G,Z,P,M,K,F,L,$,a0,e0,t0,C,Q,o0,n0]=await w.getState(v.checkedBigNumberify("<builtin>",v.UInt_max,"3"),[t,A,D,a,D,o,q,R,a,t,a,n,a,n,o,a,n,a]);var r=w.selfAddress(),z=v.protect(c,await B.in(),{at:"./dao/contracts/dao-blog.rsh:1:23:application",fs:["at ./dao/contracts/dao-blog.rsh:356:38:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:356:38:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runvoteProposal0_346" (defined at: ./dao/contracts/dao-blog.rsh:356:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"in",who:"voteProposal"}),c0=z[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:1:23:application",v.UInt_max,"0")];let r0;r0=o0?(O=v.mod(Q,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),i=v.sub(Q,O),v.div(i,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1");var V=v.protect(E,await v.mapRef(j,r),null),i0=[v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),v.checkedBigNumberify("<builtin>",v.UInt_max,"0")],e=v.fromSome(V,i0),c=e[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:139:11:array",v.UInt_max,"0")],O=e[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:139:11:array",v.UInt_max,"1")],i=v.ge(c,r0),d0=(v.assert(i,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:140:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:357:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-blog.rsh:137:36:function exp)',"at ./dao/contracts/dao-blog.rsh:356:38:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:356:38:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runvoteProposal0_346" (defined at: ./dao/contracts/dao-blog.rsh:356:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"THIEF! SEIZE THEM!",who:"voteProposal"}),K.For),s0=K.Against;let l0;switch(C[0]){case"AllocateFunds":var d=C[1],s=d[v.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",v.UInt_max,"0")],d=d[v.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",v.UInt_max,"1")],d=v.lt(d,F),s={None:0,Some:1}[v.protect(E,await v.mapRef(j,s),null)[0]],s=v.eq(s,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),s=a0?d:!!s&&d;l0=s;break;case"ChangeAdmin":{var d=C[1],s=d.admin,b0=d.fee,d=d.quorum,s=v.protect(E,await v.mapRef(j,s),null),m0=v.fromSome(s,i0)[v.checkedBigNumberify("./dao/contracts/shared.rsh:84:13:array",v.UInt_max,"0")],s={None:0,Some:1}[s[0]],s=v.eq(s,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),m0=v.gt(m0,n0),s=!!s&&m0,m0=v.gt(d,v.checkedBigNumberify("./dao/contracts/shared.rsh:86:34:decimal",v.UInt_max,"0"));let a;a=!!m0&&v.lt(d,G);m0=v.ge(b0,v.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",v.UInt_max,"0")),d=v.lt(b0,v.UInt_max),b0=!!s&&a;l0=!!b0&&(!!m0&&d);break}case"EjectMember":s=C[1],b0={None:0,Some:1}[v.protect(E,await v.mapRef(j,s),null)[0]],m0=v.eq(b0,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),d=v.addressEq(s,L);l0=!!m0&&!d;break;case"None":C[1];l0=!1;break;case"Stop":C[1];l0=!0}v.assert(l0,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:359:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:356:38:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:356:38:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runvoteProposal0_346" (defined at: ./dao/contracts/dao-blog.rsh:356:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"No Proposal is currently active",who:"voteProposal"});v.gt(d0,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:364:17:decimal",v.UInt_max,"0"))&&(r=v.sub(v.UInt_max,s0),V=v.lt(d0,r),v.assert(V,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:365:14:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:356:38:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:356:38:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runvoteProposal0_346" (defined at: ./dao/contracts/dao-blog.rsh:356:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Voting limit reached",who:"voteProposal"}));e=v.gt(s0,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:367:21:decimal",v.UInt_max,"0")),e&&(c=v.sub(v.UInt_max,d0),i=v.lt(s0,c),v.assert(i,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:368:14:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:356:38:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:356:38:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runvoteProposal0_346" (defined at: ./dao/contracts/dao-blog.rsh:356:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Voting limit reached",who:"voteProposal"})),r=v.add(d0,s0),V=v.lt(r,e0),v.assert(V,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:371:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:356:38:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:356:38:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runvoteProposal0_346" (defined at: ./dao/contracts/dao-blog.rsh:356:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Quorum reached",who:"voteProposal"}),e=v.lt(O,Q);v.assert(e,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:374:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:356:38:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:356:38:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runvoteProposal0_346" (defined at: ./dao/contracts/dao-blog.rsh:356:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Address has already voted in this session",who:"voteProposal"});let p0;switch(c0[0]){case"Against":c0[1];var u0=v.add(s0,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:378:40:decimal",v.UInt_max,"1"));p0=[d0,u0];break;case"For":c0[1];u0=v.add(d0,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:377:27:decimal",v.UInt_max,"1"));p0=[u0,s0]}var c=p0[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:376:13:array",v.UInt_max,"0")],i=p0[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:376:13:array",v.UInt_max,"1")],r=v.sub(v.UInt_max,i),V=v.lt(c,r),O=(v.assert(V,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:380:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:356:38:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:356:38:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runvoteProposal0_346" (defined at: ./dao/contracts/dao-blog.rsh:356:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Voting limit reached (2)",who:"voteProposal"}),v.sub(v.UInt_max,c)),e=v.lt(i,O),r=(v.assert(e,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:381:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:356:38:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:356:38:function exp)",'at ./dao/contracts/dao-blog.rsh:208:50:application call to "runvoteProposal0_346" (defined at: ./dao/contracts/dao-blog.rsh:356:10:function exp)',"at ./dao/contracts/dao-blog.rsh:208:50:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:208:50:function exp)"],msg:"Voting limit reached (2)",who:"voteProposal"}),["voteProposal0_346",z]),f0=await w.sendrecv({args:[H,Y,W,G,Z,P,M,K,F,L,$,a0,e0,t0,C,Q,o0,n0,r],evt_cnt:1,funcNum:2,lct:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),onlyIf:!0,out_tys:[J],pay:[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:356:10:decimal",v.UInt_max,"0"),[]],sim_p:async n=>{var c={txns:[],mapRefs:[],maps:[]};v.UInt_max;v.simMapDupe(c,0,j);var{data:[r],from:i}=n;switch(r[0]){case"addMember0_346":r[1];break;case"comment0_346":r[1];break;case"donate0_346":r[1];break;case"eject0_346":r[1];break;case"join0_346":r[1];break;case"leave0_346":r[1];break;case"post0_346":r[1];break;case"registerProposal0_346":r[1];break;case"voteProposal0_346":{var d=r[1],s=(c.txns.push({kind:"api",who:"voteProposal"}),d[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:356:10:spread",v.UInt_max,"0")]),d=v.protect(E,await v.simMapRef(c,0,i),null),l=[v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),v.checkedBigNumberify("<builtin>",v.UInt_max,"0")],d=v.fromSome(d,l)[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:139:11:array",v.UInt_max,"0")],b=K.For,m=K.Against;switch(C[0]){case"AllocateFunds":var p=C[1][v.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",v.UInt_max,"0")];v.protect(E,await v.simMapRef(c,0,p),null);break;case"ChangeAdmin":p=C[1].admin;v.protect(E,await v.simMapRef(c,0,p),null);break;case"EjectMember":p=C[1];v.protect(E,await v.simMapRef(c,0,p),null);break;case"None":C[1];break;case"Stop":C[1]}let a;switch(s[0]){case"Against":s[1];var u=v.add(m,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:378:40:decimal",v.UInt_max,"1"));a=[b,u];break;case"For":s[1];u=v.add(b,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:377:27:decimal",v.UInt_max,"1"));a=[u,m]}var f=a[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:376:13:array",v.UInt_max,"0")],h=a[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:376:13:array",v.UInt_max,"1")],g=(await n.getOutput("voteProposal","v15546",S,null),v.lt(d,v.UInt_max));let e;e=g?[v.add(d,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:388:45:decimal",v.UInt_max,"1")),Q]:[d,Q],await v.simMapSet(c,0,i,e);var g=v.add(f,h),d=v.ge(g,e0);let t;t=o0?(g=v.mod(Q,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),g=v.sub(Q,g),v.div(g,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1");let o;switch(C[0]){case"AllocateFunds":var y=C[1],_=y[v.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",v.UInt_max,"0")],y=y[v.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",v.UInt_max,"1")],y=v.lt(y,F),_={None:0,Some:1}[v.protect(E,await v.simMapRef(c,0,_),null)[0]],_=!!v.eq(_,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1"))&&y,y=a0?y:_;o=y;break;case"ChangeAdmin":{var _=C[1],y=_.admin,x=_.fee,_=_.quorum,y=v.protect(E,await v.simMapRef(c,0,y),null),k=v.fromSome(y,l)[v.checkedBigNumberify("./dao/contracts/shared.rsh:84:13:array",v.UInt_max,"0")],y={None:0,Some:1}[y[0]],y=v.eq(y,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),k=v.gt(k,t),y=!!y&&k,k=v.gt(_,v.checkedBigNumberify("./dao/contracts/shared.rsh:86:34:decimal",v.UInt_max,"0"));let a;a=!!k&&v.lt(_,G);k=v.ge(x,v.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",v.UInt_max,"0")),_=v.lt(x,v.UInt_max),x=!!y&&a;o=!!x&&(!!k&&_);break}case"EjectMember":y=C[1],x={None:0,Some:1}[v.protect(E,await v.simMapRef(c,0,y),null)[0]],k=v.eq(x,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),_=v.addressEq(y,L);o=!!k&&!_;break;case"None":C[1];o=!1;break;case"Stop":C[1];o=!0}if(d){g=v.gt(f,h);if(!!o&&g)switch(C[0]){case"AllocateFunds":{var N=C[1],T=N[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:169:32:application",v.UInt_max,"0")],N=N[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:169:32:application",v.UInt_max,"1")],N=(v.sub(F,N),c.txns.push({kind:"from",to:T,tok:void 0}),{Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q}),T=(M,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,N.index),N=v.ge(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;a=N?(N=v.mod(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),T=v.sub(T,N),v.div(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"ChangeAdmin":{N=C[1],T=(N.admin,N.registerSelf,N.fee,N.quorum,N.openTreasury,{Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q}),N=(F,T.index),T=v.ge(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;a=T?(T=v.mod(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),N=v.sub(N,T),v.div(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"EjectMember":{T=C[1],N=(await v.simMapSet(c,0,T,void 0),{Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q}),T=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,N.index),N=v.ge(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;a=N?(N=v.mod(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),T=v.sub(T,N),v.div(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"None":{C[1];N={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},T=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,N.index),N=v.ge(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;a=N?(N=v.mod(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),T=v.sub(T,N),v.div(T,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"Stop":C[1];N=[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:187:32:application",v.UInt_max,"0"),void c.txns.push({kind:"remote",obj:W,remote:{accs:[],apps:[],bills:v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:187:32:application",v.UInt_max,"0"),fees:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),pays:v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:187:32:application",v.UInt_max,"0"),toks:[]}})],T=(await n.getOutput("internal","v16093",X,N))[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:187:32:application",v.UInt_max,"0")],N=v.add(F,T),T=M.admin,N=v.sub(N,N);c.txns.push({kind:"from",to:T,tok:void 0}),v.le(await w.getBalance(),N)?v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:419:29:application",v.UInt_max,"0"):v.safeSub(await w.getBalance(),N);c.txns.push({kind:"from",to:T,tok:void 0}),c.txns.push({kind:"halt",tok:void 0}),c.isHalt=!0}else if(g)switch(C[0]){case"AllocateFunds":{C[1];var I={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},I=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,I.index),U=v.ge(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;a=U?(U=v.mod(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),I=v.sub(I,U),v.div(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"ChangeAdmin":{C[1];var U={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},I=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,U.index),U=v.ge(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;a=U?(U=v.mod(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),I=v.sub(I,U),v.div(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"EjectMember":{C[1];U={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},I=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,U.index),U=v.ge(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;a=U?(U=v.mod(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),I=v.sub(I,U),v.div(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"None":{C[1];U={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},I=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,U.index),U=v.ge(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;a=U?(U=v.mod(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),I=v.sub(I,U),v.div(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"Stop":{C[1];U={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},I=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,U.index),U=v.ge(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;a=U?(U=v.mod(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),I=v.sub(I,U),v.div(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}}else switch(C[0]){case"AllocateFunds":{C[1];var B={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},B=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,B.index),A=v.ge(B,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;a=A?(A=v.mod(B,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),B=v.sub(B,A),v.div(B,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"ChangeAdmin":{C[1];var A={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},B=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,A.index),A=v.ge(B,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;a=A?(A=v.mod(B,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),B=v.sub(B,A),v.div(B,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"EjectMember":{C[1];A={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},B=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,A.index),A=v.ge(B,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;a=A?(A=v.mod(B,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),B=v.sub(B,A),v.div(B,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"None":{C[1];A={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},B=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,A.index),A=v.ge(B,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;a=A?(A=v.mod(B,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),B=v.sub(B,A),v.div(B,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}case"Stop":{C[1];A={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},B=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,A.index),A=v.ge(B,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;a=A?(A=v.mod(B,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),B=v.sub(B,A),v.div(B,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"),c.isHalt=!1;break}}}else{d={Against:h,For:f,action:C,index:Q},g=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,d.index),h=v.ge(g,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;a=h?(f=v.mod(g,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),d=v.sub(g,f),v.div(d,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"),c.isHalt=!1}break}}return c},soloSend:!1,timeoutAt:void 0,tys:[t,A,D,a,D,o,q,R,a,t,a,n,a,n,o,a,n,a,J],waitIfNotPresent:!1}),{data:[l],didSend:h0,from:g0}=f0;switch(l[0]){case"addMember0_346":l[1];return;case"comment0_346":l[1];return;case"donate0_346":l[1];return;case"eject0_346":l[1];return;case"join0_346":l[1];return;case"leave0_346":l[1];return;case"post0_346":l[1];return;case"registerProposal0_346":l[1];return;case"voteProposal0_346":{var b=l[1],m=v.le(F,v.UInt_max),y0=(v.assert(m,{at:"./dao/contracts/dao-blog.rsh:208:50:dot",fs:[],msg:"assume <= UInt.max",who:"voteProposal"}),b[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:356:10:spread",v.UInt_max,"0")]);let a;a=o0?(m=v.mod(Q,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),m=v.sub(Q,m),v.div(m,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1");var m=v.protect(E,await v.mapRef(j,g0),null),_0=[v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),v.checkedBigNumberify("<builtin>",v.UInt_max,"0")],m=v.fromSome(m,_0),p=m[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:139:11:array",v.UInt_max,"0")],m=m[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:139:11:array",v.UInt_max,"1")],u=v.ge(p,a),x0=(v.assert(u,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:140:10:application call to "check" (defined at: reach standard library:49:32:function exp)','at ./dao/contracts/dao-blog.rsh:357:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-blog.rsh:137:36:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"THIEF! SEIZE THEM!",who:"voteProposal"}),K.For),k0=K.Against;let e;switch(C[0]){case"AllocateFunds":var f=C[1],h=f[v.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",v.UInt_max,"0")],f=f[v.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",v.UInt_max,"1")],f=v.lt(f,F),h={None:0,Some:1}[v.protect(E,await v.mapRef(j,h),null)[0]],h=v.eq(h,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),h=a0?f:!!h&&f;e=h;break;case"ChangeAdmin":{var f=C[1],h=f.admin,N0=f.fee,f=f.quorum,h=v.protect(E,await v.mapRef(j,h),null),T0=v.fromSome(h,_0)[v.checkedBigNumberify("./dao/contracts/shared.rsh:84:13:array",v.UInt_max,"0")],h={None:0,Some:1}[h[0]],h=v.eq(h,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),T0=v.gt(T0,n0),h=!!h&&T0,T0=v.gt(f,v.checkedBigNumberify("./dao/contracts/shared.rsh:86:34:decimal",v.UInt_max,"0"));let a;a=!!T0&&v.lt(f,G);T0=v.ge(N0,v.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",v.UInt_max,"0")),f=v.lt(N0,v.UInt_max),N0=!!h&&a;e=!!N0&&(!!T0&&f);break}case"EjectMember":h=C[1],N0={None:0,Some:1}[v.protect(E,await v.mapRef(j,h),null)[0]],T0=v.eq(N0,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),f=v.addressEq(h,L);e=!!T0&&!f;break;case"None":C[1];e=!1;break;case"Stop":C[1];e=!0}v.assert(e,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:359:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"No Proposal is currently active",who:"voteProposal"});v.gt(x0,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:364:17:decimal",v.UInt_max,"0"))&&(u=v.sub(v.UInt_max,k0),u=v.lt(x0,u),v.assert(u,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:365:14:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"Voting limit reached",who:"voteProposal"}));var u=v.gt(k0,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:367:21:decimal",v.UInt_max,"0")),u=(u&&(u=v.sub(v.UInt_max,x0),u=v.lt(k0,u),v.assert(u,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:368:14:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"Voting limit reached",who:"voteProposal"})),v.add(x0,k0)),u=v.lt(u,e0),u=(v.assert(u,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:371:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"Quorum reached",who:"voteProposal"}),v.lt(m,Q));v.assert(u,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:374:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"Address has already voted in this session",who:"voteProposal"});let t;switch(y0[0]){case"Against":y0[1];var I0=v.add(k0,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:378:40:decimal",v.UInt_max,"1"));t=[x0,I0];break;case"For":y0[1];I0=v.add(x0,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:377:27:decimal",v.UInt_max,"1"));t=[I0,k0]}var m=t[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:376:13:array",v.UInt_max,"0")],u=t[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:376:13:array",v.UInt_max,"1")],g=v.sub(v.UInt_max,u),g=v.lt(m,g),g=(v.assert(g,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:380:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"Voting limit reached (2)",who:"voteProposal"}),v.sub(v.UInt_max,m)),g=v.lt(u,g),g=(v.assert(g,{at:"reach standard library:57:5:application",fs:['at ./dao/contracts/dao-blog.rsh:381:12:application call to "check" (defined at: reach standard library:49:32:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"Voting limit reached (2)",who:"voteProposal"}),await f0.getOutput("voteProposal","v15546",S,null)),b=(h0&&v.protect(S,await B.out(b,g),{at:"./dao/contracts/dao-blog.rsh:356:11:application",fs:["at ./dao/contracts/dao-blog.rsh:356:11:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:356:11:function exp)",'at ./dao/contracts/dao-blog.rsh:385:12:application call to "k" (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"out",who:"voteProposal"}),v.lt(p,v.UInt_max));let o;o=b?[v.add(p,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:388:45:decimal",v.UInt_max,"1")),Q]:[p,Q],await v.mapSet(j,g0,o);g=v.add(m,u),b=v.ge(g,e0);let n;n=o0?(p=v.mod(Q,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),g=v.sub(Q,p),v.div(g,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1");let c;switch(C[0]){case"AllocateFunds":var y=C[1],_=y[v.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",v.UInt_max,"0")],y=y[v.checkedBigNumberify("./dao/contracts/shared.rsh:76:21:array",v.UInt_max,"1")],y=v.lt(y,F),_={None:0,Some:1}[v.protect(E,await v.mapRef(j,_),null)[0]],_=v.eq(_,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),_=a0?y:!!_&&y;c=_;break;case"ChangeAdmin":{var y=C[1],_=y.admin,U0=y.fee,y=y.quorum,_=v.protect(E,await v.mapRef(j,_),null),B0=v.fromSome(_,_0)[v.checkedBigNumberify("./dao/contracts/shared.rsh:84:13:array",v.UInt_max,"0")],_={None:0,Some:1}[_[0]],_=v.eq(_,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),B0=v.gt(B0,n),_=!!_&&B0,B0=v.gt(y,v.checkedBigNumberify("./dao/contracts/shared.rsh:86:34:decimal",v.UInt_max,"0"));let a;a=!!B0&&v.lt(y,G);B0=v.ge(U0,v.checkedBigNumberify("./dao/contracts/shared.rsh:87:34:decimal",v.UInt_max,"0")),y=v.lt(U0,v.UInt_max),U0=!!_&&a;c=!!U0&&(!!B0&&y);break}case"EjectMember":_=C[1],U0={None:0,Some:1}[v.protect(E,await v.mapRef(j,_),null)[0]],B0=v.eq(U0,v.checkedBigNumberify("reach standard library:38:41:application",v.UInt_max,"1")),y=v.addressEq(_,L);c=!!B0&&!y;break;case"None":C[1];c=!1;break;case"Stop":C[1];c=!0}if(b){p=v.gt(m,u);if(!!c&&p)switch(C[0]){case"AllocateFunds":{var x=C[1],x=(x[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:169:32:application",v.UInt_max,"0")],x[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:169:32:application",v.UInt_max,"1")]),x=v.sub(F,x),x=v.ge(x,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:173:29:application",v.UInt_max,"0")),x=(v.assert(x,{at:"./dao/contracts/dao-blog.rsh:173:29:application",fs:["at ./dao/contracts/dao-blog.rsh:171:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:172:44:function exp)","at ./dao/contracts/dao-blog.rsh:171:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:171:28:function exp)",'at ./dao/contracts/dao-blog.rsh:390:28:application call to "doProposal" (defined at: ./dao/contracts/dao-blog.rsh:151:51:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"assume >= 0",who:"voteProposal"}),{Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q}),x=(M,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,x.index),k=v.ge(x,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;return void(a=k?(k=v.mod(x,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),x=v.sub(x,k),v.div(x,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"))}case"ChangeAdmin":{var k=C[1],x=(k.admin,k.registerSelf,k.fee,k.quorum,k.openTreasury,{Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q}),k=(F,x.index),x=v.ge(k,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;return void(a=x?(x=v.mod(k,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),k=v.sub(k,x),v.div(k,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"))}case"EjectMember":{x=C[1],k=(await v.mapSet(j,x,void 0),{Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q}),x=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,k.index),k=v.ge(x,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;return void(a=k?(k=v.mod(x,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),x=v.sub(x,k),v.div(x,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"))}case"None":{C[1];k={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},x=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,k.index),k=v.ge(x,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;return void(a=k?(k=v.mod(x,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),x=v.sub(x,k),v.div(x,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"))}case"Stop":C[1];var k=(await f0.getOutput("internal","v16093",X,void 0))[v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:187:32:application",v.UInt_max,"0")],x=v.add(F,k),A0=v.le(x,v.UInt_max),A0=(v.assert(A0,{at:"./dao/contracts/dao-blog.rsh:187:32:application",fs:["at ./dao/contracts/dao-blog.rsh:171:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:186:20:function exp)","at ./dao/contracts/dao-blog.rsh:171:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:171:28:function exp)",'at ./dao/contracts/dao-blog.rsh:390:28:application call to "doProposal" (defined at: ./dao/contracts/dao-blog.rsh:151:51:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"assume <= UInt.max",who:"voteProposal"}),v.eq(v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),k)),k=(v.assert(A0,{at:"./dao/contracts/dao-blog.rsh:187:32:application",fs:["at ./dao/contracts/dao-blog.rsh:171:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:186:20:function exp)","at ./dao/contracts/dao-blog.rsh:171:28:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:171:28:function exp)",'at ./dao/contracts/dao-blog.rsh:390:28:application call to "doProposal" (defined at: ./dao/contracts/dao-blog.rsh:151:51:function exp)',"at ./dao/contracts/dao-blog.rsh:384:13:application call to [unknown function] (defined at: ./dao/contracts/dao-blog.rsh:384:13:function exp)"],msg:"remote bill check",who:"voteProposal"}),M.admin,v.sub(x,x)),A0=v.ge(k,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:418:25:application",v.UInt_max,"0")),x=(v.assert(A0,{at:"./dao/contracts/dao-blog.rsh:418:25:application",fs:[],msg:"assume >= 0",who:"voteProposal"}),v.le(await w.getBalance(),k)?v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:419:29:application",v.UInt_max,"0"):v.safeSub(await w.getBalance(),k)),A0=v.safeAdd(x,k),k=v.sub(A0,x),A0=v.ge(k,v.checkedBigNumberify("./dao/contracts/dao-blog.rsh:419:35:application",v.UInt_max,"0"));return void v.assert(A0,{at:"./dao/contracts/dao-blog.rsh:419:35:application",fs:[],msg:"assume >= 0",who:"voteProposal"})}else if(p)switch(C[0]){case"AllocateFunds":{C[1];var N={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},N=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,N.index),T=v.ge(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;return void(a=T?(T=v.mod(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),N=v.sub(N,T),v.div(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"))}case"ChangeAdmin":{C[1];var T={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},N=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,T.index),T=v.ge(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;return void(a=T?(T=v.mod(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),N=v.sub(N,T),v.div(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"))}case"EjectMember":{C[1];T={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},N=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,T.index),T=v.ge(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;return void(a=T?(T=v.mod(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),N=v.sub(N,T),v.div(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"))}case"None":{C[1];T={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},N=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,T.index),T=v.ge(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;return void(a=T?(T=v.mod(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),N=v.sub(N,T),v.div(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"))}case"Stop":{C[1];T={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},N=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,T.index),T=v.ge(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;return void(a=T?(T=v.mod(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),N=v.sub(N,T),v.div(N,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"))}}else switch(C[0]){case"AllocateFunds":{C[1];var I={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},I=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,I.index),U=v.ge(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;return void(a=U?(U=v.mod(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),I=v.sub(I,U),v.div(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"))}case"ChangeAdmin":{C[1];var U={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},I=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,U.index),U=v.ge(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;return void(a=U?(U=v.mod(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),I=v.sub(I,U),v.div(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"))}case"EjectMember":{C[1];U={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},I=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,U.index),U=v.ge(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;return void(a=U?(U=v.mod(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),I=v.sub(I,U),v.div(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"))}case"None":{C[1];U={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},I=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,U.index),U=v.ge(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;return void(a=U?(U=v.mod(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),I=v.sub(I,U),v.div(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"))}case"Stop":{C[1];U={Against:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),For:v.checkedBigNumberify("<builtin>",v.UInt_max,"0"),action:P,index:Q},I=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,U.index),U=v.ge(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;return void(a=U?(U=v.mod(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),I=v.sub(I,U),v.div(I,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"))}}}else{g={Against:u,For:m,action:C,index:Q},b=(M,F,M.admin,M.fee,M.openTreasury,M.quorum,M.registerSelf,g.index),p=v.ge(b,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:12:decimal",v.UInt_max,"10"));let a;void(a=p?(u=v.mod(b,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:35:decimal",v.UInt_max,"10")),m=v.sub(b,u),v.div(m,v.checkedBigNumberify("./dao/contracts/shared.rsh:52:42:decimal",v.UInt_max,"10"))):v.checkedBigNumberify("./dao/contracts/shared.rsh:52:47:decimal",v.UInt_max,"1"))}}}}async function addMember(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for addMember expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for addMember expects to receive an interact object as its second argument."));var t=a._initialize(),o=t.stdlib,t=await t.getCurrentStep();if(3==t)return _addMember3(a,e);throw o.apiStateMismatchError({_stateSourceMap:_stateSourceMap},[o.checkedBigNumberify("<builtin>",o.UInt_max,"3")],o.checkedBigNumberify("<builtin>",o.UInt_max,t))}async function comment(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for comment expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for comment expects to receive an interact object as its second argument."));var t=a._initialize(),o=t.stdlib,t=await t.getCurrentStep();if(3==t)return _comment3(a,e);throw o.apiStateMismatchError({_stateSourceMap:_stateSourceMap},[o.checkedBigNumberify("<builtin>",o.UInt_max,"3")],o.checkedBigNumberify("<builtin>",o.UInt_max,t))}async function donate(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for donate expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for donate expects to receive an interact object as its second argument."));var t=a._initialize(),o=t.stdlib,t=await t.getCurrentStep();if(3==t)return _donate3(a,e);throw o.apiStateMismatchError({_stateSourceMap:_stateSourceMap},[o.checkedBigNumberify("<builtin>",o.UInt_max,"3")],o.checkedBigNumberify("<builtin>",o.UInt_max,t))}async function eject(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for eject expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for eject expects to receive an interact object as its second argument."));var t=a._initialize(),o=t.stdlib,t=await t.getCurrentStep();if(3==t)return _eject3(a,e);throw o.apiStateMismatchError({_stateSourceMap:_stateSourceMap},[o.checkedBigNumberify("<builtin>",o.UInt_max,"3")],o.checkedBigNumberify("<builtin>",o.UInt_max,t))}async function join(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for join expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for join expects to receive an interact object as its second argument."));var t=a._initialize(),o=t.stdlib,t=await t.getCurrentStep();if(3==t)return _join3(a,e);throw o.apiStateMismatchError({_stateSourceMap:_stateSourceMap},[o.checkedBigNumberify("<builtin>",o.UInt_max,"3")],o.checkedBigNumberify("<builtin>",o.UInt_max,t))}async function leave(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for leave expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for leave expects to receive an interact object as its second argument."));var t=a._initialize(),o=t.stdlib,t=await t.getCurrentStep();if(3==t)return _leave3(a,e);throw o.apiStateMismatchError({_stateSourceMap:_stateSourceMap},[o.checkedBigNumberify("<builtin>",o.UInt_max,"3")],o.checkedBigNumberify("<builtin>",o.UInt_max,t))}async function post(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for post expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for post expects to receive an interact object as its second argument."));var t=a._initialize(),o=t.stdlib,t=await t.getCurrentStep();if(3==t)return _post3(a,e);throw o.apiStateMismatchError({_stateSourceMap:_stateSourceMap},[o.checkedBigNumberify("<builtin>",o.UInt_max,"3")],o.checkedBigNumberify("<builtin>",o.UInt_max,t))}async function registerProposal(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for registerProposal expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for registerProposal expects to receive an interact object as its second argument."));var t=a._initialize(),o=t.stdlib,t=await t.getCurrentStep();if(3==t)return _registerProposal3(a,e);throw o.apiStateMismatchError({_stateSourceMap:_stateSourceMap},[o.checkedBigNumberify("<builtin>",o.UInt_max,"3")],o.checkedBigNumberify("<builtin>",o.UInt_max,t))}async function voteProposal(a,e){if("object"!=typeof a||void 0===a._initialize)return Promise.reject(new Error("The backend for voteProposal expects to receive a contract as its first argument."));if("object"!=typeof e)return Promise.reject(new Error("The backend for voteProposal expects to receive an interact object as its second argument."));var t=a._initialize(),o=t.stdlib,t=await t.getCurrentStep();if(3==t)return _voteProposal3(a,e);throw o.apiStateMismatchError({_stateSourceMap:_stateSourceMap},[o.checkedBigNumberify("<builtin>",o.UInt_max,"3")],o.checkedBigNumberify("<builtin>",o.UInt_max,t))}const _ALGO={ABI:{impure:["addMember(address)byte[0]","comment(byte[256],(uint64,byte))byte[0]","donate(uint64)byte[0]","eject(address)byte[0]","join()byte[0]","leave()byte[0]","post(byte[128])byte[0]","registerProposal((byte,byte[50]))byte[0]","voteProposal((byte,byte[0]))byte[0]"],pure:["Proposal()(byte,byte[50])","currentVotes()uint64","info()(byte[128],address,address,uint64,byte,uint64,byte)","isMember(address)byte","myRank(address)uint64"],sigs:["Proposal()(byte,byte[50])","addMember(address)byte[0]","comment(byte[256],(uint64,byte))byte[0]","currentVotes()uint64","donate(uint64)byte[0]","eject(address)byte[0]","info()(byte[128],address,address,uint64,byte,uint64,byte)","isMember(address)byte","join()byte[0]","leave()byte[0]","myRank(address)uint64","post(byte[128])byte[0]","registerProposal((byte,byte[50]))byte[0]","voteProposal((byte,byte[0]))byte[0]"]},appApproval:"ByAoAAH///////////8BEAQDCAIKIAYpESEFiQKAAo+ir5QK6N7muQz7lsO6DePL9JYPmYbQ8gydAkvCu92WC/qoxLkM6QGy7enAA/Dq68MG8cbR3AaiAzPwApADoQOZA5gD6pWp+AOrx5G1Abe8z7EDJgwBAAABAQECAQME44bf0gRosLyxBELi+BMEDJlJaQEHBWFwcElEBH5kmAsiNQAxGEETbylkSSJbNQFJIQZbNQIlWzUIMRkjEkEACjEAKCEMr2ZCEzY2GgAXSUECBCI1BCM1BkkhEQxAAO1JIRIMQACKSSETDEAAOEkhFAxAABQhFBJEKTX/gAEFNP9QIQ+vUEIB5iETEkQ0ASEFEkQ2GgGIEyAiVSMSFlEHCDUHQhLqSSEVDEAALyEVEkQ0ASEFEkQoZCpkUCtkUCcEZFBJNQMhFiEXWEk1/yEGWzT/IlsIFjUHQhK0IRISRDYaATX/KzT/UIGBAq9QQgF+SSEYDEAAMEkhGQxAABQhGRJENhoBNf8oNP9QIRqvUEIBXCEYEkQ2GgE1/ycENP9QIRqvUEIBRyEREkQ0ASEFEkQlrzYaAYgSf0k1/1cBEDT/IlVNVwAINQdCEkNJIRsMQACySSEcDEAAd0khHQxAACMhHRJENAEhBRJEKGQqZFArZFAnBGRQSTUDIR4hH1g1B0ISCyEcEkQ0ASEFEkQoZCpkUCtkUCcEZFBJNQNXIIA0A1cAIFA0AyEgIQlYUDQDISEhBlhQNAMhIiNYUDQDISMhBlhQNAMhJCNYUDUHQhG+SSElDEAAFiElEkQ2GgE1/ycJNP9QgdYBr1BCAIAhGxJENhoBNf+AAQY0/1CBiQGvUEIAaUkhJgxAAC9JIScMQAAUIScSRCk1/4ABBDT/UCEPr1BCAEchJhJENhoBNhoCUDX/KjT/UEIAM4G2t5mVARJENhoBNf+AAQg0/1CBiAKvUEIAGDYaAhc1BDYaAzYaARdJIQcMQA38IQcSRCEFNAESRDQESSISTDQCEhFEKGQqZFArZFAnBGRQSTUDSUpKSkpKSkpJVwAgNf9XIIA1/oGgAVs1/YGoAVs1/IGwAVs1+1e4MzX6V+syNfkhFiEXWDX4gegCWzX3ISAhCVg19iEhWzX1ISQjWBc19CEjWzXzIR4hH1g18oHVA1s18YHdAyNYFzXwgd4DWzXvSTUFNe6ABFjYH2007lCwNO4iVUkhBAxAChhJIQoMQAlbSYEHDEAJCkkhBgxABsEhBhJENO5XAQE16LEisgEhCrIQNAiyGLM09yQORDTwQQAPNPFJIQgYCSEICjXnQgADIzXnJa9JNeYxAIgQTkk15FcBEDTkIlVNSTXlIltJNeQ05w9ENPghBls14zT4Ils14jTyIlVJIQcMQAA7SSEFDEAAGEkhBAxAAAohBBJEIzXhQgCzSCI14UIArEg08lcBIDXgNOCID/MiVSMSNOA09hMQNeFCAJBJIwxAAGBINPJXATJJNeAhDVs13zTgIQtbNd404FcAIIgPwTXdNN4iDUEACjTeNPwMNdxCAAMiNdw03SJVIxI05jTdSTXbVwEQNNsiVU0iWzTvDRA03BA03yIPNN8kDBAQNeFCACpINPJXAShJNeAhCVs09ww13zTgVwAgiA9lIlUjEjTfEDTfNPRNNeFCAAA04UQ04yINQQALNOMkNOIJDERCAAA04iINQQALNOIkNOMJDERCAAA04zTiCDTzDEQ05SEGWzTxDEQ06Ek13yJVQAAONOMWNOIjCBZQNeBCAA404yMIFjTiFlA14EIAADTgIls13zTgIQZbNd403yQ03gkMRDTeJDTfCQxEgAgAAAAAAAA8urApNQc05CQMQQAONOQjCBY08RZQNd1CAAk05BY08RZQNd0xACgqNN1QZjTwQQAPNPFJIQgYCSEICjXcQgADIzXcNPIiVUkhBwxAADtJIQUMQAAYSSEEDEAACiEEEkQjNdtCALNIIjXbQgCsSDTyVwEgNdo02ogOViJVIxI02jT2ExA120IAkEkjDEAAYEg08lcBMkk12iENWzXZNNohC1s12DTaVwAgiA4kNdc02CINQQAKNNg0/Aw11kIAAyI11jTXIlUjEjTmNNdJNdVXARA01SJVTSJbNNwNEDTWEDTZIg802SQMEBA120IAKkg08lcBKEk12iEJWzT3DDXZNNpXACCIDcgiVSMSNNkQNNk09E0120IAADTfNN4INPMPQQO9NN803g012jTbNNoQQQHBNPIiVUkhBwxAAQ9JIQUMQADKSSEEDEAAmSEEEkQnBTTxFlA08lCwJwo0/RZQAzXYMgp4NdcyCmA01wkWNdaxIrIBIQqyEDT9shiABOzzOtmyGjT7FrIaszIKYDTXCTTWFwkWtwA+VwQAUDXZgAgAAAAAAAA+3TTZULA02Uk12CJbNdc09zTXCEk11iQORCI01xJENP80/jT9NPw0+zT6NPkiJa80+lA08RZQMgY01kILPEgnBTTxFlA08lCwNP80/jT9NPw0+zT6NPkjJa80+lA08RZQMgY090ILEkg08lcBIDXZJwU08RZQNPJQsDTZKCEMr2YnCDTZULA0/zT+NP00/DT7NPo0+SMlrzT6UDTxFlAyBjT3QgrUSSMMQABMSDTyVwEyNdknBTTxFlA08lCwNP80/jT9NPw0+zT6NNlXACA02VchCFA02VcxAVA02VcpCFA02VcgAVAjJa80+lA08RZQMgY090IKgkg08lcBKEk12SEJWzXYJwU08RZQNPJQsDT3NNgJSTXXIg9EsSKyATTYsggjshA02VcAILIHszT/NP40/TT8NPs0+jT5IyWvNPpQNPEWUDIGNNdCCi002kEA9DTyIlVJIQcMQACPSSEFDEAAXkkhBAxAAC0hBBJEJwY08RZQNPJQsDT/NP40/TT8NPs0+jT5IyWvNPpQNPEWUDIGNPdCCeJIJwY08RZQNPJQsDT/NP40/TT8NPs0+jT5IyWvNPpQNPEWUDIGNPdCCbhIJwY08RZQNPJQsDT/NP40/TT8NPs0+jT5IyWvNPpQNPEWUDIGNPdCCY5JIwxAACpIJwY08RZQNPJQsDT/NP40/TT8NPs0+jT5IyWvNPpQNPEWUDIGNPdCCV5IJwY08RZQNPJQsDT/NP40/TT8NPs0+jT5IyWvNPpQNPEWUDIGNPdCCTQ08iJVSSEHDEAAj0khBQxAAF5JIQQMQAAtIQQSRCcHNPEWUDTyULA0/zT+NP00/DT7NPo0+SMlrzT6UDTxFlAyBjT3QgjuSCcHNPEWUDTyULA0/zT+NP00/DT7NPo0+SMlrzT6UDTxFlAyBjT3QgjESCcHNPEWUDTyULA0/zT+NP00/DT7NPo0+SMlrzT6UDTxFlAyBjT3QgiaSSMMQAAqSCcHNPEWUDTyULA0/zT+NP00/DT7NPo0+SMlrzT6UDTxFlAyBjT3QghqSCcHNPEWUDTyULA0/zT+NP00/DT7NPo0+SMlrzT6UDTxFlAyBjT3QghANP80/jT9NPw0+zT6NPkjNN4WNN8WUDTyUDTxFlAyBjT3QggcSDTuVwEzNeg09yQORDToNec08EEADzTxSSEIGAkhCAo15kIAAyM15iWvSTXlMQCICZlJNeNXARA04yJVTSJbSTXkNOYPRDTkNO8PRDTyIlVJIQcMQAA7SSEFDEAAGEkhBAxAAAohBBJEIzXjQgCzSCI140IArEg08lcBIDXiNOKICUgiVSMSNOI09hMQNeNCAJBJIwxAAGBINPJXATJJNeIhDVs14TTiIQtbNeA04lcAIIgJFjXfNOAiDUEACjTgNPwMNd5CAAMiNd403yJVIxI05TTfSTXdVwEQNN0iVU0iWzTvDRA03hA04SIPNOEkDBAQNeNCACpINPJXAShJNeIhCVs09ww14TTiVwAgiAi6IlUjEjThEDThNPRNNeNCAAA04xRENPEkIwkMRDTnIlVJIQcMQAA7SSEFDEAAGEkhBAxAAAohBBJEIzXiQgCzSCI14kIArEg051cBIDXhNOGICGciVSMSNOE09hMQNeJCAJBJIwxAAGBINOdXATJJNeEhDVs14DThIQtbNd804VcAIIgINTXeNN8iDUEACjTfNPwMNd1CAAMiNd003iJVIxI05TTeSTXcVwEQNNwiVU0iWzTvDRA03RA04CIPNOAkDBAQNeJCACpINOdXAShJNeEhCVs09ww14DThVwAgiAfZIlUjEjTgEDTgNPRNNeJCAAA04kSACAAAAAAAADcNsCk1B4AElpSnrTTnUDEAULA0/zT+NP00/DT7NPo0+SMlrzTnUDTxIwgWUDIGNPdCBdpINO5XAYA16DT3JA5EMQCIB3ciVSMSRIAIAAAAAAAAMXSwKTUHgARoEkL9MQBQNOhQsDT/NP40/TT8NPs0+jT5IzT4MgY090IFkEkhDgxAAENIMQCIBzIiVSMSRDT3JA5EgAgAAAAAAAAsWLApNQcxACghDK9mJwgxAFCwNP80/jT9NPw0+zT6NPkjNPgyBjT3QgVGSDQDISIjWBdEMQCIBuciVSISRDT1JDT3CQxENPc09QhJNegkDkQ09YgG2TT1JDToCQxEgAgAAAAAAAAnPbApNQcxACgqNO8WIQavUFBmJwsxAFCwNP80/jT9NPw0+zT6NPkjNPgyBjToQgTaSSEHDEACW0khBQxAAX5INO5XASA16DT3JA5ENOg15zTniAZlIlUjEjXmMQA05xNENOZENOY05zT2ExBEMQA09hJBADOACAAAAAAAACIEsCk1BzTnKCEMr2YnCDTnULA0/zT+NP00/DT7NPo0+SM0+DIGNPdCBGM08SQjCQ5ENPIiVUkhBwxAADtJIQUMQAAYSSEEDEAACiEEEkQjNeVCALNIIjXlQgCsSDTyVwEgNeQ05IgF1CJVIxI05DT2ExA15UIAkEkjDEAAYEg08lcBMkk15CENWzXjNOQhC1s14jTkVwAgiAWiNeE04iINQQAKNOI0/Aw14EIAAyI14DThIlUjEiWvNOFJNd9XARA03yJVTSJbNO8NEDTgEDTjIg804yQMEBA15UIAKkg08lcBKEk15CEJWzT3DDXjNORXACCIBUYiVSMSNOMQNOM09E015UIAADTlRIAIAAAAAAAAIeSwKTUHNP80/jT9NPw0+zT6NPkjJa8rNOdQgRKvUFA08SMIFlAyBjT3QgNOSDTuVwEINeg06Bc15yQ05wk15jT3NOYMRDT3NOcISTXlJA5ENOeIBOM05TTmDEQxAIgEyUk15CJVIxJBAHIlrzTkSTXiVwEQNOIiVU1JNeMiWzXiNOMhBls14TTiJCMJDEEADjTiIwgWNOEWUDXgQgAQNO804kk07w9NFjThFlA14DEAKCo04FBmgAgAAAAAAAAce7ApNQc0/zT+NP00/DT7NPo0+SM0+DIGNOVCAp6ACAAAAAAAAByDsCk1BzT/NP40/TT8NPs0+jT5IzT4MgY05UICeEkjDEAAV0g07iMhD1g16DT3JA5EMQCIBA4iVSMSRIAIAAAAAAAAF0awKTUHgARrvHJuMQBQNOgiIRBYUDToIRCBCVhQsDT/NP40/TT8NPs0+jT5IzT4MgY090ICG0g07lcBIDXoNOg15zTniAO5NeYlrzTmSTXlVwEQNOUiVU0iWzTvD0Q05iJVIhJENPc09QhJNeUkDkQ09YgDmjTnKCo07xYhBq9QUGYnCzTnULCACAAAAAAAABIosCk1BzT/NP40/TT8NPs0+jT5IzT4MgY05UIBoyISRIHAmgyIA1exIrIBIQqyECKyGIAGBzEAMgkSsh4nCbIfs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUpKSVcAgDX/gYABIRBYNf6BgAMjWBc1/YGBA1s1/IGJAyNYFzX7gYoDWzX6gZIDWzX5gAQT56gINP9QNP5QNP0WUQcIUDT8FlA0+xZRBwhQNPoWUDT5FlCwJIGAlOvcAw1ENPwjD0QkIQgKNfg0/DT4DEQxGDX3MQAogBEB//////////8AAAAAAAAAAGYnCjT5FlADNfUyCng19DIKYDT0CRY187EisgEhCrIQNPmyGIAE4Lw4QbIaNPcWsho0/7IaNP6yGrMyCmA09Ak08xcJFrcAPlcEAFA19oAIAAAAAAAADz009lCwNPZJNfUiW0k19CQORCI09BJEgDMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA18zEANP80+TT4NPc08zEANPoWUDT7FlEHCFA0/BZQNP0WUQcIUCMlrzTzUCEGr1AyBjT0QgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT8QQDENPtXACA19DT7IQlbNfM0+1coARc18jT7IQtbNfE0+1cxARc18DT9VxAzNe80/YFDW0k17iEID0k17UEADzTuSSEIGAkhCAo17EIAAyM17DT1NPZQNPcWUDT4FlA0+RZQNPpQNPtQNP1QNP8WUDT0UDTzFlA08hZRBwhQNPEWUDTwFlEHCFA071A07hZQNO0WUQcIUDTsFlAoSwFXAH9nKksBV39/ZytLAVf+f2cnBEsBgf0CgWlYZ0ghBTUBMgY1AkIAdzT7VwAgNfQ0/0kJSTXzIg9EsSKyATT/sggjshA09LIHszIKYDIKeAk08wlJNfI08wg08gkiD0SxIrIBNPKyCCOyEDT0sgezQgAAMRkhDhJEsSKyASEKshA0CLIYIQ6yGbOxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEOMTUSRCIxNhJEIzE3EkQiNQEiNQIiNQhC/6dJMRhhQAAFSCEMr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=",appClear:"Bw==",companionInfo:{api_voteProposal:1},extraPages:2,mapDataKeys:1,mapDataSize:17,stateKeys:4,stateSize:486,unsupported:[],version:11,warnings:["Step 0 calls a remote object at /app/dao/contracts/dao-blog.rsh:128:23:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.","Step 2 calls a remote object at /app/dao/contracts/dao-blog.rsh:187:32:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards."]},_ETH={ABI:`[
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
                "name": "v3879",
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
                "internalType": "struct T12",
                "name": "v3880",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v3881",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v3882",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v3883",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v3884",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v3885",
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
                "name": "v3879",
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
                "internalType": "struct T12",
                "name": "v3880",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v3881",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v3882",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v3883",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v3884",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v3885",
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
                    "internalType": "enum _enum_T26",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_addMember0_346",
                    "type": "tuple"
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
                        "internalType": "struct T12",
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
                    "name": "_comment0_346",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_donate0_346",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_eject0_346",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_join0_346",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_leave0_346",
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
                    "internalType": "struct T22",
                    "name": "_post0_346",
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
                    "internalType": "struct T23",
                    "name": "_registerProposal0_346",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T24",
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
                        "internalType": "struct T24",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T25",
                    "name": "_voteProposal0_346",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T26",
                "name": "v4576",
                "type": "tuple"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
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
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v10045",
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
    "name": "_reach_oe_v11352",
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
    "name": "_reach_oe_v12660",
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
    "name": "_reach_oe_v14093",
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
    "name": "_reach_oe_v15546",
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
    "name": "_reach_oe_v16093",
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
    "name": "_reach_oe_v3901",
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
    "name": "_reach_oe_v4648",
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
    "name": "_reach_oe_v5958",
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
    "name": "_reach_oe_v7291",
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
    "name": "_reach_oe_v7299",
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
    "name": "_reach_oe_v8676",
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
    "name": "_reach_oe_v8708",
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
        "internalType": "struct T12",
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
                    "internalType": "enum _enum_T26",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_addMember0_346",
                    "type": "tuple"
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
                        "internalType": "struct T12",
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
                    "name": "_comment0_346",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_donate0_346",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_eject0_346",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_join0_346",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_leave0_346",
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
                    "internalType": "struct T22",
                    "name": "_post0_346",
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
                    "internalType": "struct T23",
                    "name": "_registerProposal0_346",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T24",
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
                        "internalType": "struct T24",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T25",
                    "name": "_voteProposal0_346",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T26",
                "name": "v4576",
                "type": "tuple"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
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
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "addMember",
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
        "internalType": "struct T12",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "donate",
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
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "eject",
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
        "internalType": "struct T10",
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
        "name": "v33981",
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
        "name": "v33983",
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
            "internalType": "enum _enum_T24",
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
        "internalType": "struct T24",
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
]`,Bytecode:"0x60806040526040516200788438038062007884833981016040819052620000269162000d4d565b600080554360035562000038620007ac565b7f927c905cb3af375a1b9a2cd5adae779caf03eceeb088d42dc5d109b736c54f6833836040516200006b92919062000e47565b60405180910390a1620000813415600c620003c4565b6200008f6001600d620003c4565b620000ae60018360200151606001511015600e620003c460201b60201c565b620000bd600019600a620003ef565b808252602083015160600151620000d79111600f620003c4565b3060208281019182526040808401805160001990528051600090840181905233815260048452828120805460ff1916600190811782559251805193820193909355918401516002909201919091554761010086015292518583015180519301519151633dc9135360e21b936200015293909160240162000f3a565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600080846020015160c001516001600160a01b0316600084604051620001ae919062000fd9565b60006040518083038185875af1925050503d8060008114620001ed576040519150601f19603f3d011682016040523d82523d6000602084013e620001f2565b606091505b509092509050620002068282601062000410565b506200021e478561010001516200040b60201b60201c565b60608501805191909152516080850181905260408051825181526020928301511515928101929092527f780ecf981f8078a6a3d70cb8cec24daad7e9233fb40dfa53a7dabf516aa043989450019150620002759050565b60405180910390a16200028b60016011620003c4565b6080810151516200029f90156012620003c4565b60a08181018051339052602084810180519093015182518201528251608090810151835190151560409182015284516060908101518551820152945181015193519315159382019390935260c0850180516003905280516000920182905260e08601805183905280519093018290525182519093019290925251909101526200032762000890565b8051339052602080840180515183518301525160c09081015183516001600160a01b0391821660409182015285518551606090810191909152868501518651931660809384015292860151855160a0908101919091528601518486018051919091528051600195019490945260e0860151845190910152825143920191909152838101515191510152620003bb8162000456565b505050620012fe565b81620003eb5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b600081838162000403576200040362001017565b049392505050565b900390565b60608315620004215750816200044f565b825115620004325782518084602001fd5b60405163100960cb60e01b815260048101839052602401620003e2565b9392505050565b6200048460405180608001604052806000151581526020016000815260200160008152602001600081525090565b816020015160200151156200061b5760208201516040015160600151600a1180158252620004e35760208201516040015160600151620004d890620004d0906200040b81600a62000739565b600a620003ef565b6020820152620004eb565b600160208201525b620004f5620008b9565b8251516001600160a01b03908116825283516020908101518184015284516040908101518316818501528551606090810151818601528651608090810151851681870152875160a0908101519087015283880180515160c0880152805184015160e08801528051820151610100880152805151519095166101208701528451518401516101408701528451518301511515610160870152845151820151610180870152845151015115156101a086015283518201518201516101c08601529251810151909201516101e084015283511515610200840152838101516102208401526003600055436001559051620005ef9183910162001118565b6040516020818303038152906040526002908051906020019062000615929190620009a6565b50505050565b600060408201526200063060016013620003c4565b60208201518051516080909101516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562000675573d6000803e3d6000fd5b50604081015147908110620006a0576200069a8183604001516200040b60201b60201c565b620006a3565b60005b606083018190526040830151620006dd9250600091620006d391620006c9919062000755565b6060850151900390565b10156014620003c4565b6020820151515160608201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562000720573d6000803e3d6000fd5b5060008080556001819055620003eb9060029062000a35565b60008183816200074d576200074d62001017565b069392505050565b6000826200076483826200129a565b9150811015620007a65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401620003e2565b92915050565b6040518061012001604052806000815260200160006001600160a01b03168152602001620007ed604051806040016040528060008152602001600081525090565b8152602001620008126040518060400160405280600081526020016000151581525090565b8152602001620008376040518060400160405280600081526020016000151581525090565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526020016200087462000a77565b81526020016200088362000afa565b8152602001600081525090565b6040518060400160405280620008a562000b1d565b8152602001620008b462000b76565b905290565b60408051610240810182526000808252825160808101845281815260208181018390529381018290526060810191909152909182019081526000602082018190526040820181905260608201526080016200091362000a77565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526020016200095062000afa565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c082015260e0016200098962000a77565b815260200160008152602001600015158152602001600081525090565b828054620009b490620012c1565b90600052602060002090601f016020900481019282620009d8576000855562000a23565b82601f10620009f357805160ff191683800117855562000a23565b8280016001018555821562000a23579182015b8281111562000a2357825182559160200191906001019062000a06565b5062000a3192915062000bd0565b5090565b50805462000a4390620012c1565b6000825580601f1062000a54575050565b601f01602090049060005260206000209081019062000a74919062000bd0565b50565b6040805160c08101909152806000815260200162000ab1604051806040016040528060006001600160a01b03168152602001600081525090565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526000602082018190526040820181905260609091015290565b604051806080016040528060008152602001600081526020016200088362000a77565b6040805160c081018252600080825282516080810184528181526020818101839052938101829052606081019190915290918201908152600060208201819052604082018190526060820152608001620008b462000a77565b6040805161014081018252600060a0820181815260c0830182905260e08301829052610100830182905261012083018290528252602082015290810162000bbc62000afa565b815260200160008152602001600081525090565b5b8082111562000a31576000815560010162000bd1565b604080519081016001600160401b038111828210171562000c1857634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b038111828210171562000c1857634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b038111828210171562000c1857634e487b7160e01b600052604160045260246000fd5b600061010080838503121562000c9557600080fd5b604051908101906001600160401b038211818310171562000cc657634e487b7160e01b600052604160045260246000fd5b81604052809250835181526020840151602082015260408401516040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152505092915050565b8051801515811462000d3057600080fd5b919050565b80516001600160a01b038116811462000d3057600080fd5b600081830361024081121562000d6257600080fd5b62000d6c62000be7565b83518152601f19820191506102208083121562000d8857600080fd5b62000d9262000c1e565b608084121562000da157600080fd5b62000dab62000c4f565b93506020860151845260408601516020850152606086015160408501526080860151606085015283815262000de48760a0880162000c80565b602082015262000df86101a0870162000d1f565b60408201526101c0860151606082015262000e176101e0870162000d1f565b608082015261020086015160a082015262000e3482870162000d35565b60c0820152602083015250949350505050565b60006102608201905060018060a01b03808516835283516020840152602084015162000e98604085018251805182526020810151602083015260408101516040830152606081015160608301525050565b602081015162000ef460c0860182805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b50604081015115156101c085015260608101516101e08501526080810151151561020085015260a081015161022085015260c00151166102409092019190915292915050565b6001600160a01b03841681526101a0810162000f7a6020830185805182526020810151602083015260408101516040830152606081015160608301525050565b62000fd160a0830184805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b949350505050565b6000825160005b8181101562000ffc576020818601810151858301520162000fe0565b818111156200100c576000828501525b509190910192915050565b634e487b7160e01b600052601260045260246000fd5b8051600581106200104e57634e487b7160e01b600052602160045260246000fd5b825260208181015180516001600160a01b0316828501520151604080840191909152810151620010b6606084018280516001600160a01b0316825260208082015115159083015260408082015190830152606080820151908301526080908101511515910152565b5060608101516001600160a01b03166101008301526080810151151561012083015260a00151151561014090910152565b805182526020810151602083015260408101516200110960408401826200102d565b50606001516101a09190910152565b81516001600160a01b03168152610740810160208301516200115e6020840182805182526020810151602083015260408101516040830152606081015160608301525050565b5060408301516001600160a01b03811660a084015250606083015160c083015260808301516001600160a01b03811660e08401525060a0830151610100620011a9818501836200102d565b60c085015180516001600160a01b03166102608601526020810151610280860152604081015115156102a086015260608101516102c08601526080015115156102e085015260e0850151915062001205610300850183620010e7565b8401516104c0840152506101208301516001600160a01b03166104e083015261014083015161050083015261016083015115156105208301526101808301516105408301526101a083015115156105608301526101c08301516200126e6105808401826200102d565b506101e08301516106e08301526102008301511515610700830152610220909201516107209091015290565b60008219821115620012bc57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620012d657607f821691505b60208210811415620012f857634e487b7160e01b600052602260045260246000fd5b50919050565b616576806200130e6000396000f3fe60806040526004361061010c5760003560e01c8063a230c5241161009a578063ca6d56dc11610061578063ca6d56dc1461030e578063d292f36b14610321578063d66d9e1914610334578063dff5c8aa1461033c578063f14faf6f1461034f57005b8063a230c5241461028e578063ab53f2c6146102ae578063b23481fa146102d1578063b688a363146102e4578063c4d7841a146102ec57005b80635cc4f649116100de5780635cc4f6491461021e578063832307571461023e5780638dae6f1714610253578063901d13e214610266578063994ba4d21461027957005b80631a777ba8146101155780631e93b0f11461013d578063370158ea1461015c5780633bc5b7bf146101f157005b3661011357005b005b6101286101233660046155e9565b610362565b60405190151581526020015b60405180910390f35b34801561014957600080fd5b506003545b604051908152602001610134565b34801561016857600080fd5b50610171610373565b60408051825180518252602080820151818401528184015183850152606091820151828401528401516001600160a01b03908116608080850191909152938501511660a0808401919091529084015160c08084019190915292840151151560e0830152830151610100820152910151151561012082015261014001610134565b3480156101fd57600080fd5b5061021161020c36600461561a565b61038c565b604051610134919061565d565b34801561022a57600080fd5b5061014e61023936600461561a565b61039d565b34801561024a57600080fd5b5060015461014e565b6101286102613660046156e9565b6103d0565b61012861027436600461561a565b6103db565b34801561028557600080fd5b5061014e6103e6565b34801561029a57600080fd5b506101286102a936600461561a565b6103f2565b3480156102ba57600080fd5b506102c361041e565b604051610134929190615731565b6101136102df36600461576b565b6104bb565b6101286104df565b3480156102f857600080fd5b506103016104ee565b604051610134919061582f565b61012861031c36600461561a565b610501565b61012861032f366004615915565b61050c565b610128610518565b61012861034a366004615a79565b610522565b61012861035d366004615a96565b61052d565b600061036d82610538565b92915050565b61037b614726565b600061038681610575565b91505090565b610394614781565b61036d826106b3565b60006103b460408051602081019091526000815290565b6001600160a01b03831681526103c981610787565b9392505050565b600061036d826108b4565b600061036d826108ef565b60008061038681610933565b600061040960408051602081019091526000815290565b6001600160a01b03831681526103c981610a01565b60006060600054600280805461043390615aaf565b80601f016020809104026020016040519081016040528092919081815260200182805461045f90615aaf565b80156104ac5780601f10610481576101008083540402835291602001916104ac565b820191906000526020600020905b81548152906001019060200180831161048f57829003601f168201915b50505050509050915091509091565b6104c36147bf565b6104db6104d536849003840184615bf0565b82610ae5565b5050565b60006104e9614170565b905090565b6104f661480b565b6000610386816141a0565b600061036d8261426b565b60006103c983836142ab565b60006104e96142f4565b600061036d82614324565b600061036d82614360565b6000610542614860565b60208101805151600890525151610120015183905261055f6147bf565b6105698282610ae5565b61010001519392505050565b61057d614726565b600360005414156106a25760006002805461059790615aaf565b80601f01602080910402602001604051908101604052809291908181526020018280546105c390615aaf565b80156106105780601f106105e557610100808354040283529160200191610610565b820191906000526020600020905b8154815290600101906020018083116105f357829003601f168201915b50505050508060200190518101906106289190615f0d565b905061063261487a565b602080830151825152825182516001600160a01b03918216920191909152610120830151825191166040909101526101408201518151606001526101a08201518151901515608090910152610180820151815160a0015261016090910151815190151560c0909101525192915050565b6106ae6000600961439b565b919050565b6106bb614781565b60016001600160a01b03831660009081526004602052604090205460ff1660018111156106ea576106ea615637565b1415610778576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561072b5761072b615637565b600181111561073c5761073c615637565b81528154610100900460ff1615156020808301919091526040805180820182526001850154815260029094015491840191909152015292915050565b60008082526020820152919050565b6000600360005414156108a8576000600280546107a390615aaf565b80601f01602080910402602001604051908101604052809291908181526020018280546107cf90615aaf565b801561081c5780601f106107f15761010080835404028352916020019161081c565b820191906000526020600020905b8154815290600101906020018083116107ff57829003601f168201915b50505050508060200190518101906108349190615f0d565b9050610856604080516060810182526000602082018181529282015290815290565b805160009081905281516020015260018451610871906106b3565b51600181111561088357610883615637565b1461088f57805161089f565b835161089a906106b3565b604001515b51949350505050565b6106ae6000600b61439b565b60006108be614860565b6020810180515160069052515160e001518390526108da6147bf565b6108e48282610ae5565b60c001519392505050565b60006108f9614860565b60208101805151600390525151608001516001600160a01b038416905261091e6147bf565b6109288282610ae5565b606001519392505050565b6000600360005414156109f55760006002805461094f90615aaf565b80601f016020809104026020016040519081016040528092919081815260200182805461097b90615aaf565b80156109c85780601f1061099d576101008083540402835291602001916109c8565b820191906000526020600020905b8154815290600101906020018083116109ab57829003601f168201915b50505050508060200190518101906109e09190615f0d565b60e081015160208101519051919250016103c9565b6106ae6000600861439b565b600060036000541415610ad957600060028054610a1d90615aaf565b80601f0160208091040260200160405190810160405280929190818152602001828054610a4990615aaf565b8015610a965780601f10610a6b57610100808354040283529160200191610a96565b820191906000526020600020905b815481529060010190602001808311610a7957829003601f168201915b5050505050806020019051810190610aae9190615f0d565b90506001610abf84600001516106b3565b516001811115610ad157610ad1615637565b149392505050565b6106ae6000600a61439b565b610af5600360005414604861439b565b8151610b10901580610b0957508251600154145b604961439b565b600080805560028054610b2290615aaf565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4e90615aaf565b8015610b9b5780601f10610b7057610100808354040283529160200191610b9b565b820191906000526020600020905b815481529060010190602001808311610b7e57829003601f168201915b5050505050806020019051810190610bb39190615f0d565b9050610bbd61488d565b7fa121568d9774d3cf38acf3ec30dd4187b0a6547bcd2553798cca5a4adaf4b0c03385604051610bee92919061613a565b60405180910390a16000602085015151516008811115610c1057610c10615637565b1415610e535760208085015151015180825251610c2c906106b3565b6020828101918252604083018051600090819052905190910152610220830151905151610c8a919060019081811115610c6757610c67615637565b14610c76578260400151610c80565b8260200151604001515b511015601561439b565b610cb160008260200151600001516001811115610ca957610ca9615637565b14601661439b565b610100820151610140830151016060820152610ccf6001601761439b565b610ce18261014001513414601861439b565b610220820151608082018051919091528051600060209182018190528351516001600160a01b039081168252600483526040808320805460ff1916600190811790915594518651518316845292819020835195810195909555918301516002909401939093558351519051921682527f0abf3b3f643594d958297062a019458e27d7766629590ac621aa1000fa1298ab910160405180910390a1604051600081527fe6193433818bf7bc64cb6da637161c45924a7231489a2dd875061cca115d3afe9060200160405180910390a160008352610dbb614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c08701518386018051919091528051600194019390935260e087015183519092019190915281514390820152840151905190910152610e4d816143c1565b5061416a565b6001602085015151516008811115610e6d57610e6d615637565b1415610fdf576020840151516040015160a0820152610e8e6001601961439b565b610e9a3415601a61439b565b610ec26001610ea8336106b3565b516001811115610eba57610eba615637565b14601b61439b565b604051600081527f9d59b78f603c037cd37d13d976243013eb15259050663e1cdea41c1cc446c9f49060200160405180910390a1600060208085019190915260a082015180519101516040517fac86fd75f7431de078e910f101752c87e40273b5835704ff34559f24ff41187592610f3b92339261620f565b60405180910390a1610f4b614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c08701518386018051919091528051600194019390935260e0870151835190920191909152815143910152610100850151905190910152610e4d816143c1565b6002602085015151516008811115610ff957610ff9615637565b14156112b1576020840151516060015160c08201819052511960e0820181905261010083015161102b9111601c61439b565b61010082015160c0820151510161010082015261104a6001601d61439b565b60c08101515161105d903414601e61439b565b6110738160e0015182610100015110601f61439b565b61107c336106b3565b6101208201819052516001908181111561109857611098615637565b1415611280576101408101805160009081905290516020015260016101208201515160018111156110cb576110cb615637565b146110db578061014001516110e6565b806101200151604001515b610160820181905251600119111561112b57610160810151516001016101a0820180519190915261016082015160209081015182519091015251610180820152611176565b61022082015161016082015151101561114957816102200151611151565b610160810151515b6101c08201805191909152610160820151602090810151825190910152516101808201525b336000908152600460209081526040808320805460ff191660019081178255610180860151805191830191909155830151600290910155519182527f7d6af13a75b5a3368bd04f36d76e233eb090873185106321c794fbd19408fe1091015b60405180910390a1600060408401526111ec614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c08701518386018051919091528051600194019390935260e0870151835190920191909152815143910152610100840151905190910152610e4d816143c1565b604051600081527f56d61b36e426e850430afcd7e31254ad5ede5274e119b0c942f4407a9747a5f3906020016111d5565b60036020850151515160088111156112cb576112cb615637565b14156118735760208085015151608001516101e08301526112ee9060019061439b565b6112fa3415602161439b565b600161130e826101e00151600001516106b3565b51600181111561132057611320615637565b146102008201526101e081015151611352906001600160a01b0316331461134857600161134b565b60005b602261439b565b611362816102000151602361439b565b6113ae8161020001516113765760006113a7565b8261012001516001600160a01b0316826101e00151600001516001600160a01b0316146113a45760016113a7565b60005b602461439b565b8161012001516001600160a01b0316336001600160a01b0316141561147357604051600081527f4a1397c302b651be9743cbaf136e17d402350d4b1d7b2867ae6c6703efd40f9c9060200160405180910390a16000606084018190526101e082018051516001600160a01b039081168352600460209081526040808520805461ffff1916815560018101869055600201949094559151519251921682527f81df7148ed3a9aa51bafe04f44371e89b96f47294267fbf6ab28b7aa8c87b3869101610f3b565b611488600119836101e001511115602561439b565b60006101c08301515160048111156114a2576114a2615637565b1415611527576101c08201516020908101516102408301819052610100840151910151106102608201526101608201516115135760016114ea826102400151600001516106b3565b5160018111156114fc576114fc615637565b1461150857600061151a565b80610260015161151a565b8061026001515b151561022082015261173c565b60016101c083015151600481111561154157611541615637565b141561164a576101c082015160400151610280820181905251611563906106b3565b6102a08201526102c08101805160009081905290516020015261028081015160600151156115a75760608083015161028083015190910151106102e08201526115b0565b60006102e08201525b6102a081015151600190818111156115ca576115ca615637565b146115d6576000611614565b61022082015160016102a08301515160018111156115f6576115f6615637565b1461160657816102c00151611611565b816102a00151604001515b51115b61161f576000611626565b806102e001515b61163157600061151a565b610280810151604001516000191161022082015261173c565b60026101c083015151600481111561166457611664615637565b14156116e6576101c0820151606001516001600160a01b03166103008201819052600190611691906106b3565b5160018111156116a3576116a3615637565b146116af57600061151a565b8161012001516001600160a01b03168161030001516001600160a01b0316146116d957600161151a565b600061022082015261173c565b60036101c083015151600481111561170057611700615637565b141561171357600061022082015261173c565b60046101c083015151600481111561172d5761172d615637565b141561173c5760016102208201525b61174c816102200151602661439b565b604051600081527fb1b6749b073a1f3e4349787cd606971ea6ab342d18321050e7b029b909d9f8c49060200160405180910390a16000606084810182905261032083018051600290526101e0808501515182516001600160a01b0390911690840152610340850180518590528051602001949094529051835160400152840151915160019092019101526117de614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610340860151835190920191909152815143910152610100850151905190910152610e4d816143c1565b600460208501515151600881111561188d5761188d615637565b1415611a85576118a3826101a00151602761439b565b6118cb60006118b1336106b3565b5160018111156118c3576118c3615637565b14602861439b565b6101008201516118e4901983610140015110602961439b565b610100820151610140830151016103608201526119036001602a61439b565b6119158261014001513414602b61439b565b61036081015161192e901983610140015110602c61439b565b604051600081527ffb16c0a92b364d07d664b064d7dc77fd410011606768e253608fb97a883c91429060200160405180910390a16000608084018190526102208301516103808301805191909152805160209081018390523380845260048252604093849020805460ff19166001908117825593518051948201949094559282015160029093019290925591519081527f0abf3b3f643594d958297062a019458e27d7766629590ac621aa1000fa1298ab910160405180910390a16119f1614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c08701518386018051919091528051600194019390935260e0870151835190920191909152815143910152610360840151905190910152610e4d816143c1565b6005602085015151516008811115611a9f57611a9f615637565b1415611b7657611acd6001611ab3336106b3565b516001811115611ac557611ac5615637565b14602d61439b565b611ad96001602e61439b565b611ae53415602f61439b565b604051600081527f24f61f1548d7ff6e243440e4caca119c8fc00719837d00712d999eef10b62b979060200160405180910390a1600060a0840181905233808252600460209081526040808420805461ffff19168155600181018590556002019390935591519081527f81df7148ed3a9aa51bafe04f44371e89b96f47294267fbf6ab28b7aa8c87b3869101610f3b565b6006602085015151516008811115611b9057611b90615637565b1415611c595760208401515160e001516103a0820152611bb26001603061439b565b611bbe3415603161439b565b611be66001611bcc336106b3565b516001811115611bde57611bde615637565b14603261439b565b604051600081527fb607971e79e81532cbda88aae331547b38c6b3b2eac9ba0772b719a01588a8cd9060200160405180910390a1600060c08401526103a0810151516040517fce04ae17e1fcd552b5bab3e870a4e31342815a3654ee1dafb53bfb837a0a97a891610f3b9133919061624a565b6007602085015151516008811115611c7357611c73615637565b141561246d5760208401515161010001516103c0820152611c966001603361439b565b611ca23415603461439b565b81610200015115611cdd576101e0820151611cd290611ccb90611cc681600a61466c565b900390565b600a614685565b6103e0820152611ce6565b60016103e08201525b610400810180516000908190529051602001526103e0810151611d48906001611d0e336106b3565b516001811115611d2057611d20615637565b14611d3057826104000151611d3e565b611d39336106b3565b604001515b511015603561439b565b610220820151611d97906001611d5d336106b3565b516001811115611d6f57611d6f615637565b14611d7f57826104000151611d8d565b611d88336106b3565b604001515b511015603661439b565b60006101c0830151516004811115611db157611db1615637565b1415611e36576101c0820151602090810151610440830181905261010084015191015110610460820152610160820151611e22576001611df9826104400151600001516106b3565b516001811115611e0b57611e0b615637565b14611e17576000611e29565b806104600151611e29565b8061046001515b1515610420820152612038565b60016101c0830151516004811115611e5057611e50615637565b1415611f46576101c082015160400151610480820181905251611e72906106b3565b6104a08201526104808101516060015115611ea35760608083015161048083015190910151106104c0820152611eac565b60006104c08201525b6104a08101515160019081811115611ec657611ec6615637565b14611ed2576000611f10565b61022082015160016104a0830151516001811115611ef257611ef2615637565b14611f0257816104000151611f0d565b816104a00151604001515b51115b611f1b576000611f22565b806104c001515b611f2d576000611e29565b6104808101516040015160001911610420820152612038565b60026101c0830151516004811115611f6057611f60615637565b1415611fe2576101c0820151606001516001600160a01b03166104e08201819052600190611f8d906106b3565b516001811115611f9f57611f9f615637565b14611fab576000611e29565b8161012001516001600160a01b0316816104e001516001600160a01b031614611fd5576001611e29565b6000610420820152612038565b60036101c0830151516004811115611ffc57611ffc615637565b141561200f576000610420820152612038565b60046101c083015151600481111561202957612029615637565b14156120385760016104208201525b61205681610420015161204c57600161204f565b60005b603761439b565b61206a600119836101e0015110603861439b565b60006103c08201515151600481111561208557612085615637565b141561210b576103c0810151516020908101516105208301819052610100840151910151106105408201526101608201516120f75760016120ce826105200151600001516106b3565b5160018111156120e0576120e0615637565b146120ec5760006120fe565b8061054001516120fe565b8061054001515b1515610500820152612313565b60016103c08201515151600481111561212657612126615637565b141561221d576103c08101515160400151610560820181905251612149906106b3565b610580820152610560810151606001511561217a5760608083015161056083015190910151106105a0820152612183565b60006105a08201525b610580810151516001908181111561219d5761219d615637565b146121a95760006121e7565b61022082015160016105808301515160018111156121c9576121c9615637565b146121d9578161040001516121e4565b816105800151604001515b51115b6121f25760006121f9565b806105a001515b6122045760006120fe565b6105608101516040015160001911610500820152612313565b60026103c08201515151600481111561223857612238615637565b14156122bb576103c081015151606001516001600160a01b03166105c08201819052600190612266906106b3565b51600181111561227857612278615637565b146122845760006120fe565b8161012001516001600160a01b0316816105c001516001600160a01b0316146122ae5760016120fe565b6000610500820152612313565b60036103c0820151515160048111156122d6576122d6615637565b14156122e9576000610500820152612313565b60046103c08201515151600481111561230457612304615637565b14156123135760016105008201525b612323816105000151603961439b565b604051600081527f62a9ac98d97e14c3dd1351d07e469b9c8b41fae03f39f68948933e684d8858609060200160405180910390a1600060e08401526103c0810151516040517f18f2698e4794214ca6e5e526501521f9e9e882fe9c8490e38a1a71c7bad7a10c91612395913390616288565b60405180910390a16105e0810180516000908190528151602001526103c0820151519051604001526101e08201516001016105e0820151606001526123d8614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c0870151838601805191909152805160019401939093526105e0860151835190920191909152815143910152610100850151905190910152610e4d816143c1565b600860208501515151600881111561248757612487615637565b141561416a5760208401515161012001516106008201526124aa6001603a61439b565b6124b63415603b61439b565b816102000151156124e5576101e08201516124da90611ccb90611cc681600a61466c565b6106208201526124ee565b60016106208201525b61064081018051600090819052905160200152600161250c336106b3565b51600181111561251e5761251e615637565b1461252e5780610640015161253c565b612537336106b3565b604001515b61066082018190526106208201519051612559911115603c61439b565b60006101c083015151600481111561257357612573615637565b14156125f8576101c08201516020908101516106a08301819052610100840151910151106106c08201526101608201516125e45760016125bb826106a00151600001516106b3565b5160018111156125cd576125cd615637565b146125d95760006125eb565b806106c001516125eb565b806106c001515b15156106808201526127fa565b60016101c083015151600481111561261257612612615637565b1415612708576101c0820151604001516106e0820181905251612634906106b3565b6107008201526106e08101516060015115612665576060808301516106e0830151909101511061072082015261266e565b60006107208201525b610700810151516001908181111561268857612688615637565b146126945760006126d2565b61022082015160016107008301515160018111156126b4576126b4615637565b146126c4578161064001516126cf565b816107000151604001515b51115b6126dd5760006126e4565b8061072001515b6126ef5760006125eb565b6106e081015160400151600019116106808201526127fa565b60026101c083015151600481111561272257612722615637565b14156127a4576101c0820151606001516001600160a01b0316610740820181905260019061274f906106b3565b51600181111561276157612761615637565b1461276d5760006125eb565b8161012001516001600160a01b03168161074001516001600160a01b0316146127975760016125eb565b60006106808201526127fa565b60036101c08301515160048111156127be576127be615637565b14156127d15760006106808201526127fa565b60046101c08301515160048111156127eb576127eb615637565b14156127fa5760016106808201525b61280a816106800151603d61439b565b60e082015160200151156128345760e08201515161283490198360e001516020015110603e61439b565b60e082015151156128585760e082015160208101519051612858911911603f61439b565b61018082015160e08301516020810151905161287892910110604061439b565b612893826101e001518261066001516020015110604161439b565b6000610600820151515160018111156128ae576128ae615637565b14156128e45760e08201805160200151610780830151525151600101610780820180516020019190915251610760820152612930565b6001610600820151515160018111156128ff576128ff615637565b14156129305760e0820151602001516001016107a0820180519190915260e083015151815160200152516107608201525b6107608101516020810151905161294a911911604261439b565b6107608101515161296890198261076001516020015110604361439b565b604051600081527f5a4941482754f9b76a1ae59cf83f8faf75774140d6d3cab89d4f161f10a73f679060200160405180910390a160006101008401526106608101515160001911156129e157610660810151516001016107e082018051919091526101e0830151815160200152516107c0820152612a07565b6106608101515161080082018051919091526101e0830151815160200152516107c08201525b336000908152600460209081526040909120805460ff1916600190811782556107c08401518051918301919091559091015160029091015561020082015115612a6e576101e0820151612a6390611ccb90611cc681600a61466c565b610820820152612a77565b60016108208201525b60006101c0830151516004811115612a9157612a91615637565b1415612b16576101c0820151602090810151610860830181905261010084015191015110610880820152610160820151612b02576001612ad9826108600151600001516106b3565b516001811115612aeb57612aeb615637565b14612af7576000612b09565b806108800151612b09565b8061088001515b1515610840820152612d18565b60016101c0830151516004811115612b3057612b30615637565b1415612c26576101c0820151604001516108a0820181905251612b52906106b3565b6108c08201526108a08101516060015115612b83576060808301516108a083015190910151106108e0820152612b8c565b60006108e08201525b6108c08101515160019081811115612ba657612ba6615637565b14612bb2576000612bf0565b61082081015160016108c0830151516001811115612bd257612bd2615637565b14612be257816106400151612bed565b816108c00151604001515b51115b612bfb576000612c02565b806108e001515b612c0d576000612b09565b6108a08101516040015160001911610840820152612d18565b60026101c0830151516004811115612c4057612c40615637565b1415612cc2576101c0820151606001516001600160a01b03166109008201819052600190612c6d906106b3565b516001811115612c7f57612c7f615637565b14612c8b576000612b09565b8161012001516001600160a01b03168161090001516001600160a01b031614612cb5576001612b09565b6000610840820152612d18565b60036101c0830151516004811115612cdc57612cdc615637565b1415612cef576000610840820152612d18565b60046101c0830151516004811115612d0957612d09615637565b1415612d185760016108408201525b61018082015161076082015180516020909101510110614094576107608101516020810151905111610920820152610840810151612d57576000612d5e565b8061092001515b156135995760006101c0830151516004811115612d7d57612d7d615637565b1415612ef2576101c082018051602001516109408301526101e0830151905160405160008051602061650183398151915292612dba9290916162b0565b60405180910390a1610100820151610940820151602001519003610960820152612de66001604461439b565b61094081015180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612e2a573d6000803e3d6000fd5b506109808101805160009081905281516020015260a08301518151604001526101e0830151905160600152612e5d614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610980860151835190920191909152815143910152610960840151905190910152610e4d816143c1565b60016101c0830151516004811115612f0c57612f0c615637565b141561307e576101c0820180516040908101516109a08401526101e08401519151905160008051602061650183398151915292612f4a9290916162b0565b60405180910390a16109c081018051600090819052815160209081019190915260a084015182516040908101919091526101e085015192516060908101939093526109a084018051516109e0860180516001600160a01b039092169091528151830151815185015281516080908101518251901515940193909352815185015181519095019490945251909101519151911515910152612fe8614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a0808801518651909101526109e0860151838601805191909152805160019401939093526109c0860151835190920191909152815143910152610100850151905190910152610e4d816143c1565b60026101c083015151600481111561309857613098615637565b141561321a576101c082018051606001516001600160a01b0316610a008301526101e08301519051604051600080516020616501833981519152926130de9290916162b0565b60405180910390a1610a00810180516001600160a01b039081166000908152600460209081526040808320805461ffff19168155600181018490556002019290925592519051911681527f81df7148ed3a9aa51bafe04f44371e89b96f47294267fbf6ab28b7aa8c87b386910160405180910390a1610a208101805160009081905281516020015260a08301518151604001526101e0830151905160600152613185614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610a20860151835190920191909152815143910152610100850151905190910152610e4d816143c1565b60036101c083015151600481111561323457613234615637565b141561333257600080516020616501833981519152826101e00151836101c001516040516132639291906162b0565b60405180910390a1610a408101805160009081905281516020015260a08301518151604001526101e083015190516060015261329d614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610a40860151835190920191909152815143910152610100850151905190910152610e4d816143c1565b60046101c083015151600481111561334c5761334c615637565b141561359457600080516020616501833981519152826101e00151836101c0015160405161337b9291906162b0565b60405180910390a147610c408201526080820151604080516001600160a01b0392831660248083019190915282518083039091018152604490910182526020810180516001600160e01b0316636b3894c560e01b1790528185015191519092600092839291169082906133ef9086906162c5565b60006040518083038185875af1925050503d806000811461342c576040519150601f19603f3d011682016040523d82523d6000602084013e613431565b606091505b50915091506134428282604561469e565b50610c408401514703610a60850180519190915251610a8085018190526040517fdcc05340f97afab3093950f26d2444dc8bf02dd0e478fc29bb3ccb896b96164b945061349293509091506162e1565b60405180910390a1610100820151610a808201515101610aa08201526134ba6001604661439b565b610a80810151516134cd9015604761439b565b610ac08101805160009081905281516020015260a08301518151604001526101e08301519051606001526134ff614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516000940193909352610ac0860151835190920191909152815143910152610aa0840151905190910152610e4d816143c1565b61416a565b80610920015115613b1c5760006101c08301515160048111156135be576135be615637565b14156136bc57600080516020616521833981519152826101e00151836101c001516040516135ed9291906162b0565b60405180910390a1610ae08101805160009081905281516020015260a08301518151604001526101e0830151905160600152613627614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610ae0860151835190920191909152815143910152610100850151905190910152610e4d816143c1565b60016101c08301515160048111156136d6576136d6615637565b14156137d457600080516020616521833981519152826101e00151836101c001516040516137059291906162b0565b60405180910390a1610b008101805160009081905281516020015260a08301518151604001526101e083015190516060015261373f614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610b00860151835190920191909152815143910152610100850151905190910152610e4d816143c1565b60026101c08301515160048111156137ee576137ee615637565b14156138ec57600080516020616521833981519152826101e00151836101c0015160405161381d9291906162b0565b60405180910390a1610b208101805160009081905281516020015260a08301518151604001526101e0830151905160600152613857614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610b20860151835190920191909152815143910152610100850151905190910152610e4d816143c1565b60036101c083015151600481111561390657613906615637565b1415613a0457600080516020616521833981519152826101e00151836101c001516040516139359291906162b0565b60405180910390a1610b408101805160009081905281516020015260a08301518151604001526101e083015190516060015261396f614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610b40860151835190920191909152815143910152610100850151905190910152610e4d816143c1565b60046101c0830151516004811115613a1e57613a1e615637565b141561359457600080516020616521833981519152826101e00151836101c00151604051613a4d9291906162b0565b60405180910390a1610b608101805160009081905281516020015260a08301518151604001526101e0830151905160600152613a87614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610b60860151835190920191909152815143910152610100850151905190910152610e4d816143c1565b60006101c0830151516004811115613b3657613b36615637565b1415613c34576000805160206164e1833981519152826101e00151836101c00151604051613b659291906162b0565b60405180910390a1610b808101805160009081905281516020015260a08301518151604001526101e0830151905160600152613b9f614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610b80860151835190920191909152815143910152610100850151905190910152610e4d816143c1565b60016101c0830151516004811115613c4e57613c4e615637565b1415613d4c576000805160206164e1833981519152826101e00151836101c00151604051613c7d9291906162b0565b60405180910390a1610ba08101805160009081905281516020015260a08301518151604001526101e0830151905160600152613cb7614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610ba0860151835190920191909152815143910152610100850151905190910152610e4d816143c1565b60026101c0830151516004811115613d6657613d66615637565b1415613e64576000805160206164e1833981519152826101e00151836101c00151604051613d959291906162b0565b60405180910390a1610bc08101805160009081905281516020015260a08301518151604001526101e0830151905160600152613dcf614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610bc0860151835190920191909152815143910152610100850151905190910152610e4d816143c1565b60036101c0830151516004811115613e7e57613e7e615637565b1415613f7c576000805160206164e1833981519152826101e00151836101c00151604051613ead9291906162b0565b60405180910390a1610be08101805160009081905281516020015260a08301518151604001526101e0830151905160600152613ee7614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610be0860151835190920191909152815143910152610100850151905190910152610e4d816143c1565b60046101c0830151516004811115613f9657613f96615637565b1415613594576000805160206164e1833981519152826101e00151836101c00151604051613fc59291906162b0565b60405180910390a1610c008101805160009081905281516020015260a08301518151604001526101e0830151905160600152613fff614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610c00860151835190920191909152815143910152610100850151905190910152610e4d816143c1565b61076081018051602090810151610c2084018051919091529151518251909101526101c08301518151604001526101e08301519051606001526140d5614f7e565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610c20860151835190920191909152815143910152610100850151905190910152610e4d816143c1565b50505050565b600061417a614860565b6020810151516004905261418c6147bf565b6141968282610ae5565b6080015192915050565b6141a861480b565b6003600054141561425f576000600280546141c290615aaf565b80601f01602080910402602001604051908101604052809291908181526020018280546141ee90615aaf565b801561423b5780601f106142105761010080835404028352916020019161423b565b820191906000526020600020905b81548152906001019060200180831161421e57829003601f168201915b50505050508060200190518101906142539190615f0d565b6101c001519392505050565b6106ae6000600761439b565b6000614275614860565b602081810180515160009052515101516001600160a01b03841690526142996147bf565b6142a38282610ae5565b519392505050565b60006142b5614860565b6020818101805151600190528051516040908101518790529051510151018390526142de6147bf565b6142e88282610ae5565b60200151949350505050565b60006142fe614860565b602081015151600590526143106147bf565b61431a8282610ae5565b60a0015192915050565b600061432e614860565b60208101805151600790525151610100015183905261434b6147bf565b6143558282610ae5565b60e001519392505050565b600061436a614860565b60208101805151600290525151606001518390526143866147bf565b6143908282610ae5565b604001519392505050565b816104db5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6143ee60405180608001604052806000151581526020016000815260200160008152602001600081525090565b8160200151602001511561456a5760208201516040015160600151600a118015825261443e576020820151604001516060015161443490611ccb90611cc681600a61466c565b6020820152614446565b600160208201525b61444e614f9e565b8251516001600160a01b03908116825283516020908101518184015284516040908101518316818501528551606090810151818601528651608090810151851681870152875160a0908101519087015283880180515160c0880152805184015160e08801528051820151610100880152805151519095166101208701528451518401516101408701528451518301511515610160870152845151820151610180870152845151015115156101a086015283518201518201516101c08601529251810151909201516101e08401528351151561020084015283810151610220840152600360005543600155905161454691839101616329565b6040516020818303038152906040526002908051906020019061416a929190615095565b6000604082015261457d6001601361439b565b60208201518051516080909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156145c1573d6000803e3d6000fd5b506040810151479081106145db57604082015181036145de565b60005b606083018190526040830151614613925060009161460a9161460091906146d9565b8460600151900390565b1015601461439b565b6020820151515160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015614655573d6000803e3d6000fd5b50600080805560018190556104db90600290615119565b600081838161467d5761467d6164a4565b069392505050565b6000818381614696576146966164a4565b049392505050565b606083156146ad5750816103c9565b8251156146bd5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016143b8565b6000826146e683826164ba565b915081101561036d5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016143b8565b6040805161016081018252600060e08201818152610100830182905261012083018290526101408301829052825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b604080516060810190915280600081526020016000151581526020016147ba604051806040016040528060008152602001600081525090565b905290565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915290565b6040805160c081019091528060008152602001614838604080518082019091526000808252602082015290565b8152602001614845615156565b81526000602082018190526040820181905260609091015290565b6040518060400160405280600081526020016147ba615184565b60405180602001604052806147ba614726565b60408051610c8081019091526000610c6082019081528152602081016148b1614781565b81526020016148d3604051806040016040528060008152602001600081525090565b8152602001600081526020016148fc604051806040016040528060008152602001600081525090565b8152602001614909615197565b81526020016149246040518060200160405280600081525090565b8152602001600081526020016000815260200161493f614781565b8152602001614961604051806040016040528060008152602001600081525090565b8152602001614983604051806040016040528060008152602001600081525090565b81526020016149a5604051806040016040528060008152602001600081525090565b81526020016149c7604051806040016040528060008152602001600081525090565b81526020016149e9604051806040016040528060008152602001600081525090565b8152602001614a0360408051602081019091526000815290565b81526000602082018190526040820152606001614a30604080518082019091526000808252602082015290565b815260006020820152604001614a44615156565b8152602001614a51614781565b8152602001614a73604051806040016040528060008152602001600081525090565b81526000602082018190526040820152606001614a8e61480b565b8152602001614a9b6151fc565b815260200160008152602001614ac4604051806040016040528060008152602001600081525090565b8152602001614af76040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b8152602001614b0461521d565b815260200160008152602001614b2d604051806040016040528060008152602001600081525090565b815260006020820152604001614b53604080518082019091526000808252602082015290565b815260006020820152604001614b67615156565b8152602001614b74614781565b8152600060208201819052604082018190526060820152608001614ba8604080518082019091526000808252602082015290565b815260006020820152604001614bbc615156565b8152602001614bc9614781565b81526000602082018190526040820152606001614be46151fc565b8152602001614c1060408051608081018252600060208201818152928201819052606082015290815290565b815260200160008152602001614c39604051806040016040528060008152602001600081525090565b8152602001614c5b604051806040016040528060008152602001600081525090565b815260006020820152604001614c81604080518082019091526000808252602082015290565b815260006020820152604001614c95615156565b8152602001614ca2614781565b815260200160001515815260200160006001600160a01b03168152602001614cdd604051806040016040528060008152602001600081525090565b8152602001614cff604051806040016040528060008152602001600081525090565b8152602001614d21604051806040016040528060008152602001600081525090565b8152602001614d43604051806040016040528060008152602001600081525090565b8152602001614d65604051806040016040528060008152602001600081525090565b8152602001614d87604051806040016040528060008152602001600081525090565b81526000602082018190526040820152606001614db4604080518082019091526000808252602082015290565b815260006020820152604001614dc8615156565b8152602001614dd5614781565b8152600060208201819052604082018190526060820152608001614e09604080518082019091526000808252602082015290565b815260200160008152602001614e1d6151fc565b8152602001614e2a615156565b8152602001614e376151fc565b81526040805160a08101825260008082526020828101829052928201819052606082018190526080820152910190815260006020820152604001614e796151fc565b8152602001614e866151fc565b8152602001614eaa6040518060400160405280600081526020016000151581525090565b8152602001614ece6040518060400160405280600081526020016000151581525090565b815260200160008152602001614ee26151fc565b8152602001614eef6151fc565b8152602001614efc6151fc565b8152602001614f096151fc565b8152602001614f166151fc565b8152602001614f236151fc565b8152602001614f306151fc565b8152602001614f3d6151fc565b8152602001614f4a6151fc565b8152602001614f576151fc565b8152602001614f646151fc565b8152602001614f716151fc565b8152602001600081525090565b6040518060400160405280614f91615230565b81526020016147ba615297565b60405180610240016040528060006001600160a01b03168152602001614fe460408051608081018252600080825260208201819052918101829052606081019190915290565b815260006020820181905260408201819052606082015260800161500661480b565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526020016150416151fc565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c082015260e00161507861480b565b815260200160008152602001600015158152602001600081525090565b8280546150a190615aaf565b90600052602060002090601f0160209004810192826150c35760008555615109565b82601f106150dc57805160ff1916838001178555615109565b82800160010185558215615109579182015b828111156151095782518255916020019190600101906150ee565b506151159291506152ef565b5090565b50805461512590615aaf565b6000825580601f10615135575050565b601f01602090049060005260206000209081019061515391906152ef565b50565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b60405180602001604052806147ba615304565b60408051610140810182526000818301818152606083018290526080830182905260a0830182905260c0830182905260e08301829052610100830182905261012083018290528252825180840190935280835260208381019190915290919082015290565b60405180608001604052806000815260200160008152602001614f7161480b565b60405180602001604052806147ba61480b565b6040518060c0016040528060006001600160a01b0316815260200161527560408051608081018252600080825260208201819052918101829052606081019190915290565b81526000602082018190526040820181905260608201526080016147ba61480b565b6040805161014081018252600060a0820181815260c0830182905260e0830182905261010083018290526101208301829052825260208201529081016152db6151fc565b815260200160008152602001600081525090565b5b8082111561511557600081556001016152f0565b604080516101408101909152806000815260200161532d60408051602081019091526000815290565b815260200161533a615197565b81526020016153556040518060200160405280600081525090565b815260200161536f60408051602081019091526000815290565b815260006020820181905260408201526060016153b06040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b81526020016153bd61521d565b81526020016147ba60408051608081018252600060208201818152928201819052606082015290815290565b6040516080810167ffffffffffffffff8111828210171561541a57634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff8111828210171561541a57634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff8111828210171561541a57634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561541a57634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff8111828210171561541a57634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561541a57634e487b7160e01b600052604160045260246000fd5b604051610240810167ffffffffffffffff8111828210171561541a57634e487b7160e01b600052604160045260246000fd5b801515811461515357600080fd5b80356106ae81615548565b60006060828403121561557357600080fd5b6040516060810181811067ffffffffffffffff821117156155a457634e487b7160e01b600052604160045260246000fd5b6040529050808235600281106155b957600080fd5b815260208301356155c981615548565b602082015260408301356155dc81615548565b6040919091015292915050565b6000606082840312156155fb57600080fd5b6103c98383615561565b6001600160a01b038116811461515357600080fd5b60006020828403121561562c57600080fd5b81356103c981615605565b634e487b7160e01b600052602160045260246000fd5b6002811061515357615153615637565b8151608082019061566d8161564d565b80835250602083015115156020830152604083015180516040840152602081015160608401525092915050565b80356106ae81615605565b6000608082840312156156b757600080fd5b6156bf6153e9565b90508135815260208201356020820152604082013560408201526060820135606082015292915050565b6000608082840312156156fb57600080fd5b6103c983836156a5565b60005b83811015615720578181015183820152602001615708565b8381111561416a5750506000910152565b8281526040602082015260008251806040840152615756816060850160208701615705565b601f01601f1916919091016060019392505050565b6000610460828403121561577e57600080fd5b50919050565b80516005811061579657615796615637565b80835250602081015160018060a01b03808251166020850152602082015160408501526040830151915080825116606085015250602081015115156080840152604081015160a0840152606081015160c08401526080810151151560e08401525060608101516158126101008401826001600160a01b03169052565b506080810151151561012083015260a00151151561014090910152565b610160810161036d8284615784565b600061010080838503121561585257600080fd5b6040519081019067ffffffffffffffff8211818310171561588357634e487b7160e01b600052604160045260246000fd5b81604052809250833581526020840135602082015260408401356040820152606084013560608201526080840135608082015260a084013560a082015260c084013560c082015260e084013560e0820152505092915050565b6000604082840312156158ee57600080fd5b6158f6615420565b905081358152602082013561590a81615548565b602082015292915050565b600080610140838503121561592957600080fd5b615933848461583e565b91506159438461010085016158dc565b90509250929050565b6005811061515357600080fd5b600060a0828403121561596b57600080fd5b615973615451565b9050813561598081615605565b8152602082013561599081615548565b80602083015250604082013560408201526060820135606082015260808201356159b981615548565b608082015292915050565b60008183036101608112156159d857600080fd5b6159e0615482565b915082356159ed8161594c565b82526040601f1982011215615a0157600080fd5b50615a0a615420565b6020830135615a1881615605565b81526040830135602080830191909152820152615a388360608401615959565b6040820152615a4a610100830161569a565b6060820152615a5c6101208301615556565b6080820152615a6e6101408301615556565b60a082015292915050565b60006101608284031215615a8c57600080fd5b6103c983836159c4565b600060208284031215615aa857600080fd5b5035919050565b600181811c90821680615ac357607f821691505b6020821081141561577e57634e487b7160e01b600052602260045260246000fd5b8035600981106106ae57600080fd5b600060208284031215615b0557600080fd5b615b0d6154b3565b90508135615b1a81615605565b815292915050565b60006101408284031215615b3557600080fd5b615b3d615420565b9050615b49838361583e565b815261590a8361010084016158dc565b600060208284031215615b6b57600080fd5b615b736154b3565b9135825250919050565b600060808284031215615b8f57600080fd5b615b976154b3565b9050615b1a83836156a5565b60006101608284031215615bb657600080fd5b615bbe6154b3565b9050615b1a83836159c4565b600060608284031215615bdc57600080fd5b615be46154b3565b9050615b1a8383615561565b6000818303610460811215615c0457600080fd5b615c0c615420565b83358152610440601f1983011215615c2357600080fd5b615c2b6154b3565b9150615c356154e4565b615c4160208601615ae4565b8152615c508660408701615af3565b6020820152615c628660608701615b22565b6040820152615c75866101a08701615b59565b6060820152615c88866101c08701615af3565b6080820152615c9a6101e08601615556565b60a0820152615cac6102008601615556565b60c0820152615cbf866102208701615b7d565b60e0820152615cd2866102a08701615ba3565b610100820152615ce6866104008701615bca565b610120820152825260208101919091529392505050565b80516106ae81615605565b600060808284031215615d1a57600080fd5b615d226153e9565b90508151815260208201516020820152604082015160408201526060820151606082015292915050565b80516106ae81615548565b600060a08284031215615d6957600080fd5b615d71615451565b90508151615d7e81615605565b81526020820151615d8e81615548565b80602083015250604082015160408201526060820151606082015260808201516159b981615548565b6000818303610160811215615dcb57600080fd5b615dd3615482565b91508251615de08161594c565b82526040601f1982011215615df457600080fd5b50615dfd615420565b6020830151615e0b81615605565b81526040830151602080830191909152820152615e2b8360608401615d57565b6040820152615e3d6101008301615cfd565b6060820152615e4f6101208301615d4c565b6080820152615a6e6101408301615d4c565b600060a08284031215615e7357600080fd5b615e7b615451565b90508151615e8881615605565b8152602082810151908201526040820151615ea281615548565b60408201526060828101519082015260808201516159b981615548565b60006101c08284031215615ed257600080fd5b615eda6153e9565b90508151815260208201516020820152615ef78360408401615db7565b60408201526101a0820151606082015292915050565b60006107408284031215615f2057600080fd5b615f28615516565b615f3183615cfd565b8152615f408460208501615d08565b6020820152615f5160a08401615cfd565b604082015260c08301516060820152615f6c60e08401615cfd565b6080820152610100615f8085828601615db7565b60a0830152615f93856102608601615e61565b60c0830152615fa6856103008601615ebf565b60e08301526104c084015190820152615fc26104e08401615cfd565b610120820152610500830151610140820152615fe16105208401615d4c565b6101608201526105408301516101808201526160006105608401615d4c565b6101a0820152616014846105808501615db7565b6101c08201526106e08301516101e08201526160336107008401615d4c565b610200820152610720929092015161022083015250919050565b6009811061605d5761605d615637565b9052565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b6160ba828251616061565b60209081015180516101008401520151151561012090910152565b6104db828251805182526020810151602083015260408101516040830152606081015160608301525050565b6104db828251615784565b805180516161198161564d565b80845250602081015115156020840152604081015115156040840152505050565b60006104808201905060018060a01b03841682528251602083015260208301515161616960408401825161604d565b6020810151516001600160a01b03166060840152604081015161618f60808501826160af565b506060810151516101c08401526080810151516001600160a01b03166101e084015260a0810151151561020084015260c0810151151561022084015260e08101516161de6102408501826160d5565b506101008101516161f36102c0850182616101565b50610120015161620761042084018261610c565b509392505050565b6001600160a01b0384168152610160810161622d6020830185616061565b825161012083015260208301511515610140830152949350505050565b6001600160a01b038316815260a081016103c96020830184805182526020810151602083015260408101516040830152606081015160608301525050565b61018081016162978285615784565b6001600160a01b03929092166101609190910152919050565b82815261018081016103c96020830184615784565b600082516162d7818460208701615705565b9190910192915050565b815181526020808301511515908201526040810161036d565b8051825260208101516020830152604081015161631a6040840182615784565b50606001516101a09190910152565b81516001600160a01b031681526107408101602083015161636e6020840182805182526020810151602083015260408101516040830152606081015160608301525050565b5060408301516001600160a01b03811660a084015250606083015160c083015260808301516001600160a01b03811660e08401525060a08301516101006163b781850183615784565b60c085015180516001600160a01b03166102608601526020810151610280860152604081015115156102a086015260608101516102c08601526080015115156102e085015260e085015191506164116103008501836162fa565b8401516104c0840152506101208301516001600160a01b03166104e083015261014083015161050083015261016083015115156105208301526101808301516105408301526101a083015115156105608301526101c0830151616478610580840182615784565b506101e08301516106e08301526102008301511515610700830152610220909201516107209091015290565b634e487b7160e01b600052601260045260246000fd5b600082198211156164db57634e487b7160e01b600052601160045260246000fd5b50019056fea0c08e29c71350e40fbb4cf003989233b13d526e69962aefa0a312080ee1fc54f825aeeaf8a98d102cfef2ce8a456afbe776ac52abc49aed0689abcbcf31c12f4eb456086f80a7670898a2f96c26b017204aad3098f1aeb032d9b4edbe0ef5c9a26469706673582212205d370eca62d331d87fdc28f0aaaf033825cc6ff5e194fda2563e06d74485f28e64736f6c634300080c0033",BytecodeLen:30852,Which:"oD",version:8,views:{Proposal:"Proposal",currentVotes:"currentVotes",info:"info",isMember:"isMember",myRank:"myRank"}},_stateSourceMap={2:{at:"./dao/contracts/dao-blog.rsh:420:11:after expr stmt semicolon",fs:[],msg:null,who:"Module"},3:{at:"./dao/contracts/dao-blog.rsh:208:50:after expr stmt semicolon",fs:[],msg:null,who:"Module"}},_Connectors={ALGO:_ALGO,ETH:_ETH},_Participants={Founder:Founder,addMember:addMember,comment:comment,donate:donate,eject:eject,join:join,leave:leave,post:post,registerProposal:registerProposal,voteProposal:voteProposal},_APIs={addMember:addMember,comment:comment,donate:donate,eject:eject,join:join,leave:leave,post:post,registerProposal:registerProposal,voteProposal:voteProposal};export{_version,_versionHash,_backendVersion,getExports,_getEvents,_getViews,_getMaps,Founder,_addMember3,_comment3,_donate3,_eject3,_join3,_leave3,_post3,_registerProposal3,_voteProposal3,addMember,comment,donate,eject,join,leave,post,registerProposal,voteProposal,_stateSourceMap,_Connectors,_Participants,_APIs};