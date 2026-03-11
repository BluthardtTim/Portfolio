export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/.DS_Store","images/AboutMe/AboutMeMTB.jpg","images/AboutMe/aboutme.png","images/BEN/.DS_Store","images/BEN/BEN1.png","images/BEN/BEN2.png","images/BEN/BEN3.png","images/BEN/BenQuadscreen.png","images/EventPhotos/1.png","images/EventPhotos/10.png","images/EventPhotos/11.png","images/EventPhotos/12.png","images/EventPhotos/13.png","images/EventPhotos/14.png","images/EventPhotos/15.png","images/EventPhotos/16.png","images/EventPhotos/17.png","images/EventPhotos/18.png","images/EventPhotos/19.png","images/EventPhotos/2.png","images/EventPhotos/20.png","images/EventPhotos/21.png","images/EventPhotos/3.png","images/EventPhotos/4.png","images/EventPhotos/5.png","images/EventPhotos/6.png","images/EventPhotos/7.png","images/EventPhotos/8.png","images/EventPhotos/9.png","images/GrowCard.png","images/GrowCard_mobile.png","images/Growceries/Grow1.png","images/Growceries/Grow2.png","images/Growceries/Grow3.png","images/Growceries/GrowBranding.png","images/Growceries/GrowFlow.png","images/Growceries/GrowSprint.png","images/Growceries/GrowVideoThumbnail.png","images/LYS/LYS1.png","images/LYS/LYS2.png","images/LYS/LYS3.png","images/LYS/LYSBanner.png","images/LYS/LYSPilot.png","images/LYS/LYSProto1.png","images/LYS/LYSProto2.png","images/LYS/LYSProto3.png","images/LYS/LYSSolution.png","images/LYS/LYS_Videothumbnail.png","images/LYS/Prototype3.png","images/Portrait.jpg","images/Portrait2.jpg","images/Portrait3.JPG","images/Respiratory/project.png","images/RespyCard.png","images/RespyCard_mobile.png","images/Spot/ImmersiveSpace.png","images/Spot/Spot1.png","images/Spot/Spot2.png","images/Spot/Spot3.png","images/Spot/SpotExhibition.png","images/Spot/SpotIdeation.png","images/Spot/SpotPrototype.png","images/Spot/SpotVideoThumbnail.png","images/SpotCard.png","images/SpotCard_mobile.png","images/Traumpalast/Branding.png","images/Traumpalast/Startscreenbanner.png","images/Traumpalast/Traum1.png","images/Traumpalast/Traum2.png","images/Traumpalast/Traum3.png","images/Traumpalast/Traum_HMW01.png","images/Traumpalast/Traum_HMW02.png","images/Traumpalast/Traum_HMW03.png","images/Traumpalast/Traum_HMW04.png","images/Traumpalast/Wireframes.png","images/TraumpalastCard.png","images/TraumpalastCard_mobile.png","images/Xtend/prototype.png","images/Xtend/robot.png","images/Xtend/robotControlls.png","images/Xtend/xtend.png","images/XtendCard.png","images/XtendCard_mobile.png","images/gallerie/01.jpg","images/gallerie/02.jpg","images/gallerie/03.jpg","images/gallerie/04.jpg","images/gallerie/05.jpg","images/gallerie/06.jpg","images/gallerie/07.jpg","images/gallerie/08.jpg","images/gallerie/09.jpg","images/gallerie/10.jpg","images/gallerie/11.jpg","images/gallerie/12.jpg","images/gallerie/13.jpg","images/gallerie/14.jpg","images/gallerie/15.jpg","images/gallerie/16.jpg","images/gallerie/17.jpg","images/gallerie/18.jpg","images/gallerie/19.jpg","images/gallerie/20.jpg","images/gallerie/21.jpg","images/gallerie/22.jpg","images/gallerie/23.jpg","images/icons/.DS_Store","images/icons/airplane-tilt-light.svg","images/icons/arrow-bend-right-down-light.svg","images/icons/arrow-down-light.svg","images/icons/arrow-left-light.svg","images/icons/arrow-up-right-light.svg","images/icons/camera-light.svg","images/icons/camera.svg","images/icons/chef-hat-light.svg","images/icons/envelope-simple-light.svg","images/icons/film-strip-light.svg","images/icons/folders-light.svg","images/icons/linkedin-logo-light.svg","images/icons/pen-nib-light.svg","images/icons/pen-nib-light_white.svg","images/icons/pen-nib.svg","images/icons/person-simple-bike-light.svg","images/icons/play-bold.svg","images/icons/play-light.svg","images/icons/play.svg","images/icons/user-light.svg","videos/SpotKeyvisual.mp4","videos/Spot_apperiance.mp4","videos/TraumpalastKeyvisual.mp4"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".JPG":"image/jpeg",".svg":"image/svg+xml",".mp4":"video/mp4"},
	_: {
		client: {start:"_app/immutable/entry/start.KeRfmr_F.js",app:"_app/immutable/entry/app.D-z6Bw_q.js",imports:["_app/immutable/entry/start.KeRfmr_F.js","_app/immutable/chunks/DAPLSezN.js","_app/immutable/chunks/VdeK-Q6t.js","_app/immutable/chunks/CaOfsPV0.js","_app/immutable/chunks/DcAUlOex.js","_app/immutable/chunks/BVWr1OG_.js","_app/immutable/entry/app.D-z6Bw_q.js","_app/immutable/chunks/CaOfsPV0.js","_app/immutable/chunks/DcAUlOex.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DGZn9f3z.js","_app/immutable/chunks/Ctrzsc35.js","_app/immutable/chunks/yyhxmn9R.js","_app/immutable/chunks/Cx463vBI.js","_app/immutable/chunks/BVWr1OG_.js","_app/immutable/chunks/VdeK-Q6t.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/aboutme",
				pattern: /^\/aboutme\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/ben",
				pattern: /^\/ben\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/eventphotography",
				pattern: /^\/eventphotography\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/growceries",
				pattern: /^\/growceries\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/imprint",
				pattern: /^\/imprint\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/lys",
				pattern: /^\/lys\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/playground",
				pattern: /^\/playground\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/playground/growceries",
				pattern: /^\/playground\/growceries\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/playground/photo",
				pattern: /^\/playground\/photo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/playground/respiratorysystem",
				pattern: /^\/playground\/respiratorysystem\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/playground/xtend",
				pattern: /^\/playground\/xtend\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/spot",
				pattern: /^\/spot\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/traumpalast",
				pattern: /^\/traumpalast\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
