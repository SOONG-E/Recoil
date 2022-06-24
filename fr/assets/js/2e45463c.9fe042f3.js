"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[2694],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return u}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),m=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=m(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=m(r),u=o,v=y["".concat(c,".").concat(u)]||y[u]||s[u]||i;return r?t.createElement(v,a(a({ref:n},p),{},{components:r})):t.createElement(v,a({ref:n},p))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=y;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var m=2;m<i;m++)a[m]=r[m];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},2886:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return y}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={title:"Relay Environment",sidebar_label:"Relay Environment"},c=void 0,m={unversionedId:"recoil-relay/environment",id:"recoil-relay/environment",title:"Relay Environment",description:"To use GraphQL with the recoil-relay library you'll need to reference your Relay environment(s).  Each GraphQL selector or effect requires an environment option which can either reference a Relay Environment directly or be an EnvironmentKey that matches up with a `` component that registered a Relay environment.",source:"@site/docs/recoil-relay/environment.md",sourceDirName:"recoil-relay",slug:"/recoil-relay/environment",permalink:"/fr/docs/recoil-relay/environment",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/recoil-relay/environment.md",tags:[],version:"current",frontMatter:{title:"Relay Environment",sidebar_label:"Relay Environment"},sidebar:"recoil-relay",previous:{title:"Introduction",permalink:"/fr/docs/recoil-relay/introduction"},next:{title:"GraphQL Queries",permalink:"/fr/docs/recoil-relay/graphql-queries"}},p=[{value:"<code>EnvironmentKey</code>",id:"environmentkey",children:[],level:3},{value:"Environment Provider",id:"environment-provider",children:[],level:3}],s={toc:p};function y(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To use GraphQL with the ",(0,i.kt)("inlineCode",{parentName:"p"},"recoil-relay")," library you'll need to reference your Relay environment(s).  Each GraphQL ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-relay/graphql-queries"},"selector")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-relay/graphql-effects"},"effect")," requires an ",(0,i.kt)("inlineCode",{parentName:"p"},"environment")," option which can either reference a Relay Environment directly or be an ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-relay/api/EnvironmentKey"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"EnvironmentKey")))," that matches up with a ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-relay/api/RecoilRelayEnvironment"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"<RecoilRelayEnvironment>")))," component that registered a Relay environment."),(0,i.kt)("h3",{id:"environmentkey"},(0,i.kt)("inlineCode",{parentName:"h3"},"EnvironmentKey")),(0,i.kt)("p",null,"When using an ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-relay/api/EnvironmentKey"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"EnvironmentKey")))," with your GraphQL queries it is matched up with a surrounding ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-relay/api/RecoilRelayEnvironment"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"<RecoilRelayEnvironment>")))," with the same ",(0,i.kt)("inlineCode",{parentName:"p"},"environmentKey")," within your ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/RecoilRoot"},(0,i.kt)("inlineCode",{parentName:"a"},"<RecoilRoot>")),".  This is useful in case the environment object is only available at runtime when actually rendering your component, such as for ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-relay/graphql-queries#preloaded-graphql"},"preloaded queries"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const myEnvironmentKey = new EnvironmentKey('My Environment');\n\nfunction MyApp() {\n  const myEnvironment = useMyRelayEnvironment();\n  return (\n    <RecoilRoot>\n      <RecoilRelayEnvironment\n        environment={myEnvironment}\n        environmentKey={myEnvironmentKey}>\n        {/* Components here can use Recoil atoms/selectors which reference myEnvironmentKey */}\n      </RecoilRelayEnvironment>\n    </RecoilRoot>\n  )\n}\n")),(0,i.kt)("h3",{id:"environment-provider"},"Environment Provider"),(0,i.kt)("p",null,"To use Relay hooks, such as for committing mutations, with your environment the ",(0,i.kt)("a",{parentName:"p",href:"https://relay.dev/docs/api-reference/relay-environment-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"<RelayEnvironmentProvider>"))," component is still required.  For your convenience there is a ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-relay/api/RecoilRelayEnvironmentProvider"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"<RecoilRelayEnvrironmentProvider>")))," component which combines both ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-relay/api/RecoilRelayEnvironment"},(0,i.kt)("inlineCode",{parentName:"a"},"<RecoilRelayEnvironment>"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://relay.dev/docs/api-reference/relay-environment-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"<RelayEnvironmentProvider>")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const myEnvironmentKey = new EnvironmentKey('My Environment');\n\nfunction MyApp() {\n  return (\n    <RecoilRoot>\n      <RecoilRelayEnvironmentProvider\n        environment={myEnvironment}\n        environmentKey={myEnvironmentKey}>\n        {/* Components here can use both Recoil and Relay APIs for GraphQL */}\n      </RecoilRelayEnvironmentProvider>\n    </RecoilRoot>\n  )\n}\n")))}y.isMDXComponent=!0}}]);