/* Haunted Mansion Escape — bundled with three.js (MIT, (c) 2010-2026 three.js authors) */
(()=>{var jg=Object.defineProperty;var Pp=(n,e)=>{for(var t in e)jg(n,t,{get:e[t],enumerable:!0})};var d0=0,Ad=1,f0=2;var _r=1,p0=2,bo=3,Gs=0,gn=1,Ht=2,ui=0,Vs=1,Tn=2,Cd=3,Rd=4,m0=5;var yr=100,g0=101,x0=102,_0=103,y0=104,v0=200,b0=201,M0=202,S0=203,Pd=204,Id=205,T0=206,E0=207,w0=208,A0=209,C0=210,R0=211,P0=212,I0=213,L0=214,lc=0,cc=1,hc=2,ro=3,uc=4,dc=5,fc=6,pc=7,Ld=0,D0=1,N0=2,Ii=0,Oa=1,Ba=2,za=3,vr=4,Ha=5,Ga=6,Va=7;var Dd=300,Ws=301,br=302,Vc=303,Wc=304,Wa=306,oo=1e3,Hi=1001,mc=1002,Sn=1003,U0=1004;var Xa=1005;var Cn=1006,Xc=1007;var Xs=1008;var Kn=1009,Nd=1010,Ud=1011,Mo=1012,qc=1013,Li=1014,di=1015,xn=1016,Yc=1017,Kc=1018,So=1020,kd=35902,Fd=35899,Od=1021,Bd=1022,fi=1023,Gi=1026,qs=1027,Zc=1028,$c=1029,Ys=1030,Jc=1031;var jc=1033,qa=33776,Ya=33777,Ka=33778,Za=33779,Qc=35840,eh=35841,th=35842,nh=35843,ih=36196,sh=37492,rh=37496,oh=37488,ah=37489,$a=37490,lh=37491,ch=37808,hh=37809,uh=37810,dh=37811,fh=37812,ph=37813,mh=37814,gh=37815,xh=37816,_h=37817,yh=37818,vh=37819,bh=37820,Mh=37821,Sh=36492,Th=36494,Eh=36495,wh=36283,Ah=36284,Ja=36285,Ch=36286;var oa=2300,gc=2301,oc=2302,dd=2303,fd=2400,pd=2401,md=2402;var k0=3200;var Rh=0,F0=1,fs="",an="srgb",aa="srgb-linear",la="linear",Pt="srgb";var ac=7680;var O0=519,B0=512,z0=513,H0=514,Ph=515,G0=516,V0=517,Ih=518,W0=519,zd=35044;var Hd="300 es",Ai=2e3,ao=2001;function Qg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ex(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function X0(){let n=ca("canvas");return n.style.display="block",n}var Ip={},lo=null;function ha(...n){let e="THREE."+n.shift();lo?lo("log",e,...n):console.log(e,...n)}function q0(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function je(...n){n=q0(n);let e="THREE."+n.shift();if(lo)lo("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Je(...n){n=q0(n);let e="THREE."+n.shift();if(lo)lo("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function dr(...n){let e=n.join(" ");e in Ip||(Ip[e]=!0,je(...n))}function Y0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var K0={[lc]:cc,[hc]:fc,[uc]:pc,[ro]:dc,[cc]:lc,[fc]:hc,[pc]:uc,[dc]:ro},Vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Bu=Math.PI/180,ua=180/Math.PI;function ss(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function tx(n,e){return(n%e+e)%e}function zu(n,e,t){return(1-t)*n+t*e}function zi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Yd=class Yd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yd.prototype.isVector2=!0;var ue=Yd,ci=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(d!==y||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*y;m<0&&(h=-h,f=-f,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let b=Math.acos(m),w=Math.sin(b);p=Math.sin(p*b)/w,a=Math.sin(a*b)/w,l=l*p+h*a,c=c*p+f*a,u=u*p+g*a,d=d*p+y*a}else{l=l*p+h*a,c=c*p+f*a,u=u*p+g*a,d=d*p+y*a;let b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-a*f,e[t+2]=c*g+u*f+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Kd=class Kd{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hu.copy(this).projectOnVector(e),this.sub(Hu)}reflect(e){return this.sub(Hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kd.prototype.isVector3=!0;var D=Kd,Hu=new D,Lp=new ci,Zd=class Zd{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],b=s[1],w=s[4],x=s[7],E=s[2],A=s[5],P=s[8];return r[0]=o*y+a*b+l*E,r[3]=o*m+a*w+l*A,r[6]=o*p+a*x+l*P,r[1]=c*y+u*b+d*E,r[4]=c*m+u*w+d*A,r[7]=c*p+u*x+d*P,r[2]=h*y+f*b+g*E,r[5]=h*m+f*w+g*A,r[8]=h*p+f*x+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*c-u*i)*y,e[2]=(a*i-s*o)*y,e[3]=h*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gu.makeScale(e,t)),this}rotate(e){return dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gu.makeRotation(-e)),this}translate(e,t){return dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zd.prototype.isMatrix3=!0;var rt=Zd,Gu=new rt,Dp=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Np=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nx(){let n={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Pt&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Pt&&(s.r=io(s.r),s.g=io(s.g),s.b=io(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fs?la:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[aa]:{primaries:e,whitePoint:i,transfer:la,toXYZ:Dp,fromXYZ:Np,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:i,transfer:Pt,toXYZ:Dp,fromXYZ:Np,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),n}var yt=nx();function rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function io(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Br,xc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Br===void 0&&(Br=ca("canvas")),Br.width=e.width,Br.height=e.height;let s=Br.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Br}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ca("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=rs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rs(t[i]/255)*255):t[i]=rs(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ix=0,co=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vu(s[o].image)):r.push(Vu(s[o]))}else r=Vu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Vu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}var sx=0,Wu=new D,Wn=class n extends Vi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Hi,s=Hi,r=Cn,o=Xs,a=fi,l=Kn,c=n.DEFAULT_ANISOTROPY,u=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=ss(),this.name="",this.source=new co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wu).x}get height(){return this.source.getSize(Wu).y}get depth(){return this.source.getSize(Wu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oo:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oo:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Dd;Wn.DEFAULT_ANISOTROPY=1;var $d=class $d{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,x=(f+1)/2,E=(p+1)/2,A=(u+h)/4,P=(d+y)/4,_=(g+m)/4;return w>x&&w>E?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=A/i,r=P/i):x>E?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=_/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=P/r,s=_/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-y)/b,this.z=(h-u)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$d.prototype.isVector4=!0;var Qt=$d,_c=class extends Vi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Wn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new co(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends _c{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},da=class extends Wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yc=class extends Wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Gc=class Gc{constructor(e,t,i,s,r,o,a,l,c,u,d,h,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,f,g,y,m)}set(e,t,i,s,r,o,a,l,c,u,d,h,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gc().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/zr.setFromMatrixColumn(e,0).length(),r=1/zr.setFromMatrixColumn(e,1).length(),o=1/zr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,f=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-y*c,t[9]=-a*l,t[2]=y-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,y=c*d;t[0]=h+y*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=y+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,y=c*d;t[0]=h-y*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=y-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=y-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-y*d}else if(e.order==="XZY"){let h=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rx,e,ox)}lookAt(e,t,i){let s=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Ps.crossVectors(i,jn),Ps.lengthSq()===0&&(Math.abs(i.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Ps.crossVectors(i,jn)),Ps.normalize(),Dl.crossVectors(jn,Ps),s[0]=Ps.x,s[4]=Dl.x,s[8]=jn.x,s[1]=Ps.y,s[5]=Dl.y,s[9]=jn.y,s[2]=Ps.z,s[6]=Dl.z,s[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],b=i[3],w=i[7],x=i[11],E=i[15],A=s[0],P=s[4],_=s[8],S=s[12],R=s[1],U=s[5],C=s[9],N=s[13],I=s[2],O=s[6],X=s[10],K=s[14],z=s[3],B=s[7],k=s[11],V=s[15];return r[0]=o*A+a*R+l*I+c*z,r[4]=o*P+a*U+l*O+c*B,r[8]=o*_+a*C+l*X+c*k,r[12]=o*S+a*N+l*K+c*V,r[1]=u*A+d*R+h*I+f*z,r[5]=u*P+d*U+h*O+f*B,r[9]=u*_+d*C+h*X+f*k,r[13]=u*S+d*N+h*K+f*V,r[2]=g*A+y*R+m*I+p*z,r[6]=g*P+y*U+m*O+p*B,r[10]=g*_+y*C+m*X+p*k,r[14]=g*S+y*N+m*K+p*V,r[3]=b*A+w*R+x*I+E*z,r[7]=b*P+w*U+x*O+E*B,r[11]=b*_+w*C+x*X+E*k,r[15]=b*S+w*N+x*K+E*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],b=l*f-c*h,w=a*f-c*d,x=a*h-l*d,E=o*f-c*u,A=o*h-l*u,P=o*d-a*u;return t*(y*b-m*w+p*x)-i*(g*b-m*E+p*A)+s*(g*w-y*E+p*P)-r*(g*x-y*A+m*P)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],b=t*a-i*o,w=t*l-s*o,x=t*c-r*o,E=i*l-s*a,A=i*c-r*a,P=s*c-r*l,_=u*y-d*g,S=u*m-h*g,R=u*p-f*g,U=d*m-h*y,C=d*p-f*y,N=h*p-f*m,I=b*N-w*C+x*U+E*R-A*S+P*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/I;return e[0]=(a*N-l*C+c*U)*O,e[1]=(s*C-i*N-r*U)*O,e[2]=(y*P-m*A+p*E)*O,e[3]=(h*A-d*P-f*E)*O,e[4]=(l*R-o*N-c*S)*O,e[5]=(t*N-s*R+r*S)*O,e[6]=(m*x-g*P-p*w)*O,e[7]=(u*P-h*x+f*w)*O,e[8]=(o*C-a*R+c*_)*O,e[9]=(i*R-t*C-r*_)*O,e[10]=(g*A-y*x+p*b)*O,e[11]=(d*x-u*A-f*b)*O,e[12]=(a*S-o*U-l*_)*O,e[13]=(t*U-i*S+s*_)*O,e[14]=(y*w-g*E-m*b)*O,e[15]=(u*E-d*w+h*b)*O,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,g=r*d,y=o*u,m=o*d,p=a*d,b=l*c,w=l*u,x=l*d,E=i.x,A=i.y,P=i.z;return s[0]=(1-(y+p))*E,s[1]=(f+x)*E,s[2]=(g-w)*E,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(h+p))*A,s[6]=(m+b)*A,s[7]=0,s[8]=(g+w)*P,s[9]=(m-b)*P,s[10]=(1-(h+y))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=zr.set(s[0],s[1],s[2]).length(),a=zr.set(s[4],s[5],s[6]).length(),l=zr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Si.copy(this);let c=1/o,u=1/a,d=1/l;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=u,Si.elements[5]*=u,Si.elements[6]*=u,Si.elements[8]*=d,Si.elements[9]*=d,Si.elements[10]*=d,t.setFromRotationMatrix(Si),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Ai,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===Ai)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===ao)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ai,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===Ai)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===ao)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Gc.prototype.isMatrix4=!0;var At=Gc,zr=new D,Si=new At,rx=new D(0,0,0),ox=new D(1,1,1),Ps=new D,Dl=new D,jn=new D,Up=new At,kp=new ci,Ci=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Up,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kp.setFromEuler(this),this.setFromQuaternion(kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ci.DEFAULT_ORDER="XYZ";var ho=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ax=0,Fp=new D,Hr=new ci,ji=new At,Nl=new D,Ko=new D,lx=new D,cx=new ci,Op=new D(1,0,0),Bp=new D(0,1,0),zp=new D(0,0,1),Hp={type:"added"},hx={type:"removed"},Gr={type:"childadded",child:null},Xu={type:"childremoved",child:null},fn=class n extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new Ci,i=new ci,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new rt}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Op,e)}rotateY(e){return this.rotateOnAxis(Bp,e)}rotateZ(e){return this.rotateOnAxis(zp,e)}translateOnAxis(e,t){return Fp.copy(e).applyQuaternion(this.quaternion),this.position.add(Fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Op,e)}translateY(e){return this.translateOnAxis(Bp,e)}translateZ(e){return this.translateOnAxis(zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Nl.copy(e):Nl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Ko,Nl,this.up):ji.lookAt(Nl,Ko,this.up),this.quaternion.setFromRotationMatrix(ji),s&&(ji.extractRotation(s.matrixWorld),Hr.setFromRotationMatrix(ji),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hp),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hx),Xu.child=e,this.dispatchEvent(Xu),Xu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hp),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,lx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,cx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};fn.DEFAULT_UP=new D(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var le=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ux={type:"move"},uo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ux)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new le;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Is={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function qu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Fe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=yt.workingColorSpace){if(e=tx(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=qu(o,r,e+1/3),this.g=qu(o,r,e),this.b=qu(o,r,e-1/3)}return yt.colorSpaceToWorking(this,s),this}setStyle(e,t=an){function i(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){let i=Z0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return yt.workingToColorSpace(kn.copy(this),e),Math.round(vt(kn.r*255,0,255))*65536+Math.round(vt(kn.g*255,0,255))*256+Math.round(vt(kn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(kn.copy(this),t);let i=kn.r,s=kn.g,r=kn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(kn.copy(this),t),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=an){yt.workingToColorSpace(kn.copy(this),e);let t=kn.r,i=kn.g,s=kn.b;return e!==an?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Is),this.setHSL(Is.h+e,Is.s+t,Is.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Is),e.getHSL(Ul);let i=zu(Is.h,Ul.h,t),s=zu(Is.s,Ul.s,t),r=zu(Is.l,Ul.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kn=new Fe;Fe.NAMES=Z0;var fa=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var fo=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ti=new D,Qi=new D,Yu=new D,es=new D,Vr=new D,Wr=new D,Gp=new D,Ku=new D,Zu=new D,$u=new D,Ju=new Qt,ju=new Qt,Qu=new Qt,is=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ti.subVectors(e,t),s.cross(Ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ti.subVectors(s,t),Qi.subVectors(i,t),Yu.subVectors(e,t);let o=Ti.dot(Ti),a=Ti.dot(Qi),l=Ti.dot(Yu),c=Qi.dot(Qi),u=Qi.dot(Yu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,es)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,es.x),l.addScaledVector(o,es.y),l.addScaledVector(a,es.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ju.setScalar(0),ju.setScalar(0),Qu.setScalar(0),Ju.fromBufferAttribute(e,t),ju.fromBufferAttribute(e,i),Qu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ju,r.x),o.addScaledVector(ju,r.y),o.addScaledVector(Qu,r.z),o}static isFrontFacing(e,t,i,s){return Ti.subVectors(i,t),Qi.subVectors(e,t),Ti.cross(Qi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Ti.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Vr.subVectors(s,i),Wr.subVectors(r,i),Ku.subVectors(e,i);let l=Vr.dot(Ku),c=Wr.dot(Ku);if(l<=0&&c<=0)return t.copy(i);Zu.subVectors(e,s);let u=Vr.dot(Zu),d=Wr.dot(Zu);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Vr,o);$u.subVectors(e,r);let f=Vr.dot($u),g=Wr.dot($u);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Wr,a);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Gp.subVectors(r,s),a=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(Gp,a);let p=1/(m+y+h);return o=y*p,a=h*p,t.copy(i).addScaledVector(Vr,o).addScaledVector(Wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ei=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ei):Ei.fromBufferAttribute(r,o),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kl.copy(i.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Fl.subVectors(this.max,Zo),Xr.subVectors(e.a,Zo),qr.subVectors(e.b,Zo),Yr.subVectors(e.c,Zo),Ls.subVectors(qr,Xr),Ds.subVectors(Yr,qr),lr.subVectors(Xr,Yr);let t=[0,-Ls.z,Ls.y,0,-Ds.z,Ds.y,0,-lr.z,lr.y,Ls.z,0,-Ls.x,Ds.z,0,-Ds.x,lr.z,0,-lr.x,-Ls.y,Ls.x,0,-Ds.y,Ds.x,0,-lr.y,lr.x,0];return!ed(t,Xr,qr,Yr,Fl)||(t=[1,0,0,0,1,0,0,0,1],!ed(t,Xr,qr,Yr,Fl))?!1:(Ol.crossVectors(Ls,Ds),t=[Ol.x,Ol.y,Ol.z],ed(t,Xr,qr,Yr,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ts=[new D,new D,new D,new D,new D,new D,new D,new D],Ei=new D,kl=new ei,Xr=new D,qr=new D,Yr=new D,Ls=new D,Ds=new D,lr=new D,Zo=new D,Fl=new D,Ol=new D,cr=new D;function ed(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){cr.fromArray(n,r);let a=s.x*Math.abs(cr.x)+s.y*Math.abs(cr.y)+s.z*Math.abs(cr.z),l=e.dot(cr),c=t.dot(cr),u=i.dot(cr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var dn=new D,Bl=new ue,dx=0,An=class extends Vi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zd,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bl.fromBufferAttribute(this,t),Bl.applyMatrix3(e),this.setXY(t,Bl.x,Bl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var pa=class extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ma=class extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ht=class extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}},fx=new ei,$o=new D,td=new D,os=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):fx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);let t=$o.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector($o,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(td)),this.expandByPoint($o.copy(e.center).sub(td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},px=0,li=new At,nd=new fn,Kr=new D,Qn=new ei,Jo=new ei,bn=new D,$t=class n extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qg(e)?ma:pa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new rt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,i){return li.makeTranslation(e,t,i),this.applyMatrix4(li),this}scale(e,t,i){return li.makeScale(e,t,i),this.applyMatrix4(li),this}lookAt(e){return nd.lookAt(e),nd.updateMatrix(),this.applyMatrix4(nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Jo.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(Qn.min,Jo.min),Qn.expandByPoint(bn),bn.addVectors(Qn.max,Jo.max),Qn.expandByPoint(bn)):(Qn.expandByPoint(Jo.min),Qn.expandByPoint(Jo.max))}Qn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)bn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(bn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bn.fromBufferAttribute(a,c),l&&(Kr.fromBufferAttribute(e,c),bn.add(Kr)),s=Math.max(s,i.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new An(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new D,l[_]=new D;let c=new D,u=new D,d=new D,h=new ue,f=new ue,g=new ue,y=new D,m=new D;function p(_,S,R){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,R),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,R),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(U),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(U),a[_].add(y),a[S].add(y),a[R].add(y),l[_].add(m),l[S].add(m),l[R].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let _=0,S=b.length;_<S;++_){let R=b[_],U=R.start,C=R.count;for(let N=U,I=U+C;N<I;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let w=new D,x=new D,E=new D,A=new D;function P(_){E.fromBufferAttribute(s,_),A.copy(E);let S=a[_];w.copy(S),w.sub(E.multiplyScalar(E.dot(S))).normalize(),x.crossVectors(A,S);let U=x.dot(l[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,U)}for(let _=0,S=b.length;_<S;++_){let R=b[_],U=R.start,C=R.count;for(let N=U,I=U+C;N<I;N+=3)P(e.getX(N+0)),P(e.getX(N+1)),P(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,d=new D;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new An(h,u,d)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},vc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zd,this.updateRanges=[],this.version=0,this.uuid=ss()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ss()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ss()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Vn=new D,ga=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix4(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vn.fromBufferAttribute(this,t),Vn.applyNormalMatrix(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vn.fromBufferAttribute(this,t),Vn.transformDirection(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ha("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new An(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ha("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},id=new D,mx=new D,gx=new rt,wi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=id.subVectors(i,t).cross(mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(id),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||gx.getNormalMatrix(e),s=this.coplanarPoint(id).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},xx=0,Wi=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=Vs,this.side=Gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=Id,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ac,this.stencilZFail=ac,this.stencilZPass=ac,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new wi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ue().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Us=class extends Wi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zr,jo=new D,$r=new D,Jr=new D,jr=new ue,Qo=new ue,$0=new At,zl=new D,ea=new D,Hl=new D,Vp=new ue,sd=new ue,Wp=new ue,fr=class extends fn{constructor(e=new Us){if(super(),this.isSprite=!0,this.type="Sprite",Zr===void 0){Zr=new $t;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new vc(t,5);Zr.setIndex([0,1,2,0,2,3]),Zr.setAttribute("position",new ga(i,3,0,!1)),Zr.setAttribute("uv",new ga(i,2,3,!1))}this.geometry=Zr,this.material=e,this.center=new ue(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$r.setFromMatrixScale(this.matrixWorld),$0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Jr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$r.multiplyScalar(-Jr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Gl(zl.set(-.5,-.5,0),Jr,o,$r,s,r),Gl(ea.set(.5,-.5,0),Jr,o,$r,s,r),Gl(Hl.set(.5,.5,0),Jr,o,$r,s,r),Vp.set(0,0),sd.set(1,0),Wp.set(1,1);let a=e.ray.intersectTriangle(zl,ea,Hl,!1,jo);if(a===null&&(Gl(ea.set(-.5,.5,0),Jr,o,$r,s,r),sd.set(0,1),a=e.ray.intersectTriangle(zl,Hl,ea,!1,jo),a===null))return;let l=e.ray.origin.distanceTo(jo);l<e.near||l>e.far||t.push({distance:l,point:jo.clone(),uv:is.getInterpolation(jo,zl,ea,Hl,Vp,sd,Wp,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Gl(n,e,t,i,s,r){jr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Qo.x=r*jr.x-s*jr.y,Qo.y=s*jr.x+r*jr.y):Qo.copy(jr),n.copy(e),n.x+=Qo.x,n.y+=Qo.y,n.applyMatrix4($0)}var ns=new D,rd=new D,Vl=new D,Wl=new D,po=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ns)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ns.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ns.copy(this.origin).addScaledVector(this.direction,t),ns.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){rd.copy(e).add(t).multiplyScalar(.5),Vl.copy(t).sub(e).normalize(),Wl.copy(this.origin).sub(rd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Vl),a=Wl.dot(this.direction),l=-Wl.dot(Vl),c=Wl.lengthSq(),u=Math.abs(1-o*o),d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(rd).addScaledVector(Vl,h),f}intersectSphere(e,t){if(e.radius<0)return null;ns.subVectors(e.center,this.origin);let i=ns.dot(this.direction),s=ns.dot(ns)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ns)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,f=e.z-o.z,g=t.x-o.x,y=t.y-o.y,m=t.z-o.z,p=i.x-o.x,b=i.y-o.y,w=i.z-o.z,x=Math.abs(l),E=Math.abs(c),A=Math.abs(u),P,_,S,R,U,C,N,I,O,X,K,z;if(x>=E&&x>=A?(S=l,C=d,O=g,z=p,l>=0?(P=c,_=u,R=h,U=f,N=y,I=m,X=b,K=w):(P=u,_=c,R=f,U=h,N=m,I=y,X=w,K=b)):E>=A?(S=c,C=h,O=y,z=b,c>=0?(P=u,_=l,R=f,U=d,N=m,I=g,X=w,K=p):(P=l,_=u,R=d,U=f,N=g,I=m,X=p,K=w)):(S=u,C=f,O=m,z=w,u>=0?(P=l,_=c,R=d,U=h,N=g,I=y,X=p,K=b):(P=c,_=l,R=h,U=d,N=y,I=g,X=b,K=p)),S===0)return null;let B=P/S,k=_/S,V=1/S,he=R-B*C,we=U-k*C,gt=N-B*O,it=I-k*O,lt=X-B*z,j=K-k*z,re=lt*it-j*gt,Le=he*j-we*lt,et=gt*we-it*he;if(s){if(re<0||Le<0||et<0)return null}else if((re<0||Le<0||et<0)&&(re>0||Le>0||et>0))return null;let Pe=re+Le+et;if(Pe===0)return null;let tt=V*(re*C+Le*O+et*z);return(Pe>0?tt<0:tt>0)?null:this.at(tt/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xp=new At,hr=new po,Xl=new os,qp=new D,ql=new D,Yl=new D,Kl=new D,od=new D,Zl=new D,Yp=new D,$l=new D,It=class extends fn{constructor(e=new $t,t=new ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Zl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(od.fromBufferAttribute(d,e),o?Zl.addScaledVector(od,u):Zl.addScaledVector(od.sub(t),u))}t.add(Zl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xl.copy(i.boundingSphere),Xl.applyMatrix4(r),hr.copy(e.ray).recast(e.near),!(Xl.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Xl,qp)===null||hr.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&(Xp.copy(r).invert(),hr.copy(e.ray).applyMatrix4(Xp),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,E=w;x<E;x+=3){let A=a.getX(x),P=a.getX(x+1),_=a.getX(x+2);s=Jl(this,p,e,i,c,u,d,A,P,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let b=a.getX(m),w=a.getX(m+1),x=a.getX(m+2);s=Jl(this,o,e,i,c,u,d,b,w,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,E=w;x<E;x+=3){let A=x,P=x+1,_=x+2;s=Jl(this,p,e,i,c,u,d,A,P,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let b=m,w=m+1,x=m+2;s=Jl(this,o,e,i,c,u,d,b,w,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function _x(n,e,t,i,s,r,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Gs,a),l===null)return null;$l.copy(a),$l.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo($l);return c<t.near||c>t.far?null:{distance:c,point:$l.clone(),object:n}}function Jl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ql),n.getVertexPosition(l,Yl),n.getVertexPosition(c,Kl);let u=_x(n,e,t,i,ql,Yl,Kl,Yp);if(u){let d=new D;is.getBarycoord(Yp,ql,Yl,Kl,d),s&&(u.uv=is.getInterpolatedAttribute(s,a,l,c,d,new ue)),r&&(u.uv1=is.getInterpolatedAttribute(r,a,l,c,d,new ue)),o&&(u.normal=is.getInterpolatedAttribute(o,a,l,c,d,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new D,materialIndex:0};is.getNormal(ql,Yl,Kl,h.normal),u.face=h,u.barycoord=d}return u}var xa=class extends Wn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Sn,u=Sn,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _a=class extends An{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qr=new At,Kp=new At,jl=[],Zp=new ei,yx=new At,ta=new It,na=new os,ya=class extends It{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _a(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,yx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qr),Zp.copy(e.boundingBox).applyMatrix4(Qr),this.boundingBox.union(Zp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new os),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qr),na.copy(e.boundingSphere).applyMatrix4(Qr),this.boundingSphere.union(na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ta.geometry=this.geometry,ta.material=this.material,ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(i),e.ray.intersectsSphere(na)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qr),Kp.multiplyMatrices(i,Qr),ta.matrixWorld=Kp,ta.raycast(e,jl);for(let o=0,a=jl.length;o<a;o++){let l=jl[o];l.instanceId=r,l.object=this,t.push(l)}jl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new _a(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new xa(new Float32Array(s*this.count),s,this.count,Zc,di));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ur=new os,vx=new ue(.5,.5),Ql=new D,mo=class{constructor(e=new wi,t=new wi,i=new wi,s=new wi,r=new wi,o=new wi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ai,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],b=r[12],w=r[13],x=r[14],E=r[15];if(s[0].setComponents(c-o,f-u,p-g,E-b).normalize(),s[1].setComponents(c+o,f+u,p+g,E+b).normalize(),s[2].setComponents(c+a,f+d,p+y,E+w).normalize(),s[3].setComponents(c-a,f-d,p-y,E-w).normalize(),i)s[4].setComponents(l,h,m,x).normalize(),s[5].setComponents(c-l,f-h,p-m,E-x).normalize();else if(s[4].setComponents(c-l,f-h,p-m,E-x).normalize(),t===Ai)s[5].setComponents(c+l,f+h,p+m,E+x).normalize();else if(t===ao)s[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){ur.center.set(0,0,0);let t=vx.distanceTo(e.center);return ur.radius=.7071067811865476+t,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ql.x=s.normal.x>0?e.max.x:e.min.x,Ql.y=s.normal.y>0?e.max.y:e.min.y,Ql.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bc=class extends Wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$p=new At,gd=new po,ec=new os,tc=new D,va=class extends fn{constructor(e=new $t,t=new bc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ec.copy(i.boundingSphere),ec.applyMatrix4(s),ec.radius+=r,e.ray.intersectsSphere(ec)===!1)return;$p.copy(s).invert(),gd.copy(e.ray).applyMatrix4($p);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,y=f;g<y;g++){let m=c.getX(g);tc.fromBufferAttribute(d,m),Jp(tc,m,l,s,e,t,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,y=f;g<y;g++)tc.fromBufferAttribute(d,g),Jp(tc,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Jp(n,e,t,i,s,r,o){let a=gd.distanceSqToPoint(n);if(a<t){let l=new D;gd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ba=class extends Wn{constructor(e=[],t=Ws,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},as=class extends Wn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ks=class extends Wn{constructor(e,t,i=Li,s,r,o,a=Sn,l=Sn,c,u=Gi,d=1){if(u!==Gi&&u!==qs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new co(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Mc=class extends ks{constructor(e,t=Li,i=Ws,s,r,o=Sn,a=Sn,l,c=Gi){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ma=class extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},hi=class n extends $t{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(d,2));function g(y,m,p,b,w,x,E,A,P,_,S){let R=x/P,U=E/_,C=x/2,N=E/2,I=A/2,O=P+1,X=_+1,K=0,z=0,B=new D;for(let k=0;k<X;k++){let V=k*U-N;for(let he=0;he<O;he++){let we=he*R-C;B[y]=we*b,B[m]=V*w,B[p]=I,c.push(B.x,B.y,B.z),B[y]=0,B[m]=0,B[p]=A>0?1:-1,u.push(B.x,B.y,B.z),d.push(he/P),d.push(1-k/_),K+=1}}for(let k=0;k<_;k++)for(let V=0;V<P;V++){let he=h+V+O*k,we=h+V+O*(k+1),gt=h+(V+1)+O*(k+1),it=h+(V+1)+O*k;l.push(he,we,it),l.push(we,gt,it),z+=6}a.addGroup(f,z,S),f+=z,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Sa=class n extends $t{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,g=i*2+r,y=s+1,m=new D,p=new D;for(let b=0;b<=g;b++){let w=0,x=0,E=0,A=0;if(b<=i){let S=b/i,R=S*Math.PI/2;x=-u-e*Math.cos(R),E=e*Math.sin(R),A=-e*Math.cos(R),w=S*d}else if(b<=i+r){let S=(b-i)/r;x=-u+S*t,E=e,A=0,w=d+S*h}else{let S=(b-i-r)/i,R=S*Math.PI/2;x=u+e*Math.sin(R),E=e*Math.cos(R),A=e*Math.sin(R),w=d+h+S*d}let P=Math.max(0,Math.min(1,w/f)),_=0;b===0?_=.5/s:b===g&&(_=-.5/s);for(let S=0;S<=s;S++){let R=S/s,U=R*Math.PI*2,C=Math.sin(U),N=Math.cos(U);p.x=-E*N,p.y=x,p.z=E*C,a.push(p.x,p.y,p.z),m.set(-E*N,A,E*C),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+_,P)}if(b>0){let S=(b-1)*y;for(let R=0;R<s;R++){let U=S+R,C=S+R+1,N=b*y+R,I=b*y+R+1;o.push(U,C,N),o.push(C,I,N)}}}this.setIndex(o),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Fn=class n extends $t{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new D,u=new ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ri=class n extends $t{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,y=[],m=i/2,p=0;b(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ht(d,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(f,2));function b(){let x=new D,E=new D,A=0,P=(t-e)/i;for(let _=0;_<=r;_++){let S=[],R=_/r,U=R*(t-e)+e;for(let C=0;C<=s;C++){let N=C/s,I=N*l+a,O=Math.sin(I),X=Math.cos(I);E.x=U*O,E.y=-R*i+m,E.z=U*X,d.push(E.x,E.y,E.z),x.set(O,P,X).normalize(),h.push(x.x,x.y,x.z),f.push(N,1-R),S.push(g++)}y.push(S)}for(let _=0;_<s;_++)for(let S=0;S<r;S++){let R=y[S][_],U=y[S+1][_],C=y[S+1][_+1],N=y[S][_+1];(e>0||S!==0)&&(u.push(R,U,N),A+=3),(t>0||S!==r-1)&&(u.push(U,C,N),A+=3)}c.addGroup(p,A,0),p+=A}function w(x){let E=g,A=new ue,P=new D,_=0,S=x===!0?e:t,R=x===!0?1:-1;for(let C=1;C<=s;C++)d.push(0,m*R,0),h.push(0,R,0),f.push(.5,.5),g++;let U=g;for(let C=0;C<=s;C++){let I=C/s*l+a,O=Math.cos(I),X=Math.sin(I);P.x=S*X,P.y=m*R,P.z=S*O,d.push(P.x,P.y,P.z),h.push(0,R,0),A.x=O*.5+.5,A.y=X*.5*R+.5,f.push(A.x,A.y),g++}for(let C=0;C<s;C++){let N=E+C,I=U+C;x===!0?u.push(I,I+1,N):u.push(I+1,I,N),_+=3}c.addGroup(p,_,x===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rn=class n extends Ri{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sc=class n extends $t{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let w=new D,x=new D,E=new D;for(let A=0;A<t.length;A+=3)f(t[A+0],w),f(t[A+1],x),f(t[A+2],E),l(w,x,E,b)}function l(b,w,x,E){let A=E+1,P=[];for(let _=0;_<=A;_++){P[_]=[];let S=b.clone().lerp(x,_/A),R=w.clone().lerp(x,_/A),U=A-_;for(let C=0;C<=U;C++)C===0&&_===A?P[_][C]=S:P[_][C]=S.clone().lerp(R,C/U)}for(let _=0;_<A;_++)for(let S=0;S<2*(A-_)-1;S++){let R=Math.floor(S/2);S%2===0?(h(P[_][R+1]),h(P[_+1][R]),h(P[_][R])):(h(P[_][R+1]),h(P[_+1][R+1]),h(P[_+1][R]))}}function c(b){let w=new D;for(let x=0;x<r.length;x+=3)w.x=r[x+0],w.y=r[x+1],w.z=r[x+2],w.normalize().multiplyScalar(b),r[x+0]=w.x,r[x+1]=w.y,r[x+2]=w.z}function u(){let b=new D;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];let x=m(b)/2/Math.PI+.5,E=p(b)/Math.PI+.5;o.push(x,1-E)}g(),d()}function d(){for(let b=0;b<o.length;b+=6){let w=o[b+0],x=o[b+2],E=o[b+4],A=Math.max(w,x,E),P=Math.min(w,x,E);A>.9&&P<.1&&(w<.2&&(o[b+0]+=1),x<.2&&(o[b+2]+=1),E<.2&&(o[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function f(b,w){let x=b*3;w.x=e[x+0],w.y=e[x+1],w.z=e[x+2]}function g(){let b=new D,w=new D,x=new D,E=new D,A=new ue,P=new ue,_=new ue;for(let S=0,R=0;S<r.length;S+=9,R+=6){b.set(r[S+0],r[S+1],r[S+2]),w.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),A.set(o[R+0],o[R+1]),P.set(o[R+2],o[R+3]),_.set(o[R+4],o[R+5]),E.copy(b).add(w).add(x).divideScalar(3);let U=m(E);y(A,R+0,b,U),y(P,R+2,w,U),y(_,R+4,x,U)}}function y(b,w,x,E){E<0&&b.x===1&&(o[w]=b.x-1),x.x===0&&x.z===0&&(o[w]=E/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ue:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new D,s=[],r=[],o=[],a=new D,l=new At;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(vt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(vt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},go=class extends ti{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ue){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Tc=class extends go{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Gd(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var jp=new D,Qp=new D,ad=new Gd,ld=new Gd,cd=new Gd,Ta=class extends ti{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Qp.subVectors(s[0],s[1]).add(s[0]),c=Qp);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(jp.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=jp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),ad.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,y,m),ld.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,y,m),cd.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(ad.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),ld.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),cd.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(ad.calc(l),ld.calc(l),cd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function e0(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function bx(n,e){let t=1-n;return t*t*e}function Mx(n,e){return 2*(1-n)*n*e}function Sx(n,e){return n*n*e}function sa(n,e,t,i){return bx(n,e)+Mx(n,t)+Sx(n,i)}function Tx(n,e){let t=1-n;return t*t*t*e}function Ex(n,e){let t=1-n;return 3*t*t*n*e}function wx(n,e){return 3*(1-n)*n*n*e}function Ax(n,e){return n*n*n*e}function ra(n,e,t,i,s){return Tx(n,e)+Ex(n,t)+wx(n,i)+Ax(n,s)}var Ea=class extends ti{constructor(e=new ue,t=new ue,i=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ue){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ra(e,s.x,r.x,o.x,a.x),ra(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ec=class extends ti{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ra(e,s.x,r.x,o.x,a.x),ra(e,s.y,r.y,o.y,a.y),ra(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wa=class extends ti{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wc=class extends ti{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Aa=class extends ti{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(sa(e,s.x,r.x,o.x),sa(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pr=class extends ti{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(sa(e,s.x,r.x,o.x),sa(e,s.y,r.y,o.y),sa(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(e0(a,l.x,c.x,u.x,d.x),e0(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ue().fromArray(s))}return this}},xd=Object.freeze({__proto__:null,ArcCurve:Tc,CatmullRomCurve3:Ta,CubicBezierCurve:Ea,CubicBezierCurve3:Ec,EllipseCurve:go,LineCurve:wa,LineCurve3:wc,QuadraticBezierCurve:Aa,QuadraticBezierCurve3:pr,SplineCurve:Ca}),Ac=class extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new xd[s.type]().fromJSON(s))}return this}},ls=class extends Ac{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new wa(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Aa(this.currentPoint.clone(),new ue(e,t),new ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Ea(this.currentPoint.clone(),new ue(e,t),new ue(i,s),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ca(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new go(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},cs=class extends ls{constructor(e){super(e),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new ls().fromJSON(s))}return this}};function Cx(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=J0(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Dx(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let u=a,d=l;for(let h=t;h<s;h+=t){let f=n[h],g=n[h+1];f<a&&(a=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Ra(r,o,t,a,l,c,0),o}function J0(n,e,t,i,s){let r;if(s===Wx(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=t0(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=t0(o/i|0,n[o],n[o+1],r);return r&&xo(r,r.next)&&(Ia(r),r=r.next),r}function mr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(xo(t,t.next)||en(t.prev,t,t.next)===0)){if(Ia(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ra(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Ox(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Px(n,i,s,r):Rx(n)){e.push(l.i,n.i,c.i),Ia(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Ix(mr(n),e),Ra(n,e,t,i,s,r,2)):o===2&&Lx(n,e,t,i,s,r):Ra(mr(n),e,t,i,s,r,1);break}}}function Rx(n){let e=n.prev,t=n,i=n.next;if(en(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c),g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&ia(s,a,r,l,o,c,g.x,g.y)&&en(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Px(n,e,t,i){let s=n.prev,r=n,o=n.next;if(en(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,l,c),g=Math.min(u,d,h),y=Math.max(a,l,c),m=Math.max(u,d,h),p=_d(f,g,e,t,i),b=_d(y,m,e,t,i),w=n.prevZ,x=n.nextZ;for(;w&&w.z>=p&&x&&x.z<=b;){if(w.x>=f&&w.x<=y&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&ia(a,u,l,d,c,h,w.x,w.y)&&en(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ia(a,u,l,d,c,h,x.x,x.y)&&en(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=y&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&ia(a,u,l,d,c,h,w.x,w.y)&&en(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=b;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ia(a,u,l,d,c,h,x.x,x.y)&&en(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Ix(n,e){let t=n;do{let i=t.prev,s=t.next.next;!xo(i,s)&&Q0(i,t,t.next,s)&&Pa(i,s)&&Pa(s,i)&&(e.push(i.i,t.i,s.i),Ia(t),Ia(t.next),t=n=s),t=t.next}while(t!==n);return mr(t)}function Lx(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hx(o,a)){let l=em(o,a);o=mr(o,o.next),l=mr(l,l.next),Ra(o,e,t,i,s,r,0),Ra(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Dx(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=J0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(zx(c))}s.sort(Nx);for(let r=0;r<s.length;r++)t=Ux(s[r],t);return t}function Nx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Ux(n,e){let t=kx(n,e);if(!t)return e;let i=em(t,n);return mr(i,i.next),mr(t,t.next)}function kx(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(xo(n,t))return t;do{if(xo(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&j0(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);Pa(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Fx(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Fx(n,e){return en(n.prev,n,e.prev)<0&&en(e.next,n,n.next)<0}function Ox(n,e,t,i){let s=n;do s.z===0&&(s.z=_d(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Bx(s)}function Bx(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function _d(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function zx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function j0(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ia(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&j0(n,e,t,i,s,r,o,a)}function Hx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Gx(n,e)&&(Pa(n,e)&&Pa(e,n)&&Vx(n,e)&&(en(n.prev,n,e.prev)||en(n,e.prev,e))||xo(n,e)&&en(n.prev,n,n.next)>0&&en(e.prev,e,e.next)>0)}function en(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function xo(n,e){return n.x===e.x&&n.y===e.y}function Q0(n,e,t,i){let s=ic(en(n,e,t)),r=ic(en(n,e,i)),o=ic(en(t,i,n)),a=ic(en(t,i,e));return!!(s!==r&&o!==a||s===0&&nc(n,t,e)||r===0&&nc(n,i,e)||o===0&&nc(t,n,i)||a===0&&nc(t,e,i))}function nc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ic(n){return n>0?1:n<0?-1:0}function Gx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Q0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Pa(n,e){return en(n.prev,n,n.next)<0?en(n,e,n.next)>=0&&en(n,n.prev,e)>=0:en(n,e,n.prev)<0||en(n,n.next,e)<0}function Vx(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function em(n,e){let t=yd(n.i,n.x,n.y),i=yd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function t0(n,e,t,i){let s=yd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ia(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function yd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wx(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var vd=class{static triangulate(e,t,i=2){return Cx(e,t,i)}},so=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];n0(e),i0(i,e);let o=e.length;t.forEach(n0);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,i0(i,t[l]);let a=vd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function n0(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function i0(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var hs=class n extends $t{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=vt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,d=new D,h=new ue,f=new D,g=new D,y=new D,m=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let b=0;b<=t;b++){let w=i+b*u*s,x=Math.sin(w),E=Math.cos(w);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*x,d.y=e[A].y,d.z=e[A].x*E,o.push(d.x,d.y,d.z),h.x=b/t,h.y=A/(e.length-1),a.push(h.x,h.y);let P=l[3*A+0]*x,_=l[3*A+1],S=l[3*A+0]*E;c.push(P,_,S)}}for(let b=0;b<t;b++)for(let w=0;w<e.length-1;w++){let x=w+b*e.length,E=x,A=x+e.length,P=x+e.length+1,_=x+1;r.push(E,A,_),r.push(P,_,A)}this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("uv",new ht(a,2)),this.setAttribute("normal",new ht(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},gr=class n extends Sc{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},xt=class n extends $t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let b=p*h-o;for(let w=0;w<c;w++){let x=w*d-r;g.push(x,-b,0),y.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let w=b+c*p,x=b+c*(p+1),E=b+1+c*(p+1),A=b+1+c*p;f.push(w,x,A),f.push(x,E,A)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(y,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Fs=class n extends $t{constructor(e=new cs([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(r,3)),this.setAttribute("uv",new ht(o,2));function c(u){let d=s.length/3,h=u.extractPoints(t),f=h.shape,g=h.holes;so.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let b=g[m];so.isClockWise(b)===!0&&(g[m]=b.reverse())}let y=so.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let b=g[m];f=f.concat(b)}for(let m=0,p=f.length;m<p;m++){let b=f[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,p=y.length;m<p;m++){let b=y[m],w=b[0]+d,x=b[1]+d,E=b[2]+d;i.push(w,x,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Xx(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function Xx(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var st=class n extends $t{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new D,h=new D,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let b=[],w=p/i,x=o+w*a,E=e*Math.cos(x),A=Math.sqrt(e*e-E*E),P=0;p===0&&o===0?P=.5/t:p===i&&l===Math.PI&&(P=-.5/t);for(let _=0;_<=t;_++){let S=_/t,R=s+S*r;d.x=-A*Math.cos(R),d.y=E,d.z=A*Math.sin(R),g.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(S+P,1-w),b.push(c++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){let w=u[p][b+1],x=u[p][b],E=u[p+1][b],A=u[p+1][b+1];(p!==0||o>0)&&f.push(w,x,A),(p!==i-1||l<Math.PI)&&f.push(x,E,A)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(y,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Jt=class n extends $t{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new D,f=new D,g=new D;for(let y=0;y<=i;y++){let m=o+y/i*a;for(let p=0;p<=s;p++){let b=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(b),f.y=(e+t*Math.cos(m))*Math.sin(b),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,b=(s+1)*(y-1)+m-1,w=(s+1)*(y-1)+m,x=(s+1)*y+m;l.push(p,b,x),l.push(b,w,x)}this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var La=class n extends $t{constructor(e=new pr(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new ue,u=new D,d=[],h=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ht(d,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(f,2));function y(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),b(),p()}function m(w){u=e.getPointAt(w/t,u);let x=o.normals[w],E=o.binormals[w];for(let A=0;A<=s;A++){let P=A/s*Math.PI*2,_=Math.sin(P),S=-Math.cos(P);l.x=S*x.x+_*E.x,l.y=S*x.y+_*E.y,l.z=S*x.z+_*E.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=t;w++)for(let x=1;x<=s;x++){let E=(s+1)*(w-1)+(x-1),A=(s+1)*w+(x-1),P=(s+1)*w+x,_=(s+1)*(w-1)+x;g.push(E,A,_),g.push(A,P,_)}}function b(){for(let w=0;w<=t;w++)for(let x=0;x<=s;x++)c.x=w/t,c.y=x/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new xd[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Mr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(s0(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(s0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function On(n){let e={};for(let t=0;t<n.length;t++){let i=Mr(n[t]);for(let s in i)e[s]=i[s]}return e}function s0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function qx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var ps={clone:Mr,merge:On},Yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yt=class extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yx,this.fragmentShader=Kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Fe().setHex(s.value);break;case"v2":this.uniforms[i].value=new ue().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Qt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new rt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new At().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},_o=class extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pi=class extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rh,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Cc=class extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Rc=class extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function eo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function hd(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Os=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Pc=class extends Os{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fd,endingEnd:fd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case pd:r=e,a=2*t-i;break;case md:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case pd:o=e,l=2*i-t;break;case md:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,p=-h*m+2*h*y-h*g,b=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,w=(-1-f)*m+(1.5+f)*y+.5*g,x=f*m-f*y;for(let E=0;E!==a;++E)r[E]=p*o[u+E]+b*o[c+E]+w*o[l+E]+x*o[d+E];return r}},Ic=class extends Os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},Lc=class extends Os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Dc=class extends Os{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-t)/(s-t),y=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*y+o[l+m]*g;return r}let h=a*2,f=e-1;for(let g=0;g!==a;++g){let y=o[c+g],m=o[l+g],p=f*h+g*2,b=d[p],w=d[p+1],x=e*h+g*2,E=u[x],A=u[x+1],P=$x(i,t,b,E,s);r[g]=tm(P,y,w,A,m)}return r}};function tm(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Zx(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function $x(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=tm(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Zx(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ni=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=eo(t,this.TimeBufferType),this.values=eo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:eo(e.times,Array),values:eo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),hd(e.settings)&&(i.settings={inTangents:eo(e.settings.inTangents,Array),outTangents:eo(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Dc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case oa:t=this.InterpolantFactoryMethodDiscrete;break;case gc:t=this.InterpolantFactoryMethodLinear;break;case oc:t=this.InterpolantFactoryMethodSmooth;break;case dd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return je("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oa;case this.InterpolantFactoryMethodLinear:return gc;case this.InterpolantFactoryMethodSmooth:return oc;case this.InterpolantFactoryMethodBezier:return dd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;hd(this.settings)&&(r0(this.settings.inTangents,e),r0(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ex(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===oc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[h+g]||y!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,hd(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function r0(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}ni.prototype.ValueTypeName="";ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=gc;var Bs=class extends ni{constructor(e,t,i){super(e,t,i)}};Bs.prototype.ValueTypeName="bool";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=oa;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Nc=class extends ni{constructor(e,t,i,s){super(e,t,i,s)}};Nc.prototype.ValueTypeName="color";var Uc=class extends ni{constructor(e,t,i,s){super(e,t,i,s)}};Uc.prototype.ValueTypeName="number";var kc=class extends Os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)ci.slerpFlat(r,0,o,c-a,o,c,l);return r}},Da=class extends ni{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}};Da.prototype.ValueTypeName="quaternion";Da.prototype.InterpolantFactoryMethodSmooth=void 0;var zs=class extends ni{constructor(e,t,i){super(e,t,i)}};zs.prototype.ValueTypeName="string";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=oa;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Fc=class extends ni{constructor(e,t,i,s){super(e,t,i,s)}};Fc.prototype.ValueTypeName="vector";var Oc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nm=new Oc,Bc=class{constructor(e){this.manager=e!==void 0?e:nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Bc.DEFAULT_MATERIAL_NAME="__DEFAULT";var xr=class extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},us=class extends xr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ud=new At,o0=new D,a0=new D,yo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;o0.setFromMatrixPosition(e.matrixWorld),t.position.copy(o0),a0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(a0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){ud.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ud,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ao||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(ud)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sc=new D,rc=new ci,Bi=new D,Na=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sc,rc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sc,rc,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(sc,rc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sc,rc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ns=new D,l0=new ue,c0=new ue,Mn=class extends Na{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(Bu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z)}getViewSize(e,t){return this.getViewBounds(e,l0,c0),t.subVectors(c0,l0)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bu*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bd=class extends yo{constructor(){super(new Mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=ua*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ua=class extends xr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new bd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Md=class extends yo{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0}},ds=class extends xr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Md}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Hs=class extends Na{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Sd=class extends yo{constructor(){super(new Hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vo=class extends xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new Sd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var to=-90,no=1,zc=class extends fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(to,no,e,t);s.layers=this.layers,this.add(s);let r=new Mn(to,no,e,t);r.layers=this.layers,this.add(r);let o=new Mn(to,no,e,t);o.layers=this.layers,this.add(o);let a=new Mn(to,no,e,t);a.layers=this.layers,this.add(a);let l=new Mn(to,no,e,t);l.layers=this.layers,this.add(l);let c=new Mn(to,no,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Hc=class extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ka=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Jx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Jx(){this._document.hidden===!1&&this.reset()}var Wd="\\[\\]\\.:\\/",jx=new RegExp("["+Wd+"]","g"),Xd="[^"+Wd+"]",Qx="[^"+Wd.replace("\\.","")+"]",e_=/((?:WC+[\/:])*)/.source.replace("WC",Xd),t_=/(WCOD+)?/.source.replace("WCOD",Qx),n_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xd),i_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xd),s_=new RegExp("^"+e_+t_+n_+i_+"$"),r_=["material","materials","bones","map"],Td=class{constructor(e,t,i){let s=i||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Zt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jx,"")}static parseTrackName(e){let t=s_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);r_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=Td;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hS=new Float32Array(1);var h0=new At,Fa=class{constructor(e,t,i=0,s=1/0){this.ray=new po(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return h0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(h0),this}intersectObject(e,t=!0,i=[]){return Ed(e,this,i,t),i.sort(u0),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ed(e[s],this,i,t);return i.sort(u0),i}};function u0(n,e){return n.distance-e.distance}function Ed(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Ed(r[o],e,t,!0)}}var Jd=class Jd{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Jd.prototype.isMatrix2=!0;var wd=Jd;function qd(n,e,t,i){let s=o_(i);switch(t){case Od:return n*e;case Zc:return n*e/s.components*s.byteLength;case $c:return n*e/s.components*s.byteLength;case Ys:return n*e*2/s.components*s.byteLength;case Jc:return n*e*2/s.components*s.byteLength;case Bd:return n*e*3/s.components*s.byteLength;case fi:return n*e*4/s.components*s.byteLength;case jc:return n*e*4/s.components*s.byteLength;case qa:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ka:case Za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eh:case nh:return Math.max(n,16)*Math.max(e,8)/4;case Qc:case th:return Math.max(n,8)*Math.max(e,8)/2;case ih:case sh:case oh:case ah:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rh:case $a:case lh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case uh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case dh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ph:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _h:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Sh:case Th:case Eh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case wh:case Ah:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ja:case Ch:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o_(n){switch(n){case Kn:case Nd:return{byteLength:1,components:1};case Mo:case Ud:case xn:return{byteLength:2,components:1};case Yc:case Kc:return{byteLength:2,components:4};case Li:case qc:case di:return{byteLength:4,components:1};case kd:case Fd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Tm(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function l_(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var c_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,u_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,g_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,__=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,M_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,S_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,R_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,P_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,I_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,L_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,D_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,N_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B_="gl_FragColor = linearToOutputTexel( gl_FragColor );",z_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,q_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,J_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ey=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ty=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ny=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ry=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ay=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ly=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,my=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,by=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,My=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ly=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ky=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,By=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ky=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$y=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_v=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Iv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:c_,alphahash_pars_fragment:h_,alphamap_fragment:u_,alphamap_pars_fragment:d_,alphatest_fragment:f_,alphatest_pars_fragment:p_,aomap_fragment:m_,aomap_pars_fragment:g_,batching_pars_vertex:x_,batching_vertex:__,begin_vertex:y_,beginnormal_vertex:v_,bsdfs:b_,iridescence_fragment:M_,bumpmap_pars_fragment:S_,clipping_planes_fragment:T_,clipping_planes_pars_fragment:E_,clipping_planes_pars_vertex:w_,clipping_planes_vertex:A_,color_fragment:C_,color_pars_fragment:R_,color_pars_vertex:P_,color_vertex:I_,common:L_,cube_uv_reflection_fragment:D_,defaultnormal_vertex:N_,displacementmap_pars_vertex:U_,displacementmap_vertex:k_,emissivemap_fragment:F_,emissivemap_pars_fragment:O_,colorspace_fragment:B_,colorspace_pars_fragment:z_,envmap_fragment:H_,envmap_common_pars_fragment:G_,envmap_pars_fragment:V_,envmap_pars_vertex:W_,envmap_physical_pars_fragment:ty,envmap_vertex:X_,fog_vertex:q_,fog_pars_vertex:Y_,fog_fragment:K_,fog_pars_fragment:Z_,gradientmap_pars_fragment:$_,lightmap_pars_fragment:J_,lights_lambert_fragment:j_,lights_lambert_pars_fragment:Q_,lights_pars_begin:ey,lights_toon_fragment:ny,lights_toon_pars_fragment:iy,lights_phong_fragment:sy,lights_phong_pars_fragment:ry,lights_physical_fragment:oy,lights_physical_pars_fragment:ay,lights_fragment_begin:ly,lights_fragment_maps:cy,lights_fragment_end:hy,lightprobes_pars_fragment:uy,logdepthbuf_fragment:dy,logdepthbuf_pars_fragment:fy,logdepthbuf_pars_vertex:py,logdepthbuf_vertex:my,map_fragment:gy,map_pars_fragment:xy,map_particle_fragment:_y,map_particle_pars_fragment:yy,metalnessmap_fragment:vy,metalnessmap_pars_fragment:by,morphinstance_vertex:My,morphcolor_vertex:Sy,morphnormal_vertex:Ty,morphtarget_pars_vertex:Ey,morphtarget_vertex:wy,normal_fragment_begin:Ay,normal_fragment_maps:Cy,normal_pars_fragment:Ry,normal_pars_vertex:Py,normal_vertex:Iy,normalmap_pars_fragment:Ly,clearcoat_normal_fragment_begin:Dy,clearcoat_normal_fragment_maps:Ny,clearcoat_pars_fragment:Uy,iridescence_pars_fragment:ky,opaque_fragment:Fy,packing:Oy,premultiplied_alpha_fragment:By,project_vertex:zy,dithering_fragment:Hy,dithering_pars_fragment:Gy,roughnessmap_fragment:Vy,roughnessmap_pars_fragment:Wy,shadowmap_pars_fragment:Xy,shadowmap_pars_vertex:qy,shadowmap_vertex:Yy,shadowmask_pars_fragment:Ky,skinbase_vertex:Zy,skinning_pars_vertex:$y,skinning_vertex:Jy,skinnormal_vertex:jy,specularmap_fragment:Qy,specularmap_pars_fragment:ev,tonemapping_fragment:tv,tonemapping_pars_fragment:nv,transmission_fragment:iv,transmission_pars_fragment:sv,uv_pars_fragment:rv,uv_pars_vertex:ov,uv_vertex:av,worldpos_vertex:lv,background_vert:cv,background_frag:hv,backgroundCube_vert:uv,backgroundCube_frag:dv,cube_vert:fv,cube_frag:pv,depth_vert:mv,depth_frag:gv,distance_vert:xv,distance_frag:_v,equirect_vert:yv,equirect_frag:vv,linedashed_vert:bv,linedashed_frag:Mv,meshbasic_vert:Sv,meshbasic_frag:Tv,meshlambert_vert:Ev,meshlambert_frag:wv,meshmatcap_vert:Av,meshmatcap_frag:Cv,meshnormal_vert:Rv,meshnormal_frag:Pv,meshphong_vert:Iv,meshphong_frag:Lv,meshphysical_vert:Dv,meshphysical_frag:Nv,meshtoon_vert:Uv,meshtoon_frag:kv,points_vert:Fv,points_frag:Ov,shadow_vert:Bv,shadow_frag:zv,sprite_vert:Hv,sprite_frag:Gv},Re={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},qi={basic:{uniforms:On([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:On([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:On([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:On([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:On([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:On([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:On([Re.points,Re.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:On([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:On([Re.common,Re.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:On([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:On([Re.sprite,Re.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:On([Re.common,Re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:On([Re.lights,Re.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};qi.physical={uniforms:On([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Lh={r:0,b:0,g:0},Vv=new At,Em=new rt;Em.set(-1,0,0,0,1,0,0,0,1);function Wv(n,e,t,i,s,r){let o=new Fe(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let x=b.backgroundBlurriness>0;w=e.get(w,x)}return w}function g(b){let w=!1,x=f(b);x===null?m(o,a):x&&x.isColor&&(m(x,1),w=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(b,w){let x=f(w);x&&(x.isCubeTexture||x.mapping===Wa)?(c===void 0&&(c=new It(new hi(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:Mr(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Em),c.material.toneMapped=yt.getTransfer(x.colorSpace)!==Pt,(u!==x||d!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new It(new xt(2,2),new Yt({name:"BackgroundMaterial",uniforms:Mr(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=yt.getTransfer(x.colorSpace)!==Pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,w){b.getRGB(Lh,Vd(n)),t.buffers.color.setClear(Lh.r,Lh.g,Lh.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:g,addToRenderList:y,dispose:p}}function Xv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(U,C,N,I,O){let X=!1,K=d(U,I,N,C);r!==K&&(r=K,c(r.object)),X=f(U,I,N,O),X&&g(U,I,N,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(U,C,N,I),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function d(U,C,N,I){let O=I.wireframe===!0,X=i[C.id];X===void 0&&(X={},i[C.id]=X);let K=U.isInstancedMesh===!0?U.id:0,z=X[K];z===void 0&&(z={},X[K]=z);let B=z[N.id];B===void 0&&(B={},z[N.id]=B);let k=B[O];return k===void 0&&(k=h(l()),B[O]=k),k}function h(U){let C=[],N=[],I=[];for(let O=0;O<t;O++)C[O]=0,N[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:I,object:U,attributes:{},index:null}}function f(U,C,N,I){let O=r.attributes,X=C.attributes,K=0,z=N.getAttributes();for(let B in z)if(z[B].location>=0){let V=O[B],he=X[B];if(he===void 0&&(B==="instanceMatrix"&&U.instanceMatrix&&(he=U.instanceMatrix),B==="instanceColor"&&U.instanceColor&&(he=U.instanceColor)),V===void 0||V.attribute!==he||he&&V.data!==he.data)return!0;K++}return r.attributesNum!==K||r.index!==I}function g(U,C,N,I){let O={},X=C.attributes,K=0,z=N.getAttributes();for(let B in z)if(z[B].location>=0){let V=X[B];V===void 0&&(B==="instanceMatrix"&&U.instanceMatrix&&(V=U.instanceMatrix),B==="instanceColor"&&U.instanceColor&&(V=U.instanceColor));let he={};he.attribute=V,V&&V.data&&(he.data=V.data),O[B]=he,K++}r.attributes=O,r.attributesNum=K,r.index=I}function y(){let U=r.newAttributes;for(let C=0,N=U.length;C<N;C++)U[C]=0}function m(U){p(U,0)}function p(U,C){let N=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;N[U]=1,I[U]===0&&(n.enableVertexAttribArray(U),I[U]=1),O[U]!==C&&(n.vertexAttribDivisor(U,C),O[U]=C)}function b(){let U=r.newAttributes,C=r.enabledAttributes;for(let N=0,I=C.length;N<I;N++)C[N]!==U[N]&&(n.disableVertexAttribArray(N),C[N]=0)}function w(U,C,N,I,O,X,K){K===!0?n.vertexAttribIPointer(U,C,N,O,X):n.vertexAttribPointer(U,C,N,I,O,X)}function x(U,C,N,I){y();let O=I.attributes,X=N.getAttributes(),K=C.defaultAttributeValues;for(let z in X){let B=X[z];if(B.location>=0){let k=O[z];if(k===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(k=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(k=U.instanceColor)),k!==void 0){let V=k.normalized,he=k.itemSize,we=e.get(k);if(we===void 0)continue;let gt=we.buffer,it=we.type,lt=we.bytesPerElement,j=it===n.INT||it===n.UNSIGNED_INT||k.gpuType===qc;if(k.isInterleavedBufferAttribute){let re=k.data,Le=re.stride,et=k.offset;if(re.isInstancedInterleavedBuffer){for(let Pe=0;Pe<B.locationSize;Pe++)p(B.location+Pe,re.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Pe=0;Pe<B.locationSize;Pe++)m(B.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let Pe=0;Pe<B.locationSize;Pe++)w(B.location+Pe,he/B.locationSize,it,V,Le*lt,(et+he/B.locationSize*Pe)*lt,j)}else{if(k.isInstancedBufferAttribute){for(let re=0;re<B.locationSize;re++)p(B.location+re,k.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let re=0;re<B.locationSize;re++)m(B.location+re);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let re=0;re<B.locationSize;re++)w(B.location+re,he/B.locationSize,it,V,he*lt,he/B.locationSize*re*lt,j)}}else if(K!==void 0){let V=K[z];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(B.location,V);break;case 3:n.vertexAttrib3fv(B.location,V);break;case 4:n.vertexAttrib4fv(B.location,V);break;default:n.vertexAttrib1fv(B.location,V)}}}}b()}function E(){S();for(let U in i){let C=i[U];for(let N in C){let I=C[N];for(let O in I){let X=I[O];for(let K in X)u(X[K].object),delete X[K];delete I[O]}}delete i[U]}}function A(U){if(i[U.id]===void 0)return;let C=i[U.id];for(let N in C){let I=C[N];for(let O in I){let X=I[O];for(let K in X)u(X[K].object),delete X[K];delete I[O]}}delete i[U.id]}function P(U){for(let C in i){let N=i[C];for(let I in N){let O=N[I];if(O[U.id]===void 0)continue;let X=O[U.id];for(let K in X)u(X[K].object),delete X[K];delete O[U.id]}}}function _(U){for(let C in i){let N=i[C],I=U.isInstancedMesh===!0?U.id:0,O=N[I];if(O!==void 0){for(let X in O){let K=O[X];for(let z in K)u(K[z].object),delete K[z];delete O[X]}delete N[I],Object.keys(N).length===0&&delete i[C]}}}function S(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function qv(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Yv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==fi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let _=P===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Kn&&P!==di&&!_&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:x,maxSamples:E,samples:A}}function Kv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new wi,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let b=r?0:i,w=b*4,x=p.clippingState||null;l.value=x,x=u(g,h,w,f);for(let E=0;E!==w;++E)x[E]=t[E];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,x=f;w!==y;++w,x+=4)o.copy(d[w]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Eo=4,Zv=6,$v=20,Jv=256,ja=new Hs,im=new Fe,jd=null,Qd=0,ef=0,tf=!1,jv=new D,Sr=new D,Ao=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=jv}=r;jd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jd,Qd,ef),this._renderer.xr.enabled=tf,e.scissorTest=!1,To(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:xn,format:fi,colorSpace:aa,depthBuffer:!1},s=sm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sm(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Qv(r)),this._blurMaterial=t1(r,e,t),this._ggxMaterial=e1(r,e,t)}return s}_compileMaterial(e){let t=new It(new $t,e);this._renderer.compile(t,ja)}_sceneToCubeUV(e,t,i,s,r){let l=new Mn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(im),d.toneMapping=Ii,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new It(new hi,new ot({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(im),p=!0);for(let w=0;w<6;w++){let x=w%3;x===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):x===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));let E=this._cubeSize;To(s,x*E,w>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(y,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ws||e.mapping===br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;To(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ja)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-Eo?i-g+Eo:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,To(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(a,ja),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,To(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(a,ja)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-Eo?s-this._lodMax+Eo:0),h=4*(this._cubeSize-u);To(t,d,h,3*u,2*u),o.setRenderTarget(t),o.render(l,ja)}};function Qv(n){let e=[],t=[],i=n,s=n-Eo+1+Zv;for(let r=0;r<s;r++){let o=Math.pow(2,i);e.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),y=new Float32Array(f*h*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,w=p>2?0:-1,x=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];g.set(x,f*h*p);for(let E=0;E<h;E++){let A=u[E*2]*2-1,P=u[E*2+1]*2-1;p===0?Sr.set(1,P,A):p===1?Sr.set(-A,1,-P):p===2?Sr.set(-A,P,1):p===3?Sr.set(-1,P,-A):p===4?Sr.set(-A,-1,P):Sr.set(A,P,-1),Sr.toArray(y,(p*h+E)*f)}}let m=new $t;m.setAttribute("position",new An(g,f)),m.setAttribute("outputDirection",new An(y,f)),t.push(new It(m,null)),i>Eo&&i--}return{lodMeshes:t,sizeLods:e}}function sm(n,e,t){let i=new nn(n,e,t);return i.texture.mapping=Wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function To(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function e1(n,e,t){return new Yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function t1(n,e,t){return new Yt({name:"SphericalGaussianBlur",defines:{SAMPLES:$v,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:kh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function rm(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function om(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function kh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nh=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ba(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new hi(5,5,5),r=new Yt({name:"CubemapFromEquirect",uniforms:Mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:ui});r.uniforms.tEquirect.value=t;let o=new It(s,r),a=t.minFilter;return t.minFilter===Xs&&(t.minFilter=Cn),new zc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function n1(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Vc||f===Wc)if(e.has(h)){let g=e.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new Nh(g.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let f=h.mapping,g=f===Vc||f===Wc,y=f===Ws||f===br;if(g||y){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Ao(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let b=h.image;return g&&b&&b.height>0||y&&b&&l(b)?(i===null&&(i=new Ao(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===Vc?h.mapping=Ws:f===Wc&&(h.mapping=br),h}function l(h){let f=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function i1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&dr("WebGLRenderer: "+i+" extension not supported."),s}}}function s1(n,e,t,i){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let b=f.array;y=f.version;for(let w=0,x=b.length;w<x;w+=3){let E=b[w+0],A=b[w+1],P=b[w+2];h.push(E,A,A,P,P,E)}}else{let b=g.array;y=g.version;for(let w=0,x=b.length/3-1;w<x;w+=3){let E=w+0,A=w+1,P=w+2;h.push(E,A,A,P,P,E)}}let m=new(g.count>=65535?ma:pa)(h,1);m.version=y;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function r1(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=h[m];t.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function o1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function a1(n,e,t){let i=new WeakMap,s=new Qt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let x=a.attributes.position.count*w,E=1;x>e.maxTextureSize&&(E=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let A=new Float32Array(x*E*4*d),P=new da(A,x,E,d);P.type=di,P.needsUpdate=!0;let _=w*4;for(let R=0;R<d;R++){let U=m[R],C=p[R],N=b[R],I=x*E*4*R;for(let O=0;O<U.count;O++){let X=O*_;f===!0&&(s.fromBufferAttribute(U,O),A[I+X+0]=s.x,A[I+X+1]=s.y,A[I+X+2]=s.z,A[I+X+3]=0),g===!0&&(s.fromBufferAttribute(C,O),A[I+X+4]=s.x,A[I+X+5]=s.y,A[I+X+6]=s.z,A[I+X+7]=0),y===!0&&(s.fromBufferAttribute(N,O),A[I+X+8]=s.x,A[I+X+9]=s.y,A[I+X+10]=s.z,A[I+X+11]=N.itemSize===4?s.w:1)}}h={count:d,texture:P,size:new ue(x,E)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function l1(n,e,t,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var c1={[Oa]:"LINEAR_TONE_MAPPING",[Ba]:"REINHARD_TONE_MAPPING",[za]:"CINEON_TONE_MAPPING",[vr]:"ACES_FILMIC_TONE_MAPPING",[Ga]:"AGX_TONE_MAPPING",[Va]:"NEUTRAL_TONE_MAPPING",[Ha]:"CUSTOM_TONE_MAPPING"};function h1(n,e,t,i,s,r){let o=new nn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new $t;c.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ht([0,2,0,0,2,0],2));let u=new _o({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new It(c,u),h=new Hs(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,b=[],w=!1;this.setSize=function(x,E){o.setSize(x,E),a!==null&&a.setSize(x,E),l!==null&&l.setSize(x,E);for(let A=0;A<b.length;A++){let P=b[A];P.setSize&&P.setSize(x,E)}},this.setEffects=function(x){b=x,w=b.length>0&&b[0].isRenderPass===!0;let E=o.width,A=o.height;b.length>0&&a===null&&(a=new nn(E,A,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new nn(E,A,{type:xn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<b.length;P++){let _=b[P];_.setSize&&_.setSize(E,A)}},this.begin=function(x,E){if(y||x.toneMapping===Ii&&b.length===0)return!1;if(p=E,E!==null){let A=E.width,P=E.height;(o.width!==A||o.height!==P)&&this.setSize(A,P)}return w===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=Ii,!0},this.hasRenderPass=function(){return w},this.end=function(x,E){x.toneMapping=m,y=!0;let A=o,P=a;for(let _=0;_<b.length;_++){let S=b[_];S.enabled!==!1&&(S.render(x,P,A,E),S.needsSwap!==!1&&(A=P,P=P===a?l:a))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,u.defines={},yt.getTransfer(f)===Pt&&(u.defines.SRGB_TRANSFER="");let _=c1[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,x.setRenderTarget(p),x.render(d,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var wm=new Wn,rf=new ks(1,1),Am=new da,Cm=new yc,Rm=new ba,am=[],lm=[],cm=new Float32Array(16),hm=new Float32Array(9),um=new Float32Array(4);function Co(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=am[s];if(r===void 0&&(r=new Float32Array(s),am[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function _n(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fh(n,e){let t=lm[e];t===void 0&&(t=new Int32Array(e),lm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function u1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function d1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2fv(this.addr,e),yn(t,e)}}function f1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;n.uniform3fv(this.addr,e),yn(t,e)}}function p1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4fv(this.addr,e),yn(t,e)}}function m1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,i))return;um.set(i),n.uniformMatrix2fv(this.addr,!1,um),yn(t,i)}}function g1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,i))return;hm.set(i),n.uniformMatrix3fv(this.addr,!1,hm),yn(t,i)}}function x1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,i))return;cm.set(i),n.uniformMatrix4fv(this.addr,!1,cm),yn(t,i)}}function _1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function y1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2iv(this.addr,e),yn(t,e)}}function v1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3iv(this.addr,e),yn(t,e)}}function b1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4iv(this.addr,e),yn(t,e)}}function M1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function S1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2uiv(this.addr,e),yn(t,e)}}function T1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3uiv(this.addr,e),yn(t,e)}}function E1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4uiv(this.addr,e),yn(t,e)}}function w1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(rf.compareFunction=t.isReversedDepthBuffer()?Ih:Ph,r=rf):r=wm,t.setTexture2D(e||r,s)}function A1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cm,s)}function C1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Rm,s)}function R1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Am,s)}function P1(n){switch(n){case 5126:return u1;case 35664:return d1;case 35665:return f1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return x1;case 5124:case 35670:return _1;case 35667:case 35671:return y1;case 35668:case 35672:return v1;case 35669:case 35673:return b1;case 5125:return M1;case 36294:return S1;case 36295:return T1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return A1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return R1}}function I1(n,e){n.uniform1fv(this.addr,e)}function L1(n,e){let t=Co(e,this.size,2);n.uniform2fv(this.addr,t)}function D1(n,e){let t=Co(e,this.size,3);n.uniform3fv(this.addr,t)}function N1(n,e){let t=Co(e,this.size,4);n.uniform4fv(this.addr,t)}function U1(n,e){let t=Co(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function k1(n,e){let t=Co(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function F1(n,e){let t=Co(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function O1(n,e){n.uniform1iv(this.addr,e)}function B1(n,e){n.uniform2iv(this.addr,e)}function z1(n,e){n.uniform3iv(this.addr,e)}function H1(n,e){n.uniform4iv(this.addr,e)}function G1(n,e){n.uniform1uiv(this.addr,e)}function V1(n,e){n.uniform2uiv(this.addr,e)}function W1(n,e){n.uniform3uiv(this.addr,e)}function X1(n,e){n.uniform4uiv(this.addr,e)}function q1(n,e,t){let i=this.cache,s=e.length,r=Fh(t,s);_n(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=rf:o=wm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Y1(n,e,t){let i=this.cache,s=e.length,r=Fh(t,s);_n(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Cm,r[o])}function K1(n,e,t){let i=this.cache,s=e.length,r=Fh(t,s);_n(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Rm,r[o])}function Z1(n,e,t){let i=this.cache,s=e.length,r=Fh(t,s);_n(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Am,r[o])}function $1(n){switch(n){case 5126:return I1;case 35664:return L1;case 35665:return D1;case 35666:return N1;case 35674:return U1;case 35675:return k1;case 35676:return F1;case 5124:case 35670:return O1;case 35667:case 35671:return B1;case 35668:case 35672:return z1;case 35669:case 35673:return H1;case 5125:return G1;case 36294:return V1;case 36295:return W1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Z1}}var of=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=P1(t.type)}},af=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$1(t.type)}},lf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},nf=/(\w+)(\])?(\[|\.)?/g;function dm(n,e){n.seq.push(e),n.map[e.id]=e}function J1(n,e,t){let i=n.name,s=i.length;for(nf.lastIndex=0;;){let r=nf.exec(i),o=nf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){dm(t,c===void 0?new of(a,n,e):new af(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new lf(a),dm(t,d)),t=d}}}var wo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);J1(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function fm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var j1=37297,Q1=0;function eb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var pm=new rt;function tb(n){yt._getMatrix(pm,yt.workingColorSpace,n);let e=`mat3( ${pm.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(n)){case la:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function mm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+eb(n.getShaderSource(e),a)}else return r}function nb(n,e){let t=tb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ib={[Oa]:"Linear",[Ba]:"Reinhard",[za]:"Cineon",[vr]:"ACESFilmic",[Ga]:"AgX",[Va]:"Neutral",[Ha]:"Custom"};function sb(n,e){let t=ib[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Dh=new D;function rb(){yt.getLuminanceCoefficients(Dh);let n=Dh.x.toFixed(4),e=Dh.y.toFixed(4),t=Dh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ob(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function ab(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function el(n){return n!==""}function gm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cb=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(n){return n.replace(cb,ub)}var hb=new Map;function ub(n,e){let t=pt[e];if(t===void 0){let i=hb.get(e);if(i!==void 0)t=pt[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cf(t)}var db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(n){return n.replace(db,fb)}function fb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ym(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var pb={[_r]:"SHADOWMAP_TYPE_PCF",[bo]:"SHADOWMAP_TYPE_VSM"};function mb(n){return pb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var gb={[Ws]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE",[Wa]:"ENVMAP_TYPE_CUBE_UV"};function xb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":gb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var _b={[br]:"ENVMAP_MODE_REFRACTION"};function yb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":_b[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vb={[Ld]:"ENVMAP_BLENDING_MULTIPLY",[D0]:"ENVMAP_BLENDING_MIX",[N0]:"ENVMAP_BLENDING_ADD"};function bb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":vb[n.combine]||"ENVMAP_BLENDING_NONE"}function Mb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Sb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=mb(t),c=xb(t),u=yb(t),d=bb(t),h=Mb(t),f=ob(t),g=ab(r),y=s.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(el).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(el).join(`
`),p.length>0&&(p+=`
`)):(m=[ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),p=[ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?pt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?sb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,nb("linearToOutputTexel",t.outputColorSpace),rb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(el).join(`
`)),o=cf(o),o=gm(o,t),o=xm(o,t),a=cf(a),a=gm(a,t),a=xm(a,t),o=_m(o),a=_m(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=b+m+o,x=b+p+a,E=fm(s,s.VERTEX_SHADER,w),A=fm(s,s.FRAGMENT_SHADER,x);s.attachShader(y,E),s.attachShader(y,A),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(U){if(n.debug.checkShaderErrors){let C=s.getProgramInfoLog(y)||"",N=s.getShaderInfoLog(E)||"",I=s.getShaderInfoLog(A)||"",O=C.trim(),X=N.trim(),K=I.trim(),z=!0,B=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,E,A);else{let k=mm(s,E,"vertex"),V=mm(s,A,"fragment");Je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+O+`
`+k+`
`+V)}else O!==""?je("WebGLProgram: Program Info Log:",O):(X===""||K==="")&&(B=!1);B&&(U.diagnostics={runnable:z,programLog:O,vertexShader:{log:X,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(E),s.deleteShader(A),_=new wo(s,y),S=lb(s,y)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(y,j1)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=A,this}var Tb=0,hf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new uf(e),t.set(e,i)),i}},uf=class{constructor(e){this.id=Tb++,this.code=e,this.usedTimes=0}};function Eb(n){return n===Ys||n===$a||n===Ja}function wb(n,e,t,i,s,r){let o=new ho,a=new hf,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,S,R,U,C,N){let I=U.fog,O=C.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=e.get(_.envMap||X,K),B=z&&z.mapping===Wa?z.image.height:null,k=f[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&je("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let V=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,he=V!==void 0?V.length:0,we=0;O.morphAttributes.position!==void 0&&(we=1),O.morphAttributes.normal!==void 0&&(we=2),O.morphAttributes.color!==void 0&&(we=3);let gt,it,lt,j;if(k){let Xt=qi[k];gt=Xt.vertexShader,it=Xt.fragmentShader}else{gt=_.vertexShader,it=_.fragmentShader;let Xt=a.getVertexShaderStage(_),Dt=a.getFragmentShaderStage(_);a.update(_,Xt,Dt),lt=Xt.id,j=Dt.id}let re=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),et=C.isInstancedMesh===!0,Pe=C.isBatchedMesh===!0,tt=!!_.map,pe=!!_.matcap,de=!!z,Ne=!!_.aoMap,ye=!!_.lightMap,Ue=!!_.bumpMap&&_.wireframe===!1,dt=!!_.normalMap,Et=!!_.displacementMap,mn=!!_.emissiveMap,Wt=!!_.metalnessMap,hn=!!_.roughnessMap,G=_.anisotropy>0,Dn=_.clearcoat>0,Ut=_.dispersion>0,L=_.retroreflectivity>0,v=_.iridescence>0,W=_.sheen>0,Z=_.transmission>0,te=G&&!!_.anisotropyMap,me=Dn&&!!_.clearcoatMap,be=Dn&&!!_.clearcoatNormalMap,ne=Dn&&!!_.clearcoatRoughnessMap,oe=v&&!!_.iridescenceMap,Me=v&&!!_.iridescenceThicknessMap,Xe=W&&!!_.sheenColorMap,Ce=W&&!!_.sheenRoughnessMap,Se=!!_.specularMap,qe=!!_.specularColorMap,$e=!!_.specularIntensityMap,ct=Z&&!!_.transmissionMap,H=Z&&!!_.thicknessMap,Te=!!_.gradientMap,se=!!_.alphaMap,Ee=_.alphaTest>0,ke=!!_.alphaHash,ce=!!_.extensions,Ye=Ii;_.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ye=n.toneMapping);let Ge={shaderID:k,shaderType:_.type,shaderName:_.name,vertexShader:gt,fragmentShader:it,defines:_.defines,customVertexShaderID:lt,customFragmentShaderID:j,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Pe,batchingColor:Pe&&C._colorsTexture!==null,instancing:et,instancingColor:et&&C.instanceColor!==null,instancingMorph:et&&C.morphTexture!==null,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:tt,matcap:pe,envMap:de,envMapMode:de&&z.mapping,envMapCubeUVHeight:B,aoMap:Ne,lightMap:ye,bumpMap:Ue,normalMap:dt,displacementMap:Et,emissiveMap:mn,normalMapObjectSpace:dt&&_.normalMapType===F0,normalMapTangentSpace:dt&&_.normalMapType===Rh,packedNormalMap:dt&&_.normalMapType===Rh&&Eb(_.normalMap.format),metalnessMap:Wt,roughnessMap:hn,anisotropy:G,anisotropyMap:te,clearcoat:Dn,clearcoatMap:me,clearcoatNormalMap:be,clearcoatRoughnessMap:ne,dispersion:Ut,retroreflection:L,iridescence:v,iridescenceMap:oe,iridescenceThicknessMap:Me,sheen:W,sheenColorMap:Xe,sheenRoughnessMap:Ce,specularMap:Se,specularColorMap:qe,specularIntensityMap:$e,transmission:Z,transmissionMap:ct,thicknessMap:H,gradientMap:Te,opaque:_.transparent===!1&&_.blending===Vs&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:Ee,alphaHash:ke,combine:_.combine,mapUv:tt&&g(_.map.channel),aoMapUv:Ne&&g(_.aoMap.channel),lightMapUv:ye&&g(_.lightMap.channel),bumpMapUv:Ue&&g(_.bumpMap.channel),normalMapUv:dt&&g(_.normalMap.channel),displacementMapUv:Et&&g(_.displacementMap.channel),emissiveMapUv:mn&&g(_.emissiveMap.channel),metalnessMapUv:Wt&&g(_.metalnessMap.channel),roughnessMapUv:hn&&g(_.roughnessMap.channel),anisotropyMapUv:te&&g(_.anisotropyMap.channel),clearcoatMapUv:me&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:be&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(_.sheenRoughnessMap.channel),specularMapUv:Se&&g(_.specularMap.channel),specularColorMapUv:qe&&g(_.specularColorMap.channel),specularIntensityMapUv:$e&&g(_.specularIntensityMap.channel),transmissionMapUv:ct&&g(_.transmissionMap.channel),thicknessMapUv:H&&g(_.thicknessMap.channel),alphaMapUv:se&&g(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(dt||G),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!O.attributes.uv&&(tt||se),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&dt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Le,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:we,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:tt&&_.map.isVideoTexture===!0&&yt.getTransfer(_.map.colorSpace)===Pt,decodeVideoTextureEmissive:mn&&_.emissiveMap.isVideoTexture===!0&&yt.getTransfer(_.emissiveMap.colorSpace)===Pt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ht,flipSided:_.side===gn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ce&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&_.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function m(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)S.push(R),S.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(S,_),b(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function b(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){let S=f[_.type],R;if(S){let U=qi[S];R=ps.clone(U.uniforms)}else R=_.uniforms;return R}function x(_,S){let R=u.get(S);return R!==void 0?++R.usedTimes:(R=new Sb(n,S,_,s),c.push(R),u.set(S,R)),R}function E(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){a.remove(_)}function P(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:x,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:P}}function Ab(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Cb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function vm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,y,m,p){let b=n[e];return b===void 0?(b={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},n[e]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=g,b.materialVariant=o(h),b.groupOrder=y,b.renderOrder=h.renderOrder,b.z=m,b.group=p),e++,b}function l(h,f,g,y,m,p,b){b.reversedDepth===!0&&(m=-m);let w=a(h,f,g,y,m,p);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):t.push(w)}function c(h,f,g,y,m,p){let b=a(h,f,g,y,m,p);g.transmission>0?i.unshift(b):g.transparent===!0?s.unshift(b):t.unshift(b)}function u(h,f){t.length>1&&t.sort(h||Cb),i.length>1&&i.sort(f||vm),s.length>1&&s.sort(f||vm)}function d(){for(let h=e,f=n.length;h<f;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Rb(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new bm,n.set(i,[o])):s>=r.length?(o=new bm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Pb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Fe};break;case"SpotLight":t={position:new D,direction:new D,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Ib(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Lb=0;function Db(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Nb(n){let e=new Pb,t=Ib(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new At,o=new At;function a(c){let u=0,d=0,h=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,b=0,w=0,x=0,E=0,A=0,P=0,_=0,S=0,R=0;c.sort(Db);for(let C=0,N=c.length;C<N;C++){let I=c[C],O=I.color,X=I.intensity,K=I.distance,z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ys?z=I.shadow.map.texture:z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=O.r*X,d+=O.g*X,h+=O.b*X;else if(I.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(I.sh.coefficients[B],X);R++}else if(I.isSunLight){let B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let k=I.shadow,V=t.get(I);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),i.sunShadow[g]=V,i.sunShadowMap[g]=z;let he=k.getViewportCount();for(let we=0;we<he;we++)i.sunShadowMatrix[y+we]=k.getMatrix(we),i.sunShadowCascade[y+we]=k._cascadeData[we];y+=he,g++}i.sun[f]=B,f++}else if(I.isDirectionalLight){let B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let k=I.shadow,V=t.get(I);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=z,i.directionalShadowMatrix[m]=I.shadow.matrix,E++}i.directional[m]=B,m++}else if(I.isSpotLight){let B=e.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(O).multiplyScalar(X),B.distance=K,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,i.spot[b]=B;let k=I.shadow;if(I.map&&(i.spotLightMap[_]=I.map,_++,k.updateMatrices(I),I.castShadow&&S++),i.spotLightMatrix[b]=k.matrix,I.castShadow){let V=t.get(I);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,i.spotShadow[b]=V,i.spotShadowMap[b]=z,P++}b++}else if(I.isRectAreaLight){let B=e.get(I);B.color.copy(O).multiplyScalar(X),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),i.rectArea[w]=B,w++}else if(I.isPointLight){let B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){let k=I.shadow,V=t.get(I);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,V.shadowCameraNear=k.camera.near,V.shadowCameraFar=k.camera.far,i.pointShadow[p]=V,i.pointShadowMap[p]=z,i.pointShadowMatrix[p]=I.shadow.matrix,A++}i.point[p]=B,p++}else if(I.isHemisphereLight){let B=e.get(I);B.skyColor.copy(I.color).multiplyScalar(X),B.groundColor.copy(I.groundColor).multiplyScalar(X),i.hemi[x]=B,x++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let U=i.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==b||U.rectAreaLength!==w||U.hemiLength!==x||U.numSunShadows!==g||U.numDirectionalShadows!==E||U.numPointShadows!==A||U.numSpotShadows!==P||U.numSpotMaps!==_||U.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=b,i.rectArea.length=w,i.point.length=p,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+_-S,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=R,U.sunLength=f,U.directionalLength=m,U.pointLength=p,U.spotLength=b,U.rectAreaLength=w,U.hemiLength=x,U.numSunShadows=g,U.numDirectionalShadows=E,U.numPointShadows=A,U.numSpotShadows=P,U.numSpotMaps=_,U.numLightProbes=R,i.version=Lb++)}function l(c,u){let d=0,h=0,f=0,g=0,y=0,m=0,p=u.matrixWorldInverse;for(let b=0,w=c.length;b<w;b++){let x=c[b];if(x.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(p),d++}else if(x.isDirectionalLight){let E=i.directional[h];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(x.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let E=i.rectArea[y];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:i}}function Mm(n){let e=new Nb(n),t=[],i=[],s=[];function r(h){d.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Ub(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Mm(n),e.set(s,[a])):r>=o.length?(a=new Mm(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ob=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Bb=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Sm=new At,Qa=new D,sf=new D;function zb(n,e,t){let i=new mo,s=new ue,r=new ue,o=new Qt,a=new Cc,l=new Rc,c={},u=t.maxTextureSize,d={[Gs]:gn,[gn]:Gs,[Ht]:Ht},h=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:kb,fragmentShader:Fb}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new $t;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new It(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_r;let p=this.type;this.render=function(A,P,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===p0&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_r);let S=n.getRenderTarget(),R=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),C=n.state;C.setBlending(ui),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let N=p!==this.type;N&&P.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=A.length;I<O;I++){let X=A[I],K=X.shadow;if(K===void 0){je("WebGLShadowMap:",X,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let z=K.getFrameExtents();s.multiply(z),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/z.x),s.x=r.x*z.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/z.y),s.y=r.y*z.y,K.mapSize.y=r.y));let B=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=B,K.map===null||N===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===bo){if(X.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new nn(s.x,s.y,{format:Ys,type:xn,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),K.map.texture.name=X.name+".shadowMap",K.map.depthTexture=new ks(s.x,s.y,di),K.map.depthTexture.name=X.name+".shadowMapDepth",K.map.depthTexture.format=Gi,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Sn,K.map.depthTexture.magFilter=Sn}else X.isPointLight?(K.map=new Nh(s.x),K.map.depthTexture=new Mc(s.x,Li)):(K.map=new nn(s.x,s.y),K.map.depthTexture=new ks(s.x,s.y,Li)),K.map.depthTexture.name=X.name+".shadowMap",K.map.depthTexture.format=Gi,this.type===_r?(K.map.depthTexture.compareFunction=B?Ih:Ph,K.map.depthTexture.minFilter=Cn,K.map.depthTexture.magFilter=Cn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Sn,K.map.depthTexture.magFilter=Sn);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let k=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();X.isPointLight!==!0&&K.updateMatrices(X,_);for(let V=0;V<k;V++){let he=K.getCamera(V);if(X.isPointLight){let we=K.camera,gt=K.matrix,it=X.distance||we.far;it!==we.far&&(we.far=it,we.updateProjectionMatrix()),Qa.setFromMatrixPosition(X.matrixWorld),we.position.copy(Qa),sf.copy(we.position),sf.add(Ob[V]),we.up.copy(Bb[V]),we.lookAt(sf),we.updateMatrixWorld(),gt.makeTranslation(-Qa.x,-Qa.y,-Qa.z),Sm.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Sm,we.coordinateSystem,we.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,V),n.clear();else{V===0&&(n.setRenderTarget(K.map),n.clear());let we=K.getViewport(V);o.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),C.viewport(o)}i=K.getFrustum(V),x(P,_,he,X,this.type)}K.isPointLightShadow!==!0&&this.type===bo&&b(K,_),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,R,U)};function b(A,P){let _=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new nn(s.x,s.y,{format:Ys,type:xn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,_,h,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,_,f,y,null)}function w(A,P,_,S){let R=null,U=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)R=U;else if(R=_.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let C=R.uuid,N=P.uuid,I=c[C];I===void 0&&(I={},c[C]=I);let O=I[N];O===void 0&&(O=R.clone(),I[N]=O,P.addEventListener("dispose",E)),R=O}if(R.visible=P.visible,R.wireframe=P.wireframe,S===bo?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:d[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let C=n.properties.get(R);C.light=_}return R}function x(A,P,_,S,R){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&R===bo)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);let N=e.update(A),I=A.material;if(Array.isArray(I)){let O=N.groups;for(let X=0,K=O.length;X<K;X++){let z=O[X],B=I[z.materialIndex];if(B&&B.visible){let k=w(A,B,S,R);A.onBeforeShadow(n,A,P,_,N,k,z),n.renderBufferDirect(_,null,N,k,A,z),A.onAfterShadow(n,A,P,_,N,k,z)}}}else if(I.visible){let O=w(A,I,S,R);A.onBeforeShadow(n,A,P,_,N,O,null),n.renderBufferDirect(_,null,N,O,A,null),A.onAfterShadow(n,A,P,_,N,O,null)}}let C=A.children;for(let N=0,I=C.length;N<I;N++)x(C[N],P,_,S,R)}function E(A){A.target.removeEventListener("dispose",E);for(let _ in c){let S=c[_],R=A.target.uuid;R in S&&(S[R].dispose(),delete S[R])}}}function Hb(n,e){function t(){let H=!1,Te=new Qt,se=null,Ee=new Qt(0,0,0,0);return{setMask:function(ke){se!==ke&&!H&&(n.colorMask(ke,ke,ke,ke),se=ke)},setLocked:function(ke){H=ke},setClear:function(ke,ce,Ye,Ge,Xt){Xt===!0&&(ke*=Ge,ce*=Ge,Ye*=Ge),Te.set(ke,ce,Ye,Ge),Ee.equals(Te)===!1&&(n.clearColor(ke,ce,Ye,Ge),Ee.copy(Te))},reset:function(){H=!1,se=null,Ee.set(-1,0,0,0)}}}function i(){let H=!1,Te=!1,se=null,Ee=null,ke=null;return{setReversed:function(ce){if(Te!==ce){let Ye=e.get("EXT_clip_control");ce?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Te=ce;let Ge=ke;ke=null,this.setClear(Ge)}},getReversed:function(){return Te},setTest:function(ce){ce?re(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(ce){se!==ce&&!H&&(n.depthMask(ce),se=ce)},setFunc:function(ce){if(Te&&(ce=K0[ce]),Ee!==ce){switch(ce){case lc:n.depthFunc(n.NEVER);break;case cc:n.depthFunc(n.ALWAYS);break;case hc:n.depthFunc(n.LESS);break;case ro:n.depthFunc(n.LEQUAL);break;case uc:n.depthFunc(n.EQUAL);break;case dc:n.depthFunc(n.GEQUAL);break;case fc:n.depthFunc(n.GREATER);break;case pc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=ce}},setLocked:function(ce){H=ce},setClear:function(ce){ke!==ce&&(ke=ce,Te&&(ce=1-ce),n.clearDepth(ce))},reset:function(){H=!1,se=null,Ee=null,ke=null,Te=!1}}}function s(){let H=!1,Te=null,se=null,Ee=null,ke=null,ce=null,Ye=null,Ge=null,Xt=null;return{setTest:function(Dt){H||(Dt?re(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(Dt){Te!==Dt&&!H&&(n.stencilMask(Dt),Te=Dt)},setFunc:function(Dt,Mi,Fi){(se!==Dt||Ee!==Mi||ke!==Fi)&&(n.stencilFunc(Dt,Mi,Fi),se=Dt,Ee=Mi,ke=Fi)},setOp:function(Dt,Mi,Fi){(ce!==Dt||Ye!==Mi||Ge!==Fi)&&(n.stencilOp(Dt,Mi,Fi),ce=Dt,Ye=Mi,Ge=Fi)},setLocked:function(Dt){H=Dt},setClear:function(Dt){Xt!==Dt&&(n.clearStencil(Dt),Xt=Dt)},reset:function(){H=!1,Te=null,se=null,Ee=null,ke=null,ce=null,Ye=null,Ge=null,Xt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,b=null,w=null,x=null,E=null,A=null,P=null,_=new Fe(0,0,0),S=0,R=!1,U=null,C=null,N=null,I=null,O=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,z=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(B)[1]),K=z>=1):B.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),K=z>=2);let k=null,V={},he=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),gt=new Qt().fromArray(he),it=new Qt().fromArray(we);function lt(H,Te,se,Ee){let ke=new Uint8Array(4),ce=n.createTexture();n.bindTexture(H,ce),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<se;Ye++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(Te+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return ce}let j={};j[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(n.DEPTH_TEST),o.setFunc(ro),Ue(!1),dt(Ad),re(n.CULL_FACE),Ne(ui);function re(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function Le(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function et(H,Te){return h[H]!==Te?(n.bindFramebuffer(H,Te),h[H]=Te,H===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Te),H===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function Pe(H,Te){let se=g,Ee=!1;if(H){se=f.get(Te),se===void 0&&(se=[],f.set(Te,se));let ke=H.textures;if(se.length!==ke.length||se[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Ye=ke.length;ce<Ye;ce++)se[ce]=n.COLOR_ATTACHMENT0+ce;se.length=ke.length,Ee=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,Ee=!0);Ee&&n.drawBuffers(se)}function tt(H){return y!==H?(n.useProgram(H),y=H,!0):!1}let pe={[yr]:n.FUNC_ADD,[g0]:n.FUNC_SUBTRACT,[x0]:n.FUNC_REVERSE_SUBTRACT};pe[_0]=n.MIN,pe[y0]=n.MAX;let de={[v0]:n.ZERO,[b0]:n.ONE,[M0]:n.SRC_COLOR,[Pd]:n.SRC_ALPHA,[C0]:n.SRC_ALPHA_SATURATE,[w0]:n.DST_COLOR,[T0]:n.DST_ALPHA,[S0]:n.ONE_MINUS_SRC_COLOR,[Id]:n.ONE_MINUS_SRC_ALPHA,[A0]:n.ONE_MINUS_DST_COLOR,[E0]:n.ONE_MINUS_DST_ALPHA,[R0]:n.CONSTANT_COLOR,[P0]:n.ONE_MINUS_CONSTANT_COLOR,[I0]:n.CONSTANT_ALPHA,[L0]:n.ONE_MINUS_CONSTANT_ALPHA};function Ne(H,Te,se,Ee,ke,ce,Ye,Ge,Xt,Dt){if(H===ui){m===!0&&(Le(n.BLEND),m=!1);return}if(m===!1&&(re(n.BLEND),m=!0),H!==m0){if(H!==p||Dt!==R){if((b!==yr||E!==yr)&&(n.blendEquation(n.FUNC_ADD),b=yr,E=yr),Dt)switch(H){case Vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tn:n.blendFunc(n.ONE,n.ONE);break;case Cd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Je("WebGLState: Invalid blending: ",H);break}else switch(H){case Vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Cd:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rd:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",H);break}w=null,x=null,A=null,P=null,_.set(0,0,0),S=0,p=H,R=Dt}return}ke=ke||Te,ce=ce||se,Ye=Ye||Ee,(Te!==b||ke!==E)&&(n.blendEquationSeparate(pe[Te],pe[ke]),b=Te,E=ke),(se!==w||Ee!==x||ce!==A||Ye!==P)&&(n.blendFuncSeparate(de[se],de[Ee],de[ce],de[Ye]),w=se,x=Ee,A=ce,P=Ye),(Ge.equals(_)===!1||Xt!==S)&&(n.blendColor(Ge.r,Ge.g,Ge.b,Xt),_.copy(Ge),S=Xt),p=H,R=!1}function ye(H,Te){H.side===Ht?Le(n.CULL_FACE):re(n.CULL_FACE);let se=H.side===gn;Te&&(se=!se),Ue(se),H.blending===Vs&&H.transparent===!1?Ne(ui):Ne(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Ee=H.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),mn(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(H){U!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),U=H)}function dt(H){H!==d0?(re(n.CULL_FACE),H!==C&&(H===Ad?n.cullFace(n.BACK):H===f0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),C=H}function Et(H){H!==N&&(K&&n.lineWidth(H),N=H)}function mn(H,Te,se){H?(re(n.POLYGON_OFFSET_FILL),(I!==Te||O!==se)&&(I=Te,O=se,o.getReversed()&&(Te=-Te),n.polygonOffset(Te,se))):Le(n.POLYGON_OFFSET_FILL)}function Wt(H){H?re(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function hn(H){H===void 0&&(H=n.TEXTURE0+X-1),k!==H&&(n.activeTexture(H),k=H)}function G(H,Te,se){se===void 0&&(k===null?se=n.TEXTURE0+X-1:se=k);let Ee=V[se];Ee===void 0&&(Ee={type:void 0,texture:void 0},V[se]=Ee),(Ee.type!==H||Ee.texture!==Te)&&(k!==se&&(n.activeTexture(se),k=se),n.bindTexture(H,Te||j[H]),Ee.type=H,Ee.texture=Te)}function Dn(){let H=V[k];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ut(){try{n.compressedTexImage2D(...arguments)}catch(H){Je("WebGLState:",H)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(H){Je("WebGLState:",H)}}function v(){try{n.texSubImage2D(...arguments)}catch(H){Je("WebGLState:",H)}}function W(){try{n.texSubImage3D(...arguments)}catch(H){Je("WebGLState:",H)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Je("WebGLState:",H)}}function te(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Je("WebGLState:",H)}}function me(){try{n.texStorage2D(...arguments)}catch(H){Je("WebGLState:",H)}}function be(){try{n.texStorage3D(...arguments)}catch(H){Je("WebGLState:",H)}}function ne(){try{n.texImage2D(...arguments)}catch(H){Je("WebGLState:",H)}}function oe(){try{n.texImage3D(...arguments)}catch(H){Je("WebGLState:",H)}}function Me(H){return d[H]!==void 0?d[H]:n.getParameter(H)}function Xe(H,Te){d[H]!==Te&&(n.pixelStorei(H,Te),d[H]=Te)}function Ce(H){gt.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),gt.copy(H))}function Se(H){it.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),it.copy(H))}function qe(H,Te){let se=c.get(Te);se===void 0&&(se=new WeakMap,c.set(Te,se));let Ee=se.get(H);Ee===void 0&&(Ee=n.getUniformBlockIndex(Te,H.name),se.set(H,Ee))}function $e(H,Te){let Ee=c.get(Te).get(H);l.get(Te)!==Ee&&(n.uniformBlockBinding(Te,Ee,H.__bindingPointIndex),l.set(Te,Ee))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},k=null,V={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,b=null,w=null,x=null,E=null,A=null,P=null,_=new Fe(0,0,0),S=0,R=!1,U=null,C=null,N=null,I=null,O=null,gt.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:Le,bindFramebuffer:et,drawBuffers:Pe,useProgram:tt,setBlending:Ne,setMaterial:ye,setFlipSided:Ue,setCullFace:dt,setLineWidth:Et,setPolygonOffset:mn,setScissorTest:Wt,activeTexture:hn,bindTexture:G,unbindTexture:Dn,compressedTexImage2D:Ut,compressedTexImage3D:L,texImage2D:ne,texImage3D:oe,pixelStorei:Xe,getParameter:Me,updateUBOMapping:qe,uniformBlockBinding:$e,texStorage2D:me,texStorage3D:be,texSubImage2D:v,texSubImage3D:W,compressedTexSubImage2D:Z,compressedTexSubImage3D:te,scissor:Ce,viewport:Se,reset:ct}}function Gb(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,v){return g?new OffscreenCanvas(L,v):ca("canvas")}function m(L,v,W){let Z=1,te=Ut(L);if((te.width>W||te.height>W)&&(Z=W/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let me=Math.floor(Z*te.width),be=Math.floor(Z*te.height);h===void 0&&(h=y(me,be));let ne=v?y(me,be):h;return ne.width=me,ne.height=be,ne.getContext("2d").drawImage(L,0,0,me,be),je("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+me+"x"+be+")."),ne}else return"data"in L&&je("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),L;return L}function p(L){return L.generateMipmaps}function b(L){n.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(L,v,W,Z,te,me=!1){if(L!==null){if(n[L]!==void 0)return n[L];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let be;Z&&(be=e.get("EXT_texture_norm16"),be||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=v;if(v===n.RED&&(W===n.FLOAT&&(ne=n.R32F),W===n.HALF_FLOAT&&(ne=n.R16F),W===n.UNSIGNED_BYTE&&(ne=n.R8),W===n.UNSIGNED_SHORT&&be&&(ne=be.R16_EXT),W===n.SHORT&&be&&(ne=be.R16_SNORM_EXT)),v===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ne=n.R8UI),W===n.UNSIGNED_SHORT&&(ne=n.R16UI),W===n.UNSIGNED_INT&&(ne=n.R32UI),W===n.BYTE&&(ne=n.R8I),W===n.SHORT&&(ne=n.R16I),W===n.INT&&(ne=n.R32I)),v===n.RG&&(W===n.FLOAT&&(ne=n.RG32F),W===n.HALF_FLOAT&&(ne=n.RG16F),W===n.UNSIGNED_BYTE&&(ne=n.RG8),W===n.UNSIGNED_SHORT&&be&&(ne=be.RG16_EXT),W===n.SHORT&&be&&(ne=be.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(ne=n.RG8UI),W===n.UNSIGNED_SHORT&&(ne=n.RG16UI),W===n.UNSIGNED_INT&&(ne=n.RG32UI),W===n.BYTE&&(ne=n.RG8I),W===n.SHORT&&(ne=n.RG16I),W===n.INT&&(ne=n.RG32I)),v===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),W===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),W===n.UNSIGNED_INT&&(ne=n.RGB32UI),W===n.BYTE&&(ne=n.RGB8I),W===n.SHORT&&(ne=n.RGB16I),W===n.INT&&(ne=n.RGB32I)),v===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),W===n.UNSIGNED_INT&&(ne=n.RGBA32UI),W===n.BYTE&&(ne=n.RGBA8I),W===n.SHORT&&(ne=n.RGBA16I),W===n.INT&&(ne=n.RGBA32I)),v===n.RGB&&(W===n.UNSIGNED_SHORT&&be&&(ne=be.RGB16_EXT),W===n.SHORT&&be&&(ne=be.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),v===n.RGBA){let oe=me?la:yt.getTransfer(te);W===n.FLOAT&&(ne=n.RGBA32F),W===n.HALF_FLOAT&&(ne=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ne=oe===Pt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&be&&(ne=be.RGBA16_EXT),W===n.SHORT&&be&&(ne=be.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function E(L,v){let W;return L?v===null||v===Li||v===So?W=n.DEPTH24_STENCIL8:v===di?W=n.DEPTH32F_STENCIL8:v===Mo&&(W=n.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Li||v===So?W=n.DEPTH_COMPONENT24:v===di?W=n.DEPTH_COMPONENT32F:v===Mo&&(W=n.DEPTH_COMPONENT16),W}function A(L,v){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==Sn&&L.minFilter!==Cn?Math.log2(Math.max(v.width,v.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?v.mipmaps.length:1}function P(L){let v=L.target;v.removeEventListener("dispose",P),S(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function _(L){let v=L.target;v.removeEventListener("dispose",_),U(v)}function S(L){let v=i.get(L);if(v.__webglInit===void 0)return;let W=L.source,Z=f.get(W);if(Z){let te=Z[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(L),Object.keys(Z).length===0&&f.delete(W)}i.remove(L)}function R(L){let v=i.get(L);n.deleteTexture(v.__webglTexture);let W=L.source,Z=f.get(W);delete Z[v.__cacheKey],o.memory.textures--}function U(L){let v=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let te=0;te<v.__webglFramebuffer[Z].length;te++)n.deleteFramebuffer(v.__webglFramebuffer[Z][te]);else n.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[Z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let W=L.textures;for(let Z=0,te=W.length;Z<te;Z++){let me=i.get(W[Z]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(W[Z])}i.remove(L)}let C=0;function N(){C=0}function I(){return C}function O(L){C=L}function X(){let L=C;return L>=s.maxTextures&&je("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,L}function K(L){let v=[];return v.push(L.wrapS),v.push(L.wrapT),v.push(L.wrapR||0),v.push(L.magFilter),v.push(L.minFilter),v.push(L.anisotropy),v.push(L.internalFormat),v.push(L.format),v.push(L.type),v.push(L.generateMipmaps),v.push(L.premultiplyAlpha),v.push(L.flipY),v.push(L.unpackAlignment),v.push(L.colorSpace),v.join()}function z(L,v){let W=i.get(L);if(L.isVideoTexture&&G(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){let Z=L.image;if(Z===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(W,L,v);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+v)}function B(L,v){let W=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){Le(W,L,v);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+v)}function k(L,v){let W=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){Le(W,L,v);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+v)}function V(L,v){let W=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){et(W,L,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+v)}let he={[oo]:n.REPEAT,[Hi]:n.CLAMP_TO_EDGE,[mc]:n.MIRRORED_REPEAT},we={[Sn]:n.NEAREST,[U0]:n.NEAREST_MIPMAP_NEAREST,[Xa]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[Xc]:n.LINEAR_MIPMAP_NEAREST,[Xs]:n.LINEAR_MIPMAP_LINEAR},gt={[B0]:n.NEVER,[W0]:n.ALWAYS,[z0]:n.LESS,[Ph]:n.LEQUAL,[H0]:n.EQUAL,[Ih]:n.GEQUAL,[G0]:n.GREATER,[V0]:n.NOTEQUAL};function it(L,v){if(v.type===di&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Cn||v.magFilter===Xc||v.magFilter===Xa||v.magFilter===Xs||v.minFilter===Cn||v.minFilter===Xc||v.minFilter===Xa||v.minFilter===Xs)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,he[v.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,he[v.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,he[v.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,we[v.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,we[v.minFilter]),v.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,gt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Sn||v.minFilter!==Xa&&v.minFilter!==Xs||v.type===di&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function lt(L,v){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,v.addEventListener("dispose",P));let Z=v.source,te=f.get(Z);te===void 0&&(te={},f.set(Z,te));let me=K(v);if(me!==L.__cacheKey){te[me]===void 0&&(te[me]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),te[me].usedTimes++;let be=te[L.__cacheKey];be!==void 0&&(te[L.__cacheKey].usedTimes--,be.usedTimes===0&&R(v)),L.__cacheKey=me,L.__webglTexture=te[me].texture}return W}function j(L,v,W){return Math.floor(Math.floor(L/W)/v)}function re(L,v,W,Z){let me=L.updateRanges;if(me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,W,Z,v.data);else{me.sort((Xe,Ce)=>Xe.start-Ce.start);let be=0;for(let Xe=1;Xe<me.length;Xe++){let Ce=me[be],Se=me[Xe],qe=Ce.start+Ce.count,$e=j(Se.start,v.width,4),ct=j(Ce.start,v.width,4);Se.start<=qe+1&&$e===ct&&j(Se.start+Se.count-1,v.width,4)===$e?Ce.count=Math.max(Ce.count,Se.start+Se.count-Ce.start):(++be,me[be]=Se)}me.length=be+1;let ne=t.getParameter(n.UNPACK_ROW_LENGTH),oe=t.getParameter(n.UNPACK_SKIP_PIXELS),Me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Xe=0,Ce=me.length;Xe<Ce;Xe++){let Se=me[Xe],qe=Math.floor(Se.start/4),$e=Math.ceil(Se.count/4),ct=qe%v.width,H=Math.floor(qe/v.width),Te=$e,se=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,ct,H,Te,se,W,Z,v.data)}L.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ne),t.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function Le(L,v,W){let Z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=n.TEXTURE_3D);let te=lt(L,v),me=v.source;t.bindTexture(Z,L.__webglTexture,n.TEXTURE0+W);let be=i.get(me);if(me.version!==be.__version||te===!0){if(t.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let se=yt.getPrimaries(yt.workingColorSpace),Ee=v.colorSpace===fs?null:yt.getPrimaries(v.colorSpace),ke=v.colorSpace===fs||se===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let oe=m(v.image,!1,s.maxTextureSize);oe=Dn(v,oe);let Me=r.convert(v.format,v.colorSpace),Xe=r.convert(v.type),Ce=x(v.internalFormat,Me,Xe,v.normalized,v.colorSpace,v.isVideoTexture);it(Z,v);let Se,qe=v.mipmaps,$e=v.isVideoTexture!==!0,ct=be.__version===void 0||te===!0,H=me.dataReady,Te=A(v,oe);if(v.isDepthTexture)Ce=E(v.format===qs,v.type),ct&&($e?t.texStorage2D(n.TEXTURE_2D,1,Ce,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ce,oe.width,oe.height,0,Me,Xe,null));else if(v.isDataTexture)if(qe.length>0){$e&&ct&&t.texStorage2D(n.TEXTURE_2D,Te,Ce,qe[0].width,qe[0].height);for(let se=0,Ee=qe.length;se<Ee;se++)Se=qe[se],$e?H&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Se.width,Se.height,Me,Xe,Se.data):t.texImage2D(n.TEXTURE_2D,se,Ce,Se.width,Se.height,0,Me,Xe,Se.data);v.generateMipmaps=!1}else $e?(ct&&t.texStorage2D(n.TEXTURE_2D,Te,Ce,oe.width,oe.height),H&&re(v,oe,Me,Xe)):t.texImage2D(n.TEXTURE_2D,0,Ce,oe.width,oe.height,0,Me,Xe,oe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){$e&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ce,qe[0].width,qe[0].height,oe.depth);for(let se=0,Ee=qe.length;se<Ee;se++)if(Se=qe[se],v.format!==fi)if(Me!==null)if($e){if(H)if(v.layerUpdates.size>0){let ke=qd(Se.width,Se.height,v.format,v.type);for(let ce of v.layerUpdates){let Ye=Se.data.subarray(ce*ke/Se.data.BYTES_PER_ELEMENT,(ce+1)*ke/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,ce,Se.width,Se.height,1,Me,Ye)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Se.width,Se.height,oe.depth,Me,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Ce,Se.width,Se.height,oe.depth,0,Se.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Se.width,Se.height,oe.depth,Me,Xe,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Ce,Se.width,Se.height,oe.depth,0,Me,Xe,Se.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{$e&&ct&&t.texStorage2D(n.TEXTURE_2D,Te,Ce,qe[0].width,qe[0].height);for(let se=0,Ee=qe.length;se<Ee;se++)Se=qe[se],v.format!==fi?Me!==null?$e?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Ce,Se.width,Se.height,0,Se.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?H&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Se.width,Se.height,Me,Xe,Se.data):t.texImage2D(n.TEXTURE_2D,se,Ce,Se.width,Se.height,0,Me,Xe,Se.data)}else if(v.isDataArrayTexture)if($e){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ce,oe.width,oe.height,oe.depth),H)if(v.layerUpdates.size>0){let se=qd(oe.width,oe.height,v.format,v.type);for(let Ee of v.layerUpdates){let ke=oe.data.subarray(Ee*se/oe.data.BYTES_PER_ELEMENT,(Ee+1)*se/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ee,oe.width,oe.height,1,Me,Xe,ke)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Me,Xe,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,oe.width,oe.height,oe.depth,0,Me,Xe,oe.data);else if(v.isData3DTexture)$e?(ct&&t.texStorage3D(n.TEXTURE_3D,Te,Ce,oe.width,oe.height,oe.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Me,Xe,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,oe.width,oe.height,oe.depth,0,Me,Xe,oe.data);else if(v.isFramebufferTexture){if(ct)if($e)t.texStorage2D(n.TEXTURE_2D,Te,Ce,oe.width,oe.height);else{let se=oe.width,Ee=oe.height;for(let ke=0;ke<Te;ke++)t.texImage2D(n.TEXTURE_2D,ke,Ce,se,Ee,0,Me,Xe,null),se>>=1,Ee>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let se=n.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),oe.parentNode!==se){se.appendChild(oe),d.add(v),se.onpaint=Ee=>{let ke=Ee.changedElements;for(let ce of d)ke.includes(ce.image)&&(ce.needsUpdate=!0)},se.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,oe);else{let ke=n.RGBA,ce=n.RGBA,Ye=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ke,ce,Ye,oe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(qe.length>0){if($e&&ct){let se=Ut(qe[0]);t.texStorage2D(n.TEXTURE_2D,Te,Ce,se.width,se.height)}for(let se=0,Ee=qe.length;se<Ee;se++)Se=qe[se],$e?H&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Me,Xe,Se):t.texImage2D(n.TEXTURE_2D,se,Ce,Me,Xe,Se);v.generateMipmaps=!1}else if($e){if(ct){let se=Ut(oe);t.texStorage2D(n.TEXTURE_2D,Te,Ce,se.width,se.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Xe,oe)}else t.texImage2D(n.TEXTURE_2D,0,Ce,Me,Xe,oe);p(v)&&b(Z),be.__version=me.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function et(L,v,W){if(v.image.length!==6)return;let Z=lt(L,v),te=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+W);let me=i.get(te);if(te.version!==me.__version||Z===!0){t.activeTexture(n.TEXTURE0+W);let be=yt.getPrimaries(yt.workingColorSpace),ne=v.colorSpace===fs?null:yt.getPrimaries(v.colorSpace),oe=v.colorSpace===fs||be===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Me=v.isCompressedTexture||v.image[0].isCompressedTexture,Xe=v.image[0]&&v.image[0].isDataTexture,Ce=[];for(let ce=0;ce<6;ce++)!Me&&!Xe?Ce[ce]=m(v.image[ce],!0,s.maxCubemapSize):Ce[ce]=Xe?v.image[ce].image:v.image[ce],Ce[ce]=Dn(v,Ce[ce]);let Se=Ce[0],qe=r.convert(v.format,v.colorSpace),$e=r.convert(v.type),ct=x(v.internalFormat,qe,$e,v.normalized,v.colorSpace),H=v.isVideoTexture!==!0,Te=me.__version===void 0||Z===!0,se=te.dataReady,Ee=A(v,Se);it(n.TEXTURE_CUBE_MAP,v);let ke;if(Me){H&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,ct,Se.width,Se.height);for(let ce=0;ce<6;ce++){ke=Ce[ce].mipmaps;for(let Ye=0;Ye<ke.length;Ye++){let Ge=ke[Ye];v.format!==fi?qe!==null?H?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ye,0,0,Ge.width,Ge.height,qe,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ye,ct,Ge.width,Ge.height,0,Ge.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ye,0,0,Ge.width,Ge.height,qe,$e,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ye,ct,Ge.width,Ge.height,0,qe,$e,Ge.data)}}}else{if(ke=v.mipmaps,H&&Te){ke.length>0&&Ee++;let ce=Ut(Ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,ct,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Xe){H?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ce[ce].width,Ce[ce].height,qe,$e,Ce[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ct,Ce[ce].width,Ce[ce].height,0,qe,$e,Ce[ce].data);for(let Ye=0;Ye<ke.length;Ye++){let Xt=ke[Ye].image[ce].image;H?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ye+1,0,0,Xt.width,Xt.height,qe,$e,Xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ye+1,ct,Xt.width,Xt.height,0,qe,$e,Xt.data)}}else{H?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,qe,$e,Ce[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ct,qe,$e,Ce[ce]);for(let Ye=0;Ye<ke.length;Ye++){let Ge=ke[Ye];H?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ye+1,0,0,qe,$e,Ge.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ye+1,ct,qe,$e,Ge.image[ce])}}}p(v)&&b(n.TEXTURE_CUBE_MAP),me.__version=te.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function Pe(L,v,W,Z,te,me){let be=r.convert(W.format,W.colorSpace),ne=r.convert(W.type),oe=x(W.internalFormat,be,ne,W.normalized,W.colorSpace),Me=i.get(v),Xe=i.get(W);if(Xe.__renderTarget=v,!Me.__hasExternalTextures){let Ce=Math.max(1,v.width>>me),Se=Math.max(1,v.height>>me);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,me,oe,Ce,Se,v.depth,0,be,ne,null):t.texImage2D(te,me,oe,Ce,Se,0,be,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),hn(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,te,Xe.__webglTexture,0,Wt(v)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,te,Xe.__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(L,v,W){if(n.bindRenderbuffer(n.RENDERBUFFER,L),v.depthBuffer){let Z=v.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,me=E(v.stencilBuffer,te),be=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;hn(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Wt(v),me,v.width,v.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt(v),me,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,me,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,L)}else{let Z=v.textures;for(let te=0;te<Z.length;te++){let me=Z[te],be=r.convert(me.format,me.colorSpace),ne=r.convert(me.type),oe=x(me.internalFormat,be,ne,me.normalized,me.colorSpace);hn(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Wt(v),oe,v.width,v.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Wt(v),oe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,oe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(L,v,W){let Z=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=i.get(v.depthTexture);if(te.__renderTarget=v,(!te.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z){if(te.__webglInit===void 0&&(te.__webglInit=!0,v.depthTexture.addEventListener("dispose",P)),te.__webglTexture===void 0){te.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),it(n.TEXTURE_CUBE_MAP,v.depthTexture);let Me=r.convert(v.depthTexture.format),Xe=r.convert(v.depthTexture.type),Ce;v.depthTexture.format===Gi?Ce=n.DEPTH_COMPONENT24:v.depthTexture.format===qs&&(Ce=n.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ce,v.width,v.height,0,Me,Xe,null)}}else z(v.depthTexture,0);let me=te.__webglTexture,be=Wt(v),ne=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,oe=v.depthTexture.format===qs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Gi)hn(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ne,me,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,oe,ne,me,0);else if(v.depthTexture.format===qs)hn(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ne,me,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,oe,ne,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function de(L){let v=i.get(L),W=L.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==L.depthTexture){let Z=L.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=Z}if(L.depthTexture&&!v.__autoAllocateDepthBuffer)if(W)for(let Z=0;Z<6;Z++)pe(v.__webglFramebuffer[Z],L,Z);else{let Z=L.texture.mipmaps;Z&&Z.length>0?pe(v.__webglFramebuffer[0],L,0):pe(v.__webglFramebuffer,L,0)}else if(W){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=n.createRenderbuffer(),tt(v.__webglDepthbuffer[Z],L,!1);else{let te=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=v.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,me)}}else{let Z=L.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),tt(v.__webglDepthbuffer,L,!1);else{let te=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(L,v,W){let Z=i.get(L);v!==void 0&&Pe(Z.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&de(L)}function ye(L){let v=L.texture,W=i.get(L),Z=i.get(v);L.addEventListener("dispose",_);let te=L.textures,me=L.isWebGLCubeRenderTarget===!0,be=te.length>1;if(be||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=v.version,o.memory.textures++),me){W.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer[ne]=[];for(let oe=0;oe<v.mipmaps.length;oe++)W.__webglFramebuffer[ne][oe]=n.createFramebuffer()}else W.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer=[];for(let ne=0;ne<v.mipmaps.length;ne++)W.__webglFramebuffer[ne]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(be)for(let ne=0,oe=te.length;ne<oe;ne++){let Me=i.get(te[ne]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&hn(L)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ne=0;ne<te.length;ne++){let oe=te[ne];W.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ne]);let Me=r.convert(oe.format,oe.colorSpace),Xe=r.convert(oe.type),Ce=x(oe.internalFormat,Me,Xe,oe.normalized,oe.colorSpace,L.isXRRenderTarget===!0),Se=Wt(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,Ce,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,W.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),tt(W.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),it(n.TEXTURE_CUBE_MAP,v);for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0)for(let oe=0;oe<v.mipmaps.length;oe++)Pe(W.__webglFramebuffer[ne][oe],L,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe);else Pe(W.__webglFramebuffer[ne],L,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(v)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ne=0,oe=te.length;ne<oe;ne++){let Me=te[ne],Xe=i.get(Me),Ce=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ce,Xe.__webglTexture),it(Ce,Me),Pe(W.__webglFramebuffer,L,Me,n.COLOR_ATTACHMENT0+ne,Ce,0),p(Me)&&b(Ce)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ne=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,Z.__webglTexture),it(ne,v),v.mipmaps&&v.mipmaps.length>0)for(let oe=0;oe<v.mipmaps.length;oe++)Pe(W.__webglFramebuffer[oe],L,v,n.COLOR_ATTACHMENT0,ne,oe);else Pe(W.__webglFramebuffer,L,v,n.COLOR_ATTACHMENT0,ne,0);p(v)&&b(ne),t.unbindTexture()}L.depthBuffer&&de(L)}function Ue(L){let v=L.textures;for(let W=0,Z=v.length;W<Z;W++){let te=v[W];if(p(te)){let me=w(L),be=i.get(te).__webglTexture;t.bindTexture(me,be),b(me),t.unbindTexture()}}}let dt=[],Et=[];function mn(L){if(L.samples>0){if(hn(L)===!1){let v=L.textures,W=L.width,Z=L.height,te=n.COLOR_BUFFER_BIT,me=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(L),ne=v.length>1;if(ne)for(let Me=0;Me<v.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);let oe=L.texture.mipmaps;oe&&oe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Me=0;Me<v.length;Me++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Me]);let Xe=i.get(v[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xe,0)}n.blitFramebuffer(0,0,W,Z,0,0,W,Z,te,n.NEAREST),l===!0&&(dt.length=0,Et.length=0,dt.push(n.COLOR_ATTACHMENT0+Me),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(dt.push(me),Et.push(me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Et)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let Me=0;Me<v.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,be.__webglColorRenderbuffer[Me]);let Xe=i.get(v[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let v=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Wt(L){return Math.min(s.maxSamples,L.samples)}function hn(L){let v=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function G(L){let v=o.render.frame;u.get(L)!==v&&(u.set(L,v),L.update())}function Dn(L,v){let W=L.colorSpace,Z=L.format,te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==aa&&W!==fs&&(yt.getTransfer(W)===Pt?(Z!==fi||te!==Kn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",W)),v}function Ut(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=N,this.getTextureUnits=I,this.setTextureUnits=O,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=V,this.rebindTextures=Ne,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=hn,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Vb(n,e){function t(i,s=fs){let r,o=yt.getTransfer(s);if(i===Kn)return n.UNSIGNED_BYTE;if(i===Yc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nd)return n.BYTE;if(i===Ud)return n.SHORT;if(i===Mo)return n.UNSIGNED_SHORT;if(i===qc)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===xn)return n.HALF_FLOAT;if(i===Od)return n.ALPHA;if(i===Bd)return n.RGB;if(i===fi)return n.RGBA;if(i===Gi)return n.DEPTH_COMPONENT;if(i===qs)return n.DEPTH_STENCIL;if(i===Zc)return n.RED;if(i===$c)return n.RED_INTEGER;if(i===Ys)return n.RG;if(i===Jc)return n.RG_INTEGER;if(i===jc)return n.RGBA_INTEGER;if(i===qa||i===Ya||i===Ka||i===Za)if(o===Pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qc||i===eh||i===th||i===nh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Qc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===eh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===th)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ih||i===sh||i===rh||i===oh||i===ah||i===$a||i===lh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ih||i===sh)return o===Pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===rh)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===oh)return r.COMPRESSED_R11_EAC;if(i===ah)return r.COMPRESSED_SIGNED_R11_EAC;if(i===$a)return r.COMPRESSED_RG11_EAC;if(i===lh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ch||i===hh||i===uh||i===dh||i===fh||i===ph||i===mh||i===gh||i===xh||i===_h||i===yh||i===vh||i===bh||i===Mh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ch)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hh)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uh)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dh)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fh)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ph)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mh)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gh)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xh)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_h)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yh)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vh)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bh)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mh)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sh||i===Th||i===Eh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Sh)return o===Pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Eh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wh||i===Ah||i===Ja||i===Ch)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===wh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ah)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ch)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Wb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,df=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ma(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Yt({vertexShader:Wb,fragmentShader:Xb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new xt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ff=class extends Vi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new df,p={},b=t.getContextAttributes(),w=null,x=null,E=[],A=[],P=new ue,_=null,S=null,R=new Mn;R.viewport=new Qt;let U=new Mn;U.viewport=new Qt;let C=[R,U],N=new Hc,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let re=E[j];return re===void 0&&(re=new uo,E[j]=re),re.getTargetRaySpace()},this.getControllerGrip=function(j){let re=E[j];return re===void 0&&(re=new uo,E[j]=re),re.getGripSpace()},this.getHand=function(j){let re=E[j];return re===void 0&&(re=new uo,E[j]=re),re.getHandSpace()};function X(j){let re=A.indexOf(j.inputSource);if(re===-1)return;let Le=E[re];Le!==void 0&&(Le.update(j.inputSource,j.frame,c||o),Le.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",z);for(let j=0;j<E.length;j++){let re=A[j];re!==null&&(A[j]=null,E[j].disconnect(re))}I=null,O=null,m.reset();for(let j in p)delete p[j];if(e.setRenderTarget(w),f=null,h=null,d=null,s=null,x=null,lt.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(P.width,P.height,!1),S!==null){let j=S.camera;j.fov=S.fov,j.zoom=S.zoom,j.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",K),s.addEventListener("inputsourceschange",z),b.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,et=null,Pe=null;b.depth&&(Pe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Le=b.stencil?qs:Gi,et=b.stencil?So:Li);let tt={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(tt),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new nn(h.textureWidth,h.textureHeight,{format:fi,type:Kn,depthTexture:new ks(h.textureWidth,h.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Le={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new nn(f.framebufferWidth,f.framebufferHeight,{format:fi,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(j){for(let re=0;re<j.removed.length;re++){let Le=j.removed[re],et=A.indexOf(Le);et>=0&&(A[et]=null,E[et].disconnect(Le))}for(let re=0;re<j.added.length;re++){let Le=j.added[re],et=A.indexOf(Le);if(et===-1){for(let tt=0;tt<E.length;tt++)if(tt>=A.length){A.push(Le),et=tt;break}else if(A[tt]===null){A[tt]=Le,et=tt;break}if(et===-1)break}let Pe=E[et];Pe&&Pe.connect(Le)}}let B=new D,k=new D;function V(j,re,Le){B.setFromMatrixPosition(re.matrixWorld),k.setFromMatrixPosition(Le.matrixWorld);let et=B.distanceTo(k),Pe=re.projectionMatrix.elements,tt=Le.projectionMatrix.elements,pe=Pe[14]/(Pe[10]-1),de=Pe[14]/(Pe[10]+1),Ne=(Pe[9]+1)/Pe[5],ye=(Pe[9]-1)/Pe[5],Ue=(Pe[8]-1)/Pe[0],dt=(tt[8]+1)/tt[0],Et=pe*Ue,mn=pe*dt,Wt=et/(-Ue+dt),hn=Wt*-Ue;if(re.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(hn),j.translateZ(Wt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Pe[10]===-1)j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let G=pe+Wt,Dn=de+Wt,Ut=Et-hn,L=mn+(et-hn),v=Ne*de/Dn*G,W=ye*de/Dn*G;j.projectionMatrix.makePerspective(Ut,L,v,W,G,Dn),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function he(j,re){re===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(re.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let re=j.near,Le=j.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(Le=m.depthFar)),N.near=U.near=R.near=re,N.far=U.far=R.far=Le,(I!==N.near||O!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),I=N.near,O=N.far),N.layers.mask=j.layers.mask|6,R.layers.mask=N.layers.mask&-5,U.layers.mask=N.layers.mask&-3;let et=j.parent,Pe=N.cameras;he(N,et);for(let tt=0;tt<Pe.length;tt++)he(Pe[tt],et);Pe.length===2?V(N,R,U):N.projectionMatrix.copy(R.projectionMatrix),S===null&&j.isPerspectiveCamera&&(S={camera:j,fov:j.fov,zoom:j.zoom}),we(j,N,et)};function we(j,re,Le){Le===null?j.matrix.copy(re.matrixWorld):(j.matrix.copy(Le.matrixWorld),j.matrix.invert(),j.matrix.multiply(re.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ua*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(j){return p[j]};let gt=null;function it(j,re){if(u=re.getViewerPose(c||o),g=re,u!==null){let Le=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let et=!1;Le.length!==N.cameras.length&&(N.cameras.length=0,et=!0);for(let de=0;de<Le.length;de++){let Ne=Le[de],ye=null;if(f!==null)ye=f.getViewport(Ne);else{let dt=d.getViewSubImage(h,Ne);ye=dt.viewport,de===0&&(e.setRenderTargetTextures(x,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(x))}let Ue=C[de];Ue===void 0&&(Ue=new Mn,Ue.layers.enable(de),Ue.viewport=new Qt,C[de]=Ue),Ue.matrix.fromArray(Ne.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ne.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(ye.x,ye.y,ye.width,ye.height),de===0&&(N.matrix.copy(Ue.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),et===!0&&N.cameras.push(Ue)}let Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let de=d.getDepthInformation(Le[0]);de&&de.isValid&&de.texture&&m.init(de,s.renderState)}if(Pe&&Pe.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let de=0;de<Le.length;de++){let Ne=Le[de].camera;if(Ne){let ye=p[Ne];ye||(ye=new Ma,p[Ne]=ye);let Ue=d.getCameraImage(Ne);ye.sourceTexture=Ue}}}}for(let Le=0;Le<E.length;Le++){let et=A[Le],Pe=E[Le];et!==null&&Pe!==void 0&&Pe.update(et,re,c||o)}gt&&gt(j,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}let lt=new Tm;lt.setAnimationLoop(it),this.setAnimationLoop=function(j){gt=j},this.dispose=function(){}}},qb=new At,Pm=new rt;Pm.set(-1,0,0,0,1,0,0,0,1);function Yb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Vd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,w,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),w=b.envMap,x=b.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(qb.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Pm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Kb(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){let A=E.program;i.uniformBlockBinding(x,A)}function c(x,E){let A=s[x.id];A===void 0&&(m(x),A=u(x),s[x.id]=A,x.addEventListener("dispose",b));let P=E.program;i.updateUBOMapping(x,P);let _=e.render.frame;r[x.id]!==_&&(h(x),r[x.id]=_)}function u(x){let E=d();x.__bindingPointIndex=E;let A=n.createBuffer(),P=x.__size,_=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,P,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,A),A}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let E=s[x.id],A=x.uniforms,P=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let _=0,S=A.length;_<S;_++){let R=A[_];if(Array.isArray(R))for(let U=0,C=R.length;U<C;U++)f(R[U],_,U,P);else f(R,_,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,E,A,P){if(y(x,E,A,P)===!0){let _=x.__offset,S=x.value;if(Array.isArray(S)){let R=0;for(let U=0;U<S.length;U++){let C=S[U],N=p(C);g(C,x.__data,R),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,x.__data)}}function g(x,E,A){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,A)}function y(x,E,A,P){let _=x.value,S=E+"_"+A;if(P[S]===void 0)return typeof _=="number"||typeof _=="boolean"?P[S]=_:ArrayBuffer.isView(_)?P[S]=_.slice():P[S]=_.clone(),!0;{let R=P[S];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return P[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(x){let E=x.uniforms,A=0,P=16;for(let S=0,R=E.length;S<R;S++){let U=Array.isArray(E[S])?E[S]:[E[S]];for(let C=0,N=U.length;C<N;C++){let I=U[C],O=Array.isArray(I.value)?I.value:[I.value];for(let X=0,K=O.length;X<K;X++){let z=O[X],B=p(z),k=A%P,V=k%B.boundary,he=k+V;A+=V,he!==0&&P-he<B.storage&&(A+=P-he),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=A,A+=B.storage}}}let _=A%P;return _>0&&(A+=P-_),x.__size=A,x.__cache={},this}function p(x){let E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):je("WebGLRenderer: Unsupported uniform value type.",x),E}function b(x){let E=x.target;E.removeEventListener("dispose",b);let A=o.indexOf(E.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function w(){for(let x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}var Zb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function $b(){return Xi===null&&(Xi=new xa(Zb,16,16,Ys,xn),Xi.name="DFG_LUT",Xi.minFilter=Cn,Xi.magFilter=Cn,Xi.wrapS=Hi,Xi.wrapT=Hi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var Uh=class{constructor(e={}){let{canvas:t=X0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Kn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let y=f,m=new Set([jc,Jc,$c]),p=new Set([Kn,Li,Mo,So,Yc,Kc]),b=new Uint32Array(4),w=new Int32Array(4),x=new D,E=null,A=null,P=[],_=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,C=null,N=null,I=null,O=null;this._outputColorSpace=an;let X=0,K=0,z=null,B=-1,k=null,V=new Qt,he=new Qt,we=null,gt=new Fe(0),it=0,lt=t.width,j=t.height,re=1,Le=null,et=null,Pe=new Qt(0,0,lt,j),tt=new Qt(0,0,lt,j),pe=!1,de=new mo,Ne=!1,ye=!1,Ue=new At,dt=new D,Et=new Qt,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function hn(){return z===null?re:1}let G=i;function Dn(T,F){return t.getContext(T,F)}let Ut,L,v,W,Z,te,me,be,ne,oe,Me,Xe,Ce,Se,qe,$e,ct,H,Te,se,Ee,ke,ce;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Xt,!1),t.addEventListener("webglcontextrestored",Dt,!1),t.addEventListener("webglcontextcreationerror",Mi,!1),G===null){let F="webgl2";if(G=Dn(F,T),G===null)throw Dn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(T){throw t.removeEventListener("webglcontextlost",Xt,!1),t.removeEventListener("webglcontextrestored",Dt,!1),t.removeEventListener("webglcontextcreationerror",Mi,!1),Je("WebGLRenderer: "+T.message),T}function Ye(){Ut=new i1(G),Ut.init(),Ee=new Vb(G,Ut),L=new Yv(G,Ut,e,Ee),v=new Hb(G,Ut),L.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),N=G.createFramebuffer(),I=G.createFramebuffer(),O=G.createFramebuffer(),W=new o1(G),Z=new Ab,te=new Gb(G,Ut,v,Z,L,Ee,W),me=new n1(R),be=new l_(G),ke=new Xv(G,be),ne=new s1(G,be,W,ke),oe=new l1(G,ne,be,ke,W),H=new a1(G,L,te),qe=new Kv(Z),Me=new wb(R,me,Ut,L,ke,qe),Xe=new Yb(R,Z),Ce=new Rb,Se=new Ub(Ut),ct=new Wv(R,me,v,oe,g,l),$e=new zb(R,oe,L),ce=new Kb(G,W,L,v),Te=new qv(G,Ut,W),se=new r1(G,Ut,W),W.programs=Me.programs,R.capabilities=L,R.extensions=Ut,R.properties=Z,R.renderLists=Ce,R.shadowMap=$e,R.state=v,R.info=W}y!==Kn&&(S=new h1(y,t.width,t.height,a,s,r));let Ge=new ff(R,G);this.xr=Ge,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let T=Ut.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ut.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(T){T!==void 0&&(re=T,this.setSize(lt,j,!1))},this.getSize=function(T){return T.set(lt,j)},this.setSize=function(T,F,$=!0){if(Ge.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=T,j=F,t.width=Math.floor(T*re),t.height=Math.floor(F*re),$===!0&&(t.style.width=T+"px",t.style.height=F+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(lt*re,j*re).floor()},this.setDrawingBufferSize=function(T,F,$){lt=T,j=F,re=$,t.width=Math.floor(T*$),t.height=Math.floor(F*$),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(y===Kn){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(V)},this.getViewport=function(T){return T.copy(Pe)},this.setViewport=function(T,F,$,q){T.isVector4?Pe.set(T.x,T.y,T.z,T.w):Pe.set(T,F,$,q),v.viewport(V.copy(Pe).multiplyScalar(re).round())},this.getScissor=function(T){return T.copy(tt)},this.setScissor=function(T,F,$,q){T.isVector4?tt.set(T.x,T.y,T.z,T.w):tt.set(T,F,$,q),v.scissor(he.copy(tt).multiplyScalar(re).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(T){v.setScissorTest(pe=T)},this.setOpaqueSort=function(T){Le=T},this.setTransparentSort=function(T){et=T},this.getClearColor=function(T){return T.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,$=!0){let q=0;if(T){let Y=!1;if(z!==null){let De=z.texture.format;Y=m.has(De)}if(Y){let De=z.texture.type,Be=p.has(De),Ie=ct.getClearColor(),ze=ct.getClearAlpha(),Ve=Ie.r,ft=Ie.g,St=Ie.b;Be?(b[0]=Ve,b[1]=ft,b[2]=St,b[3]=ze,G.clearBufferuiv(G.COLOR,0,b)):(w[0]=Ve,w[1]=ft,w[2]=St,w[3]=ze,G.clearBufferiv(G.COLOR,0,w))}else q|=G.COLOR_BUFFER_BIT}F&&(q|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&G.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),C=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Xt,!1),t.removeEventListener("webglcontextrestored",Dt,!1),t.removeEventListener("webglcontextcreationerror",Mi,!1),ct.dispose(),Ce.dispose(),Se.dispose(),Z.dispose(),me.dispose(),oe.dispose(),ke.dispose(),ce.dispose(),Me.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",bp),Ge.removeEventListener("sessionend",Mp),ar.stop()};function Xt(T){T.preventDefault(),ha("WebGLRenderer: Context Lost."),U=!0}function Dt(){ha("WebGLRenderer: Context Restored."),U=!1;let T=W.autoReset,F=$e.enabled,$=$e.autoUpdate,q=$e.needsUpdate,Y=$e.type;Ye(),W.autoReset=T,$e.enabled=F,$e.autoUpdate=$,$e.needsUpdate=q,$e.type=Y}function Mi(T){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Fi(T){let F=T.target;F.removeEventListener("dispose",Fi),Xg(F)}function Xg(T){qg(T),Z.remove(T)}function qg(T){let F=Z.get(T).programs;F!==void 0&&(F.forEach(function($){Me.releaseProgram($)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,$,q,Y,De){F===null&&(F=mn);let Be=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Ie=Zg(T,F,$,q,Y);v.setMaterial(q,Be);let ze=$.index,Ve=1;if(q.wireframe===!0){if(ze=ne.getWireframeAttribute($),ze===void 0)return;Ve=2}let ft=$.drawRange,St=$.attributes.position,He=ft.start*Ve,Nt=(ft.start+ft.count)*Ve;De!==null&&(He=Math.max(He,De.start*Ve),Nt=Math.min(Nt,(De.start+De.count)*Ve)),ze!==null?(He=Math.max(He,0),Nt=Math.min(Nt,ze.count)):St!=null&&(He=Math.max(He,0),Nt=Math.min(Nt,St.count));let un=Nt-He;if(un<0||un===1/0)return;ke.setup(Y,q,Ie,$,ze);let Kt,zt=Te;if(ze!==null&&(Kt=be.get(ze),zt=se,zt.setIndex(Kt)),Y.isMesh)q.wireframe===!0?(v.setLineWidth(q.wireframeLinewidth*hn()),zt.setMode(G.LINES)):zt.setMode(G.TRIANGLES);else if(Y.isLine){let Nn=q.linewidth;Nn===void 0&&(Nn=1),v.setLineWidth(Nn*hn()),Y.isLineSegments?zt.setMode(G.LINES):Y.isLineLoop?zt.setMode(G.LINE_LOOP):zt.setMode(G.LINE_STRIP)}else Y.isPoints?zt.setMode(G.POINTS):Y.isSprite&&zt.setMode(G.TRIANGLES);if(Y.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))zt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Nn=Y._multiDrawStarts,Oe=Y._multiDrawCounts,Gn=Y._multiDrawCount,wt=ze?be.get(ze).bytesPerElement:1,ai=Z.get(q).currentProgram.getUniforms();for(let Oi=0;Oi<Gn;Oi++)ai.setValue(G,"_gl_DrawID",Oi),zt.render(Nn[Oi]/wt,Oe[Oi])}else if(Y.isInstancedMesh)zt.renderInstances(He,un,Y.count);else if($.isInstancedBufferGeometry){let Nn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Oe=Math.min($.instanceCount,Nn);zt.renderInstances(He,un,Oe)}else zt.render(He,un)};function vp(T,F,$,q){C!==null&&T.isNodeMaterial&&C.setObject(q,T),Ne===!0&&qe.setState(T,$,!1),T.transparent===!0&&T.side===Ht&&T.forceSinglePass===!1?(T.side=gn,T.needsUpdate=!0,Ll(T,F,q),T.side=Gs,T.needsUpdate=!0,Ll(T,F,q),T.side=Ht):Ll(T,F,q)}this.compile=function(T,F,$=null){$===null&&($=T),C!==null&&C.renderStart(T,F,$),A=Se.get($),A.init(F),_.push(A),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),T!==$&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),A.setupLights(),C!==null&&C.updateLights(A.state.lightsArray),ye=this.localClippingEnabled,Ne=qe.init(this.clippingPlanes,ye),Ne===!0&&qe.setGlobalState(this.clippingPlanes,F),C!==null&&$e.render(A.state.shadowsArray,$,F);let q=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let De=Y.material;if(De)if(Array.isArray(De))for(let Be=0;Be<De.length;Be++){let Ie=De[Be];vp(Ie,$,F,Y),q.add(Ie)}else vp(De,$,F,Y),q.add(De)}),A=_.pop(),C!==null&&C.renderEnd(),q},this.compileAsync=function(T,F,$=null){let q=this.compile(T,F,$);return new Promise(Y=>{function De(){if(q.forEach(function(Be){let ze=Z.get(Be).currentProgram;(ze===void 0||ze.isReady())&&q.delete(Be)}),q.size===0){Y(T);return}setTimeout(De,10)}Ut.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Fu=null;function Yg(T){Fu&&Fu(T)}function bp(){ar.stop()}function Mp(){ar.start()}let ar=new Tm;ar.setAnimationLoop(Yg),typeof self<"u"&&ar.setContext(self),this.setAnimationLoop=function(T){Fu=T,Ge.setAnimationLoop(T),T===null?ar.stop():ar.start()},Ge.addEventListener("sessionstart",bp),Ge.addEventListener("sessionend",Mp),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;C!==null&&C.renderStart(T,F);let $=Ge.enabled===!0&&Ge.isPresenting===!0,q=S!==null&&(z===null||$)&&S.begin(R,z);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(F),F=Ge.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,F,z),A=Se.get(T,_.length),A.init(F),A.state.textureUnits=te.getTextureUnits(),_.push(A),Ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),de.setFromProjectionMatrix(Ue,Ai,F.reversedDepth),ye=this.localClippingEnabled,Ne=qe.init(this.clippingPlanes,ye),E=Ce.get(T,P.length),E.init(),P.push(E),Ge.enabled===!0&&Ge.isPresenting===!0){let Be=R.xr.getDepthSensingMesh();Be!==null&&Ou(Be,F,-1/0,R.sortObjects)}Ou(T,F,0,R.sortObjects),E.finish(),C!==null&&C.updateLights(A.state.lightsArray),R.sortObjects===!0&&E.sort(Le,et),Wt=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,Wt&&ct.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ne===!0&&qe.beginShadows();let Y=A.state.shadowsArray;if($e.render(Y,T,F),Ne===!0&&qe.endShadows(),(q&&S.hasRenderPass())===!1){let Be=E.opaque,Ie=E.transmissive;if(A.setupLights(),F.isArrayCamera){let ze=F.cameras;if(Ie.length>0)for(let Ve=0,ft=ze.length;Ve<ft;Ve++){let St=ze[Ve];Tp(Be,Ie,T,St)}Wt&&ct.render(T);for(let Ve=0,ft=ze.length;Ve<ft;Ve++){let St=ze[Ve];Sp(E,T,St,St.viewport)}}else Ie.length>0&&Tp(Be,Ie,T,F),Wt&&ct.render(T),Sp(E,T,F)}z!==null&&K===0&&(te.updateMultisampleRenderTarget(z),te.updateRenderTargetMipmap(z)),q&&S.end(R),T.isScene===!0&&T.onAfterRender(R,T,F),ke.resetDefaultState(),B=-1,k=null,_.pop(),_.length>0?(A=_[_.length-1],te.setTextureUnits(A.state.textureUnits),Ne===!0&&qe.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,P.pop(),P.length>0?E=P[P.length-1]:E=null,C!==null&&C.renderEnd()};function Ou(T,F,$,q){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLightProbeGrid)A.pushLightProbeGrid(T);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(de)){q&&Et.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ue);let Be=oe.update(T),Ie=T.material;Ie.visible&&E.push(T,Be,Ie,$,Et.z,null,F)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(de))){let Be=oe.update(T),Ie=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Et.copy(T.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Et.copy(Be.boundingSphere.center)),Et.applyMatrix4(T.matrixWorld).applyMatrix4(Ue)),Array.isArray(Ie)){let ze=Be.groups;for(let Ve=0,ft=ze.length;Ve<ft;Ve++){let St=ze[Ve],He=Ie[St.materialIndex];He&&He.visible&&E.push(T,Be,He,$,Et.z,St,F)}}else Ie.visible&&E.push(T,Be,Ie,$,Et.z,null,F)}}let De=T.children;for(let Be=0,Ie=De.length;Be<Ie;Be++)Ou(De[Be],F,$,q)}function Sp(T,F,$,q){let{opaque:Y,transmissive:De,transparent:Be}=T;A.setupLightsView($),Ne===!0&&qe.setGlobalState(R.clippingPlanes,$),q&&v.viewport(V.copy(q)),Y.length>0&&Il(Y,F,$),De.length>0&&Il(De,F,$),Be.length>0&&Il(Be,F,$),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Tp(T,F,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[q.id]===void 0){let He=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[q.id]=new nn(1,1,{generateMipmaps:!0,type:He?xn:Kn,minFilter:Xs,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let De=A.state.transmissionRenderTarget[q.id],Be=q.viewport||V;De.setSize(Be.z*R.transmissionResolutionScale,Be.w*R.transmissionResolutionScale);let Ie=R.getRenderTarget(),ze=R.getActiveCubeFace(),Ve=R.getActiveMipmapLevel();R.setRenderTarget(De),R.getClearColor(gt),it=R.getClearAlpha(),it<1&&R.setClearColor(16777215,.5),R.clear(),Wt&&ct.render($);let ft=R.toneMapping;R.toneMapping=Ii;let St=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),A.setupLightsView(q),Ne===!0&&qe.setGlobalState(R.clippingPlanes,q),Il(T,$,q),te.updateMultisampleRenderTarget(De),te.updateRenderTargetMipmap(De),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Nt=0,un=F.length;Nt<un;Nt++){let Kt=F[Nt],{object:zt,geometry:Nn,material:Oe,group:Gn}=Kt;if(Oe.side===Ht&&zt.layers.test(q.layers)){let wt=Oe.side;Oe.side=gn,Oe.needsUpdate=!0,Ep(zt,$,q,Nn,Oe,Gn),Oe.side=wt,Oe.needsUpdate=!0,He=!0}}He===!0&&(te.updateMultisampleRenderTarget(De),te.updateRenderTargetMipmap(De))}R.setRenderTarget(Ie,ze,Ve),R.setClearColor(gt,it),St!==void 0&&(q.viewport=St),R.toneMapping=ft}function Il(T,F,$){let q=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,De=T.length;Y<De;Y++){let Be=T[Y],{object:Ie,geometry:ze,group:Ve}=Be,ft=Be.material;ft.allowOverride===!0&&q!==null&&(ft=q),Ie.layers.test($.layers)&&Ep(Ie,F,$,ze,ft,Ve)}}function Ep(T,F,$,q,Y,De){C!==null&&Y.isNodeMaterial&&C.setObject(T,Y),T.onBeforeRender(R,F,$,q,Y,De),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(R,F,$,q,T,De),Y.transparent===!0&&Y.side===Ht&&Y.forceSinglePass===!1?(Y.side=gn,Y.needsUpdate=!0,R.renderBufferDirect($,F,q,Y,T,De),Y.side=Gs,Y.needsUpdate=!0,R.renderBufferDirect($,F,q,Y,T,De),Y.side=Ht):R.renderBufferDirect($,F,q,Y,T,De),T.onAfterRender(R,F,$,q,Y,De)}function Ll(T,F,$){F.isScene!==!0&&(F=mn);let q=Z.get(T),Y=A.state.lights,De=A.state.shadowsArray,Be=Y.state.version,Ie=Me.getParameters(T,Y.state,De,F,$,A.state.lightProbeGridArray),ze=Me.getProgramCacheKey(Ie),Ve=q.programs;q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,q.fog=F.fog;let ft=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;q.envMap=me.get(T.envMap||q.environment,ft),q.envMapRotation=q.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ve===void 0&&(T.addEventListener("dispose",Fi),Ve=new Map,q.programs=Ve);let St=Ve.get(ze);if(St!==void 0){if(q.currentProgram===St&&q.lightsStateVersion===Be)return Ap(T,Ie),St}else Ie.uniforms=Me.getUniforms(T),C!==null&&T.isNodeMaterial&&C.build(T,$,Ie),T.onBeforeCompile(Ie,R),St=Me.acquireProgram(Ie,ze),Ve.set(ze,St),q.uniforms=Ie.uniforms;let He=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=qe.uniform),Ap(T,Ie),q.needsLights=Jg(T),q.lightsStateVersion=Be,q.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.sunLights.value=Y.state.sun,He.sunLightShadows.value=Y.state.sunShadow,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.sunShadowMatrix.value=Y.state.sunShadowMatrix,He.sunShadowCascade.value=Y.state.sunShadowCascade,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=A.state.lightProbeGridArray.length>0,q.currentProgram=St,q.uniformsList=null,St}function wp(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=wo.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Ap(T,F){let $=Z.get(T);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Kg(T,F){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let $=0,q=T.length;$<q;$++){let Y=T[$];if(Y.texture!==null&&Y.boundingBox.containsPoint(x))return Y}return null}function Zg(T,F,$,q,Y){F.isScene!==!0&&(F=mn),te.resetTextureUnits();let De=F.fog,Be=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?F.environment:null,Ie=z===null?R.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:yt.workingColorSpace,ze=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ve=me.get(q.envMap||Be,ze),ft=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,St=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),He=!!$.morphAttributes.position,Nt=!!$.morphAttributes.normal,un=!!$.morphAttributes.color,Kt=Ii;q.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Kt=R.toneMapping);let zt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Nn=zt!==void 0?zt.length:0,Oe=Z.get(q),Gn=A.state.lights;if(Ne===!0&&(ye===!0||T!==k)){let qt=T===k&&q.id===B;qe.setState(q,T,qt)}let wt=!1;q.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Gn.state.version||Oe.outputColorSpace!==Ie||Y.isBatchedMesh&&Oe.batching===!1||!Y.isBatchedMesh&&Oe.batching===!0||Y.isBatchedMesh&&Oe.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Oe.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Oe.instancing===!1||!Y.isInstancedMesh&&Oe.instancing===!0||Y.isSkinnedMesh&&Oe.skinning===!1||!Y.isSkinnedMesh&&Oe.skinning===!0||Y.isInstancedMesh&&Oe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Oe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Oe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Oe.instancingMorph===!1&&Y.morphTexture!==null||Oe.envMap!==Ve||q.fog===!0&&Oe.fog!==De||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==qe.numPlanes||Oe.numIntersection!==qe.numIntersection)||Oe.vertexAlphas!==ft||Oe.vertexTangents!==St||Oe.morphTargets!==He||Oe.morphNormals!==Nt||Oe.morphColors!==un||Oe.toneMapping!==Kt||Oe.morphTargetsCount!==Nn||!!Oe.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,Oe.__version=q.version);let ai=Oe.currentProgram;wt===!0&&(ai=Ll(q,F,Y),C&&q.isNodeMaterial&&C.onUpdateProgram(q,ai,Oe));let Oi=!1,As=!1,Fr=!1,Ft=ai.getUniforms(),on=Oe.uniforms;if(v.useProgram(ai.program)&&(Oi=!0,As=!0,Fr=!0),q.id!==B&&(B=q.id,As=!0),Oe.needsLights){let qt=Kg(A.state.lightProbeGridArray,Y);Oe.lightProbeGrid!==qt&&(Oe.lightProbeGrid=qt,As=!0)}if(Oi||k!==T){v.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ft.setValue(G,"projectionMatrix",T.projectionMatrix),Ft.setValue(G,"viewMatrix",T.matrixWorldInverse);let Rs=Ft.map.cameraPosition;Rs!==void 0&&Rs.setValue(G,dt.setFromMatrixPosition(T.matrixWorld)),L.logarithmicDepthBuffer&&Ft.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ft.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),k!==T&&(k=T,As=!0,Fr=!0)}if(Oe.needsLights&&(Gn.state.sunShadowMap.length>0&&Ft.setValue(G,"sunShadowMap",Gn.state.sunShadowMap,te),Gn.state.directionalShadowMap.length>0&&Ft.setValue(G,"directionalShadowMap",Gn.state.directionalShadowMap,te),Gn.state.spotShadowMap.length>0&&Ft.setValue(G,"spotShadowMap",Gn.state.spotShadowMap,te),Gn.state.pointShadowMap.length>0&&Ft.setValue(G,"pointShadowMap",Gn.state.pointShadowMap,te)),Y.isSkinnedMesh){Ft.setOptional(G,Y,"bindMatrix"),Ft.setOptional(G,Y,"bindMatrixInverse");let qt=Y.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Ft.setValue(G,"boneTexture",qt.boneTexture,te))}Y.isBatchedMesh&&(Ft.setOptional(G,Y,"batchingTexture"),Ft.setValue(G,"batchingTexture",Y._matricesTexture,te),Ft.setOptional(G,Y,"batchingIdTexture"),Ft.setValue(G,"batchingIdTexture",Y._indirectTexture,te),Ft.setOptional(G,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ft.setValue(G,"batchingColorTexture",Y._colorsTexture,te));let Cs=$.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0)&&H.update(Y,$,ai),(As||Oe.receiveShadow!==Y.receiveShadow)&&(Oe.receiveShadow=Y.receiveShadow,Ft.setValue(G,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&F.environment!==null&&(on.envMapIntensity.value=F.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=$b()),As){if(Ft.setValue(G,"toneMappingExposure",R.toneMappingExposure),Oe.needsLights&&$g(on,Fr),De&&q.fog===!0&&Xe.refreshFogUniforms(on,De),Xe.refreshMaterialUniforms(on,q,re,j,A.state.transmissionRenderTarget[T.id]),Oe.needsLights&&Oe.lightProbeGrid){let qt=Oe.lightProbeGrid;on.probesSH.value=qt.texture,on.probesMin.value.copy(qt.boundingBox.min),on.probesMax.value.copy(qt.boundingBox.max),on.probesResolution.value.copy(qt.resolution)}wo.upload(G,wp(Oe),on,te)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(wo.upload(G,wp(Oe),on,te),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ft.setValue(G,"center",Y.center),Ft.setValue(G,"modelViewMatrix",Y.modelViewMatrix),Ft.setValue(G,"normalMatrix",Y.normalMatrix),Ft.setValue(G,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let qt=q.uniformsGroups;for(let Rs=0,Or=qt.length;Rs<Or;Rs++){let Rp=qt[Rs];ce.update(Rp,ai),ce.bind(Rp,ai)}}return ai}function $g(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Jg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(T,F,$){let q=Z.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(T.texture).__webglTexture=F,Z.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let $=Z.get(T);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,$=0){z=T,X=F,K=$;let q=null,Y=!1,De=!1;if(T){let Ie=Z.get(T);if(Ie.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(G.FRAMEBUFFER,Ie.__webglFramebuffer),V.copy(T.viewport),he.copy(T.scissor),we=T.scissorTest,v.viewport(V),v.scissor(he),v.setScissorTest(we),B=-1;return}else if(Ie.__webglFramebuffer===void 0)te.setupRenderTarget(T);else if(Ie.__hasExternalTextures)te.rebindTextures(T,Z.get(T.texture).__webglTexture,Z.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ft=T.depthTexture;if(Ie.__boundDepthTexture!==ft){if(ft!==null&&Z.has(ft)&&(T.width!==ft.image.width||T.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(T)}}let ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(De=!0);let Ve=Z.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[F])?q=Ve[F][$]:q=Ve[F],Y=!0):T.samples>0&&te.useMultisampledRTT(T)===!1?q=Z.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?q=Ve[$]:q=Ve,V.copy(T.viewport),he.copy(T.scissor),we=T.scissorTest}else V.copy(Pe).multiplyScalar(re).floor(),he.copy(tt).multiplyScalar(re).floor(),we=pe;if($!==0&&(q=N),v.bindFramebuffer(G.FRAMEBUFFER,q)&&v.drawBuffers(T,q),v.viewport(V),v.scissor(he),v.setScissorTest(we),Y){let Ie=Z.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ie.__webglTexture,$)}else if(De){let Ie=F;for(let ze=0;ze<T.textures.length;ze++){let Ve=Z.get(T.textures[ze]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+ze,Ve.__webglTexture,$,Ie)}}else if(T!==null&&$!==0){let Ie=Z.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ie.__webglTexture,$)}B=-1};function Cp(T){let F=Z.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=L.textureFormatReadable(T.format),F.__typeReadable=L.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,$,q,Y,De,Be,Ie=0){if(!(T&&T.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Be!==void 0&&(ze=ze[Be]),ze){v.bindFramebuffer(G.FRAMEBUFFER,ze);try{let Ve=T.textures[Ie],ft=Ve.format,St=Ve.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ie);let He=Cp(Ve);if(He.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-q&&$>=0&&$<=T.height-Y&&G.readPixels(F,$,q,Y,Ee.convert(ft),Ee.convert(St),De)}finally{let Ve=z!==null?Z.get(z).__webglFramebuffer:null;v.bindFramebuffer(G.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(T,F,$,q,Y,De,Be,Ie=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Be!==void 0&&(ze=ze[Be]),ze)if(F>=0&&F<=T.width-q&&$>=0&&$<=T.height-Y){v.bindFramebuffer(G.FRAMEBUFFER,ze);let Ve=T.textures[Ie],ft=Ve.format,St=Ve.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ie);let He=Cp(Ve);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Nt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Nt),G.bufferData(G.PIXEL_PACK_BUFFER,De.byteLength,G.STREAM_READ),G.readPixels(F,$,q,Y,Ee.convert(ft),Ee.convert(St),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let un=z!==null?Z.get(z).__webglFramebuffer:null;v.bindFramebuffer(G.FRAMEBUFFER,un);let Kt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Y0(G,Kt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Nt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,De),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(Nt),G.deleteSync(Kt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,$=0){let q=Math.pow(2,-$),Y=Math.floor(T.image.width*q),De=Math.floor(T.image.height*q),Be=F!==null?F.x:0,Ie=F!==null?F.y:0;te.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,$,0,0,Be,Ie,Y,De),v.unbindTexture()},this.copyTextureToTexture=function(T,F,$=null,q=null,Y=0,De=0){let Be,Ie,ze,Ve,ft,St,He,Nt,un,Kt=T.isCompressedTexture?T.mipmaps[De]:T.image;if($!==null)Be=$.max.x-$.min.x,Ie=$.max.y-$.min.y,ze=$.isBox3?$.max.z-$.min.z:1,Ve=$.min.x,ft=$.min.y,St=$.isBox3?$.min.z:0;else{let on=Math.pow(2,-Y);Be=Math.floor(Kt.width*on),Ie=Math.floor(Kt.height*on),T.isDataArrayTexture?ze=Kt.depth:T.isData3DTexture?ze=Math.floor(Kt.depth*on):ze=1,Ve=0,ft=0,St=0}q!==null?(He=q.x,Nt=q.y,un=q.z):(He=0,Nt=0,un=0);let zt=Ee.convert(F.format),Nn=Ee.convert(F.type),Oe;F.isData3DTexture?(te.setTexture3D(F,0),Oe=G.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(te.setTexture2DArray(F,0),Oe=G.TEXTURE_2D_ARRAY):(te.setTexture2D(F,0),Oe=G.TEXTURE_2D),v.activeTexture(G.TEXTURE0),v.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(G.UNPACK_ALIGNMENT,F.unpackAlignment);let Gn=v.getParameter(G.UNPACK_ROW_LENGTH),wt=v.getParameter(G.UNPACK_IMAGE_HEIGHT),ai=v.getParameter(G.UNPACK_SKIP_PIXELS),Oi=v.getParameter(G.UNPACK_SKIP_ROWS),As=v.getParameter(G.UNPACK_SKIP_IMAGES);v.pixelStorei(G.UNPACK_ROW_LENGTH,Kt.width),v.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Kt.height),v.pixelStorei(G.UNPACK_SKIP_PIXELS,Ve),v.pixelStorei(G.UNPACK_SKIP_ROWS,ft),v.pixelStorei(G.UNPACK_SKIP_IMAGES,St);let Fr=T.isDataArrayTexture||T.isData3DTexture,Ft=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let on=Z.get(T),Cs=Z.get(F),qt=Z.get(on.__renderTarget),Rs=Z.get(Cs.__renderTarget);v.bindFramebuffer(G.READ_FRAMEBUFFER,qt.__webglFramebuffer),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,Rs.__webglFramebuffer);for(let Or=0;Or<ze;Or++)Fr&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Z.get(T).__webglTexture,Y,St+Or),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Z.get(F).__webglTexture,De,un+Or)),G.blitFramebuffer(Ve,ft,Be,Ie,He,Nt,Be,Ie,G.DEPTH_BUFFER_BIT,G.NEAREST);v.bindFramebuffer(G.READ_FRAMEBUFFER,null),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||Z.has(T)){let on=Z.get(T),Cs=Z.get(F);v.bindFramebuffer(G.READ_FRAMEBUFFER,I),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,O);for(let qt=0;qt<ze;qt++)Fr?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,on.__webglTexture,Y,St+qt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,on.__webglTexture,Y),Ft?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Cs.__webglTexture,De,un+qt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Cs.__webglTexture,De),Y!==0?G.blitFramebuffer(Ve,ft,Be,Ie,He,Nt,Be,Ie,G.COLOR_BUFFER_BIT,G.NEAREST):Ft?G.copyTexSubImage3D(Oe,De,He,Nt,un+qt,Ve,ft,Be,Ie):G.copyTexSubImage2D(Oe,De,He,Nt,Ve,ft,Be,Ie);v.bindFramebuffer(G.READ_FRAMEBUFFER,null),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ft?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(Oe,De,He,Nt,un,Be,Ie,ze,zt,Nn,Kt.data):F.isCompressedArrayTexture?G.compressedTexSubImage3D(Oe,De,He,Nt,un,Be,Ie,ze,zt,Kt.data):G.texSubImage3D(Oe,De,He,Nt,un,Be,Ie,ze,zt,Nn,Kt):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,De,He,Nt,Be,Ie,zt,Nn,Kt.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,De,He,Nt,Kt.width,Kt.height,zt,Kt.data):G.texSubImage2D(G.TEXTURE_2D,De,He,Nt,Be,Ie,zt,Nn,Kt);v.pixelStorei(G.UNPACK_ROW_LENGTH,Gn),v.pixelStorei(G.UNPACK_IMAGE_HEIGHT,wt),v.pixelStorei(G.UNPACK_SKIP_PIXELS,ai),v.pixelStorei(G.UNPACK_SKIP_ROWS,Oi),v.pixelStorei(G.UNPACK_SKIP_IMAGES,As),De===0&&F.generateMipmaps&&G.generateMipmap(Oe),v.unbindTexture()},this.initRenderTarget=function(T){Z.get(T).__webglFramebuffer===void 0&&te.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?te.setTextureCube(T,0):T.isData3DTexture?te.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?te.setTexture2DArray(T,0):te.setTexture2D(T,0),v.unbindTexture()},this.resetState=function(){X=0,K=0,z=null,v.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};var Po={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ii=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Jb=new Hs(-1,1,1,-1,0,1),pf=class extends $t{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}},jb=new pf,Ks=class{constructor(e){this._mesh=new It(jb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Io=class extends ii{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ps.clone(e.uniforms),this.material=new Yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ks(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var tl=class extends ii{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Oh=class extends ii{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Bh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ue);this._width=i.width,this._height=i.height,t=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Io(Po),this.copyPass.material.blending=ui,this.timer=new ka}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}tl!==void 0&&(o instanceof tl?i=!0:o instanceof Oh&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var zh=class extends ii{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Fe}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Im={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Fe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Lo=class n extends ii{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new Fe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(r,o,{type:xn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new nn(r,o,{type:xn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let h=new nn(r,o,{type:xn,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),o=Math.round(o/2)}let a=Im;this.highPassUniforms=ps.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Yt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ue(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ps.clone(Po.uniforms),this.blendMaterial=new Yt({uniforms:this.copyUniforms,vertexShader:Po.vertexShader,fragmentShader:Po.fragmentShader,premultipliedAlpha:!0,blending:Tn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Fe,this._oldClearAlpha=1,this._basic=new ot,this._fsQuad=new Ks(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ue(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Yt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Lo.BlurDirectionX=new ue(1,0);Lo.BlurDirectionY=new ue(0,1);var nl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Hh=class extends ii{constructor(){super(),this.isOutputPass=!0,this.uniforms=ps.clone(nl.uniforms),this.material=new _o({name:nl.name,uniforms:this.uniforms,vertexShader:nl.vertexShader,fragmentShader:nl.fragmentShader}),this._fsQuad=new Ks(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},yt.getTransfer(this._outputColorSpace)===Pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ba?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===za?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ga?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Va?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ha&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var il=new D;function pi(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;il.copy(e),il[i]=0,il.normalize();let c=.5*o/(o+a),u=1-il.angleTo(n)/l;return Math.sign(il[t])===1?u*c:a/(o+a)+c+c*(1-u)}var Gh=class n extends hi{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new D,c=new D,u=new D(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,y=new D,m=.5/o;for(let p=0,b=0;p<d.length;p+=3,b+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=u.x*Math.sign(l.x)+c.x*r,d[p+1]=u.y*Math.sign(l.y)+c.y*r,d[p+2]=u.z*Math.sign(l.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/g)){case 0:y.set(1,0,0),f[b+0]=pi(y,c,"z","y",r,i),f[b+1]=1-pi(y,c,"y","z",r,t);break;case 1:y.set(-1,0,0),f[b+0]=1-pi(y,c,"z","y",r,i),f[b+1]=1-pi(y,c,"y","z",r,t);break;case 2:y.set(0,1,0),f[b+0]=1-pi(y,c,"x","z",r,e),f[b+1]=pi(y,c,"z","x",r,i);break;case 3:y.set(0,-1,0),f[b+0]=1-pi(y,c,"x","z",r,e),f[b+1]=1-pi(y,c,"z","x",r,i);break;case 4:y.set(0,0,1),f[b+0]=1-pi(y,c,"x","y",r,e),f[b+1]=1-pi(y,c,"y","x",r,t);break;case 5:y.set(0,0,-1),f[b+0]=pi(y,c,"x","y",r,e),f[b+1]=1-pi(y,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var Tr=(n,e)=>n+Math.random()*(e-n),Zn=(n,e,t)=>n<e?e:n>t?t:n,gf=(n,e,t)=>n+(e-n)*t,si=(n,e,t,i)=>n+(e-n)*(1-Math.exp(-t*i));var mf=4242,Q=(n=0,e=1)=>(mf=mf*16807%2147483647,n+mf/2147483647*(e-n));function Qb(n,e,t,i=!0){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new as(s);return i&&(r.colorSpace=an),r}function sl(n="rgba(255,200,120,1)",e="rgba(255,120,30,0.35)"){return Qb(128,128,t=>{let i=t.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,n),i.addColorStop(.25,e),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,128,128)})}var Gt={get(n,e){try{let t=localStorage.getItem(n);return t==null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}};var mt=Math.PI*2,xf={};function sn(n,e){let t=document.createElement("canvas");return t.width=n,t.height=e,[t,t.getContext("2d")]}function at(n,e=[1,1],t=!0){let i=new as(n);return t&&(i.colorSpace=an),i.wrapS=i.wrapT=oo,i.repeat.set(e[0],e[1]),i.anisotropy=4,i}function Bn(n,e){return xf[n]||(xf[n]=e()),xf[n]}function Yi(n,e,t,i,s,r="0,0,0"){for(let o=0;o<i;o++)n.fillStyle=`rgba(${r},${Q(0,s)})`,n.fillRect(Q(0,e),Q(0,t),Q(1,3),Q(1,3))}function bf(n="#2a1830",e="#3e2446",t="rgba(200,150,90,0.22)"){return Bn("wp"+n+e,()=>{let[i,s]=sn(512,512);s.fillStyle=n,s.fillRect(0,0,512,512);let r=(o,a,l)=>{s.save(),s.translate(o,a),s.scale(l,l),s.fillStyle=e,s.strokeStyle=t,s.lineWidth=2.2,s.beginPath(),s.moveTo(0,-90),s.bezierCurveTo(40,-60,60,-20,30,10),s.bezierCurveTo(60,30,50,70,0,95),s.bezierCurveTo(-50,70,-60,30,-30,10),s.bezierCurveTo(-60,-20,-40,-60,0,-90),s.fill(),s.stroke(),s.beginPath(),s.ellipse(0,0,14,24,0,0,mt),s.fillStyle=n,s.fill(),s.stroke();for(let c of[-1,1])s.beginPath(),s.moveTo(c*30,10),s.quadraticCurveTo(c*80,-10,c*70,-50),s.stroke(),s.beginPath(),s.arc(c*70,-54,6,0,mt),s.fillStyle=e,s.fill(),s.stroke();s.restore()};for(let[o,a]of[[128,128],[384,384],[384,-128],[-128,384],[384,640],[640,384]])r(o,a,1);for(let[o,a]of[[384,128],[128,384]])r(o,a,.55);s.fillStyle="rgba(0,0,0,0.12)";for(let o=0;o<512;o+=64)s.fillRect(o,0,2,512);for(let o=0;o<18;o++){let a=s.createRadialGradient(Q(0,512),Q(0,512),0,256,256,0)}return Yi(s,512,512,4e3,.08),i})}function Zs(n=[92,54,30],e=6,t=4){return Bn("wood"+n+e,()=>{let[i,s]=sn(512,512),r=512/e;for(let o=0;o<e;o++){let a=Q(.75,1.15);s.fillStyle=`rgb(${n[0]*a|0},${n[1]*a|0},${n[2]*a|0})`,s.fillRect(0,o*r,512,r);for(let c=0;c<28;c++){s.strokeStyle=`rgba(${Q(0,1)<.5?"20,8,0":"160,110,70"},${Q(.05,.18)})`,s.lineWidth=Q(.5,2),s.beginPath();let u=o*r+Q(2,r-2);s.moveTo(0,u);for(let d=0;d<=512;d+=32)s.lineTo(d,u+Math.sin(d*.02+c)*Q(.5,2.5));s.stroke()}s.fillStyle="rgba(10,4,0,0.85)",s.fillRect(0,o*r,512,2.5);let l=Q(0,512);for(let c=l%(512/t*2);c<512;c+=512/t*2)s.fillRect(c,o*r,2,r);Q()<.5&&(s.fillStyle="rgba(30,12,0,0.45)",s.beginPath(),s.ellipse(Q(0,512),o*r+r/2,Q(4,9),Q(2,4),0,0,mt),s.fill())}return Yi(s,512,512,3e3,.1),i})}function Dm(n=[70,38,20]){return Bn("grain"+n,()=>{let[e,t]=sn(256,256);t.fillStyle=`rgb(${n})`,t.fillRect(0,0,256,256);for(let i=0;i<70;i++){t.strokeStyle=`rgba(${Q()<.5?"15,6,0":"150,100,60"},${Q(.05,.2)})`,t.lineWidth=Q(.5,2.5),t.beginPath();let s=Q(0,256);t.moveTo(s,0);for(let r=0;r<=256;r+=16)t.lineTo(s+Math.sin(r*.03+i)*Q(1,5),r);t.stroke()}return Yi(t,256,256,1500,.1),e})}function ms(n=[70,62,70]){return Bn("stone"+n,()=>{let[e,t]=sn(512,512);t.fillStyle="#1a1418",t.fillRect(0,0,512,512);let i=8,s=512/i;for(let r=0;r<i;r++){let o=r%2?-40:0;for(;o<512;){let a=Q(60,110),l=Q(.7,1.2);t.fillStyle=`rgb(${n[0]*l|0},${n[1]*l|0},${n[2]*l|0})`,t.beginPath(),t.roundRect?t.roundRect(o+3,r*s+3,a-6,s-6,8):t.rect(o+3,r*s+3,a-6,s-6),t.fill();let c=t.createLinearGradient(0,r*s,0,r*s+s);c.addColorStop(0,"rgba(255,255,255,0.08)"),c.addColorStop(1,"rgba(0,0,0,0.25)"),t.fillStyle=c,t.fill(),o+=a}}return Yi(t,512,512,9e3,.15),Yi(t,512,512,2e3,.06,"255,255,255"),e})}function Nm(){return Bn("sfloor",()=>{let[n,e]=sn(512,512);e.fillStyle="#141014",e.fillRect(0,0,512,512);for(let t=0;t<4;t++)for(let i=0;i<4;i++){let s=Q(.75,1.15);e.fillStyle=`rgb(${62*s|0},${54*s|0},${52*s|0})`,e.fillRect(i*128+3,t*128+3,122,122)}return Yi(e,512,512,9e3,.14),n})}function Um(){return Bn("marble",()=>{let[n,e]=sn(512,512);for(let t=0;t<4;t++)for(let i=0;i<4;i++)e.fillStyle=(i+t)%2?"#1c1418":"#8a7c74",e.fillRect(i*128,t*128,128,128);for(let t=0;t<40;t++){e.strokeStyle=`rgba(${Q()<.5?"255,240,230":"0,0,0"},${Q(.04,.14)})`,e.lineWidth=Q(.6,2),e.beginPath();let i=Q(0,512),s=Q(0,512);e.moveTo(i,s);for(let r=0;r<8;r++)i+=Q(-50,50),s+=Q(-50,50),e.lineTo(i,s);e.stroke()}e.fillStyle="rgba(0,0,0,0.5)";for(let t=0;t<=4;t++)e.fillRect(t*128-1,0,2,512),e.fillRect(0,t*128-1,512,2);return n})}function Vh(n="#6a1020",e="#2a0610",t="#c89040"){return Bn("rug"+n,()=>{let[i,s]=sn(512,1024);s.fillStyle=e,s.fillRect(0,0,512,1024),s.fillStyle=n,s.fillRect(40,40,432,944),s.strokeStyle=t,s.lineWidth=6,s.strokeRect(28,28,456,968),s.lineWidth=3,s.strokeRect(52,52,408,920),s.save(),s.translate(256,512),s.strokeStyle=t,s.lineWidth=4;for(let r=0;r<6;r++)s.rotate(Math.PI/3),s.beginPath(),s.ellipse(0,90,30,90,0,0,mt),s.stroke();s.beginPath(),s.arc(0,0,40,0,mt),s.fillStyle=e,s.fill(),s.stroke(),s.restore();for(let r=120;r<920;r+=60)s.fillStyle="rgba(200,140,60,0.25)",s.beginPath(),s.moveTo(100,r),s.lineTo(115,r+15),s.lineTo(100,r+30),s.lineTo(85,r+15),s.fill(),s.beginPath(),s.moveTo(412,r),s.lineTo(427,r+15),s.lineTo(412,r+30),s.lineTo(397,r+15),s.fill();return Yi(s,512,1024,14e3,.12),i})}function $s(n=!0,e=256,t=512){return Bn("nw"+n+e+t,()=>{let[i,s]=sn(e,t),r=s.createLinearGradient(0,0,0,t);r.addColorStop(0,"#0a0c2c"),r.addColorStop(.6,"#2a2a6a"),r.addColorStop(1,"#5a4a8a"),s.fillStyle=r,s.fillRect(0,0,e,t);for(let o=0;o<80;o++)s.fillStyle=`rgba(255,255,255,${Q(.2,.9)})`,s.fillRect(Q(0,e),Q(0,t*.6),1.5,1.5);if(n){let o=s.createRadialGradient(e*.62,t*.24,0,e*.62,t*.24,e*.45);o.addColorStop(0,"rgba(240,240,255,1)"),o.addColorStop(.14,"rgba(220,225,255,1)"),o.addColorStop(.18,"rgba(160,170,255,0.5)"),o.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=o,s.fillRect(0,0,e,t)}s.fillStyle="#05040e",s.beginPath(),s.moveTo(0,t);for(let o=0;o<=e;o+=8)s.lineTo(o,t*.82-Math.abs(Math.sin(o*.05))*t*.08-(o%64<8?t*.12:0));s.lineTo(e,t),s.fill(),s.strokeStyle="#05040e",s.lineWidth=3;for(let o=0;o<4;o++){let a=Q(0,e);s.beginPath(),s.moveTo(a,t*.85),s.lineTo(a+Q(-20,20),t*.55),s.lineTo(a+Q(-40,40),t*.45),s.stroke()}return i})}function Wh(){return Bn("ray",()=>{let[n,e]=sn(128,512),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.5,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,512);let i=e.createLinearGradient(0,0,128,0);return i.addColorStop(0,"rgba(0,0,0,1)"),i.addColorStop(.25,"rgba(0,0,0,0)"),i.addColorStop(.75,"rgba(0,0,0,0)"),i.addColorStop(1,"rgba(0,0,0,1)"),e.globalCompositeOperation="destination-out",e.fillStyle=i,e.fillRect(0,0,128,512),n})}function km(n="rgba(255,255,255,1)",e="rgba(255,255,255,0.3)"){return Bn("dot"+n+e,()=>{let[t,i]=sn(64,64),s=i.createRadialGradient(32,32,0,32,32,32);return s.addColorStop(0,n),s.addColorStop(.3,e),s.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=s,i.fillRect(0,0,64,64),t})}function Fm(){return Bn("flame",()=>{let[n,e]=sn(64,128),t=e.createRadialGradient(32,92,2,32,80,52);return t.addColorStop(0,"rgba(255,255,235,1)"),t.addColorStop(.18,"rgba(255,220,120,1)"),t.addColorStop(.45,"rgba(255,120,20,0.75)"),t.addColorStop(1,"rgba(120,20,0,0)"),e.fillStyle=t,e.beginPath(),e.moveTo(32,4),e.bezierCurveTo(52,50,58,80,32,120),e.bezierCurveTo(6,80,12,50,32,4),e.fill(),n})}function rl(){return Bn("fog",()=>{let[n,e]=sn(256,256);for(let t=0;t<26;t++){let i=Q(40,216),s=Q(70,186),r=Q(30,80),o=e.createRadialGradient(i,s,0,i,s,r);o.addColorStop(0,"rgba(255,255,255,0.18)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,256,256)}return n})}function _f(n,e,t,i,s){let r=n.createRadialGradient(e/2,t*.35,10,e/2,t/2,t*.75);r.addColorStop(0,i),r.addColorStop(1,s),n.fillStyle=r,n.fillRect(0,0,e,t)}function yf(n,e,t,i=3e3){for(let s=0;s<i;s++){n.strokeStyle=`rgba(${Q()<.5?"0,0,0":"255,230,200"},${Q(.01,.05)})`,n.lineWidth=Q(1,3);let r=Q(0,e),o=Q(0,t);n.beginPath(),n.moveTo(r,o),n.lineTo(r+Q(-8,8),o+Q(-8,8)),n.stroke()}}function mi(n){return Bn("pt"+n,()=>{let[i,s]=sn(384,512);if(n==="ship")return _f(s,384,512,"#4a5a7a","#0a0c1a"),s.fillStyle="#0c1420",s.fillRect(0,512*.68,384,512),s.fillStyle="rgba(230,230,255,0.85)",s.beginPath(),s.arc(384*.72,512*.2,26,0,mt),s.fill(),s.fillStyle="#120c08",s.beginPath(),s.moveTo(80,340),s.lineTo(310,340),s.lineTo(280,380),s.lineTo(110,380),s.fill(),s.fillRect(190,140,6,200),s.fillStyle="rgba(220,210,190,0.6)",s.beginPath(),s.moveTo(196,150),s.lineTo(290,300),s.lineTo(196,310),s.fill(),s.beginPath(),s.moveTo(190,170),s.lineTo(110,300),s.lineTo(190,310),s.fill(),yf(s,384,512),at(i);if(n==="cat"){_f(s,384,512,"#5a3a2a","#0e0806"),s.fillStyle="#16101a",s.beginPath(),s.ellipse(192,380,120,130,0,0,mt),s.fill(),s.beginPath(),s.ellipse(192,230,80,72,0,0,mt),s.fill(),s.beginPath(),s.moveTo(122,200),s.lineTo(130,130),s.lineTo(170,175),s.fill(),s.beginPath(),s.moveTo(262,200),s.lineTo(254,130),s.lineTo(214,175),s.fill(),s.fillStyle="#e8c040";for(let l of[-1,1])s.beginPath(),s.ellipse(192+l*32,228,14,10,0,0,mt),s.fill();s.fillStyle="#000";for(let l of[-1,1])s.fillRect(192+l*32-2,218,4,20);return s.fillStyle="#a02030",s.fillRect(140,300,104,14),s.fillStyle="#e0b040",s.beginPath(),s.arc(192,322,9,0,mt),s.fill(),yf(s,384,512),at(i)}let r=n.startsWith("lady");if(_f(s,384,512,r?"#3a4a3a":"#5a3020",r?"#060a06":"#0e0604"),s.fillStyle=r?"#3a1030":"#121018",s.beginPath(),s.moveTo(40,512),s.bezierCurveTo(50,360,120,330,192,330),s.bezierCurveTo(264,330,334,360,344,512),s.fill(),!r)s.fillStyle="#e8e0d0",s.beginPath(),s.moveTo(170,330),s.lineTo(192,390),s.lineTo(214,330),s.fill(),s.fillStyle="#8a1020",s.fillRect(186,336,12,40);else{s.fillStyle="#d0c8b8";for(let l=0;l<9;l++)s.beginPath(),s.arc(130+l*16,350+Math.sin(l/8*Math.PI)*22,6,0,mt),s.fill()}let o=n==="ladyScream"?"#b8c4c8":r?"#d8b8a0":"#c89a7a";s.fillStyle=o,s.fillRect(170,280,44,60),s.beginPath(),s.ellipse(192,220,64,84,0,0,mt),s.fill();let a=s.createRadialGradient(170,200,10,192,230,100);if(a.addColorStop(0,"rgba(255,240,220,0.25)"),a.addColorStop(1,"rgba(40,10,0,0.45)"),s.fillStyle=a,s.beginPath(),s.ellipse(192,220,64,84,0,0,mt),s.fill(),s.fillStyle=r?"#2a1408":"#3a3434",r?(s.beginPath(),s.ellipse(192,150,78,56,0,Math.PI,mt),s.fill(),s.beginPath(),s.ellipse(192,110,46,40,0,0,mt),s.fill(),s.fillRect(118,150,18,90),s.fillRect(248,150,18,90)):(s.beginPath(),s.ellipse(192,158,70,40,0,Math.PI,mt),s.fill(),s.fillRect(124,158,14,60),s.fillRect(246,158,14,60),s.fillStyle="#2a2424",s.beginPath(),s.moveTo(150,262),s.quadraticCurveTo(192,250,234,262),s.quadraticCurveTo(192,275,150,262),s.fill()),n==="lord"){s.fillStyle="#100808";for(let l of[-1,1])s.beginPath(),s.ellipse(192+l*26,210,14,8,0,0,mt),s.fill()}else if(n==="ladyScream"){s.fillStyle="#05000a";for(let l of[-1,1])s.beginPath(),s.ellipse(192+l*26,205,18,24,l*.2,0,mt),s.fill();s.fillStyle="rgba(255,40,40,0.9)";for(let l of[-1,1])s.beginPath(),s.arc(192+l*26,208,4,0,mt),s.fill();s.fillStyle="#05000a",s.beginPath(),s.ellipse(192,272,26,40,0,0,mt),s.fill()}else{for(let l of[-1,1]){if(n==="ladyWink"&&l===1){s.strokeStyle="#2a1408",s.lineWidth=4,s.beginPath(),s.arc(192+l*26,206,11,.2,Math.PI-.2),s.stroke();continue}s.fillStyle="#f0ece4",s.beginPath(),s.ellipse(192+l*26,208,12,7,0,0,mt),s.fill(),s.fillStyle="#2a4a30",s.beginPath(),s.arc(192+l*26,208,5,0,mt),s.fill()}if(s.fillStyle="#8a2a2a",s.beginPath(),s.ellipse(192,266,16,n==="ladyWink"?8:5,0,0,Math.PI),s.fill(),n==="ladyWink"){s.fillStyle="rgba(255,100,120,0.4)";for(let l of[-1,1])s.beginPath(),s.ellipse(192+l*40,242,14,8,0,0,mt),s.fill()}}s.strokeStyle="rgba(60,20,10,0.6)",s.lineWidth=2,s.beginPath(),s.moveTo(192,215),s.lineTo(186,245),s.lineTo(196,247),s.stroke(),yf(s,384,512,4e3),s.strokeStyle="rgba(0,0,0,0.12)",s.lineWidth=.8;for(let l=0;l<60;l++){let c=Q(0,384),u=Q(0,512);s.beginPath(),s.moveTo(c,u);for(let d=0;d<4;d++)c+=Q(-20,20),u+=Q(-20,20),s.lineTo(c,u);s.stroke()}return at(i)})}var eM={moon:(n,e)=>{n.beginPath(),n.arc(0,0,e,0,mt),n.fill(),n.globalCompositeOperation="destination-out",n.beginPath(),n.arc(e*.45,-e*.2,e*.85,0,mt),n.fill(),n.globalCompositeOperation="source-over"},pumpkin:(n,e)=>{for(let t of[-.45,0,.45])n.beginPath(),n.ellipse(t*e,0,e*.55,e*.8,0,0,mt),n.fill();n.fillRect(-e*.1,-e*1.15,e*.2,e*.4)},bat:(n,e)=>{n.beginPath(),n.moveTo(0,-e*.3),n.quadraticCurveTo(e*.5,-e*.9,e*1.2,-e*.5),n.quadraticCurveTo(e*.9,0,e*1,e*.3),n.quadraticCurveTo(e*.6,e*.05,e*.4,e*.45),n.quadraticCurveTo(e*.2,e*.2,0,e*.6),n.quadraticCurveTo(-e*.2,e*.2,-e*.4,e*.45),n.quadraticCurveTo(-e*.6,e*.05,-e*1,e*.3),n.quadraticCurveTo(-e*.9,0,-e*1.2,-e*.5),n.quadraticCurveTo(-e*.5,-e*.9,0,-e*.3),n.fill()},skull:(n,e)=>{n.beginPath(),n.ellipse(0,-e*.1,e*.85,e*.8,0,0,mt),n.fill(),n.fillRect(-e*.45,e*.4,e*.9,e*.45),n.globalCompositeOperation="destination-out";for(let t of[-1,1])n.beginPath(),n.ellipse(t*e*.33,-e*.1,e*.22,e*.26,0,0,mt),n.fill();n.beginPath(),n.moveTo(0,e*.15),n.lineTo(-e*.1,e*.35),n.lineTo(e*.1,e*.35),n.fill(),n.globalCompositeOperation="source-over"},spider:(n,e)=>{n.beginPath(),n.ellipse(0,e*.15,e*.42,e*.5,0,0,mt),n.fill(),n.beginPath(),n.arc(0,-e*.45,e*.25,0,mt),n.fill(),n.lineWidth=e*.1,n.strokeStyle=n.fillStyle;for(let t of[-1,1])for(let i=0;i<4;i++)n.beginPath(),n.moveTo(0,0),n.lineTo(t*e*.9,-e*.5+i*e*.35),n.lineTo(t*e*1.15,-e*.2+i*e*.4),n.stroke()}},Do=["moon","pumpkin","bat","skull","spider"],Er={moon:"#3f74d8",pumpkin:"#e8741a",bat:"#8a44c8",skull:"#2f9a48",spider:"#cc2a2a"};function Lm(n,e,t,i,s){n.fillStyle=s,n.strokeStyle="#1e0e04",n.lineWidth=4,n.fillRect(e-i*.32,t-i*.6,i*.64,i*1.5),n.strokeRect(e-i*.32,t-i*.6,i*.64,i*1.5),n.fillStyle="#1e0e04",n.fillRect(e-2,t-i*.85,4,i*.27),n.fillStyle="#e8820e",n.beginPath(),n.moveTo(e,t-i*1.55),n.bezierCurveTo(e+i*.32,t-i*1.1,e+i*.22,t-i*.85,e,t-i*.8),n.bezierCurveTo(e-i*.22,t-i*.85,e-i*.32,t-i*1.1,e,t-i*1.55),n.fill(),n.stroke(),n.fillStyle="#5a3010",n.fillRect(e-i*.5,t+i*.9,i,i*.14)}function vf(n,e,t,i,s,r){n.save(),n.translate(t,i),n.fillStyle=r,eM[e](n,s),n.restore()}function Om(n){return Bn("sp"+n,()=>{let[e,t]=sn(128,128),i=t.createLinearGradient(0,0,0,128);return i.addColorStop(0,"#e0b060"),i.addColorStop(.5,"#a0702a"),i.addColorStop(1,"#5a3a10"),t.fillStyle=i,t.beginPath(),t.arc(64,64,60,0,mt),t.fill(),t.strokeStyle="#3a2008",t.lineWidth=5,t.stroke(),t.fillStyle=Er[n],t.beginPath(),t.arc(64,64,46,0,mt),t.fill(),t.lineWidth=3,t.stroke(),vf(t,n,64,66,28,"#140a02"),at(e)})}function Mf(n,e,t){let i=n.createRadialGradient(e/2,t/2,10,e/2,t/2,Math.max(e,t)*.7);i.addColorStop(0,"#f0dcb0"),i.addColorStop(.7,"#d4b47a"),i.addColorStop(1,"#7a5428"),n.fillStyle=i,n.fillRect(0,0,e,t),Yi(n,e,t,6e3,.08,"90,50,10");for(let s=0;s<8;s++){let r=Q(0,e),o=Q(0,t),a=Q(10,40),l=n.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(120,70,20,0.2)"),l.addColorStop(1,"rgba(120,70,20,0)"),n.fillStyle=l,n.fillRect(r-a,o-a,a*2,a*2)}}function Di(n,e,t,i,s,r="#3a1c08",o="center"){n.font=e,n.fillStyle=r,n.textAlign=o,n.textBaseline="middle",n.fillText(t,i,s)}var Ni='Georgia, "Times New Roman", serif';function Bm(n,e){let[t,i]=sn(1024,640);Mf(i,1024,640),i.fillStyle="rgba(60,30,10,0.35)",i.fillRect(508,0,8,640),Di(i,`italic 700 44px ${Ni}`,e[0],256,80,"#1e0e04"),Di(i,`italic 32px ${Ni}`,e[1],256,132,"#3a1c08"),Do.forEach((o,a)=>{let l=76+a*90,c=300;i.fillStyle=Er[o],i.strokeStyle="#1e0e04",i.lineWidth=4,i.beginPath(),i.arc(l,c,36,0,mt),i.fill(),i.stroke(),vf(i,o,l,c+2,22,"#140a02"),Lm(i,l,c+150,34,Er[o])});let s=n.length,r=560/s;return n.forEach((o,a)=>{let l=60+a*r+r/2;Di(i,`700 64px ${Ni}`,a+1+".",600,l+4,"#1e0e04"),Lm(i,715,l+6,34,Er[o]),i.fillStyle=Er[o],i.strokeStyle="#1e0e04",i.lineWidth=4,i.beginPath(),i.arc(840,l,42,0,mt),i.fill(),i.stroke(),vf(i,o,840,l+2,26,"#140a02"),a<s-1&&(i.strokeStyle="rgba(60,30,10,0.35)",i.lineWidth=2,i.beginPath(),i.moveTo(560,l+r/2),i.lineTo(960,l+r/2),i.stroke())}),at(t)}function zm(n,e,t){let[i,s]=sn(640,900);Mf(s,640,900),Di(s,`italic 700 46px ${Ni}`,e[0],320,80),Di(s,`italic 28px ${Ni}`,e[1],320,130,"#5a3010");let r=n.length+1,o=600/r;n.forEach((l,c)=>{let u=210+c*o;Di(s,`700 52px ${Ni}`,c+1+".",120,u),s.fillStyle=l,s.strokeStyle="#2a1404",s.lineWidth=5,s.beginPath(),s.moveTo(300,u-60),s.lineTo(300,u-30),s.bezierCurveTo(250,u-10,240,u+50,320,u+60),s.bezierCurveTo(400,u+50,390,u-10,340,u-30),s.lineTo(340,u-60),s.closePath(),s.fill(),s.stroke(),s.fillStyle="#5a3010",s.fillRect(296,u-76,48,18)});let a=210+n.length*o;return Di(s,`700 52px ${Ni}`,r+".",120,a),s.fillStyle="#c8e0ff",s.strokeStyle="#2a1404",s.lineWidth=5,s.beginPath(),s.moveTo(320,a-60),s.lineTo(360,a),s.lineTo(320,a+60),s.lineTo(280,a),s.closePath(),s.fill(),s.stroke(),Di(s,`italic 30px ${Ni}`,t,470,a,"#3a1c08"),s.strokeStyle="rgba(60,30,10,0.4)",s.lineWidth=3,s.strokeRect(30,30,580,840),at(i)}function Hm(n,e){let[t,i]=sn(900,560);Mf(i,900,560),Di(i,`italic 700 44px ${Ni}`,e,450,70);for(let r=0;r<5;r++)i.strokeStyle="rgba(40,20,5,0.7)",i.lineWidth=3,i.beginPath(),i.moveTo(60,200+r*40),i.lineTo(840,200+r*40),i.stroke();Di(i,`140px ${Ni}`,"\u{1D11E}",110,280,"#2a1404");let s=n.length;return n.forEach(([r,o],a)=>{let l=240+a*(560/Math.max(1,s-1||1))*(s>1?1:0),c=360-o*30;i.fillStyle=r,i.strokeStyle="#1a0c04",i.lineWidth=4,i.beginPath(),i.ellipse(l,c,26,19,-.35,0,mt),i.fill(),i.stroke(),i.beginPath(),i.moveTo(l+24,c-6),i.lineTo(l+24,c-120),i.stroke()}),at(t)}function Gm(){return Bn("clock",()=>{let[n,e]=sn(512,512),t=e.createRadialGradient(256,256,20,256,256,256);t.addColorStop(0,"#f4e8cc"),t.addColorStop(.8,"#d8c49a"),t.addColorStop(1,"#8a6a3a"),e.fillStyle=t,e.beginPath(),e.arc(256,256,250,0,mt),e.fill(),e.strokeStyle="#3a2408",e.lineWidth=6,e.beginPath(),e.arc(256,256,236,0,mt),e.stroke(),e.lineWidth=2,e.beginPath(),e.arc(256,256,170,0,mt),e.stroke();let i=["XII","I","II","III","IIII","V","VI","VII","VIII","IX","X","XI"];for(let s=0;s<12;s++){let r=s/12*mt-Math.PI/2;e.save(),e.translate(256+Math.cos(r)*203,256+Math.sin(r)*203),e.rotate(r+Math.PI/2),Di(e,`700 40px ${Ni}`,i[s],0,0,"#2a1404"),e.restore()}for(let s=0;s<60;s++){let r=s/60*mt;e.fillStyle="#3a2408",e.save(),e.translate(256,256),e.rotate(r),e.fillRect(-1.5,-236,3,s%5?8:16),e.restore()}return Yi(e,512,512,3e3,.08,"80,50,10"),at(n)})}function Vm(){return Bn("spine",()=>{let[n,e]=sn(64,256);e.fillStyle="#fff",e.fillRect(0,0,64,256),e.fillStyle="rgba(0,0,0,0.25)",e.fillRect(0,0,6,256),e.fillRect(58,0,6,256),e.fillStyle="#e8c070";for(let t of[24,36,210,222])e.fillRect(4,t,56,5);return e.fillRect(16,100,32,50),Yi(e,64,256,600,.15),at(n,[1,1],!0)})}var qh={};Pp(qh,{ENV:()=>xi,animateCurtains:()=>Ef,box:()=>En,candelabra:()=>ys,chandelier:()=>Xh,cobweb:()=>Af,coldT:()=>_s,cyl:()=>Ui,dust:()=>wr,dustT:()=>Zm,flameT:()=>No,flicker:()=>wf,fogLayer:()=>Ar,frame:()=>Ki,glowT:()=>$n,gold:()=>xs,iron:()=>Km,makeBat:()=>Cf,makeCandle:()=>zn,makeGhostFigure:()=>ko,makeWindow:()=>ll,mesh:()=>Lt,metal:()=>wn,setLit:()=>Uo,shell:()=>al,sprite:()=>gs,std:()=>gi,table:()=>vs,woodMat:()=>ol});var xi={map:null},Tf={};function gi(n,e={}){return new Pi(Object.assign({color:n,roughness:.75,metalness:0},e))}function wn(n=13145660,e=.35){let t="m"+n+e;return Tf[t]?Tf[t]:Tf[t]=new Pi({color:n,metalness:.85,roughness:e,envMap:xi.map,envMapIntensity:1})}function xs(){return wn(13935180,.32)}function Km(){return wn(3814452,.55)}function ol(n=[70,38,20],e=[1,1],t={}){let i=at(Dm(n),e);return gi(16777215,Object.assign({map:i,roughness:.62},t))}function Lt(n,e,t=0,i=0,s=0,r){let o=new It(n,e);return o.position.set(t,i,s),r&&r.add(o),o}function En(n,e,t,i,s,r,o,a){return Lt(new hi(n,e,t),i,s,r,o,a)}function Ui(n,e,t,i,s,r,o,a,l=16){return Lt(new Ri(n,e,t,l),i,s,r,o,a)}function gs(n,e,t,i,s,r,o={}){let a=new fr(new Us(Object.assign({map:n,blending:Tn,depthWrite:!1,transparent:!0},o)));return a.scale.set(e,e,1),a.position.set(t,i,s),r&&r.add(a),a}var Wm=null,Xm=null,qm=null,Ym=null;function $n(){return Wm||(Wm=sl("rgba(255,200,120,1)","rgba(255,120,30,0.3)"))}function _s(){return qm||(qm=sl("rgba(190,210,255,0.9)","rgba(110,130,255,0.25)"))}function No(){return Xm||(Xm=at(Fm(),[1,1]))}function Zm(){return Ym||(Ym=at(km("rgba(255,240,220,1)","rgba(255,220,180,0.25)"),[1,1]))}function al(n,e){let{w:t,d:i,h:s,z0:r=-i/2}=e,o=n.group,a=r+i,l=at(e.floor,e.floorRep||[t/4,i/4]),c=Lt(new xt(t,i),gi(16777215,{map:l,roughness:e.floorRough??.45,metalness:.05}),0,0,r+i/2,o);if(c.rotation.x=-Math.PI/2,e.ceil!==!1){let f=e.ceil?gi(16777215,{map:at(e.ceil,[t/4,i/4]),roughness:.9}):gi(1708568,{roughness:1}),g=Lt(new xt(t,i),f,0,s,r+i/2,o);g.rotation.x=Math.PI/2}let u=f=>gi(16777215,{map:at(e.wall,[f/(e.wallScale||3),s/(e.wallScale||3)]),roughness:.85}),d=[[t,0,s/2,r,0],[t,0,s/2,a,Math.PI],[i,-t/2,s/2,r+i/2,Math.PI/2],[i,t/2,s/2,r+i/2,-Math.PI/2]],h=e.holeBack;for(let[f,g,y,m,p]of d){let b=new xt(f,s);if(h&&p===0&&m===r){let x=new cs;x.moveTo(-f/2,-s/2),x.lineTo(f/2,-s/2),x.lineTo(f/2,s/2),x.lineTo(-f/2,s/2),x.lineTo(-f/2,-s/2);let E=new ls;E.moveTo(h.x-h.w/2,-s/2+.001),E.lineTo(h.x-h.w/2,-s/2+h.h),E.lineTo(h.x+h.w/2,-s/2+h.h),E.lineTo(h.x+h.w/2,-s/2+.001),x.holes.push(E),b=new Fs(x);let A=b.attributes.uv,P=b.attributes.position;for(let _=0;_<A.count;_++)A.setXY(_,P.getX(_)/f+.5,P.getY(_)/s+.5)}let w=Lt(b,u(f),g,y,m,o);w.rotation.y=p}if(e.wainscot){let f=ol([48,26,16],[4,1]),g=ol([60,32,18],[6,1]),y=e.wainscot,m=h?[[h.x-h.w/2+t/2,(-t/2+h.x-h.w/2)/2],[t/2-(h.x+h.w/2),(t/2+h.x+h.w/2)/2]]:[[t,0]];for(let[p,b,w,x]of[...m.map(([E,A])=>[E,A,r+.04,0]),[t,0,a-.04,Math.PI],[i,-t/2+.04,r+i/2,Math.PI/2],[i,t/2-.04,r+i/2,-Math.PI/2]]){let E=new le;E.position.set(b,0,w),E.rotation.y=x,o.add(E),En(p,y,.06,f,0,y/2,0,E),En(p,.08,.14,g,0,y,.03,E),En(p,.22,.1,g,0,.11,.02,E);for(let A=-p/2+.6;A<p/2-.4;A+=1.2)En(.9,y-.45,.03,g,A+.15,y/2+.05,.045,E)}for(let[p,b,w,x]of[[t,0,r+.06,0],[t,0,a-.06,Math.PI],[i,-t/2+.06,r+i/2,Math.PI/2],[i,t/2-.06,r+i/2,-Math.PI/2]]){let E=En(p,.25,.14,g,b,s-.12,w,o);E.rotation.y=x}}}function ll(n,e){let{x:t,y:i,z:s,ry:r=0,w:o=1.8,h:a=3.2,arch:l=!0,curtains:c=!0,rays:u=!0}=e,d=new le;d.position.set(t,i,s),d.rotation.y=r,n.group.add(d);let h=at($s(e.moon!==!1),[1,1]),f=Lt(new xt(o,a),new ot({map:h,color:new Fe(1.15,1.15,1.3),fog:!1}),0,0,-.03,d);n.windows.push(f);let g=ol([30,18,14]);En(o+.3,.16,.3,g,0,-a/2,.02,d),En(o+.3,.16,.25,g,0,a/2,0,d),En(.16,a,.25,g,-o/2-.07,0,0,d),En(.16,a,.25,g,o/2+.07,0,0,d),En(.06,a,.06,g,0,0,.02,d);for(let y=1;y<4;y++)En(o,.05,.06,g,0,-a/2+y*a/4,.02,d);if(En(o+.6,.1,.45,ol([50,28,18]),0,-a/2-.1,.15,d),l){let y=Lt(new Jt(o/2+.05,.09,8,24,Math.PI),g,0,a/2,0,d),m=Lt(new Fn(o/2,24,0,Math.PI),f.material,0,a/2,-.03,d);n.windows.push(m)}if(e.ghost){let y=gs(at(tM(n.kids),[1,1]),.9,0,0,-.015,d,{blending:Vs,opacity:0,fog:!1});n.drifters.push({s:y,w:o,h:a,t:Q(0,20),period:Q(16,26)})}if(c){let y=gi(e.curtain||5901340,{roughness:.9,side:Ht,emissive:2098184,emissiveIntensity:.4});for(let m of[-1,1]){let p=new xt(o*.42,a+(l?o/2:0)+.6,12,16),b=Lt(p,y,m*(o/2+.05),.15+(l?o/4:0),.22,d);b.userData.base=p.attributes.position.array.slice(),b.userData.sd=m,n.curtains.push(b)}En(o+1.2,.07,.07,xs(),0,a/2+(l?o/2:0)+.32,.25,d)}if(u){let y=at(Wh(),[1,1]);for(let m=0;m<(e.rayN||3);m++){let p=e.rayLen||9,b=new ot({map:y,color:new Fe(.55,.62,1),transparent:!0,opacity:.12,blending:Tn,depthWrite:!1,side:Ht,fog:!1}),w=new It(new xt(o*Q(.35,.7),p),b),x=new le;x.position.set(Q(-o*.3,o*.3),Q(-a*.2,a*.3),.2),d.add(x),w.position.y=-p/2,x.add(w),x.rotation.x=-(e.rayTilt??.95),x.rotation.z=Q(-.15,.15)+(e.rayRoll||0),w.rotation.y=Q(-.6,.6),n.rays.push({m:b,base:.028+Q(0,.018),ph:Q(0,6)})}}return d}function tM(n){let[e,t]=sn(128,160),i=t.createRadialGradient(64,70,4,64,80,70);return i.addColorStop(0,"rgba(230,240,255,0.95)"),i.addColorStop(.6,"rgba(180,200,255,0.5)"),i.addColorStop(1,"rgba(160,180,255,0)"),t.fillStyle=i,t.beginPath(),t.moveTo(64,10),t.bezierCurveTo(110,10,112,80,108,150),t.lineTo(90,135),t.lineTo(76,152),t.lineTo(62,136),t.lineTo(46,152),t.lineTo(32,136),t.lineTo(18,150),t.bezierCurveTo(14,80,18,10,64,10),t.fill(),t.fillStyle="rgba(20,10,40,0.9)",t.beginPath(),t.ellipse(48,58,n?8:7,n?9:12,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(80,58,n?8:7,n?9:12,0,0,Math.PI*2),t.fill(),n?(t.strokeStyle="rgba(20,10,40,0.9)",t.lineWidth=4,t.beginPath(),t.arc(64,80,12,.2,Math.PI-.2),t.stroke()):(t.beginPath(),t.ellipse(64,90,8,12,0,0,Math.PI*2),t.fill()),e}function Ef(n,e,t){for(let i of n.curtains){let s=i.geometry.attributes.position,r=i.userData.base;for(let o=0;o<s.count;o++){let a=r[o*3],l=r[o*3+1],c=.5-l/i.geometry.parameters.height,u=Math.sin(e*1.3+a*4+l*.8)*.05+Math.sin(e*2.1+l*2)*.03;s.setZ(o,(u+t*.5*Math.sin(e*6+a*5))*Math.max(0,c+.4)+Math.abs(Math.sin(a*9))*.06),s.setX(o,a+t*.25*Math.max(0,c)*i.userData.sd*-1)}s.needsUpdate=!0}}function zn(n,e=.28,t=.035,i=!0,s={}){let r=new le,o=Ui(t,t*1.05,e,gi(s.wax||15786692,{roughness:.5,emissive:16751168,emissiveIntensity:i?.12:0}),0,e/2,0,r,10),a=Lt(new Jt(t*.9,t*.25,5,10),o.material,0,e-.01,0,r);a.rotation.x=Math.PI/2,Ui(.003,.003,.03,gi(1118481),0,e+.015,0,r,4);let l=gs(No(),1,0,e+.05,0,r);l.scale.set(.07*(s.fs||1),.14*(s.fs||1),1);let c=gs($n(),.5*(s.gs||1),0,e+.05,0,r,{opacity:.55}),u={g:r,wax:o,flame:l,glow:c,lit:i,h:e,ph:Q(0,10),fs:s.fs||1,gs:s.gs||1};return Uo(u,i),n.candles.push(u),u}function Uo(n,e){n.lit=e,n.flame.visible=e,n.glow.visible=e,n.wax.material.emissiveIntensity=e?.12:0}function wf(n,e){if(!n.lit)return;let t=.85+.15*Math.sin(e*11+n.ph)*Math.sin(e*7.3+n.ph*2)+.06*Math.sin(e*23+n.ph);n.flame.scale.set(.07*n.fs*(.9+.1*t),.14*n.fs*t,1),n.flame.position.x=Math.sin(e*5+n.ph)*.004,n.glow.material.opacity=.42+.18*t}function ys(n,e=3,t=!0,i=1){let s=new le,r=xs();Ui(.09,.13,.05,r,0,.025,0,s),Ui(.02,.025,.4,r,0,.22,0,s,8),Lt(new st(.04,10,8),r,0,.3,0,s);let o=[];for(let a=0;a<e;a++){let l=e===1?0:(a/(e-1)-.5)*2,c=l*.2;if(e>1&&a!==(e-1)/2){let d=Lt(new Jt(.1,.012,6,12,Math.PI),r,c/2,.42,0,s);d.rotation.z=(l>0,0),d.scale.set(Math.abs(l)*1+.001,.6,1),d.position.y=.38}Ui(.035,.02,.05,r,c,.44+(l===0?.08:0),0,s,8);let u=zn(n,.22,.026,t);u.g.position.set(c,.465+(l===0?.08:0),0),s.add(u.g),o.push(u)}return s.scale.setScalar(i),{g:s,candles:o}}function Xh(n,e=8,t=1,i=1.6){let s=new le,r=xs();Ui(.015,.015,i,Km(),0,i/2,0,s,6);let o=wn(9069608,.55),a=Lt(new Jt(t,.035,8,40),o,0,0,0,s);a.rotation.x=Math.PI/2;let l=Lt(new Jt(t*.55,.03,8,32),o,0,.35,0,s);l.rotation.x=Math.PI/2,Lt(new st(.12,12,10),r,0,.1,0,s),Lt(new Rn(.08,.35,10),r,0,-.2,0,s).rotation.x=Math.PI;let c=gi(14215423,{roughness:.05,metalness:.3,transparent:!0,opacity:.75,emissive:8425727,emissiveIntensity:.25,envMap:xi.map});for(let u=0;u<e;u++){let d=u/e*Math.PI*2,h=Math.cos(d)*t,f=Math.sin(d)*t;Ui(.05,.03,.06,r,h,.03,f,s,8);let g=zn(n,.2,.025,!0,{fs:.9,gs:.28});g.g.position.set(h,.06,f),s.add(g.g);let y=Lt(new gr(.05),c,Math.cos(d+.4)*t*.8,-.2,Math.sin(d+.4)*t*.8,s);y.scale.y=1.8;let m=Lt(new Jt(t*.5,.012,4,8,1.2),r,h*.5,.18,f*.5,s);m.rotation.y=-d}return s}function vs(n,e,t,i,s=!0){let r=new le;if(En(n,.06,e,i,0,t-.03,0,r),En(n-.08,.12,e-.08,i,0,t-.12,0,r),s)for(let o of[-1,1])for(let a of[-1,1]){let l=Ui(.035,.025,t-.06,i,o*(n/2-.08),(t-.06)/2,a*(e/2-.08),r,8)}return r}function Ki(n,e,t,i=.08){let s=new le,r=xs(),o=Lt(new xt(n,e),gi(16777215,{map:t,roughness:.55}),0,0,i*.5,s),a=.14;for(let[l,c,u,d]of[[n+a*2,a,0,e/2+a/2],[n+a*2,a,0,-e/2-a/2],[a,e,-n/2-a/2,0],[a,e,n/2+a/2,0]])En(l,c,i+.06,r,u,d,i*.5,s);for(let[l,c,u,d]of[[n+.04,.03,0,e/2+.01],[n+.04,.03,0,-e/2-.01],[.03,e,-n/2-.01,0],[.03,e,n/2+.01,0]])En(l,c,.02,wn(5913104,.5),u,d,i+.04,s);return s.userData.pic=o,s}function Af(n=1){let[e,t]=sn(256,256);t.strokeStyle="rgba(230,230,240,0.55)",t.lineWidth=1.2;for(let r=0;r<=8;r++){let o=r/8*Math.PI/2;t.beginPath(),t.moveTo(0,0),t.lineTo(Math.cos(o)*256,Math.sin(o)*256),t.stroke()}for(let r=30;r<256;r+=26){t.beginPath();for(let o=0;o<=8;o++){let a=o/8*Math.PI/2,l=r+Math.sin(o*3+r)*6;o?t.quadraticCurveTo(Math.cos(a-.1)*l*.92,Math.sin(a-.1)*l*.92,Math.cos(a)*l,Math.sin(a)*l):t.moveTo(Math.cos(a)*l,Math.sin(a)*l)}t.stroke()}let i=new ot({map:at(e,[1,1]),transparent:!0,depthWrite:!1,side:Ht,opacity:.6,color:10132144}),s=new It(new xt(n,n),i);return s.geometry.translate(n/2,-n/2,0),s}function wr(n,e,t,i,s,r=0,o=0){let a=new $t,l=new Float32Array(e*3),c=new Float32Array(e);for(let h=0;h<e;h++)l[h*3]=r+Q(-t,t),l[h*3+1]=Q(.2,i),l[h*3+2]=o+Q(-s,s),c[h]=Q(0,100);a.setAttribute("position",new An(l,3)),a.setAttribute("seed",new An(c,1));let u=new Yt({uniforms:{t:{value:0},map:{value:Zm()},pr:{value:1},col:{value:new Fe(1,.9,.75)}},transparent:!0,depthWrite:!1,blending:Tn,vertexShader:`attribute float seed; uniform float t; uniform float pr; varying float vA;
      void main(){ vec3 p = position; p.x += sin(t*0.13+seed)*0.5; p.y += sin(t*0.09+seed*1.7)*0.4; p.z += cos(t*0.11+seed*0.7)*0.5;
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv; float d = -mv.z;
        gl_PointSize = min(40.0, pr*(26.0 + 14.0*fract(seed))/d); vA = smoothstep(0.4,1.6,d)*(1.0-smoothstep(9.0,16.0,d))*(0.35+0.65*fract(seed*3.1))*(0.6+0.4*sin(t*0.7+seed*5.0)); }`,fragmentShader:"uniform sampler2D map; uniform vec3 col; varying float vA; void main(){ vec4 c = texture2D(map, gl_PointCoord); gl_FragColor = vec4(col*c.rgb, c.a*vA*0.55); }"}),d=new va(a,u);return d.frustumCulled=!1,n.group.add(d),n.dust=d,d}function Ar(n,e,t,i,s=.2,r=9081024,o=0){let a=at(rl(),[1,1]);for(let l=0;l<5;l++){let c=new ot({map:a,color:r,transparent:!0,opacity:s,depthWrite:!1,blending:Tn,fog:!1}),u=Lt(new xt(e*.7,t*.7),c,Q(-e/4,e/4),i+l*.08,o+Q(-t/4,t/4),n.group);u.rotation.x=-Math.PI/2,u.rotation.z=Q(0,6),n.fog.push({p:u,sp:Q(-.03,.03)})}}function ko(n,e=1){let t=new le,i=[];for(let y=0;y<=24;y++){let m=y/24,p=1.2-m*2.6,b=m<.25?Math.sin(m/.25*Math.PI/2)*.36:m<.36?.36-(m-.25)*.8:.27+(m-.36)*(n?.5:.75);i.push(new ue(Math.max(.001,n?b*1.25:b),p))}let s=new hs(i,48),r=s.attributes.position;for(let y=0;y<r.count;y++){let m=r.getY(y);if(m<-.8){let p=Math.atan2(r.getZ(y),r.getX(y));r.setY(y,m+Math.sin(p*7)*.12*((-.8-m)/.6))}}s.computeVertexNormals();let o=new Yt({uniforms:{t:{value:0},op:{value:1},col:{value:new Fe(n?14217471:12571903)}},transparent:!0,depthWrite:!1,side:Ht,blending:Tn,vertexShader:`uniform float t; varying vec3 vN; varying vec3 vV; varying float vY; void main(){ vec3 p = position; float k = smoothstep(0.2,-1.4,p.y); p.x += sin(t*2.0+p.y*3.0)*0.08*k; p.z += cos(t*1.7+p.y*2.5)*0.08*k; vY = p.y;
      vec4 mv = modelViewMatrix*vec4(p,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,fragmentShader:"uniform vec3 col; uniform float op; uniform float t; varying vec3 vN; varying vec3 vV; varying float vY; void main(){ float f = 1.0 - abs(dot(vN, vV)); float a = (0.1 + pow(f, 2.0)*0.6) * smoothstep(-1.45,-0.6,vY) * op; a *= 0.85+0.15*sin(t*3.0+vY*6.0); gl_FragColor = vec4(col*(0.45+f*0.6), a); }"}),a=new It(s,o);t.add(a);let l=new ot({color:656920,transparent:!0,opacity:.9}),c=[];for(let y of[-1,1]){let m=Lt(new st(n?.07:.05,12,8),l,y*.12,.98,.3,t);m.scale.set(1,n?1.1:1.4,.5),c.push(m),n&&Lt(new st(.02,8,6),new ot({color:16777215}),y*.12+.02,1.01,.34,t)}let u=Lt(new st(.05,12,8),l,0,.84,.32,t);u.scale.set(n?1.4:.8,n?.5:1.1,.4);let d=o,h=[];for(let y of[-1,1]){let m=new le;m.position.set(y*.3,.55,0);let p=Lt(new Sa(.06,.6,4,8),d,0,-.3,0,m);t.add(m),m.rotation.z=y*.35,h.push(m)}let f=gs(_s(),2.2,0,.3,-.3,t,{opacity:.35}),g=new ds(10137855,6,7,2);return g.position.set(0,1.4,-.6),t.add(g),t.scale.setScalar(e),t.userData={mat:o,eyes:c,mouth:u,arms:h,halo:f,light:g},t}function Cf(n){let e=new le,t=gi(n?6965920:1576988,{roughness:.7,emissive:n?2756688:525320,side:Ht});Lt(new st(.13,14,10),t,0,0,0,e).scale.set(1,1.2,.9);for(let s of[-1,1]){Lt(new Rn(.05,.12,4),t,s*.07,.17,0,e);let r=Lt(new st(n?.045:.025,10,8),new ot({color:n?16777215:16724e3}),s*.055,.04,.11,e);n&&Lt(new st(.022,8,6),new ot({color:1050648}),s*.055,.04,.15,e)}let i=[];for(let s of[-1,1]){let r=new le;r.position.set(s*.1,.02,0),e.add(r);let o=new cs;o.moveTo(0,0),o.quadraticCurveTo(.2,.2,.42,.12),o.quadraticCurveTo(.36,0,.4,-.1),o.quadraticCurveTo(.28,-.04,.22,-.14),o.quadraticCurveTo(.12,-.04,0,-.08),o.lineTo(0,0);let a=Lt(new Fs(o),t,0,0,0,r);s<0&&(a.scale.x=-1),i.push(r)}return e.userData.wings=i,e}var Cr=Math.PI*2;function Rf(n=10,e=.075,t=.84,i=56){let s=new st(1,i,Math.round(i*.6)),r=s.attributes.position,o=new D;for(let a=0;a<r.count;a++){o.fromBufferAttribute(r,a);let l=Math.atan2(o.z,o.x),c=Math.pow(Math.abs(Math.cos(l*n/2)),.6),u=Math.sqrt(Math.max(0,1-o.y*o.y)),d=1-e*(1-c)*u,h=o.y*t;o.y>.75&&(h-=(o.y-.75)*.55),o.y<-.8&&(h+=(-.8-o.y)*.4),r.setXYZ(a,o.x*d,h,o.z*d)}return s.computeVertexNormals(),s}function Jm(n,e){let t=document.createElement("canvas");return t.width=n,t.height=e,[t,t.getContext("2d")]}function $m(n,e=!0){let t=new as(n);return e&&(t.colorSpace=an),t.anisotropy=4,t}function nM(n,e,t=["#ff8a1e","#e0640c","#b24a06"],i=10){let[s,r]=Jm(n,e),o=r.createLinearGradient(0,0,0,e);o.addColorStop(0,t[2]),o.addColorStop(.18,t[1]),o.addColorStop(.5,t[0]),o.addColorStop(.82,t[1]),o.addColorStop(1,t[2]),r.fillStyle=o,r.fillRect(0,0,n,e);for(let a=0;a<i;a++){let l=(a+.5)*n/i,c=r.createLinearGradient(l-n/i/2,0,l+n/i/2,0);c.addColorStop(0,"rgba(90,25,0,0.55)"),c.addColorStop(.18,"rgba(90,25,0,0)"),c.addColorStop(.5,"rgba(255,200,120,0.10)"),c.addColorStop(.82,"rgba(90,25,0,0)"),c.addColorStop(1,"rgba(90,25,0,0.55)"),r.fillStyle=c,r.fillRect(l-n/i/2,0,n/i,e)}for(let a=0;a<n*e/900;a++)r.fillStyle=Math.random()<.5?"rgba(255,190,90,0.10)":"rgba(80,20,0,0.12)",r.fillRect(Math.random()*n,Math.random()*e,1+Math.random()*3,2+Math.random()*10);return[s,r]}var Pf={evil(n,e,t,i){n.beginPath(),n.moveTo(e-70*i,t-18*i),n.lineTo(e-28*i,t-12*i),n.lineTo(e-52*i,t-58*i),n.closePath(),n.fill(),n.beginPath(),n.moveTo(e+70*i,t-18*i),n.lineTo(e+28*i,t-12*i),n.lineTo(e+52*i,t-58*i),n.closePath(),n.fill(),n.beginPath(),n.moveTo(e,t-6*i),n.lineTo(e-12*i,t+14*i),n.lineTo(e+12*i,t+14*i),n.closePath(),n.fill(),n.beginPath(),n.moveTo(e-92*i,t+18*i);let s=8;for(let r=0;r<=s;r++){let o=e-92*i+r*184*i/s;n.lineTo(o,t+(30+(r%2?14:0)+Math.sin(r/s*Math.PI)*22)*i)}for(let r=s;r>=0;r--){let o=e-92*i+r*184*i/s;n.lineTo(o,t+(44+(r%2?-10:0)+Math.sin(r/s*Math.PI)*44)*i)}n.closePath(),n.fill()},grin(n,e,t,i){for(let s of[-1,1])n.beginPath(),n.moveTo(e+s*22*i,t-10*i),n.lineTo(e+s*76*i,t-14*i),n.lineTo(e+s*50*i,t-54*i),n.closePath(),n.fill();n.beginPath(),n.moveTo(e-8*i,t+4*i),n.lineTo(e+8*i,t+4*i),n.lineTo(e,t-12*i),n.fill(),n.beginPath(),n.moveTo(e-100*i,t+6*i),n.quadraticCurveTo(e,t+120*i,e+100*i,t+6*i),n.quadraticCurveTo(e,t+62*i,e-100*i,t+6*i),n.fill(),n.save(),n.globalCompositeOperation="destination-out";for(let s of[-40,22])n.fillRect(e+s*i,t+30*i,18*i,22*i);n.restore()},wild(n,e,t,i){n.beginPath(),n.ellipse(e-46*i,t-30*i,20*i,26*i,.3,0,Cr),n.fill(),n.beginPath(),n.moveTo(e+24*i,t-10*i),n.lineTo(e+78*i,t-24*i),n.lineTo(e+46*i,t-62*i),n.closePath(),n.fill(),n.beginPath(),n.moveTo(e-90*i,t+22*i);for(let s=0;s<=10;s++)n.lineTo(e-90*i+s*18*i,t+(22+(s%2?22:0)+Math.sin(s/10*Math.PI)*18)*i);n.lineTo(e+90*i,t+22*i);for(let s=10;s>=0;s--)n.lineTo(e-90*i+s*18*i,t+(60+(s%2?-14:0)+Math.sin(s/10*Math.PI)*30)*i);n.closePath(),n.fill()},cute(n,e,t,i){for(let s of[-1,1])n.beginPath(),n.ellipse(e+s*44*i,t-24*i,22*i,27*i,0,0,Cr),n.fill();n.beginPath(),n.moveTo(e-62*i,t+22*i),n.quadraticCurveTo(e,t+92*i,e+62*i,t+22*i),n.quadraticCurveTo(e,t+54*i,e-62*i,t+22*i),n.fill(),n.save(),n.globalCompositeOperation="destination-out";for(let s of[-1,1])n.beginPath(),n.arc(e+s*44*i+8*i,t-34*i,7*i,0,Cr),n.fill();n.restore()},happy(n,e,t,i){for(let s of[-1,1])n.beginPath(),n.arc(e+s*44*i,t-14*i,24*i,Math.PI,0),n.lineTo(e+s*44*i+12*i,t-14*i),n.arc(e+s*44*i,t-14*i,12*i,0,Math.PI,!0),n.closePath(),n.fill();n.beginPath(),n.arc(e,t+18*i,50*i,.15,Math.PI-.15),n.closePath(),n.fill()},sleepy(n,e,t,i){for(let s of[-1,1])n.beginPath(),n.ellipse(e+s*44*i,t-18*i,22*i,9*i,0,0,Math.PI),n.fill();n.beginPath(),n.ellipse(e,t+40*i,18*i,22*i,0,0,Cr),n.fill()},boss(n,e,t,i){for(let r of[-1,1])n.beginPath(),n.moveTo(e+r*18*i,t-6*i),n.lineTo(e+r*96*i,t-34*i),n.lineTo(e+r*84*i,t-4*i),n.lineTo(e+r*52*i,t+6*i),n.closePath(),n.fill();n.beginPath(),n.moveTo(e-10*i,t+26*i),n.lineTo(e+10*i,t+26*i),n.lineTo(e,t+6*i),n.fill(),n.beginPath(),n.moveTo(e-128*i,t+34*i);let s=12;for(let r=0;r<=s;r++)n.lineTo(e-128*i+r*256*i/s,t+(40+(r%2?26:0)+Math.sin(r/s*Math.PI)*26)*i);for(let r=s;r>=0;r--)n.lineTo(e-128*i+r*256*i/s,t+(64+(r%2?-22:0)+Math.sin(r/s*Math.PI)*74)*i);n.closePath(),n.fill()},bosskids(n,e,t,i){for(let s of[-1,1])n.beginPath(),n.ellipse(e+s*52*i,t-20*i,26*i,32*i,0,0,Cr),n.fill();n.beginPath(),n.moveTo(e-90*i,t+30*i),n.quadraticCurveTo(e,t+130*i,e+90*i,t+30*i),n.quadraticCurveTo(e,t+72*i,e-90*i,t+30*i),n.fill(),n.save(),n.globalCompositeOperation="destination-out";for(let s of[-1,1])n.beginPath(),n.arc(e+s*52*i+9*i,t-32*i,8*i,0,Cr),n.fill();n.restore()}};function iM(n,e,t,i,s,r,o){let a=i/4,l=s*.5,c=r*i/1024;if(n.save(),n.shadowColor="rgba(60,10,0,0.9)",n.shadowBlur=10*c,n.fillStyle="#ffd36a",Pf[t](n,a,l,c),n.restore(),o){n.fillStyle="rgba(255,90,120,0.45)";for(let u of[-1,1])n.beginPath(),n.ellipse(a+u*76*c,l+18*c,18*c,10*c,0,0,Cr),n.fill()}e.fillStyle="#000",e.fillRect(0,0,i,s),e.save(),e.shadowColor="rgba(255,120,20,0.9)",e.shadowBlur=26*c,e.fillStyle="#ffb540",Pf[t](e,a,l,c),e.restore(),e.fillStyle="#fff2b0",e.save(),e.translate(a,l),e.scale(.8,.8),e.translate(-a,-l),Pf[t](e,a,l+6*c,c),e.restore()}function Jh(n,e={}){let t=e.W||1024,i=t/2,[s,r]=nM(t,i,e.base,e.ribs||10),[o,a]=Jm(t,i);iM(r,a,n,t,i,e.scale||1,!!e.blush);let l=new Pi({map:$m(s),emissiveMap:$m(o),emissive:new Fe(e.emissive||16777215),emissiveIntensity:e.ei||2.4,roughness:.48,metalness:0});return l.userData={cCol:s,gCol:r,cEm:o,gEm:a,face:n,W:t,H:i},l.side=Ht,l.onBeforeCompile=c=>{c.fragmentShader=c.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      if (!gl_FrontFacing) {
        vec3 vp = vViewPosition; float ndv = abs(dot(normalize(normal), normalize(vp)));
        float fib = 0.5 + 0.5 * sin(dot(vp, vec3(37.0, 53.0, 21.0))) * sin(dot(vp, vec3(-23.0, 41.0, 67.0)));
        vec3 fl = mix(vec3(0.85, 0.28, 0.02), vec3(1.0, 0.55, 0.12), fib * 0.6 + ndv * 0.4);
        gl_FragColor = vec4(fl * (0.2 + 0.32 * ndv), 1.0);
      }`)},l}var Yh={};function sM(n="n"){return Yh[n]||(Yh[n]=n==="boss"?Rf(14,.09,.8,96):n==="tall"?Rf(8,.07,1.05,48):Rf(10,.075,.84,48),Yh[n].userData.shared=!0),Yh[n]}var jm=new Pi({color:4864536,roughness:.85});jm.userData.shared=!0;var Kh=null;function rM(n){Kh||(Kh=new La(new pr(new D(0,0,0),new D(.02,.18,0),new D(.12,.3,.02)),6,.07,6,!1)),Kh.userData.shared=!0;let e=new It(Kh,jm);return e.scale.setScalar(n),e}var Zh={};function oM(n){let e=n?"g":"n";return Zh[e]||(Zh[e]=new Us({map:aM(),blending:Tn,depthWrite:!1,transparent:!0,opacity:n?.95:.6,color:n?16769136:16777215}),Zh[e].userData.shared=!0),Zh[e]}var $h=null;function aM(){return $h||($h=sl("rgba(255,190,90,0.9)","rgba(255,100,20,0.28)"),$h.userData.shared=!0),$h}function If(n,e,t="n",i=!1){let s=new le,r=new It(sM(t),n);r.scale.setScalar(e),s.add(r);let o=rM(e*1.3);o.position.y=e*(t==="tall"?.92:.72),s.add(o);let a=new fr(oM(i));return a.scale.set(e*4.2,e*4.2,1),a.position.z=-e*.2,a.renderOrder=-1,s.add(a),s.userData.body=r,s.userData.halo=a,s}var{box:J,cyl:We,mesh:ge,std:_e,gold:Vt,iron:vn,woodMat:nt,sprite:Hn}=qh,ut=(n,e,t)=>new D(n,e,t);function Df(){return new ot({color:12103844})}function lM(n,e,t={}){let i=new le;return i.position.copy(e),i.visible=!1,{name:n,group:i,offset:e,items:{},hits:[],candles:[],windows:[],curtains:[],rays:[],drifters:[],fog:[],lights:[],anim:[],spots:{},kids:t.kids,view:t.view,fogColor:t.fogColor??1182232,fogDens:t.fogDens??.035,exposure:t.exposure??1,flicker:[],bounds:t.bounds}}function Ct(n,e,t,i){return t.traverse(s=>{s.isMesh&&(s.userData.iid=e,s.material&&s.material.isMeshStandardMaterial&&(s.material=s.material.clone(),s.userData.e0=s.material.emissive.clone(),s.userData.ei0=s.material.emissiveIntensity),n.hits.push(s))}),t.userData.iid=e,n.items[e]=t,t}function Rr(n,e,t,i,s,r,o,a,l){let c=J(t,i,s,new ot({visible:!1}),r,o,a,l||n.group);return c.userData.iid=e,n.hits.push(c),n.items[e]||(n.items[e]=c),c}var cM=3.2;function bt(n,e,t,i,s,r,o,a=0,l){t*=cM,i*=1.3;let c=new ds(e,t,i,2);return c.position.set(s,r,o),(l||n.group).add(c),n.lights.push(c),a&&n.flicker.push({l:c,base:t,k:a,ph:Q(0,10)}),c}function jh(n,e,t,i,s,r,o,a=40,l=!1){let c=new Ua(9414399,a,30,.55,.6,1.5);return c.position.set(e,t,i),c.target.position.set(s,r,o),n.group.add(c,c.target),l&&(c.castShadow=!0,c.shadow.mapSize.set(1024,1024),c.shadow.bias=-8e-4,c.shadow.camera.near=1,c.shadow.camera.far=30),n.moon=c,c}function cl(n,e,t,i){let s=new vo(13161727,0);return s.position.set(e,t,i),n.group.add(s,s.target),n.flash=s,s}function Pn(n,e,t,i,s,r,o){let a=Af(o);a.position.set(e,t,i),a.rotation.set(0,s,r),n.group.add(a)}function hM(n,e){let t=n.group;al(n,{w:18,d:16,h:10,z0:-10,floor:Um(),floorRep:[4.5,4],floorRough:.28,wall:bf("#1e1a2c","#2c2440"),wallScale:2.6,wainscot:1.3,ceil:Zs([40,24,18],8)});let i=_e(16777215,{map:at(Vh("#5a0c18","#22040a"),[1,1]),roughness:.95}),s=ge(new xt(3.2,9),i,0,.012,.6,t);s.rotation.x=-Math.PI/2,s.receiveShadow=!0;let r=nt([46,24,14],[1,1]),o=_e(6950428,{roughness:.95}),a=12,l=.34,c=.46,u=5.2,d=-4.2;for(let pe=0;pe<a;pe++){let de=(pe+1)*l,Ne=d-pe*c,ye=J(u,l,c,r,0,de-l/2,Ne-c/2,t);ye.receiveShadow=!0,ye.userData.noCol=1,J(3.2,.03,c+.02,o,0,de+.012,Ne-c/2,t).userData.noCol=1,J(3.2,l,.02,o,0,de-l/2,Ne+.005,t).userData.noCol=1}n.stairs={sx:u,z0:d,run:c,N:a,rise:l,topY:a*l};let h=a*l;J(18,.3,1.5,r,0,h-.15,-9.25,t).userData.noCol=1,J(u,h,.4,r,0,h/2,-9.6,t).userData.noCol=1;for(let pe of[-1,1]){let de=Math.hypot(a*c,a*l),Ne=Math.atan2(a*l,a*c),ye=J(.18,.35,de,r,pe*(u/2+.05),h/2+.05,d-a*c/2,t);ye.rotation.x=Ne,ye.userData.noCol=1;let Ue=J(.12,.1,de+.3,r,pe*(u/2+.05),h/2+1.05,d-a*c/2,t);Ue.rotation.x=Ne,Ue.userData.noCol=1;for(let Et=0;Et<a;Et++)We(.03,.035,.95,r,pe*(u/2+.05),(Et+1)*l+.5,d-Et*c-c/2,t,6).userData.noCol=1;let dt=J(.32,1.35,.32,r,pe*(u/2+.05),.68,d+.15,t);ge(new st(.17,14,10),xs(),pe*(u/2+.05),1.48,d+.15,t),J(6.2,.1,.12,r,pe*6,h+1,-8.5,t);for(let Et=3.2;Et<9;Et+=.35)We(.03,.035,.95,r,pe*Et,h+.5,-8.5,t,6)}let f=Ki(2.2,2.9,mi("lord"));f.position.set(0,h+2.6,-9.95),t.add(f);let g=[];for(let pe of[-1,1]){let de=.14895833333333333*pe,Ne=(.5-210/512)*2.9,ye=new le;ye.position.set(de,Ne,.03),f.add(ye),ge(new st(.055,14,10),_e(15261904,{roughness:.3,emissive:3156e3,emissiveIntensity:.4}),0,0,0,ye).scale.set(1.3,.75,.3);let Ue=ge(new st(.026,10,8),new ot({color:656900}),0,0,.016,ye),dt=ge(new st(.008,6,4),new ot({color:16732208}),0,0,.03,ye);dt.visible=!1,g.push({eg:ye,pupil:Ue,glint:dt})}Ct(n,"portraitLord",f),n.eyes=g,n.spots.portraitLord={pos:ut(0,h+2.2,-6.2),look:ut(0,h+2.5,-9.9)},bt(n,16756848,1.2,5,0,h+4.4,-7.6),J(.9,.06,.12,Vt(),0,h+4.15,-9.85,t);for(let pe of[-1,1])ll(n,{x:pe*6,y:h+2.4,z:-9.88,w:1.7,h:3,ghost:pe>0,rayLen:8,rayTilt:.85,rayN:e.rays>4?4:3,curtain:3803690});jh(n,4,h+4.5,-9.6,0,0,0,55,e.shadows);let y=Xh(n,10,1.25,4.9);y.position.set(0,5.1,-3.4),t.add(y),n.chand=y,n.chLight=bt(n,16752720,7,16,0,3.4,-3.4,.12);for(let pe of[-1,1])bt(n,16751176,3.5,7,pe*3.6,3.2,-8.6,.2),bt(n,16751176,3,7,pe*7.5,2.4,0,.2);Ct(n,"chandelier",y);let m=new le;m.position.set(-8.5,0,-4.2),m.rotation.y=Math.PI/2,t.add(m);let p=nt([56,26,12],[1,2],{roughness:.45});J(.75,.5,.45,p,0,.25,0,m),J(.6,1.5,.38,p,0,1.25,0,m),J(.8,.85,.48,p,0,2.42,0,m);let b=ge(new Ri(.4,.4,.5,20,1,!1,-Math.PI/2,Math.PI),p,0,2.85,0,m);b.rotation.x=Math.PI/2,b.rotation.z=Math.PI/2,b.scale.set(1,.3,1);let w=ge(new Fn(.31,40),_e(16777215,{map:Gm(),roughness:.4,emissive:3811856,emissiveIntensity:.25}),0,2.45,.245,m),x=ge(new Jt(.32,.025,8,40),Vt(),0,2.45,.25,m),E=(pe,de,Ne)=>{let ye=new le;return ye.position.set(0,2.45,.255),ye.rotation.z=-Ne,m.add(ye),J(de,pe,.008,_e(1118481,{metalness:.6,roughness:.3}),0,pe/2-.03,0,ye),ye};E(.18,.022,(10+35/60)/12*Math.PI*2),E(.27,.014,35/60*Math.PI*2);let A=ge(new xt(.4,1.1),_e(2107968,{roughness:.05,metalness:.2,transparent:!0,opacity:.35,envMap:xi.map}),0,1.3,.2,m),P=new le;P.position.set(0,1.85,.12),m.add(P),We(.008,.008,.7,Vt(),0,-.35,0,P,4);let _=We(.09,.09,.02,Vt(),0,-.72,0,P,20);_.rotation.x=Math.PI/2,n.pend=P,Ct(n,"clock",m),n.spots.clock={pos:ut(-7.15,2.35,-4.2),look:ut(-8.5,2.42,-4.2)};let S=new le;S.position.set(-8.55,0,.6),S.rotation.y=Math.PI/2,t.add(S);let R=nt([60,30,14],[1,1],{roughness:.4}),U=vs(1.8,.55,.92,R);S.add(U);let C=new le;C.position.set(0,.8,.02),S.add(C),J(.8,.16,.5,R,0,0,0,C),J(.82,.18,.03,R,0,0,.26,C),ge(new st(.03,8,6),Vt(),0,0,.29,C);let N=new le;N.position.set(.1,.1,.05),C.add(N),J(.16,.03,.1,_e(9054746,{roughness:.6}),0,0,0,N),J(.12,.031,.06,_e(15259824),0,.001,0,N),n.drawer=C,n.matchesObj=N,Ct(n,"drawer",C),n.spots.drawer={pos:ut(-6.9,1.7,.6),look:ut(-8.4,.8,.6)};let I=Ki(1.1,1.5,null);I.userData.pic.material=_e(1581100,{roughness:.04,metalness:.9,envMap:xi.map,envMapIntensity:.6}),I.position.set(0,1.95,-.25),S.add(I);let O=ys(n,3,!0,1.1);O.g.position.set(.6,.92,0),S.add(O.g),bt(n,16751168,5,6,-8,1.6,0,.25);let X=vs(.6,.6,.8,R);X.position.set(3.9,0,-3.6),t.add(X);let K=ys(n,1,!0,1);K.g.position.set(4.05,.8,-3.7),t.add(K.g);let z=new le;z.position.set(3.75,.82,-3.45),t.add(z);let B=zn(n,.3,.035,!1);B.g.rotation.z=Math.PI/2,B.g.position.set(.12,.035,0),z.add(B.g),n.candleItem=z,Ct(n,"candleItem",z),Rr(n,"candleItem",.5,.3,.4,0,.1,0,z),bt(n,16751168,4,5,4,1.4,-3.4,.25);let k=new le;k.position.set(8.96,0,-3),k.rotation.y=-Math.PI/2,t.add(k);let V=nt([44,22,12],[1,2],{roughness:.5});J(2.1,.25,.25,V,0,3.25,0,k),J(.22,3.25,.25,V,-1.05,1.62,0,k),J(.22,3.25,.25,V,1.05,1.62,0,k);let he=new le;he.position.set(-.94,0,.02),k.add(he),J(1.88,3.1,.1,V,.94,1.55,0,he);for(let[pe,de]of[[.8,1.1],[2.25,1.3]])J(1.4,de,.04,nt([60,30,16]),.94,pe,.07,he);ge(new st(.06,10,8),Vt(),1.65,1.5,.12,he),n.libLeaf=he,Ct(n,"libDoor",k);let we=new le;we.position.set(1.55,1.45,.16),k.add(we),J(.36,.5,.08,Vt(),0,0,0,we);for(let pe=0;pe<4;pe++){let de=We(.04,.04,.06,wn(6965792,.4),-.12+pe*.08,.02,.05,we,10);de.rotation.z=Math.PI/2}Ct(n,"codeLock",we),n.spots.libDoor={pos:ut(6.6,1.75,-1.6),look:ut(9,1.45,-1.45)},n.spots.codeLock=n.spots.libDoor;let gt=Ki(1.3,1.75,mi("lady"));gt.position.set(8.92,3,2.4),gt.rotation.y=-Math.PI/2,t.add(gt),n.lady=gt,Ct(n,"portraitLady",gt),n.spots.portraitLady={pos:ut(7,2.8,2.4),look:ut(8.9,3,2.4)},bt(n,16756848,2.5,4,8.3,4.1,2.4);let it=Ki(1,1.3,mi("cat"));it.position.set(-8.92,3.4,-1.7),it.rotation.y=Math.PI/2,t.add(it),Ct(n,"portraitCat",it);let lt=Ki(1.4,1,mi("ship"));lt.position.set(8.92,3,-6.8),lt.rotation.y=-Math.PI/2,t.add(lt),Ct(n,"portraitShip",lt);let j=new le;j.position.set(0,0,5.96),j.rotation.y=Math.PI,t.add(j);let re=nt([36,18,10],[1,2],{roughness:.55});J(3.4,.4,.4,re,0,4.2,0,j),J(.35,4.2,.4,re,-1.7,2.1,0,j),J(.35,4.2,.4,re,1.7,2.1,0,j);let Le=[];for(let pe of[-1,1]){let de=new le;de.position.set(pe*1.52,0,.05),j.add(de);let Ne=J(1.5,4,.14,re,-pe*.75,2,0,de);for(let ye of[1,2,3.2])J(1.2,.08,.06,vn(),-pe*.75,ye,.1,de);ge(new Jt(.12,.02,6,16),vn(),-pe*.18,1.9,.14,de),Le.push(de)}let et=ge(new Fn(1.5,24,0,Math.PI),new ot({map:at($s(!0,256,128),[1,1]),fog:!1}),0,4.4,-.1,j);n.windows.push(et);let Pe=J(.3,.4,.1,vn(),.3,1.5,.2,j);ge(new Jt(.05,.012,6,12),wn(13160672,.25),.3,1.5,.26,j),n.frontLeaves=Le,Ct(n,"frontDoor",j),n.spots.frontDoor={pos:ut(0,1.9,2.4),look:ut(0,1.9,6)};for(let pe of[-1,1]){let de=ys(n,3,!0,1.6);de.g.position.set(pe*2.6,0,5.3),t.add(de.g),We(.05,.12,1.1,Vt(),pe*2.6,.55,5.3,t,10),de.g.position.y=1.1}bt(n,16751168,7,7,0,2.6,4.8,.2),Rr(n,"stairs",5,3,4.8,0,2,-6.8),Pn(n,-8.95,9.95,-9.95,Math.PI/2,0,2.2),Pn(n,8.95,9.95,-9.95,-Math.PI/2,0,1.8),Pn(n,-8.95,9.95,5.95,Math.PI/2,-Math.PI/2,1.6);for(let[pe,de]of[[-6.5,-7.6],[6.5,-7.6]]){let Ne=We(.25,.18,.8,_e(2763322,{roughness:.4,metalness:.3}),pe,.4,de,t,16);We(.32,.22,.12,Vt(),pe,.86,de,t,16);let ye=ge(new Rn(.5,1.4,8,1,!0),_e(1318928,{roughness:1,side:Ht}),pe,1.6,de,t)}for(let[pe,de,Ne]of[[-8.9,-6.8,Math.PI/2],[8.9,-.4,-Math.PI/2],[-8.9,5,Math.PI/2]]){let ye=new le;ye.position.set(pe,2.6,de),ye.rotation.y=Ne,t.add(ye),J(.12,.3,.06,Vt(),0,0,0,ye),We(.05,.02,.06,Vt(),0,.06,.12,ye);let Ue=zn(n,.2,.025,!0);Ue.g.position.set(0,.09,.12),ye.add(Ue.g)}bt(n,16751168,4,6,8.2,2.8,-.4,.25),wr(n,Math.round(420*e.particles),8,9,7.5,0,-2),Ar(n,18,16,.2,.06,9081024,-2),n.hemi=new us(6320304,2757640,1.43),t.add(n.hemi),cl(n,0,8,-10);let tt=Cf(!0);tt.position.set(8.6,3,2.4),tt.rotation.y=-Math.PI/2,tt.scale.setScalar(.001),t.add(tt),n.peekBat=tt;for(let pe of[-1,1]){let de=uM();de.position.set(pe*4.4,0,-8.9),de.rotation.y=-pe*.25,t.add(de),bt(n,16752720,2.2,4,pe*4,2.6,-7.8,.2);let Ne=Lf(1.1);Ne.position.set(pe*3.2,0,-6.3),t.add(Ne);let ye=new le;ye.position.set(pe*5.8,3.2,-9.92),t.add(ye),J(.16,.36,.06,Vt(),0,0,0,ye),We(.03,.02,.25,Vt(),0,0,.12,ye,6).rotation.x=Math.PI/2;let Ue=zn(n,.2,.03,!0,{gs:.6});Ue.g.position.set(0,.04,.24),ye.add(Ue.g),bt(n,16751168,2.5,5,pe*5.8,3.4,-9.4,.25)}{let pe=vs(.9,.5,.85,nt([56,28,14]));pe.position.set(-6.4,0,-8.6),t.add(pe);let de=ys(n,3,!0,1);de.g.position.set(-6.4,.85,-8.6),t.add(de.g);let Ne=J(.3,.06,.22,_e(5902360),-6.1,.88,-8.5,t);Ne.rotation.y=.4,bt(n,16752704,3,5,-6.4,1.6,-8.2,.25);let ye=vs(.9,.5,.85,nt([56,28,14]));ye.position.set(6.4,0,-8.6),t.add(ye);let Ue=ys(n,3,!0,1);Ue.g.position.set(6.4,.85,-8.6),t.add(Ue.g),bt(n,16752704,3,5,6.4,1.6,-8.2,.25);let dt=dM();dt.position.set(-6,0,-2.6),t.add(dt);let Et=fM();Et.position.set(-5.5,0,-2),t.add(Et),bt(n,16751176,2,5,-5.6,2.2,-1.8,.2);let mn=Lf(1.3);mn.position.set(6.6,0,-5),t.add(mn);let Wt=Lf(1);Wt.position.set(-7.6,0,-6.6),t.add(Wt)}for(let pe of[-1,1])for(let de=0;de<4;de++){let Ne=de/3,ye=1.25+Ne*3.2,Ue=-4.6-Ne*4.2;ge(new st(.055,10,8),Vt(),pe*2.62,ye+.1,Ue,t)}Pn(n,-8.9,6.5,-9.9,Math.PI/4,0,1.6),Pn(n,8.9,1.3,-9.9,-Math.PI/4,Math.PI/2,1);{let pe=new le;pe.position.set(-8.96,0,3),pe.rotation.y=Math.PI/2,t.add(pe);let de=nt([44,22,12],[1,2]);J(1.9,.22,.3,de,0,2.95,0,pe);for(let dt of[-1,1])J(.18,2.9,.3,de,dt*.86,1.45,0,pe);let Ne=new le;Ne.position.set(-.78,0,.04),pe.add(Ne),J(1.56,2.8,.1,de,.78,1.4,0,Ne);for(let dt of[.7,2.1])J(1.5,.07,.04,vn(),.78,dt,.06,Ne);ge(new st(.05,10,8),Vt(),1.35,1.3,.1,Ne),n.kitLeaf=Ne,Ct(n,"kitchenDoor",pe),bt(n,16752720,2.5,5,-8.2,2.6,3,.2);let ye=new le;ye.position.set(-8.9,2.6,4.6),ye.rotation.y=Math.PI/2,t.add(ye),J(.12,.3,.06,Vt(),0,0,0,ye);let Ue=zn(n,.2,.03,!0,{gs:.6});Ue.g.position.set(0,.05,.14),ye.add(Ue.g)}{let pe=a*l,de=new le;de.position.set(-3.7,pe,-9.93),t.add(de);let Ne=nt([40,22,12],[1,2]),ye=new le;ye.position.set(-.6,0,.05),de.add(ye),J(1.2,2.5,.1,Ne,.6,1.25,0,ye);for(let dt of[.6,1.9])J(1.2,.08,.04,vn(),.6,dt,.07,ye);J(1.5,.18,.2,Ne,0,2.6,0,de),J(.15,2.6,.2,Ne,-.68,1.3,0,de),J(.15,2.6,.2,Ne,.68,1.3,0,de);let Ue=new le;Ue.position.set(.95,1.25,.14),ye.add(Ue),J(.14,.12,.05,wn(13146688,.3),0,0,0,Ue),ge(new Jt(.045,.012,6,12,Math.PI),wn(11579568,.3),0,.06,0,Ue),n.atticLeaf=ye,n.padlock=Ue,Ct(n,"atticDoor",de),n.spots.atticDoor={pos:ut(-3.7,pe+1.7,-7.6),look:ut(-3.7,pe+1.3,-9.9)},bt(n,16752720,2.5,5,-3.7,pe+2.4,-9,.2)}n.view={pos:ut(0,1.75,2.4),yaw:0,pitch:.1},n.doorSpot={libDoor:ut(8.5,1.7,-3)}}function Qm(n,e,t,i,s=!0,r=1){let o=new le,a=nt([50,26,14],[1,2],{roughness:.55});J(e,t,.05,a,0,t/2,-i/2+.025,o),J(.08,t,i,a,-e/2,t/2,0,o),J(.08,t,i,a,e/2,t/2,0,o),J(e+.2,.15,i+.1,a,0,t+.07,.02,o);let l=Math.floor(t/.55),c=Vm(),u=[5902360,1718820,1713224,4860432,3805248,6965784,2105376,8006160],d=0,h=[];for(let f=0;f<l;f++){let g=.12+f*(t-.2)/l;if(J(e-.08,.04,i-.04,a,0,g,0,o),!s)continue;let y=-e/2+.08;for(;y<e/2-.16;){let m=Q(.05,.11),p=Q(.28,.44)*Math.min(1,(t-.2)/l/.5),b=i*Q(.6,.85);if(Q()<.04){y+=Q(.1,.25);continue}h.push([y+m/2,g+.02+p/2,b,m,p,u[Q(0,u.length)|0],Q()<.15?Q(-.25,.25):0]),y+=m+.004}}if(h.length){let f=new ya(new hi(1,1,1),_e(16777215,{map:c,roughness:.7}),h.length),g=new At,y=new ci,m=new Ci,p=new D,b=new D;h.forEach(([w,x,E,A,P,_,S],R)=>{y.setFromEuler(m.set(0,0,S)),g.compose(b.set(w,x,-i/2+.05+E/2),y,p.set(A,P,E)),f.setMatrixAt(R,g),f.setColorAt(R,new Fe(_).multiplyScalar(Q(.7,1.2)))}),o.add(f)}return o}function eg(n,e,t,i=8025220){let s=e*1.15,r=n+2*s,o=t+2*s,a=56,l=new xt(r,o,a,a);l.rotateX(-Math.PI/2);let c=l.attributes.position,u=Q(0,6);for(let d=0;d<c.count;d++){let h=c.getX(d),f=c.getZ(d),g=Math.max(Math.abs(h)-n/2,0),y=Math.max(Math.abs(f)-t/2,0),m=Math.max(g,y),p=Math.sign(h)*Math.min(Math.abs(h),n/2),b=Math.sign(f)*Math.min(Math.abs(f),t/2),w=e+.02+Math.sin(h*5+u)*Math.sin(f*4)*.012;if(m>0){let x=Math.min(m,e),E=x/e,A=g>=y?f:h,P=(Math.sin(A*9+u)*.6+Math.sin(A*17+u*2)*.3)*.05*(.3+E)+.03+E*E*.12;w=e+.02-x-Math.max(m-e,0)*.05;let _=Math.min(.06,m)*(1-E)*.8;g>=y?p+=Math.sign(h)*(P+_):b+=Math.sign(f)*(P+_),g>0&&y>0&&(p+=Math.sign(h)*.04,b+=Math.sign(f)*.04),w=Math.max(w,.005)}c.setXYZ(d,p,w,b)}return l.computeVertexNormals(),new It(l,_e(i,{roughness:.95,side:Ht,bumpMap:at(ms([128,128,128]),[3,3],!1),bumpScale:.004}))}function uM(){let n=new le,e=wn(10133674,.38),t=wn(4869720,.5);J(.6,.15,.45,nt([30,18,10]),0,.075,0,n);for(let o of[-1,1]){We(.08,.07,.75,e,o*.12,.55,0,n,10),ge(new st(.09,10,8),t,o*.12,.92,.02,n),We(.09,.08,.5,e,o*.12,1.2,0,n,10),ge(new st(.13,12,10),e,o*.28,1.85,0,n);let a=We(.06,.05,.62,e,o*.32,1.5,.04,n,10);a.rotation.z=o*.1,ge(new st(.06,8,6),t,o*.34,1.16,.08,n)}let i=We(.2,.26,.6,e,0,1.65,0,n,16);i.scale.z=.75,We(.24,.2,.18,t,0,1.38,0,n,16).scale.z=.75;let s=ge(new st(.15,16,12),e,0,2.15,0,n);s.scale.y=1.2,J(.2,.02,.05,new ot({color:328965}),0,2.16,.14,n),ge(new Rn(.03,.15,6),_e(9048096),0,2.36,0,n),We(.015,.015,2.4,nt([50,30,16]),.4,1.2,.1,n,6);let r=ge(new Rn(.06,.3,4),e,.4,2.5,.1,n);return r.scale.z=.25,n}function Lf(n=1){let e=new le;e.scale.setScalar(n),We(.26,.18,.45,_e(5909018,{roughness:.7}),0,.22,0,e,18),We(.28,.28,.05,_e(6960160,{roughness:.7}),0,.45,0,e,18);let t=_e(2759184,{roughness:1});for(let i=0;i<7;i++){let s=new le;s.position.y=.45,s.rotation.set(Q(-.6,.6),Q(0,6),Q(-.6,.6)),e.add(s),We(.004,.015,.9,t,0,.45,0,s,4);let r=new le;r.position.y=.6,r.rotation.z=Q(-1,1),s.add(r),We(.002,.008,.35,t,0,.17,0,r,3)}return e}function dM(){let n=new le,e=nt([40,22,12]);We(.03,.04,1.9,e,0,.95,0,n,8),ge(new st(.05,8,6),e,0,1.92,0,n);for(let s=0;s<3;s++){let r=We(.015,.02,.5,e,0,.2,0,n,5);r.position.set(Math.cos(s*2.1)*.15,.18,Math.sin(s*2.1)*.15),r.rotation.set(Math.sin(s*2.1)*.6,0,-Math.cos(s*2.1)*.6)}for(let s=0;s<4;s++)We(.012,.012,.22,e,Math.cos(s*1.57)*.1,1.75,Math.sin(s*1.57)*.1,n,4).rotation.set(Math.sin(s*1.57)*.9,0,-Math.cos(s*1.57)*.9);let t=eg(.22,.95,.12,2757672);t.position.set(.12,.8,0),n.add(t);let i=new le;return i.position.set(-.13,1.78,0),i.rotation.z=.3,n.add(i),We(.16,.16,.015,_e(1314840),0,0,0,i,20),We(.09,.1,.18,_e(1314840),0,.09,0,i,16),n}function fM(){let n=new le;We(.14,.12,.6,wn(6967344,.5),0,.3,0,n,16);for(let e=0;e<2;e++){let t=new le;t.position.set(e?.04:-.04,.1,0),t.rotation.z=e?-.12:.15,n.add(t),We(.01,.01,.95,_e(1052688),0,.47,0,t,5),ge(new Rn(.06,.55,8),_e(e?1708080:3149848,{roughness:.7}),0,.6,0,t).rotation.x=Math.PI;let i=ge(new Jt(.04,.01,6,10,Math.PI),_e(3809296),.04,.95,0,t)}return n}function pM(){return _e(5917250,{roughness:.6})}function mM(n,e){let t=n.group;al(n,{w:16,d:14,h:8,z0:-8,holeBack:{x:-4.7,w:2.8,h:5.8},floor:Zs([70,40,22],8,3),floorRep:[3,3],floorRough:.4,wall:bf("#2a0e14","#3a1620","rgba(210,150,80,0.2)"),wainscot:1,ceil:Zs([36,20,14],6)});let i=ge(new xt(6,8),_e(16777215,{map:at(Vh("#1a2a4a","#0a1020","#c8a050"),[1,1]),roughness:.95}),0,.012,-1.5,t);i.rotation.x=-Math.PI/2,i.rotation.z=Math.PI/2;for(let[C,N,I,O]of[[-7.7,-5.4,Math.PI/2,4.6],[-7.7,3,Math.PI/2,4.6],[7.7,-4.6,-Math.PI/2,6.2],[7.7,2.6,-Math.PI/2,5.6],[4.6,-7.7,0,3.2]]){let X=Qm(n,O,6,.55);X.position.set(C,0,N),X.rotation.y=I,t.add(X)}let s=new le;s.position.set(-6.2,0,-7.7),t.add(s),s.userData.noCol=1;let r=Qm(n,3,6,.55);r.position.set(1.5,0,0),s.add(r);let o=new le;o.position.set(-4.7,0,-8),t.add(o);{let C=_e(16777215,{map:at(ms([58,56,72]),[2,1.5]),roughness:.85}),N=_e(16777215,{map:at(ms([44,42,52]),[1,3]),roughness:.7}),I=7;for(let k of[-1,1]){let V=ge(new xt(I,5.8),C,k*1.4,2.9,-I/2,o);V.rotation.y=-k*Math.PI/2}let O=ge(new xt(2.8,I),N,0,.01,-I/2,o);O.rotation.x=-Math.PI/2;let X=ge(new xt(2.8,I),C,0,5.8,-I/2,o);X.rotation.x=Math.PI/2,ge(new xt(2.8,5.8),C,0,2.9,-I,o);let K=ge(new xt(.6,1.3),new ot({map:at($s(!1,128,256),[1,1]),fog:!1}),0,3,-I+.02,o);Hn(_s(),2.2,0,3,-I+.1,o,{opacity:.35});for(let k of[-1,1])J(.08,1.4,.08,vn(),k*.18,3,-I+.05,o);let z=new ds(9085183,6,9,2);z.position.set(0,3.2,-I+1),o.add(z);let B=zn(n,.22,.03,!0);B.g.position.set(1.25,1.6,-3),o.add(B.g),J(.18,.04,.16,vn(),1.3,1.58,-3,o)}let a=bt(n,16752720,0,6,-4.7,1.8,-9.5);n.passGlow=a,n.secret=s,Ct(n,"secretDoor",s),n.spots.secretDoor={pos:ut(-4.7,1.8,-3.5),look:ut(-4.7,1.8,-7.8)};let l=new le;l.position.set(.3,0,-7.75),t.add(l);let c=_e(16777215,{map:at(ms([78,66,62]),[2.5,2]),roughness:.9,bumpMap:at(ms([78,66,62]),[2.5,2],!1),bumpScale:.04});J(3.4,1.5,.6,c,0,.75,0,l),J(1.8,1.05,.62,_e(1707014,{roughness:1,emissive:4199428,emissiveIntensity:.6}),0,.52,.01,l),J(2.1,.12,.66,pM(),0,1.1,.02,l);let u=nt([60,30,14],[2,1],{roughness:.4});J(3.8,.14,.8,u,0,1.57,.1,l),J(3.2,2.6,.3,c,0,2.95,-.15,l);for(let C=0;C<6;C++){let N=We(.07,.07,1.1,nt([40,20,10]),Q(-.4,.4),.12+C%2*.1,.1+Q(-.1,.1),l,8);N.rotation.z=Math.PI/2,N.rotation.y=Q(-.5,.5)}n.fire=[];for(let C=0;C<7;C++){let N=Hn(No(),1,Q(-.5,.5),.45,.15+Q(-.05,.1),l);N.userData.ph=Q(0,10),N.userData.x0=N.position.x,n.fire.push(N)}Hn($n(),3.5,0,.6,.3,l,{opacity:.5}),bt(n,16742944,11,10,.3,1,-6,.35);let d=Do;n.holders=[];for(let C=0;C<5;C++){let N=-1.4+C*.7,I=new le;I.position.set(N,1.64,.2),l.add(I),We(.07,.09,.04,Vt(),0,.02,0,I,12),We(.02,.03,.14,Vt(),0,.09,0,I,8),We(.05,.035,.05,Vt(),0,.18,0,I,10);let O=ge(new Fn(.11,24),_e(16777215,{map:Om(d[C]),metalness:.6,roughness:.35,envMap:xi.map}),N,1.43,.51,l),X=zn(n,.34-Math.abs(C-2)*.03,.035,!1,{gs:1.2,wax:new Fe(Er[d[C]]).lerp(new Fe(15786692),.25).getHex()});X.g.position.set(0,.2,0),I.add(X.g),C===3&&(X.g.visible=!1),Ct(n,"holder"+C,I),Rr(n,"holder"+C,.3,.6,.3,0,.3,0,I),n.holders.push({g:I,c:X,sym:d[C]})}n.spots.mantel={pos:ut(.3,2.1,-5),look:ut(.3,1.75,-7.6)};let h=new le;h.position.set(3.4,0,-1.6),h.rotation.y=-.5,t.add(h);let f=nt([56,28,14],[1,1],{roughness:.45});We(.3,.38,.08,f,0,.04,0,h,12),We(.07,.09,1.05,f,0,.56,0,h,10);let g=new le;g.position.set(0,1.12,0),g.rotation.x=.45,h.add(g),J(.8,.05,.55,f,0,0,0,g);let y=new It(new xt(.76,.48),Df());y.rotation.x=-Math.PI/2,y.position.y=.035,g.add(y),n.bookPage=y,zn(n,.18,.03,!0,{wax:9075298,gs:.6}).g.position.set(.46,.03,-.3),Ct(n,"lectern",h),n.spots.lectern={pos:ut(3.18,2.02,-1.2),look:ut(3.4,1.15,-1.61)},bt(n,16752720,3.5,4,3.3,1.8,-1.4,.25);let p=new le;p.position.set(7.3,2,-2.8),p.rotation.y=-Math.PI/2,t.add(p),J(.11,.42,.42,_e(11540522,{roughness:.5,emissive:4194312,emissiveIntensity:.6}),0,0,0,p),J(.115,.04,.43,Vt(),0,.15,0,p),J(.115,.04,.43,Vt(),0,-.15,0,p);let b=ge(new gr(.09,0),_e(13164799,{roughness:.05,metalness:.2,emissive:8036607,emissiveIntensity:1.6,transparent:!0,opacity:.9}),0,0,0,p);b.scale.y=1.6,b.visible=!1,n.twitch=p,n.crystalObj=b,Ct(n,"twitchBook",p),Rr(n,"twitchBook",.4,.6,.6,0,0,0,p),n.spots.twitchBook={pos:ut(5.6,2.1,-2.8),look:ut(7.4,2,-2.8)},ll(n,{x:-7.9,y:3.3,z:-1.2,ry:Math.PI/2,w:1.9,h:3.4,ghost:!0,rayTilt:.8,rayLen:6.5,rayN:3,curtain:4852244}),jh(n,-9,6.5,-1.2,1,0,-1.5,45,e.shadows);let w=new le;w.position.set(-2.8,0,-4.6),w.rotation.y=.6,t.add(w);let x=_e(5904916,{roughness:.55});{let C=(O,X,K,z,B,k)=>{let V=new It(new Gh(O,X,K,3,Math.min(O,X,K)*.4),x);return V.position.set(z,B,k),V.castShadow=!0,w.add(V),V};C(.9,.22,.8,0,.42,.04),C(.95,.2,.85,0,.24,0);let N=C(.9,1.05,.24,0,.98,-.36);N.rotation.x=-.12;for(let O of[-1,1]){C(.2,.45,.85,O*.52,.46,0);let X=We(.13,.13,.88,x,O*.53,.72,.02,w,16);X.rotation.x=Math.PI/2}for(let O=0;O<6;O++)ge(new st(.018,6,5),Vt(),(O%3-1)*.28,.8+(O/3|0)*.32,-.22,w);for(let O of[-1,1])for(let X of[-1,1])We(.04,.03,.14,nt([40,20,10]),O*.5,.07,X*.35,w,8);let I=C(.45,.3,.12,.1,.68,-.18);I.material=_e(6967328,{roughness:.8}),I.rotation.set(-.3,.2,.1)}let E=new le;E.position.set(-4.6,0,.6),t.add(E),We(.04,.2,.9,nt([60,30,14]),0,.45,0,E,8);let A=ge(new st(.35,24,16),_e(4876906,{roughness:.5,emissive:1054736}),0,1.25,0,E),P=ge(new Jt(.4,.02,6,32),Vt(),0,1.25,0,E);P.rotation.y=.4,n.globe=A,Ct(n,"globe",E);let _=new le;_.position.set(7,0,.8),_.rotation.z=.12,t.add(_);for(let C of[-1,1])J(.06,6.2,.06,nt([60,32,16]),0,3.1,C*.3,_);for(let C=.4;C<6;C+=.45)J(.04,.04,.6,nt([60,32,16]),0,C,0,_);_.rotation.y=Math.PI/2,n.flyBooks=[];for(let C=0;C<6;C++){let N=new le,I=[8002080,1722922,2763370,6965784,4856394,9058832][C],O=_e(I,{roughness:.6,side:Ht}),X=_e(15260864,{side:Ht,roughness:.9}),K=[];for(let z of[-1,1]){let B=new le;N.add(B),J(.22,.01,.3,O,z*.11,0,0,B),J(.2,.02,.28,X,z*.1,.012,0,B),K.push(B)}t.add(N),n.flyBooks.push({b:N,halves:K,r:Q(1.5,3.5),y:Q(4.2,6.6),sp:Q(.25,.5)*(C%2?1:-1),ph:Q(0,6),cx:Q(-2,2),cz:Q(-4,0)}),Ct(n,"flyBook",N)}{let C=new le;C.position.set(-3.6,0,-1.2),C.rotation.y=.9,t.add(C);let N=nt([62,32,16],[1,1],{roughness:.4});C.add(vs(1.8,.9,.8,N)),J(.5,.6,.8,N,-.6,.35,0,C),J(.5,.6,.8,N,.6,.35,0,C);let I=new le;I.position.set(0,.82,.05),I.rotation.y=.15,C.add(I);let O=_e(15786688,{roughness:.9,emissive:16760944,emissiveIntensity:.1});for(let he of[-1,1]){let we=J(.34,.03,.46,O,he*.17,.02,0,I);we.rotation.z=-he*.08}J(.72,.015,.5,_e(3804176,{roughness:.6}),0,0,0,I),Hn($n(),.6,0,.15,0,I,{opacity:.25});let X=new ds(16756832,1,3,2);X.position.set(0,.5,0),I.add(X);let K=new le;K.position.set(.7,.92,-.2),K.rotation.y=-.6,C.add(K);let z=_e(14208168,{roughness:.6});ge(new st(.12,16,12),z,0,.02,0,K).scale.set(.9,.95,1.1),J(.13,.07,.12,z,0,-.07,.06,K);for(let he of[-1,1])ge(new st(.03,8,6),new ot({color:525316}),he*.045,.01,.115,K);let k=ys(n,3,!0,.7);k.g.position.set(-.65,.82,-.2),C.add(k.g);let V=We(.004,.012,.35,_e(15261912),.35,.95,.15,C,5);V.rotation.z=.6,We(.04,.05,.06,_e(1052696,{roughness:.2}),.42,.85,.12,C,10);for(let he=0;he<3;he++)J(.3,.06,.22,_e([5902360,1718820,4860432][he],{roughness:.6}),.55,.83+he*.06,.2,C).rotation.y=he*.3}bt(n,16752720,4,6,-3.4,1.6,-1,.25);{let C=Ki(1,1.3,mi("lady"));C.position.set(2.6,3.9,-7.6),t.add(C);let N=Ki(.9,.7,mi("ship"));N.position.set(-2.4,4.2,-7.6),t.add(N);for(let[I,O]of[[2.6,3.9],[-2.4,4.2]])bt(n,16756848,1.2,3,I,O+1.2,-7)}{let C=new le;C.position.set(5.2,0,1.4),t.add(C),C.add(vs(.7,.7,.75,nt([56,28,14])));let N=zn(n,.25,.04,!0,{gs:1});N.g.position.set(0,.75,0),C.add(N.g);let I=zn(n,.16,.035,!0);I.g.position.set(.15,.75,.1),C.add(I.g)}bt(n,16751168,3.5,5,5.2,1.3,1.4,.3);for(let[C,N]of[[-6.5,-5.4],[-6.5,3],[6.5,-4.6],[6.5,2.6],[4.6,-6.6]])bt(n,16752736,2.2,5,C,4.5,N,.08);{let C=ge(new Fn(1.6,40),_e(16777215,{map:at(Vh("#4a1018","#200608","#d0a050"),[1,1]),roughness:.95}),.3,.016,-5.6,t);C.rotation.x=-Math.PI/2;for(let N=0;N<4;N++){let I=J(.24,.05,.32,_e([8002080,2763370,6965784,1722922][N],{roughness:.6}),-1.2+N*.25,.025+N%2*.05,1.2+N%3*.1,t);I.rotation.y=N*.7}}Pn(n,-7.95,6.5,-2.6,Math.PI/2,0,1),Pn(n,6,7.95,-7.95,0,0,1.2);let S=Xh(n,6,.8,1.6);S.position.set(0,6.2,-1.5),t.add(S),n.chand=S,n.chLight=bt(n,16752720,10,12,0,5.9,-1.5,.12);let R=new le;R.position.set(0,0,5.96),R.rotation.y=Math.PI,t.add(R);let U=nt([44,22,12],[1,2]);J(1.9,3,.12,U,0,1.5,0,R),J(2.3,.25,.3,U,0,3.12,0,R),ge(new st(.06,10,8),Vt(),.7,1.4,.1,R),Ct(n,"toFoyer",R),bt(n,16752720,7,12,0,3.2,1.5,.1);for(let[C,N]of[[-1.6,5.8],[1.6,5.8]]){let I=new le;I.position.set(C,2.3,N),I.rotation.y=Math.PI,t.add(I),J(.12,.3,.06,Vt(),0,0,0,I),We(.05,.02,.06,Vt(),0,.06,.12,I);let O=zn(n,.2,.025,!0);O.g.position.set(0,.09,.12),I.add(O.g)}bt(n,16751168,4,6,0,2.6,5.3,.25),Pn(n,-7.95,7.95,-7.95,Math.PI/2,0,1.6),Pn(n,7.95,7.95,5.95,-Math.PI/2,-Math.PI/2,1.4),wr(n,Math.round(360*e.particles),7,7.5,6.5,0,-1),Ar(n,16,14,.15,.05,9072784,-1),n.hemi=new us(6975664,4857872,1.7),t.add(n.hemi),cl(n,-10,6,-1),n.view={pos:ut(0,1.72,3.4),yaw:0,pitch:.06}}var Qh=["#2a7aff","#3ad04a","#a040ff","#ff3040","#ffcc30","#ff8a20"];function gM(n,e){let t=n.group;al(n,{w:14,d:12,h:6.5,z0:-7,floor:Nm(),floorRep:[4,3.5],floorRough:.7,wall:ms([84,72,70]),wallScale:3.2,ceil:Zs([36,22,14],6)});for(let z=-6;z<=4;z+=2){let B=J(14,.35,.3,nt([40,22,12],[4,1]),0,6.2,z,t)}let i=new le;i.position.set(0,0,-6.7),t.add(i);let s=_e(16777215,{map:at(ms([100,88,84]),[1.5,1.2]),roughness:.85});J(.8,3.4,1.2,s,-2.1,1.7,0,i),J(.8,3.4,1.2,s,2.1,1.7,0,i),J(5,.8,1.3,s,0,3.6,0,i),J(3.4,3.2,.2,new Pi({color:788486,roughness:1}),0,1.6,-.5,i),J(4.6,2.6,.9,s,0,5.2,-.2,i);let r=new le;r.position.set(0,0,1.2-6.7+6.7),i.add(r),r.position.set(0,0,.3);let o=[];for(let z=0;z<=16;z++){let B=z/16;o.push(new ue(Math.sin(B*Math.PI*.92)*.95+.05,B*1.3))}let a=_e(1710104,{roughness:.45,metalness:.6,envMap:xi.map,envMapIntensity:.4}),l=ge(new hs(o,40),a,0,.35,0,r);l.material.side=Ht;let c=ge(new Jt(.62,.07,10,40),a,0,1.64,0,r);c.rotation.x=Math.PI/2;for(let z=0;z<3;z++){let B=z/3*Math.PI*2,k=We(.06,.04,.5,a,Math.cos(B)*.6,.22,Math.sin(B)*.6,r,6)}let u=new Yt({uniforms:{t:{value:0},col:{value:new Fe(3211120)},col2:{value:new Fe(675872)}},vertexShader:"uniform float t; varying vec2 vUv; void main(){ vUv = uv; vec3 p = position; float r = length(p.xy); p.z += sin(r*14.0 - t*3.0)*0.015 + sin(p.x*9.0+t*2.0)*0.01; gl_Position = projectionMatrix*modelViewMatrix*vec4(p,1.0); }",fragmentShader:"uniform float t; uniform vec3 col; uniform vec3 col2; varying vec2 vUv; void main(){ vec2 c = vUv-0.5; float r = length(c); float sw = sin(atan(c.y,c.x)*3.0 + r*18.0 - t*1.5)*0.5+0.5; vec3 k = mix(col2, col, 0.45 + 0.55*sw*(1.0-r*1.4)); gl_FragColor = vec4(k*1.6, 1.0); }"}),d=ge(new Fn(.6,40),u,0,1.5,0,r);d.rotation.x=-Math.PI/2,n.liquid=u,n.bubbles=[];let h=_e(6356880,{emissive:3211120,emissiveIntensity:1.5,transparent:!0,opacity:.85,roughness:.1});for(let z=0;z<14;z++){let B=ge(new st(1,10,8),h,0,1.5,0,r);B.userData={t:Q(0,1),x:Q(-.45,.45),z:Q(-.45,.45),s:Q(.04,.09),sp:Q(.5,1.2)},n.bubbles.push(B)}n.steam=[];let f=at(rl(),[1,1]);for(let z=0;z<6;z++){let B=Hn(f,1.5,0,2,0,r,{blending:Tn,opacity:.25,color:8454048});B.userData={t:z/6},n.steam.push(B)}n.cauldLight=bt(n,4259712,5,7,0,2,-5.2,.25),n.fire=[];for(let z=0;z<6;z++){let B=Hn(No(),1,Q(-.5,.5),.25,Q(-.3,.3),r);B.userData.ph=Q(0,10),B.userData.x0=B.position.x,n.fire.push(B)}bt(n,16740384,6,6,0,.4,-5.4,.4),bt(n,16748608,3,9,-4.5,3.2,-3.5,.15),bt(n,16748608,3,9,4.5,3.2,-3.5,.15),n.cauldron=r,Ct(n,"cauldron",r),Rr(n,"cauldron",1.8,1.8,1.8,0,.9,0,r),n.spots.cauldron={pos:ut(0,2.9,-3),look:ut(0,1.3,-6.4)};let g=new le;g.visible=!1,t.add(g),g.position.set(0,2.3,-6.4);let y=wn(14725200,.25),m=ge(new Jt(.1,.025,8,20),y,0,.15,0,g);We(.018,.018,.36,y,0,-.08,0,g,6),J(.08,.05,.02,y,.04,-.22,0,g),J(.06,.04,.02,y,.03,-.14,0,g),Hn($n(),.9,0,0,0,g,{opacity:.8,color:16769184}),n.keyObj=g,Ct(n,"brassKey",g),Rr(n,"brassKey",.5,.7,.5,0,0,0,g);let p=new le;p.position.set(-6.75,0,-2.4),p.rotation.y=Math.PI/2,t.add(p);let b=nt([52,28,14],[2,1]);for(let z of[1.3,2.2,3.1])J(3.4,.06,.45,b,0,z,0,p);for(let z of[-1,1])J(.06,2.3,.45,b,z*1.7,2.15,0,p);n.bottles=[];for(let z=0;z<6;z++){let B=new le;B.position.set(-1.35+z*.54,1.33,0),p.add(B);let k=new Fe(Qh[z]),V=[[0,0],[.12,0],[.14,.05],[.14,.22],[.1,.3],[.045,.36],[.045,.46],[.055,.48],[0,.48]].map(([gt,it])=>new ue(gt,it)),he=ge(new hs(V,20),_e(k,{roughness:.08,metalness:.1,transparent:!0,opacity:.55,emissive:k,emissiveIntensity:.35,envMap:xi.map}),0,0,0,B),we=ge(new Ri(.115,.11,.2,16),_e(k,{emissive:k,emissiveIntensity:1.3,roughness:.3}),0,.11,0,B);We(.04,.035,.07,nt([90,60,30]),0,.5,0,B,8),Hn($n(),.6,0,.15,.05,B,{opacity:.35,color:k}),Ct(n,"bottle"+z,B),n.bottles.push(B)}for(let z=0;z<9;z++){let B=[5925440,6965808,4213338][z%3];We(.12,.12,Q(.25,.4),_e(B,{roughness:.2,transparent:!0,opacity:.8}),-1.4+z%5*.68,(z<5?2.25:3.15)+.17,0,p,12)}n.spots.shelf={pos:ut(-4.2,2,-2.4),look:ut(-6.8,1.55,-2.4)};let w=vs(2.2,1.1,.95,nt([70,40,20],[2,1],{roughness:.6}));w.position.set(3.8,0,-1.6),t.add(w);let x=new le;x.position.set(3.6,1.1,-1.5),x.rotation.y=-.7,t.add(x);let E=_e(15260864,{roughness:.55,emissive:3153936,emissiveIntensity:.3});ge(new st(.22,24,18),E,0,.12,0,x).scale.set(.9,1,1.1);let P=new le;P.position.set(0,-.02,.05),x.add(P),ge(new st(.15,16,10,0,Math.PI*2,Math.PI*.5,Math.PI*.5),E,0,.02,.06,P).scale.set(.95,.8,1.1);for(let z=0;z<6;z++)J(.025,.035,.02,E,-.07+z*.028,.015,.21,P);let S=[];for(let z of[-1,1]){ge(new st(.06,12,10),new ot({color:328450}),z*.085,.14,.17,x);let B=Hn($n(),.22,z*.085,.14,.2,x,{color:16752704,opacity:.8});S.push(B)}ge(new Rn(.03,.06,3),new ot({color:328450}),0,.06,.22,x).rotation.x=Math.PI,n.skull=x,n.jaw=P,n.skullEyes=S,Ct(n,"skull",x),n.spots.skull={pos:ut(2.6,1.6,.2),look:ut(3.6,1.25,-1.5)};let R=ys(n,1,!0,1);R.g.position.set(4.4,.95,-1.9),t.add(R.g),bt(n,16752704,4,5,4.3,1.8,-1.6,.3),J(.5,.1,.36,_e(3807760,{roughness:.7}),3.6,1,-1.5,t);let U=new le;U.position.set(6.95,2.2,-4),U.rotation.y=-Math.PI/2,t.add(U);let C=ge(new xt(1,1.4),Df(),0,0,.02,U);n.recipePage=C,ge(new st(.03,8,6),vn(),0,.62,.05,U),Ct(n,"recipe",U),n.spots.recipe={pos:ut(4.9,2.2,-4),look:ut(7,2.2,-4)},bt(n,16752704,3,4,6,3,-4,.2);let N=new le;N.position.set(5.3,0,-6.96),t.add(N);let I=nt([40,22,12],[1,2]),O=new le;O.position.set(-.6,0,.05),N.add(O),J(1.2,2.5,.1,I,.6,1.25,0,O);for(let z of[.6,1.9])J(1.2,.08,.04,vn(),.6,z,.07,O);J(1.5,.18,.2,I,0,2.6,0,N),J(.15,2.6,.2,I,-.68,1.3,0,N),J(.15,2.6,.2,I,.68,1.3,0,N),J(.5,.06,.06,vn(),.6,1.3,.12,O),n.kLeaf=O,Ct(n,"kDoor",N),n.spots.kDoor={pos:ut(4.3,1.7,-4.6),look:ut(5.3,1.4,-7)};for(let z=0;z<8;z++){let B=new le;B.position.set(-5+z*1.3,5.6,-5.5+z%2),t.add(B),We(.005,.005,.6,_e(3811864),0,.3,0,B,3),ge(new Rn(.14,.5,6),_e([3824160,5917216,4864592][z%3],{roughness:1}),0,-.2,0,B).rotation.x=Math.PI,n.anim.push(k=>{B.rotation.z=Math.sin(k*.7+z)*.05})}for(let z=0;z<4;z++){let B=ge(new Ri(.25,.22,.08,20),wn(12085306,.35),-1.5+z*.75,4.3,-6.15,t);B.rotation.x=Math.PI/2}let X=Jh("grin",{W:512,emissive:16756816,ei:2});for(let[z,B,k]of[[-2.8,-5.8,.38],[2.9,-5.9,.32],[-6,3.6,.42],[5.8,-4.2,.3]]){let V=If(X,k);V.position.set(z,k*.8,B),V.rotation.y=Math.atan2(-z,3-B),t.add(V)}ll(n,{x:-6.9,y:2.8,z:1.6,ry:Math.PI/2,w:1.3,h:2,arch:!0,ghost:!0,rayLen:7,rayTilt:.9,rayN:2,curtain:2767386}),jh(n,-8,5,1.6,1,0,0,30,e.shadows);let K=new le;K.position.set(0,0,4.96),K.rotation.y=Math.PI,t.add(K),J(1.8,2.9,.1,nt([44,22,12],[1,2]),0,1.45,0,K),Ct(n,"toLibrary",K);for(let[z,B]of[[-1.4,4.8],[1.4,4.8]]){let k=new le;k.position.set(z,2.2,B),k.rotation.y=Math.PI,t.add(k),J(.08,.5,.08,vn(),0,0,.06,k);let V=Hn(No(),1,0,.42,.1,k);V.scale.set(.22,.4,1),n.fire.push(Object.assign(V,{})),V.userData.ph=Q(0,9),V.userData.x0=0,Hn($n(),1.4,0,.42,.12,k,{opacity:.5})}bt(n,16747056,6,7,0,2.6,4.3,.35),Pn(n,-6.95,6.45,-6.95,Math.PI/2,0,1.4),Pn(n,6.95,6.45,4.95,-Math.PI/2,-Math.PI/2,1.2),wr(n,Math.round(300*e.particles),6,6,5.5,0,-1),n.dust.material.uniforms.col.value.set(.8,1,.8),Ar(n,14,12,.15,.07,6332528,-2),n.hemi=new us(5270160,1708040,1.21),t.add(n.hemi),cl(n,-8,5,1.6),n.view={pos:ut(0,1.72,2.8),yaw:0,pitch:.02}}var eu=["#ff5a5a","#ffb030","#ffe85a","#5ad06a","#5aa0ff"];function xM(n,e){let t=n.group,i=12,s=12,r=-7,o=1.6,a=5.4,l=ge(new xt(i,s),_e(16777215,{map:at(Zs([66,46,30],8,2),[3,3]),roughness:.75}),0,0,r+s/2,t);l.rotation.x=-Math.PI/2;let c=_e(16777215,{map:at(Zs([46,32,22],10,1),[3,4]),roughness:.85,side:Ht}),u=Math.hypot(i/2,a-o),d=Math.atan2(a-o,i/2);for(let k of[-1,1]){let V=ge(new xt(u,s),c,k*i/4,(a+o)/2,r+s/2,t);V.userData.noCol=1;let he=new D(-k*Math.cos(d),Math.sin(d),0),we=new D(0,0,1);V.quaternion.setFromRotationMatrix(new At().makeBasis(he,we,new D().crossVectors(he,we))),J(.2,o,s,nt([50,34,22]),k*i/2,o/2,r+s/2,t)}for(let k=r+.5;k<r+s;k+=1.6)for(let V of[-1,1]){let he=J(u,.22,.16,nt([40,26,16]),V*i/4,(a+o)/2-.15,k,t);he.rotation.z=-V*d}J(.25,.25,s,nt([40,26,16]),0,a-.12,r+s/2,t);for(let k=r+2;k<r+s;k+=3.2)J(i,.2,.2,nt([40,26,16]),0,3.2,k,t);let h=_e(16777215,{map:at(Zs([52,36,24],12,1),[2,2]),roughness:.9,side:Ht});for(let k of[r,r+s]){let V=new cs;if(V.moveTo(-i/2,0),V.lineTo(i/2,0),V.lineTo(i/2,o),V.lineTo(0,a),V.lineTo(-i/2,o),V.lineTo(-i/2,0),k===r){let he=new ls;he.absarc(0,3,1.15,0,Math.PI*2,!0),V.holes.push(he)}ge(new Fs(V),h,0,0,k,t)}let f=ge(new Fn(1.15,40),new ot({map:at($s(!0,256,256),[1,1]),fog:!1,color:new Fe(1.3,1.3,1.5)}),0,3,r-.15,t);n.windows.push(f);let g=ge(new Jt(1.2,.1,10,40),nt([40,24,14]),0,3,r+.02,t);for(let k of[0,Math.PI/2]){let V=J(2.3,.07,.07,nt([40,24,14]),0,3,r+.02,t);V.rotation.z=k}let y=Hn(_s(),4,.35,3.4,r-.4,t,{opacity:.7,fog:!1}),m=at(Wh(),[1,1]);for(let k=0;k<4;k++){let V=new ot({map:m,color:new Fe(.6,.68,1),transparent:!0,opacity:.12,blending:Tn,depthWrite:!1,side:Ht,fog:!1}),he=new le;he.position.set(Q(-.6,.6),3+Q(-.5,.5),r+.1),t.add(he);let we=ge(new xt(Q(.5,1.1),9),V,0,-4.5,0,he);he.rotation.x=-1.15,he.rotation.z=Q(-.2,.2),we.rotation.y=Q(-.5,.5),n.rays.push({m:V,base:.07+Q(0,.04),ph:Q(0,6)})}jh(n,.3,3.2,r-1.5,0,0,-1.5,70,e.shadows);let p=new le;p.position.set(0,0,-2.2),t.add(p);let b=nt([70,40,20],[1,1]);J(1.6,.7,.9,b,0,.35,0,p);for(let k of[-.6,.6])J(.08,.72,.92,vn(),k,.36,0,p);let w=new le;w.position.set(0,.7,0),p.add(w);let x=nt([90,40,20],[1,1],{roughness:.35});J(.7,.24,.45,x,0,.12,0,w);let E=new le;E.position.set(0,.24,-.225),w.add(E),J(.72,.05,.47,x,0,.025,.235,E),E.rotation.x=-1.9,J(.6,.02,.38,xs(),0,.2,0,w);let A=We(.05,.05,.4,xs(),0,.27,-.08,w,16);A.rotation.z=Math.PI/2,n.drum=A;let P=new le;P.position.set(.18,.24,.08),w.add(P),ge(new Rn(.05,.12,12),_e(16765152,{emissive:4202544}),0,.06,0,P),ge(new st(.02,8,6),_e(16769232),0,.14,0,P),n.dancer=P,n.mkeys=[];for(let k=0;k<5;k++){let V=new Fe(eu[k]),he=new le;he.position.set(-.24+k*.12,.12,.24),w.add(he),ge(new st(.045,16,12),_e(V,{emissive:V,emissiveIntensity:.5,roughness:.25,metalness:.2}),0,0,0,he).scale.z=.6,Ct(n,"mkey"+k,he),Rr(n,"mkey"+k,.11,.14,.14,0,0,.02,he),n.mkeys.push(he)}Ct(n,"musicbox",E),n.musicbox=w,n.mbLid=E,n.spots.musicbox={pos:ut(0,1.62,-1),look:ut(0,.82,-2.05)};let _=new le;_.position.set(-1.6,3,-1.5),t.add(_),We(.006,.006,2.2,vn(),0,1.1,0,_,3),J(.22,.3,.22,_e(3153936,{metalness:.5,roughness:.4,transparent:!0,opacity:.6}),0,-.1,0,_);let S=zn(n,.12,.03,!0);S.g.position.set(0,-.22,0),_.add(S.g),n.lantern=_,n.lanternLight=bt(n,16752704,8,8,-1.6,2.85,-1.5,.3),bt(n,16756832,1.2,3,.3,1.8,-1.2,.2);let R=new le;R.position.set(-2.7,0,-3.4),R.rotation.y=.55,t.add(R);for(let k of[-1,1]){let V=J(.05,2,.05,nt([60,36,20]),k*.45,1,0,R);V.rotation.z=-k*.08}let U=J(.05,2,.05,nt([60,36,20]),0,1,-.4,R);U.rotation.x=.25,J(1,.05,.12,nt([60,36,20]),0,1,.04,R);let C=ge(new xt(1,.62),Df(),0,1.36,.03,R);C.rotation.x=-.08,n.sheetPage=C,Ct(n,"sheet",R),n.spots.sheet={pos:ut(-2,1.55,-2.3),look:ut(-2.75,1.35,-3.45)},bt(n,16756832,2.5,3,-2.3,2.1,-2.8,.2);let N=_e(6972532,{roughness:1});for(let[k,V,he,we,gt,it]of[[-4.2,-5.6,1.6,1.1,1,.2],[4,-5.4,1.2,1.6,.8,-.3],[-4.4,.6,1.4,.9,1.2,.5],[4.6,-3.2,1,.8,.9,.1]]){J(he*.96,we,gt*.96,_e(2759700),k,we/2,V,t).rotation.y=it;let lt=eg(he,we,gt,[8025224,8814736,7236224,9077908][Math.abs(k*3|0)%4]);lt.position.set(k,0,V),lt.rotation.y=it,t.add(lt)}{let k=(pe,de,Ne,ye)=>{let Ue=new le;Ue.position.set(pe,0,de),Ue.rotation.y=Ne,Ue.scale.setScalar(ye),t.add(Ue);let dt=nt([60,34,18]);J(1,.5,.6,dt,0,.25,0,Ue);let Et=We(.3,.3,1,dt,0,.5,0,Ue,16);Et.rotation.z=Math.PI/2,Et.scale.set(1,1,.35);for(let mn of[-.35,.35])J(.06,.52,.62,vn(),mn,.26,0,Ue);return J(.12,.14,.04,Vt(),0,.45,.31,Ue),Ue};k(-1.8,-5.6,.3,1),k(2,-6,-.2,.85),k(-5,-2.6,1.3,.9);let V=new le;V.position.set(2.2,0,-4),V.rotation.y=-.9,t.add(V);let he=_e(13154464,{roughness:.6}),we=_e(9050650,{roughness:.5});for(let pe of[-1,1]){let de=ge(new Jt(.9,.03,6,24,1.3),nt([60,34,18]),0,.95,pe*.2,V);de.rotation.z=-Math.PI/2-.65}let gt=We(.17,.17,.8,he,0,.62,0,V,14);gt.rotation.z=Math.PI/2;let it=We(.09,.12,.4,he,.38,.85,0,V,10);it.rotation.z=-.6;let lt=J(.35,.16,.16,he,.55,1.02,0,V);lt.rotation.z=-.3,J(.3,.03,.25,we,0,.8,0,V);let j=J(.3,.1,.04,_e(2759184),.36,.95,0,V);j.rotation.z=-.6;for(let pe of[-1,1])for(let de of[-1,1]){let Ne=We(.04,.035,.42,he,pe*.28,.4,de*.12,V,8);Ne.rotation.z=pe*.25}let re=We(.01,.05,.35,_e(2759184),-.45,.6,0,V,6);re.rotation.z=-.9;let Le=Ki(.9,1.7,null);Le.userData.pic.material=_e(4870240,{roughness:.35,metalness:.8,envMap:xi.map,envMapIntensity:.5}),Le.position.set(-5.6,1,-4.2),Le.rotation.set(-.12,1.15,0),t.add(Le);let et=ge(new xt(.9,1.7),new ot({map:at(rl(),[1,1]),color:6971504,transparent:!0,opacity:.35,depthWrite:!1}),0,0,.06,Le),Pe=new le;Pe.position.set(2.6,3.2,-5.4),t.add(Pe),We(.006,.006,1.8,vn(),0,.9,0,Pe,3),J(.18,.26,.18,_e(3153936,{metalness:.5,roughness:.4,transparent:!0,opacity:.6}),0,-.1,0,Pe);let tt=zn(n,.1,.025,!0,{gs:.5});tt.g.position.set(0,-.2,0),Pe.add(tt.g),bt(n,16752704,2.5,6,2.6,2.9,-5.4,.3),n.lantern2=Pe,Pn(n,-5.9,3,-3,Math.PI/2,0,1.2),Pn(n,5.9,2.6,-1,-Math.PI/2,0,1),Pn(n,-2.6,4.2,r+.05,0,.6,1)}let I=new le;I.position.set(3,0,-2),I.rotation.y=-.6,t.add(I);let O=nt([60,34,18]);for(let k of[-1,1]){let V=ge(new Jt(.6,.03,6,20,1.6),O,k*.3,.62,0,I);V.rotation.y=Math.PI/2,V.rotation.z=-Math.PI/2-.8,J(.05,1.2,.05,O,k*.3,.9,-.3,I),J(.05,.45,.05,O,k*.3,.28,.25,I)}J(.65,.05,.6,O,0,.48,0,I);for(let k=0;k<4;k++)J(.04,.9,.03,O,-.2+k*.13,1,-.32,I);n.rocker=I,Ct(n,"rocker",I);let X=new le;X.position.set(4.3,0,-.4),t.add(X),We(.02,.2,1,nt([40,24,14]),0,.5,0,X,6),ge(new st(.3,16,12),_e(6965850,{roughness:.8}),0,1.35,0,X).scale.set(1,1.5,.75);for(let k=0;k<5;k++)J(Q(.5,.8),Q(.4,.7),Q(.5,.8),nt([80,56,32]),Q(-5,-3),.3,Q(1.5,4),t).rotation.y=Q(0,1);Pn(n,-5.9,1.6,r+.05,0,0,1.4),Pn(n,5.9,1.6,r+.05,0,-Math.PI/2,1.2),Pn(n,.2,a-.2,r+.06,0,0,1.5);let z=ko(n.kids,1);z.position.set(0,1.4,-4),z.visible=!1,t.add(z),n.ghost=z,Ct(n,"ghost",z),wr(n,Math.round(420*e.particles),5.5,4.5,5.5,0,-1),n.dust.material.uniforms.col.value.set(.85,.9,1.1),Ar(n,12,12,.12,.07,8028352,-1),n.hemi=new us(5925552,2101256,1.1),t.add(n.hemi),cl(n,0,4,-10);let B=J(1.4,.05,1,nt([40,24,14]),0,.03,4,t);Ct(n,"toKitchen",B),n.view={pos:ut(0,1.62,2.6),yaw:0,pitch:.12}}function _M(n,e){let t=n.group,i=ge(new xt(80,80,40,40),_e(1713176,{roughness:1}),0,0,10,t);i.rotation.x=-Math.PI/2;let s=i.geometry.attributes.position;for(let S=0;S<s.count;S++)s.setZ(S,Math.sin(s.getX(S)*.3)*.15+Math.cos(s.getY(S)*.25)*.15);i.geometry.computeVertexNormals();let r=ge(new xt(2.4,26),_e(4866120,{roughness:.9}),0,.03,13,t);r.rotation.x=-Math.PI/2;for(let S=1;S<26;S+=.9){let R=ge(new Fn(Q(.3,.5),7),_e(6971496,{roughness:.8}),Q(-.6,.6),.04,S,t);R.rotation.x=-Math.PI/2}let o=new le;t.add(o);let a=_e(16777215,{map:at(ms([70,64,80]),[5,3]),roughness:.9});J(22,12,1,a,0,6,-.5,o),J(6,6,6,a,-9,15,-3,o);let l=We(2.2,2.2,18,a,9,9,-2,o,48);for(let S of[6,12,17.8])We(2.4,2.4,.3,_e(5919330,{roughness:.8}),9,S,-2,o,48);ge(new Rn(2.8,5,48),_e(1709092,{roughness:.7}),9,20.5,-2,o),ge(new Rn(14,6,4),_e(1709092,{roughness:.8}),0,15,-3,o).rotation.y=Math.PI/4;let c=new ot({color:16756832}),u=new ot({color:1314858}),d=at($s(!0,128,256),[1,1]),h=_e(2761776,{roughness:.7}),f=_e(5919330,{roughness:.8}),g=new ot({color:16754768}),y=new ot({map:d,color:8425664});for(let[S,R]of[[-7,3],[-4,3],[4,3],[7,3],[-7,7.5],[-4,7.5],[4,7.5],[7,7.5]]){let U=Q()<.6,C=new le;C.position.set(S,R,.02),o.add(C),ge(new xt(1.2,2),U?g:y,0,0,0,C),ge(new Fn(.6,20,0,Math.PI),U?g:y,0,1,0,C),J(.08,2,.1,h,0,0,.05,C),J(1.2,.07,.1,h,0,.3,.05,C);for(let N of[-1,1])J(.14,2.3,.22,f,N*.67,.1,.1,C),J(.5,2,.05,_e(1708064,{roughness:.8}),N*1,0,.06,C).rotation.y=N*.4;J(1.6,.14,.35,f,0,-1.07,.16,C),J(1.5,.16,.25,f,0,1.68,.12,C),U&&Hn($n(),2.6,0,0,.3,C,{opacity:.35})}for(let S of[5.3,11.8])J(22.6,.3,.5,f,0,S,0,o);J(23,.5,.8,f,0,12.1,-.1,o);for(let S of[-10.8,-1.9,1.9,10.8])J(.6,12,.4,f,S,6,.05,o);for(let[S,R]of[[9,12],[9,16]]){let U=ge(new xt(.9,1.6),g,S,R,.2,o);J(1.1,.12,.3,f,S,R-.85,.25,o)}J(1,4,1,a,-6,17,-3,o),J(1.3,.3,1.3,f,-6,19.1,-3,o);let m=ge(new Fn(.9,24),new ot({color:10137855}),0,13.5,.05,o);Hn(_s(),4,0,13.5,.3,o,{opacity:.8});let p=ge(new xt(3,4),new ot({color:16752720}),0,2,.03,o);Hn($n(),7,0,2,.6,o,{opacity:.6});for(let S=0;S<3;S++)J(5-S*.4,.2,1-S*.2,a,0,.1+S*.2,.5-S*.1,t);let b=[Jh("grin",{W:512,emissive:16756816,ei:2.2}),Jh("happy",{W:512,emissive:16756816,ei:2.2})];for(let S=0;S<10;S++){let R=3+S*2.2,U=(S%2?1:-1)*Q(1.8,2.8),C=Q(.3,.55),N=If(b[S%2],C);N.position.set(U,C*.8,R),N.rotation.y=Math.atan2(-U,14-R),t.add(N)}for(let S=0;S<4;S++)bt(n,16747056,6,7,S%2?2.4:-2.4,.8,4+S*4.5,.3);for(let S of[-1,1]){J(.5,3,.5,a,S*2.2,1.5,24,t),ge(new st(.35,12,10),a,S*2.2,3.25,24,t);for(let U=2.6;U<18;U+=.35)We(.03,.03,1.8,vn(),S*U,.9,24,t,4);J(16,.06,.06,vn(),S*10.4,1.6,24,t);let R=new le;R.position.set(S*1.95,0,24),t.add(R),R.rotation.y=S*1;for(let U=.1;U<1.9;U+=.22)We(.025,.025,2.4,vn(),-S*U,1.2,0,R,4);J(1.9,.06,.06,vn(),-S*.95,2.2,0,R)}let w=_e(657424,{roughness:1}),x=(S,R,U)=>{let C=new le;C.position.set(S,0,R),C.scale.setScalar(U),t.add(C);let I=((X,K,z,B,k)=>{let V=new le;return V.position.copy(X),V.rotation.set(B[0],B[1],B[2]),C.add(V),We(z*.6,z,K,w,0,K/2,0,V,6),V})(new D,4,.35,[0,0,.05]),O=(X,K,z,B)=>{if(!(K>3))for(let k=0;k<3;k++){let V=new le;V.position.y=z*Q(.6,1),V.rotation.set(Q(-.9,.9),Q(0,6),Q(-.9,.9)),X.add(V),We(B*.5,B,z*.7,w,0,z*.35,0,V,5),O(V,K+1,z*.7,B*.55)}};O(I,1,4,.3)};x(-8,8,1.2),x(9,11,1),x(-12,18,1.4),x(13,20,1.3);let E=ge(new st(70,32,16),new ot({map:at($s(!1,512,256),[1,1]),side:gn,fog:!1}),0,0,10,t);ge(new Fn(3.5,40),new ot({color:16052479,fog:!1}),8,22,60,t).lookAt(0,2,0),Hn(_s(),30,8,22,59,t,{opacity:.8,fog:!1});let P=new vo(10137855,1.6);P.position.set(8,22,60),t.add(P,P.target),n.moon=P,Ar(n,40,30,.2,.12,9081040,12),wr(n,Math.round(300*e.particles),12,4,12,0,12),n.dust.material.uniforms.col.value.set(1,.85,.4),n.hemi=new us(6978248,1054732,1.32),t.add(n.hemi),cl(n,0,20,30);let _=ko(n.kids,1.1);_.position.set(0,13.3,.8),t.add(_),n.ghost=_,n.view={pos:ut(0,1.8,8),yaw:Math.PI,pitch:.18}}function tg(n,e,t){let i={};return[["foyer",hM,{fogColor:1313820,fogDens:.022,exposure:1.45}],["library",mM,{fogColor:1444368,fogDens:.025,exposure:1.35}],["kitchen",gM,{fogColor:791566,fogDens:.03,exposure:1.2}],["attic",xM,{fogColor:790044,fogDens:.035,exposure:1.3}],["garden",_M,{fogColor:1053736,fogDens:.025,exposure:1.1}]].forEach(([r,o,a],l)=>{let c=lM(r,new D(l*300,0,0),Object.assign({kids:t},a));o(c,e),n.add(c.group),i[r]=c}),i}var Vf={};Pp(Vf,{NOTE_RATES:()=>ag,duck:()=>zf,getAnalyser:()=>wM,isMuted:()=>Bf,note:()=>su,setAmbience:()=>Of,setKids:()=>lu,setMood:()=>Ho,setMusicOn:()=>TM,setMusicVolume:()=>au,setMuted:()=>ru,setSfxOn:()=>EM,setSfxVolume:()=>ou,sfx:()=>Ae,soundNames:()=>Gf,soundsReady:()=>Hf,suspendAudio:()=>cg,unlockAudio:()=>cu});var In=null,ig=null,Fo=null,Js=null,Pr=null,_i=null,bs=null,Uf=!0,kf=!0,Oo=!1,Nf=.9,Ff=.6,pn=!1,sg=!1,rg=.55,Ir={},tu=null;function ri(){return window.__sfxClock?window.__sfxClock():In?In.currentTime:0}function Bo(){if(!In&&!sg)return null;if(!In){let n=window.AudioContext||window.webkitAudioContext;if(!n)return null;try{In=new n({latencyHint:"interactive"})}catch{In=new n}yM(In)}return In.state==="suspended"&&In.resume().catch(()=>{}),In}function yM(n){let e=n.createDynamicsCompressor();e.threshold.value=-3,e.knee.value=0,e.ratio.value=20,e.attack.value=.002,e.release.value=.12,e.connect(n.destination),ig=e,Fo=n.createGain(),Fo.gain.value=Oo?0:.85,Fo.connect(e),Js=n.createDynamicsCompressor(),Js.threshold.value=-18,Js.ratio.value=3,Js.attack.value=.005,Js.release.value=.25,Js.connect(Fo),Pr=n.createGain(),Pr.gain.value=Nf,Pr.connect(Js),bs=n.createBiquadFilter(),bs.type="lowpass",bs.frequency.value=9e3,bs.Q.value=.5,_i=n.createGain(),_i.gain.value=0,bs.connect(_i),_i.connect(Js),og(n)}function vM(n){let e=atob(n),t=e.length,i=new Uint8Array(t);for(let s=0;s<t;s++)i[s]=e.charCodeAt(s);return i.buffer}function bM(n,e,t){return new Promise(i=>{let s=!1,r=a=>{s||(s=!0,Ir[e]=a,i(!0),e.startsWith("music_")&&zo())},o=()=>{s||(s=!0,i(!1))};try{let a=n.decodeAudioData(vM(t),r,o);a&&a.then&&a.then(r,o)}catch{o()}})}function og(n){if(tu)return tu;let e=window.HME_SOUNDS||{};return tu=Object.keys(e).sort((i,s)=>(i.startsWith("music_")?1:0)-(s.startsWith("music_")?1:0)).reduce((i,s)=>i.then(()=>bM(n,s,e[s])),Promise.resolve()).then(()=>Object.keys(Ir).length),tu}var ng=n=>1+(Math.random()*2-1)*n;function xe(n,{vol:e=1,rate:t=1,delay:i=0,pan:s=0,vary:r=1}={}){if(!Uf)return null;window.__sfxLog&&window.__sfxLog.push({n,t:ri()+i,v:e,r:t,p:s});let o=Bo();if(!o)return null;let a=Ir[n];if(!a)return null;let l=o.createBufferSource();l.buffer=a,l.playbackRate.value=t*ng(.035*r);let c=o.createGain();c.gain.value=Math.max(0,e*ng(.1*r));let u=l.connect(c);if(s&&o.createStereoPanner){let d=o.createStereoPanner();d.pan.value=Math.max(-1,Math.min(1,s)),u=u.connect(d)}return u.connect(Pr),l.start(ri()+i),l}var hl=(...n)=>n[Math.random()*n.length|0];var nu={rain:0,clock_loop:0,bubble_loop:0},iu={};function MM(n){let e=Bo();if(!e||iu[n]||!Ir[n])return iu[n];let t=Ir[n],i=e.createBufferSource();i.buffer=t,i.loop=!0,i.loopStart=.5,i.loopEnd=t.duration-.5;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=2400,s.Q.value=.4;let r=e.createGain();return r.gain.value=0,i.connect(s).connect(r).connect(Pr),i.start(ri(),.5+Math.random()*2),iu[n]={src:i,lp:s,g:r},iu[n]}function Of(n={},e=2400){if(Object.assign(nu,n),window.__sfxLog&&window.__sfxLog.push({amb:{...nu},lp:e,t:ri()}),!In)return;let t=ri();for(let i of Object.keys(nu)){let s=MM(i);if(!s)continue;let r=i==="rain"?.42:i==="clock_loop"?.34:.5;s.g.gain.setTargetAtTime(Uf?nu[i]*r*(pn?.75:1):0,t,.6),s.lp.frequency.setTargetAtTime(i==="rain"?e:3200,t,.5)}}var ag=[1,1.1225,1.2599,1.4983,1.6818,2];function su(n,e=0){xe("musicbox",{vol:pn?.5:.6,rate:ag[n]||1,delay:e,vary:.05})}var Ae={creak(n=.5){xe(hl("door_creak","door_creak_b"),{vol:n*(pn?.7:1),rate:.9})},door(){xe("door_creak",{vol:.6,rate:.85}),xe("floor_c",{vol:.25,delay:.5})},floor(){xe(hl("floor_a","floor_b","floor_c"),{vol:.35,vary:.6})},step(){xe(hl("floor_a","floor_b"),{vol:.25,rate:1.1,vary:.6})},foot(n="wood",e=!1){let t=1+(Math.random()*3|0);xe((n==="stone"?"step_stone_":"step_wood_")+t,{vol:(pn?.32:.42)*(e?1.15:1),rate:.92+Math.random()*.14,vary:.4}),n==="wood"&&Math.random()<.12&&xe(hl("floor_a","floor_b"),{vol:.12,rate:1.2,vary:.5})},tick(){xe("clock_loop",{vol:.3})},chime(){xe("bell",{vol:.5,rate:.62}),xe("bell",{vol:.25,rate:.5,delay:1.3})},thunder(n=!1){xe(n&&!pn?"thunder_a":"thunder_soft",{vol:n?.55:.32,vary:.5,delay:n?.05:.5+Math.random()}),n&&xe("sub",{vol:pn?.15:.3})},match(){xe("match",{vol:.6})},ignite(){xe("fwoosh",{vol:.28,rate:.8}),xe("match",{vol:.3,rate:1.05,delay:.02})},blowOut(){xe("swish_a",{vol:.4,rate:.6}),xe("fwoosh",{vol:.2,rate:.6})},keys(){xe("keys",{vol:.55})},lock(){xe("lock",{vol:.7}),xe("impact",{vol:.18,rate:.6,delay:.05})},locked(){xe("lock_b",{vol:.55,rate:.85}),xe("rattle",{vol:.2,rate:.8})},dial(){xe("lock_b",{vol:.25,rate:1.25,vary:.4})},grind(){xe("grind",{vol:.7}),xe("grind_b",{vol:.4,delay:.4}),xe("sub",{vol:.3})},bubble(){xe("brew",{vol:.55})},splash(){xe("brew",{vol:.6,rate:.8}),xe("magic",{vol:.2,rate:.8})},fizzle(){xe("brew",{vol:.7,rate:.6}),xe("boom",{vol:.25,rate:1.3})},brewDone(){xe("cauldron_magic",{vol:.75}),xe("choir",{vol:.35,delay:.6}),xe("harp",{vol:.4,delay:1.2})},whisper(n=.45){xe(hl("whisper","whisper_b"),{vol:pn?n*.45:n,rate:pn?1.1:.95,vary:.4})},skull(){xe("whisper",{vol:pn?.25:.35,rate:.7,vary:.3}),xe("floor_c",{vol:.15,rate:1.6})},ghostHint(){xe("chime_a",{vol:.35,rate:.7}),xe("whisper_b",{vol:pn?.18:.25,rate:1.05})},pickup(){xe("sparkle",{vol:.45}),xe("harp",{vol:.28,rate:1,delay:.05})},drawer(){xe("drawer",{vol:.6}),xe("rattle",{vol:.4,delay:.25})},rattle(){xe("rattle",{vol:.45,vary:.5})},page(){xe("page",{vol:.5})},books(){xe("page",{vol:.35,rate:1.2}),xe("swish_a",{vol:.2,rate:.8})},wrong(){xe("soft",{vol:.45,rate:.6}),xe("lock_b",{vol:.2,rate:.7})},solve(){xe("success",{vol:.55}),xe("choir",{vol:.25,delay:.2})},bigSolve(){xe("success",{vol:.6}),xe("choir",{vol:.4,delay:.2}),xe("epic",{vol:pn?.25:.35,delay:.1})},scare(){if(pn){xe("squeak_kids",{vol:.4}),xe("laugh_kids",{vol:.4,delay:.3});return}xe("stinger",{vol:.85}),xe("scream",{vol:.65,delay:.02}),xe("impact",{vol:.4,rate:.7})},flyby(){if(pn){xe("laugh_kids",{vol:.35,rate:1.1}),xe("swish_a",{vol:.25});return}xe("stinger_b",{vol:.7}),xe("whisper",{vol:.5,rate:1.2}),xe("swish_a",{vol:.5,rate:.7})},bats(){xe("bats",{vol:.35}),pn&&xe("squeak_kids",{vol:.25,delay:.2})},ghost(){xe("riser",{vol:pn?.2:.4,rate:.8}),xe("choir",{vol:.35,delay:.5}),Ae.whisper(.5)},happyGhost(){xe("musicbox_tune",{vol:.5}),xe("choir",{vol:.4}),xe("harp",{vol:.4,delay:.6})},escape(){xe("door_creak",{vol:.7,rate:.75}),xe("epic",{vol:.55,delay:.6}),xe("choir",{vol:.5,delay:.9}),xe("harp",{vol:.5,delay:1.4})},ui(){xe("soft",{vol:.32,rate:1.2,vary:.2})},start(){xe("door_creak",{vol:.5,rate:.8}),xe("sub",{vol:.3}),xe("thunder_soft",{vol:.35,delay:.4})},newBest(){xe("choir",{vol:.5}),xe("harp",{vol:.5,delay:.2}),xe("magic",{vol:.35,delay:.1})}},ul={start:.5,end:36.5},Zi=null,lg="main";function zo(){if(!In)return;let n=kf&&!Oo;_i.gain.cancelScheduledValues(ri()),_i.gain.setTargetAtTime(n?Ff*rg*(pn?.7:1):0,ri(),.3),bs.frequency.setTargetAtTime(pn?3500:9e3,ri(),.3),n&&SM(lg)}function SM(n){let e=Bo();if(!e)return;let t=Ir["music_"+n];if(!t||Zi&&Zi.mood===n)return;let i=ri(),s=e.createBufferSource();s.buffer=t,s.loop=!0,s.loopStart=ul.start,s.loopEnd=Math.min(ul.end,t.duration);let r=e.createGain();r.gain.setValueAtTime(1e-4,i),r.gain.linearRampToValueAtTime(1,i+(Zi?1.2:.4)),s.connect(r).connect(bs);let o=Zi?(i-Zi.t0)%(ul.end-ul.start):0;if(s.start(i,ul.start+o),Zi){let a=Zi;a.gain.gain.cancelScheduledValues(i),a.gain.gain.setValueAtTime(a.gain.gain.value,i),a.gain.gain.linearRampToValueAtTime(1e-4,i+1.2);try{a.src.stop(i+1.3)}catch{}}Zi={src:s,gain:r,mood:n,t0:Zi?Zi.t0:i}}function Ho(n){lg="main",bs&&In&&bs.frequency.setTargetAtTime(n==="tense"?1600:n==="calm"?5e3:pn?3500:9e3,ri(),.8)}function TM(n){kf=!!n,zo()}function EM(n){Uf=!!n}function ru(n){Oo=!!n,Fo&&Fo.gain.setTargetAtTime(Oo?0:.85,ri(),.05),zo()}function Bf(){return Oo}function ou(n){Nf=Math.max(0,Math.min(1,n)),Pr&&Pr.gain.setTargetAtTime(Nf,ri(),.05)}function au(n){Ff=Math.max(0,Math.min(1,n)),zo()}function lu(n){pn=!!n,zo()}function zf(n=.35,e=1.5){if(!In||!kf||Oo)return;let t=ri(),i=Ff*rg*(pn?.7:1);_i.gain.cancelScheduledValues(t),_i.gain.setValueAtTime(_i.gain.value,t),_i.gain.linearRampToValueAtTime(i*n,t+.08),_i.gain.setValueAtTime(i*n,t+e),_i.gain.linearRampToValueAtTime(i,t+e+1.2)}function cu(){sg=!0,Bo()&&zo()}function Hf(){let n=Bo();return n?og(n):Promise.resolve(0)}function Gf(){return Object.keys(Ir)}function cg(n){In&&(n?In.suspend().catch(()=>{}):In.resume().catch(()=>{}))}var dl=null;function wM(){let n=Bo();return n?(dl||(dl=n.createAnalyser(),dl.fftSize=2048,ig.connect(dl)),dl):null}if(typeof window<"u"){let n=()=>{cu(),window.removeEventListener("pointerdown",n,!0),window.removeEventListener("keydown",n,!0),window.removeEventListener("touchend",n,!0)};window.addEventListener("pointerdown",n,!0),window.addEventListener("keydown",n,!0),window.addEventListener("touchend",n,!0),document.addEventListener("visibilitychange",()=>cg(document.hidden))}var hu={en:{l_kitchenDoor:"Kitchen door",l_kDoor:"Door to the foyer",m_kitLocked:"Bolted from the other side. Maybe there is another way into the kitchen\u2026",m_unbolt:"You slide the iron bolt back. The door to the foyer is open now.",locked:"\u{1F512} Locked",xhUse:"E / Click: {x}",xhTap:"\u270B Tap: {x}",ctxWalk:"WASD to walk \xB7 mouse to look \xB7 E to interact",ctxWalkT:"Left stick to walk \xB7 swipe to look \xB7 tap to interact",tutW1t:"Walk around",tutW1:"WASD or arrow keys to walk, Shift to hurry. Click the view to look with the mouse (Esc releases it).",tutW1m:"Use the left stick to walk and swipe on the right to look around.",tutW2t:"Look at glowing objects",tutW2:"Point the crosshair at something that sparkles \u2728, then press E or click to use it.",tutW2m:"Point the crosshair at something that sparkles \u2728, then tap it or press \u270B.",tutW3t:"Use items from your bag",tutW3:"Press 1\u20135 or click an item, then look at an object and press E. \u2715 or Esc puts it back.",tutW4t:"Doors and stairs",tutW4:"Walk through open doors. Locked doors rattle until you solve their puzzle. The staircase leads up.",walkMode:"Free walking (first person)",sens:"Mouse sensitivity",invY:"Invert Y",bob:"Head bob",tutTitle:"How to play",tutSkip:"Skip",tutNext:"Next",tutGo:"Let's go!",tutHelp:"Controls",tut1t:"Click glowing objects",tut1:"Sparkles \u2728 mark things you can inspect. Hover to see a name, click or tap to look closer.",tut2t:"Drag to look around",tut2:"Hold and drag (or swipe) to turn your head. A quick click never turns the view.",tut3t:"Use items from your bag",tut3:"Click an item in your bag, then click an object to use it. \u2715 or Esc puts it back.",tut4t:"Change rooms",tut4:"Use the door buttons at the side of the screen, or click a door. \u21A9 Back leaves a close-up.",tut5t:"Ask the skull for hints",tut5:"Stuck? The \u{1F480} button gives up to 3 hints per puzzle. Fewer hints = more stars.",ctxClick:"Click to inspect: {x}",ctxTap:"Tap glowing objects \u2728 \xB7 swipe to look around",ctxStartM:"Click glowing objects \u2728 \xB7 drag to look around",ctxUse:"Use {x} on {y}?",ctxIdle:"Psst\u2026 try the glowing {x} \u2728",wrongUse:"That doesn't work here.",deselect:"Put back",navLocked:"locked",navTo:"{x}",n_foyer:"Foyer",n_library:"Library",n_kitchen:"Kitchen",n_attic:"Attic",kicker:"A Halloween escape room",tag:"Find keys, light candles, open secret doors \u2014 and get out before midnight.",play:"ENTER THE MANSION",cont:"CONTINUE",newGame:"New game",how:"\u{1F5B1}\uFE0F Click / tap objects &nbsp;\xB7&nbsp; \u270B Drag to look around &nbsp;\xB7&nbsp; \u{1F392} Select an item, then click where to use it &nbsp;\xB7&nbsp; \u{1F480} Stuck? Ask for a hint",howKids:"\u{1F446} Tap things to explore &nbsp;\xB7&nbsp; \u270B Drag to look around &nbsp;\xB7&nbsp; \u{1F392} Items are used by themselves &nbsp;\xB7&nbsp; \u{1F47B} The friendly ghost helps you",kids:"Kids mode",settings:"\u2699 Settings",best:"Best",settingsT:"Settings",quality:"Quality",q_low:"Low",q_mid:"Medium",q_high:"High",q_ultra:"Ultra",music:"Music",sfx:"Sound effects",mute:"Mute all",close:"Done",paused:"Paused",resume:"RESUME",quit:"Main menu",lang:"Language",time:"Time",hints:"Hints",hint:"Hint",bag:"Bag",back:"Back",enter:"OK",clear:"Clear",suggested:"Suggested for this device",fpsLow:"Running slow \u2013 switched quality to",saved:"Progress saved",resumed:"Welcome back! Progress restored.",endTitle:"YOU ESCAPED!",newBest:"NEW BEST TIME!",name:"Name",stTime:"escape time",stHints:"hints used",stStars:"stars",stRooms:"rooms",shareT:"Share text",share:"Copy share text",shot:"Download end card",replay:"PLAY AGAIN",copied:"Copied! Paste it on X \u{1F47B}",copyFail:"Copy failed \u2013 select the text manually",shotSaved:"End card saved \u{1F4F8}",r_foyer:"THE GRAND FOYER",r_library:"THE FORBIDDEN LIBRARY",r_kitchen:"THE WITCH'S KITCHEN",r_attic:"THE ATTIC",r_garden:"FREEDOM",c_foyer:"CHAPTER I",c_library:"CHAPTER II",c_kitchen:"CHAPTER III",c_attic:"FINALE",c_garden:"EPILOGUE",l_drawer:"Rattling drawer",l_candleItem:"Spare candle",l_clock:"Grandfather clock",l_portraitLord:"Lord Ashgrave",l_portraitLady:"Lady Ashgrave",l_portraitCat:"Sir Whiskers",l_portraitShip:"The Black Gull",l_libDoor:"Library door",l_codeLock:"Code lock",l_frontDoor:"Front door",l_stairs:"Grand staircase",l_chandelier:"Chandelier",l_secretDoor:"Bookshelf",l_lectern:"Open book",l_twitchBook:"Twitching red book",l_globe:"Globe",l_flyBook:"Flying book",l_toFoyer:"Back to the foyer",l_holder0:"Candle \u2014 moon",l_holder1:"Candle \u2014 pumpkin",l_holder2:"Candle \u2014 bat",l_holder3:"Empty holder \u2014 skull",l_holder4:"Candle \u2014 spider",l_cauldron:"Bubbling cauldron",l_recipe:"Recipe",l_skull:"Talking skull",l_atticDoor:"Attic door",l_brassKey:"Brass key",l_toLibrary:"Back to the library",l_bottle0:"Blue potion",l_bottle1:"Green potion",l_bottle2:"Purple potion",l_bottle3:"Red potion",l_bottle4:"Yellow potion",l_bottle5:"Orange potion",l_musicbox:"Music box",l_sheet:"Sheet music",l_ghost:"Wisp",l_rocker:"Rocking chair",l_toKitchen:"Down to the kitchen",l_mkey0:"Red key",l_mkey1:"Orange key",l_mkey2:"Yellow key",l_mkey3:"Green key",l_mkey4:"Blue key",i_matches:"Matches",i_candle:"Candle",i_crystal:"Moon crystal",i_brassKey:"Brass key",i_silverKey:"Silver key",got:"You found: {x}",useOn:"Use {x} on\u2026",needItem:"Something from your bag might help here\u2026",intro:"The door slams shut behind you. Thunder. The candles flicker\u2026 You have to find a way out!",m_drawer:"The drawer rattles on its own\u2026 Inside: a box of matches!",m_drawerEmpty:"Just dust and a dead moth.",m_candleItem:"A spare candle \u2014 not lit. Someone might be missing it.",m_clock:"It ticks\u2026 but the hands never move. Frozen at 10:35.",m_clock2:"Still 10:35. The pendulum swings anyway.",m_lord:'"Lord Ashgrave \u2014 Time reveals my door." His eyes follow you everywhere.',m_lady:"Lady Ashgrave smiles politely. Too politely.",m_cat:"Sir Whiskers, the family cat. Very serious.",m_ship:"A ship sailing under a full moon.",m_libLocked:"Locked. A brass lock with four number wheels.",m_libOpen:"The library door creaks open.",m_codeWrong:"The wheels clunk back. Wrong code.",m_codeRight:"Click \u2014 clunk! The lock opens!",m_front:"The front door is locked tight. The keyhole is silver.",m_frontKey:"The silver key turns\u2026 the door swings open!",m_stairs:"The grand staircase creaks under your feet. It leads up to the landing.",m_chand:"The chandelier sways\u2026 creaking.",m_lectern:'"The Order of Flames": light them as shown, and the wall shall move.',m_twitch:"You pull the twitching book\u2026 it is hollow! Inside: a glowing moon crystal.",m_twitchEmpty:"The hollow book is empty now.",m_globe:"The globe spins with a squeak.",m_flyBook:"The book flaps away like an angry bird.",m_holderEmpty:"An empty candle holder with a skull sign.",m_placed:"The candle fits perfectly.",m_needLight:"An unlit candle. You need fire.",m_lit:"The flame catches.",m_blown:"A cold draft blows all flames out! Wrong order.",m_shelfOpen:"Stone grinds\u2026 the bookshelf swings open! A secret passage!",m_shelf:"Old books. Very, very old books.",m_shelfOpened:"The secret passage leads down to the kitchen.",m_cauldron:"A bubbling green brew. The recipe must be followed.",m_recipe:'"Moonlight Elixir": pour in order \u2014 then add the light of the moon.',m_pour:"Splash! The brew changes colour.",m_brewWrong:"BLORP! The cauldron burps green smoke. Start again.",m_brewDone:"The brew glows\u2026 and a brass key rises from the cauldron!",m_crystalFirst:"The recipe says: crystal comes last.",m_attic:"A heavy brass padlock.",m_atticOpen:"The brass key turns! Steep stairs lead up to the attic\u2026",m_toLibrary:"The passage back to the library.",m_ghostIntro:`"Who's there\u2026? I'm Wisp. I lost my lullaby long ago. Play it for me \u2014 and I'll set you free."`,m_listen:"Listen\u2026",m_yourTurn:"Your turn!",m_melodyWrong:`"No\u2026 that's not it." Wisp hums it again.`,m_melodyDone:`"That's it! My lullaby!" Wisp glows \u2014 and a silver key floats down to you.`,m_sheet:"Old sheet music. Coloured notes\u2026 like the keys of the music box.",m_rocker:"The chair keeps rocking. Nobody is sitting in it. Probably.",m_ghost:'"Shall I hum it again?"',m_musicbox:"A music box with five coloured keys.",m_ghostKey:'Wisp whispers: "The front door. Go!"',m_scareKids:"Peek-a-boo! A little bat waves at you!",m_scare:"!!!",m_flybyKids:'A tiny ghost floats by: "Boo!" \u2014 and giggles.',hintBy:"Bones the skull",hintByGhost:"Wisp the friendly ghost",noMoreHints:"That's all I know. You can do it!",escapeLine:"You step out into the moonlit garden. FREE!",h_code1:"The library door wants a number. Something in this hall stopped counting time\u2026",h_code2:"Look closely at the grandfather clock on the left.",h_code3:"The clock is frozen at 10:35. Enter 1 \u2013 0 \u2013 3 \u2013 5 on the lock.",h_matches1:"You will need fire later. Listen \u2014 something rattles on the left side of the hall.",h_matches2:"The drawer of the console table under the mirror shivers.",h_matches3:"Click the rattling drawer (left wall, under the mirror) to find matches.",h_candle1:"One holder on the mantel is empty\u2026",h_candle2:"A spare candle lies by the foot of the stairs in the foyer.",h_candle3:"Take the candle from the little table by the foyer staircase, select it in your bag and click the empty skull holder.",h_candles1:"The open book on the lectern tells the order of flames.",h_candles2:"Each holder has a symbol. Match the symbols with the book.",h_candles3:"Select the matches, then light: {seq}.",h_crystal1:"The recipe needs moonlight. One book in the library cannot sit still\u2026",h_crystal2:"Look at the right-hand shelves in the library \u2014 a red book twitches.",h_crystal3:"Go back to the library and click the twitching red book on the right shelves.",h_brew1:"The recipe on the right wall tells you what the cauldron craves.",h_brew2:"Click the potion bottles on the shelf in the recipe's order, then add something that glows like the moon.",h_brew3:"Pour {seq}, then select the moon crystal and click the cauldron.",h_key1:"Something shiny rose from the cauldron.",h_key2:"Take the brass key floating above the cauldron.",h_key3:"Select the brass key and click the small attic door up on the gallery (left of the portrait).",h_attic1:"You hold a brass key. Where is a brass lock?",h_attic2:"Up the grand staircase in the foyer: a small door on the landing, left of the portrait.",h_attic3:"Select the brass key and click the attic door.",h_melody1:"Wisp wants her lullaby. Listen carefully when she hums.",h_melody2:"The sheet music on the easel shows the colours of the notes.",h_melody3:"Play the keys: {seq}.",h_front1:"Wisp gave you a silver key. Which door had a silver keyhole?",h_front2:"The big front door of the foyer!",h_front3:"Select the silver key and click the front door.",rk:["Scaredy Cat","Candle Bearer","Lock Picker","Mansion Sleuth","Ghost Hunter"],seqSep:" \u2192 ",sym_moon:"\u{1F319} moon",sym_pumpkin:"\u{1F383} pumpkin",sym_bat:"\u{1F987} bat",sym_skull:"\u{1F480} skull",sym_spider:"\u{1F577} spider",col0:"blue",col1:"green",col2:"purple",col3:"red",col4:"yellow",col5:"orange",n0:"red",n1:"orange",n2:"yellow",n3:"green",n4:"blue",bookT:["The Order of Flames","light them thus"],recipeT:["Moonlight Elixir","pour in this order"],crystalT:"moon crystal",sheetT:"Wisp's Lullaby"},de:{l_kitchenDoor:"K\xFCchent\xFCr",l_kDoor:"T\xFCr zum Foyer",m_kitLocked:"Von der anderen Seite verriegelt. Vielleicht gibt es einen anderen Weg in die K\xFCche\u2026",m_unbolt:"Du schiebst den Eisenriegel zur\xFCck. Die T\xFCr zum Foyer ist jetzt offen.",locked:"\u{1F512} Verschlossen",xhUse:"E / Klick: {x}",xhTap:"\u270B Tippen: {x}",ctxWalk:"WASD laufen \xB7 Maus umsehen \xB7 E benutzen",ctxWalkT:"Linker Stick laufen \xB7 wischen umsehen \xB7 tippen benutzen",tutW1t:"Herumlaufen",tutW1:"WASD oder Pfeiltasten zum Laufen, Shift f\xFCr schneller. Klick ins Bild, um mit der Maus zu schauen (Esc gibt sie frei).",tutW1m:"Mit dem linken Stick laufen, rechts wischen zum Umsehen.",tutW2t:"Leuchtende Objekte anschauen",tutW2:"Richte das Fadenkreuz auf etwas Funkelndes \u2728 und dr\xFCck E oder klick.",tutW2m:"Richte das Fadenkreuz auf etwas Funkelndes \u2728 und tippe es an oder dr\xFCck \u270B.",tutW3t:"Gegenst\xE4nde aus der Tasche",tutW3:"Dr\xFCck 1\u20135 oder klick einen Gegenstand, schau auf ein Objekt und dr\xFCck E. \u2715 oder Esc legt ihn zur\xFCck.",tutW4t:"T\xFCren und Treppen",tutW4:"Lauf durch offene T\xFCren. Verschlossene T\xFCren r\xFCtteln, bis du ihr R\xE4tsel l\xF6st. Die Treppe f\xFChrt nach oben.",walkMode:"Frei laufen (Ego-Perspektive)",sens:"Maus-Empfindlichkeit",invY:"Y invertieren",bob:"Kopfwippen",tutTitle:"So wird gespielt",tutSkip:"\xDCberspringen",tutNext:"Weiter",tutGo:"Los geht\u2019s!",tutHelp:"Steuerung",tut1t:"Leuchtende Objekte anklicken",tut1:"Funkeln \u2728 markiert, was du untersuchen kannst. Maus dr\xFCber zeigt den Namen, Klick oder Tippen schaut genauer hin.",tut2t:"Ziehen zum Umsehen",tut2:"Gedr\xFCckt halten und ziehen (oder wischen), um dich umzusehen. Ein kurzer Klick dreht die Ansicht nie.",tut3t:"Gegenst\xE4nde aus der Tasche",tut3:"Klick einen Gegenstand in der Tasche an, dann das Objekt, an dem du ihn benutzen willst. \u2715 oder Esc legt ihn zur\xFCck.",tut4t:"R\xE4ume wechseln",tut4:"Nutze die T\xFCr-Kn\xF6pfe am Bildschirmrand oder klick eine T\xFCr an. \u21A9 Zur\xFCck verl\xE4sst die Nahansicht.",tut5t:"Den Sch\xE4del um Tipps bitten",tut5:"Feststeckend? Der \u{1F480}-Knopf gibt bis zu 3 Tipps pro R\xE4tsel. Weniger Tipps = mehr Sterne.",ctxClick:"Klicken zum Untersuchen: {x}",ctxTap:"Leuchtende Objekte antippen \u2728 \xB7 wischen zum Umsehen",ctxStartM:"Leuchtende Objekte anklicken \u2728 \xB7 ziehen zum Umsehen",ctxUse:"{x} benutzen mit {y}?",ctxIdle:"Psst\u2026 probier mal: {x} \u2728",wrongUse:"Das funktioniert hier nicht.",deselect:"Zur\xFCcklegen",navLocked:"verschlossen",navTo:"{x}",n_foyer:"Foyer",n_library:"Bibliothek",n_kitchen:"K\xFCche",n_attic:"Dachboden",kicker:"Ein Halloween-Escape-Room",tag:"Finde Schl\xFCssel, entz\xFCnde Kerzen, \xF6ffne Geheimt\xFCren \u2014 und entkomme vor Mitternacht.",play:"VILLA BETRETEN",cont:"WEITERSPIELEN",newGame:"Neues Spiel",how:"\u{1F5B1}\uFE0F Objekte anklicken / antippen &nbsp;\xB7&nbsp; \u270B Ziehen zum Umsehen &nbsp;\xB7&nbsp; \u{1F392} Gegenstand w\xE4hlen, dann anklicken, wo er hin soll &nbsp;\xB7&nbsp; \u{1F480} Feststeckt? Tipp holen",howKids:"\u{1F446} Tippe Dinge an &nbsp;\xB7&nbsp; \u270B Ziehen zum Umsehen &nbsp;\xB7&nbsp; \u{1F392} Gegenst\xE4nde werden automatisch benutzt &nbsp;\xB7&nbsp; \u{1F47B} Das liebe Gespenst hilft dir",kids:"Kinder-Modus",settings:"\u2699 Einstellungen",best:"Rekord",settingsT:"Einstellungen",quality:"Qualit\xE4t",q_low:"Niedrig",q_mid:"Mittel",q_high:"Hoch",q_ultra:"Ultra",music:"Musik",sfx:"Effekte",mute:"Alles stumm",close:"Fertig",paused:"Pause",resume:"WEITER",quit:"Hauptmen\xFC",lang:"Sprache",time:"Zeit",hints:"Tipps",hint:"Tipp",bag:"Tasche",back:"Zur\xFCck",enter:"OK",clear:"L\xF6schen",suggested:"Empfohlen f\xFCr dieses Ger\xE4t",fpsLow:"L\xE4uft langsam \u2013 Qualit\xE4t umgestellt auf",saved:"Spielstand gespeichert",resumed:"Willkommen zur\xFCck! Spielstand geladen.",endTitle:"ENTKOMMEN!",newBest:"NEUE BESTZEIT!",name:"Name",stTime:"Fluchtzeit",stHints:"Tipps",stStars:"Sterne",stRooms:"R\xE4ume",shareT:"Teil-Text",share:"Teil-Text kopieren",shot:"Endkarte laden",replay:"NOCHMAL SPIELEN",copied:"Kopiert! Jetzt auf X einf\xFCgen \u{1F47B}",copyFail:"Kopieren fehlgeschlagen \u2013 Text bitte markieren",shotSaved:"Endkarte gespeichert \u{1F4F8}",r_foyer:"DIE GROSSE EINGANGSHALLE",r_library:"DIE VERBOTENE BIBLIOTHEK",r_kitchen:"DIE HEXENK\xDCCHE",r_attic:"DER DACHBODEN",r_garden:"FREIHEIT",c_foyer:"KAPITEL I",c_library:"KAPITEL II",c_kitchen:"KAPITEL III",c_attic:"FINALE",c_garden:"EPILOG",l_drawer:"Klappernde Schublade",l_candleItem:"Ersatzkerze",l_clock:"Standuhr",l_portraitLord:"Lord Ashgrave",l_portraitLady:"Lady Ashgrave",l_portraitCat:"Sir Schnurrbart",l_portraitShip:"Die Schwarze M\xF6we",l_libDoor:"Bibliothekst\xFCr",l_codeLock:"Zahlenschloss",l_frontDoor:"Haust\xFCr",l_stairs:"Gro\xDFe Treppe",l_chandelier:"Kronleuchter",l_secretDoor:"B\xFCcherregal",l_lectern:"Offenes Buch",l_twitchBook:"Zuckendes rotes Buch",l_globe:"Globus",l_flyBook:"Fliegendes Buch",l_toFoyer:"Zur\xFCck in die Halle",l_holder0:"Kerze \u2014 Mond",l_holder1:"Kerze \u2014 K\xFCrbis",l_holder2:"Kerze \u2014 Fledermaus",l_holder3:"Leerer Halter \u2014 Totenkopf",l_holder4:"Kerze \u2014 Spinne",l_cauldron:"Blubbernder Kessel",l_recipe:"Rezept",l_skull:"Sprechender Sch\xE4del",l_atticDoor:"Dachbodent\xFCr",l_brassKey:"Messingschl\xFCssel",l_toLibrary:"Zur\xFCck in die Bibliothek",l_bottle0:"Blauer Trank",l_bottle1:"Gr\xFCner Trank",l_bottle2:"Lila Trank",l_bottle3:"Roter Trank",l_bottle4:"Gelber Trank",l_bottle5:"Oranger Trank",l_musicbox:"Spieluhr",l_sheet:"Notenblatt",l_ghost:"Wisp",l_rocker:"Schaukelstuhl",l_toKitchen:"Hinunter in die K\xFCche",l_mkey0:"Rote Taste",l_mkey1:"Orange Taste",l_mkey2:"Gelbe Taste",l_mkey3:"Gr\xFCne Taste",l_mkey4:"Blaue Taste",i_matches:"Streichh\xF6lzer",i_candle:"Kerze",i_crystal:"Mondkristall",i_brassKey:"Messingschl\xFCssel",i_silverKey:"Silberschl\xFCssel",got:"Gefunden: {x}",useOn:"{x} benutzen mit\u2026",needItem:"Vielleicht hilft etwas aus deiner Tasche\u2026",intro:"Die T\xFCr knallt hinter dir zu. Donner. Die Kerzen flackern\u2026 Du musst einen Ausweg finden!",m_drawer:"Die Schublade klappert von selbst\u2026 Darin: eine Schachtel Streichh\xF6lzer!",m_drawerEmpty:"Nur Staub und eine tote Motte.",m_candleItem:"Eine Ersatzkerze \u2014 nicht angez\xFCndet. Irgendwo fehlt sie bestimmt.",m_clock:"Sie tickt\u2026 aber die Zeiger bewegen sich nie. Stehengeblieben um 10:35.",m_clock2:"Immer noch 10:35. Das Pendel schwingt trotzdem.",m_lord:"\u201ELord Ashgrave \u2014 Die Zeit verr\xE4t meine T\xFCr.\u201C Seine Augen folgen dir \xFCberallhin.",m_lady:"Lady Ashgrave l\xE4chelt h\xF6flich. Zu h\xF6flich.",m_cat:"Sir Schnurrbart, die Familienkatze. Sehr ernst.",m_ship:"Ein Schiff unter dem Vollmond.",m_libLocked:"Verschlossen. Ein Messingschloss mit vier Zahlenr\xE4dern.",m_libOpen:"Die Bibliothekst\xFCr knarrt auf.",m_codeWrong:"Die R\xE4der klacken zur\xFCck. Falscher Code.",m_codeRight:"Klick \u2014 klonk! Das Schloss springt auf!",m_front:"Die Haust\xFCr ist fest verschlossen. Das Schl\xFCsselloch ist aus Silber.",m_frontKey:"Der Silberschl\xFCssel dreht sich\u2026 die T\xFCr schwingt auf!",m_stairs:"Die gro\xDFe Treppe knarrt unter deinen F\xFC\xDFen. Sie f\xFChrt hinauf zur Galerie.",m_chand:"Der Kronleuchter schwankt\u2026 und knarrt.",m_lectern:"\u201EDie Ordnung der Flammen\u201C: Entz\xFCnde sie so \u2014 und die Wand wird weichen.",m_twitch:"Du ziehst das zuckende Buch heraus\u2026 es ist hohl! Darin: ein leuchtender Mondkristall.",m_twitchEmpty:"Das hohle Buch ist jetzt leer.",m_globe:"Der Globus dreht sich quietschend.",m_flyBook:"Das Buch flattert davon wie ein w\xFCtender Vogel.",m_holderEmpty:"Ein leerer Kerzenhalter mit Totenkopf-Zeichen.",m_placed:"Die Kerze passt genau.",m_needLight:"Eine Kerze ohne Flamme. Du brauchst Feuer.",m_lit:"Die Flamme brennt.",m_blown:"Ein kalter Luftzug bl\xE4st alle Flammen aus! Falsche Reihenfolge.",m_shelfOpen:"Stein knirscht\u2026 das B\xFCcherregal schwingt auf! Ein Geheimgang!",m_shelf:"Alte B\xFCcher. Sehr, sehr alte B\xFCcher.",m_shelfOpened:"Der Geheimgang f\xFChrt hinunter in die K\xFCche.",m_cauldron:"Ein blubberndes gr\xFCnes Gebr\xE4u. Man muss sich ans Rezept halten.",m_recipe:"\u201EMondlicht-Elixier\u201C: in dieser Reihenfolge hineingie\xDFen \u2014 dann das Licht des Mondes hinzuf\xFCgen.",m_pour:"Platsch! Das Gebr\xE4u wechselt die Farbe.",m_brewWrong:"BLORP! Der Kessel r\xFClpst gr\xFCnen Rauch. Nochmal von vorn.",m_brewDone:"Das Gebr\xE4u leuchtet\u2026 und ein Messingschl\xFCssel steigt aus dem Kessel!",m_crystalFirst:"Laut Rezept kommt der Kristall zuletzt.",m_attic:"Ein schweres Vorh\xE4ngeschloss aus Messing.",m_atticOpen:"Der Messingschl\xFCssel dreht sich! Eine steile Treppe f\xFChrt auf den Dachboden\u2026",m_toLibrary:"Der Gang zur\xFCck in die Bibliothek.",m_ghostIntro:"\u201EWer ist da\u2026? Ich bin Wisp. Ich habe mein Schlaflied vor langer Zeit verloren. Spiel es f\xFCr mich \u2014 und ich lasse dich frei.\u201C",m_listen:"H\xF6r zu\u2026",m_yourTurn:"Du bist dran!",m_melodyWrong:"\u201ENein\u2026 so geht es nicht.\u201C Wisp summt es noch einmal.",m_melodyDone:"\u201EDas ist es! Mein Schlaflied!\u201C Wisp leuchtet \u2014 und ein Silberschl\xFCssel schwebt zu dir herab.",m_sheet:"Alte Noten. Farbige Notenk\xF6pfe\u2026 wie die Tasten der Spieluhr.",m_rocker:"Der Stuhl schaukelt weiter. Niemand sitzt darauf. Wahrscheinlich.",m_ghost:"\u201ESoll ich es noch einmal summen?\u201C",m_musicbox:"Eine Spieluhr mit f\xFCnf bunten Tasten.",m_ghostKey:"Wisp fl\xFCstert: \u201EDie Haust\xFCr. Lauf!\u201C",m_scareKids:"Kuckuck! Eine kleine Fledermaus winkt dir zu!",m_scare:"!!!",m_flybyKids:"Ein kleines Gespenst schwebt vorbei: \u201EBuh!\u201C \u2014 und kichert.",hintBy:"Knochen, der Sch\xE4del",hintByGhost:"Wisp, das liebe Gespenst",noMoreHints:"Mehr wei\xDF ich nicht. Du schaffst das!",escapeLine:"Du trittst hinaus in den mondhellen Garten. FREI!",h_code1:"Die Bibliothekst\xFCr will eine Zahl. Etwas in dieser Halle hat aufgeh\xF6rt, die Zeit zu z\xE4hlen\u2026",h_code2:"Sieh dir die Standuhr links genau an.",h_code3:"Die Uhr steht auf 10:35. Gib 1 \u2013 0 \u2013 3 \u2013 5 am Schloss ein.",h_matches1:"Du wirst sp\xE4ter Feuer brauchen. H\xF6r mal \u2014 links in der Halle klappert etwas.",h_matches2:"Die Schublade des Tischchens unter dem Spiegel zittert.",h_matches3:"Klick auf die klappernde Schublade (linke Wand, unter dem Spiegel) \u2013 darin sind Streichh\xF6lzer.",h_candle1:"Ein Halter auf dem Kaminsims ist leer\u2026",h_candle2:"Eine Ersatzkerze liegt am Fu\xDF der Treppe in der Halle.",h_candle3:"Nimm die Kerze vom Tischchen an der Treppe, w\xE4hle sie in der Tasche und klick auf den leeren Totenkopf-Halter.",h_candles1:"Das offene Buch auf dem Lesepult kennt die Ordnung der Flammen.",h_candles2:"Jeder Halter hat ein Symbol. Vergleiche die Symbole mit dem Buch.",h_candles3:"Streichh\xF6lzer w\xE4hlen, dann anz\xFCnden: {seq}.",h_crystal1:"Das Rezept braucht Mondlicht. Ein Buch in der Bibliothek kann nicht stillsitzen\u2026",h_crystal2:"Schau in die rechten Regale der Bibliothek \u2014 ein rotes Buch zuckt.",h_crystal3:"Geh zur\xFCck in die Bibliothek und klick auf das zuckende rote Buch rechts im Regal.",h_brew1:"Das Rezept an der rechten Wand verr\xE4t, was der Kessel will.",h_brew2:"Klick die Trankflaschen im Regal in der Reihenfolge des Rezepts an, dann etwas, das wie der Mond leuchtet.",h_brew3:"Gie\xDF {seq} hinein, dann Mondkristall w\xE4hlen und auf den Kessel klicken.",h_key1:"Etwas Gl\xE4nzendes ist aus dem Kessel gestiegen.",h_key2:"Nimm den Messingschl\xFCssel \xFCber dem Kessel.",h_key3:"Messingschl\xFCssel w\xE4hlen und auf die kleine Dachbodent\xFCr oben auf der Galerie (links vom Portr\xE4t) klicken.",h_attic1:"Du hast einen Messingschl\xFCssel. Wo ist ein Messingschloss?",h_attic2:"Die gro\xDFe Treppe im Foyer hinauf: eine kleine T\xFCr auf der Galerie, links vom Portr\xE4t.",h_attic3:"Messingschl\xFCssel w\xE4hlen und auf die Dachbodent\xFCr klicken.",h_melody1:"Wisp will ihr Schlaflied. H\xF6r genau hin, wenn sie summt.",h_melody2:"Das Notenblatt auf der Staffelei zeigt die Farben der T\xF6ne.",h_melody3:"Spiel die Tasten: {seq}.",h_front1:"Wisp hat dir einen Silberschl\xFCssel gegeben. Welche T\xFCr hatte ein silbernes Schl\xFCsselloch?",h_front2:"Die gro\xDFe Haust\xFCr in der Eingangshalle!",h_front3:"Silberschl\xFCssel w\xE4hlen und auf die Haust\xFCr klicken.",rk:["Angsthase","Kerzentr\xE4ger","Schlossknacker","Spukdetektiv","Geisterj\xE4ger"],seqSep:" \u2192 ",sym_moon:"\u{1F319} Mond",sym_pumpkin:"\u{1F383} K\xFCrbis",sym_bat:"\u{1F987} Fledermaus",sym_skull:"\u{1F480} Totenkopf",sym_spider:"\u{1F577} Spinne",col0:"Blau",col1:"Gr\xFCn",col2:"Lila",col3:"Rot",col4:"Gelb",col5:"Orange",n0:"Rot",n1:"Orange",n2:"Gelb",n3:"Gr\xFCn",n4:"Blau",bookT:["Die Ordnung der Flammen","so entz\xFCnde sie"],recipeT:["Mondlicht-Elixier","in dieser Reihenfolge"],crystalT:"Mondkristall",sheetT:"Wisps Schlaflied"}},js="en";try{let n=localStorage.getItem("hme-lang");(n==="de"||n==="en")&&(js=n)}catch{}function Qs(){return js}function uu(n){js=n==="de"?"de":"en";try{localStorage.setItem("hme-lang",js)}catch{}document.documentElement.lang=js}function ie(n,e,t=js){let i=(hu[t]&&hu[t][n])??hu.en[n]??n;if(e&&typeof i=="string")for(let s of Object.keys(e))i=i.replace("{"+s+"}",e[s]);return i}function Wf(n){document.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=ie(e.dataset.i18n)}),document.querySelectorAll("[data-i18n-html]").forEach(e=>{e.innerHTML=ie(n?"howKids":e.dataset.i18nHtml)})}var AM=[0,1500,2400,3200,3900];function CM(n){return Math.round(n.stars*1e3+Math.max(0,1500-n.time))}function du(n,e=js){let t=CM(n),i=0;return AM.forEach((s,r)=>{t>=s&&(i=r)}),hu[e].rk[i]}function $i(n){n=Math.max(0,Math.floor(n));let e=Math.floor(n/60),t=n%60;return(e<10?"0":"")+e+":"+(t<10?"0":"")+t}function fu(n,e=js){let t="\u2B50".repeat(n.stars)+"\u2606".repeat(3-n.stars),i=$i(n.time),s=du(n,e);return e==="de"?`\u{1F47B} ${n.name} ist in ${i} aus der HAUNTED MANSION ESCAPE entkommen! ${t}
\u{1F56F}\uFE0F ${n.hints} ${n.hints===1?"Tipp":"Tipps"} \xB7 Rang: ${s}${n.kids?" (Kinder-Modus)":""}
Schaffst du es schneller? \u{1F5DD}\uFE0F\u{1F383} #HauntedMansionEscape #Halloween`:`\u{1F47B} ${n.name} escaped the HAUNTED MANSION in ${i}! ${t}
\u{1F56F}\uFE0F ${n.hints} ${n.hints===1?"hint":"hints"} \xB7 Rank: ${s}${n.kids?" (kids mode)":""}
Can you get out faster? \u{1F5DD}\uFE0F\u{1F383} #HauntedMansionEscape #Halloween`}var Ml=()=>"Player",ee=n=>document.getElementById(n),Al={low:{pr:.8,bloom:0,particles:.4,rays:2,shadows:!1,msaa:0},mid:{pr:1,bloom:.85,particles:.7,rays:3,shadows:!1,msaa:0},high:{pr:1.5,bloom:1,particles:1,rays:4,shadows:!0,msaa:4},ultra:{pr:2,bloom:1.1,particles:1.4,rays:5,shadows:!0,msaa:4}},Vo={code:"1035",candles:{n:[2,0,3,4,1],k:[3,0,2]},brew:{n:[0,3,1,2],k:[0,1]},melody:{n:[2,3,4,3,2,0],k:[0,2,4]},pitch:[0,1,2,3.5,4.5]},tp="hme-save";var M={mode:"menu",kids:Gt.get("hme-kids",!1)===!0,quality:Gt.get("hme-quality",""),qualityUser:!!Gt.get("hme-quality",""),room:"foyer",time:0,hintsUsed:0,hintLvl:{},inv:[],sel:null,f:{},seq:[],brew:[],mel:[],visited:{},spot:null,best:Gt.get("hme-best",null),nameV:Gt.get("hme-name",Ml()),shareLang:Qs(),paused:!1,busy:0,lastResult:null,clock:0,log:{scare:0,cute:0,flyby:0,hint:0,pickup:0,lightning:0,wrong:0}};Al[M.quality]||(M.quality="");function Ms(){return M.quality||"high"}function bi(n){return M.kids?Vo[n].k:Vo[n].n}var Ss=ee("gl"),Yn=new Uh({canvas:Ss,antialias:!0,powerPreference:"high-performance",alpha:!1,stencil:!1});Yn.toneMapping=vr;Yn.toneMappingExposure=1.05;Yn.outputColorSpace=an;Yn.shadowMap.type=_r;var rn=new fo;rn.background=new Fe(328458);rn.fog=new fa(1182232,.03);var Rt=new Mn(60,1,.05,300),RM=new Ao(Yn);function PM(){let n=new fo;n.add(new It(new st(10,24,16),new ot({color:1708056,side:gn})));let e=(i,s,r,o,a)=>{let l=new It(new st(s,12,8),new ot({color:i}));l.position.set(r,o,a),n.add(l)};for(let i=0;i<7;i++){let s=i/7*Math.PI*2;e(new Fe(2.2,1.3,.55),.35,Math.cos(s)*7,1+i%3,Math.sin(s)*7)}e(new Fe(1.6,1,.5),1.2,0,8,0),e(new Fe(.7,.8,1.6),1.6,-6,4,-6);let t=new It(new xt(30,30),new ot({color:2758672}));return t.rotation.x=-Math.PI/2,t.position.y=-3,n.add(t),n}xi.map=RM.fromScene(PM(),.02).texture;var Jn=null,Su=null,Tu=null,Dr=0,Ke=null,ae=null,pu=1,Yf=60;function mg(){let n=Al[Ms()];if(Jn&&(Jn.dispose&&Jn.dispose(),Jn=null),!n.bloom)return;let e=Yn.getDrawingBufferSize(new ue),t=new nn(e.x,e.y,{type:xn,samples:n.msaa});Jn=new Bh(Yn,t),Jn.addPass(new zh(rn,Rt)),Su=new Lo(new ue(e.x,e.y),.68*n.bloom,.55,.84),Jn.addPass(Su),Tu=new Io({uniforms:{tDiffuse:{value:null},scare:{value:0},lit:{value:0},time:{value:0},asp:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float scare; uniform float lit; uniform float time; uniform float asp; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
      void main(){ vec2 d = vUv - 0.5; float ca = 0.0035 + scare * 0.018;
        vec3 x = vec3(texture2D(tDiffuse, vUv + d * ca).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - d * ca).b);
        float l = dot(x, vec3(0.2126,0.7152,0.0722));
        x = mix(x * vec3(0.82,0.92,1.15), x * vec3(1.12,0.98,0.82), smoothstep(0.03, 0.5, l));
        x = mix(vec3(l), x, 1.08 - scare * 0.5); x = pow(max(x, 0.0), vec3(1.07)) * 1.05;
        x += vec3(0.55,0.62,0.9) * lit * 0.05;
        float r = length(d * vec2(asp, 1.0)); x *= mix(0.46 + lit * 0.25, 1.0, smoothstep(1.05, 0.25, r));
        x = mix(x, x * vec3(1.5,0.35,0.35), scare * 0.55 * smoothstep(0.2, 0.9, r)); x += vec3(0.25,0.0,0.02) * scare * smoothstep(0.4, 1.0, r);
        x += (h(vUv * 931.0 + time) - 0.5) * 0.022;
        gl_FragColor = vec4(x, 1.0); }`}),Jn.addPass(Tu),Jn.addPass(new Hh)}function np(){let n=window.innerWidth,e=window.innerHeight,t=Al[Ms()];if(pu=Math.min(window.devicePixelRatio||1,t.pr),Yn.setPixelRatio(pu),Yn.setSize(n,e,!1),Rt.aspect=n/e,Yf=58+Zn((1-Rt.aspect)/.5,0,1)*20,Rt.fov=Yf,Rt.updateProjectionMatrix(),Jn&&(Jn.setPixelRatio(pu),Jn.setSize(n,e)),Ke)for(let s in Ke)Ke[s].dust&&(Ke[s].dust.material.uniforms.pr.value=pu*e/800)}var fe={pos:new D,look:new D,tPos:new D,tLook:new D,yaw:0,pitch:0,k:3.5,shake:0,roll:0,fovK:0},_t=new D,qn=new D;function gu(n,e,t=new D){return t.set(-Math.sin(n)*Math.cos(e),Math.sin(e),-Math.cos(n)*Math.cos(e))}function ip(){if(Qe.on&&M.mode==="play"&&!M.spot&&ae&&ae.group){fe.tPos.set(ve.x,ve.y+Eg+ve.bobY,ve.z).add(ae.offset),fe.tPos.x+=ve.bobX,fe.tLook.copy(fe.tPos).addScaledVector(gu(fe.yaw,fe.pitch,_t),6);return}if(M.spot&&ae.spots[M.spot]){let n=ae.spots[M.spot];fe.tPos.copy(n.pos).add(ae.offset),fe.tLook.copy(n.look).add(ae.offset),gu(fe.yaw*.25,fe.pitch*.25,_t),fe.tLook.addScaledVector(_t,0);return}fe.tPos.copy(ae.view.pos).add(ae.offset),fe.tLook.copy(fe.tPos).addScaledVector(gu(ae.view.yaw+fe.yaw,ae.view.pitch+fe.pitch,_t),6)}function tr(){ip(),fe.pos.copy(fe.tPos),fe.look.copy(fe.tLook)}var tn=null;function gg(n){tn?(fe.tPos.copy(tn.pos),fe.tLook.copy(tn.look)):ip();let e=tn?tn.k||2.2:Qe.on&&M.mode==="play"&&!M.spot?26:Tt.active&&!M.spot?18:fe.k;fe.pos.x=si(fe.pos.x,fe.tPos.x,e*.8,n),fe.pos.y=si(fe.pos.y,fe.tPos.y,e*.8,n),fe.pos.z=si(fe.pos.z,fe.tPos.z,e*.8,n),fe.look.x=si(fe.look.x,fe.tLook.x,e,n),fe.look.y=si(fe.look.y,fe.tLook.y,e,n),fe.look.z=si(fe.look.z,fe.tLook.z,e,n);let t=M.clock;if(Rt.position.copy(fe.pos),Rt.position.y+=Math.sin(t*.6)*.012,Rt.position.x+=Math.sin(t*.37)*.01,fe.shake>0){fe.shake=Math.max(0,fe.shake-n*1.6);let s=fe.shake*fe.shake*.12;Rt.position.x+=Tr(-s,s),Rt.position.y+=Tr(-s,s)}Rt.lookAt(fe.look),window.__hmeCam&&(Rt.position.fromArray(window.__hmeCam.pos),Rt.lookAt(_t.fromArray(window.__hmeCam.look))),Dr=Math.max(0,Dr-n*.9);let i=Yf-fe.fovK*6-Math.sin(Math.min(1,Dr)*Math.PI*.5)*9*(M.kids?.3:1);Math.abs(Rt.fov-i)>.01&&(Rt.fov=i,Rt.updateProjectionMatrix())}function Eu(n,e=!1){M.quality=n,e&&(M.qualityUser=!0,Gt.set("hme-quality",n)),Cl(),mg(),np(),document.querySelectorAll("#qualSeg button").forEach(t=>t.classList.toggle("on",t.dataset.q===n))}function IM(n){n.traverse(e=>{e.geometry&&e.geometry.dispose()})}var Ln=null;function Cl(){if(Ke)for(let e in Ke)rn.remove(Ke[e].group),IM(Ke[e].group);let n=Al[Ms()];Yn.shadowMap.enabled=!!n.shadows,Ke=tg(rn,n,M.kids);for(let e in Ke)for(let t of Ke[e].hits)t.isMesh&&Ke[e].moon&&n.shadows&&(t.castShadow=!0,t.receiveShadow=!0);for(let e in Ke)Ke[e].group.traverse(t=>{t.isMesh&&n.shadows&&(t.receiveShadow=!0,t.material&&t.material.transparent||(t.castShadow=t.geometry&&t.geometry.type!=="PlaneGeometry"))});for(let e in Ke){let t=Ke[e].flash;if(t&&n.shadows){t.castShadow=!0,t.shadow.mapSize.set(1024,1024);let i=t.shadow.camera;i.left=i.bottom=-10,i.right=i.top=10,i.near=.5,i.far=40,t.shadow.bias=-6e-4,t.shadow.normalBias=.02}}xg(),jM(),Ln&&rn.remove(Ln),Ln=ko(M.kids,.8),Ln.visible=!1,rn.add(Ln),qo(M.room,!0),Ts()}function xg(){if(!Ke)return;let n=Qs(),e=bi("candles").map(r=>Do[r]),t=Ke.library;t.bookPage.material.map=Bm(e,ie("bookT",null,n)),t.bookPage.material.needsUpdate=!0;let i=Ke.kitchen;i.recipePage.material.map=zm(bi("brew").map(r=>Qh[r]),ie("recipeT",null,n),ie("crystalT",null,n)),i.recipePage.material.needsUpdate=!0;let s=Ke.attic;s.sheetPage.material.map=Hm(bi("melody").map(r=>[eu[r],Vo.pitch[r]]),ie("sheetT",null,n)),s.sheetPage.material.needsUpdate=!0}function qo(n,e=!1){M.room=n,ae=Ke[n];for(let i in Ke)Ke[i].group.visible=i===n;rn.fog.color.set(ae.fogColor),rn.fog.density=ae.fogDens,rn.background.set(ae.fogColor).multiplyScalar(.4),Yn.toneMappingExposure=ae.exposure,fe.yaw=0,fe.pitch=0,M.spot=null,e&&tr();let t={foyer:{rain:.75,clock_loop:.85,bubble_loop:0},library:{rain:.7,clock_loop:.12,bubble_loop:0},kitchen:{rain:.55,clock_loop:0,bubble_loop:.9},attic:{rain:1,clock_loop:0,bubble_loop:0},garden:{rain:.35,clock_loop:0,bubble_loop:0}}[n];Of(t,n==="garden"?5e3:n==="attic"?3200:1800)}function Ts(){let n=M.f,e=Ke.foyer,t=Ke.library,i=Ke.kitchen,s=Ke.attic;e.matchesObj.visible=!n.matches,n.drawer&&(e.drawer.position.z=.32),e.candleItem.visible=!n.candleTaken,e.libLeaf.rotation.y=n.libOpen?-1.6:0,t.holders.forEach((r,o)=>{o===3&&(r.c.g.visible=!!n.candlePlaced),Uo(r.c,!!n.candlesDone||M.seq.includes(o))}),t.secret.rotation.y=n.shelfOpen?1.25:0,t.passGlow.intensity=n.shelfOpen?6:0,t.crystalObj.visible=!1,n.crystal&&(t.twitch.position.x=7),i.keyObj.visible=!!n.brewDone&&!n.keyTaken,e.atticLeaf.rotation.y=n.atticOpen?1.7:0,e.padlock.visible=!n.atticOpen,e.padlock.position.y=1.25,i.kLeaf.rotation.y=n.kitOpen?1.5:0,e.kitLeaf.rotation.y=n.kitOpen?-1.5:0,s.ghost.visible=!!n.ghostMet,s.mbLid.rotation.x=-1.9,Ke.garden.ghost.visible=!0,e.frontLeaves.forEach((r,o)=>{r.rotation.y=n.escaped?o?-1.5:1.5:0}),Rl(),ws()}var _l=[];function cn(n,e,t,i=0){let s={t:-i,dur:n,fn:e,done:t};return _l.push(s),s}var LM=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,Mt=(n,e)=>cn(1e-4,()=>{},e,n);function DM(n){for(let e=_l.length-1;e>=0;e--){let t=_l[e];if(t.t+=n,t.t<0)continue;let i=Math.min(1,t.t/t.dur);t.fn(LM(i),i),i>=1&&(_l.splice(e,1),t.done&&t.done())}}var yl=0;function Ze(n,e=4.5,t){let i=ee("msg");i.innerHTML=(t?`<b>${t}</b>`:"")+`<span>${n}</span>`,i.classList.add("show"),yl=e}function Es(n){let e=ee("toast");e.textContent=n,e.classList.add("show"),clearTimeout(Es._t),Es._t=setTimeout(()=>e.classList.remove("show"),2200)}function sp(n){let e=ee("chapter");e.querySelector(".ck").textContent=ie("c_"+n),e.querySelector(".ct").textContent=ie("r_"+n),e.className="",e.offsetWidth,e.className="show"}function _g(n="rgba(200,215,255,0.85)",e=.5){let t=ee("flash");t.style.background=n,t.style.transition="none",t.style.opacity="1",t.offsetWidth,t.style.transition=`opacity ${e}s ease-out`,t.style.opacity="0"}function wu(n,e=.45){let t=ee("fade");t.style.transition=`opacity ${e}s ease`,t.style.opacity=n?"1":"0"}var yg={matches:"\u{1F525}",candle:"\u{1F56F}\uFE0F",crystal:"\u{1F48E}",brassKey:"\u{1F5DD}\uFE0F",silverKey:"\u{1F511}"};function Rl(){let n=ee("inv");n.innerHTML="";for(let e of M.inv){let t=document.createElement("button");t.className="slot"+(M.sel===e?" sel":""),t.dataset.item=e,t.innerHTML=`<i>${yg[e]}</i><span>${ie("i_"+e)}</span>`,t.onclick=i=>{i.stopPropagation(),rr(M.sel===e?null:e)},n.appendChild(t)}for(let e=M.inv.length;e<5;e++){let t=document.createElement("div");t.className="slot empty",n.appendChild(t)}ee("btnDesel").classList.toggle("hidden",!M.sel),ee("btnDesel").title=ie("deselect"),document.body.classList.toggle("holding",!!M.sel),Yo(),op()}function rr(n){M.sel=n,Ae.ui(),Rl()}function Go(n){M.inv.includes(n)||M.inv.push(n),M.log.pickup++,Ae.pickup(),Rl();let e=document.querySelector(`.slot[data-item="${n}"]`);e&&e.classList.add("new")}function xu(n){M.inv=M.inv.filter(e=>e!==n),M.sel===n&&(M.sel=null),Rl()}var Kf=!1;function fl(n){return M.inv.includes(n)?M.sel===n?(Kf=!0,!0):!!M.kids:!1}function ws(){ee("timer").textContent=$i(M.time),ee("hintsN").textContent=M.hintsUsed,ee("starsHud").textContent="\u2B50".repeat(Tl())+"\u2606".repeat(3-Tl()),ee("btnBack").classList.toggle("hidden",!M.spot||M.mode!=="play"),ee("roomName").textContent=ie("r_"+M.room),document.body.classList.toggle("spot",!!M.spot),rp(),Yo()}function vg(){let n=M.f;return{foyer:[{dir:"right",id:"libDoor",to:"library",open:!!n.libOpen},{dir:"left",id:"kitchenDoor",to:"kitchen",open:!!n.kitOpen},{dir:"up",id:"atticDoor",to:"attic",open:!!n.atticOpen},{dir:"back",id:"frontDoor",label:"l_frontDoor",open:!!n.silverKey}],library:[{dir:"back",id:"toFoyer",to:"foyer",open:!0}].concat(n.shelfOpen?[{dir:"left",id:"secretDoor",to:"kitchen",open:!0}]:[]),kitchen:[{dir:"back",id:"toLibrary",to:"library",open:!0},{dir:"right",id:"kDoor",to:"foyer",open:!0}],attic:n.melodyDone?[]:[{dir:"back",id:"toKitchen",to:"kitchen",open:!0}]}[M.room]||[]}var Sl="";function rp(){let n=ee("nav"),e=M.mode==="play"&&!Qe.on;if(n.classList.toggle("hidden",!e),!e)return;let t=vg(),i=M.room+t.map(s=>s.id+s.open).join()+Qs();if(i!==Sl){Sl=i,n.innerHTML="";for(let s of t){let r=document.createElement("button");r.className=s.dir+(s.open?"":" locked"),r.dataset.nav=s.id;let o=s.dir==="left"?"\u25C0":s.dir==="right"?"\u25B6":s.dir==="up"?"\u25B2":"\u25BC",l=`<span>${s.to?ie("n_"+s.to):ie(s.label)}${s.open?"":" \xB7 \u{1F512}"}</span>`;r.innerHTML=s.dir==="right"?l+`<b>${o}</b>`:`<b>${o}</b>`+l,r.onclick=c=>{c.stopPropagation(),bg(s.id)},n.appendChild(r)}}}function bg(n){return M.mode!=="play"||M.busy>0?!1:(M.log.nav=(M.log.nav||0)+1,M.spot&&(M.spot=null),Ur(n))}var Ji=0;function Yo(){let n=ee("selHint");if(!n)return;let e="";if(M.mode==="play")if(M.sel)e=vi?ie("ctxUse",{x:ie("i_"+M.sel),y:ie("l_"+vi)}):ie("useOn",{x:ie("i_"+M.sel)});else if(vi)e=Qe.on?ie(document.body.classList.contains("touch")?"xhTap":"xhUse",{x:ie("l_"+vi)}):ie("ctxClick",{x:ie("l_"+vi)});else if(Ji>20){let t=Tg()[0];t&&(e=ie("ctxIdle",{x:ie("l_"+t)}))}else M.time<30&&!M.spot&&(e=Qe.on?ie(document.body.classList.contains("touch")?"ctxWalkT":"ctxWalk"):ie(mp?"ctxStartM":"ctxTap"));n.textContent!==e&&(n.textContent=e)}var Xf={};function NM(n){return Xf[n]||(Xf[n]=`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='17' fill='rgba(30,14,40,0.75)' stroke='%23ffb547' stroke-width='2'/><text x='20' y='27' font-size='20' text-anchor='middle'>${yg[n]}</text></svg>`).replace(/%2523/g,"%23")}") 20 20, pointer`),Xf[n]}function op(){Tt.active||(Ss.style.cursor=M.sel?NM(M.sel):vi?"pointer":"grab")}function Tl(){let n=M.hintsUsed;return M.kids?n<=4?3:n<=9?2:1:n<=2?3:n<=6?2:1}function Bt(){M.mode==="menu"||M.f.escaped||Gt.set(tp,{v:1,room:M.room==="garden"?"foyer":M.room,time:M.time,hintsUsed:M.hintsUsed,hintLvl:M.hintLvl,inv:M.inv,f:M.f,seq:M.seq,brew:M.brew,visited:M.visited,kids:M.kids,log:M.log,p:M.room==="garden"?null:{x:ve.x,y:ve.y,z:ve.z,yaw:fe.yaw},at:Date.now()})}function ap(){let n=Gt.get(tp,null);return n&&n.v===1?n:null}function lp(){try{localStorage.removeItem(tp)}catch{}}function Zf(){let n=M.f;return n.libOpen?n.shelfOpen?n.brewDone?n.keyTaken?n.atticOpen?n.melodyDone?"front":"melody":"attic":"key":n.crystal?"brew":"crystal":n.matches?n.candlePlaced?"candles":"candle":"matches":"code"}function hg(n,e){let t=ie("seqSep"),i={};return n==="candles"&&(i.seq=bi("candles").map(s=>ie("sym_"+Do[s])).join(t)),n==="brew"&&(i.seq=bi("brew").map(s=>ie("col"+s)).join(t)),n==="melody"&&(i.seq=bi("melody").map(s=>ie("n"+s)).join(t)),ie("h_"+n+e,i)}function Lu(){if(M.mode!=="play")return;let n=Zf(),e=M.hintLvl[n]||0,t=e;e<3&&(t=e+1,M.hintLvl[n]=t,M.hintsUsed++,M.log.hint++);let i=M.room==="kitchen",s=i?"\u{1F480} "+ie("hintBy"):"\u{1F47B} "+ie("hintByGhost");return Ze(`${hg(n,t)} <em>(${t}/3)</em>`,7,s),i?(Ae.skull(),$f=2.2):(Ae.ghostHint(),_u=3),ws(),Bt(),{goal:n,lvl:t,text:hg(n,t)}}var $f=0,_u=0;function ln(n){Qe.on||(M.spot=n,fe.yaw=0,fe.pitch=0,Ae.step(),ws())}function Du(){M.spot&&(M.spot=null,Ae.step(),ws())}function Au(n){M.log.wrong++,Ae.wrong(),n&&Ze(n,3.5)}var vl={drawer(){let n=M.f,e=Ke.foyer;n.drawer||(n.drawer=1,Ae.drawer(),cn(.5,t=>{e.drawer.position.z=.02+.3*t}),ln("drawer")),n.matches?Ze(ie("m_drawerEmpty")):Mt(.55,()=>{n.matches=1,e.matchesObj.visible=!1,Go("matches"),Ze(ie("m_drawer")),Bt()})},candleItem(){M.f.candleTaken||(M.f.candleTaken=1,Ke.foyer.candleItem.visible=!1,Go("candle"),Ze(ie("m_candleItem")),Bt())},clock(){ln("clock"),Ae.creak(.2),Ze(M.f.clockSeen?ie("m_clock2"):ie("m_clock"),5),M.f.clockSeen=1,Bt()},portraitLord(){ln("portraitLord"),Ze(ie("m_lord"),5),Ke.foyer.eyes.forEach(n=>{n.glint.visible=!0}),Mt(1.5,()=>Ke.foyer.eyes.forEach(n=>{n.glint.visible=!1})),Ae.whisper(.3)},portraitLady(){ln("portraitLady"),M.f.ladyScared?Ze(ie("m_lady")):(M.f.ladyScared=1,Mt(.65,GM),Bt())},portraitCat(){Ze(ie("m_cat"))},portraitShip(){Ze(ie("m_ship"))},libDoor(){if(M.f.libOpen){oi("library");return}ln("libDoor"),Ae.locked(),Ze(ie("m_libLocked")),Mt(.5,Mg)},codeLock(){vl.libDoor()},frontDoor(){if(!M.f.escaped){if(fl("silverKey")){BM();return}ln("frontDoor"),Ae.locked(),Ze(M.inv.includes("silverKey")?ie("needItem"):ie("m_front"))}},stairs(){Ae.floor(),Ze(ie("m_stairs"))},chandelier(){Ae.creak(.45),pl=1,Ze(ie("m_chand"),3)},toFoyer(){oi("foyer")},lectern(){ln("lectern"),Ae.page(),Ze(ie("m_lectern"),6),M.f.bookSeen=1,Bt()},twitchBook(){if(M.f.crystal){Ze(ie("m_twitchEmpty"));return}let n=Ke.library;ln("twitchBook"),Ae.books(),cn(.6,e=>{n.twitch.position.x=7.3-.3*e,n.twitch.rotation.z=e*.25},()=>{n.crystalObj.visible=!0,Ae.sparkle&&Ae.sparkle()}),Mt(1.2,()=>{n.crystalObj.visible=!1,M.f.crystal=1,Go("crystal"),Ze(ie("m_twitch")),Bt()})},globe(){Ae.rattle(),ml=6,Ze(ie("m_globe"),2.5)},flyBook(){Ae.books(),gl=1.2,Ze(ie("m_flyBook"),2.5)},secretDoor(){M.f.shelfOpen?oi("kitchen"):Ze(ie("m_shelf"),2.5)},holder(n){let e=Ke.library,t=e.holders[n],i=M.f;if(M.spot!=="mantel"&&ln("mantel"),i.candlesDone)return;if(n===3&&!i.candlePlaced){fl("candle")?(i.candlePlaced=1,xu("candle"),t.c.g.visible=!0,t.c.g.position.y=.5,cn(.4,o=>{t.c.g.position.y=.5-.3*o}),Ae.floor(),Ze(ie("m_placed")),Bt()):M.inv.includes("candle")?Ze(ie("needItem")):Ze(ie("m_holderEmpty"));return}if(t.c.lit)return;if(!fl("matches")){Ze(M.inv.includes("matches")?ie("needItem"):ie("m_needLight"));return}let s=bi("candles");if(!s.includes(n)&&M.kids){Au(ie("m_blown"));return}Ae.match(),Mt(.25,()=>Ae.ignite()),Uo(t.c,!0),M.seq.push(n),M.seq.every((o,a)=>o===s[a])?M.seq.length===s.length?(i.candlesDone=1,Mt(.6,UM)):Ze(ie("m_lit"),2):Mt(.7,()=>{yu=1.4,Ae.blowOut(),e.holders.forEach(o=>Uo(o.c,!1)),M.seq=[],Au(ie("m_blown")),Bt()}),Bt()},toLibrary(){oi("library")},recipe(){ln("recipe"),Ae.page(),Ze(ie("m_recipe"),6),M.f.recipeSeen=1,Bt()},cauldron(){let n=M.f;if(n.brewDone){n.keyTaken||vl.brassKey();return}if(fl("crystal")){let e=bi("brew");M.brew.length===e.length&&M.brew.every((t,i)=>t===e[i])?(xu("crystal"),kM()):M.brew.length<e.length?Ze(ie("m_crystalFirst")):ug();return}ln("cauldron"),Ae.bubble(),Ze(M.inv.includes("crystal")&&M.brew.length?ie("needItem"):ie("m_cauldron"))},bottle(n){if(M.f.brewDone)return;let t=Ke.kitchen,i=t.bottles[n];M.spot!=="cauldron"&&M.spot!=="shelf"&&ln("shelf"),cn(.7,(r,o)=>{i.rotation.z=Math.sin(o*Math.PI)*.9,i.position.y=1.33+Math.sin(o*Math.PI)*.15}),Mt(.35,()=>{Ae.splash(),t.liquid.uniforms.col.value.set(Qh[n]),Lr=1}),M.brew.push(n);let s=bi("brew");M.brew.length>s.length||M.brew[M.brew.length-1]!==s[M.brew.length-1]?Mt(.9,ug):Ze(ie("m_pour"),2),Bt()},skull(){ln("skull"),Lu()},brassKey(){!M.f.brewDone||M.f.keyTaken||(M.f.keyTaken=1,Ke.kitchen.keyObj.visible=!1,Ae.keys(),Go("brassKey"),Ze(ie("got",{x:ie("i_brassKey")})),Bt())},atticDoor(){let n=M.f;if(n.atticOpen){oi("attic");return}if(ln("atticDoor"),fl("brassKey")){xu("brassKey"),n.atticOpen=1,Ae.lock(),Mt(.4,()=>Ae.door());let e=Ke.foyer;cn(.4,t=>{e.padlock.position.y=1.25-t*1.1,e.padlock.rotation.z=t*2},()=>{e.padlock.visible=!1}),cn(1.4,t=>{e.atticLeaf.rotation.y=1.7*t},null,.5),Ze(ie("m_atticOpen")),Ae.solve(),Bt(),Qe.on||Mt(2.2,()=>oi("attic"))}else Ae.locked(),Ze(M.inv.includes("brassKey")?ie("needItem"):ie("m_attic"))},kitchenDoor(){if(M.f.kitOpen){oi("kitchen");return}ln("kitchenDoor"),Ae.locked(),Ze(ie("m_kitLocked"))},kDoor(){if(!M.f.kitOpen){M.f.kitOpen=1,Ae.lock(),Mt(.3,()=>Ae.door());let n=Ke.kitchen,e=Ke.foyer;if(cn(1,t=>{n.kLeaf.rotation.y=1.5*t,e.kitLeaf.rotation.y=-1.5*t}),Ze(ie("m_unbolt")),Bt(),Qe.on)return}oi("foyer")},toKitchen(){M.f.melodyDone||oi("kitchen")},sheet(){ln("sheet"),Ae.page(),Ze(ie("m_sheet"),5)},musicbox(){ln("musicbox"),Ze(ie("m_musicbox"),3)},rocker(){vu=2.5,Ae.creak(.3),Ze(ie("m_rocker"),3)},ghost(){M.f.melodyDone||(Ze(ie("m_ghost"),2),Mt(1,Jf))},mkey(n){if(M.f.melodyDone||Nr)return;M.spot!=="musicbox"&&ln("musicbox"),su(n),Sg(n),M.mel.push(n);let e=bi("melody");M.mel.every((i,s)=>i===e[s])?M.mel.length===e.length&&(M.mel=[],Mt(.7,OM)):(M.mel=[],M.log.wrong++,Mt(.6,()=>{Ze(ie("m_melodyWrong"),3),Ae.whisper(.25)}),Mt(2,Jf))}};function Ur(n){if(M.mode!=="play"||M.busy>0)return!1;let e=n.match(/^(holder|bottle|mkey)(\d)$/),t=M.sel;if(Kf=!1,Ji=0,e)vl[e[1]](+e[2]);else if(vl[n])vl[n]();else return!1;return t&&!Kf&&M.inv.includes(t)&&M.sel===t&&!/^(bottle|mkey)/.test(n)&&(M.log.wrongUse=(M.log.wrongUse||0)+1,Es("\u{1F392} "+ie("i_"+t)+" \u2014 "+ie("wrongUse")),Ae.locked&&Ae.locked(),rr(null)),ws(),!0}var pl=0,yu=0,ml=0,gl=0,vu=0,Lr=0,Nr=!1;function Mg(){ee("lockUI").classList.remove("hidden"),M.lockDigits=[0,0,0,0],El()}function El(){document.querySelectorAll("#lockUI .wheel b").forEach((n,e)=>{n.textContent=M.lockDigits[e]})}function cp(){let n=M.lockDigits.join("");if(n===Vo.code){ee("lockUI").classList.add("hidden"),M.f.libOpen=1,Ae.lock(),Ze(ie("m_codeRight")),Ae.solve(),Bt();let e=Ke.foyer;Mt(.5,()=>Ae.door()),cn(1.4,t=>{e.libLeaf.rotation.y=-1.6*t},null,.5),Mt(2,()=>oi("library"))}else ee("lockUI").classList.add("shake"),setTimeout(()=>ee("lockUI").classList.remove("shake"),400),Au(ie("m_codeWrong"));return n===Vo.code}function UM(){let n=Ke.library;M.f.shelfOpen=1,Bt(),M.busy++,ln("secretDoor"),Ae.grind(),fe.shake=.7,Ze(ie("m_shelfOpen"),5),Ae.bigSolve(),cn(3,e=>{n.secret.rotation.y=1.25*e,n.passGlow.intensity=6*e},()=>{M.busy--,M.f.flyLib||(M.f.flyLib=1,hp())})}function ug(){let n=Ke.kitchen;M.brew=[],Ae.fizzle(),fe.shake=.35,n.liquid.uniforms.col.value.set(3211120),Lr=2,Au(ie("m_brewWrong")),Bt()}function kM(){let n=Ke.kitchen;M.f.brewDone=1,M.brew=[],Bt(),M.busy++,ln("cauldron"),Ae.brewDone(),Ze(ie("m_brewDone"),5),n.liquid.uniforms.col.value.set(10146047),Lr=3,fe.shake=.4,n.keyObj.visible=!0,n.keyObj.position.y=1.2,cn(2.2,e=>{n.keyObj.position.y=1.2+1.3*e,n.keyObj.rotation.y=e*8},()=>{M.busy--})}function Sg(n){let e=Ke.attic.mkeys[n];cn(.3,(t,i)=>{e.position.y=.12-Math.sin(i*Math.PI)*.02,e.children[0].material.emissiveIntensity=.5+Math.sin(i*Math.PI)*2.5}),FM(n)}function FM(n){let e=Ke.attic,t=gs($n(),.3,0,0,0,null,{color:new Fe(eu[n]),opacity:.9});e.mkeys[n].getWorldPosition(t.position),rn.add(t),cn(1.4,i=>{t.position.y+=.012,t.material.opacity=.9*(1-i),t.scale.setScalar(.3+i*.4)},()=>{rn.remove(t)})}function Jf(){if(Nr||M.f.melodyDone)return;Nr=!0,Ze(ie("m_listen"),3);let n=bi("melody"),e=M.kids?.75:.6;n.forEach((t,i)=>Mt(.5+i*e,()=>{su(t),Sg(t),bu=.6})),Mt(.6+n.length*e,()=>{Nr=!1,Ze(ie("m_yourTurn"),3),M.spot!=="musicbox"&&ln("musicbox")})}var bu=0;function OM(){let n=Ke.attic,e=n.ghost;M.f.melodyDone=1,M.busy++,Bt(),Ae.happyGhost(),Ae.bigSolve(),Ze(ie("m_melodyDone"),6),kr(!0),tn={pos:_t.set(0,1.7,-.6).add(n.offset).clone(),look:qn.set(0,1.6,-4).add(n.offset).clone(),k:2},cn(2.5,s=>{e.userData.halo.material.opacity=.3+s*.25,e.userData.light.intensity=3+s*4,e.rotation.y=s*Math.PI*2});let t=Lt(new Jt(.09,.022,8,20),wn(9081508,.5)),i=new le;i.add(t),Ui(.016,.016,.32,wn(9081508,.5),0,-.2,0,i,6),gs(_s(),.5,0,-.1,0,i,{opacity:.4}),i.position.set(0,2.4,-3.6).add(n.offset),rn.add(i),cn(2.4,s=>{i.position.set(0,2.4-s*.9,-3.6+s*2.6).add(n.offset),i.rotation.y=s*9},()=>{rn.remove(i),Go("silverKey"),M.f.silverKey=1,Ze(ie("m_ghostKey"),4),Bt()},1.2),Mt(6.2,()=>{tn=null,kr(!1),M.busy--,oi("foyer","frontDoor")})}function BM(){let n=Ke.foyer;M.f.escaped=1,xu("silverKey"),M.busy++,M.mode="cine",lp(),Ae.lock(),Ze(ie("m_frontKey"),4),kr(!0),Ho("calm"),tn={pos:_t.set(0,1.8,2.6).add(n.offset).clone(),look:qn.set(0,1.9,6).add(n.offset).clone(),k:1.5},Mt(.5,()=>{Ae.escape(),_g("rgba(190,205,255,0.9)",1.6)}),cn(2.2,e=>{n.frontLeaves[0].rotation.y=1.5*e,n.frontLeaves[1].rotation.y=-1.5*e},null,.5),Mt(1.6,()=>{tn={pos:_t.set(0,1.8,6.5).add(n.offset).clone(),look:qn.set(0,1.8,12).add(n.offset).clone(),k:1.2}}),Mt(2.8,()=>wu(!0,.5)),Mt(3.4,()=>{qo("garden");let e=Ke.garden;sp("garden"),fe.pos.set(0,1.8,1.5).add(e.offset),fe.look.set(0,1.9,10).add(e.offset),tn={pos:_t.set(0,2,7).add(e.offset).clone(),look:qn.set(1,3,30).add(e.offset).clone(),k:.9},wu(!1,.8),Ze(ie("escapeLine"),4)}),Mt(7,()=>{let e=Ke.garden;tn={pos:_t.set(1.5,2.6,15).add(e.offset).clone(),look:qn.set(0,6.5,0).add(e.offset).clone(),k:.8}}),Mt(10,()=>{M.busy--,Ng()})}function zM(n){n==="kitchen"&&!M.f.flyKitchen&&(M.f.flyKitchen=1,Mt(1.4,hp)),n==="attic"&&!M.f.ghostMet&&Mt(1,HM)}function oi(n,e){M.busy>1&&n!=="foyer"||(M.busy++,Ae.door(),wu(!0,Qe.on?.3:.45),fe.fovK=Qe.on?0:1,Mt(Qe.on?.32:.5,()=>{let t=M.room;ee("chapter").className="",qo(n),fe.fovK=0,wl(ZM[t+">"+n]),_t.copy(ae.view.pos).add(ae.offset),Qe.on||fe.pos.copy(_t).addScaledVector(gu(ae.view.yaw,0,qn),-1.6),ip(),Qe.on&&fe.pos.copy(fe.tPos),fe.look.copy(fe.tLook),e&&!Qe.on?M.spot=e:e==="frontDoor"&&wl([0,0,.8,Math.PI]),wu(!1,.7),M.visited[n]||(M.visited[n]=1,sp(n),zM(n)),M.busy--,Bt(),ws()}))}function HM(){let n=Ke.attic,e=n.ghost;M.f.ghostMet=1,Bt(),M.busy++,e.visible=!0,e.userData.mat.uniforms.op.value=0,Ae.ghost(),kr(!0),Ho("tense"),tn={pos:_t.set(0,1.65,.4).add(n.offset).clone(),look:qn.set(0,1.5,-4).add(n.offset).clone(),k:1.6},cn(2,t=>{e.userData.mat.uniforms.op.value=t,e.position.y=.6+t*.8}),Mt(1.6,()=>Ze(ie("m_ghostIntro"),8,"\u{1F47B} Wisp")),Mt(5,()=>{tn=null,kr(!1),Ho("main"),M.busy--,Jf()})}function kr(n){document.body.classList.toggle("cine",n)}function GM(){let n=Ke.foyer,e=n.lady,t=e.userData.pic;if(M.kids){M.log.cute++,t.material.map=mi("ladyWink"),t.material.needsUpdate=!0,Ae.scare(),Ze(ie("m_scareKids"),4);let s=n.peekBat;cn(.5,r=>{s.scale.setScalar(Math.max(.001,r*2.2)),s.position.z=2.4-r*0,s.position.x=8.6-r*.5,s.position.y=3+r*1.1}),jf=3.2,Mt(3.4,()=>{cn(.4,r=>{s.scale.setScalar(Math.max(.001,2.2*(1-r)))}),t.material.map=mi("lady"),t.material.needsUpdate=!0});return}M.log.scare++,t.material.map=mi("ladyScream"),t.material.needsUpdate=!0,Ae.scare(),zf(.2,1.5),fe.shake=1.3,Dr=1.4,Nu(!0),_g("radial-gradient(circle, rgba(255,230,230,0.9), rgba(120,0,20,0.85))",.9),ee("scare").classList.add("on");let i=e.position.x;cn(.18,s=>{e.position.x=i-.9*s,e.scale.setScalar(1+.35*s)},()=>cn(.9,s=>{e.position.x=i-.9*(1-s),e.scale.setScalar(1.35-.35*s)},null,.5)),Mt(1.4,()=>{ee("scare").classList.remove("on"),t.material.map=mi("lady"),t.material.needsUpdate=!0,Ze(ie("m_lady"))})}var jf=0,er=-1;function hp(){Ln&&(M.log.flyby++,Ln.visible=!0,er=0,Ln.userData.mat.uniforms.op.value=1,M.kids?(M.log.cute++,Ze(ie("m_flybyKids"),4)):(fe.shake=.7,Dr=Math.max(Dr,.8)),Ae.flyby())}function VM(n){if(er<0)return;er+=n;let e=M.kids?4:1.3,t=er/e;if(t>=1){er=-1,Ln.visible=!1;return}Rt.getWorldDirection(_t);let i=qn.crossVectors(_t,Rt.up).normalize(),s=M.kids?2.6:1.6,r=gf(-3.2,3.2,t)*(M.kids?.8:1.2);Ln.position.copy(Rt.position).addScaledVector(_t,s).addScaledVector(i,r),Ln.position.y+=M.kids?-.9+Math.sin(t*Math.PI)*.3:-.6+Math.sin(t*Math.PI)*.5,Ln.lookAt(Rt.position),Ln.rotation.z=M.kids?Math.sin(er*4)*.2:-.5,Ln.userData.mat.uniforms.op.value=Math.sin(t*Math.PI)*(M.kids?1:1.2),M.kids&&(Ln.userData.arms[1].rotation.z=2.2+Math.sin(er*9)*.5)}var yi={next:2.5,t:-1,near:!1,lvl:0};function Nu(n=Math.random()<.35){yi.t=0,yi.near=n,M.log.lightning++,Ae.thunder(n)}function WM(n){yi.next-=n,yi.next<=0&&M.mode!=="end"&&(Nu(),yi.next=Math.random()<.3?Tr(.5,.9):Tr(9,20));let e=0;if(yi.t>=0){yi.t+=n;let i=yi.t;e=(i<.08?1:i<.16?.2:i<.26?.85:Math.max(0,.85-(i-.26)*3))*(yi.near?1.4:.8),i>.6&&(yi.t=-1)}yi.lvl=e,ae.flash&&(ae.flash.intensity=e*4.2);let t=1.15+e*3;for(let i of ae.windows)i.material.color.setRGB(t,t,t*1.15);for(let i of ae.rays)i.m.opacity=i.base*(1+e*2.5)*(.85+.15*Math.sin(M.clock*.7+i.ph));ae.hemi&&(ae.hemi.intensity=(ae.hemi.userData.base??(ae.hemi.userData.base=ae.hemi.intensity))*(1+e*.8))}var ki={f:0,saved:[],cache:new WeakMap};function XM(){for(let[n,e,t]of ki.saved)n[e]=t;ki.saved.length=0}function mu(n,e,t){ki.saved.push([n,e,n[e]]),n[e]*=t}function qM(n){let e=M.spot&&ae.spots[M.spot]&&!tn?1:0;ki.f+=(e-ki.f)*Math.min(1,n*5),ki.f<.002&&(ki.f=0);let t=ki.f;if(Su&&(Su.strength=.68*Al[Ms()].bloom*(1-.8*t)),Yn.toneMappingExposure=ae.exposure*(1-.14*t),!t)return;let i=ki.cache.get(ae);i||(i={sprites:[],lights:[]},ae.group.traverse(l=>{l.isSprite?i.sprites.push(l):(l.isPointLight||l.isSpotLight)&&i.lights.push(l)}),ki.cache.set(ae,i));let s=ae.spots[M.spot]||ae.spots[Object.keys(ae.spots)[0]],r=qn.copy(s.look).add(ae.offset),o=new D,a=(l,c,u)=>(l.getWorldPosition(o),t*Zn(1-(o.distanceTo(r)-c)/(u-c),0,1));for(let l of i.sprites){if(!l.visible)continue;let c=a(l,.9,3.2);c>0&&mu(l.material,"opacity",1-.85*c)}for(let l of i.lights){let c=a(l,1.2,4);c>0&&mu(l,"intensity",1-.6*c)}for(let l of ae.rays)mu(l.m,"opacity",1-.8*t);for(let l of ae.fog)l.p.material&&l.p.material.opacity!==void 0&&mu(l.p.material,"opacity",1-.6*t);ae.dust&&t>.5&&(ki.saved.push([ae.dust,"visible",ae.dust.visible]),ae.dust.visible=!1)}function YM(n){let e=M.clock;for(let i of ae.candles)wf(i,e);for(let i of ae.flicker)i.l.intensity=i.base*(1-i.k*.5+i.k*.5*(Math.sin(e*9+i.ph)*Math.sin(e*5.7+i.ph*1.3)*.5+.5+.2*Math.sin(e*23+i.ph)));Ef(ae,e,yu),yu=Math.max(0,yu-n*.8);for(let i of ae.drifters){i.t+=n;let s=i.t%i.period/5,r=s<1;i.s.material.opacity=r?Math.sin(s*Math.PI)*.8:0,r&&(i.s.position.x=gf(-i.w*.8,i.w*.8,s),i.s.position.y=Math.sin(s*6)*.15)}for(let i of ae.fog)i.p.rotation.z+=i.sp*n;if(ae.dust&&(ae.dust.material.uniforms.t.value=e),ae.chand&&(pl=Math.max(0,pl-n*.15),ae.chand.rotation.z=Math.sin(e*.9)*(.025+pl*.08),ae.chand.rotation.x=Math.sin(e*.7+1)*(.015+pl*.05),ae.chLight&&(ae.chLight.position.x=ae.chand.position.x+ae.chand.rotation.z*2)),ae.fire)for(let i of ae.fire){let s=.5+.35*Math.abs(Math.sin(e*7+i.userData.ph));i.scale.set(s*.6,s*1.1,1),i.position.x=i.userData.x0+Math.sin(e*3+i.userData.ph)*.05}let t=M.room;if(t==="foyer"){let i=ae;i.pend.rotation.z=Math.sin(e*Math.PI)*.18;for(let s of i.eyes)s.eg.getWorldPosition(_t),qn.copy(Rt.position).sub(_t),s.eg.parent.worldToLocal(qn.add(_t)),qn.sub(s.eg.position).normalize(),s.pupil.position.set(qn.x*.025,qn.y*.02,.016);if(!M.f.drawer){let s=e%6.5<.6;i.drawer.position.x=s?Math.sin(e*60)*.008:0,s&&!i._rat&&M.mode==="play"&&Ae.rattle(),i._rat=s}if(jf>0){jf-=n;let s=i.peekBat.userData.wings;s[0].rotation.z=Math.sin(e*14)*.6,s[1].rotation.z=-.3+Math.sin(e*9)*1}}else if(t==="library"){if(!M.f.crystal){let i=e%4<.5;ae.twitch.position.x=7.3-(i?Math.abs(Math.sin(e*40))*.06:0),ae.twitch.rotation.x=i?Math.sin(e*50)*.05:0}for(let i of ae.flyBooks){let s=e*i.sp+i.ph;i.b.position.set(i.cx+Math.cos(s)*i.r,i.y+Math.sin(e*1.3+i.ph)*.3+gl*.5,i.cz+Math.sin(s)*i.r),i.b.rotation.y=-s+(i.sp>0?0:Math.PI);let r=Math.sin(e*(6+gl*8)+i.ph)*.7;i.halves[0].rotation.z=.5+r,i.halves[1].rotation.z=-.5-r}gl=Math.max(0,gl-n*.5),ml>0?(ae.globe.rotation.y+=ml*n,ml=Math.max(0,ml-n*2)):ae.globe.rotation.y+=n*.05}else if(t==="kitchen"){ae.liquid.uniforms.t.value=e,Lr>0&&(Lr-=n);let i=new Fe(M.f.brewDone?10146047:3211120);Lr<=0&&ae.liquid.uniforms.col.value.lerp(i,1-Math.exp(-n*.8)),ae.cauldLight.color.copy(ae.liquid.uniforms.col.value);for(let s of ae.bubbles){let r=s.userData;r.t+=n*r.sp*(1+(Lr>0?2:0)),r.t>1&&(r.t=0,r.x=Tr(-.45,.45),r.z=Tr(-.45,.45)),s.position.set(r.x,1.5+r.t*.08,r.z),s.scale.setScalar(r.s*Math.sin(r.t*Math.PI)),s.material.color.copy(ae.liquid.uniforms.col.value),s.material.emissive.copy(ae.liquid.uniforms.col.value)}for(let s of ae.steam){let r=s.userData;r.t=(r.t+n*.12)%1,s.position.set(Math.sin(r.t*5+s.id)*.3,1.7+r.t*2.2,Math.cos(r.t*4)*.2),s.material.opacity=Math.sin(r.t*Math.PI)*.28,s.scale.setScalar(1+r.t*1.8),s.material.color.copy(ae.liquid.uniforms.col.value)}$f>0?($f-=n,ae.jaw.rotation.x=Math.abs(Math.sin(e*16))*.35,ae.skullEyes.forEach(s=>s.material.opacity=1)):(ae.jaw.rotation.x=si(ae.jaw.rotation.x,0,8,n),ae.skullEyes.forEach(s=>s.material.opacity=.45+.2*Math.sin(e*2))),ae.keyObj.visible&&M.f.brewDone&&(ae.keyObj.rotation.y+=n*1.5,ae.keyObj.position.y=2.5+Math.sin(e*2)*.08)}else if(t==="attic"){vu=Math.max(0,vu-n*.3),ae.rocker.rotation.x=Math.sin(e*1.4)*(.06+vu*.06),ae.lantern.rotation.z=Math.sin(e*.8)*.06,ae.drum.rotation.x+=n*(Nr?3:.3),ae.dancer.rotation.y+=n*(Nr?3:.5);let i=ae.ghost;i.visible&&(i.userData.mat.uniforms.t.value=e,(!tn||M.f.melodyDone)&&(i.position.y=1.4+Math.sin(e*1.2)*.12),i.userData.arms[0].rotation.z=-.35-Math.sin(e*1.5)*.1,i.userData.arms[1].rotation.z=.35+Math.sin(e*1.5)*.1+bu,bu=Math.max(0,bu-n),i.lookAt(_t.copy(Rt.position).setY(i.getWorldPosition(qn).y)),i.rotation.x=0)}else if(t==="garden"){let i=ae.ghost;i.userData.mat.uniforms.t.value=e,i.position.y=13.3+Math.sin(e*1.2)*.12,i.userData.arms[1].rotation.z=2.4+Math.sin(e*5)*.5}for(let i of ae.anim)i(e,n);KM(e)}var qf=[];function Tg(){let n=M.f,e=[];return M.room==="foyer"&&(n.matches||e.push("drawer"),n.candleTaken||e.push("candleItem"),n.clockSeen||e.push("clock"),n.libOpen?e.push("libDoor"):e.push("codeLock"),n.silverKey&&!n.escaped&&e.push("frontDoor"),n.keyTaken&&!n.atticOpen&&e.push("atticDoor")),M.room==="library"&&(n.bookSeen||e.push("lectern"),n.crystal||e.push("twitchBook"),n.candlesDone||e.push("holder3"),n.shelfOpen&&e.push("secretDoor")),M.room==="kitchen"&&(n.recipeSeen||e.push("recipe"),e.push("skull"),n.brewDone||e.push("cauldron"),n.brewDone&&!n.keyTaken&&e.push("brassKey"),n.keyTaken&&!n.kitOpen&&e.push("kDoor")),M.room==="attic"&&(n.melodyDone||e.push("musicbox","sheet")),e}function KM(n){let e=M.mode==="play"?Tg():[];for(;qf.length<8;){let t=gs($n(),.25,0,0,0,rn,{color:16771264,opacity:0,depthTest:!1});t.renderOrder=10,qf.push(t)}qf.forEach((t,i)=>{let s=e[i],r=s&&ae.items[s];if(!r){t.visible=!1;return}t.visible=!0,r.getWorldPosition(_t),r.userData.glintY&&(_t.y+=r.userData.glintY);let o=(n*.8+i*.37)%2.4,a=o<.6?Math.sin(o/.6*Math.PI):0,l=Ji>20?.5+.5*Math.sin(n*5+i):0,c=.32+.1*Math.sin(n*2.2+i*1.7);t.position.copy(_t),t.material.opacity=Math.min(1,c+a*(M.kids?.6:.45)+l*.5),t.scale.setScalar(.16+a*.2+l*.35)})}var Qe={on:Gt.get("hme-walk",!0),sens:Gt.get("hme-sens",1),invY:Gt.get("hme-invy",!1),bob:Gt.get("hme-bob",!0)},ve={x:0,y:0,z:0,bobT:0,bobY:0,bobX:0,stepD:0,mv:0,lastLock:0,lockT:0,cross:null},Eg=1.62,Xn=.32,wg=3.8,sr=new Set,kt={id:null,x0:0,y0:0,dx:0,dy:0},xl=12*.34,ZM={"foyer>library":[0,0,4.4,0],"library>foyer":[7.5,0,-3,Math.PI/2],"library>kitchen":[0,0,3.4,0],"kitchen>library":[-4.7,0,-6.5,Math.PI],"kitchen>foyer":[-7.6,0,3,-Math.PI/2],"foyer>kitchen":[5.3,0,-5.6,Math.PI],"foyer>attic":[0,0,3,0],"attic>foyer":[-3.7,xl,-8.9,Math.PI],"kitchen>attic":[0,0,3,0],"attic>kitchen":[5.3,0,-5.6,Math.PI]},$M={foyer:[{x0:8,x1:9.5,z0:-3.9,z1:-2.1,to:"library",open:()=>M.f.libOpen,door:"libDoor"},{x0:-9.5,x1:-8.05,z0:2.2,z1:3.8,to:"kitchen",open:()=>M.f.kitOpen,door:"kitchenDoor"},{x0:-4.35,x1:-3.05,z0:-10.5,z1:-9.42,y0:3,to:"attic",open:()=>M.f.atticOpen,door:"atticDoor"},{x0:-1.5,x1:1.5,z0:5,z1:7,front:!0}],library:[{x0:-1.2,x1:1.2,z0:5,z1:7,to:"foyer",open:()=>!0},{x0:-6,x1:-3.4,z0:-9,z1:-7.25,to:"kitchen",open:()=>M.f.shelfOpen,door:"secretDoor"}],kitchen:[{x0:-1.2,x1:1.2,z0:4,z1:6,to:"library",open:()=>!0},{x0:4.6,x1:6,z0:-8,z1:-6.15,to:"foyer",open:()=>!0,door:"kDoor",unbolt:!0}],attic:[{x0:-1,x1:1,z0:3.4,z1:6,to:"foyer",open:()=>!M.f.melodyDone||!0}]},JM={foyer:[-8.7,8.7,-9.7,5.6],library:[-7.7,7.7,-7.7,5.7],kitchen:[-6.7,6.7,-6.7,4.7],attic:[-5.6,5.6,-6.7,4.7],garden:[-30,30,-30,30]};function or(){return document.pointerLockElement===Ss}function jM(){rn.updateMatrixWorld(!0);let n=new ei;for(let e in Ke){let t=Ke[e],i=[],s=t.offset,r=(o,a)=>{if(a=a||!!o.userData.noCol,!a&&(o.isMesh||o.isInstancedMesh)&&o.geometry){let l=o.material;if(!(!l||l.visible===!1||l.isShaderMaterial||l.isMeshBasicMaterial&&l.transparent||l.transparent&&(l.depthWrite===!1||l.blending===Tn)||o.isSprite)){o.isInstancedMesh?(o.computeBoundingBox(),n.copy(o.boundingBox)):(o.geometry.boundingBox||o.geometry.computeBoundingBox(),n.copy(o.geometry.boundingBox)),n.applyMatrix4(o.matrixWorld);let u=n.max.x-n.min.x,d=n.max.z-n.min.z,h=n.max.y-n.min.y,f=n.max.y-s.y<.15,g=u<.05&&d<.05,y=u>4.2&&d>4.2,m=h<.03&&n.min.y-s.y>2.5;!f&&!g&&!y&&!m&&i.push([n.min.x-s.x,n.max.x-s.x,n.min.y-s.y,n.max.y-s.y,n.min.z-s.z,n.max.z-s.z])}}for(let l of o.children)r(l,a)};r(t.group,!1),t.col=i}}function Ag(n,e,t){if(M.room!=="foyer")return 0;let i=ae.stairs;return i?Math.abs(n)<i.sx/2+.1&&e<i.z0+.05&&e>i.z0-i.N*i.run?Zn((i.z0-e)/(i.N*i.run),0,1)*i.topY:e<-8.45&&t>2.6?i.topY:0:0}function QM(){let n=[];if(M.room==="library"&&!M.f.shelfOpen&&n.push([-6.3,-3.1,0,6,-8.2,-7.15]),M.room==="foyer"){for(let e of[-1,1])n.push(e<0?[-2.95,-2.72,0,xl-.05,-9,-4]:[2.72,2.95,0,xl-.05,-9,-4]);M.f.libOpen||n.push([8.85,9.5,0,3,-4,-2]),M.f.kitOpen||n.push([-9.5,-8.85,0,3,2,4]),M.f.atticOpen||n.push([-4.5,-2.9,xl,xl+3,-10.5,-9.85])}return M.room==="kitchen"&&!M.f.kitOpen&&n.push([4.5,6.1,0,3,-7.5,-6.85]),n}function Cg(n,e,t){let i=t+.38,s=t+1.75,r=(ae.col||[]).concat(QM());for(let a=0;a<3;a++){let l=!1;for(let c of r){if(c[3]<i||c[2]>s||n<c[0]-Xn||n>c[1]+Xn||e<c[4]-Xn||e>c[5]+Xn)continue;let u=Zn(n,c[0],c[1]),d=Zn(e,c[4],c[5]),h=n-u,f=e-d,g=Math.hypot(h,f);if(g>1e-5)g<Xn&&(n=u+h/g*Xn,e=d+f/g*Xn,l=!0);else{let y=[n-c[0],c[1]-n,e-c[4],c[5]-e],m=Math.min(...y);m===y[0]?n=c[0]-Xn:m===y[1]?n=c[1]+Xn:m===y[2]?e=c[4]-Xn:e=c[5]+Xn,l=!0}}if(!l)break}let o=JM[M.room];return o&&(n=Zn(n,o[0],o[1]),e=Zn(e,o[2],o[3])),[n,e]}function wl(n){if(!ae)return;let e=ae.view,t=n||[e.pos.x,0,e.pos.z,e.yaw];ve.x=t[0],ve.y=t[1]||0,ve.z=t[2],Qe.on&&M.mode==="play"&&(fe.yaw=t[3]||0,fe.pitch=0),ve.stepD=0}function eS(){return M.room==="kitchen"?"stone":M.room==="foyer"?ve.y>.15?"wood":"stone":"wood"}function tS(n){if(ve.bobY=ve.bobX=0,!Qe.on||M.mode!=="play"||M.paused||M.tut||tn||M.busy>0||M.spot||!ae||!ae.col){ve.cross=null,Qe.on&&Cu();return}let e=0,t=0,i=sr;(i.has("KeyW")||i.has("ArrowUp"))&&(t+=1),(i.has("KeyS")||i.has("ArrowDown"))&&(t-=1),(i.has("KeyA")||i.has("ArrowLeft"))&&(e-=1),(i.has("KeyD")||i.has("ArrowRight"))&&(e+=1),(kt.id!==null||kt.dx||kt.dy)&&(e+=kt.dx,t-=kt.dy);let s=Math.hypot(e,t);s>1&&(e/=s,t/=s);let r=i.has("ShiftLeft")||i.has("ShiftRight")||Math.hypot(kt.dx,kt.dy)>.95,o=(r?3.9:2.5)*(M.kids?.95:1),a=Math.sin(fe.yaw),l=Math.cos(fe.yaw),c=(-a*t+l*e)*o,u=(-l*t-a*e)*o;ve.vx=si(ve.vx||0,c,9,n),ve.vz=si(ve.vz||0,u,9,n),Math.hypot(ve.vx,ve.vz)<.02&&!c&&!u&&(ve.vx=ve.vz=0);let d=ve.vx,h=ve.vz;if(ve.mv=si(ve.mv,Math.min(1,Math.hypot(e,t))*(r?1.3:1),10,n),d||h){let g=ve.x,y=ve.z,[m,p]=Cg(ve.x+d*n,ve.z+h*n,ve.y);ve.x=m,ve.z=p;let b=Math.hypot(m-g,p-y);ve.stepD+=b,b>5e-4&&(Ji=0),ve.stepD>(r?.85:.68)&&(ve.stepD=0,Ae.foot(eS(),r)),ve.bobT+=b*4.6}let f=Ag(ve.x,ve.z,ve.y);ve.y=f>ve.y?si(ve.y,f,14,n):si(ve.y,f,9,n),Qe.bob&&(ve.bobY=Math.sin(ve.bobT*2)*.035*Math.min(1,ve.mv),ve.bobX=Math.cos(ve.bobT)*.018*Math.min(1,ve.mv));for(let g of $M[M.room]||[])if(!(ve.x<g.x0-Xn-.05||ve.x>g.x1+Xn+.05||ve.z<g.z0-Xn-.05||ve.z>g.z1+Xn+.05||g.y0&&ve.y<g.y0)){if(g.front){if(M.f.escaped)continue;M.inv.includes("silverKey")?(M.sel="silverKey",Ur("frontDoor")):dg("frontDoor");continue}if(g.open()){g.unbolt&&!M.f.kitOpen&&(M.f.kitOpen=1,Ae.lock(),Ts()),M.log.walkDoor=(M.log.walkDoor||0)+1,oi(g.to);return}dg(g.door)}Cu()}function dg(n){let e=M.clock;e-ve.lockT<1.6||(ve.lockT=e,M.log.lockedBump=(M.log.lockedBump||0)+1,Ae.locked(),Es(ie("locked")+(n?" \xB7 "+ie("l_"+n):"")))}function Cu(){let n=ee("xh");if(!n)return;let e=Qe.on&&M.mode==="play"&&!tn&&!M.spot;if(n.classList.toggle("hidden",!e),!e)return;let t=null;if(!M.tut&&!M.paused&&M.busy===0){let s=Ig(window.innerWidth/2,window.innerHeight/2);s&&s.d<=wg&&(t=s.id)}ve.cross=t,vi!==t&&pp(t),n.classList.toggle("on",!!t);let i=ee("tip");i.style.left="50%",i.style.top="50%"}function Pl(){if(M.mode!=="play"||M.busy>0)return!1;let n=ve.cross;return n?(M.log.cross=(M.log.cross||0)+1,Ur(n)):!1}function nS(n){if(n.pointerType==="mouse"&&!or())try{let t=Ss.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}if(ve.cross){Pl();return}let e=Ig(n.clientX,n.clientY);e&&e.d<=wg?Ur(e.id):M.sel&&rr(null)}function up(n){let e=ee("joy");e&&(e.classList.toggle("on",n),n&&(e.style.left=kt.x0+"px",e.style.top=kt.y0+"px",ee("joyK").style.transform=`translate(${kt.dx*38}px, ${kt.dy*38}px)`))}function dp(){document.body.classList.toggle("walk",Qe.on),document.body.classList.toggle("touch",!!(window.matchMedia&&matchMedia("(pointer: coarse)").matches)||navigator.maxTouchPoints>0&&/Mobi|Android|iPhone|iPad/.test(navigator.userAgent)),Sl="",rp(),!Qe.on&&or()&&document.exitPointerLock()}function Rg(n){Qe.on=!!n,Gt.set("hme-walk",Qe.on),M.mode==="play"&&(M.spot=null,n&&wl(null),tr()),dp(),Yo()}document.addEventListener("pointerlockchange",()=>{document.body.classList.toggle("locked",or()),Yo()});var nr=new Fa,Wo=new ue,Tt={active:!1,down:!1,x:0,y:0,sx:0,sy:0,moved:0,t0:0,id:null},vi=null;function Pg(n){for(;n;){if(!n.visible)return!1;n=n.parent}return!0}function fp(n,e){rn.updateMatrixWorld(),Rt.updateMatrixWorld(),Wo.set(n/window.innerWidth*2-1,-(e/window.innerHeight)*2+1),nr.setFromCamera(Wo,Rt);let t=nr.intersectObjects(ae.hits,!1);for(let i of t){if(i.distance>14)break;if(Pg(i.object))return i.object.userData.iid}return null}function Ig(n,e){rn.updateMatrixWorld(),Rt.updateMatrixWorld(),Wo.set(n/window.innerWidth*2-1,-(e/window.innerHeight)*2+1),nr.setFromCamera(Wo,Rt);for(let t of nr.intersectObjects(ae.hits,!1)){if(t.distance>14)break;if(Pg(t.object))return{id:t.object.userData.iid,d:t.distance}}return null}function pp(n){if(vi===n)return;vi&&ae.items[vi]&&fg(vi,!1),vi=n,n&&ae.items[n]&&fg(n,!0);let e=ee("tip");if(n){let t=(M.sel?"\u{1F392} "+ie("i_"+M.sel)+" \u2192 ":"")+ie("l_"+n);e.textContent=Qe.on?ie(document.body.classList.contains("touch")?"xhTap":"xhUse",{x:t}):(M.sel?"\u{1F392} ":"")+ie("l_"+n),e.classList.add("show")}else e.classList.remove("show");op(),Yo()}function fg(n,e){let t=ae.hits.filter(i=>i.userData.iid===n);for(let i of t){let s=i.material;!s||!s.isMeshStandardMaterial||!i.userData.e0||(e?(s.emissive.setRGB(1,.62,.3),s.emissiveIntensity=.28):(s.emissive.copy(i.userData.e0),s.emissiveIntensity=i.userData.ei0))}}function iS(n){if(!(M.mode==="menu"||M.mode==="end")){if(Qe.on&&n.pointerType==="touch"&&n.clientX<window.innerWidth*.42&&M.mode==="play"){kt.id=n.pointerId,kt.x0=n.clientX,kt.y0=n.clientY,kt.dx=kt.dy=0,up(!0);try{Ss.setPointerCapture(n.pointerId)}catch{}return}Tt.down=!0,Tt.active=!1,Tt.x=Tt.sx=n.clientX,Tt.y=Tt.sy=n.clientY,Tt.moved=0,Tt.t0=performance.now(),Tt.id=n.pointerId;try{Ss.setPointerCapture(n.pointerId)}catch{}}}function sS(n){if(kt.id!==null&&n.pointerId===kt.id){kt.dx=Zn((n.clientX-kt.x0)/55,-1,1),kt.dy=Zn((n.clientY-kt.y0)/55,-1,1),up(!0);return}if(Qe.on&&or()){if(M.mode==="play"&&!M.paused&&!tn){let e=.0022*Qe.sens;fe.yaw-=(n.movementX||0)*e,fe.pitch=Zn(fe.pitch-(n.movementY||0)*e*(Qe.invY?-1:1),-1.25,1.25)}return}if(Qe.on&&Tt.down){let e=n.clientX-Tt.x,t=n.clientY-Tt.y;if(Tt.x=n.clientX,Tt.y=n.clientY,Tt.moved+=Math.abs(e)+Math.abs(t),Tt.moved>(n.pointerType==="touch"?14:8)&&(Tt.active=!0),Tt.active&&!tn&&M.mode==="play"){let i=.0042*Qe.sens*(n.pointerType==="touch"?1.2:1);fe.yaw-=e*i,fe.pitch=Zn(fe.pitch-t*i*.8*(Qe.invY?-1:1),-1.25,1.25)}return}if(!Qe.on){if(Tt.down){let e=n.clientX-Tt.x,t=n.clientY-Tt.y;if(Tt.x=n.clientX,Tt.y=n.clientY,Tt.moved+=Math.abs(e)+Math.abs(t),Tt.moved>(n.pointerType==="touch"?14:8)&&(Tt.active=!0,Ss.style.cursor="grabbing"),Tt.active&&!tn){let i=3.2/Math.max(window.innerWidth,600);fe.yaw+=e*i*(n.pointerType==="touch"?1.3:1),fe.pitch=Zn(fe.pitch+t*i*.8,M.spot?-.3:-.55,M.spot?.3:.6),M.spot&&(fe.yaw=Zn(fe.yaw,-.6,.6)),M.spot&&Math.abs(fe.yaw)>.55&&Du()}}else if(n.pointerType!=="touch"&&M.mode==="play"){let e=fp(n.clientX,n.clientY);pp(e);let t=ee("tip");t.style.left=n.clientX+"px",t.style.top=n.clientY+"px"}}}function rS(n){if(kt.id!==null&&n.pointerId===kt.id){kt.id=null,kt.dx=kt.dy=0,up(!1);return}if(Qe.on&&or()){M.mode==="play"&&!M.paused&&Pl();return}if(!Tt.down)return;Tt.down=!1;let e=Tt.active;Tt.active=!1,op(),!e&&M.mode==="play"&&(Qe.on?nS(n):Lg(n.clientX,n.clientY))}function Lg(n,e){let t=fp(n,e);return t?(Ur(t),pp(mp?t:null)):M.sel&&rr(null),t}var mp=!0;Ss.addEventListener("pointerdown",n=>{mp=n.pointerType!=="touch",Ji=0,iS(n)});window.addEventListener("pointermove",sS);window.addEventListener("pointerup",rS);window.addEventListener("mousedown",n=>{Qe.on&&or()&&n.target===document.body&&n.preventDefault()});window.addEventListener("pointercancel",()=>{Tt.down=!1,Tt.active=!1});window.addEventListener("keyup",n=>{sr.delete(n.code)});window.addEventListener("blur",()=>sr.clear());window.addEventListener("keydown",n=>{if(Qe.on&&(sr.add(n.code),M.mode==="play"&&!M.tut&&ee("lockUI").classList.contains("hidden"))){if(n.code==="KeyE"||n.code==="Enter"){Pl();return}if(/^Digit[1-5]$/.test(n.code)){let e=M.inv[+n.code.slice(5)-1];e&&rr(M.sel===e?null:e);return}(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault()}if(n.key==="Escape"){if(!ee("tut").classList.contains("hidden")){Uu();return}if(!ee("lockUI").classList.contains("hidden")){ee("lockUI").classList.add("hidden");return}if(M.sel){rr(null);return}M.spot?Du():M.mode==="play"&&Pu(!M.paused)}M.mode==="play"&&(Qe.on||(n.key==="ArrowLeft"&&(fe.yaw-=.25),n.key==="ArrowRight"&&(fe.yaw+=.25)),(n.key==="h"||n.key==="H")&&Lu(),!ee("lockUI").classList.contains("hidden")&&/^[0-9]$/.test(n.key)&&(M.lockPos=M.lockPos||0,M.lockDigits[M.lockPos]=+n.key,M.lockPos=(M.lockPos+1)%4,El(),Ae.dial(),M.lockPos===0&&cp()))});function Dg(){return{name:(ee("name")&&ee("name").value||M.nameV||Ml()).trim()||Ml(),time:Math.round(M.time),hints:M.hintsUsed,stars:Tl(),kids:M.kids}}function Xo(){return M.mode==="end"&&M.lastResult?Object.assign({},M.lastResult,{name:(ee("name").value||Ml()).trim()||Ml()}):Dg()}function Ng(){M.mode="end",kr(!1),tn=tn||null,M.lastResult=Dg();let n=M.lastResult,e=!M.best||n.time<M.best.time;e&&(M.best={time:n.time,stars:n.stars,hints:n.hints},Gt.set("hme-best",M.best)),ee("hud").classList.add("hidden"),ee("invBar").classList.add("hidden"),ee("nav").classList.add("hidden"),ee("msg").classList.remove("show"),ee("chapter").className="",ee("end").classList.remove("hidden"),ee("endTime").textContent=$i(n.time),ee("newBest").classList.toggle("hidden",!e),ee("endStars").textContent="\u2B50".repeat(n.stars)+"\u2606".repeat(3-n.stars),ee("rank").textContent="\u{1F47B} "+du(n),ee("stTime").textContent=$i(n.time),ee("stHints").textContent=n.hints,ee("stStars").textContent=n.stars+"/3",ee("stBest").textContent=$i(M.best.time),ee("name").value=M.nameV,Ru(),e&&setTimeout(()=>Ae.newBest(),600)}function Ru(){ee("shareText").textContent=fu(Xo(),M.shareLang),document.querySelectorAll("#shareLang button").forEach(n=>n.classList.toggle("on",n.dataset.sl===M.shareLang))}async function Ug(){let n=fu(Xo(),M.shareLang);window.__hmeLastShare=n;let e=!1;try{navigator.clipboard&&window.isSecureContext!==!1&&(await navigator.clipboard.writeText(n),e=!0)}catch{}if(!e)try{let t=document.createElement("textarea");t.value=n,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),e=document.execCommand("copy"),t.remove()}catch{}return Es(e?ie("copied"):ie("copyFail")),Ae.ui(),e}function kg(){ku();let n=document.createElement("canvas");n.width=1080,n.height=1350;let e=n.getContext("2d"),t=Yn.domElement,i=t.width,s=t.height,r=Math.max(1080/i,1350/s);e.drawImage(t,(1080-i*r)/2,(1350-s*r)/2,i*r,s*r);let o=e.createLinearGradient(0,0,0,1350);o.addColorStop(0,"rgba(8,4,20,0.25)"),o.addColorStop(.4,"rgba(8,4,20,0.45)"),o.addColorStop(1,"rgba(8,4,20,0.88)"),e.fillStyle=o,e.fillRect(0,0,1080,1350);let a=Xo(),l=Qs(),c='Didot, "Bodoni 72", Georgia, "Times New Roman", serif',u='"Arial Black", Impact, sans-serif',d=(y,m,p,b,w,x,E=u,A="900",P=0)=>{e.font=`${A} ${b}px ${E}`,e.textAlign="center",e.textBaseline="middle","letterSpacing"in e&&(e.letterSpacing=P+"px"),e.shadowColor=x,e.shadowBlur=b*.45,e.fillStyle=w,e.fillText(y,m,p),e.shadowBlur=0,"letterSpacing"in e&&(e.letterSpacing="0px")},h=(y,m,p,b,w)=>{let x=e.createLinearGradient(0,y,0,m);return x.addColorStop(0,p),x.addColorStop(.5,b),x.addColorStop(1,w),x};d("HAUNTED",540,150,140,h(80,220,"#ffffff","#cfe0ff","#7a8cff"),"rgba(140,170,255,0.9)",c,"900",10),d("MANSION ESCAPE",540,262,74,h(230,300,"#fffbe6","#ffd070","#c25a10"),"rgba(255,140,30,0.9)",c,"900",8);let f=(y,m,p,b,w)=>{e.beginPath(),e.moveTo(y+w,m),e.arcTo(y+p,m,y+p,m+b,w),e.arcTo(y+p,m+b,y,m+b,w),e.arcTo(y,m+b,y,m,w),e.arcTo(y,m,y+p,m,w),e.closePath()};return e.save(),e.fillStyle="rgba(20,14,44,0.62)",e.strokeStyle="rgba(180,200,255,0.45)",e.lineWidth=3,f(100,400,880,760,48),e.shadowColor="rgba(120,140,255,0.5)",e.shadowBlur=50,e.fill(),e.shadowBlur=0,e.stroke(),e.restore(),d(a.name.toUpperCase(),540,475,44,"#dfe6ff","rgba(120,140,255,0.9)"),d(ie("endTitle",null,l),540,545,40,"#ffd9a8","rgba(255,140,30,0.8)",c,"900",6),d($i(a.time),540,665,170,h(590,740,"#fff3c4","#ffb547","#ff6a0a"),"rgba(255,120,20,0.95)"),d("\u2B50".repeat(a.stars)+"\u2606".repeat(3-a.stars),540,790,70,"#ffd84a","rgba(255,200,60,0.8)"),d("\u{1F47B} "+du(a,l),540,880,52,"#ffd9a8","rgba(255,140,30,0.9)"),[[String(a.hints),ie("stHints",null,l)],[a.stars+"/3",ie("stStars",null,l)],["4",ie("stRooms",null,l)]].forEach(([y,m],p)=>{let b=250+p*290;e.fillStyle="rgba(255,255,255,0.08)",f(b-125,950,250,160,26),e.fill(),d(y,b,1012,56,"#fff0d0","rgba(255,160,60,0.6)"),d(m.toUpperCase(),b,1075,22,"rgba(240,240,255,0.8)","rgba(0,0,0,0)",u,"800")}),d(l==="de"?"Schaffst du es schneller?":"Can you get out faster?",540,1225,42,"#ffffff","rgba(140,170,255,0.8)",u,"800"),d("#HauntedMansionEscape",540,1295,36,"#ffb547","rgba(255,120,20,0.8)"),n}function Fg(){let e=kg().toDataURL("image/png"),t=Xo(),i=document.createElement("a");return i.href=e,i.download=`haunted-mansion-escape-${$i(t.time).replace(":","m")}s.png`,document.body.appendChild(i),i.click(),i.remove(),window.__hmeLastShot=e.length,Es(ie("shotSaved")),Ae.ui(),e}function Og(){Object.assign(M,{time:0,hintsUsed:0,hintLvl:{},inv:[],sel:null,f:{},seq:[],brew:[],mel:[],visited:{},spot:null,busy:0,lastResult:null}),M.log={scare:0,cute:0,flyby:0,hint:0,pickup:0,lightning:0,wrong:0},_l.length=0,tn=null,kr(!1),Nr=!1,er=-1,Ln&&(Ln.visible=!1)}function Mu(n=!1){let e=n?ap():null;Og(),e?(e.kids!==M.kids&&Iu(e.kids),Object.assign(M,{time:e.time,hintsUsed:e.hintsUsed,hintLvl:e.hintLvl||{},inv:e.inv||[],f:e.f||{},seq:e.seq||[],brew:e.brew||[],visited:e.visited||{}}),M.log=Object.assign(M.log,e.log||{})):lp(),Cl(),M.mode="play",document.body.classList.add("playing"),ee("start").classList.add("hidden"),ee("end").classList.add("hidden"),ee("hud").classList.remove("hidden"),ee("invBar").classList.remove("hidden");let t=e?e.room:"foyer";qo(t,!0),wl(e&&e.p?[e.p.x,e.p.y,e.p.z,e.p.yaw]:null),tr(),Ts(),dp(),cu(),Ho("main"),Ae.start(),Sl="",!Gt.get("hme-tut",0)&&!window.__hmeNoTut&&Mt(1.4,gp),e?(M.visited[t]=1,Es(ie("resumed"))):(M.visited.foyer=1,sp("foyer"),Mt(1,()=>Ze(ie("intro"),6)),Mt(2.2,()=>Nu(!0))),Bt(),ws()}var Bg=[["\u2728","tut1"],["\u270B","tut2"],["\u{1F392}","tut3"],["\u{1F6AA}","tut4"],["\u{1F480}","tut5"]],ir=0;function gp(){M.mode==="play"&&(or()&&document.exitPointerLock(),sr.clear(),M.tut=!0,ir=0,ee("tut").classList.remove("hidden"),xp(),Ae.ui())}function oS(){return Qe.on?[["\u{1F6B6}","tutW1"],["\u2728","tutW2"],["\u{1F392}","tutW3"],["\u{1F6AA}","tutW4"],["\u{1F480}","tut5"]]:Bg}function xp(){let n=oS(),[e,t]=n[ir],i=t;ee("tutIcon").textContent=e,ee("tutT").textContent=ie(i+"t"),ee("tutX").textContent=ie(i+(Qe.on&&document.body.classList.contains("touch")&&(i==="tutW1"||i==="tutW2")?"m":"")),ee("tutStep").textContent=ir+1+"/"+n.length,ee("tutDots").innerHTML=n.map((s,r)=>`<i class="${r===ir?"on":""}"></i>`).join(""),ee("tutNext").textContent=ir===n.length-1?ie("tutGo"):ie("tutNext")}function zg(){ir<Bg.length-1?(ir++,xp(),Ae.ui()):Uu()}function Uu(){M.tut=!1,ee("tut").classList.add("hidden"),Gt.set("hme-tut",1),Ji=0}function Qf(){Pu(!1),M.mode="menu",document.body.classList.remove("playing"),ee("hud").classList.add("hidden"),ee("invBar").classList.add("hidden"),ee("nav").classList.add("hidden"),ee("end").classList.add("hidden"),ee("start").classList.remove("hidden"),ee("msg").classList.remove("show"),Og(),Cl(),qo("foyer",!0),Ts(),Hg()}function Hg(){let n=ap();ee("btnContinue").classList.toggle("hidden",!n),ee("btnPlay").querySelector("span").textContent=n?ie("newGame"):ie("play"),ee("btnPlay").classList.toggle("mid",!!n),ee("btnPlay").classList.toggle("big",!n),n?ee("contInfo").textContent=`${ie("r_"+n.room)} \xB7 ${$i(n.time)}`:ee("contInfo").textContent="",ee("bestStart").textContent=M.best?$i(M.best.time)+" "+"\u2B50".repeat(M.best.stars):"\u2014"}function Pu(n){M.mode!=="play"&&n||(M.paused=!!n,ee("pauseScr").classList.toggle("hidden",!M.paused))}var pg=0,Gg=!1;function ku(){if(Tu){let n=Tu.uniforms;n.time.value=(n.time.value+.37)%100,n.asp.value=Rt.aspect,n.scare.value=Dr*(M.kids?.25:1),n.lit.value=yi.lvl}Jn?Jn.render():Yn.render(rn,Rt)}function _p(n){if(M.clock+=n,M.mode==="play"&&!M.paused&&!M.tut&&M.busy===0){Ji+=n;let e=Ji>20;e!==document.body.classList.contains("idle")&&(document.body.classList.toggle("idle",e),Yo())}M.mode==="play"&&!M.paused&&!M.tut&&!M.f.escaped&&(M.time+=n,(M._ht=(M._ht||0)+n)>.5&&(M._ht=0,ws()),(M._st=(M._st||0)+n)>5&&(M._st=0,Bt())),M.mode==="menu"&&(fe.yaw=Math.sin(M.clock*.12)*.42,fe.pitch=.04+Math.sin(M.clock*.09)*.05),(M._nt=(M._nt||0)+n)>.2&&(M._nt=0,rp()),XM(),DM(n),WM(n),YM(n),tS(n),gg(n),VM(n),qM(n),yl>0&&(yl-=n,yl<=0&&ee("msg").classList.remove("show")),_u>0&&(_u-=n),ee("wisp").classList.toggle("on",_u>0)}function Vg(n){if(requestAnimationFrame(Vg),Gg)return;let e=Math.min(.05,(n-(pg||n))/1e3);pg=n,M.paused||_p(e),ku(),aS(n)}var jt={n:0,t0:0,ema:60,slow:0,decided:!1,samples:0};function ep(n){return ie("q_"+n)}function bl(){ee("qualHint").textContent=`${ie("suggested")}: ${ep(Wg())} (${Math.round(jt.ema)} fps)`}function Wg(){let n=jt.ema;return n>=56?Math.max(window.screen.width,window.screen.height)>=1400&&(window.devicePixelRatio||1)<=2?"ultra":"high":n>=42?"high":n>=28?"mid":"low"}function aS(n){if(jt.n++,jt.t0||(jt.t0=n),n-jt.t0>=1e3){let e=jt.n*1e3/(n-jt.t0);if(jt.ema=jt.decided?jt.ema*.6+e*.4:e,jt.n=0,jt.t0=n,jt.samples++,bl(),!jt.decided&&jt.samples>=3&&(jt.decided=!0,!M.qualityUser&&!window.__hmeNoAutoQ)){let t=Wg();t!==Ms()&&(Eu(t),Ts(),Es(`${ie("suggested")}: ${ep(t)} (${Math.round(jt.ema)} fps)`))}if(jt.decided&&M.mode==="play"&&jt.ema<24&&Ms()!=="low"&&!window.__hmeNoAutoQ&&!M.qualityUser){if(jt.slow++,jt.slow>=4){jt.slow=0;let t=["low","mid","high","ultra"],i=t[Math.max(0,t.indexOf(Ms())-1)];Eu(i),Ts(),Es(`${ie("fpsLow")} ${ep(i)}`)}}else jt.slow=0}}function yp(){M.tut&&xp(),Sl="",Wf(M.kids),document.querySelectorAll("#langSeg button, #langSeg2 button").forEach(n=>n.classList.toggle("on",n.dataset.lang===Qs())),Ke&&xg(),Rl(),ws(),Hg(),bl(),M.mode==="end"&&Ru()}function Iu(n){let e=M.kids!==!!n;M.kids=!!n,Gt.set("hme-kids",M.kids),ee("chkKids").checked=M.kids,ee("chkKids2").checked=M.kids,lu(M.kids),document.body.classList.toggle("kids",M.kids),Wf(M.kids),e&&Ke&&M.mode==="menu"&&Cl()}function lS(){ee("btnPlay").onclick=()=>Mu(!1),ee("btnContinue").onclick=()=>Mu(!0),ee("chkKids").onchange=o=>Iu(o.target.checked),ee("chkKids2").onchange=o=>Iu(o.target.checked),document.querySelectorAll("#langSeg button, #langSeg2 button").forEach(o=>o.onclick=()=>{uu(o.dataset.lang),M.shareLang=Qs(),yp(),Ae.ui()}),ee("btnSettings").onclick=()=>{ee("settings").classList.remove("hidden"),bl()},ee("btnSet2").onclick=()=>{ee("settings").classList.remove("hidden"),bl()},ee("btnCloseSettings").onclick=()=>ee("settings").classList.add("hidden"),document.querySelectorAll("#qualSeg button").forEach(o=>o.onclick=()=>{Eu(o.dataset.q,!0),Ts(),Ae.ui(),bl()}),ee("volMusic").oninput=o=>{au(o.target.value/100),Gt.set("hme-music",+o.target.value)},ee("volSfx").oninput=o=>{ou(o.target.value/100),Gt.set("hme-sfx",+o.target.value)},ee("chkMute").onchange=o=>{ru(o.target.checked),ee("btnMute").textContent=o.target.checked?"\u{1F507}":"\u{1F50A}"},ee("btnMute").onclick=()=>{let o=!Bf();ru(o),ee("chkMute").checked=o,ee("btnMute").textContent=o?"\u{1F507}":"\u{1F50A}"},ee("btnPause").onclick=()=>Pu(!0),ee("btnResume").onclick=()=>Pu(!1),ee("btnQuit").onclick=()=>{Bt(),Qf()},ee("btnHint").onclick=o=>{o.stopPropagation(),Lu()},ee("btnHelp").onclick=o=>{o.stopPropagation(),gp()},ee("tutNext").onclick=o=>{o.stopPropagation(),zg()},ee("tutSkip").onclick=o=>{o.stopPropagation(),Uu()},ee("btnDesel").onclick=o=>{o.stopPropagation(),rr(null)},ee("btnAct").addEventListener("pointerdown",o=>{o.stopPropagation(),o.preventDefault(),Pl()});let n=ee("chkWalk");n.checked=Qe.on,n.onchange=()=>Rg(n.checked);let e=ee("sensR");e.value=Math.round(Qe.sens*50),e.oninput=()=>{Qe.sens=Math.max(.2,e.value/50),Gt.set("hme-sens",Qe.sens)};let t=ee("chkInvY");t.checked=Qe.invY,t.onchange=()=>{Qe.invY=t.checked,Gt.set("hme-invy",Qe.invY)};let i=ee("chkBob");i.checked=Qe.bob,i.onchange=()=>{Qe.bob=i.checked,Gt.set("hme-bob",Qe.bob)},dp(),ee("btnBack").onclick=o=>{o.stopPropagation(),Du()},ee("lockOk").onclick=()=>cp(),ee("lockClose").onclick=()=>ee("lockUI").classList.add("hidden"),document.querySelectorAll("#lockUI .wheel").forEach((o,a)=>{o.querySelector(".up").onclick=()=>{M.lockDigits[a]=(M.lockDigits[a]+1)%10,El(),Ae.dial()},o.querySelector(".dn").onclick=()=>{M.lockDigits[a]=(M.lockDigits[a]+9)%10,El(),Ae.dial()}}),ee("btnShare").onclick=()=>Ug(),ee("btnShot").onclick=()=>Fg(),ee("btnReplay").onclick=()=>{lp(),Mu(!1)},ee("btnMenu").onclick=()=>Qf(),ee("name").oninput=o=>{M.nameV=o.target.value.slice(0,18),Gt.set("hme-name",M.nameV),Ru()},document.querySelectorAll("#shareLang button").forEach(o=>o.onclick=()=>{M.shareLang=o.dataset.sl,Ru()});let s=Gt.get("hme-music",60),r=Gt.get("hme-sfx",90);ee("volMusic").value=s,ee("volSfx").value=r,au(s/100),ou(r/100),window.addEventListener("resize",np),document.addEventListener("visibilitychange",()=>{document.hidden&&Bt()})}uu(Qs());lu(M.kids);document.body.classList.toggle("kids",M.kids);ee("chkKids").checked=M.kids;ee("chkKids2").checked=M.kids;lS();Cl();mg();np();yp();qo("foyer",!0);Ts();document.querySelectorAll("#qualSeg button").forEach(n=>n.classList.toggle("on",n.dataset.q===Ms()));for(let n=0;n<90;n++)_p(1/60);ku();document.body.classList.add("ready");requestAnimationFrame(Vg);window.__hme={S:M,PUZ:Vo,cam:fe,get R(){return ae},get rooms(){return Ke},camera:Rt,renderer:Yn,start:n=>Mu(!!n),menu:Qf,interact:Ur,act:Ur,hint:Lu,goal:Zf,select:rr,give:Go,gotoRoom:oi,back:Du,lockSet:n=>(Mg(),M.lockDigits=n.split("").map(Number),El(),cp()),variant:bi,stars:Tl,save:Bt,loadSave:ap,result:Xo,showEnd:Ng,shareText:n=>fu(Xo(),n),copyShare:Ug,makeShot:kg,saveShot:Fg,setKids:Iu,setLang:n=>{uu(n),yp()},applyQuality:n=>{Eu(n,!0),Ts()},quality:()=>Ms(),tut:()=>({open:!ee("tut").classList.contains("hidden"),step:ir,title:ee("tutT").textContent,seen:!!Gt.get("hme-tut",0)}),tutOpen:gp,tutNext:zg,tutClose:Uu,navTo:bg,exits:()=>vg().map(n=>({...n})),walk:()=>({on:Qe.on,x:ve.x,y:ve.y,z:ve.z,yaw:fe.yaw,pitch:fe.pitch,cross:ve.cross,locked:or()}),setWalk:Rg,keyDown:n=>sr.add(n),keyUp:n=>sr.delete(n),keysClear:()=>sr.clear(),placeP:(n,e,t,i)=>{wl([n,e,t,i]),tr()},joy:(n,e)=>{kt.dx=n,kt.dy=e},cross:()=>(Cu(),ve.cross),interactCross:Pl,colCount:()=>(ae.col||[]).length,colNear:(n,e,t,i=.6)=>(ae.col||[]).filter(s=>!(s[3]<t+.38||s[2]>t+1.75)&&n>s[0]-i&&n<s[1]+i&&e>s[4]-i&&e<s[5]+i),aim:n=>{let e=ae.items[n];if(!e)return null;let t=ae.hits.filter(o=>o.userData.iid===n&&o.material&&o.material.visible===!1);t.length?(rn.updateMatrixWorld(),new ei().setFromObject(t[0]).getCenter(_t),_t.sub(ae.offset)):e.getWorldPosition(_t).sub(ae.offset);let i=_t.x-ve.x,s=_t.y-(ve.y+Eg),r=_t.z-ve.z;return fe.yaw=Math.atan2(-i,-r),fe.pitch=Math.atan2(s,Math.hypot(i,r)),tr(),gg(0),Cu(),ve.cross},approach:(n,e=1.5)=>{let t=ae.items[n];if(!t)return null;t.getWorldPosition(_t).sub(ae.offset);let i=ae.view.pos,s=i.x-_t.x,r=i.z-_t.z,o=Math.hypot(s,r)||1;s/=o,r/=o;let[a,l]=Cg(_t.x+s*e,_t.z+r*e,ve.y);return ve.x=a,ve.z=l,ve.y=Ag(a,l,ve.y),[a,l]},steer:(n,e)=>(fe.yaw=Math.atan2(-(n-ve.x),-(e-ve.z)),fe.pitch=0,Math.hypot(n-ve.x,e-ve.z)),ctx:()=>ee("selHint").textContent,idle:n=>(n!=null&&(Ji=n),Ji),cursor:()=>Ss.style.cursor,snap:()=>({mode:M.mode,room:M.room,spot:M.spot,time:M.time,hints:M.hintsUsed,inv:[...M.inv],sel:M.sel,f:{...M.f},log:{...M.log},busy:M.busy,goal:Zf(),stars:Tl(),cine:document.body.classList.contains("cine")}),hitsAt:(n,e)=>(rn.updateMatrixWorld(),Rt.updateMatrixWorld(),Wo.set(n/window.innerWidth*2-1,-(e/window.innerHeight)*2+1),nr.setFromCamera(Wo,Rt),[nr.ray.origin.toArray(),nr.ray.direction.toArray(),nr.intersectObjects(ae.hits,!1).map(t=>[t.object.userData.iid,+t.distance.toFixed(2),t.point.toArray()])]),pick:n=>{let e=ae.items[n];return e?(rn.updateMatrixWorld(),Rt.updateMatrixWorld(),e.getWorldPosition(_t),_t.project(Rt),{x:(_t.x*.5+.5)*window.innerWidth,y:(-_t.y*.5+.5)*window.innerHeight,z:_t.z}):null},clickAt:(n,e)=>Lg(n,e),pickAt:fp,lightning:()=>Nu(!0),flyby:hp,sim:(n=1,e=1/60)=>{for(let t=0;t<n;t++)_p(e);return!0},render:()=>(ku(),!0),hold:n=>{Gg=!!n},sounds:()=>Hf().then(n=>({n,names:Gf()})),sfx:Ae,audio:Vf,fps:()=>jt.ema,clean:()=>(ee("chapter").className="",ee("msg").classList.remove("show"),ee("tip").classList.remove("show"),ee("toast").classList.remove("show"),yl=0,!0),look:(n,e)=>{fe.yaw=n,fe.pitch=e,tr()},spot:n=>{M.spot=n,tr()},snapCam:tr};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
