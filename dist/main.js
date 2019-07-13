/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/magnific-popup/dist/jquery.magnific-popup.js":
/*!*******************************************************************!*\
  !*** ./node_modules/magnific-popup/dist/jquery.magnific-popup.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;(function (factory) { 
if (true) { 
 // AMD. Register as an anonymous module. 
 !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); 
 } else {} 
 }(function($) { 

/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars 
 */
/*jshint -W079 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			/*jshint -W020 */
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true; 
		}
			
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
				
		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) { 
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		

		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();

		
		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);
		
		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;
		
		// Wait for next cycle to allow CSS transition
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });

		mfp.currItem = item;

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}

		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;

		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;

		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},


	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		}

		var eName = 'click.magnificPopup';
		options.mainEl = el;

		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}

		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( $('<img>').attr('src', value).attr('class', el.attr('class')) );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);
		this.modules.push(name);
	},

	defaults: {

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

		disableOn: 0,

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened

		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true,

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,

		removalDelay: 0,

		prependTo: null,

		fixedContentPos: 'auto',

		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...',

		autoFocusLast: true

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);

		/*
		 * As Zepto doesn't support .data() method for objects
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};

/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder,
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			$(document.body).removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur) {
				$(document.body).addClass(_ajaxCur);
			}

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});

/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined)
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title',
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					$(document.body).addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					$(document.body).removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {

				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}

				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');

					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');

							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');

						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			}

			return template;
		}
	}
});

/*>>image*/

/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;

			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image);

					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}

					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');

					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*

			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',

	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) {
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com',
				id: 'v=',
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					}
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;

			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});

			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery';

			mfp.direction = true; // true - next, false - prev

			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					arrowLeft.click(function() {
						mfp.prev();
					});
					arrowRight.click(function() {
						mfp.next();
					});

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		},
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/
 _checkInstance(); }));

/***/ }),

/***/ "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js":
/*!**************************************************************************!*\
  !*** ./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * ScrollMagic v2.0.7 (2019-05-07)
 * The javascript library for magical scroll interactions.
 * (c) 2019 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.7
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
/**
 * @namespace ScrollMagic
 */
(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function () {
	"use strict";

	var ScrollMagic = function () {
		_util.log(2, '(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use \'new ScrollMagic.Controller()\' to create a new controller instance. Use \'new ScrollMagic.Scene()\' to instance a scene.');
	};

	ScrollMagic.version = "2.0.7";

	// TODO: temporary workaround for chrome's scroll jitter bug
	window.addEventListener("mousewheel", function () {});

	// global const
	var PIN_SPACER_ATTRIBUTE = "data-scrollmagic-pin-spacer";

	/**
	 * The main class that is needed once per scroll container.
	 *
	 * @class
	 *
	 * @example
	 * // basic initialization
	 * var controller = new ScrollMagic.Controller();
	 *
	 * // passing options
	 * var controller = new ScrollMagic.Controller({container: "#myContainer", loglevel: 3});
	 *
	 * @param {object} [options] - An object containing one or more options for the controller.
	 * @param {(string|object)} [options.container=window] - A selector, DOM object that references the main container for scrolling.
	 * @param {boolean} [options.vertical=true] - Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
	 * @param {object} [options.globalSceneOptions={}] - These options will be passed to every Scene that is added to the controller using the addScene method. For more information on Scene options see {@link ScrollMagic.Scene}.
	 * @param {number} [options.loglevel=2] Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
											 ** `0` => silent
											 ** `1` => errors
											 ** `2` => errors, warnings
											 ** `3` => errors, warnings, debuginfo
	 * @param {boolean} [options.refreshInterval=100] - Some changes don't call events by default, like changing the container size or moving a scene trigger element.  
	 																										 This interval polls these parameters to fire the necessary events.  
	 																										 If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
	 *
	 */
	ScrollMagic.Controller = function (options) {
		/*
		 * ----------------------------------------------------------------
		 * settings
		 * ----------------------------------------------------------------
		 */
		var
			NAMESPACE = 'ScrollMagic.Controller',
			SCROLL_DIRECTION_FORWARD = 'FORWARD',
			SCROLL_DIRECTION_REVERSE = 'REVERSE',
			SCROLL_DIRECTION_PAUSED = 'PAUSED',
			DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;

		/*
		 * ----------------------------------------------------------------
		 * private vars
		 * ----------------------------------------------------------------
		 */
		var
			Controller = this,
			_options = _util.extend({}, DEFAULT_OPTIONS, options),
			_sceneObjects = [],
			_updateScenesOnNextCycle = false, // can be boolean (true => all scenes) or an array of scenes to be updated
			_scrollPos = 0,
			_scrollDirection = SCROLL_DIRECTION_PAUSED,
			_isDocument = true,
			_viewPortSize = 0,
			_enabled = true,
			_updateTimeout,
			_refreshTimeout;

		/*
		 * ----------------------------------------------------------------
		 * private functions
		 * ----------------------------------------------------------------
		 */

		/**
		 * Internal constructor function of the ScrollMagic Controller
		 * @private
		 */
		var construct = function () {
			for (var key in _options) {
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			_options.container = _util.get.elements(_options.container)[0];
			// check ScrollContainer
			if (!_options.container) {
				log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
				throw NAMESPACE + " init failed."; // cancel
			}
			_isDocument = _options.container === window || _options.container === document.body || !document.body.contains(_options.container);
			// normalize to window
			if (_isDocument) {
				_options.container = window;
			}
			// update container size immediately
			_viewPortSize = getViewportSize();
			// set event handlers
			_options.container.addEventListener("resize", onChange);
			_options.container.addEventListener("scroll", onChange);

			var ri = parseInt(_options.refreshInterval, 10);
			_options.refreshInterval = _util.type.Number(ri) ? ri : DEFAULT_OPTIONS.refreshInterval;
			scheduleRefresh();

			log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
		};

		/**
		 * Schedule the next execution of the refresh function
		 * @private
		 */
		var scheduleRefresh = function () {
			if (_options.refreshInterval > 0) {
				_refreshTimeout = window.setTimeout(refresh, _options.refreshInterval);
			}
		};

		/**
		 * Default function to get scroll pos - overwriteable using `Controller.scrollPos(newFunction)`
		 * @private
		 */
		var getScrollPos = function () {
			return _options.vertical ? _util.get.scrollTop(_options.container) : _util.get.scrollLeft(_options.container);
		};

		/**
		 * Returns the current viewport Size (width vor horizontal, height for vertical)
		 * @private
		 */
		var getViewportSize = function () {
			return _options.vertical ? _util.get.height(_options.container) : _util.get.width(_options.container);
		};

		/**
		 * Default function to set scroll pos - overwriteable using `Controller.scrollTo(newFunction)`
		 * Make available publicly for pinned mousewheel workaround.
		 * @private
		 */
		var setScrollPos = this._setScrollPos = function (pos) {
			if (_options.vertical) {
				if (_isDocument) {
					window.scrollTo(_util.get.scrollLeft(), pos);
				} else {
					_options.container.scrollTop = pos;
				}
			} else {
				if (_isDocument) {
					window.scrollTo(pos, _util.get.scrollTop());
				} else {
					_options.container.scrollLeft = pos;
				}
			}
		};

		/**
		 * Handle updates in cycles instead of on scroll (performance)
		 * @private
		 */
		var updateScenes = function () {
			if (_enabled && _updateScenesOnNextCycle) {
				// determine scenes to update
				var scenesToUpdate = _util.type.Array(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0);
				// reset scenes
				_updateScenesOnNextCycle = false;
				var oldScrollPos = _scrollPos;
				// update scroll pos now instead of onChange, as it might have changed since scheduling (i.e. in-browser smooth scroll)
				_scrollPos = Controller.scrollPos();
				var deltaScroll = _scrollPos - oldScrollPos;
				if (deltaScroll !== 0) { // scroll position changed?
					_scrollDirection = (deltaScroll > 0) ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_REVERSE;
				}
				// reverse order of scenes if scrolling reverse
				if (_scrollDirection === SCROLL_DIRECTION_REVERSE) {
					scenesToUpdate.reverse();
				}
				// update scenes
				scenesToUpdate.forEach(function (scene, index) {
					log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
					scene.update(true);
				});
				if (scenesToUpdate.length === 0 && _options.loglevel >= 3) {
					log(3, "updating 0 Scenes (nothing added to controller)");
				}
			}
		};

		/**
		 * Initializes rAF callback
		 * @private
		 */
		var debounceUpdate = function () {
			_updateTimeout = _util.rAF(updateScenes);
		};

		/**
		 * Handles Container changes
		 * @private
		 */
		var onChange = function (e) {
			log(3, "event fired causing an update:", e.type);
			if (e.type == "resize") {
				// resize
				_viewPortSize = getViewportSize();
				_scrollDirection = SCROLL_DIRECTION_PAUSED;
			}
			// schedule update
			if (_updateScenesOnNextCycle !== true) {
				_updateScenesOnNextCycle = true;
				debounceUpdate();
			}
		};

		var refresh = function () {
			if (!_isDocument) {
				// simulate resize event. Only works for viewport relevant param (performance)
				if (_viewPortSize != getViewportSize()) {
					var resizeEvent;
					try {
						resizeEvent = new Event('resize', {
							bubbles: false,
							cancelable: false
						});
					} catch (e) { // stupid IE
						resizeEvent = document.createEvent("Event");
						resizeEvent.initEvent("resize", false, false);
					}
					_options.container.dispatchEvent(resizeEvent);
				}
			}
			_sceneObjects.forEach(function (scene, index) { // refresh all scenes
				scene.refresh();
			});
			scheduleRefresh();
		};

		/**
		 * Send a debug message to the console.
		 * provided publicly with _log for plugins
		 * @private
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};
		// for scenes we have getters for each option, but for the controller we don't, so we need to make it available externally for plugins
		this._options = _options;

		/**
		 * Sort scenes in ascending order of their start offset.
		 * @private
		 *
		 * @param {array} ScenesArray - an array of ScrollMagic Scenes that should be sorted
		 * @return {array} The sorted array of Scenes.
		 */
		var sortScenes = function (ScenesArray) {
			if (ScenesArray.length <= 1) {
				return ScenesArray;
			} else {
				var scenes = ScenesArray.slice(0);
				scenes.sort(function (a, b) {
					return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
				});
				return scenes;
			}
		};

		/**
		 * ----------------------------------------------------------------
		 * public functions
		 * ----------------------------------------------------------------
		 */

		/**
		 * Add one ore more scene(s) to the controller.  
		 * This is the equivalent to `Scene.addTo(controller)`.
		 * @public
		 * @example
		 * // with a previously defined scene
		 * controller.addScene(scene);
		 *
		 * // with a newly created scene.
		 * controller.addScene(new ScrollMagic.Scene({duration : 0}));
		 *
		 * // adding multiple scenes
		 * controller.addScene([scene, scene2, new ScrollMagic.Scene({duration : 0})]);
		 *
		 * @param {(ScrollMagic.Scene|array)} newScene - ScrollMagic Scene or Array of Scenes to be added to the controller.
		 * @return {Controller} Parent object for chaining.
		 */
		this.addScene = function (newScene) {
			if (_util.type.Array(newScene)) {
				newScene.forEach(function (scene, index) {
					Controller.addScene(scene);
				});
			} else if (newScene instanceof ScrollMagic.Scene) {
				if (newScene.controller() !== Controller) {
					newScene.addTo(Controller);
				} else if (_sceneObjects.indexOf(newScene) < 0) {
					// new scene
					_sceneObjects.push(newScene); // add to array
					_sceneObjects = sortScenes(_sceneObjects); // sort
					newScene.on("shift.controller_sort", function () { // resort whenever scene moves
						_sceneObjects = sortScenes(_sceneObjects);
					});
					// insert Global defaults.
					for (var key in _options.globalSceneOptions) {
						if (newScene[key]) {
							newScene[key].call(newScene, _options.globalSceneOptions[key]);
						}
					}
					log(3, "adding Scene (now " + _sceneObjects.length + " total)");
				}
			} else {
				log(1, "ERROR: invalid argument supplied for '.addScene()'");
			}
			return Controller;
		};

		/**
		 * Remove one ore more scene(s) from the controller.  
		 * This is the equivalent to `Scene.remove()`.
		 * @public
		 * @example
		 * // remove a scene from the controller
		 * controller.removeScene(scene);
		 *
		 * // remove multiple scenes from the controller
		 * controller.removeScene([scene, scene2, scene3]);
		 *
		 * @param {(ScrollMagic.Scene|array)} Scene - ScrollMagic Scene or Array of Scenes to be removed from the controller.
		 * @returns {Controller} Parent object for chaining.
		 */
		this.removeScene = function (Scene) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.removeScene(scene);
				});
			} else {
				var index = _sceneObjects.indexOf(Scene);
				if (index > -1) {
					Scene.off("shift.controller_sort");
					_sceneObjects.splice(index, 1);
					log(3, "removing Scene (now " + _sceneObjects.length + " left)");
					Scene.remove();
				}
			}
			return Controller;
		};

		/**
	 * Update one ore more scene(s) according to the scroll position of the container.  
	 * This is the equivalent to `Scene.update()`.  
	 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
	 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.  
	 * _**Note:** This method gets called constantly whenever Controller detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
	 * @public
	 * @example
	 * // update a specific scene on next cycle
 	 * controller.updateScene(scene);
 	 *
	 * // update a specific scene immediately
	 * controller.updateScene(scene, true);
 	 *
	 * // update multiple scenes scene on next cycle
	 * controller.updateScene([scene1, scene2, scene3]);
	 *
	 * @param {ScrollMagic.Scene} Scene - ScrollMagic Scene or Array of Scenes that is/are supposed to be updated.
	 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle.  
	 										  This is useful when changing multiple properties of the scene - this way it will only be updated once all new properties are set (updateScenes).
	 * @return {Controller} Parent object for chaining.
	 */
		this.updateScene = function (Scene, immediately) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.updateScene(scene, immediately);
				});
			} else {
				if (immediately) {
					Scene.update(true);
				} else if (_updateScenesOnNextCycle !== true && Scene instanceof ScrollMagic.Scene) { // if _updateScenesOnNextCycle is true, all connected scenes are already scheduled for update
					// prep array for next update cycle
					_updateScenesOnNextCycle = _updateScenesOnNextCycle || [];
					if (_updateScenesOnNextCycle.indexOf(Scene) == -1) {
						_updateScenesOnNextCycle.push(Scene);
					}
					_updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle); // sort
					debounceUpdate();
				}
			}
			return Controller;
		};

		/**
		 * Updates the controller params and calls updateScene on every scene, that is attached to the controller.  
		 * See `Controller.updateScene()` for more information about what this means.  
		 * In most cases you will not need this function, as it is called constantly, whenever ScrollMagic detects a state change event, like resize or scroll.  
		 * The only application for this method is when ScrollMagic fails to detect these events.  
		 * One application is with some external scroll libraries (like iScroll) that move an internal container to a negative offset instead of actually scrolling. In this case the update on the controller needs to be called whenever the child container's position changes.
		 * For this case there will also be the need to provide a custom function to calculate the correct scroll position. See `Controller.scrollPos()` for details.
		 * @public
		 * @example
		 * // update the controller on next cycle (saves performance due to elimination of redundant updates)
		 * controller.update();
		 *
		 * // update the controller immediately
		 * controller.update(true);
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance)
		 * @return {Controller} Parent object for chaining.
		 */
		this.update = function (immediately) {
			onChange({
				type: "resize"
			}); // will update size and set _updateScenesOnNextCycle to true
			if (immediately) {
				updateScenes();
			}
			return Controller;
		};

		/**
		 * Scroll to a numeric scroll offset, a DOM element, the start of a scene or provide an alternate method for scrolling.  
		 * For vertical controllers it will change the top scroll offset and for horizontal applications it will change the left offset.
		 * @public
		 *
		 * @since 1.1.0
		 * @example
		 * // scroll to an offset of 100
		 * controller.scrollTo(100);
		 *
		 * // scroll to a DOM element
		 * controller.scrollTo("#anchor");
		 *
		 * // scroll to the beginning of a scene
		 * var scene = new ScrollMagic.Scene({offset: 200});
		 * controller.scrollTo(scene);
		 *
		 * // define a new scroll position modification function (jQuery animate instead of jump)
		 * controller.scrollTo(function (newScrollPos) {
		 *	$("html, body").animate({scrollTop: newScrollPos});
		 * });
		 * controller.scrollTo(100); // call as usual, but the new function will be used instead
		 *
		 * // define a new scroll function with an additional parameter
		 * controller.scrollTo(function (newScrollPos, message) {
		 *  console.log(message);
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter to the defined custom function
		 * controller.scrollTo(100, "my message");
		 *
		 * // define a new scroll function with an additional parameter containing multiple variables
		 * controller.scrollTo(function (newScrollPos, options) {
		 *  someGlobalVar = options.a + options.b;
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter containing multiple options
		 * controller.scrollTo(100, {a: 1, b: 2});
		 *
		 * // define a new scroll function with a callback supplied as an additional parameter
		 * controller.scrollTo(function (newScrollPos, callback) {
		 *	$(this).animate({scrollTop: newScrollPos}, 400, "swing", callback);
		 * });
		 * // call as usual, but supply an extra parameter, which is used as a callback in the previously defined custom scroll function
		 * controller.scrollTo(100, function() {
		 *	console.log("scroll has finished.");
		 * });
		 *
		 * @param {mixed} scrollTarget - The supplied argument can be one of these types:
		 * 1. `number` -> The container will scroll to this new scroll offset.
		 * 2. `string` or `object` -> Can be a selector or a DOM object.  
		 *  The container will scroll to the position of this element.
		 * 3. `ScrollMagic Scene` -> The container will scroll to the start of this scene.
		 * 4. `function` -> This function will be used for future scroll position modifications.  
		 *  This provides a way for you to change the behaviour of scrolling and adding new behaviour like animation. The function receives the new scroll position as a parameter and a reference to the container element using `this`.  
		 *  It may also optionally receive an optional additional parameter (see below)  
		 *  _**NOTE:**  
		 *  All other options will still work as expected, using the new function to scroll._
		 * @param {mixed} [additionalParameter] - If a custom scroll function was defined (see above 4.), you may want to supply additional parameters to it, when calling it. You can do this using this parameter – see examples for details. Please note, that this parameter will have no effect, if you use the default scrolling function.
		 * @returns {Controller} Parent object for chaining.
		 */
		this.scrollTo = function (scrollTarget, additionalParameter) {
			if (_util.type.Number(scrollTarget)) { // excecute
				setScrollPos.call(_options.container, scrollTarget, additionalParameter);
			} else if (scrollTarget instanceof ScrollMagic.Scene) { // scroll to scene
				if (scrollTarget.controller() === Controller) { // check if the controller is associated with this scene
					Controller.scrollTo(scrollTarget.scrollOffset(), additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
				}
			} else if (_util.type.Function(scrollTarget)) { // assign new scroll function
				setScrollPos = scrollTarget;
			} else { // scroll to element
				var elem = _util.get.elements(scrollTarget)[0];
				if (elem) {
					// if parent is pin spacer, use spacer position instead so correct start position is returned for pinned elements.
					while (elem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
						elem = elem.parentNode;
					}

					var
						param = _options.vertical ? "top" : "left", // which param is of interest ?
						containerOffset = _util.get.offset(_options.container), // container position is needed because element offset is returned in relation to document, not in relation to container.
						elementOffset = _util.get.offset(elem);

					if (!_isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
						containerOffset[param] -= Controller.scrollPos();
					}

					Controller.scrollTo(elementOffset[param] - containerOffset[param], additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", scrollTarget);
				}
			}
			return Controller;
		};

		/**
		 * **Get** the current scrollPosition or **Set** a new method to calculate it.  
		 * -> **GET**:
		 * When used as a getter this function will return the current scroll position.  
		 * To get a cached value use Controller.info("scrollPos"), which will be updated in the update cycle.  
		 * For vertical controllers it will return the top scroll offset and for horizontal applications it will return the left offset.
		 *
		 * -> **SET**:
		 * When used as a setter this method prodes a way to permanently overwrite the controller's scroll position calculation.  
		 * A typical usecase is when the scroll position is not reflected by the containers scrollTop or scrollLeft values, but for example by the inner offset of a child container.  
		 * Moving a child container inside a parent is a commonly used method for several scrolling frameworks, including iScroll.  
		 * By providing an alternate calculation function you can make sure ScrollMagic receives the correct scroll position.  
		 * Please also bear in mind that your function should return y values for vertical scrolls an x for horizontals.
		 *
		 * To change the current scroll position please use `Controller.scrollTo()`.
		 * @public
		 *
		 * @example
		 * // get the current scroll Position
		 * var scrollPos = controller.scrollPos();
		 *
		 * // set a new scroll position calculation method
		 * controller.scrollPos(function () {
		 *	return this.info("vertical") ? -mychildcontainer.y : -mychildcontainer.x
		 * });
		 *
		 * @param {function} [scrollPosMethod] - The function to be used for the scroll position calculation of the container.
		 * @returns {(number|Controller)} Current scroll position or parent object for chaining.
		 */
		this.scrollPos = function (scrollPosMethod) {
			if (!arguments.length) { // get
				return getScrollPos.call(Controller);
			} else { // set
				if (_util.type.Function(scrollPosMethod)) {
					getScrollPos = scrollPosMethod;
				} else {
					log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
				}
			}
			return Controller;
		};

		/**
		 * **Get** all infos or one in particular about the controller.
		 * @public
		 * @example
		 * // returns the current scroll position (number)
		 * var scrollPos = controller.info("scrollPos");
		 *
		 * // returns all infos as an object
		 * var infos = controller.info();
		 *
		 * @param {string} [about] - If passed only this info will be returned instead of an object containing all.  
		 							 Valid options are:
		 							 ** `"size"` => the current viewport size of the container
		 							 ** `"vertical"` => true if vertical scrolling, otherwise false
		 							 ** `"scrollPos"` => the current scroll position
		 							 ** `"scrollDirection"` => the last known direction of the scroll
		 							 ** `"container"` => the container element
		 							 ** `"isDocument"` => true if container element is the document.
		 * @returns {(mixed|object)} The requested info(s).
		 */
		this.info = function (about) {
			var values = {
				size: _viewPortSize, // contains height or width (in regard to orientation);
				vertical: _options.vertical,
				scrollPos: _scrollPos,
				scrollDirection: _scrollDirection,
				container: _options.container,
				isDocument: _isDocument
			};
			if (!arguments.length) { // get all as an object
				return values;
			} else if (values[about] !== undefined) {
				return values[about];
			} else {
				log(1, "ERROR: option \"" + about + "\" is not available");
				return;
			}
		};

		/**
		 * **Get** or **Set** the current loglevel option value.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var loglevel = controller.loglevel();
		 *
		 * // set a new value
		 * controller.loglevel(3);
		 *
		 * @param {number} [newLoglevel] - The new loglevel setting of the Controller. `[0-3]`
		 * @returns {(number|Controller)} Current loglevel or parent object for chaining.
		 */
		this.loglevel = function (newLoglevel) {
			if (!arguments.length) { // get
				return _options.loglevel;
			} else if (_options.loglevel != newLoglevel) { // set
				_options.loglevel = newLoglevel;
			}
			return Controller;
		};

		/**
		 * **Get** or **Set** the current enabled state of the controller.  
		 * This can be used to disable all Scenes connected to the controller without destroying or removing them.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var enabled = controller.enabled();
		 *
		 * // disable the controller
		 * controller.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the controller `true` or `false`.
		 * @returns {(boolean|Controller)} Current enabled state or parent object for chaining.
		 */
		this.enabled = function (newState) {
			if (!arguments.length) { // get
				return _enabled;
			} else if (_enabled != newState) { // set
				_enabled = !!newState;
				Controller.updateScene(_sceneObjects, true);
			}
			return Controller;
		};

		/**
		 * Destroy the Controller, all Scenes and everything.
		 * @public
		 *
		 * @example
		 * // without resetting the scenes
		 * controller = controller.destroy();
		 *
		 * // with scene reset
		 * controller = controller.destroy(true);
		 *
		 * @param {boolean} [resetScenes=false] - If `true` the pins and tweens (if existent) of all scenes will be reset.
		 * @returns {null} Null to unset handler variables.
		 */
		this.destroy = function (resetScenes) {
			window.clearTimeout(_refreshTimeout);
			var i = _sceneObjects.length;
			while (i--) {
				_sceneObjects[i].destroy(resetScenes);
			}
			_options.container.removeEventListener("resize", onChange);
			_options.container.removeEventListener("scroll", onChange);
			_util.cAF(_updateTimeout);
			log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
			return null;
		};

		// INIT
		construct();
		return Controller;
	};

	// store pagewide controller options
	var CONTROLLER_OPTIONS = {
		defaults: {
			container: window,
			vertical: true,
			globalSceneOptions: {},
			loglevel: 2,
			refreshInterval: 100
		}
	};
	/*
	 * method used to add an option to ScrollMagic Scenes.
	 */
	ScrollMagic.Controller.addOption = function (name, defaultValue) {
		CONTROLLER_OPTIONS.defaults[name] = defaultValue;
	};
	// instance extension function for plugins
	ScrollMagic.Controller.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Controller = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Controller, oldClass); // copy properties
		ScrollMagic.Controller.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Controller.prototype.constructor = ScrollMagic.Controller; // restore constructor
	};


	/**
	 * A Scene defines where the controller should react and how.
	 *
	 * @class
	 *
	 * @example
	 * // create a standard scene and add it to a controller
	 * new ScrollMagic.Scene()
	 *		.addTo(controller);
	 *
	 * // create a scene with custom options and assign a handler to it.
	 * var scene = new ScrollMagic.Scene({
	 * 		duration: 100,
	 *		offset: 200,
	 *		triggerHook: "onEnter",
	 *		reverse: false
	 * });
	 *
	 * @param {object} [options] - Options for the Scene. The options can be updated at any time.  
	 							   Instead of setting the options for each scene individually you can also set them globally in the controller as the controllers `globalSceneOptions` option. The object accepts the same properties as the ones below.  
	 							   When a scene is added to the controller the options defined using the Scene constructor will be overwritten by those set in `globalSceneOptions`.
	 * @param {(number|string|function)} [options.duration=0] - The duration of the scene. 
	 					Please see `Scene.duration()` for details.
	 * @param {number} [options.offset=0] - Offset Value for the Trigger Position. If no triggerElement is defined this will be the scroll distance from the start of the page, after which the scene will start.
	 * @param {(string|object)} [options.triggerElement=null] - Selector or DOM object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
	 * @param {(number|string)} [options.triggerHook="onCenter"] - Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.  
	 															  Can also be defined using a string:
	 															  ** `"onEnter"` => `1`
	 															  ** `"onCenter"` => `0.5`
	 															  ** `"onLeave"` => `0`
	 * @param {boolean} [options.reverse=true] - Should the scene reverse, when scrolling up?
	 * @param {number} [options.loglevel=2] - Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
	 										  ** `0` => silent
	 										  ** `1` => errors
	 										  ** `2` => errors, warnings
	 										  ** `3` => errors, warnings, debuginfo
	 * 
	 */
	ScrollMagic.Scene = function (options) {

		/*
		 * ----------------------------------------------------------------
		 * settings
		 * ----------------------------------------------------------------
		 */

		var
			NAMESPACE = 'ScrollMagic.Scene',
			SCENE_STATE_BEFORE = 'BEFORE',
			SCENE_STATE_DURING = 'DURING',
			SCENE_STATE_AFTER = 'AFTER',
			DEFAULT_OPTIONS = SCENE_OPTIONS.defaults;

		/*
		 * ----------------------------------------------------------------
		 * private vars
		 * ----------------------------------------------------------------
		 */

		var
			Scene = this,
			_options = _util.extend({}, DEFAULT_OPTIONS, options),
			_state = SCENE_STATE_BEFORE,
			_progress = 0,
			_scrollOffset = {
				start: 0,
				end: 0
			}, // reflects the controllers's scroll position for the start and end of the scene respectively
			_triggerPos = 0,
			_enabled = true,
			_durationUpdateMethod,
			_controller;

		/**
		 * Internal constructor function of the ScrollMagic Scene
		 * @private
		 */
		var construct = function () {
			for (var key in _options) { // check supplied options
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			// add getters/setters for all possible options
			for (var optionName in DEFAULT_OPTIONS) {
				addSceneOption(optionName);
			}
			// validate all options
			validateOption();
		};

		/*
		 * ----------------------------------------------------------------
		 * Event Management
		 * ----------------------------------------------------------------
		 */

		var _listeners = {};
		/**
		 * Scene start event.  
		 * Fires whenever the scroll position its the starting point of the scene.  
		 * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#start
		 *
		 * @example
		 * scene.on("start", function (event) {
		 * 	console.log("Hit start point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene end event.  
		 * Fires whenever the scroll position its the ending point of the scene.  
		 * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#end
		 *
		 * @example
		 * scene.on("end", function (event) {
		 * 	console.log("Hit end point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene enter event.  
		 * Fires whenever the scene enters the "DURING" state.  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#enter
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 * 	console.log("Scene entered.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene - always `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene leave event.  
		 * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#leave
		 *
		 * @example
		 * scene.on("leave", function (event) {
		 * 	console.log("Scene left.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene update event.  
		 * Fires whenever the scene is updated (but not necessarily changes the progress).
		 *
		 * @event ScrollMagic.Scene#update
		 *
		 * @example
		 * scene.on("update", function (event) {
		 * 	console.log("Scene updated.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
		 * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
		 * @property {number} event.scrollPos - The current scroll position of the container
		 */
		/**
		 * Scene progress event.  
		 * Fires whenever the progress of the scene changes.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#progress
		 *
		 * @example
		 * scene.on("progress", function (event) {
		 * 	console.log("Scene progress changed to " + event.progress);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene change event.  
		 * Fires whenvever a property of the scene is changed.
		 *
		 * @event ScrollMagic.Scene#change
		 *
		 * @example
		 * scene.on("change", function (event) {
		 * 	console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.what - Indicates what value has been changed
		 * @property {mixed} event.newval - The new value of the changed property
		 */
		/**
		 * Scene shift event.  
		 * Fires whenvever the start or end **scroll offset** of the scene change.
		 * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
		 * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
		 * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
		 *
		 * @event ScrollMagic.Scene#shift
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("shift", function (event) {
		 * 	console.log("Scene moved, because the " + event.reason + " has changed.)");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.reason - Indicates why the scene has shifted
		 */
		/**
		 * Scene destroy event.  
		 * Fires whenvever the scene is destroyed.
		 * This can be used to tidy up custom behaviour used in events.
		 *
		 * @event ScrollMagic.Scene#destroy
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 *        // add custom action
		 *        $("#my-elem").left("200");
		 *      })
		 *      .on("destroy", function (event) {
		 *        // reset my element to start position
		 *        if (event.reset) {
		 *          $("#my-elem").left("0");
		 *        }
		 *      });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.reset - Indicates if the destroy method was called with reset `true` or `false`.
		 */
		/**
		 * Scene add event.  
		 * Fires when the scene is added to a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#add
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("add", function (event) {
		 * 	console.log('Scene was added to a new controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.controller - The controller object the scene was added to.
		 */
		/**
		 * Scene remove event.  
		 * Fires when the scene is removed from a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#remove
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("remove", function (event) {
		 * 	console.log('Scene was removed from its controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 */

		/**
		 * Add one ore more event listener.  
		 * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
		 * @method ScrollMagic.Scene#on
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update progress start end enter leave", callback);
		 *
		 * @param {string} names - The name or names of the event the callback should be attached to.
		 * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.on = function (names, callback) {
			if (_util.type.Function(callback)) {
				names = names.trim().split(' ');
				names.forEach(function (fullname) {
					var
						nameparts = fullname.split('.'),
						eventname = nameparts[0],
						namespace = nameparts[1];
					if (eventname != "*") { // disallow wildcards
						if (!_listeners[eventname]) {
							_listeners[eventname] = [];
						}
						_listeners[eventname].push({
							namespace: namespace || '',
							callback: callback
						});
					}
				});
			} else {
				log(1, "ERROR when calling '.on()': Supplied callback for '" + names + "' is not a valid function!");
			}
			return Scene;
		};

		/**
		 * Remove one or more event listener.
		 * @method ScrollMagic.Scene#off
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update", callback);
		 * // remove listeners
		 * scene.off("change update", callback);
		 *
		 * @param {string} names - The name or names of the event that should be removed.
		 * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.off = function (names, callback) {
			if (!names) {
				log(1, "ERROR: Invalid event name supplied.");
				return Scene;
			}
			names = names.trim().split(' ');
			names.forEach(function (fullname, key) {
				var
					nameparts = fullname.split('.'),
					eventname = nameparts[0],
					namespace = nameparts[1] || '',
					removeList = eventname === '*' ? Object.keys(_listeners) : [eventname];
				removeList.forEach(function (remove) {
					var
						list = _listeners[remove] || [],
						i = list.length;
					while (i--) {
						var listener = list[i];
						if (listener && (namespace === listener.namespace || namespace === '*') && (!callback || callback == listener.callback)) {
							list.splice(i, 1);
						}
					}
					if (!list.length) {
						delete _listeners[remove];
					}
				});
			});
			return Scene;
		};

		/**
		 * Trigger an event.
		 * @method ScrollMagic.Scene#trigger
		 *
		 * @example
		 * this.trigger("change");
		 *
		 * @param {string} name - The name of the event that should be triggered.
		 * @param {object} [vars] - An object containing info that should be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.trigger = function (name, vars) {
			if (name) {
				var
					nameparts = name.trim().split('.'),
					eventname = nameparts[0],
					namespace = nameparts[1],
					listeners = _listeners[eventname];
				log(3, 'event fired:', eventname, vars ? "->" : '', vars || '');
				if (listeners) {
					listeners.forEach(function (listener, key) {
						if (!namespace || namespace === listener.namespace) {
							listener.callback.call(Scene, new ScrollMagic.Event(eventname, listener.namespace, Scene, vars));
						}
					});
				}
			} else {
				log(1, "ERROR: Invalid event name supplied.");
			}
			return Scene;
		};

		// set event listeners
		Scene
			.on("change.internal", function (e) {
				if (e.what !== "loglevel" && e.what !== "tweenChanges") { // no need for a scene update scene with these options...
					if (e.what === "triggerElement") {
						updateTriggerElementPosition();
					} else if (e.what === "reverse") { // the only property left that may have an impact on the current scene state. Everything else is handled by the shift event.
						Scene.update();
					}
				}
			})
			.on("shift.internal", function (e) {
				updateScrollOffset();
				Scene.update(); // update scene to reflect new position
			});

		/**
		 * Send a debug message to the console.
		 * @private
		 * but provided publicly with _log for plugins
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};

		/**
		 * Add the scene to a controller.  
		 * This is the equivalent to `Controller.addScene(scene)`.
		 * @method ScrollMagic.Scene#addTo
		 *
		 * @example
		 * // add a scene to a ScrollMagic Controller
		 * scene.addTo(controller);
		 *
		 * @param {ScrollMagic.Controller} controller - The controller to which the scene should be added.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.addTo = function (controller) {
			if (!(controller instanceof ScrollMagic.Controller)) {
				log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller");
			} else if (_controller != controller) {
				// new controller
				if (_controller) { // was associated to a different controller before, so remove it...
					_controller.removeScene(Scene);
				}
				_controller = controller;
				validateOption();
				updateDuration(true);
				updateTriggerElementPosition(true);
				updateScrollOffset();
				_controller.info("container").addEventListener('resize', onContainerResize);
				controller.addScene(Scene);
				Scene.trigger("add", {
					controller: _controller
				});
				log(3, "added " + NAMESPACE + " to controller");
				Scene.update();
			}
			return Scene;
		};

		/**
		 * **Get** or **Set** the current enabled state of the scene.  
		 * This can be used to disable this scene without removing or destroying it.
		 * @method ScrollMagic.Scene#enabled
		 *
		 * @example
		 * // get the current value
		 * var enabled = scene.enabled();
		 *
		 * // disable the scene
		 * scene.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the scene `true` or `false`.
		 * @returns {(boolean|Scene)} Current enabled state or parent object for chaining.
		 */
		this.enabled = function (newState) {
			if (!arguments.length) { // get
				return _enabled;
			} else if (_enabled != newState) { // set
				_enabled = !!newState;
				Scene.update(true);
			}
			return Scene;
		};

		/**
		 * Remove the scene from the controller.  
		 * This is the equivalent to `Controller.removeScene(scene)`.
		 * The scene will not be updated anymore until you readd it to a controller.
		 * To remove the pin or the tween you need to call removeTween() or removePin() respectively.
		 * @method ScrollMagic.Scene#remove
		 * @example
		 * // remove the scene from its controller
		 * scene.remove();
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.remove = function () {
			if (_controller) {
				_controller.info("container").removeEventListener('resize', onContainerResize);
				var tmpParent = _controller;
				_controller = undefined;
				tmpParent.removeScene(Scene);
				Scene.trigger("remove");
				log(3, "removed " + NAMESPACE + " from controller");
			}
			return Scene;
		};

		/**
		 * Destroy the scene and everything.
		 * @method ScrollMagic.Scene#destroy
		 * @example
		 * // destroy the scene without resetting the pin and tween to their initial positions
		 * scene = scene.destroy();
		 *
		 * // destroy the scene and reset the pin and tween
		 * scene = scene.destroy(true);
		 *
		 * @param {boolean} [reset=false] - If `true` the pin and tween (if existent) will be reset.
		 * @returns {null} Null to unset handler variables.
		 */
		this.destroy = function (reset) {
			Scene.trigger("destroy", {
				reset: reset
			});
			Scene.remove();
			Scene.off("*.*");
			log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
			return null;
		};


		/**
		 * Updates the Scene to reflect the current state.  
		 * This is the equivalent to `Controller.updateScene(scene, immediately)`.  
		 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
		 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.
		 * This means an update doesn't necessarily result in a progress change. The `progress` event will be fired if the progress has indeed changed between this update and the last.  
		 * _**NOTE:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
		 * @method ScrollMagic.Scene#update
		 * @example
		 * // update the scene on next tick
		 * scene.update();
		 *
		 * // update the scene immediately
		 * scene.update(true);
		 *
		 * @fires Scene.update
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance).
		 * @returns {Scene} Parent object for chaining.
		 */
		this.update = function (immediately) {
			if (_controller) {
				if (immediately) {
					if (_controller.enabled() && _enabled) {
						var
							scrollPos = _controller.info("scrollPos"),
							newProgress;

						if (_options.duration > 0) {
							newProgress = (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start);
						} else {
							newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
						}

						Scene.trigger("update", {
							startPos: _scrollOffset.start,
							endPos: _scrollOffset.end,
							scrollPos: scrollPos
						});

						Scene.progress(newProgress);
					} else if (_pin && _state === SCENE_STATE_DURING) {
						updatePinState(true); // unpin in position
					}
				} else {
					_controller.updateScene(Scene, false);
				}
			}
			return Scene;
		};

		/**
		 * Updates dynamic scene variables like the trigger element position or the duration.
		 * This method is automatically called in regular intervals from the controller. See {@link ScrollMagic.Controller} option `refreshInterval`.
		 * 
		 * You can call it to minimize lag, for example when you intentionally change the position of the triggerElement.
		 * If you don't it will simply be updated in the next refresh interval of the container, which is usually sufficient.
		 *
		 * @method ScrollMagic.Scene#refresh
		 * @since 1.1.0
		 * @example
		 * scene = new ScrollMagic.Scene({triggerElement: "#trigger"});
		 * 
		 * // change the position of the trigger
		 * $("#trigger").css("top", 500);
		 * // immediately let the scene know of this change
		 * scene.refresh();
		 *
		 * @fires {@link Scene.shift}, if the trigger element position or the duration changed
		 * @fires {@link Scene.change}, if the duration changed
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.refresh = function () {
			updateDuration();
			updateTriggerElementPosition();
			// update trigger element position
			return Scene;
		};

		/**
		 * **Get** or **Set** the scene's progress.  
		 * Usually it shouldn't be necessary to use this as a setter, as it is set automatically by scene.update().  
		 * The order in which the events are fired depends on the duration of the scene:
		 *  1. Scenes with `duration == 0`:  
		 *  Scenes that have no duration by definition have no ending. Thus the `end` event will never be fired.  
		 *  When the trigger position of the scene is passed the events are always fired in this order:  
		 *  `enter`, `start`, `progress` when scrolling forward  
		 *  and  
		 *  `progress`, `start`, `leave` when scrolling in reverse
		 *  2. Scenes with `duration > 0`:  
		 *  Scenes with a set duration have a defined start and end point.  
		 *  When scrolling past the start position of the scene it will fire these events in this order:  
		 *  `enter`, `start`, `progress`  
		 *  When continuing to scroll and passing the end point it will fire these events:  
		 *  `progress`, `end`, `leave`  
		 *  When reversing through the end point these events are fired:  
		 *  `enter`, `end`, `progress`  
		 *  And when continuing to scroll past the start position in reverse it will fire:  
		 *  `progress`, `start`, `leave`  
		 *  In between start and end the `progress` event will be called constantly, whenever the progress changes.
		 * 
		 * In short:  
		 * `enter` events will always trigger **before** the progress update and `leave` envents will trigger **after** the progress update.  
		 * `start` and `end` will always trigger at their respective position.
		 * 
		 * Please review the event descriptions for details on the events and the event object that is passed to the callback.
		 * 
		 * @method ScrollMagic.Scene#progress
		 * @example
		 * // get the current scene progress
		 * var progress = scene.progress();
		 *
		 * // set new scene progress
		 * scene.progress(0.3);
		 *
		 * @fires {@link Scene.enter}, when used as setter
		 * @fires {@link Scene.start}, when used as setter
		 * @fires {@link Scene.progress}, when used as setter
		 * @fires {@link Scene.end}, when used as setter
		 * @fires {@link Scene.leave}, when used as setter
		 *
		 * @param {number} [progress] - The new progress value of the scene `[0-1]`.
		 * @returns {number} `get` -  Current scene progress.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */
		this.progress = function (progress) {
			if (!arguments.length) { // get
				return _progress;
			} else { // set
				var
					doUpdate = false,
					oldState = _state,
					scrollDirection = _controller ? _controller.info("scrollDirection") : 'PAUSED',
					reverseOrForward = _options.reverse || progress >= _progress;
				if (_options.duration === 0) {
					// zero duration scenes
					doUpdate = _progress != progress;
					_progress = progress < 1 && reverseOrForward ? 0 : 1;
					_state = _progress === 0 ? SCENE_STATE_BEFORE : SCENE_STATE_DURING;
				} else {
					// scenes with start and end
					if (progress < 0 && _state !== SCENE_STATE_BEFORE && reverseOrForward) {
						// go back to initial state
						_progress = 0;
						_state = SCENE_STATE_BEFORE;
						doUpdate = true;
					} else if (progress >= 0 && progress < 1 && reverseOrForward) {
						_progress = progress;
						_state = SCENE_STATE_DURING;
						doUpdate = true;
					} else if (progress >= 1 && _state !== SCENE_STATE_AFTER) {
						_progress = 1;
						_state = SCENE_STATE_AFTER;
						doUpdate = true;
					} else if (_state === SCENE_STATE_DURING && !reverseOrForward) {
						updatePinState(); // in case we scrolled backwards mid-scene and reverse is disabled => update the pin position, so it doesn't move back as well.
					}
				}
				if (doUpdate) {
					// fire events
					var
						eventVars = {
							progress: _progress,
							state: _state,
							scrollDirection: scrollDirection
						},
						stateChanged = _state != oldState;

					var trigger = function (eventName) { // tmp helper to simplify code
						Scene.trigger(eventName, eventVars);
					};

					if (stateChanged) { // enter events
						if (oldState !== SCENE_STATE_DURING) {
							trigger("enter");
							trigger(oldState === SCENE_STATE_BEFORE ? "start" : "end");
						}
					}
					trigger("progress");
					if (stateChanged) { // leave events
						if (_state !== SCENE_STATE_DURING) {
							trigger(_state === SCENE_STATE_BEFORE ? "start" : "end");
							trigger("leave");
						}
					}
				}

				return Scene;
			}
		};


		/**
		 * Update the start and end scrollOffset of the container.
		 * The positions reflect what the controller's scroll position will be at the start and end respectively.
		 * Is called, when:
		 *   - Scene event "change" is called with: offset, triggerHook, duration 
		 *   - scroll container event "resize" is called
		 *   - the position of the triggerElement changes
		 *   - the controller changes -> addTo()
		 * @private
		 */
		var updateScrollOffset = function () {
			_scrollOffset = {
				start: _triggerPos + _options.offset
			};
			if (_controller && _options.triggerElement) {
				// take away triggerHook portion to get relative to top
				_scrollOffset.start -= _controller.info("size") * _options.triggerHook;
			}
			_scrollOffset.end = _scrollOffset.start + _options.duration;
		};

		/**
		 * Updates the duration if set to a dynamic function.
		 * This method is called when the scene is added to a controller and in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.change}, if the duration changed
		 * @fires {@link Scene.shift}, if the duration changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */
		var updateDuration = function (suppressEvents) {
			// update duration
			if (_durationUpdateMethod) {
				var varname = "duration";
				if (changeOption(varname, _durationUpdateMethod.call(Scene)) && !suppressEvents) { // set
					Scene.trigger("change", {
						what: varname,
						newval: _options[varname]
					});
					Scene.trigger("shift", {
						reason: varname
					});
				}
			}
		};

		/**
		 * Updates the position of the triggerElement, if present.
		 * This method is called ...
		 *  - ... when the triggerElement is changed
		 *  - ... when the scene is added to a (new) controller
		 *  - ... in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.shift}, if the position changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */
		var updateTriggerElementPosition = function (suppressEvents) {
			var
				elementPos = 0,
				telem = _options.triggerElement;
			if (_controller && (telem || _triggerPos > 0)) { // either an element exists or was removed and the triggerPos is still > 0
				if (telem) { // there currently a triggerElement set
					if (telem.parentNode) { // check if element is still attached to DOM
						var
							controllerInfo = _controller.info(),
							containerOffset = _util.get.offset(controllerInfo.container), // container position is needed because element offset is returned in relation to document, not in relation to container.
							param = controllerInfo.vertical ? "top" : "left"; // which param is of interest ?

						// if parent is spacer, use spacer position instead so correct start position is returned for pinned elements.
						while (telem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
							telem = telem.parentNode;
						}

						var elementOffset = _util.get.offset(telem);

						if (!controllerInfo.isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
							containerOffset[param] -= _controller.scrollPos();
						}

						elementPos = elementOffset[param] - containerOffset[param];

					} else { // there was an element, but it was removed from DOM
						log(2, "WARNING: triggerElement was removed from DOM and will be reset to", undefined);
						Scene.triggerElement(undefined); // unset, so a change event is triggered
					}
				}

				var changed = elementPos != _triggerPos;
				_triggerPos = elementPos;
				if (changed && !suppressEvents) {
					Scene.trigger("shift", {
						reason: "triggerElementPosition"
					});
				}
			}
		};

		/**
		 * Trigger a shift event, when the container is resized and the triggerHook is > 1.
		 * @private
		 */
		var onContainerResize = function (e) {
			if (_options.triggerHook > 0) {
				Scene.trigger("shift", {
					reason: "containerResize"
				});
			}
		};


		var _validate = _util.extend(SCENE_OPTIONS.validate, {
			// validation for duration handled internally for reference to private var _durationMethod
			duration: function (val) {
				if (_util.type.String(val) && val.match(/^(\.|\d)*\d+%$/)) {
					// percentage value
					var perc = parseFloat(val) / 100;
					val = function () {
						return _controller ? _controller.info("size") * perc : 0;
					};
				}
				if (_util.type.Function(val)) {
					// function
					_durationUpdateMethod = val;
					try {
						val = parseFloat(_durationUpdateMethod.call(Scene));
					} catch (e) {
						val = -1; // will cause error below
					}
				}
				// val has to be float
				val = parseFloat(val);
				if (!_util.type.Number(val) || val < 0) {
					if (_durationUpdateMethod) {
						_durationUpdateMethod = undefined;
						throw ["Invalid return value of supplied function for option \"duration\":", val];
					} else {
						throw ["Invalid value for option \"duration\":", val];
					}
				}
				return val;
			}
		});

		/**
		 * Checks the validity of a specific or all options and reset to default if neccessary.
		 * @private
		 */
		var validateOption = function (check) {
			check = arguments.length ? [check] : Object.keys(_validate);
			check.forEach(function (optionName, key) {
				var value;
				if (_validate[optionName]) { // there is a validation method for this option
					try { // validate value
						value = _validate[optionName](_options[optionName]);
					} catch (e) { // validation failed -> reset to default
						value = DEFAULT_OPTIONS[optionName];
						var logMSG = _util.type.String(e) ? [e] : e;
						if (_util.type.Array(logMSG)) {
							logMSG[0] = "ERROR: " + logMSG[0];
							logMSG.unshift(1); // loglevel 1 for error msg
							log.apply(this, logMSG);
						} else {
							log(1, "ERROR: Problem executing validation callback for option '" + optionName + "':", e.message);
						}
					} finally {
						_options[optionName] = value;
					}
				}
			});
		};

		/**
		 * Helper used by the setter/getters for scene options
		 * @private
		 */
		var changeOption = function (varname, newval) {
			var
				changed = false,
				oldval = _options[varname];
			if (_options[varname] != newval) {
				_options[varname] = newval;
				validateOption(varname); // resets to default if necessary
				changed = oldval != _options[varname];
			}
			return changed;
		};

		// generate getters/setters for all options
		var addSceneOption = function (optionName) {
			if (!Scene[optionName]) {
				Scene[optionName] = function (newVal) {
					if (!arguments.length) { // get
						return _options[optionName];
					} else {
						if (optionName === "duration") { // new duration is set, so any previously set function must be unset
							_durationUpdateMethod = undefined;
						}
						if (changeOption(optionName, newVal)) { // set
							Scene.trigger("change", {
								what: optionName,
								newval: _options[optionName]
							});
							if (SCENE_OPTIONS.shifts.indexOf(optionName) > -1) {
								Scene.trigger("shift", {
									reason: optionName
								});
							}
						}
					}
					return Scene;
				};
			}
		};

		/**
		 * **Get** or **Set** the duration option value.
		 *
		 * As a **setter** it accepts three types of parameters:
		 * 1. `number`: Sets the duration of the scene to exactly this amount of pixels.  
		 *   This means the scene will last for exactly this amount of pixels scrolled. Sub-Pixels are also valid.
		 *   A value of `0` means that the scene is 'open end' and no end will be triggered. Pins will never unpin and animations will play independently of scroll progress.
		 * 2. `string`: Always updates the duration relative to parent scroll container.  
		 *   For example `"100%"` will keep the duration always exactly at the inner height of the scroll container.
		 *   When scrolling vertically the width is used for reference respectively.
		 * 3. `function`: The supplied function will be called to return the scene duration.
		 *   This is useful in setups where the duration depends on other elements who might change size. By supplying a function you can return a value instead of updating potentially multiple scene durations.  
		 *   The scene can be referenced inside the callback using `this`.
		 *   _**WARNING:** This is an easy way to kill performance, as the callback will be executed every time `Scene.refresh()` is called, which happens a lot. The interval is defined by the controller (see ScrollMagic.Controller option `refreshInterval`).  
		 *   It's recomended to avoid calculations within the function and use cached variables as return values.  
		 *   This counts double if you use the same function for multiple scenes._
		 *
		 * @method ScrollMagic.Scene#duration
		 * @example
		 * // get the current duration value
		 * var duration = scene.duration();
		 *
		 * // set a new duration
		 * scene.duration(300);
		 *
		 * // set duration responsively to container size
		 * scene.duration("100%");
		 *
		 * // use a function to randomize the duration for some reason.
		 * var durationValueCache;
		 * function durationCallback () {
		 *   return durationValueCache;
		 * }
		 * function updateDuration () {
		 *   durationValueCache = Math.random() * 100;
		 * }
		 * updateDuration(); // set to initial value
		 * scene.duration(durationCallback); // set duration callback
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|string|function)} [newDuration] - The new duration setting for the scene.
		 * @returns {number} `get` -  Current scene duration.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the offset option value.
		 * @method ScrollMagic.Scene#offset
		 * @example
		 * // get the current offset
		 * var offset = scene.offset();
		 *
		 * // set a new offset
		 * scene.offset(100);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {number} [newOffset] - The new offset of the scene.
		 * @returns {number} `get` -  Current scene offset.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the triggerElement option value.
		 * Does **not** fire `Scene.shift`, because changing the trigger Element doesn't necessarily mean the start position changes. This will be determined in `Scene.refresh()`, which is automatically triggered.
		 * @method ScrollMagic.Scene#triggerElement
		 * @example
		 * // get the current triggerElement
		 * var triggerElement = scene.triggerElement();
		 *
		 * // set a new triggerElement using a selector
		 * scene.triggerElement("#trigger");
		 * // set a new triggerElement using a DOM object
		 * scene.triggerElement(document.getElementById("trigger"));
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {(string|object)} [newTriggerElement] - The new trigger element for the scene.
		 * @returns {(string|object)} `get` -  Current triggerElement.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the triggerHook option value.
		 * @method ScrollMagic.Scene#triggerHook
		 * @example
		 * // get the current triggerHook value
		 * var triggerHook = scene.triggerHook();
		 *
		 * // set a new triggerHook using a string
		 * scene.triggerHook("onLeave");
		 * // set a new triggerHook using a number
		 * scene.triggerHook(0.7);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|string)} [newTriggerHook] - The new triggerHook of the scene. See {@link Scene} parameter description for value options.
		 * @returns {number} `get` -  Current triggerHook (ALWAYS numerical).
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the reverse option value.
		 * @method ScrollMagic.Scene#reverse
		 * @example
		 * // get the current reverse option
		 * var reverse = scene.reverse();
		 *
		 * // set new reverse option
		 * scene.reverse(false);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {boolean} [newReverse] - The new reverse setting of the scene.
		 * @returns {boolean} `get` -  Current reverse option value.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the loglevel option value.
		 * @method ScrollMagic.Scene#loglevel
		 * @example
		 * // get the current loglevel
		 * var loglevel = scene.loglevel();
		 *
		 * // set new loglevel
		 * scene.loglevel(3);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {number} [newLoglevel] - The new loglevel setting of the scene. `[0-3]`
		 * @returns {number} `get` -  Current loglevel.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** the associated controller.
		 * @method ScrollMagic.Scene#controller
		 * @example
		 * // get the controller of a scene
		 * var controller = scene.controller();
		 *
		 * @returns {ScrollMagic.Controller} Parent controller or `undefined`
		 */
		this.controller = function () {
			return _controller;
		};

		/**
		 * **Get** the current state.
		 * @method ScrollMagic.Scene#state
		 * @example
		 * // get the current state
		 * var state = scene.state();
		 *
		 * @returns {string} `"BEFORE"`, `"DURING"` or `"AFTER"`
		 */
		this.state = function () {
			return _state;
		};

		/**
		 * **Get** the current scroll offset for the start of the scene.  
		 * Mind, that the scrollOffset is related to the size of the container, if `triggerHook` is bigger than `0` (or `"onLeave"`).  
		 * This means, that resizing the container or changing the `triggerHook` will influence the scene's start offset.
		 * @method ScrollMagic.Scene#scrollOffset
		 * @example
		 * // get the current scroll offset for the start and end of the scene.
		 * var start = scene.scrollOffset();
		 * var end = scene.scrollOffset() + scene.duration();
		 * console.log("the scene starts at", start, "and ends at", end);
		 *
		 * @returns {number} The scroll offset (of the container) at which the scene will trigger. Y value for vertical and X value for horizontal scrolls.
		 */
		this.scrollOffset = function () {
			return _scrollOffset.start;
		};

		/**
		 * **Get** the trigger position of the scene (including the value of the `offset` option).  
		 * @method ScrollMagic.Scene#triggerPosition
		 * @example
		 * // get the scene's trigger position
		 * var triggerPosition = scene.triggerPosition();
		 *
		 * @returns {number} Start position of the scene. Top position value for vertical and left position value for horizontal scrolls.
		 */
		this.triggerPosition = function () {
			var pos = _options.offset; // the offset is the basis
			if (_controller) {
				// get the trigger position
				if (_options.triggerElement) {
					// Element as trigger
					pos += _triggerPos;
				} else {
					// return the height of the triggerHook to start at the beginning
					pos += _controller.info("size") * Scene.triggerHook();
				}
			}
			return pos;
		};


		var
			_pin,
			_pinOptions;

		Scene
			.on("shift.internal", function (e) {
				var durationChanged = e.reason === "duration";
				if ((_state === SCENE_STATE_AFTER && durationChanged) || (_state === SCENE_STATE_DURING && _options.duration === 0)) {
					// if [duration changed after a scene (inside scene progress updates pin position)] or [duration is 0, we are in pin phase and some other value changed].
					updatePinState();
				}
				if (durationChanged) {
					updatePinDimensions();
				}
			})
			.on("progress.internal", function (e) {
				updatePinState();
			})
			.on("add.internal", function (e) {
				updatePinDimensions();
			})
			.on("destroy.internal", function (e) {
				Scene.removePin(e.reset);
			});
		/**
		 * Update the pin state.
		 * @private
		 */
		var updatePinState = function (forceUnpin) {
			if (_pin && _controller) {
				var
					containerInfo = _controller.info(),
					pinTarget = _pinOptions.spacer.firstChild; // may be pin element or another spacer, if cascading pins

				if (!forceUnpin && _state === SCENE_STATE_DURING) { // during scene or if duration is 0 and we are past the trigger
					// pinned state
					if (_util.css(pinTarget, "position") != "fixed") {
						// change state before updating pin spacer (position changes due to fixed collapsing might occur.)
						_util.css(pinTarget, {
							"position": "fixed"
						});
						// update pin spacer
						updatePinDimensions();
					}

					var
						fixedPos = _util.get.offset(_pinOptions.spacer, true), // get viewport position of spacer
						scrollDistance = _options.reverse || _options.duration === 0 ?
						containerInfo.scrollPos - _scrollOffset.start // quicker
						:
						Math.round(_progress * _options.duration * 10) / 10; // if no reverse and during pin the position needs to be recalculated using the progress

					// add scrollDistance
					fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance;

					// set new values
					_util.css(_pinOptions.spacer.firstChild, {
						top: fixedPos.top,
						left: fixedPos.left
					});
				} else {
					// unpinned state
					var
						newCSS = {
							position: _pinOptions.inFlow ? "relative" : "absolute",
							top: 0,
							left: 0
						},
						change = _util.css(pinTarget, "position") != newCSS.position;

					if (!_pinOptions.pushFollowers) {
						newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
					} else if (_options.duration > 0) { // only concerns scenes with duration
						if (_state === SCENE_STATE_AFTER && parseFloat(_util.css(_pinOptions.spacer, "padding-top")) === 0) {
							change = true; // if in after state but havent updated spacer yet (jumped past pin)
						} else if (_state === SCENE_STATE_BEFORE && parseFloat(_util.css(_pinOptions.spacer, "padding-bottom")) === 0) { // before
							change = true; // jumped past fixed state upward direction
						}
					}
					// set new values
					_util.css(pinTarget, newCSS);
					if (change) {
						// update pin spacer if state changed
						updatePinDimensions();
					}
				}
			}
		};

		/**
		 * Update the pin spacer and/or element size.
		 * The size of the spacer needs to be updated whenever the duration of the scene changes, if it is to push down following elements.
		 * @private
		 */
		var updatePinDimensions = function () {
			if (_pin && _controller && _pinOptions.inFlow) { // no spacerresize, if original position is absolute
				var
					after = (_state === SCENE_STATE_AFTER),
					before = (_state === SCENE_STATE_BEFORE),
					during = (_state === SCENE_STATE_DURING),
					vertical = _controller.info("vertical"),
					pinTarget = _pinOptions.spacer.firstChild, // usually the pined element but can also be another spacer (cascaded pins)
					marginCollapse = _util.isMarginCollapseType(_util.css(_pinOptions.spacer, "display")),
					css = {};

				// set new size
				// if relsize: spacer -> pin | else: pin -> spacer
				if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
					if (during) {
						_util.css(_pin, {
							"width": _util.get.width(_pinOptions.spacer)
						});
					} else {
						_util.css(_pin, {
							"width": "100%"
						});
					}
				} else {
					// minwidth is needed for cascaded pins.
					css["min-width"] = _util.get.width(vertical ? _pin : pinTarget, true, true);
					css.width = during ? css["min-width"] : "auto";
				}
				if (_pinOptions.relSize.height) {
					if (during) {
						// the only padding the spacer should ever include is the duration (if pushFollowers = true), so we need to substract that.
						_util.css(_pin, {
							"height": _util.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
						});
					} else {
						_util.css(_pin, {
							"height": "100%"
						});
					}
				} else {
					// margin is only included if it's a cascaded pin to resolve an IE9 bug
					css["min-height"] = _util.get.height(vertical ? pinTarget : _pin, true, !marginCollapse); // needed for cascading pins
					css.height = during ? css["min-height"] : "auto";
				}

				// add space for duration if pushFollowers is true
				if (_pinOptions.pushFollowers) {
					css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
					css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
				}
				_util.css(_pinOptions.spacer, css);
			}
		};

		/**
		 * Updates the Pin state (in certain scenarios)
		 * If the controller container is not the document and we are mid-pin-phase scrolling or resizing the main document can result to wrong pin positions.
		 * So this function is called on resize and scroll of the document.
		 * @private
		 */
		var updatePinInContainer = function () {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
				updatePinState();
			}
		};

		/**
		 * Updates the Pin spacer size state (in certain scenarios)
		 * If container is resized during pin and relatively sized the size of the pin might need to be updated...
		 * So this function is called on resize of the container.
		 * @private
		 */
		var updateRelativePinSpacer = function () {
			if (_controller && _pin && // well, duh
				_state === SCENE_STATE_DURING && // element in pinned state?
				( // is width or height relatively sized, but not in relation to body? then we need to recalc.
					((_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && _util.get.width(window) != _util.get.width(_pinOptions.spacer.parentNode)) ||
					(_pinOptions.relSize.height && _util.get.height(window) != _util.get.height(_pinOptions.spacer.parentNode))
				)
			) {
				updatePinDimensions();
			}
		};

		/**
		 * Is called, when the mousewhel is used while over a pinned element inside a div container.
		 * If the scene is in fixed state scroll events would be counted towards the body. This forwards the event to the scroll container.
		 * @private
		 */
		var onMousewheelOverPin = function (e) {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) { // in pin state
				e.preventDefault();
				_controller._setScrollPos(_controller.info("scrollPos") - ((e.wheelDelta || e[_controller.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -e.detail * 30));
			}
		};

		/**
		 * Pin an element for the duration of the scene.
		 * If the scene duration is 0 the element will only be unpinned, if the user scrolls back past the start position.  
		 * Make sure only one pin is applied to an element at the same time.
		 * An element can be pinned multiple times, but only successively.
		 * _**NOTE:** The option `pushFollowers` has no effect, when the scene duration is 0._
		 * @method ScrollMagic.Scene#setPin
		 * @example
		 * // pin element and push all following elements down by the amount of the pin duration.
		 * scene.setPin("#pin");
		 *
		 * // pin element and keeping all following elements in their place. The pinned element will move past them.
		 * scene.setPin("#pin", {pushFollowers: false});
		 *
		 * @param {(string|object)} element - A Selector targeting an element or a DOM object that is supposed to be pinned.
		 * @param {object} [settings] - settings for the pin
		 * @param {boolean} [settings.pushFollowers=true] - If `true` following elements will be "pushed" down for the duration of the pin, if `false` the pinned element will just scroll past them.  
		 												   Ignored, when duration is `0`.
		 * @param {string} [settings.spacerClass="scrollmagic-pin-spacer"] - Classname of the pin spacer element, which is used to replace the element.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.setPin = function (element, settings) {
			var
				defaultSettings = {
					pushFollowers: true,
					spacerClass: "scrollmagic-pin-spacer"
				};
			var pushFollowersActivelySet = settings && settings.hasOwnProperty('pushFollowers');
			settings = _util.extend({}, defaultSettings, settings);

			// validate Element
			element = _util.get.elements(element)[0];
			if (!element) {
				log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
				return Scene; // cancel
			} else if (_util.css(element, "position") === "fixed") {
				log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
				return Scene; // cancel
			}

			if (_pin) { // preexisting pin?
				if (_pin === element) {
					// same pin we already have -> do nothing
					return Scene; // cancel
				} else {
					// kill old pin
					Scene.removePin();
				}

			}
			_pin = element;

			var
				parentDisplay = _pin.parentNode.style.display,
				boundsParams = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];

			_pin.parentNode.style.display = 'none'; // hack start to force css to return stylesheet values instead of calculated px values.
			var
				inFlow = _util.css(_pin, "position") != "absolute",
				pinCSS = _util.css(_pin, boundsParams.concat(["display"])),
				sizeCSS = _util.css(_pin, ["width", "height"]);
			_pin.parentNode.style.display = parentDisplay; // hack end.

			if (!inFlow && settings.pushFollowers) {
				log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
				settings.pushFollowers = false;
			}
			window.setTimeout(function () { // wait until all finished, because with responsive duration it will only be set after scene is added to controller
				if (_pin && _options.duration === 0 && pushFollowersActivelySet && settings.pushFollowers) {
					log(2, "WARNING: pushFollowers =", true, "has no effect, when scene duration is 0.");
				}
			}, 0);

			// create spacer and insert
			var
				spacer = _pin.parentNode.insertBefore(document.createElement('div'), _pin),
				spacerCSS = _util.extend(pinCSS, {
					position: inFlow ? "relative" : "absolute",
					boxSizing: "content-box",
					mozBoxSizing: "content-box",
					webkitBoxSizing: "content-box"
				});

			if (!inFlow) { // copy size if positioned absolutely, to work for bottom/right positioned elements.
				_util.extend(spacerCSS, _util.css(_pin, ["width", "height"]));
			}

			_util.css(spacer, spacerCSS);
			spacer.setAttribute(PIN_SPACER_ATTRIBUTE, "");
			_util.addClass(spacer, settings.spacerClass);

			// set the pin Options
			_pinOptions = {
				spacer: spacer,
				relSize: { // save if size is defined using % values. if so, handle spacer resize differently...
					width: sizeCSS.width.slice(-1) === "%",
					height: sizeCSS.height.slice(-1) === "%",
					autoFullWidth: sizeCSS.width === "auto" && inFlow && _util.isMarginCollapseType(pinCSS.display)
				},
				pushFollowers: settings.pushFollowers,
				inFlow: inFlow, // stores if the element takes up space in the document flow
			};

			if (!_pin.___origStyle) {
				_pin.___origStyle = {};
				var
					pinInlineCSS = _pin.style,
					copyStyles = boundsParams.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
				copyStyles.forEach(function (val) {
					_pin.___origStyle[val] = pinInlineCSS[val] || "";
				});
			}

			// if relative size, transfer it to spacer and make pin calculate it...
			if (_pinOptions.relSize.width) {
				_util.css(spacer, {
					width: sizeCSS.width
				});
			}
			if (_pinOptions.relSize.height) {
				_util.css(spacer, {
					height: sizeCSS.height
				});
			}

			// now place the pin element inside the spacer	
			spacer.appendChild(_pin);
			// and set new css
			_util.css(_pin, {
				position: inFlow ? "relative" : "absolute",
				margin: "auto",
				top: "auto",
				left: "auto",
				bottom: "auto",
				right: "auto"
			});

			if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
				_util.css(_pin, {
					boxSizing: "border-box",
					mozBoxSizing: "border-box",
					webkitBoxSizing: "border-box"
				});
			}

			// add listener to document to update pin position in case controller is not the document.
			window.addEventListener('scroll', updatePinInContainer);
			window.addEventListener('resize', updatePinInContainer);
			window.addEventListener('resize', updateRelativePinSpacer);
			// add mousewheel listener to catch scrolls over fixed elements
			_pin.addEventListener("mousewheel", onMousewheelOverPin);
			_pin.addEventListener("DOMMouseScroll", onMousewheelOverPin);

			log(3, "added pin");

			// finally update the pin to init
			updatePinState();

			return Scene;
		};

		/**
		 * Remove the pin from the scene.
		 * @method ScrollMagic.Scene#removePin
		 * @example
		 * // remove the pin from the scene without resetting it (the spacer is not removed)
		 * scene.removePin();
		 *
		 * // remove the pin from the scene and reset the pin element to its initial position (spacer is removed)
		 * scene.removePin(true);
		 *
		 * @param {boolean} [reset=false] - If `false` the spacer will not be removed and the element's position will not be reset.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.removePin = function (reset) {
			if (_pin) {
				if (_state === SCENE_STATE_DURING) {
					updatePinState(true); // force unpin at position
				}
				if (reset || !_controller) { // if there's no controller no progress was made anyway...
					var pinTarget = _pinOptions.spacer.firstChild; // usually the pin element, but may be another spacer (cascaded pins)...
					if (pinTarget.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // copy margins to child spacer
						var
							style = _pinOptions.spacer.style,
							values = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"],
							margins = {};
						values.forEach(function (val) {
							margins[val] = style[val] || "";
						});
						_util.css(pinTarget, margins);
					}
					_pinOptions.spacer.parentNode.insertBefore(pinTarget, _pinOptions.spacer);
					_pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);
					if (!_pin.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // if it's the last pin for this element -> restore inline styles
						// TODO: only correctly set for first pin (when cascading) - how to fix?
						_util.css(_pin, _pin.___origStyle);
						delete _pin.___origStyle;
					}
				}
				window.removeEventListener('scroll', updatePinInContainer);
				window.removeEventListener('resize', updatePinInContainer);
				window.removeEventListener('resize', updateRelativePinSpacer);
				_pin.removeEventListener("mousewheel", onMousewheelOverPin);
				_pin.removeEventListener("DOMMouseScroll", onMousewheelOverPin);
				_pin = undefined;
				log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
			}
			return Scene;
		};


		var
			_cssClasses,
			_cssClassElems = [];

		Scene
			.on("destroy.internal", function (e) {
				Scene.removeClassToggle(e.reset);
			});
		/**
		 * Define a css class modification while the scene is active.  
		 * When the scene triggers the classes will be added to the supplied element and removed, when the scene is over.
		 * If the scene duration is 0 the classes will only be removed if the user scrolls back past the start position.
		 * @method ScrollMagic.Scene#setClassToggle
		 * @example
		 * // add the class 'myclass' to the element with the id 'my-elem' for the duration of the scene
		 * scene.setClassToggle("#my-elem", "myclass");
		 *
		 * // add multiple classes to multiple elements defined by the selector '.classChange'
		 * scene.setClassToggle(".classChange", "class1 class2 class3");
		 *
		 * @param {(string|object)} element - A Selector targeting one or more elements or a DOM object that is supposed to be modified.
		 * @param {string} classes - One or more Classnames (separated by space) that should be added to the element during the scene.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.setClassToggle = function (element, classes) {
			var elems = _util.get.elements(element);
			if (elems.length === 0 || !_util.type.String(classes)) {
				log(1, "ERROR calling method 'setClassToggle()': Invalid " + (elems.length === 0 ? "element" : "classes") + " supplied.");
				return Scene;
			}
			if (_cssClassElems.length > 0) {
				// remove old ones
				Scene.removeClassToggle();
			}
			_cssClasses = classes;
			_cssClassElems = elems;
			Scene.on("enter.internal_class leave.internal_class", function (e) {
				var toggle = e.type === "enter" ? _util.addClass : _util.removeClass;
				_cssClassElems.forEach(function (elem, key) {
					toggle(elem, _cssClasses);
				});
			});
			return Scene;
		};

		/**
		 * Remove the class binding from the scene.
		 * @method ScrollMagic.Scene#removeClassToggle
		 * @example
		 * // remove class binding from the scene without reset
		 * scene.removeClassToggle();
		 *
		 * // remove class binding and remove the changes it caused
		 * scene.removeClassToggle(true);
		 *
		 * @param {boolean} [reset=false] - If `false` and the classes are currently active, they will remain on the element. If `true` they will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.removeClassToggle = function (reset) {
			if (reset) {
				_cssClassElems.forEach(function (elem, key) {
					_util.removeClass(elem, _cssClasses);
				});
			}
			Scene.off("start.internal_class end.internal_class");
			_cssClasses = undefined;
			_cssClassElems = [];
			return Scene;
		};

		// INIT
		construct();
		return Scene;
	};

	// store pagewide scene options
	var SCENE_OPTIONS = {
		defaults: {
			duration: 0,
			offset: 0,
			triggerElement: undefined,
			triggerHook: 0.5,
			reverse: true,
			loglevel: 2
		},
		validate: {
			offset: function (val) {
				val = parseFloat(val);
				if (!_util.type.Number(val)) {
					throw ["Invalid value for option \"offset\":", val];
				}
				return val;
			},
			triggerElement: function (val) {
				val = val || undefined;
				if (val) {
					var elem = _util.get.elements(val)[0];
					if (elem && elem.parentNode) {
						val = elem;
					} else {
						throw ["Element defined in option \"triggerElement\" was not found:", val];
					}
				}
				return val;
			},
			triggerHook: function (val) {
				var translate = {
					"onCenter": 0.5,
					"onEnter": 1,
					"onLeave": 0
				};
				if (_util.type.Number(val)) {
					val = Math.max(0, Math.min(parseFloat(val), 1)); //  make sure its betweeen 0 and 1
				} else if (val in translate) {
					val = translate[val];
				} else {
					throw ["Invalid value for option \"triggerHook\": ", val];
				}
				return val;
			},
			reverse: function (val) {
				return !!val; // force boolean
			},
			loglevel: function (val) {
				val = parseInt(val);
				if (!_util.type.Number(val) || val < 0 || val > 3) {
					throw ["Invalid value for option \"loglevel\":", val];
				}
				return val;
			}
		}, // holder for  validation methods. duration validation is handled in 'getters-setters.js'
		shifts: ["duration", "offset", "triggerHook"], // list of options that trigger a `shift` event
	};
	/*
	 * method used to add an option to ScrollMagic Scenes.
	 * TODO: DOC (private for dev)
	 */
	ScrollMagic.Scene.addOption = function (name, defaultValue, validationCallback, shifts) {
		if (!(name in SCENE_OPTIONS.defaults)) {
			SCENE_OPTIONS.defaults[name] = defaultValue;
			SCENE_OPTIONS.validate[name] = validationCallback;
			if (shifts) {
				SCENE_OPTIONS.shifts.push(name);
			}
		} else {
			ScrollMagic._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + name + "', because it already exists.");
		}
	};
	// instance extension function for plugins
	// TODO: DOC (private for dev)
	ScrollMagic.Scene.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Scene = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Scene, oldClass); // copy properties
		ScrollMagic.Scene.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Scene.prototype.constructor = ScrollMagic.Scene; // restore constructor
	};



	/**
	 * TODO: DOCS (private for dev)
	 * @class
	 * @private
	 */

	ScrollMagic.Event = function (type, namespace, target, vars) {
		vars = vars || {};
		for (var key in vars) {
			this[key] = vars[key];
		}
		this.type = type;
		this.target = this.currentTarget = target;
		this.namespace = namespace || '';
		this.timeStamp = this.timestamp = Date.now();
		return this;
	};

	/*
	 * TODO: DOCS (private for dev)
	 */

	var _util = ScrollMagic._util = (function (window) {
		var U = {},
			i;

		/**
		 * ------------------------------
		 * internal helpers
		 * ------------------------------
		 */

		// parse float and fall back to 0.
		var floatval = function (number) {
			return parseFloat(number) || 0;
		};
		// get current style IE safe (otherwise IE would return calculated values for 'auto')
		var _getComputedStyle = function (elem) {
			return elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem);
		};

		// get element dimension (width or height)
		var _dimension = function (which, elem, outer, includeMargin) {
			elem = (elem === document) ? window : elem;
			if (elem === window) {
				includeMargin = false;
			} else if (!_type.DomElement(elem)) {
				return 0;
			}
			which = which.charAt(0).toUpperCase() + which.substr(1).toLowerCase();
			var dimension = (outer ? elem['offset' + which] || elem['outer' + which] : elem['client' + which] || elem['inner' + which]) || 0;
			if (outer && includeMargin) {
				var style = _getComputedStyle(elem);
				dimension += which === 'Height' ? floatval(style.marginTop) + floatval(style.marginBottom) : floatval(style.marginLeft) + floatval(style.marginRight);
			}
			return dimension;
		};
		// converts 'margin-top' into 'marginTop'
		var _camelCase = function (str) {
			return str.replace(/^[^a-z]+([a-z])/g, '$1').replace(/-([a-z])/g, function (g) {
				return g[1].toUpperCase();
			});
		};

		/**
		 * ------------------------------
		 * external helpers
		 * ------------------------------
		 */

		// extend obj – same as jQuery.extend({}, objA, objB)
		U.extend = function (obj) {
			obj = obj || {};
			for (i = 1; i < arguments.length; i++) {
				if (!arguments[i]) {
					continue;
				}
				for (var key in arguments[i]) {
					if (arguments[i].hasOwnProperty(key)) {
						obj[key] = arguments[i][key];
					}
				}
			}
			return obj;
		};

		// check if a css display type results in margin-collapse or not
		U.isMarginCollapseType = function (str) {
			return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
		};

		// implementation of requestAnimationFrame
		// based on https://gist.github.com/paulirish/1579671
		var
			lastTime = 0,
			vendors = ['ms', 'moz', 'webkit', 'o'];
		var _requestAnimationFrame = window.requestAnimationFrame;
		var _cancelAnimationFrame = window.cancelAnimationFrame;
		// try vendor prefixes if the above doesn't work
		for (i = 0; !_requestAnimationFrame && i < vendors.length; ++i) {
			_requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
			_cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
		}

		// fallbacks
		if (!_requestAnimationFrame) {
			_requestAnimationFrame = function (callback) {
				var
					currTime = new Date().getTime(),
					timeToCall = Math.max(0, 16 - (currTime - lastTime)),
					id = window.setTimeout(function () {
						callback(currTime + timeToCall);
					}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}
		if (!_cancelAnimationFrame) {
			_cancelAnimationFrame = function (id) {
				window.clearTimeout(id);
			};
		}
		U.rAF = _requestAnimationFrame.bind(window);
		U.cAF = _cancelAnimationFrame.bind(window);

		var
			loglevels = ["error", "warn", "log"],
			console = window.console || {};

		console.log = console.log || function () {}; // no console log, well - do nothing then...
		// make sure methods for all levels exist.
		for (i = 0; i < loglevels.length; i++) {
			var method = loglevels[i];
			if (!console[method]) {
				console[method] = console.log; // prefer .log over nothing
			}
		}
		U.log = function (loglevel) {
			if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
			var now = new Date(),
				time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2) + ":" + ("00" + now.getMilliseconds()).slice(-3),
				method = loglevels[loglevel - 1],
				args = Array.prototype.splice.call(arguments, 1),
				func = Function.prototype.bind.call(console[method], console);
			args.unshift(time);
			func.apply(console, args);
		};

		/**
		 * ------------------------------
		 * type testing
		 * ------------------------------
		 */

		var _type = U.type = function (v) {
			return Object.prototype.toString.call(v).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
		};
		_type.String = function (v) {
			return _type(v) === 'string';
		};
		_type.Function = function (v) {
			return _type(v) === 'function';
		};
		_type.Array = function (v) {
			return Array.isArray(v);
		};
		_type.Number = function (v) {
			return !_type.Array(v) && (v - parseFloat(v) + 1) >= 0;
		};
		_type.DomElement = function (o) {
			return (
				typeof HTMLElement === "object" || typeof HTMLElement === "function" ? o instanceof HTMLElement || o instanceof SVGElement : //DOM2
				o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
			);
		};

		/**
		 * ------------------------------
		 * DOM Element info
		 * ------------------------------
		 */
		// always returns a list of matching DOM elements, from a selector, a DOM element or an list of elements or even an array of selectors
		var _get = U.get = {};
		_get.elements = function (selector) {
			var arr = [];
			if (_type.String(selector)) {
				try {
					selector = document.querySelectorAll(selector);
				} catch (e) { // invalid selector
					return arr;
				}
			}
			if (_type(selector) === 'nodelist' || _type.Array(selector) || selector instanceof NodeList) {
				for (var i = 0, ref = arr.length = selector.length; i < ref; i++) { // list of elements
					var elem = selector[i];
					arr[i] = _type.DomElement(elem) ? elem : _get.elements(elem); // if not an element, try to resolve recursively
				}
			} else if (_type.DomElement(selector) || selector === document || selector === window) {
				arr = [selector]; // only the element
			}
			return arr;
		};
		// get scroll top value
		_get.scrollTop = function (elem) {
			return (elem && typeof elem.scrollTop === 'number') ? elem.scrollTop : window.pageYOffset || 0;
		};
		// get scroll left value
		_get.scrollLeft = function (elem) {
			return (elem && typeof elem.scrollLeft === 'number') ? elem.scrollLeft : window.pageXOffset || 0;
		};
		// get element height
		_get.width = function (elem, outer, includeMargin) {
			return _dimension('width', elem, outer, includeMargin);
		};
		// get element width
		_get.height = function (elem, outer, includeMargin) {
			return _dimension('height', elem, outer, includeMargin);
		};

		// get element position (optionally relative to viewport)
		_get.offset = function (elem, relativeToViewport) {
			var offset = {
				top: 0,
				left: 0
			};
			if (elem && elem.getBoundingClientRect) { // check if available
				var rect = elem.getBoundingClientRect();
				offset.top = rect.top;
				offset.left = rect.left;
				if (!relativeToViewport) { // clientRect is by default relative to viewport...
					offset.top += _get.scrollTop();
					offset.left += _get.scrollLeft();
				}
			}
			return offset;
		};

		/**
		 * ------------------------------
		 * DOM Element manipulation
		 * ------------------------------
		 */

		U.addClass = function (elem, classname) {
			if (classname) {
				if (elem.classList)
					elem.classList.add(classname);
				else
					elem.className += ' ' + classname;
			}
		};
		U.removeClass = function (elem, classname) {
			if (classname) {
				if (elem.classList)
					elem.classList.remove(classname);
				else
					elem.className = elem.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		};
		// if options is string -> returns css value
		// if options is array -> returns object with css value pairs
		// if options is object -> set new css values
		U.css = function (elem, options) {
			if (_type.String(options)) {
				return _getComputedStyle(elem)[_camelCase(options)];
			} else if (_type.Array(options)) {
				var
					obj = {},
					style = _getComputedStyle(elem);
				options.forEach(function (option, key) {
					obj[option] = style[_camelCase(option)];
				});
				return obj;
			} else {
				for (var option in options) {
					var val = options[option];
					if (val == parseFloat(val)) { // assume pixel for seemingly numerical values
						val += 'px';
					}
					elem.style[_camelCase(option)] = val;
				}
			}
		};

		return U;
	}(window || {}));


	ScrollMagic.Scene.prototype.addIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	}
	ScrollMagic.Scene.prototype.setTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	}
	ScrollMagic.Scene.prototype.setVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	}

	return ScrollMagic;
}));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");

__webpack_require__(/*! ./sass/admin.scss */ "./src/sass/admin.scss");

var _videos = __webpack_require__(/*! ./js/videos */ "./src/js/videos.js");

var _animations = __webpack_require__(/*! ./js/animations */ "./src/js/animations.js");

$ = jQuery;

window.$ = $;
window.jQuery = jQuery;

(0, _videos.initPopup)();

(0, _animations.initScroll)();

/***/ }),

/***/ "./src/js/animations.js":
/*!******************************!*\
  !*** ./src/js/animations.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initScroll = undefined;

var _scrollmagic = __webpack_require__(/*! scrollmagic */ "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");

var _scrollmagic2 = _interopRequireDefault(_scrollmagic);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

$ = jQuery;

//import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";


function initScroll() {

    var controller = new _scrollmagic2.default.Controller({});

    $(".title-animate").each(function () {

        var id = $(this).attr('id');

        var scene = new _scrollmagic2.default.Scene({
            triggerElement: '#' + id,
            duration: 0,
            triggerHook: 0.66,
            reverse: false
        })

        // .addIndicators()
        .setClassToggle('#' + id, 'animated').addTo(controller);
    });

    // build scene
}

exports.initScroll = initScroll;

/***/ }),

/***/ "./src/js/videos.js":
/*!**************************!*\
  !*** ./src/js/videos.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initPopup = undefined;

var _magnificPopup = __webpack_require__(/*! magnific-popup */ "./node_modules/magnific-popup/dist/jquery.magnific-popup.js");

function initPopup() {
    $('.lightbox-toggle').magnificPopup({
        type: 'iframe'
        // other options
    }).extend(true, $.magnificPopup.defaults, {
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                }
            }
        }
    });
}

exports.initPopup = initPopup;

/***/ }),

/***/ "./src/sass/admin.scss":
/*!*****************************!*\
  !*** ./src/sass/admin.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hZ25pZmljLXBvcHVwL2Rpc3QvanF1ZXJ5Lm1hZ25pZmljLXBvcHVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zY3JvbGxtYWdpYy9zY3JvbGxtYWdpYy91bmNvbXByZXNzZWQvU2Nyb2xsTWFnaWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWRlb3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvYWRtaW4uc2Nzcz8yN2VkIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/ZDI4OSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyIkIiwid2luZG93IiwiY29udHJvbGxlciIsIlNjcm9sbE1hZ2ljIiwiaWQiLCJzY2VuZSIsInRyaWdnZXJFbGVtZW50IiwiZHVyYXRpb24iLCJ0cmlnZ2VySG9vayIsInJldmVyc2UiLCJpbml0U2Nyb2xsIiwidHlwZSIsImlmcmFtZSIsInBhdHRlcm5zIiwieW91dHViZSIsImluZGV4Iiwic3JjIiwidmltZW8iLCJpbml0UG9wdXAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSxzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNERBQTRELEVBQUU7O0FBRTlEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0EsYUFBYSxJQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYLEdBQUc7QUFDSDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksT0FBTztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtB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QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxNQUFNOztBQUVkLE9BQU8sWUFBWTs7QUFFbkIsTUFBTSxNQUFNOzs7QUFHWjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNLFlBQVk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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MUJDLHNCQUYwQjtBQUcxQkMseUJBSDBCO0FBSTFCQyxxQkFBUztBQUppQixTQUF0Qjs7QUFPVDtBQVBTLG9EQUFaLFVBQVksQ0FBWjtBQUpKVDs7QUFnQkE7QUFHSDs7UUFHR1UsVSxHQUFBQSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNKOztBQUVBLHFCQUFxQjtBQUNqQlYsd0NBQW9DO0FBQ2hDVyxjQUFNO0FBQ047QUFGZ0MsS0FBcENYLGVBSWdCQSxnQkFKaEJBLFVBSTBDO0FBQ3RDWSxnQkFBUTtBQUNKQyxzQkFBVTtBQUNQQyx5QkFBUztBQUNOQywyQkFETTtBQUVOWCx3QkFGTTtBQUdOWSx5QkFBSztBQUhDLGlCQURGO0FBTVJDLHVCQUFPO0FBQ0xGLDJCQURLO0FBRUxYLHdCQUZLO0FBR0xZLHlCQUFLO0FBSEE7QUFOQztBQUROO0FBRDhCLEtBSjFDaEI7QUFvQkg7O1FBRVFrQixTLEdBQUFBLFM7Ozs7Ozs7Ozs7O0FDekJULHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qISBNYWduaWZpYyBQb3B1cCAtIHYxLjEuMCAtIDIwMTYtMDItMjBcbiogaHR0cDovL2RpbXNlbWVub3YuY29tL3BsdWdpbnMvbWFnbmlmaWMtcG9wdXAvXG4qIENvcHlyaWdodCAoYykgMjAxNiBEbWl0cnkgU2VtZW5vdjsgKi9cbjsoZnVuY3Rpb24gKGZhY3RvcnkpIHsgXG5pZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7IFxuIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS4gXG4gZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpOyBcbiB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JykgeyBcbiAvLyBOb2RlL0NvbW1vbkpTIFxuIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpOyBcbiB9IGVsc2UgeyBcbiAvLyBCcm93c2VyIGdsb2JhbHMgXG4gZmFjdG9yeSh3aW5kb3cualF1ZXJ5IHx8IHdpbmRvdy5aZXB0byk7IFxuIH0gXG4gfShmdW5jdGlvbigkKSB7IFxuXG4vKj4+Y29yZSovXG4vKipcbiAqIFxuICogTWFnbmlmaWMgUG9wdXAgQ29yZSBKUyBmaWxlXG4gKiBcbiAqL1xuXG5cbi8qKlxuICogUHJpdmF0ZSBzdGF0aWMgY29uc3RhbnRzXG4gKi9cbnZhciBDTE9TRV9FVkVOVCA9ICdDbG9zZScsXG5cdEJFRk9SRV9DTE9TRV9FVkVOVCA9ICdCZWZvcmVDbG9zZScsXG5cdEFGVEVSX0NMT1NFX0VWRU5UID0gJ0FmdGVyQ2xvc2UnLFxuXHRCRUZPUkVfQVBQRU5EX0VWRU5UID0gJ0JlZm9yZUFwcGVuZCcsXG5cdE1BUktVUF9QQVJTRV9FVkVOVCA9ICdNYXJrdXBQYXJzZScsXG5cdE9QRU5fRVZFTlQgPSAnT3BlbicsXG5cdENIQU5HRV9FVkVOVCA9ICdDaGFuZ2UnLFxuXHROUyA9ICdtZnAnLFxuXHRFVkVOVF9OUyA9ICcuJyArIE5TLFxuXHRSRUFEWV9DTEFTUyA9ICdtZnAtcmVhZHknLFxuXHRSRU1PVklOR19DTEFTUyA9ICdtZnAtcmVtb3ZpbmcnLFxuXHRQUkVWRU5UX0NMT1NFX0NMQVNTID0gJ21mcC1wcmV2ZW50LWNsb3NlJztcblxuXG4vKipcbiAqIFByaXZhdGUgdmFycyBcbiAqL1xuLypqc2hpbnQgLVcwNzkgKi9cbnZhciBtZnAsIC8vIEFzIHdlIGhhdmUgb25seSBvbmUgaW5zdGFuY2Ugb2YgTWFnbmlmaWNQb3B1cCBvYmplY3QsIHdlIGRlZmluZSBpdCBsb2NhbGx5IHRvIG5vdCB0byB1c2UgJ3RoaXMnXG5cdE1hZ25pZmljUG9wdXAgPSBmdW5jdGlvbigpe30sXG5cdF9pc0pRID0gISEod2luZG93LmpRdWVyeSksXG5cdF9wcmV2U3RhdHVzLFxuXHRfd2luZG93ID0gJCh3aW5kb3cpLFxuXHRfZG9jdW1lbnQsXG5cdF9wcmV2Q29udGVudFR5cGUsXG5cdF93cmFwQ2xhc3Nlcyxcblx0X2N1cnJQb3B1cFR5cGU7XG5cblxuLyoqXG4gKiBQcml2YXRlIGZ1bmN0aW9uc1xuICovXG52YXIgX21mcE9uID0gZnVuY3Rpb24obmFtZSwgZikge1xuXHRcdG1mcC5ldi5vbihOUyArIG5hbWUgKyBFVkVOVF9OUywgZik7XG5cdH0sXG5cdF9nZXRFbCA9IGZ1bmN0aW9uKGNsYXNzTmFtZSwgYXBwZW5kVG8sIGh0bWwsIHJhdykge1xuXHRcdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGVsLmNsYXNzTmFtZSA9ICdtZnAtJytjbGFzc05hbWU7XG5cdFx0aWYoaHRtbCkge1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gaHRtbDtcblx0XHR9XG5cdFx0aWYoIXJhdykge1xuXHRcdFx0ZWwgPSAkKGVsKTtcblx0XHRcdGlmKGFwcGVuZFRvKSB7XG5cdFx0XHRcdGVsLmFwcGVuZFRvKGFwcGVuZFRvKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYoYXBwZW5kVG8pIHtcblx0XHRcdGFwcGVuZFRvLmFwcGVuZENoaWxkKGVsKTtcblx0XHR9XG5cdFx0cmV0dXJuIGVsO1xuXHR9LFxuXHRfbWZwVHJpZ2dlciA9IGZ1bmN0aW9uKGUsIGRhdGEpIHtcblx0XHRtZnAuZXYudHJpZ2dlckhhbmRsZXIoTlMgKyBlLCBkYXRhKTtcblxuXHRcdGlmKG1mcC5zdC5jYWxsYmFja3MpIHtcblx0XHRcdC8vIGNvbnZlcnRzIFwibWZwRXZlbnROYW1lXCIgdG8gXCJldmVudE5hbWVcIiBjYWxsYmFjayBhbmQgdHJpZ2dlcnMgaXQgaWYgaXQncyBwcmVzZW50XG5cdFx0XHRlID0gZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGUuc2xpY2UoMSk7XG5cdFx0XHRpZihtZnAuc3QuY2FsbGJhY2tzW2VdKSB7XG5cdFx0XHRcdG1mcC5zdC5jYWxsYmFja3NbZV0uYXBwbHkobWZwLCAkLmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW2RhdGFdKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9nZXRDbG9zZUJ0biA9IGZ1bmN0aW9uKHR5cGUpIHtcblx0XHRpZih0eXBlICE9PSBfY3VyclBvcHVwVHlwZSB8fCAhbWZwLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bikge1xuXHRcdFx0bWZwLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0biA9ICQoIG1mcC5zdC5jbG9zZU1hcmt1cC5yZXBsYWNlKCcldGl0bGUlJywgbWZwLnN0LnRDbG9zZSApICk7XG5cdFx0XHRfY3VyclBvcHVwVHlwZSA9IHR5cGU7XG5cdFx0fVxuXHRcdHJldHVybiBtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuO1xuXHR9LFxuXHQvLyBJbml0aWFsaXplIE1hZ25pZmljIFBvcHVwIG9ubHkgd2hlbiBjYWxsZWQgYXQgbGVhc3Qgb25jZVxuXHRfY2hlY2tJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmKCEkLm1hZ25pZmljUG9wdXAuaW5zdGFuY2UpIHtcblx0XHRcdC8qanNoaW50IC1XMDIwICovXG5cdFx0XHRtZnAgPSBuZXcgTWFnbmlmaWNQb3B1cCgpO1xuXHRcdFx0bWZwLmluaXQoKTtcblx0XHRcdCQubWFnbmlmaWNQb3B1cC5pbnN0YW5jZSA9IG1mcDtcblx0XHR9XG5cdH0sXG5cdC8vIENTUyB0cmFuc2l0aW9uIGRldGVjdGlvbiwgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MjY0ODk5L2RldGVjdC1jc3MtdHJhbnNpdGlvbnMtdXNpbmctamF2YXNjcmlwdC1hbmQtd2l0aG91dC1tb2Rlcm5penJcblx0c3VwcG9ydHNUcmFuc2l0aW9ucyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLnN0eWxlLCAvLyAncycgZm9yIHN0eWxlLiBiZXR0ZXIgdG8gY3JlYXRlIGFuIGVsZW1lbnQgaWYgYm9keSB5ZXQgdG8gZXhpc3Rcblx0XHRcdHYgPSBbJ21zJywnTycsJ01veicsJ1dlYmtpdCddOyAvLyAndicgZm9yIHZlbmRvclxuXG5cdFx0aWYoIHNbJ3RyYW5zaXRpb24nXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0cmV0dXJuIHRydWU7IFxuXHRcdH1cblx0XHRcdFxuXHRcdHdoaWxlKCB2Lmxlbmd0aCApIHtcblx0XHRcdGlmKCB2LnBvcCgpICsgJ1RyYW5zaXRpb24nIGluIHMgKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcdFx0XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cblxuLyoqXG4gKiBQdWJsaWMgZnVuY3Rpb25zXG4gKi9cbk1hZ25pZmljUG9wdXAucHJvdG90eXBlID0ge1xuXG5cdGNvbnN0cnVjdG9yOiBNYWduaWZpY1BvcHVwLFxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyBNYWduaWZpYyBQb3B1cCBwbHVnaW4uIFxuXHQgKiBUaGlzIGZ1bmN0aW9uIGlzIHRyaWdnZXJlZCBvbmx5IG9uY2Ugd2hlbiAkLmZuLm1hZ25pZmljUG9wdXAgb3IgJC5tYWduaWZpY1BvcHVwIGlzIGV4ZWN1dGVkXG5cdCAqL1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgYXBwVmVyc2lvbiA9IG5hdmlnYXRvci5hcHBWZXJzaW9uO1xuXHRcdG1mcC5pc0xvd0lFID0gbWZwLmlzSUU4ID0gZG9jdW1lbnQuYWxsICYmICFkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyO1xuXHRcdG1mcC5pc0FuZHJvaWQgPSAoL2FuZHJvaWQvZ2kpLnRlc3QoYXBwVmVyc2lvbik7XG5cdFx0bWZwLmlzSU9TID0gKC9pcGhvbmV8aXBhZHxpcG9kL2dpKS50ZXN0KGFwcFZlcnNpb24pO1xuXHRcdG1mcC5zdXBwb3J0c1RyYW5zaXRpb24gPSBzdXBwb3J0c1RyYW5zaXRpb25zKCk7XG5cblx0XHQvLyBXZSBkaXNhYmxlIGZpeGVkIHBvc2l0aW9uZWQgbGlnaHRib3ggb24gZGV2aWNlcyB0aGF0IGRvbid0IGhhbmRsZSBpdCBuaWNlbHkuXG5cdFx0Ly8gSWYgeW91IGtub3cgYSBiZXR0ZXIgd2F5IG9mIGRldGVjdGluZyB0aGlzIC0gbGV0IG1lIGtub3cuXG5cdFx0bWZwLnByb2JhYmx5TW9iaWxlID0gKG1mcC5pc0FuZHJvaWQgfHwgbWZwLmlzSU9TIHx8IC8oT3BlcmEgTWluaSl8S2luZGxlfHdlYk9TfEJsYWNrQmVycnl8KE9wZXJhIE1vYmkpfChXaW5kb3dzIFBob25lKXxJRU1vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgKTtcblx0XHRfZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcblxuXHRcdG1mcC5wb3B1cHNDYWNoZSA9IHt9O1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBPcGVucyBwb3B1cFxuXHQgKiBAcGFyYW0gIGRhdGEgW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblx0b3BlbjogZnVuY3Rpb24oZGF0YSkge1xuXG5cdFx0dmFyIGk7XG5cblx0XHRpZihkYXRhLmlzT2JqID09PSBmYWxzZSkgeyBcblx0XHRcdC8vIGNvbnZlcnQgalF1ZXJ5IGNvbGxlY3Rpb24gdG8gYXJyYXkgdG8gYXZvaWQgY29uZmxpY3RzIGxhdGVyXG5cdFx0XHRtZnAuaXRlbXMgPSBkYXRhLml0ZW1zLnRvQXJyYXkoKTtcblxuXHRcdFx0bWZwLmluZGV4ID0gMDtcblx0XHRcdHZhciBpdGVtcyA9IGRhdGEuaXRlbXMsXG5cdFx0XHRcdGl0ZW07XG5cdFx0XHRmb3IoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpdGVtID0gaXRlbXNbaV07XG5cdFx0XHRcdGlmKGl0ZW0ucGFyc2VkKSB7XG5cdFx0XHRcdFx0aXRlbSA9IGl0ZW0uZWxbMF07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoaXRlbSA9PT0gZGF0YS5lbFswXSkge1xuXHRcdFx0XHRcdG1mcC5pbmRleCA9IGk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLml0ZW1zID0gJC5pc0FycmF5KGRhdGEuaXRlbXMpID8gZGF0YS5pdGVtcyA6IFtkYXRhLml0ZW1zXTtcblx0XHRcdG1mcC5pbmRleCA9IGRhdGEuaW5kZXggfHwgMDtcblx0XHR9XG5cblx0XHQvLyBpZiBwb3B1cCBpcyBhbHJlYWR5IG9wZW5lZCAtIHdlIGp1c3QgdXBkYXRlIHRoZSBjb250ZW50XG5cdFx0aWYobWZwLmlzT3Blbikge1xuXHRcdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdG1mcC50eXBlcyA9IFtdOyBcblx0XHRfd3JhcENsYXNzZXMgPSAnJztcblx0XHRpZihkYXRhLm1haW5FbCAmJiBkYXRhLm1haW5FbC5sZW5ndGgpIHtcblx0XHRcdG1mcC5ldiA9IGRhdGEubWFpbkVsLmVxKDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZnAuZXYgPSBfZG9jdW1lbnQ7XG5cdFx0fVxuXG5cdFx0aWYoZGF0YS5rZXkpIHtcblx0XHRcdGlmKCFtZnAucG9wdXBzQ2FjaGVbZGF0YS5rZXldKSB7XG5cdFx0XHRcdG1mcC5wb3B1cHNDYWNoZVtkYXRhLmtleV0gPSB7fTtcblx0XHRcdH1cblx0XHRcdG1mcC5jdXJyVGVtcGxhdGUgPSBtZnAucG9wdXBzQ2FjaGVbZGF0YS5rZXldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZnAuY3VyclRlbXBsYXRlID0ge307XG5cdFx0fVxuXG5cblxuXHRcdG1mcC5zdCA9ICQuZXh0ZW5kKHRydWUsIHt9LCAkLm1hZ25pZmljUG9wdXAuZGVmYXVsdHMsIGRhdGEgKTsgXG5cdFx0bWZwLmZpeGVkQ29udGVudFBvcyA9IG1mcC5zdC5maXhlZENvbnRlbnRQb3MgPT09ICdhdXRvJyA/ICFtZnAucHJvYmFibHlNb2JpbGUgOiBtZnAuc3QuZml4ZWRDb250ZW50UG9zO1xuXG5cdFx0aWYobWZwLnN0Lm1vZGFsKSB7XG5cdFx0XHRtZnAuc3QuY2xvc2VPbkNvbnRlbnRDbGljayA9IGZhbHNlO1xuXHRcdFx0bWZwLnN0LmNsb3NlT25CZ0NsaWNrID0gZmFsc2U7XG5cdFx0XHRtZnAuc3Quc2hvd0Nsb3NlQnRuID0gZmFsc2U7XG5cdFx0XHRtZnAuc3QuZW5hYmxlRXNjYXBlS2V5ID0gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXG5cdFx0Ly8gQnVpbGRpbmcgbWFya3VwXG5cdFx0Ly8gbWFpbiBjb250YWluZXJzIGFyZSBjcmVhdGVkIG9ubHkgb25jZVxuXHRcdGlmKCFtZnAuYmdPdmVybGF5KSB7XG5cblx0XHRcdC8vIERhcmsgb3ZlcmxheVxuXHRcdFx0bWZwLmJnT3ZlcmxheSA9IF9nZXRFbCgnYmcnKS5vbignY2xpY2snK0VWRU5UX05TLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bWZwLmNsb3NlKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0bWZwLndyYXAgPSBfZ2V0RWwoJ3dyYXAnKS5hdHRyKCd0YWJpbmRleCcsIC0xKS5vbignY2xpY2snK0VWRU5UX05TLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmKG1mcC5fY2hlY2tJZkNsb3NlKGUudGFyZ2V0KSkge1xuXHRcdFx0XHRcdG1mcC5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0bWZwLmNvbnRhaW5lciA9IF9nZXRFbCgnY29udGFpbmVyJywgbWZwLndyYXApO1xuXHRcdH1cblxuXHRcdG1mcC5jb250ZW50Q29udGFpbmVyID0gX2dldEVsKCdjb250ZW50Jyk7XG5cdFx0aWYobWZwLnN0LnByZWxvYWRlcikge1xuXHRcdFx0bWZwLnByZWxvYWRlciA9IF9nZXRFbCgncHJlbG9hZGVyJywgbWZwLmNvbnRhaW5lciwgbWZwLnN0LnRMb2FkaW5nKTtcblx0XHR9XG5cblxuXHRcdC8vIEluaXRpYWxpemluZyBtb2R1bGVzXG5cdFx0dmFyIG1vZHVsZXMgPSAkLm1hZ25pZmljUG9wdXAubW9kdWxlcztcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgbiA9IG1vZHVsZXNbaV07XG5cdFx0XHRuID0gbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG4uc2xpY2UoMSk7XG5cdFx0XHRtZnBbJ2luaXQnK25dLmNhbGwobWZwKTtcblx0XHR9XG5cdFx0X21mcFRyaWdnZXIoJ0JlZm9yZU9wZW4nKTtcblxuXG5cdFx0aWYobWZwLnN0LnNob3dDbG9zZUJ0bikge1xuXHRcdFx0Ly8gQ2xvc2UgYnV0dG9uXG5cdFx0XHRpZighbWZwLnN0LmNsb3NlQnRuSW5zaWRlKSB7XG5cdFx0XHRcdG1mcC53cmFwLmFwcGVuZCggX2dldENsb3NlQnRuKCkgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9tZnBPbihNQVJLVVBfUEFSU0VfRVZFTlQsIGZ1bmN0aW9uKGUsIHRlbXBsYXRlLCB2YWx1ZXMsIGl0ZW0pIHtcblx0XHRcdFx0XHR2YWx1ZXMuY2xvc2VfcmVwbGFjZVdpdGggPSBfZ2V0Q2xvc2VCdG4oaXRlbS50eXBlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdF93cmFwQ2xhc3NlcyArPSAnIG1mcC1jbG9zZS1idG4taW4nO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKG1mcC5zdC5hbGlnblRvcCkge1xuXHRcdFx0X3dyYXBDbGFzc2VzICs9ICcgbWZwLWFsaWduLXRvcCc7XG5cdFx0fVxuXG5cdFxuXG5cdFx0aWYobWZwLmZpeGVkQ29udGVudFBvcykge1xuXHRcdFx0bWZwLndyYXAuY3NzKHtcblx0XHRcdFx0b3ZlcmZsb3c6IG1mcC5zdC5vdmVyZmxvd1ksXG5cdFx0XHRcdG92ZXJmbG93WDogJ2hpZGRlbicsXG5cdFx0XHRcdG92ZXJmbG93WTogbWZwLnN0Lm92ZXJmbG93WVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC53cmFwLmNzcyh7IFxuXHRcdFx0XHR0b3A6IF93aW5kb3cuc2Nyb2xsVG9wKCksXG5cdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYoIG1mcC5zdC5maXhlZEJnUG9zID09PSBmYWxzZSB8fCAobWZwLnN0LmZpeGVkQmdQb3MgPT09ICdhdXRvJyAmJiAhbWZwLmZpeGVkQ29udGVudFBvcykgKSB7XG5cdFx0XHRtZnAuYmdPdmVybGF5LmNzcyh7XG5cdFx0XHRcdGhlaWdodDogX2RvY3VtZW50LmhlaWdodCgpLFxuXHRcdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJ1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0XG5cblx0XHRpZihtZnAuc3QuZW5hYmxlRXNjYXBlS2V5KSB7XG5cdFx0XHQvLyBDbG9zZSBvbiBFU0Mga2V5XG5cdFx0XHRfZG9jdW1lbnQub24oJ2tleXVwJyArIEVWRU5UX05TLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmKGUua2V5Q29kZSA9PT0gMjcpIHtcblx0XHRcdFx0XHRtZnAuY2xvc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0X3dpbmRvdy5vbigncmVzaXplJyArIEVWRU5UX05TLCBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC51cGRhdGVTaXplKCk7XG5cdFx0fSk7XG5cblxuXHRcdGlmKCFtZnAuc3QuY2xvc2VPbkNvbnRlbnRDbGljaykge1xuXHRcdFx0X3dyYXBDbGFzc2VzICs9ICcgbWZwLWF1dG8tY3Vyc29yJztcblx0XHR9XG5cdFx0XG5cdFx0aWYoX3dyYXBDbGFzc2VzKVxuXHRcdFx0bWZwLndyYXAuYWRkQ2xhc3MoX3dyYXBDbGFzc2VzKTtcblxuXG5cdFx0Ly8gdGhpcyB0cmlnZ2VycyByZWNhbGN1bGF0aW9uIG9mIGxheW91dCwgc28gd2UgZ2V0IGl0IG9uY2UgdG8gbm90IHRvIHRyaWdnZXIgdHdpY2Vcblx0XHR2YXIgd2luZG93SGVpZ2h0ID0gbWZwLndIID0gX3dpbmRvdy5oZWlnaHQoKTtcblxuXHRcdFxuXHRcdHZhciB3aW5kb3dTdHlsZXMgPSB7fTtcblxuXHRcdGlmKCBtZnAuZml4ZWRDb250ZW50UG9zICkge1xuICAgICAgICAgICAgaWYobWZwLl9oYXNTY3JvbGxCYXIod2luZG93SGVpZ2h0KSl7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSBtZnAuX2dldFNjcm9sbGJhclNpemUoKTtcbiAgICAgICAgICAgICAgICBpZihzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1N0eWxlcy5tYXJnaW5SaWdodCA9IHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRpZihtZnAuZml4ZWRDb250ZW50UG9zKSB7XG5cdFx0XHRpZighbWZwLmlzSUU3KSB7XG5cdFx0XHRcdHdpbmRvd1N0eWxlcy5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaWU3IGRvdWJsZS1zY3JvbGwgYnVnXG5cdFx0XHRcdCQoJ2JvZHksIGh0bWwnKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdFxuXHRcdFxuXHRcdHZhciBjbGFzc2VzVG9hZGQgPSBtZnAuc3QubWFpbkNsYXNzO1xuXHRcdGlmKG1mcC5pc0lFNykge1xuXHRcdFx0Y2xhc3Nlc1RvYWRkICs9ICcgbWZwLWllNyc7XG5cdFx0fVxuXHRcdGlmKGNsYXNzZXNUb2FkZCkge1xuXHRcdFx0bWZwLl9hZGRDbGFzc1RvTUZQKCBjbGFzc2VzVG9hZGQgKTtcblx0XHR9XG5cblx0XHQvLyBhZGQgY29udGVudFxuXHRcdG1mcC51cGRhdGVJdGVtSFRNTCgpO1xuXG5cdFx0X21mcFRyaWdnZXIoJ0J1aWxkQ29udHJvbHMnKTtcblxuXHRcdC8vIHJlbW92ZSBzY3JvbGxiYXIsIGFkZCBtYXJnaW4gZS50LmNcblx0XHQkKCdodG1sJykuY3NzKHdpbmRvd1N0eWxlcyk7XG5cdFx0XG5cdFx0Ly8gYWRkIGV2ZXJ5dGhpbmcgdG8gRE9NXG5cdFx0bWZwLmJnT3ZlcmxheS5hZGQobWZwLndyYXApLnByZXBlbmRUbyggbWZwLnN0LnByZXBlbmRUbyB8fCAkKGRvY3VtZW50LmJvZHkpICk7XG5cblx0XHQvLyBTYXZlIGxhc3QgZm9jdXNlZCBlbGVtZW50XG5cdFx0bWZwLl9sYXN0Rm9jdXNlZEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0XHRcblx0XHQvLyBXYWl0IGZvciBuZXh0IGN5Y2xlIHRvIGFsbG93IENTUyB0cmFuc2l0aW9uXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFxuXHRcdFx0aWYobWZwLmNvbnRlbnQpIHtcblx0XHRcdFx0bWZwLl9hZGRDbGFzc1RvTUZQKFJFQURZX0NMQVNTKTtcblx0XHRcdFx0bWZwLl9zZXRGb2N1cygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaWYgY29udGVudCBpcyBub3QgZGVmaW5lZCAobm90IGxvYWRlZCBlLnQuYykgd2UgYWRkIGNsYXNzIG9ubHkgZm9yIEJHXG5cdFx0XHRcdG1mcC5iZ092ZXJsYXkuYWRkQ2xhc3MoUkVBRFlfQ0xBU1MpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBUcmFwIHRoZSBmb2N1cyBpbiBwb3B1cFxuXHRcdFx0X2RvY3VtZW50Lm9uKCdmb2N1c2luJyArIEVWRU5UX05TLCBtZnAuX29uRm9jdXNJbik7XG5cblx0XHR9LCAxNik7XG5cblx0XHRtZnAuaXNPcGVuID0gdHJ1ZTtcblx0XHRtZnAudXBkYXRlU2l6ZSh3aW5kb3dIZWlnaHQpO1xuXHRcdF9tZnBUcmlnZ2VyKE9QRU5fRVZFTlQpO1xuXG5cdFx0cmV0dXJuIGRhdGE7XG5cdH0sXG5cblx0LyoqXG5cdCAqIENsb3NlcyB0aGUgcG9wdXBcblx0ICovXG5cdGNsb3NlOiBmdW5jdGlvbigpIHtcblx0XHRpZighbWZwLmlzT3BlbikgcmV0dXJuO1xuXHRcdF9tZnBUcmlnZ2VyKEJFRk9SRV9DTE9TRV9FVkVOVCk7XG5cblx0XHRtZnAuaXNPcGVuID0gZmFsc2U7XG5cdFx0Ly8gZm9yIENTUzMgYW5pbWF0aW9uXG5cdFx0aWYobWZwLnN0LnJlbW92YWxEZWxheSAmJiAhbWZwLmlzTG93SUUgJiYgbWZwLnN1cHBvcnRzVHJhbnNpdGlvbiApICB7XG5cdFx0XHRtZnAuX2FkZENsYXNzVG9NRlAoUkVNT1ZJTkdfQ0xBU1MpO1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0bWZwLl9jbG9zZSgpO1xuXHRcdFx0fSwgbWZwLnN0LnJlbW92YWxEZWxheSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC5fY2xvc2UoKTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIEhlbHBlciBmb3IgY2xvc2UoKSBmdW5jdGlvblxuXHQgKi9cblx0X2Nsb3NlOiBmdW5jdGlvbigpIHtcblx0XHRfbWZwVHJpZ2dlcihDTE9TRV9FVkVOVCk7XG5cblx0XHR2YXIgY2xhc3Nlc1RvUmVtb3ZlID0gUkVNT1ZJTkdfQ0xBU1MgKyAnICcgKyBSRUFEWV9DTEFTUyArICcgJztcblxuXHRcdG1mcC5iZ092ZXJsYXkuZGV0YWNoKCk7XG5cdFx0bWZwLndyYXAuZGV0YWNoKCk7XG5cdFx0bWZwLmNvbnRhaW5lci5lbXB0eSgpO1xuXG5cdFx0aWYobWZwLnN0Lm1haW5DbGFzcykge1xuXHRcdFx0Y2xhc3Nlc1RvUmVtb3ZlICs9IG1mcC5zdC5tYWluQ2xhc3MgKyAnICc7XG5cdFx0fVxuXG5cdFx0bWZwLl9yZW1vdmVDbGFzc0Zyb21NRlAoY2xhc3Nlc1RvUmVtb3ZlKTtcblxuXHRcdGlmKG1mcC5maXhlZENvbnRlbnRQb3MpIHtcblx0XHRcdHZhciB3aW5kb3dTdHlsZXMgPSB7bWFyZ2luUmlnaHQ6ICcnfTtcblx0XHRcdGlmKG1mcC5pc0lFNykge1xuXHRcdFx0XHQkKCdib2R5LCBodG1sJykuY3NzKCdvdmVyZmxvdycsICcnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvd1N0eWxlcy5vdmVyZmxvdyA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0JCgnaHRtbCcpLmNzcyh3aW5kb3dTdHlsZXMpO1xuXHRcdH1cblx0XHRcblx0XHRfZG9jdW1lbnQub2ZmKCdrZXl1cCcgKyBFVkVOVF9OUyArICcgZm9jdXNpbicgKyBFVkVOVF9OUyk7XG5cdFx0bWZwLmV2Lm9mZihFVkVOVF9OUyk7XG5cblx0XHQvLyBjbGVhbiB1cCBET00gZWxlbWVudHMgdGhhdCBhcmVuJ3QgcmVtb3ZlZFxuXHRcdG1mcC53cmFwLmF0dHIoJ2NsYXNzJywgJ21mcC13cmFwJykucmVtb3ZlQXR0cignc3R5bGUnKTtcblx0XHRtZnAuYmdPdmVybGF5LmF0dHIoJ2NsYXNzJywgJ21mcC1iZycpO1xuXHRcdG1mcC5jb250YWluZXIuYXR0cignY2xhc3MnLCAnbWZwLWNvbnRhaW5lcicpO1xuXG5cdFx0Ly8gcmVtb3ZlIGNsb3NlIGJ1dHRvbiBmcm9tIHRhcmdldCBlbGVtZW50XG5cdFx0aWYobWZwLnN0LnNob3dDbG9zZUJ0biAmJlxuXHRcdCghbWZwLnN0LmNsb3NlQnRuSW5zaWRlIHx8IG1mcC5jdXJyVGVtcGxhdGVbbWZwLmN1cnJJdGVtLnR5cGVdID09PSB0cnVlKSkge1xuXHRcdFx0aWYobWZwLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bilcblx0XHRcdFx0bWZwLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bi5kZXRhY2goKTtcblx0XHR9XG5cblxuXHRcdGlmKG1mcC5zdC5hdXRvRm9jdXNMYXN0ICYmIG1mcC5fbGFzdEZvY3VzZWRFbCkge1xuXHRcdFx0JChtZnAuX2xhc3RGb2N1c2VkRWwpLmZvY3VzKCk7IC8vIHB1dCB0YWIgZm9jdXMgYmFja1xuXHRcdH1cblx0XHRtZnAuY3Vyckl0ZW0gPSBudWxsO1x0XG5cdFx0bWZwLmNvbnRlbnQgPSBudWxsO1xuXHRcdG1mcC5jdXJyVGVtcGxhdGUgPSBudWxsO1xuXHRcdG1mcC5wcmV2SGVpZ2h0ID0gMDtcblxuXHRcdF9tZnBUcmlnZ2VyKEFGVEVSX0NMT1NFX0VWRU5UKTtcblx0fSxcblx0XG5cdHVwZGF0ZVNpemU6IGZ1bmN0aW9uKHdpbkhlaWdodCkge1xuXG5cdFx0aWYobWZwLmlzSU9TKSB7XG5cdFx0XHQvLyBmaXhlcyBpT1MgbmF2IGJhcnMgaHR0cHM6Ly9naXRodWIuY29tL2RpbXNlbWVub3YvTWFnbmlmaWMtUG9wdXAvaXNzdWVzLzJcblx0XHRcdHZhciB6b29tTGV2ZWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRcdHZhciBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiB6b29tTGV2ZWw7XG5cdFx0XHRtZnAud3JhcC5jc3MoJ2hlaWdodCcsIGhlaWdodCk7XG5cdFx0XHRtZnAud0ggPSBoZWlnaHQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC53SCA9IHdpbkhlaWdodCB8fCBfd2luZG93LmhlaWdodCgpO1xuXHRcdH1cblx0XHQvLyBGaXhlcyAjODQ6IHBvcHVwIGluY29ycmVjdGx5IHBvc2l0aW9uZWQgd2l0aCBwb3NpdGlvbjpyZWxhdGl2ZSBvbiBib2R5XG5cdFx0aWYoIW1mcC5maXhlZENvbnRlbnRQb3MpIHtcblx0XHRcdG1mcC53cmFwLmNzcygnaGVpZ2h0JywgbWZwLndIKTtcblx0XHR9XG5cblx0XHRfbWZwVHJpZ2dlcignUmVzaXplJyk7XG5cblx0fSxcblxuXHQvKipcblx0ICogU2V0IGNvbnRlbnQgb2YgcG9wdXAgYmFzZWQgb24gY3VycmVudCBpbmRleFxuXHQgKi9cblx0dXBkYXRlSXRlbUhUTUw6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpdGVtID0gbWZwLml0ZW1zW21mcC5pbmRleF07XG5cblx0XHQvLyBEZXRhY2ggYW5kIHBlcmZvcm0gbW9kaWZpY2F0aW9uc1xuXHRcdG1mcC5jb250ZW50Q29udGFpbmVyLmRldGFjaCgpO1xuXG5cdFx0aWYobWZwLmNvbnRlbnQpXG5cdFx0XHRtZnAuY29udGVudC5kZXRhY2goKTtcblxuXHRcdGlmKCFpdGVtLnBhcnNlZCkge1xuXHRcdFx0aXRlbSA9IG1mcC5wYXJzZUVsKCBtZnAuaW5kZXggKTtcblx0XHR9XG5cblx0XHR2YXIgdHlwZSA9IGl0ZW0udHlwZTtcblxuXHRcdF9tZnBUcmlnZ2VyKCdCZWZvcmVDaGFuZ2UnLCBbbWZwLmN1cnJJdGVtID8gbWZwLmN1cnJJdGVtLnR5cGUgOiAnJywgdHlwZV0pO1xuXHRcdC8vIEJlZm9yZUNoYW5nZSBldmVudCB3b3JrcyBsaWtlIHNvOlxuXHRcdC8vIF9tZnBPbignQmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24oZSwgcHJldlR5cGUsIG5ld1R5cGUpIHsgfSk7XG5cblx0XHRtZnAuY3Vyckl0ZW0gPSBpdGVtO1xuXG5cdFx0aWYoIW1mcC5jdXJyVGVtcGxhdGVbdHlwZV0pIHtcblx0XHRcdHZhciBtYXJrdXAgPSBtZnAuc3RbdHlwZV0gPyBtZnAuc3RbdHlwZV0ubWFya3VwIDogZmFsc2U7XG5cblx0XHRcdC8vIGFsbG93cyB0byBtb2RpZnkgbWFya3VwXG5cdFx0XHRfbWZwVHJpZ2dlcignRmlyc3RNYXJrdXBQYXJzZScsIG1hcmt1cCk7XG5cblx0XHRcdGlmKG1hcmt1cCkge1xuXHRcdFx0XHRtZnAuY3VyclRlbXBsYXRlW3R5cGVdID0gJChtYXJrdXApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gbWFya3VwIGZvdW5kIHdlIGp1c3QgZGVmaW5lIHRoYXQgdGVtcGxhdGUgaXMgcGFyc2VkXG5cdFx0XHRcdG1mcC5jdXJyVGVtcGxhdGVbdHlwZV0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKF9wcmV2Q29udGVudFR5cGUgJiYgX3ByZXZDb250ZW50VHlwZSAhPT0gaXRlbS50eXBlKSB7XG5cdFx0XHRtZnAuY29udGFpbmVyLnJlbW92ZUNsYXNzKCdtZnAtJytfcHJldkNvbnRlbnRUeXBlKyctaG9sZGVyJyk7XG5cdFx0fVxuXG5cdFx0dmFyIG5ld0NvbnRlbnQgPSBtZnBbJ2dldCcgKyB0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKV0oaXRlbSwgbWZwLmN1cnJUZW1wbGF0ZVt0eXBlXSk7XG5cdFx0bWZwLmFwcGVuZENvbnRlbnQobmV3Q29udGVudCwgdHlwZSk7XG5cblx0XHRpdGVtLnByZWxvYWRlZCA9IHRydWU7XG5cblx0XHRfbWZwVHJpZ2dlcihDSEFOR0VfRVZFTlQsIGl0ZW0pO1xuXHRcdF9wcmV2Q29udGVudFR5cGUgPSBpdGVtLnR5cGU7XG5cblx0XHQvLyBBcHBlbmQgY29udGFpbmVyIGJhY2sgYWZ0ZXIgaXRzIGNvbnRlbnQgY2hhbmdlZFxuXHRcdG1mcC5jb250YWluZXIucHJlcGVuZChtZnAuY29udGVudENvbnRhaW5lcik7XG5cblx0XHRfbWZwVHJpZ2dlcignQWZ0ZXJDaGFuZ2UnKTtcblx0fSxcblxuXG5cdC8qKlxuXHQgKiBTZXQgSFRNTCBjb250ZW50IG9mIHBvcHVwXG5cdCAqL1xuXHRhcHBlbmRDb250ZW50OiBmdW5jdGlvbihuZXdDb250ZW50LCB0eXBlKSB7XG5cdFx0bWZwLmNvbnRlbnQgPSBuZXdDb250ZW50O1xuXG5cdFx0aWYobmV3Q29udGVudCkge1xuXHRcdFx0aWYobWZwLnN0LnNob3dDbG9zZUJ0biAmJiBtZnAuc3QuY2xvc2VCdG5JbnNpZGUgJiZcblx0XHRcdFx0bWZwLmN1cnJUZW1wbGF0ZVt0eXBlXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBtYXJrdXAsIHdlIGp1c3QgYXBwZW5kIGNsb3NlIGJ1dHRvbiBlbGVtZW50IGluc2lkZVxuXHRcdFx0XHRpZighbWZwLmNvbnRlbnQuZmluZCgnLm1mcC1jbG9zZScpLmxlbmd0aCkge1xuXHRcdFx0XHRcdG1mcC5jb250ZW50LmFwcGVuZChfZ2V0Q2xvc2VCdG4oKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1mcC5jb250ZW50ID0gbmV3Q29udGVudDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLmNvbnRlbnQgPSAnJztcblx0XHR9XG5cblx0XHRfbWZwVHJpZ2dlcihCRUZPUkVfQVBQRU5EX0VWRU5UKTtcblx0XHRtZnAuY29udGFpbmVyLmFkZENsYXNzKCdtZnAtJyt0eXBlKyctaG9sZGVyJyk7XG5cblx0XHRtZnAuY29udGVudENvbnRhaW5lci5hcHBlbmQobWZwLmNvbnRlbnQpO1xuXHR9LFxuXG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgTWFnbmlmaWMgUG9wdXAgZGF0YSBvYmplY3QgYmFzZWQgb24gZ2l2ZW4gZGF0YVxuXHQgKiBAcGFyYW0gIHtpbnR9IGluZGV4IEluZGV4IG9mIGl0ZW0gdG8gcGFyc2Vcblx0ICovXG5cdHBhcnNlRWw6IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0dmFyIGl0ZW0gPSBtZnAuaXRlbXNbaW5kZXhdLFxuXHRcdFx0dHlwZTtcblxuXHRcdGlmKGl0ZW0udGFnTmFtZSkge1xuXHRcdFx0aXRlbSA9IHsgZWw6ICQoaXRlbSkgfTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHlwZSA9IGl0ZW0udHlwZTtcblx0XHRcdGl0ZW0gPSB7IGRhdGE6IGl0ZW0sIHNyYzogaXRlbS5zcmMgfTtcblx0XHR9XG5cblx0XHRpZihpdGVtLmVsKSB7XG5cdFx0XHR2YXIgdHlwZXMgPSBtZnAudHlwZXM7XG5cblx0XHRcdC8vIGNoZWNrIGZvciAnbWZwLVRZUEUnIGNsYXNzXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdHlwZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYoIGl0ZW0uZWwuaGFzQ2xhc3MoJ21mcC0nK3R5cGVzW2ldKSApIHtcblx0XHRcdFx0XHR0eXBlID0gdHlwZXNbaV07XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aXRlbS5zcmMgPSBpdGVtLmVsLmF0dHIoJ2RhdGEtbWZwLXNyYycpO1xuXHRcdFx0aWYoIWl0ZW0uc3JjKSB7XG5cdFx0XHRcdGl0ZW0uc3JjID0gaXRlbS5lbC5hdHRyKCdocmVmJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aXRlbS50eXBlID0gdHlwZSB8fCBtZnAuc3QudHlwZSB8fCAnaW5saW5lJztcblx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0aXRlbS5wYXJzZWQgPSB0cnVlO1xuXHRcdG1mcC5pdGVtc1tpbmRleF0gPSBpdGVtO1xuXHRcdF9tZnBUcmlnZ2VyKCdFbGVtZW50UGFyc2UnLCBpdGVtKTtcblxuXHRcdHJldHVybiBtZnAuaXRlbXNbaW5kZXhdO1xuXHR9LFxuXG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIHNpbmdsZSBwb3B1cCBvciBhIGdyb3VwIG9mIHBvcHVwc1xuXHQgKi9cblx0YWRkR3JvdXA6IGZ1bmN0aW9uKGVsLCBvcHRpb25zKSB7XG5cdFx0dmFyIGVIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0ZS5tZnBFbCA9IHRoaXM7XG5cdFx0XHRtZnAuX29wZW5DbGljayhlLCBlbCwgb3B0aW9ucyk7XG5cdFx0fTtcblxuXHRcdGlmKCFvcHRpb25zKSB7XG5cdFx0XHRvcHRpb25zID0ge307XG5cdFx0fVxuXG5cdFx0dmFyIGVOYW1lID0gJ2NsaWNrLm1hZ25pZmljUG9wdXAnO1xuXHRcdG9wdGlvbnMubWFpbkVsID0gZWw7XG5cblx0XHRpZihvcHRpb25zLml0ZW1zKSB7XG5cdFx0XHRvcHRpb25zLmlzT2JqID0gdHJ1ZTtcblx0XHRcdGVsLm9mZihlTmFtZSkub24oZU5hbWUsIGVIYW5kbGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3B0aW9ucy5pc09iaiA9IGZhbHNlO1xuXHRcdFx0aWYob3B0aW9ucy5kZWxlZ2F0ZSkge1xuXHRcdFx0XHRlbC5vZmYoZU5hbWUpLm9uKGVOYW1lLCBvcHRpb25zLmRlbGVnYXRlICwgZUhhbmRsZXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3B0aW9ucy5pdGVtcyA9IGVsO1xuXHRcdFx0XHRlbC5vZmYoZU5hbWUpLm9uKGVOYW1lLCBlSGFuZGxlcik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfb3BlbkNsaWNrOiBmdW5jdGlvbihlLCBlbCwgb3B0aW9ucykge1xuXHRcdHZhciBtaWRDbGljayA9IG9wdGlvbnMubWlkQ2xpY2sgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubWlkQ2xpY2sgOiAkLm1hZ25pZmljUG9wdXAuZGVmYXVsdHMubWlkQ2xpY2s7XG5cblxuXHRcdGlmKCFtaWRDbGljayAmJiAoIGUud2hpY2ggPT09IDIgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fCBlLmFsdEtleSB8fCBlLnNoaWZ0S2V5ICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGRpc2FibGVPbiA9IG9wdGlvbnMuZGlzYWJsZU9uICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmRpc2FibGVPbiA6ICQubWFnbmlmaWNQb3B1cC5kZWZhdWx0cy5kaXNhYmxlT247XG5cblx0XHRpZihkaXNhYmxlT24pIHtcblx0XHRcdGlmKCQuaXNGdW5jdGlvbihkaXNhYmxlT24pKSB7XG5cdFx0XHRcdGlmKCAhZGlzYWJsZU9uLmNhbGwobWZwKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHsgLy8gZWxzZSBpdCdzIG51bWJlclxuXHRcdFx0XHRpZiggX3dpbmRvdy53aWR0aCgpIDwgZGlzYWJsZU9uICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoZS50eXBlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdC8vIFRoaXMgd2lsbCBwcmV2ZW50IHBvcHVwIGZyb20gY2xvc2luZyBpZiBlbGVtZW50IGlzIGluc2lkZSBhbmQgcG9wdXAgaXMgYWxyZWFkeSBvcGVuZWRcblx0XHRcdGlmKG1mcC5pc09wZW4pIHtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRvcHRpb25zLmVsID0gJChlLm1mcEVsKTtcblx0XHRpZihvcHRpb25zLmRlbGVnYXRlKSB7XG5cdFx0XHRvcHRpb25zLml0ZW1zID0gZWwuZmluZChvcHRpb25zLmRlbGVnYXRlKTtcblx0XHR9XG5cdFx0bWZwLm9wZW4ob3B0aW9ucyk7XG5cdH0sXG5cblxuXHQvKipcblx0ICogVXBkYXRlcyB0ZXh0IG9uIHByZWxvYWRlclxuXHQgKi9cblx0dXBkYXRlU3RhdHVzOiBmdW5jdGlvbihzdGF0dXMsIHRleHQpIHtcblxuXHRcdGlmKG1mcC5wcmVsb2FkZXIpIHtcblx0XHRcdGlmKF9wcmV2U3RhdHVzICE9PSBzdGF0dXMpIHtcblx0XHRcdFx0bWZwLmNvbnRhaW5lci5yZW1vdmVDbGFzcygnbWZwLXMtJytfcHJldlN0YXR1cyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCF0ZXh0ICYmIHN0YXR1cyA9PT0gJ2xvYWRpbmcnKSB7XG5cdFx0XHRcdHRleHQgPSBtZnAuc3QudExvYWRpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBkYXRhID0ge1xuXHRcdFx0XHRzdGF0dXM6IHN0YXR1cyxcblx0XHRcdFx0dGV4dDogdGV4dFxuXHRcdFx0fTtcblx0XHRcdC8vIGFsbG93cyB0byBtb2RpZnkgc3RhdHVzXG5cdFx0XHRfbWZwVHJpZ2dlcignVXBkYXRlU3RhdHVzJywgZGF0YSk7XG5cblx0XHRcdHN0YXR1cyA9IGRhdGEuc3RhdHVzO1xuXHRcdFx0dGV4dCA9IGRhdGEudGV4dDtcblxuXHRcdFx0bWZwLnByZWxvYWRlci5odG1sKHRleHQpO1xuXG5cdFx0XHRtZnAucHJlbG9hZGVyLmZpbmQoJ2EnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0bWZwLmNvbnRhaW5lci5hZGRDbGFzcygnbWZwLXMtJytzdGF0dXMpO1xuXHRcdFx0X3ByZXZTdGF0dXMgPSBzdGF0dXM7XG5cdFx0fVxuXHR9LFxuXG5cblx0Lypcblx0XHRcIlByaXZhdGVcIiBoZWxwZXJzIHRoYXQgYXJlbid0IHByaXZhdGUgYXQgYWxsXG5cdCAqL1xuXHQvLyBDaGVjayB0byBjbG9zZSBwb3B1cCBvciBub3Rcblx0Ly8gXCJ0YXJnZXRcIiBpcyBhbiBlbGVtZW50IHRoYXQgd2FzIGNsaWNrZWRcblx0X2NoZWNrSWZDbG9zZTogZnVuY3Rpb24odGFyZ2V0KSB7XG5cblx0XHRpZigkKHRhcmdldCkuaGFzQ2xhc3MoUFJFVkVOVF9DTE9TRV9DTEFTUykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgY2xvc2VPbkNvbnRlbnQgPSBtZnAuc3QuY2xvc2VPbkNvbnRlbnRDbGljaztcblx0XHR2YXIgY2xvc2VPbkJnID0gbWZwLnN0LmNsb3NlT25CZ0NsaWNrO1xuXG5cdFx0aWYoY2xvc2VPbkNvbnRlbnQgJiYgY2xvc2VPbkJnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBXZSBjbG9zZSB0aGUgcG9wdXAgaWYgY2xpY2sgaXMgb24gY2xvc2UgYnV0dG9uIG9yIG9uIHByZWxvYWRlci4gT3IgaWYgdGhlcmUgaXMgbm8gY29udGVudC5cblx0XHRcdGlmKCFtZnAuY29udGVudCB8fCAkKHRhcmdldCkuaGFzQ2xhc3MoJ21mcC1jbG9zZScpIHx8IChtZnAucHJlbG9hZGVyICYmIHRhcmdldCA9PT0gbWZwLnByZWxvYWRlclswXSkgKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBpZiBjbGljayBpcyBvdXRzaWRlIHRoZSBjb250ZW50XG5cdFx0XHRpZiggICh0YXJnZXQgIT09IG1mcC5jb250ZW50WzBdICYmICEkLmNvbnRhaW5zKG1mcC5jb250ZW50WzBdLCB0YXJnZXQpKSAgKSB7XG5cdFx0XHRcdGlmKGNsb3NlT25CZykge1xuXHRcdFx0XHRcdC8vIGxhc3QgY2hlY2ssIGlmIHRoZSBjbGlja2VkIGVsZW1lbnQgaXMgaW4gRE9NLCAoaW4gY2FzZSBpdCdzIHJlbW92ZWQgb25jbGljaylcblx0XHRcdFx0XHRpZiggJC5jb250YWlucyhkb2N1bWVudCwgdGFyZ2V0KSApIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKGNsb3NlT25Db250ZW50KSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0X2FkZENsYXNzVG9NRlA6IGZ1bmN0aW9uKGNOYW1lKSB7XG5cdFx0bWZwLmJnT3ZlcmxheS5hZGRDbGFzcyhjTmFtZSk7XG5cdFx0bWZwLndyYXAuYWRkQ2xhc3MoY05hbWUpO1xuXHR9LFxuXHRfcmVtb3ZlQ2xhc3NGcm9tTUZQOiBmdW5jdGlvbihjTmFtZSkge1xuXHRcdHRoaXMuYmdPdmVybGF5LnJlbW92ZUNsYXNzKGNOYW1lKTtcblx0XHRtZnAud3JhcC5yZW1vdmVDbGFzcyhjTmFtZSk7XG5cdH0sXG5cdF9oYXNTY3JvbGxCYXI6IGZ1bmN0aW9uKHdpbkhlaWdodCkge1xuXHRcdHJldHVybiAoICAobWZwLmlzSUU3ID8gX2RvY3VtZW50LmhlaWdodCgpIDogZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpID4gKHdpbkhlaWdodCB8fCBfd2luZG93LmhlaWdodCgpKSApO1xuXHR9LFxuXHRfc2V0Rm9jdXM6IGZ1bmN0aW9uKCkge1xuXHRcdChtZnAuc3QuZm9jdXMgPyBtZnAuY29udGVudC5maW5kKG1mcC5zdC5mb2N1cykuZXEoMCkgOiBtZnAud3JhcCkuZm9jdXMoKTtcblx0fSxcblx0X29uRm9jdXNJbjogZnVuY3Rpb24oZSkge1xuXHRcdGlmKCBlLnRhcmdldCAhPT0gbWZwLndyYXBbMF0gJiYgISQuY29udGFpbnMobWZwLndyYXBbMF0sIGUudGFyZ2V0KSApIHtcblx0XHRcdG1mcC5fc2V0Rm9jdXMoKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0sXG5cdF9wYXJzZU1hcmt1cDogZnVuY3Rpb24odGVtcGxhdGUsIHZhbHVlcywgaXRlbSkge1xuXHRcdHZhciBhcnI7XG5cdFx0aWYoaXRlbS5kYXRhKSB7XG5cdFx0XHR2YWx1ZXMgPSAkLmV4dGVuZChpdGVtLmRhdGEsIHZhbHVlcyk7XG5cdFx0fVxuXHRcdF9tZnBUcmlnZ2VyKE1BUktVUF9QQVJTRV9FVkVOVCwgW3RlbXBsYXRlLCB2YWx1ZXMsIGl0ZW1dICk7XG5cblx0XHQkLmVhY2godmFsdWVzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG5cdFx0XHRpZih2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGFyciA9IGtleS5zcGxpdCgnXycpO1xuXHRcdFx0aWYoYXJyLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0dmFyIGVsID0gdGVtcGxhdGUuZmluZChFVkVOVF9OUyArICctJythcnJbMF0pO1xuXG5cdFx0XHRcdGlmKGVsLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHR2YXIgYXR0ciA9IGFyclsxXTtcblx0XHRcdFx0XHRpZihhdHRyID09PSAncmVwbGFjZVdpdGgnKSB7XG5cdFx0XHRcdFx0XHRpZihlbFswXSAhPT0gdmFsdWVbMF0pIHtcblx0XHRcdFx0XHRcdFx0ZWwucmVwbGFjZVdpdGgodmFsdWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZihhdHRyID09PSAnaW1nJykge1xuXHRcdFx0XHRcdFx0aWYoZWwuaXMoJ2ltZycpKSB7XG5cdFx0XHRcdFx0XHRcdGVsLmF0dHIoJ3NyYycsIHZhbHVlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGVsLnJlcGxhY2VXaXRoKCAkKCc8aW1nPicpLmF0dHIoJ3NyYycsIHZhbHVlKS5hdHRyKCdjbGFzcycsIGVsLmF0dHIoJ2NsYXNzJykpICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVsLmF0dHIoYXJyWzFdLCB2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRlbXBsYXRlLmZpbmQoRVZFTlRfTlMgKyAnLScra2V5KS5odG1sKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblxuXHRfZ2V0U2Nyb2xsYmFyU2l6ZTogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gdGh4IERhdmlkXG5cdFx0aWYobWZwLnNjcm9sbGJhclNpemUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRzY3JvbGxEaXYuc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDogOTlweDsgaGVpZ2h0OiA5OXB4OyBvdmVyZmxvdzogc2Nyb2xsOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTk5OTlweDsnO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuXHRcdFx0bWZwLnNjcm9sbGJhclNpemUgPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG5cdFx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG5cdFx0fVxuXHRcdHJldHVybiBtZnAuc2Nyb2xsYmFyU2l6ZTtcblx0fVxuXG59OyAvKiBNYWduaWZpY1BvcHVwIGNvcmUgcHJvdG90eXBlIGVuZCAqL1xuXG5cblxuXG4vKipcbiAqIFB1YmxpYyBzdGF0aWMgZnVuY3Rpb25zXG4gKi9cbiQubWFnbmlmaWNQb3B1cCA9IHtcblx0aW5zdGFuY2U6IG51bGwsXG5cdHByb3RvOiBNYWduaWZpY1BvcHVwLnByb3RvdHlwZSxcblx0bW9kdWxlczogW10sXG5cblx0b3BlbjogZnVuY3Rpb24ob3B0aW9ucywgaW5kZXgpIHtcblx0XHRfY2hlY2tJbnN0YW5jZSgpO1xuXG5cdFx0aWYoIW9wdGlvbnMpIHtcblx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRvcHRpb25zLmlzT2JqID0gdHJ1ZTtcblx0XHRvcHRpb25zLmluZGV4ID0gaW5kZXggfHwgMDtcblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZS5vcGVuKG9wdGlvbnMpO1xuXHR9LFxuXG5cdGNsb3NlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJC5tYWduaWZpY1BvcHVwLmluc3RhbmNlICYmICQubWFnbmlmaWNQb3B1cC5pbnN0YW5jZS5jbG9zZSgpO1xuXHR9LFxuXG5cdHJlZ2lzdGVyTW9kdWxlOiBmdW5jdGlvbihuYW1lLCBtb2R1bGUpIHtcblx0XHRpZihtb2R1bGUub3B0aW9ucykge1xuXHRcdFx0JC5tYWduaWZpY1BvcHVwLmRlZmF1bHRzW25hbWVdID0gbW9kdWxlLm9wdGlvbnM7XG5cdFx0fVxuXHRcdCQuZXh0ZW5kKHRoaXMucHJvdG8sIG1vZHVsZS5wcm90byk7XG5cdFx0dGhpcy5tb2R1bGVzLnB1c2gobmFtZSk7XG5cdH0sXG5cblx0ZGVmYXVsdHM6IHtcblxuXHRcdC8vIEluZm8gYWJvdXQgb3B0aW9ucyBpcyBpbiBkb2NzOlxuXHRcdC8vIGh0dHA6Ly9kaW1zZW1lbm92LmNvbS9wbHVnaW5zL21hZ25pZmljLXBvcHVwL2RvY3VtZW50YXRpb24uaHRtbCNvcHRpb25zXG5cblx0XHRkaXNhYmxlT246IDAsXG5cblx0XHRrZXk6IG51bGwsXG5cblx0XHRtaWRDbGljazogZmFsc2UsXG5cblx0XHRtYWluQ2xhc3M6ICcnLFxuXG5cdFx0cHJlbG9hZGVyOiB0cnVlLFxuXG5cdFx0Zm9jdXM6ICcnLCAvLyBDU1Mgc2VsZWN0b3Igb2YgaW5wdXQgdG8gZm9jdXMgYWZ0ZXIgcG9wdXAgaXMgb3BlbmVkXG5cblx0XHRjbG9zZU9uQ29udGVudENsaWNrOiBmYWxzZSxcblxuXHRcdGNsb3NlT25CZ0NsaWNrOiB0cnVlLFxuXG5cdFx0Y2xvc2VCdG5JbnNpZGU6IHRydWUsXG5cblx0XHRzaG93Q2xvc2VCdG46IHRydWUsXG5cblx0XHRlbmFibGVFc2NhcGVLZXk6IHRydWUsXG5cblx0XHRtb2RhbDogZmFsc2UsXG5cblx0XHRhbGlnblRvcDogZmFsc2UsXG5cblx0XHRyZW1vdmFsRGVsYXk6IDAsXG5cblx0XHRwcmVwZW5kVG86IG51bGwsXG5cblx0XHRmaXhlZENvbnRlbnRQb3M6ICdhdXRvJyxcblxuXHRcdGZpeGVkQmdQb3M6ICdhdXRvJyxcblxuXHRcdG92ZXJmbG93WTogJ2F1dG8nLFxuXG5cdFx0Y2xvc2VNYXJrdXA6ICc8YnV0dG9uIHRpdGxlPVwiJXRpdGxlJVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1mcC1jbG9zZVwiPiYjMjE1OzwvYnV0dG9uPicsXG5cblx0XHR0Q2xvc2U6ICdDbG9zZSAoRXNjKScsXG5cblx0XHR0TG9hZGluZzogJ0xvYWRpbmcuLi4nLFxuXG5cdFx0YXV0b0ZvY3VzTGFzdDogdHJ1ZVxuXG5cdH1cbn07XG5cblxuXG4kLmZuLm1hZ25pZmljUG9wdXAgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cdF9jaGVja0luc3RhbmNlKCk7XG5cblx0dmFyIGpxRWwgPSAkKHRoaXMpO1xuXG5cdC8vIFdlIGNhbGwgc29tZSBBUEkgbWV0aG9kIG9mIGZpcnN0IHBhcmFtIGlzIGEgc3RyaW5nXG5cdGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdGlmKG9wdGlvbnMgPT09ICdvcGVuJykge1xuXHRcdFx0dmFyIGl0ZW1zLFxuXHRcdFx0XHRpdGVtT3B0cyA9IF9pc0pRID8ganFFbC5kYXRhKCdtYWduaWZpY1BvcHVwJykgOiBqcUVsWzBdLm1hZ25pZmljUG9wdXAsXG5cdFx0XHRcdGluZGV4ID0gcGFyc2VJbnQoYXJndW1lbnRzWzFdLCAxMCkgfHwgMDtcblxuXHRcdFx0aWYoaXRlbU9wdHMuaXRlbXMpIHtcblx0XHRcdFx0aXRlbXMgPSBpdGVtT3B0cy5pdGVtc1tpbmRleF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpdGVtcyA9IGpxRWw7XG5cdFx0XHRcdGlmKGl0ZW1PcHRzLmRlbGVnYXRlKSB7XG5cdFx0XHRcdFx0aXRlbXMgPSBpdGVtcy5maW5kKGl0ZW1PcHRzLmRlbGVnYXRlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpdGVtcyA9IGl0ZW1zLmVxKCBpbmRleCApO1xuXHRcdFx0fVxuXHRcdFx0bWZwLl9vcGVuQ2xpY2soe21mcEVsOml0ZW1zfSwganFFbCwgaXRlbU9wdHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZihtZnAuaXNPcGVuKVxuXHRcdFx0XHRtZnBbb3B0aW9uc10uYXBwbHkobWZwLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcblx0XHR9XG5cblx0fSBlbHNlIHtcblx0XHQvLyBjbG9uZSBvcHRpb25zIG9ialxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgb3B0aW9ucyk7XG5cblx0XHQvKlxuXHRcdCAqIEFzIFplcHRvIGRvZXNuJ3Qgc3VwcG9ydCAuZGF0YSgpIG1ldGhvZCBmb3Igb2JqZWN0c1xuXHRcdCAqIGFuZCBpdCB3b3JrcyBvbmx5IGluIG5vcm1hbCBicm93c2Vyc1xuXHRcdCAqIHdlIGFzc2lnbiBcIm9wdGlvbnNcIiBvYmplY3QgZGlyZWN0bHkgdG8gdGhlIERPTSBlbGVtZW50LiBGVFchXG5cdFx0ICovXG5cdFx0aWYoX2lzSlEpIHtcblx0XHRcdGpxRWwuZGF0YSgnbWFnbmlmaWNQb3B1cCcsIG9wdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRqcUVsWzBdLm1hZ25pZmljUG9wdXAgPSBvcHRpb25zO1xuXHRcdH1cblxuXHRcdG1mcC5hZGRHcm91cChqcUVsLCBvcHRpb25zKTtcblxuXHR9XG5cdHJldHVybiBqcUVsO1xufTtcblxuLyo+PmNvcmUqL1xuXG4vKj4+aW5saW5lKi9cblxudmFyIElOTElORV9OUyA9ICdpbmxpbmUnLFxuXHRfaGlkZGVuQ2xhc3MsXG5cdF9pbmxpbmVQbGFjZWhvbGRlcixcblx0X2xhc3RJbmxpbmVFbGVtZW50LFxuXHRfcHV0SW5saW5lRWxlbWVudHNCYWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoX2xhc3RJbmxpbmVFbGVtZW50KSB7XG5cdFx0XHRfaW5saW5lUGxhY2Vob2xkZXIuYWZ0ZXIoIF9sYXN0SW5saW5lRWxlbWVudC5hZGRDbGFzcyhfaGlkZGVuQ2xhc3MpICkuZGV0YWNoKCk7XG5cdFx0XHRfbGFzdElubGluZUVsZW1lbnQgPSBudWxsO1xuXHRcdH1cblx0fTtcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKElOTElORV9OUywge1xuXHRvcHRpb25zOiB7XG5cdFx0aGlkZGVuQ2xhc3M6ICdoaWRlJywgLy8gd2lsbCBiZSBhcHBlbmRlZCB3aXRoIGBtZnAtYCBwcmVmaXhcblx0XHRtYXJrdXA6ICcnLFxuXHRcdHROb3RGb3VuZDogJ0NvbnRlbnQgbm90IGZvdW5kJ1xuXHR9LFxuXHRwcm90bzoge1xuXG5cdFx0aW5pdElubGluZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRtZnAudHlwZXMucHVzaChJTkxJTkVfTlMpO1xuXG5cdFx0XHRfbWZwT24oQ0xPU0VfRVZFTlQrJy4nK0lOTElORV9OUywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdF9wdXRJbmxpbmVFbGVtZW50c0JhY2soKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRnZXRJbmxpbmU6IGZ1bmN0aW9uKGl0ZW0sIHRlbXBsYXRlKSB7XG5cblx0XHRcdF9wdXRJbmxpbmVFbGVtZW50c0JhY2soKTtcblxuXHRcdFx0aWYoaXRlbS5zcmMpIHtcblx0XHRcdFx0dmFyIGlubGluZVN0ID0gbWZwLnN0LmlubGluZSxcblx0XHRcdFx0XHRlbCA9ICQoaXRlbS5zcmMpO1xuXG5cdFx0XHRcdGlmKGVsLmxlbmd0aCkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgdGFyZ2V0IGVsZW1lbnQgaGFzIHBhcmVudCAtIHdlIHJlcGxhY2UgaXQgd2l0aCBwbGFjZWhvbGRlciBhbmQgcHV0IGl0IGJhY2sgYWZ0ZXIgcG9wdXAgaXMgY2xvc2VkXG5cdFx0XHRcdFx0dmFyIHBhcmVudCA9IGVsWzBdLnBhcmVudE5vZGU7XG5cdFx0XHRcdFx0aWYocGFyZW50ICYmIHBhcmVudC50YWdOYW1lKSB7XG5cdFx0XHRcdFx0XHRpZighX2lubGluZVBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdFx0XHRcdF9oaWRkZW5DbGFzcyA9IGlubGluZVN0LmhpZGRlbkNsYXNzO1xuXHRcdFx0XHRcdFx0XHRfaW5saW5lUGxhY2Vob2xkZXIgPSBfZ2V0RWwoX2hpZGRlbkNsYXNzKTtcblx0XHRcdFx0XHRcdFx0X2hpZGRlbkNsYXNzID0gJ21mcC0nK19oaWRkZW5DbGFzcztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIHJlcGxhY2UgdGFyZ2V0IGlubGluZSBlbGVtZW50IHdpdGggcGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdF9sYXN0SW5saW5lRWxlbWVudCA9IGVsLmFmdGVyKF9pbmxpbmVQbGFjZWhvbGRlcikuZGV0YWNoKCkucmVtb3ZlQ2xhc3MoX2hpZGRlbkNsYXNzKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdyZWFkeScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ2Vycm9yJywgaW5saW5lU3QudE5vdEZvdW5kKTtcblx0XHRcdFx0XHRlbCA9ICQoJzxkaXY+Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpdGVtLmlubGluZUVsZW1lbnQgPSBlbDtcblx0XHRcdFx0cmV0dXJuIGVsO1xuXHRcdFx0fVxuXG5cdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdyZWFkeScpO1xuXHRcdFx0bWZwLl9wYXJzZU1hcmt1cCh0ZW1wbGF0ZSwge30sIGl0ZW0pO1xuXHRcdFx0cmV0dXJuIHRlbXBsYXRlO1xuXHRcdH1cblx0fVxufSk7XG5cbi8qPj5pbmxpbmUqL1xuXG4vKj4+YWpheCovXG52YXIgQUpBWF9OUyA9ICdhamF4Jyxcblx0X2FqYXhDdXIsXG5cdF9yZW1vdmVBamF4Q3Vyc29yID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoX2FqYXhDdXIpIHtcblx0XHRcdCQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoX2FqYXhDdXIpO1xuXHRcdH1cblx0fSxcblx0X2Rlc3Ryb3lBamF4UmVxdWVzdCA9IGZ1bmN0aW9uKCkge1xuXHRcdF9yZW1vdmVBamF4Q3Vyc29yKCk7XG5cdFx0aWYobWZwLnJlcSkge1xuXHRcdFx0bWZwLnJlcS5hYm9ydCgpO1xuXHRcdH1cblx0fTtcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKEFKQVhfTlMsIHtcblxuXHRvcHRpb25zOiB7XG5cdFx0c2V0dGluZ3M6IG51bGwsXG5cdFx0Y3Vyc29yOiAnbWZwLWFqYXgtY3VyJyxcblx0XHR0RXJyb3I6ICc8YSBocmVmPVwiJXVybCVcIj5UaGUgY29udGVudDwvYT4gY291bGQgbm90IGJlIGxvYWRlZC4nXG5cdH0sXG5cblx0cHJvdG86IHtcblx0XHRpbml0QWpheDogZnVuY3Rpb24oKSB7XG5cdFx0XHRtZnAudHlwZXMucHVzaChBSkFYX05TKTtcblx0XHRcdF9hamF4Q3VyID0gbWZwLnN0LmFqYXguY3Vyc29yO1xuXG5cdFx0XHRfbWZwT24oQ0xPU0VfRVZFTlQrJy4nK0FKQVhfTlMsIF9kZXN0cm95QWpheFJlcXVlc3QpO1xuXHRcdFx0X21mcE9uKCdCZWZvcmVDaGFuZ2UuJyArIEFKQVhfTlMsIF9kZXN0cm95QWpheFJlcXVlc3QpO1xuXHRcdH0sXG5cdFx0Z2V0QWpheDogZnVuY3Rpb24oaXRlbSkge1xuXG5cdFx0XHRpZihfYWpheEN1cikge1xuXHRcdFx0XHQkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKF9hamF4Q3VyKTtcblx0XHRcdH1cblxuXHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnbG9hZGluZycpO1xuXG5cdFx0XHR2YXIgb3B0cyA9ICQuZXh0ZW5kKHtcblx0XHRcdFx0dXJsOiBpdGVtLnNyYyxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSwgdGV4dFN0YXR1cywganFYSFIpIHtcblx0XHRcdFx0XHR2YXIgdGVtcCA9IHtcblx0XHRcdFx0XHRcdGRhdGE6ZGF0YSxcblx0XHRcdFx0XHRcdHhocjpqcVhIUlxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRfbWZwVHJpZ2dlcignUGFyc2VBamF4JywgdGVtcCk7XG5cblx0XHRcdFx0XHRtZnAuYXBwZW5kQ29udGVudCggJCh0ZW1wLmRhdGEpLCBBSkFYX05TICk7XG5cblx0XHRcdFx0XHRpdGVtLmZpbmlzaGVkID0gdHJ1ZTtcblxuXHRcdFx0XHRcdF9yZW1vdmVBamF4Q3Vyc29yKCk7XG5cblx0XHRcdFx0XHRtZnAuX3NldEZvY3VzKCk7XG5cblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0bWZwLndyYXAuYWRkQ2xhc3MoUkVBRFlfQ0xBU1MpO1xuXHRcdFx0XHRcdH0sIDE2KTtcblxuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cblx0XHRcdFx0XHRfbWZwVHJpZ2dlcignQWpheENvbnRlbnRBZGRlZCcpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0X3JlbW92ZUFqYXhDdXJzb3IoKTtcblx0XHRcdFx0XHRpdGVtLmZpbmlzaGVkID0gaXRlbS5sb2FkRXJyb3IgPSB0cnVlO1xuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ2Vycm9yJywgbWZwLnN0LmFqYXgudEVycm9yLnJlcGxhY2UoJyV1cmwlJywgaXRlbS5zcmMpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgbWZwLnN0LmFqYXguc2V0dGluZ3MpO1xuXG5cdFx0XHRtZnAucmVxID0gJC5hamF4KG9wdHMpO1xuXG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHR9XG59KTtcblxuLyo+PmFqYXgqL1xuXG4vKj4+aW1hZ2UqL1xudmFyIF9pbWdJbnRlcnZhbCxcblx0X2dldFRpdGxlID0gZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmKGl0ZW0uZGF0YSAmJiBpdGVtLmRhdGEudGl0bGUgIT09IHVuZGVmaW5lZClcblx0XHRcdHJldHVybiBpdGVtLmRhdGEudGl0bGU7XG5cblx0XHR2YXIgc3JjID0gbWZwLnN0LmltYWdlLnRpdGxlU3JjO1xuXG5cdFx0aWYoc3JjKSB7XG5cdFx0XHRpZigkLmlzRnVuY3Rpb24oc3JjKSkge1xuXHRcdFx0XHRyZXR1cm4gc3JjLmNhbGwobWZwLCBpdGVtKTtcblx0XHRcdH0gZWxzZSBpZihpdGVtLmVsKSB7XG5cdFx0XHRcdHJldHVybiBpdGVtLmVsLmF0dHIoc3JjKSB8fCAnJztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9O1xuXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoJ2ltYWdlJywge1xuXG5cdG9wdGlvbnM6IHtcblx0XHRtYXJrdXA6ICc8ZGl2IGNsYXNzPVwibWZwLWZpZ3VyZVwiPicrXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJtZnAtY2xvc2VcIj48L2Rpdj4nK1xuXHRcdFx0XHRcdCc8ZmlndXJlPicrXG5cdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1pbWdcIj48L2Rpdj4nK1xuXHRcdFx0XHRcdFx0JzxmaWdjYXB0aW9uPicrXG5cdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLWJvdHRvbS1iYXJcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLXRpdGxlXCI+PC9kaXY+Jytcblx0XHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1jb3VudGVyXCI+PC9kaXY+Jytcblx0XHRcdFx0XHRcdFx0JzwvZGl2PicrXG5cdFx0XHRcdFx0XHQnPC9maWdjYXB0aW9uPicrXG5cdFx0XHRcdFx0JzwvZmlndXJlPicrXG5cdFx0XHRcdCc8L2Rpdj4nLFxuXHRcdGN1cnNvcjogJ21mcC16b29tLW91dC1jdXInLFxuXHRcdHRpdGxlU3JjOiAndGl0bGUnLFxuXHRcdHZlcnRpY2FsRml0OiB0cnVlLFxuXHRcdHRFcnJvcjogJzxhIGhyZWY9XCIldXJsJVwiPlRoZSBpbWFnZTwvYT4gY291bGQgbm90IGJlIGxvYWRlZC4nXG5cdH0sXG5cblx0cHJvdG86IHtcblx0XHRpbml0SW1hZ2U6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGltZ1N0ID0gbWZwLnN0LmltYWdlLFxuXHRcdFx0XHRucyA9ICcuaW1hZ2UnO1xuXG5cdFx0XHRtZnAudHlwZXMucHVzaCgnaW1hZ2UnKTtcblxuXHRcdFx0X21mcE9uKE9QRU5fRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihtZnAuY3Vyckl0ZW0udHlwZSA9PT0gJ2ltYWdlJyAmJiBpbWdTdC5jdXJzb3IpIHtcblx0XHRcdFx0XHQkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKGltZ1N0LmN1cnNvcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRfbWZwT24oQ0xPU0VfRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihpbWdTdC5jdXJzb3IpIHtcblx0XHRcdFx0XHQkKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKGltZ1N0LmN1cnNvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0X3dpbmRvdy5vZmYoJ3Jlc2l6ZScgKyBFVkVOVF9OUyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKCdSZXNpemUnK25zLCBtZnAucmVzaXplSW1hZ2UpO1xuXHRcdFx0aWYobWZwLmlzTG93SUUpIHtcblx0XHRcdFx0X21mcE9uKCdBZnRlckNoYW5nZScsIG1mcC5yZXNpemVJbWFnZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRyZXNpemVJbWFnZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1mcC5jdXJySXRlbTtcblx0XHRcdGlmKCFpdGVtIHx8ICFpdGVtLmltZykgcmV0dXJuO1xuXG5cdFx0XHRpZihtZnAuc3QuaW1hZ2UudmVydGljYWxGaXQpIHtcblx0XHRcdFx0dmFyIGRlY3IgPSAwO1xuXHRcdFx0XHQvLyBmaXggYm94LXNpemluZyBpbiBpZTcvOFxuXHRcdFx0XHRpZihtZnAuaXNMb3dJRSkge1xuXHRcdFx0XHRcdGRlY3IgPSBwYXJzZUludChpdGVtLmltZy5jc3MoJ3BhZGRpbmctdG9wJyksIDEwKSArIHBhcnNlSW50KGl0ZW0uaW1nLmNzcygncGFkZGluZy1ib3R0b20nKSwxMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aXRlbS5pbWcuY3NzKCdtYXgtaGVpZ2h0JywgbWZwLndILWRlY3IpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X29uSW1hZ2VIYXNTaXplOiBmdW5jdGlvbihpdGVtKSB7XG5cdFx0XHRpZihpdGVtLmltZykge1xuXG5cdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IHRydWU7XG5cblx0XHRcdFx0aWYoX2ltZ0ludGVydmFsKSB7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChfaW1nSW50ZXJ2YWwpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aXRlbS5pc0NoZWNraW5nSW1nU2l6ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdF9tZnBUcmlnZ2VyKCdJbWFnZUhhc1NpemUnLCBpdGVtKTtcblxuXHRcdFx0XHRpZihpdGVtLmltZ0hpZGRlbikge1xuXHRcdFx0XHRcdGlmKG1mcC5jb250ZW50KVxuXHRcdFx0XHRcdFx0bWZwLmNvbnRlbnQucmVtb3ZlQ2xhc3MoJ21mcC1sb2FkaW5nJyk7XG5cblx0XHRcdFx0XHRpdGVtLmltZ0hpZGRlbiA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogRnVuY3Rpb24gdGhhdCBsb29wcyB1bnRpbCB0aGUgaW1hZ2UgaGFzIHNpemUgdG8gZGlzcGxheSBlbGVtZW50cyB0aGF0IHJlbHkgb24gaXQgYXNhcFxuXHRcdCAqL1xuXHRcdGZpbmRJbWFnZVNpemU6IGZ1bmN0aW9uKGl0ZW0pIHtcblxuXHRcdFx0dmFyIGNvdW50ZXIgPSAwLFxuXHRcdFx0XHRpbWcgPSBpdGVtLmltZ1swXSxcblx0XHRcdFx0bWZwU2V0SW50ZXJ2YWwgPSBmdW5jdGlvbihkZWxheSkge1xuXG5cdFx0XHRcdFx0aWYoX2ltZ0ludGVydmFsKSB7XG5cdFx0XHRcdFx0XHRjbGVhckludGVydmFsKF9pbWdJbnRlcnZhbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGRlY2VsZXJhdGluZyBpbnRlcnZhbCB0aGF0IGNoZWNrcyBmb3Igc2l6ZSBvZiBhbiBpbWFnZVxuXHRcdFx0XHRcdF9pbWdJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYoaW1nLm5hdHVyYWxXaWR0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0bWZwLl9vbkltYWdlSGFzU2l6ZShpdGVtKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZihjb3VudGVyID4gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoX2ltZ0ludGVydmFsKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Y291bnRlcisrO1xuXHRcdFx0XHRcdFx0aWYoY291bnRlciA9PT0gMykge1xuXHRcdFx0XHRcdFx0XHRtZnBTZXRJbnRlcnZhbCgxMCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYoY291bnRlciA9PT0gNDApIHtcblx0XHRcdFx0XHRcdFx0bWZwU2V0SW50ZXJ2YWwoNTApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmKGNvdW50ZXIgPT09IDEwMCkge1xuXHRcdFx0XHRcdFx0XHRtZnBTZXRJbnRlcnZhbCg1MDApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIGRlbGF5KTtcblx0XHRcdFx0fTtcblxuXHRcdFx0bWZwU2V0SW50ZXJ2YWwoMSk7XG5cdFx0fSxcblxuXHRcdGdldEltYWdlOiBmdW5jdGlvbihpdGVtLCB0ZW1wbGF0ZSkge1xuXG5cdFx0XHR2YXIgZ3VhcmQgPSAwLFxuXG5cdFx0XHRcdC8vIGltYWdlIGxvYWQgY29tcGxldGUgaGFuZGxlclxuXHRcdFx0XHRvbkxvYWRDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKGl0ZW0pIHtcblx0XHRcdFx0XHRcdGlmIChpdGVtLmltZ1swXS5jb21wbGV0ZSkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLmltZy5vZmYoJy5tZnBsb2FkZXInKTtcblxuXHRcdFx0XHRcdFx0XHRpZihpdGVtID09PSBtZnAuY3Vyckl0ZW0pe1xuXHRcdFx0XHRcdFx0XHRcdG1mcC5fb25JbWFnZUhhc1NpemUoaXRlbSk7XG5cblx0XHRcdFx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdyZWFkeScpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0aXRlbS5sb2FkZWQgPSB0cnVlO1xuXG5cdFx0XHRcdFx0XHRcdF9tZnBUcmlnZ2VyKCdJbWFnZUxvYWRDb21wbGV0ZScpO1xuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gaWYgaW1hZ2UgY29tcGxldGUgY2hlY2sgZmFpbHMgMjAwIHRpbWVzICgyMCBzZWMpLCB3ZSBhc3N1bWUgdGhhdCB0aGVyZSB3YXMgYW4gZXJyb3IuXG5cdFx0XHRcdFx0XHRcdGd1YXJkKys7XG5cdFx0XHRcdFx0XHRcdGlmKGd1YXJkIDwgMjAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChvbkxvYWRDb21wbGV0ZSwxMDApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdG9uTG9hZEVycm9yKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gaW1hZ2UgZXJyb3IgaGFuZGxlclxuXHRcdFx0XHRvbkxvYWRFcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKGl0ZW0pIHtcblx0XHRcdFx0XHRcdGl0ZW0uaW1nLm9mZignLm1mcGxvYWRlcicpO1xuXHRcdFx0XHRcdFx0aWYoaXRlbSA9PT0gbWZwLmN1cnJJdGVtKXtcblx0XHRcdFx0XHRcdFx0bWZwLl9vbkltYWdlSGFzU2l6ZShpdGVtKTtcblx0XHRcdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnZXJyb3InLCBpbWdTdC50RXJyb3IucmVwbGFjZSgnJXVybCUnLCBpdGVtLnNyYykgKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGl0ZW0ubG9hZGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGl0ZW0ubG9hZEVycm9yID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGltZ1N0ID0gbWZwLnN0LmltYWdlO1xuXG5cblx0XHRcdHZhciBlbCA9IHRlbXBsYXRlLmZpbmQoJy5tZnAtaW1nJyk7XG5cdFx0XHRpZihlbC5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdFx0XHRpbWcuY2xhc3NOYW1lID0gJ21mcC1pbWcnO1xuXHRcdFx0XHRpZihpdGVtLmVsICYmIGl0ZW0uZWwuZmluZCgnaW1nJykubGVuZ3RoKSB7XG5cdFx0XHRcdFx0aW1nLmFsdCA9IGl0ZW0uZWwuZmluZCgnaW1nJykuYXR0cignYWx0Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aXRlbS5pbWcgPSAkKGltZykub24oJ2xvYWQubWZwbG9hZGVyJywgb25Mb2FkQ29tcGxldGUpLm9uKCdlcnJvci5tZnBsb2FkZXInLCBvbkxvYWRFcnJvcik7XG5cdFx0XHRcdGltZy5zcmMgPSBpdGVtLnNyYztcblxuXHRcdFx0XHQvLyB3aXRob3V0IGNsb25lKCkgXCJlcnJvclwiIGV2ZW50IGlzIG5vdCBmaXJpbmcgd2hlbiBJTUcgaXMgcmVwbGFjZWQgYnkgbmV3IElNR1xuXHRcdFx0XHQvLyBUT0RPOiBmaW5kIGEgd2F5IHRvIGF2b2lkIHN1Y2ggY2xvbmluZ1xuXHRcdFx0XHRpZihlbC5pcygnaW1nJykpIHtcblx0XHRcdFx0XHRpdGVtLmltZyA9IGl0ZW0uaW1nLmNsb25lKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpbWcgPSBpdGVtLmltZ1swXTtcblx0XHRcdFx0aWYoaW1nLm5hdHVyYWxXaWR0aCA+IDApIHtcblx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYoIWltZy53aWR0aCkge1xuXHRcdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG1mcC5fcGFyc2VNYXJrdXAodGVtcGxhdGUsIHtcblx0XHRcdFx0dGl0bGU6IF9nZXRUaXRsZShpdGVtKSxcblx0XHRcdFx0aW1nX3JlcGxhY2VXaXRoOiBpdGVtLmltZ1xuXHRcdFx0fSwgaXRlbSk7XG5cblx0XHRcdG1mcC5yZXNpemVJbWFnZSgpO1xuXG5cdFx0XHRpZihpdGVtLmhhc1NpemUpIHtcblx0XHRcdFx0aWYoX2ltZ0ludGVydmFsKSBjbGVhckludGVydmFsKF9pbWdJbnRlcnZhbCk7XG5cblx0XHRcdFx0aWYoaXRlbS5sb2FkRXJyb3IpIHtcblx0XHRcdFx0XHR0ZW1wbGF0ZS5hZGRDbGFzcygnbWZwLWxvYWRpbmcnKTtcblx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdlcnJvcicsIGltZ1N0LnRFcnJvci5yZXBsYWNlKCcldXJsJScsIGl0ZW0uc3JjKSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRlbXBsYXRlLnJlbW92ZUNsYXNzKCdtZnAtbG9hZGluZycpO1xuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRlbXBsYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdsb2FkaW5nJyk7XG5cdFx0XHRpdGVtLmxvYWRpbmcgPSB0cnVlO1xuXG5cdFx0XHRpZighaXRlbS5oYXNTaXplKSB7XG5cdFx0XHRcdGl0ZW0uaW1nSGlkZGVuID0gdHJ1ZTtcblx0XHRcdFx0dGVtcGxhdGUuYWRkQ2xhc3MoJ21mcC1sb2FkaW5nJyk7XG5cdFx0XHRcdG1mcC5maW5kSW1hZ2VTaXplKGl0ZW0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdFx0fVxuXHR9XG59KTtcblxuLyo+PmltYWdlKi9cblxuLyo+Pnpvb20qL1xudmFyIGhhc01velRyYW5zZm9ybSxcblx0Z2V0SGFzTW96VHJhbnNmb3JtID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoaGFzTW96VHJhbnNmb3JtID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGhhc01velRyYW5zZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKS5zdHlsZS5Nb3pUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0cmV0dXJuIGhhc01velRyYW5zZm9ybTtcblx0fTtcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKCd6b29tJywge1xuXG5cdG9wdGlvbnM6IHtcblx0XHRlbmFibGVkOiBmYWxzZSxcblx0XHRlYXNpbmc6ICdlYXNlLWluLW91dCcsXG5cdFx0ZHVyYXRpb246IDMwMCxcblx0XHRvcGVuZXI6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50LmlzKCdpbWcnKSA/IGVsZW1lbnQgOiBlbGVtZW50LmZpbmQoJ2ltZycpO1xuXHRcdH1cblx0fSxcblxuXHRwcm90bzoge1xuXG5cdFx0aW5pdFpvb206IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHpvb21TdCA9IG1mcC5zdC56b29tLFxuXHRcdFx0XHRucyA9ICcuem9vbScsXG5cdFx0XHRcdGltYWdlO1xuXG5cdFx0XHRpZighem9vbVN0LmVuYWJsZWQgfHwgIW1mcC5zdXBwb3J0c1RyYW5zaXRpb24pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgZHVyYXRpb24gPSB6b29tU3QuZHVyYXRpb24sXG5cdFx0XHRcdGdldEVsVG9BbmltYXRlID0gZnVuY3Rpb24oaW1hZ2UpIHtcblx0XHRcdFx0XHR2YXIgbmV3SW1nID0gaW1hZ2UuY2xvbmUoKS5yZW1vdmVBdHRyKCdzdHlsZScpLnJlbW92ZUF0dHIoJ2NsYXNzJykuYWRkQ2xhc3MoJ21mcC1hbmltYXRlZC1pbWFnZScpLFxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbiA9ICdhbGwgJysoem9vbVN0LmR1cmF0aW9uLzEwMDApKydzICcgKyB6b29tU3QuZWFzaW5nLFxuXHRcdFx0XHRcdFx0Y3NzT2JqID0ge1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHRcdFx0XHRcdFx0ekluZGV4OiA5OTk5LFxuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdFx0XHRcdCctd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHknOiAnaGlkZGVuJ1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHQgPSAndHJhbnNpdGlvbic7XG5cblx0XHRcdFx0XHRjc3NPYmpbJy13ZWJraXQtJyt0XSA9IGNzc09ialsnLW1vei0nK3RdID0gY3NzT2JqWyctby0nK3RdID0gY3NzT2JqW3RdID0gdHJhbnNpdGlvbjtcblxuXHRcdFx0XHRcdG5ld0ltZy5jc3MoY3NzT2JqKTtcblx0XHRcdFx0XHRyZXR1cm4gbmV3SW1nO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzaG93TWFpbkNvbnRlbnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRtZnAuY29udGVudC5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvcGVuVGltZW91dCxcblx0XHRcdFx0YW5pbWF0ZWRJbWc7XG5cblx0XHRcdF9tZnBPbignQnVpbGRDb250cm9scycrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihtZnAuX2FsbG93Wm9vbSgpKSB7XG5cblx0XHRcdFx0XHRjbGVhclRpbWVvdXQob3BlblRpbWVvdXQpO1xuXHRcdFx0XHRcdG1mcC5jb250ZW50LmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblxuXHRcdFx0XHRcdC8vIEJhc2ljYWxseSwgYWxsIGNvZGUgYmVsb3cgZG9lcyBpcyBjbG9uZXMgZXhpc3RpbmcgaW1hZ2UsIHB1dHMgaW4gb24gdG9wIG9mIHRoZSBjdXJyZW50IG9uZSBhbmQgYW5pbWF0ZWQgaXRcblxuXHRcdFx0XHRcdGltYWdlID0gbWZwLl9nZXRJdGVtVG9ab29tKCk7XG5cblx0XHRcdFx0XHRpZighaW1hZ2UpIHtcblx0XHRcdFx0XHRcdHNob3dNYWluQ29udGVudCgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGFuaW1hdGVkSW1nID0gZ2V0RWxUb0FuaW1hdGUoaW1hZ2UpO1xuXG5cdFx0XHRcdFx0YW5pbWF0ZWRJbWcuY3NzKCBtZnAuX2dldE9mZnNldCgpICk7XG5cblx0XHRcdFx0XHRtZnAud3JhcC5hcHBlbmQoYW5pbWF0ZWRJbWcpO1xuXG5cdFx0XHRcdFx0b3BlblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0YW5pbWF0ZWRJbWcuY3NzKCBtZnAuX2dldE9mZnNldCggdHJ1ZSApICk7XG5cdFx0XHRcdFx0XHRvcGVuVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRcdFx0c2hvd01haW5Db250ZW50KCk7XG5cblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRhbmltYXRlZEltZy5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdFx0XHRpbWFnZSA9IGFuaW1hdGVkSW1nID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0XHRfbWZwVHJpZ2dlcignWm9vbUFuaW1hdGlvbkVuZGVkJyk7XG5cdFx0XHRcdFx0XHRcdH0sIDE2KTsgLy8gYXZvaWQgYmxpbmsgd2hlbiBzd2l0Y2hpbmcgaW1hZ2VzXG5cblx0XHRcdFx0XHRcdH0sIGR1cmF0aW9uKTsgLy8gdGhpcyB0aW1lb3V0IGVxdWFscyBhbmltYXRpb24gZHVyYXRpb25cblxuXHRcdFx0XHRcdH0sIDE2KTsgLy8gYnkgYWRkaW5nIHRoaXMgdGltZW91dCB3ZSBhdm9pZCBzaG9ydCBnbGl0Y2ggYXQgdGhlIGJlZ2lubmluZyBvZiBhbmltYXRpb25cblxuXG5cdFx0XHRcdFx0Ly8gTG90cyBvZiB0aW1lb3V0cy4uLlxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdF9tZnBPbihCRUZPUkVfQ0xPU0VfRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihtZnAuX2FsbG93Wm9vbSgpKSB7XG5cblx0XHRcdFx0XHRjbGVhclRpbWVvdXQob3BlblRpbWVvdXQpO1xuXG5cdFx0XHRcdFx0bWZwLnN0LnJlbW92YWxEZWxheSA9IGR1cmF0aW9uO1xuXG5cdFx0XHRcdFx0aWYoIWltYWdlKSB7XG5cdFx0XHRcdFx0XHRpbWFnZSA9IG1mcC5fZ2V0SXRlbVRvWm9vbSgpO1xuXHRcdFx0XHRcdFx0aWYoIWltYWdlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGFuaW1hdGVkSW1nID0gZ2V0RWxUb0FuaW1hdGUoaW1hZ2UpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGFuaW1hdGVkSW1nLmNzcyggbWZwLl9nZXRPZmZzZXQodHJ1ZSkgKTtcblx0XHRcdFx0XHRtZnAud3JhcC5hcHBlbmQoYW5pbWF0ZWRJbWcpO1xuXHRcdFx0XHRcdG1mcC5jb250ZW50LmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRhbmltYXRlZEltZy5jc3MoIG1mcC5fZ2V0T2Zmc2V0KCkgKTtcblx0XHRcdFx0XHR9LCAxNik7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5fYWxsb3dab29tKCkpIHtcblx0XHRcdFx0XHRzaG93TWFpbkNvbnRlbnQoKTtcblx0XHRcdFx0XHRpZihhbmltYXRlZEltZykge1xuXHRcdFx0XHRcdFx0YW5pbWF0ZWRJbWcucmVtb3ZlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGltYWdlID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdF9hbGxvd1pvb206IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIG1mcC5jdXJySXRlbS50eXBlID09PSAnaW1hZ2UnO1xuXHRcdH0sXG5cblx0XHRfZ2V0SXRlbVRvWm9vbTogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZihtZnAuY3Vyckl0ZW0uaGFzU2l6ZSkge1xuXHRcdFx0XHRyZXR1cm4gbWZwLmN1cnJJdGVtLmltZztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gR2V0IGVsZW1lbnQgcG9zdGlvbiByZWxhdGl2ZSB0byB2aWV3cG9ydFxuXHRcdF9nZXRPZmZzZXQ6IGZ1bmN0aW9uKGlzTGFyZ2UpIHtcblx0XHRcdHZhciBlbDtcblx0XHRcdGlmKGlzTGFyZ2UpIHtcblx0XHRcdFx0ZWwgPSBtZnAuY3Vyckl0ZW0uaW1nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWwgPSBtZnAuc3Quem9vbS5vcGVuZXIobWZwLmN1cnJJdGVtLmVsIHx8IG1mcC5jdXJySXRlbSk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBvZmZzZXQgPSBlbC5vZmZzZXQoKTtcblx0XHRcdHZhciBwYWRkaW5nVG9wID0gcGFyc2VJbnQoZWwuY3NzKCdwYWRkaW5nLXRvcCcpLDEwKTtcblx0XHRcdHZhciBwYWRkaW5nQm90dG9tID0gcGFyc2VJbnQoZWwuY3NzKCdwYWRkaW5nLWJvdHRvbScpLDEwKTtcblx0XHRcdG9mZnNldC50b3AgLT0gKCAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgLSBwYWRkaW5nVG9wICk7XG5cblxuXHRcdFx0LypcblxuXHRcdFx0QW5pbWF0aW5nIGxlZnQgKyB0b3AgKyB3aWR0aC9oZWlnaHQgbG9va3MgZ2xpdGNoeSBpbiBGaXJlZm94LCBidXQgcGVyZmVjdCBpbiBDaHJvbWUuIEFuZCB2aWNlLXZlcnNhLlxuXG5cdFx0XHQgKi9cblx0XHRcdHZhciBvYmogPSB7XG5cdFx0XHRcdHdpZHRoOiBlbC53aWR0aCgpLFxuXHRcdFx0XHQvLyBmaXggWmVwdG8gaGVpZ2h0K3BhZGRpbmcgaXNzdWVcblx0XHRcdFx0aGVpZ2h0OiAoX2lzSlEgPyBlbC5pbm5lckhlaWdodCgpIDogZWxbMF0ub2Zmc2V0SGVpZ2h0KSAtIHBhZGRpbmdCb3R0b20gLSBwYWRkaW5nVG9wXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBJIGhhdGUgdG8gZG8gdGhpcywgYnV0IHRoZXJlIGlzIG5vIGFub3RoZXIgb3B0aW9uXG5cdFx0XHRpZiggZ2V0SGFzTW96VHJhbnNmb3JtKCkgKSB7XG5cdFx0XHRcdG9ialsnLW1vei10cmFuc2Zvcm0nXSA9IG9ialsndHJhbnNmb3JtJ10gPSAndHJhbnNsYXRlKCcgKyBvZmZzZXQubGVmdCArICdweCwnICsgb2Zmc2V0LnRvcCArICdweCknO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2JqLmxlZnQgPSBvZmZzZXQubGVmdDtcblx0XHRcdFx0b2JqLnRvcCA9IG9mZnNldC50b3A7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblxuXHR9XG59KTtcblxuXG5cbi8qPj56b29tKi9cblxuLyo+PmlmcmFtZSovXG5cbnZhciBJRlJBTUVfTlMgPSAnaWZyYW1lJyxcblx0X2VtcHR5UGFnZSA9ICcvL2Fib3V0OmJsYW5rJyxcblxuXHRfZml4SWZyYW1lQnVncyA9IGZ1bmN0aW9uKGlzU2hvd2luZykge1xuXHRcdGlmKG1mcC5jdXJyVGVtcGxhdGVbSUZSQU1FX05TXSkge1xuXHRcdFx0dmFyIGVsID0gbWZwLmN1cnJUZW1wbGF0ZVtJRlJBTUVfTlNdLmZpbmQoJ2lmcmFtZScpO1xuXHRcdFx0aWYoZWwubGVuZ3RoKSB7XG5cdFx0XHRcdC8vIHJlc2V0IHNyYyBhZnRlciB0aGUgcG9wdXAgaXMgY2xvc2VkIHRvIGF2b2lkIFwidmlkZW8ga2VlcHMgcGxheWluZyBhZnRlciBwb3B1cCBpcyBjbG9zZWRcIiBidWdcblx0XHRcdFx0aWYoIWlzU2hvd2luZykge1xuXHRcdFx0XHRcdGVsWzBdLnNyYyA9IF9lbXB0eVBhZ2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJRTggYmxhY2sgc2NyZWVuIGJ1ZyBmaXhcblx0XHRcdFx0aWYobWZwLmlzSUU4KSB7XG5cdFx0XHRcdFx0ZWwuY3NzKCdkaXNwbGF5JywgaXNTaG93aW5nID8gJ2Jsb2NrJyA6ICdub25lJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShJRlJBTUVfTlMsIHtcblxuXHRvcHRpb25zOiB7XG5cdFx0bWFya3VwOiAnPGRpdiBjbGFzcz1cIm1mcC1pZnJhbWUtc2NhbGVyXCI+Jytcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PicrXG5cdFx0XHRcdFx0JzxpZnJhbWUgY2xhc3M9XCJtZnAtaWZyYW1lXCIgc3JjPVwiLy9hYm91dDpibGFua1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nK1xuXHRcdFx0XHQnPC9kaXY+JyxcblxuXHRcdHNyY0FjdGlvbjogJ2lmcmFtZV9zcmMnLFxuXG5cdFx0Ly8gd2UgZG9uJ3QgY2FyZSBhbmQgc3VwcG9ydCBvbmx5IG9uZSBkZWZhdWx0IHR5cGUgb2YgVVJMIGJ5IGRlZmF1bHRcblx0XHRwYXR0ZXJuczoge1xuXHRcdFx0eW91dHViZToge1xuXHRcdFx0XHRpbmRleDogJ3lvdXR1YmUuY29tJyxcblx0XHRcdFx0aWQ6ICd2PScsXG5cdFx0XHRcdHNyYzogJy8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyVpZCU/YXV0b3BsYXk9MSdcblx0XHRcdH0sXG5cdFx0XHR2aW1lbzoge1xuXHRcdFx0XHRpbmRleDogJ3ZpbWVvLmNvbS8nLFxuXHRcdFx0XHRpZDogJy8nLFxuXHRcdFx0XHRzcmM6ICcvL3BsYXllci52aW1lby5jb20vdmlkZW8vJWlkJT9hdXRvcGxheT0xJ1xuXHRcdFx0fSxcblx0XHRcdGdtYXBzOiB7XG5cdFx0XHRcdGluZGV4OiAnLy9tYXBzLmdvb2dsZS4nLFxuXHRcdFx0XHRzcmM6ICclaWQlJm91dHB1dD1lbWJlZCdcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0cHJvdG86IHtcblx0XHRpbml0SWZyYW1lOiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC50eXBlcy5wdXNoKElGUkFNRV9OUyk7XG5cblx0XHRcdF9tZnBPbignQmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24oZSwgcHJldlR5cGUsIG5ld1R5cGUpIHtcblx0XHRcdFx0aWYocHJldlR5cGUgIT09IG5ld1R5cGUpIHtcblx0XHRcdFx0XHRpZihwcmV2VHlwZSA9PT0gSUZSQU1FX05TKSB7XG5cdFx0XHRcdFx0XHRfZml4SWZyYW1lQnVncygpOyAvLyBpZnJhbWUgaWYgcmVtb3ZlZFxuXHRcdFx0XHRcdH0gZWxzZSBpZihuZXdUeXBlID09PSBJRlJBTUVfTlMpIHtcblx0XHRcdFx0XHRcdF9maXhJZnJhbWVCdWdzKHRydWUpOyAvLyBpZnJhbWUgaXMgc2hvd2luZ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fS8vIGVsc2Uge1xuXHRcdFx0XHRcdC8vIGlmcmFtZSBzb3VyY2UgaXMgc3dpdGNoZWQsIGRvbid0IGRvIGFueXRoaW5nXG5cdFx0XHRcdC8vfVxuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCArICcuJyArIElGUkFNRV9OUywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdF9maXhJZnJhbWVCdWdzKCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0Z2V0SWZyYW1lOiBmdW5jdGlvbihpdGVtLCB0ZW1wbGF0ZSkge1xuXHRcdFx0dmFyIGVtYmVkU3JjID0gaXRlbS5zcmM7XG5cdFx0XHR2YXIgaWZyYW1lU3QgPSBtZnAuc3QuaWZyYW1lO1xuXG5cdFx0XHQkLmVhY2goaWZyYW1lU3QucGF0dGVybnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihlbWJlZFNyYy5pbmRleE9mKCB0aGlzLmluZGV4ICkgPiAtMSkge1xuXHRcdFx0XHRcdGlmKHRoaXMuaWQpIHtcblx0XHRcdFx0XHRcdGlmKHR5cGVvZiB0aGlzLmlkID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0XHRlbWJlZFNyYyA9IGVtYmVkU3JjLnN1YnN0cihlbWJlZFNyYy5sYXN0SW5kZXhPZih0aGlzLmlkKSt0aGlzLmlkLmxlbmd0aCwgZW1iZWRTcmMubGVuZ3RoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGVtYmVkU3JjID0gdGhpcy5pZC5jYWxsKCB0aGlzLCBlbWJlZFNyYyApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbWJlZFNyYyA9IHRoaXMuc3JjLnJlcGxhY2UoJyVpZCUnLCBlbWJlZFNyYyApO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gYnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgZGF0YU9iaiA9IHt9O1xuXHRcdFx0aWYoaWZyYW1lU3Quc3JjQWN0aW9uKSB7XG5cdFx0XHRcdGRhdGFPYmpbaWZyYW1lU3Quc3JjQWN0aW9uXSA9IGVtYmVkU3JjO1xuXHRcdFx0fVxuXHRcdFx0bWZwLl9wYXJzZU1hcmt1cCh0ZW1wbGF0ZSwgZGF0YU9iaiwgaXRlbSk7XG5cblx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cblx0XHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0XHR9XG5cdH1cbn0pO1xuXG5cblxuLyo+PmlmcmFtZSovXG5cbi8qPj5nYWxsZXJ5Ki9cbi8qKlxuICogR2V0IGxvb3BlZCBpbmRleCBkZXBlbmRpbmcgb24gbnVtYmVyIG9mIHNsaWRlc1xuICovXG52YXIgX2dldExvb3BlZElkID0gZnVuY3Rpb24oaW5kZXgpIHtcblx0XHR2YXIgbnVtU2xpZGVzID0gbWZwLml0ZW1zLmxlbmd0aDtcblx0XHRpZihpbmRleCA+IG51bVNsaWRlcyAtIDEpIHtcblx0XHRcdHJldHVybiBpbmRleCAtIG51bVNsaWRlcztcblx0XHR9IGVsc2UgIGlmKGluZGV4IDwgMCkge1xuXHRcdFx0cmV0dXJuIG51bVNsaWRlcyArIGluZGV4O1xuXHRcdH1cblx0XHRyZXR1cm4gaW5kZXg7XG5cdH0sXG5cdF9yZXBsYWNlQ3VyclRvdGFsID0gZnVuY3Rpb24odGV4dCwgY3VyciwgdG90YWwpIHtcblx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKC8lY3VyciUvZ2ksIGN1cnIgKyAxKS5yZXBsYWNlKC8ldG90YWwlL2dpLCB0b3RhbCk7XG5cdH07XG5cbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZSgnZ2FsbGVyeScsIHtcblxuXHRvcHRpb25zOiB7XG5cdFx0ZW5hYmxlZDogZmFsc2UsXG5cdFx0YXJyb3dNYXJrdXA6ICc8YnV0dG9uIHRpdGxlPVwiJXRpdGxlJVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1mcC1hcnJvdyBtZnAtYXJyb3ctJWRpciVcIj48L2J1dHRvbj4nLFxuXHRcdHByZWxvYWQ6IFswLDJdLFxuXHRcdG5hdmlnYXRlQnlJbWdDbGljazogdHJ1ZSxcblx0XHRhcnJvd3M6IHRydWUsXG5cblx0XHR0UHJldjogJ1ByZXZpb3VzIChMZWZ0IGFycm93IGtleSknLFxuXHRcdHROZXh0OiAnTmV4dCAoUmlnaHQgYXJyb3cga2V5KScsXG5cdFx0dENvdW50ZXI6ICclY3VyciUgb2YgJXRvdGFsJSdcblx0fSxcblxuXHRwcm90bzoge1xuXHRcdGluaXRHYWxsZXJ5OiBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIGdTdCA9IG1mcC5zdC5nYWxsZXJ5LFxuXHRcdFx0XHRucyA9ICcubWZwLWdhbGxlcnknO1xuXG5cdFx0XHRtZnAuZGlyZWN0aW9uID0gdHJ1ZTsgLy8gdHJ1ZSAtIG5leHQsIGZhbHNlIC0gcHJldlxuXG5cdFx0XHRpZighZ1N0IHx8ICFnU3QuZW5hYmxlZCApIHJldHVybiBmYWxzZTtcblxuXHRcdFx0X3dyYXBDbGFzc2VzICs9ICcgbWZwLWdhbGxlcnknO1xuXG5cdFx0XHRfbWZwT24oT1BFTl9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0aWYoZ1N0Lm5hdmlnYXRlQnlJbWdDbGljaykge1xuXHRcdFx0XHRcdG1mcC53cmFwLm9uKCdjbGljaycrbnMsICcubWZwLWltZycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYobWZwLml0ZW1zLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0bWZwLm5leHQoKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0X2RvY3VtZW50Lm9uKCdrZXlkb3duJytucywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGlmIChlLmtleUNvZGUgPT09IDM3KSB7XG5cdFx0XHRcdFx0XHRtZnAucHJldigpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xuXHRcdFx0XHRcdFx0bWZwLm5leHQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbignVXBkYXRlU3RhdHVzJytucywgZnVuY3Rpb24oZSwgZGF0YSkge1xuXHRcdFx0XHRpZihkYXRhLnRleHQpIHtcblx0XHRcdFx0XHRkYXRhLnRleHQgPSBfcmVwbGFjZUN1cnJUb3RhbChkYXRhLnRleHQsIG1mcC5jdXJySXRlbS5pbmRleCwgbWZwLml0ZW1zLmxlbmd0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRfbWZwT24oTUFSS1VQX1BBUlNFX0VWRU5UK25zLCBmdW5jdGlvbihlLCBlbGVtZW50LCB2YWx1ZXMsIGl0ZW0pIHtcblx0XHRcdFx0dmFyIGwgPSBtZnAuaXRlbXMubGVuZ3RoO1xuXHRcdFx0XHR2YWx1ZXMuY291bnRlciA9IGwgPiAxID8gX3JlcGxhY2VDdXJyVG90YWwoZ1N0LnRDb3VudGVyLCBpdGVtLmluZGV4LCBsKSA6ICcnO1xuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbignQnVpbGRDb250cm9scycgKyBucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5pdGVtcy5sZW5ndGggPiAxICYmIGdTdC5hcnJvd3MgJiYgIW1mcC5hcnJvd0xlZnQpIHtcblx0XHRcdFx0XHR2YXIgbWFya3VwID0gZ1N0LmFycm93TWFya3VwLFxuXHRcdFx0XHRcdFx0YXJyb3dMZWZ0ID0gbWZwLmFycm93TGVmdCA9ICQoIG1hcmt1cC5yZXBsYWNlKC8ldGl0bGUlL2dpLCBnU3QudFByZXYpLnJlcGxhY2UoLyVkaXIlL2dpLCAnbGVmdCcpICkuYWRkQ2xhc3MoUFJFVkVOVF9DTE9TRV9DTEFTUyksXG5cdFx0XHRcdFx0XHRhcnJvd1JpZ2h0ID0gbWZwLmFycm93UmlnaHQgPSAkKCBtYXJrdXAucmVwbGFjZSgvJXRpdGxlJS9naSwgZ1N0LnROZXh0KS5yZXBsYWNlKC8lZGlyJS9naSwgJ3JpZ2h0JykgKS5hZGRDbGFzcyhQUkVWRU5UX0NMT1NFX0NMQVNTKTtcblxuXHRcdFx0XHRcdGFycm93TGVmdC5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdG1mcC5wcmV2KCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YXJyb3dSaWdodC5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdG1mcC5uZXh0KCk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRtZnAuY29udGFpbmVyLmFwcGVuZChhcnJvd0xlZnQuYWRkKGFycm93UmlnaHQpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbihDSEFOR0VfRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihtZnAuX3ByZWxvYWRUaW1lb3V0KSBjbGVhclRpbWVvdXQobWZwLl9wcmVsb2FkVGltZW91dCk7XG5cblx0XHRcdFx0bWZwLl9wcmVsb2FkVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bWZwLnByZWxvYWROZWFyYnlJbWFnZXMoKTtcblx0XHRcdFx0XHRtZnAuX3ByZWxvYWRUaW1lb3V0ID0gbnVsbDtcblx0XHRcdFx0fSwgMTYpO1xuXHRcdFx0fSk7XG5cblxuXHRcdFx0X21mcE9uKENMT1NFX0VWRU5UK25zLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0X2RvY3VtZW50Lm9mZihucyk7XG5cdFx0XHRcdG1mcC53cmFwLm9mZignY2xpY2snK25zKTtcblx0XHRcdFx0bWZwLmFycm93UmlnaHQgPSBtZnAuYXJyb3dMZWZ0ID0gbnVsbDtcblx0XHRcdH0pO1xuXG5cdFx0fSxcblx0XHRuZXh0OiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC5kaXJlY3Rpb24gPSB0cnVlO1xuXHRcdFx0bWZwLmluZGV4ID0gX2dldExvb3BlZElkKG1mcC5pbmRleCArIDEpO1xuXHRcdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XG5cdFx0fSxcblx0XHRwcmV2OiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC5kaXJlY3Rpb24gPSBmYWxzZTtcblx0XHRcdG1mcC5pbmRleCA9IF9nZXRMb29wZWRJZChtZnAuaW5kZXggLSAxKTtcblx0XHRcdG1mcC51cGRhdGVJdGVtSFRNTCgpO1xuXHRcdH0sXG5cdFx0Z29UbzogZnVuY3Rpb24obmV3SW5kZXgpIHtcblx0XHRcdG1mcC5kaXJlY3Rpb24gPSAobmV3SW5kZXggPj0gbWZwLmluZGV4KTtcblx0XHRcdG1mcC5pbmRleCA9IG5ld0luZGV4O1xuXHRcdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XG5cdFx0fSxcblx0XHRwcmVsb2FkTmVhcmJ5SW1hZ2VzOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBwID0gbWZwLnN0LmdhbGxlcnkucHJlbG9hZCxcblx0XHRcdFx0cHJlbG9hZEJlZm9yZSA9IE1hdGgubWluKHBbMF0sIG1mcC5pdGVtcy5sZW5ndGgpLFxuXHRcdFx0XHRwcmVsb2FkQWZ0ZXIgPSBNYXRoLm1pbihwWzFdLCBtZnAuaXRlbXMubGVuZ3RoKSxcblx0XHRcdFx0aTtcblxuXHRcdFx0Zm9yKGkgPSAxOyBpIDw9IChtZnAuZGlyZWN0aW9uID8gcHJlbG9hZEFmdGVyIDogcHJlbG9hZEJlZm9yZSk7IGkrKykge1xuXHRcdFx0XHRtZnAuX3ByZWxvYWRJdGVtKG1mcC5pbmRleCtpKTtcblx0XHRcdH1cblx0XHRcdGZvcihpID0gMTsgaSA8PSAobWZwLmRpcmVjdGlvbiA/IHByZWxvYWRCZWZvcmUgOiBwcmVsb2FkQWZ0ZXIpOyBpKyspIHtcblx0XHRcdFx0bWZwLl9wcmVsb2FkSXRlbShtZnAuaW5kZXgtaSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfcHJlbG9hZEl0ZW06IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRpbmRleCA9IF9nZXRMb29wZWRJZChpbmRleCk7XG5cblx0XHRcdGlmKG1mcC5pdGVtc1tpbmRleF0ucHJlbG9hZGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGl0ZW0gPSBtZnAuaXRlbXNbaW5kZXhdO1xuXHRcdFx0aWYoIWl0ZW0ucGFyc2VkKSB7XG5cdFx0XHRcdGl0ZW0gPSBtZnAucGFyc2VFbCggaW5kZXggKTtcblx0XHRcdH1cblxuXHRcdFx0X21mcFRyaWdnZXIoJ0xhenlMb2FkJywgaXRlbSk7XG5cblx0XHRcdGlmKGl0ZW0udHlwZSA9PT0gJ2ltYWdlJykge1xuXHRcdFx0XHRpdGVtLmltZyA9ICQoJzxpbWcgY2xhc3M9XCJtZnAtaW1nXCIgLz4nKS5vbignbG9hZC5tZnBsb2FkZXInLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSB0cnVlO1xuXHRcdFx0XHR9KS5vbignZXJyb3IubWZwbG9hZGVyJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcblx0XHRcdFx0XHRpdGVtLmxvYWRFcnJvciA9IHRydWU7XG5cdFx0XHRcdFx0X21mcFRyaWdnZXIoJ0xhenlMb2FkRXJyb3InLCBpdGVtKTtcblx0XHRcdFx0fSkuYXR0cignc3JjJywgaXRlbS5zcmMpO1xuXHRcdFx0fVxuXG5cblx0XHRcdGl0ZW0ucHJlbG9hZGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cbn0pO1xuXG4vKj4+Z2FsbGVyeSovXG5cbi8qPj5yZXRpbmEqL1xuXG52YXIgUkVUSU5BX05TID0gJ3JldGluYSc7XG5cbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShSRVRJTkFfTlMsIHtcblx0b3B0aW9uczoge1xuXHRcdHJlcGxhY2VTcmM6IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRcdHJldHVybiBpdGVtLnNyYy5yZXBsYWNlKC9cXC5cXHcrJC8sIGZ1bmN0aW9uKG0pIHsgcmV0dXJuICdAMngnICsgbTsgfSk7XG5cdFx0fSxcblx0XHRyYXRpbzogMSAvLyBGdW5jdGlvbiBvciBudW1iZXIuICBTZXQgdG8gMSB0byBkaXNhYmxlLlxuXHR9LFxuXHRwcm90bzoge1xuXHRcdGluaXRSZXRpbmE6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYod2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxKSB7XG5cblx0XHRcdFx0dmFyIHN0ID0gbWZwLnN0LnJldGluYSxcblx0XHRcdFx0XHRyYXRpbyA9IHN0LnJhdGlvO1xuXG5cdFx0XHRcdHJhdGlvID0gIWlzTmFOKHJhdGlvKSA/IHJhdGlvIDogcmF0aW8oKTtcblxuXHRcdFx0XHRpZihyYXRpbyA+IDEpIHtcblx0XHRcdFx0XHRfbWZwT24oJ0ltYWdlSGFzU2l6ZScgKyAnLicgKyBSRVRJTkFfTlMsIGZ1bmN0aW9uKGUsIGl0ZW0pIHtcblx0XHRcdFx0XHRcdGl0ZW0uaW1nLmNzcyh7XG5cdFx0XHRcdFx0XHRcdCdtYXgtd2lkdGgnOiBpdGVtLmltZ1swXS5uYXR1cmFsV2lkdGggLyByYXRpbyxcblx0XHRcdFx0XHRcdFx0J3dpZHRoJzogJzEwMCUnXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRfbWZwT24oJ0VsZW1lbnRQYXJzZScgKyAnLicgKyBSRVRJTkFfTlMsIGZ1bmN0aW9uKGUsIGl0ZW0pIHtcblx0XHRcdFx0XHRcdGl0ZW0uc3JjID0gc3QucmVwbGFjZVNyYyhpdGVtLCByYXRpbyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblx0fVxufSk7XG5cbi8qPj5yZXRpbmEqL1xuIF9jaGVja0luc3RhbmNlKCk7IH0pKTsiLCIvKiFcclxuICogU2Nyb2xsTWFnaWMgdjIuMC43ICgyMDE5LTA1LTA3KVxyXG4gKiBUaGUgamF2YXNjcmlwdCBsaWJyYXJ5IGZvciBtYWdpY2FsIHNjcm9sbCBpbnRlcmFjdGlvbnMuXHJcbiAqIChjKSAyMDE5IEphbiBQYWVwa2UgKEBqYW5wYWVwa2UpXHJcbiAqIFByb2plY3QgV2Vic2l0ZTogaHR0cDovL3Njcm9sbG1hZ2ljLmlvXHJcbiAqIFxyXG4gKiBAdmVyc2lvbiAyLjAuN1xyXG4gKiBAbGljZW5zZSBEdWFsIGxpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlIGFuZCBHUEwuXHJcbiAqIEBhdXRob3IgSmFuIFBhZXBrZSAtIGUtbWFpbEBqYW5wYWVwa2UuZGVcclxuICpcclxuICogQGZpbGUgU2Nyb2xsTWFnaWMgbWFpbiBsaWJyYXJ5LlxyXG4gKi9cclxuLyoqXHJcbiAqIEBuYW1lc3BhY2UgU2Nyb2xsTWFnaWNcclxuICovXHJcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cclxuXHRcdGRlZmluZShmYWN0b3J5KTtcclxuXHR9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xyXG5cdFx0Ly8gQ29tbW9uSlNcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyBCcm93c2VyIGdsb2JhbFxyXG5cdFx0cm9vdC5TY3JvbGxNYWdpYyA9IGZhY3RvcnkoKTtcclxuXHR9XHJcbn0odGhpcywgZnVuY3Rpb24gKCkge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHR2YXIgU2Nyb2xsTWFnaWMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRfdXRpbC5sb2coMiwgJyhDT01QQVRJQklMSVRZIE5PVElDRSkgLT4gQXMgb2YgU2Nyb2xsTWFnaWMgMi4wLjAgeW91IG5lZWQgdG8gdXNlIFxcJ25ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKClcXCcgdG8gY3JlYXRlIGEgbmV3IGNvbnRyb2xsZXIgaW5zdGFuY2UuIFVzZSBcXCduZXcgU2Nyb2xsTWFnaWMuU2NlbmUoKVxcJyB0byBpbnN0YW5jZSBhIHNjZW5lLicpO1xyXG5cdH07XHJcblxyXG5cdFNjcm9sbE1hZ2ljLnZlcnNpb24gPSBcIjIuMC43XCI7XHJcblxyXG5cdC8vIFRPRE86IHRlbXBvcmFyeSB3b3JrYXJvdW5kIGZvciBjaHJvbWUncyBzY3JvbGwgaml0dGVyIGJ1Z1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBmdW5jdGlvbiAoKSB7fSk7XHJcblxyXG5cdC8vIGdsb2JhbCBjb25zdFxyXG5cdHZhciBQSU5fU1BBQ0VSX0FUVFJJQlVURSA9IFwiZGF0YS1zY3JvbGxtYWdpYy1waW4tc3BhY2VyXCI7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBtYWluIGNsYXNzIHRoYXQgaXMgbmVlZGVkIG9uY2UgcGVyIHNjcm9sbCBjb250YWluZXIuXHJcblx0ICpcclxuXHQgKiBAY2xhc3NcclxuXHQgKlxyXG5cdCAqIEBleGFtcGxlXHJcblx0ICogLy8gYmFzaWMgaW5pdGlhbGl6YXRpb25cclxuXHQgKiB2YXIgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XHJcblx0ICpcclxuXHQgKiAvLyBwYXNzaW5nIG9wdGlvbnNcclxuXHQgKiB2YXIgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKHtjb250YWluZXI6IFwiI215Q29udGFpbmVyXCIsIGxvZ2xldmVsOiAzfSk7XHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgb3B0aW9ucyBmb3IgdGhlIGNvbnRyb2xsZXIuXHJcblx0ICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IFtvcHRpb25zLmNvbnRhaW5lcj13aW5kb3ddIC0gQSBzZWxlY3RvciwgRE9NIG9iamVjdCB0aGF0IHJlZmVyZW5jZXMgdGhlIG1haW4gY29udGFpbmVyIGZvciBzY3JvbGxpbmcuXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy52ZXJ0aWNhbD10cnVlXSAtIFNldHMgdGhlIHNjcm9sbCBtb2RlIHRvIHZlcnRpY2FsIChgdHJ1ZWApIG9yIGhvcml6b250YWwgKGBmYWxzZWApIHNjcm9sbGluZy5cclxuXHQgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMuZ2xvYmFsU2NlbmVPcHRpb25zPXt9XSAtIFRoZXNlIG9wdGlvbnMgd2lsbCBiZSBwYXNzZWQgdG8gZXZlcnkgU2NlbmUgdGhhdCBpcyBhZGRlZCB0byB0aGUgY29udHJvbGxlciB1c2luZyB0aGUgYWRkU2NlbmUgbWV0aG9kLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBTY2VuZSBvcHRpb25zIHNlZSB7QGxpbmsgU2Nyb2xsTWFnaWMuU2NlbmV9LlxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5sb2dsZXZlbD0yXSBMb2dsZXZlbCBmb3IgZGVidWdnaW5nLiBOb3RlIHRoYXQgbG9nZ2luZyBpcyBkaXNhYmxlZCBpbiB0aGUgbWluaWZpZWQgdmVyc2lvbiBvZiBTY3JvbGxNYWdpYy5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAqKiBgMGAgPT4gc2lsZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKiogYDFgID0+IGVycm9yc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICoqIGAyYCA9PiBlcnJvcnMsIHdhcm5pbmdzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKiogYDNgID0+IGVycm9ycywgd2FybmluZ3MsIGRlYnVnaW5mb1xyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucmVmcmVzaEludGVydmFsPTEwMF0gLSBTb21lIGNoYW5nZXMgZG9uJ3QgY2FsbCBldmVudHMgYnkgZGVmYXVsdCwgbGlrZSBjaGFuZ2luZyB0aGUgY29udGFpbmVyIHNpemUgb3IgbW92aW5nIGEgc2NlbmUgdHJpZ2dlciBlbGVtZW50LiAgXHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgVGhpcyBpbnRlcnZhbCBwb2xscyB0aGVzZSBwYXJhbWV0ZXJzIHRvIGZpcmUgdGhlIG5lY2Vzc2FyeSBldmVudHMuICBcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBJZiB5b3UgZG9uJ3QgdXNlIGN1c3RvbSBjb250YWluZXJzLCB0cmlnZ2VyIGVsZW1lbnRzIG9yIGhhdmUgc3RhdGljIGxheW91dHMsIHdoZXJlIHRoZSBwb3NpdGlvbnMgb2YgdGhlIHRyaWdnZXIgZWxlbWVudHMgZG9uJ3QgY2hhbmdlLCB5b3UgY2FuIHNldCB0aGlzIHRvIDAgZGlzYWJsZSBpbnRlcnZhbCBjaGVja2luZyBhbmQgaW1wcm92ZSBwZXJmb3JtYW5jZS5cclxuXHQgKlxyXG5cdCAqL1xyXG5cdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cdFx0LypcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIHNldHRpbmdzXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHRcdHZhclxyXG5cdFx0XHROQU1FU1BBQ0UgPSAnU2Nyb2xsTWFnaWMuQ29udHJvbGxlcicsXHJcblx0XHRcdFNDUk9MTF9ESVJFQ1RJT05fRk9SV0FSRCA9ICdGT1JXQVJEJyxcclxuXHRcdFx0U0NST0xMX0RJUkVDVElPTl9SRVZFUlNFID0gJ1JFVkVSU0UnLFxyXG5cdFx0XHRTQ1JPTExfRElSRUNUSU9OX1BBVVNFRCA9ICdQQVVTRUQnLFxyXG5cdFx0XHRERUZBVUxUX09QVElPTlMgPSBDT05UUk9MTEVSX09QVElPTlMuZGVmYXVsdHM7XHJcblxyXG5cdFx0LypcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIHByaXZhdGUgdmFyc1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblx0XHR2YXJcclxuXHRcdFx0Q29udHJvbGxlciA9IHRoaXMsXHJcblx0XHRcdF9vcHRpb25zID0gX3V0aWwuZXh0ZW5kKHt9LCBERUZBVUxUX09QVElPTlMsIG9wdGlvbnMpLFxyXG5cdFx0XHRfc2NlbmVPYmplY3RzID0gW10sXHJcblx0XHRcdF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSA9IGZhbHNlLCAvLyBjYW4gYmUgYm9vbGVhbiAodHJ1ZSA9PiBhbGwgc2NlbmVzKSBvciBhbiBhcnJheSBvZiBzY2VuZXMgdG8gYmUgdXBkYXRlZFxyXG5cdFx0XHRfc2Nyb2xsUG9zID0gMCxcclxuXHRcdFx0X3Njcm9sbERpcmVjdGlvbiA9IFNDUk9MTF9ESVJFQ1RJT05fUEFVU0VELFxyXG5cdFx0XHRfaXNEb2N1bWVudCA9IHRydWUsXHJcblx0XHRcdF92aWV3UG9ydFNpemUgPSAwLFxyXG5cdFx0XHRfZW5hYmxlZCA9IHRydWUsXHJcblx0XHRcdF91cGRhdGVUaW1lb3V0LFxyXG5cdFx0XHRfcmVmcmVzaFRpbWVvdXQ7XHJcblxyXG5cdFx0LypcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIHByaXZhdGUgZnVuY3Rpb25zXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEludGVybmFsIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIG9mIHRoZSBTY3JvbGxNYWdpYyBDb250cm9sbGVyXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgY29uc3RydWN0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gX29wdGlvbnMpIHtcclxuXHRcdFx0XHRpZiAoIURFRkFVTFRfT1BUSU9OUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiBVbmtub3duIG9wdGlvbiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIik7XHJcblx0XHRcdFx0XHRkZWxldGUgX29wdGlvbnNba2V5XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0X29wdGlvbnMuY29udGFpbmVyID0gX3V0aWwuZ2V0LmVsZW1lbnRzKF9vcHRpb25zLmNvbnRhaW5lcilbMF07XHJcblx0XHRcdC8vIGNoZWNrIFNjcm9sbENvbnRhaW5lclxyXG5cdFx0XHRpZiAoIV9vcHRpb25zLmNvbnRhaW5lcikge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SIGNyZWF0aW5nIG9iamVjdCBcIiArIE5BTUVTUEFDRSArIFwiOiBObyB2YWxpZCBzY3JvbGwgY29udGFpbmVyIHN1cHBsaWVkXCIpO1xyXG5cdFx0XHRcdHRocm93IE5BTUVTUEFDRSArIFwiIGluaXQgZmFpbGVkLlwiOyAvLyBjYW5jZWxcclxuXHRcdFx0fVxyXG5cdFx0XHRfaXNEb2N1bWVudCA9IF9vcHRpb25zLmNvbnRhaW5lciA9PT0gd2luZG93IHx8IF9vcHRpb25zLmNvbnRhaW5lciA9PT0gZG9jdW1lbnQuYm9keSB8fCAhZG9jdW1lbnQuYm9keS5jb250YWlucyhfb3B0aW9ucy5jb250YWluZXIpO1xyXG5cdFx0XHQvLyBub3JtYWxpemUgdG8gd2luZG93XHJcblx0XHRcdGlmIChfaXNEb2N1bWVudCkge1xyXG5cdFx0XHRcdF9vcHRpb25zLmNvbnRhaW5lciA9IHdpbmRvdztcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyB1cGRhdGUgY29udGFpbmVyIHNpemUgaW1tZWRpYXRlbHlcclxuXHRcdFx0X3ZpZXdQb3J0U2l6ZSA9IGdldFZpZXdwb3J0U2l6ZSgpO1xyXG5cdFx0XHQvLyBzZXQgZXZlbnQgaGFuZGxlcnNcclxuXHRcdFx0X29wdGlvbnMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25DaGFuZ2UpO1xyXG5cdFx0XHRfb3B0aW9ucy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvbkNoYW5nZSk7XHJcblxyXG5cdFx0XHR2YXIgcmkgPSBwYXJzZUludChfb3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWwsIDEwKTtcclxuXHRcdFx0X29wdGlvbnMucmVmcmVzaEludGVydmFsID0gX3V0aWwudHlwZS5OdW1iZXIocmkpID8gcmkgOiBERUZBVUxUX09QVElPTlMucmVmcmVzaEludGVydmFsO1xyXG5cdFx0XHRzY2hlZHVsZVJlZnJlc2goKTtcclxuXHJcblx0XHRcdGxvZygzLCBcImFkZGVkIG5ldyBcIiArIE5BTUVTUEFDRSArIFwiIGNvbnRyb2xsZXIgKHZcIiArIFNjcm9sbE1hZ2ljLnZlcnNpb24gKyBcIilcIik7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU2NoZWR1bGUgdGhlIG5leHQgZXhlY3V0aW9uIG9mIHRoZSByZWZyZXNoIGZ1bmN0aW9uXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgc2NoZWR1bGVSZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoX29wdGlvbnMucmVmcmVzaEludGVydmFsID4gMCkge1xyXG5cdFx0XHRcdF9yZWZyZXNoVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHJlZnJlc2gsIF9vcHRpb25zLnJlZnJlc2hJbnRlcnZhbCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEZWZhdWx0IGZ1bmN0aW9uIHRvIGdldCBzY3JvbGwgcG9zIC0gb3ZlcndyaXRlYWJsZSB1c2luZyBgQ29udHJvbGxlci5zY3JvbGxQb3MobmV3RnVuY3Rpb24pYFxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIGdldFNjcm9sbFBvcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIF9vcHRpb25zLnZlcnRpY2FsID8gX3V0aWwuZ2V0LnNjcm9sbFRvcChfb3B0aW9ucy5jb250YWluZXIpIDogX3V0aWwuZ2V0LnNjcm9sbExlZnQoX29wdGlvbnMuY29udGFpbmVyKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZpZXdwb3J0IFNpemUgKHdpZHRoIHZvciBob3Jpem9udGFsLCBoZWlnaHQgZm9yIHZlcnRpY2FsKVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIGdldFZpZXdwb3J0U2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIF9vcHRpb25zLnZlcnRpY2FsID8gX3V0aWwuZ2V0LmhlaWdodChfb3B0aW9ucy5jb250YWluZXIpIDogX3V0aWwuZ2V0LndpZHRoKF9vcHRpb25zLmNvbnRhaW5lcik7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRGVmYXVsdCBmdW5jdGlvbiB0byBzZXQgc2Nyb2xsIHBvcyAtIG92ZXJ3cml0ZWFibGUgdXNpbmcgYENvbnRyb2xsZXIuc2Nyb2xsVG8obmV3RnVuY3Rpb24pYFxyXG5cdFx0ICogTWFrZSBhdmFpbGFibGUgcHVibGljbHkgZm9yIHBpbm5lZCBtb3VzZXdoZWVsIHdvcmthcm91bmQuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgc2V0U2Nyb2xsUG9zID0gdGhpcy5fc2V0U2Nyb2xsUG9zID0gZnVuY3Rpb24gKHBvcykge1xyXG5cdFx0XHRpZiAoX29wdGlvbnMudmVydGljYWwpIHtcclxuXHRcdFx0XHRpZiAoX2lzRG9jdW1lbnQpIHtcclxuXHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbyhfdXRpbC5nZXQuc2Nyb2xsTGVmdCgpLCBwb3MpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRfb3B0aW9ucy5jb250YWluZXIuc2Nyb2xsVG9wID0gcG9zO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoX2lzRG9jdW1lbnQpIHtcclxuXHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbyhwb3MsIF91dGlsLmdldC5zY3JvbGxUb3AoKSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5zY3JvbGxMZWZ0ID0gcG9zO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEhhbmRsZSB1cGRhdGVzIGluIGN5Y2xlcyBpbnN0ZWFkIG9mIG9uIHNjcm9sbCAocGVyZm9ybWFuY2UpXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlU2NlbmVzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoX2VuYWJsZWQgJiYgX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlKSB7XHJcblx0XHRcdFx0Ly8gZGV0ZXJtaW5lIHNjZW5lcyB0byB1cGRhdGVcclxuXHRcdFx0XHR2YXIgc2NlbmVzVG9VcGRhdGUgPSBfdXRpbC50eXBlLkFycmF5KF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSkgPyBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgOiBfc2NlbmVPYmplY3RzLnNsaWNlKDApO1xyXG5cdFx0XHRcdC8vIHJlc2V0IHNjZW5lc1xyXG5cdFx0XHRcdF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHZhciBvbGRTY3JvbGxQb3MgPSBfc2Nyb2xsUG9zO1xyXG5cdFx0XHRcdC8vIHVwZGF0ZSBzY3JvbGwgcG9zIG5vdyBpbnN0ZWFkIG9mIG9uQ2hhbmdlLCBhcyBpdCBtaWdodCBoYXZlIGNoYW5nZWQgc2luY2Ugc2NoZWR1bGluZyAoaS5lLiBpbi1icm93c2VyIHNtb290aCBzY3JvbGwpXHJcblx0XHRcdFx0X3Njcm9sbFBvcyA9IENvbnRyb2xsZXIuc2Nyb2xsUG9zKCk7XHJcblx0XHRcdFx0dmFyIGRlbHRhU2Nyb2xsID0gX3Njcm9sbFBvcyAtIG9sZFNjcm9sbFBvcztcclxuXHRcdFx0XHRpZiAoZGVsdGFTY3JvbGwgIT09IDApIHsgLy8gc2Nyb2xsIHBvc2l0aW9uIGNoYW5nZWQ/XHJcblx0XHRcdFx0XHRfc2Nyb2xsRGlyZWN0aW9uID0gKGRlbHRhU2Nyb2xsID4gMCkgPyBTQ1JPTExfRElSRUNUSU9OX0ZPUldBUkQgOiBTQ1JPTExfRElSRUNUSU9OX1JFVkVSU0U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIHJldmVyc2Ugb3JkZXIgb2Ygc2NlbmVzIGlmIHNjcm9sbGluZyByZXZlcnNlXHJcblx0XHRcdFx0aWYgKF9zY3JvbGxEaXJlY3Rpb24gPT09IFNDUk9MTF9ESVJFQ1RJT05fUkVWRVJTRSkge1xyXG5cdFx0XHRcdFx0c2NlbmVzVG9VcGRhdGUucmV2ZXJzZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyB1cGRhdGUgc2NlbmVzXHJcblx0XHRcdFx0c2NlbmVzVG9VcGRhdGUuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUsIGluZGV4KSB7XHJcblx0XHRcdFx0XHRsb2coMywgXCJ1cGRhdGluZyBTY2VuZSBcIiArIChpbmRleCArIDEpICsgXCIvXCIgKyBzY2VuZXNUb1VwZGF0ZS5sZW5ndGggKyBcIiAoXCIgKyBfc2NlbmVPYmplY3RzLmxlbmd0aCArIFwiIHRvdGFsKVwiKTtcclxuXHRcdFx0XHRcdHNjZW5lLnVwZGF0ZSh0cnVlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAoc2NlbmVzVG9VcGRhdGUubGVuZ3RoID09PSAwICYmIF9vcHRpb25zLmxvZ2xldmVsID49IDMpIHtcclxuXHRcdFx0XHRcdGxvZygzLCBcInVwZGF0aW5nIDAgU2NlbmVzIChub3RoaW5nIGFkZGVkIHRvIGNvbnRyb2xsZXIpXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEluaXRpYWxpemVzIHJBRiBjYWxsYmFja1xyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIGRlYm91bmNlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRfdXBkYXRlVGltZW91dCA9IF91dGlsLnJBRih1cGRhdGVTY2VuZXMpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEhhbmRsZXMgQ29udGFpbmVyIGNoYW5nZXNcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBvbkNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGxvZygzLCBcImV2ZW50IGZpcmVkIGNhdXNpbmcgYW4gdXBkYXRlOlwiLCBlLnR5cGUpO1xyXG5cdFx0XHRpZiAoZS50eXBlID09IFwicmVzaXplXCIpIHtcclxuXHRcdFx0XHQvLyByZXNpemVcclxuXHRcdFx0XHRfdmlld1BvcnRTaXplID0gZ2V0Vmlld3BvcnRTaXplKCk7XHJcblx0XHRcdFx0X3Njcm9sbERpcmVjdGlvbiA9IFNDUk9MTF9ESVJFQ1RJT05fUEFVU0VEO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIHNjaGVkdWxlIHVwZGF0ZVxyXG5cdFx0XHRpZiAoX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlICE9PSB0cnVlKSB7XHJcblx0XHRcdFx0X3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlID0gdHJ1ZTtcclxuXHRcdFx0XHRkZWJvdW5jZVVwZGF0ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciByZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoIV9pc0RvY3VtZW50KSB7XHJcblx0XHRcdFx0Ly8gc2ltdWxhdGUgcmVzaXplIGV2ZW50LiBPbmx5IHdvcmtzIGZvciB2aWV3cG9ydCByZWxldmFudCBwYXJhbSAocGVyZm9ybWFuY2UpXHJcblx0XHRcdFx0aWYgKF92aWV3UG9ydFNpemUgIT0gZ2V0Vmlld3BvcnRTaXplKCkpIHtcclxuXHRcdFx0XHRcdHZhciByZXNpemVFdmVudDtcclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdHJlc2l6ZUV2ZW50ID0gbmV3IEV2ZW50KCdyZXNpemUnLCB7XHJcblx0XHRcdFx0XHRcdFx0YnViYmxlczogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0Y2FuY2VsYWJsZTogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7IC8vIHN0dXBpZCBJRVxyXG5cdFx0XHRcdFx0XHRyZXNpemVFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XHJcblx0XHRcdFx0XHRcdHJlc2l6ZUV2ZW50LmluaXRFdmVudChcInJlc2l6ZVwiLCBmYWxzZSwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0X29wdGlvbnMuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQocmVzaXplRXZlbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRfc2NlbmVPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKHNjZW5lLCBpbmRleCkgeyAvLyByZWZyZXNoIGFsbCBzY2VuZXNcclxuXHRcdFx0XHRzY2VuZS5yZWZyZXNoKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzY2hlZHVsZVJlZnJlc2goKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZW5kIGEgZGVidWcgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cclxuXHRcdCAqIHByb3ZpZGVkIHB1YmxpY2x5IHdpdGggX2xvZyBmb3IgcGx1Z2luc1xyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbG9nbGV2ZWwgLSBUaGUgbG9nbGV2ZWwgcmVxdWlyZWQgdG8gaW5pdGlhdGUgb3V0cHV0IGZvciB0aGUgbWVzc2FnZS5cclxuXHRcdCAqIEBwYXJhbSB7Li4ubWl4ZWR9IG91dHB1dCAtIE9uZSBvciBtb3JlIHZhcmlhYmxlcyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGNvbnNvbGUuXHJcblx0XHQgKi9cclxuXHRcdHZhciBsb2cgPSB0aGlzLl9sb2cgPSBmdW5jdGlvbiAobG9nbGV2ZWwsIG91dHB1dCkge1xyXG5cdFx0XHRpZiAoX29wdGlvbnMubG9nbGV2ZWwgPj0gbG9nbGV2ZWwpIHtcclxuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAxLCAwLCBcIihcIiArIE5BTUVTUEFDRSArIFwiKSAtPlwiKTtcclxuXHRcdFx0XHRfdXRpbC5sb2cuYXBwbHkod2luZG93LCBhcmd1bWVudHMpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0Ly8gZm9yIHNjZW5lcyB3ZSBoYXZlIGdldHRlcnMgZm9yIGVhY2ggb3B0aW9uLCBidXQgZm9yIHRoZSBjb250cm9sbGVyIHdlIGRvbid0LCBzbyB3ZSBuZWVkIHRvIG1ha2UgaXQgYXZhaWxhYmxlIGV4dGVybmFsbHkgZm9yIHBsdWdpbnNcclxuXHRcdHRoaXMuX29wdGlvbnMgPSBfb3B0aW9ucztcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNvcnQgc2NlbmVzIGluIGFzY2VuZGluZyBvcmRlciBvZiB0aGVpciBzdGFydCBvZmZzZXQuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7YXJyYXl9IFNjZW5lc0FycmF5IC0gYW4gYXJyYXkgb2YgU2Nyb2xsTWFnaWMgU2NlbmVzIHRoYXQgc2hvdWxkIGJlIHNvcnRlZFxyXG5cdFx0ICogQHJldHVybiB7YXJyYXl9IFRoZSBzb3J0ZWQgYXJyYXkgb2YgU2NlbmVzLlxyXG5cdFx0ICovXHJcblx0XHR2YXIgc29ydFNjZW5lcyA9IGZ1bmN0aW9uIChTY2VuZXNBcnJheSkge1xyXG5cdFx0XHRpZiAoU2NlbmVzQXJyYXkubGVuZ3RoIDw9IDEpIHtcclxuXHRcdFx0XHRyZXR1cm4gU2NlbmVzQXJyYXk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dmFyIHNjZW5lcyA9IFNjZW5lc0FycmF5LnNsaWNlKDApO1xyXG5cdFx0XHRcdHNjZW5lcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gYS5zY3JvbGxPZmZzZXQoKSA+IGIuc2Nyb2xsT2Zmc2V0KCkgPyAxIDogLTE7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuIHNjZW5lcztcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIHB1YmxpYyBmdW5jdGlvbnNcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQWRkIG9uZSBvcmUgbW9yZSBzY2VuZShzKSB0byB0aGUgY29udHJvbGxlci4gIFxyXG5cdFx0ICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCB0byBgU2NlbmUuYWRkVG8oY29udHJvbGxlcilgLlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHdpdGggYSBwcmV2aW91c2x5IGRlZmluZWQgc2NlbmVcclxuXHRcdCAqIGNvbnRyb2xsZXIuYWRkU2NlbmUoc2NlbmUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHdpdGggYSBuZXdseSBjcmVhdGVkIHNjZW5lLlxyXG5cdFx0ICogY29udHJvbGxlci5hZGRTY2VuZShuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe2R1cmF0aW9uIDogMH0pKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBhZGRpbmcgbXVsdGlwbGUgc2NlbmVzXHJcblx0XHQgKiBjb250cm9sbGVyLmFkZFNjZW5lKFtzY2VuZSwgc2NlbmUyLCBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe2R1cmF0aW9uIDogMH0pXSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHsoU2Nyb2xsTWFnaWMuU2NlbmV8YXJyYXkpfSBuZXdTY2VuZSAtIFNjcm9sbE1hZ2ljIFNjZW5lIG9yIEFycmF5IG9mIFNjZW5lcyB0byBiZSBhZGRlZCB0byB0aGUgY29udHJvbGxlci5cclxuXHRcdCAqIEByZXR1cm4ge0NvbnRyb2xsZXJ9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmFkZFNjZW5lID0gZnVuY3Rpb24gKG5ld1NjZW5lKSB7XHJcblx0XHRcdGlmIChfdXRpbC50eXBlLkFycmF5KG5ld1NjZW5lKSkge1xyXG5cdFx0XHRcdG5ld1NjZW5lLmZvckVhY2goZnVuY3Rpb24gKHNjZW5lLCBpbmRleCkge1xyXG5cdFx0XHRcdFx0Q29udHJvbGxlci5hZGRTY2VuZShzY2VuZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSBpZiAobmV3U2NlbmUgaW5zdGFuY2VvZiBTY3JvbGxNYWdpYy5TY2VuZSkge1xyXG5cdFx0XHRcdGlmIChuZXdTY2VuZS5jb250cm9sbGVyKCkgIT09IENvbnRyb2xsZXIpIHtcclxuXHRcdFx0XHRcdG5ld1NjZW5lLmFkZFRvKENvbnRyb2xsZXIpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoX3NjZW5lT2JqZWN0cy5pbmRleE9mKG5ld1NjZW5lKSA8IDApIHtcclxuXHRcdFx0XHRcdC8vIG5ldyBzY2VuZVxyXG5cdFx0XHRcdFx0X3NjZW5lT2JqZWN0cy5wdXNoKG5ld1NjZW5lKTsgLy8gYWRkIHRvIGFycmF5XHJcblx0XHRcdFx0XHRfc2NlbmVPYmplY3RzID0gc29ydFNjZW5lcyhfc2NlbmVPYmplY3RzKTsgLy8gc29ydFxyXG5cdFx0XHRcdFx0bmV3U2NlbmUub24oXCJzaGlmdC5jb250cm9sbGVyX3NvcnRcIiwgZnVuY3Rpb24gKCkgeyAvLyByZXNvcnQgd2hlbmV2ZXIgc2NlbmUgbW92ZXNcclxuXHRcdFx0XHRcdFx0X3NjZW5lT2JqZWN0cyA9IHNvcnRTY2VuZXMoX3NjZW5lT2JqZWN0cyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdC8vIGluc2VydCBHbG9iYWwgZGVmYXVsdHMuXHJcblx0XHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gX29wdGlvbnMuZ2xvYmFsU2NlbmVPcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdGlmIChuZXdTY2VuZVtrZXldKSB7XHJcblx0XHRcdFx0XHRcdFx0bmV3U2NlbmVba2V5XS5jYWxsKG5ld1NjZW5lLCBfb3B0aW9ucy5nbG9iYWxTY2VuZU9wdGlvbnNba2V5XSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGxvZygzLCBcImFkZGluZyBTY2VuZSAobm93IFwiICsgX3NjZW5lT2JqZWN0cy5sZW5ndGggKyBcIiB0b3RhbClcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBpbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIGZvciAnLmFkZFNjZW5lKCknXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlbW92ZSBvbmUgb3JlIG1vcmUgc2NlbmUocykgZnJvbSB0aGUgY29udHJvbGxlci4gIFxyXG5cdFx0ICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCB0byBgU2NlbmUucmVtb3ZlKClgLlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHJlbW92ZSBhIHNjZW5lIGZyb20gdGhlIGNvbnRyb2xsZXJcclxuXHRcdCAqIGNvbnRyb2xsZXIucmVtb3ZlU2NlbmUoc2NlbmUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHJlbW92ZSBtdWx0aXBsZSBzY2VuZXMgZnJvbSB0aGUgY29udHJvbGxlclxyXG5cdFx0ICogY29udHJvbGxlci5yZW1vdmVTY2VuZShbc2NlbmUsIHNjZW5lMiwgc2NlbmUzXSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHsoU2Nyb2xsTWFnaWMuU2NlbmV8YXJyYXkpfSBTY2VuZSAtIFNjcm9sbE1hZ2ljIFNjZW5lIG9yIEFycmF5IG9mIFNjZW5lcyB0byBiZSByZW1vdmVkIGZyb20gdGhlIGNvbnRyb2xsZXIuXHJcblx0XHQgKiBAcmV0dXJucyB7Q29udHJvbGxlcn0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMucmVtb3ZlU2NlbmUgPSBmdW5jdGlvbiAoU2NlbmUpIHtcclxuXHRcdFx0aWYgKF91dGlsLnR5cGUuQXJyYXkoU2NlbmUpKSB7XHJcblx0XHRcdFx0U2NlbmUuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUsIGluZGV4KSB7XHJcblx0XHRcdFx0XHRDb250cm9sbGVyLnJlbW92ZVNjZW5lKHNjZW5lKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR2YXIgaW5kZXggPSBfc2NlbmVPYmplY3RzLmluZGV4T2YoU2NlbmUpO1xyXG5cdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRTY2VuZS5vZmYoXCJzaGlmdC5jb250cm9sbGVyX3NvcnRcIik7XHJcblx0XHRcdFx0XHRfc2NlbmVPYmplY3RzLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0XHRsb2coMywgXCJyZW1vdmluZyBTY2VuZSAobm93IFwiICsgX3NjZW5lT2JqZWN0cy5sZW5ndGggKyBcIiBsZWZ0KVwiKTtcclxuXHRcdFx0XHRcdFNjZW5lLnJlbW92ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0ICogVXBkYXRlIG9uZSBvcmUgbW9yZSBzY2VuZShzKSBhY2NvcmRpbmcgdG8gdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY29udGFpbmVyLiAgXHJcblx0ICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCB0byBgU2NlbmUudXBkYXRlKClgLiAgXHJcblx0ICogVGhlIHVwZGF0ZSBtZXRob2QgY2FsY3VsYXRlcyB0aGUgc2NlbmUncyBzdGFydCBhbmQgZW5kIHBvc2l0aW9uIChiYXNlZCBvbiB0aGUgdHJpZ2dlciBlbGVtZW50LCB0cmlnZ2VyIGhvb2ssIGR1cmF0aW9uIGFuZCBvZmZzZXQpIGFuZCBjaGVja3MgaXQgYWdhaW5zdCB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGNvbnRhaW5lci4gIFxyXG5cdCAqIEl0IHRoZW4gdXBkYXRlcyB0aGUgY3VycmVudCBzY2VuZSBzdGF0ZSBhY2NvcmRpbmdseSAob3IgZG9lcyBub3RoaW5nLCBpZiB0aGUgc3RhdGUgaXMgYWxyZWFkeSBjb3JyZWN0KSDigJMgUGlucyB3aWxsIGJlIHNldCB0byB0aGVpciBjb3JyZWN0IHBvc2l0aW9uIGFuZCB0d2VlbnMgd2lsbCBiZSB1cGRhdGVkIHRvIHRoZWlyIGNvcnJlY3QgcHJvZ3Jlc3MuICBcclxuXHQgKiBfKipOb3RlOioqIFRoaXMgbWV0aG9kIGdldHMgY2FsbGVkIGNvbnN0YW50bHkgd2hlbmV2ZXIgQ29udHJvbGxlciBkZXRlY3RzIGEgY2hhbmdlLiBUaGUgb25seSBhcHBsaWNhdGlvbiBmb3IgeW91IGlzIGlmIHlvdSBjaGFuZ2Ugc29tZXRoaW5nIG91dHNpZGUgb2YgdGhlIHJlYWxtIG9mIFNjcm9sbE1hZ2ljLCBsaWtlIG1vdmluZyB0aGUgdHJpZ2dlciBvciBjaGFuZ2luZyB0d2VlbiBwYXJhbWV0ZXJzLl9cclxuXHQgKiBAcHVibGljXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiAvLyB1cGRhdGUgYSBzcGVjaWZpYyBzY2VuZSBvbiBuZXh0IGN5Y2xlXHJcbiBcdCAqIGNvbnRyb2xsZXIudXBkYXRlU2NlbmUoc2NlbmUpO1xyXG4gXHQgKlxyXG5cdCAqIC8vIHVwZGF0ZSBhIHNwZWNpZmljIHNjZW5lIGltbWVkaWF0ZWx5XHJcblx0ICogY29udHJvbGxlci51cGRhdGVTY2VuZShzY2VuZSwgdHJ1ZSk7XHJcbiBcdCAqXHJcblx0ICogLy8gdXBkYXRlIG11bHRpcGxlIHNjZW5lcyBzY2VuZSBvbiBuZXh0IGN5Y2xlXHJcblx0ICogY29udHJvbGxlci51cGRhdGVTY2VuZShbc2NlbmUxLCBzY2VuZTIsIHNjZW5lM10pO1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtTY3JvbGxNYWdpYy5TY2VuZX0gU2NlbmUgLSBTY3JvbGxNYWdpYyBTY2VuZSBvciBBcnJheSBvZiBTY2VuZXMgdGhhdCBpcy9hcmUgc3VwcG9zZWQgdG8gYmUgdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtpbW1lZGlhdGVseT1mYWxzZV0gLSBJZiBgdHJ1ZWAgdGhlIHVwZGF0ZSB3aWxsIGJlIGluc3RhbnQsIGlmIGBmYWxzZWAgaXQgd2lsbCB3YWl0IHVudGlsIG5leHQgdXBkYXRlIGN5Y2xlLiAgXHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBUaGlzIGlzIHVzZWZ1bCB3aGVuIGNoYW5naW5nIG11bHRpcGxlIHByb3BlcnRpZXMgb2YgdGhlIHNjZW5lIC0gdGhpcyB3YXkgaXQgd2lsbCBvbmx5IGJlIHVwZGF0ZWQgb25jZSBhbGwgbmV3IHByb3BlcnRpZXMgYXJlIHNldCAodXBkYXRlU2NlbmVzKS5cclxuXHQgKiBAcmV0dXJuIHtDb250cm9sbGVyfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHQgKi9cclxuXHRcdHRoaXMudXBkYXRlU2NlbmUgPSBmdW5jdGlvbiAoU2NlbmUsIGltbWVkaWF0ZWx5KSB7XHJcblx0XHRcdGlmIChfdXRpbC50eXBlLkFycmF5KFNjZW5lKSkge1xyXG5cdFx0XHRcdFNjZW5lLmZvckVhY2goZnVuY3Rpb24gKHNjZW5lLCBpbmRleCkge1xyXG5cdFx0XHRcdFx0Q29udHJvbGxlci51cGRhdGVTY2VuZShzY2VuZSwgaW1tZWRpYXRlbHkpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChpbW1lZGlhdGVseSkge1xyXG5cdFx0XHRcdFx0U2NlbmUudXBkYXRlKHRydWUpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlICE9PSB0cnVlICYmIFNjZW5lIGluc3RhbmNlb2YgU2Nyb2xsTWFnaWMuU2NlbmUpIHsgLy8gaWYgX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlIGlzIHRydWUsIGFsbCBjb25uZWN0ZWQgc2NlbmVzIGFyZSBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgdXBkYXRlXHJcblx0XHRcdFx0XHQvLyBwcmVwIGFycmF5IGZvciBuZXh0IHVwZGF0ZSBjeWNsZVxyXG5cdFx0XHRcdFx0X3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlID0gX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlIHx8IFtdO1xyXG5cdFx0XHRcdFx0aWYgKF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZS5pbmRleE9mKFNjZW5lKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUucHVzaChTY2VuZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgPSBzb3J0U2NlbmVzKF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSk7IC8vIHNvcnRcclxuXHRcdFx0XHRcdGRlYm91bmNlVXBkYXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZXMgdGhlIGNvbnRyb2xsZXIgcGFyYW1zIGFuZCBjYWxscyB1cGRhdGVTY2VuZSBvbiBldmVyeSBzY2VuZSwgdGhhdCBpcyBhdHRhY2hlZCB0byB0aGUgY29udHJvbGxlci4gIFxyXG5cdFx0ICogU2VlIGBDb250cm9sbGVyLnVwZGF0ZVNjZW5lKClgIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgdGhpcyBtZWFucy4gIFxyXG5cdFx0ICogSW4gbW9zdCBjYXNlcyB5b3Ugd2lsbCBub3QgbmVlZCB0aGlzIGZ1bmN0aW9uLCBhcyBpdCBpcyBjYWxsZWQgY29uc3RhbnRseSwgd2hlbmV2ZXIgU2Nyb2xsTWFnaWMgZGV0ZWN0cyBhIHN0YXRlIGNoYW5nZSBldmVudCwgbGlrZSByZXNpemUgb3Igc2Nyb2xsLiAgXHJcblx0XHQgKiBUaGUgb25seSBhcHBsaWNhdGlvbiBmb3IgdGhpcyBtZXRob2QgaXMgd2hlbiBTY3JvbGxNYWdpYyBmYWlscyB0byBkZXRlY3QgdGhlc2UgZXZlbnRzLiAgXHJcblx0XHQgKiBPbmUgYXBwbGljYXRpb24gaXMgd2l0aCBzb21lIGV4dGVybmFsIHNjcm9sbCBsaWJyYXJpZXMgKGxpa2UgaVNjcm9sbCkgdGhhdCBtb3ZlIGFuIGludGVybmFsIGNvbnRhaW5lciB0byBhIG5lZ2F0aXZlIG9mZnNldCBpbnN0ZWFkIG9mIGFjdHVhbGx5IHNjcm9sbGluZy4gSW4gdGhpcyBjYXNlIHRoZSB1cGRhdGUgb24gdGhlIGNvbnRyb2xsZXIgbmVlZHMgdG8gYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBjaGlsZCBjb250YWluZXIncyBwb3NpdGlvbiBjaGFuZ2VzLlxyXG5cdFx0ICogRm9yIHRoaXMgY2FzZSB0aGVyZSB3aWxsIGFsc28gYmUgdGhlIG5lZWQgdG8gcHJvdmlkZSBhIGN1c3RvbSBmdW5jdGlvbiB0byBjYWxjdWxhdGUgdGhlIGNvcnJlY3Qgc2Nyb2xsIHBvc2l0aW9uLiBTZWUgYENvbnRyb2xsZXIuc2Nyb2xsUG9zKClgIGZvciBkZXRhaWxzLlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHVwZGF0ZSB0aGUgY29udHJvbGxlciBvbiBuZXh0IGN5Y2xlIChzYXZlcyBwZXJmb3JtYW5jZSBkdWUgdG8gZWxpbWluYXRpb24gb2YgcmVkdW5kYW50IHVwZGF0ZXMpXHJcblx0XHQgKiBjb250cm9sbGVyLnVwZGF0ZSgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHVwZGF0ZSB0aGUgY29udHJvbGxlciBpbW1lZGlhdGVseVxyXG5cdFx0ICogY29udHJvbGxlci51cGRhdGUodHJ1ZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbaW1tZWRpYXRlbHk9ZmFsc2VdIC0gSWYgYHRydWVgIHRoZSB1cGRhdGUgd2lsbCBiZSBpbnN0YW50LCBpZiBgZmFsc2VgIGl0IHdpbGwgd2FpdCB1bnRpbCBuZXh0IHVwZGF0ZSBjeWNsZSAoYmV0dGVyIHBlcmZvcm1hbmNlKVxyXG5cdFx0ICogQHJldHVybiB7Q29udHJvbGxlcn0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKGltbWVkaWF0ZWx5KSB7XHJcblx0XHRcdG9uQ2hhbmdlKHtcclxuXHRcdFx0XHR0eXBlOiBcInJlc2l6ZVwiXHJcblx0XHRcdH0pOyAvLyB3aWxsIHVwZGF0ZSBzaXplIGFuZCBzZXQgX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlIHRvIHRydWVcclxuXHRcdFx0aWYgKGltbWVkaWF0ZWx5KSB7XHJcblx0XHRcdFx0dXBkYXRlU2NlbmVzKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU2Nyb2xsIHRvIGEgbnVtZXJpYyBzY3JvbGwgb2Zmc2V0LCBhIERPTSBlbGVtZW50LCB0aGUgc3RhcnQgb2YgYSBzY2VuZSBvciBwcm92aWRlIGFuIGFsdGVybmF0ZSBtZXRob2QgZm9yIHNjcm9sbGluZy4gIFxyXG5cdFx0ICogRm9yIHZlcnRpY2FsIGNvbnRyb2xsZXJzIGl0IHdpbGwgY2hhbmdlIHRoZSB0b3Agc2Nyb2xsIG9mZnNldCBhbmQgZm9yIGhvcml6b250YWwgYXBwbGljYXRpb25zIGl0IHdpbGwgY2hhbmdlIHRoZSBsZWZ0IG9mZnNldC5cclxuXHRcdCAqIEBwdWJsaWNcclxuXHRcdCAqXHJcblx0XHQgKiBAc2luY2UgMS4xLjBcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBzY3JvbGwgdG8gYW4gb2Zmc2V0IG9mIDEwMFxyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbygxMDApO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNjcm9sbCB0byBhIERPTSBlbGVtZW50XHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKFwiI2FuY2hvclwiKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzY3JvbGwgdG8gdGhlIGJlZ2lubmluZyBvZiBhIHNjZW5lXHJcblx0XHQgKiB2YXIgc2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe29mZnNldDogMjAwfSk7XHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKHNjZW5lKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBkZWZpbmUgYSBuZXcgc2Nyb2xsIHBvc2l0aW9uIG1vZGlmaWNhdGlvbiBmdW5jdGlvbiAoalF1ZXJ5IGFuaW1hdGUgaW5zdGVhZCBvZiBqdW1wKVxyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbyhmdW5jdGlvbiAobmV3U2Nyb2xsUG9zKSB7XHJcblx0XHQgKlx0JChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBuZXdTY3JvbGxQb3N9KTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbygxMDApOyAvLyBjYWxsIGFzIHVzdWFsLCBidXQgdGhlIG5ldyBmdW5jdGlvbiB3aWxsIGJlIHVzZWQgaW5zdGVhZFxyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGRlZmluZSBhIG5ldyBzY3JvbGwgZnVuY3Rpb24gd2l0aCBhbiBhZGRpdGlvbmFsIHBhcmFtZXRlclxyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbyhmdW5jdGlvbiAobmV3U2Nyb2xsUG9zLCBtZXNzYWdlKSB7XHJcblx0XHQgKiAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcblx0XHQgKlx0JCh0aGlzKS5hbmltYXRlKHtzY3JvbGxUb3A6IG5ld1Njcm9sbFBvc30pO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKiAvLyBjYWxsIGFzIHVzdWFsLCBidXQgc3VwcGx5IGFuIGV4dHJhIHBhcmFtZXRlciB0byB0aGUgZGVmaW5lZCBjdXN0b20gZnVuY3Rpb25cclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oMTAwLCBcIm15IG1lc3NhZ2VcIik7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gZGVmaW5lIGEgbmV3IHNjcm9sbCBmdW5jdGlvbiB3aXRoIGFuIGFkZGl0aW9uYWwgcGFyYW1ldGVyIGNvbnRhaW5pbmcgbXVsdGlwbGUgdmFyaWFibGVzXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKGZ1bmN0aW9uIChuZXdTY3JvbGxQb3MsIG9wdGlvbnMpIHtcclxuXHRcdCAqICBzb21lR2xvYmFsVmFyID0gb3B0aW9ucy5hICsgb3B0aW9ucy5iO1xyXG5cdFx0ICpcdCQodGhpcykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBuZXdTY3JvbGxQb3N9KTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICogLy8gY2FsbCBhcyB1c3VhbCwgYnV0IHN1cHBseSBhbiBleHRyYSBwYXJhbWV0ZXIgY29udGFpbmluZyBtdWx0aXBsZSBvcHRpb25zXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCwge2E6IDEsIGI6IDJ9KTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBkZWZpbmUgYSBuZXcgc2Nyb2xsIGZ1bmN0aW9uIHdpdGggYSBjYWxsYmFjayBzdXBwbGllZCBhcyBhbiBhZGRpdGlvbmFsIHBhcmFtZXRlclxyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbyhmdW5jdGlvbiAobmV3U2Nyb2xsUG9zLCBjYWxsYmFjaykge1xyXG5cdFx0ICpcdCQodGhpcykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBuZXdTY3JvbGxQb3N9LCA0MDAsIFwic3dpbmdcIiwgY2FsbGJhY2spO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKiAvLyBjYWxsIGFzIHVzdWFsLCBidXQgc3VwcGx5IGFuIGV4dHJhIHBhcmFtZXRlciwgd2hpY2ggaXMgdXNlZCBhcyBhIGNhbGxiYWNrIGluIHRoZSBwcmV2aW91c2x5IGRlZmluZWQgY3VzdG9tIHNjcm9sbCBmdW5jdGlvblxyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbygxMDAsIGZ1bmN0aW9uKCkge1xyXG5cdFx0ICpcdGNvbnNvbGUubG9nKFwic2Nyb2xsIGhhcyBmaW5pc2hlZC5cIik7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge21peGVkfSBzY3JvbGxUYXJnZXQgLSBUaGUgc3VwcGxpZWQgYXJndW1lbnQgY2FuIGJlIG9uZSBvZiB0aGVzZSB0eXBlczpcclxuXHRcdCAqIDEuIGBudW1iZXJgIC0+IFRoZSBjb250YWluZXIgd2lsbCBzY3JvbGwgdG8gdGhpcyBuZXcgc2Nyb2xsIG9mZnNldC5cclxuXHRcdCAqIDIuIGBzdHJpbmdgIG9yIGBvYmplY3RgIC0+IENhbiBiZSBhIHNlbGVjdG9yIG9yIGEgRE9NIG9iamVjdC4gIFxyXG5cdFx0ICogIFRoZSBjb250YWluZXIgd2lsbCBzY3JvbGwgdG8gdGhlIHBvc2l0aW9uIG9mIHRoaXMgZWxlbWVudC5cclxuXHRcdCAqIDMuIGBTY3JvbGxNYWdpYyBTY2VuZWAgLT4gVGhlIGNvbnRhaW5lciB3aWxsIHNjcm9sbCB0byB0aGUgc3RhcnQgb2YgdGhpcyBzY2VuZS5cclxuXHRcdCAqIDQuIGBmdW5jdGlvbmAgLT4gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIHVzZWQgZm9yIGZ1dHVyZSBzY3JvbGwgcG9zaXRpb24gbW9kaWZpY2F0aW9ucy4gIFxyXG5cdFx0ICogIFRoaXMgcHJvdmlkZXMgYSB3YXkgZm9yIHlvdSB0byBjaGFuZ2UgdGhlIGJlaGF2aW91ciBvZiBzY3JvbGxpbmcgYW5kIGFkZGluZyBuZXcgYmVoYXZpb3VyIGxpa2UgYW5pbWF0aW9uLiBUaGUgZnVuY3Rpb24gcmVjZWl2ZXMgdGhlIG5ldyBzY3JvbGwgcG9zaXRpb24gYXMgYSBwYXJhbWV0ZXIgYW5kIGEgcmVmZXJlbmNlIHRvIHRoZSBjb250YWluZXIgZWxlbWVudCB1c2luZyBgdGhpc2AuICBcclxuXHRcdCAqICBJdCBtYXkgYWxzbyBvcHRpb25hbGx5IHJlY2VpdmUgYW4gb3B0aW9uYWwgYWRkaXRpb25hbCBwYXJhbWV0ZXIgKHNlZSBiZWxvdykgIFxyXG5cdFx0ICogIF8qKk5PVEU6KiogIFxyXG5cdFx0ICogIEFsbCBvdGhlciBvcHRpb25zIHdpbGwgc3RpbGwgd29yayBhcyBleHBlY3RlZCwgdXNpbmcgdGhlIG5ldyBmdW5jdGlvbiB0byBzY3JvbGwuX1xyXG5cdFx0ICogQHBhcmFtIHttaXhlZH0gW2FkZGl0aW9uYWxQYXJhbWV0ZXJdIC0gSWYgYSBjdXN0b20gc2Nyb2xsIGZ1bmN0aW9uIHdhcyBkZWZpbmVkIChzZWUgYWJvdmUgNC4pLCB5b3UgbWF5IHdhbnQgdG8gc3VwcGx5IGFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBpdCwgd2hlbiBjYWxsaW5nIGl0LiBZb3UgY2FuIGRvIHRoaXMgdXNpbmcgdGhpcyBwYXJhbWV0ZXIg4oCTIHNlZSBleGFtcGxlcyBmb3IgZGV0YWlscy4gUGxlYXNlIG5vdGUsIHRoYXQgdGhpcyBwYXJhbWV0ZXIgd2lsbCBoYXZlIG5vIGVmZmVjdCwgaWYgeW91IHVzZSB0aGUgZGVmYXVsdCBzY3JvbGxpbmcgZnVuY3Rpb24uXHJcblx0XHQgKiBAcmV0dXJucyB7Q29udHJvbGxlcn0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuc2Nyb2xsVG8gPSBmdW5jdGlvbiAoc2Nyb2xsVGFyZ2V0LCBhZGRpdGlvbmFsUGFyYW1ldGVyKSB7XHJcblx0XHRcdGlmIChfdXRpbC50eXBlLk51bWJlcihzY3JvbGxUYXJnZXQpKSB7IC8vIGV4Y2VjdXRlXHJcblx0XHRcdFx0c2V0U2Nyb2xsUG9zLmNhbGwoX29wdGlvbnMuY29udGFpbmVyLCBzY3JvbGxUYXJnZXQsIGFkZGl0aW9uYWxQYXJhbWV0ZXIpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNjcm9sbFRhcmdldCBpbnN0YW5jZW9mIFNjcm9sbE1hZ2ljLlNjZW5lKSB7IC8vIHNjcm9sbCB0byBzY2VuZVxyXG5cdFx0XHRcdGlmIChzY3JvbGxUYXJnZXQuY29udHJvbGxlcigpID09PSBDb250cm9sbGVyKSB7IC8vIGNoZWNrIGlmIHRoZSBjb250cm9sbGVyIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHNjZW5lXHJcblx0XHRcdFx0XHRDb250cm9sbGVyLnNjcm9sbFRvKHNjcm9sbFRhcmdldC5zY3JvbGxPZmZzZXQoKSwgYWRkaXRpb25hbFBhcmFtZXRlcik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxvZygyLCBcInNjcm9sbFRvKCk6IFRoZSBzdXBwbGllZCBzY2VuZSBkb2VzIG5vdCBiZWxvbmcgdG8gdGhpcyBjb250cm9sbGVyLiBTY3JvbGwgY2FuY2VsbGVkLlwiLCBzY3JvbGxUYXJnZXQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChfdXRpbC50eXBlLkZ1bmN0aW9uKHNjcm9sbFRhcmdldCkpIHsgLy8gYXNzaWduIG5ldyBzY3JvbGwgZnVuY3Rpb25cclxuXHRcdFx0XHRzZXRTY3JvbGxQb3MgPSBzY3JvbGxUYXJnZXQ7XHJcblx0XHRcdH0gZWxzZSB7IC8vIHNjcm9sbCB0byBlbGVtZW50XHJcblx0XHRcdFx0dmFyIGVsZW0gPSBfdXRpbC5nZXQuZWxlbWVudHMoc2Nyb2xsVGFyZ2V0KVswXTtcclxuXHRcdFx0XHRpZiAoZWxlbSkge1xyXG5cdFx0XHRcdFx0Ly8gaWYgcGFyZW50IGlzIHBpbiBzcGFjZXIsIHVzZSBzcGFjZXIgcG9zaXRpb24gaW5zdGVhZCBzbyBjb3JyZWN0IHN0YXJ0IHBvc2l0aW9uIGlzIHJldHVybmVkIGZvciBwaW5uZWQgZWxlbWVudHMuXHJcblx0XHRcdFx0XHR3aGlsZSAoZWxlbS5wYXJlbnROb2RlLmhhc0F0dHJpYnV0ZShQSU5fU1BBQ0VSX0FUVFJJQlVURSkpIHtcclxuXHRcdFx0XHRcdFx0ZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0cGFyYW0gPSBfb3B0aW9ucy52ZXJ0aWNhbCA/IFwidG9wXCIgOiBcImxlZnRcIiwgLy8gd2hpY2ggcGFyYW0gaXMgb2YgaW50ZXJlc3QgP1xyXG5cdFx0XHRcdFx0XHRjb250YWluZXJPZmZzZXQgPSBfdXRpbC5nZXQub2Zmc2V0KF9vcHRpb25zLmNvbnRhaW5lciksIC8vIGNvbnRhaW5lciBwb3NpdGlvbiBpcyBuZWVkZWQgYmVjYXVzZSBlbGVtZW50IG9mZnNldCBpcyByZXR1cm5lZCBpbiByZWxhdGlvbiB0byBkb2N1bWVudCwgbm90IGluIHJlbGF0aW9uIHRvIGNvbnRhaW5lci5cclxuXHRcdFx0XHRcdFx0ZWxlbWVudE9mZnNldCA9IF91dGlsLmdldC5vZmZzZXQoZWxlbSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCFfaXNEb2N1bWVudCkgeyAvLyBjb250YWluZXIgaXMgbm90IHRoZSBkb2N1bWVudCByb290LCBzbyBzdWJzdHJhY3Qgc2Nyb2xsIFBvc2l0aW9uIHRvIGdldCBjb3JyZWN0IHRyaWdnZXIgZWxlbWVudCBwb3NpdGlvbiByZWxhdGl2ZSB0byBzY3JvbGxjb250ZW50XHJcblx0XHRcdFx0XHRcdGNvbnRhaW5lck9mZnNldFtwYXJhbV0gLT0gQ29udHJvbGxlci5zY3JvbGxQb3MoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRDb250cm9sbGVyLnNjcm9sbFRvKGVsZW1lbnRPZmZzZXRbcGFyYW1dIC0gY29udGFpbmVyT2Zmc2V0W3BhcmFtXSwgYWRkaXRpb25hbFBhcmFtZXRlcik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxvZygyLCBcInNjcm9sbFRvKCk6IFRoZSBzdXBwbGllZCBhcmd1bWVudCBpcyBpbnZhbGlkLiBTY3JvbGwgY2FuY2VsbGVkLlwiLCBzY3JvbGxUYXJnZXQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIHRoZSBjdXJyZW50IHNjcm9sbFBvc2l0aW9uIG9yICoqU2V0KiogYSBuZXcgbWV0aG9kIHRvIGNhbGN1bGF0ZSBpdC4gIFxyXG5cdFx0ICogLT4gKipHRVQqKjpcclxuXHRcdCAqIFdoZW4gdXNlZCBhcyBhIGdldHRlciB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbi4gIFxyXG5cdFx0ICogVG8gZ2V0IGEgY2FjaGVkIHZhbHVlIHVzZSBDb250cm9sbGVyLmluZm8oXCJzY3JvbGxQb3NcIiksIHdoaWNoIHdpbGwgYmUgdXBkYXRlZCBpbiB0aGUgdXBkYXRlIGN5Y2xlLiAgXHJcblx0XHQgKiBGb3IgdmVydGljYWwgY29udHJvbGxlcnMgaXQgd2lsbCByZXR1cm4gdGhlIHRvcCBzY3JvbGwgb2Zmc2V0IGFuZCBmb3IgaG9yaXpvbnRhbCBhcHBsaWNhdGlvbnMgaXQgd2lsbCByZXR1cm4gdGhlIGxlZnQgb2Zmc2V0LlxyXG5cdFx0ICpcclxuXHRcdCAqIC0+ICoqU0VUKio6XHJcblx0XHQgKiBXaGVuIHVzZWQgYXMgYSBzZXR0ZXIgdGhpcyBtZXRob2QgcHJvZGVzIGEgd2F5IHRvIHBlcm1hbmVudGx5IG92ZXJ3cml0ZSB0aGUgY29udHJvbGxlcidzIHNjcm9sbCBwb3NpdGlvbiBjYWxjdWxhdGlvbi4gIFxyXG5cdFx0ICogQSB0eXBpY2FsIHVzZWNhc2UgaXMgd2hlbiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIG5vdCByZWZsZWN0ZWQgYnkgdGhlIGNvbnRhaW5lcnMgc2Nyb2xsVG9wIG9yIHNjcm9sbExlZnQgdmFsdWVzLCBidXQgZm9yIGV4YW1wbGUgYnkgdGhlIGlubmVyIG9mZnNldCBvZiBhIGNoaWxkIGNvbnRhaW5lci4gIFxyXG5cdFx0ICogTW92aW5nIGEgY2hpbGQgY29udGFpbmVyIGluc2lkZSBhIHBhcmVudCBpcyBhIGNvbW1vbmx5IHVzZWQgbWV0aG9kIGZvciBzZXZlcmFsIHNjcm9sbGluZyBmcmFtZXdvcmtzLCBpbmNsdWRpbmcgaVNjcm9sbC4gIFxyXG5cdFx0ICogQnkgcHJvdmlkaW5nIGFuIGFsdGVybmF0ZSBjYWxjdWxhdGlvbiBmdW5jdGlvbiB5b3UgY2FuIG1ha2Ugc3VyZSBTY3JvbGxNYWdpYyByZWNlaXZlcyB0aGUgY29ycmVjdCBzY3JvbGwgcG9zaXRpb24uICBcclxuXHRcdCAqIFBsZWFzZSBhbHNvIGJlYXIgaW4gbWluZCB0aGF0IHlvdXIgZnVuY3Rpb24gc2hvdWxkIHJldHVybiB5IHZhbHVlcyBmb3IgdmVydGljYWwgc2Nyb2xscyBhbiB4IGZvciBob3Jpem9udGFscy5cclxuXHRcdCAqXHJcblx0XHQgKiBUbyBjaGFuZ2UgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHBsZWFzZSB1c2UgYENvbnRyb2xsZXIuc2Nyb2xsVG8oKWAuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBzY3JvbGwgUG9zaXRpb25cclxuXHRcdCAqIHZhciBzY3JvbGxQb3MgPSBjb250cm9sbGVyLnNjcm9sbFBvcygpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBhIG5ldyBzY3JvbGwgcG9zaXRpb24gY2FsY3VsYXRpb24gbWV0aG9kXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFBvcyhmdW5jdGlvbiAoKSB7XHJcblx0XHQgKlx0cmV0dXJuIHRoaXMuaW5mbyhcInZlcnRpY2FsXCIpID8gLW15Y2hpbGRjb250YWluZXIueSA6IC1teWNoaWxkY29udGFpbmVyLnhcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtzY3JvbGxQb3NNZXRob2RdIC0gVGhlIGZ1bmN0aW9uIHRvIGJlIHVzZWQgZm9yIHRoZSBzY3JvbGwgcG9zaXRpb24gY2FsY3VsYXRpb24gb2YgdGhlIGNvbnRhaW5lci5cclxuXHRcdCAqIEByZXR1cm5zIHsobnVtYmVyfENvbnRyb2xsZXIpfSBDdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBvciBwYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5zY3JvbGxQb3MgPSBmdW5jdGlvbiAoc2Nyb2xsUG9zTWV0aG9kKSB7XHJcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXRcclxuXHRcdFx0XHRyZXR1cm4gZ2V0U2Nyb2xsUG9zLmNhbGwoQ29udHJvbGxlcik7XHJcblx0XHRcdH0gZWxzZSB7IC8vIHNldFxyXG5cdFx0XHRcdGlmIChfdXRpbC50eXBlLkZ1bmN0aW9uKHNjcm9sbFBvc01ldGhvZCkpIHtcclxuXHRcdFx0XHRcdGdldFNjcm9sbFBvcyA9IHNjcm9sbFBvc01ldGhvZDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bG9nKDIsIFwiUHJvdmlkZWQgdmFsdWUgZm9yIG1ldGhvZCAnc2Nyb2xsUG9zJyBpcyBub3QgYSBmdW5jdGlvbi4gVG8gY2hhbmdlIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiB1c2UgJ3Njcm9sbFRvKCknLlwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBhbGwgaW5mb3Mgb3Igb25lIGluIHBhcnRpY3VsYXIgYWJvdXQgdGhlIGNvbnRyb2xsZXIuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gcmV0dXJucyB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gKG51bWJlcilcclxuXHRcdCAqIHZhciBzY3JvbGxQb3MgPSBjb250cm9sbGVyLmluZm8oXCJzY3JvbGxQb3NcIik7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gcmV0dXJucyBhbGwgaW5mb3MgYXMgYW4gb2JqZWN0XHJcblx0XHQgKiB2YXIgaW5mb3MgPSBjb250cm9sbGVyLmluZm8oKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2Fib3V0XSAtIElmIHBhc3NlZCBvbmx5IHRoaXMgaW5mbyB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQgb2YgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsLiAgXHJcblx0XHQgXHRcdFx0XHRcdFx0XHQgVmFsaWQgb3B0aW9ucyBhcmU6XHJcblx0XHQgXHRcdFx0XHRcdFx0XHQgKiogYFwic2l6ZVwiYCA9PiB0aGUgY3VycmVudCB2aWV3cG9ydCBzaXplIG9mIHRoZSBjb250YWluZXJcclxuXHRcdCBcdFx0XHRcdFx0XHRcdCAqKiBgXCJ2ZXJ0aWNhbFwiYCA9PiB0cnVlIGlmIHZlcnRpY2FsIHNjcm9sbGluZywgb3RoZXJ3aXNlIGZhbHNlXHJcblx0XHQgXHRcdFx0XHRcdFx0XHQgKiogYFwic2Nyb2xsUG9zXCJgID0+IHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxyXG5cdFx0IFx0XHRcdFx0XHRcdFx0ICoqIGBcInNjcm9sbERpcmVjdGlvblwiYCA9PiB0aGUgbGFzdCBrbm93biBkaXJlY3Rpb24gb2YgdGhlIHNjcm9sbFxyXG5cdFx0IFx0XHRcdFx0XHRcdFx0ICoqIGBcImNvbnRhaW5lclwiYCA9PiB0aGUgY29udGFpbmVyIGVsZW1lbnRcclxuXHRcdCBcdFx0XHRcdFx0XHRcdCAqKiBgXCJpc0RvY3VtZW50XCJgID0+IHRydWUgaWYgY29udGFpbmVyIGVsZW1lbnQgaXMgdGhlIGRvY3VtZW50LlxyXG5cdFx0ICogQHJldHVybnMgeyhtaXhlZHxvYmplY3QpfSBUaGUgcmVxdWVzdGVkIGluZm8ocykuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuaW5mbyA9IGZ1bmN0aW9uIChhYm91dCkge1xyXG5cdFx0XHR2YXIgdmFsdWVzID0ge1xyXG5cdFx0XHRcdHNpemU6IF92aWV3UG9ydFNpemUsIC8vIGNvbnRhaW5zIGhlaWdodCBvciB3aWR0aCAoaW4gcmVnYXJkIHRvIG9yaWVudGF0aW9uKTtcclxuXHRcdFx0XHR2ZXJ0aWNhbDogX29wdGlvbnMudmVydGljYWwsXHJcblx0XHRcdFx0c2Nyb2xsUG9zOiBfc2Nyb2xsUG9zLFxyXG5cdFx0XHRcdHNjcm9sbERpcmVjdGlvbjogX3Njcm9sbERpcmVjdGlvbixcclxuXHRcdFx0XHRjb250YWluZXI6IF9vcHRpb25zLmNvbnRhaW5lcixcclxuXHRcdFx0XHRpc0RvY3VtZW50OiBfaXNEb2N1bWVudFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgLy8gZ2V0IGFsbCBhcyBhbiBvYmplY3RcclxuXHRcdFx0XHRyZXR1cm4gdmFsdWVzO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHZhbHVlc1thYm91dF0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHJldHVybiB2YWx1ZXNbYWJvdXRdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBvcHRpb24gXFxcIlwiICsgYWJvdXQgKyBcIlxcXCIgaXMgbm90IGF2YWlsYWJsZVwiKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIGN1cnJlbnQgbG9nbGV2ZWwgb3B0aW9uIHZhbHVlLlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgdmFsdWVcclxuXHRcdCAqIHZhciBsb2dsZXZlbCA9IGNvbnRyb2xsZXIubG9nbGV2ZWwoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgYSBuZXcgdmFsdWVcclxuXHRcdCAqIGNvbnRyb2xsZXIubG9nbGV2ZWwoMyk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtuZXdMb2dsZXZlbF0gLSBUaGUgbmV3IGxvZ2xldmVsIHNldHRpbmcgb2YgdGhlIENvbnRyb2xsZXIuIGBbMC0zXWBcclxuXHRcdCAqIEByZXR1cm5zIHsobnVtYmVyfENvbnRyb2xsZXIpfSBDdXJyZW50IGxvZ2xldmVsIG9yIHBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmxvZ2xldmVsID0gZnVuY3Rpb24gKG5ld0xvZ2xldmVsKSB7XHJcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXRcclxuXHRcdFx0XHRyZXR1cm4gX29wdGlvbnMubG9nbGV2ZWw7XHJcblx0XHRcdH0gZWxzZSBpZiAoX29wdGlvbnMubG9nbGV2ZWwgIT0gbmV3TG9nbGV2ZWwpIHsgLy8gc2V0XHJcblx0XHRcdFx0X29wdGlvbnMubG9nbGV2ZWwgPSBuZXdMb2dsZXZlbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIGN1cnJlbnQgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgY29udHJvbGxlci4gIFxyXG5cdFx0ICogVGhpcyBjYW4gYmUgdXNlZCB0byBkaXNhYmxlIGFsbCBTY2VuZXMgY29ubmVjdGVkIHRvIHRoZSBjb250cm9sbGVyIHdpdGhvdXQgZGVzdHJveWluZyBvciByZW1vdmluZyB0aGVtLlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgdmFsdWVcclxuXHRcdCAqIHZhciBlbmFibGVkID0gY29udHJvbGxlci5lbmFibGVkKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gZGlzYWJsZSB0aGUgY29udHJvbGxlclxyXG5cdFx0ICogY29udHJvbGxlci5lbmFibGVkKGZhbHNlKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtuZXdTdGF0ZV0gLSBUaGUgbmV3IGVuYWJsZWQgc3RhdGUgb2YgdGhlIGNvbnRyb2xsZXIgYHRydWVgIG9yIGBmYWxzZWAuXHJcblx0XHQgKiBAcmV0dXJucyB7KGJvb2xlYW58Q29udHJvbGxlcil9IEN1cnJlbnQgZW5hYmxlZCBzdGF0ZSBvciBwYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5lbmFibGVkID0gZnVuY3Rpb24gKG5ld1N0YXRlKSB7XHJcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXRcclxuXHRcdFx0XHRyZXR1cm4gX2VuYWJsZWQ7XHJcblx0XHRcdH0gZWxzZSBpZiAoX2VuYWJsZWQgIT0gbmV3U3RhdGUpIHsgLy8gc2V0XHJcblx0XHRcdFx0X2VuYWJsZWQgPSAhIW5ld1N0YXRlO1xyXG5cdFx0XHRcdENvbnRyb2xsZXIudXBkYXRlU2NlbmUoX3NjZW5lT2JqZWN0cywgdHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRGVzdHJveSB0aGUgQ29udHJvbGxlciwgYWxsIFNjZW5lcyBhbmQgZXZlcnl0aGluZy5cclxuXHRcdCAqIEBwdWJsaWNcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gd2l0aG91dCByZXNldHRpbmcgdGhlIHNjZW5lc1xyXG5cdFx0ICogY29udHJvbGxlciA9IGNvbnRyb2xsZXIuZGVzdHJveSgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHdpdGggc2NlbmUgcmVzZXRcclxuXHRcdCAqIGNvbnRyb2xsZXIgPSBjb250cm9sbGVyLmRlc3Ryb3kodHJ1ZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcmVzZXRTY2VuZXM9ZmFsc2VdIC0gSWYgYHRydWVgIHRoZSBwaW5zIGFuZCB0d2VlbnMgKGlmIGV4aXN0ZW50KSBvZiBhbGwgc2NlbmVzIHdpbGwgYmUgcmVzZXQuXHJcblx0XHQgKiBAcmV0dXJucyB7bnVsbH0gTnVsbCB0byB1bnNldCBoYW5kbGVyIHZhcmlhYmxlcy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKHJlc2V0U2NlbmVzKSB7XHJcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoX3JlZnJlc2hUaW1lb3V0KTtcclxuXHRcdFx0dmFyIGkgPSBfc2NlbmVPYmplY3RzLmxlbmd0aDtcclxuXHRcdFx0d2hpbGUgKGktLSkge1xyXG5cdFx0XHRcdF9zY2VuZU9iamVjdHNbaV0uZGVzdHJveShyZXNldFNjZW5lcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0X29wdGlvbnMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25DaGFuZ2UpO1xyXG5cdFx0XHRfb3B0aW9ucy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvbkNoYW5nZSk7XHJcblx0XHRcdF91dGlsLmNBRihfdXBkYXRlVGltZW91dCk7XHJcblx0XHRcdGxvZygzLCBcImRlc3Ryb3llZCBcIiArIE5BTUVTUEFDRSArIFwiIChyZXNldDogXCIgKyAocmVzZXRTY2VuZXMgPyBcInRydWVcIiA6IFwiZmFsc2VcIikgKyBcIilcIik7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBJTklUXHJcblx0XHRjb25zdHJ1Y3QoKTtcclxuXHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cdH07XHJcblxyXG5cdC8vIHN0b3JlIHBhZ2V3aWRlIGNvbnRyb2xsZXIgb3B0aW9uc1xyXG5cdHZhciBDT05UUk9MTEVSX09QVElPTlMgPSB7XHJcblx0XHRkZWZhdWx0czoge1xyXG5cdFx0XHRjb250YWluZXI6IHdpbmRvdyxcclxuXHRcdFx0dmVydGljYWw6IHRydWUsXHJcblx0XHRcdGdsb2JhbFNjZW5lT3B0aW9uczoge30sXHJcblx0XHRcdGxvZ2xldmVsOiAyLFxyXG5cdFx0XHRyZWZyZXNoSW50ZXJ2YWw6IDEwMFxyXG5cdFx0fVxyXG5cdH07XHJcblx0LypcclxuXHQgKiBtZXRob2QgdXNlZCB0byBhZGQgYW4gb3B0aW9uIHRvIFNjcm9sbE1hZ2ljIFNjZW5lcy5cclxuXHQgKi9cclxuXHRTY3JvbGxNYWdpYy5Db250cm9sbGVyLmFkZE9wdGlvbiA9IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUpIHtcclxuXHRcdENPTlRST0xMRVJfT1BUSU9OUy5kZWZhdWx0c1tuYW1lXSA9IGRlZmF1bHRWYWx1ZTtcclxuXHR9O1xyXG5cdC8vIGluc3RhbmNlIGV4dGVuc2lvbiBmdW5jdGlvbiBmb3IgcGx1Z2luc1xyXG5cdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIuZXh0ZW5kID0gZnVuY3Rpb24gKGV4dGVuc2lvbikge1xyXG5cdFx0dmFyIG9sZENsYXNzID0gdGhpcztcclxuXHRcdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdG9sZENsYXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHRoaXMuJHN1cGVyID0gX3V0aWwuZXh0ZW5kKHt9LCB0aGlzKTsgLy8gY29weSBwYXJlbnQgc3RhdGVcclxuXHRcdFx0cmV0dXJuIGV4dGVuc2lvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcblx0XHR9O1xyXG5cdFx0X3V0aWwuZXh0ZW5kKFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIsIG9sZENsYXNzKTsgLy8gY29weSBwcm9wZXJ0aWVzXHJcblx0XHRTY3JvbGxNYWdpYy5Db250cm9sbGVyLnByb3RvdHlwZSA9IG9sZENsYXNzLnByb3RvdHlwZTsgLy8gY29weSBwcm90b3R5cGVcclxuXHRcdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2Nyb2xsTWFnaWMuQ29udHJvbGxlcjsgLy8gcmVzdG9yZSBjb25zdHJ1Y3RvclxyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBIFNjZW5lIGRlZmluZXMgd2hlcmUgdGhlIGNvbnRyb2xsZXIgc2hvdWxkIHJlYWN0IGFuZCBob3cuXHJcblx0ICpcclxuXHQgKiBAY2xhc3NcclxuXHQgKlxyXG5cdCAqIEBleGFtcGxlXHJcblx0ICogLy8gY3JlYXRlIGEgc3RhbmRhcmQgc2NlbmUgYW5kIGFkZCBpdCB0byBhIGNvbnRyb2xsZXJcclxuXHQgKiBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoKVxyXG5cdCAqXHRcdC5hZGRUbyhjb250cm9sbGVyKTtcclxuXHQgKlxyXG5cdCAqIC8vIGNyZWF0ZSBhIHNjZW5lIHdpdGggY3VzdG9tIG9wdGlvbnMgYW5kIGFzc2lnbiBhIGhhbmRsZXIgdG8gaXQuXHJcblx0ICogdmFyIHNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcclxuXHQgKiBcdFx0ZHVyYXRpb246IDEwMCxcclxuXHQgKlx0XHRvZmZzZXQ6IDIwMCxcclxuXHQgKlx0XHR0cmlnZ2VySG9vazogXCJvbkVudGVyXCIsXHJcblx0ICpcdFx0cmV2ZXJzZTogZmFsc2VcclxuXHQgKiB9KTtcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25zIGZvciB0aGUgU2NlbmUuIFRoZSBvcHRpb25zIGNhbiBiZSB1cGRhdGVkIGF0IGFueSB0aW1lLiAgXHJcblx0IFx0XHRcdFx0XHRcdFx0ICAgSW5zdGVhZCBvZiBzZXR0aW5nIHRoZSBvcHRpb25zIGZvciBlYWNoIHNjZW5lIGluZGl2aWR1YWxseSB5b3UgY2FuIGFsc28gc2V0IHRoZW0gZ2xvYmFsbHkgaW4gdGhlIGNvbnRyb2xsZXIgYXMgdGhlIGNvbnRyb2xsZXJzIGBnbG9iYWxTY2VuZU9wdGlvbnNgIG9wdGlvbi4gVGhlIG9iamVjdCBhY2NlcHRzIHRoZSBzYW1lIHByb3BlcnRpZXMgYXMgdGhlIG9uZXMgYmVsb3cuICBcclxuXHQgXHRcdFx0XHRcdFx0XHQgICBXaGVuIGEgc2NlbmUgaXMgYWRkZWQgdG8gdGhlIGNvbnRyb2xsZXIgdGhlIG9wdGlvbnMgZGVmaW5lZCB1c2luZyB0aGUgU2NlbmUgY29uc3RydWN0b3Igd2lsbCBiZSBvdmVyd3JpdHRlbiBieSB0aG9zZSBzZXQgaW4gYGdsb2JhbFNjZW5lT3B0aW9uc2AuXHJcblx0ICogQHBhcmFtIHsobnVtYmVyfHN0cmluZ3xmdW5jdGlvbil9IFtvcHRpb25zLmR1cmF0aW9uPTBdIC0gVGhlIGR1cmF0aW9uIG9mIHRoZSBzY2VuZS4gXHJcblx0IFx0XHRcdFx0XHRQbGVhc2Ugc2VlIGBTY2VuZS5kdXJhdGlvbigpYCBmb3IgZGV0YWlscy5cclxuXHQgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMub2Zmc2V0PTBdIC0gT2Zmc2V0IFZhbHVlIGZvciB0aGUgVHJpZ2dlciBQb3NpdGlvbi4gSWYgbm8gdHJpZ2dlckVsZW1lbnQgaXMgZGVmaW5lZCB0aGlzIHdpbGwgYmUgdGhlIHNjcm9sbCBkaXN0YW5jZSBmcm9tIHRoZSBzdGFydCBvZiB0aGUgcGFnZSwgYWZ0ZXIgd2hpY2ggdGhlIHNjZW5lIHdpbGwgc3RhcnQuXHJcblx0ICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IFtvcHRpb25zLnRyaWdnZXJFbGVtZW50PW51bGxdIC0gU2VsZWN0b3Igb3IgRE9NIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHN0YXJ0IG9mIHRoZSBzY2VuZS4gSWYgdW5kZWZpbmVkIHRoZSBzY2VuZSB3aWxsIHN0YXJ0IHJpZ2h0IGF0IHRoZSBzdGFydCBvZiB0aGUgcGFnZSAodW5sZXNzIGFuIG9mZnNldCBpcyBzZXQpLlxyXG5cdCAqIEBwYXJhbSB7KG51bWJlcnxzdHJpbmcpfSBbb3B0aW9ucy50cmlnZ2VySG9vaz1cIm9uQ2VudGVyXCJdIC0gQ2FuIGJlIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSBkZWZpbmluZyB0aGUgcG9zaXRpb24gb2YgdGhlIHRyaWdnZXIgSG9vayBpbiByZWxhdGlvbiB0byB0aGUgdmlld3BvcnQuICBcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBDYW4gYWxzbyBiZSBkZWZpbmVkIHVzaW5nIGEgc3RyaW5nOlxyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGBcIm9uRW50ZXJcImAgPT4gYDFgXHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKiogYFwib25DZW50ZXJcImAgPT4gYDAuNWBcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAqKiBgXCJvbkxlYXZlXCJgID0+IGAwYFxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucmV2ZXJzZT10cnVlXSAtIFNob3VsZCB0aGUgc2NlbmUgcmV2ZXJzZSwgd2hlbiBzY3JvbGxpbmcgdXA/XHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmxvZ2xldmVsPTJdIC0gTG9nbGV2ZWwgZm9yIGRlYnVnZ2luZy4gTm90ZSB0aGF0IGxvZ2dpbmcgaXMgZGlzYWJsZWQgaW4gdGhlIG1pbmlmaWVkIHZlcnNpb24gb2YgU2Nyb2xsTWFnaWMuXHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAqKiBgMGAgPT4gc2lsZW50XHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAqKiBgMWAgPT4gZXJyb3JzXHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAqKiBgMmAgPT4gZXJyb3JzLCB3YXJuaW5nc1xyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKiogYDNgID0+IGVycm9ycywgd2FybmluZ3MsIGRlYnVnaW5mb1xyXG5cdCAqIFxyXG5cdCAqL1xyXG5cdFNjcm9sbE1hZ2ljLlNjZW5lID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogc2V0dGluZ3NcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdHZhclxyXG5cdFx0XHROQU1FU1BBQ0UgPSAnU2Nyb2xsTWFnaWMuU2NlbmUnLFxyXG5cdFx0XHRTQ0VORV9TVEFURV9CRUZPUkUgPSAnQkVGT1JFJyxcclxuXHRcdFx0U0NFTkVfU1RBVEVfRFVSSU5HID0gJ0RVUklORycsXHJcblx0XHRcdFNDRU5FX1NUQVRFX0FGVEVSID0gJ0FGVEVSJyxcclxuXHRcdFx0REVGQVVMVF9PUFRJT05TID0gU0NFTkVfT1BUSU9OUy5kZWZhdWx0cztcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogcHJpdmF0ZSB2YXJzXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHJcblx0XHR2YXJcclxuXHRcdFx0U2NlbmUgPSB0aGlzLFxyXG5cdFx0XHRfb3B0aW9ucyA9IF91dGlsLmV4dGVuZCh7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRpb25zKSxcclxuXHRcdFx0X3N0YXRlID0gU0NFTkVfU1RBVEVfQkVGT1JFLFxyXG5cdFx0XHRfcHJvZ3Jlc3MgPSAwLFxyXG5cdFx0XHRfc2Nyb2xsT2Zmc2V0ID0ge1xyXG5cdFx0XHRcdHN0YXJ0OiAwLFxyXG5cdFx0XHRcdGVuZDogMFxyXG5cdFx0XHR9LCAvLyByZWZsZWN0cyB0aGUgY29udHJvbGxlcnMncyBzY3JvbGwgcG9zaXRpb24gZm9yIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzY2VuZSByZXNwZWN0aXZlbHlcclxuXHRcdFx0X3RyaWdnZXJQb3MgPSAwLFxyXG5cdFx0XHRfZW5hYmxlZCA9IHRydWUsXHJcblx0XHRcdF9kdXJhdGlvblVwZGF0ZU1ldGhvZCxcclxuXHRcdFx0X2NvbnRyb2xsZXI7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBJbnRlcm5hbCBjb25zdHJ1Y3RvciBmdW5jdGlvbiBvZiB0aGUgU2Nyb2xsTWFnaWMgU2NlbmVcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGZvciAodmFyIGtleSBpbiBfb3B0aW9ucykgeyAvLyBjaGVjayBzdXBwbGllZCBvcHRpb25zXHJcblx0XHRcdFx0aWYgKCFERUZBVUxUX09QVElPTlMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRcdFx0bG9nKDIsIFwiV0FSTklORzogVW5rbm93biBvcHRpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiXCIpO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIF9vcHRpb25zW2tleV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vIGFkZCBnZXR0ZXJzL3NldHRlcnMgZm9yIGFsbCBwb3NzaWJsZSBvcHRpb25zXHJcblx0XHRcdGZvciAodmFyIG9wdGlvbk5hbWUgaW4gREVGQVVMVF9PUFRJT05TKSB7XHJcblx0XHRcdFx0YWRkU2NlbmVPcHRpb24ob3B0aW9uTmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gdmFsaWRhdGUgYWxsIG9wdGlvbnNcclxuXHRcdFx0dmFsaWRhdGVPcHRpb24oKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LypcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIEV2ZW50IE1hbmFnZW1lbnRcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdHZhciBfbGlzdGVuZXJzID0ge307XHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIHN0YXJ0IGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVuZXZlciB0aGUgc2Nyb2xsIHBvc2l0aW9uIGl0cyB0aGUgc3RhcnRpbmcgcG9pbnQgb2YgdGhlIHNjZW5lLiAgXHJcblx0XHQgKiBJdCB3aWxsIGFsc28gZmlyZSB3aGVuIHNjcm9sbGluZyBiYWNrIHVwIGdvaW5nIG92ZXIgdGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSBzY2VuZS4gSWYgeW91IHdhbnQgc29tZXRoaW5nIHRvIGhhcHBlbiBvbmx5IHdoZW4gc2Nyb2xsaW5nIGRvd24vcmlnaHQsIHVzZSB0aGUgc2Nyb2xsRGlyZWN0aW9uIHBhcmFtZXRlciBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxyXG5cdFx0ICpcclxuXHRcdCAqIEZvciBkZXRhaWxzIG9uIHRoaXMgZXZlbnQgYW5kIHRoZSBvcmRlciBpbiB3aGljaCBpdCBpcyBmaXJlZCwgcGxlYXNlIHJldmlldyB0aGUge0BsaW5rIFNjZW5lLnByb2dyZXNzfSBtZXRob2QuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI3N0YXJ0XHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwic3RhcnRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiSGl0IHN0YXJ0IHBvaW50IG9mIHNjZW5lLlwiKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5wcm9ncmVzcyAtIFJlZmxlY3RzIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBzY2VuZVxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnN0YXRlIC0gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNjZW5lIGBcIkJFRk9SRVwiYCBvciBgXCJEVVJJTkdcImBcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zY3JvbGxEaXJlY3Rpb24gLSBJbmRpY2F0ZXMgd2hpY2ggd2F5IHdlIGFyZSBzY3JvbGxpbmcgYFwiUEFVU0VEXCJgLCBgXCJGT1JXQVJEXCJgIG9yIGBcIlJFVkVSU0VcImBcclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBlbmQgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW5ldmVyIHRoZSBzY3JvbGwgcG9zaXRpb24gaXRzIHRoZSBlbmRpbmcgcG9pbnQgb2YgdGhlIHNjZW5lLiAgXHJcblx0XHQgKiBJdCB3aWxsIGFsc28gZmlyZSB3aGVuIHNjcm9sbGluZyBiYWNrIHVwIGZyb20gYWZ0ZXIgdGhlIHNjZW5lIGFuZCBnb2luZyBvdmVyIGl0cyBlbmQgcG9zaXRpb24uIElmIHlvdSB3YW50IHNvbWV0aGluZyB0byBoYXBwZW4gb25seSB3aGVuIHNjcm9sbGluZyBkb3duL3JpZ2h0LCB1c2UgdGhlIHNjcm9sbERpcmVjdGlvbiBwYXJhbWV0ZXIgcGFzc2VkIHRvIHRoZSBjYWxsYmFjay5cclxuXHRcdCAqXHJcblx0XHQgKiBGb3IgZGV0YWlscyBvbiB0aGlzIGV2ZW50IGFuZCB0aGUgb3JkZXIgaW4gd2hpY2ggaXQgaXMgZmlyZWQsIHBsZWFzZSByZXZpZXcgdGhlIHtAbGluayBTY2VuZS5wcm9ncmVzc30gbWV0aG9kLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNlbmRcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJlbmRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiSGl0IGVuZCBwb2ludCBvZiBzY2VuZS5cIik7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQucHJvZ3Jlc3MgLSBSZWZsZWN0cyB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgc2NlbmVcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zdGF0ZSAtIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzY2VuZSBgXCJEVVJJTkdcImAgb3IgYFwiQUZURVJcImBcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zY3JvbGxEaXJlY3Rpb24gLSBJbmRpY2F0ZXMgd2hpY2ggd2F5IHdlIGFyZSBzY3JvbGxpbmcgYFwiUEFVU0VEXCJgLCBgXCJGT1JXQVJEXCJgIG9yIGBcIlJFVkVSU0VcImBcclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBlbnRlciBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbmV2ZXIgdGhlIHNjZW5lIGVudGVycyB0aGUgXCJEVVJJTkdcIiBzdGF0ZS4gIFxyXG5cdFx0ICogS2VlcCBpbiBtaW5kIHRoYXQgaXQgZG9lc24ndCBtYXR0ZXIgaWYgdGhlIHNjZW5lIHBsYXlzIGZvcndhcmQgb3IgYmFja3dhcmQ6IFRoaXMgZXZlbnQgYWx3YXlzIGZpcmVzIHdoZW4gdGhlIHNjZW5lIGVudGVycyBpdHMgYWN0aXZlIHNjcm9sbCB0aW1lZnJhbWUsIHJlZ2FyZGxlc3Mgb2YgdGhlIHNjcm9sbC1kaXJlY3Rpb24uXHJcblx0XHQgKlxyXG5cdFx0ICogRm9yIGRldGFpbHMgb24gdGhpcyBldmVudCBhbmQgdGhlIG9yZGVyIGluIHdoaWNoIGl0IGlzIGZpcmVkLCBwbGVhc2UgcmV2aWV3IHRoZSB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9IG1ldGhvZC5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjZW50ZXJcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJlbnRlclwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJTY2VuZSBlbnRlcmVkLlwiKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5wcm9ncmVzcyAtIFJlZmxlY3RzIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBzY2VuZVxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnN0YXRlIC0gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNjZW5lIC0gYWx3YXlzIGBcIkRVUklOR1wiYFxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnNjcm9sbERpcmVjdGlvbiAtIEluZGljYXRlcyB3aGljaCB3YXkgd2UgYXJlIHNjcm9sbGluZyBgXCJQQVVTRURcImAsIGBcIkZPUldBUkRcImAgb3IgYFwiUkVWRVJTRVwiYFxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIGxlYXZlIGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVuZXZlciB0aGUgc2NlbmUncyBzdGF0ZSBnb2VzIGZyb20gXCJEVVJJTkdcIiB0byBlaXRoZXIgXCJCRUZPUkVcIiBvciBcIkFGVEVSXCIuICBcclxuXHRcdCAqIEtlZXAgaW4gbWluZCB0aGF0IGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHRoZSBzY2VuZSBwbGF5cyBmb3J3YXJkIG9yIGJhY2t3YXJkOiBUaGlzIGV2ZW50IGFsd2F5cyBmaXJlcyB3aGVuIHRoZSBzY2VuZSBsZWF2ZXMgaXRzIGFjdGl2ZSBzY3JvbGwgdGltZWZyYW1lLCByZWdhcmRsZXNzIG9mIHRoZSBzY3JvbGwtZGlyZWN0aW9uLlxyXG5cdFx0ICpcclxuXHRcdCAqIEZvciBkZXRhaWxzIG9uIHRoaXMgZXZlbnQgYW5kIHRoZSBvcmRlciBpbiB3aGljaCBpdCBpcyBmaXJlZCwgcGxlYXNlIHJldmlldyB0aGUge0BsaW5rIFNjZW5lLnByb2dyZXNzfSBtZXRob2QuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI2xlYXZlXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwibGVhdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiU2NlbmUgbGVmdC5cIik7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQucHJvZ3Jlc3MgLSBSZWZsZWN0cyB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgc2NlbmVcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zdGF0ZSAtIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzY2VuZSBgXCJCRUZPUkVcImAgb3IgYFwiQUZURVJcImBcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zY3JvbGxEaXJlY3Rpb24gLSBJbmRpY2F0ZXMgd2hpY2ggd2F5IHdlIGFyZSBzY3JvbGxpbmcgYFwiUEFVU0VEXCJgLCBgXCJGT1JXQVJEXCJgIG9yIGBcIlJFVkVSU0VcImBcclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSB1cGRhdGUgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW5ldmVyIHRoZSBzY2VuZSBpcyB1cGRhdGVkIChidXQgbm90IG5lY2Vzc2FyaWx5IGNoYW5nZXMgdGhlIHByb2dyZXNzKS5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjdXBkYXRlXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwidXBkYXRlXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIlNjZW5lIHVwZGF0ZWQuXCIpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnN0YXJ0UG9zIC0gVGhlIHN0YXJ0aW5nIHBvc2l0aW9uIG9mIHRoZSBzY2VuZSAoaW4gcmVsYXRpb24gdG8gdGhlIGNvbmFpbmVyKVxyXG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LmVuZFBvcyAtIFRoZSBlbmRpbmcgcG9zaXRpb24gb2YgdGhlIHNjZW5lIChpbiByZWxhdGlvbiB0byB0aGUgY29uYWluZXIpXHJcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQuc2Nyb2xsUG9zIC0gVGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjb250YWluZXJcclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBwcm9ncmVzcyBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbmV2ZXIgdGhlIHByb2dyZXNzIG9mIHRoZSBzY2VuZSBjaGFuZ2VzLlxyXG5cdFx0ICpcclxuXHRcdCAqIEZvciBkZXRhaWxzIG9uIHRoaXMgZXZlbnQgYW5kIHRoZSBvcmRlciBpbiB3aGljaCBpdCBpcyBmaXJlZCwgcGxlYXNlIHJldmlldyB0aGUge0BsaW5rIFNjZW5lLnByb2dyZXNzfSBtZXRob2QuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI3Byb2dyZXNzXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwicHJvZ3Jlc3NcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiU2NlbmUgcHJvZ3Jlc3MgY2hhbmdlZCB0byBcIiArIGV2ZW50LnByb2dyZXNzKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5wcm9ncmVzcyAtIFJlZmxlY3RzIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBzY2VuZVxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnN0YXRlIC0gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNjZW5lIGBcIkJFRk9SRVwiYCwgYFwiRFVSSU5HXCJgIG9yIGBcIkFGVEVSXCJgXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc2Nyb2xsRGlyZWN0aW9uIC0gSW5kaWNhdGVzIHdoaWNoIHdheSB3ZSBhcmUgc2Nyb2xsaW5nIGBcIlBBVVNFRFwiYCwgYFwiRk9SV0FSRFwiYCBvciBgXCJSRVZFUlNFXCJgXHJcblx0XHQgKi9cclxuXHRcdC8qKlxyXG5cdFx0ICogU2NlbmUgY2hhbmdlIGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVudmV2ZXIgYSBwcm9wZXJ0eSBvZiB0aGUgc2NlbmUgaXMgY2hhbmdlZC5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjY2hhbmdlXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIlNjZW5lIFByb3BlcnR5IFxcXCJcIiArIGV2ZW50LndoYXQgKyBcIlxcXCIgY2hhbmdlZCB0byBcIiArIGV2ZW50Lm5ld3ZhbCk7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQud2hhdCAtIEluZGljYXRlcyB3aGF0IHZhbHVlIGhhcyBiZWVuIGNoYW5nZWRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bWl4ZWR9IGV2ZW50Lm5ld3ZhbCAtIFRoZSBuZXcgdmFsdWUgb2YgdGhlIGNoYW5nZWQgcHJvcGVydHlcclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBzaGlmdCBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbnZldmVyIHRoZSBzdGFydCBvciBlbmQgKipzY3JvbGwgb2Zmc2V0Kiogb2YgdGhlIHNjZW5lIGNoYW5nZS5cclxuXHRcdCAqIFRoaXMgaGFwcGVucyBleHBsaWNpdGVseSwgd2hlbiBvbmUgb2YgdGhlc2UgdmFsdWVzIGNoYW5nZTogYG9mZnNldGAsIGBkdXJhdGlvbmAgb3IgYHRyaWdnZXJIb29rYC5cclxuXHRcdCAqIEl0IHdpbGwgZmlyZSBpbXBsaWNpdGx5IHdoZW4gdGhlIGB0cmlnZ2VyRWxlbWVudGAgY2hhbmdlcywgaWYgdGhlIG5ldyBlbGVtZW50IGhhcyBhIGRpZmZlcmVudCBwb3NpdGlvbiAobW9zdCBjYXNlcykuXHJcblx0XHQgKiBJdCB3aWxsIGFsc28gZmlyZSBpbXBsaWNpdGx5IHdoZW4gdGhlIHNpemUgb2YgdGhlIGNvbnRhaW5lciBjaGFuZ2VzIGFuZCB0aGUgdHJpZ2dlckhvb2sgaXMgYW55dGhpbmcgb3RoZXIgdGhhbiBgb25MZWF2ZWAuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI3NoaWZ0XHJcblx0XHQgKiBAc2luY2UgMS4xLjBcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJzaGlmdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJTY2VuZSBtb3ZlZCwgYmVjYXVzZSB0aGUgXCIgKyBldmVudC5yZWFzb24gKyBcIiBoYXMgY2hhbmdlZC4pXCIpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnJlYXNvbiAtIEluZGljYXRlcyB3aHkgdGhlIHNjZW5lIGhhcyBzaGlmdGVkXHJcblx0XHQgKi9cclxuXHRcdC8qKlxyXG5cdFx0ICogU2NlbmUgZGVzdHJveSBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbnZldmVyIHRoZSBzY2VuZSBpcyBkZXN0cm95ZWQuXHJcblx0XHQgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHRpZHkgdXAgY3VzdG9tIGJlaGF2aW91ciB1c2VkIGluIGV2ZW50cy5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjZGVzdHJveVxyXG5cdFx0ICogQHNpbmNlIDEuMS4wXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwiZW50ZXJcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiAgICAgICAgLy8gYWRkIGN1c3RvbSBhY3Rpb25cclxuXHRcdCAqICAgICAgICAkKFwiI215LWVsZW1cIikubGVmdChcIjIwMFwiKTtcclxuXHRcdCAqICAgICAgfSlcclxuXHRcdCAqICAgICAgLm9uKFwiZGVzdHJveVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqICAgICAgICAvLyByZXNldCBteSBlbGVtZW50IHRvIHN0YXJ0IHBvc2l0aW9uXHJcblx0XHQgKiAgICAgICAgaWYgKGV2ZW50LnJlc2V0KSB7XHJcblx0XHQgKiAgICAgICAgICAkKFwiI215LWVsZW1cIikubGVmdChcIjBcIik7XHJcblx0XHQgKiAgICAgICAgfVxyXG5cdFx0ICogICAgICB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge2Jvb2xlYW59IGV2ZW50LnJlc2V0IC0gSW5kaWNhdGVzIGlmIHRoZSBkZXN0cm95IG1ldGhvZCB3YXMgY2FsbGVkIHdpdGggcmVzZXQgYHRydWVgIG9yIGBmYWxzZWAuXHJcblx0XHQgKi9cclxuXHRcdC8qKlxyXG5cdFx0ICogU2NlbmUgYWRkIGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVuIHRoZSBzY2VuZSBpcyBhZGRlZCB0byBhIGNvbnRyb2xsZXIuXHJcblx0XHQgKiBUaGlzIGlzIG1vc3RseSB1c2VkIGJ5IHBsdWdpbnMgdG8ga25vdyB0aGF0IGNoYW5nZSBtaWdodCBiZSBkdWUuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI2FkZFxyXG5cdFx0ICogQHNpbmNlIDIuMC4wXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwiYWRkXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogXHRjb25zb2xlLmxvZygnU2NlbmUgd2FzIGFkZGVkIHRvIGEgbmV3IGNvbnRyb2xsZXIuJyk7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge2Jvb2xlYW59IGV2ZW50LmNvbnRyb2xsZXIgLSBUaGUgY29udHJvbGxlciBvYmplY3QgdGhlIHNjZW5lIHdhcyBhZGRlZCB0by5cclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSByZW1vdmUgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW4gdGhlIHNjZW5lIGlzIHJlbW92ZWQgZnJvbSBhIGNvbnRyb2xsZXIuXHJcblx0XHQgKiBUaGlzIGlzIG1vc3RseSB1c2VkIGJ5IHBsdWdpbnMgdG8ga25vdyB0aGF0IGNoYW5nZSBtaWdodCBiZSBkdWUuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI3JlbW92ZVxyXG5cdFx0ICogQHNpbmNlIDIuMC4wXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHNjZW5lLm9uKFwicmVtb3ZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogXHRjb25zb2xlLmxvZygnU2NlbmUgd2FzIHJlbW92ZWQgZnJvbSBpdHMgY29udHJvbGxlci4nKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQWRkIG9uZSBvcmUgbW9yZSBldmVudCBsaXN0ZW5lci4gIFxyXG5cdFx0ICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHdpbGwgYmUgZmlyZWQgYXQgdGhlIHJlc3BlY3RpdmUgZXZlbnQsIGFuZCBhbiBvYmplY3QgY29udGFpbmluZyByZWxldmFudCBkYXRhIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBjYWxsYmFjay5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjb25cclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogZnVuY3Rpb24gY2FsbGJhY2sgKGV2ZW50KSB7XHJcblx0XHQgKiBcdFx0Y29uc29sZS5sb2coXCJFdmVudCBmaXJlZCEgKFwiICsgZXZlbnQudHlwZSArIFwiKVwiKTtcclxuXHRcdCAqIH1cclxuXHRcdCAqIC8vIGFkZCBsaXN0ZW5lcnNcclxuXHRcdCAqIHNjZW5lLm9uKFwiY2hhbmdlIHVwZGF0ZSBwcm9ncmVzcyBzdGFydCBlbmQgZW50ZXIgbGVhdmVcIiwgY2FsbGJhY2spO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lcyAtIFRoZSBuYW1lIG9yIG5hbWVzIG9mIHRoZSBldmVudCB0aGUgY2FsbGJhY2sgc2hvdWxkIGJlIGF0dGFjaGVkIHRvLlxyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGV4ZWN1dGVkLCB3aGVuIHRoZSBldmVudCBpcyBkaXNwYXRjaGVkLiBBbiBldmVudCBvYmplY3Qgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5vbiA9IGZ1bmN0aW9uIChuYW1lcywgY2FsbGJhY2spIHtcclxuXHRcdFx0aWYgKF91dGlsLnR5cGUuRnVuY3Rpb24oY2FsbGJhY2spKSB7XHJcblx0XHRcdFx0bmFtZXMgPSBuYW1lcy50cmltKCkuc3BsaXQoJyAnKTtcclxuXHRcdFx0XHRuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChmdWxsbmFtZSkge1xyXG5cdFx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRcdG5hbWVwYXJ0cyA9IGZ1bGxuYW1lLnNwbGl0KCcuJyksXHJcblx0XHRcdFx0XHRcdGV2ZW50bmFtZSA9IG5hbWVwYXJ0c1swXSxcclxuXHRcdFx0XHRcdFx0bmFtZXNwYWNlID0gbmFtZXBhcnRzWzFdO1xyXG5cdFx0XHRcdFx0aWYgKGV2ZW50bmFtZSAhPSBcIipcIikgeyAvLyBkaXNhbGxvdyB3aWxkY2FyZHNcclxuXHRcdFx0XHRcdFx0aWYgKCFfbGlzdGVuZXJzW2V2ZW50bmFtZV0pIHtcclxuXHRcdFx0XHRcdFx0XHRfbGlzdGVuZXJzW2V2ZW50bmFtZV0gPSBbXTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRfbGlzdGVuZXJzW2V2ZW50bmFtZV0ucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0bmFtZXNwYWNlOiBuYW1lc3BhY2UgfHwgJycsXHJcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SIHdoZW4gY2FsbGluZyAnLm9uKCknOiBTdXBwbGllZCBjYWxsYmFjayBmb3IgJ1wiICsgbmFtZXMgKyBcIicgaXMgbm90IGEgdmFsaWQgZnVuY3Rpb24hXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZW1vdmUgb25lIG9yIG1vcmUgZXZlbnQgbGlzdGVuZXIuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI29mZlxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBmdW5jdGlvbiBjYWxsYmFjayAoZXZlbnQpIHtcclxuXHRcdCAqIFx0XHRjb25zb2xlLmxvZyhcIkV2ZW50IGZpcmVkISAoXCIgKyBldmVudC50eXBlICsgXCIpXCIpO1xyXG5cdFx0ICogfVxyXG5cdFx0ICogLy8gYWRkIGxpc3RlbmVyc1xyXG5cdFx0ICogc2NlbmUub24oXCJjaGFuZ2UgdXBkYXRlXCIsIGNhbGxiYWNrKTtcclxuXHRcdCAqIC8vIHJlbW92ZSBsaXN0ZW5lcnNcclxuXHRcdCAqIHNjZW5lLm9mZihcImNoYW5nZSB1cGRhdGVcIiwgY2FsbGJhY2spO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lcyAtIFRoZSBuYW1lIG9yIG5hbWVzIG9mIHRoZSBldmVudCB0aGF0IHNob3VsZCBiZSByZW1vdmVkLlxyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgc3BlY2lmaWMgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgcmVtb3ZlZC4gSWYgbm9uZSBpcyBwYXNzZWQgYWxsIGNhbGxiYWNrcyB0byB0aGUgZXZlbnQgbGlzdGVuZXIgd2lsbCBiZSByZW1vdmVkLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5vZmYgPSBmdW5jdGlvbiAobmFtZXMsIGNhbGxiYWNrKSB7XHJcblx0XHRcdGlmICghbmFtZXMpIHtcclxuXHRcdFx0XHRsb2coMSwgXCJFUlJPUjogSW52YWxpZCBldmVudCBuYW1lIHN1cHBsaWVkLlwiKTtcclxuXHRcdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHRcdH1cclxuXHRcdFx0bmFtZXMgPSBuYW1lcy50cmltKCkuc3BsaXQoJyAnKTtcclxuXHRcdFx0bmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZnVsbG5hbWUsIGtleSkge1xyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0bmFtZXBhcnRzID0gZnVsbG5hbWUuc3BsaXQoJy4nKSxcclxuXHRcdFx0XHRcdGV2ZW50bmFtZSA9IG5hbWVwYXJ0c1swXSxcclxuXHRcdFx0XHRcdG5hbWVzcGFjZSA9IG5hbWVwYXJ0c1sxXSB8fCAnJyxcclxuXHRcdFx0XHRcdHJlbW92ZUxpc3QgPSBldmVudG5hbWUgPT09ICcqJyA/IE9iamVjdC5rZXlzKF9saXN0ZW5lcnMpIDogW2V2ZW50bmFtZV07XHJcblx0XHRcdFx0cmVtb3ZlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChyZW1vdmUpIHtcclxuXHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRsaXN0ID0gX2xpc3RlbmVyc1tyZW1vdmVdIHx8IFtdLFxyXG5cdFx0XHRcdFx0XHRpID0gbGlzdC5sZW5ndGg7XHJcblx0XHRcdFx0XHR3aGlsZSAoaS0tKSB7XHJcblx0XHRcdFx0XHRcdHZhciBsaXN0ZW5lciA9IGxpc3RbaV07XHJcblx0XHRcdFx0XHRcdGlmIChsaXN0ZW5lciAmJiAobmFtZXNwYWNlID09PSBsaXN0ZW5lci5uYW1lc3BhY2UgfHwgbmFtZXNwYWNlID09PSAnKicpICYmICghY2FsbGJhY2sgfHwgY2FsbGJhY2sgPT0gbGlzdGVuZXIuY2FsbGJhY2spKSB7XHJcblx0XHRcdFx0XHRcdFx0bGlzdC5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICghbGlzdC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0ZGVsZXRlIF9saXN0ZW5lcnNbcmVtb3ZlXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUcmlnZ2VyIGFuIGV2ZW50LlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSN0cmlnZ2VyXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIHRoaXMudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0aGF0IHNob3VsZCBiZSB0cmlnZ2VyZWQuXHJcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gW3ZhcnNdIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgaW5mbyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy50cmlnZ2VyID0gZnVuY3Rpb24gKG5hbWUsIHZhcnMpIHtcclxuXHRcdFx0aWYgKG5hbWUpIHtcclxuXHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdG5hbWVwYXJ0cyA9IG5hbWUudHJpbSgpLnNwbGl0KCcuJyksXHJcblx0XHRcdFx0XHRldmVudG5hbWUgPSBuYW1lcGFydHNbMF0sXHJcblx0XHRcdFx0XHRuYW1lc3BhY2UgPSBuYW1lcGFydHNbMV0sXHJcblx0XHRcdFx0XHRsaXN0ZW5lcnMgPSBfbGlzdGVuZXJzW2V2ZW50bmFtZV07XHJcblx0XHRcdFx0bG9nKDMsICdldmVudCBmaXJlZDonLCBldmVudG5hbWUsIHZhcnMgPyBcIi0+XCIgOiAnJywgdmFycyB8fCAnJyk7XHJcblx0XHRcdFx0aWYgKGxpc3RlbmVycykge1xyXG5cdFx0XHRcdFx0bGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyLCBrZXkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFuYW1lc3BhY2UgfHwgbmFtZXNwYWNlID09PSBsaXN0ZW5lci5uYW1lc3BhY2UpIHtcclxuXHRcdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsYmFjay5jYWxsKFNjZW5lLCBuZXcgU2Nyb2xsTWFnaWMuRXZlbnQoZXZlbnRuYW1lLCBsaXN0ZW5lci5uYW1lc3BhY2UsIFNjZW5lLCB2YXJzKSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsb2coMSwgXCJFUlJPUjogSW52YWxpZCBldmVudCBuYW1lIHN1cHBsaWVkLlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIHNldCBldmVudCBsaXN0ZW5lcnNcclxuXHRcdFNjZW5lXHJcblx0XHRcdC5vbihcImNoYW5nZS5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdGlmIChlLndoYXQgIT09IFwibG9nbGV2ZWxcIiAmJiBlLndoYXQgIT09IFwidHdlZW5DaGFuZ2VzXCIpIHsgLy8gbm8gbmVlZCBmb3IgYSBzY2VuZSB1cGRhdGUgc2NlbmUgd2l0aCB0aGVzZSBvcHRpb25zLi4uXHJcblx0XHRcdFx0XHRpZiAoZS53aGF0ID09PSBcInRyaWdnZXJFbGVtZW50XCIpIHtcclxuXHRcdFx0XHRcdFx0dXBkYXRlVHJpZ2dlckVsZW1lbnRQb3NpdGlvbigpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChlLndoYXQgPT09IFwicmV2ZXJzZVwiKSB7IC8vIHRoZSBvbmx5IHByb3BlcnR5IGxlZnQgdGhhdCBtYXkgaGF2ZSBhbiBpbXBhY3Qgb24gdGhlIGN1cnJlbnQgc2NlbmUgc3RhdGUuIEV2ZXJ5dGhpbmcgZWxzZSBpcyBoYW5kbGVkIGJ5IHRoZSBzaGlmdCBldmVudC5cclxuXHRcdFx0XHRcdFx0U2NlbmUudXBkYXRlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQub24oXCJzaGlmdC5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHVwZGF0ZVNjcm9sbE9mZnNldCgpO1xyXG5cdFx0XHRcdFNjZW5lLnVwZGF0ZSgpOyAvLyB1cGRhdGUgc2NlbmUgdG8gcmVmbGVjdCBuZXcgcG9zaXRpb25cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZW5kIGEgZGVidWcgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKiBidXQgcHJvdmlkZWQgcHVibGljbHkgd2l0aCBfbG9nIGZvciBwbHVnaW5zXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGxvZ2xldmVsIC0gVGhlIGxvZ2xldmVsIHJlcXVpcmVkIHRvIGluaXRpYXRlIG91dHB1dCBmb3IgdGhlIG1lc3NhZ2UuXHJcblx0XHQgKiBAcGFyYW0gey4uLm1peGVkfSBvdXRwdXQgLSBPbmUgb3IgbW9yZSB2YXJpYWJsZXMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBjb25zb2xlLlxyXG5cdFx0ICovXHJcblx0XHR2YXIgbG9nID0gdGhpcy5fbG9nID0gZnVuY3Rpb24gKGxvZ2xldmVsLCBvdXRwdXQpIHtcclxuXHRcdFx0aWYgKF9vcHRpb25zLmxvZ2xldmVsID49IGxvZ2xldmVsKSB7XHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMSwgMCwgXCIoXCIgKyBOQU1FU1BBQ0UgKyBcIikgLT5cIik7XHJcblx0XHRcdFx0X3V0aWwubG9nLmFwcGx5KHdpbmRvdywgYXJndW1lbnRzKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEFkZCB0aGUgc2NlbmUgdG8gYSBjb250cm9sbGVyLiAgXHJcblx0XHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBDb250cm9sbGVyLmFkZFNjZW5lKHNjZW5lKWAuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2FkZFRvXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGFkZCBhIHNjZW5lIHRvIGEgU2Nyb2xsTWFnaWMgQ29udHJvbGxlclxyXG5cdFx0ICogc2NlbmUuYWRkVG8oY29udHJvbGxlcik7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtTY3JvbGxNYWdpYy5Db250cm9sbGVyfSBjb250cm9sbGVyIC0gVGhlIGNvbnRyb2xsZXIgdG8gd2hpY2ggdGhlIHNjZW5lIHNob3VsZCBiZSBhZGRlZC5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuYWRkVG8gPSBmdW5jdGlvbiAoY29udHJvbGxlcikge1xyXG5cdFx0XHRpZiAoIShjb250cm9sbGVyIGluc3RhbmNlb2YgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcikpIHtcclxuXHRcdFx0XHRsb2coMSwgXCJFUlJPUjogc3VwcGxpZWQgYXJndW1lbnQgb2YgJ2FkZFRvKCknIGlzIG5vdCBhIHZhbGlkIFNjcm9sbE1hZ2ljIENvbnRyb2xsZXJcIik7XHJcblx0XHRcdH0gZWxzZSBpZiAoX2NvbnRyb2xsZXIgIT0gY29udHJvbGxlcikge1xyXG5cdFx0XHRcdC8vIG5ldyBjb250cm9sbGVyXHJcblx0XHRcdFx0aWYgKF9jb250cm9sbGVyKSB7IC8vIHdhcyBhc3NvY2lhdGVkIHRvIGEgZGlmZmVyZW50IGNvbnRyb2xsZXIgYmVmb3JlLCBzbyByZW1vdmUgaXQuLi5cclxuXHRcdFx0XHRcdF9jb250cm9sbGVyLnJlbW92ZVNjZW5lKFNjZW5lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0X2NvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG5cdFx0XHRcdHZhbGlkYXRlT3B0aW9uKCk7XHJcblx0XHRcdFx0dXBkYXRlRHVyYXRpb24odHJ1ZSk7XHJcblx0XHRcdFx0dXBkYXRlVHJpZ2dlckVsZW1lbnRQb3NpdGlvbih0cnVlKTtcclxuXHRcdFx0XHR1cGRhdGVTY3JvbGxPZmZzZXQoKTtcclxuXHRcdFx0XHRfY29udHJvbGxlci5pbmZvKFwiY29udGFpbmVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uQ29udGFpbmVyUmVzaXplKTtcclxuXHRcdFx0XHRjb250cm9sbGVyLmFkZFNjZW5lKFNjZW5lKTtcclxuXHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwiYWRkXCIsIHtcclxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6IF9jb250cm9sbGVyXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0bG9nKDMsIFwiYWRkZWQgXCIgKyBOQU1FU1BBQ0UgKyBcIiB0byBjb250cm9sbGVyXCIpO1xyXG5cdFx0XHRcdFNjZW5lLnVwZGF0ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIGN1cnJlbnQgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgc2NlbmUuICBcclxuXHRcdCAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gZGlzYWJsZSB0aGlzIHNjZW5lIHdpdGhvdXQgcmVtb3Zpbmcgb3IgZGVzdHJveWluZyBpdC5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjZW5hYmxlZFxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgdmFsdWVcclxuXHRcdCAqIHZhciBlbmFibGVkID0gc2NlbmUuZW5hYmxlZCgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGRpc2FibGUgdGhlIHNjZW5lXHJcblx0XHQgKiBzY2VuZS5lbmFibGVkKGZhbHNlKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtuZXdTdGF0ZV0gLSBUaGUgbmV3IGVuYWJsZWQgc3RhdGUgb2YgdGhlIHNjZW5lIGB0cnVlYCBvciBgZmFsc2VgLlxyXG5cdFx0ICogQHJldHVybnMgeyhib29sZWFufFNjZW5lKX0gQ3VycmVudCBlbmFibGVkIHN0YXRlIG9yIHBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmVuYWJsZWQgPSBmdW5jdGlvbiAobmV3U3RhdGUpIHtcclxuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vIGdldFxyXG5cdFx0XHRcdHJldHVybiBfZW5hYmxlZDtcclxuXHRcdFx0fSBlbHNlIGlmIChfZW5hYmxlZCAhPSBuZXdTdGF0ZSkgeyAvLyBzZXRcclxuXHRcdFx0XHRfZW5hYmxlZCA9ICEhbmV3U3RhdGU7XHJcblx0XHRcdFx0U2NlbmUudXBkYXRlKHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZW1vdmUgdGhlIHNjZW5lIGZyb20gdGhlIGNvbnRyb2xsZXIuICBcclxuXHRcdCAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgdG8gYENvbnRyb2xsZXIucmVtb3ZlU2NlbmUoc2NlbmUpYC5cclxuXHRcdCAqIFRoZSBzY2VuZSB3aWxsIG5vdCBiZSB1cGRhdGVkIGFueW1vcmUgdW50aWwgeW91IHJlYWRkIGl0IHRvIGEgY29udHJvbGxlci5cclxuXHRcdCAqIFRvIHJlbW92ZSB0aGUgcGluIG9yIHRoZSB0d2VlbiB5b3UgbmVlZCB0byBjYWxsIHJlbW92ZVR3ZWVuKCkgb3IgcmVtb3ZlUGluKCkgcmVzcGVjdGl2ZWx5LlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNyZW1vdmVcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyByZW1vdmUgdGhlIHNjZW5lIGZyb20gaXRzIGNvbnRyb2xsZXJcclxuXHRcdCAqIHNjZW5lLnJlbW92ZSgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIpIHtcclxuXHRcdFx0XHRfY29udHJvbGxlci5pbmZvKFwiY29udGFpbmVyXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uQ29udGFpbmVyUmVzaXplKTtcclxuXHRcdFx0XHR2YXIgdG1wUGFyZW50ID0gX2NvbnRyb2xsZXI7XHJcblx0XHRcdFx0X2NvbnRyb2xsZXIgPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0dG1wUGFyZW50LnJlbW92ZVNjZW5lKFNjZW5lKTtcclxuXHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwicmVtb3ZlXCIpO1xyXG5cdFx0XHRcdGxvZygzLCBcInJlbW92ZWQgXCIgKyBOQU1FU1BBQ0UgKyBcIiBmcm9tIGNvbnRyb2xsZXJcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERlc3Ryb3kgdGhlIHNjZW5lIGFuZCBldmVyeXRoaW5nLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNkZXN0cm95XHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZGVzdHJveSB0aGUgc2NlbmUgd2l0aG91dCByZXNldHRpbmcgdGhlIHBpbiBhbmQgdHdlZW4gdG8gdGhlaXIgaW5pdGlhbCBwb3NpdGlvbnNcclxuXHRcdCAqIHNjZW5lID0gc2NlbmUuZGVzdHJveSgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGRlc3Ryb3kgdGhlIHNjZW5lIGFuZCByZXNldCB0aGUgcGluIGFuZCB0d2VlblxyXG5cdFx0ICogc2NlbmUgPSBzY2VuZS5kZXN0cm95KHRydWUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc2V0PWZhbHNlXSAtIElmIGB0cnVlYCB0aGUgcGluIGFuZCB0d2VlbiAoaWYgZXhpc3RlbnQpIHdpbGwgYmUgcmVzZXQuXHJcblx0XHQgKiBAcmV0dXJucyB7bnVsbH0gTnVsbCB0byB1bnNldCBoYW5kbGVyIHZhcmlhYmxlcy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKHJlc2V0KSB7XHJcblx0XHRcdFNjZW5lLnRyaWdnZXIoXCJkZXN0cm95XCIsIHtcclxuXHRcdFx0XHRyZXNldDogcmVzZXRcclxuXHRcdFx0fSk7XHJcblx0XHRcdFNjZW5lLnJlbW92ZSgpO1xyXG5cdFx0XHRTY2VuZS5vZmYoXCIqLipcIik7XHJcblx0XHRcdGxvZygzLCBcImRlc3Ryb3llZCBcIiArIE5BTUVTUEFDRSArIFwiIChyZXNldDogXCIgKyAocmVzZXQgPyBcInRydWVcIiA6IFwiZmFsc2VcIikgKyBcIilcIik7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGVzIHRoZSBTY2VuZSB0byByZWZsZWN0IHRoZSBjdXJyZW50IHN0YXRlLiAgXHJcblx0XHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBDb250cm9sbGVyLnVwZGF0ZVNjZW5lKHNjZW5lLCBpbW1lZGlhdGVseSlgLiAgXHJcblx0XHQgKiBUaGUgdXBkYXRlIG1ldGhvZCBjYWxjdWxhdGVzIHRoZSBzY2VuZSdzIHN0YXJ0IGFuZCBlbmQgcG9zaXRpb24gKGJhc2VkIG9uIHRoZSB0cmlnZ2VyIGVsZW1lbnQsIHRyaWdnZXIgaG9vaywgZHVyYXRpb24gYW5kIG9mZnNldCkgYW5kIGNoZWNrcyBpdCBhZ2FpbnN0IHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY29udGFpbmVyLiAgXHJcblx0XHQgKiBJdCB0aGVuIHVwZGF0ZXMgdGhlIGN1cnJlbnQgc2NlbmUgc3RhdGUgYWNjb3JkaW5nbHkgKG9yIGRvZXMgbm90aGluZywgaWYgdGhlIHN0YXRlIGlzIGFscmVhZHkgY29ycmVjdCkg4oCTIFBpbnMgd2lsbCBiZSBzZXQgdG8gdGhlaXIgY29ycmVjdCBwb3NpdGlvbiBhbmQgdHdlZW5zIHdpbGwgYmUgdXBkYXRlZCB0byB0aGVpciBjb3JyZWN0IHByb2dyZXNzLlxyXG5cdFx0ICogVGhpcyBtZWFucyBhbiB1cGRhdGUgZG9lc24ndCBuZWNlc3NhcmlseSByZXN1bHQgaW4gYSBwcm9ncmVzcyBjaGFuZ2UuIFRoZSBgcHJvZ3Jlc3NgIGV2ZW50IHdpbGwgYmUgZmlyZWQgaWYgdGhlIHByb2dyZXNzIGhhcyBpbmRlZWQgY2hhbmdlZCBiZXR3ZWVuIHRoaXMgdXBkYXRlIGFuZCB0aGUgbGFzdC4gIFxyXG5cdFx0ICogXyoqTk9URToqKiBUaGlzIG1ldGhvZCBnZXRzIGNhbGxlZCBjb25zdGFudGx5IHdoZW5ldmVyIFNjcm9sbE1hZ2ljIGRldGVjdHMgYSBjaGFuZ2UuIFRoZSBvbmx5IGFwcGxpY2F0aW9uIGZvciB5b3UgaXMgaWYgeW91IGNoYW5nZSBzb21ldGhpbmcgb3V0c2lkZSBvZiB0aGUgcmVhbG0gb2YgU2Nyb2xsTWFnaWMsIGxpa2UgbW92aW5nIHRoZSB0cmlnZ2VyIG9yIGNoYW5naW5nIHR3ZWVuIHBhcmFtZXRlcnMuX1xyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSN1cGRhdGVcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyB1cGRhdGUgdGhlIHNjZW5lIG9uIG5leHQgdGlja1xyXG5cdFx0ICogc2NlbmUudXBkYXRlKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gdXBkYXRlIHRoZSBzY2VuZSBpbW1lZGlhdGVseVxyXG5cdFx0ICogc2NlbmUudXBkYXRlKHRydWUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyBTY2VuZS51cGRhdGVcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtpbW1lZGlhdGVseT1mYWxzZV0gLSBJZiBgdHJ1ZWAgdGhlIHVwZGF0ZSB3aWxsIGJlIGluc3RhbnQsIGlmIGBmYWxzZWAgaXQgd2lsbCB3YWl0IHVudGlsIG5leHQgdXBkYXRlIGN5Y2xlIChiZXR0ZXIgcGVyZm9ybWFuY2UpLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoaW1tZWRpYXRlbHkpIHtcclxuXHRcdFx0aWYgKF9jb250cm9sbGVyKSB7XHJcblx0XHRcdFx0aWYgKGltbWVkaWF0ZWx5KSB7XHJcblx0XHRcdFx0XHRpZiAoX2NvbnRyb2xsZXIuZW5hYmxlZCgpICYmIF9lbmFibGVkKSB7XHJcblx0XHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRcdHNjcm9sbFBvcyA9IF9jb250cm9sbGVyLmluZm8oXCJzY3JvbGxQb3NcIiksXHJcblx0XHRcdFx0XHRcdFx0bmV3UHJvZ3Jlc3M7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoX29wdGlvbnMuZHVyYXRpb24gPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0bmV3UHJvZ3Jlc3MgPSAoc2Nyb2xsUG9zIC0gX3Njcm9sbE9mZnNldC5zdGFydCkgLyAoX3Njcm9sbE9mZnNldC5lbmQgLSBfc2Nyb2xsT2Zmc2V0LnN0YXJ0KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRuZXdQcm9ncmVzcyA9IHNjcm9sbFBvcyA+PSBfc2Nyb2xsT2Zmc2V0LnN0YXJ0ID8gMSA6IDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJ1cGRhdGVcIiwge1xyXG5cdFx0XHRcdFx0XHRcdHN0YXJ0UG9zOiBfc2Nyb2xsT2Zmc2V0LnN0YXJ0LFxyXG5cdFx0XHRcdFx0XHRcdGVuZFBvczogX3Njcm9sbE9mZnNldC5lbmQsXHJcblx0XHRcdFx0XHRcdFx0c2Nyb2xsUG9zOiBzY3JvbGxQb3NcclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHRTY2VuZS5wcm9ncmVzcyhuZXdQcm9ncmVzcyk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKF9waW4gJiYgX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcpIHtcclxuXHRcdFx0XHRcdFx0dXBkYXRlUGluU3RhdGUodHJ1ZSk7IC8vIHVucGluIGluIHBvc2l0aW9uXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9jb250cm9sbGVyLnVwZGF0ZVNjZW5lKFNjZW5lLCBmYWxzZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGVzIGR5bmFtaWMgc2NlbmUgdmFyaWFibGVzIGxpa2UgdGhlIHRyaWdnZXIgZWxlbWVudCBwb3NpdGlvbiBvciB0aGUgZHVyYXRpb24uXHJcblx0XHQgKiBUaGlzIG1ldGhvZCBpcyBhdXRvbWF0aWNhbGx5IGNhbGxlZCBpbiByZWd1bGFyIGludGVydmFscyBmcm9tIHRoZSBjb250cm9sbGVyLiBTZWUge0BsaW5rIFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXJ9IG9wdGlvbiBgcmVmcmVzaEludGVydmFsYC5cclxuXHRcdCAqIFxyXG5cdFx0ICogWW91IGNhbiBjYWxsIGl0IHRvIG1pbmltaXplIGxhZywgZm9yIGV4YW1wbGUgd2hlbiB5b3UgaW50ZW50aW9uYWxseSBjaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIHRoZSB0cmlnZ2VyRWxlbWVudC5cclxuXHRcdCAqIElmIHlvdSBkb24ndCBpdCB3aWxsIHNpbXBseSBiZSB1cGRhdGVkIGluIHRoZSBuZXh0IHJlZnJlc2ggaW50ZXJ2YWwgb2YgdGhlIGNvbnRhaW5lciwgd2hpY2ggaXMgdXN1YWxseSBzdWZmaWNpZW50LlxyXG5cdFx0ICpcclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcmVmcmVzaFxyXG5cdFx0ICogQHNpbmNlIDEuMS4wXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe3RyaWdnZXJFbGVtZW50OiBcIiN0cmlnZ2VyXCJ9KTtcclxuXHRcdCAqIFxyXG5cdFx0ICogLy8gY2hhbmdlIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJpZ2dlclxyXG5cdFx0ICogJChcIiN0cmlnZ2VyXCIpLmNzcyhcInRvcFwiLCA1MDApO1xyXG5cdFx0ICogLy8gaW1tZWRpYXRlbHkgbGV0IHRoZSBzY2VuZSBrbm93IG9mIHRoaXMgY2hhbmdlXHJcblx0XHQgKiBzY2VuZS5yZWZyZXNoKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5zaGlmdH0sIGlmIHRoZSB0cmlnZ2VyIGVsZW1lbnQgcG9zaXRpb24gb3IgdGhlIGR1cmF0aW9uIGNoYW5nZWRcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgaWYgdGhlIGR1cmF0aW9uIGNoYW5nZWRcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHVwZGF0ZUR1cmF0aW9uKCk7XHJcblx0XHRcdHVwZGF0ZVRyaWdnZXJFbGVtZW50UG9zaXRpb24oKTtcclxuXHRcdFx0Ly8gdXBkYXRlIHRyaWdnZXIgZWxlbWVudCBwb3NpdGlvblxyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBzY2VuZSdzIHByb2dyZXNzLiAgXHJcblx0XHQgKiBVc3VhbGx5IGl0IHNob3VsZG4ndCBiZSBuZWNlc3NhcnkgdG8gdXNlIHRoaXMgYXMgYSBzZXR0ZXIsIGFzIGl0IGlzIHNldCBhdXRvbWF0aWNhbGx5IGJ5IHNjZW5lLnVwZGF0ZSgpLiAgXHJcblx0XHQgKiBUaGUgb3JkZXIgaW4gd2hpY2ggdGhlIGV2ZW50cyBhcmUgZmlyZWQgZGVwZW5kcyBvbiB0aGUgZHVyYXRpb24gb2YgdGhlIHNjZW5lOlxyXG5cdFx0ICogIDEuIFNjZW5lcyB3aXRoIGBkdXJhdGlvbiA9PSAwYDogIFxyXG5cdFx0ICogIFNjZW5lcyB0aGF0IGhhdmUgbm8gZHVyYXRpb24gYnkgZGVmaW5pdGlvbiBoYXZlIG5vIGVuZGluZy4gVGh1cyB0aGUgYGVuZGAgZXZlbnQgd2lsbCBuZXZlciBiZSBmaXJlZC4gIFxyXG5cdFx0ICogIFdoZW4gdGhlIHRyaWdnZXIgcG9zaXRpb24gb2YgdGhlIHNjZW5lIGlzIHBhc3NlZCB0aGUgZXZlbnRzIGFyZSBhbHdheXMgZmlyZWQgaW4gdGhpcyBvcmRlcjogIFxyXG5cdFx0ICogIGBlbnRlcmAsIGBzdGFydGAsIGBwcm9ncmVzc2Agd2hlbiBzY3JvbGxpbmcgZm9yd2FyZCAgXHJcblx0XHQgKiAgYW5kICBcclxuXHRcdCAqICBgcHJvZ3Jlc3NgLCBgc3RhcnRgLCBgbGVhdmVgIHdoZW4gc2Nyb2xsaW5nIGluIHJldmVyc2VcclxuXHRcdCAqICAyLiBTY2VuZXMgd2l0aCBgZHVyYXRpb24gPiAwYDogIFxyXG5cdFx0ICogIFNjZW5lcyB3aXRoIGEgc2V0IGR1cmF0aW9uIGhhdmUgYSBkZWZpbmVkIHN0YXJ0IGFuZCBlbmQgcG9pbnQuICBcclxuXHRcdCAqICBXaGVuIHNjcm9sbGluZyBwYXN0IHRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgc2NlbmUgaXQgd2lsbCBmaXJlIHRoZXNlIGV2ZW50cyBpbiB0aGlzIG9yZGVyOiAgXHJcblx0XHQgKiAgYGVudGVyYCwgYHN0YXJ0YCwgYHByb2dyZXNzYCAgXHJcblx0XHQgKiAgV2hlbiBjb250aW51aW5nIHRvIHNjcm9sbCBhbmQgcGFzc2luZyB0aGUgZW5kIHBvaW50IGl0IHdpbGwgZmlyZSB0aGVzZSBldmVudHM6ICBcclxuXHRcdCAqICBgcHJvZ3Jlc3NgLCBgZW5kYCwgYGxlYXZlYCAgXHJcblx0XHQgKiAgV2hlbiByZXZlcnNpbmcgdGhyb3VnaCB0aGUgZW5kIHBvaW50IHRoZXNlIGV2ZW50cyBhcmUgZmlyZWQ6ICBcclxuXHRcdCAqICBgZW50ZXJgLCBgZW5kYCwgYHByb2dyZXNzYCAgXHJcblx0XHQgKiAgQW5kIHdoZW4gY29udGludWluZyB0byBzY3JvbGwgcGFzdCB0aGUgc3RhcnQgcG9zaXRpb24gaW4gcmV2ZXJzZSBpdCB3aWxsIGZpcmU6ICBcclxuXHRcdCAqICBgcHJvZ3Jlc3NgLCBgc3RhcnRgLCBgbGVhdmVgICBcclxuXHRcdCAqICBJbiBiZXR3ZWVuIHN0YXJ0IGFuZCBlbmQgdGhlIGBwcm9ncmVzc2AgZXZlbnQgd2lsbCBiZSBjYWxsZWQgY29uc3RhbnRseSwgd2hlbmV2ZXIgdGhlIHByb2dyZXNzIGNoYW5nZXMuXHJcblx0XHQgKiBcclxuXHRcdCAqIEluIHNob3J0OiAgXHJcblx0XHQgKiBgZW50ZXJgIGV2ZW50cyB3aWxsIGFsd2F5cyB0cmlnZ2VyICoqYmVmb3JlKiogdGhlIHByb2dyZXNzIHVwZGF0ZSBhbmQgYGxlYXZlYCBlbnZlbnRzIHdpbGwgdHJpZ2dlciAqKmFmdGVyKiogdGhlIHByb2dyZXNzIHVwZGF0ZS4gIFxyXG5cdFx0ICogYHN0YXJ0YCBhbmQgYGVuZGAgd2lsbCBhbHdheXMgdHJpZ2dlciBhdCB0aGVpciByZXNwZWN0aXZlIHBvc2l0aW9uLlxyXG5cdFx0ICogXHJcblx0XHQgKiBQbGVhc2UgcmV2aWV3IHRoZSBldmVudCBkZXNjcmlwdGlvbnMgZm9yIGRldGFpbHMgb24gdGhlIGV2ZW50cyBhbmQgdGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXHJcblx0XHQgKiBcclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcHJvZ3Jlc3NcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgc2NlbmUgcHJvZ3Jlc3NcclxuXHRcdCAqIHZhciBwcm9ncmVzcyA9IHNjZW5lLnByb2dyZXNzKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IG5ldyBzY2VuZSBwcm9ncmVzc1xyXG5cdFx0ICogc2NlbmUucHJvZ3Jlc3MoMC4zKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmVudGVyfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5zdGFydH0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmVuZH0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUubGVhdmV9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtwcm9ncmVzc10gLSBUaGUgbmV3IHByb2dyZXNzIHZhbHVlIG9mIHRoZSBzY2VuZSBgWzAtMV1gLlxyXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gYGdldGAgLSAgQ3VycmVudCBzY2VuZSBwcm9ncmVzcy5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMucHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcclxuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vIGdldFxyXG5cdFx0XHRcdHJldHVybiBfcHJvZ3Jlc3M7XHJcblx0XHRcdH0gZWxzZSB7IC8vIHNldFxyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0ZG9VcGRhdGUgPSBmYWxzZSxcclxuXHRcdFx0XHRcdG9sZFN0YXRlID0gX3N0YXRlLFxyXG5cdFx0XHRcdFx0c2Nyb2xsRGlyZWN0aW9uID0gX2NvbnRyb2xsZXIgPyBfY29udHJvbGxlci5pbmZvKFwic2Nyb2xsRGlyZWN0aW9uXCIpIDogJ1BBVVNFRCcsXHJcblx0XHRcdFx0XHRyZXZlcnNlT3JGb3J3YXJkID0gX29wdGlvbnMucmV2ZXJzZSB8fCBwcm9ncmVzcyA+PSBfcHJvZ3Jlc3M7XHJcblx0XHRcdFx0aWYgKF9vcHRpb25zLmR1cmF0aW9uID09PSAwKSB7XHJcblx0XHRcdFx0XHQvLyB6ZXJvIGR1cmF0aW9uIHNjZW5lc1xyXG5cdFx0XHRcdFx0ZG9VcGRhdGUgPSBfcHJvZ3Jlc3MgIT0gcHJvZ3Jlc3M7XHJcblx0XHRcdFx0XHRfcHJvZ3Jlc3MgPSBwcm9ncmVzcyA8IDEgJiYgcmV2ZXJzZU9yRm9yd2FyZCA/IDAgOiAxO1xyXG5cdFx0XHRcdFx0X3N0YXRlID0gX3Byb2dyZXNzID09PSAwID8gU0NFTkVfU1RBVEVfQkVGT1JFIDogU0NFTkVfU1RBVEVfRFVSSU5HO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBzY2VuZXMgd2l0aCBzdGFydCBhbmQgZW5kXHJcblx0XHRcdFx0XHRpZiAocHJvZ3Jlc3MgPCAwICYmIF9zdGF0ZSAhPT0gU0NFTkVfU1RBVEVfQkVGT1JFICYmIHJldmVyc2VPckZvcndhcmQpIHtcclxuXHRcdFx0XHRcdFx0Ly8gZ28gYmFjayB0byBpbml0aWFsIHN0YXRlXHJcblx0XHRcdFx0XHRcdF9wcm9ncmVzcyA9IDA7XHJcblx0XHRcdFx0XHRcdF9zdGF0ZSA9IFNDRU5FX1NUQVRFX0JFRk9SRTtcclxuXHRcdFx0XHRcdFx0ZG9VcGRhdGUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwcm9ncmVzcyA+PSAwICYmIHByb2dyZXNzIDwgMSAmJiByZXZlcnNlT3JGb3J3YXJkKSB7XHJcblx0XHRcdFx0XHRcdF9wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG5cdFx0XHRcdFx0XHRfc3RhdGUgPSBTQ0VORV9TVEFURV9EVVJJTkc7XHJcblx0XHRcdFx0XHRcdGRvVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAocHJvZ3Jlc3MgPj0gMSAmJiBfc3RhdGUgIT09IFNDRU5FX1NUQVRFX0FGVEVSKSB7XHJcblx0XHRcdFx0XHRcdF9wcm9ncmVzcyA9IDE7XHJcblx0XHRcdFx0XHRcdF9zdGF0ZSA9IFNDRU5FX1NUQVRFX0FGVEVSO1xyXG5cdFx0XHRcdFx0XHRkb1VwZGF0ZSA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HICYmICFyZXZlcnNlT3JGb3J3YXJkKSB7XHJcblx0XHRcdFx0XHRcdHVwZGF0ZVBpblN0YXRlKCk7IC8vIGluIGNhc2Ugd2Ugc2Nyb2xsZWQgYmFja3dhcmRzIG1pZC1zY2VuZSBhbmQgcmV2ZXJzZSBpcyBkaXNhYmxlZCA9PiB1cGRhdGUgdGhlIHBpbiBwb3NpdGlvbiwgc28gaXQgZG9lc24ndCBtb3ZlIGJhY2sgYXMgd2VsbC5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGRvVXBkYXRlKSB7XHJcblx0XHRcdFx0XHQvLyBmaXJlIGV2ZW50c1xyXG5cdFx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRcdGV2ZW50VmFycyA9IHtcclxuXHRcdFx0XHRcdFx0XHRwcm9ncmVzczogX3Byb2dyZXNzLFxyXG5cdFx0XHRcdFx0XHRcdHN0YXRlOiBfc3RhdGUsXHJcblx0XHRcdFx0XHRcdFx0c2Nyb2xsRGlyZWN0aW9uOiBzY3JvbGxEaXJlY3Rpb25cclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0c3RhdGVDaGFuZ2VkID0gX3N0YXRlICE9IG9sZFN0YXRlO1xyXG5cclxuXHRcdFx0XHRcdHZhciB0cmlnZ2VyID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkgeyAvLyB0bXAgaGVscGVyIHRvIHNpbXBsaWZ5IGNvZGVcclxuXHRcdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihldmVudE5hbWUsIGV2ZW50VmFycyk7XHJcblx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdGlmIChzdGF0ZUNoYW5nZWQpIHsgLy8gZW50ZXIgZXZlbnRzXHJcblx0XHRcdFx0XHRcdGlmIChvbGRTdGF0ZSAhPT0gU0NFTkVfU1RBVEVfRFVSSU5HKSB7XHJcblx0XHRcdFx0XHRcdFx0dHJpZ2dlcihcImVudGVyXCIpO1xyXG5cdFx0XHRcdFx0XHRcdHRyaWdnZXIob2xkU3RhdGUgPT09IFNDRU5FX1NUQVRFX0JFRk9SRSA/IFwic3RhcnRcIiA6IFwiZW5kXCIpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0cmlnZ2VyKFwicHJvZ3Jlc3NcIik7XHJcblx0XHRcdFx0XHRpZiAoc3RhdGVDaGFuZ2VkKSB7IC8vIGxlYXZlIGV2ZW50c1xyXG5cdFx0XHRcdFx0XHRpZiAoX3N0YXRlICE9PSBTQ0VORV9TVEFURV9EVVJJTkcpIHtcclxuXHRcdFx0XHRcdFx0XHR0cmlnZ2VyKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQkVGT1JFID8gXCJzdGFydFwiIDogXCJlbmRcIik7XHJcblx0XHRcdFx0XHRcdFx0dHJpZ2dlcihcImxlYXZlXCIpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlIHRoZSBzdGFydCBhbmQgZW5kIHNjcm9sbE9mZnNldCBvZiB0aGUgY29udGFpbmVyLlxyXG5cdFx0ICogVGhlIHBvc2l0aW9ucyByZWZsZWN0IHdoYXQgdGhlIGNvbnRyb2xsZXIncyBzY3JvbGwgcG9zaXRpb24gd2lsbCBiZSBhdCB0aGUgc3RhcnQgYW5kIGVuZCByZXNwZWN0aXZlbHkuXHJcblx0XHQgKiBJcyBjYWxsZWQsIHdoZW46XHJcblx0XHQgKiAgIC0gU2NlbmUgZXZlbnQgXCJjaGFuZ2VcIiBpcyBjYWxsZWQgd2l0aDogb2Zmc2V0LCB0cmlnZ2VySG9vaywgZHVyYXRpb24gXHJcblx0XHQgKiAgIC0gc2Nyb2xsIGNvbnRhaW5lciBldmVudCBcInJlc2l6ZVwiIGlzIGNhbGxlZFxyXG5cdFx0ICogICAtIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJpZ2dlckVsZW1lbnQgY2hhbmdlc1xyXG5cdFx0ICogICAtIHRoZSBjb250cm9sbGVyIGNoYW5nZXMgLT4gYWRkVG8oKVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHVwZGF0ZVNjcm9sbE9mZnNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0X3Njcm9sbE9mZnNldCA9IHtcclxuXHRcdFx0XHRzdGFydDogX3RyaWdnZXJQb3MgKyBfb3B0aW9ucy5vZmZzZXRcclxuXHRcdFx0fTtcclxuXHRcdFx0aWYgKF9jb250cm9sbGVyICYmIF9vcHRpb25zLnRyaWdnZXJFbGVtZW50KSB7XHJcblx0XHRcdFx0Ly8gdGFrZSBhd2F5IHRyaWdnZXJIb29rIHBvcnRpb24gdG8gZ2V0IHJlbGF0aXZlIHRvIHRvcFxyXG5cdFx0XHRcdF9zY3JvbGxPZmZzZXQuc3RhcnQgLT0gX2NvbnRyb2xsZXIuaW5mbyhcInNpemVcIikgKiBfb3B0aW9ucy50cmlnZ2VySG9vaztcclxuXHRcdFx0fVxyXG5cdFx0XHRfc2Nyb2xsT2Zmc2V0LmVuZCA9IF9zY3JvbGxPZmZzZXQuc3RhcnQgKyBfb3B0aW9ucy5kdXJhdGlvbjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGVzIHRoZSBkdXJhdGlvbiBpZiBzZXQgdG8gYSBkeW5hbWljIGZ1bmN0aW9uLlxyXG5cdFx0ICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIHNjZW5lIGlzIGFkZGVkIHRvIGEgY29udHJvbGxlciBhbmQgaW4gcmVndWxhciBpbnRlcnZhbHMgZnJvbSB0aGUgY29udHJvbGxlciB0aHJvdWdoIHNjZW5lLnJlZnJlc2goKS5cclxuXHRcdCAqIFxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCBpZiB0aGUgZHVyYXRpb24gY2hhbmdlZFxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5zaGlmdH0sIGlmIHRoZSBkdXJhdGlvbiBjaGFuZ2VkXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbc3VwcHJlc3NFdmVudHM9ZmFsc2VdIC0gSWYgdHJ1ZSB0aGUgc2hpZnQgZXZlbnQgd2lsbCBiZSBzdXBwcmVzc2VkLlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHVwZGF0ZUR1cmF0aW9uID0gZnVuY3Rpb24gKHN1cHByZXNzRXZlbnRzKSB7XHJcblx0XHRcdC8vIHVwZGF0ZSBkdXJhdGlvblxyXG5cdFx0XHRpZiAoX2R1cmF0aW9uVXBkYXRlTWV0aG9kKSB7XHJcblx0XHRcdFx0dmFyIHZhcm5hbWUgPSBcImR1cmF0aW9uXCI7XHJcblx0XHRcdFx0aWYgKGNoYW5nZU9wdGlvbih2YXJuYW1lLCBfZHVyYXRpb25VcGRhdGVNZXRob2QuY2FsbChTY2VuZSkpICYmICFzdXBwcmVzc0V2ZW50cykgeyAvLyBzZXRcclxuXHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJjaGFuZ2VcIiwge1xyXG5cdFx0XHRcdFx0XHR3aGF0OiB2YXJuYW1lLFxyXG5cdFx0XHRcdFx0XHRuZXd2YWw6IF9vcHRpb25zW3Zhcm5hbWVdXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJzaGlmdFwiLCB7XHJcblx0XHRcdFx0XHRcdHJlYXNvbjogdmFybmFtZVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIHRyaWdnZXJFbGVtZW50LCBpZiBwcmVzZW50LlxyXG5cdFx0ICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIC4uLlxyXG5cdFx0ICogIC0gLi4uIHdoZW4gdGhlIHRyaWdnZXJFbGVtZW50IGlzIGNoYW5nZWRcclxuXHRcdCAqICAtIC4uLiB3aGVuIHRoZSBzY2VuZSBpcyBhZGRlZCB0byBhIChuZXcpIGNvbnRyb2xsZXJcclxuXHRcdCAqICAtIC4uLiBpbiByZWd1bGFyIGludGVydmFscyBmcm9tIHRoZSBjb250cm9sbGVyIHRocm91Z2ggc2NlbmUucmVmcmVzaCgpLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgaWYgdGhlIHBvc2l0aW9uIGNoYW5nZWRcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdXBwcmVzc0V2ZW50cz1mYWxzZV0gLSBJZiB0cnVlIHRoZSBzaGlmdCBldmVudCB3aWxsIGJlIHN1cHByZXNzZWQuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlVHJpZ2dlckVsZW1lbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChzdXBwcmVzc0V2ZW50cykge1xyXG5cdFx0XHR2YXJcclxuXHRcdFx0XHRlbGVtZW50UG9zID0gMCxcclxuXHRcdFx0XHR0ZWxlbSA9IF9vcHRpb25zLnRyaWdnZXJFbGVtZW50O1xyXG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIgJiYgKHRlbGVtIHx8IF90cmlnZ2VyUG9zID4gMCkpIHsgLy8gZWl0aGVyIGFuIGVsZW1lbnQgZXhpc3RzIG9yIHdhcyByZW1vdmVkIGFuZCB0aGUgdHJpZ2dlclBvcyBpcyBzdGlsbCA+IDBcclxuXHRcdFx0XHRpZiAodGVsZW0pIHsgLy8gdGhlcmUgY3VycmVudGx5IGEgdHJpZ2dlckVsZW1lbnQgc2V0XHJcblx0XHRcdFx0XHRpZiAodGVsZW0ucGFyZW50Tm9kZSkgeyAvLyBjaGVjayBpZiBlbGVtZW50IGlzIHN0aWxsIGF0dGFjaGVkIHRvIERPTVxyXG5cdFx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0XHRjb250cm9sbGVySW5mbyA9IF9jb250cm9sbGVyLmluZm8oKSxcclxuXHRcdFx0XHRcdFx0XHRjb250YWluZXJPZmZzZXQgPSBfdXRpbC5nZXQub2Zmc2V0KGNvbnRyb2xsZXJJbmZvLmNvbnRhaW5lciksIC8vIGNvbnRhaW5lciBwb3NpdGlvbiBpcyBuZWVkZWQgYmVjYXVzZSBlbGVtZW50IG9mZnNldCBpcyByZXR1cm5lZCBpbiByZWxhdGlvbiB0byBkb2N1bWVudCwgbm90IGluIHJlbGF0aW9uIHRvIGNvbnRhaW5lci5cclxuXHRcdFx0XHRcdFx0XHRwYXJhbSA9IGNvbnRyb2xsZXJJbmZvLnZlcnRpY2FsID8gXCJ0b3BcIiA6IFwibGVmdFwiOyAvLyB3aGljaCBwYXJhbSBpcyBvZiBpbnRlcmVzdCA/XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBpZiBwYXJlbnQgaXMgc3BhY2VyLCB1c2Ugc3BhY2VyIHBvc2l0aW9uIGluc3RlYWQgc28gY29ycmVjdCBzdGFydCBwb3NpdGlvbiBpcyByZXR1cm5lZCBmb3IgcGlubmVkIGVsZW1lbnRzLlxyXG5cdFx0XHRcdFx0XHR3aGlsZSAodGVsZW0ucGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoUElOX1NQQUNFUl9BVFRSSUJVVEUpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGVsZW0gPSB0ZWxlbS5wYXJlbnROb2RlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgZWxlbWVudE9mZnNldCA9IF91dGlsLmdldC5vZmZzZXQodGVsZW0pO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFjb250cm9sbGVySW5mby5pc0RvY3VtZW50KSB7IC8vIGNvbnRhaW5lciBpcyBub3QgdGhlIGRvY3VtZW50IHJvb3QsIHNvIHN1YnN0cmFjdCBzY3JvbGwgUG9zaXRpb24gdG8gZ2V0IGNvcnJlY3QgdHJpZ2dlciBlbGVtZW50IHBvc2l0aW9uIHJlbGF0aXZlIHRvIHNjcm9sbGNvbnRlbnRcclxuXHRcdFx0XHRcdFx0XHRjb250YWluZXJPZmZzZXRbcGFyYW1dIC09IF9jb250cm9sbGVyLnNjcm9sbFBvcygpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRlbGVtZW50UG9zID0gZWxlbWVudE9mZnNldFtwYXJhbV0gLSBjb250YWluZXJPZmZzZXRbcGFyYW1dO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7IC8vIHRoZXJlIHdhcyBhbiBlbGVtZW50LCBidXQgaXQgd2FzIHJlbW92ZWQgZnJvbSBET01cclxuXHRcdFx0XHRcdFx0bG9nKDIsIFwiV0FSTklORzogdHJpZ2dlckVsZW1lbnQgd2FzIHJlbW92ZWQgZnJvbSBET00gYW5kIHdpbGwgYmUgcmVzZXQgdG9cIiwgdW5kZWZpbmVkKTtcclxuXHRcdFx0XHRcdFx0U2NlbmUudHJpZ2dlckVsZW1lbnQodW5kZWZpbmVkKTsgLy8gdW5zZXQsIHNvIGEgY2hhbmdlIGV2ZW50IGlzIHRyaWdnZXJlZFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIGNoYW5nZWQgPSBlbGVtZW50UG9zICE9IF90cmlnZ2VyUG9zO1xyXG5cdFx0XHRcdF90cmlnZ2VyUG9zID0gZWxlbWVudFBvcztcclxuXHRcdFx0XHRpZiAoY2hhbmdlZCAmJiAhc3VwcHJlc3NFdmVudHMpIHtcclxuXHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJzaGlmdFwiLCB7XHJcblx0XHRcdFx0XHRcdHJlYXNvbjogXCJ0cmlnZ2VyRWxlbWVudFBvc2l0aW9uXCJcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRyaWdnZXIgYSBzaGlmdCBldmVudCwgd2hlbiB0aGUgY29udGFpbmVyIGlzIHJlc2l6ZWQgYW5kIHRoZSB0cmlnZ2VySG9vayBpcyA+IDEuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgb25Db250YWluZXJSZXNpemUgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRpZiAoX29wdGlvbnMudHJpZ2dlckhvb2sgPiAwKSB7XHJcblx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInNoaWZ0XCIsIHtcclxuXHRcdFx0XHRcdHJlYXNvbjogXCJjb250YWluZXJSZXNpemVcIlxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHR2YXIgX3ZhbGlkYXRlID0gX3V0aWwuZXh0ZW5kKFNDRU5FX09QVElPTlMudmFsaWRhdGUsIHtcclxuXHRcdFx0Ly8gdmFsaWRhdGlvbiBmb3IgZHVyYXRpb24gaGFuZGxlZCBpbnRlcm5hbGx5IGZvciByZWZlcmVuY2UgdG8gcHJpdmF0ZSB2YXIgX2R1cmF0aW9uTWV0aG9kXHJcblx0XHRcdGR1cmF0aW9uOiBmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdFx0aWYgKF91dGlsLnR5cGUuU3RyaW5nKHZhbCkgJiYgdmFsLm1hdGNoKC9eKFxcLnxcXGQpKlxcZCslJC8pKSB7XHJcblx0XHRcdFx0XHQvLyBwZXJjZW50YWdlIHZhbHVlXHJcblx0XHRcdFx0XHR2YXIgcGVyYyA9IHBhcnNlRmxvYXQodmFsKSAvIDEwMDtcclxuXHRcdFx0XHRcdHZhbCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIF9jb250cm9sbGVyID8gX2NvbnRyb2xsZXIuaW5mbyhcInNpemVcIikgKiBwZXJjIDogMDtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChfdXRpbC50eXBlLkZ1bmN0aW9uKHZhbCkpIHtcclxuXHRcdFx0XHRcdC8vIGZ1bmN0aW9uXHJcblx0XHRcdFx0XHRfZHVyYXRpb25VcGRhdGVNZXRob2QgPSB2YWw7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHR2YWwgPSBwYXJzZUZsb2F0KF9kdXJhdGlvblVwZGF0ZU1ldGhvZC5jYWxsKFNjZW5lKSk7XHJcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRcdHZhbCA9IC0xOyAvLyB3aWxsIGNhdXNlIGVycm9yIGJlbG93XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIHZhbCBoYXMgdG8gYmUgZmxvYXRcclxuXHRcdFx0XHR2YWwgPSBwYXJzZUZsb2F0KHZhbCk7XHJcblx0XHRcdFx0aWYgKCFfdXRpbC50eXBlLk51bWJlcih2YWwpIHx8IHZhbCA8IDApIHtcclxuXHRcdFx0XHRcdGlmIChfZHVyYXRpb25VcGRhdGVNZXRob2QpIHtcclxuXHRcdFx0XHRcdFx0X2R1cmF0aW9uVXBkYXRlTWV0aG9kID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdFx0XHR0aHJvdyBbXCJJbnZhbGlkIHJldHVybiB2YWx1ZSBvZiBzdXBwbGllZCBmdW5jdGlvbiBmb3Igb3B0aW9uIFxcXCJkdXJhdGlvblxcXCI6XCIsIHZhbF07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aHJvdyBbXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcImR1cmF0aW9uXFxcIjpcIiwgdmFsXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDaGVja3MgdGhlIHZhbGlkaXR5IG9mIGEgc3BlY2lmaWMgb3IgYWxsIG9wdGlvbnMgYW5kIHJlc2V0IHRvIGRlZmF1bHQgaWYgbmVjY2Vzc2FyeS5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciB2YWxpZGF0ZU9wdGlvbiA9IGZ1bmN0aW9uIChjaGVjaykge1xyXG5cdFx0XHRjaGVjayA9IGFyZ3VtZW50cy5sZW5ndGggPyBbY2hlY2tdIDogT2JqZWN0LmtleXMoX3ZhbGlkYXRlKTtcclxuXHRcdFx0Y2hlY2suZm9yRWFjaChmdW5jdGlvbiAob3B0aW9uTmFtZSwga2V5KSB7XHJcblx0XHRcdFx0dmFyIHZhbHVlO1xyXG5cdFx0XHRcdGlmIChfdmFsaWRhdGVbb3B0aW9uTmFtZV0pIHsgLy8gdGhlcmUgaXMgYSB2YWxpZGF0aW9uIG1ldGhvZCBmb3IgdGhpcyBvcHRpb25cclxuXHRcdFx0XHRcdHRyeSB7IC8vIHZhbGlkYXRlIHZhbHVlXHJcblx0XHRcdFx0XHRcdHZhbHVlID0gX3ZhbGlkYXRlW29wdGlvbk5hbWVdKF9vcHRpb25zW29wdGlvbk5hbWVdKTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHsgLy8gdmFsaWRhdGlvbiBmYWlsZWQgLT4gcmVzZXQgdG8gZGVmYXVsdFxyXG5cdFx0XHRcdFx0XHR2YWx1ZSA9IERFRkFVTFRfT1BUSU9OU1tvcHRpb25OYW1lXTtcclxuXHRcdFx0XHRcdFx0dmFyIGxvZ01TRyA9IF91dGlsLnR5cGUuU3RyaW5nKGUpID8gW2VdIDogZTtcclxuXHRcdFx0XHRcdFx0aWYgKF91dGlsLnR5cGUuQXJyYXkobG9nTVNHKSkge1xyXG5cdFx0XHRcdFx0XHRcdGxvZ01TR1swXSA9IFwiRVJST1I6IFwiICsgbG9nTVNHWzBdO1xyXG5cdFx0XHRcdFx0XHRcdGxvZ01TRy51bnNoaWZ0KDEpOyAvLyBsb2dsZXZlbCAxIGZvciBlcnJvciBtc2dcclxuXHRcdFx0XHRcdFx0XHRsb2cuYXBwbHkodGhpcywgbG9nTVNHKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRsb2coMSwgXCJFUlJPUjogUHJvYmxlbSBleGVjdXRpbmcgdmFsaWRhdGlvbiBjYWxsYmFjayBmb3Igb3B0aW9uICdcIiArIG9wdGlvbk5hbWUgKyBcIic6XCIsIGUubWVzc2FnZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZmluYWxseSB7XHJcblx0XHRcdFx0XHRcdF9vcHRpb25zW29wdGlvbk5hbWVdID0gdmFsdWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBIZWxwZXIgdXNlZCBieSB0aGUgc2V0dGVyL2dldHRlcnMgZm9yIHNjZW5lIG9wdGlvbnNcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBjaGFuZ2VPcHRpb24gPSBmdW5jdGlvbiAodmFybmFtZSwgbmV3dmFsKSB7XHJcblx0XHRcdHZhclxyXG5cdFx0XHRcdGNoYW5nZWQgPSBmYWxzZSxcclxuXHRcdFx0XHRvbGR2YWwgPSBfb3B0aW9uc1t2YXJuYW1lXTtcclxuXHRcdFx0aWYgKF9vcHRpb25zW3Zhcm5hbWVdICE9IG5ld3ZhbCkge1xyXG5cdFx0XHRcdF9vcHRpb25zW3Zhcm5hbWVdID0gbmV3dmFsO1xyXG5cdFx0XHRcdHZhbGlkYXRlT3B0aW9uKHZhcm5hbWUpOyAvLyByZXNldHMgdG8gZGVmYXVsdCBpZiBuZWNlc3NhcnlcclxuXHRcdFx0XHRjaGFuZ2VkID0gb2xkdmFsICE9IF9vcHRpb25zW3Zhcm5hbWVdO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBjaGFuZ2VkO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBnZW5lcmF0ZSBnZXR0ZXJzL3NldHRlcnMgZm9yIGFsbCBvcHRpb25zXHJcblx0XHR2YXIgYWRkU2NlbmVPcHRpb24gPSBmdW5jdGlvbiAob3B0aW9uTmFtZSkge1xyXG5cdFx0XHRpZiAoIVNjZW5lW29wdGlvbk5hbWVdKSB7XHJcblx0XHRcdFx0U2NlbmVbb3B0aW9uTmFtZV0gPSBmdW5jdGlvbiAobmV3VmFsKSB7XHJcblx0XHRcdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgLy8gZ2V0XHJcblx0XHRcdFx0XHRcdHJldHVybiBfb3B0aW9uc1tvcHRpb25OYW1lXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmIChvcHRpb25OYW1lID09PSBcImR1cmF0aW9uXCIpIHsgLy8gbmV3IGR1cmF0aW9uIGlzIHNldCwgc28gYW55IHByZXZpb3VzbHkgc2V0IGZ1bmN0aW9uIG11c3QgYmUgdW5zZXRcclxuXHRcdFx0XHRcdFx0XHRfZHVyYXRpb25VcGRhdGVNZXRob2QgPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKGNoYW5nZU9wdGlvbihvcHRpb25OYW1lLCBuZXdWYWwpKSB7IC8vIHNldFxyXG5cdFx0XHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJjaGFuZ2VcIiwge1xyXG5cdFx0XHRcdFx0XHRcdFx0d2hhdDogb3B0aW9uTmFtZSxcclxuXHRcdFx0XHRcdFx0XHRcdG5ld3ZhbDogX29wdGlvbnNbb3B0aW9uTmFtZV1cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoU0NFTkVfT1BUSU9OUy5zaGlmdHMuaW5kZXhPZihvcHRpb25OYW1lKSA+IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwic2hpZnRcIiwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWFzb246IG9wdGlvbk5hbWVcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIGR1cmF0aW9uIG9wdGlvbiB2YWx1ZS5cclxuXHRcdCAqXHJcblx0XHQgKiBBcyBhICoqc2V0dGVyKiogaXQgYWNjZXB0cyB0aHJlZSB0eXBlcyBvZiBwYXJhbWV0ZXJzOlxyXG5cdFx0ICogMS4gYG51bWJlcmA6IFNldHMgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY2VuZSB0byBleGFjdGx5IHRoaXMgYW1vdW50IG9mIHBpeGVscy4gIFxyXG5cdFx0ICogICBUaGlzIG1lYW5zIHRoZSBzY2VuZSB3aWxsIGxhc3QgZm9yIGV4YWN0bHkgdGhpcyBhbW91bnQgb2YgcGl4ZWxzIHNjcm9sbGVkLiBTdWItUGl4ZWxzIGFyZSBhbHNvIHZhbGlkLlxyXG5cdFx0ICogICBBIHZhbHVlIG9mIGAwYCBtZWFucyB0aGF0IHRoZSBzY2VuZSBpcyAnb3BlbiBlbmQnIGFuZCBubyBlbmQgd2lsbCBiZSB0cmlnZ2VyZWQuIFBpbnMgd2lsbCBuZXZlciB1bnBpbiBhbmQgYW5pbWF0aW9ucyB3aWxsIHBsYXkgaW5kZXBlbmRlbnRseSBvZiBzY3JvbGwgcHJvZ3Jlc3MuXHJcblx0XHQgKiAyLiBgc3RyaW5nYDogQWx3YXlzIHVwZGF0ZXMgdGhlIGR1cmF0aW9uIHJlbGF0aXZlIHRvIHBhcmVudCBzY3JvbGwgY29udGFpbmVyLiAgXHJcblx0XHQgKiAgIEZvciBleGFtcGxlIGBcIjEwMCVcImAgd2lsbCBrZWVwIHRoZSBkdXJhdGlvbiBhbHdheXMgZXhhY3RseSBhdCB0aGUgaW5uZXIgaGVpZ2h0IG9mIHRoZSBzY3JvbGwgY29udGFpbmVyLlxyXG5cdFx0ICogICBXaGVuIHNjcm9sbGluZyB2ZXJ0aWNhbGx5IHRoZSB3aWR0aCBpcyB1c2VkIGZvciByZWZlcmVuY2UgcmVzcGVjdGl2ZWx5LlxyXG5cdFx0ICogMy4gYGZ1bmN0aW9uYDogVGhlIHN1cHBsaWVkIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHRvIHJldHVybiB0aGUgc2NlbmUgZHVyYXRpb24uXHJcblx0XHQgKiAgIFRoaXMgaXMgdXNlZnVsIGluIHNldHVwcyB3aGVyZSB0aGUgZHVyYXRpb24gZGVwZW5kcyBvbiBvdGhlciBlbGVtZW50cyB3aG8gbWlnaHQgY2hhbmdlIHNpemUuIEJ5IHN1cHBseWluZyBhIGZ1bmN0aW9uIHlvdSBjYW4gcmV0dXJuIGEgdmFsdWUgaW5zdGVhZCBvZiB1cGRhdGluZyBwb3RlbnRpYWxseSBtdWx0aXBsZSBzY2VuZSBkdXJhdGlvbnMuICBcclxuXHRcdCAqICAgVGhlIHNjZW5lIGNhbiBiZSByZWZlcmVuY2VkIGluc2lkZSB0aGUgY2FsbGJhY2sgdXNpbmcgYHRoaXNgLlxyXG5cdFx0ICogICBfKipXQVJOSU5HOioqIFRoaXMgaXMgYW4gZWFzeSB3YXkgdG8ga2lsbCBwZXJmb3JtYW5jZSwgYXMgdGhlIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQgZXZlcnkgdGltZSBgU2NlbmUucmVmcmVzaCgpYCBpcyBjYWxsZWQsIHdoaWNoIGhhcHBlbnMgYSBsb3QuIFRoZSBpbnRlcnZhbCBpcyBkZWZpbmVkIGJ5IHRoZSBjb250cm9sbGVyIChzZWUgU2Nyb2xsTWFnaWMuQ29udHJvbGxlciBvcHRpb24gYHJlZnJlc2hJbnRlcnZhbGApLiAgXHJcblx0XHQgKiAgIEl0J3MgcmVjb21lbmRlZCB0byBhdm9pZCBjYWxjdWxhdGlvbnMgd2l0aGluIHRoZSBmdW5jdGlvbiBhbmQgdXNlIGNhY2hlZCB2YXJpYWJsZXMgYXMgcmV0dXJuIHZhbHVlcy4gIFxyXG5cdFx0ICogICBUaGlzIGNvdW50cyBkb3VibGUgaWYgeW91IHVzZSB0aGUgc2FtZSBmdW5jdGlvbiBmb3IgbXVsdGlwbGUgc2NlbmVzLl9cclxuXHRcdCAqXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2R1cmF0aW9uXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IGR1cmF0aW9uIHZhbHVlXHJcblx0XHQgKiB2YXIgZHVyYXRpb24gPSBzY2VuZS5kdXJhdGlvbigpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBhIG5ldyBkdXJhdGlvblxyXG5cdFx0ICogc2NlbmUuZHVyYXRpb24oMzAwKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgZHVyYXRpb24gcmVzcG9uc2l2ZWx5IHRvIGNvbnRhaW5lciBzaXplXHJcblx0XHQgKiBzY2VuZS5kdXJhdGlvbihcIjEwMCVcIik7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gdXNlIGEgZnVuY3Rpb24gdG8gcmFuZG9taXplIHRoZSBkdXJhdGlvbiBmb3Igc29tZSByZWFzb24uXHJcblx0XHQgKiB2YXIgZHVyYXRpb25WYWx1ZUNhY2hlO1xyXG5cdFx0ICogZnVuY3Rpb24gZHVyYXRpb25DYWxsYmFjayAoKSB7XHJcblx0XHQgKiAgIHJldHVybiBkdXJhdGlvblZhbHVlQ2FjaGU7XHJcblx0XHQgKiB9XHJcblx0XHQgKiBmdW5jdGlvbiB1cGRhdGVEdXJhdGlvbiAoKSB7XHJcblx0XHQgKiAgIGR1cmF0aW9uVmFsdWVDYWNoZSA9IE1hdGgucmFuZG9tKCkgKiAxMDA7XHJcblx0XHQgKiB9XHJcblx0XHQgKiB1cGRhdGVEdXJhdGlvbigpOyAvLyBzZXQgdG8gaW5pdGlhbCB2YWx1ZVxyXG5cdFx0ICogc2NlbmUuZHVyYXRpb24oZHVyYXRpb25DYWxsYmFjayk7IC8vIHNldCBkdXJhdGlvbiBjYWxsYmFja1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5zaGlmdH0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBwYXJhbSB7KG51bWJlcnxzdHJpbmd8ZnVuY3Rpb24pfSBbbmV3RHVyYXRpb25dIC0gVGhlIG5ldyBkdXJhdGlvbiBzZXR0aW5nIGZvciB0aGUgc2NlbmUuXHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBgZ2V0YCAtICBDdXJyZW50IHNjZW5lIGR1cmF0aW9uLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBvZmZzZXQgb3B0aW9uIHZhbHVlLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNvZmZzZXRcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgb2Zmc2V0XHJcblx0XHQgKiB2YXIgb2Zmc2V0ID0gc2NlbmUub2Zmc2V0KCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IGEgbmV3IG9mZnNldFxyXG5cdFx0ICogc2NlbmUub2Zmc2V0KDEwMCk7XHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtuZXdPZmZzZXRdIC0gVGhlIG5ldyBvZmZzZXQgb2YgdGhlIHNjZW5lLlxyXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gYGdldGAgLSAgQ3VycmVudCBzY2VuZSBvZmZzZXQuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIHRyaWdnZXJFbGVtZW50IG9wdGlvbiB2YWx1ZS5cclxuXHRcdCAqIERvZXMgKipub3QqKiBmaXJlIGBTY2VuZS5zaGlmdGAsIGJlY2F1c2UgY2hhbmdpbmcgdGhlIHRyaWdnZXIgRWxlbWVudCBkb2Vzbid0IG5lY2Vzc2FyaWx5IG1lYW4gdGhlIHN0YXJ0IHBvc2l0aW9uIGNoYW5nZXMuIFRoaXMgd2lsbCBiZSBkZXRlcm1pbmVkIGluIGBTY2VuZS5yZWZyZXNoKClgLCB3aGljaCBpcyBhdXRvbWF0aWNhbGx5IHRyaWdnZXJlZC5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjdHJpZ2dlckVsZW1lbnRcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgdHJpZ2dlckVsZW1lbnRcclxuXHRcdCAqIHZhciB0cmlnZ2VyRWxlbWVudCA9IHNjZW5lLnRyaWdnZXJFbGVtZW50KCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IGEgbmV3IHRyaWdnZXJFbGVtZW50IHVzaW5nIGEgc2VsZWN0b3JcclxuXHRcdCAqIHNjZW5lLnRyaWdnZXJFbGVtZW50KFwiI3RyaWdnZXJcIik7XHJcblx0XHQgKiAvLyBzZXQgYSBuZXcgdHJpZ2dlckVsZW1lbnQgdXNpbmcgYSBET00gb2JqZWN0XHJcblx0XHQgKiBzY2VuZS50cmlnZ2VyRWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyaWdnZXJcIikpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IFtuZXdUcmlnZ2VyRWxlbWVudF0gLSBUaGUgbmV3IHRyaWdnZXIgZWxlbWVudCBmb3IgdGhlIHNjZW5lLlxyXG5cdFx0ICogQHJldHVybnMgeyhzdHJpbmd8b2JqZWN0KX0gYGdldGAgLSAgQ3VycmVudCB0cmlnZ2VyRWxlbWVudC5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgdHJpZ2dlckhvb2sgb3B0aW9uIHZhbHVlLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSN0cmlnZ2VySG9va1xyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCB0cmlnZ2VySG9vayB2YWx1ZVxyXG5cdFx0ICogdmFyIHRyaWdnZXJIb29rID0gc2NlbmUudHJpZ2dlckhvb2soKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgYSBuZXcgdHJpZ2dlckhvb2sgdXNpbmcgYSBzdHJpbmdcclxuXHRcdCAqIHNjZW5lLnRyaWdnZXJIb29rKFwib25MZWF2ZVwiKTtcclxuXHRcdCAqIC8vIHNldCBhIG5ldyB0cmlnZ2VySG9vayB1c2luZyBhIG51bWJlclxyXG5cdFx0ICogc2NlbmUudHJpZ2dlckhvb2soMC43KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuc2hpZnR9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAcGFyYW0geyhudW1iZXJ8c3RyaW5nKX0gW25ld1RyaWdnZXJIb29rXSAtIFRoZSBuZXcgdHJpZ2dlckhvb2sgb2YgdGhlIHNjZW5lLiBTZWUge0BsaW5rIFNjZW5lfSBwYXJhbWV0ZXIgZGVzY3JpcHRpb24gZm9yIHZhbHVlIG9wdGlvbnMuXHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBgZ2V0YCAtICBDdXJyZW50IHRyaWdnZXJIb29rIChBTFdBWVMgbnVtZXJpY2FsKS5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgcmV2ZXJzZSBvcHRpb24gdmFsdWUuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3JldmVyc2VcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgcmV2ZXJzZSBvcHRpb25cclxuXHRcdCAqIHZhciByZXZlcnNlID0gc2NlbmUucmV2ZXJzZSgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBuZXcgcmV2ZXJzZSBvcHRpb25cclxuXHRcdCAqIHNjZW5lLnJldmVyc2UoZmFsc2UpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbbmV3UmV2ZXJzZV0gLSBUaGUgbmV3IHJldmVyc2Ugc2V0dGluZyBvZiB0aGUgc2NlbmUuXHJcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYGdldGAgLSAgQ3VycmVudCByZXZlcnNlIG9wdGlvbiB2YWx1ZS5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgbG9nbGV2ZWwgb3B0aW9uIHZhbHVlLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNsb2dsZXZlbFxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBsb2dsZXZlbFxyXG5cdFx0ICogdmFyIGxvZ2xldmVsID0gc2NlbmUubG9nbGV2ZWwoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgbmV3IGxvZ2xldmVsXHJcblx0XHQgKiBzY2VuZS5sb2dsZXZlbCgzKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBbbmV3TG9nbGV2ZWxdIC0gVGhlIG5ldyBsb2dsZXZlbCBzZXR0aW5nIG9mIHRoZSBzY2VuZS4gYFswLTNdYFxyXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gYGdldGAgLSAgQ3VycmVudCBsb2dsZXZlbC5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0KiogdGhlIGFzc29jaWF0ZWQgY29udHJvbGxlci5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjY29udHJvbGxlclxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY29udHJvbGxlciBvZiBhIHNjZW5lXHJcblx0XHQgKiB2YXIgY29udHJvbGxlciA9IHNjZW5lLmNvbnRyb2xsZXIoKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7U2Nyb2xsTWFnaWMuQ29udHJvbGxlcn0gUGFyZW50IGNvbnRyb2xsZXIgb3IgYHVuZGVmaW5lZGBcclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5jb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gX2NvbnRyb2xsZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiB0aGUgY3VycmVudCBzdGF0ZS5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjc3RhdGVcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRcdCAqIHZhciBzdGF0ZSA9IHNjZW5lLnN0YXRlKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gYFwiQkVGT1JFXCJgLCBgXCJEVVJJTkdcImAgb3IgYFwiQUZURVJcImBcclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5zdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIF9zdGF0ZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIHRoZSBjdXJyZW50IHNjcm9sbCBvZmZzZXQgZm9yIHRoZSBzdGFydCBvZiB0aGUgc2NlbmUuICBcclxuXHRcdCAqIE1pbmQsIHRoYXQgdGhlIHNjcm9sbE9mZnNldCBpcyByZWxhdGVkIHRvIHRoZSBzaXplIG9mIHRoZSBjb250YWluZXIsIGlmIGB0cmlnZ2VySG9va2AgaXMgYmlnZ2VyIHRoYW4gYDBgIChvciBgXCJvbkxlYXZlXCJgKS4gIFxyXG5cdFx0ICogVGhpcyBtZWFucywgdGhhdCByZXNpemluZyB0aGUgY29udGFpbmVyIG9yIGNoYW5naW5nIHRoZSBgdHJpZ2dlckhvb2tgIHdpbGwgaW5mbHVlbmNlIHRoZSBzY2VuZSdzIHN0YXJ0IG9mZnNldC5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjc2Nyb2xsT2Zmc2V0XHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHNjcm9sbCBvZmZzZXQgZm9yIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzY2VuZS5cclxuXHRcdCAqIHZhciBzdGFydCA9IHNjZW5lLnNjcm9sbE9mZnNldCgpO1xyXG5cdFx0ICogdmFyIGVuZCA9IHNjZW5lLnNjcm9sbE9mZnNldCgpICsgc2NlbmUuZHVyYXRpb24oKTtcclxuXHRcdCAqIGNvbnNvbGUubG9nKFwidGhlIHNjZW5lIHN0YXJ0cyBhdFwiLCBzdGFydCwgXCJhbmQgZW5kcyBhdFwiLCBlbmQpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBzY3JvbGwgb2Zmc2V0IChvZiB0aGUgY29udGFpbmVyKSBhdCB3aGljaCB0aGUgc2NlbmUgd2lsbCB0cmlnZ2VyLiBZIHZhbHVlIGZvciB2ZXJ0aWNhbCBhbmQgWCB2YWx1ZSBmb3IgaG9yaXpvbnRhbCBzY3JvbGxzLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnNjcm9sbE9mZnNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIF9zY3JvbGxPZmZzZXQuc3RhcnQ7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiB0aGUgdHJpZ2dlciBwb3NpdGlvbiBvZiB0aGUgc2NlbmUgKGluY2x1ZGluZyB0aGUgdmFsdWUgb2YgdGhlIGBvZmZzZXRgIG9wdGlvbikuICBcclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjdHJpZ2dlclBvc2l0aW9uXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBzY2VuZSdzIHRyaWdnZXIgcG9zaXRpb25cclxuXHRcdCAqIHZhciB0cmlnZ2VyUG9zaXRpb24gPSBzY2VuZS50cmlnZ2VyUG9zaXRpb24oKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBTdGFydCBwb3NpdGlvbiBvZiB0aGUgc2NlbmUuIFRvcCBwb3NpdGlvbiB2YWx1ZSBmb3IgdmVydGljYWwgYW5kIGxlZnQgcG9zaXRpb24gdmFsdWUgZm9yIGhvcml6b250YWwgc2Nyb2xscy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy50cmlnZ2VyUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBwb3MgPSBfb3B0aW9ucy5vZmZzZXQ7IC8vIHRoZSBvZmZzZXQgaXMgdGhlIGJhc2lzXHJcblx0XHRcdGlmIChfY29udHJvbGxlcikge1xyXG5cdFx0XHRcdC8vIGdldCB0aGUgdHJpZ2dlciBwb3NpdGlvblxyXG5cdFx0XHRcdGlmIChfb3B0aW9ucy50cmlnZ2VyRWxlbWVudCkge1xyXG5cdFx0XHRcdFx0Ly8gRWxlbWVudCBhcyB0cmlnZ2VyXHJcblx0XHRcdFx0XHRwb3MgKz0gX3RyaWdnZXJQb3M7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIHJldHVybiB0aGUgaGVpZ2h0IG9mIHRoZSB0cmlnZ2VySG9vayB0byBzdGFydCBhdCB0aGUgYmVnaW5uaW5nXHJcblx0XHRcdFx0XHRwb3MgKz0gX2NvbnRyb2xsZXIuaW5mbyhcInNpemVcIikgKiBTY2VuZS50cmlnZ2VySG9vaygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcG9zO1xyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0dmFyXHJcblx0XHRcdF9waW4sXHJcblx0XHRcdF9waW5PcHRpb25zO1xyXG5cclxuXHRcdFNjZW5lXHJcblx0XHRcdC5vbihcInNoaWZ0LmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dmFyIGR1cmF0aW9uQ2hhbmdlZCA9IGUucmVhc29uID09PSBcImR1cmF0aW9uXCI7XHJcblx0XHRcdFx0aWYgKChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0FGVEVSICYmIGR1cmF0aW9uQ2hhbmdlZCkgfHwgKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HICYmIF9vcHRpb25zLmR1cmF0aW9uID09PSAwKSkge1xyXG5cdFx0XHRcdFx0Ly8gaWYgW2R1cmF0aW9uIGNoYW5nZWQgYWZ0ZXIgYSBzY2VuZSAoaW5zaWRlIHNjZW5lIHByb2dyZXNzIHVwZGF0ZXMgcGluIHBvc2l0aW9uKV0gb3IgW2R1cmF0aW9uIGlzIDAsIHdlIGFyZSBpbiBwaW4gcGhhc2UgYW5kIHNvbWUgb3RoZXIgdmFsdWUgY2hhbmdlZF0uXHJcblx0XHRcdFx0XHR1cGRhdGVQaW5TdGF0ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZHVyYXRpb25DaGFuZ2VkKSB7XHJcblx0XHRcdFx0XHR1cGRhdGVQaW5EaW1lbnNpb25zKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQub24oXCJwcm9ncmVzcy5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHVwZGF0ZVBpblN0YXRlKCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5vbihcImFkZC5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHVwZGF0ZVBpbkRpbWVuc2lvbnMoKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0Lm9uKFwiZGVzdHJveS5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFNjZW5lLnJlbW92ZVBpbihlLnJlc2V0KTtcclxuXHRcdFx0fSk7XHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZSB0aGUgcGluIHN0YXRlLlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHVwZGF0ZVBpblN0YXRlID0gZnVuY3Rpb24gKGZvcmNlVW5waW4pIHtcclxuXHRcdFx0aWYgKF9waW4gJiYgX2NvbnRyb2xsZXIpIHtcclxuXHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdGNvbnRhaW5lckluZm8gPSBfY29udHJvbGxlci5pbmZvKCksXHJcblx0XHRcdFx0XHRwaW5UYXJnZXQgPSBfcGluT3B0aW9ucy5zcGFjZXIuZmlyc3RDaGlsZDsgLy8gbWF5IGJlIHBpbiBlbGVtZW50IG9yIGFub3RoZXIgc3BhY2VyLCBpZiBjYXNjYWRpbmcgcGluc1xyXG5cclxuXHRcdFx0XHRpZiAoIWZvcmNlVW5waW4gJiYgX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcpIHsgLy8gZHVyaW5nIHNjZW5lIG9yIGlmIGR1cmF0aW9uIGlzIDAgYW5kIHdlIGFyZSBwYXN0IHRoZSB0cmlnZ2VyXHJcblx0XHRcdFx0XHQvLyBwaW5uZWQgc3RhdGVcclxuXHRcdFx0XHRcdGlmIChfdXRpbC5jc3MocGluVGFyZ2V0LCBcInBvc2l0aW9uXCIpICE9IFwiZml4ZWRcIikge1xyXG5cdFx0XHRcdFx0XHQvLyBjaGFuZ2Ugc3RhdGUgYmVmb3JlIHVwZGF0aW5nIHBpbiBzcGFjZXIgKHBvc2l0aW9uIGNoYW5nZXMgZHVlIHRvIGZpeGVkIGNvbGxhcHNpbmcgbWlnaHQgb2NjdXIuKVxyXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MocGluVGFyZ2V0LCB7XHJcblx0XHRcdFx0XHRcdFx0XCJwb3NpdGlvblwiOiBcImZpeGVkXCJcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdC8vIHVwZGF0ZSBwaW4gc3BhY2VyXHJcblx0XHRcdFx0XHRcdHVwZGF0ZVBpbkRpbWVuc2lvbnMoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0Zml4ZWRQb3MgPSBfdXRpbC5nZXQub2Zmc2V0KF9waW5PcHRpb25zLnNwYWNlciwgdHJ1ZSksIC8vIGdldCB2aWV3cG9ydCBwb3NpdGlvbiBvZiBzcGFjZXJcclxuXHRcdFx0XHRcdFx0c2Nyb2xsRGlzdGFuY2UgPSBfb3B0aW9ucy5yZXZlcnNlIHx8IF9vcHRpb25zLmR1cmF0aW9uID09PSAwID9cclxuXHRcdFx0XHRcdFx0Y29udGFpbmVySW5mby5zY3JvbGxQb3MgLSBfc2Nyb2xsT2Zmc2V0LnN0YXJ0IC8vIHF1aWNrZXJcclxuXHRcdFx0XHRcdFx0OlxyXG5cdFx0XHRcdFx0XHRNYXRoLnJvdW5kKF9wcm9ncmVzcyAqIF9vcHRpb25zLmR1cmF0aW9uICogMTApIC8gMTA7IC8vIGlmIG5vIHJldmVyc2UgYW5kIGR1cmluZyBwaW4gdGhlIHBvc2l0aW9uIG5lZWRzIHRvIGJlIHJlY2FsY3VsYXRlZCB1c2luZyB0aGUgcHJvZ3Jlc3NcclxuXHJcblx0XHRcdFx0XHQvLyBhZGQgc2Nyb2xsRGlzdGFuY2VcclxuXHRcdFx0XHRcdGZpeGVkUG9zW2NvbnRhaW5lckluZm8udmVydGljYWwgPyBcInRvcFwiIDogXCJsZWZ0XCJdICs9IHNjcm9sbERpc3RhbmNlO1xyXG5cclxuXHRcdFx0XHRcdC8vIHNldCBuZXcgdmFsdWVzXHJcblx0XHRcdFx0XHRfdXRpbC5jc3MoX3Bpbk9wdGlvbnMuc3BhY2VyLmZpcnN0Q2hpbGQsIHtcclxuXHRcdFx0XHRcdFx0dG9wOiBmaXhlZFBvcy50b3AsXHJcblx0XHRcdFx0XHRcdGxlZnQ6IGZpeGVkUG9zLmxlZnRcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyB1bnBpbm5lZCBzdGF0ZVxyXG5cdFx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRcdG5ld0NTUyA9IHtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogX3Bpbk9wdGlvbnMuaW5GbG93ID8gXCJyZWxhdGl2ZVwiIDogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0XHRcdHRvcDogMCxcclxuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGNoYW5nZSA9IF91dGlsLmNzcyhwaW5UYXJnZXQsIFwicG9zaXRpb25cIikgIT0gbmV3Q1NTLnBvc2l0aW9uO1xyXG5cclxuXHRcdFx0XHRcdGlmICghX3Bpbk9wdGlvbnMucHVzaEZvbGxvd2Vycykge1xyXG5cdFx0XHRcdFx0XHRuZXdDU1NbY29udGFpbmVySW5mby52ZXJ0aWNhbCA/IFwidG9wXCIgOiBcImxlZnRcIl0gPSBfb3B0aW9ucy5kdXJhdGlvbiAqIF9wcm9ncmVzcztcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoX29wdGlvbnMuZHVyYXRpb24gPiAwKSB7IC8vIG9ubHkgY29uY2VybnMgc2NlbmVzIHdpdGggZHVyYXRpb25cclxuXHRcdFx0XHRcdFx0aWYgKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQUZURVIgJiYgcGFyc2VGbG9hdChfdXRpbC5jc3MoX3Bpbk9wdGlvbnMuc3BhY2VyLCBcInBhZGRpbmctdG9wXCIpKSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdGNoYW5nZSA9IHRydWU7IC8vIGlmIGluIGFmdGVyIHN0YXRlIGJ1dCBoYXZlbnQgdXBkYXRlZCBzcGFjZXIgeWV0IChqdW1wZWQgcGFzdCBwaW4pXHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9CRUZPUkUgJiYgcGFyc2VGbG9hdChfdXRpbC5jc3MoX3Bpbk9wdGlvbnMuc3BhY2VyLCBcInBhZGRpbmctYm90dG9tXCIpKSA9PT0gMCkgeyAvLyBiZWZvcmVcclxuXHRcdFx0XHRcdFx0XHRjaGFuZ2UgPSB0cnVlOyAvLyBqdW1wZWQgcGFzdCBmaXhlZCBzdGF0ZSB1cHdhcmQgZGlyZWN0aW9uXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIHNldCBuZXcgdmFsdWVzXHJcblx0XHRcdFx0XHRfdXRpbC5jc3MocGluVGFyZ2V0LCBuZXdDU1MpO1xyXG5cdFx0XHRcdFx0aWYgKGNoYW5nZSkge1xyXG5cdFx0XHRcdFx0XHQvLyB1cGRhdGUgcGluIHNwYWNlciBpZiBzdGF0ZSBjaGFuZ2VkXHJcblx0XHRcdFx0XHRcdHVwZGF0ZVBpbkRpbWVuc2lvbnMoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGUgdGhlIHBpbiBzcGFjZXIgYW5kL29yIGVsZW1lbnQgc2l6ZS5cclxuXHRcdCAqIFRoZSBzaXplIG9mIHRoZSBzcGFjZXIgbmVlZHMgdG8gYmUgdXBkYXRlZCB3aGVuZXZlciB0aGUgZHVyYXRpb24gb2YgdGhlIHNjZW5lIGNoYW5nZXMsIGlmIGl0IGlzIHRvIHB1c2ggZG93biBmb2xsb3dpbmcgZWxlbWVudHMuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlUGluRGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKF9waW4gJiYgX2NvbnRyb2xsZXIgJiYgX3Bpbk9wdGlvbnMuaW5GbG93KSB7IC8vIG5vIHNwYWNlcnJlc2l6ZSwgaWYgb3JpZ2luYWwgcG9zaXRpb24gaXMgYWJzb2x1dGVcclxuXHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdGFmdGVyID0gKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQUZURVIpLFxyXG5cdFx0XHRcdFx0YmVmb3JlID0gKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQkVGT1JFKSxcclxuXHRcdFx0XHRcdGR1cmluZyA9IChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORyksXHJcblx0XHRcdFx0XHR2ZXJ0aWNhbCA9IF9jb250cm9sbGVyLmluZm8oXCJ2ZXJ0aWNhbFwiKSxcclxuXHRcdFx0XHRcdHBpblRhcmdldCA9IF9waW5PcHRpb25zLnNwYWNlci5maXJzdENoaWxkLCAvLyB1c3VhbGx5IHRoZSBwaW5lZCBlbGVtZW50IGJ1dCBjYW4gYWxzbyBiZSBhbm90aGVyIHNwYWNlciAoY2FzY2FkZWQgcGlucylcclxuXHRcdFx0XHRcdG1hcmdpbkNvbGxhcHNlID0gX3V0aWwuaXNNYXJnaW5Db2xsYXBzZVR5cGUoX3V0aWwuY3NzKF9waW5PcHRpb25zLnNwYWNlciwgXCJkaXNwbGF5XCIpKSxcclxuXHRcdFx0XHRcdGNzcyA9IHt9O1xyXG5cclxuXHRcdFx0XHQvLyBzZXQgbmV3IHNpemVcclxuXHRcdFx0XHQvLyBpZiByZWxzaXplOiBzcGFjZXIgLT4gcGluIHwgZWxzZTogcGluIC0+IHNwYWNlclxyXG5cdFx0XHRcdGlmIChfcGluT3B0aW9ucy5yZWxTaXplLndpZHRoIHx8IF9waW5PcHRpb25zLnJlbFNpemUuYXV0b0Z1bGxXaWR0aCkge1xyXG5cdFx0XHRcdFx0aWYgKGR1cmluZykge1xyXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xyXG5cdFx0XHRcdFx0XHRcdFwid2lkdGhcIjogX3V0aWwuZ2V0LndpZHRoKF9waW5PcHRpb25zLnNwYWNlcilcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xyXG5cdFx0XHRcdFx0XHRcdFwid2lkdGhcIjogXCIxMDAlXCJcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIG1pbndpZHRoIGlzIG5lZWRlZCBmb3IgY2FzY2FkZWQgcGlucy5cclxuXHRcdFx0XHRcdGNzc1tcIm1pbi13aWR0aFwiXSA9IF91dGlsLmdldC53aWR0aCh2ZXJ0aWNhbCA/IF9waW4gOiBwaW5UYXJnZXQsIHRydWUsIHRydWUpO1xyXG5cdFx0XHRcdFx0Y3NzLndpZHRoID0gZHVyaW5nID8gY3NzW1wibWluLXdpZHRoXCJdIDogXCJhdXRvXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChfcGluT3B0aW9ucy5yZWxTaXplLmhlaWdodCkge1xyXG5cdFx0XHRcdFx0aWYgKGR1cmluZykge1xyXG5cdFx0XHRcdFx0XHQvLyB0aGUgb25seSBwYWRkaW5nIHRoZSBzcGFjZXIgc2hvdWxkIGV2ZXIgaW5jbHVkZSBpcyB0aGUgZHVyYXRpb24gKGlmIHB1c2hGb2xsb3dlcnMgPSB0cnVlKSwgc28gd2UgbmVlZCB0byBzdWJzdHJhY3QgdGhhdC5cclxuXHRcdFx0XHRcdFx0X3V0aWwuY3NzKF9waW4sIHtcclxuXHRcdFx0XHRcdFx0XHRcImhlaWdodFwiOiBfdXRpbC5nZXQuaGVpZ2h0KF9waW5PcHRpb25zLnNwYWNlcikgLSAoX3Bpbk9wdGlvbnMucHVzaEZvbGxvd2VycyA/IF9vcHRpb25zLmR1cmF0aW9uIDogMClcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xyXG5cdFx0XHRcdFx0XHRcdFwiaGVpZ2h0XCI6IFwiMTAwJVwiXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBtYXJnaW4gaXMgb25seSBpbmNsdWRlZCBpZiBpdCdzIGEgY2FzY2FkZWQgcGluIHRvIHJlc29sdmUgYW4gSUU5IGJ1Z1xyXG5cdFx0XHRcdFx0Y3NzW1wibWluLWhlaWdodFwiXSA9IF91dGlsLmdldC5oZWlnaHQodmVydGljYWwgPyBwaW5UYXJnZXQgOiBfcGluLCB0cnVlLCAhbWFyZ2luQ29sbGFwc2UpOyAvLyBuZWVkZWQgZm9yIGNhc2NhZGluZyBwaW5zXHJcblx0XHRcdFx0XHRjc3MuaGVpZ2h0ID0gZHVyaW5nID8gY3NzW1wibWluLWhlaWdodFwiXSA6IFwiYXV0b1wiO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gYWRkIHNwYWNlIGZvciBkdXJhdGlvbiBpZiBwdXNoRm9sbG93ZXJzIGlzIHRydWVcclxuXHRcdFx0XHRpZiAoX3Bpbk9wdGlvbnMucHVzaEZvbGxvd2Vycykge1xyXG5cdFx0XHRcdFx0Y3NzW1wicGFkZGluZ1wiICsgKHZlcnRpY2FsID8gXCJUb3BcIiA6IFwiTGVmdFwiKV0gPSBfb3B0aW9ucy5kdXJhdGlvbiAqIF9wcm9ncmVzcztcclxuXHRcdFx0XHRcdGNzc1tcInBhZGRpbmdcIiArICh2ZXJ0aWNhbCA/IFwiQm90dG9tXCIgOiBcIlJpZ2h0XCIpXSA9IF9vcHRpb25zLmR1cmF0aW9uICogKDEgLSBfcHJvZ3Jlc3MpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRfdXRpbC5jc3MoX3Bpbk9wdGlvbnMuc3BhY2VyLCBjc3MpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlcyB0aGUgUGluIHN0YXRlIChpbiBjZXJ0YWluIHNjZW5hcmlvcylcclxuXHRcdCAqIElmIHRoZSBjb250cm9sbGVyIGNvbnRhaW5lciBpcyBub3QgdGhlIGRvY3VtZW50IGFuZCB3ZSBhcmUgbWlkLXBpbi1waGFzZSBzY3JvbGxpbmcgb3IgcmVzaXppbmcgdGhlIG1haW4gZG9jdW1lbnQgY2FuIHJlc3VsdCB0byB3cm9uZyBwaW4gcG9zaXRpb25zLlxyXG5cdFx0ICogU28gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgb24gcmVzaXplIGFuZCBzY3JvbGwgb2YgdGhlIGRvY3VtZW50LlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHVwZGF0ZVBpbkluQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIgJiYgX3BpbiAmJiBfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORyAmJiAhX2NvbnRyb2xsZXIuaW5mbyhcImlzRG9jdW1lbnRcIikpIHtcclxuXHRcdFx0XHR1cGRhdGVQaW5TdGF0ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlcyB0aGUgUGluIHNwYWNlciBzaXplIHN0YXRlIChpbiBjZXJ0YWluIHNjZW5hcmlvcylcclxuXHRcdCAqIElmIGNvbnRhaW5lciBpcyByZXNpemVkIGR1cmluZyBwaW4gYW5kIHJlbGF0aXZlbHkgc2l6ZWQgdGhlIHNpemUgb2YgdGhlIHBpbiBtaWdodCBuZWVkIHRvIGJlIHVwZGF0ZWQuLi5cclxuXHRcdCAqIFNvIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIHJlc2l6ZSBvZiB0aGUgY29udGFpbmVyLlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHVwZGF0ZVJlbGF0aXZlUGluU3BhY2VyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIgJiYgX3BpbiAmJiAvLyB3ZWxsLCBkdWhcclxuXHRcdFx0XHRfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORyAmJiAvLyBlbGVtZW50IGluIHBpbm5lZCBzdGF0ZT9cclxuXHRcdFx0XHQoIC8vIGlzIHdpZHRoIG9yIGhlaWdodCByZWxhdGl2ZWx5IHNpemVkLCBidXQgbm90IGluIHJlbGF0aW9uIHRvIGJvZHk/IHRoZW4gd2UgbmVlZCB0byByZWNhbGMuXHJcblx0XHRcdFx0XHQoKF9waW5PcHRpb25zLnJlbFNpemUud2lkdGggfHwgX3Bpbk9wdGlvbnMucmVsU2l6ZS5hdXRvRnVsbFdpZHRoKSAmJiBfdXRpbC5nZXQud2lkdGgod2luZG93KSAhPSBfdXRpbC5nZXQud2lkdGgoX3Bpbk9wdGlvbnMuc3BhY2VyLnBhcmVudE5vZGUpKSB8fFxyXG5cdFx0XHRcdFx0KF9waW5PcHRpb25zLnJlbFNpemUuaGVpZ2h0ICYmIF91dGlsLmdldC5oZWlnaHQod2luZG93KSAhPSBfdXRpbC5nZXQuaGVpZ2h0KF9waW5PcHRpb25zLnNwYWNlci5wYXJlbnROb2RlKSlcclxuXHRcdFx0XHQpXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHVwZGF0ZVBpbkRpbWVuc2lvbnMoKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIElzIGNhbGxlZCwgd2hlbiB0aGUgbW91c2V3aGVsIGlzIHVzZWQgd2hpbGUgb3ZlciBhIHBpbm5lZCBlbGVtZW50IGluc2lkZSBhIGRpdiBjb250YWluZXIuXHJcblx0XHQgKiBJZiB0aGUgc2NlbmUgaXMgaW4gZml4ZWQgc3RhdGUgc2Nyb2xsIGV2ZW50cyB3b3VsZCBiZSBjb3VudGVkIHRvd2FyZHMgdGhlIGJvZHkuIFRoaXMgZm9yd2FyZHMgdGhlIGV2ZW50IHRvIHRoZSBzY3JvbGwgY29udGFpbmVyLlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIG9uTW91c2V3aGVlbE92ZXJQaW4gPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIgJiYgX3BpbiAmJiBfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORyAmJiAhX2NvbnRyb2xsZXIuaW5mbyhcImlzRG9jdW1lbnRcIikpIHsgLy8gaW4gcGluIHN0YXRlXHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdF9jb250cm9sbGVyLl9zZXRTY3JvbGxQb3MoX2NvbnRyb2xsZXIuaW5mbyhcInNjcm9sbFBvc1wiKSAtICgoZS53aGVlbERlbHRhIHx8IGVbX2NvbnRyb2xsZXIuaW5mbyhcInZlcnRpY2FsXCIpID8gXCJ3aGVlbERlbHRhWVwiIDogXCJ3aGVlbERlbHRhWFwiXSkgLyAzIHx8IC1lLmRldGFpbCAqIDMwKSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBQaW4gYW4gZWxlbWVudCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY2VuZS5cclxuXHRcdCAqIElmIHRoZSBzY2VuZSBkdXJhdGlvbiBpcyAwIHRoZSBlbGVtZW50IHdpbGwgb25seSBiZSB1bnBpbm5lZCwgaWYgdGhlIHVzZXIgc2Nyb2xscyBiYWNrIHBhc3QgdGhlIHN0YXJ0IHBvc2l0aW9uLiAgXHJcblx0XHQgKiBNYWtlIHN1cmUgb25seSBvbmUgcGluIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCBhdCB0aGUgc2FtZSB0aW1lLlxyXG5cdFx0ICogQW4gZWxlbWVudCBjYW4gYmUgcGlubmVkIG11bHRpcGxlIHRpbWVzLCBidXQgb25seSBzdWNjZXNzaXZlbHkuXHJcblx0XHQgKiBfKipOT1RFOioqIFRoZSBvcHRpb24gYHB1c2hGb2xsb3dlcnNgIGhhcyBubyBlZmZlY3QsIHdoZW4gdGhlIHNjZW5lIGR1cmF0aW9uIGlzIDAuX1xyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNzZXRQaW5cclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBwaW4gZWxlbWVudCBhbmQgcHVzaCBhbGwgZm9sbG93aW5nIGVsZW1lbnRzIGRvd24gYnkgdGhlIGFtb3VudCBvZiB0aGUgcGluIGR1cmF0aW9uLlxyXG5cdFx0ICogc2NlbmUuc2V0UGluKFwiI3BpblwiKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBwaW4gZWxlbWVudCBhbmQga2VlcGluZyBhbGwgZm9sbG93aW5nIGVsZW1lbnRzIGluIHRoZWlyIHBsYWNlLiBUaGUgcGlubmVkIGVsZW1lbnQgd2lsbCBtb3ZlIHBhc3QgdGhlbS5cclxuXHRcdCAqIHNjZW5lLnNldFBpbihcIiNwaW5cIiwge3B1c2hGb2xsb3dlcnM6IGZhbHNlfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IGVsZW1lbnQgLSBBIFNlbGVjdG9yIHRhcmdldGluZyBhbiBlbGVtZW50IG9yIGEgRE9NIG9iamVjdCB0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHBpbm5lZC5cclxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBbc2V0dGluZ3NdIC0gc2V0dGluZ3MgZm9yIHRoZSBwaW5cclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NldHRpbmdzLnB1c2hGb2xsb3dlcnM9dHJ1ZV0gLSBJZiBgdHJ1ZWAgZm9sbG93aW5nIGVsZW1lbnRzIHdpbGwgYmUgXCJwdXNoZWRcIiBkb3duIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIHBpbiwgaWYgYGZhbHNlYCB0aGUgcGlubmVkIGVsZW1lbnQgd2lsbCBqdXN0IHNjcm9sbCBwYXN0IHRoZW0uICBcclxuXHRcdCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBJZ25vcmVkLCB3aGVuIGR1cmF0aW9uIGlzIGAwYC5cclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbc2V0dGluZ3Muc3BhY2VyQ2xhc3M9XCJzY3JvbGxtYWdpYy1waW4tc3BhY2VyXCJdIC0gQ2xhc3NuYW1lIG9mIHRoZSBwaW4gc3BhY2VyIGVsZW1lbnQsIHdoaWNoIGlzIHVzZWQgdG8gcmVwbGFjZSB0aGUgZWxlbWVudC5cclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnNldFBpbiA9IGZ1bmN0aW9uIChlbGVtZW50LCBzZXR0aW5ncykge1xyXG5cdFx0XHR2YXJcclxuXHRcdFx0XHRkZWZhdWx0U2V0dGluZ3MgPSB7XHJcblx0XHRcdFx0XHRwdXNoRm9sbG93ZXJzOiB0cnVlLFxyXG5cdFx0XHRcdFx0c3BhY2VyQ2xhc3M6IFwic2Nyb2xsbWFnaWMtcGluLXNwYWNlclwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0dmFyIHB1c2hGb2xsb3dlcnNBY3RpdmVseVNldCA9IHNldHRpbmdzICYmIHNldHRpbmdzLmhhc093blByb3BlcnR5KCdwdXNoRm9sbG93ZXJzJyk7XHJcblx0XHRcdHNldHRpbmdzID0gX3V0aWwuZXh0ZW5kKHt9LCBkZWZhdWx0U2V0dGluZ3MsIHNldHRpbmdzKTtcclxuXHJcblx0XHRcdC8vIHZhbGlkYXRlIEVsZW1lbnRcclxuXHRcdFx0ZWxlbWVudCA9IF91dGlsLmdldC5lbGVtZW50cyhlbGVtZW50KVswXTtcclxuXHRcdFx0aWYgKCFlbGVtZW50KSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1IgY2FsbGluZyBtZXRob2QgJ3NldFBpbigpJzogSW52YWxpZCBwaW4gZWxlbWVudCBzdXBwbGllZC5cIik7XHJcblx0XHRcdFx0cmV0dXJuIFNjZW5lOyAvLyBjYW5jZWxcclxuXHRcdFx0fSBlbHNlIGlmIChfdXRpbC5jc3MoZWxlbWVudCwgXCJwb3NpdGlvblwiKSA9PT0gXCJmaXhlZFwiKSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1IgY2FsbGluZyBtZXRob2QgJ3NldFBpbigpJzogUGluIGRvZXMgbm90IHdvcmsgd2l0aCBlbGVtZW50cyB0aGF0IGFyZSBwb3NpdGlvbmVkICdmaXhlZCcuXCIpO1xyXG5cdFx0XHRcdHJldHVybiBTY2VuZTsgLy8gY2FuY2VsXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChfcGluKSB7IC8vIHByZWV4aXN0aW5nIHBpbj9cclxuXHRcdFx0XHRpZiAoX3BpbiA9PT0gZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0Ly8gc2FtZSBwaW4gd2UgYWxyZWFkeSBoYXZlIC0+IGRvIG5vdGhpbmdcclxuXHRcdFx0XHRcdHJldHVybiBTY2VuZTsgLy8gY2FuY2VsXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIGtpbGwgb2xkIHBpblxyXG5cdFx0XHRcdFx0U2NlbmUucmVtb3ZlUGluKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRfcGluID0gZWxlbWVudDtcclxuXHJcblx0XHRcdHZhclxyXG5cdFx0XHRcdHBhcmVudERpc3BsYXkgPSBfcGluLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSxcclxuXHRcdFx0XHRib3VuZHNQYXJhbXMgPSBbXCJ0b3BcIiwgXCJsZWZ0XCIsIFwiYm90dG9tXCIsIFwicmlnaHRcIiwgXCJtYXJnaW5cIiwgXCJtYXJnaW5MZWZ0XCIsIFwibWFyZ2luUmlnaHRcIiwgXCJtYXJnaW5Ub3BcIiwgXCJtYXJnaW5Cb3R0b21cIl07XHJcblxyXG5cdFx0XHRfcGluLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy8gaGFjayBzdGFydCB0byBmb3JjZSBjc3MgdG8gcmV0dXJuIHN0eWxlc2hlZXQgdmFsdWVzIGluc3RlYWQgb2YgY2FsY3VsYXRlZCBweCB2YWx1ZXMuXHJcblx0XHRcdHZhclxyXG5cdFx0XHRcdGluRmxvdyA9IF91dGlsLmNzcyhfcGluLCBcInBvc2l0aW9uXCIpICE9IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRwaW5DU1MgPSBfdXRpbC5jc3MoX3BpbiwgYm91bmRzUGFyYW1zLmNvbmNhdChbXCJkaXNwbGF5XCJdKSksXHJcblx0XHRcdFx0c2l6ZUNTUyA9IF91dGlsLmNzcyhfcGluLCBbXCJ3aWR0aFwiLCBcImhlaWdodFwiXSk7XHJcblx0XHRcdF9waW4ucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID0gcGFyZW50RGlzcGxheTsgLy8gaGFjayBlbmQuXHJcblxyXG5cdFx0XHRpZiAoIWluRmxvdyAmJiBzZXR0aW5ncy5wdXNoRm9sbG93ZXJzKSB7XHJcblx0XHRcdFx0bG9nKDIsIFwiV0FSTklORzogSWYgdGhlIHBpbm5lZCBlbGVtZW50IGlzIHBvc2l0aW9uZWQgYWJzb2x1dGVseSBwdXNoRm9sbG93ZXJzIHdpbGwgYmUgZGlzYWJsZWQuXCIpO1xyXG5cdFx0XHRcdHNldHRpbmdzLnB1c2hGb2xsb3dlcnMgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IC8vIHdhaXQgdW50aWwgYWxsIGZpbmlzaGVkLCBiZWNhdXNlIHdpdGggcmVzcG9uc2l2ZSBkdXJhdGlvbiBpdCB3aWxsIG9ubHkgYmUgc2V0IGFmdGVyIHNjZW5lIGlzIGFkZGVkIHRvIGNvbnRyb2xsZXJcclxuXHRcdFx0XHRpZiAoX3BpbiAmJiBfb3B0aW9ucy5kdXJhdGlvbiA9PT0gMCAmJiBwdXNoRm9sbG93ZXJzQWN0aXZlbHlTZXQgJiYgc2V0dGluZ3MucHVzaEZvbGxvd2Vycykge1xyXG5cdFx0XHRcdFx0bG9nKDIsIFwiV0FSTklORzogcHVzaEZvbGxvd2VycyA9XCIsIHRydWUsIFwiaGFzIG5vIGVmZmVjdCwgd2hlbiBzY2VuZSBkdXJhdGlvbiBpcyAwLlwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIDApO1xyXG5cclxuXHRcdFx0Ly8gY3JlYXRlIHNwYWNlciBhbmQgaW5zZXJ0XHJcblx0XHRcdHZhclxyXG5cdFx0XHRcdHNwYWNlciA9IF9waW4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIF9waW4pLFxyXG5cdFx0XHRcdHNwYWNlckNTUyA9IF91dGlsLmV4dGVuZChwaW5DU1MsIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBpbkZsb3cgPyBcInJlbGF0aXZlXCIgOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRib3hTaXppbmc6IFwiY29udGVudC1ib3hcIixcclxuXHRcdFx0XHRcdG1vekJveFNpemluZzogXCJjb250ZW50LWJveFwiLFxyXG5cdFx0XHRcdFx0d2Via2l0Qm94U2l6aW5nOiBcImNvbnRlbnQtYm94XCJcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmICghaW5GbG93KSB7IC8vIGNvcHkgc2l6ZSBpZiBwb3NpdGlvbmVkIGFic29sdXRlbHksIHRvIHdvcmsgZm9yIGJvdHRvbS9yaWdodCBwb3NpdGlvbmVkIGVsZW1lbnRzLlxyXG5cdFx0XHRcdF91dGlsLmV4dGVuZChzcGFjZXJDU1MsIF91dGlsLmNzcyhfcGluLCBbXCJ3aWR0aFwiLCBcImhlaWdodFwiXSkpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRfdXRpbC5jc3Moc3BhY2VyLCBzcGFjZXJDU1MpO1xyXG5cdFx0XHRzcGFjZXIuc2V0QXR0cmlidXRlKFBJTl9TUEFDRVJfQVRUUklCVVRFLCBcIlwiKTtcclxuXHRcdFx0X3V0aWwuYWRkQ2xhc3Moc3BhY2VyLCBzZXR0aW5ncy5zcGFjZXJDbGFzcyk7XHJcblxyXG5cdFx0XHQvLyBzZXQgdGhlIHBpbiBPcHRpb25zXHJcblx0XHRcdF9waW5PcHRpb25zID0ge1xyXG5cdFx0XHRcdHNwYWNlcjogc3BhY2VyLFxyXG5cdFx0XHRcdHJlbFNpemU6IHsgLy8gc2F2ZSBpZiBzaXplIGlzIGRlZmluZWQgdXNpbmcgJSB2YWx1ZXMuIGlmIHNvLCBoYW5kbGUgc3BhY2VyIHJlc2l6ZSBkaWZmZXJlbnRseS4uLlxyXG5cdFx0XHRcdFx0d2lkdGg6IHNpemVDU1Mud2lkdGguc2xpY2UoLTEpID09PSBcIiVcIixcclxuXHRcdFx0XHRcdGhlaWdodDogc2l6ZUNTUy5oZWlnaHQuc2xpY2UoLTEpID09PSBcIiVcIixcclxuXHRcdFx0XHRcdGF1dG9GdWxsV2lkdGg6IHNpemVDU1Mud2lkdGggPT09IFwiYXV0b1wiICYmIGluRmxvdyAmJiBfdXRpbC5pc01hcmdpbkNvbGxhcHNlVHlwZShwaW5DU1MuZGlzcGxheSlcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHB1c2hGb2xsb3dlcnM6IHNldHRpbmdzLnB1c2hGb2xsb3dlcnMsXHJcblx0XHRcdFx0aW5GbG93OiBpbkZsb3csIC8vIHN0b3JlcyBpZiB0aGUgZWxlbWVudCB0YWtlcyB1cCBzcGFjZSBpbiB0aGUgZG9jdW1lbnQgZmxvd1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0aWYgKCFfcGluLl9fX29yaWdTdHlsZSkge1xyXG5cdFx0XHRcdF9waW4uX19fb3JpZ1N0eWxlID0ge307XHJcblx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRwaW5JbmxpbmVDU1MgPSBfcGluLnN0eWxlLFxyXG5cdFx0XHRcdFx0Y29weVN0eWxlcyA9IGJvdW5kc1BhcmFtcy5jb25jYXQoW1wid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJwb3NpdGlvblwiLCBcImJveFNpemluZ1wiLCBcIm1vekJveFNpemluZ1wiLCBcIndlYmtpdEJveFNpemluZ1wiXSk7XHJcblx0XHRcdFx0Y29weVN0eWxlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHRcdF9waW4uX19fb3JpZ1N0eWxlW3ZhbF0gPSBwaW5JbmxpbmVDU1NbdmFsXSB8fCBcIlwiO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiByZWxhdGl2ZSBzaXplLCB0cmFuc2ZlciBpdCB0byBzcGFjZXIgYW5kIG1ha2UgcGluIGNhbGN1bGF0ZSBpdC4uLlxyXG5cdFx0XHRpZiAoX3Bpbk9wdGlvbnMucmVsU2l6ZS53aWR0aCkge1xyXG5cdFx0XHRcdF91dGlsLmNzcyhzcGFjZXIsIHtcclxuXHRcdFx0XHRcdHdpZHRoOiBzaXplQ1NTLndpZHRoXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUuaGVpZ2h0KSB7XHJcblx0XHRcdFx0X3V0aWwuY3NzKHNwYWNlciwge1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBzaXplQ1NTLmhlaWdodFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBub3cgcGxhY2UgdGhlIHBpbiBlbGVtZW50IGluc2lkZSB0aGUgc3BhY2VyXHRcclxuXHRcdFx0c3BhY2VyLmFwcGVuZENoaWxkKF9waW4pO1xyXG5cdFx0XHQvLyBhbmQgc2V0IG5ldyBjc3NcclxuXHRcdFx0X3V0aWwuY3NzKF9waW4sIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogaW5GbG93ID8gXCJyZWxhdGl2ZVwiIDogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdG1hcmdpbjogXCJhdXRvXCIsXHJcblx0XHRcdFx0dG9wOiBcImF1dG9cIixcclxuXHRcdFx0XHRsZWZ0OiBcImF1dG9cIixcclxuXHRcdFx0XHRib3R0b206IFwiYXV0b1wiLFxyXG5cdFx0XHRcdHJpZ2h0OiBcImF1dG9cIlxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChfcGluT3B0aW9ucy5yZWxTaXplLndpZHRoIHx8IF9waW5PcHRpb25zLnJlbFNpemUuYXV0b0Z1bGxXaWR0aCkge1xyXG5cdFx0XHRcdF91dGlsLmNzcyhfcGluLCB7XHJcblx0XHRcdFx0XHRib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG5cdFx0XHRcdFx0bW96Qm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuXHRcdFx0XHRcdHdlYmtpdEJveFNpemluZzogXCJib3JkZXItYm94XCJcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gYWRkIGxpc3RlbmVyIHRvIGRvY3VtZW50IHRvIHVwZGF0ZSBwaW4gcG9zaXRpb24gaW4gY2FzZSBjb250cm9sbGVyIGlzIG5vdCB0aGUgZG9jdW1lbnQuXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVQaW5JbkNvbnRhaW5lcik7XHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVQaW5JbkNvbnRhaW5lcik7XHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVSZWxhdGl2ZVBpblNwYWNlcik7XHJcblx0XHRcdC8vIGFkZCBtb3VzZXdoZWVsIGxpc3RlbmVyIHRvIGNhdGNoIHNjcm9sbHMgb3ZlciBmaXhlZCBlbGVtZW50c1xyXG5cdFx0XHRfcGluLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIG9uTW91c2V3aGVlbE92ZXJQaW4pO1xyXG5cdFx0XHRfcGluLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Nb3VzZVNjcm9sbFwiLCBvbk1vdXNld2hlZWxPdmVyUGluKTtcclxuXHJcblx0XHRcdGxvZygzLCBcImFkZGVkIHBpblwiKTtcclxuXHJcblx0XHRcdC8vIGZpbmFsbHkgdXBkYXRlIHRoZSBwaW4gdG8gaW5pdFxyXG5cdFx0XHR1cGRhdGVQaW5TdGF0ZSgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlbW92ZSB0aGUgcGluIGZyb20gdGhlIHNjZW5lLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNyZW1vdmVQaW5cclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyByZW1vdmUgdGhlIHBpbiBmcm9tIHRoZSBzY2VuZSB3aXRob3V0IHJlc2V0dGluZyBpdCAodGhlIHNwYWNlciBpcyBub3QgcmVtb3ZlZClcclxuXHRcdCAqIHNjZW5lLnJlbW92ZVBpbigpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHJlbW92ZSB0aGUgcGluIGZyb20gdGhlIHNjZW5lIGFuZCByZXNldCB0aGUgcGluIGVsZW1lbnQgdG8gaXRzIGluaXRpYWwgcG9zaXRpb24gKHNwYWNlciBpcyByZW1vdmVkKVxyXG5cdFx0ICogc2NlbmUucmVtb3ZlUGluKHRydWUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc2V0PWZhbHNlXSAtIElmIGBmYWxzZWAgdGhlIHNwYWNlciB3aWxsIG5vdCBiZSByZW1vdmVkIGFuZCB0aGUgZWxlbWVudCdzIHBvc2l0aW9uIHdpbGwgbm90IGJlIHJlc2V0LlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5yZW1vdmVQaW4gPSBmdW5jdGlvbiAocmVzZXQpIHtcclxuXHRcdFx0aWYgKF9waW4pIHtcclxuXHRcdFx0XHRpZiAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcpIHtcclxuXHRcdFx0XHRcdHVwZGF0ZVBpblN0YXRlKHRydWUpOyAvLyBmb3JjZSB1bnBpbiBhdCBwb3NpdGlvblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAocmVzZXQgfHwgIV9jb250cm9sbGVyKSB7IC8vIGlmIHRoZXJlJ3Mgbm8gY29udHJvbGxlciBubyBwcm9ncmVzcyB3YXMgbWFkZSBhbnl3YXkuLi5cclxuXHRcdFx0XHRcdHZhciBwaW5UYXJnZXQgPSBfcGluT3B0aW9ucy5zcGFjZXIuZmlyc3RDaGlsZDsgLy8gdXN1YWxseSB0aGUgcGluIGVsZW1lbnQsIGJ1dCBtYXkgYmUgYW5vdGhlciBzcGFjZXIgKGNhc2NhZGVkIHBpbnMpLi4uXHJcblx0XHRcdFx0XHRpZiAocGluVGFyZ2V0Lmhhc0F0dHJpYnV0ZShQSU5fU1BBQ0VSX0FUVFJJQlVURSkpIHsgLy8gY29weSBtYXJnaW5zIHRvIGNoaWxkIHNwYWNlclxyXG5cdFx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0XHRzdHlsZSA9IF9waW5PcHRpb25zLnNwYWNlci5zdHlsZSxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZXMgPSBbXCJtYXJnaW5cIiwgXCJtYXJnaW5MZWZ0XCIsIFwibWFyZ2luUmlnaHRcIiwgXCJtYXJnaW5Ub3BcIiwgXCJtYXJnaW5Cb3R0b21cIl0sXHJcblx0XHRcdFx0XHRcdFx0bWFyZ2lucyA9IHt9O1xyXG5cdFx0XHRcdFx0XHR2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luc1t2YWxdID0gc3R5bGVbdmFsXSB8fCBcIlwiO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0X3V0aWwuY3NzKHBpblRhcmdldCwgbWFyZ2lucyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRfcGluT3B0aW9ucy5zcGFjZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocGluVGFyZ2V0LCBfcGluT3B0aW9ucy5zcGFjZXIpO1xyXG5cdFx0XHRcdFx0X3Bpbk9wdGlvbnMuc3BhY2VyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX3Bpbk9wdGlvbnMuc3BhY2VyKTtcclxuXHRcdFx0XHRcdGlmICghX3Bpbi5wYXJlbnROb2RlLmhhc0F0dHJpYnV0ZShQSU5fU1BBQ0VSX0FUVFJJQlVURSkpIHsgLy8gaWYgaXQncyB0aGUgbGFzdCBwaW4gZm9yIHRoaXMgZWxlbWVudCAtPiByZXN0b3JlIGlubGluZSBzdHlsZXNcclxuXHRcdFx0XHRcdFx0Ly8gVE9ETzogb25seSBjb3JyZWN0bHkgc2V0IGZvciBmaXJzdCBwaW4gKHdoZW4gY2FzY2FkaW5nKSAtIGhvdyB0byBmaXg/XHJcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhfcGluLCBfcGluLl9fX29yaWdTdHlsZSk7XHJcblx0XHRcdFx0XHRcdGRlbGV0ZSBfcGluLl9fX29yaWdTdHlsZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZVBpbkluQ29udGFpbmVyKTtcclxuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlUGluSW5Db250YWluZXIpO1xyXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVSZWxhdGl2ZVBpblNwYWNlcik7XHJcblx0XHRcdFx0X3Bpbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBvbk1vdXNld2hlZWxPdmVyUGluKTtcclxuXHRcdFx0XHRfcGluLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Nb3VzZVNjcm9sbFwiLCBvbk1vdXNld2hlZWxPdmVyUGluKTtcclxuXHRcdFx0XHRfcGluID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGxvZygzLCBcInJlbW92ZWQgcGluIChyZXNldDogXCIgKyAocmVzZXQgPyBcInRydWVcIiA6IFwiZmFsc2VcIikgKyBcIilcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0dmFyXHJcblx0XHRcdF9jc3NDbGFzc2VzLFxyXG5cdFx0XHRfY3NzQ2xhc3NFbGVtcyA9IFtdO1xyXG5cclxuXHRcdFNjZW5lXHJcblx0XHRcdC5vbihcImRlc3Ryb3kuaW50ZXJuYWxcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRTY2VuZS5yZW1vdmVDbGFzc1RvZ2dsZShlLnJlc2V0KTtcclxuXHRcdFx0fSk7XHJcblx0XHQvKipcclxuXHRcdCAqIERlZmluZSBhIGNzcyBjbGFzcyBtb2RpZmljYXRpb24gd2hpbGUgdGhlIHNjZW5lIGlzIGFjdGl2ZS4gIFxyXG5cdFx0ICogV2hlbiB0aGUgc2NlbmUgdHJpZ2dlcnMgdGhlIGNsYXNzZXMgd2lsbCBiZSBhZGRlZCB0byB0aGUgc3VwcGxpZWQgZWxlbWVudCBhbmQgcmVtb3ZlZCwgd2hlbiB0aGUgc2NlbmUgaXMgb3Zlci5cclxuXHRcdCAqIElmIHRoZSBzY2VuZSBkdXJhdGlvbiBpcyAwIHRoZSBjbGFzc2VzIHdpbGwgb25seSBiZSByZW1vdmVkIGlmIHRoZSB1c2VyIHNjcm9sbHMgYmFjayBwYXN0IHRoZSBzdGFydCBwb3NpdGlvbi5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjc2V0Q2xhc3NUb2dnbGVcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBhZGQgdGhlIGNsYXNzICdteWNsYXNzJyB0byB0aGUgZWxlbWVudCB3aXRoIHRoZSBpZCAnbXktZWxlbScgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgc2NlbmVcclxuXHRcdCAqIHNjZW5lLnNldENsYXNzVG9nZ2xlKFwiI215LWVsZW1cIiwgXCJteWNsYXNzXCIpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGFkZCBtdWx0aXBsZSBjbGFzc2VzIHRvIG11bHRpcGxlIGVsZW1lbnRzIGRlZmluZWQgYnkgdGhlIHNlbGVjdG9yICcuY2xhc3NDaGFuZ2UnXHJcblx0XHQgKiBzY2VuZS5zZXRDbGFzc1RvZ2dsZShcIi5jbGFzc0NoYW5nZVwiLCBcImNsYXNzMSBjbGFzczIgY2xhc3MzXCIpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xvYmplY3QpfSBlbGVtZW50IC0gQSBTZWxlY3RvciB0YXJnZXRpbmcgb25lIG9yIG1vcmUgZWxlbWVudHMgb3IgYSBET00gb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgbW9kaWZpZWQuXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NlcyAtIE9uZSBvciBtb3JlIENsYXNzbmFtZXMgKHNlcGFyYXRlZCBieSBzcGFjZSkgdGhhdCBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIGVsZW1lbnQgZHVyaW5nIHRoZSBzY2VuZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnNldENsYXNzVG9nZ2xlID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzZXMpIHtcclxuXHRcdFx0dmFyIGVsZW1zID0gX3V0aWwuZ2V0LmVsZW1lbnRzKGVsZW1lbnQpO1xyXG5cdFx0XHRpZiAoZWxlbXMubGVuZ3RoID09PSAwIHx8ICFfdXRpbC50eXBlLlN0cmluZyhjbGFzc2VzKSkge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SIGNhbGxpbmcgbWV0aG9kICdzZXRDbGFzc1RvZ2dsZSgpJzogSW52YWxpZCBcIiArIChlbGVtcy5sZW5ndGggPT09IDAgPyBcImVsZW1lbnRcIiA6IFwiY2xhc3Nlc1wiKSArIFwiIHN1cHBsaWVkLlwiKTtcclxuXHRcdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKF9jc3NDbGFzc0VsZW1zLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHQvLyByZW1vdmUgb2xkIG9uZXNcclxuXHRcdFx0XHRTY2VuZS5yZW1vdmVDbGFzc1RvZ2dsZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdF9jc3NDbGFzc2VzID0gY2xhc3NlcztcclxuXHRcdFx0X2Nzc0NsYXNzRWxlbXMgPSBlbGVtcztcclxuXHRcdFx0U2NlbmUub24oXCJlbnRlci5pbnRlcm5hbF9jbGFzcyBsZWF2ZS5pbnRlcm5hbF9jbGFzc1wiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHZhciB0b2dnbGUgPSBlLnR5cGUgPT09IFwiZW50ZXJcIiA/IF91dGlsLmFkZENsYXNzIDogX3V0aWwucmVtb3ZlQ2xhc3M7XHJcblx0XHRcdFx0X2Nzc0NsYXNzRWxlbXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSwga2V5KSB7XHJcblx0XHRcdFx0XHR0b2dnbGUoZWxlbSwgX2Nzc0NsYXNzZXMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlbW92ZSB0aGUgY2xhc3MgYmluZGluZyBmcm9tIHRoZSBzY2VuZS5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcmVtb3ZlQ2xhc3NUb2dnbGVcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyByZW1vdmUgY2xhc3MgYmluZGluZyBmcm9tIHRoZSBzY2VuZSB3aXRob3V0IHJlc2V0XHJcblx0XHQgKiBzY2VuZS5yZW1vdmVDbGFzc1RvZ2dsZSgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHJlbW92ZSBjbGFzcyBiaW5kaW5nIGFuZCByZW1vdmUgdGhlIGNoYW5nZXMgaXQgY2F1c2VkXHJcblx0XHQgKiBzY2VuZS5yZW1vdmVDbGFzc1RvZ2dsZSh0cnVlKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXNldD1mYWxzZV0gLSBJZiBgZmFsc2VgIGFuZCB0aGUgY2xhc3NlcyBhcmUgY3VycmVudGx5IGFjdGl2ZSwgdGhleSB3aWxsIHJlbWFpbiBvbiB0aGUgZWxlbWVudC4gSWYgYHRydWVgIHRoZXkgd2lsbCBiZSByZW1vdmVkLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5yZW1vdmVDbGFzc1RvZ2dsZSA9IGZ1bmN0aW9uIChyZXNldCkge1xyXG5cdFx0XHRpZiAocmVzZXQpIHtcclxuXHRcdFx0XHRfY3NzQ2xhc3NFbGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtLCBrZXkpIHtcclxuXHRcdFx0XHRcdF91dGlsLnJlbW92ZUNsYXNzKGVsZW0sIF9jc3NDbGFzc2VzKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRTY2VuZS5vZmYoXCJzdGFydC5pbnRlcm5hbF9jbGFzcyBlbmQuaW50ZXJuYWxfY2xhc3NcIik7XHJcblx0XHRcdF9jc3NDbGFzc2VzID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRfY3NzQ2xhc3NFbGVtcyA9IFtdO1xyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIElOSVRcclxuXHRcdGNvbnN0cnVjdCgpO1xyXG5cdFx0cmV0dXJuIFNjZW5lO1xyXG5cdH07XHJcblxyXG5cdC8vIHN0b3JlIHBhZ2V3aWRlIHNjZW5lIG9wdGlvbnNcclxuXHR2YXIgU0NFTkVfT1BUSU9OUyA9IHtcclxuXHRcdGRlZmF1bHRzOiB7XHJcblx0XHRcdGR1cmF0aW9uOiAwLFxyXG5cdFx0XHRvZmZzZXQ6IDAsXHJcblx0XHRcdHRyaWdnZXJFbGVtZW50OiB1bmRlZmluZWQsXHJcblx0XHRcdHRyaWdnZXJIb29rOiAwLjUsXHJcblx0XHRcdHJldmVyc2U6IHRydWUsXHJcblx0XHRcdGxvZ2xldmVsOiAyXHJcblx0XHR9LFxyXG5cdFx0dmFsaWRhdGU6IHtcclxuXHRcdFx0b2Zmc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdFx0dmFsID0gcGFyc2VGbG9hdCh2YWwpO1xyXG5cdFx0XHRcdGlmICghX3V0aWwudHlwZS5OdW1iZXIodmFsKSkge1xyXG5cdFx0XHRcdFx0dGhyb3cgW1wiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJvZmZzZXRcXFwiOlwiLCB2YWxdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0cmlnZ2VyRWxlbWVudDogZnVuY3Rpb24gKHZhbCkge1xyXG5cdFx0XHRcdHZhbCA9IHZhbCB8fCB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aWYgKHZhbCkge1xyXG5cdFx0XHRcdFx0dmFyIGVsZW0gPSBfdXRpbC5nZXQuZWxlbWVudHModmFsKVswXTtcclxuXHRcdFx0XHRcdGlmIChlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSkge1xyXG5cdFx0XHRcdFx0XHR2YWwgPSBlbGVtO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhyb3cgW1wiRWxlbWVudCBkZWZpbmVkIGluIG9wdGlvbiBcXFwidHJpZ2dlckVsZW1lbnRcXFwiIHdhcyBub3QgZm91bmQ6XCIsIHZhbF07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB2YWw7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRyaWdnZXJIb29rOiBmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdFx0dmFyIHRyYW5zbGF0ZSA9IHtcclxuXHRcdFx0XHRcdFwib25DZW50ZXJcIjogMC41LFxyXG5cdFx0XHRcdFx0XCJvbkVudGVyXCI6IDEsXHJcblx0XHRcdFx0XHRcIm9uTGVhdmVcIjogMFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0aWYgKF91dGlsLnR5cGUuTnVtYmVyKHZhbCkpIHtcclxuXHRcdFx0XHRcdHZhbCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHBhcnNlRmxvYXQodmFsKSwgMSkpOyAvLyAgbWFrZSBzdXJlIGl0cyBiZXR3ZWVlbiAwIGFuZCAxXHJcblx0XHRcdFx0fSBlbHNlIGlmICh2YWwgaW4gdHJhbnNsYXRlKSB7XHJcblx0XHRcdFx0XHR2YWwgPSB0cmFuc2xhdGVbdmFsXTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhyb3cgW1wiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJ0cmlnZ2VySG9va1xcXCI6IFwiLCB2YWxdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZXZlcnNlOiBmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdFx0cmV0dXJuICEhdmFsOyAvLyBmb3JjZSBib29sZWFuXHJcblx0XHRcdH0sXHJcblx0XHRcdGxvZ2xldmVsOiBmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdFx0dmFsID0gcGFyc2VJbnQodmFsKTtcclxuXHRcdFx0XHRpZiAoIV91dGlsLnR5cGUuTnVtYmVyKHZhbCkgfHwgdmFsIDwgMCB8fCB2YWwgPiAzKSB7XHJcblx0XHRcdFx0XHR0aHJvdyBbXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcImxvZ2xldmVsXFxcIjpcIiwgdmFsXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdFx0fVxyXG5cdFx0fSwgLy8gaG9sZGVyIGZvciAgdmFsaWRhdGlvbiBtZXRob2RzLiBkdXJhdGlvbiB2YWxpZGF0aW9uIGlzIGhhbmRsZWQgaW4gJ2dldHRlcnMtc2V0dGVycy5qcydcclxuXHRcdHNoaWZ0czogW1wiZHVyYXRpb25cIiwgXCJvZmZzZXRcIiwgXCJ0cmlnZ2VySG9va1wiXSwgLy8gbGlzdCBvZiBvcHRpb25zIHRoYXQgdHJpZ2dlciBhIGBzaGlmdGAgZXZlbnRcclxuXHR9O1xyXG5cdC8qXHJcblx0ICogbWV0aG9kIHVzZWQgdG8gYWRkIGFuIG9wdGlvbiB0byBTY3JvbGxNYWdpYyBTY2VuZXMuXHJcblx0ICogVE9ETzogRE9DIChwcml2YXRlIGZvciBkZXYpXHJcblx0ICovXHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUuYWRkT3B0aW9uID0gZnVuY3Rpb24gKG5hbWUsIGRlZmF1bHRWYWx1ZSwgdmFsaWRhdGlvbkNhbGxiYWNrLCBzaGlmdHMpIHtcclxuXHRcdGlmICghKG5hbWUgaW4gU0NFTkVfT1BUSU9OUy5kZWZhdWx0cykpIHtcclxuXHRcdFx0U0NFTkVfT1BUSU9OUy5kZWZhdWx0c1tuYW1lXSA9IGRlZmF1bHRWYWx1ZTtcclxuXHRcdFx0U0NFTkVfT1BUSU9OUy52YWxpZGF0ZVtuYW1lXSA9IHZhbGlkYXRpb25DYWxsYmFjaztcclxuXHRcdFx0aWYgKHNoaWZ0cykge1xyXG5cdFx0XHRcdFNDRU5FX09QVElPTlMuc2hpZnRzLnB1c2gobmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFNjcm9sbE1hZ2ljLl91dGlsLmxvZygxLCBcIltzdGF0aWNdIFNjcm9sbE1hZ2ljLlNjZW5lIC0+IENhbm5vdCBhZGQgU2NlbmUgb3B0aW9uICdcIiArIG5hbWUgKyBcIicsIGJlY2F1c2UgaXQgYWxyZWFkeSBleGlzdHMuXCIpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0Ly8gaW5zdGFuY2UgZXh0ZW5zaW9uIGZ1bmN0aW9uIGZvciBwbHVnaW5zXHJcblx0Ly8gVE9ETzogRE9DIChwcml2YXRlIGZvciBkZXYpXHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUuZXh0ZW5kID0gZnVuY3Rpb24gKGV4dGVuc2lvbikge1xyXG5cdFx0dmFyIG9sZENsYXNzID0gdGhpcztcclxuXHRcdFNjcm9sbE1hZ2ljLlNjZW5lID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRvbGRDbGFzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHR0aGlzLiRzdXBlciA9IF91dGlsLmV4dGVuZCh7fSwgdGhpcyk7IC8vIGNvcHkgcGFyZW50IHN0YXRlXHJcblx0XHRcdHJldHVybiBleHRlbnNpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG5cdFx0fTtcclxuXHRcdF91dGlsLmV4dGVuZChTY3JvbGxNYWdpYy5TY2VuZSwgb2xkQ2xhc3MpOyAvLyBjb3B5IHByb3BlcnRpZXNcclxuXHRcdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZSA9IG9sZENsYXNzLnByb3RvdHlwZTsgLy8gY29weSBwcm90b3R5cGVcclxuXHRcdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNjcm9sbE1hZ2ljLlNjZW5lOyAvLyByZXN0b3JlIGNvbnN0cnVjdG9yXHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBUT0RPOiBET0NTIChwcml2YXRlIGZvciBkZXYpXHJcblx0ICogQGNsYXNzXHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHJcblx0U2Nyb2xsTWFnaWMuRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZXNwYWNlLCB0YXJnZXQsIHZhcnMpIHtcclxuXHRcdHZhcnMgPSB2YXJzIHx8IHt9O1xyXG5cdFx0Zm9yICh2YXIga2V5IGluIHZhcnMpIHtcclxuXHRcdFx0dGhpc1trZXldID0gdmFyc1trZXldO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHRcdHRoaXMudGFyZ2V0ID0gdGhpcy5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0O1xyXG5cdFx0dGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2UgfHwgJyc7XHJcblx0XHR0aGlzLnRpbWVTdGFtcCA9IHRoaXMudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdC8qXHJcblx0ICogVE9ETzogRE9DUyAocHJpdmF0ZSBmb3IgZGV2KVxyXG5cdCAqL1xyXG5cclxuXHR2YXIgX3V0aWwgPSBTY3JvbGxNYWdpYy5fdXRpbCA9IChmdW5jdGlvbiAod2luZG93KSB7XHJcblx0XHR2YXIgVSA9IHt9LFxyXG5cdFx0XHRpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBpbnRlcm5hbCBoZWxwZXJzXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8vIHBhcnNlIGZsb2F0IGFuZCBmYWxsIGJhY2sgdG8gMC5cclxuXHRcdHZhciBmbG9hdHZhbCA9IGZ1bmN0aW9uIChudW1iZXIpIHtcclxuXHRcdFx0cmV0dXJuIHBhcnNlRmxvYXQobnVtYmVyKSB8fCAwO1xyXG5cdFx0fTtcclxuXHRcdC8vIGdldCBjdXJyZW50IHN0eWxlIElFIHNhZmUgKG90aGVyd2lzZSBJRSB3b3VsZCByZXR1cm4gY2FsY3VsYXRlZCB2YWx1ZXMgZm9yICdhdXRvJylcclxuXHRcdHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGZ1bmN0aW9uIChlbGVtKSB7XHJcblx0XHRcdHJldHVybiBlbGVtLmN1cnJlbnRTdHlsZSA/IGVsZW0uY3VycmVudFN0eWxlIDogd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIGdldCBlbGVtZW50IGRpbWVuc2lvbiAod2lkdGggb3IgaGVpZ2h0KVxyXG5cdFx0dmFyIF9kaW1lbnNpb24gPSBmdW5jdGlvbiAod2hpY2gsIGVsZW0sIG91dGVyLCBpbmNsdWRlTWFyZ2luKSB7XHJcblx0XHRcdGVsZW0gPSAoZWxlbSA9PT0gZG9jdW1lbnQpID8gd2luZG93IDogZWxlbTtcclxuXHRcdFx0aWYgKGVsZW0gPT09IHdpbmRvdykge1xyXG5cdFx0XHRcdGluY2x1ZGVNYXJnaW4gPSBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIGlmICghX3R5cGUuRG9tRWxlbWVudChlbGVtKSkge1xyXG5cdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdHdoaWNoID0gd2hpY2guY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3aGljaC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0dmFyIGRpbWVuc2lvbiA9IChvdXRlciA/IGVsZW1bJ29mZnNldCcgKyB3aGljaF0gfHwgZWxlbVsnb3V0ZXInICsgd2hpY2hdIDogZWxlbVsnY2xpZW50JyArIHdoaWNoXSB8fCBlbGVtWydpbm5lcicgKyB3aGljaF0pIHx8IDA7XHJcblx0XHRcdGlmIChvdXRlciAmJiBpbmNsdWRlTWFyZ2luKSB7XHJcblx0XHRcdFx0dmFyIHN0eWxlID0gX2dldENvbXB1dGVkU3R5bGUoZWxlbSk7XHJcblx0XHRcdFx0ZGltZW5zaW9uICs9IHdoaWNoID09PSAnSGVpZ2h0JyA/IGZsb2F0dmFsKHN0eWxlLm1hcmdpblRvcCkgKyBmbG9hdHZhbChzdHlsZS5tYXJnaW5Cb3R0b20pIDogZmxvYXR2YWwoc3R5bGUubWFyZ2luTGVmdCkgKyBmbG9hdHZhbChzdHlsZS5tYXJnaW5SaWdodCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGRpbWVuc2lvbjtcclxuXHRcdH07XHJcblx0XHQvLyBjb252ZXJ0cyAnbWFyZ2luLXRvcCcgaW50byAnbWFyZ2luVG9wJ1xyXG5cdFx0dmFyIF9jYW1lbENhc2UgPSBmdW5jdGlvbiAoc3RyKSB7XHJcblx0XHRcdHJldHVybiBzdHIucmVwbGFjZSgvXlteYS16XSsoW2Etel0pL2csICckMScpLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uIChnKSB7XHJcblx0XHRcdFx0cmV0dXJuIGdbMV0udG9VcHBlckNhc2UoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBleHRlcm5hbCBoZWxwZXJzXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8vIGV4dGVuZCBvYmog4oCTIHNhbWUgYXMgalF1ZXJ5LmV4dGVuZCh7fSwgb2JqQSwgb2JqQilcclxuXHRcdFUuZXh0ZW5kID0gZnVuY3Rpb24gKG9iaikge1xyXG5cdFx0XHRvYmogPSBvYmogfHwge307XHJcblx0XHRcdGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAoIWFyZ3VtZW50c1tpXSkge1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbaV0pIHtcclxuXHRcdFx0XHRcdGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRcdFx0XHRvYmpba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gb2JqO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBjaGVjayBpZiBhIGNzcyBkaXNwbGF5IHR5cGUgcmVzdWx0cyBpbiBtYXJnaW4tY29sbGFwc2Ugb3Igbm90XHJcblx0XHRVLmlzTWFyZ2luQ29sbGFwc2VUeXBlID0gZnVuY3Rpb24gKHN0cikge1xyXG5cdFx0XHRyZXR1cm4gW1wiYmxvY2tcIiwgXCJmbGV4XCIsIFwibGlzdC1pdGVtXCIsIFwidGFibGVcIiwgXCItd2Via2l0LWJveFwiXS5pbmRleE9mKHN0cikgPiAtMTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gaW1wbGVtZW50YXRpb24gb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcblx0XHQvLyBiYXNlZCBvbiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wYXVsaXJpc2gvMTU3OTY3MVxyXG5cdFx0dmFyXHJcblx0XHRcdGxhc3RUaW1lID0gMCxcclxuXHRcdFx0dmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XHJcblx0XHR2YXIgX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XHJcblx0XHR2YXIgX2NhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lO1xyXG5cdFx0Ly8gdHJ5IHZlbmRvciBwcmVmaXhlcyBpZiB0aGUgYWJvdmUgZG9lc24ndCB3b3JrXHJcblx0XHRmb3IgKGkgPSAwOyAhX3JlcXVlc3RBbmltYXRpb25GcmFtZSAmJiBpIDwgdmVuZG9ycy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbaV0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XHJcblx0XHRcdF9jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW2ldICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHwgd2luZG93W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZmFsbGJhY2tzXHJcblx0XHRpZiAoIV9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcclxuXHRcdFx0X3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0Y3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuXHRcdFx0XHRcdHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSksXHJcblx0XHRcdFx0XHRpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0Y2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcclxuXHRcdFx0XHRcdH0sIHRpbWVUb0NhbGwpO1xyXG5cdFx0XHRcdGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xyXG5cdFx0XHRcdHJldHVybiBpZDtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGlmICghX2NhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XHJcblx0XHRcdF9jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChpZCkge1xyXG5cdFx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoaWQpO1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0VS5yQUYgPSBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KTtcclxuXHRcdFUuY0FGID0gX2NhbmNlbEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KTtcclxuXHJcblx0XHR2YXJcclxuXHRcdFx0bG9nbGV2ZWxzID0gW1wiZXJyb3JcIiwgXCJ3YXJuXCIsIFwibG9nXCJdLFxyXG5cdFx0XHRjb25zb2xlID0gd2luZG93LmNvbnNvbGUgfHwge307XHJcblxyXG5cdFx0Y29uc29sZS5sb2cgPSBjb25zb2xlLmxvZyB8fCBmdW5jdGlvbiAoKSB7fTsgLy8gbm8gY29uc29sZSBsb2csIHdlbGwgLSBkbyBub3RoaW5nIHRoZW4uLi5cclxuXHRcdC8vIG1ha2Ugc3VyZSBtZXRob2RzIGZvciBhbGwgbGV2ZWxzIGV4aXN0LlxyXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxvZ2xldmVscy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgbWV0aG9kID0gbG9nbGV2ZWxzW2ldO1xyXG5cdFx0XHRpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xyXG5cdFx0XHRcdGNvbnNvbGVbbWV0aG9kXSA9IGNvbnNvbGUubG9nOyAvLyBwcmVmZXIgLmxvZyBvdmVyIG5vdGhpbmdcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0VS5sb2cgPSBmdW5jdGlvbiAobG9nbGV2ZWwpIHtcclxuXHRcdFx0aWYgKGxvZ2xldmVsID4gbG9nbGV2ZWxzLmxlbmd0aCB8fCBsb2dsZXZlbCA8PSAwKSBsb2dsZXZlbCA9IGxvZ2xldmVscy5sZW5ndGg7XHJcblx0XHRcdHZhciBub3cgPSBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRcdHRpbWUgPSAoXCIwXCIgKyBub3cuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICsgXCI6XCIgKyAoXCIwXCIgKyBub3cuZ2V0TWludXRlcygpKS5zbGljZSgtMikgKyBcIjpcIiArIChcIjBcIiArIG5vdy5nZXRTZWNvbmRzKCkpLnNsaWNlKC0yKSArIFwiOlwiICsgKFwiMDBcIiArIG5vdy5nZXRNaWxsaXNlY29uZHMoKSkuc2xpY2UoLTMpLFxyXG5cdFx0XHRcdG1ldGhvZCA9IGxvZ2xldmVsc1tsb2dsZXZlbCAtIDFdLFxyXG5cdFx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcclxuXHRcdFx0XHRmdW5jID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChjb25zb2xlW21ldGhvZF0sIGNvbnNvbGUpO1xyXG5cdFx0XHRhcmdzLnVuc2hpZnQodGltZSk7XHJcblx0XHRcdGZ1bmMuYXBwbHkoY29uc29sZSwgYXJncyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiB0eXBlIHRlc3RpbmdcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dmFyIF90eXBlID0gVS50eXBlID0gZnVuY3Rpb24gKHYpIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KS5yZXBsYWNlKC9eXFxbb2JqZWN0ICguKylcXF0kLywgXCIkMVwiKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0fTtcclxuXHRcdF90eXBlLlN0cmluZyA9IGZ1bmN0aW9uICh2KSB7XHJcblx0XHRcdHJldHVybiBfdHlwZSh2KSA9PT0gJ3N0cmluZyc7XHJcblx0XHR9O1xyXG5cdFx0X3R5cGUuRnVuY3Rpb24gPSBmdW5jdGlvbiAodikge1xyXG5cdFx0XHRyZXR1cm4gX3R5cGUodikgPT09ICdmdW5jdGlvbic7XHJcblx0XHR9O1xyXG5cdFx0X3R5cGUuQXJyYXkgPSBmdW5jdGlvbiAodikge1xyXG5cdFx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2KTtcclxuXHRcdH07XHJcblx0XHRfdHlwZS5OdW1iZXIgPSBmdW5jdGlvbiAodikge1xyXG5cdFx0XHRyZXR1cm4gIV90eXBlLkFycmF5KHYpICYmICh2IC0gcGFyc2VGbG9hdCh2KSArIDEpID49IDA7XHJcblx0XHR9O1xyXG5cdFx0X3R5cGUuRG9tRWxlbWVudCA9IGZ1bmN0aW9uIChvKSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0dHlwZW9mIEhUTUxFbGVtZW50ID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gXCJmdW5jdGlvblwiID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG8gaW5zdGFuY2VvZiBTVkdFbGVtZW50IDogLy9ET00yXHJcblx0XHRcdFx0byAmJiB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJiBvICE9PSBudWxsICYmIG8ubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIG8ubm9kZU5hbWUgPT09IFwic3RyaW5nXCJcclxuXHRcdFx0KTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIERPTSBFbGVtZW50IGluZm9cclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblx0XHQvLyBhbHdheXMgcmV0dXJucyBhIGxpc3Qgb2YgbWF0Y2hpbmcgRE9NIGVsZW1lbnRzLCBmcm9tIGEgc2VsZWN0b3IsIGEgRE9NIGVsZW1lbnQgb3IgYW4gbGlzdCBvZiBlbGVtZW50cyBvciBldmVuIGFuIGFycmF5IG9mIHNlbGVjdG9yc1xyXG5cdFx0dmFyIF9nZXQgPSBVLmdldCA9IHt9O1xyXG5cdFx0X2dldC5lbGVtZW50cyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cdFx0XHR2YXIgYXJyID0gW107XHJcblx0XHRcdGlmIChfdHlwZS5TdHJpbmcoc2VsZWN0b3IpKSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblx0XHRcdFx0fSBjYXRjaCAoZSkgeyAvLyBpbnZhbGlkIHNlbGVjdG9yXHJcblx0XHRcdFx0XHRyZXR1cm4gYXJyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoX3R5cGUoc2VsZWN0b3IpID09PSAnbm9kZWxpc3QnIHx8IF90eXBlLkFycmF5KHNlbGVjdG9yKSB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIHJlZiA9IGFyci5sZW5ndGggPSBzZWxlY3Rvci5sZW5ndGg7IGkgPCByZWY7IGkrKykgeyAvLyBsaXN0IG9mIGVsZW1lbnRzXHJcblx0XHRcdFx0XHR2YXIgZWxlbSA9IHNlbGVjdG9yW2ldO1xyXG5cdFx0XHRcdFx0YXJyW2ldID0gX3R5cGUuRG9tRWxlbWVudChlbGVtKSA/IGVsZW0gOiBfZ2V0LmVsZW1lbnRzKGVsZW0pOyAvLyBpZiBub3QgYW4gZWxlbWVudCwgdHJ5IHRvIHJlc29sdmUgcmVjdXJzaXZlbHlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoX3R5cGUuRG9tRWxlbWVudChzZWxlY3RvcikgfHwgc2VsZWN0b3IgPT09IGRvY3VtZW50IHx8IHNlbGVjdG9yID09PSB3aW5kb3cpIHtcclxuXHRcdFx0XHRhcnIgPSBbc2VsZWN0b3JdOyAvLyBvbmx5IHRoZSBlbGVtZW50XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGFycjtcclxuXHRcdH07XHJcblx0XHQvLyBnZXQgc2Nyb2xsIHRvcCB2YWx1ZVxyXG5cdFx0X2dldC5zY3JvbGxUb3AgPSBmdW5jdGlvbiAoZWxlbSkge1xyXG5cdFx0XHRyZXR1cm4gKGVsZW0gJiYgdHlwZW9mIGVsZW0uc2Nyb2xsVG9wID09PSAnbnVtYmVyJykgPyBlbGVtLnNjcm9sbFRvcCA6IHdpbmRvdy5wYWdlWU9mZnNldCB8fCAwO1xyXG5cdFx0fTtcclxuXHRcdC8vIGdldCBzY3JvbGwgbGVmdCB2YWx1ZVxyXG5cdFx0X2dldC5zY3JvbGxMZWZ0ID0gZnVuY3Rpb24gKGVsZW0pIHtcclxuXHRcdFx0cmV0dXJuIChlbGVtICYmIHR5cGVvZiBlbGVtLnNjcm9sbExlZnQgPT09ICdudW1iZXInKSA/IGVsZW0uc2Nyb2xsTGVmdCA6IHdpbmRvdy5wYWdlWE9mZnNldCB8fCAwO1xyXG5cdFx0fTtcclxuXHRcdC8vIGdldCBlbGVtZW50IGhlaWdodFxyXG5cdFx0X2dldC53aWR0aCA9IGZ1bmN0aW9uIChlbGVtLCBvdXRlciwgaW5jbHVkZU1hcmdpbikge1xyXG5cdFx0XHRyZXR1cm4gX2RpbWVuc2lvbignd2lkdGgnLCBlbGVtLCBvdXRlciwgaW5jbHVkZU1hcmdpbik7XHJcblx0XHR9O1xyXG5cdFx0Ly8gZ2V0IGVsZW1lbnQgd2lkdGhcclxuXHRcdF9nZXQuaGVpZ2h0ID0gZnVuY3Rpb24gKGVsZW0sIG91dGVyLCBpbmNsdWRlTWFyZ2luKSB7XHJcblx0XHRcdHJldHVybiBfZGltZW5zaW9uKCdoZWlnaHQnLCBlbGVtLCBvdXRlciwgaW5jbHVkZU1hcmdpbik7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIGdldCBlbGVtZW50IHBvc2l0aW9uIChvcHRpb25hbGx5IHJlbGF0aXZlIHRvIHZpZXdwb3J0KVxyXG5cdFx0X2dldC5vZmZzZXQgPSBmdW5jdGlvbiAoZWxlbSwgcmVsYXRpdmVUb1ZpZXdwb3J0KSB7XHJcblx0XHRcdHZhciBvZmZzZXQgPSB7XHJcblx0XHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRcdGxlZnQ6IDBcclxuXHRcdFx0fTtcclxuXHRcdFx0aWYgKGVsZW0gJiYgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHsgLy8gY2hlY2sgaWYgYXZhaWxhYmxlXHJcblx0XHRcdFx0dmFyIHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdG9mZnNldC50b3AgPSByZWN0LnRvcDtcclxuXHRcdFx0XHRvZmZzZXQubGVmdCA9IHJlY3QubGVmdDtcclxuXHRcdFx0XHRpZiAoIXJlbGF0aXZlVG9WaWV3cG9ydCkgeyAvLyBjbGllbnRSZWN0IGlzIGJ5IGRlZmF1bHQgcmVsYXRpdmUgdG8gdmlld3BvcnQuLi5cclxuXHRcdFx0XHRcdG9mZnNldC50b3AgKz0gX2dldC5zY3JvbGxUb3AoKTtcclxuXHRcdFx0XHRcdG9mZnNldC5sZWZ0ICs9IF9nZXQuc2Nyb2xsTGVmdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gb2Zmc2V0O1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogRE9NIEVsZW1lbnQgbWFuaXB1bGF0aW9uXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdFUuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZWxlbSwgY2xhc3NuYW1lKSB7XHJcblx0XHRcdGlmIChjbGFzc25hbWUpIHtcclxuXHRcdFx0XHRpZiAoZWxlbS5jbGFzc0xpc3QpXHJcblx0XHRcdFx0XHRlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NuYW1lKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRlbGVtLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc25hbWU7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRVLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGVsZW0sIGNsYXNzbmFtZSkge1xyXG5cdFx0XHRpZiAoY2xhc3NuYW1lKSB7XHJcblx0XHRcdFx0aWYgKGVsZW0uY2xhc3NMaXN0KVxyXG5cdFx0XHRcdFx0ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzbmFtZSk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0ZWxlbS5jbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJyhefFxcXFxiKScgKyBjbGFzc25hbWUuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKFxcXFxifCQpJywgJ2dpJyksICcgJyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHQvLyBpZiBvcHRpb25zIGlzIHN0cmluZyAtPiByZXR1cm5zIGNzcyB2YWx1ZVxyXG5cdFx0Ly8gaWYgb3B0aW9ucyBpcyBhcnJheSAtPiByZXR1cm5zIG9iamVjdCB3aXRoIGNzcyB2YWx1ZSBwYWlyc1xyXG5cdFx0Ly8gaWYgb3B0aW9ucyBpcyBvYmplY3QgLT4gc2V0IG5ldyBjc3MgdmFsdWVzXHJcblx0XHRVLmNzcyA9IGZ1bmN0aW9uIChlbGVtLCBvcHRpb25zKSB7XHJcblx0XHRcdGlmIChfdHlwZS5TdHJpbmcob3B0aW9ucykpIHtcclxuXHRcdFx0XHRyZXR1cm4gX2dldENvbXB1dGVkU3R5bGUoZWxlbSlbX2NhbWVsQ2FzZShvcHRpb25zKV07XHJcblx0XHRcdH0gZWxzZSBpZiAoX3R5cGUuQXJyYXkob3B0aW9ucykpIHtcclxuXHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdG9iaiA9IHt9LFxyXG5cdFx0XHRcdFx0c3R5bGUgPSBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcclxuXHRcdFx0XHRvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbiwga2V5KSB7XHJcblx0XHRcdFx0XHRvYmpbb3B0aW9uXSA9IHN0eWxlW19jYW1lbENhc2Uob3B0aW9uKV07XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuIG9iajtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRmb3IgKHZhciBvcHRpb24gaW4gb3B0aW9ucykge1xyXG5cdFx0XHRcdFx0dmFyIHZhbCA9IG9wdGlvbnNbb3B0aW9uXTtcclxuXHRcdFx0XHRcdGlmICh2YWwgPT0gcGFyc2VGbG9hdCh2YWwpKSB7IC8vIGFzc3VtZSBwaXhlbCBmb3Igc2VlbWluZ2x5IG51bWVyaWNhbCB2YWx1ZXNcclxuXHRcdFx0XHRcdFx0dmFsICs9ICdweCc7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbGVtLnN0eWxlW19jYW1lbENhc2Uob3B0aW9uKV0gPSB2YWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiBVO1xyXG5cdH0od2luZG93IHx8IHt9KSk7XHJcblxyXG5cclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUuYWRkSW5kaWNhdG9ycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFNjcm9sbE1hZ2ljLl91dGlsLmxvZygxLCAnKFNjcm9sbE1hZ2ljLlNjZW5lKSAtPiBFUlJPUiBjYWxsaW5nIGFkZEluZGljYXRvcnMoKSBkdWUgdG8gbWlzc2luZyBQbHVnaW4gXFwnZGVidWcuYWRkSW5kaWNhdG9yc1xcJy4gUGxlYXNlIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHBsdWdpbnMvZGVidWcuYWRkSW5kaWNhdG9ycy5qcycpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5yZW1vdmVJbmRpY2F0b3JzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0U2Nyb2xsTWFnaWMuX3V0aWwubG9nKDEsICcoU2Nyb2xsTWFnaWMuU2NlbmUpIC0+IEVSUk9SIGNhbGxpbmcgcmVtb3ZlSW5kaWNhdG9ycygpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdkZWJ1Zy5hZGRJbmRpY2F0b3JzXFwnLiBQbGVhc2UgbWFrZSBzdXJlIHRvIGluY2x1ZGUgcGx1Z2lucy9kZWJ1Zy5hZGRJbmRpY2F0b3JzLmpzJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlLnNldFR3ZWVuID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0U2Nyb2xsTWFnaWMuX3V0aWwubG9nKDEsICcoU2Nyb2xsTWFnaWMuU2NlbmUpIC0+IEVSUk9SIGNhbGxpbmcgc2V0VHdlZW4oKSBkdWUgdG8gbWlzc2luZyBQbHVnaW4gXFwnYW5pbWF0aW9uLmdzYXBcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2FuaW1hdGlvbi5nc2FwLmpzJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlLnJlbW92ZVR3ZWVuID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0U2Nyb2xsTWFnaWMuX3V0aWwubG9nKDEsICcoU2Nyb2xsTWFnaWMuU2NlbmUpIC0+IEVSUk9SIGNhbGxpbmcgcmVtb3ZlVHdlZW4oKSBkdWUgdG8gbWlzc2luZyBQbHVnaW4gXFwnYW5pbWF0aW9uLmdzYXBcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2FuaW1hdGlvbi5nc2FwLmpzJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlLnNldFZlbG9jaXR5ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0U2Nyb2xsTWFnaWMuX3V0aWwubG9nKDEsICcoU2Nyb2xsTWFnaWMuU2NlbmUpIC0+IEVSUk9SIGNhbGxpbmcgc2V0VmVsb2NpdHkoKSBkdWUgdG8gbWlzc2luZyBQbHVnaW4gXFwnYW5pbWF0aW9uLnZlbG9jaXR5XFwnLiBQbGVhc2UgbWFrZSBzdXJlIHRvIGluY2x1ZGUgcGx1Z2lucy9hbmltYXRpb24udmVsb2NpdHkuanMnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUucmVtb3ZlVmVsb2NpdHkgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyByZW1vdmVWZWxvY2l0eSgpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdhbmltYXRpb24udmVsb2NpdHlcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2FuaW1hdGlvbi52ZWxvY2l0eS5qcycpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gU2Nyb2xsTWFnaWM7XHJcbn0pKTsiLCJpbXBvcnQgJy4vc2Fzcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9zYXNzL2FkbWluLnNjc3MnO1xuXG5pbXBvcnQgeyBpbml0UG9wdXAgfSBmcm9tICcuL2pzL3ZpZGVvcyc7XG5pbXBvcnQgeyBpbml0U2Nyb2xsIH0gZnJvbSAnLi9qcy9hbmltYXRpb25zJztcblxuJCA9IGpRdWVyeTtcblxud2luZG93LiQgPSAkO1xud2luZG93LmpRdWVyeSA9IGpRdWVyeTtcblxuaW5pdFBvcHVwKCk7XG5cbmluaXRTY3JvbGwoKTsiLCIkID0galF1ZXJ5O1xuXG5pbXBvcnQgU2Nyb2xsTWFnaWMgZnJvbSAnc2Nyb2xsbWFnaWMnO1xuLy9pbXBvcnQgXCJpbXBvcnRzLWxvYWRlcj9kZWZpbmU9PmZhbHNlIXNjcm9sbG1hZ2ljL3Njcm9sbG1hZ2ljL3VuY29tcHJlc3NlZC9wbHVnaW5zL2RlYnVnLmFkZEluZGljYXRvcnMuanNcIjtcblxuXG5mdW5jdGlvbiBpbml0U2Nyb2xsKCkge1xuXG4gICAgdmFyIGNvbnRyb2xsZXIgPSBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcih7fSk7XG5cblxuICAgICQoXCIudGl0bGUtYW5pbWF0ZVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgdmFyIHNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRWxlbWVudDogYCMke2lkfWAsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgICAgICAgICAgdHJpZ2dlckhvb2s6IDAuNjYsXG4gICAgICAgICAgICAgICAgcmV2ZXJzZTogZmFsc2VcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgLy8gLmFkZEluZGljYXRvcnMoKVxuICAgICAgICAuc2V0Q2xhc3NUb2dnbGUoYCMke2lkfWAsICdhbmltYXRlZCcpXG4gICAgICAgICAgICAuYWRkVG8oY29udHJvbGxlcik7XG4gICAgfSlcblxuICAgIC8vIGJ1aWxkIHNjZW5lXG5cblxufVxuXG5leHBvcnQge1xuICAgIGluaXRTY3JvbGxcbn07IiwiaW1wb3J0IHsgbWFnbmlmaWNQb3B1cCB9IGZyb20gJ21hZ25pZmljLXBvcHVwJztcblxuZnVuY3Rpb24gaW5pdFBvcHVwKCkge1xuICAgICQoJy5saWdodGJveC10b2dnbGUnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgdHlwZTogJ2lmcmFtZSdcbiAgICAgICAgLy8gb3RoZXIgb3B0aW9uc1xuICAgICAgfSlcbiAgICAgIC5leHRlbmQodHJ1ZSwgJC5tYWduaWZpY1BvcHVwLmRlZmF1bHRzLCB7ICBcbiAgICAgICAgaWZyYW1lOiB7XG4gICAgICAgICAgICBwYXR0ZXJuczoge1xuICAgICAgICAgICAgICAgeW91dHViZToge1xuICAgICAgICAgICAgICAgICAgaW5kZXg6ICd5b3V0dWJlLmNvbS8nLCBcbiAgICAgICAgICAgICAgICAgIGlkOiAndj0nLCBcbiAgICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyVpZCU/YXV0b3BsYXk9MScgXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHZpbWVvOiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6ICd2aW1lby5jb20vJyxcbiAgICAgICAgICAgICAgICBpZDogJy8nLFxuICAgICAgICAgICAgICAgIHNyYzogJy8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8laWQlP2F1dG9wbGF5PTEnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgaW5pdFBvcHVwIH07IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=