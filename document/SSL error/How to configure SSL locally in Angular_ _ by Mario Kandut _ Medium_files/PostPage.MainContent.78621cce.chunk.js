(self.webpackChunklite=self.webpackChunklite||[]).push([[5531],{4724:(e,t,n)=>{"use strict";n.d(t,{O:()=>b});var r=n(67294),l=n(26225),o=n(73776),a=n(91743),i=n(1444),c=n(75399),s=n(77355),u=n(30020),d=n(66411),m=function(e){var t=e.post,n=e.source;return r.createElement(r.Fragment,null,r.createElement(c.U,{post:t,source:n,useSubtleShareButtons:!0,spacing:"4px"}),r.createElement(s.x,{margin:"0 16px 0 28px",display:"flex",alignItems:"center"},r.createElement(d.cW,{source:{name:n}},r.createElement(i.o,{post:t,susiEntry:"bookmark_header",buttonStyle:"ICON_SUBTLE"}))),r.createElement(u._,{tooltipText:"More",targetDistance:10},r.createElement(a.t,{post:t})))},p=function(e){var t=e.post,n=e.source;return r.createElement(s.x,{paddingTop:"24px",display:{xs:"flex",sm:"flex",md:"none",lg:"none",xl:"none"}},r.createElement(s.x,{marginRight:"16px"},r.createElement(d.cW,{source:{name:n}},r.createElement(i.o,{post:t,susiEntry:"bookmark_header",buttonStyle:"ICON_TEXT"}))),r.createElement(c.U,{post:t,source:n,useSubtleShareButtons:!0,spacing:"12px"}),r.createElement(s.x,{marginLeft:"12px"},r.createElement(u._,{tooltipText:"More",targetDistance:10},r.createElement(a.t,{post:t}))))},E=n(35989),v=n(63459),f=n(18704),g=n(34796),x=n(26128),w=n(25735),h=n(73279),y=n(87691),S=function(){return r.createElement(s.x,{display:"inline-block",padding:"0 8px",ariaHidden:"true"},r.createElement(h.O,null))},k=function(e){var t=e.showStar,n=e.post,l=e.postBodyRef,o=e.isLockedPreviewOnly,a=n.firstPublishedAt,i=n.readingTime,c=(0,w.VB)({name:"enable_speechify_widget",placeholder:!1});return r.createElement(r.Fragment,null,Boolean(a)&&r.createElement(r.Fragment,null,r.createElement(y.F,{scale:"M",playwrightClassName:"pw-published-date"},r.createElement(v.E,{timestamp:a})),r.createElement(S,null)),r.createElement(f.N,{scale:"M",tag:"div",readingTime:i}),t&&r.createElement(r.Fragment,null,r.createElement(S,null),r.createElement(E.U,{post:n})),!a&&r.createElement(r.Fragment,null,r.createElement(S,null),r.createElement(y.F,{color:"DARKER",scale:"M"},r.createElement(g.FV,{post:n}))),c&&r.createElement(r.Fragment,null,r.createElement(x.v,{postId:n.id,postBodyRef:l,isLockedPreviewOnly:o,isPublished:!!a})))},b=function(e){var t=e.post,n=e.creator,a=e.postBodyRef,i=e.isLockedPreviewOnly,c=void 0!==i&&i,s=e.showInResponseToEntityPreview,u=void 0!==s&&s,d=e.showStar,E=void 0!==d&&d,v=e.viewerId,f=e.playwrightClassName;if(!n)return null;var g="post_actions_header";return r.createElement(l.c,{creator:n,viewerId:v,playwrightClassName:f,entityInfos:r.createElement(k,{post:t,showStar:E,postBodyRef:a,isLockedPreviewOnly:c}),desktopActionsButtons:r.createElement(m,{post:t,source:g}),mobileActionsButtons:r.createElement(p,{post:t,source:g}),responseToEntityPreview:u&&r.createElement(o.h,{padding:"24px 0 0",post:t,postPreviewMarginBottom:40})})}},176:(e,t,n)=>{"use strict";n.d(t,{l:()=>E});var r=n(67294),l=n(68427),o=n(71652),a=n(96370),i=n(77355),c=n(93310),s=n(21755),u=n(87691),d=n(17583),m=n(58992),p=function(e){var t=e.children;return(0,d.s)()===s.j.xl?r.createElement(a.P,{size:"app"},r.createElement(i.x,{borderBottom:"BASE_LIGHTER"},t)):r.createElement(i.x,{borderBottom:"BASE_LIGHTER"},r.createElement(a.P,{size:"app"},t))},E=function(e){var t=e.collection,n=e.post,a=t.name,s=(0,l.R)(t);return(0,m.l)(n)?r.createElement(p,null,r.createElement(i.x,{display:"flex",alignItems:"center",height:"56px"},r.createElement(i.x,{marginRight:"16px"},r.createElement(c.r,{href:s},r.createElement(o.v,{collection:t,size:32,circular:!0}))),r.createElement(i.x,{marginRight:"3px",flexShrink:"0"},r.createElement(u.F,{scale:"M",color:"LIGHTER",tag:"div"},"Published in")),r.createElement(c.r,{href:s},r.createElement(u.F,{scale:"M",color:"DARKER",clamp:1},a)))):null}},9202:(e,t,n)=>{"use strict";n.d(t,{J:()=>r});var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"useShouldShowGiveStaffPickAwardQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"post"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"awardByType"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"EnumValue",value:"STAFF_PICK"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"type"}}]}},{kind:"Field",name:{kind:"Name",value:"awardAvailability"}}]}}]}}]}}]}}]}},97980:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MainContent:()=>$e,useLoader:()=>Qe});var r=n(59713),l=n.n(r),o=n(64718),a=n(67294),i=n(5977),c=n(83447),s=n(90732),u=n(94986),d=n(78656),m=n(19535),p=n(8903),E=n(66411),v=n(75221),f=n(2808),g=n(95989),x=n(50458),w=n(8459),h=n(39547),y=n(8851),S=n(90635),k=n(99214),b=n(87723),P=n(6455),T=n(7834),_=n(67927),I=n(49457),R=n(51802),B=n(48835),C=n(54878),F=n(98482),L=n(25735),O=n(6443),A=n(84052),N=n(10877),V=n(66018),U=n(79246),D=n(66149),z=n(77355),M=n(96370),H=n(18634),G=n(68821),W=n(99849),j=n(28655),K=n.n(j),Y=n(67154),X=n.n(Y),Q=n(63038),$=n.n(Q),q=n(92471),J=n(20113),Z=n(31889),ee=n(34135),te={xs:"XS",sm:"XS",md:"S",lg:"S",xl:"S"},ne=function(e){var t=e.children,n=(0,Z.F)(),r=(0,a.useState)(!1),l=$()(r,2),o=l[0],i=l[1],c=o?2:1,s=function(){window.innerWidth<=n.breakpoints.sm&&i(!0)};return(0,a.useEffect)((function(){return s(),ee.V6.on("resize",s),function(){return ee.V6.off("resize",s)}}),[]),a.createElement(J.X6,{scale:te,clamp:c},t)},re=n(82405),le=n(19308),oe=n(6177),ae=n(43220),ie=n(75880),ce=n(24330),se=n(32317),ue=n(69116),de=n(13454),me=n(18733),pe=n(47230),Ee=n(98096),ve=n(68894),fe=n(3207),ge=function(e){var t=e.buttonSize,n=e.targetUserId,r=(0,ve.O)(!1),l=$()(r,3),o=l[0],i=l[1],c=l[2],s=(0,Z.F)(),u=(0,me.Uo)().baseTheme,d=(0,fe.q3)(s,u),m=(0,O.H)().value;return m?a.createElement(Ee.f,{theme:d},a.createElement(de.E,{targetUserId:n,viewerId:m&&m.id},(function(e){var n=e.mutate;return a.createElement(pe.z,{buttonStyle:o?"SUBTLE":"ERROR",onClick:n,size:t||"REGULAR",onMouseEnter:i,onMouseLeave:c},o?"Unblock":"Blocked")}))):null},xe=n(93310),we=n(8431),he=n(87691),ye=n(43487),Se=n(68216);function ke(){var e=K()(["\n  fragment PostFooterBylineAurora_post on Post {\n    id\n    creator {\n      name\n      username\n      bio\n      id\n      ...UserFollowButton_user\n      ...auroraHooks_publisher\n      ...userUrl_user\n      ...UserSubscribeButton_user\n    }\n    collection {\n      name\n      description\n      ...CollectionFollowButton_collection\n      ...collectionUrl_collection\n    }\n    ...UserFollowButton_post\n    ...CollectionFollowButton_post\n    ...useShowAuthorNewsletterV3Promo_post\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return ke=function(){return e},e}var be="follow_footer",Pe=function(e){var t=e.post,n=e.maxWidthSize,r=void 0===n?"inset":n,l=t.creator,o=t.collection,i=(0,ye.v9)((function(e){return e.config.authDomain})),c=(0,ye.v9)((function(e){return e.navigation.currentLocation})),s=(0,O.H)().value,u=(0,Z.F)(),d=(0,ie.Pd)(l).viewerEdge,m=a.useState(0),p=$()(m,2),E=p[0],v=p[1],f=E<=u.breakpoints.sm,g=function(){v(window.innerWidth)};a.useEffect((function(){return g(),ee.V6.on("resize",g),function(){return ee.V6.off("resize",g)}}),[]);var w="REGULAR",h=(null==s?void 0:s.id)===(null==l?void 0:l.id)||f?void 0:"168px",y={display:"flex",justifyContent:"space-between",alignItems:"center"},S=(0,ae.KW)(t.creator),k=o?(0,x.WG)(o,c,i):l?(0,x.AW)(l,i):"",b="More from ".concat(o?o.name:null==l?void 0:l.name),P=o?o.description:null==l?void 0:l.bio,T=null;l&&(T=s&&null!=d&&d.isBlocking?a.createElement(ge,{buttonSize:w,targetUserId:l.id}):a.createElement(z.x,{display:"flex",marginLeft:"8px"},a.createElement(ce.N,{creator:l,followButtonSize:w,post:t,susiEntry:be})));var _=o?a.createElement(re.F,{buttonSize:w,collection:o,post:t,susiEntry:be}):T;return a.createElement(z.x,{print:{display:"none"}},(null==l?void 0:l.name)&&(null==l?void 0:l.username)&&!S&&a.createElement(z.x,{paddingBottom:"30px"},a.createElement(M.P,{size:r},a.createElement(z.x,X()({},y,{borderTop:"BASE_LIGHTER",paddingTop:"33px"}),a.createElement(z.x,null,a.createElement(we.Lh,{scale:"S"},"Written by"),a.createElement(ne,null,a.createElement(xe.r,{href:(0,x.AW)(l,i)},l.name||l.username))),T),l.bio&&a.createElement(z.x,{paddingTop:"6px",paddingRight:h},a.createElement(he.F,{scale:"M"},l.bio)))),(o||S)&&a.createElement(z.x,{paddingTop:"32px",paddingBottom:"4px",backgroundColor:"BASE_LIGHT"},a.createElement(M.P,{size:r},a.createElement(z.x,y,a.createElement(ne,null,a.createElement(xe.r,{href:k},b)),_),P&&a.createElement(z.x,{paddingTop:"5px",paddingRight:h,wordBreak:"break-word"},a.createElement(he.F,{scale:"M"},P)))))};function Te(){var e=K()(["\n  fragment PostFooterCollectionButton_collection on Collection {\n    id\n    name\n    ...collectionUrl_collection\n  }\n  ","\n"]);return Te=function(){return e},e}(0,q.Ps)(ke(),le.I,le.b,Se.nf,se.S$,se.sj,ae.C5,Se.$m,oe.b,ue.w);var _e=function(e){var t=e.collection,n=(0,ye.v9)((function(e){return e.config.authDomain})),r=(0,ye.v9)((function(e){return e.navigation.currentLocation}));return a.createElement(a.Fragment,null,(null==t?void 0:t.name)&&a.createElement(z.x,{maxWidth:"100%",textAlign:"center"},a.createElement(pe.z,{buttonStyle:"STRONG",href:(0,x.WG)(t,r,n)},"Read more from ",t.name)))},Ie=((0,q.Ps)(Te(),Se.nf),n(68356)),Re=n.n(Ie),Be=n(50742),Ce=Re()({loading:function(){return null},loader:function(){return Promise.all([n.e(4375),n.e(3193)]).then(n.bind(n,54894))},modules:["./PostNextFiveStories"],webpack:function(){return[54894]},render:(0,Be.n)("PostNextFiveStories")}),Fe=function(e){var t=e.post,n=e.rootMargin,r=e.target,l=a.useState(!1),o=$()(l,2),i=o[0],c=o[1];return i?a.createElement(Ce,{post:t,target:r,rootMargin:n}):(ee.V6.on("load",(function(){return c(!0)})),null)},Le=function(e){var t=e.post,n=e.target,r=a.useRef(null),l=t.collection;return a.createElement(z.x,{ref:r},a.createElement(z.x,{backgroundColor:"BASE_LIGHT",print:{display:"none"}},a.createElement(Pe,{post:t,maxWidthSize:"app"}),a.createElement(z.x,{paddingTop:"25px"},a.createElement(Fe,{post:t,target:n||r}),l&&a.createElement(z.x,{paddingBottom:"96px",paddingTop:"40px"},a.createElement(_e,{collection:l})))))},Oe=n(29969),Ae=n(1951),Ne=n(40922),Ve=function(e){var t=e.post,n=t.id,r=t.collection,l=t.creator,o=(0,Ne._)(r),i=(0,Ae.g)(t);return r&&o?a.createElement(z.x,{marginBottom:"40px"},a.createElement(Oe.X,{postId:n,publisher:r})):l&&i.value?a.createElement(z.x,{marginBottom:"40px"},a.createElement(Oe.X,{postId:n,publisher:l})):null},Ue=n(4724),De=n(176),ze=Re()({loading:function(){return null},loader:function(){return Promise.all([n.e(957),n.e(3158)]).then(n.bind(n,69788))},modules:["./PostGiveStaffPickAward"],webpack:function(){return[69788]},render:(0,Be.n)("PostGiveStaffPickAward")}),Me=Re()({loading:function(){return null},loader:function(){return n.e(8934).then(n.bind(n,1641))},modules:["./PostStaffPickAwardHeader"],webpack:function(){return[1641]},render:(0,Be.n)("PostStaffPickAwardHeader")}),He=n(9202),Ge=Re()({loading:function(){return null},loader:function(){return n.e(5313).then(n.bind(n,25))},modules:["./PostGiveTipOnExternalPlatform"],webpack:function(){return[25]},render:(0,Be.n)("PostGiveTipOnExternalPlatform")}),We=function(e){var t,n,r,l,i,c,s=e.post,u=e.meteringInfo,d=a.useRef(null),m=s.isLocked,p=s.collection,E=s.creator,f=s.content.isLockedPreviewOnly,g=p||E,x=(0,O.H)().value,j=!!x,K=(p||{}).googleAnalyticsId,Y=K?[K]:null;(0,y.t)({ids:Y}),(0,G.V)(d,s),(0,W.t)(j,d,s),(0,k.i)(s),(0,D.Q)(),(0,B.q)(s),(0,R.t)({post:s,meteringInfo:u});var X=m?{className:"meteredContent"}:{},Q=(null===(t=s.creator)||void 0===t?void 0:t.name)||(null===(n=s.creator)||void 0===n?void 0:n.username)||"the author",$=null===(r=s.creator)||void 0===r?void 0:r.id,q=!(null==x||!x.id)&&(null==x?void 0:x.id)===$,J=function(e){var t,n=e.postId,r=e.isViewerPostCreator,l=e.isLoggedIn,i=(0,o.a)(He.J,{variables:{postId:n},ssr:!1,skip:!n||!l||r}),c=i.data,s=i.loading,u=null==c||null===(t=c.post)||void 0===t?void 0:t.viewerEdge,d=!(null==u||!u.awardAvailability.includes(v.w2.STAFF_PICK)),m=!(null==u||!u.awardByType);return{showGiveStaffPickAward:a.useMemo((function(){return!s&&!!u&&(m||d)}),[u,s]),viewerHasAwarded:m,showGiveStaffPickAwardLoading:s}}({postId:s.id,isViewerPostCreator:q,isLoggedIn:j}),Z=J.showGiveStaffPickAward,ee=J.viewerHasAwarded,te=J.showGiveStaffPickAwardLoading,ne=a.useMemo((function(){return!te&&!Z&&!f&&g}),[te,Z,f,g]),re=s.countToShowAwardBadge.totalCount>0,le=(0,L.VB)({name:"can_send_tips_v0",placeholder:!1})&&!!$,oe=!!(0,L.VB)({name:"enable_plan_options_on_paywall",placeholder:!1});return a.createElement(z.x,null,a.createElement(F.k,{post:s},a.createElement(P.h,{post:s}),a.createElement(U.N,null),a.createElement(V.Lv,{post:s,user:E,forceLoad:(null==x?void 0:x.id)===(null==E?void 0:E.id)}),p&&a.createElement(De.l,{collection:p,post:s}),a.createElement(z.x,{marginBottom:{xs:"52px",sm:"52px",md:"68px",lg:"68px",xl:"68px"}},a.createElement(M.P,{size:"app"},a.createElement("article",X,a.createElement(z.x,null,a.createElement(b.m,{post:s,meteringInfo:u}),a.createElement(N.T,{post:s},a.createElement(z.x,null,E&&s&&a.createElement(Ue.O,{creator:E,post:s,postBodyRef:d,isLockedPreviewOnly:!!s.content.isLockedPreviewOnly,showInResponseToEntityPreview:!0,showStar:!!s.isLocked,viewerId:null==x?void 0:x.id,playwrightClassName:"pw-post-byline-header"}),re&&a.createElement(Me,{postId:s.id}),a.createElement(T.b,{isAuroraPostPageEnabled:!0,post:s,ref:d,richTextStyle:"INLINE"}))))),a.createElement(S.c,{post:s,meteringInfo:u,excludePadding:!oe}))),!f&&a.createElement(I.F,{post:s}),a.createElement(w.T,{isDockingEnabled:!1,undockedBackgroundColor:"BACKGROUND",maxWidthSize:"app"},a.createElement(_.F,{post:s,useSocialPopover:!0,shouldHideClapsText:!0})),a.createElement(h.p,{post:s}),le&&a.createElement(Ge,{creatorName:Q,creatorId:$,postId:s.id}),ne&&a.createElement(M.P,{size:"app"},a.createElement(Ve,{post:s})),Z&&a.createElement(ze,{creator:{imageId:null===(l=s.creator)||void 0===l?void 0:l.imageId,name:(null===(i=s.creator)||void 0===i?void 0:i.name)||(null===(c=s.creator)||void 0===c?void 0:c.username)||"the author"},postId:s.id,viewer:{imageId:null==x?void 0:x.imageId,name:(null==x?void 0:x.name)||(null==x?void 0:x.username)||"you",id:null==x?void 0:x.id},viewerHasAwarded:ee}),a.createElement(C.G8,{customStyleSheet:s.customStyleSheet},a.createElement(Le,{post:s,target:d}))),!j&&a.createElement(H.y,{xs:!0,sm:!0,md:!0,lg:!0},a.createElement(A.Q,null)))},je=n(93143),Ke=n(61280);function Ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ye(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Qe=function(e){var t,n,r,l,i,c=(0,x.mr)({params:e})||"",s=(0,Ke.X)({params:e}),u=s.error?[]:null===(t=s.data)||void 0===t?void 0:t.meterPost.postIds,d=null==u?void 0:u.includes(c),E=1===(null==u?void 0:u.length),f=(0,p.w)(c,d,E),g=(0,o.a)(je.x,{variables:{postId:c,postMeteringOptions:{forceTruncation:!1},awardType:v.w2.STAFF_PICK,isSingleColumnLayout:!1},ssr:!1,fetchPolicy:"cache-only"}),w="Post"===(null===(n=g.data)||void 0===n||null===(r=n.postResult)||void 0===r?void 0:r.__typename)&&g.data.postResult.content.isLockedPreviewOnly,h=!!f&&!w,y=(0,o.a)(je.x,{variables:{postId:c,postMeteringOptions:{forceTruncation:h},awardType:v.w2.STAFF_PICK,isSingleColumnLayout:!1},skip:!c}),S=null===(l=y.data)||void 0===l?void 0:l.postResult,k="Post"===(null==S?void 0:S.__typename)&&!(null==S||null===(i=S.content)||void 0===i||!i.isLockedPreviewOnly),b=(0,m.n)(c,k,E),P=b.content,T=S&&P?Xe(Xe({},S),{},{content:P}):S;return a.useMemo((function(){return{loading:y.loading||s.loading||!!b.loading,postQueryResult:y,postResult:T,postMeterQueryResult:s}}),[y,s,T,b])},$e=a.memo((function(e){var t=e.postQueryResult,n=e.postResult,r=e.postMeterQueryResult,l=e.params,o=(0,x.mr)({params:l})||"",m=t.loading,p=t.error,v=r.error,w=r.data,h=null==w?void 0:w.meterPost,y=(0,i.TH)(),S=a.useMemo((function(){return{name:"post_page",postId:o}}),[o]);return o?m?a.createElement(g.h,null):v||p?a.createElement(f.C,{error:v||p}):(0,u.r)(n)?a.createElement(u.I,{postResult:n}):a.createElement(d.E,{post:n,matchedPath:y.pathname,key:o},a.createElement(E.cW,{source:S},n.creator&&a.createElement(s.$,{user:n.creator}),a.createElement(We,{post:n,meteringInfo:h}))):a.createElement(c.$,null)}))},26225:(e,t,n)=>{"use strict";n.d(t,{c:()=>S});var r=n(67294),l=n(84739),o=n(28655),a=n.n(o),i=n(92471),c=n(82405),s=n(19308),u=n(32317);function d(){var e=a()(["\n  fragment PublisherFollowButton_publisher on Publisher {\n    __typename\n    ... on Collection {\n      ...CollectionFollowButton_collection\n    }\n    ... on User {\n      ...UserFollowButton_user\n    }\n  }\n  ","\n  ","\n"]);return d=function(){return e},e}var m=function(e){var t=e.publisher,n=e.buttonSize,l=e.isLinkStyle,o=void 0!==l&&l,a=e.susiEntry,i=e.width;return"Collection"===t.__typename?r.createElement(c.F,{buttonSize:n,collection:t,susiEntry:a}):r.createElement(u.Bv,{buttonSize:n,user:t,isLinkStyle:o,susiEntry:a,width:i})},p=((0,i.Ps)(d(),s.I,u.sj),n(28695)),E=n(77355),v=n(26244),f=n(93310),g=n(87691),x=n(65968),w=n(64238),h=function(e){var t=e.creator,n=e.viewerId,o=(0,l.B)(t),a=(0,w.o)(t);return r.createElement(g.F,{tag:"div",scale:"L",color:"DARKER",playwrightClassName:"pw-author"},r.createElement(E.x,{display:"flex",marginBottom:"4px",alignItems:"center"},r.createElement(v.$,{targetDistance:15,mouseLeaveDelay:100,placement:"top",role:"tooltip",popoverRenderFn:function(){return r.createElement(p.K,{user:t})}},r.createElement(f.r,{href:o},r.createElement(E.x,{display:"flex",alignItems:"center"},t.name,a&&r.createElement(E.x,{marginLeft:"2px",marginTop:"1px"},r.createElement(x._,{size:"S"}))))),t.id!==n&&r.createElement(E.x,{display:{xs:"inline-block",sm:"inline-block",md:"inline-block",lg:"none",xl:"none"},paddingLeft:"12px"},r.createElement(m,{publisher:t,buttonSize:"COMPACT",susiEntry:"follow_byline"}))))},y=n(17193),S=function(e){var t=e.creator,n=e.playwrightClassName,o=e.entityInfos,a=e.viewerId,i=e.desktopActionsButtons,c=e.mobileActionsButtons,s=e.responseToEntityPreview,u=e.headerRef,d=e.marginBottom,m=void 0===d?{xs:"24px",sm:"24px",md:"24px",lg:"24px",xl:"32px"}:d,p=(0,l.B)(t);return r.createElement(E.x,{ref:u,marginTop:{xs:"32px",sm:"32px",md:"32px",lg:"32px",xl:"56px"},marginBottom:m,tag:"header",playwrightClassName:n},r.createElement(E.x,{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},r.createElement(E.x,{display:"flex"},r.createElement(E.x,{marginRight:"16px"},r.createElement(f.r,{href:p},r.createElement(y.Yt,{scale:"M",user:t}))),r.createElement(E.x,null,r.createElement(h,{creator:t,viewerId:a}),r.createElement(E.x,{display:"flex",alignItems:"center",flexWrap:"wrap"},o))),r.createElement(E.x,{display:"flex",alignItems:"center"},r.createElement(E.x,{display:{xs:"none",sm:"none",md:"inline-flex",lg:"inline-flex",xl:"inline-flex"}},i))),c,s)}},29969:(e,t,n)=>{"use strict";n.d(t,{X:()=>P});var r=n(63038),l=n.n(r),o=n(67294),a=n(92519),i=n(83302),c=n(25735),s=n(6443),u=n(67701),d=n(77355),m=n(93310),p=n(20113),E=n(87691),v=n(18627),f=n(66411),g=n(14646),x=n(31889),w=n(34135),h=n(97217),y=n(43487),S=n(50458),k=function(e,t){return{borderTop:"1px solid ".concat(e.baseColor.border.darker),padding:"24px 0",marginBottom:"25px",minHeight:t}},b=function(e){var t=e.viewer,n=e.newsletterV3,r=e.newsletterV3LandingUrl,l=e.useCustomDomainLOFlow,c=e.isVertical,s=e.handleClick;return n?t||l?o.createElement(a.x,{newsletterV3:n,buttonStyle:"SUBTLE",redirectUrl:l?r:void 0,isVertical:c}):o.createElement(i.Q,{newsletterV3:n,isVertical:c,handleClick:s}):null},P=function(e){var t,n,r,a,i,P=e.postId,T=e.publisher,_=e.isVertical,I=void 0!==_&&_,R=o.useRef(null),B=(0,y.v9)((function(e){return e.config.authDomain})),C=(0,v.Av)(),F=(0,g.I)(),L=(0,x.F)(),O=(0,s.H)().value,A=!!(0,c.VB)({name:"enable_newsletter_lo_flow_custom_domains",placeholder:!1}),N=o.useState(!1),V=l()(N,2),U=V[0],D=V[1],z=o.useState("0px"),M=l()(z,2),H=M[0],G=M[1],W=null==(0,y.v9)((function(e){return e.navigation.currentLocation})).match("http[s]?://[^/]*".concat(B)),j=!O&&W&&A,K=T.newsletterV3,Y=null==K?void 0:K.type,X=T.username,Q=void 0===X?"":X,$=(0,S.iB)(null!==(t=null==K?void 0:K.slug)&&void 0!==t?t:"",B,Y===h.Rr.NEWSLETTER_TYPE_COLLECTION?T:void 0,Y===h.Rr.NEWSLETTER_TYPE_AUTHOR&&Q?Q:void 0),q="Collection"===T.__typename?T:void 0,J=(0,u.gY)(q).viewerEdge;switch(Y){case h.Rr.NEWSLETTER_TYPE_COLLECTION:n="Sign up for ".concat(null==K?void 0:K.name),r="0px",a="You're an editor of ".concat(null==K?void 0:K.name),i=null==J?void 0:J.isEditor;break;case h.Rr.NEWSLETTER_TYPE_AUTHOR:n=(null==K?void 0:K.promoHeadline)||"Get an email whenever ".concat(T.name," publishes."),r="6px",a="You cannot subscribe to yourself",i=T.viewerEdge.isUser}U&&(n="Check your inbox.");var Z=!1,ee=function(){!Z&&te()&&(C.event("newsletterV3.promoViewed",{newsletterV3Id:null==K?void 0:K.id,postId:P}),Z=!0)},te=function(){var e;if(!R.current)return!1;var t=null===(e=R.current)||void 0===e?void 0:e.getBoundingClientRect(),n=t.top+t.height/2;return n>=0&&n<=window.innerHeight};return o.useEffect((function(){return ee(),window&&w.V6.on("scroll",ee),function(){w.V6.off("scroll",ee)}}),[]),o.useEffect((function(){var e;if(R.current){var t=(null===(e=R.current)||void 0===e?void 0:e.getBoundingClientRect()).height;G("".concat(t,"px"))}}),[R]),K&&o.createElement(f.cW,{source:{name:"newsletter_v3_promo",susiEntry:"newsletter_v3_promo"}},o.createElement("div",{ref:R,className:I?void 0:F(k(L,H))},o.createElement(d.x,{wordBreak:"break-word",paddingBottom:r},o.createElement(p.X6,{scale:"S"},n)),Y===h.Rr.NEWSLETTER_TYPE_COLLECTION&&!U&&o.createElement(o.Fragment,null,o.createElement(d.x,{paddingTop:"4px"},o.createElement(E.F,{tag:"h3",scale:"S",color:"DARKER"},"By ".concat(T.name))),o.createElement(d.x,{paddingTop:"8px",paddingBottom:"10px"},o.createElement(E.F,{scale:"S",color:"DARKER"},null==K?void 0:K.description," ",o.createElement(m.r,{inline:!0,linkStyle:"OBVIOUS",href:$},"Take a look.")))),Y===h.Rr.NEWSLETTER_TYPE_AUTHOR&&(null==K?void 0:K.promoBody)&&!U&&o.createElement(o.Fragment,null,o.createElement(d.x,{wordBreak:"break-word",paddingTop:"8px",paddingBottom:"8px"},o.createElement(E.F,{scale:"S",color:"DARKER"},null==K?void 0:K.promoBody))),i?o.createElement(d.x,{paddingTop:"10px"},o.createElement(E.F,{scale:"S",color:"DARKER"},a)):o.createElement(d.x,{display:"flex",flexWrap:"wrap"},o.createElement(b,{viewer:O,useCustomDomainLOFlow:j,newsletterV3:K,newsletterV3LandingUrl:$,isVertical:I,handleClick:function(){return D(!0)}}))))}},1951:(e,t,n)=>{"use strict";n.d(t,{g:()=>a,t:()=>i});var r=n(67294),l=n(9354),o=n(75880),a=function(e){var t=e.creator,n=i(t);return t?n:{value:!1}},i=function(e){var t,n,a,i=(0,o.Pd)(e),c=i.viewerEdge,s=i.loading,u=r.useRef(null),d=(0,l.T)({newsletterSlug:null==e||null===(t=e.newsletterV3)||void 0===t?void 0:t.slug,username:null==e?void 0:e.username}),m=d.viewerEdge,p=d.loading;return(a=null!==u.current?{value:u.current}:s||p?{loading:!0}:null!=e&&null!==(n=e.newsletterV3)&&void 0!==n&&n.showPromo?{value:!(!(null!=c&&c.isUser||null==m)&&m.isSubscribed)}:{value:!1}).loading||void 0===a.value||null!==u.current||(u.current=a.value),a}},40922:(e,t,n)=>{"use strict";n.d(t,{_:()=>o});var r=n(67701),l=n(9354),o=function(e){var t=(e||{}).newsletterV3,n=(0,r.gY)(e),o=n.viewerEdge,a=n.loading,i=(0,l.T)({newsletterSlug:null==t?void 0:t.slug,collectionSlug:null==e?void 0:e.slug}),c=i.viewerEdge,s=i.loading;return!(null==t||!t.showPromo||a||s||!(null!=o&&o.isEditor||null==c)&&c.isSubscribed)}},18704:(e,t,n)=>{"use strict";n.d(t,{N:()=>a});var r=n(67294),l=n(87691),o=n(21372);function a(e){var t=e.readingTime,n=e.scale,a=void 0===n?"S":n,i=e.includeRead,c=void 0===i||i,s=e.color,u=e.tag,d=void 0===u?"span":u,m=c?" read":"";return r.createElement(l.F,{scale:a,color:s,tag:d,playwrightClassName:"pw-reading-time"},"".concat((0,o.Vd)(t||0)," min").concat(m))}},87723:(e,t,n)=>{"use strict";n.d(t,{m:()=>a});var r=n(67294),l=n(58327),o=n(52278),a=function(e){var t=e.meteringInfo,n=e.post;return r.createElement(o.M,{columns:8,gutter:!1,padding:{xs:"0 8px",sm:"0 8px",md:"0 16px",lg:"0 16px",xl:"0 16px"},tag:"div"},!!n.isLocked&&!!t&&r.createElement(l.r,{meteringInfo:t,post:n}))}},54878:(e,t,n)=>{"use strict";n.d(t,{v$:()=>m,G8:()=>p,Ps:()=>E,Kc:()=>v});var r=n(28655),l=n.n(r),o=n(92471),a=n(67294),i=n(31889),c=n(98096),s=n(3207);function u(){var e=l()(["\n  fragment CustomThemeProvider_customStyleSheet on CustomStyleSheet {\n    id\n    ...customDefaultBackgroundTheme_customStyleSheet\n    ...customStyleSheetFontTheme_customStyleSheet\n  }\n  ","\n  ","\n"]);return u=function(){return e},e}function d(){var e=l()(["\n  fragment CustomThemeProvider_publisher on Publisher {\n    id\n    __typename\n    ... on Collection {\n      colorPalette {\n        ...customDefaultBackgroundTheme_colorPalette\n      }\n    }\n  }\n  ","\n"]);return d=function(){return e},e}var m=function(e,t){var n=(0,i.F)(),r="Collection"===(null==t?void 0:t.__typename)?null==t?void 0:t.colorPalette:null;return(0,s.ZI)(e,(0,s.zI)(e,n,r))},p=function(e){var t=e.customStyleSheet,n=e.publisher,r=e.children,l=m(t,n);return a.createElement(c.f,{theme:l},r)},E=(0,o.Ps)(d(),s.L9),v=(0,o.Ps)(u(),s.Ui,s.VE)}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/PostPage.MainContent.78621cce.chunk.js.map