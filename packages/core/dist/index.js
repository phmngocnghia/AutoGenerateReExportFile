!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var i in r)("object"==typeof exports?exports:e)[i]=r[i]}}(global,function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return s});var i=r(4),n=r(5),o=r.n(n),a=r(3),l=r(0),c=r(1);const s=({fileName:t,destinationPath:r})=>new Promise(n=>{try{const s=l.resolve(r,t),f=Object(c.readFileSync)(s).toString(),u=Object(i.parseSync)(f,{sourceType:"module",filename:t,configFile:l.resolve(e,"../../../../../.babelrc")});o()(u,{ExportAllDeclaration(){n(t)},ExportNamedDeclaration(e){a.isVariableDeclaration(e.node.declaration)&&n(t)},FunctionDeclaration(e){a.isExportNamedDeclaration(e.parent)&&n(t)},ExportSpecifier(){n(t)},ExportDefaultDeclaration(){n(t)}}),n(null)}catch(e){n(null)}})}).call(this,"/")},function(e,t){e.exports=require("@babel/types")},function(e,t){e.exports=require("@babel/core")},function(e,t){e.exports=require("@babel/traverse")},function(e,t,r){"use strict";r.r(t);var i=r(1),n=r(0);function o({directory:e,obj:t}){const r=n.join(e,t);return i.statSync(r).isDirectory()}const a=({rootDirectory:e,currentTravelDirectory:t=e,travelCallBack:r})=>new Promise(l=>{i.readdir(t,(i,c)=>{if(i)throw i;const s=c.filter(e=>o({directory:t,obj:e})),f=c.filter(e=>!o({directory:t,obj:e}));if(0===s.length)return r({directory:t,childFiles:f,childDirectories:s}),void l();const u=[];for(let i of s)u.push(a({travelCallBack:r,currentTravelDirectory:n.join(t,i),rootDirectory:e}));Promise.all(u).then(()=>{r({directory:t,childFiles:f,childDirectories:s}),l()})})});var l=r(2);const c=async({fileNames:e,destinationPath:t})=>{const r=e.map(e=>({fileName:e,promiseCheckIfFileContainExport:Object(l.a)({fileName:e,destinationPath:t}).then(e=>e)})).map(({promiseCheckIfFileContainExport:e})=>e);return(await Promise.all(r)).filter(e=>"string"==typeof e)},s=async({folderName:e,destinationPath:t,indexFileExt:r})=>{try{return await Object(l.a)({destinationPath:n.join(t,e),fileName:`index.${r}`})?e:null}catch(e){return null}},f=async({folderNames:e,destinationPath:t,indexFileExt:r})=>{const i=e.map(e=>({folderName:e,promiseCheckIfFileContainExport:s({folderName:e,destinationPath:t,indexFileExt:r}).then(e=>e)})).map(({promiseCheckIfFileContainExport:e})=>e);return(await Promise.all(i)).filter(e=>"string"==typeof e)},u=async({fileExts:e,inputDirectoryNames:t,inputFileNames:r,generatedFileExt:o,destinationPath:a,ignoreDestinationPaths:l})=>{if(l.some(e=>e.test(a)))return;const s=(({fileNames:e,fileExts:t})=>{return e.filter(e=>{const r=n.extname(e).split(".").pop();return t.includes(r)})})({fileNames:r,fileExts:e}),[u,d]=await Promise.all([c({fileNames:s,destinationPath:a}),f({folderNames:t,destinationPath:a,indexFileExt:o})]),p=(e=>{let t="";return e.forEach((r,i)=>{const o=n.parse(r).name;t+=`export * from './${o}'`,i!==e.length-1&&(t+="\n")}),t})([...u,...d]);return p?i.writeFileSync(n.join(a,`index.${o}`),p):void 0},d=({rootDirectory:e,fileExts:t,generatedFileExt:r,ignoreDestinationPaths:i})=>a({rootDirectory:e,travelCallBack:({directory:e,childFiles:n,childDirectories:o})=>{u({inputFileNames:n,inputDirectoryNames:o,destinationPath:e,generatedFileExt:r,fileExts:t,ignoreDestinationPaths:i})}});r.d(t,"recursiveGenerateExportFile",function(){return d})}])});