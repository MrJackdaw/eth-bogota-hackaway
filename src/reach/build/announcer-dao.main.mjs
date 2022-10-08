const _version="0.1.12",_versionHash="0.1.12 (ae94865f)",_backendVersion=24;function getExports(e){e.reachStdlib;return{}}function _getEvents(e){var e=e.reachStdlib,t=e.T_Contract;return{DaoClosed:[t],DaoCreated:[t,e.T_Bytes(e.checkedBigNumberify("<builtin>",e.UInt_max,"128")),e.T_Bytes(e.checkedBigNumberify("<builtin>",e.UInt_max,"256"))]}}function _getViews(e,t){e.reachStdlib;return{infos:{},views:{3:[]}}}function _getMaps(e){return{mapDataTy:e.reachStdlib.T_Tuple([])}}async function Deployer(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for Deployer expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for Deployer expects to receive an interact object as its second argument."));const a=e._initialize(),n=a.stdlib;var r=n.T_Null,e=n.T_Contract,o=n.T_Tuple([e]),s=n.T_Bytes(n.checkedBigNumberify("<builtin>",n.UInt_max,"128")),i=n.T_Bytes(n.checkedBigNumberify("<builtin>",n.UInt_max,"256")),e=n.T_Tuple([e,s,i]),c=n.T_Data({daoClosed0_36:o,daoCreated0_36:e}),s=await a.sendrecv({args:[],evt_cnt:0,funcNum:0,lct:n.checkedBigNumberify("./contracts/announcer-dao.rsh:20:12:dot",n.UInt_max,"0"),onlyIf:!0,out_tys:[],pay:[n.checkedBigNumberify("./contracts/announcer-dao.rsh:20:12:decimal",n.UInt_max,"0"),[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};n.UInt_max;var[]=e["data"];await a.getContractInfo();return await!0?t.isHalt=!1:(t.txns.push({kind:"halt",tok:void 0}),t.isHalt=!0),t},soloSend:!0,timeoutAt:void 0,tys:[],waitIfNotPresent:!1}),{data:[],time:i}=s,o=await a.getContractInfo();n.protect(r,await t.done(o),{at:"./contracts/announcer-dao.rsh:21:25:application",fs:["at ./contracts/announcer-dao.rsh:21:25:application call to [unknown function] (defined at: ./contracts/announcer-dao.rsh:21:25:function exp)",'at ./contracts/announcer-dao.rsh:21:25:application call to "liftedInteract" (defined at: ./contracts/announcer-dao.rsh:21:25:application)'],msg:"done",who:"Deployer"});let b=!0,d=i,p=s;for(;await b;){var y=await a.recv({didSend:!1,evt_cnt:1,funcNum:2,out_tys:[c],timeoutAt:void 0,waitIfNotPresent:!1}),{data:[l],time:f}=y;switch(l[0]){case"daoClosed0_36":l[1][n.checkedBigNumberify("./contracts/announcer-dao.rsh:35:10:spread",n.UInt_max,"0")],await y.getOutput("daoClosed","v236",r,null);b=!0,d=f,p=y;continue;case"daoCreated0_36":var u=l[1];u[n.checkedBigNumberify("./contracts/announcer-dao.rsh:26:10:spread",n.UInt_max,"0")],u[n.checkedBigNumberify("./contracts/announcer-dao.rsh:26:10:spread",n.UInt_max,"1")],u[n.checkedBigNumberify("./contracts/announcer-dao.rsh:26:10:spread",n.UInt_max,"2")],await y.getOutput("daoCreated","v285",r,null);b=!0,d=f,p=y;continue}}}async function _daoClosed3(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for _daoClosed3 expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for _daoClosed3 expects to receive an interact object as its second argument."));e=e._initialize();const r=e.stdlib;var a=r.T_Contract,n=r.T_Tuple([a]),o=r.T_Bytes(r.checkedBigNumberify("<builtin>",r.UInt_max,"128")),s=r.T_Bytes(r.checkedBigNumberify("<builtin>",r.UInt_max,"256")),a=r.T_Tuple([a,o,s]),o=r.T_Data({daoClosed0_36:n,daoCreated0_36:a});const i=r.T_Null;var[]=await e.getState(r.checkedBigNumberify("<builtin>",r.UInt_max,"3"),[]),s=r.protect(n,await t.in(),{at:"./contracts/announcer-dao.rsh:1:23:application",fs:["at ./contracts/announcer-dao.rsh:35:39:application call to [unknown function] (defined at: ./contracts/announcer-dao.rsh:35:39:function exp)",'at ./contracts/announcer-dao.rsh:23:33:application call to "rundaoClosed0_36" (defined at: ./contracts/announcer-dao.rsh:35:10:function exp)',"at ./contracts/announcer-dao.rsh:23:33:application call to [unknown function] (defined at: ./contracts/announcer-dao.rsh:23:33:function exp)"],msg:"in",who:"daoClosed"}),c=await e.sendrecv({args:[["daoClosed0_36",s]],evt_cnt:1,funcNum:2,lct:r.checkedBigNumberify("<builtin>",r.UInt_max,"0"),onlyIf:!0,out_tys:[o],pay:[r.checkedBigNumberify("./contracts/announcer-dao.rsh:35:10:decimal",r.UInt_max,"0"),[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};r.UInt_max;var[a]=e["data"];switch(a[0]){case"daoClosed0_36":var n=a[1];t.txns.push({kind:"api",who:"daoClosed"}),n[r.checkedBigNumberify("./contracts/announcer-dao.rsh:35:10:spread",r.UInt_max,"0")],await e.getOutput("daoClosed","v236",i,null);t.isHalt=!1;break;case"daoCreated0_36":a[1]}return t},soloSend:!1,timeoutAt:void 0,tys:[o],waitIfNotPresent:!1}),{data:[b],didSend:d}=c;switch(b[0]){case"daoClosed0_36":var p=b[1],y=(p[r.checkedBigNumberify("./contracts/announcer-dao.rsh:35:10:spread",r.UInt_max,"0")],await c.getOutput("daoClosed","v236",i,null));return void(d&&r.protect(i,await t.out(p,y),{at:"./contracts/announcer-dao.rsh:35:11:application",fs:["at ./contracts/announcer-dao.rsh:35:11:application call to [unknown function] (defined at: ./contracts/announcer-dao.rsh:35:11:function exp)",'at ./contracts/announcer-dao.rsh:38:12:application call to "k" (defined at: ./contracts/announcer-dao.rsh:37:13:function exp)',"at ./contracts/announcer-dao.rsh:37:13:application call to [unknown function] (defined at: ./contracts/announcer-dao.rsh:37:13:function exp)"],msg:"out",who:"daoClosed"}));case"daoCreated0_36":b[1]}}async function _daoCreated3(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for _daoCreated3 expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for _daoCreated3 expects to receive an interact object as its second argument."));e=e._initialize();const r=e.stdlib;var a=r.T_Contract,n=r.T_Bytes(r.checkedBigNumberify("<builtin>",r.UInt_max,"128")),o=r.T_Bytes(r.checkedBigNumberify("<builtin>",r.UInt_max,"256")),n=r.T_Tuple([a,n,o]),o=r.T_Tuple([a]),a=r.T_Data({daoClosed0_36:o,daoCreated0_36:n});const s=r.T_Null;var[]=await e.getState(r.checkedBigNumberify("<builtin>",r.UInt_max,"3"),[]),o=r.protect(n,await t.in(),{at:"./contracts/announcer-dao.rsh:1:23:application",fs:["at ./contracts/announcer-dao.rsh:26:52:application call to [unknown function] (defined at: ./contracts/announcer-dao.rsh:26:52:function exp)",'at ./contracts/announcer-dao.rsh:23:33:application call to "rundaoCreated0_36" (defined at: ./contracts/announcer-dao.rsh:26:10:function exp)',"at ./contracts/announcer-dao.rsh:23:33:application call to [unknown function] (defined at: ./contracts/announcer-dao.rsh:23:33:function exp)"],msg:"in",who:"daoCreated"}),i=await e.sendrecv({args:[["daoCreated0_36",o]],evt_cnt:1,funcNum:2,lct:r.checkedBigNumberify("<builtin>",r.UInt_max,"0"),onlyIf:!0,out_tys:[a],pay:[r.checkedBigNumberify("./contracts/announcer-dao.rsh:26:10:decimal",r.UInt_max,"0"),[]],sim_p:async e=>{var t={txns:[],mapRefs:[],maps:[]};r.UInt_max;var[a]=e["data"];switch(a[0]){case"daoClosed0_36":a[1];break;case"daoCreated0_36":var n=a[1];t.txns.push({kind:"api",who:"daoCreated"}),n[r.checkedBigNumberify("./contracts/announcer-dao.rsh:26:10:spread",r.UInt_max,"0")],n[r.checkedBigNumberify("./contracts/announcer-dao.rsh:26:10:spread",r.UInt_max,"1")],n[r.checkedBigNumberify("./contracts/announcer-dao.rsh:26:10:spread",r.UInt_max,"2")],await e.getOutput("daoCreated","v285",s,null);t.isHalt=!1}return t},soloSend:!1,timeoutAt:void 0,tys:[a],waitIfNotPresent:!1}),{data:[c],didSend:b}=i;switch(c[0]){case"daoClosed0_36":c[1];return;case"daoCreated0_36":var d=c[1],p=(d[r.checkedBigNumberify("./contracts/announcer-dao.rsh:26:10:spread",r.UInt_max,"0")],d[r.checkedBigNumberify("./contracts/announcer-dao.rsh:26:10:spread",r.UInt_max,"1")],d[r.checkedBigNumberify("./contracts/announcer-dao.rsh:26:10:spread",r.UInt_max,"2")],await i.getOutput("daoCreated","v285",s,null));b&&r.protect(s,await t.out(d,p),{at:"./contracts/announcer-dao.rsh:26:11:application",fs:["at ./contracts/announcer-dao.rsh:26:11:application call to [unknown function] (defined at: ./contracts/announcer-dao.rsh:26:11:function exp)",'at ./contracts/announcer-dao.rsh:29:12:application call to "k" (defined at: ./contracts/announcer-dao.rsh:28:13:function exp)',"at ./contracts/announcer-dao.rsh:28:13:application call to [unknown function] (defined at: ./contracts/announcer-dao.rsh:28:13:function exp)"],msg:"out",who:"daoCreated"})}}async function daoClosed(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for daoClosed expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for daoClosed expects to receive an interact object as its second argument."));var a=e._initialize(),n=a.stdlib,a=await a.getCurrentStep();if(3==a)return _daoClosed3(e,t);throw n.apiStateMismatchError({_stateSourceMap:_stateSourceMap},[n.checkedBigNumberify("<builtin>",n.UInt_max,"3")],n.checkedBigNumberify("<builtin>",n.UInt_max,a))}async function daoCreated(e,t){if("object"!=typeof e||void 0===e._initialize)return Promise.reject(new Error("The backend for daoCreated expects to receive a contract as its first argument."));if("object"!=typeof t)return Promise.reject(new Error("The backend for daoCreated expects to receive an interact object as its second argument."));var a=e._initialize(),n=a.stdlib,a=await a.getCurrentStep();if(3==a)return _daoCreated3(e,t);throw n.apiStateMismatchError({_stateSourceMap:_stateSourceMap},[n.checkedBigNumberify("<builtin>",n.UInt_max,"3")],n.checkedBigNumberify("<builtin>",n.UInt_max,a))}const _ALGO={ABI:{impure:["daoClosed(uint64)byte[0]","daoCreated(uint64,byte[128],byte[256])byte[0]"],pure:[],sigs:["daoClosed(uint64)byte[0]","daoCreated(uint64,byte[128],byte[256])byte[0]"]},appApproval:"ByAFAAHZ9cznDgIDJgEAIjUAMRhBAX0oZEkiWzUBgQhbNQI2GgAXSUEAQCI1BCM1BkkkDEAAFiQSRDYaATX/gAEANP9QgYADr1BCADSBwfDwhQ4SRDYaATYaAlA2GgNQNf+AAQE0/1BCABY2GgIXNQQ2GgM2GgEXSSUMQACJJRJEIQQ0ARJENARJIhJMNAISEURJNQU1/4AER6nqdTT/ULA0/yJVQAAlNP9XAQg1/oAIAAAAAAAAAOywKDUHgASQHf6fNP5QsCMyBkIAYTT/I4GIA1g1/oAIAAAAAAAAAR2wKDUHgARfbXibNP5XAAhQNP5XCIBQNP6BiAGBgAJYULAjMgZCACciEkSBoI0GiACgIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAjMgZCAAA1/0k1/kEACyEENQEyBjUCQgAfQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==",appClear:"Bw==",companionInfo:null,extraPages:0,mapDataKeys:0,mapDataSize:0,stateKeys:0,stateSize:0,unsupported:[],version:11,warnings:[]},_ETH={ABI:`[
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T3",
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
    "name": "DaoClosed",
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
        "internalType": "struct T5",
        "name": "v1",
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
        "indexed": false,
        "internalType": "struct T6",
        "name": "v2",
        "type": "tuple"
      }
    ],
    "name": "DaoCreated",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
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
                    "internalType": "enum _enum_T8",
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
                    "internalType": "struct T4",
                    "name": "_daoClosed0_36",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
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
                        "internalType": "struct T5",
                        "name": "elem1",
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
                        "internalType": "struct T6",
                        "name": "elem2",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T7",
                    "name": "_daoCreated0_36",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T8",
                "name": "v224",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
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
    "name": "_reach_oe_v236",
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
    "name": "_reach_oe_v285",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
                    "internalType": "enum _enum_T8",
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
                    "internalType": "struct T4",
                    "name": "_daoClosed0_36",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
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
                        "internalType": "struct T5",
                        "name": "elem1",
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
                        "internalType": "struct T6",
                        "name": "elem2",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T7",
                    "name": "_daoCreated0_36",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T8",
                "name": "v224",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
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
    "name": "daoClosed",
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
        "internalType": "struct T5",
        "name": "_a1",
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
        "internalType": "struct T6",
        "name": "_a2",
        "type": "tuple"
      }
    ],
    "name": "daoCreated",
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
]`,Bytecode:"0x60806040526040516200106a3803806200106a833981016040819052620000269162000257565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000b0565b6200008d6200013e565b60208082018051600190525143910152620000a881620000da565b5050620002ff565b81620000d65760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b602081015151156200012357600360009081554360015560408051602080820184905282518083038201815291830190925280516200011e92600292019062000177565b505050565b600080805560018190556200013b9060029062000206565b50565b6040518060400160405280600015158152602001620001726040518060400160405280600015158152602001600081525090565b905290565b8280546200018590620002c2565b90600052602060002090601f016020900481019282620001a95760008555620001f4565b82601f10620001c457805160ff1916838001178555620001f4565b82800160010185558215620001f4579182015b82811115620001f4578251825591602001919060010190620001d7565b506200020292915062000240565b5090565b5080546200021490620002c2565b6000825580601f1062000225575050565b601f0160209004906000526020600020908101906200013b91905b5b8082111562000202576000815560010162000241565b6000604082840312156200026a57600080fd5b604080519081016001600160401b03811182821017156200029b57634e487b7160e01b600052604160045260246000fd5b6040528251815260208301518015158114620002b657600080fd5b60208201529392505050565b600181811c90821680620002d757607f821691505b60208210811415620002f957634e487b7160e01b600052602260045260246000fd5b50919050565b610d5b806200030f6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780634fe2786c146100835780636b3894c51461009657806383230757146100b9578063ab53f2c6146100ce578063f7244d4c146100f157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100913660046107d3565b610104565b6100a96100a4366004610808565b610134565b604051901515815260200161007a565b3480156100c557600080fd5b50600154610070565b3480156100da57600080fd5b506100e3610145565b60405161007a92919061082a565b6100a96100ff366004610a32565b6101e2565b604080518082019091526000808252602082015261013061012a36849003840184610a78565b826101f7565b5050565b600061013f8261049f565b92915050565b60006060600054600280805461015a90610b68565b80601f016020809104026020016040519081016040528092919081815260200182805461018690610b68565b80156101d35780601f106101a8576101008083540402835291602001916101d3565b820191906000526020600020905b8154815290600101906020018083116101b657829003601f168201915b50505050509050915091509091565b60006101ef8484846104ec565b949350505050565b610207600360005414600a610558565b815161022290158061021b57508251600154145b600b610558565b60008080556002805461023490610b68565b80601f016020809104026020016040519081016040528092919081815260200182805461026090610b68565b80156102ad5780601f10610282576101008083540402835291602001916102ad565b820191906000526020600020905b81548152906001019060200180831161029057829003601f168201915b50505050508060200190518101906102c59190610b9d565b90506102cf6105dc565b7f91a1580fdd9c11897aaf7b53d76490a37281bd53e1a0ae6f992f8707236eb6ff3385604051610300929190610c23565b60405180910390a1600060208501515151600181111561032257610322610bbf565b14156103df57602080850151510151815261033f34156008610558565b604051600081527fa80f9bcbccdf21f18dc80ef3a1185b3fd9e3817f49441ef1395f0a67831806ef9060200160405180910390a1600083528051516040516001600160a01b0390911681527fe678738fe843d92a7249779a6d64856b441ff65c36d79e810d78d9bb72230817906020015b60405180910390a16103c0610678565b602080820180516001905251439101526103d98161057d565b50610499565b60016020850151515160018111156103f9576103f9610bbf565b14156104995760208085015151604001519082015261041a34156009610558565b604051600081527ff259ec6beb2c384a46c0466f552514ff9f380ffe8b2a4ef7372df741c313dfb29060200160405180910390a160006020808501919091528181015180519181015160409182015191517f601b1f3c24082a13c2c4815d999aad3e99f953338c3137be87ae9550b38f6ad0936103b093909291610cd9565b50505050565b60006104a96106ab565b60208181018051516000908190529051518201516001600160a01b038616905260408051808201909152818152918201526104e482826101f7565b519392505050565b60006104f66106ab565b6020818101805151600190528051516040908101516001600160a01b038916905281515181015183018790529051518101518101859052805180820190915260008082529181019190915261054b82826101f7565b6020015195945050505050565b816101305760405163100960cb60e01b81526004810182905260240160405180910390fd5b602081015151156105c357600360009081554360015560408051602080820184905282518083038201815291830190925280516105be9260029201906106c5565b505050565b600080805560018190556105d990600290610749565b50565b6040805160608101825260009181019182529081905b815260200161067360408051606080820183526000808352835160808101855281815260208181018390529481018290529182015290918201908152604080516101008101825260008082526020828101829052928201819052606082018190526080820181905260a0820181905260c0820181905260e082015291015290565b905290565b60405180604001604052806000151581526020016106736040518060400160405280600015158152602001600081525090565b604051806040016040528060008152602001610673610783565b8280546106d190610b68565b90600052602060002090601f0160209004810192826106f35760008555610739565b82601f1061070c57805160ff1916838001178555610739565b82800160010185558215610739579182015b8281111561073957825182559160200191906001019061071e565b50610745929150610796565b5090565b50805461075590610b68565b6000825580601f10610765575050565b601f0160209004906000526020600020908101906105d99190610796565b60405180602001604052806106736107ab565b5b808211156107455760008155600101610797565b60408051606081019091528060008152604080516020818101909252600081529101906105f2565b600061020082840312156107e657600080fd5b50919050565b80356001600160a01b038116811461080357600080fd5b919050565b60006020828403121561081a57600080fd5b610823826107ec565b9392505050565b82815260006020604081840152835180604085015260005b8181101561085e57858101830151858201606001528201610842565b81811115610870576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff811182821017156108b857634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156108b857634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156108b857634e487b7160e01b600052604160045260246000fd5b60006080828403121561093257600080fd5b6040516080810181811067ffffffffffffffff8211171561096357634e487b7160e01b600052604160045260246000fd5b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b60006101008083850312156109a857600080fd5b6040519081019067ffffffffffffffff821181831017156109d957634e487b7160e01b600052604160045260246000fd5b81604052809250833581526020840135602082015260408401356040820152606084013560608201526080840135608082015260a084013560a082015260c084013560c082015260e084013560e0820152505092915050565b60008060006101a08486031215610a4857600080fd5b610a51846107ec565b9250610a608560208601610920565b9150610a6f8560a08601610994565b90509250925092565b6000818303610200811215610a8c57600080fd5b610a94610887565b833581526101e0601f1983011215610aab57600080fd5b610ab36108be565b610abb6108ef565b602086013560028110610acd57600080fd5b81526020603f1985011215610ae157600080fd5b610ae96108be565b610af5604088016107ec565b815260208201526101a0605f1985011215610b0f57600080fd5b610b176108ef565b9350610b25606087016107ec565b8452610b348760808801610920565b6020850152610b47876101008801610994565b60408501528360408201528082525080602083015250809250505092915050565b600181811c90821680610b7c57607f821691505b602082108114156107e657634e487b7160e01b600052602260045260246000fd5b600060208284031215610baf57600080fd5b8151801515811461082357600080fd5b634e487b7160e01b600052602160045260246000fd5b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b6001600160a01b0383811682528251602080840191909152830151518051610220840192919060028110610c6757634e487b7160e01b600052602160045260246000fd5b60408581019190915260208281015151841660608701529101518051909216608085015281015190610cbd60a0850183805182526020810151602083015260408101516040830152606081015160608301525050565b604001519050610cd1610120840182610bd5565b509392505050565b6001600160a01b03841681526101a08101610d186020830185805182526020810151602083015260408101516040830152606081015160608301525050565b6101ef60a0830184610bd556fea2646970667358221220d111b373c1d4249f8f590af1dcea2848ac1e7a11274ad832d054efcb1344de0a64736f6c634300080c0033",BytecodeLen:4202,Which:"oD",version:8,views:{}},_stateSourceMap={2:{at:"./contracts/announcer-dao.rsh:46:11:after expr stmt semicolon",fs:[],msg:null,who:"Module"},3:{at:"./contracts/announcer-dao.rsh:23:33:after expr stmt semicolon",fs:[],msg:null,who:"Module"}},_Connectors={ALGO:_ALGO,ETH:_ETH},_Participants={Deployer:Deployer,daoClosed:daoClosed,daoCreated:daoCreated},_APIs={daoClosed:daoClosed,daoCreated:daoCreated};export{_version,_versionHash,_backendVersion,getExports,_getEvents,_getViews,_getMaps,Deployer,_daoClosed3,_daoCreated3,daoClosed,daoCreated,_stateSourceMap,_Connectors,_Participants,_APIs};