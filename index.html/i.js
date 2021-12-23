(function() { function bxBootstrap() {
	var re = /bot|crawl|slurp|spider|mediapartners|headlesschrome/i;
	if (re.test(navigator.userAgent) || navigator.userAgent == '') {
		return;
	}

	if (!(window.bouncex&&bouncex.website)) {
		var pushedData = [];
		if(window.bouncex && bouncex.push && bouncex.length){
			pushedData = bouncex;
		}
		window.bouncex = {};
		bouncex.pushedData = pushedData;
		bouncex.website = {"id":2784,"name":"Dictionary | Dictionary.com","cookie_name":"bounceClientVisit2784","domain":"dictionary.com","ct":"bind_to_domain","ally":0,"ei":0,"tcjs":"","cjs":"bouncex.CONSOLIDATE_BIDS = true;\n\nbouncex.failCampaignTypeOnImpression = function(impressedCampaignId, campaignTypeToFail){\n    var campaigns = window.bouncex && window.bouncex.campaigns;\n    for (var campaignId in campaigns) {\n        if (campaignId != impressedCampaignId && campaigns[campaignId].type == campaignTypeToFail) {\n            bouncex.campaigns[campaignId].failed = true;\n        }\n    }\n};\n\n/* SPA FIX wrike:https://www.wrike.com/open.htm?id=260932924 */\n    bouncex.on(jQuery(window), 'bxPathChange', function() {\n        bouncex.log('page change'); \n        clearTimeout(bouncex.spaTimeout);\n        bouncex.spaTimeout = setTimeout2(function() {\n            init_vars();\n            bouncex.cookie.vpv++;\n            bouncex.pa = 0;\n            setBounceCookie();\n            for (var ca_id in bouncex.campaigns) {\n              if (bouncex.campaigns.hasOwnProperty(ca_id)) {\n                bouncex.destroy_ad(ca_id);\n              }\n            }\n            bouncex.body = jQuery('body').eq(0);\n            bouncex.calling_url = encodeURIComponent(window.location.href);\n            bouncex.reload_campaigns();\n            init_ibx_tracking();\n            init_event_tracking();\n      }, 500);\n    });","force_https":false,"waypoints":false,"content_width":0,"gai":"","swids":"","sd":0,"ljq":"auto","campaign_id":0,"is_preview":false,"aco":{"first_party_limit":"3500","local_storage":"1"},"cmp":{"gdpr":1,"gmp":0,"whitelist_check":0},"burls":[{"prop":"contains","val":"blockbx=all"}],"ple":false,"fbe":true,"mas":1,"map":1,"gar":true,"ete":1,"ettm":true,"etjs":"","dge":false,"bxidLoadFirst":false,"pie":false,"cme":false,"gbi_enabled":1,"gbi":{"rblocks":null},"bpush":false,"pt":null,"els":{"Encore":"footer.page-footer.css-5358wa.esk3ouk0","Encore_2":"footer.page-footer","Endcap5":".css-l13l49.e13sij4y2","infeed":"section.css-1mnsj8u > section > .css-1fj93w9, section.css-1gd5wt3 + .css-1fj93w9, h2#collins-section, #related-content-section, #idioms-section","infeed_qa":".css-8lgfcg.e1iplpfw1,.css-54ces9.e16svm7n0,.css-d2znx6.e15kc6du5","masthead":"main"},"vars":[{"name":"spa_event_emitter","polling":"vars","persist":"no","page_types":[],"testmode":false,"default":"false","code":"/* Name: spa_event_emitter, Persistent: none, Polling: Reload custom variables only */\n(function() {\n    bouncex.prevPath = bouncex.prevPath || window.location.pathname;\n    if (bouncex.prevPath !== window.location.pathname) {\n        if (bouncex.window) {\n            bouncex.window.trigger('bxPathChange');\n        }\n        bouncex.prevPath = window.location.pathname;\n    }\n    return false; /* always return false so this variable never actually changes, only emits an event */\n})();","trigger":"pageload"}],"dgu":"pixel.cdnwidget.com","dgp":false,"ba":{"enabled":0,"fbte":0},"biu":"assets.bounceexchange.com","bau":"api.bounceexchange.com","beu":"events.bouncex.net","ibx":{"tjs":"","cjs":"","miw":0,"mibcx":0,"te":0,"cart_rep":{"get":"","set":""},"ulpj":null,"cus":"","miw_exclude":""},"etjson":null,"osre":true,"osru":"osr.bounceexchange.com/v1/osr/items","checkDfp":false,"spa":0,"spatm":1,"preinit_cjs":"","mat":0,"math":0,"cpnu":"coupons.bounceexchange.com","dfpcms":0,"sms":{"optm":"","eventSharing":false,"shqId":""},"pde":false,"fme":false,"fmx":"","sdk":{"android":false,"ios":false,"javascript":false}}
;
		bouncex.tag = 'tag3';
		bouncex.$ = window.jQuery;
		bouncex.env = 'production';
		bouncex.restrictedTlds = {"casl":{"ca":1},"gdpr":{"ad":1,"al":1,"at":1,"ax":1,"ba":1,"be":1,"bg":1,"by":1,"xn--90ais":1,"ch":1,"cy":1,"cz":1,"de":1,"dk":1,"ee":1,"es":1,"eu":1,"fi":1,"fo":1,"fr":1,"uk":1,"gb":1,"gg":1,"gi":1,"gr":1,"hr":1,"hu":1,"ie":1,"im":1,"is":1,"it":1,"je":1,"li":1,"lt":1,"lu":1,"lv":1,"mc":1,"md":1,"me":1,"mk":1,"xn--d1al":1,"mt":1,"nl":1,"no":1,"pl":1,"pt":1,"ro":1,"rs":1,"xn--90a3ac":1,"ru":1,"su":1,"xn--p1ai":1,"se":1,"si":1,"sj":1,"sk":1,"sm":1,"ua":1,"xn--j1amh":1,"va":1,"tr":1}};
		bouncex.assets = {"creativesBaseStyles":"d63dbc50"};
		bouncex.push = function(pushData) {
			bouncex.pushedData.push(pushData);
		}
		var script = document.createElement('script');
		script.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/ijs_all_modules_f13502cfb3685afd7a6372b8afff781f.js');

		document.body.appendChild(script);
	}


}
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", bxBootstrap);
} else {
	bxBootstrap();
}})();