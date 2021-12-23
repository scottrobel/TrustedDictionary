function init(){
	// converts all div IDs to vars lol
	var width = 728;
	var height = 90;
	var timeline;
	
	
	// 6 creative versions: acquisition, acquisitionfam, retarg, refill, bts, alt
	var creative = myFT.instantAds.creative.toLowerCase();

	IDsToVars();

	
	// POPULATE IMAGES
	insertImage(logo_w, myFT.instantAds.logo_w, myFT.instantAds.logo_w_style, true);
	insertImage(logo_b, myFT.instantAds.logo_b, myFT.instantAds.logo_b_style, true);
	insertImage(router, myFT.instantAds.router, myFT.instantAds.router_style, true);
	insertImage(routerBG, myFT.instantAds.routerBG, myFT.instantAds.routerBG_style, true);
	insertImage(card, myFT.instantAds.card, myFT.instantAds.card_style, true);
	insertImage(card2, myFT.instantAds.card, myFT.instantAds.card_style, true);
	insertImage(offerTag, myFT.instantAds.offerTag, myFT.instantAds.offerTag_style, true);
	insertImage(whiteBG, myFT.instantAds.whiteBG, myFT.instantAds.whiteBG_style, true);

	// POPULATE COPY( and their styling if declared in manifest.js )
	insertCopy(f1_copy, myFT.instantAds.f1_copy, myFT.instantAds.f1_copy_style);
	insertCopy(f2_copy, myFT.instantAds.f2_copy, myFT.instantAds.f2_copy_style);
	insertCopy(f2_caption, myFT.instantAds.f2_caption, myFT.instantAds.f2_caption_style);
	insertCopy(f3_copy, myFT.instantAds.f3_copy, myFT.instantAds.f3_copy_style);
	insertCopy(f4_copy, myFT.instantAds.f4_copy, myFT.instantAds.f4_copy_style);
	insertCopy(disclaimer, myFT.instantAds.disclaimer, myFT.instantAds.disclaimer_style);

	insertCopy(offer_sideBar, myFT.instantAds.offer_sideBar, myFT.instantAds.offer_sideBar_style);
	insertCopy(offer_title, myFT.instantAds.offer_title, myFT.instantAds.offer_title_style);
	insertCopy(offer_dollarSign, myFT.instantAds.offer_dollarSign, myFT.instantAds.offer_dollarSign_style);
	insertCopy(offer_price, myFT.instantAds.offer_price, myFT.instantAds.offer_price_style);
	insertCopy(offer_cents, myFT.instantAds.offer_cents, myFT.instantAds.offer_cents_style);
	insertCopy(offer_terms, myFT.instantAds.offer_terms, myFT.instantAds.offer_terms_style);
	insertCopy(offer_agree, myFT.instantAds.offer_agree, myFT.instantAds.offer_agree_style);
	insertCopy(offer_blurb, myFT.instantAds.offer_blurb, myFT.instantAds.offer_blurb_style);
	
	insertCopy(ctaCopy, myFT.instantAds.ctaCopy, myFT.instantAds.ctaCopy_style);
	
	
	wrapper.className = 'show';
	initClickTag();

	myFT.on("load", function(){
		initAnimation();
		startAnimation();
	});
	
	function initAnimation() {

		timeline = new TimelineMax( {
			delay:.2,
			onComplete: onAnimationComplete
		} );

		timeline.pause();

		TweenMax.set([f2_copy, f2_caption, f4_copy, offer, offer2,  logo_b, ctaBox, disclaimer], {alpha:0});
		TweenMax.set(routerBG, {alpha:0});
		TweenMax.set(whiteBG, {alpha:1});
		TweenMax.set(card, {y:height});
		TweenMax.set([f3_copy, whiteBG], {y:"-=" + height});
		TweenMax.set(bar, {x:372, y:6, scaleY:0, transformOrigin:"50% 50%"});
		TweenMax.set([offer_agree], {x:"+=" + (width/2)});
		TweenMax.set([offerTag], {x:"-=" + (width/2)});
		TweenMax.set(card2, {x:4 + (width/2), y:-2, scale:1});
		TweenMax.set(offer2, {x:373});
		TweenMax.set(offer_blurb, {x:"-=" + (width/2)});
		TweenMax.set([f1_copy], {y:"+=" + height});

		timeline.add([

			// f1
			TweenMax.from (router, 0.6, {y:90}),
			TweenMax.to(f1_copy, .6, {y:"-=" + height, ease:Cubic.easeInOut, delay:.6}),
			TweenMax.to(routerBG, .6, {alpha:1, ease:Linear.easeNone, yoyo:true, repeat:6, repeatDelay:.6, delay:.6}),

			// f2
			TweenMax.to(f1_copy, .6, {alpha:0, ease:Cubic.easeInOut, delay:2.6}),
			TweenMax.to([f2_copy, f2_caption], .6, {alpha:1, ease:Cubic.easeInOut, delay:2.8}),

			// f3
			TweenMax.to(logo_b, .6, {alpha:1, ease:Cubic.easeInOut, delay:5.6}),
			TweenMax.to([f2_copy, f2_caption], .6, {alpha:0, ease:Cubic.easeInOut, delay:5.6}),
			TweenMax.to([routerBG, router], .6, {y:"+=" + height, ease:Cubic.easeInOut, delay:5.6}),
			TweenMax.to([whiteBG], .6, {y:"+=" + height, ease:Cubic.easeInOut, delay:5.6}),
			TweenMax.to(card, .6, {y:"-=" + height, ease:Cubic.easeInOut, delay:5.7}),
			TweenMax.to(f3_copy, .6, {y:"+=" + height, ease:Cubic.easeInOut, delay:5.7}),
			// TweenMax.addPause(),
			// f4
			TweenMax.set([offer, offer2], {alpha:1, delay:7.9}),
			TweenMax.to([f3_copy], .4, {y:"+=" + height, ease:Cubic.easeInOut, delay:7.9}),
			TweenMax.to([card], .4, {y:"-=" + height, ease:Cubic.easeInOut, delay:7.9}),
			

			TweenMax.to(f4_copy, .6, {alpha:1, ease:Cubic.easeInOut, delay:7.9}),
			TweenMax.to(bar, .6, {scaleY:1, ease:Cubic.easeInOut, delay:8.1}),

			TweenMax.to([offer_agree], .7, {x:278, ease:Cubic.easeInOut, delay:8.2}),
			TweenMax.to([offerTag], .7, {x:"+=" + (width/2), ease:Cubic.easeInOut, delay:8.2}),
			TweenMax.to(card2, .7, {x:57, ease:Cubic.easeInOut, delay:8.2}),
			TweenMax.to(offer_blurb, .7, {x:"+=" + (width/2), ease:Cubic.easeInOut, delay:8.2}),

			TweenMax.to(ctaBox, .6, {alpha:1, ease:Cubic.easeInOut, delay:8.9}),
			TweenMax.to(disclaimer, .6, {alpha:1, ease:Cubic.easeInOut, delay:9}),
			



		])


	};

	function IDsToVars(){
		var allElements = document.getElementsByTagName("*");

		for (var q = 0; q<allElements.length; q++){
			var el = allElements[q];
			if (el.id){
				window[el.id]=document.getElementById(el.id);
				el.style.position = "absolute";
				
			}
		}
	};

	function initClickTag () {

		myFT.applyClickTag(wrapper, 1);

		// wrapper.onmouseover = function(){
		// 	if(endFrameReached === true){
		// 		TweenMax.to(ctaOver, .1, {alpha:1});
		// 	}
		// };

		// wrapper.onmouseout = function(){
		// 	TweenMax.to(ctaOver, .1, {alpha:0});
		// }

	};

	function insertCopy(_target, _copy, _style){

		var _breakStr = _style.split(',');
		var _len = _breakStr.length;

		_target.innerHTML = _copy;

		var _styleValue;

		for(var i = 0; i < _len; i ++){

			var _a;

			if(_target === ctaCopy){

				if(_breakStr[i].search('posX:') > -1){

					_a = _breakStr[i].indexOf(':');
					_styleValue = _breakStr[i].slice(_a + 1);
					//_target.style.left = _styleValue + 'px';
					TweenMax.set(_target, {x:parseInt(_styleValue)})

				}else if(_breakStr[i].search('posY:') > -1){
					
					_a = _breakStr[i].indexOf(':');
					_styleValue = _breakStr[i].slice(_a + 1);
					//_target.style.top = _styleValue + 'px';
					TweenMax.set(_target, {y:parseInt(_styleValue)})
					
				
				}

			}else{

				if(_breakStr[i].search('posX:') > -1){

					_a = _breakStr[i].indexOf(':');
					_styleValue = _breakStr[i].slice(_a + 1);
					//_target.style.left = _styleValue + 'px';
					TweenMax.set([_target], {x:parseInt(_styleValue)});
					

				}else if(_breakStr[i].search('posY:') > -1){
					
					_a = _breakStr[i].indexOf(':');
					_styleValue = _breakStr[i].slice(_a + 1);
					//_target.style.top = _styleValue + 'px';
					TweenMax.set(_target, {y:parseInt(_styleValue)})
				
				}

			}

			if(_breakStr[i].search('fontSize:') > -1){
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.fontSize = _styleValue + "px";
			
			}else if(_breakStr[i].search('lineHeight:') > -1){
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.lineHeight = _styleValue + "px";
			
			}else if(_breakStr[i].search('width:') > -1){
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.width = _styleValue + 'px';
			
			}else if(_breakStr[i].search('height:') > -1){
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.height = _styleValue + 'px';
			
			}else if(_breakStr[i].search('fontColor:') > -1){
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.color = _styleValue;
			
			}else if(_breakStr[i].search('shadow:') > -1){
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.textShadow = _styleValue;
			
			}else if(_breakStr[i].search('bgColor:') > -1){
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.backgroundColor = _styleValue;
			
			}else if(_breakStr[i].search('letterSpacing') > -1){

				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.letterSpacing = _styleValue + 'px';

			}else if(_breakStr[i].search('textAlign') > -1){

				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.textAlign = _styleValue;
			}

		}

	}

	function insertImage(_target, _img, _imgStyle, _isBackground){
		if(_isBackground === true){
			// _target.style.width = width + 'px';
			// _target.style.height = height + 'px';
			_target.style.backgroundSize = 'contain';
			_target.style.backgroundImage = "url('" + _img + "')";
		}else{
			_target.innerHTML = '<img src="' + _img + '" />';
		}

		var _img_breakStr = _imgStyle.split(',');
		var _img_len = _img_breakStr.length;

		var _img_styleValue;

		for(var i = 0; i < _img_len; i ++){

			var _a;

			if(_img_breakStr[i].search('scale:') > -1){
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				TweenMax.set(_target, {scale:_img_styleValue});
			
			}else if(_img_breakStr[i].search('posX:') > -1){
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				TweenMax.set(_target, {x:_img_styleValue});
				
			}else if(_img_breakStr[i].search('posY:') > -1){
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				TweenMax.set(_target, {y:_img_styleValue});

			}else if(_img_breakStr[i].search('width:') > -1){
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				TweenMax.set(_target, {width:_img_styleValue});

			}else if(_img_breakStr[i].search('height:') > -1){
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				TweenMax.set(_target, {height:_img_styleValue});

			}

		}
			
	}

	function startAnimation(){
		// Code for animation		
		timeline.play();
	};

	function onAnimationComplete(){
		// Log duration of timeline
		console.log( 'Animation Duration: ' + timeline.time() + 's' );
		endFrameReached = true;
	};

	function resetPhone(_phone, _x, _y, _rot, _scale){
		TweenMax.set(_phone, {x:_x, y:_y, rotation:_rot, scale:_scale});

	}

}