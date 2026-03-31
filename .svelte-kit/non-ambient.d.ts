
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/aboutme" | "/ben" | "/eventphotography" | "/growceries" | "/imprint" | "/lys" | "/playground" | "/playground/growceries" | "/playground/photo" | "/playground/respiratorysystem" | "/playground/xtend" | "/spot" | "/traumpalast";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/aboutme": Record<string, never>;
			"/ben": Record<string, never>;
			"/eventphotography": Record<string, never>;
			"/growceries": Record<string, never>;
			"/imprint": Record<string, never>;
			"/lys": Record<string, never>;
			"/playground": Record<string, never>;
			"/playground/growceries": Record<string, never>;
			"/playground/photo": Record<string, never>;
			"/playground/respiratorysystem": Record<string, never>;
			"/playground/xtend": Record<string, never>;
			"/spot": Record<string, never>;
			"/traumpalast": Record<string, never>
		};
		Pathname(): "/" | "/aboutme" | "/aboutme/" | "/ben" | "/ben/" | "/eventphotography" | "/eventphotography/" | "/growceries" | "/growceries/" | "/imprint" | "/imprint/" | "/lys" | "/lys/" | "/playground" | "/playground/" | "/playground/growceries" | "/playground/growceries/" | "/playground/photo" | "/playground/photo/" | "/playground/respiratorysystem" | "/playground/respiratorysystem/" | "/playground/xtend" | "/playground/xtend/" | "/spot" | "/spot/" | "/traumpalast" | "/traumpalast/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/captions.vtt" | "/favicon.png" | "/fonts/neue-montreall/PPNeueMontreal-Bold.woff2" | "/fonts/neue-montreall/PPNeueMontreal-Book.woff2" | "/fonts/neue-montreall/PPNeueMontreal-Italic.woff2" | "/fonts/neue-montreall/PPNeueMontreal-Medium.woff2" | "/fonts/neue-montreall/PPNeueMontreal-SemiBolditalic.woff2" | "/fonts/neue-montreall/PPNeueMontreal-Thin.woff2" | "/images/.DS_Store" | "/images/AboutMe/AboutMeMTB.jpg" | "/images/AboutMe/aboutme.png" | "/images/BEN/.DS_Store" | "/images/BEN/BEN1.png" | "/images/BEN/BEN2.png" | "/images/BEN/BEN3.png" | "/images/BEN/BEN_Map.png" | "/images/BEN/BEN_Network.png" | "/images/BEN/BenQuadscreen.png" | "/images/EventPhotos/1.png" | "/images/EventPhotos/10.png" | "/images/EventPhotos/11.png" | "/images/EventPhotos/12.png" | "/images/EventPhotos/13.png" | "/images/EventPhotos/14.png" | "/images/EventPhotos/15.png" | "/images/EventPhotos/16.png" | "/images/EventPhotos/17.png" | "/images/EventPhotos/18.png" | "/images/EventPhotos/19.png" | "/images/EventPhotos/2.png" | "/images/EventPhotos/20.png" | "/images/EventPhotos/21.png" | "/images/EventPhotos/3.png" | "/images/EventPhotos/4.png" | "/images/EventPhotos/5.png" | "/images/EventPhotos/6.png" | "/images/EventPhotos/7.png" | "/images/EventPhotos/8.png" | "/images/EventPhotos/9.png" | "/images/GrowCard.png" | "/images/GrowCard_mobile.png" | "/images/Growceries/Grow1.png" | "/images/Growceries/Grow2.png" | "/images/Growceries/Grow3.png" | "/images/Growceries/GrowBranding.png" | "/images/Growceries/GrowFlow.png" | "/images/Growceries/GrowSprint.png" | "/images/Growceries/GrowVideoThumbnail.png" | "/images/LYS/LYS1.png" | "/images/LYS/LYS2.png" | "/images/LYS/LYS3.png" | "/images/LYS/LYSBanner.png" | "/images/LYS/LYSPilot.png" | "/images/LYS/LYSProto1.png" | "/images/LYS/LYSProto2.png" | "/images/LYS/LYSProto3.png" | "/images/LYS/LYSSolution.png" | "/images/LYS/LYS_Videothumbnail.png" | "/images/LYS/Prototype3.png" | "/images/Portrait.jpg" | "/images/Portrait2.jpg" | "/images/Portrait3.JPG" | "/images/Respiratory/project.png" | "/images/RespyCard.png" | "/images/RespyCard_mobile.png" | "/images/Spot/ImmersiveSpace.png" | "/images/Spot/Spot1.png" | "/images/Spot/Spot2.png" | "/images/Spot/Spot3.png" | "/images/Spot/SpotExhibition.png" | "/images/Spot/SpotIdeation.png" | "/images/Spot/SpotPrototype.png" | "/images/Spot/SpotVideoThumbnail.png" | "/images/SpotCard.png" | "/images/SpotCard_mobile.png" | "/images/Traumpalast/Branding.png" | "/images/Traumpalast/Startscreenbanner.png" | "/images/Traumpalast/Traum1.png" | "/images/Traumpalast/Traum2.png" | "/images/Traumpalast/Traum3.png" | "/images/Traumpalast/Traum_HMW01.png" | "/images/Traumpalast/Traum_HMW02.png" | "/images/Traumpalast/Traum_HMW03.png" | "/images/Traumpalast/Traum_HMW04.png" | "/images/Traumpalast/Wireframes.png" | "/images/TraumpalastCard.png" | "/images/TraumpalastCard_mobile.png" | "/images/Xtend/prototype.png" | "/images/Xtend/robot.png" | "/images/Xtend/robotControlls.png" | "/images/Xtend/xtend.png" | "/images/XtendCard.png" | "/images/XtendCard_mobile.png" | "/images/faviconHighRes.png" | "/images/gallerie/.DS_Store" | "/images/gallerie/02.jpg" | "/images/gallerie/03.jpg" | "/images/gallerie/04.jpg" | "/images/gallerie/05.jpg" | "/images/gallerie/06.jpg" | "/images/gallerie/07.jpg" | "/images/gallerie/08.jpg" | "/images/gallerie/09.jpg" | "/images/gallerie/11.jpg" | "/images/gallerie/12.jpg" | "/images/gallerie/13.jpg" | "/images/gallerie/14.jpg" | "/images/gallerie/15.jpg" | "/images/gallerie/16.jpg" | "/images/gallerie/17.jpg" | "/images/gallerie/18.jpg" | "/images/gallerie/19.jpg" | "/images/gallerie/20.jpg" | "/images/gallerie/21.jpg" | "/images/gallerie/22.jpg" | "/images/gallerie/23.jpg" | "/images/icons/.DS_Store" | "/images/icons/airplane-tilt-light.svg" | "/images/icons/arrow-bend-right-down-light.svg" | "/images/icons/arrow-down-light.svg" | "/images/icons/arrow-left-light.svg" | "/images/icons/arrow-up-right-light.svg" | "/images/icons/camera-light.svg" | "/images/icons/camera.svg" | "/images/icons/chef-hat-light.svg" | "/images/icons/envelope-simple-light.svg" | "/images/icons/film-strip-light.svg" | "/images/icons/folders-light.svg" | "/images/icons/linkedin-logo-light.svg" | "/images/icons/pen-nib-light.svg" | "/images/icons/pen-nib-light_white.svg" | "/images/icons/pen-nib.svg" | "/images/icons/person-simple-bike-light.svg" | "/images/icons/play-bold.svg" | "/images/icons/play-light.svg" | "/images/icons/play.svg" | "/images/icons/user-light.svg" | "/videos/SpotKeyvisual.mp4" | "/videos/Spot_apperiance.mp4" | "/videos/TraumpalastKeyvisual.mp4" | string & {};
	}
}