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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hZ25pZmljLXBvcHVwL2Rpc3QvanF1ZXJ5Lm1hZ25pZmljLXBvcHVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zY3JvbGxtYWdpYy9zY3JvbGxtYWdpYy91bmNvbXByZXNzZWQvU2Nyb2xsTWFnaWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWRlb3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz9kMjg5Iiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJjb250cm9sbGVyIiwiU2Nyb2xsTWFnaWMiLCJpZCIsInNjZW5lIiwidHJpZ2dlckVsZW1lbnQiLCJkdXJhdGlvbiIsInRyaWdnZXJIb29rIiwicmV2ZXJzZSIsImluaXRTY3JvbGwiLCJ0eXBlIiwiaWZyYW1lIiwicGF0dGVybnMiLCJ5b3V0dWJlIiwiaW5kZXgiLCJzcmMiLCJ2aW1lbyIsImluaXRQb3B1cCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLHNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQsRUFBRTs7QUFFOUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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QUFNOztBQUVOOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLE1BQU07O0FBRWQsT0FBTyxZQUFZOztBQUVuQixNQUFNLE1BQU07OztBQUdaO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQSxJQUFJ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QXRCOztBQU9UO0FBUFMsb0RBQVosVUFBWSxDQUFaO0FBSkpUOztBQWdCQTtBQUdIOztRQUdHVSxVLEdBQUFBLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0o7O0FBRUEscUJBQXFCO0FBQ2pCVix3Q0FBb0M7QUFDaENXLGNBQU07QUFDTjtBQUZnQyxLQUFwQ1gsZUFJZ0JBLGdCQUpoQkEsVUFJMEM7QUFDdENZLGdCQUFRO0FBQ0pDLHNCQUFVO0FBQ1BDLHlCQUFTO0FBQ05DLDJCQURNO0FBRU5YLHdCQUZNO0FBR05ZLHlCQUFLO0FBSEMsaUJBREY7QUFNUkMsdUJBQU87QUFDTEYsMkJBREs7QUFFTFgsd0JBRks7QUFHTFkseUJBQUs7QUFIQTtBQU5DO0FBRE47QUFEOEIsS0FKMUNoQjtBQW9CSDs7UUFFUWtCLFMsR0FBQUEsUzs7Ozs7Ozs7Ozs7QUN6QlQseUM7Ozs7Ozs7Ozs7O0FDQUEsd0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyohIE1hZ25pZmljIFBvcHVwIC0gdjEuMS4wIC0gMjAxNi0wMi0yMFxuKiBodHRwOi8vZGltc2VtZW5vdi5jb20vcGx1Z2lucy9tYWduaWZpYy1wb3B1cC9cbiogQ29weXJpZ2h0IChjKSAyMDE2IERtaXRyeSBTZW1lbm92OyAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkgeyBcbmlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHsgXG4gLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLiBcbiBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7IFxuIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7IFxuIC8vIE5vZGUvQ29tbW9uSlMgXG4gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7IFxuIH0gZWxzZSB7IFxuIC8vIEJyb3dzZXIgZ2xvYmFscyBcbiBmYWN0b3J5KHdpbmRvdy5qUXVlcnkgfHwgd2luZG93LlplcHRvKTsgXG4gfSBcbiB9KGZ1bmN0aW9uKCQpIHsgXG5cbi8qPj5jb3JlKi9cbi8qKlxuICogXG4gKiBNYWduaWZpYyBQb3B1cCBDb3JlIEpTIGZpbGVcbiAqIFxuICovXG5cblxuLyoqXG4gKiBQcml2YXRlIHN0YXRpYyBjb25zdGFudHNcbiAqL1xudmFyIENMT1NFX0VWRU5UID0gJ0Nsb3NlJyxcblx0QkVGT1JFX0NMT1NFX0VWRU5UID0gJ0JlZm9yZUNsb3NlJyxcblx0QUZURVJfQ0xPU0VfRVZFTlQgPSAnQWZ0ZXJDbG9zZScsXG5cdEJFRk9SRV9BUFBFTkRfRVZFTlQgPSAnQmVmb3JlQXBwZW5kJyxcblx0TUFSS1VQX1BBUlNFX0VWRU5UID0gJ01hcmt1cFBhcnNlJyxcblx0T1BFTl9FVkVOVCA9ICdPcGVuJyxcblx0Q0hBTkdFX0VWRU5UID0gJ0NoYW5nZScsXG5cdE5TID0gJ21mcCcsXG5cdEVWRU5UX05TID0gJy4nICsgTlMsXG5cdFJFQURZX0NMQVNTID0gJ21mcC1yZWFkeScsXG5cdFJFTU9WSU5HX0NMQVNTID0gJ21mcC1yZW1vdmluZycsXG5cdFBSRVZFTlRfQ0xPU0VfQ0xBU1MgPSAnbWZwLXByZXZlbnQtY2xvc2UnO1xuXG5cbi8qKlxuICogUHJpdmF0ZSB2YXJzIFxuICovXG4vKmpzaGludCAtVzA3OSAqL1xudmFyIG1mcCwgLy8gQXMgd2UgaGF2ZSBvbmx5IG9uZSBpbnN0YW5jZSBvZiBNYWduaWZpY1BvcHVwIG9iamVjdCwgd2UgZGVmaW5lIGl0IGxvY2FsbHkgdG8gbm90IHRvIHVzZSAndGhpcydcblx0TWFnbmlmaWNQb3B1cCA9IGZ1bmN0aW9uKCl7fSxcblx0X2lzSlEgPSAhISh3aW5kb3cualF1ZXJ5KSxcblx0X3ByZXZTdGF0dXMsXG5cdF93aW5kb3cgPSAkKHdpbmRvdyksXG5cdF9kb2N1bWVudCxcblx0X3ByZXZDb250ZW50VHlwZSxcblx0X3dyYXBDbGFzc2VzLFxuXHRfY3VyclBvcHVwVHlwZTtcblxuXG4vKipcbiAqIFByaXZhdGUgZnVuY3Rpb25zXG4gKi9cbnZhciBfbWZwT24gPSBmdW5jdGlvbihuYW1lLCBmKSB7XG5cdFx0bWZwLmV2Lm9uKE5TICsgbmFtZSArIEVWRU5UX05TLCBmKTtcblx0fSxcblx0X2dldEVsID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBhcHBlbmRUbywgaHRtbCwgcmF3KSB7XG5cdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZWwuY2xhc3NOYW1lID0gJ21mcC0nK2NsYXNzTmFtZTtcblx0XHRpZihodG1sKSB7XG5cdFx0XHRlbC5pbm5lckhUTUwgPSBodG1sO1xuXHRcdH1cblx0XHRpZighcmF3KSB7XG5cdFx0XHRlbCA9ICQoZWwpO1xuXHRcdFx0aWYoYXBwZW5kVG8pIHtcblx0XHRcdFx0ZWwuYXBwZW5kVG8oYXBwZW5kVG8pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZihhcHBlbmRUbykge1xuXHRcdFx0YXBwZW5kVG8uYXBwZW5kQ2hpbGQoZWwpO1xuXHRcdH1cblx0XHRyZXR1cm4gZWw7XG5cdH0sXG5cdF9tZnBUcmlnZ2VyID0gZnVuY3Rpb24oZSwgZGF0YSkge1xuXHRcdG1mcC5ldi50cmlnZ2VySGFuZGxlcihOUyArIGUsIGRhdGEpO1xuXG5cdFx0aWYobWZwLnN0LmNhbGxiYWNrcykge1xuXHRcdFx0Ly8gY29udmVydHMgXCJtZnBFdmVudE5hbWVcIiB0byBcImV2ZW50TmFtZVwiIGNhbGxiYWNrIGFuZCB0cmlnZ2VycyBpdCBpZiBpdCdzIHByZXNlbnRcblx0XHRcdGUgPSBlLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgZS5zbGljZSgxKTtcblx0XHRcdGlmKG1mcC5zdC5jYWxsYmFja3NbZV0pIHtcblx0XHRcdFx0bWZwLnN0LmNhbGxiYWNrc1tlXS5hcHBseShtZnAsICQuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X2dldENsb3NlQnRuID0gZnVuY3Rpb24odHlwZSkge1xuXHRcdGlmKHR5cGUgIT09IF9jdXJyUG9wdXBUeXBlIHx8ICFtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuKSB7XG5cdFx0XHRtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuID0gJCggbWZwLnN0LmNsb3NlTWFya3VwLnJlcGxhY2UoJyV0aXRsZSUnLCBtZnAuc3QudENsb3NlICkgKTtcblx0XHRcdF9jdXJyUG9wdXBUeXBlID0gdHlwZTtcblx0XHR9XG5cdFx0cmV0dXJuIG1mcC5jdXJyVGVtcGxhdGUuY2xvc2VCdG47XG5cdH0sXG5cdC8vIEluaXRpYWxpemUgTWFnbmlmaWMgUG9wdXAgb25seSB3aGVuIGNhbGxlZCBhdCBsZWFzdCBvbmNlXG5cdF9jaGVja0luc3RhbmNlID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoISQubWFnbmlmaWNQb3B1cC5pbnN0YW5jZSkge1xuXHRcdFx0Lypqc2hpbnQgLVcwMjAgKi9cblx0XHRcdG1mcCA9IG5ldyBNYWduaWZpY1BvcHVwKCk7XG5cdFx0XHRtZnAuaW5pdCgpO1xuXHRcdFx0JC5tYWduaWZpY1BvcHVwLmluc3RhbmNlID0gbWZwO1xuXHRcdH1cblx0fSxcblx0Ly8gQ1NTIHRyYW5zaXRpb24gZGV0ZWN0aW9uLCBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzcyNjQ4OTkvZGV0ZWN0LWNzcy10cmFuc2l0aW9ucy11c2luZy1qYXZhc2NyaXB0LWFuZC13aXRob3V0LW1vZGVybml6clxuXHRzdXBwb3J0c1RyYW5zaXRpb25zID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykuc3R5bGUsIC8vICdzJyBmb3Igc3R5bGUuIGJldHRlciB0byBjcmVhdGUgYW4gZWxlbWVudCBpZiBib2R5IHlldCB0byBleGlzdFxuXHRcdFx0diA9IFsnbXMnLCdPJywnTW96JywnV2Via2l0J107IC8vICd2JyBmb3IgdmVuZG9yXG5cblx0XHRpZiggc1sndHJhbnNpdGlvbiddICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTsgXG5cdFx0fVxuXHRcdFx0XG5cdFx0d2hpbGUoIHYubGVuZ3RoICkge1xuXHRcdFx0aWYoIHYucG9wKCkgKyAnVHJhbnNpdGlvbicgaW4gcyApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFx0XHRcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblxuXG4vKipcbiAqIFB1YmxpYyBmdW5jdGlvbnNcbiAqL1xuTWFnbmlmaWNQb3B1cC5wcm90b3R5cGUgPSB7XG5cblx0Y29uc3RydWN0b3I6IE1hZ25pZmljUG9wdXAsXG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIE1hZ25pZmljIFBvcHVwIHBsdWdpbi4gXG5cdCAqIFRoaXMgZnVuY3Rpb24gaXMgdHJpZ2dlcmVkIG9ubHkgb25jZSB3aGVuICQuZm4ubWFnbmlmaWNQb3B1cCBvciAkLm1hZ25pZmljUG9wdXAgaXMgZXhlY3V0ZWRcblx0ICovXG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBhcHBWZXJzaW9uID0gbmF2aWdhdG9yLmFwcFZlcnNpb247XG5cdFx0bWZwLmlzTG93SUUgPSBtZnAuaXNJRTggPSBkb2N1bWVudC5hbGwgJiYgIWRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI7XG5cdFx0bWZwLmlzQW5kcm9pZCA9ICgvYW5kcm9pZC9naSkudGVzdChhcHBWZXJzaW9uKTtcblx0XHRtZnAuaXNJT1MgPSAoL2lwaG9uZXxpcGFkfGlwb2QvZ2kpLnRlc3QoYXBwVmVyc2lvbik7XG5cdFx0bWZwLnN1cHBvcnRzVHJhbnNpdGlvbiA9IHN1cHBvcnRzVHJhbnNpdGlvbnMoKTtcblxuXHRcdC8vIFdlIGRpc2FibGUgZml4ZWQgcG9zaXRpb25lZCBsaWdodGJveCBvbiBkZXZpY2VzIHRoYXQgZG9uJ3QgaGFuZGxlIGl0IG5pY2VseS5cblx0XHQvLyBJZiB5b3Uga25vdyBhIGJldHRlciB3YXkgb2YgZGV0ZWN0aW5nIHRoaXMgLSBsZXQgbWUga25vdy5cblx0XHRtZnAucHJvYmFibHlNb2JpbGUgPSAobWZwLmlzQW5kcm9pZCB8fCBtZnAuaXNJT1MgfHwgLyhPcGVyYSBNaW5pKXxLaW5kbGV8d2ViT1N8QmxhY2tCZXJyeXwoT3BlcmEgTW9iaSl8KFdpbmRvd3MgUGhvbmUpfElFTW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSApO1xuXHRcdF9kb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuXG5cdFx0bWZwLnBvcHVwc0NhY2hlID0ge307XG5cdH0sXG5cblx0LyoqXG5cdCAqIE9wZW5zIHBvcHVwXG5cdCAqIEBwYXJhbSAgZGF0YSBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRvcGVuOiBmdW5jdGlvbihkYXRhKSB7XG5cblx0XHR2YXIgaTtcblxuXHRcdGlmKGRhdGEuaXNPYmogPT09IGZhbHNlKSB7IFxuXHRcdFx0Ly8gY29udmVydCBqUXVlcnkgY29sbGVjdGlvbiB0byBhcnJheSB0byBhdm9pZCBjb25mbGljdHMgbGF0ZXJcblx0XHRcdG1mcC5pdGVtcyA9IGRhdGEuaXRlbXMudG9BcnJheSgpO1xuXG5cdFx0XHRtZnAuaW5kZXggPSAwO1xuXHRcdFx0dmFyIGl0ZW1zID0gZGF0YS5pdGVtcyxcblx0XHRcdFx0aXRlbTtcblx0XHRcdGZvcihpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGl0ZW0gPSBpdGVtc1tpXTtcblx0XHRcdFx0aWYoaXRlbS5wYXJzZWQpIHtcblx0XHRcdFx0XHRpdGVtID0gaXRlbS5lbFswXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihpdGVtID09PSBkYXRhLmVsWzBdKSB7XG5cdFx0XHRcdFx0bWZwLmluZGV4ID0gaTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZnAuaXRlbXMgPSAkLmlzQXJyYXkoZGF0YS5pdGVtcykgPyBkYXRhLml0ZW1zIDogW2RhdGEuaXRlbXNdO1xuXHRcdFx0bWZwLmluZGV4ID0gZGF0YS5pbmRleCB8fCAwO1xuXHRcdH1cblxuXHRcdC8vIGlmIHBvcHVwIGlzIGFscmVhZHkgb3BlbmVkIC0gd2UganVzdCB1cGRhdGUgdGhlIGNvbnRlbnRcblx0XHRpZihtZnAuaXNPcGVuKSB7XG5cdFx0XHRtZnAudXBkYXRlSXRlbUhUTUwoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0bWZwLnR5cGVzID0gW107IFxuXHRcdF93cmFwQ2xhc3NlcyA9ICcnO1xuXHRcdGlmKGRhdGEubWFpbkVsICYmIGRhdGEubWFpbkVsLmxlbmd0aCkge1xuXHRcdFx0bWZwLmV2ID0gZGF0YS5tYWluRWwuZXEoMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC5ldiA9IF9kb2N1bWVudDtcblx0XHR9XG5cblx0XHRpZihkYXRhLmtleSkge1xuXHRcdFx0aWYoIW1mcC5wb3B1cHNDYWNoZVtkYXRhLmtleV0pIHtcblx0XHRcdFx0bWZwLnBvcHVwc0NhY2hlW2RhdGEua2V5XSA9IHt9O1xuXHRcdFx0fVxuXHRcdFx0bWZwLmN1cnJUZW1wbGF0ZSA9IG1mcC5wb3B1cHNDYWNoZVtkYXRhLmtleV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC5jdXJyVGVtcGxhdGUgPSB7fTtcblx0XHR9XG5cblxuXG5cdFx0bWZwLnN0ID0gJC5leHRlbmQodHJ1ZSwge30sICQubWFnbmlmaWNQb3B1cC5kZWZhdWx0cywgZGF0YSApOyBcblx0XHRtZnAuZml4ZWRDb250ZW50UG9zID0gbWZwLnN0LmZpeGVkQ29udGVudFBvcyA9PT0gJ2F1dG8nID8gIW1mcC5wcm9iYWJseU1vYmlsZSA6IG1mcC5zdC5maXhlZENvbnRlbnRQb3M7XG5cblx0XHRpZihtZnAuc3QubW9kYWwpIHtcblx0XHRcdG1mcC5zdC5jbG9zZU9uQ29udGVudENsaWNrID0gZmFsc2U7XG5cdFx0XHRtZnAuc3QuY2xvc2VPbkJnQ2xpY2sgPSBmYWxzZTtcblx0XHRcdG1mcC5zdC5zaG93Q2xvc2VCdG4gPSBmYWxzZTtcblx0XHRcdG1mcC5zdC5lbmFibGVFc2NhcGVLZXkgPSBmYWxzZTtcblx0XHR9XG5cdFx0XG5cblx0XHQvLyBCdWlsZGluZyBtYXJrdXBcblx0XHQvLyBtYWluIGNvbnRhaW5lcnMgYXJlIGNyZWF0ZWQgb25seSBvbmNlXG5cdFx0aWYoIW1mcC5iZ092ZXJsYXkpIHtcblxuXHRcdFx0Ly8gRGFyayBvdmVybGF5XG5cdFx0XHRtZnAuYmdPdmVybGF5ID0gX2dldEVsKCdiZycpLm9uKCdjbGljaycrRVZFTlRfTlMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRtZnAuY2xvc2UoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRtZnAud3JhcCA9IF9nZXRFbCgnd3JhcCcpLmF0dHIoJ3RhYmluZGV4JywgLTEpLm9uKCdjbGljaycrRVZFTlRfTlMsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYobWZwLl9jaGVja0lmQ2xvc2UoZS50YXJnZXQpKSB7XG5cdFx0XHRcdFx0bWZwLmNsb3NlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRtZnAuY29udGFpbmVyID0gX2dldEVsKCdjb250YWluZXInLCBtZnAud3JhcCk7XG5cdFx0fVxuXG5cdFx0bWZwLmNvbnRlbnRDb250YWluZXIgPSBfZ2V0RWwoJ2NvbnRlbnQnKTtcblx0XHRpZihtZnAuc3QucHJlbG9hZGVyKSB7XG5cdFx0XHRtZnAucHJlbG9hZGVyID0gX2dldEVsKCdwcmVsb2FkZXInLCBtZnAuY29udGFpbmVyLCBtZnAuc3QudExvYWRpbmcpO1xuXHRcdH1cblxuXG5cdFx0Ly8gSW5pdGlhbGl6aW5nIG1vZHVsZXNcblx0XHR2YXIgbW9kdWxlcyA9ICQubWFnbmlmaWNQb3B1cC5tb2R1bGVzO1xuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBuID0gbW9kdWxlc1tpXTtcblx0XHRcdG4gPSBuLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbi5zbGljZSgxKTtcblx0XHRcdG1mcFsnaW5pdCcrbl0uY2FsbChtZnApO1xuXHRcdH1cblx0XHRfbWZwVHJpZ2dlcignQmVmb3JlT3BlbicpO1xuXG5cblx0XHRpZihtZnAuc3Quc2hvd0Nsb3NlQnRuKSB7XG5cdFx0XHQvLyBDbG9zZSBidXR0b25cblx0XHRcdGlmKCFtZnAuc3QuY2xvc2VCdG5JbnNpZGUpIHtcblx0XHRcdFx0bWZwLndyYXAuYXBwZW5kKCBfZ2V0Q2xvc2VCdG4oKSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X21mcE9uKE1BUktVUF9QQVJTRV9FVkVOVCwgZnVuY3Rpb24oZSwgdGVtcGxhdGUsIHZhbHVlcywgaXRlbSkge1xuXHRcdFx0XHRcdHZhbHVlcy5jbG9zZV9yZXBsYWNlV2l0aCA9IF9nZXRDbG9zZUJ0bihpdGVtLnR5cGUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0X3dyYXBDbGFzc2VzICs9ICcgbWZwLWNsb3NlLWJ0bi1pbic7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYobWZwLnN0LmFsaWduVG9wKSB7XG5cdFx0XHRfd3JhcENsYXNzZXMgKz0gJyBtZnAtYWxpZ24tdG9wJztcblx0XHR9XG5cblx0XG5cblx0XHRpZihtZnAuZml4ZWRDb250ZW50UG9zKSB7XG5cdFx0XHRtZnAud3JhcC5jc3Moe1xuXHRcdFx0XHRvdmVyZmxvdzogbWZwLnN0Lm92ZXJmbG93WSxcblx0XHRcdFx0b3ZlcmZsb3dYOiAnaGlkZGVuJyxcblx0XHRcdFx0b3ZlcmZsb3dZOiBtZnAuc3Qub3ZlcmZsb3dZXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLndyYXAuY3NzKHsgXG5cdFx0XHRcdHRvcDogX3dpbmRvdy5zY3JvbGxUb3AoKSxcblx0XHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZSdcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiggbWZwLnN0LmZpeGVkQmdQb3MgPT09IGZhbHNlIHx8IChtZnAuc3QuZml4ZWRCZ1BvcyA9PT0gJ2F1dG8nICYmICFtZnAuZml4ZWRDb250ZW50UG9zKSApIHtcblx0XHRcdG1mcC5iZ092ZXJsYXkuY3NzKHtcblx0XHRcdFx0aGVpZ2h0OiBfZG9jdW1lbnQuaGVpZ2h0KCksXG5cdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRcblxuXHRcdGlmKG1mcC5zdC5lbmFibGVFc2NhcGVLZXkpIHtcblx0XHRcdC8vIENsb3NlIG9uIEVTQyBrZXlcblx0XHRcdF9kb2N1bWVudC5vbigna2V5dXAnICsgRVZFTlRfTlMsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYoZS5rZXlDb2RlID09PSAyNykge1xuXHRcdFx0XHRcdG1mcC5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRfd2luZG93Lm9uKCdyZXNpemUnICsgRVZFTlRfTlMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bWZwLnVwZGF0ZVNpemUoKTtcblx0XHR9KTtcblxuXG5cdFx0aWYoIW1mcC5zdC5jbG9zZU9uQ29udGVudENsaWNrKSB7XG5cdFx0XHRfd3JhcENsYXNzZXMgKz0gJyBtZnAtYXV0by1jdXJzb3InO1xuXHRcdH1cblx0XHRcblx0XHRpZihfd3JhcENsYXNzZXMpXG5cdFx0XHRtZnAud3JhcC5hZGRDbGFzcyhfd3JhcENsYXNzZXMpO1xuXG5cblx0XHQvLyB0aGlzIHRyaWdnZXJzIHJlY2FsY3VsYXRpb24gb2YgbGF5b3V0LCBzbyB3ZSBnZXQgaXQgb25jZSB0byBub3QgdG8gdHJpZ2dlciB0d2ljZVxuXHRcdHZhciB3aW5kb3dIZWlnaHQgPSBtZnAud0ggPSBfd2luZG93LmhlaWdodCgpO1xuXG5cdFx0XG5cdFx0dmFyIHdpbmRvd1N0eWxlcyA9IHt9O1xuXG5cdFx0aWYoIG1mcC5maXhlZENvbnRlbnRQb3MgKSB7XG4gICAgICAgICAgICBpZihtZnAuX2hhc1Njcm9sbEJhcih3aW5kb3dIZWlnaHQpKXtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IG1mcC5fZ2V0U2Nyb2xsYmFyU2l6ZSgpO1xuICAgICAgICAgICAgICAgIGlmKHMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93U3R5bGVzLm1hcmdpblJpZ2h0ID0gcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdGlmKG1mcC5maXhlZENvbnRlbnRQb3MpIHtcblx0XHRcdGlmKCFtZnAuaXNJRTcpIHtcblx0XHRcdFx0d2luZG93U3R5bGVzLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpZTcgZG91YmxlLXNjcm9sbCBidWdcblx0XHRcdFx0JCgnYm9keSwgaHRtbCcpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0XG5cdFx0XG5cdFx0dmFyIGNsYXNzZXNUb2FkZCA9IG1mcC5zdC5tYWluQ2xhc3M7XG5cdFx0aWYobWZwLmlzSUU3KSB7XG5cdFx0XHRjbGFzc2VzVG9hZGQgKz0gJyBtZnAtaWU3Jztcblx0XHR9XG5cdFx0aWYoY2xhc3Nlc1RvYWRkKSB7XG5cdFx0XHRtZnAuX2FkZENsYXNzVG9NRlAoIGNsYXNzZXNUb2FkZCApO1xuXHRcdH1cblxuXHRcdC8vIGFkZCBjb250ZW50XG5cdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XG5cblx0XHRfbWZwVHJpZ2dlcignQnVpbGRDb250cm9scycpO1xuXG5cdFx0Ly8gcmVtb3ZlIHNjcm9sbGJhciwgYWRkIG1hcmdpbiBlLnQuY1xuXHRcdCQoJ2h0bWwnKS5jc3Mod2luZG93U3R5bGVzKTtcblx0XHRcblx0XHQvLyBhZGQgZXZlcnl0aGluZyB0byBET01cblx0XHRtZnAuYmdPdmVybGF5LmFkZChtZnAud3JhcCkucHJlcGVuZFRvKCBtZnAuc3QucHJlcGVuZFRvIHx8ICQoZG9jdW1lbnQuYm9keSkgKTtcblxuXHRcdC8vIFNhdmUgbGFzdCBmb2N1c2VkIGVsZW1lbnRcblx0XHRtZnAuX2xhc3RGb2N1c2VkRWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHRcdFxuXHRcdC8vIFdhaXQgZm9yIG5leHQgY3ljbGUgdG8gYWxsb3cgQ1NTIHRyYW5zaXRpb25cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XG5cdFx0XHRpZihtZnAuY29udGVudCkge1xuXHRcdFx0XHRtZnAuX2FkZENsYXNzVG9NRlAoUkVBRFlfQ0xBU1MpO1xuXHRcdFx0XHRtZnAuX3NldEZvY3VzKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpZiBjb250ZW50IGlzIG5vdCBkZWZpbmVkIChub3QgbG9hZGVkIGUudC5jKSB3ZSBhZGQgY2xhc3Mgb25seSBmb3IgQkdcblx0XHRcdFx0bWZwLmJnT3ZlcmxheS5hZGRDbGFzcyhSRUFEWV9DTEFTUyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIFRyYXAgdGhlIGZvY3VzIGluIHBvcHVwXG5cdFx0XHRfZG9jdW1lbnQub24oJ2ZvY3VzaW4nICsgRVZFTlRfTlMsIG1mcC5fb25Gb2N1c0luKTtcblxuXHRcdH0sIDE2KTtcblxuXHRcdG1mcC5pc09wZW4gPSB0cnVlO1xuXHRcdG1mcC51cGRhdGVTaXplKHdpbmRvd0hlaWdodCk7XG5cdFx0X21mcFRyaWdnZXIoT1BFTl9FVkVOVCk7XG5cblx0XHRyZXR1cm4gZGF0YTtcblx0fSxcblxuXHQvKipcblx0ICogQ2xvc2VzIHRoZSBwb3B1cFxuXHQgKi9cblx0Y2xvc2U6IGZ1bmN0aW9uKCkge1xuXHRcdGlmKCFtZnAuaXNPcGVuKSByZXR1cm47XG5cdFx0X21mcFRyaWdnZXIoQkVGT1JFX0NMT1NFX0VWRU5UKTtcblxuXHRcdG1mcC5pc09wZW4gPSBmYWxzZTtcblx0XHQvLyBmb3IgQ1NTMyBhbmltYXRpb25cblx0XHRpZihtZnAuc3QucmVtb3ZhbERlbGF5ICYmICFtZnAuaXNMb3dJRSAmJiBtZnAuc3VwcG9ydHNUcmFuc2l0aW9uICkgIHtcblx0XHRcdG1mcC5fYWRkQ2xhc3NUb01GUChSRU1PVklOR19DTEFTUyk7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRtZnAuX2Nsb3NlKCk7XG5cdFx0XHR9LCBtZnAuc3QucmVtb3ZhbERlbGF5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLl9jbG9zZSgpO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogSGVscGVyIGZvciBjbG9zZSgpIGZ1bmN0aW9uXG5cdCAqL1xuXHRfY2xvc2U6IGZ1bmN0aW9uKCkge1xuXHRcdF9tZnBUcmlnZ2VyKENMT1NFX0VWRU5UKTtcblxuXHRcdHZhciBjbGFzc2VzVG9SZW1vdmUgPSBSRU1PVklOR19DTEFTUyArICcgJyArIFJFQURZX0NMQVNTICsgJyAnO1xuXG5cdFx0bWZwLmJnT3ZlcmxheS5kZXRhY2goKTtcblx0XHRtZnAud3JhcC5kZXRhY2goKTtcblx0XHRtZnAuY29udGFpbmVyLmVtcHR5KCk7XG5cblx0XHRpZihtZnAuc3QubWFpbkNsYXNzKSB7XG5cdFx0XHRjbGFzc2VzVG9SZW1vdmUgKz0gbWZwLnN0Lm1haW5DbGFzcyArICcgJztcblx0XHR9XG5cblx0XHRtZnAuX3JlbW92ZUNsYXNzRnJvbU1GUChjbGFzc2VzVG9SZW1vdmUpO1xuXG5cdFx0aWYobWZwLmZpeGVkQ29udGVudFBvcykge1xuXHRcdFx0dmFyIHdpbmRvd1N0eWxlcyA9IHttYXJnaW5SaWdodDogJyd9O1xuXHRcdFx0aWYobWZwLmlzSUU3KSB7XG5cdFx0XHRcdCQoJ2JvZHksIGh0bWwnKS5jc3MoJ292ZXJmbG93JywgJycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93U3R5bGVzLm92ZXJmbG93ID0gJyc7XG5cdFx0XHR9XG5cdFx0XHQkKCdodG1sJykuY3NzKHdpbmRvd1N0eWxlcyk7XG5cdFx0fVxuXHRcdFxuXHRcdF9kb2N1bWVudC5vZmYoJ2tleXVwJyArIEVWRU5UX05TICsgJyBmb2N1c2luJyArIEVWRU5UX05TKTtcblx0XHRtZnAuZXYub2ZmKEVWRU5UX05TKTtcblxuXHRcdC8vIGNsZWFuIHVwIERPTSBlbGVtZW50cyB0aGF0IGFyZW4ndCByZW1vdmVkXG5cdFx0bWZwLndyYXAuYXR0cignY2xhc3MnLCAnbWZwLXdyYXAnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXHRcdG1mcC5iZ092ZXJsYXkuYXR0cignY2xhc3MnLCAnbWZwLWJnJyk7XG5cdFx0bWZwLmNvbnRhaW5lci5hdHRyKCdjbGFzcycsICdtZnAtY29udGFpbmVyJyk7XG5cblx0XHQvLyByZW1vdmUgY2xvc2UgYnV0dG9uIGZyb20gdGFyZ2V0IGVsZW1lbnRcblx0XHRpZihtZnAuc3Quc2hvd0Nsb3NlQnRuICYmXG5cdFx0KCFtZnAuc3QuY2xvc2VCdG5JbnNpZGUgfHwgbWZwLmN1cnJUZW1wbGF0ZVttZnAuY3Vyckl0ZW0udHlwZV0gPT09IHRydWUpKSB7XG5cdFx0XHRpZihtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuKVxuXHRcdFx0XHRtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuLmRldGFjaCgpO1xuXHRcdH1cblxuXG5cdFx0aWYobWZwLnN0LmF1dG9Gb2N1c0xhc3QgJiYgbWZwLl9sYXN0Rm9jdXNlZEVsKSB7XG5cdFx0XHQkKG1mcC5fbGFzdEZvY3VzZWRFbCkuZm9jdXMoKTsgLy8gcHV0IHRhYiBmb2N1cyBiYWNrXG5cdFx0fVxuXHRcdG1mcC5jdXJySXRlbSA9IG51bGw7XHRcblx0XHRtZnAuY29udGVudCA9IG51bGw7XG5cdFx0bWZwLmN1cnJUZW1wbGF0ZSA9IG51bGw7XG5cdFx0bWZwLnByZXZIZWlnaHQgPSAwO1xuXG5cdFx0X21mcFRyaWdnZXIoQUZURVJfQ0xPU0VfRVZFTlQpO1xuXHR9LFxuXHRcblx0dXBkYXRlU2l6ZTogZnVuY3Rpb24od2luSGVpZ2h0KSB7XG5cblx0XHRpZihtZnAuaXNJT1MpIHtcblx0XHRcdC8vIGZpeGVzIGlPUyBuYXYgYmFycyBodHRwczovL2dpdGh1Yi5jb20vZGltc2VtZW5vdi9NYWduaWZpYy1Qb3B1cC9pc3N1ZXMvMlxuXHRcdFx0dmFyIHpvb21MZXZlbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdFx0dmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIHpvb21MZXZlbDtcblx0XHRcdG1mcC53cmFwLmNzcygnaGVpZ2h0JywgaGVpZ2h0KTtcblx0XHRcdG1mcC53SCA9IGhlaWdodDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLndIID0gd2luSGVpZ2h0IHx8IF93aW5kb3cuaGVpZ2h0KCk7XG5cdFx0fVxuXHRcdC8vIEZpeGVzICM4NDogcG9wdXAgaW5jb3JyZWN0bHkgcG9zaXRpb25lZCB3aXRoIHBvc2l0aW9uOnJlbGF0aXZlIG9uIGJvZHlcblx0XHRpZighbWZwLmZpeGVkQ29udGVudFBvcykge1xuXHRcdFx0bWZwLndyYXAuY3NzKCdoZWlnaHQnLCBtZnAud0gpO1xuXHRcdH1cblxuXHRcdF9tZnBUcmlnZ2VyKCdSZXNpemUnKTtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiBTZXQgY29udGVudCBvZiBwb3B1cCBiYXNlZCBvbiBjdXJyZW50IGluZGV4XG5cdCAqL1xuXHR1cGRhdGVJdGVtSFRNTDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGl0ZW0gPSBtZnAuaXRlbXNbbWZwLmluZGV4XTtcblxuXHRcdC8vIERldGFjaCBhbmQgcGVyZm9ybSBtb2RpZmljYXRpb25zXG5cdFx0bWZwLmNvbnRlbnRDb250YWluZXIuZGV0YWNoKCk7XG5cblx0XHRpZihtZnAuY29udGVudClcblx0XHRcdG1mcC5jb250ZW50LmRldGFjaCgpO1xuXG5cdFx0aWYoIWl0ZW0ucGFyc2VkKSB7XG5cdFx0XHRpdGVtID0gbWZwLnBhcnNlRWwoIG1mcC5pbmRleCApO1xuXHRcdH1cblxuXHRcdHZhciB0eXBlID0gaXRlbS50eXBlO1xuXG5cdFx0X21mcFRyaWdnZXIoJ0JlZm9yZUNoYW5nZScsIFttZnAuY3Vyckl0ZW0gPyBtZnAuY3Vyckl0ZW0udHlwZSA6ICcnLCB0eXBlXSk7XG5cdFx0Ly8gQmVmb3JlQ2hhbmdlIGV2ZW50IHdvcmtzIGxpa2Ugc286XG5cdFx0Ly8gX21mcE9uKCdCZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbihlLCBwcmV2VHlwZSwgbmV3VHlwZSkgeyB9KTtcblxuXHRcdG1mcC5jdXJySXRlbSA9IGl0ZW07XG5cblx0XHRpZighbWZwLmN1cnJUZW1wbGF0ZVt0eXBlXSkge1xuXHRcdFx0dmFyIG1hcmt1cCA9IG1mcC5zdFt0eXBlXSA/IG1mcC5zdFt0eXBlXS5tYXJrdXAgOiBmYWxzZTtcblxuXHRcdFx0Ly8gYWxsb3dzIHRvIG1vZGlmeSBtYXJrdXBcblx0XHRcdF9tZnBUcmlnZ2VyKCdGaXJzdE1hcmt1cFBhcnNlJywgbWFya3VwKTtcblxuXHRcdFx0aWYobWFya3VwKSB7XG5cdFx0XHRcdG1mcC5jdXJyVGVtcGxhdGVbdHlwZV0gPSAkKG1hcmt1cCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBtYXJrdXAgZm91bmQgd2UganVzdCBkZWZpbmUgdGhhdCB0ZW1wbGF0ZSBpcyBwYXJzZWRcblx0XHRcdFx0bWZwLmN1cnJUZW1wbGF0ZVt0eXBlXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoX3ByZXZDb250ZW50VHlwZSAmJiBfcHJldkNvbnRlbnRUeXBlICE9PSBpdGVtLnR5cGUpIHtcblx0XHRcdG1mcC5jb250YWluZXIucmVtb3ZlQ2xhc3MoJ21mcC0nK19wcmV2Q29udGVudFR5cGUrJy1ob2xkZXInKTtcblx0XHR9XG5cblx0XHR2YXIgbmV3Q29udGVudCA9IG1mcFsnZ2V0JyArIHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpXShpdGVtLCBtZnAuY3VyclRlbXBsYXRlW3R5cGVdKTtcblx0XHRtZnAuYXBwZW5kQ29udGVudChuZXdDb250ZW50LCB0eXBlKTtcblxuXHRcdGl0ZW0ucHJlbG9hZGVkID0gdHJ1ZTtcblxuXHRcdF9tZnBUcmlnZ2VyKENIQU5HRV9FVkVOVCwgaXRlbSk7XG5cdFx0X3ByZXZDb250ZW50VHlwZSA9IGl0ZW0udHlwZTtcblxuXHRcdC8vIEFwcGVuZCBjb250YWluZXIgYmFjayBhZnRlciBpdHMgY29udGVudCBjaGFuZ2VkXG5cdFx0bWZwLmNvbnRhaW5lci5wcmVwZW5kKG1mcC5jb250ZW50Q29udGFpbmVyKTtcblxuXHRcdF9tZnBUcmlnZ2VyKCdBZnRlckNoYW5nZScpO1xuXHR9LFxuXG5cblx0LyoqXG5cdCAqIFNldCBIVE1MIGNvbnRlbnQgb2YgcG9wdXBcblx0ICovXG5cdGFwcGVuZENvbnRlbnQ6IGZ1bmN0aW9uKG5ld0NvbnRlbnQsIHR5cGUpIHtcblx0XHRtZnAuY29udGVudCA9IG5ld0NvbnRlbnQ7XG5cblx0XHRpZihuZXdDb250ZW50KSB7XG5cdFx0XHRpZihtZnAuc3Quc2hvd0Nsb3NlQnRuICYmIG1mcC5zdC5jbG9zZUJ0bkluc2lkZSAmJlxuXHRcdFx0XHRtZnAuY3VyclRlbXBsYXRlW3R5cGVdID09PSB0cnVlKSB7XG5cdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIG1hcmt1cCwgd2UganVzdCBhcHBlbmQgY2xvc2UgYnV0dG9uIGVsZW1lbnQgaW5zaWRlXG5cdFx0XHRcdGlmKCFtZnAuY29udGVudC5maW5kKCcubWZwLWNsb3NlJykubGVuZ3RoKSB7XG5cdFx0XHRcdFx0bWZwLmNvbnRlbnQuYXBwZW5kKF9nZXRDbG9zZUJ0bigpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWZwLmNvbnRlbnQgPSBuZXdDb250ZW50O1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZnAuY29udGVudCA9ICcnO1xuXHRcdH1cblxuXHRcdF9tZnBUcmlnZ2VyKEJFRk9SRV9BUFBFTkRfRVZFTlQpO1xuXHRcdG1mcC5jb250YWluZXIuYWRkQ2xhc3MoJ21mcC0nK3R5cGUrJy1ob2xkZXInKTtcblxuXHRcdG1mcC5jb250ZW50Q29udGFpbmVyLmFwcGVuZChtZnAuY29udGVudCk7XG5cdH0sXG5cblxuXHQvKipcblx0ICogQ3JlYXRlcyBNYWduaWZpYyBQb3B1cCBkYXRhIG9iamVjdCBiYXNlZCBvbiBnaXZlbiBkYXRhXG5cdCAqIEBwYXJhbSAge2ludH0gaW5kZXggSW5kZXggb2YgaXRlbSB0byBwYXJzZVxuXHQgKi9cblx0cGFyc2VFbDogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHR2YXIgaXRlbSA9IG1mcC5pdGVtc1tpbmRleF0sXG5cdFx0XHR0eXBlO1xuXG5cdFx0aWYoaXRlbS50YWdOYW1lKSB7XG5cdFx0XHRpdGVtID0geyBlbDogJChpdGVtKSB9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0eXBlID0gaXRlbS50eXBlO1xuXHRcdFx0aXRlbSA9IHsgZGF0YTogaXRlbSwgc3JjOiBpdGVtLnNyYyB9O1xuXHRcdH1cblxuXHRcdGlmKGl0ZW0uZWwpIHtcblx0XHRcdHZhciB0eXBlcyA9IG1mcC50eXBlcztcblxuXHRcdFx0Ly8gY2hlY2sgZm9yICdtZnAtVFlQRScgY2xhc3Ncblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0eXBlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiggaXRlbS5lbC5oYXNDbGFzcygnbWZwLScrdHlwZXNbaV0pICkge1xuXHRcdFx0XHRcdHR5cGUgPSB0eXBlc1tpXTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpdGVtLnNyYyA9IGl0ZW0uZWwuYXR0cignZGF0YS1tZnAtc3JjJyk7XG5cdFx0XHRpZighaXRlbS5zcmMpIHtcblx0XHRcdFx0aXRlbS5zcmMgPSBpdGVtLmVsLmF0dHIoJ2hyZWYnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpdGVtLnR5cGUgPSB0eXBlIHx8IG1mcC5zdC50eXBlIHx8ICdpbmxpbmUnO1xuXHRcdGl0ZW0uaW5kZXggPSBpbmRleDtcblx0XHRpdGVtLnBhcnNlZCA9IHRydWU7XG5cdFx0bWZwLml0ZW1zW2luZGV4XSA9IGl0ZW07XG5cdFx0X21mcFRyaWdnZXIoJ0VsZW1lbnRQYXJzZScsIGl0ZW0pO1xuXG5cdFx0cmV0dXJuIG1mcC5pdGVtc1tpbmRleF07XG5cdH0sXG5cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgc2luZ2xlIHBvcHVwIG9yIGEgZ3JvdXAgb2YgcG9wdXBzXG5cdCAqL1xuXHRhZGRHcm91cDogZnVuY3Rpb24oZWwsIG9wdGlvbnMpIHtcblx0XHR2YXIgZUhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLm1mcEVsID0gdGhpcztcblx0XHRcdG1mcC5fb3BlbkNsaWNrKGUsIGVsLCBvcHRpb25zKTtcblx0XHR9O1xuXG5cdFx0aWYoIW9wdGlvbnMpIHtcblx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHR9XG5cblx0XHR2YXIgZU5hbWUgPSAnY2xpY2subWFnbmlmaWNQb3B1cCc7XG5cdFx0b3B0aW9ucy5tYWluRWwgPSBlbDtcblxuXHRcdGlmKG9wdGlvbnMuaXRlbXMpIHtcblx0XHRcdG9wdGlvbnMuaXNPYmogPSB0cnVlO1xuXHRcdFx0ZWwub2ZmKGVOYW1lKS5vbihlTmFtZSwgZUhhbmRsZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvcHRpb25zLmlzT2JqID0gZmFsc2U7XG5cdFx0XHRpZihvcHRpb25zLmRlbGVnYXRlKSB7XG5cdFx0XHRcdGVsLm9mZihlTmFtZSkub24oZU5hbWUsIG9wdGlvbnMuZGVsZWdhdGUgLCBlSGFuZGxlcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvcHRpb25zLml0ZW1zID0gZWw7XG5cdFx0XHRcdGVsLm9mZihlTmFtZSkub24oZU5hbWUsIGVIYW5kbGVyKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9vcGVuQ2xpY2s6IGZ1bmN0aW9uKGUsIGVsLCBvcHRpb25zKSB7XG5cdFx0dmFyIG1pZENsaWNrID0gb3B0aW9ucy5taWRDbGljayAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5taWRDbGljayA6ICQubWFnbmlmaWNQb3B1cC5kZWZhdWx0cy5taWRDbGljaztcblxuXG5cdFx0aWYoIW1pZENsaWNrICYmICggZS53aGljaCA9PT0gMiB8fCBlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8IGUuYWx0S2V5IHx8IGUuc2hpZnRLZXkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgZGlzYWJsZU9uID0gb3B0aW9ucy5kaXNhYmxlT24gIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuZGlzYWJsZU9uIDogJC5tYWduaWZpY1BvcHVwLmRlZmF1bHRzLmRpc2FibGVPbjtcblxuXHRcdGlmKGRpc2FibGVPbikge1xuXHRcdFx0aWYoJC5pc0Z1bmN0aW9uKGRpc2FibGVPbikpIHtcblx0XHRcdFx0aWYoICFkaXNhYmxlT24uY2FsbChtZnApICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgeyAvLyBlbHNlIGl0J3MgbnVtYmVyXG5cdFx0XHRcdGlmKCBfd2luZG93LndpZHRoKCkgPCBkaXNhYmxlT24gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZihlLnR5cGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0Ly8gVGhpcyB3aWxsIHByZXZlbnQgcG9wdXAgZnJvbSBjbG9zaW5nIGlmIGVsZW1lbnQgaXMgaW5zaWRlIGFuZCBwb3B1cCBpcyBhbHJlYWR5IG9wZW5lZFxuXHRcdFx0aWYobWZwLmlzT3Blbikge1xuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG9wdGlvbnMuZWwgPSAkKGUubWZwRWwpO1xuXHRcdGlmKG9wdGlvbnMuZGVsZWdhdGUpIHtcblx0XHRcdG9wdGlvbnMuaXRlbXMgPSBlbC5maW5kKG9wdGlvbnMuZGVsZWdhdGUpO1xuXHRcdH1cblx0XHRtZnAub3BlbihvcHRpb25zKTtcblx0fSxcblxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRleHQgb24gcHJlbG9hZGVyXG5cdCAqL1xuXHR1cGRhdGVTdGF0dXM6IGZ1bmN0aW9uKHN0YXR1cywgdGV4dCkge1xuXG5cdFx0aWYobWZwLnByZWxvYWRlcikge1xuXHRcdFx0aWYoX3ByZXZTdGF0dXMgIT09IHN0YXR1cykge1xuXHRcdFx0XHRtZnAuY29udGFpbmVyLnJlbW92ZUNsYXNzKCdtZnAtcy0nK19wcmV2U3RhdHVzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIXRleHQgJiYgc3RhdHVzID09PSAnbG9hZGluZycpIHtcblx0XHRcdFx0dGV4dCA9IG1mcC5zdC50TG9hZGluZztcblx0XHRcdH1cblxuXHRcdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcdHN0YXR1czogc3RhdHVzLFxuXHRcdFx0XHR0ZXh0OiB0ZXh0XG5cdFx0XHR9O1xuXHRcdFx0Ly8gYWxsb3dzIHRvIG1vZGlmeSBzdGF0dXNcblx0XHRcdF9tZnBUcmlnZ2VyKCdVcGRhdGVTdGF0dXMnLCBkYXRhKTtcblxuXHRcdFx0c3RhdHVzID0gZGF0YS5zdGF0dXM7XG5cdFx0XHR0ZXh0ID0gZGF0YS50ZXh0O1xuXG5cdFx0XHRtZnAucHJlbG9hZGVyLmh0bWwodGV4dCk7XG5cblx0XHRcdG1mcC5wcmVsb2FkZXIuZmluZCgnYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRtZnAuY29udGFpbmVyLmFkZENsYXNzKCdtZnAtcy0nK3N0YXR1cyk7XG5cdFx0XHRfcHJldlN0YXR1cyA9IHN0YXR1cztcblx0XHR9XG5cdH0sXG5cblxuXHQvKlxuXHRcdFwiUHJpdmF0ZVwiIGhlbHBlcnMgdGhhdCBhcmVuJ3QgcHJpdmF0ZSBhdCBhbGxcblx0ICovXG5cdC8vIENoZWNrIHRvIGNsb3NlIHBvcHVwIG9yIG5vdFxuXHQvLyBcInRhcmdldFwiIGlzIGFuIGVsZW1lbnQgdGhhdCB3YXMgY2xpY2tlZFxuXHRfY2hlY2tJZkNsb3NlOiBmdW5jdGlvbih0YXJnZXQpIHtcblxuXHRcdGlmKCQodGFyZ2V0KS5oYXNDbGFzcyhQUkVWRU5UX0NMT1NFX0NMQVNTKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBjbG9zZU9uQ29udGVudCA9IG1mcC5zdC5jbG9zZU9uQ29udGVudENsaWNrO1xuXHRcdHZhciBjbG9zZU9uQmcgPSBtZnAuc3QuY2xvc2VPbkJnQ2xpY2s7XG5cblx0XHRpZihjbG9zZU9uQ29udGVudCAmJiBjbG9zZU9uQmcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIFdlIGNsb3NlIHRoZSBwb3B1cCBpZiBjbGljayBpcyBvbiBjbG9zZSBidXR0b24gb3Igb24gcHJlbG9hZGVyLiBPciBpZiB0aGVyZSBpcyBubyBjb250ZW50LlxuXHRcdFx0aWYoIW1mcC5jb250ZW50IHx8ICQodGFyZ2V0KS5oYXNDbGFzcygnbWZwLWNsb3NlJykgfHwgKG1mcC5wcmVsb2FkZXIgJiYgdGFyZ2V0ID09PSBtZnAucHJlbG9hZGVyWzBdKSApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGlmIGNsaWNrIGlzIG91dHNpZGUgdGhlIGNvbnRlbnRcblx0XHRcdGlmKCAgKHRhcmdldCAhPT0gbWZwLmNvbnRlbnRbMF0gJiYgISQuY29udGFpbnMobWZwLmNvbnRlbnRbMF0sIHRhcmdldCkpICApIHtcblx0XHRcdFx0aWYoY2xvc2VPbkJnKSB7XG5cdFx0XHRcdFx0Ly8gbGFzdCBjaGVjaywgaWYgdGhlIGNsaWNrZWQgZWxlbWVudCBpcyBpbiBET00sIChpbiBjYXNlIGl0J3MgcmVtb3ZlZCBvbmNsaWNrKVxuXHRcdFx0XHRcdGlmKCAkLmNvbnRhaW5zKGRvY3VtZW50LCB0YXJnZXQpICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoY2xvc2VPbkNvbnRlbnQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRfYWRkQ2xhc3NUb01GUDogZnVuY3Rpb24oY05hbWUpIHtcblx0XHRtZnAuYmdPdmVybGF5LmFkZENsYXNzKGNOYW1lKTtcblx0XHRtZnAud3JhcC5hZGRDbGFzcyhjTmFtZSk7XG5cdH0sXG5cdF9yZW1vdmVDbGFzc0Zyb21NRlA6IGZ1bmN0aW9uKGNOYW1lKSB7XG5cdFx0dGhpcy5iZ092ZXJsYXkucmVtb3ZlQ2xhc3MoY05hbWUpO1xuXHRcdG1mcC53cmFwLnJlbW92ZUNsYXNzKGNOYW1lKTtcblx0fSxcblx0X2hhc1Njcm9sbEJhcjogZnVuY3Rpb24od2luSGVpZ2h0KSB7XG5cdFx0cmV0dXJuICggIChtZnAuaXNJRTcgPyBfZG9jdW1lbnQuaGVpZ2h0KCkgOiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCkgPiAod2luSGVpZ2h0IHx8IF93aW5kb3cuaGVpZ2h0KCkpICk7XG5cdH0sXG5cdF9zZXRGb2N1czogZnVuY3Rpb24oKSB7XG5cdFx0KG1mcC5zdC5mb2N1cyA/IG1mcC5jb250ZW50LmZpbmQobWZwLnN0LmZvY3VzKS5lcSgwKSA6IG1mcC53cmFwKS5mb2N1cygpO1xuXHR9LFxuXHRfb25Gb2N1c0luOiBmdW5jdGlvbihlKSB7XG5cdFx0aWYoIGUudGFyZ2V0ICE9PSBtZnAud3JhcFswXSAmJiAhJC5jb250YWlucyhtZnAud3JhcFswXSwgZS50YXJnZXQpICkge1xuXHRcdFx0bWZwLl9zZXRGb2N1cygpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSxcblx0X3BhcnNlTWFya3VwOiBmdW5jdGlvbih0ZW1wbGF0ZSwgdmFsdWVzLCBpdGVtKSB7XG5cdFx0dmFyIGFycjtcblx0XHRpZihpdGVtLmRhdGEpIHtcblx0XHRcdHZhbHVlcyA9ICQuZXh0ZW5kKGl0ZW0uZGF0YSwgdmFsdWVzKTtcblx0XHR9XG5cdFx0X21mcFRyaWdnZXIoTUFSS1VQX1BBUlNFX0VWRU5ULCBbdGVtcGxhdGUsIHZhbHVlcywgaXRlbV0gKTtcblxuXHRcdCQuZWFjaCh2YWx1ZXMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0XHRcdGlmKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0YXJyID0ga2V5LnNwbGl0KCdfJyk7XG5cdFx0XHRpZihhcnIubGVuZ3RoID4gMSkge1xuXHRcdFx0XHR2YXIgZWwgPSB0ZW1wbGF0ZS5maW5kKEVWRU5UX05TICsgJy0nK2FyclswXSk7XG5cblx0XHRcdFx0aWYoZWwubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHZhciBhdHRyID0gYXJyWzFdO1xuXHRcdFx0XHRcdGlmKGF0dHIgPT09ICdyZXBsYWNlV2l0aCcpIHtcblx0XHRcdFx0XHRcdGlmKGVsWzBdICE9PSB2YWx1ZVswXSkge1xuXHRcdFx0XHRcdFx0XHRlbC5yZXBsYWNlV2l0aCh2YWx1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmKGF0dHIgPT09ICdpbWcnKSB7XG5cdFx0XHRcdFx0XHRpZihlbC5pcygnaW1nJykpIHtcblx0XHRcdFx0XHRcdFx0ZWwuYXR0cignc3JjJywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZWwucmVwbGFjZVdpdGgoICQoJzxpbWc+JykuYXR0cignc3JjJywgdmFsdWUpLmF0dHIoJ2NsYXNzJywgZWwuYXR0cignY2xhc3MnKSkgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZWwuYXR0cihhcnJbMV0sIHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGVtcGxhdGUuZmluZChFVkVOVF9OUyArICctJytrZXkpLmh0bWwodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXG5cdF9nZXRTY3JvbGxiYXJTaXplOiBmdW5jdGlvbigpIHtcblx0XHQvLyB0aHggRGF2aWRcblx0XHRpZihtZnAuc2Nyb2xsYmFyU2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdHNjcm9sbERpdi5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOiA5OXB4OyBoZWlnaHQ6IDk5cHg7IG92ZXJmbG93OiBzY3JvbGw7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtOTk5OXB4Oyc7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG5cdFx0XHRtZnAuc2Nyb2xsYmFyU2l6ZSA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcblx0XHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcblx0XHR9XG5cdFx0cmV0dXJuIG1mcC5zY3JvbGxiYXJTaXplO1xuXHR9XG5cbn07IC8qIE1hZ25pZmljUG9wdXAgY29yZSBwcm90b3R5cGUgZW5kICovXG5cblxuXG5cbi8qKlxuICogUHVibGljIHN0YXRpYyBmdW5jdGlvbnNcbiAqL1xuJC5tYWduaWZpY1BvcHVwID0ge1xuXHRpbnN0YW5jZTogbnVsbCxcblx0cHJvdG86IE1hZ25pZmljUG9wdXAucHJvdG90eXBlLFxuXHRtb2R1bGVzOiBbXSxcblxuXHRvcGVuOiBmdW5jdGlvbihvcHRpb25zLCBpbmRleCkge1xuXHRcdF9jaGVja0luc3RhbmNlKCk7XG5cblx0XHRpZighb3B0aW9ucykge1xuXHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdG9wdGlvbnMuaXNPYmogPSB0cnVlO1xuXHRcdG9wdGlvbnMuaW5kZXggPSBpbmRleCB8fCAwO1xuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlLm9wZW4ob3B0aW9ucyk7XG5cdH0sXG5cblx0Y2xvc2U6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAkLm1hZ25pZmljUG9wdXAuaW5zdGFuY2UgJiYgJC5tYWduaWZpY1BvcHVwLmluc3RhbmNlLmNsb3NlKCk7XG5cdH0sXG5cblx0cmVnaXN0ZXJNb2R1bGU6IGZ1bmN0aW9uKG5hbWUsIG1vZHVsZSkge1xuXHRcdGlmKG1vZHVsZS5vcHRpb25zKSB7XG5cdFx0XHQkLm1hZ25pZmljUG9wdXAuZGVmYXVsdHNbbmFtZV0gPSBtb2R1bGUub3B0aW9ucztcblx0XHR9XG5cdFx0JC5leHRlbmQodGhpcy5wcm90bywgbW9kdWxlLnByb3RvKTtcblx0XHR0aGlzLm1vZHVsZXMucHVzaChuYW1lKTtcblx0fSxcblxuXHRkZWZhdWx0czoge1xuXG5cdFx0Ly8gSW5mbyBhYm91dCBvcHRpb25zIGlzIGluIGRvY3M6XG5cdFx0Ly8gaHR0cDovL2RpbXNlbWVub3YuY29tL3BsdWdpbnMvbWFnbmlmaWMtcG9wdXAvZG9jdW1lbnRhdGlvbi5odG1sI29wdGlvbnNcblxuXHRcdGRpc2FibGVPbjogMCxcblxuXHRcdGtleTogbnVsbCxcblxuXHRcdG1pZENsaWNrOiBmYWxzZSxcblxuXHRcdG1haW5DbGFzczogJycsXG5cblx0XHRwcmVsb2FkZXI6IHRydWUsXG5cblx0XHRmb2N1czogJycsIC8vIENTUyBzZWxlY3RvciBvZiBpbnB1dCB0byBmb2N1cyBhZnRlciBwb3B1cCBpcyBvcGVuZWRcblxuXHRcdGNsb3NlT25Db250ZW50Q2xpY2s6IGZhbHNlLFxuXG5cdFx0Y2xvc2VPbkJnQ2xpY2s6IHRydWUsXG5cblx0XHRjbG9zZUJ0bkluc2lkZTogdHJ1ZSxcblxuXHRcdHNob3dDbG9zZUJ0bjogdHJ1ZSxcblxuXHRcdGVuYWJsZUVzY2FwZUtleTogdHJ1ZSxcblxuXHRcdG1vZGFsOiBmYWxzZSxcblxuXHRcdGFsaWduVG9wOiBmYWxzZSxcblxuXHRcdHJlbW92YWxEZWxheTogMCxcblxuXHRcdHByZXBlbmRUbzogbnVsbCxcblxuXHRcdGZpeGVkQ29udGVudFBvczogJ2F1dG8nLFxuXG5cdFx0Zml4ZWRCZ1BvczogJ2F1dG8nLFxuXG5cdFx0b3ZlcmZsb3dZOiAnYXV0bycsXG5cblx0XHRjbG9zZU1hcmt1cDogJzxidXR0b24gdGl0bGU9XCIldGl0bGUlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibWZwLWNsb3NlXCI+JiMyMTU7PC9idXR0b24+JyxcblxuXHRcdHRDbG9zZTogJ0Nsb3NlIChFc2MpJyxcblxuXHRcdHRMb2FkaW5nOiAnTG9hZGluZy4uLicsXG5cblx0XHRhdXRvRm9jdXNMYXN0OiB0cnVlXG5cblx0fVxufTtcblxuXG5cbiQuZm4ubWFnbmlmaWNQb3B1cCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0X2NoZWNrSW5zdGFuY2UoKTtcblxuXHR2YXIganFFbCA9ICQodGhpcyk7XG5cblx0Ly8gV2UgY2FsbCBzb21lIEFQSSBtZXRob2Qgb2YgZmlyc3QgcGFyYW0gaXMgYSBzdHJpbmdcblx0aWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiICkge1xuXG5cdFx0aWYob3B0aW9ucyA9PT0gJ29wZW4nKSB7XG5cdFx0XHR2YXIgaXRlbXMsXG5cdFx0XHRcdGl0ZW1PcHRzID0gX2lzSlEgPyBqcUVsLmRhdGEoJ21hZ25pZmljUG9wdXAnKSA6IGpxRWxbMF0ubWFnbmlmaWNQb3B1cCxcblx0XHRcdFx0aW5kZXggPSBwYXJzZUludChhcmd1bWVudHNbMV0sIDEwKSB8fCAwO1xuXG5cdFx0XHRpZihpdGVtT3B0cy5pdGVtcykge1xuXHRcdFx0XHRpdGVtcyA9IGl0ZW1PcHRzLml0ZW1zW2luZGV4XTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGl0ZW1zID0ganFFbDtcblx0XHRcdFx0aWYoaXRlbU9wdHMuZGVsZWdhdGUpIHtcblx0XHRcdFx0XHRpdGVtcyA9IGl0ZW1zLmZpbmQoaXRlbU9wdHMuZGVsZWdhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGl0ZW1zID0gaXRlbXMuZXEoIGluZGV4ICk7XG5cdFx0XHR9XG5cdFx0XHRtZnAuX29wZW5DbGljayh7bWZwRWw6aXRlbXN9LCBqcUVsLCBpdGVtT3B0cyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmKG1mcC5pc09wZW4pXG5cdFx0XHRcdG1mcFtvcHRpb25zXS5hcHBseShtZnAsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuXHRcdH1cblxuXHR9IGVsc2Uge1xuXHRcdC8vIGNsb25lIG9wdGlvbnMgb2JqXG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBvcHRpb25zKTtcblxuXHRcdC8qXG5cdFx0ICogQXMgWmVwdG8gZG9lc24ndCBzdXBwb3J0IC5kYXRhKCkgbWV0aG9kIGZvciBvYmplY3RzXG5cdFx0ICogYW5kIGl0IHdvcmtzIG9ubHkgaW4gbm9ybWFsIGJyb3dzZXJzXG5cdFx0ICogd2UgYXNzaWduIFwib3B0aW9uc1wiIG9iamVjdCBkaXJlY3RseSB0byB0aGUgRE9NIGVsZW1lbnQuIEZUVyFcblx0XHQgKi9cblx0XHRpZihfaXNKUSkge1xuXHRcdFx0anFFbC5kYXRhKCdtYWduaWZpY1BvcHVwJywgb3B0aW9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGpxRWxbMF0ubWFnbmlmaWNQb3B1cCA9IG9wdGlvbnM7XG5cdFx0fVxuXG5cdFx0bWZwLmFkZEdyb3VwKGpxRWwsIG9wdGlvbnMpO1xuXG5cdH1cblx0cmV0dXJuIGpxRWw7XG59O1xuXG4vKj4+Y29yZSovXG5cbi8qPj5pbmxpbmUqL1xuXG52YXIgSU5MSU5FX05TID0gJ2lubGluZScsXG5cdF9oaWRkZW5DbGFzcyxcblx0X2lubGluZVBsYWNlaG9sZGVyLFxuXHRfbGFzdElubGluZUVsZW1lbnQsXG5cdF9wdXRJbmxpbmVFbGVtZW50c0JhY2sgPSBmdW5jdGlvbigpIHtcblx0XHRpZihfbGFzdElubGluZUVsZW1lbnQpIHtcblx0XHRcdF9pbmxpbmVQbGFjZWhvbGRlci5hZnRlciggX2xhc3RJbmxpbmVFbGVtZW50LmFkZENsYXNzKF9oaWRkZW5DbGFzcykgKS5kZXRhY2goKTtcblx0XHRcdF9sYXN0SW5saW5lRWxlbWVudCA9IG51bGw7XG5cdFx0fVxuXHR9O1xuXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoSU5MSU5FX05TLCB7XG5cdG9wdGlvbnM6IHtcblx0XHRoaWRkZW5DbGFzczogJ2hpZGUnLCAvLyB3aWxsIGJlIGFwcGVuZGVkIHdpdGggYG1mcC1gIHByZWZpeFxuXHRcdG1hcmt1cDogJycsXG5cdFx0dE5vdEZvdW5kOiAnQ29udGVudCBub3QgZm91bmQnXG5cdH0sXG5cdHByb3RvOiB7XG5cblx0XHRpbml0SW5saW5lOiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC50eXBlcy5wdXNoKElOTElORV9OUyk7XG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCsnLicrSU5MSU5FX05TLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0X3B1dElubGluZUVsZW1lbnRzQmFjaygpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdGdldElubGluZTogZnVuY3Rpb24oaXRlbSwgdGVtcGxhdGUpIHtcblxuXHRcdFx0X3B1dElubGluZUVsZW1lbnRzQmFjaygpO1xuXG5cdFx0XHRpZihpdGVtLnNyYykge1xuXHRcdFx0XHR2YXIgaW5saW5lU3QgPSBtZnAuc3QuaW5saW5lLFxuXHRcdFx0XHRcdGVsID0gJChpdGVtLnNyYyk7XG5cblx0XHRcdFx0aWYoZWwubGVuZ3RoKSB7XG5cblx0XHRcdFx0XHQvLyBJZiB0YXJnZXQgZWxlbWVudCBoYXMgcGFyZW50IC0gd2UgcmVwbGFjZSBpdCB3aXRoIHBsYWNlaG9sZGVyIGFuZCBwdXQgaXQgYmFjayBhZnRlciBwb3B1cCBpcyBjbG9zZWRcblx0XHRcdFx0XHR2YXIgcGFyZW50ID0gZWxbMF0ucGFyZW50Tm9kZTtcblx0XHRcdFx0XHRpZihwYXJlbnQgJiYgcGFyZW50LnRhZ05hbWUpIHtcblx0XHRcdFx0XHRcdGlmKCFfaW5saW5lUGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0XHRcdFx0X2hpZGRlbkNsYXNzID0gaW5saW5lU3QuaGlkZGVuQ2xhc3M7XG5cdFx0XHRcdFx0XHRcdF9pbmxpbmVQbGFjZWhvbGRlciA9IF9nZXRFbChfaGlkZGVuQ2xhc3MpO1xuXHRcdFx0XHRcdFx0XHRfaGlkZGVuQ2xhc3MgPSAnbWZwLScrX2hpZGRlbkNsYXNzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gcmVwbGFjZSB0YXJnZXQgaW5saW5lIGVsZW1lbnQgd2l0aCBwbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0X2xhc3RJbmxpbmVFbGVtZW50ID0gZWwuYWZ0ZXIoX2lubGluZVBsYWNlaG9sZGVyKS5kZXRhY2goKS5yZW1vdmVDbGFzcyhfaGlkZGVuQ2xhc3MpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnZXJyb3InLCBpbmxpbmVTdC50Tm90Rm91bmQpO1xuXHRcdFx0XHRcdGVsID0gJCgnPGRpdj4nKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGl0ZW0uaW5saW5lRWxlbWVudCA9IGVsO1xuXHRcdFx0XHRyZXR1cm4gZWw7XG5cdFx0XHR9XG5cblx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cdFx0XHRtZnAuX3BhcnNlTWFya3VwKHRlbXBsYXRlLCB7fSwgaXRlbSk7XG5cdFx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdFx0fVxuXHR9XG59KTtcblxuLyo+PmlubGluZSovXG5cbi8qPj5hamF4Ki9cbnZhciBBSkFYX05TID0gJ2FqYXgnLFxuXHRfYWpheEN1cixcblx0X3JlbW92ZUFqYXhDdXJzb3IgPSBmdW5jdGlvbigpIHtcblx0XHRpZihfYWpheEN1cikge1xuXHRcdFx0JChkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcyhfYWpheEN1cik7XG5cdFx0fVxuXHR9LFxuXHRfZGVzdHJveUFqYXhSZXF1ZXN0ID0gZnVuY3Rpb24oKSB7XG5cdFx0X3JlbW92ZUFqYXhDdXJzb3IoKTtcblx0XHRpZihtZnAucmVxKSB7XG5cdFx0XHRtZnAucmVxLmFib3J0KCk7XG5cdFx0fVxuXHR9O1xuXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoQUpBWF9OUywge1xuXG5cdG9wdGlvbnM6IHtcblx0XHRzZXR0aW5nczogbnVsbCxcblx0XHRjdXJzb3I6ICdtZnAtYWpheC1jdXInLFxuXHRcdHRFcnJvcjogJzxhIGhyZWY9XCIldXJsJVwiPlRoZSBjb250ZW50PC9hPiBjb3VsZCBub3QgYmUgbG9hZGVkLidcblx0fSxcblxuXHRwcm90bzoge1xuXHRcdGluaXRBamF4OiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC50eXBlcy5wdXNoKEFKQVhfTlMpO1xuXHRcdFx0X2FqYXhDdXIgPSBtZnAuc3QuYWpheC5jdXJzb3I7XG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCsnLicrQUpBWF9OUywgX2Rlc3Ryb3lBamF4UmVxdWVzdCk7XG5cdFx0XHRfbWZwT24oJ0JlZm9yZUNoYW5nZS4nICsgQUpBWF9OUywgX2Rlc3Ryb3lBamF4UmVxdWVzdCk7XG5cdFx0fSxcblx0XHRnZXRBamF4OiBmdW5jdGlvbihpdGVtKSB7XG5cblx0XHRcdGlmKF9hamF4Q3VyKSB7XG5cdFx0XHRcdCQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoX2FqYXhDdXIpO1xuXHRcdFx0fVxuXG5cdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdsb2FkaW5nJyk7XG5cblx0XHRcdHZhciBvcHRzID0gJC5leHRlbmQoe1xuXHRcdFx0XHR1cmw6IGl0ZW0uc3JjLFxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xuXHRcdFx0XHRcdHZhciB0ZW1wID0ge1xuXHRcdFx0XHRcdFx0ZGF0YTpkYXRhLFxuXHRcdFx0XHRcdFx0eGhyOmpxWEhSXG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdF9tZnBUcmlnZ2VyKCdQYXJzZUFqYXgnLCB0ZW1wKTtcblxuXHRcdFx0XHRcdG1mcC5hcHBlbmRDb250ZW50KCAkKHRlbXAuZGF0YSksIEFKQVhfTlMgKTtcblxuXHRcdFx0XHRcdGl0ZW0uZmluaXNoZWQgPSB0cnVlO1xuXG5cdFx0XHRcdFx0X3JlbW92ZUFqYXhDdXJzb3IoKTtcblxuXHRcdFx0XHRcdG1mcC5fc2V0Rm9jdXMoKTtcblxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRtZnAud3JhcC5hZGRDbGFzcyhSRUFEWV9DTEFTUyk7XG5cdFx0XHRcdFx0fSwgMTYpO1xuXG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygncmVhZHknKTtcblxuXHRcdFx0XHRcdF9tZnBUcmlnZ2VyKCdBamF4Q29udGVudEFkZGVkJyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRfcmVtb3ZlQWpheEN1cnNvcigpO1xuXHRcdFx0XHRcdGl0ZW0uZmluaXNoZWQgPSBpdGVtLmxvYWRFcnJvciA9IHRydWU7XG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnZXJyb3InLCBtZnAuc3QuYWpheC50RXJyb3IucmVwbGFjZSgnJXVybCUnLCBpdGVtLnNyYykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBtZnAuc3QuYWpheC5zZXR0aW5ncyk7XG5cblx0XHRcdG1mcC5yZXEgPSAkLmFqYXgob3B0cyk7XG5cblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdH1cbn0pO1xuXG4vKj4+YWpheCovXG5cbi8qPj5pbWFnZSovXG52YXIgX2ltZ0ludGVydmFsLFxuXHRfZ2V0VGl0bGUgPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0aWYoaXRlbS5kYXRhICYmIGl0ZW0uZGF0YS50aXRsZSAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0cmV0dXJuIGl0ZW0uZGF0YS50aXRsZTtcblxuXHRcdHZhciBzcmMgPSBtZnAuc3QuaW1hZ2UudGl0bGVTcmM7XG5cblx0XHRpZihzcmMpIHtcblx0XHRcdGlmKCQuaXNGdW5jdGlvbihzcmMpKSB7XG5cdFx0XHRcdHJldHVybiBzcmMuY2FsbChtZnAsIGl0ZW0pO1xuXHRcdFx0fSBlbHNlIGlmKGl0ZW0uZWwpIHtcblx0XHRcdFx0cmV0dXJuIGl0ZW0uZWwuYXR0cihzcmMpIHx8ICcnO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH07XG5cbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZSgnaW1hZ2UnLCB7XG5cblx0b3B0aW9uczoge1xuXHRcdG1hcmt1cDogJzxkaXYgY2xhc3M9XCJtZnAtZmlndXJlXCI+Jytcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PicrXG5cdFx0XHRcdFx0JzxmaWd1cmU+Jytcblx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLWltZ1wiPjwvZGl2PicrXG5cdFx0XHRcdFx0XHQnPGZpZ2NhcHRpb24+Jytcblx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJtZnAtYm90dG9tLWJhclwiPicrXG5cdFx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJtZnAtdGl0bGVcIj48L2Rpdj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLWNvdW50ZXJcIj48L2Rpdj4nK1xuXHRcdFx0XHRcdFx0XHQnPC9kaXY+Jytcblx0XHRcdFx0XHRcdCc8L2ZpZ2NhcHRpb24+Jytcblx0XHRcdFx0XHQnPC9maWd1cmU+Jytcblx0XHRcdFx0JzwvZGl2PicsXG5cdFx0Y3Vyc29yOiAnbWZwLXpvb20tb3V0LWN1cicsXG5cdFx0dGl0bGVTcmM6ICd0aXRsZScsXG5cdFx0dmVydGljYWxGaXQ6IHRydWUsXG5cdFx0dEVycm9yOiAnPGEgaHJlZj1cIiV1cmwlXCI+VGhlIGltYWdlPC9hPiBjb3VsZCBub3QgYmUgbG9hZGVkLidcblx0fSxcblxuXHRwcm90bzoge1xuXHRcdGluaXRJbWFnZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW1nU3QgPSBtZnAuc3QuaW1hZ2UsXG5cdFx0XHRcdG5zID0gJy5pbWFnZSc7XG5cblx0XHRcdG1mcC50eXBlcy5wdXNoKCdpbWFnZScpO1xuXG5cdFx0XHRfbWZwT24oT1BFTl9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5jdXJySXRlbS50eXBlID09PSAnaW1hZ2UnICYmIGltZ1N0LmN1cnNvcikge1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoaW1nU3QuY3Vyc29yKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKGltZ1N0LmN1cnNvcikge1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoaW1nU3QuY3Vyc29yKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfd2luZG93Lm9mZigncmVzaXplJyArIEVWRU5UX05TKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRfbWZwT24oJ1Jlc2l6ZScrbnMsIG1mcC5yZXNpemVJbWFnZSk7XG5cdFx0XHRpZihtZnAuaXNMb3dJRSkge1xuXHRcdFx0XHRfbWZwT24oJ0FmdGVyQ2hhbmdlJywgbWZwLnJlc2l6ZUltYWdlKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHJlc2l6ZUltYWdlOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpdGVtID0gbWZwLmN1cnJJdGVtO1xuXHRcdFx0aWYoIWl0ZW0gfHwgIWl0ZW0uaW1nKSByZXR1cm47XG5cblx0XHRcdGlmKG1mcC5zdC5pbWFnZS52ZXJ0aWNhbEZpdCkge1xuXHRcdFx0XHR2YXIgZGVjciA9IDA7XG5cdFx0XHRcdC8vIGZpeCBib3gtc2l6aW5nIGluIGllNy84XG5cdFx0XHRcdGlmKG1mcC5pc0xvd0lFKSB7XG5cdFx0XHRcdFx0ZGVjciA9IHBhcnNlSW50KGl0ZW0uaW1nLmNzcygncGFkZGluZy10b3AnKSwgMTApICsgcGFyc2VJbnQoaXRlbS5pbWcuY3NzKCdwYWRkaW5nLWJvdHRvbScpLDEwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpdGVtLmltZy5jc3MoJ21heC1oZWlnaHQnLCBtZnAud0gtZGVjcik7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfb25JbWFnZUhhc1NpemU6IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRcdGlmKGl0ZW0uaW1nKSB7XG5cblx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcblxuXHRcdFx0XHRpZihfaW1nSW50ZXJ2YWwpIHtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKF9pbWdJbnRlcnZhbCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpdGVtLmlzQ2hlY2tpbmdJbWdTaXplID0gZmFsc2U7XG5cblx0XHRcdFx0X21mcFRyaWdnZXIoJ0ltYWdlSGFzU2l6ZScsIGl0ZW0pO1xuXG5cdFx0XHRcdGlmKGl0ZW0uaW1nSGlkZGVuKSB7XG5cdFx0XHRcdFx0aWYobWZwLmNvbnRlbnQpXG5cdFx0XHRcdFx0XHRtZnAuY29udGVudC5yZW1vdmVDbGFzcygnbWZwLWxvYWRpbmcnKTtcblxuXHRcdFx0XHRcdGl0ZW0uaW1nSGlkZGVuID0gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBGdW5jdGlvbiB0aGF0IGxvb3BzIHVudGlsIHRoZSBpbWFnZSBoYXMgc2l6ZSB0byBkaXNwbGF5IGVsZW1lbnRzIHRoYXQgcmVseSBvbiBpdCBhc2FwXG5cdFx0ICovXG5cdFx0ZmluZEltYWdlU2l6ZTogZnVuY3Rpb24oaXRlbSkge1xuXG5cdFx0XHR2YXIgY291bnRlciA9IDAsXG5cdFx0XHRcdGltZyA9IGl0ZW0uaW1nWzBdLFxuXHRcdFx0XHRtZnBTZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKGRlbGF5KSB7XG5cblx0XHRcdFx0XHRpZihfaW1nSW50ZXJ2YWwpIHtcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoX2ltZ0ludGVydmFsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gZGVjZWxlcmF0aW5nIGludGVydmFsIHRoYXQgY2hlY2tzIGZvciBzaXplIG9mIGFuIGltYWdlXG5cdFx0XHRcdFx0X2ltZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZihpbWcubmF0dXJhbFdpZHRoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRtZnAuX29uSW1hZ2VIYXNTaXplKGl0ZW0pO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmKGNvdW50ZXIgPiAyMDApIHtcblx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChfaW1nSW50ZXJ2YWwpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjb3VudGVyKys7XG5cdFx0XHRcdFx0XHRpZihjb3VudGVyID09PSAzKSB7XG5cdFx0XHRcdFx0XHRcdG1mcFNldEludGVydmFsKDEwKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZihjb3VudGVyID09PSA0MCkge1xuXHRcdFx0XHRcdFx0XHRtZnBTZXRJbnRlcnZhbCg1MCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYoY291bnRlciA9PT0gMTAwKSB7XG5cdFx0XHRcdFx0XHRcdG1mcFNldEludGVydmFsKDUwMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgZGVsYXkpO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRtZnBTZXRJbnRlcnZhbCgxKTtcblx0XHR9LFxuXG5cdFx0Z2V0SW1hZ2U6IGZ1bmN0aW9uKGl0ZW0sIHRlbXBsYXRlKSB7XG5cblx0XHRcdHZhciBndWFyZCA9IDAsXG5cblx0XHRcdFx0Ly8gaW1hZ2UgbG9hZCBjb21wbGV0ZSBoYW5kbGVyXG5cdFx0XHRcdG9uTG9hZENvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoaXRlbSkge1xuXHRcdFx0XHRcdFx0aWYgKGl0ZW0uaW1nWzBdLmNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uaW1nLm9mZignLm1mcGxvYWRlcicpO1xuXG5cdFx0XHRcdFx0XHRcdGlmKGl0ZW0gPT09IG1mcC5jdXJySXRlbSl7XG5cdFx0XHRcdFx0XHRcdFx0bWZwLl9vbkltYWdlSGFzU2l6ZShpdGVtKTtcblxuXHRcdFx0XHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRpdGVtLmxvYWRlZCA9IHRydWU7XG5cblx0XHRcdFx0XHRcdFx0X21mcFRyaWdnZXIoJ0ltYWdlTG9hZENvbXBsZXRlJyk7XG5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQvLyBpZiBpbWFnZSBjb21wbGV0ZSBjaGVjayBmYWlscyAyMDAgdGltZXMgKDIwIHNlYyksIHdlIGFzc3VtZSB0aGF0IHRoZXJlIHdhcyBhbiBlcnJvci5cblx0XHRcdFx0XHRcdFx0Z3VhcmQrKztcblx0XHRcdFx0XHRcdFx0aWYoZ3VhcmQgPCAyMDApIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KG9uTG9hZENvbXBsZXRlLDEwMCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0b25Mb2FkRXJyb3IoKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBpbWFnZSBlcnJvciBoYW5kbGVyXG5cdFx0XHRcdG9uTG9hZEVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoaXRlbSkge1xuXHRcdFx0XHRcdFx0aXRlbS5pbWcub2ZmKCcubWZwbG9hZGVyJyk7XG5cdFx0XHRcdFx0XHRpZihpdGVtID09PSBtZnAuY3Vyckl0ZW0pe1xuXHRcdFx0XHRcdFx0XHRtZnAuX29uSW1hZ2VIYXNTaXplKGl0ZW0pO1xuXHRcdFx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdlcnJvcicsIGltZ1N0LnRFcnJvci5yZXBsYWNlKCcldXJsJScsIGl0ZW0uc3JjKSApO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0aXRlbS5sb2FkZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0aXRlbS5sb2FkRXJyb3IgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0aW1nU3QgPSBtZnAuc3QuaW1hZ2U7XG5cblxuXHRcdFx0dmFyIGVsID0gdGVtcGxhdGUuZmluZCgnLm1mcC1pbWcnKTtcblx0XHRcdGlmKGVsLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0XHRcdGltZy5jbGFzc05hbWUgPSAnbWZwLWltZyc7XG5cdFx0XHRcdGlmKGl0ZW0uZWwgJiYgaXRlbS5lbC5maW5kKCdpbWcnKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRpbWcuYWx0ID0gaXRlbS5lbC5maW5kKCdpbWcnKS5hdHRyKCdhbHQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpdGVtLmltZyA9ICQoaW1nKS5vbignbG9hZC5tZnBsb2FkZXInLCBvbkxvYWRDb21wbGV0ZSkub24oJ2Vycm9yLm1mcGxvYWRlcicsIG9uTG9hZEVycm9yKTtcblx0XHRcdFx0aW1nLnNyYyA9IGl0ZW0uc3JjO1xuXG5cdFx0XHRcdC8vIHdpdGhvdXQgY2xvbmUoKSBcImVycm9yXCIgZXZlbnQgaXMgbm90IGZpcmluZyB3aGVuIElNRyBpcyByZXBsYWNlZCBieSBuZXcgSU1HXG5cdFx0XHRcdC8vIFRPRE86IGZpbmQgYSB3YXkgdG8gYXZvaWQgc3VjaCBjbG9uaW5nXG5cdFx0XHRcdGlmKGVsLmlzKCdpbWcnKSkge1xuXHRcdFx0XHRcdGl0ZW0uaW1nID0gaXRlbS5pbWcuY2xvbmUoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGltZyA9IGl0ZW0uaW1nWzBdO1xuXHRcdFx0XHRpZihpbWcubmF0dXJhbFdpZHRoID4gMCkge1xuXHRcdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSBpZighaW1nLndpZHRoKSB7XG5cdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bWZwLl9wYXJzZU1hcmt1cCh0ZW1wbGF0ZSwge1xuXHRcdFx0XHR0aXRsZTogX2dldFRpdGxlKGl0ZW0pLFxuXHRcdFx0XHRpbWdfcmVwbGFjZVdpdGg6IGl0ZW0uaW1nXG5cdFx0XHR9LCBpdGVtKTtcblxuXHRcdFx0bWZwLnJlc2l6ZUltYWdlKCk7XG5cblx0XHRcdGlmKGl0ZW0uaGFzU2l6ZSkge1xuXHRcdFx0XHRpZihfaW1nSW50ZXJ2YWwpIGNsZWFySW50ZXJ2YWwoX2ltZ0ludGVydmFsKTtcblxuXHRcdFx0XHRpZihpdGVtLmxvYWRFcnJvcikge1xuXHRcdFx0XHRcdHRlbXBsYXRlLmFkZENsYXNzKCdtZnAtbG9hZGluZycpO1xuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ2Vycm9yJywgaW1nU3QudEVycm9yLnJlcGxhY2UoJyV1cmwlJywgaXRlbS5zcmMpICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGVtcGxhdGUucmVtb3ZlQ2xhc3MoJ21mcC1sb2FkaW5nJyk7XG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygncmVhZHknKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdFx0XHR9XG5cblx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ2xvYWRpbmcnKTtcblx0XHRcdGl0ZW0ubG9hZGluZyA9IHRydWU7XG5cblx0XHRcdGlmKCFpdGVtLmhhc1NpemUpIHtcblx0XHRcdFx0aXRlbS5pbWdIaWRkZW4gPSB0cnVlO1xuXHRcdFx0XHR0ZW1wbGF0ZS5hZGRDbGFzcygnbWZwLWxvYWRpbmcnKTtcblx0XHRcdFx0bWZwLmZpbmRJbWFnZVNpemUoaXRlbSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0XHR9XG5cdH1cbn0pO1xuXG4vKj4+aW1hZ2UqL1xuXG4vKj4+em9vbSovXG52YXIgaGFzTW96VHJhbnNmb3JtLFxuXHRnZXRIYXNNb3pUcmFuc2Zvcm0gPSBmdW5jdGlvbigpIHtcblx0XHRpZihoYXNNb3pUcmFuc2Zvcm0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aGFzTW96VHJhbnNmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLnN0eWxlLk1velRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRyZXR1cm4gaGFzTW96VHJhbnNmb3JtO1xuXHR9O1xuXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoJ3pvb20nLCB7XG5cblx0b3B0aW9uczoge1xuXHRcdGVuYWJsZWQ6IGZhbHNlLFxuXHRcdGVhc2luZzogJ2Vhc2UtaW4tb3V0Jyxcblx0XHRkdXJhdGlvbjogMzAwLFxuXHRcdG9wZW5lcjogZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQuaXMoJ2ltZycpID8gZWxlbWVudCA6IGVsZW1lbnQuZmluZCgnaW1nJyk7XG5cdFx0fVxuXHR9LFxuXG5cdHByb3RvOiB7XG5cblx0XHRpbml0Wm9vbTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgem9vbVN0ID0gbWZwLnN0Lnpvb20sXG5cdFx0XHRcdG5zID0gJy56b29tJyxcblx0XHRcdFx0aW1hZ2U7XG5cblx0XHRcdGlmKCF6b29tU3QuZW5hYmxlZCB8fCAhbWZwLnN1cHBvcnRzVHJhbnNpdGlvbikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBkdXJhdGlvbiA9IHpvb21TdC5kdXJhdGlvbixcblx0XHRcdFx0Z2V0RWxUb0FuaW1hdGUgPSBmdW5jdGlvbihpbWFnZSkge1xuXHRcdFx0XHRcdHZhciBuZXdJbWcgPSBpbWFnZS5jbG9uZSgpLnJlbW92ZUF0dHIoJ3N0eWxlJykucmVtb3ZlQXR0cignY2xhc3MnKS5hZGRDbGFzcygnbWZwLWFuaW1hdGVkLWltYWdlJyksXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uID0gJ2FsbCAnKyh6b29tU3QuZHVyYXRpb24vMTAwMCkrJ3MgJyArIHpvb21TdC5lYXNpbmcsXG5cdFx0XHRcdFx0XHRjc3NPYmogPSB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRcdFx0XHR6SW5kZXg6IDk5OTksXG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRcdFx0Jy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eSc6ICdoaWRkZW4nXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dCA9ICd0cmFuc2l0aW9uJztcblxuXHRcdFx0XHRcdGNzc09ialsnLXdlYmtpdC0nK3RdID0gY3NzT2JqWyctbW96LScrdF0gPSBjc3NPYmpbJy1vLScrdF0gPSBjc3NPYmpbdF0gPSB0cmFuc2l0aW9uO1xuXG5cdFx0XHRcdFx0bmV3SW1nLmNzcyhjc3NPYmopO1xuXHRcdFx0XHRcdHJldHVybiBuZXdJbWc7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNob3dNYWluQ29udGVudCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdG1mcC5jb250ZW50LmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9wZW5UaW1lb3V0LFxuXHRcdFx0XHRhbmltYXRlZEltZztcblxuXHRcdFx0X21mcE9uKCdCdWlsZENvbnRyb2xzJytucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5fYWxsb3dab29tKCkpIHtcblxuXHRcdFx0XHRcdGNsZWFyVGltZW91dChvcGVuVGltZW91dCk7XG5cdFx0XHRcdFx0bWZwLmNvbnRlbnQuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXG5cdFx0XHRcdFx0Ly8gQmFzaWNhbGx5LCBhbGwgY29kZSBiZWxvdyBkb2VzIGlzIGNsb25lcyBleGlzdGluZyBpbWFnZSwgcHV0cyBpbiBvbiB0b3Agb2YgdGhlIGN1cnJlbnQgb25lIGFuZCBhbmltYXRlZCBpdFxuXG5cdFx0XHRcdFx0aW1hZ2UgPSBtZnAuX2dldEl0ZW1Ub1pvb20oKTtcblxuXHRcdFx0XHRcdGlmKCFpbWFnZSkge1xuXHRcdFx0XHRcdFx0c2hvd01haW5Db250ZW50KCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YW5pbWF0ZWRJbWcgPSBnZXRFbFRvQW5pbWF0ZShpbWFnZSk7XG5cblx0XHRcdFx0XHRhbmltYXRlZEltZy5jc3MoIG1mcC5fZ2V0T2Zmc2V0KCkgKTtcblxuXHRcdFx0XHRcdG1mcC53cmFwLmFwcGVuZChhbmltYXRlZEltZyk7XG5cblx0XHRcdFx0XHRvcGVuVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRhbmltYXRlZEltZy5jc3MoIG1mcC5fZ2V0T2Zmc2V0KCB0cnVlICkgKTtcblx0XHRcdFx0XHRcdG9wZW5UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdFx0XHRzaG93TWFpbkNvbnRlbnQoKTtcblxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVkSW1nLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGltYWdlID0gYW5pbWF0ZWRJbWcgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRcdF9tZnBUcmlnZ2VyKCdab29tQW5pbWF0aW9uRW5kZWQnKTtcblx0XHRcdFx0XHRcdFx0fSwgMTYpOyAvLyBhdm9pZCBibGluayB3aGVuIHN3aXRjaGluZyBpbWFnZXNcblxuXHRcdFx0XHRcdFx0fSwgZHVyYXRpb24pOyAvLyB0aGlzIHRpbWVvdXQgZXF1YWxzIGFuaW1hdGlvbiBkdXJhdGlvblxuXG5cdFx0XHRcdFx0fSwgMTYpOyAvLyBieSBhZGRpbmcgdGhpcyB0aW1lb3V0IHdlIGF2b2lkIHNob3J0IGdsaXRjaCBhdCB0aGUgYmVnaW5uaW5nIG9mIGFuaW1hdGlvblxuXG5cblx0XHRcdFx0XHQvLyBMb3RzIG9mIHRpbWVvdXRzLi4uXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0X21mcE9uKEJFRk9SRV9DTE9TRV9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5fYWxsb3dab29tKCkpIHtcblxuXHRcdFx0XHRcdGNsZWFyVGltZW91dChvcGVuVGltZW91dCk7XG5cblx0XHRcdFx0XHRtZnAuc3QucmVtb3ZhbERlbGF5ID0gZHVyYXRpb247XG5cblx0XHRcdFx0XHRpZighaW1hZ2UpIHtcblx0XHRcdFx0XHRcdGltYWdlID0gbWZwLl9nZXRJdGVtVG9ab29tKCk7XG5cdFx0XHRcdFx0XHRpZighaW1hZ2UpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YW5pbWF0ZWRJbWcgPSBnZXRFbFRvQW5pbWF0ZShpbWFnZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YW5pbWF0ZWRJbWcuY3NzKCBtZnAuX2dldE9mZnNldCh0cnVlKSApO1xuXHRcdFx0XHRcdG1mcC53cmFwLmFwcGVuZChhbmltYXRlZEltZyk7XG5cdFx0XHRcdFx0bWZwLmNvbnRlbnQuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGFuaW1hdGVkSW1nLmNzcyggbWZwLl9nZXRPZmZzZXQoKSApO1xuXHRcdFx0XHRcdH0sIDE2KTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKENMT1NFX0VWRU5UK25zLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYobWZwLl9hbGxvd1pvb20oKSkge1xuXHRcdFx0XHRcdHNob3dNYWluQ29udGVudCgpO1xuXHRcdFx0XHRcdGlmKGFuaW1hdGVkSW1nKSB7XG5cdFx0XHRcdFx0XHRhbmltYXRlZEltZy5yZW1vdmUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aW1hZ2UgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0X2FsbG93Wm9vbTogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gbWZwLmN1cnJJdGVtLnR5cGUgPT09ICdpbWFnZSc7XG5cdFx0fSxcblxuXHRcdF9nZXRJdGVtVG9ab29tOiBmdW5jdGlvbigpIHtcblx0XHRcdGlmKG1mcC5jdXJySXRlbS5oYXNTaXplKSB7XG5cdFx0XHRcdHJldHVybiBtZnAuY3Vyckl0ZW0uaW1nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBHZXQgZWxlbWVudCBwb3N0aW9uIHJlbGF0aXZlIHRvIHZpZXdwb3J0XG5cdFx0X2dldE9mZnNldDogZnVuY3Rpb24oaXNMYXJnZSkge1xuXHRcdFx0dmFyIGVsO1xuXHRcdFx0aWYoaXNMYXJnZSkge1xuXHRcdFx0XHRlbCA9IG1mcC5jdXJySXRlbS5pbWc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbCA9IG1mcC5zdC56b29tLm9wZW5lcihtZnAuY3Vyckl0ZW0uZWwgfHwgbWZwLmN1cnJJdGVtKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG9mZnNldCA9IGVsLm9mZnNldCgpO1xuXHRcdFx0dmFyIHBhZGRpbmdUb3AgPSBwYXJzZUludChlbC5jc3MoJ3BhZGRpbmctdG9wJyksMTApO1xuXHRcdFx0dmFyIHBhZGRpbmdCb3R0b20gPSBwYXJzZUludChlbC5jc3MoJ3BhZGRpbmctYm90dG9tJyksMTApO1xuXHRcdFx0b2Zmc2V0LnRvcCAtPSAoICQod2luZG93KS5zY3JvbGxUb3AoKSAtIHBhZGRpbmdUb3AgKTtcblxuXG5cdFx0XHQvKlxuXG5cdFx0XHRBbmltYXRpbmcgbGVmdCArIHRvcCArIHdpZHRoL2hlaWdodCBsb29rcyBnbGl0Y2h5IGluIEZpcmVmb3gsIGJ1dCBwZXJmZWN0IGluIENocm9tZS4gQW5kIHZpY2UtdmVyc2EuXG5cblx0XHRcdCAqL1xuXHRcdFx0dmFyIG9iaiA9IHtcblx0XHRcdFx0d2lkdGg6IGVsLndpZHRoKCksXG5cdFx0XHRcdC8vIGZpeCBaZXB0byBoZWlnaHQrcGFkZGluZyBpc3N1ZVxuXHRcdFx0XHRoZWlnaHQ6IChfaXNKUSA/IGVsLmlubmVySGVpZ2h0KCkgOiBlbFswXS5vZmZzZXRIZWlnaHQpIC0gcGFkZGluZ0JvdHRvbSAtIHBhZGRpbmdUb3Bcblx0XHRcdH07XG5cblx0XHRcdC8vIEkgaGF0ZSB0byBkbyB0aGlzLCBidXQgdGhlcmUgaXMgbm8gYW5vdGhlciBvcHRpb25cblx0XHRcdGlmKCBnZXRIYXNNb3pUcmFuc2Zvcm0oKSApIHtcblx0XHRcdFx0b2JqWyctbW96LXRyYW5zZm9ybSddID0gb2JqWyd0cmFuc2Zvcm0nXSA9ICd0cmFuc2xhdGUoJyArIG9mZnNldC5sZWZ0ICsgJ3B4LCcgKyBvZmZzZXQudG9wICsgJ3B4KSc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvYmoubGVmdCA9IG9mZnNldC5sZWZ0O1xuXHRcdFx0XHRvYmoudG9wID0gb2Zmc2V0LnRvcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXG5cdH1cbn0pO1xuXG5cblxuLyo+Pnpvb20qL1xuXG4vKj4+aWZyYW1lKi9cblxudmFyIElGUkFNRV9OUyA9ICdpZnJhbWUnLFxuXHRfZW1wdHlQYWdlID0gJy8vYWJvdXQ6YmxhbmsnLFxuXG5cdF9maXhJZnJhbWVCdWdzID0gZnVuY3Rpb24oaXNTaG93aW5nKSB7XG5cdFx0aWYobWZwLmN1cnJUZW1wbGF0ZVtJRlJBTUVfTlNdKSB7XG5cdFx0XHR2YXIgZWwgPSBtZnAuY3VyclRlbXBsYXRlW0lGUkFNRV9OU10uZmluZCgnaWZyYW1lJyk7XG5cdFx0XHRpZihlbC5sZW5ndGgpIHtcblx0XHRcdFx0Ly8gcmVzZXQgc3JjIGFmdGVyIHRoZSBwb3B1cCBpcyBjbG9zZWQgdG8gYXZvaWQgXCJ2aWRlbyBrZWVwcyBwbGF5aW5nIGFmdGVyIHBvcHVwIGlzIGNsb3NlZFwiIGJ1Z1xuXHRcdFx0XHRpZighaXNTaG93aW5nKSB7XG5cdFx0XHRcdFx0ZWxbMF0uc3JjID0gX2VtcHR5UGFnZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElFOCBibGFjayBzY3JlZW4gYnVnIGZpeFxuXHRcdFx0XHRpZihtZnAuaXNJRTgpIHtcblx0XHRcdFx0XHRlbC5jc3MoJ2Rpc3BsYXknLCBpc1Nob3dpbmcgPyAnYmxvY2snIDogJ25vbmUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKElGUkFNRV9OUywge1xuXG5cdG9wdGlvbnM6IHtcblx0XHRtYXJrdXA6ICc8ZGl2IGNsYXNzPVwibWZwLWlmcmFtZS1zY2FsZXJcIj4nK1xuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLWNsb3NlXCI+PC9kaXY+Jytcblx0XHRcdFx0XHQnPGlmcmFtZSBjbGFzcz1cIm1mcC1pZnJhbWVcIiBzcmM9XCIvL2Fib3V0OmJsYW5rXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPicrXG5cdFx0XHRcdCc8L2Rpdj4nLFxuXG5cdFx0c3JjQWN0aW9uOiAnaWZyYW1lX3NyYycsXG5cblx0XHQvLyB3ZSBkb24ndCBjYXJlIGFuZCBzdXBwb3J0IG9ubHkgb25lIGRlZmF1bHQgdHlwZSBvZiBVUkwgYnkgZGVmYXVsdFxuXHRcdHBhdHRlcm5zOiB7XG5cdFx0XHR5b3V0dWJlOiB7XG5cdFx0XHRcdGluZGV4OiAneW91dHViZS5jb20nLFxuXHRcdFx0XHRpZDogJ3Y9Jyxcblx0XHRcdFx0c3JjOiAnLy93d3cueW91dHViZS5jb20vZW1iZWQvJWlkJT9hdXRvcGxheT0xJ1xuXHRcdFx0fSxcblx0XHRcdHZpbWVvOiB7XG5cdFx0XHRcdGluZGV4OiAndmltZW8uY29tLycsXG5cdFx0XHRcdGlkOiAnLycsXG5cdFx0XHRcdHNyYzogJy8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8laWQlP2F1dG9wbGF5PTEnXG5cdFx0XHR9LFxuXHRcdFx0Z21hcHM6IHtcblx0XHRcdFx0aW5kZXg6ICcvL21hcHMuZ29vZ2xlLicsXG5cdFx0XHRcdHNyYzogJyVpZCUmb3V0cHV0PWVtYmVkJ1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRwcm90bzoge1xuXHRcdGluaXRJZnJhbWU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bWZwLnR5cGVzLnB1c2goSUZSQU1FX05TKTtcblxuXHRcdFx0X21mcE9uKCdCZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbihlLCBwcmV2VHlwZSwgbmV3VHlwZSkge1xuXHRcdFx0XHRpZihwcmV2VHlwZSAhPT0gbmV3VHlwZSkge1xuXHRcdFx0XHRcdGlmKHByZXZUeXBlID09PSBJRlJBTUVfTlMpIHtcblx0XHRcdFx0XHRcdF9maXhJZnJhbWVCdWdzKCk7IC8vIGlmcmFtZSBpZiByZW1vdmVkXG5cdFx0XHRcdFx0fSBlbHNlIGlmKG5ld1R5cGUgPT09IElGUkFNRV9OUykge1xuXHRcdFx0XHRcdFx0X2ZpeElmcmFtZUJ1Z3ModHJ1ZSk7IC8vIGlmcmFtZSBpcyBzaG93aW5nXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9Ly8gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gaWZyYW1lIHNvdXJjZSBpcyBzd2l0Y2hlZCwgZG9uJ3QgZG8gYW55dGhpbmdcblx0XHRcdFx0Ly99XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKENMT1NFX0VWRU5UICsgJy4nICsgSUZSQU1FX05TLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0X2ZpeElmcmFtZUJ1Z3MoKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRnZXRJZnJhbWU6IGZ1bmN0aW9uKGl0ZW0sIHRlbXBsYXRlKSB7XG5cdFx0XHR2YXIgZW1iZWRTcmMgPSBpdGVtLnNyYztcblx0XHRcdHZhciBpZnJhbWVTdCA9IG1mcC5zdC5pZnJhbWU7XG5cblx0XHRcdCQuZWFjaChpZnJhbWVTdC5wYXR0ZXJucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKGVtYmVkU3JjLmluZGV4T2YoIHRoaXMuaW5kZXggKSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYodGhpcy5pZCkge1xuXHRcdFx0XHRcdFx0aWYodHlwZW9mIHRoaXMuaWQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRcdGVtYmVkU3JjID0gZW1iZWRTcmMuc3Vic3RyKGVtYmVkU3JjLmxhc3RJbmRleE9mKHRoaXMuaWQpK3RoaXMuaWQubGVuZ3RoLCBlbWJlZFNyYy5sZW5ndGgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZW1iZWRTcmMgPSB0aGlzLmlkLmNhbGwoIHRoaXMsIGVtYmVkU3JjICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVtYmVkU3JjID0gdGhpcy5zcmMucmVwbGFjZSgnJWlkJScsIGVtYmVkU3JjICk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHZhciBkYXRhT2JqID0ge307XG5cdFx0XHRpZihpZnJhbWVTdC5zcmNBY3Rpb24pIHtcblx0XHRcdFx0ZGF0YU9ialtpZnJhbWVTdC5zcmNBY3Rpb25dID0gZW1iZWRTcmM7XG5cdFx0XHR9XG5cdFx0XHRtZnAuX3BhcnNlTWFya3VwKHRlbXBsYXRlLCBkYXRhT2JqLCBpdGVtKTtcblxuXHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygncmVhZHknKTtcblxuXHRcdFx0cmV0dXJuIHRlbXBsYXRlO1xuXHRcdH1cblx0fVxufSk7XG5cblxuXG4vKj4+aWZyYW1lKi9cblxuLyo+PmdhbGxlcnkqL1xuLyoqXG4gKiBHZXQgbG9vcGVkIGluZGV4IGRlcGVuZGluZyBvbiBudW1iZXIgb2Ygc2xpZGVzXG4gKi9cbnZhciBfZ2V0TG9vcGVkSWQgPSBmdW5jdGlvbihpbmRleCkge1xuXHRcdHZhciBudW1TbGlkZXMgPSBtZnAuaXRlbXMubGVuZ3RoO1xuXHRcdGlmKGluZGV4ID4gbnVtU2xpZGVzIC0gMSkge1xuXHRcdFx0cmV0dXJuIGluZGV4IC0gbnVtU2xpZGVzO1xuXHRcdH0gZWxzZSAgaWYoaW5kZXggPCAwKSB7XG5cdFx0XHRyZXR1cm4gbnVtU2xpZGVzICsgaW5kZXg7XG5cdFx0fVxuXHRcdHJldHVybiBpbmRleDtcblx0fSxcblx0X3JlcGxhY2VDdXJyVG90YWwgPSBmdW5jdGlvbih0ZXh0LCBjdXJyLCB0b3RhbCkge1xuXHRcdHJldHVybiB0ZXh0LnJlcGxhY2UoLyVjdXJyJS9naSwgY3VyciArIDEpLnJlcGxhY2UoLyV0b3RhbCUvZ2ksIHRvdGFsKTtcblx0fTtcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKCdnYWxsZXJ5Jywge1xuXG5cdG9wdGlvbnM6IHtcblx0XHRlbmFibGVkOiBmYWxzZSxcblx0XHRhcnJvd01hcmt1cDogJzxidXR0b24gdGl0bGU9XCIldGl0bGUlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibWZwLWFycm93IG1mcC1hcnJvdy0lZGlyJVwiPjwvYnV0dG9uPicsXG5cdFx0cHJlbG9hZDogWzAsMl0sXG5cdFx0bmF2aWdhdGVCeUltZ0NsaWNrOiB0cnVlLFxuXHRcdGFycm93czogdHJ1ZSxcblxuXHRcdHRQcmV2OiAnUHJldmlvdXMgKExlZnQgYXJyb3cga2V5KScsXG5cdFx0dE5leHQ6ICdOZXh0IChSaWdodCBhcnJvdyBrZXkpJyxcblx0XHR0Q291bnRlcjogJyVjdXJyJSBvZiAldG90YWwlJ1xuXHR9LFxuXG5cdHByb3RvOiB7XG5cdFx0aW5pdEdhbGxlcnk6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgZ1N0ID0gbWZwLnN0LmdhbGxlcnksXG5cdFx0XHRcdG5zID0gJy5tZnAtZ2FsbGVyeSc7XG5cblx0XHRcdG1mcC5kaXJlY3Rpb24gPSB0cnVlOyAvLyB0cnVlIC0gbmV4dCwgZmFsc2UgLSBwcmV2XG5cblx0XHRcdGlmKCFnU3QgfHwgIWdTdC5lbmFibGVkICkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0XHRfd3JhcENsYXNzZXMgKz0gJyBtZnAtZ2FsbGVyeSc7XG5cblx0XHRcdF9tZnBPbihPUEVOX0VWRU5UK25zLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRpZihnU3QubmF2aWdhdGVCeUltZ0NsaWNrKSB7XG5cdFx0XHRcdFx0bWZwLndyYXAub24oJ2NsaWNrJytucywgJy5tZnAtaW1nJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZihtZnAuaXRlbXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0XHRtZnAubmV4dCgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRfZG9jdW1lbnQub24oJ2tleWRvd24nK25zLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcblx0XHRcdFx0XHRcdG1mcC5wcmV2KCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XG5cdFx0XHRcdFx0XHRtZnAubmV4dCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKCdVcGRhdGVTdGF0dXMnK25zLCBmdW5jdGlvbihlLCBkYXRhKSB7XG5cdFx0XHRcdGlmKGRhdGEudGV4dCkge1xuXHRcdFx0XHRcdGRhdGEudGV4dCA9IF9yZXBsYWNlQ3VyclRvdGFsKGRhdGEudGV4dCwgbWZwLmN1cnJJdGVtLmluZGV4LCBtZnAuaXRlbXMubGVuZ3RoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbihNQVJLVVBfUEFSU0VfRVZFTlQrbnMsIGZ1bmN0aW9uKGUsIGVsZW1lbnQsIHZhbHVlcywgaXRlbSkge1xuXHRcdFx0XHR2YXIgbCA9IG1mcC5pdGVtcy5sZW5ndGg7XG5cdFx0XHRcdHZhbHVlcy5jb3VudGVyID0gbCA+IDEgPyBfcmVwbGFjZUN1cnJUb3RhbChnU3QudENvdW50ZXIsIGl0ZW0uaW5kZXgsIGwpIDogJyc7XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKCdCdWlsZENvbnRyb2xzJyArIG5zLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYobWZwLml0ZW1zLmxlbmd0aCA+IDEgJiYgZ1N0LmFycm93cyAmJiAhbWZwLmFycm93TGVmdCkge1xuXHRcdFx0XHRcdHZhciBtYXJrdXAgPSBnU3QuYXJyb3dNYXJrdXAsXG5cdFx0XHRcdFx0XHRhcnJvd0xlZnQgPSBtZnAuYXJyb3dMZWZ0ID0gJCggbWFya3VwLnJlcGxhY2UoLyV0aXRsZSUvZ2ksIGdTdC50UHJldikucmVwbGFjZSgvJWRpciUvZ2ksICdsZWZ0JykgKS5hZGRDbGFzcyhQUkVWRU5UX0NMT1NFX0NMQVNTKSxcblx0XHRcdFx0XHRcdGFycm93UmlnaHQgPSBtZnAuYXJyb3dSaWdodCA9ICQoIG1hcmt1cC5yZXBsYWNlKC8ldGl0bGUlL2dpLCBnU3QudE5leHQpLnJlcGxhY2UoLyVkaXIlL2dpLCAncmlnaHQnKSApLmFkZENsYXNzKFBSRVZFTlRfQ0xPU0VfQ0xBU1MpO1xuXG5cdFx0XHRcdFx0YXJyb3dMZWZ0LmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0bWZwLnByZXYoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRhcnJvd1JpZ2h0LmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0bWZwLm5leHQoKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdG1mcC5jb250YWluZXIuYXBwZW5kKGFycm93TGVmdC5hZGQoYXJyb3dSaWdodCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKENIQU5HRV9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5fcHJlbG9hZFRpbWVvdXQpIGNsZWFyVGltZW91dChtZnAuX3ByZWxvYWRUaW1lb3V0KTtcblxuXHRcdFx0XHRtZnAuX3ByZWxvYWRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRtZnAucHJlbG9hZE5lYXJieUltYWdlcygpO1xuXHRcdFx0XHRcdG1mcC5fcHJlbG9hZFRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHR9LCAxNik7XG5cdFx0XHR9KTtcblxuXG5cdFx0XHRfbWZwT24oQ0xPU0VfRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfZG9jdW1lbnQub2ZmKG5zKTtcblx0XHRcdFx0bWZwLndyYXAub2ZmKCdjbGljaycrbnMpO1xuXHRcdFx0XHRtZnAuYXJyb3dSaWdodCA9IG1mcC5hcnJvd0xlZnQgPSBudWxsO1xuXHRcdFx0fSk7XG5cblx0XHR9LFxuXHRcdG5leHQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bWZwLmRpcmVjdGlvbiA9IHRydWU7XG5cdFx0XHRtZnAuaW5kZXggPSBfZ2V0TG9vcGVkSWQobWZwLmluZGV4ICsgMSk7XG5cdFx0XHRtZnAudXBkYXRlSXRlbUhUTUwoKTtcblx0XHR9LFxuXHRcdHByZXY6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bWZwLmRpcmVjdGlvbiA9IGZhbHNlO1xuXHRcdFx0bWZwLmluZGV4ID0gX2dldExvb3BlZElkKG1mcC5pbmRleCAtIDEpO1xuXHRcdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XG5cdFx0fSxcblx0XHRnb1RvOiBmdW5jdGlvbihuZXdJbmRleCkge1xuXHRcdFx0bWZwLmRpcmVjdGlvbiA9IChuZXdJbmRleCA+PSBtZnAuaW5kZXgpO1xuXHRcdFx0bWZwLmluZGV4ID0gbmV3SW5kZXg7XG5cdFx0XHRtZnAudXBkYXRlSXRlbUhUTUwoKTtcblx0XHR9LFxuXHRcdHByZWxvYWROZWFyYnlJbWFnZXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHAgPSBtZnAuc3QuZ2FsbGVyeS5wcmVsb2FkLFxuXHRcdFx0XHRwcmVsb2FkQmVmb3JlID0gTWF0aC5taW4ocFswXSwgbWZwLml0ZW1zLmxlbmd0aCksXG5cdFx0XHRcdHByZWxvYWRBZnRlciA9IE1hdGgubWluKHBbMV0sIG1mcC5pdGVtcy5sZW5ndGgpLFxuXHRcdFx0XHRpO1xuXG5cdFx0XHRmb3IoaSA9IDE7IGkgPD0gKG1mcC5kaXJlY3Rpb24gPyBwcmVsb2FkQWZ0ZXIgOiBwcmVsb2FkQmVmb3JlKTsgaSsrKSB7XG5cdFx0XHRcdG1mcC5fcHJlbG9hZEl0ZW0obWZwLmluZGV4K2kpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yKGkgPSAxOyBpIDw9IChtZnAuZGlyZWN0aW9uID8gcHJlbG9hZEJlZm9yZSA6IHByZWxvYWRBZnRlcik7IGkrKykge1xuXHRcdFx0XHRtZnAuX3ByZWxvYWRJdGVtKG1mcC5pbmRleC1pKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9wcmVsb2FkSXRlbTogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdGluZGV4ID0gX2dldExvb3BlZElkKGluZGV4KTtcblxuXHRcdFx0aWYobWZwLml0ZW1zW2luZGV4XS5wcmVsb2FkZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaXRlbSA9IG1mcC5pdGVtc1tpbmRleF07XG5cdFx0XHRpZighaXRlbS5wYXJzZWQpIHtcblx0XHRcdFx0aXRlbSA9IG1mcC5wYXJzZUVsKCBpbmRleCApO1xuXHRcdFx0fVxuXG5cdFx0XHRfbWZwVHJpZ2dlcignTGF6eUxvYWQnLCBpdGVtKTtcblxuXHRcdFx0aWYoaXRlbS50eXBlID09PSAnaW1hZ2UnKSB7XG5cdFx0XHRcdGl0ZW0uaW1nID0gJCgnPGltZyBjbGFzcz1cIm1mcC1pbWdcIiAvPicpLm9uKCdsb2FkLm1mcGxvYWRlcicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IHRydWU7XG5cdFx0XHRcdH0pLm9uKCdlcnJvci5tZnBsb2FkZXInLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSB0cnVlO1xuXHRcdFx0XHRcdGl0ZW0ubG9hZEVycm9yID0gdHJ1ZTtcblx0XHRcdFx0XHRfbWZwVHJpZ2dlcignTGF6eUxvYWRFcnJvcicsIGl0ZW0pO1xuXHRcdFx0XHR9KS5hdHRyKCdzcmMnLCBpdGVtLnNyYyk7XG5cdFx0XHR9XG5cblxuXHRcdFx0aXRlbS5wcmVsb2FkZWQgPSB0cnVlO1xuXHRcdH1cblx0fVxufSk7XG5cbi8qPj5nYWxsZXJ5Ki9cblxuLyo+PnJldGluYSovXG5cbnZhciBSRVRJTkFfTlMgPSAncmV0aW5hJztcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKFJFVElOQV9OUywge1xuXHRvcHRpb25zOiB7XG5cdFx0cmVwbGFjZVNyYzogZnVuY3Rpb24oaXRlbSkge1xuXHRcdFx0cmV0dXJuIGl0ZW0uc3JjLnJlcGxhY2UoL1xcLlxcdyskLywgZnVuY3Rpb24obSkgeyByZXR1cm4gJ0AyeCcgKyBtOyB9KTtcblx0XHR9LFxuXHRcdHJhdGlvOiAxIC8vIEZ1bmN0aW9uIG9yIG51bWJlci4gIFNldCB0byAxIHRvIGRpc2FibGUuXG5cdH0sXG5cdHByb3RvOiB7XG5cdFx0aW5pdFJldGluYTogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEpIHtcblxuXHRcdFx0XHR2YXIgc3QgPSBtZnAuc3QucmV0aW5hLFxuXHRcdFx0XHRcdHJhdGlvID0gc3QucmF0aW87XG5cblx0XHRcdFx0cmF0aW8gPSAhaXNOYU4ocmF0aW8pID8gcmF0aW8gOiByYXRpbygpO1xuXG5cdFx0XHRcdGlmKHJhdGlvID4gMSkge1xuXHRcdFx0XHRcdF9tZnBPbignSW1hZ2VIYXNTaXplJyArICcuJyArIFJFVElOQV9OUywgZnVuY3Rpb24oZSwgaXRlbSkge1xuXHRcdFx0XHRcdFx0aXRlbS5pbWcuY3NzKHtcblx0XHRcdFx0XHRcdFx0J21heC13aWR0aCc6IGl0ZW0uaW1nWzBdLm5hdHVyYWxXaWR0aCAvIHJhdGlvLFxuXHRcdFx0XHRcdFx0XHQnd2lkdGgnOiAnMTAwJSdcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdF9tZnBPbignRWxlbWVudFBhcnNlJyArICcuJyArIFJFVElOQV9OUywgZnVuY3Rpb24oZSwgaXRlbSkge1xuXHRcdFx0XHRcdFx0aXRlbS5zcmMgPSBzdC5yZXBsYWNlU3JjKGl0ZW0sIHJhdGlvKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG59KTtcblxuLyo+PnJldGluYSovXG4gX2NoZWNrSW5zdGFuY2UoKTsgfSkpOyIsIi8qIVxyXG4gKiBTY3JvbGxNYWdpYyB2Mi4wLjcgKDIwMTktMDUtMDcpXHJcbiAqIFRoZSBqYXZhc2NyaXB0IGxpYnJhcnkgZm9yIG1hZ2ljYWwgc2Nyb2xsIGludGVyYWN0aW9ucy5cclxuICogKGMpIDIwMTkgSmFuIFBhZXBrZSAoQGphbnBhZXBrZSlcclxuICogUHJvamVjdCBXZWJzaXRlOiBodHRwOi8vc2Nyb2xsbWFnaWMuaW9cclxuICogXHJcbiAqIEB2ZXJzaW9uIDIuMC43XHJcbiAqIEBsaWNlbnNlIER1YWwgbGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2UgYW5kIEdQTC5cclxuICogQGF1dGhvciBKYW4gUGFlcGtlIC0gZS1tYWlsQGphbnBhZXBrZS5kZVxyXG4gKlxyXG4gKiBAZmlsZSBTY3JvbGxNYWdpYyBtYWluIGxpYnJhcnkuXHJcbiAqL1xyXG4vKipcclxuICogQG5hbWVzcGFjZSBTY3JvbGxNYWdpY1xyXG4gKi9cclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxyXG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xyXG5cdH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XHJcblx0XHQvLyBDb21tb25KU1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsXHJcblx0XHRyb290LlNjcm9sbE1hZ2ljID0gZmFjdG9yeSgpO1xyXG5cdH1cclxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdHZhciBTY3JvbGxNYWdpYyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdF91dGlsLmxvZygyLCAnKENPTVBBVElCSUxJVFkgTk9USUNFKSAtPiBBcyBvZiBTY3JvbGxNYWdpYyAyLjAuMCB5b3UgbmVlZCB0byB1c2UgXFwnbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKVxcJyB0byBjcmVhdGUgYSBuZXcgY29udHJvbGxlciBpbnN0YW5jZS4gVXNlIFxcJ25ldyBTY3JvbGxNYWdpYy5TY2VuZSgpXFwnIHRvIGluc3RhbmNlIGEgc2NlbmUuJyk7XHJcblx0fTtcclxuXHJcblx0U2Nyb2xsTWFnaWMudmVyc2lvbiA9IFwiMi4wLjdcIjtcclxuXHJcblx0Ly8gVE9ETzogdGVtcG9yYXJ5IHdvcmthcm91bmQgZm9yIGNocm9tZSdzIHNjcm9sbCBqaXR0ZXIgYnVnXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIGZ1bmN0aW9uICgpIHt9KTtcclxuXHJcblx0Ly8gZ2xvYmFsIGNvbnN0XHJcblx0dmFyIFBJTl9TUEFDRVJfQVRUUklCVVRFID0gXCJkYXRhLXNjcm9sbG1hZ2ljLXBpbi1zcGFjZXJcIjtcclxuXHJcblx0LyoqXHJcblx0ICogVGhlIG1haW4gY2xhc3MgdGhhdCBpcyBuZWVkZWQgb25jZSBwZXIgc2Nyb2xsIGNvbnRhaW5lci5cclxuXHQgKlxyXG5cdCAqIEBjbGFzc1xyXG5cdCAqXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiAvLyBiYXNpYyBpbml0aWFsaXphdGlvblxyXG5cdCAqIHZhciBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcclxuXHQgKlxyXG5cdCAqIC8vIHBhc3Npbmcgb3B0aW9uc1xyXG5cdCAqIHZhciBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoe2NvbnRhaW5lcjogXCIjbXlDb250YWluZXJcIiwgbG9nbGV2ZWw6IDN9KTtcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBBbiBvYmplY3QgY29udGFpbmluZyBvbmUgb3IgbW9yZSBvcHRpb25zIGZvciB0aGUgY29udHJvbGxlci5cclxuXHQgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gW29wdGlvbnMuY29udGFpbmVyPXdpbmRvd10gLSBBIHNlbGVjdG9yLCBET00gb2JqZWN0IHRoYXQgcmVmZXJlbmNlcyB0aGUgbWFpbiBjb250YWluZXIgZm9yIHNjcm9sbGluZy5cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnZlcnRpY2FsPXRydWVdIC0gU2V0cyB0aGUgc2Nyb2xsIG1vZGUgdG8gdmVydGljYWwgKGB0cnVlYCkgb3IgaG9yaXpvbnRhbCAoYGZhbHNlYCkgc2Nyb2xsaW5nLlxyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucy5nbG9iYWxTY2VuZU9wdGlvbnM9e31dIC0gVGhlc2Ugb3B0aW9ucyB3aWxsIGJlIHBhc3NlZCB0byBldmVyeSBTY2VuZSB0aGF0IGlzIGFkZGVkIHRvIHRoZSBjb250cm9sbGVyIHVzaW5nIHRoZSBhZGRTY2VuZSBtZXRob2QuIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIFNjZW5lIG9wdGlvbnMgc2VlIHtAbGluayBTY3JvbGxNYWdpYy5TY2VuZX0uXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmxvZ2xldmVsPTJdIExvZ2xldmVsIGZvciBkZWJ1Z2dpbmcuIE5vdGUgdGhhdCBsb2dnaW5nIGlzIGRpc2FibGVkIGluIHRoZSBtaW5pZmllZCB2ZXJzaW9uIG9mIFNjcm9sbE1hZ2ljLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICoqIGAwYCA9PiBzaWxlbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAqKiBgMWAgPT4gZXJyb3JzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKiogYDJgID0+IGVycm9ycywgd2FybmluZ3NcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAqKiBgM2AgPT4gZXJyb3JzLCB3YXJuaW5ncywgZGVidWdpbmZvXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWw9MTAwXSAtIFNvbWUgY2hhbmdlcyBkb24ndCBjYWxsIGV2ZW50cyBieSBkZWZhdWx0LCBsaWtlIGNoYW5naW5nIHRoZSBjb250YWluZXIgc2l6ZSBvciBtb3ZpbmcgYSBzY2VuZSB0cmlnZ2VyIGVsZW1lbnQuICBcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBUaGlzIGludGVydmFsIHBvbGxzIHRoZXNlIHBhcmFtZXRlcnMgdG8gZmlyZSB0aGUgbmVjZXNzYXJ5IGV2ZW50cy4gIFxyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IElmIHlvdSBkb24ndCB1c2UgY3VzdG9tIGNvbnRhaW5lcnMsIHRyaWdnZXIgZWxlbWVudHMgb3IgaGF2ZSBzdGF0aWMgbGF5b3V0cywgd2hlcmUgdGhlIHBvc2l0aW9ucyBvZiB0aGUgdHJpZ2dlciBlbGVtZW50cyBkb24ndCBjaGFuZ2UsIHlvdSBjYW4gc2V0IHRoaXMgdG8gMCBkaXNhYmxlIGludGVydmFsIGNoZWNraW5nIGFuZCBpbXByb3ZlIHBlcmZvcm1hbmNlLlxyXG5cdCAqXHJcblx0ICovXHJcblx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblx0XHQvKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogc2V0dGluZ3NcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cdFx0dmFyXHJcblx0XHRcdE5BTUVTUEFDRSA9ICdTY3JvbGxNYWdpYy5Db250cm9sbGVyJyxcclxuXHRcdFx0U0NST0xMX0RJUkVDVElPTl9GT1JXQVJEID0gJ0ZPUldBUkQnLFxyXG5cdFx0XHRTQ1JPTExfRElSRUNUSU9OX1JFVkVSU0UgPSAnUkVWRVJTRScsXHJcblx0XHRcdFNDUk9MTF9ESVJFQ1RJT05fUEFVU0VEID0gJ1BBVVNFRCcsXHJcblx0XHRcdERFRkFVTFRfT1BUSU9OUyA9IENPTlRST0xMRVJfT1BUSU9OUy5kZWZhdWx0cztcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogcHJpdmF0ZSB2YXJzXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHRcdHZhclxyXG5cdFx0XHRDb250cm9sbGVyID0gdGhpcyxcclxuXHRcdFx0X29wdGlvbnMgPSBfdXRpbC5leHRlbmQoe30sIERFRkFVTFRfT1BUSU9OUywgb3B0aW9ucyksXHJcblx0XHRcdF9zY2VuZU9iamVjdHMgPSBbXSxcclxuXHRcdFx0X3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlID0gZmFsc2UsIC8vIGNhbiBiZSBib29sZWFuICh0cnVlID0+IGFsbCBzY2VuZXMpIG9yIGFuIGFycmF5IG9mIHNjZW5lcyB0byBiZSB1cGRhdGVkXHJcblx0XHRcdF9zY3JvbGxQb3MgPSAwLFxyXG5cdFx0XHRfc2Nyb2xsRGlyZWN0aW9uID0gU0NST0xMX0RJUkVDVElPTl9QQVVTRUQsXHJcblx0XHRcdF9pc0RvY3VtZW50ID0gdHJ1ZSxcclxuXHRcdFx0X3ZpZXdQb3J0U2l6ZSA9IDAsXHJcblx0XHRcdF9lbmFibGVkID0gdHJ1ZSxcclxuXHRcdFx0X3VwZGF0ZVRpbWVvdXQsXHJcblx0XHRcdF9yZWZyZXNoVGltZW91dDtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogcHJpdmF0ZSBmdW5jdGlvbnNcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSW50ZXJuYWwgY29uc3RydWN0b3IgZnVuY3Rpb24gb2YgdGhlIFNjcm9sbE1hZ2ljIENvbnRyb2xsZXJcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGZvciAodmFyIGtleSBpbiBfb3B0aW9ucykge1xyXG5cdFx0XHRcdGlmICghREVGQVVMVF9PUFRJT05TLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0XHRcdGxvZygyLCBcIldBUk5JTkc6IFVua25vd24gb3B0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIlwiKTtcclxuXHRcdFx0XHRcdGRlbGV0ZSBfb3B0aW9uc1trZXldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRfb3B0aW9ucy5jb250YWluZXIgPSBfdXRpbC5nZXQuZWxlbWVudHMoX29wdGlvbnMuY29udGFpbmVyKVswXTtcclxuXHRcdFx0Ly8gY2hlY2sgU2Nyb2xsQ29udGFpbmVyXHJcblx0XHRcdGlmICghX29wdGlvbnMuY29udGFpbmVyKSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1IgY3JlYXRpbmcgb2JqZWN0IFwiICsgTkFNRVNQQUNFICsgXCI6IE5vIHZhbGlkIHNjcm9sbCBjb250YWluZXIgc3VwcGxpZWRcIik7XHJcblx0XHRcdFx0dGhyb3cgTkFNRVNQQUNFICsgXCIgaW5pdCBmYWlsZWQuXCI7IC8vIGNhbmNlbFxyXG5cdFx0XHR9XHJcblx0XHRcdF9pc0RvY3VtZW50ID0gX29wdGlvbnMuY29udGFpbmVyID09PSB3aW5kb3cgfHwgX29wdGlvbnMuY29udGFpbmVyID09PSBkb2N1bWVudC5ib2R5IHx8ICFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKF9vcHRpb25zLmNvbnRhaW5lcik7XHJcblx0XHRcdC8vIG5vcm1hbGl6ZSB0byB3aW5kb3dcclxuXHRcdFx0aWYgKF9pc0RvY3VtZW50KSB7XHJcblx0XHRcdFx0X29wdGlvbnMuY29udGFpbmVyID0gd2luZG93O1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIHVwZGF0ZSBjb250YWluZXIgc2l6ZSBpbW1lZGlhdGVseVxyXG5cdFx0XHRfdmlld1BvcnRTaXplID0gZ2V0Vmlld3BvcnRTaXplKCk7XHJcblx0XHRcdC8vIHNldCBldmVudCBoYW5kbGVyc1xyXG5cdFx0XHRfb3B0aW9ucy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvbkNoYW5nZSk7XHJcblx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uQ2hhbmdlKTtcclxuXHJcblx0XHRcdHZhciByaSA9IHBhcnNlSW50KF9vcHRpb25zLnJlZnJlc2hJbnRlcnZhbCwgMTApO1xyXG5cdFx0XHRfb3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWwgPSBfdXRpbC50eXBlLk51bWJlcihyaSkgPyByaSA6IERFRkFVTFRfT1BUSU9OUy5yZWZyZXNoSW50ZXJ2YWw7XHJcblx0XHRcdHNjaGVkdWxlUmVmcmVzaCgpO1xyXG5cclxuXHRcdFx0bG9nKDMsIFwiYWRkZWQgbmV3IFwiICsgTkFNRVNQQUNFICsgXCIgY29udHJvbGxlciAodlwiICsgU2Nyb2xsTWFnaWMudmVyc2lvbiArIFwiKVwiKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2hlZHVsZSB0aGUgbmV4dCBleGVjdXRpb24gb2YgdGhlIHJlZnJlc2ggZnVuY3Rpb25cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBzY2hlZHVsZVJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChfb3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWwgPiAwKSB7XHJcblx0XHRcdFx0X3JlZnJlc2hUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQocmVmcmVzaCwgX29wdGlvbnMucmVmcmVzaEludGVydmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERlZmF1bHQgZnVuY3Rpb24gdG8gZ2V0IHNjcm9sbCBwb3MgLSBvdmVyd3JpdGVhYmxlIHVzaW5nIGBDb250cm9sbGVyLnNjcm9sbFBvcyhuZXdGdW5jdGlvbilgXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgZ2V0U2Nyb2xsUG9zID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gX29wdGlvbnMudmVydGljYWwgPyBfdXRpbC5nZXQuc2Nyb2xsVG9wKF9vcHRpb25zLmNvbnRhaW5lcikgOiBfdXRpbC5nZXQuc2Nyb2xsTGVmdChfb3B0aW9ucy5jb250YWluZXIpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmlld3BvcnQgU2l6ZSAod2lkdGggdm9yIGhvcml6b250YWwsIGhlaWdodCBmb3IgdmVydGljYWwpXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgZ2V0Vmlld3BvcnRTaXplID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gX29wdGlvbnMudmVydGljYWwgPyBfdXRpbC5nZXQuaGVpZ2h0KF9vcHRpb25zLmNvbnRhaW5lcikgOiBfdXRpbC5nZXQud2lkdGgoX29wdGlvbnMuY29udGFpbmVyKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEZWZhdWx0IGZ1bmN0aW9uIHRvIHNldCBzY3JvbGwgcG9zIC0gb3ZlcndyaXRlYWJsZSB1c2luZyBgQ29udHJvbGxlci5zY3JvbGxUbyhuZXdGdW5jdGlvbilgXHJcblx0XHQgKiBNYWtlIGF2YWlsYWJsZSBwdWJsaWNseSBmb3IgcGlubmVkIG1vdXNld2hlZWwgd29ya2Fyb3VuZC5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBzZXRTY3JvbGxQb3MgPSB0aGlzLl9zZXRTY3JvbGxQb3MgPSBmdW5jdGlvbiAocG9zKSB7XHJcblx0XHRcdGlmIChfb3B0aW9ucy52ZXJ0aWNhbCkge1xyXG5cdFx0XHRcdGlmIChfaXNEb2N1bWVudCkge1xyXG5cdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKF91dGlsLmdldC5zY3JvbGxMZWZ0KCksIHBvcyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5zY3JvbGxUb3AgPSBwb3M7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChfaXNEb2N1bWVudCkge1xyXG5cdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKHBvcywgX3V0aWwuZ2V0LnNjcm9sbFRvcCgpKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X29wdGlvbnMuY29udGFpbmVyLnNjcm9sbExlZnQgPSBwb3M7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSGFuZGxlIHVwZGF0ZXMgaW4gY3ljbGVzIGluc3RlYWQgb2Ygb24gc2Nyb2xsIChwZXJmb3JtYW5jZSlcclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciB1cGRhdGVTY2VuZXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChfZW5hYmxlZCAmJiBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUpIHtcclxuXHRcdFx0XHQvLyBkZXRlcm1pbmUgc2NlbmVzIHRvIHVwZGF0ZVxyXG5cdFx0XHRcdHZhciBzY2VuZXNUb1VwZGF0ZSA9IF91dGlsLnR5cGUuQXJyYXkoX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlKSA/IF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSA6IF9zY2VuZU9iamVjdHMuc2xpY2UoMCk7XHJcblx0XHRcdFx0Ly8gcmVzZXQgc2NlbmVzXHJcblx0XHRcdFx0X3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlID0gZmFsc2U7XHJcblx0XHRcdFx0dmFyIG9sZFNjcm9sbFBvcyA9IF9zY3JvbGxQb3M7XHJcblx0XHRcdFx0Ly8gdXBkYXRlIHNjcm9sbCBwb3Mgbm93IGluc3RlYWQgb2Ygb25DaGFuZ2UsIGFzIGl0IG1pZ2h0IGhhdmUgY2hhbmdlZCBzaW5jZSBzY2hlZHVsaW5nIChpLmUuIGluLWJyb3dzZXIgc21vb3RoIHNjcm9sbClcclxuXHRcdFx0XHRfc2Nyb2xsUG9zID0gQ29udHJvbGxlci5zY3JvbGxQb3MoKTtcclxuXHRcdFx0XHR2YXIgZGVsdGFTY3JvbGwgPSBfc2Nyb2xsUG9zIC0gb2xkU2Nyb2xsUG9zO1xyXG5cdFx0XHRcdGlmIChkZWx0YVNjcm9sbCAhPT0gMCkgeyAvLyBzY3JvbGwgcG9zaXRpb24gY2hhbmdlZD9cclxuXHRcdFx0XHRcdF9zY3JvbGxEaXJlY3Rpb24gPSAoZGVsdGFTY3JvbGwgPiAwKSA/IFNDUk9MTF9ESVJFQ1RJT05fRk9SV0FSRCA6IFNDUk9MTF9ESVJFQ1RJT05fUkVWRVJTRTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gcmV2ZXJzZSBvcmRlciBvZiBzY2VuZXMgaWYgc2Nyb2xsaW5nIHJldmVyc2VcclxuXHRcdFx0XHRpZiAoX3Njcm9sbERpcmVjdGlvbiA9PT0gU0NST0xMX0RJUkVDVElPTl9SRVZFUlNFKSB7XHJcblx0XHRcdFx0XHRzY2VuZXNUb1VwZGF0ZS5yZXZlcnNlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIHVwZGF0ZSBzY2VuZXNcclxuXHRcdFx0XHRzY2VuZXNUb1VwZGF0ZS5mb3JFYWNoKGZ1bmN0aW9uIChzY2VuZSwgaW5kZXgpIHtcclxuXHRcdFx0XHRcdGxvZygzLCBcInVwZGF0aW5nIFNjZW5lIFwiICsgKGluZGV4ICsgMSkgKyBcIi9cIiArIHNjZW5lc1RvVXBkYXRlLmxlbmd0aCArIFwiIChcIiArIF9zY2VuZU9iamVjdHMubGVuZ3RoICsgXCIgdG90YWwpXCIpO1xyXG5cdFx0XHRcdFx0c2NlbmUudXBkYXRlKHRydWUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGlmIChzY2VuZXNUb1VwZGF0ZS5sZW5ndGggPT09IDAgJiYgX29wdGlvbnMubG9nbGV2ZWwgPj0gMykge1xyXG5cdFx0XHRcdFx0bG9nKDMsIFwidXBkYXRpbmcgMCBTY2VuZXMgKG5vdGhpbmcgYWRkZWQgdG8gY29udHJvbGxlcilcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSW5pdGlhbGl6ZXMgckFGIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgZGVib3VuY2VVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdF91cGRhdGVUaW1lb3V0ID0gX3V0aWwuckFGKHVwZGF0ZVNjZW5lcyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSGFuZGxlcyBDb250YWluZXIgY2hhbmdlc1xyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIG9uQ2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0bG9nKDMsIFwiZXZlbnQgZmlyZWQgY2F1c2luZyBhbiB1cGRhdGU6XCIsIGUudHlwZSk7XHJcblx0XHRcdGlmIChlLnR5cGUgPT0gXCJyZXNpemVcIikge1xyXG5cdFx0XHRcdC8vIHJlc2l6ZVxyXG5cdFx0XHRcdF92aWV3UG9ydFNpemUgPSBnZXRWaWV3cG9ydFNpemUoKTtcclxuXHRcdFx0XHRfc2Nyb2xsRGlyZWN0aW9uID0gU0NST0xMX0RJUkVDVElPTl9QQVVTRUQ7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gc2NoZWR1bGUgdXBkYXRlXHJcblx0XHRcdGlmIChfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgIT09IHRydWUpIHtcclxuXHRcdFx0XHRfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgPSB0cnVlO1xyXG5cdFx0XHRcdGRlYm91bmNlVXBkYXRlKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIHJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICghX2lzRG9jdW1lbnQpIHtcclxuXHRcdFx0XHQvLyBzaW11bGF0ZSByZXNpemUgZXZlbnQuIE9ubHkgd29ya3MgZm9yIHZpZXdwb3J0IHJlbGV2YW50IHBhcmFtIChwZXJmb3JtYW5jZSlcclxuXHRcdFx0XHRpZiAoX3ZpZXdQb3J0U2l6ZSAhPSBnZXRWaWV3cG9ydFNpemUoKSkge1xyXG5cdFx0XHRcdFx0dmFyIHJlc2l6ZUV2ZW50O1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0cmVzaXplRXZlbnQgPSBuZXcgRXZlbnQoJ3Jlc2l6ZScsIHtcclxuXHRcdFx0XHRcdFx0XHRidWJibGVzOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRjYW5jZWxhYmxlOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHsgLy8gc3R1cGlkIElFXHJcblx0XHRcdFx0XHRcdHJlc2l6ZUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcclxuXHRcdFx0XHRcdFx0cmVzaXplRXZlbnQuaW5pdEV2ZW50KFwicmVzaXplXCIsIGZhbHNlLCBmYWxzZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRfb3B0aW9ucy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChyZXNpemVFdmVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdF9zY2VuZU9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUsIGluZGV4KSB7IC8vIHJlZnJlc2ggYWxsIHNjZW5lc1xyXG5cdFx0XHRcdHNjZW5lLnJlZnJlc2goKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNjaGVkdWxlUmVmcmVzaCgpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNlbmQgYSBkZWJ1ZyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxyXG5cdFx0ICogcHJvdmlkZWQgcHVibGljbHkgd2l0aCBfbG9nIGZvciBwbHVnaW5zXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBsb2dsZXZlbCAtIFRoZSBsb2dsZXZlbCByZXF1aXJlZCB0byBpbml0aWF0ZSBvdXRwdXQgZm9yIHRoZSBtZXNzYWdlLlxyXG5cdFx0ICogQHBhcmFtIHsuLi5taXhlZH0gb3V0cHV0IC0gT25lIG9yIG1vcmUgdmFyaWFibGVzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgY29uc29sZS5cclxuXHRcdCAqL1xyXG5cdFx0dmFyIGxvZyA9IHRoaXMuX2xvZyA9IGZ1bmN0aW9uIChsb2dsZXZlbCwgb3V0cHV0KSB7XHJcblx0XHRcdGlmIChfb3B0aW9ucy5sb2dsZXZlbCA+PSBsb2dsZXZlbCkge1xyXG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDEsIDAsIFwiKFwiICsgTkFNRVNQQUNFICsgXCIpIC0+XCIpO1xyXG5cdFx0XHRcdF91dGlsLmxvZy5hcHBseSh3aW5kb3csIGFyZ3VtZW50cyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHQvLyBmb3Igc2NlbmVzIHdlIGhhdmUgZ2V0dGVycyBmb3IgZWFjaCBvcHRpb24sIGJ1dCBmb3IgdGhlIGNvbnRyb2xsZXIgd2UgZG9uJ3QsIHNvIHdlIG5lZWQgdG8gbWFrZSBpdCBhdmFpbGFibGUgZXh0ZXJuYWxseSBmb3IgcGx1Z2luc1xyXG5cdFx0dGhpcy5fb3B0aW9ucyA9IF9vcHRpb25zO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU29ydCBzY2VuZXMgaW4gYXNjZW5kaW5nIG9yZGVyIG9mIHRoZWlyIHN0YXJ0IG9mZnNldC5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHthcnJheX0gU2NlbmVzQXJyYXkgLSBhbiBhcnJheSBvZiBTY3JvbGxNYWdpYyBTY2VuZXMgdGhhdCBzaG91bGQgYmUgc29ydGVkXHJcblx0XHQgKiBAcmV0dXJuIHthcnJheX0gVGhlIHNvcnRlZCBhcnJheSBvZiBTY2VuZXMuXHJcblx0XHQgKi9cclxuXHRcdHZhciBzb3J0U2NlbmVzID0gZnVuY3Rpb24gKFNjZW5lc0FycmF5KSB7XHJcblx0XHRcdGlmIChTY2VuZXNBcnJheS5sZW5ndGggPD0gMSkge1xyXG5cdFx0XHRcdHJldHVybiBTY2VuZXNBcnJheTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR2YXIgc2NlbmVzID0gU2NlbmVzQXJyYXkuc2xpY2UoMCk7XHJcblx0XHRcdFx0c2NlbmVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuXHRcdFx0XHRcdHJldHVybiBhLnNjcm9sbE9mZnNldCgpID4gYi5zY3JvbGxPZmZzZXQoKSA/IDEgOiAtMTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gc2NlbmVzO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogcHVibGljIGZ1bmN0aW9uc1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGQgb25lIG9yZSBtb3JlIHNjZW5lKHMpIHRvIHRoZSBjb250cm9sbGVyLiAgXHJcblx0XHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBTY2VuZS5hZGRUbyhjb250cm9sbGVyKWAuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gd2l0aCBhIHByZXZpb3VzbHkgZGVmaW5lZCBzY2VuZVxyXG5cdFx0ICogY29udHJvbGxlci5hZGRTY2VuZShzY2VuZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gd2l0aCBhIG5ld2x5IGNyZWF0ZWQgc2NlbmUuXHJcblx0XHQgKiBjb250cm9sbGVyLmFkZFNjZW5lKG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7ZHVyYXRpb24gOiAwfSkpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGFkZGluZyBtdWx0aXBsZSBzY2VuZXNcclxuXHRcdCAqIGNvbnRyb2xsZXIuYWRkU2NlbmUoW3NjZW5lLCBzY2VuZTIsIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7ZHVyYXRpb24gOiAwfSldKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0geyhTY3JvbGxNYWdpYy5TY2VuZXxhcnJheSl9IG5ld1NjZW5lIC0gU2Nyb2xsTWFnaWMgU2NlbmUgb3IgQXJyYXkgb2YgU2NlbmVzIHRvIGJlIGFkZGVkIHRvIHRoZSBjb250cm9sbGVyLlxyXG5cdFx0ICogQHJldHVybiB7Q29udHJvbGxlcn0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuYWRkU2NlbmUgPSBmdW5jdGlvbiAobmV3U2NlbmUpIHtcclxuXHRcdFx0aWYgKF91dGlsLnR5cGUuQXJyYXkobmV3U2NlbmUpKSB7XHJcblx0XHRcdFx0bmV3U2NlbmUuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUsIGluZGV4KSB7XHJcblx0XHRcdFx0XHRDb250cm9sbGVyLmFkZFNjZW5lKHNjZW5lKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIGlmIChuZXdTY2VuZSBpbnN0YW5jZW9mIFNjcm9sbE1hZ2ljLlNjZW5lKSB7XHJcblx0XHRcdFx0aWYgKG5ld1NjZW5lLmNvbnRyb2xsZXIoKSAhPT0gQ29udHJvbGxlcikge1xyXG5cdFx0XHRcdFx0bmV3U2NlbmUuYWRkVG8oQ29udHJvbGxlcik7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChfc2NlbmVPYmplY3RzLmluZGV4T2YobmV3U2NlbmUpIDwgMCkge1xyXG5cdFx0XHRcdFx0Ly8gbmV3IHNjZW5lXHJcblx0XHRcdFx0XHRfc2NlbmVPYmplY3RzLnB1c2gobmV3U2NlbmUpOyAvLyBhZGQgdG8gYXJyYXlcclxuXHRcdFx0XHRcdF9zY2VuZU9iamVjdHMgPSBzb3J0U2NlbmVzKF9zY2VuZU9iamVjdHMpOyAvLyBzb3J0XHJcblx0XHRcdFx0XHRuZXdTY2VuZS5vbihcInNoaWZ0LmNvbnRyb2xsZXJfc29ydFwiLCBmdW5jdGlvbiAoKSB7IC8vIHJlc29ydCB3aGVuZXZlciBzY2VuZSBtb3Zlc1xyXG5cdFx0XHRcdFx0XHRfc2NlbmVPYmplY3RzID0gc29ydFNjZW5lcyhfc2NlbmVPYmplY3RzKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Ly8gaW5zZXJ0IEdsb2JhbCBkZWZhdWx0cy5cclxuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBfb3B0aW9ucy5nbG9iYWxTY2VuZU9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKG5ld1NjZW5lW2tleV0pIHtcclxuXHRcdFx0XHRcdFx0XHRuZXdTY2VuZVtrZXldLmNhbGwobmV3U2NlbmUsIF9vcHRpb25zLmdsb2JhbFNjZW5lT3B0aW9uc1trZXldKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bG9nKDMsIFwiYWRkaW5nIFNjZW5lIChub3cgXCIgKyBfc2NlbmVPYmplY3RzLmxlbmd0aCArIFwiIHRvdGFsKVwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1I6IGludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgZm9yICcuYWRkU2NlbmUoKSdcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlIG9uZSBvcmUgbW9yZSBzY2VuZShzKSBmcm9tIHRoZSBjb250cm9sbGVyLiAgXHJcblx0XHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBTY2VuZS5yZW1vdmUoKWAuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gcmVtb3ZlIGEgc2NlbmUgZnJvbSB0aGUgY29udHJvbGxlclxyXG5cdFx0ICogY29udHJvbGxlci5yZW1vdmVTY2VuZShzY2VuZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gcmVtb3ZlIG11bHRpcGxlIHNjZW5lcyBmcm9tIHRoZSBjb250cm9sbGVyXHJcblx0XHQgKiBjb250cm9sbGVyLnJlbW92ZVNjZW5lKFtzY2VuZSwgc2NlbmUyLCBzY2VuZTNdKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0geyhTY3JvbGxNYWdpYy5TY2VuZXxhcnJheSl9IFNjZW5lIC0gU2Nyb2xsTWFnaWMgU2NlbmUgb3IgQXJyYXkgb2YgU2NlbmVzIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgY29udHJvbGxlci5cclxuXHRcdCAqIEByZXR1cm5zIHtDb250cm9sbGVyfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5yZW1vdmVTY2VuZSA9IGZ1bmN0aW9uIChTY2VuZSkge1xyXG5cdFx0XHRpZiAoX3V0aWwudHlwZS5BcnJheShTY2VuZSkpIHtcclxuXHRcdFx0XHRTY2VuZS5mb3JFYWNoKGZ1bmN0aW9uIChzY2VuZSwgaW5kZXgpIHtcclxuXHRcdFx0XHRcdENvbnRyb2xsZXIucmVtb3ZlU2NlbmUoc2NlbmUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHZhciBpbmRleCA9IF9zY2VuZU9iamVjdHMuaW5kZXhPZihTY2VuZSk7XHJcblx0XHRcdFx0aWYgKGluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRcdFNjZW5lLm9mZihcInNoaWZ0LmNvbnRyb2xsZXJfc29ydFwiKTtcclxuXHRcdFx0XHRcdF9zY2VuZU9iamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdGxvZygzLCBcInJlbW92aW5nIFNjZW5lIChub3cgXCIgKyBfc2NlbmVPYmplY3RzLmxlbmd0aCArIFwiIGxlZnQpXCIpO1xyXG5cdFx0XHRcdFx0U2NlbmUucmVtb3ZlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHQgKiBVcGRhdGUgb25lIG9yZSBtb3JlIHNjZW5lKHMpIGFjY29yZGluZyB0byB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjb250YWluZXIuICBcclxuXHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBTY2VuZS51cGRhdGUoKWAuICBcclxuXHQgKiBUaGUgdXBkYXRlIG1ldGhvZCBjYWxjdWxhdGVzIHRoZSBzY2VuZSdzIHN0YXJ0IGFuZCBlbmQgcG9zaXRpb24gKGJhc2VkIG9uIHRoZSB0cmlnZ2VyIGVsZW1lbnQsIHRyaWdnZXIgaG9vaywgZHVyYXRpb24gYW5kIG9mZnNldCkgYW5kIGNoZWNrcyBpdCBhZ2FpbnN0IHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY29udGFpbmVyLiAgXHJcblx0ICogSXQgdGhlbiB1cGRhdGVzIHRoZSBjdXJyZW50IHNjZW5lIHN0YXRlIGFjY29yZGluZ2x5IChvciBkb2VzIG5vdGhpbmcsIGlmIHRoZSBzdGF0ZSBpcyBhbHJlYWR5IGNvcnJlY3QpIOKAkyBQaW5zIHdpbGwgYmUgc2V0IHRvIHRoZWlyIGNvcnJlY3QgcG9zaXRpb24gYW5kIHR3ZWVucyB3aWxsIGJlIHVwZGF0ZWQgdG8gdGhlaXIgY29ycmVjdCBwcm9ncmVzcy4gIFxyXG5cdCAqIF8qKk5vdGU6KiogVGhpcyBtZXRob2QgZ2V0cyBjYWxsZWQgY29uc3RhbnRseSB3aGVuZXZlciBDb250cm9sbGVyIGRldGVjdHMgYSBjaGFuZ2UuIFRoZSBvbmx5IGFwcGxpY2F0aW9uIGZvciB5b3UgaXMgaWYgeW91IGNoYW5nZSBzb21ldGhpbmcgb3V0c2lkZSBvZiB0aGUgcmVhbG0gb2YgU2Nyb2xsTWFnaWMsIGxpa2UgbW92aW5nIHRoZSB0cmlnZ2VyIG9yIGNoYW5naW5nIHR3ZWVuIHBhcmFtZXRlcnMuX1xyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAZXhhbXBsZVxyXG5cdCAqIC8vIHVwZGF0ZSBhIHNwZWNpZmljIHNjZW5lIG9uIG5leHQgY3ljbGVcclxuIFx0ICogY29udHJvbGxlci51cGRhdGVTY2VuZShzY2VuZSk7XHJcbiBcdCAqXHJcblx0ICogLy8gdXBkYXRlIGEgc3BlY2lmaWMgc2NlbmUgaW1tZWRpYXRlbHlcclxuXHQgKiBjb250cm9sbGVyLnVwZGF0ZVNjZW5lKHNjZW5lLCB0cnVlKTtcclxuIFx0ICpcclxuXHQgKiAvLyB1cGRhdGUgbXVsdGlwbGUgc2NlbmVzIHNjZW5lIG9uIG5leHQgY3ljbGVcclxuXHQgKiBjb250cm9sbGVyLnVwZGF0ZVNjZW5lKFtzY2VuZTEsIHNjZW5lMiwgc2NlbmUzXSk7XHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Njcm9sbE1hZ2ljLlNjZW5lfSBTY2VuZSAtIFNjcm9sbE1hZ2ljIFNjZW5lIG9yIEFycmF5IG9mIFNjZW5lcyB0aGF0IGlzL2FyZSBzdXBwb3NlZCB0byBiZSB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ltbWVkaWF0ZWx5PWZhbHNlXSAtIElmIGB0cnVlYCB0aGUgdXBkYXRlIHdpbGwgYmUgaW5zdGFudCwgaWYgYGZhbHNlYCBpdCB3aWxsIHdhaXQgdW50aWwgbmV4dCB1cGRhdGUgY3ljbGUuICBcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHQgIFRoaXMgaXMgdXNlZnVsIHdoZW4gY2hhbmdpbmcgbXVsdGlwbGUgcHJvcGVydGllcyBvZiB0aGUgc2NlbmUgLSB0aGlzIHdheSBpdCB3aWxsIG9ubHkgYmUgdXBkYXRlZCBvbmNlIGFsbCBuZXcgcHJvcGVydGllcyBhcmUgc2V0ICh1cGRhdGVTY2VuZXMpLlxyXG5cdCAqIEByZXR1cm4ge0NvbnRyb2xsZXJ9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdCAqL1xyXG5cdFx0dGhpcy51cGRhdGVTY2VuZSA9IGZ1bmN0aW9uIChTY2VuZSwgaW1tZWRpYXRlbHkpIHtcclxuXHRcdFx0aWYgKF91dGlsLnR5cGUuQXJyYXkoU2NlbmUpKSB7XHJcblx0XHRcdFx0U2NlbmUuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUsIGluZGV4KSB7XHJcblx0XHRcdFx0XHRDb250cm9sbGVyLnVwZGF0ZVNjZW5lKHNjZW5lLCBpbW1lZGlhdGVseSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKGltbWVkaWF0ZWx5KSB7XHJcblx0XHRcdFx0XHRTY2VuZS51cGRhdGUodHJ1ZSk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgIT09IHRydWUgJiYgU2NlbmUgaW5zdGFuY2VvZiBTY3JvbGxNYWdpYy5TY2VuZSkgeyAvLyBpZiBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgaXMgdHJ1ZSwgYWxsIGNvbm5lY3RlZCBzY2VuZXMgYXJlIGFscmVhZHkgc2NoZWR1bGVkIGZvciB1cGRhdGVcclxuXHRcdFx0XHRcdC8vIHByZXAgYXJyYXkgZm9yIG5leHQgdXBkYXRlIGN5Y2xlXHJcblx0XHRcdFx0XHRfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgPSBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgfHwgW107XHJcblx0XHRcdFx0XHRpZiAoX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlLmluZGV4T2YoU2NlbmUpID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZS5wdXNoKFNjZW5lKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSA9IHNvcnRTY2VuZXMoX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlKTsgLy8gc29ydFxyXG5cdFx0XHRcdFx0ZGVib3VuY2VVcGRhdGUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlcyB0aGUgY29udHJvbGxlciBwYXJhbXMgYW5kIGNhbGxzIHVwZGF0ZVNjZW5lIG9uIGV2ZXJ5IHNjZW5lLCB0aGF0IGlzIGF0dGFjaGVkIHRvIHRoZSBjb250cm9sbGVyLiAgXHJcblx0XHQgKiBTZWUgYENvbnRyb2xsZXIudXBkYXRlU2NlbmUoKWAgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCB0aGlzIG1lYW5zLiAgXHJcblx0XHQgKiBJbiBtb3N0IGNhc2VzIHlvdSB3aWxsIG5vdCBuZWVkIHRoaXMgZnVuY3Rpb24sIGFzIGl0IGlzIGNhbGxlZCBjb25zdGFudGx5LCB3aGVuZXZlciBTY3JvbGxNYWdpYyBkZXRlY3RzIGEgc3RhdGUgY2hhbmdlIGV2ZW50LCBsaWtlIHJlc2l6ZSBvciBzY3JvbGwuICBcclxuXHRcdCAqIFRoZSBvbmx5IGFwcGxpY2F0aW9uIGZvciB0aGlzIG1ldGhvZCBpcyB3aGVuIFNjcm9sbE1hZ2ljIGZhaWxzIHRvIGRldGVjdCB0aGVzZSBldmVudHMuICBcclxuXHRcdCAqIE9uZSBhcHBsaWNhdGlvbiBpcyB3aXRoIHNvbWUgZXh0ZXJuYWwgc2Nyb2xsIGxpYnJhcmllcyAobGlrZSBpU2Nyb2xsKSB0aGF0IG1vdmUgYW4gaW50ZXJuYWwgY29udGFpbmVyIHRvIGEgbmVnYXRpdmUgb2Zmc2V0IGluc3RlYWQgb2YgYWN0dWFsbHkgc2Nyb2xsaW5nLiBJbiB0aGlzIGNhc2UgdGhlIHVwZGF0ZSBvbiB0aGUgY29udHJvbGxlciBuZWVkcyB0byBiZSBjYWxsZWQgd2hlbmV2ZXIgdGhlIGNoaWxkIGNvbnRhaW5lcidzIHBvc2l0aW9uIGNoYW5nZXMuXHJcblx0XHQgKiBGb3IgdGhpcyBjYXNlIHRoZXJlIHdpbGwgYWxzbyBiZSB0aGUgbmVlZCB0byBwcm92aWRlIGEgY3VzdG9tIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgY29ycmVjdCBzY3JvbGwgcG9zaXRpb24uIFNlZSBgQ29udHJvbGxlci5zY3JvbGxQb3MoKWAgZm9yIGRldGFpbHMuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gdXBkYXRlIHRoZSBjb250cm9sbGVyIG9uIG5leHQgY3ljbGUgKHNhdmVzIHBlcmZvcm1hbmNlIGR1ZSB0byBlbGltaW5hdGlvbiBvZiByZWR1bmRhbnQgdXBkYXRlcylcclxuXHRcdCAqIGNvbnRyb2xsZXIudXBkYXRlKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gdXBkYXRlIHRoZSBjb250cm9sbGVyIGltbWVkaWF0ZWx5XHJcblx0XHQgKiBjb250cm9sbGVyLnVwZGF0ZSh0cnVlKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtpbW1lZGlhdGVseT1mYWxzZV0gLSBJZiBgdHJ1ZWAgdGhlIHVwZGF0ZSB3aWxsIGJlIGluc3RhbnQsIGlmIGBmYWxzZWAgaXQgd2lsbCB3YWl0IHVudGlsIG5leHQgdXBkYXRlIGN5Y2xlIChiZXR0ZXIgcGVyZm9ybWFuY2UpXHJcblx0XHQgKiBAcmV0dXJuIHtDb250cm9sbGVyfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoaW1tZWRpYXRlbHkpIHtcclxuXHRcdFx0b25DaGFuZ2Uoe1xyXG5cdFx0XHRcdHR5cGU6IFwicmVzaXplXCJcclxuXHRcdFx0fSk7IC8vIHdpbGwgdXBkYXRlIHNpemUgYW5kIHNldCBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgdG8gdHJ1ZVxyXG5cdFx0XHRpZiAoaW1tZWRpYXRlbHkpIHtcclxuXHRcdFx0XHR1cGRhdGVTY2VuZXMoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTY3JvbGwgdG8gYSBudW1lcmljIHNjcm9sbCBvZmZzZXQsIGEgRE9NIGVsZW1lbnQsIHRoZSBzdGFydCBvZiBhIHNjZW5lIG9yIHByb3ZpZGUgYW4gYWx0ZXJuYXRlIG1ldGhvZCBmb3Igc2Nyb2xsaW5nLiAgXHJcblx0XHQgKiBGb3IgdmVydGljYWwgY29udHJvbGxlcnMgaXQgd2lsbCBjaGFuZ2UgdGhlIHRvcCBzY3JvbGwgb2Zmc2V0IGFuZCBmb3IgaG9yaXpvbnRhbCBhcHBsaWNhdGlvbnMgaXQgd2lsbCBjaGFuZ2UgdGhlIGxlZnQgb2Zmc2V0LlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICpcclxuXHRcdCAqIEBzaW5jZSAxLjEuMFxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHNjcm9sbCB0byBhbiBvZmZzZXQgb2YgMTAwXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2Nyb2xsIHRvIGEgRE9NIGVsZW1lbnRcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oXCIjYW5jaG9yXCIpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNjcm9sbCB0byB0aGUgYmVnaW5uaW5nIG9mIGEgc2NlbmVcclxuXHRcdCAqIHZhciBzY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7b2Zmc2V0OiAyMDB9KTtcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oc2NlbmUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGRlZmluZSBhIG5ldyBzY3JvbGwgcG9zaXRpb24gbW9kaWZpY2F0aW9uIGZ1bmN0aW9uIChqUXVlcnkgYW5pbWF0ZSBpbnN0ZWFkIG9mIGp1bXApXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKGZ1bmN0aW9uIChuZXdTY3JvbGxQb3MpIHtcclxuXHRcdCAqXHQkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IG5ld1Njcm9sbFBvc30pO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCk7IC8vIGNhbGwgYXMgdXN1YWwsIGJ1dCB0aGUgbmV3IGZ1bmN0aW9uIHdpbGwgYmUgdXNlZCBpbnN0ZWFkXHJcblx0XHQgKlxyXG5cdFx0ICogLy8gZGVmaW5lIGEgbmV3IHNjcm9sbCBmdW5jdGlvbiB3aXRoIGFuIGFkZGl0aW9uYWwgcGFyYW1ldGVyXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKGZ1bmN0aW9uIChuZXdTY3JvbGxQb3MsIG1lc3NhZ2UpIHtcclxuXHRcdCAqICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuXHRcdCAqXHQkKHRoaXMpLmFuaW1hdGUoe3Njcm9sbFRvcDogbmV3U2Nyb2xsUG9zfSk7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqIC8vIGNhbGwgYXMgdXN1YWwsIGJ1dCBzdXBwbHkgYW4gZXh0cmEgcGFyYW1ldGVyIHRvIHRoZSBkZWZpbmVkIGN1c3RvbSBmdW5jdGlvblxyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbygxMDAsIFwibXkgbWVzc2FnZVwiKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBkZWZpbmUgYSBuZXcgc2Nyb2xsIGZ1bmN0aW9uIHdpdGggYW4gYWRkaXRpb25hbCBwYXJhbWV0ZXIgY29udGFpbmluZyBtdWx0aXBsZSB2YXJpYWJsZXNcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oZnVuY3Rpb24gKG5ld1Njcm9sbFBvcywgb3B0aW9ucykge1xyXG5cdFx0ICogIHNvbWVHbG9iYWxWYXIgPSBvcHRpb25zLmEgKyBvcHRpb25zLmI7XHJcblx0XHQgKlx0JCh0aGlzKS5hbmltYXRlKHtzY3JvbGxUb3A6IG5ld1Njcm9sbFBvc30pO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKiAvLyBjYWxsIGFzIHVzdWFsLCBidXQgc3VwcGx5IGFuIGV4dHJhIHBhcmFtZXRlciBjb250YWluaW5nIG11bHRpcGxlIG9wdGlvbnNcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oMTAwLCB7YTogMSwgYjogMn0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIGRlZmluZSBhIG5ldyBzY3JvbGwgZnVuY3Rpb24gd2l0aCBhIGNhbGxiYWNrIHN1cHBsaWVkIGFzIGFuIGFkZGl0aW9uYWwgcGFyYW1ldGVyXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKGZ1bmN0aW9uIChuZXdTY3JvbGxQb3MsIGNhbGxiYWNrKSB7XHJcblx0XHQgKlx0JCh0aGlzKS5hbmltYXRlKHtzY3JvbGxUb3A6IG5ld1Njcm9sbFBvc30sIDQwMCwgXCJzd2luZ1wiLCBjYWxsYmFjayk7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqIC8vIGNhbGwgYXMgdXN1YWwsIGJ1dCBzdXBwbHkgYW4gZXh0cmEgcGFyYW1ldGVyLCB3aGljaCBpcyB1c2VkIGFzIGEgY2FsbGJhY2sgaW4gdGhlIHByZXZpb3VzbHkgZGVmaW5lZCBjdXN0b20gc2Nyb2xsIGZ1bmN0aW9uXHJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCwgZnVuY3Rpb24oKSB7XHJcblx0XHQgKlx0Y29uc29sZS5sb2coXCJzY3JvbGwgaGFzIGZpbmlzaGVkLlwiKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7bWl4ZWR9IHNjcm9sbFRhcmdldCAtIFRoZSBzdXBwbGllZCBhcmd1bWVudCBjYW4gYmUgb25lIG9mIHRoZXNlIHR5cGVzOlxyXG5cdFx0ICogMS4gYG51bWJlcmAgLT4gVGhlIGNvbnRhaW5lciB3aWxsIHNjcm9sbCB0byB0aGlzIG5ldyBzY3JvbGwgb2Zmc2V0LlxyXG5cdFx0ICogMi4gYHN0cmluZ2Agb3IgYG9iamVjdGAgLT4gQ2FuIGJlIGEgc2VsZWN0b3Igb3IgYSBET00gb2JqZWN0LiAgXHJcblx0XHQgKiAgVGhlIGNvbnRhaW5lciB3aWxsIHNjcm9sbCB0byB0aGUgcG9zaXRpb24gb2YgdGhpcyBlbGVtZW50LlxyXG5cdFx0ICogMy4gYFNjcm9sbE1hZ2ljIFNjZW5lYCAtPiBUaGUgY29udGFpbmVyIHdpbGwgc2Nyb2xsIHRvIHRoZSBzdGFydCBvZiB0aGlzIHNjZW5lLlxyXG5cdFx0ICogNC4gYGZ1bmN0aW9uYCAtPiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgdXNlZCBmb3IgZnV0dXJlIHNjcm9sbCBwb3NpdGlvbiBtb2RpZmljYXRpb25zLiAgXHJcblx0XHQgKiAgVGhpcyBwcm92aWRlcyBhIHdheSBmb3IgeW91IHRvIGNoYW5nZSB0aGUgYmVoYXZpb3VyIG9mIHNjcm9sbGluZyBhbmQgYWRkaW5nIG5ldyBiZWhhdmlvdXIgbGlrZSBhbmltYXRpb24uIFRoZSBmdW5jdGlvbiByZWNlaXZlcyB0aGUgbmV3IHNjcm9sbCBwb3NpdGlvbiBhcyBhIHBhcmFtZXRlciBhbmQgYSByZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50IHVzaW5nIGB0aGlzYC4gIFxyXG5cdFx0ICogIEl0IG1heSBhbHNvIG9wdGlvbmFsbHkgcmVjZWl2ZSBhbiBvcHRpb25hbCBhZGRpdGlvbmFsIHBhcmFtZXRlciAoc2VlIGJlbG93KSAgXHJcblx0XHQgKiAgXyoqTk9URToqKiAgXHJcblx0XHQgKiAgQWxsIG90aGVyIG9wdGlvbnMgd2lsbCBzdGlsbCB3b3JrIGFzIGV4cGVjdGVkLCB1c2luZyB0aGUgbmV3IGZ1bmN0aW9uIHRvIHNjcm9sbC5fXHJcblx0XHQgKiBAcGFyYW0ge21peGVkfSBbYWRkaXRpb25hbFBhcmFtZXRlcl0gLSBJZiBhIGN1c3RvbSBzY3JvbGwgZnVuY3Rpb24gd2FzIGRlZmluZWQgKHNlZSBhYm92ZSA0LiksIHlvdSBtYXkgd2FudCB0byBzdXBwbHkgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGl0LCB3aGVuIGNhbGxpbmcgaXQuIFlvdSBjYW4gZG8gdGhpcyB1c2luZyB0aGlzIHBhcmFtZXRlciDigJMgc2VlIGV4YW1wbGVzIGZvciBkZXRhaWxzLiBQbGVhc2Ugbm90ZSwgdGhhdCB0aGlzIHBhcmFtZXRlciB3aWxsIGhhdmUgbm8gZWZmZWN0LCBpZiB5b3UgdXNlIHRoZSBkZWZhdWx0IHNjcm9sbGluZyBmdW5jdGlvbi5cclxuXHRcdCAqIEByZXR1cm5zIHtDb250cm9sbGVyfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5zY3JvbGxUbyA9IGZ1bmN0aW9uIChzY3JvbGxUYXJnZXQsIGFkZGl0aW9uYWxQYXJhbWV0ZXIpIHtcclxuXHRcdFx0aWYgKF91dGlsLnR5cGUuTnVtYmVyKHNjcm9sbFRhcmdldCkpIHsgLy8gZXhjZWN1dGVcclxuXHRcdFx0XHRzZXRTY3JvbGxQb3MuY2FsbChfb3B0aW9ucy5jb250YWluZXIsIHNjcm9sbFRhcmdldCwgYWRkaXRpb25hbFBhcmFtZXRlcik7XHJcblx0XHRcdH0gZWxzZSBpZiAoc2Nyb2xsVGFyZ2V0IGluc3RhbmNlb2YgU2Nyb2xsTWFnaWMuU2NlbmUpIHsgLy8gc2Nyb2xsIHRvIHNjZW5lXHJcblx0XHRcdFx0aWYgKHNjcm9sbFRhcmdldC5jb250cm9sbGVyKCkgPT09IENvbnRyb2xsZXIpIHsgLy8gY2hlY2sgaWYgdGhlIGNvbnRyb2xsZXIgaXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgc2NlbmVcclxuXHRcdFx0XHRcdENvbnRyb2xsZXIuc2Nyb2xsVG8oc2Nyb2xsVGFyZ2V0LnNjcm9sbE9mZnNldCgpLCBhZGRpdGlvbmFsUGFyYW1ldGVyKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bG9nKDIsIFwic2Nyb2xsVG8oKTogVGhlIHN1cHBsaWVkIHNjZW5lIGRvZXMgbm90IGJlbG9uZyB0byB0aGlzIGNvbnRyb2xsZXIuIFNjcm9sbCBjYW5jZWxsZWQuXCIsIHNjcm9sbFRhcmdldCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKF91dGlsLnR5cGUuRnVuY3Rpb24oc2Nyb2xsVGFyZ2V0KSkgeyAvLyBhc3NpZ24gbmV3IHNjcm9sbCBmdW5jdGlvblxyXG5cdFx0XHRcdHNldFNjcm9sbFBvcyA9IHNjcm9sbFRhcmdldDtcclxuXHRcdFx0fSBlbHNlIHsgLy8gc2Nyb2xsIHRvIGVsZW1lbnRcclxuXHRcdFx0XHR2YXIgZWxlbSA9IF91dGlsLmdldC5lbGVtZW50cyhzY3JvbGxUYXJnZXQpWzBdO1xyXG5cdFx0XHRcdGlmIChlbGVtKSB7XHJcblx0XHRcdFx0XHQvLyBpZiBwYXJlbnQgaXMgcGluIHNwYWNlciwgdXNlIHNwYWNlciBwb3NpdGlvbiBpbnN0ZWFkIHNvIGNvcnJlY3Qgc3RhcnQgcG9zaXRpb24gaXMgcmV0dXJuZWQgZm9yIHBpbm5lZCBlbGVtZW50cy5cclxuXHRcdFx0XHRcdHdoaWxlIChlbGVtLnBhcmVudE5vZGUuaGFzQXR0cmlidXRlKFBJTl9TUEFDRVJfQVRUUklCVVRFKSkge1xyXG5cdFx0XHRcdFx0XHRlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRwYXJhbSA9IF9vcHRpb25zLnZlcnRpY2FsID8gXCJ0b3BcIiA6IFwibGVmdFwiLCAvLyB3aGljaCBwYXJhbSBpcyBvZiBpbnRlcmVzdCA/XHJcblx0XHRcdFx0XHRcdGNvbnRhaW5lck9mZnNldCA9IF91dGlsLmdldC5vZmZzZXQoX29wdGlvbnMuY29udGFpbmVyKSwgLy8gY29udGFpbmVyIHBvc2l0aW9uIGlzIG5lZWRlZCBiZWNhdXNlIGVsZW1lbnQgb2Zmc2V0IGlzIHJldHVybmVkIGluIHJlbGF0aW9uIHRvIGRvY3VtZW50LCBub3QgaW4gcmVsYXRpb24gdG8gY29udGFpbmVyLlxyXG5cdFx0XHRcdFx0XHRlbGVtZW50T2Zmc2V0ID0gX3V0aWwuZ2V0Lm9mZnNldChlbGVtKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIV9pc0RvY3VtZW50KSB7IC8vIGNvbnRhaW5lciBpcyBub3QgdGhlIGRvY3VtZW50IHJvb3QsIHNvIHN1YnN0cmFjdCBzY3JvbGwgUG9zaXRpb24gdG8gZ2V0IGNvcnJlY3QgdHJpZ2dlciBlbGVtZW50IHBvc2l0aW9uIHJlbGF0aXZlIHRvIHNjcm9sbGNvbnRlbnRcclxuXHRcdFx0XHRcdFx0Y29udGFpbmVyT2Zmc2V0W3BhcmFtXSAtPSBDb250cm9sbGVyLnNjcm9sbFBvcygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdENvbnRyb2xsZXIuc2Nyb2xsVG8oZWxlbWVudE9mZnNldFtwYXJhbV0gLSBjb250YWluZXJPZmZzZXRbcGFyYW1dLCBhZGRpdGlvbmFsUGFyYW1ldGVyKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bG9nKDIsIFwic2Nyb2xsVG8oKTogVGhlIHN1cHBsaWVkIGFyZ3VtZW50IGlzIGludmFsaWQuIFNjcm9sbCBjYW5jZWxsZWQuXCIsIHNjcm9sbFRhcmdldCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0KiogdGhlIGN1cnJlbnQgc2Nyb2xsUG9zaXRpb24gb3IgKipTZXQqKiBhIG5ldyBtZXRob2QgdG8gY2FsY3VsYXRlIGl0LiAgXHJcblx0XHQgKiAtPiAqKkdFVCoqOlxyXG5cdFx0ICogV2hlbiB1c2VkIGFzIGEgZ2V0dGVyIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uLiAgXHJcblx0XHQgKiBUbyBnZXQgYSBjYWNoZWQgdmFsdWUgdXNlIENvbnRyb2xsZXIuaW5mbyhcInNjcm9sbFBvc1wiKSwgd2hpY2ggd2lsbCBiZSB1cGRhdGVkIGluIHRoZSB1cGRhdGUgY3ljbGUuICBcclxuXHRcdCAqIEZvciB2ZXJ0aWNhbCBjb250cm9sbGVycyBpdCB3aWxsIHJldHVybiB0aGUgdG9wIHNjcm9sbCBvZmZzZXQgYW5kIGZvciBob3Jpem9udGFsIGFwcGxpY2F0aW9ucyBpdCB3aWxsIHJldHVybiB0aGUgbGVmdCBvZmZzZXQuXHJcblx0XHQgKlxyXG5cdFx0ICogLT4gKipTRVQqKjpcclxuXHRcdCAqIFdoZW4gdXNlZCBhcyBhIHNldHRlciB0aGlzIG1ldGhvZCBwcm9kZXMgYSB3YXkgdG8gcGVybWFuZW50bHkgb3ZlcndyaXRlIHRoZSBjb250cm9sbGVyJ3Mgc2Nyb2xsIHBvc2l0aW9uIGNhbGN1bGF0aW9uLiAgXHJcblx0XHQgKiBBIHR5cGljYWwgdXNlY2FzZSBpcyB3aGVuIHRoZSBzY3JvbGwgcG9zaXRpb24gaXMgbm90IHJlZmxlY3RlZCBieSB0aGUgY29udGFpbmVycyBzY3JvbGxUb3Agb3Igc2Nyb2xsTGVmdCB2YWx1ZXMsIGJ1dCBmb3IgZXhhbXBsZSBieSB0aGUgaW5uZXIgb2Zmc2V0IG9mIGEgY2hpbGQgY29udGFpbmVyLiAgXHJcblx0XHQgKiBNb3ZpbmcgYSBjaGlsZCBjb250YWluZXIgaW5zaWRlIGEgcGFyZW50IGlzIGEgY29tbW9ubHkgdXNlZCBtZXRob2QgZm9yIHNldmVyYWwgc2Nyb2xsaW5nIGZyYW1ld29ya3MsIGluY2x1ZGluZyBpU2Nyb2xsLiAgXHJcblx0XHQgKiBCeSBwcm92aWRpbmcgYW4gYWx0ZXJuYXRlIGNhbGN1bGF0aW9uIGZ1bmN0aW9uIHlvdSBjYW4gbWFrZSBzdXJlIFNjcm9sbE1hZ2ljIHJlY2VpdmVzIHRoZSBjb3JyZWN0IHNjcm9sbCBwb3NpdGlvbi4gIFxyXG5cdFx0ICogUGxlYXNlIGFsc28gYmVhciBpbiBtaW5kIHRoYXQgeW91ciBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIHkgdmFsdWVzIGZvciB2ZXJ0aWNhbCBzY3JvbGxzIGFuIHggZm9yIGhvcml6b250YWxzLlxyXG5cdFx0ICpcclxuXHRcdCAqIFRvIGNoYW5nZSB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gcGxlYXNlIHVzZSBgQ29udHJvbGxlci5zY3JvbGxUbygpYC5cclxuXHRcdCAqIEBwdWJsaWNcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHNjcm9sbCBQb3NpdGlvblxyXG5cdFx0ICogdmFyIHNjcm9sbFBvcyA9IGNvbnRyb2xsZXIuc2Nyb2xsUG9zKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IGEgbmV3IHNjcm9sbCBwb3NpdGlvbiBjYWxjdWxhdGlvbiBtZXRob2RcclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsUG9zKGZ1bmN0aW9uICgpIHtcclxuXHRcdCAqXHRyZXR1cm4gdGhpcy5pbmZvKFwidmVydGljYWxcIikgPyAtbXljaGlsZGNvbnRhaW5lci55IDogLW15Y2hpbGRjb250YWluZXIueFxyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW3Njcm9sbFBvc01ldGhvZF0gLSBUaGUgZnVuY3Rpb24gdG8gYmUgdXNlZCBmb3IgdGhlIHNjcm9sbCBwb3NpdGlvbiBjYWxjdWxhdGlvbiBvZiB0aGUgY29udGFpbmVyLlxyXG5cdFx0ICogQHJldHVybnMgeyhudW1iZXJ8Q29udHJvbGxlcil9IEN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9yIHBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnNjcm9sbFBvcyA9IGZ1bmN0aW9uIChzY3JvbGxQb3NNZXRob2QpIHtcclxuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vIGdldFxyXG5cdFx0XHRcdHJldHVybiBnZXRTY3JvbGxQb3MuY2FsbChDb250cm9sbGVyKTtcclxuXHRcdFx0fSBlbHNlIHsgLy8gc2V0XHJcblx0XHRcdFx0aWYgKF91dGlsLnR5cGUuRnVuY3Rpb24oc2Nyb2xsUG9zTWV0aG9kKSkge1xyXG5cdFx0XHRcdFx0Z2V0U2Nyb2xsUG9zID0gc2Nyb2xsUG9zTWV0aG9kO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRsb2coMiwgXCJQcm92aWRlZCB2YWx1ZSBmb3IgbWV0aG9kICdzY3JvbGxQb3MnIGlzIG5vdCBhIGZ1bmN0aW9uLiBUbyBjaGFuZ2UgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHVzZSAnc2Nyb2xsVG8oKScuXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIGFsbCBpbmZvcyBvciBvbmUgaW4gcGFydGljdWxhciBhYm91dCB0aGUgY29udHJvbGxlci5cclxuXHRcdCAqIEBwdWJsaWNcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyByZXR1cm5zIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiAobnVtYmVyKVxyXG5cdFx0ICogdmFyIHNjcm9sbFBvcyA9IGNvbnRyb2xsZXIuaW5mbyhcInNjcm9sbFBvc1wiKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyByZXR1cm5zIGFsbCBpbmZvcyBhcyBhbiBvYmplY3RcclxuXHRcdCAqIHZhciBpbmZvcyA9IGNvbnRyb2xsZXIuaW5mbygpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbYWJvdXRdIC0gSWYgcGFzc2VkIG9ubHkgdGhpcyBpbmZvIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZCBvZiBhbiBvYmplY3QgY29udGFpbmluZyBhbGwuICBcclxuXHRcdCBcdFx0XHRcdFx0XHRcdCBWYWxpZCBvcHRpb25zIGFyZTpcclxuXHRcdCBcdFx0XHRcdFx0XHRcdCAqKiBgXCJzaXplXCJgID0+IHRoZSBjdXJyZW50IHZpZXdwb3J0IHNpemUgb2YgdGhlIGNvbnRhaW5lclxyXG5cdFx0IFx0XHRcdFx0XHRcdFx0ICoqIGBcInZlcnRpY2FsXCJgID0+IHRydWUgaWYgdmVydGljYWwgc2Nyb2xsaW5nLCBvdGhlcndpc2UgZmFsc2VcclxuXHRcdCBcdFx0XHRcdFx0XHRcdCAqKiBgXCJzY3JvbGxQb3NcImAgPT4gdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXHJcblx0XHQgXHRcdFx0XHRcdFx0XHQgKiogYFwic2Nyb2xsRGlyZWN0aW9uXCJgID0+IHRoZSBsYXN0IGtub3duIGRpcmVjdGlvbiBvZiB0aGUgc2Nyb2xsXHJcblx0XHQgXHRcdFx0XHRcdFx0XHQgKiogYFwiY29udGFpbmVyXCJgID0+IHRoZSBjb250YWluZXIgZWxlbWVudFxyXG5cdFx0IFx0XHRcdFx0XHRcdFx0ICoqIGBcImlzRG9jdW1lbnRcImAgPT4gdHJ1ZSBpZiBjb250YWluZXIgZWxlbWVudCBpcyB0aGUgZG9jdW1lbnQuXHJcblx0XHQgKiBAcmV0dXJucyB7KG1peGVkfG9iamVjdCl9IFRoZSByZXF1ZXN0ZWQgaW5mbyhzKS5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5pbmZvID0gZnVuY3Rpb24gKGFib3V0KSB7XHJcblx0XHRcdHZhciB2YWx1ZXMgPSB7XHJcblx0XHRcdFx0c2l6ZTogX3ZpZXdQb3J0U2l6ZSwgLy8gY29udGFpbnMgaGVpZ2h0IG9yIHdpZHRoIChpbiByZWdhcmQgdG8gb3JpZW50YXRpb24pO1xyXG5cdFx0XHRcdHZlcnRpY2FsOiBfb3B0aW9ucy52ZXJ0aWNhbCxcclxuXHRcdFx0XHRzY3JvbGxQb3M6IF9zY3JvbGxQb3MsXHJcblx0XHRcdFx0c2Nyb2xsRGlyZWN0aW9uOiBfc2Nyb2xsRGlyZWN0aW9uLFxyXG5cdFx0XHRcdGNvbnRhaW5lcjogX29wdGlvbnMuY29udGFpbmVyLFxyXG5cdFx0XHRcdGlzRG9jdW1lbnQ6IF9pc0RvY3VtZW50XHJcblx0XHRcdH07XHJcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXQgYWxsIGFzIGFuIG9iamVjdFxyXG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XHJcblx0XHRcdH0gZWxzZSBpZiAodmFsdWVzW2Fib3V0XSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlc1thYm91dF07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1I6IG9wdGlvbiBcXFwiXCIgKyBhYm91dCArIFwiXFxcIiBpcyBub3QgYXZhaWxhYmxlXCIpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgY3VycmVudCBsb2dsZXZlbCBvcHRpb24gdmFsdWUuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCB2YWx1ZVxyXG5cdFx0ICogdmFyIGxvZ2xldmVsID0gY29udHJvbGxlci5sb2dsZXZlbCgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBhIG5ldyB2YWx1ZVxyXG5cdFx0ICogY29udHJvbGxlci5sb2dsZXZlbCgzKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW25ld0xvZ2xldmVsXSAtIFRoZSBuZXcgbG9nbGV2ZWwgc2V0dGluZyBvZiB0aGUgQ29udHJvbGxlci4gYFswLTNdYFxyXG5cdFx0ICogQHJldHVybnMgeyhudW1iZXJ8Q29udHJvbGxlcil9IEN1cnJlbnQgbG9nbGV2ZWwgb3IgcGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMubG9nbGV2ZWwgPSBmdW5jdGlvbiAobmV3TG9nbGV2ZWwpIHtcclxuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vIGdldFxyXG5cdFx0XHRcdHJldHVybiBfb3B0aW9ucy5sb2dsZXZlbDtcclxuXHRcdFx0fSBlbHNlIGlmIChfb3B0aW9ucy5sb2dsZXZlbCAhPSBuZXdMb2dsZXZlbCkgeyAvLyBzZXRcclxuXHRcdFx0XHRfb3B0aW9ucy5sb2dsZXZlbCA9IG5ld0xvZ2xldmVsO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgY3VycmVudCBlbmFibGVkIHN0YXRlIG9mIHRoZSBjb250cm9sbGVyLiAgXHJcblx0XHQgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGRpc2FibGUgYWxsIFNjZW5lcyBjb25uZWN0ZWQgdG8gdGhlIGNvbnRyb2xsZXIgd2l0aG91dCBkZXN0cm95aW5nIG9yIHJlbW92aW5nIHRoZW0uXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCB2YWx1ZVxyXG5cdFx0ICogdmFyIGVuYWJsZWQgPSBjb250cm9sbGVyLmVuYWJsZWQoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBkaXNhYmxlIHRoZSBjb250cm9sbGVyXHJcblx0XHQgKiBjb250cm9sbGVyLmVuYWJsZWQoZmFsc2UpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW25ld1N0YXRlXSAtIFRoZSBuZXcgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgY29udHJvbGxlciBgdHJ1ZWAgb3IgYGZhbHNlYC5cclxuXHRcdCAqIEByZXR1cm5zIHsoYm9vbGVhbnxDb250cm9sbGVyKX0gQ3VycmVudCBlbmFibGVkIHN0YXRlIG9yIHBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmVuYWJsZWQgPSBmdW5jdGlvbiAobmV3U3RhdGUpIHtcclxuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vIGdldFxyXG5cdFx0XHRcdHJldHVybiBfZW5hYmxlZDtcclxuXHRcdFx0fSBlbHNlIGlmIChfZW5hYmxlZCAhPSBuZXdTdGF0ZSkgeyAvLyBzZXRcclxuXHRcdFx0XHRfZW5hYmxlZCA9ICEhbmV3U3RhdGU7XHJcblx0XHRcdFx0Q29udHJvbGxlci51cGRhdGVTY2VuZShfc2NlbmVPYmplY3RzLCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEZXN0cm95IHRoZSBDb250cm9sbGVyLCBhbGwgU2NlbmVzIGFuZCBldmVyeXRoaW5nLlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyB3aXRob3V0IHJlc2V0dGluZyB0aGUgc2NlbmVzXHJcblx0XHQgKiBjb250cm9sbGVyID0gY29udHJvbGxlci5kZXN0cm95KCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gd2l0aCBzY2VuZSByZXNldFxyXG5cdFx0ICogY29udHJvbGxlciA9IGNvbnRyb2xsZXIuZGVzdHJveSh0cnVlKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXNldFNjZW5lcz1mYWxzZV0gLSBJZiBgdHJ1ZWAgdGhlIHBpbnMgYW5kIHR3ZWVucyAoaWYgZXhpc3RlbnQpIG9mIGFsbCBzY2VuZXMgd2lsbCBiZSByZXNldC5cclxuXHRcdCAqIEByZXR1cm5zIHtudWxsfSBOdWxsIHRvIHVuc2V0IGhhbmRsZXIgdmFyaWFibGVzLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAocmVzZXRTY2VuZXMpIHtcclxuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dChfcmVmcmVzaFRpbWVvdXQpO1xyXG5cdFx0XHR2YXIgaSA9IF9zY2VuZU9iamVjdHMubGVuZ3RoO1xyXG5cdFx0XHR3aGlsZSAoaS0tKSB7XHJcblx0XHRcdFx0X3NjZW5lT2JqZWN0c1tpXS5kZXN0cm95KHJlc2V0U2NlbmVzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRfb3B0aW9ucy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvbkNoYW5nZSk7XHJcblx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uQ2hhbmdlKTtcclxuXHRcdFx0X3V0aWwuY0FGKF91cGRhdGVUaW1lb3V0KTtcclxuXHRcdFx0bG9nKDMsIFwiZGVzdHJveWVkIFwiICsgTkFNRVNQQUNFICsgXCIgKHJlc2V0OiBcIiArIChyZXNldFNjZW5lcyA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiKSArIFwiKVwiKTtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIElOSVRcclxuXHRcdGNvbnN0cnVjdCgpO1xyXG5cdFx0cmV0dXJuIENvbnRyb2xsZXI7XHJcblx0fTtcclxuXHJcblx0Ly8gc3RvcmUgcGFnZXdpZGUgY29udHJvbGxlciBvcHRpb25zXHJcblx0dmFyIENPTlRST0xMRVJfT1BUSU9OUyA9IHtcclxuXHRcdGRlZmF1bHRzOiB7XHJcblx0XHRcdGNvbnRhaW5lcjogd2luZG93LFxyXG5cdFx0XHR2ZXJ0aWNhbDogdHJ1ZSxcclxuXHRcdFx0Z2xvYmFsU2NlbmVPcHRpb25zOiB7fSxcclxuXHRcdFx0bG9nbGV2ZWw6IDIsXHJcblx0XHRcdHJlZnJlc2hJbnRlcnZhbDogMTAwXHJcblx0XHR9XHJcblx0fTtcclxuXHQvKlxyXG5cdCAqIG1ldGhvZCB1c2VkIHRvIGFkZCBhbiBvcHRpb24gdG8gU2Nyb2xsTWFnaWMgU2NlbmVzLlxyXG5cdCAqL1xyXG5cdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIuYWRkT3B0aW9uID0gZnVuY3Rpb24gKG5hbWUsIGRlZmF1bHRWYWx1ZSkge1xyXG5cdFx0Q09OVFJPTExFUl9PUFRJT05TLmRlZmF1bHRzW25hbWVdID0gZGVmYXVsdFZhbHVlO1xyXG5cdH07XHJcblx0Ly8gaW5zdGFuY2UgZXh0ZW5zaW9uIGZ1bmN0aW9uIGZvciBwbHVnaW5zXHJcblx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlci5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5zaW9uKSB7XHJcblx0XHR2YXIgb2xkQ2xhc3MgPSB0aGlzO1xyXG5cdFx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0b2xkQ2xhc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0dGhpcy4kc3VwZXIgPSBfdXRpbC5leHRlbmQoe30sIHRoaXMpOyAvLyBjb3B5IHBhcmVudCBzdGF0ZVxyXG5cdFx0XHRyZXR1cm4gZXh0ZW5zaW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuXHRcdH07XHJcblx0XHRfdXRpbC5leHRlbmQoU2Nyb2xsTWFnaWMuQ29udHJvbGxlciwgb2xkQ2xhc3MpOyAvLyBjb3B5IHByb3BlcnRpZXNcclxuXHRcdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIucHJvdG90eXBlID0gb2xkQ2xhc3MucHJvdG90eXBlOyAvLyBjb3B5IHByb3RvdHlwZVxyXG5cdFx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTY3JvbGxNYWdpYy5Db250cm9sbGVyOyAvLyByZXN0b3JlIGNvbnN0cnVjdG9yXHJcblx0fTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEEgU2NlbmUgZGVmaW5lcyB3aGVyZSB0aGUgY29udHJvbGxlciBzaG91bGQgcmVhY3QgYW5kIGhvdy5cclxuXHQgKlxyXG5cdCAqIEBjbGFzc1xyXG5cdCAqXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiAvLyBjcmVhdGUgYSBzdGFuZGFyZCBzY2VuZSBhbmQgYWRkIGl0IHRvIGEgY29udHJvbGxlclxyXG5cdCAqIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSgpXHJcblx0ICpcdFx0LmFkZFRvKGNvbnRyb2xsZXIpO1xyXG5cdCAqXHJcblx0ICogLy8gY3JlYXRlIGEgc2NlbmUgd2l0aCBjdXN0b20gb3B0aW9ucyBhbmQgYXNzaWduIGEgaGFuZGxlciB0byBpdC5cclxuXHQgKiB2YXIgc2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xyXG5cdCAqIFx0XHRkdXJhdGlvbjogMTAwLFxyXG5cdCAqXHRcdG9mZnNldDogMjAwLFxyXG5cdCAqXHRcdHRyaWdnZXJIb29rOiBcIm9uRW50ZXJcIixcclxuXHQgKlx0XHRyZXZlcnNlOiBmYWxzZVxyXG5cdCAqIH0pO1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIE9wdGlvbnMgZm9yIHRoZSBTY2VuZS4gVGhlIG9wdGlvbnMgY2FuIGJlIHVwZGF0ZWQgYXQgYW55IHRpbWUuICBcclxuXHQgXHRcdFx0XHRcdFx0XHQgICBJbnN0ZWFkIG9mIHNldHRpbmcgdGhlIG9wdGlvbnMgZm9yIGVhY2ggc2NlbmUgaW5kaXZpZHVhbGx5IHlvdSBjYW4gYWxzbyBzZXQgdGhlbSBnbG9iYWxseSBpbiB0aGUgY29udHJvbGxlciBhcyB0aGUgY29udHJvbGxlcnMgYGdsb2JhbFNjZW5lT3B0aW9uc2Agb3B0aW9uLiBUaGUgb2JqZWN0IGFjY2VwdHMgdGhlIHNhbWUgcHJvcGVydGllcyBhcyB0aGUgb25lcyBiZWxvdy4gIFxyXG5cdCBcdFx0XHRcdFx0XHRcdCAgIFdoZW4gYSBzY2VuZSBpcyBhZGRlZCB0byB0aGUgY29udHJvbGxlciB0aGUgb3B0aW9ucyBkZWZpbmVkIHVzaW5nIHRoZSBTY2VuZSBjb25zdHJ1Y3RvciB3aWxsIGJlIG92ZXJ3cml0dGVuIGJ5IHRob3NlIHNldCBpbiBgZ2xvYmFsU2NlbmVPcHRpb25zYC5cclxuXHQgKiBAcGFyYW0geyhudW1iZXJ8c3RyaW5nfGZ1bmN0aW9uKX0gW29wdGlvbnMuZHVyYXRpb249MF0gLSBUaGUgZHVyYXRpb24gb2YgdGhlIHNjZW5lLiBcclxuXHQgXHRcdFx0XHRcdFBsZWFzZSBzZWUgYFNjZW5lLmR1cmF0aW9uKClgIGZvciBkZXRhaWxzLlxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5vZmZzZXQ9MF0gLSBPZmZzZXQgVmFsdWUgZm9yIHRoZSBUcmlnZ2VyIFBvc2l0aW9uLiBJZiBubyB0cmlnZ2VyRWxlbWVudCBpcyBkZWZpbmVkIHRoaXMgd2lsbCBiZSB0aGUgc2Nyb2xsIGRpc3RhbmNlIGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBwYWdlLCBhZnRlciB3aGljaCB0aGUgc2NlbmUgd2lsbCBzdGFydC5cclxuXHQgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gW29wdGlvbnMudHJpZ2dlckVsZW1lbnQ9bnVsbF0gLSBTZWxlY3RvciBvciBET00gb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgc3RhcnQgb2YgdGhlIHNjZW5lLiBJZiB1bmRlZmluZWQgdGhlIHNjZW5lIHdpbGwgc3RhcnQgcmlnaHQgYXQgdGhlIHN0YXJ0IG9mIHRoZSBwYWdlICh1bmxlc3MgYW4gb2Zmc2V0IGlzIHNldCkuXHJcblx0ICogQHBhcmFtIHsobnVtYmVyfHN0cmluZyl9IFtvcHRpb25zLnRyaWdnZXJIb29rPVwib25DZW50ZXJcIl0gLSBDYW4gYmUgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGRlZmluaW5nIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJpZ2dlciBIb29rIGluIHJlbGF0aW9uIHRvIHRoZSB2aWV3cG9ydC4gIFxyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIENhbiBhbHNvIGJlIGRlZmluZWQgdXNpbmcgYSBzdHJpbmc6XHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgKiogYFwib25FbnRlclwiYCA9PiBgMWBcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAqKiBgXCJvbkNlbnRlclwiYCA9PiBgMC41YFxyXG5cdCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGBcIm9uTGVhdmVcImAgPT4gYDBgXHJcblx0ICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yZXZlcnNlPXRydWVdIC0gU2hvdWxkIHRoZSBzY2VuZSByZXZlcnNlLCB3aGVuIHNjcm9sbGluZyB1cD9cclxuXHQgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubG9nbGV2ZWw9Ml0gLSBMb2dsZXZlbCBmb3IgZGVidWdnaW5nLiBOb3RlIHRoYXQgbG9nZ2luZyBpcyBkaXNhYmxlZCBpbiB0aGUgbWluaWZpZWQgdmVyc2lvbiBvZiBTY3JvbGxNYWdpYy5cclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGAwYCA9PiBzaWxlbnRcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGAxYCA9PiBlcnJvcnNcclxuXHQgXHRcdFx0XHRcdFx0XHRcdFx0XHQgICoqIGAyYCA9PiBlcnJvcnMsIHdhcm5pbmdzXHJcblx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAqKiBgM2AgPT4gZXJyb3JzLCB3YXJuaW5ncywgZGVidWdpbmZvXHJcblx0ICogXHJcblx0ICovXHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cclxuXHRcdC8qXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBzZXR0aW5nc1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dmFyXHJcblx0XHRcdE5BTUVTUEFDRSA9ICdTY3JvbGxNYWdpYy5TY2VuZScsXHJcblx0XHRcdFNDRU5FX1NUQVRFX0JFRk9SRSA9ICdCRUZPUkUnLFxyXG5cdFx0XHRTQ0VORV9TVEFURV9EVVJJTkcgPSAnRFVSSU5HJyxcclxuXHRcdFx0U0NFTkVfU1RBVEVfQUZURVIgPSAnQUZURVInLFxyXG5cdFx0XHRERUZBVUxUX09QVElPTlMgPSBTQ0VORV9PUFRJT05TLmRlZmF1bHRzO1xyXG5cclxuXHRcdC8qXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBwcml2YXRlIHZhcnNcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqL1xyXG5cclxuXHRcdHZhclxyXG5cdFx0XHRTY2VuZSA9IHRoaXMsXHJcblx0XHRcdF9vcHRpb25zID0gX3V0aWwuZXh0ZW5kKHt9LCBERUZBVUxUX09QVElPTlMsIG9wdGlvbnMpLFxyXG5cdFx0XHRfc3RhdGUgPSBTQ0VORV9TVEFURV9CRUZPUkUsXHJcblx0XHRcdF9wcm9ncmVzcyA9IDAsXHJcblx0XHRcdF9zY3JvbGxPZmZzZXQgPSB7XHJcblx0XHRcdFx0c3RhcnQ6IDAsXHJcblx0XHRcdFx0ZW5kOiAwXHJcblx0XHRcdH0sIC8vIHJlZmxlY3RzIHRoZSBjb250cm9sbGVycydzIHNjcm9sbCBwb3NpdGlvbiBmb3IgdGhlIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIHNjZW5lIHJlc3BlY3RpdmVseVxyXG5cdFx0XHRfdHJpZ2dlclBvcyA9IDAsXHJcblx0XHRcdF9lbmFibGVkID0gdHJ1ZSxcclxuXHRcdFx0X2R1cmF0aW9uVXBkYXRlTWV0aG9kLFxyXG5cdFx0XHRfY29udHJvbGxlcjtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEludGVybmFsIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIG9mIHRoZSBTY3JvbGxNYWdpYyBTY2VuZVxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIGNvbnN0cnVjdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Zm9yICh2YXIga2V5IGluIF9vcHRpb25zKSB7IC8vIGNoZWNrIHN1cHBsaWVkIG9wdGlvbnNcclxuXHRcdFx0XHRpZiAoIURFRkFVTFRfT1BUSU9OUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiBVbmtub3duIG9wdGlvbiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIik7XHJcblx0XHRcdFx0XHRkZWxldGUgX29wdGlvbnNba2V5XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gYWRkIGdldHRlcnMvc2V0dGVycyBmb3IgYWxsIHBvc3NpYmxlIG9wdGlvbnNcclxuXHRcdFx0Zm9yICh2YXIgb3B0aW9uTmFtZSBpbiBERUZBVUxUX09QVElPTlMpIHtcclxuXHRcdFx0XHRhZGRTY2VuZU9wdGlvbihvcHRpb25OYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyB2YWxpZGF0ZSBhbGwgb3B0aW9uc1xyXG5cdFx0XHR2YWxpZGF0ZU9wdGlvbigpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogRXZlbnQgTWFuYWdlbWVudFxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0dmFyIF9saXN0ZW5lcnMgPSB7fTtcclxuXHRcdC8qKlxyXG5cdFx0ICogU2NlbmUgc3RhcnQgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW5ldmVyIHRoZSBzY3JvbGwgcG9zaXRpb24gaXRzIHRoZSBzdGFydGluZyBwb2ludCBvZiB0aGUgc2NlbmUuICBcclxuXHRcdCAqIEl0IHdpbGwgYWxzbyBmaXJlIHdoZW4gc2Nyb2xsaW5nIGJhY2sgdXAgZ29pbmcgb3ZlciB0aGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHNjZW5lLiBJZiB5b3Ugd2FudCBzb21ldGhpbmcgdG8gaGFwcGVuIG9ubHkgd2hlbiBzY3JvbGxpbmcgZG93bi9yaWdodCwgdXNlIHRoZSBzY3JvbGxEaXJlY3Rpb24gcGFyYW1ldGVyIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXHJcblx0XHQgKlxyXG5cdFx0ICogRm9yIGRldGFpbHMgb24gdGhpcyBldmVudCBhbmQgdGhlIG9yZGVyIGluIHdoaWNoIGl0IGlzIGZpcmVkLCBwbGVhc2UgcmV2aWV3IHRoZSB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9IG1ldGhvZC5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjc3RhcnRcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJzdGFydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJIaXQgc3RhcnQgcG9pbnQgb2Ygc2NlbmUuXCIpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnByb2dyZXNzIC0gUmVmbGVjdHMgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc3RhdGUgLSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2NlbmUgYFwiQkVGT1JFXCJgIG9yIGBcIkRVUklOR1wiYFxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnNjcm9sbERpcmVjdGlvbiAtIEluZGljYXRlcyB3aGljaCB3YXkgd2UgYXJlIHNjcm9sbGluZyBgXCJQQVVTRURcImAsIGBcIkZPUldBUkRcImAgb3IgYFwiUkVWRVJTRVwiYFxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIGVuZCBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbmV2ZXIgdGhlIHNjcm9sbCBwb3NpdGlvbiBpdHMgdGhlIGVuZGluZyBwb2ludCBvZiB0aGUgc2NlbmUuICBcclxuXHRcdCAqIEl0IHdpbGwgYWxzbyBmaXJlIHdoZW4gc2Nyb2xsaW5nIGJhY2sgdXAgZnJvbSBhZnRlciB0aGUgc2NlbmUgYW5kIGdvaW5nIG92ZXIgaXRzIGVuZCBwb3NpdGlvbi4gSWYgeW91IHdhbnQgc29tZXRoaW5nIHRvIGhhcHBlbiBvbmx5IHdoZW4gc2Nyb2xsaW5nIGRvd24vcmlnaHQsIHVzZSB0aGUgc2Nyb2xsRGlyZWN0aW9uIHBhcmFtZXRlciBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxyXG5cdFx0ICpcclxuXHRcdCAqIEZvciBkZXRhaWxzIG9uIHRoaXMgZXZlbnQgYW5kIHRoZSBvcmRlciBpbiB3aGljaCBpdCBpcyBmaXJlZCwgcGxlYXNlIHJldmlldyB0aGUge0BsaW5rIFNjZW5lLnByb2dyZXNzfSBtZXRob2QuXHJcblx0XHQgKlxyXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI2VuZFxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZS5vbihcImVuZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJIaXQgZW5kIHBvaW50IG9mIHNjZW5lLlwiKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5wcm9ncmVzcyAtIFJlZmxlY3RzIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBzY2VuZVxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnN0YXRlIC0gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNjZW5lIGBcIkRVUklOR1wiYCBvciBgXCJBRlRFUlwiYFxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnNjcm9sbERpcmVjdGlvbiAtIEluZGljYXRlcyB3aGljaCB3YXkgd2UgYXJlIHNjcm9sbGluZyBgXCJQQVVTRURcImAsIGBcIkZPUldBUkRcImAgb3IgYFwiUkVWRVJTRVwiYFxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIGVudGVyIGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVuZXZlciB0aGUgc2NlbmUgZW50ZXJzIHRoZSBcIkRVUklOR1wiIHN0YXRlLiAgXHJcblx0XHQgKiBLZWVwIGluIG1pbmQgdGhhdCBpdCBkb2Vzbid0IG1hdHRlciBpZiB0aGUgc2NlbmUgcGxheXMgZm9yd2FyZCBvciBiYWNrd2FyZDogVGhpcyBldmVudCBhbHdheXMgZmlyZXMgd2hlbiB0aGUgc2NlbmUgZW50ZXJzIGl0cyBhY3RpdmUgc2Nyb2xsIHRpbWVmcmFtZSwgcmVnYXJkbGVzcyBvZiB0aGUgc2Nyb2xsLWRpcmVjdGlvbi5cclxuXHRcdCAqXHJcblx0XHQgKiBGb3IgZGV0YWlscyBvbiB0aGlzIGV2ZW50IGFuZCB0aGUgb3JkZXIgaW4gd2hpY2ggaXQgaXMgZmlyZWQsIHBsZWFzZSByZXZpZXcgdGhlIHtAbGluayBTY2VuZS5wcm9ncmVzc30gbWV0aG9kLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNlbnRlclxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZS5vbihcImVudGVyXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIlNjZW5lIGVudGVyZWQuXCIpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnByb2dyZXNzIC0gUmVmbGVjdHMgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc3RhdGUgLSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2NlbmUgLSBhbHdheXMgYFwiRFVSSU5HXCJgXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc2Nyb2xsRGlyZWN0aW9uIC0gSW5kaWNhdGVzIHdoaWNoIHdheSB3ZSBhcmUgc2Nyb2xsaW5nIGBcIlBBVVNFRFwiYCwgYFwiRk9SV0FSRFwiYCBvciBgXCJSRVZFUlNFXCJgXHJcblx0XHQgKi9cclxuXHRcdC8qKlxyXG5cdFx0ICogU2NlbmUgbGVhdmUgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW5ldmVyIHRoZSBzY2VuZSdzIHN0YXRlIGdvZXMgZnJvbSBcIkRVUklOR1wiIHRvIGVpdGhlciBcIkJFRk9SRVwiIG9yIFwiQUZURVJcIi4gIFxyXG5cdFx0ICogS2VlcCBpbiBtaW5kIHRoYXQgaXQgZG9lc24ndCBtYXR0ZXIgaWYgdGhlIHNjZW5lIHBsYXlzIGZvcndhcmQgb3IgYmFja3dhcmQ6IFRoaXMgZXZlbnQgYWx3YXlzIGZpcmVzIHdoZW4gdGhlIHNjZW5lIGxlYXZlcyBpdHMgYWN0aXZlIHNjcm9sbCB0aW1lZnJhbWUsIHJlZ2FyZGxlc3Mgb2YgdGhlIHNjcm9sbC1kaXJlY3Rpb24uXHJcblx0XHQgKlxyXG5cdFx0ICogRm9yIGRldGFpbHMgb24gdGhpcyBldmVudCBhbmQgdGhlIG9yZGVyIGluIHdoaWNoIGl0IGlzIGZpcmVkLCBwbGVhc2UgcmV2aWV3IHRoZSB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9IG1ldGhvZC5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjbGVhdmVcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJsZWF2ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJTY2VuZSBsZWZ0LlwiKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5wcm9ncmVzcyAtIFJlZmxlY3RzIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBzY2VuZVxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnN0YXRlIC0gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNjZW5lIGBcIkJFRk9SRVwiYCBvciBgXCJBRlRFUlwiYFxyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnNjcm9sbERpcmVjdGlvbiAtIEluZGljYXRlcyB3aGljaCB3YXkgd2UgYXJlIHNjcm9sbGluZyBgXCJQQVVTRURcImAsIGBcIkZPUldBUkRcImAgb3IgYFwiUkVWRVJTRVwiYFxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIHVwZGF0ZSBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbmV2ZXIgdGhlIHNjZW5lIGlzIHVwZGF0ZWQgKGJ1dCBub3QgbmVjZXNzYXJpbHkgY2hhbmdlcyB0aGUgcHJvZ3Jlc3MpLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSN1cGRhdGVcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiU2NlbmUgdXBkYXRlZC5cIik7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQuc3RhcnRQb3MgLSBUaGUgc3RhcnRpbmcgcG9zaXRpb24gb2YgdGhlIHNjZW5lIChpbiByZWxhdGlvbiB0byB0aGUgY29uYWluZXIpXHJcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQuZW5kUG9zIC0gVGhlIGVuZGluZyBwb3NpdGlvbiBvZiB0aGUgc2NlbmUgKGluIHJlbGF0aW9uIHRvIHRoZSBjb25haW5lcilcclxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5zY3JvbGxQb3MgLSBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGNvbnRhaW5lclxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIHByb2dyZXNzIGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVuZXZlciB0aGUgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lIGNoYW5nZXMuXHJcblx0XHQgKlxyXG5cdFx0ICogRm9yIGRldGFpbHMgb24gdGhpcyBldmVudCBhbmQgdGhlIG9yZGVyIGluIHdoaWNoIGl0IGlzIGZpcmVkLCBwbGVhc2UgcmV2aWV3IHRoZSB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9IG1ldGhvZC5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjcHJvZ3Jlc3NcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJwcm9ncmVzc1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJTY2VuZSBwcm9ncmVzcyBjaGFuZ2VkIHRvIFwiICsgZXZlbnQucHJvZ3Jlc3MpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnByb2dyZXNzIC0gUmVmbGVjdHMgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc3RhdGUgLSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2NlbmUgYFwiQkVGT1JFXCJgLCBgXCJEVVJJTkdcImAgb3IgYFwiQUZURVJcImBcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zY3JvbGxEaXJlY3Rpb24gLSBJbmRpY2F0ZXMgd2hpY2ggd2F5IHdlIGFyZSBzY3JvbGxpbmcgYFwiUEFVU0VEXCJgLCBgXCJGT1JXQVJEXCJgIG9yIGBcIlJFVkVSU0VcImBcclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBjaGFuZ2UgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW52ZXZlciBhIHByb3BlcnR5IG9mIHRoZSBzY2VuZSBpcyBjaGFuZ2VkLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNjaGFuZ2VcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiU2NlbmUgUHJvcGVydHkgXFxcIlwiICsgZXZlbnQud2hhdCArIFwiXFxcIiBjaGFuZ2VkIHRvIFwiICsgZXZlbnQubmV3dmFsKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC53aGF0IC0gSW5kaWNhdGVzIHdoYXQgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZFxyXG5cdFx0ICogQHByb3BlcnR5IHttaXhlZH0gZXZlbnQubmV3dmFsIC0gVGhlIG5ldyB2YWx1ZSBvZiB0aGUgY2hhbmdlZCBwcm9wZXJ0eVxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIHNoaWZ0IGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVudmV2ZXIgdGhlIHN0YXJ0IG9yIGVuZCAqKnNjcm9sbCBvZmZzZXQqKiBvZiB0aGUgc2NlbmUgY2hhbmdlLlxyXG5cdFx0ICogVGhpcyBoYXBwZW5zIGV4cGxpY2l0ZWx5LCB3aGVuIG9uZSBvZiB0aGVzZSB2YWx1ZXMgY2hhbmdlOiBgb2Zmc2V0YCwgYGR1cmF0aW9uYCBvciBgdHJpZ2dlckhvb2tgLlxyXG5cdFx0ICogSXQgd2lsbCBmaXJlIGltcGxpY2l0bHkgd2hlbiB0aGUgYHRyaWdnZXJFbGVtZW50YCBjaGFuZ2VzLCBpZiB0aGUgbmV3IGVsZW1lbnQgaGFzIGEgZGlmZmVyZW50IHBvc2l0aW9uIChtb3N0IGNhc2VzKS5cclxuXHRcdCAqIEl0IHdpbGwgYWxzbyBmaXJlIGltcGxpY2l0bHkgd2hlbiB0aGUgc2l6ZSBvZiB0aGUgY29udGFpbmVyIGNoYW5nZXMgYW5kIHRoZSB0cmlnZ2VySG9vayBpcyBhbnl0aGluZyBvdGhlciB0aGFuIGBvbkxlYXZlYC5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjc2hpZnRcclxuXHRcdCAqIEBzaW5jZSAxLjEuMFxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZS5vbihcInNoaWZ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIlNjZW5lIG1vdmVkLCBiZWNhdXNlIHRoZSBcIiArIGV2ZW50LnJlYXNvbiArIFwiIGhhcyBjaGFuZ2VkLilcIik7XHJcblx0XHQgKiB9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQucmVhc29uIC0gSW5kaWNhdGVzIHdoeSB0aGUgc2NlbmUgaGFzIHNoaWZ0ZWRcclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBkZXN0cm95IGV2ZW50LiAgXHJcblx0XHQgKiBGaXJlcyB3aGVudmV2ZXIgdGhlIHNjZW5lIGlzIGRlc3Ryb3llZC5cclxuXHRcdCAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gdGlkeSB1cCBjdXN0b20gYmVoYXZpb3VyIHVzZWQgaW4gZXZlbnRzLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNkZXN0cm95XHJcblx0XHQgKiBAc2luY2UgMS4xLjBcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJlbnRlclwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdCAqICAgICAgICAvLyBhZGQgY3VzdG9tIGFjdGlvblxyXG5cdFx0ICogICAgICAgICQoXCIjbXktZWxlbVwiKS5sZWZ0KFwiMjAwXCIpO1xyXG5cdFx0ICogICAgICB9KVxyXG5cdFx0ICogICAgICAub24oXCJkZXN0cm95XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ICogICAgICAgIC8vIHJlc2V0IG15IGVsZW1lbnQgdG8gc3RhcnQgcG9zaXRpb25cclxuXHRcdCAqICAgICAgICBpZiAoZXZlbnQucmVzZXQpIHtcclxuXHRcdCAqICAgICAgICAgICQoXCIjbXktZWxlbVwiKS5sZWZ0KFwiMFwiKTtcclxuXHRcdCAqICAgICAgICB9XHJcblx0XHQgKiAgICAgIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZXZlbnQucmVzZXQgLSBJbmRpY2F0ZXMgaWYgdGhlIGRlc3Ryb3kgbWV0aG9kIHdhcyBjYWxsZWQgd2l0aCByZXNldCBgdHJ1ZWAgb3IgYGZhbHNlYC5cclxuXHRcdCAqL1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTY2VuZSBhZGQgZXZlbnQuICBcclxuXHRcdCAqIEZpcmVzIHdoZW4gdGhlIHNjZW5lIGlzIGFkZGVkIHRvIGEgY29udHJvbGxlci5cclxuXHRcdCAqIFRoaXMgaXMgbW9zdGx5IHVzZWQgYnkgcGx1Z2lucyB0byBrbm93IHRoYXQgY2hhbmdlIG1pZ2h0IGJlIGR1ZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjYWRkXHJcblx0XHQgKiBAc2luY2UgMi4wLjBcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJhZGRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKCdTY2VuZSB3YXMgYWRkZWQgdG8gYSBuZXcgY29udHJvbGxlci4nKTtcclxuXHRcdCAqIH0pO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcclxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZXZlbnQuY29udHJvbGxlciAtIFRoZSBjb250cm9sbGVyIG9iamVjdCB0aGUgc2NlbmUgd2FzIGFkZGVkIHRvLlxyXG5cdFx0ICovXHJcblx0XHQvKipcclxuXHRcdCAqIFNjZW5lIHJlbW92ZSBldmVudC4gIFxyXG5cdFx0ICogRmlyZXMgd2hlbiB0aGUgc2NlbmUgaXMgcmVtb3ZlZCBmcm9tIGEgY29udHJvbGxlci5cclxuXHRcdCAqIFRoaXMgaXMgbW9zdGx5IHVzZWQgYnkgcGx1Z2lucyB0byBrbm93IHRoYXQgY2hhbmdlIG1pZ2h0IGJlIGR1ZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjcmVtb3ZlXHJcblx0XHQgKiBAc2luY2UgMi4wLjBcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogc2NlbmUub24oXCJyZW1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQgKiBcdGNvbnNvbGUubG9nKCdTY2VuZSB3YXMgcmVtb3ZlZCBmcm9tIGl0cyBjb250cm9sbGVyLicpO1xyXG5cdFx0ICogfSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xyXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGQgb25lIG9yZSBtb3JlIGV2ZW50IGxpc3RlbmVyLiAgXHJcblx0XHQgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gd2lsbCBiZSBmaXJlZCBhdCB0aGUgcmVzcGVjdGl2ZSBldmVudCwgYW5kIGFuIG9iamVjdCBjb250YWluaW5nIHJlbGV2YW50IGRhdGEgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNvblxyXG5cdFx0ICpcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBmdW5jdGlvbiBjYWxsYmFjayAoZXZlbnQpIHtcclxuXHRcdCAqIFx0XHRjb25zb2xlLmxvZyhcIkV2ZW50IGZpcmVkISAoXCIgKyBldmVudC50eXBlICsgXCIpXCIpO1xyXG5cdFx0ICogfVxyXG5cdFx0ICogLy8gYWRkIGxpc3RlbmVyc1xyXG5cdFx0ICogc2NlbmUub24oXCJjaGFuZ2UgdXBkYXRlIHByb2dyZXNzIHN0YXJ0IGVuZCBlbnRlciBsZWF2ZVwiLCBjYWxsYmFjayk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzIC0gVGhlIG5hbWUgb3IgbmFtZXMgb2YgdGhlIGV2ZW50IHRoZSBjYWxsYmFjayBzaG91bGQgYmUgYXR0YWNoZWQgdG8uXHJcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgZXhlY3V0ZWQsIHdoZW4gdGhlIGV2ZW50IGlzIGRpc3BhdGNoZWQuIEFuIGV2ZW50IG9iamVjdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLm9uID0gZnVuY3Rpb24gKG5hbWVzLCBjYWxsYmFjaykge1xyXG5cdFx0XHRpZiAoX3V0aWwudHlwZS5GdW5jdGlvbihjYWxsYmFjaykpIHtcclxuXHRcdFx0XHRuYW1lcyA9IG5hbWVzLnRyaW0oKS5zcGxpdCgnICcpO1xyXG5cdFx0XHRcdG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGZ1bGxuYW1lKSB7XHJcblx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0bmFtZXBhcnRzID0gZnVsbG5hbWUuc3BsaXQoJy4nKSxcclxuXHRcdFx0XHRcdFx0ZXZlbnRuYW1lID0gbmFtZXBhcnRzWzBdLFxyXG5cdFx0XHRcdFx0XHRuYW1lc3BhY2UgPSBuYW1lcGFydHNbMV07XHJcblx0XHRcdFx0XHRpZiAoZXZlbnRuYW1lICE9IFwiKlwiKSB7IC8vIGRpc2FsbG93IHdpbGRjYXJkc1xyXG5cdFx0XHRcdFx0XHRpZiAoIV9saXN0ZW5lcnNbZXZlbnRuYW1lXSkge1xyXG5cdFx0XHRcdFx0XHRcdF9saXN0ZW5lcnNbZXZlbnRuYW1lXSA9IFtdO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdF9saXN0ZW5lcnNbZXZlbnRuYW1lXS5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRuYW1lc3BhY2U6IG5hbWVzcGFjZSB8fCAnJyxcclxuXHRcdFx0XHRcdFx0XHRjYWxsYmFjazogY2FsbGJhY2tcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1Igd2hlbiBjYWxsaW5nICcub24oKSc6IFN1cHBsaWVkIGNhbGxiYWNrIGZvciAnXCIgKyBuYW1lcyArIFwiJyBpcyBub3QgYSB2YWxpZCBmdW5jdGlvbiFcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlbW92ZSBvbmUgb3IgbW9yZSBldmVudCBsaXN0ZW5lci5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjb2ZmXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIGZ1bmN0aW9uIGNhbGxiYWNrIChldmVudCkge1xyXG5cdFx0ICogXHRcdGNvbnNvbGUubG9nKFwiRXZlbnQgZmlyZWQhIChcIiArIGV2ZW50LnR5cGUgKyBcIilcIik7XHJcblx0XHQgKiB9XHJcblx0XHQgKiAvLyBhZGQgbGlzdGVuZXJzXHJcblx0XHQgKiBzY2VuZS5vbihcImNoYW5nZSB1cGRhdGVcIiwgY2FsbGJhY2spO1xyXG5cdFx0ICogLy8gcmVtb3ZlIGxpc3RlbmVyc1xyXG5cdFx0ICogc2NlbmUub2ZmKFwiY2hhbmdlIHVwZGF0ZVwiLCBjYWxsYmFjayk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzIC0gVGhlIG5hbWUgb3IgbmFtZXMgb2YgdGhlIGV2ZW50IHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQuXHJcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBzcGVjaWZpYyBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSByZW1vdmVkLiBJZiBub25lIGlzIHBhc3NlZCBhbGwgY2FsbGJhY2tzIHRvIHRoZSBldmVudCBsaXN0ZW5lciB3aWxsIGJlIHJlbW92ZWQuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLm9mZiA9IGZ1bmN0aW9uIChuYW1lcywgY2FsbGJhY2spIHtcclxuXHRcdFx0aWYgKCFuYW1lcykge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBJbnZhbGlkIGV2ZW50IG5hbWUgc3VwcGxpZWQuXCIpO1xyXG5cdFx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRuYW1lcyA9IG5hbWVzLnRyaW0oKS5zcGxpdCgnICcpO1xyXG5cdFx0XHRuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChmdWxsbmFtZSwga2V5KSB7XHJcblx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRuYW1lcGFydHMgPSBmdWxsbmFtZS5zcGxpdCgnLicpLFxyXG5cdFx0XHRcdFx0ZXZlbnRuYW1lID0gbmFtZXBhcnRzWzBdLFxyXG5cdFx0XHRcdFx0bmFtZXNwYWNlID0gbmFtZXBhcnRzWzFdIHx8ICcnLFxyXG5cdFx0XHRcdFx0cmVtb3ZlTGlzdCA9IGV2ZW50bmFtZSA9PT0gJyonID8gT2JqZWN0LmtleXMoX2xpc3RlbmVycykgOiBbZXZlbnRuYW1lXTtcclxuXHRcdFx0XHRyZW1vdmVMaXN0LmZvckVhY2goZnVuY3Rpb24gKHJlbW92ZSkge1xyXG5cdFx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRcdGxpc3QgPSBfbGlzdGVuZXJzW3JlbW92ZV0gfHwgW10sXHJcblx0XHRcdFx0XHRcdGkgPSBsaXN0Lmxlbmd0aDtcclxuXHRcdFx0XHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0XHRcdFx0dmFyIGxpc3RlbmVyID0gbGlzdFtpXTtcclxuXHRcdFx0XHRcdFx0aWYgKGxpc3RlbmVyICYmIChuYW1lc3BhY2UgPT09IGxpc3RlbmVyLm5hbWVzcGFjZSB8fCBuYW1lc3BhY2UgPT09ICcqJykgJiYgKCFjYWxsYmFjayB8fCBjYWxsYmFjayA9PSBsaXN0ZW5lci5jYWxsYmFjaykpIHtcclxuXHRcdFx0XHRcdFx0XHRsaXN0LnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKCFsaXN0Lmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRkZWxldGUgX2xpc3RlbmVyc1tyZW1vdmVdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRyaWdnZXIgYW4gZXZlbnQuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3RyaWdnZXJcclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogdGhpcy50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRoYXQgc2hvdWxkIGJlIHRyaWdnZXJlZC5cclxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBbdmFyc10gLSBBbiBvYmplY3QgY29udGFpbmluZyBpbmZvIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnRyaWdnZXIgPSBmdW5jdGlvbiAobmFtZSwgdmFycykge1xyXG5cdFx0XHRpZiAobmFtZSkge1xyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0bmFtZXBhcnRzID0gbmFtZS50cmltKCkuc3BsaXQoJy4nKSxcclxuXHRcdFx0XHRcdGV2ZW50bmFtZSA9IG5hbWVwYXJ0c1swXSxcclxuXHRcdFx0XHRcdG5hbWVzcGFjZSA9IG5hbWVwYXJ0c1sxXSxcclxuXHRcdFx0XHRcdGxpc3RlbmVycyA9IF9saXN0ZW5lcnNbZXZlbnRuYW1lXTtcclxuXHRcdFx0XHRsb2coMywgJ2V2ZW50IGZpcmVkOicsIGV2ZW50bmFtZSwgdmFycyA/IFwiLT5cIiA6ICcnLCB2YXJzIHx8ICcnKTtcclxuXHRcdFx0XHRpZiAobGlzdGVuZXJzKSB7XHJcblx0XHRcdFx0XHRsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIsIGtleSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIW5hbWVzcGFjZSB8fCBuYW1lc3BhY2UgPT09IGxpc3RlbmVyLm5hbWVzcGFjZSkge1xyXG5cdFx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGxiYWNrLmNhbGwoU2NlbmUsIG5ldyBTY3JvbGxNYWdpYy5FdmVudChldmVudG5hbWUsIGxpc3RlbmVyLm5hbWVzcGFjZSwgU2NlbmUsIHZhcnMpKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBJbnZhbGlkIGV2ZW50IG5hbWUgc3VwcGxpZWQuXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gc2V0IGV2ZW50IGxpc3RlbmVyc1xyXG5cdFx0U2NlbmVcclxuXHRcdFx0Lm9uKFwiY2hhbmdlLmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0aWYgKGUud2hhdCAhPT0gXCJsb2dsZXZlbFwiICYmIGUud2hhdCAhPT0gXCJ0d2VlbkNoYW5nZXNcIikgeyAvLyBubyBuZWVkIGZvciBhIHNjZW5lIHVwZGF0ZSBzY2VuZSB3aXRoIHRoZXNlIG9wdGlvbnMuLi5cclxuXHRcdFx0XHRcdGlmIChlLndoYXQgPT09IFwidHJpZ2dlckVsZW1lbnRcIikge1xyXG5cdFx0XHRcdFx0XHR1cGRhdGVUcmlnZ2VyRWxlbWVudFBvc2l0aW9uKCk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGUud2hhdCA9PT0gXCJyZXZlcnNlXCIpIHsgLy8gdGhlIG9ubHkgcHJvcGVydHkgbGVmdCB0aGF0IG1heSBoYXZlIGFuIGltcGFjdCBvbiB0aGUgY3VycmVudCBzY2VuZSBzdGF0ZS4gRXZlcnl0aGluZyBlbHNlIGlzIGhhbmRsZWQgYnkgdGhlIHNoaWZ0IGV2ZW50LlxyXG5cdFx0XHRcdFx0XHRTY2VuZS51cGRhdGUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5vbihcInNoaWZ0LmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dXBkYXRlU2Nyb2xsT2Zmc2V0KCk7XHJcblx0XHRcdFx0U2NlbmUudXBkYXRlKCk7IC8vIHVwZGF0ZSBzY2VuZSB0byByZWZsZWN0IG5ldyBwb3NpdGlvblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNlbmQgYSBkZWJ1ZyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqIGJ1dCBwcm92aWRlZCBwdWJsaWNseSB3aXRoIF9sb2cgZm9yIHBsdWdpbnNcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbG9nbGV2ZWwgLSBUaGUgbG9nbGV2ZWwgcmVxdWlyZWQgdG8gaW5pdGlhdGUgb3V0cHV0IGZvciB0aGUgbWVzc2FnZS5cclxuXHRcdCAqIEBwYXJhbSB7Li4ubWl4ZWR9IG91dHB1dCAtIE9uZSBvciBtb3JlIHZhcmlhYmxlcyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGNvbnNvbGUuXHJcblx0XHQgKi9cclxuXHRcdHZhciBsb2cgPSB0aGlzLl9sb2cgPSBmdW5jdGlvbiAobG9nbGV2ZWwsIG91dHB1dCkge1xyXG5cdFx0XHRpZiAoX29wdGlvbnMubG9nbGV2ZWwgPj0gbG9nbGV2ZWwpIHtcclxuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAxLCAwLCBcIihcIiArIE5BTUVTUEFDRSArIFwiKSAtPlwiKTtcclxuXHRcdFx0XHRfdXRpbC5sb2cuYXBwbHkod2luZG93LCBhcmd1bWVudHMpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQWRkIHRoZSBzY2VuZSB0byBhIGNvbnRyb2xsZXIuICBcclxuXHRcdCAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgdG8gYENvbnRyb2xsZXIuYWRkU2NlbmUoc2NlbmUpYC5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjYWRkVG9cclxuXHRcdCAqXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gYWRkIGEgc2NlbmUgdG8gYSBTY3JvbGxNYWdpYyBDb250cm9sbGVyXHJcblx0XHQgKiBzY2VuZS5hZGRUbyhjb250cm9sbGVyKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge1Njcm9sbE1hZ2ljLkNvbnRyb2xsZXJ9IGNvbnRyb2xsZXIgLSBUaGUgY29udHJvbGxlciB0byB3aGljaCB0aGUgc2NlbmUgc2hvdWxkIGJlIGFkZGVkLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5hZGRUbyA9IGZ1bmN0aW9uIChjb250cm9sbGVyKSB7XHJcblx0XHRcdGlmICghKGNvbnRyb2xsZXIgaW5zdGFuY2VvZiBTY3JvbGxNYWdpYy5Db250cm9sbGVyKSkge1xyXG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBzdXBwbGllZCBhcmd1bWVudCBvZiAnYWRkVG8oKScgaXMgbm90IGEgdmFsaWQgU2Nyb2xsTWFnaWMgQ29udHJvbGxlclwiKTtcclxuXHRcdFx0fSBlbHNlIGlmIChfY29udHJvbGxlciAhPSBjb250cm9sbGVyKSB7XHJcblx0XHRcdFx0Ly8gbmV3IGNvbnRyb2xsZXJcclxuXHRcdFx0XHRpZiAoX2NvbnRyb2xsZXIpIHsgLy8gd2FzIGFzc29jaWF0ZWQgdG8gYSBkaWZmZXJlbnQgY29udHJvbGxlciBiZWZvcmUsIHNvIHJlbW92ZSBpdC4uLlxyXG5cdFx0XHRcdFx0X2NvbnRyb2xsZXIucmVtb3ZlU2NlbmUoU2NlbmUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRfY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcblx0XHRcdFx0dmFsaWRhdGVPcHRpb24oKTtcclxuXHRcdFx0XHR1cGRhdGVEdXJhdGlvbih0cnVlKTtcclxuXHRcdFx0XHR1cGRhdGVUcmlnZ2VyRWxlbWVudFBvc2l0aW9uKHRydWUpO1xyXG5cdFx0XHRcdHVwZGF0ZVNjcm9sbE9mZnNldCgpO1xyXG5cdFx0XHRcdF9jb250cm9sbGVyLmluZm8oXCJjb250YWluZXJcIikuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25Db250YWluZXJSZXNpemUpO1xyXG5cdFx0XHRcdGNvbnRyb2xsZXIuYWRkU2NlbmUoU2NlbmUpO1xyXG5cdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJhZGRcIiwge1xyXG5cdFx0XHRcdFx0Y29udHJvbGxlcjogX2NvbnRyb2xsZXJcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRsb2coMywgXCJhZGRlZCBcIiArIE5BTUVTUEFDRSArIFwiIHRvIGNvbnRyb2xsZXJcIik7XHJcblx0XHRcdFx0U2NlbmUudXBkYXRlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgY3VycmVudCBlbmFibGVkIHN0YXRlIG9mIHRoZSBzY2VuZS4gIFxyXG5cdFx0ICogVGhpcyBjYW4gYmUgdXNlZCB0byBkaXNhYmxlIHRoaXMgc2NlbmUgd2l0aG91dCByZW1vdmluZyBvciBkZXN0cm95aW5nIGl0LlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNlbmFibGVkXHJcblx0XHQgKlxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCB2YWx1ZVxyXG5cdFx0ICogdmFyIGVuYWJsZWQgPSBzY2VuZS5lbmFibGVkKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gZGlzYWJsZSB0aGUgc2NlbmVcclxuXHRcdCAqIHNjZW5lLmVuYWJsZWQoZmFsc2UpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW25ld1N0YXRlXSAtIFRoZSBuZXcgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgc2NlbmUgYHRydWVgIG9yIGBmYWxzZWAuXHJcblx0XHQgKiBAcmV0dXJucyB7KGJvb2xlYW58U2NlbmUpfSBDdXJyZW50IGVuYWJsZWQgc3RhdGUgb3IgcGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuZW5hYmxlZCA9IGZ1bmN0aW9uIChuZXdTdGF0ZSkge1xyXG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgLy8gZ2V0XHJcblx0XHRcdFx0cmV0dXJuIF9lbmFibGVkO1xyXG5cdFx0XHR9IGVsc2UgaWYgKF9lbmFibGVkICE9IG5ld1N0YXRlKSB7IC8vIHNldFxyXG5cdFx0XHRcdF9lbmFibGVkID0gISFuZXdTdGF0ZTtcclxuXHRcdFx0XHRTY2VuZS51cGRhdGUodHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlbW92ZSB0aGUgc2NlbmUgZnJvbSB0aGUgY29udHJvbGxlci4gIFxyXG5cdFx0ICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCB0byBgQ29udHJvbGxlci5yZW1vdmVTY2VuZShzY2VuZSlgLlxyXG5cdFx0ICogVGhlIHNjZW5lIHdpbGwgbm90IGJlIHVwZGF0ZWQgYW55bW9yZSB1bnRpbCB5b3UgcmVhZGQgaXQgdG8gYSBjb250cm9sbGVyLlxyXG5cdFx0ICogVG8gcmVtb3ZlIHRoZSBwaW4gb3IgdGhlIHR3ZWVuIHlvdSBuZWVkIHRvIGNhbGwgcmVtb3ZlVHdlZW4oKSBvciByZW1vdmVQaW4oKSByZXNwZWN0aXZlbHkuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3JlbW92ZVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHJlbW92ZSB0aGUgc2NlbmUgZnJvbSBpdHMgY29udHJvbGxlclxyXG5cdFx0ICogc2NlbmUucmVtb3ZlKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChfY29udHJvbGxlcikge1xyXG5cdFx0XHRcdF9jb250cm9sbGVyLmluZm8oXCJjb250YWluZXJcIikucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25Db250YWluZXJSZXNpemUpO1xyXG5cdFx0XHRcdHZhciB0bXBQYXJlbnQgPSBfY29udHJvbGxlcjtcclxuXHRcdFx0XHRfY29udHJvbGxlciA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHR0bXBQYXJlbnQucmVtb3ZlU2NlbmUoU2NlbmUpO1xyXG5cdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJyZW1vdmVcIik7XHJcblx0XHRcdFx0bG9nKDMsIFwicmVtb3ZlZCBcIiArIE5BTUVTUEFDRSArIFwiIGZyb20gY29udHJvbGxlclwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRGVzdHJveSB0aGUgc2NlbmUgYW5kIGV2ZXJ5dGhpbmcuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2Rlc3Ryb3lcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBkZXN0cm95IHRoZSBzY2VuZSB3aXRob3V0IHJlc2V0dGluZyB0aGUgcGluIGFuZCB0d2VlbiB0byB0aGVpciBpbml0aWFsIHBvc2l0aW9uc1xyXG5cdFx0ICogc2NlbmUgPSBzY2VuZS5kZXN0cm95KCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gZGVzdHJveSB0aGUgc2NlbmUgYW5kIHJlc2V0IHRoZSBwaW4gYW5kIHR3ZWVuXHJcblx0XHQgKiBzY2VuZSA9IHNjZW5lLmRlc3Ryb3kodHJ1ZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcmVzZXQ9ZmFsc2VdIC0gSWYgYHRydWVgIHRoZSBwaW4gYW5kIHR3ZWVuIChpZiBleGlzdGVudCkgd2lsbCBiZSByZXNldC5cclxuXHRcdCAqIEByZXR1cm5zIHtudWxsfSBOdWxsIHRvIHVuc2V0IGhhbmRsZXIgdmFyaWFibGVzLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAocmVzZXQpIHtcclxuXHRcdFx0U2NlbmUudHJpZ2dlcihcImRlc3Ryb3lcIiwge1xyXG5cdFx0XHRcdHJlc2V0OiByZXNldFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0U2NlbmUucmVtb3ZlKCk7XHJcblx0XHRcdFNjZW5lLm9mZihcIiouKlwiKTtcclxuXHRcdFx0bG9nKDMsIFwiZGVzdHJveWVkIFwiICsgTkFNRVNQQUNFICsgXCIgKHJlc2V0OiBcIiArIChyZXNldCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiKSArIFwiKVwiKTtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZXMgdGhlIFNjZW5lIHRvIHJlZmxlY3QgdGhlIGN1cnJlbnQgc3RhdGUuICBcclxuXHRcdCAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgdG8gYENvbnRyb2xsZXIudXBkYXRlU2NlbmUoc2NlbmUsIGltbWVkaWF0ZWx5KWAuICBcclxuXHRcdCAqIFRoZSB1cGRhdGUgbWV0aG9kIGNhbGN1bGF0ZXMgdGhlIHNjZW5lJ3Mgc3RhcnQgYW5kIGVuZCBwb3NpdGlvbiAoYmFzZWQgb24gdGhlIHRyaWdnZXIgZWxlbWVudCwgdHJpZ2dlciBob29rLCBkdXJhdGlvbiBhbmQgb2Zmc2V0KSBhbmQgY2hlY2tzIGl0IGFnYWluc3QgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjb250YWluZXIuICBcclxuXHRcdCAqIEl0IHRoZW4gdXBkYXRlcyB0aGUgY3VycmVudCBzY2VuZSBzdGF0ZSBhY2NvcmRpbmdseSAob3IgZG9lcyBub3RoaW5nLCBpZiB0aGUgc3RhdGUgaXMgYWxyZWFkeSBjb3JyZWN0KSDigJMgUGlucyB3aWxsIGJlIHNldCB0byB0aGVpciBjb3JyZWN0IHBvc2l0aW9uIGFuZCB0d2VlbnMgd2lsbCBiZSB1cGRhdGVkIHRvIHRoZWlyIGNvcnJlY3QgcHJvZ3Jlc3MuXHJcblx0XHQgKiBUaGlzIG1lYW5zIGFuIHVwZGF0ZSBkb2Vzbid0IG5lY2Vzc2FyaWx5IHJlc3VsdCBpbiBhIHByb2dyZXNzIGNoYW5nZS4gVGhlIGBwcm9ncmVzc2AgZXZlbnQgd2lsbCBiZSBmaXJlZCBpZiB0aGUgcHJvZ3Jlc3MgaGFzIGluZGVlZCBjaGFuZ2VkIGJldHdlZW4gdGhpcyB1cGRhdGUgYW5kIHRoZSBsYXN0LiAgXHJcblx0XHQgKiBfKipOT1RFOioqIFRoaXMgbWV0aG9kIGdldHMgY2FsbGVkIGNvbnN0YW50bHkgd2hlbmV2ZXIgU2Nyb2xsTWFnaWMgZGV0ZWN0cyBhIGNoYW5nZS4gVGhlIG9ubHkgYXBwbGljYXRpb24gZm9yIHlvdSBpcyBpZiB5b3UgY2hhbmdlIHNvbWV0aGluZyBvdXRzaWRlIG9mIHRoZSByZWFsbSBvZiBTY3JvbGxNYWdpYywgbGlrZSBtb3ZpbmcgdGhlIHRyaWdnZXIgb3IgY2hhbmdpbmcgdHdlZW4gcGFyYW1ldGVycy5fXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3VwZGF0ZVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHVwZGF0ZSB0aGUgc2NlbmUgb24gbmV4dCB0aWNrXHJcblx0XHQgKiBzY2VuZS51cGRhdGUoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyB1cGRhdGUgdGhlIHNjZW5lIGltbWVkaWF0ZWx5XHJcblx0XHQgKiBzY2VuZS51cGRhdGUodHJ1ZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIFNjZW5lLnVwZGF0ZVxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ltbWVkaWF0ZWx5PWZhbHNlXSAtIElmIGB0cnVlYCB0aGUgdXBkYXRlIHdpbGwgYmUgaW5zdGFudCwgaWYgYGZhbHNlYCBpdCB3aWxsIHdhaXQgdW50aWwgbmV4dCB1cGRhdGUgY3ljbGUgKGJldHRlciBwZXJmb3JtYW5jZSkuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uIChpbW1lZGlhdGVseSkge1xyXG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIpIHtcclxuXHRcdFx0XHRpZiAoaW1tZWRpYXRlbHkpIHtcclxuXHRcdFx0XHRcdGlmIChfY29udHJvbGxlci5lbmFibGVkKCkgJiYgX2VuYWJsZWQpIHtcclxuXHRcdFx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRcdFx0c2Nyb2xsUG9zID0gX2NvbnRyb2xsZXIuaW5mbyhcInNjcm9sbFBvc1wiKSxcclxuXHRcdFx0XHRcdFx0XHRuZXdQcm9ncmVzcztcclxuXHJcblx0XHRcdFx0XHRcdGlmIChfb3B0aW9ucy5kdXJhdGlvbiA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRuZXdQcm9ncmVzcyA9IChzY3JvbGxQb3MgLSBfc2Nyb2xsT2Zmc2V0LnN0YXJ0KSAvIChfc2Nyb2xsT2Zmc2V0LmVuZCAtIF9zY3JvbGxPZmZzZXQuc3RhcnQpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdG5ld1Byb2dyZXNzID0gc2Nyb2xsUG9zID49IF9zY3JvbGxPZmZzZXQuc3RhcnQgPyAxIDogMDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInVwZGF0ZVwiLCB7XHJcblx0XHRcdFx0XHRcdFx0c3RhcnRQb3M6IF9zY3JvbGxPZmZzZXQuc3RhcnQsXHJcblx0XHRcdFx0XHRcdFx0ZW5kUG9zOiBfc2Nyb2xsT2Zmc2V0LmVuZCxcclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxQb3M6IHNjcm9sbFBvc1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdFNjZW5lLnByb2dyZXNzKG5ld1Byb2dyZXNzKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoX3BpbiAmJiBfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORykge1xyXG5cdFx0XHRcdFx0XHR1cGRhdGVQaW5TdGF0ZSh0cnVlKTsgLy8gdW5waW4gaW4gcG9zaXRpb25cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X2NvbnRyb2xsZXIudXBkYXRlU2NlbmUoU2NlbmUsIGZhbHNlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFNjZW5lO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZXMgZHluYW1pYyBzY2VuZSB2YXJpYWJsZXMgbGlrZSB0aGUgdHJpZ2dlciBlbGVtZW50IHBvc2l0aW9uIG9yIHRoZSBkdXJhdGlvbi5cclxuXHRcdCAqIFRoaXMgbWV0aG9kIGlzIGF1dG9tYXRpY2FsbHkgY2FsbGVkIGluIHJlZ3VsYXIgaW50ZXJ2YWxzIGZyb20gdGhlIGNvbnRyb2xsZXIuIFNlZSB7QGxpbmsgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcn0gb3B0aW9uIGByZWZyZXNoSW50ZXJ2YWxgLlxyXG5cdFx0ICogXHJcblx0XHQgKiBZb3UgY2FuIGNhbGwgaXQgdG8gbWluaW1pemUgbGFnLCBmb3IgZXhhbXBsZSB3aGVuIHlvdSBpbnRlbnRpb25hbGx5IGNoYW5nZSB0aGUgcG9zaXRpb24gb2YgdGhlIHRyaWdnZXJFbGVtZW50LlxyXG5cdFx0ICogSWYgeW91IGRvbid0IGl0IHdpbGwgc2ltcGx5IGJlIHVwZGF0ZWQgaW4gdGhlIG5leHQgcmVmcmVzaCBpbnRlcnZhbCBvZiB0aGUgY29udGFpbmVyLCB3aGljaCBpcyB1c3VhbGx5IHN1ZmZpY2llbnQuXHJcblx0XHQgKlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNyZWZyZXNoXHJcblx0XHQgKiBAc2luY2UgMS4xLjBcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiBzY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7dHJpZ2dlckVsZW1lbnQ6IFwiI3RyaWdnZXJcIn0pO1xyXG5cdFx0ICogXHJcblx0XHQgKiAvLyBjaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIHRoZSB0cmlnZ2VyXHJcblx0XHQgKiAkKFwiI3RyaWdnZXJcIikuY3NzKFwidG9wXCIsIDUwMCk7XHJcblx0XHQgKiAvLyBpbW1lZGlhdGVseSBsZXQgdGhlIHNjZW5lIGtub3cgb2YgdGhpcyBjaGFuZ2VcclxuXHRcdCAqIHNjZW5lLnJlZnJlc2goKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgaWYgdGhlIHRyaWdnZXIgZWxlbWVudCBwb3NpdGlvbiBvciB0aGUgZHVyYXRpb24gY2hhbmdlZFxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCBpZiB0aGUgZHVyYXRpb24gY2hhbmdlZFxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dXBkYXRlRHVyYXRpb24oKTtcclxuXHRcdFx0dXBkYXRlVHJpZ2dlckVsZW1lbnRQb3NpdGlvbigpO1xyXG5cdFx0XHQvLyB1cGRhdGUgdHJpZ2dlciBlbGVtZW50IHBvc2l0aW9uXHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIHNjZW5lJ3MgcHJvZ3Jlc3MuICBcclxuXHRcdCAqIFVzdWFsbHkgaXQgc2hvdWxkbid0IGJlIG5lY2Vzc2FyeSB0byB1c2UgdGhpcyBhcyBhIHNldHRlciwgYXMgaXQgaXMgc2V0IGF1dG9tYXRpY2FsbHkgYnkgc2NlbmUudXBkYXRlKCkuICBcclxuXHRcdCAqIFRoZSBvcmRlciBpbiB3aGljaCB0aGUgZXZlbnRzIGFyZSBmaXJlZCBkZXBlbmRzIG9uIHRoZSBkdXJhdGlvbiBvZiB0aGUgc2NlbmU6XHJcblx0XHQgKiAgMS4gU2NlbmVzIHdpdGggYGR1cmF0aW9uID09IDBgOiAgXHJcblx0XHQgKiAgU2NlbmVzIHRoYXQgaGF2ZSBubyBkdXJhdGlvbiBieSBkZWZpbml0aW9uIGhhdmUgbm8gZW5kaW5nLiBUaHVzIHRoZSBgZW5kYCBldmVudCB3aWxsIG5ldmVyIGJlIGZpcmVkLiAgXHJcblx0XHQgKiAgV2hlbiB0aGUgdHJpZ2dlciBwb3NpdGlvbiBvZiB0aGUgc2NlbmUgaXMgcGFzc2VkIHRoZSBldmVudHMgYXJlIGFsd2F5cyBmaXJlZCBpbiB0aGlzIG9yZGVyOiAgXHJcblx0XHQgKiAgYGVudGVyYCwgYHN0YXJ0YCwgYHByb2dyZXNzYCB3aGVuIHNjcm9sbGluZyBmb3J3YXJkICBcclxuXHRcdCAqICBhbmQgIFxyXG5cdFx0ICogIGBwcm9ncmVzc2AsIGBzdGFydGAsIGBsZWF2ZWAgd2hlbiBzY3JvbGxpbmcgaW4gcmV2ZXJzZVxyXG5cdFx0ICogIDIuIFNjZW5lcyB3aXRoIGBkdXJhdGlvbiA+IDBgOiAgXHJcblx0XHQgKiAgU2NlbmVzIHdpdGggYSBzZXQgZHVyYXRpb24gaGF2ZSBhIGRlZmluZWQgc3RhcnQgYW5kIGVuZCBwb2ludC4gIFxyXG5cdFx0ICogIFdoZW4gc2Nyb2xsaW5nIHBhc3QgdGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSBzY2VuZSBpdCB3aWxsIGZpcmUgdGhlc2UgZXZlbnRzIGluIHRoaXMgb3JkZXI6ICBcclxuXHRcdCAqICBgZW50ZXJgLCBgc3RhcnRgLCBgcHJvZ3Jlc3NgICBcclxuXHRcdCAqICBXaGVuIGNvbnRpbnVpbmcgdG8gc2Nyb2xsIGFuZCBwYXNzaW5nIHRoZSBlbmQgcG9pbnQgaXQgd2lsbCBmaXJlIHRoZXNlIGV2ZW50czogIFxyXG5cdFx0ICogIGBwcm9ncmVzc2AsIGBlbmRgLCBgbGVhdmVgICBcclxuXHRcdCAqICBXaGVuIHJldmVyc2luZyB0aHJvdWdoIHRoZSBlbmQgcG9pbnQgdGhlc2UgZXZlbnRzIGFyZSBmaXJlZDogIFxyXG5cdFx0ICogIGBlbnRlcmAsIGBlbmRgLCBgcHJvZ3Jlc3NgICBcclxuXHRcdCAqICBBbmQgd2hlbiBjb250aW51aW5nIHRvIHNjcm9sbCBwYXN0IHRoZSBzdGFydCBwb3NpdGlvbiBpbiByZXZlcnNlIGl0IHdpbGwgZmlyZTogIFxyXG5cdFx0ICogIGBwcm9ncmVzc2AsIGBzdGFydGAsIGBsZWF2ZWAgIFxyXG5cdFx0ICogIEluIGJldHdlZW4gc3RhcnQgYW5kIGVuZCB0aGUgYHByb2dyZXNzYCBldmVudCB3aWxsIGJlIGNhbGxlZCBjb25zdGFudGx5LCB3aGVuZXZlciB0aGUgcHJvZ3Jlc3MgY2hhbmdlcy5cclxuXHRcdCAqIFxyXG5cdFx0ICogSW4gc2hvcnQ6ICBcclxuXHRcdCAqIGBlbnRlcmAgZXZlbnRzIHdpbGwgYWx3YXlzIHRyaWdnZXIgKipiZWZvcmUqKiB0aGUgcHJvZ3Jlc3MgdXBkYXRlIGFuZCBgbGVhdmVgIGVudmVudHMgd2lsbCB0cmlnZ2VyICoqYWZ0ZXIqKiB0aGUgcHJvZ3Jlc3MgdXBkYXRlLiAgXHJcblx0XHQgKiBgc3RhcnRgIGFuZCBgZW5kYCB3aWxsIGFsd2F5cyB0cmlnZ2VyIGF0IHRoZWlyIHJlc3BlY3RpdmUgcG9zaXRpb24uXHJcblx0XHQgKiBcclxuXHRcdCAqIFBsZWFzZSByZXZpZXcgdGhlIGV2ZW50IGRlc2NyaXB0aW9ucyBmb3IgZGV0YWlscyBvbiB0aGUgZXZlbnRzIGFuZCB0aGUgZXZlbnQgb2JqZWN0IHRoYXQgaXMgcGFzc2VkIHRvIHRoZSBjYWxsYmFjay5cclxuXHRcdCAqIFxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNwcm9ncmVzc1xyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBzY2VuZSBwcm9ncmVzc1xyXG5cdFx0ICogdmFyIHByb2dyZXNzID0gc2NlbmUucHJvZ3Jlc3MoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgbmV3IHNjZW5lIHByb2dyZXNzXHJcblx0XHQgKiBzY2VuZS5wcm9ncmVzcygwLjMpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuZW50ZXJ9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnN0YXJ0fSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5wcm9ncmVzc30sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuZW5kfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5sZWF2ZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW3Byb2dyZXNzXSAtIFRoZSBuZXcgcHJvZ3Jlc3MgdmFsdWUgb2YgdGhlIHNjZW5lIGBbMC0xXWAuXHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBgZ2V0YCAtICBDdXJyZW50IHNjZW5lIHByb2dyZXNzLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5wcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xyXG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgLy8gZ2V0XHJcblx0XHRcdFx0cmV0dXJuIF9wcm9ncmVzcztcclxuXHRcdFx0fSBlbHNlIHsgLy8gc2V0XHJcblx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRkb1VwZGF0ZSA9IGZhbHNlLFxyXG5cdFx0XHRcdFx0b2xkU3RhdGUgPSBfc3RhdGUsXHJcblx0XHRcdFx0XHRzY3JvbGxEaXJlY3Rpb24gPSBfY29udHJvbGxlciA/IF9jb250cm9sbGVyLmluZm8oXCJzY3JvbGxEaXJlY3Rpb25cIikgOiAnUEFVU0VEJyxcclxuXHRcdFx0XHRcdHJldmVyc2VPckZvcndhcmQgPSBfb3B0aW9ucy5yZXZlcnNlIHx8IHByb2dyZXNzID49IF9wcm9ncmVzcztcclxuXHRcdFx0XHRpZiAoX29wdGlvbnMuZHVyYXRpb24gPT09IDApIHtcclxuXHRcdFx0XHRcdC8vIHplcm8gZHVyYXRpb24gc2NlbmVzXHJcblx0XHRcdFx0XHRkb1VwZGF0ZSA9IF9wcm9ncmVzcyAhPSBwcm9ncmVzcztcclxuXHRcdFx0XHRcdF9wcm9ncmVzcyA9IHByb2dyZXNzIDwgMSAmJiByZXZlcnNlT3JGb3J3YXJkID8gMCA6IDE7XHJcblx0XHRcdFx0XHRfc3RhdGUgPSBfcHJvZ3Jlc3MgPT09IDAgPyBTQ0VORV9TVEFURV9CRUZPUkUgOiBTQ0VORV9TVEFURV9EVVJJTkc7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIHNjZW5lcyB3aXRoIHN0YXJ0IGFuZCBlbmRcclxuXHRcdFx0XHRcdGlmIChwcm9ncmVzcyA8IDAgJiYgX3N0YXRlICE9PSBTQ0VORV9TVEFURV9CRUZPUkUgJiYgcmV2ZXJzZU9yRm9yd2FyZCkge1xyXG5cdFx0XHRcdFx0XHQvLyBnbyBiYWNrIHRvIGluaXRpYWwgc3RhdGVcclxuXHRcdFx0XHRcdFx0X3Byb2dyZXNzID0gMDtcclxuXHRcdFx0XHRcdFx0X3N0YXRlID0gU0NFTkVfU1RBVEVfQkVGT1JFO1xyXG5cdFx0XHRcdFx0XHRkb1VwZGF0ZSA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHByb2dyZXNzID49IDAgJiYgcHJvZ3Jlc3MgPCAxICYmIHJldmVyc2VPckZvcndhcmQpIHtcclxuXHRcdFx0XHRcdFx0X3Byb2dyZXNzID0gcHJvZ3Jlc3M7XHJcblx0XHRcdFx0XHRcdF9zdGF0ZSA9IFNDRU5FX1NUQVRFX0RVUklORztcclxuXHRcdFx0XHRcdFx0ZG9VcGRhdGUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwcm9ncmVzcyA+PSAxICYmIF9zdGF0ZSAhPT0gU0NFTkVfU1RBVEVfQUZURVIpIHtcclxuXHRcdFx0XHRcdFx0X3Byb2dyZXNzID0gMTtcclxuXHRcdFx0XHRcdFx0X3N0YXRlID0gU0NFTkVfU1RBVEVfQUZURVI7XHJcblx0XHRcdFx0XHRcdGRvVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcgJiYgIXJldmVyc2VPckZvcndhcmQpIHtcclxuXHRcdFx0XHRcdFx0dXBkYXRlUGluU3RhdGUoKTsgLy8gaW4gY2FzZSB3ZSBzY3JvbGxlZCBiYWNrd2FyZHMgbWlkLXNjZW5lIGFuZCByZXZlcnNlIGlzIGRpc2FibGVkID0+IHVwZGF0ZSB0aGUgcGluIHBvc2l0aW9uLCBzbyBpdCBkb2Vzbid0IG1vdmUgYmFjayBhcyB3ZWxsLlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZG9VcGRhdGUpIHtcclxuXHRcdFx0XHRcdC8vIGZpcmUgZXZlbnRzXHJcblx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0ZXZlbnRWYXJzID0ge1xyXG5cdFx0XHRcdFx0XHRcdHByb2dyZXNzOiBfcHJvZ3Jlc3MsXHJcblx0XHRcdFx0XHRcdFx0c3RhdGU6IF9zdGF0ZSxcclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxEaXJlY3Rpb246IHNjcm9sbERpcmVjdGlvblxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRzdGF0ZUNoYW5nZWQgPSBfc3RhdGUgIT0gb2xkU3RhdGU7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHRyaWdnZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7IC8vIHRtcCBoZWxwZXIgdG8gc2ltcGxpZnkgY29kZVxyXG5cdFx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyKGV2ZW50TmFtZSwgZXZlbnRWYXJzKTtcclxuXHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0aWYgKHN0YXRlQ2hhbmdlZCkgeyAvLyBlbnRlciBldmVudHNcclxuXHRcdFx0XHRcdFx0aWYgKG9sZFN0YXRlICE9PSBTQ0VORV9TVEFURV9EVVJJTkcpIHtcclxuXHRcdFx0XHRcdFx0XHR0cmlnZ2VyKFwiZW50ZXJcIik7XHJcblx0XHRcdFx0XHRcdFx0dHJpZ2dlcihvbGRTdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQkVGT1JFID8gXCJzdGFydFwiIDogXCJlbmRcIik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRyaWdnZXIoXCJwcm9ncmVzc1wiKTtcclxuXHRcdFx0XHRcdGlmIChzdGF0ZUNoYW5nZWQpIHsgLy8gbGVhdmUgZXZlbnRzXHJcblx0XHRcdFx0XHRcdGlmIChfc3RhdGUgIT09IFNDRU5FX1NUQVRFX0RVUklORykge1xyXG5cdFx0XHRcdFx0XHRcdHRyaWdnZXIoX3N0YXRlID09PSBTQ0VORV9TVEFURV9CRUZPUkUgPyBcInN0YXJ0XCIgOiBcImVuZFwiKTtcclxuXHRcdFx0XHRcdFx0XHR0cmlnZ2VyKFwibGVhdmVcIik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGUgdGhlIHN0YXJ0IGFuZCBlbmQgc2Nyb2xsT2Zmc2V0IG9mIHRoZSBjb250YWluZXIuXHJcblx0XHQgKiBUaGUgcG9zaXRpb25zIHJlZmxlY3Qgd2hhdCB0aGUgY29udHJvbGxlcidzIHNjcm9sbCBwb3NpdGlvbiB3aWxsIGJlIGF0IHRoZSBzdGFydCBhbmQgZW5kIHJlc3BlY3RpdmVseS5cclxuXHRcdCAqIElzIGNhbGxlZCwgd2hlbjpcclxuXHRcdCAqICAgLSBTY2VuZSBldmVudCBcImNoYW5nZVwiIGlzIGNhbGxlZCB3aXRoOiBvZmZzZXQsIHRyaWdnZXJIb29rLCBkdXJhdGlvbiBcclxuXHRcdCAqICAgLSBzY3JvbGwgY29udGFpbmVyIGV2ZW50IFwicmVzaXplXCIgaXMgY2FsbGVkXHJcblx0XHQgKiAgIC0gdGhlIHBvc2l0aW9uIG9mIHRoZSB0cmlnZ2VyRWxlbWVudCBjaGFuZ2VzXHJcblx0XHQgKiAgIC0gdGhlIGNvbnRyb2xsZXIgY2hhbmdlcyAtPiBhZGRUbygpXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlU2Nyb2xsT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRfc2Nyb2xsT2Zmc2V0ID0ge1xyXG5cdFx0XHRcdHN0YXJ0OiBfdHJpZ2dlclBvcyArIF9vcHRpb25zLm9mZnNldFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIgJiYgX29wdGlvbnMudHJpZ2dlckVsZW1lbnQpIHtcclxuXHRcdFx0XHQvLyB0YWtlIGF3YXkgdHJpZ2dlckhvb2sgcG9ydGlvbiB0byBnZXQgcmVsYXRpdmUgdG8gdG9wXHJcblx0XHRcdFx0X3Njcm9sbE9mZnNldC5zdGFydCAtPSBfY29udHJvbGxlci5pbmZvKFwic2l6ZVwiKSAqIF9vcHRpb25zLnRyaWdnZXJIb29rO1xyXG5cdFx0XHR9XHJcblx0XHRcdF9zY3JvbGxPZmZzZXQuZW5kID0gX3Njcm9sbE9mZnNldC5zdGFydCArIF9vcHRpb25zLmR1cmF0aW9uO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZXMgdGhlIGR1cmF0aW9uIGlmIHNldCB0byBhIGR5bmFtaWMgZnVuY3Rpb24uXHJcblx0XHQgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgc2NlbmUgaXMgYWRkZWQgdG8gYSBjb250cm9sbGVyIGFuZCBpbiByZWd1bGFyIGludGVydmFscyBmcm9tIHRoZSBjb250cm9sbGVyIHRocm91Z2ggc2NlbmUucmVmcmVzaCgpLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIGlmIHRoZSBkdXJhdGlvbiBjaGFuZ2VkXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgaWYgdGhlIGR1cmF0aW9uIGNoYW5nZWRcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdXBwcmVzc0V2ZW50cz1mYWxzZV0gLSBJZiB0cnVlIHRoZSBzaGlmdCBldmVudCB3aWxsIGJlIHN1cHByZXNzZWQuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlRHVyYXRpb24gPSBmdW5jdGlvbiAoc3VwcHJlc3NFdmVudHMpIHtcclxuXHRcdFx0Ly8gdXBkYXRlIGR1cmF0aW9uXHJcblx0XHRcdGlmIChfZHVyYXRpb25VcGRhdGVNZXRob2QpIHtcclxuXHRcdFx0XHR2YXIgdmFybmFtZSA9IFwiZHVyYXRpb25cIjtcclxuXHRcdFx0XHRpZiAoY2hhbmdlT3B0aW9uKHZhcm5hbWUsIF9kdXJhdGlvblVwZGF0ZU1ldGhvZC5jYWxsKFNjZW5lKSkgJiYgIXN1cHByZXNzRXZlbnRzKSB7IC8vIHNldFxyXG5cdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcImNoYW5nZVwiLCB7XHJcblx0XHRcdFx0XHRcdHdoYXQ6IHZhcm5hbWUsXHJcblx0XHRcdFx0XHRcdG5ld3ZhbDogX29wdGlvbnNbdmFybmFtZV1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInNoaWZ0XCIsIHtcclxuXHRcdFx0XHRcdFx0cmVhc29uOiB2YXJuYW1lXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJpZ2dlckVsZW1lbnQsIGlmIHByZXNlbnQuXHJcblx0XHQgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgLi4uXHJcblx0XHQgKiAgLSAuLi4gd2hlbiB0aGUgdHJpZ2dlckVsZW1lbnQgaXMgY2hhbmdlZFxyXG5cdFx0ICogIC0gLi4uIHdoZW4gdGhlIHNjZW5lIGlzIGFkZGVkIHRvIGEgKG5ldykgY29udHJvbGxlclxyXG5cdFx0ICogIC0gLi4uIGluIHJlZ3VsYXIgaW50ZXJ2YWxzIGZyb20gdGhlIGNvbnRyb2xsZXIgdGhyb3VnaCBzY2VuZS5yZWZyZXNoKCkuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuc2hpZnR9LCBpZiB0aGUgcG9zaXRpb24gY2hhbmdlZFxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N1cHByZXNzRXZlbnRzPWZhbHNlXSAtIElmIHRydWUgdGhlIHNoaWZ0IGV2ZW50IHdpbGwgYmUgc3VwcHJlc3NlZC5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciB1cGRhdGVUcmlnZ2VyRWxlbWVudFBvc2l0aW9uID0gZnVuY3Rpb24gKHN1cHByZXNzRXZlbnRzKSB7XHJcblx0XHRcdHZhclxyXG5cdFx0XHRcdGVsZW1lbnRQb3MgPSAwLFxyXG5cdFx0XHRcdHRlbGVtID0gX29wdGlvbnMudHJpZ2dlckVsZW1lbnQ7XHJcblx0XHRcdGlmIChfY29udHJvbGxlciAmJiAodGVsZW0gfHwgX3RyaWdnZXJQb3MgPiAwKSkgeyAvLyBlaXRoZXIgYW4gZWxlbWVudCBleGlzdHMgb3Igd2FzIHJlbW92ZWQgYW5kIHRoZSB0cmlnZ2VyUG9zIGlzIHN0aWxsID4gMFxyXG5cdFx0XHRcdGlmICh0ZWxlbSkgeyAvLyB0aGVyZSBjdXJyZW50bHkgYSB0cmlnZ2VyRWxlbWVudCBzZXRcclxuXHRcdFx0XHRcdGlmICh0ZWxlbS5wYXJlbnROb2RlKSB7IC8vIGNoZWNrIGlmIGVsZW1lbnQgaXMgc3RpbGwgYXR0YWNoZWQgdG8gRE9NXHJcblx0XHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xsZXJJbmZvID0gX2NvbnRyb2xsZXIuaW5mbygpLFxyXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lck9mZnNldCA9IF91dGlsLmdldC5vZmZzZXQoY29udHJvbGxlckluZm8uY29udGFpbmVyKSwgLy8gY29udGFpbmVyIHBvc2l0aW9uIGlzIG5lZWRlZCBiZWNhdXNlIGVsZW1lbnQgb2Zmc2V0IGlzIHJldHVybmVkIGluIHJlbGF0aW9uIHRvIGRvY3VtZW50LCBub3QgaW4gcmVsYXRpb24gdG8gY29udGFpbmVyLlxyXG5cdFx0XHRcdFx0XHRcdHBhcmFtID0gY29udHJvbGxlckluZm8udmVydGljYWwgPyBcInRvcFwiIDogXCJsZWZ0XCI7IC8vIHdoaWNoIHBhcmFtIGlzIG9mIGludGVyZXN0ID9cclxuXHJcblx0XHRcdFx0XHRcdC8vIGlmIHBhcmVudCBpcyBzcGFjZXIsIHVzZSBzcGFjZXIgcG9zaXRpb24gaW5zdGVhZCBzbyBjb3JyZWN0IHN0YXJ0IHBvc2l0aW9uIGlzIHJldHVybmVkIGZvciBwaW5uZWQgZWxlbWVudHMuXHJcblx0XHRcdFx0XHRcdHdoaWxlICh0ZWxlbS5wYXJlbnROb2RlLmhhc0F0dHJpYnV0ZShQSU5fU1BBQ0VSX0FUVFJJQlVURSkpIHtcclxuXHRcdFx0XHRcdFx0XHR0ZWxlbSA9IHRlbGVtLnBhcmVudE5vZGU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHZhciBlbGVtZW50T2Zmc2V0ID0gX3V0aWwuZ2V0Lm9mZnNldCh0ZWxlbSk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIWNvbnRyb2xsZXJJbmZvLmlzRG9jdW1lbnQpIHsgLy8gY29udGFpbmVyIGlzIG5vdCB0aGUgZG9jdW1lbnQgcm9vdCwgc28gc3Vic3RyYWN0IHNjcm9sbCBQb3NpdGlvbiB0byBnZXQgY29ycmVjdCB0cmlnZ2VyIGVsZW1lbnQgcG9zaXRpb24gcmVsYXRpdmUgdG8gc2Nyb2xsY29udGVudFxyXG5cdFx0XHRcdFx0XHRcdGNvbnRhaW5lck9mZnNldFtwYXJhbV0gLT0gX2NvbnRyb2xsZXIuc2Nyb2xsUG9zKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRQb3MgPSBlbGVtZW50T2Zmc2V0W3BhcmFtXSAtIGNvbnRhaW5lck9mZnNldFtwYXJhbV07XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHsgLy8gdGhlcmUgd2FzIGFuIGVsZW1lbnQsIGJ1dCBpdCB3YXMgcmVtb3ZlZCBmcm9tIERPTVxyXG5cdFx0XHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiB0cmlnZ2VyRWxlbWVudCB3YXMgcmVtb3ZlZCBmcm9tIERPTSBhbmQgd2lsbCBiZSByZXNldCB0b1wiLCB1bmRlZmluZWQpO1xyXG5cdFx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyRWxlbWVudCh1bmRlZmluZWQpOyAvLyB1bnNldCwgc28gYSBjaGFuZ2UgZXZlbnQgaXMgdHJpZ2dlcmVkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgY2hhbmdlZCA9IGVsZW1lbnRQb3MgIT0gX3RyaWdnZXJQb3M7XHJcblx0XHRcdFx0X3RyaWdnZXJQb3MgPSBlbGVtZW50UG9zO1xyXG5cdFx0XHRcdGlmIChjaGFuZ2VkICYmICFzdXBwcmVzc0V2ZW50cykge1xyXG5cdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInNoaWZ0XCIsIHtcclxuXHRcdFx0XHRcdFx0cmVhc29uOiBcInRyaWdnZXJFbGVtZW50UG9zaXRpb25cIlxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVHJpZ2dlciBhIHNoaWZ0IGV2ZW50LCB3aGVuIHRoZSBjb250YWluZXIgaXMgcmVzaXplZCBhbmQgdGhlIHRyaWdnZXJIb29rIGlzID4gMS5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciBvbkNvbnRhaW5lclJlc2l6ZSA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGlmIChfb3B0aW9ucy50cmlnZ2VySG9vayA+IDApIHtcclxuXHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwic2hpZnRcIiwge1xyXG5cdFx0XHRcdFx0cmVhc29uOiBcImNvbnRhaW5lclJlc2l6ZVwiXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cclxuXHRcdHZhciBfdmFsaWRhdGUgPSBfdXRpbC5leHRlbmQoU0NFTkVfT1BUSU9OUy52YWxpZGF0ZSwge1xyXG5cdFx0XHQvLyB2YWxpZGF0aW9uIGZvciBkdXJhdGlvbiBoYW5kbGVkIGludGVybmFsbHkgZm9yIHJlZmVyZW5jZSB0byBwcml2YXRlIHZhciBfZHVyYXRpb25NZXRob2RcclxuXHRcdFx0ZHVyYXRpb246IGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHRpZiAoX3V0aWwudHlwZS5TdHJpbmcodmFsKSAmJiB2YWwubWF0Y2goL14oXFwufFxcZCkqXFxkKyUkLykpIHtcclxuXHRcdFx0XHRcdC8vIHBlcmNlbnRhZ2UgdmFsdWVcclxuXHRcdFx0XHRcdHZhciBwZXJjID0gcGFyc2VGbG9hdCh2YWwpIC8gMTAwO1xyXG5cdFx0XHRcdFx0dmFsID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gX2NvbnRyb2xsZXIgPyBfY29udHJvbGxlci5pbmZvKFwic2l6ZVwiKSAqIHBlcmMgOiAwO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKF91dGlsLnR5cGUuRnVuY3Rpb24odmFsKSkge1xyXG5cdFx0XHRcdFx0Ly8gZnVuY3Rpb25cclxuXHRcdFx0XHRcdF9kdXJhdGlvblVwZGF0ZU1ldGhvZCA9IHZhbDtcclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdHZhbCA9IHBhcnNlRmxvYXQoX2R1cmF0aW9uVXBkYXRlTWV0aG9kLmNhbGwoU2NlbmUpKTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdFx0dmFsID0gLTE7IC8vIHdpbGwgY2F1c2UgZXJyb3IgYmVsb3dcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gdmFsIGhhcyB0byBiZSBmbG9hdFxyXG5cdFx0XHRcdHZhbCA9IHBhcnNlRmxvYXQodmFsKTtcclxuXHRcdFx0XHRpZiAoIV91dGlsLnR5cGUuTnVtYmVyKHZhbCkgfHwgdmFsIDwgMCkge1xyXG5cdFx0XHRcdFx0aWYgKF9kdXJhdGlvblVwZGF0ZU1ldGhvZCkge1xyXG5cdFx0XHRcdFx0XHRfZHVyYXRpb25VcGRhdGVNZXRob2QgPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0XHRcdHRocm93IFtcIkludmFsaWQgcmV0dXJuIHZhbHVlIG9mIHN1cHBsaWVkIGZ1bmN0aW9uIGZvciBvcHRpb24gXFxcImR1cmF0aW9uXFxcIjpcIiwgdmFsXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRocm93IFtcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiZHVyYXRpb25cXFwiOlwiLCB2YWxdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgYSBzcGVjaWZpYyBvciBhbGwgb3B0aW9ucyBhbmQgcmVzZXQgdG8gZGVmYXVsdCBpZiBuZWNjZXNzYXJ5LlxyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIHZhbGlkYXRlT3B0aW9uID0gZnVuY3Rpb24gKGNoZWNrKSB7XHJcblx0XHRcdGNoZWNrID0gYXJndW1lbnRzLmxlbmd0aCA/IFtjaGVja10gOiBPYmplY3Qua2V5cyhfdmFsaWRhdGUpO1xyXG5cdFx0XHRjaGVjay5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb25OYW1lLCBrZXkpIHtcclxuXHRcdFx0XHR2YXIgdmFsdWU7XHJcblx0XHRcdFx0aWYgKF92YWxpZGF0ZVtvcHRpb25OYW1lXSkgeyAvLyB0aGVyZSBpcyBhIHZhbGlkYXRpb24gbWV0aG9kIGZvciB0aGlzIG9wdGlvblxyXG5cdFx0XHRcdFx0dHJ5IHsgLy8gdmFsaWRhdGUgdmFsdWVcclxuXHRcdFx0XHRcdFx0dmFsdWUgPSBfdmFsaWRhdGVbb3B0aW9uTmFtZV0oX29wdGlvbnNbb3B0aW9uTmFtZV0pO1xyXG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkgeyAvLyB2YWxpZGF0aW9uIGZhaWxlZCAtPiByZXNldCB0byBkZWZhdWx0XHJcblx0XHRcdFx0XHRcdHZhbHVlID0gREVGQVVMVF9PUFRJT05TW29wdGlvbk5hbWVdO1xyXG5cdFx0XHRcdFx0XHR2YXIgbG9nTVNHID0gX3V0aWwudHlwZS5TdHJpbmcoZSkgPyBbZV0gOiBlO1xyXG5cdFx0XHRcdFx0XHRpZiAoX3V0aWwudHlwZS5BcnJheShsb2dNU0cpKSB7XHJcblx0XHRcdFx0XHRcdFx0bG9nTVNHWzBdID0gXCJFUlJPUjogXCIgKyBsb2dNU0dbMF07XHJcblx0XHRcdFx0XHRcdFx0bG9nTVNHLnVuc2hpZnQoMSk7IC8vIGxvZ2xldmVsIDEgZm9yIGVycm9yIG1zZ1xyXG5cdFx0XHRcdFx0XHRcdGxvZy5hcHBseSh0aGlzLCBsb2dNU0cpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBQcm9ibGVtIGV4ZWN1dGluZyB2YWxpZGF0aW9uIGNhbGxiYWNrIGZvciBvcHRpb24gJ1wiICsgb3B0aW9uTmFtZSArIFwiJzpcIiwgZS5tZXNzYWdlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0XHRcdFx0X29wdGlvbnNbb3B0aW9uTmFtZV0gPSB2YWx1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEhlbHBlciB1c2VkIGJ5IHRoZSBzZXR0ZXIvZ2V0dGVycyBmb3Igc2NlbmUgb3B0aW9uc1xyXG5cdFx0ICogQHByaXZhdGVcclxuXHRcdCAqL1xyXG5cdFx0dmFyIGNoYW5nZU9wdGlvbiA9IGZ1bmN0aW9uICh2YXJuYW1lLCBuZXd2YWwpIHtcclxuXHRcdFx0dmFyXHJcblx0XHRcdFx0Y2hhbmdlZCA9IGZhbHNlLFxyXG5cdFx0XHRcdG9sZHZhbCA9IF9vcHRpb25zW3Zhcm5hbWVdO1xyXG5cdFx0XHRpZiAoX29wdGlvbnNbdmFybmFtZV0gIT0gbmV3dmFsKSB7XHJcblx0XHRcdFx0X29wdGlvbnNbdmFybmFtZV0gPSBuZXd2YWw7XHJcblx0XHRcdFx0dmFsaWRhdGVPcHRpb24odmFybmFtZSk7IC8vIHJlc2V0cyB0byBkZWZhdWx0IGlmIG5lY2Vzc2FyeVxyXG5cdFx0XHRcdGNoYW5nZWQgPSBvbGR2YWwgIT0gX29wdGlvbnNbdmFybmFtZV07XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGNoYW5nZWQ7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIGdlbmVyYXRlIGdldHRlcnMvc2V0dGVycyBmb3IgYWxsIG9wdGlvbnNcclxuXHRcdHZhciBhZGRTY2VuZU9wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25OYW1lKSB7XHJcblx0XHRcdGlmICghU2NlbmVbb3B0aW9uTmFtZV0pIHtcclxuXHRcdFx0XHRTY2VuZVtvcHRpb25OYW1lXSA9IGZ1bmN0aW9uIChuZXdWYWwpIHtcclxuXHRcdFx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXRcclxuXHRcdFx0XHRcdFx0cmV0dXJuIF9vcHRpb25zW29wdGlvbk5hbWVdO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbk5hbWUgPT09IFwiZHVyYXRpb25cIikgeyAvLyBuZXcgZHVyYXRpb24gaXMgc2V0LCBzbyBhbnkgcHJldmlvdXNseSBzZXQgZnVuY3Rpb24gbXVzdCBiZSB1bnNldFxyXG5cdFx0XHRcdFx0XHRcdF9kdXJhdGlvblVwZGF0ZU1ldGhvZCA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAoY2hhbmdlT3B0aW9uKG9wdGlvbk5hbWUsIG5ld1ZhbCkpIHsgLy8gc2V0XHJcblx0XHRcdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcImNoYW5nZVwiLCB7XHJcblx0XHRcdFx0XHRcdFx0XHR3aGF0OiBvcHRpb25OYW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0bmV3dmFsOiBfb3B0aW9uc1tvcHRpb25OYW1lXVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChTQ0VORV9PUFRJT05TLnNoaWZ0cy5pbmRleE9mKG9wdGlvbk5hbWUpID4gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJzaGlmdFwiLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlYXNvbjogb3B0aW9uTmFtZVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgZHVyYXRpb24gb3B0aW9uIHZhbHVlLlxyXG5cdFx0ICpcclxuXHRcdCAqIEFzIGEgKipzZXR0ZXIqKiBpdCBhY2NlcHRzIHRocmVlIHR5cGVzIG9mIHBhcmFtZXRlcnM6XHJcblx0XHQgKiAxLiBgbnVtYmVyYDogU2V0cyB0aGUgZHVyYXRpb24gb2YgdGhlIHNjZW5lIHRvIGV4YWN0bHkgdGhpcyBhbW91bnQgb2YgcGl4ZWxzLiAgXHJcblx0XHQgKiAgIFRoaXMgbWVhbnMgdGhlIHNjZW5lIHdpbGwgbGFzdCBmb3IgZXhhY3RseSB0aGlzIGFtb3VudCBvZiBwaXhlbHMgc2Nyb2xsZWQuIFN1Yi1QaXhlbHMgYXJlIGFsc28gdmFsaWQuXHJcblx0XHQgKiAgIEEgdmFsdWUgb2YgYDBgIG1lYW5zIHRoYXQgdGhlIHNjZW5lIGlzICdvcGVuIGVuZCcgYW5kIG5vIGVuZCB3aWxsIGJlIHRyaWdnZXJlZC4gUGlucyB3aWxsIG5ldmVyIHVucGluIGFuZCBhbmltYXRpb25zIHdpbGwgcGxheSBpbmRlcGVuZGVudGx5IG9mIHNjcm9sbCBwcm9ncmVzcy5cclxuXHRcdCAqIDIuIGBzdHJpbmdgOiBBbHdheXMgdXBkYXRlcyB0aGUgZHVyYXRpb24gcmVsYXRpdmUgdG8gcGFyZW50IHNjcm9sbCBjb250YWluZXIuICBcclxuXHRcdCAqICAgRm9yIGV4YW1wbGUgYFwiMTAwJVwiYCB3aWxsIGtlZXAgdGhlIGR1cmF0aW9uIGFsd2F5cyBleGFjdGx5IGF0IHRoZSBpbm5lciBoZWlnaHQgb2YgdGhlIHNjcm9sbCBjb250YWluZXIuXHJcblx0XHQgKiAgIFdoZW4gc2Nyb2xsaW5nIHZlcnRpY2FsbHkgdGhlIHdpZHRoIGlzIHVzZWQgZm9yIHJlZmVyZW5jZSByZXNwZWN0aXZlbHkuXHJcblx0XHQgKiAzLiBgZnVuY3Rpb25gOiBUaGUgc3VwcGxpZWQgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgdG8gcmV0dXJuIHRoZSBzY2VuZSBkdXJhdGlvbi5cclxuXHRcdCAqICAgVGhpcyBpcyB1c2VmdWwgaW4gc2V0dXBzIHdoZXJlIHRoZSBkdXJhdGlvbiBkZXBlbmRzIG9uIG90aGVyIGVsZW1lbnRzIHdobyBtaWdodCBjaGFuZ2Ugc2l6ZS4gQnkgc3VwcGx5aW5nIGEgZnVuY3Rpb24geW91IGNhbiByZXR1cm4gYSB2YWx1ZSBpbnN0ZWFkIG9mIHVwZGF0aW5nIHBvdGVudGlhbGx5IG11bHRpcGxlIHNjZW5lIGR1cmF0aW9ucy4gIFxyXG5cdFx0ICogICBUaGUgc2NlbmUgY2FuIGJlIHJlZmVyZW5jZWQgaW5zaWRlIHRoZSBjYWxsYmFjayB1c2luZyBgdGhpc2AuXHJcblx0XHQgKiAgIF8qKldBUk5JTkc6KiogVGhpcyBpcyBhbiBlYXN5IHdheSB0byBraWxsIHBlcmZvcm1hbmNlLCBhcyB0aGUgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZCBldmVyeSB0aW1lIGBTY2VuZS5yZWZyZXNoKClgIGlzIGNhbGxlZCwgd2hpY2ggaGFwcGVucyBhIGxvdC4gVGhlIGludGVydmFsIGlzIGRlZmluZWQgYnkgdGhlIGNvbnRyb2xsZXIgKHNlZSBTY3JvbGxNYWdpYy5Db250cm9sbGVyIG9wdGlvbiBgcmVmcmVzaEludGVydmFsYCkuICBcclxuXHRcdCAqICAgSXQncyByZWNvbWVuZGVkIHRvIGF2b2lkIGNhbGN1bGF0aW9ucyB3aXRoaW4gdGhlIGZ1bmN0aW9uIGFuZCB1c2UgY2FjaGVkIHZhcmlhYmxlcyBhcyByZXR1cm4gdmFsdWVzLiAgXHJcblx0XHQgKiAgIFRoaXMgY291bnRzIGRvdWJsZSBpZiB5b3UgdXNlIHRoZSBzYW1lIGZ1bmN0aW9uIGZvciBtdWx0aXBsZSBzY2VuZXMuX1xyXG5cdFx0ICpcclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjZHVyYXRpb25cclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgZHVyYXRpb24gdmFsdWVcclxuXHRcdCAqIHZhciBkdXJhdGlvbiA9IHNjZW5lLmR1cmF0aW9uKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IGEgbmV3IGR1cmF0aW9uXHJcblx0XHQgKiBzY2VuZS5kdXJhdGlvbigzMDApO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBkdXJhdGlvbiByZXNwb25zaXZlbHkgdG8gY29udGFpbmVyIHNpemVcclxuXHRcdCAqIHNjZW5lLmR1cmF0aW9uKFwiMTAwJVwiKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyB1c2UgYSBmdW5jdGlvbiB0byByYW5kb21pemUgdGhlIGR1cmF0aW9uIGZvciBzb21lIHJlYXNvbi5cclxuXHRcdCAqIHZhciBkdXJhdGlvblZhbHVlQ2FjaGU7XHJcblx0XHQgKiBmdW5jdGlvbiBkdXJhdGlvbkNhbGxiYWNrICgpIHtcclxuXHRcdCAqICAgcmV0dXJuIGR1cmF0aW9uVmFsdWVDYWNoZTtcclxuXHRcdCAqIH1cclxuXHRcdCAqIGZ1bmN0aW9uIHVwZGF0ZUR1cmF0aW9uICgpIHtcclxuXHRcdCAqICAgZHVyYXRpb25WYWx1ZUNhY2hlID0gTWF0aC5yYW5kb20oKSAqIDEwMDtcclxuXHRcdCAqIH1cclxuXHRcdCAqIHVwZGF0ZUR1cmF0aW9uKCk7IC8vIHNldCB0byBpbml0aWFsIHZhbHVlXHJcblx0XHQgKiBzY2VuZS5kdXJhdGlvbihkdXJhdGlvbkNhbGxiYWNrKTsgLy8gc2V0IGR1cmF0aW9uIGNhbGxiYWNrXHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQHBhcmFtIHsobnVtYmVyfHN0cmluZ3xmdW5jdGlvbil9IFtuZXdEdXJhdGlvbl0gLSBUaGUgbmV3IGR1cmF0aW9uIHNldHRpbmcgZm9yIHRoZSBzY2VuZS5cclxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IGBnZXRgIC0gIEN1cnJlbnQgc2NlbmUgZHVyYXRpb24uXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIG9mZnNldCBvcHRpb24gdmFsdWUuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI29mZnNldFxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBvZmZzZXRcclxuXHRcdCAqIHZhciBvZmZzZXQgPSBzY2VuZS5vZmZzZXQoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgYSBuZXcgb2Zmc2V0XHJcblx0XHQgKiBzY2VuZS5vZmZzZXQoMTAwKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuc2hpZnR9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW25ld09mZnNldF0gLSBUaGUgbmV3IG9mZnNldCBvZiB0aGUgc2NlbmUuXHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBgZ2V0YCAtICBDdXJyZW50IHNjZW5lIG9mZnNldC5cclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgdHJpZ2dlckVsZW1lbnQgb3B0aW9uIHZhbHVlLlxyXG5cdFx0ICogRG9lcyAqKm5vdCoqIGZpcmUgYFNjZW5lLnNoaWZ0YCwgYmVjYXVzZSBjaGFuZ2luZyB0aGUgdHJpZ2dlciBFbGVtZW50IGRvZXNuJ3QgbmVjZXNzYXJpbHkgbWVhbiB0aGUgc3RhcnQgcG9zaXRpb24gY2hhbmdlcy4gVGhpcyB3aWxsIGJlIGRldGVybWluZWQgaW4gYFNjZW5lLnJlZnJlc2goKWAsIHdoaWNoIGlzIGF1dG9tYXRpY2FsbHkgdHJpZ2dlcmVkLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSN0cmlnZ2VyRWxlbWVudFxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCB0cmlnZ2VyRWxlbWVudFxyXG5cdFx0ICogdmFyIHRyaWdnZXJFbGVtZW50ID0gc2NlbmUudHJpZ2dlckVsZW1lbnQoKTtcclxuXHRcdCAqXHJcblx0XHQgKiAvLyBzZXQgYSBuZXcgdHJpZ2dlckVsZW1lbnQgdXNpbmcgYSBzZWxlY3RvclxyXG5cdFx0ICogc2NlbmUudHJpZ2dlckVsZW1lbnQoXCIjdHJpZ2dlclwiKTtcclxuXHRcdCAqIC8vIHNldCBhIG5ldyB0cmlnZ2VyRWxlbWVudCB1c2luZyBhIERPTSBvYmplY3RcclxuXHRcdCAqIHNjZW5lLnRyaWdnZXJFbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJpZ2dlclwiKSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gW25ld1RyaWdnZXJFbGVtZW50XSAtIFRoZSBuZXcgdHJpZ2dlciBlbGVtZW50IGZvciB0aGUgc2NlbmUuXHJcblx0XHQgKiBAcmV0dXJucyB7KHN0cmluZ3xvYmplY3QpfSBgZ2V0YCAtICBDdXJyZW50IHRyaWdnZXJFbGVtZW50LlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSB0cmlnZ2VySG9vayBvcHRpb24gdmFsdWUuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3RyaWdnZXJIb29rXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHRyaWdnZXJIb29rIHZhbHVlXHJcblx0XHQgKiB2YXIgdHJpZ2dlckhvb2sgPSBzY2VuZS50cmlnZ2VySG9vaygpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBhIG5ldyB0cmlnZ2VySG9vayB1c2luZyBhIHN0cmluZ1xyXG5cdFx0ICogc2NlbmUudHJpZ2dlckhvb2soXCJvbkxlYXZlXCIpO1xyXG5cdFx0ICogLy8gc2V0IGEgbmV3IHRyaWdnZXJIb29rIHVzaW5nIGEgbnVtYmVyXHJcblx0XHQgKiBzY2VuZS50cmlnZ2VySG9vaygwLjcpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5zaGlmdH0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcclxuXHRcdCAqIEBwYXJhbSB7KG51bWJlcnxzdHJpbmcpfSBbbmV3VHJpZ2dlckhvb2tdIC0gVGhlIG5ldyB0cmlnZ2VySG9vayBvZiB0aGUgc2NlbmUuIFNlZSB7QGxpbmsgU2NlbmV9IHBhcmFtZXRlciBkZXNjcmlwdGlvbiBmb3IgdmFsdWUgb3B0aW9ucy5cclxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IGBnZXRgIC0gIEN1cnJlbnQgdHJpZ2dlckhvb2sgKEFMV0FZUyBudW1lcmljYWwpLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSByZXZlcnNlIG9wdGlvbiB2YWx1ZS5cclxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcmV2ZXJzZVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCByZXZlcnNlIG9wdGlvblxyXG5cdFx0ICogdmFyIHJldmVyc2UgPSBzY2VuZS5yZXZlcnNlKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gc2V0IG5ldyByZXZlcnNlIG9wdGlvblxyXG5cdFx0ICogc2NlbmUucmV2ZXJzZShmYWxzZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtuZXdSZXZlcnNlXSAtIFRoZSBuZXcgcmV2ZXJzZSBzZXR0aW5nIG9mIHRoZSBzY2VuZS5cclxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufSBgZ2V0YCAtICBDdXJyZW50IHJldmVyc2Ugb3B0aW9uIHZhbHVlLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBsb2dsZXZlbCBvcHRpb24gdmFsdWUuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2xvZ2xldmVsXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IGxvZ2xldmVsXHJcblx0XHQgKiB2YXIgbG9nbGV2ZWwgPSBzY2VuZS5sb2dsZXZlbCgpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHNldCBuZXcgbG9nbGV2ZWxcclxuXHRcdCAqIHNjZW5lLmxvZ2xldmVsKDMpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtuZXdMb2dsZXZlbF0gLSBUaGUgbmV3IGxvZ2xldmVsIHNldHRpbmcgb2YgdGhlIHNjZW5lLiBgWzAtM11gXHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBgZ2V0YCAtICBDdXJyZW50IGxvZ2xldmVsLlxyXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cclxuXHRcdCAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogKipHZXQqKiB0aGUgYXNzb2NpYXRlZCBjb250cm9sbGVyLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNjb250cm9sbGVyXHJcblx0XHQgKiBAZXhhbXBsZVxyXG5cdFx0ICogLy8gZ2V0IHRoZSBjb250cm9sbGVyIG9mIGEgc2NlbmVcclxuXHRcdCAqIHZhciBjb250cm9sbGVyID0gc2NlbmUuY29udHJvbGxlcigpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtTY3JvbGxNYWdpYy5Db250cm9sbGVyfSBQYXJlbnQgY29udHJvbGxlciBvciBgdW5kZWZpbmVkYFxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBfY29udHJvbGxlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIHRoZSBjdXJyZW50IHN0YXRlLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNzdGF0ZVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdFx0ICogdmFyIHN0YXRlID0gc2NlbmUuc3RhdGUoKTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBgXCJCRUZPUkVcImAsIGBcIkRVUklOR1wiYCBvciBgXCJBRlRFUlwiYFxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnN0YXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gX3N0YXRlO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqICoqR2V0KiogdGhlIGN1cnJlbnQgc2Nyb2xsIG9mZnNldCBmb3IgdGhlIHN0YXJ0IG9mIHRoZSBzY2VuZS4gIFxyXG5cdFx0ICogTWluZCwgdGhhdCB0aGUgc2Nyb2xsT2Zmc2V0IGlzIHJlbGF0ZWQgdG8gdGhlIHNpemUgb2YgdGhlIGNvbnRhaW5lciwgaWYgYHRyaWdnZXJIb29rYCBpcyBiaWdnZXIgdGhhbiBgMGAgKG9yIGBcIm9uTGVhdmVcImApLiAgXHJcblx0XHQgKiBUaGlzIG1lYW5zLCB0aGF0IHJlc2l6aW5nIHRoZSBjb250YWluZXIgb3IgY2hhbmdpbmcgdGhlIGB0cmlnZ2VySG9va2Agd2lsbCBpbmZsdWVuY2UgdGhlIHNjZW5lJ3Mgc3RhcnQgb2Zmc2V0LlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNzY3JvbGxPZmZzZXRcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIG9mZnNldCBmb3IgdGhlIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIHNjZW5lLlxyXG5cdFx0ICogdmFyIHN0YXJ0ID0gc2NlbmUuc2Nyb2xsT2Zmc2V0KCk7XHJcblx0XHQgKiB2YXIgZW5kID0gc2NlbmUuc2Nyb2xsT2Zmc2V0KCkgKyBzY2VuZS5kdXJhdGlvbigpO1xyXG5cdFx0ICogY29uc29sZS5sb2coXCJ0aGUgc2NlbmUgc3RhcnRzIGF0XCIsIHN0YXJ0LCBcImFuZCBlbmRzIGF0XCIsIGVuZCk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gVGhlIHNjcm9sbCBvZmZzZXQgKG9mIHRoZSBjb250YWluZXIpIGF0IHdoaWNoIHRoZSBzY2VuZSB3aWxsIHRyaWdnZXIuIFkgdmFsdWUgZm9yIHZlcnRpY2FsIGFuZCBYIHZhbHVlIGZvciBob3Jpem9udGFsIHNjcm9sbHMuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuc2Nyb2xsT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gX3Njcm9sbE9mZnNldC5zdGFydDtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAqKkdldCoqIHRoZSB0cmlnZ2VyIHBvc2l0aW9uIG9mIHRoZSBzY2VuZSAoaW5jbHVkaW5nIHRoZSB2YWx1ZSBvZiB0aGUgYG9mZnNldGAgb3B0aW9uKS4gIFxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSN0cmlnZ2VyUG9zaXRpb25cclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKiAvLyBnZXQgdGhlIHNjZW5lJ3MgdHJpZ2dlciBwb3NpdGlvblxyXG5cdFx0ICogdmFyIHRyaWdnZXJQb3NpdGlvbiA9IHNjZW5lLnRyaWdnZXJQb3NpdGlvbigpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IFN0YXJ0IHBvc2l0aW9uIG9mIHRoZSBzY2VuZS4gVG9wIHBvc2l0aW9uIHZhbHVlIGZvciB2ZXJ0aWNhbCBhbmQgbGVmdCBwb3NpdGlvbiB2YWx1ZSBmb3IgaG9yaXpvbnRhbCBzY3JvbGxzLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnRyaWdnZXJQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIHBvcyA9IF9vcHRpb25zLm9mZnNldDsgLy8gdGhlIG9mZnNldCBpcyB0aGUgYmFzaXNcclxuXHRcdFx0aWYgKF9jb250cm9sbGVyKSB7XHJcblx0XHRcdFx0Ly8gZ2V0IHRoZSB0cmlnZ2VyIHBvc2l0aW9uXHJcblx0XHRcdFx0aWYgKF9vcHRpb25zLnRyaWdnZXJFbGVtZW50KSB7XHJcblx0XHRcdFx0XHQvLyBFbGVtZW50IGFzIHRyaWdnZXJcclxuXHRcdFx0XHRcdHBvcyArPSBfdHJpZ2dlclBvcztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gcmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIHRyaWdnZXJIb29rIHRvIHN0YXJ0IGF0IHRoZSBiZWdpbm5pbmdcclxuXHRcdFx0XHRcdHBvcyArPSBfY29udHJvbGxlci5pbmZvKFwic2l6ZVwiKSAqIFNjZW5lLnRyaWdnZXJIb29rKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBwb3M7XHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHR2YXJcclxuXHRcdFx0X3BpbixcclxuXHRcdFx0X3Bpbk9wdGlvbnM7XHJcblxyXG5cdFx0U2NlbmVcclxuXHRcdFx0Lm9uKFwic2hpZnQuaW50ZXJuYWxcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR2YXIgZHVyYXRpb25DaGFuZ2VkID0gZS5yZWFzb24gPT09IFwiZHVyYXRpb25cIjtcclxuXHRcdFx0XHRpZiAoKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQUZURVIgJiYgZHVyYXRpb25DaGFuZ2VkKSB8fCAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcgJiYgX29wdGlvbnMuZHVyYXRpb24gPT09IDApKSB7XHJcblx0XHRcdFx0XHQvLyBpZiBbZHVyYXRpb24gY2hhbmdlZCBhZnRlciBhIHNjZW5lIChpbnNpZGUgc2NlbmUgcHJvZ3Jlc3MgdXBkYXRlcyBwaW4gcG9zaXRpb24pXSBvciBbZHVyYXRpb24gaXMgMCwgd2UgYXJlIGluIHBpbiBwaGFzZSBhbmQgc29tZSBvdGhlciB2YWx1ZSBjaGFuZ2VkXS5cclxuXHRcdFx0XHRcdHVwZGF0ZVBpblN0YXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkdXJhdGlvbkNoYW5nZWQpIHtcclxuXHRcdFx0XHRcdHVwZGF0ZVBpbkRpbWVuc2lvbnMoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5vbihcInByb2dyZXNzLmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dXBkYXRlUGluU3RhdGUoKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0Lm9uKFwiYWRkLmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQub24oXCJkZXN0cm95LmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0U2NlbmUucmVtb3ZlUGluKGUucmVzZXQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdC8qKlxyXG5cdFx0ICogVXBkYXRlIHRoZSBwaW4gc3RhdGUuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlUGluU3RhdGUgPSBmdW5jdGlvbiAoZm9yY2VVbnBpbikge1xyXG5cdFx0XHRpZiAoX3BpbiAmJiBfY29udHJvbGxlcikge1xyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0Y29udGFpbmVySW5mbyA9IF9jb250cm9sbGVyLmluZm8oKSxcclxuXHRcdFx0XHRcdHBpblRhcmdldCA9IF9waW5PcHRpb25zLnNwYWNlci5maXJzdENoaWxkOyAvLyBtYXkgYmUgcGluIGVsZW1lbnQgb3IgYW5vdGhlciBzcGFjZXIsIGlmIGNhc2NhZGluZyBwaW5zXHJcblxyXG5cdFx0XHRcdGlmICghZm9yY2VVbnBpbiAmJiBfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORykgeyAvLyBkdXJpbmcgc2NlbmUgb3IgaWYgZHVyYXRpb24gaXMgMCBhbmQgd2UgYXJlIHBhc3QgdGhlIHRyaWdnZXJcclxuXHRcdFx0XHRcdC8vIHBpbm5lZCBzdGF0ZVxyXG5cdFx0XHRcdFx0aWYgKF91dGlsLmNzcyhwaW5UYXJnZXQsIFwicG9zaXRpb25cIikgIT0gXCJmaXhlZFwiKSB7XHJcblx0XHRcdFx0XHRcdC8vIGNoYW5nZSBzdGF0ZSBiZWZvcmUgdXBkYXRpbmcgcGluIHNwYWNlciAocG9zaXRpb24gY2hhbmdlcyBkdWUgdG8gZml4ZWQgY29sbGFwc2luZyBtaWdodCBvY2N1ci4pXHJcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhwaW5UYXJnZXQsIHtcclxuXHRcdFx0XHRcdFx0XHRcInBvc2l0aW9uXCI6IFwiZml4ZWRcIlxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0Ly8gdXBkYXRlIHBpbiBzcGFjZXJcclxuXHRcdFx0XHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRmaXhlZFBvcyA9IF91dGlsLmdldC5vZmZzZXQoX3Bpbk9wdGlvbnMuc3BhY2VyLCB0cnVlKSwgLy8gZ2V0IHZpZXdwb3J0IHBvc2l0aW9uIG9mIHNwYWNlclxyXG5cdFx0XHRcdFx0XHRzY3JvbGxEaXN0YW5jZSA9IF9vcHRpb25zLnJldmVyc2UgfHwgX29wdGlvbnMuZHVyYXRpb24gPT09IDAgP1xyXG5cdFx0XHRcdFx0XHRjb250YWluZXJJbmZvLnNjcm9sbFBvcyAtIF9zY3JvbGxPZmZzZXQuc3RhcnQgLy8gcXVpY2tlclxyXG5cdFx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRcdE1hdGgucm91bmQoX3Byb2dyZXNzICogX29wdGlvbnMuZHVyYXRpb24gKiAxMCkgLyAxMDsgLy8gaWYgbm8gcmV2ZXJzZSBhbmQgZHVyaW5nIHBpbiB0aGUgcG9zaXRpb24gbmVlZHMgdG8gYmUgcmVjYWxjdWxhdGVkIHVzaW5nIHRoZSBwcm9ncmVzc1xyXG5cclxuXHRcdFx0XHRcdC8vIGFkZCBzY3JvbGxEaXN0YW5jZVxyXG5cdFx0XHRcdFx0Zml4ZWRQb3NbY29udGFpbmVySW5mby52ZXJ0aWNhbCA/IFwidG9wXCIgOiBcImxlZnRcIl0gKz0gc2Nyb2xsRGlzdGFuY2U7XHJcblxyXG5cdFx0XHRcdFx0Ly8gc2V0IG5ldyB2YWx1ZXNcclxuXHRcdFx0XHRcdF91dGlsLmNzcyhfcGluT3B0aW9ucy5zcGFjZXIuZmlyc3RDaGlsZCwge1xyXG5cdFx0XHRcdFx0XHR0b3A6IGZpeGVkUG9zLnRvcCxcclxuXHRcdFx0XHRcdFx0bGVmdDogZml4ZWRQb3MubGVmdFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIHVucGlubmVkIHN0YXRlXHJcblx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0bmV3Q1NTID0ge1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBfcGluT3B0aW9ucy5pbkZsb3cgPyBcInJlbGF0aXZlXCIgOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDBcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0Y2hhbmdlID0gX3V0aWwuY3NzKHBpblRhcmdldCwgXCJwb3NpdGlvblwiKSAhPSBuZXdDU1MucG9zaXRpb247XHJcblxyXG5cdFx0XHRcdFx0aWYgKCFfcGluT3B0aW9ucy5wdXNoRm9sbG93ZXJzKSB7XHJcblx0XHRcdFx0XHRcdG5ld0NTU1tjb250YWluZXJJbmZvLnZlcnRpY2FsID8gXCJ0b3BcIiA6IFwibGVmdFwiXSA9IF9vcHRpb25zLmR1cmF0aW9uICogX3Byb2dyZXNzO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChfb3B0aW9ucy5kdXJhdGlvbiA+IDApIHsgLy8gb25seSBjb25jZXJucyBzY2VuZXMgd2l0aCBkdXJhdGlvblxyXG5cdFx0XHRcdFx0XHRpZiAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9BRlRFUiAmJiBwYXJzZUZsb2F0KF91dGlsLmNzcyhfcGluT3B0aW9ucy5zcGFjZXIsIFwicGFkZGluZy10b3BcIikpID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2hhbmdlID0gdHJ1ZTsgLy8gaWYgaW4gYWZ0ZXIgc3RhdGUgYnV0IGhhdmVudCB1cGRhdGVkIHNwYWNlciB5ZXQgKGp1bXBlZCBwYXN0IHBpbilcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0JFRk9SRSAmJiBwYXJzZUZsb2F0KF91dGlsLmNzcyhfcGluT3B0aW9ucy5zcGFjZXIsIFwicGFkZGluZy1ib3R0b21cIikpID09PSAwKSB7IC8vIGJlZm9yZVxyXG5cdFx0XHRcdFx0XHRcdGNoYW5nZSA9IHRydWU7IC8vIGp1bXBlZCBwYXN0IGZpeGVkIHN0YXRlIHVwd2FyZCBkaXJlY3Rpb25cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gc2V0IG5ldyB2YWx1ZXNcclxuXHRcdFx0XHRcdF91dGlsLmNzcyhwaW5UYXJnZXQsIG5ld0NTUyk7XHJcblx0XHRcdFx0XHRpZiAoY2hhbmdlKSB7XHJcblx0XHRcdFx0XHRcdC8vIHVwZGF0ZSBwaW4gc3BhY2VyIGlmIHN0YXRlIGNoYW5nZWRcclxuXHRcdFx0XHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVwZGF0ZSB0aGUgcGluIHNwYWNlciBhbmQvb3IgZWxlbWVudCBzaXplLlxyXG5cdFx0ICogVGhlIHNpemUgb2YgdGhlIHNwYWNlciBuZWVkcyB0byBiZSB1cGRhdGVkIHdoZW5ldmVyIHRoZSBkdXJhdGlvbiBvZiB0aGUgc2NlbmUgY2hhbmdlcywgaWYgaXQgaXMgdG8gcHVzaCBkb3duIGZvbGxvd2luZyBlbGVtZW50cy5cclxuXHRcdCAqIEBwcml2YXRlXHJcblx0XHQgKi9cclxuXHRcdHZhciB1cGRhdGVQaW5EaW1lbnNpb25zID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoX3BpbiAmJiBfY29udHJvbGxlciAmJiBfcGluT3B0aW9ucy5pbkZsb3cpIHsgLy8gbm8gc3BhY2VycmVzaXplLCBpZiBvcmlnaW5hbCBwb3NpdGlvbiBpcyBhYnNvbHV0ZVxyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0YWZ0ZXIgPSAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9BRlRFUiksXHJcblx0XHRcdFx0XHRiZWZvcmUgPSAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9CRUZPUkUpLFxyXG5cdFx0XHRcdFx0ZHVyaW5nID0gKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HKSxcclxuXHRcdFx0XHRcdHZlcnRpY2FsID0gX2NvbnRyb2xsZXIuaW5mbyhcInZlcnRpY2FsXCIpLFxyXG5cdFx0XHRcdFx0cGluVGFyZ2V0ID0gX3Bpbk9wdGlvbnMuc3BhY2VyLmZpcnN0Q2hpbGQsIC8vIHVzdWFsbHkgdGhlIHBpbmVkIGVsZW1lbnQgYnV0IGNhbiBhbHNvIGJlIGFub3RoZXIgc3BhY2VyIChjYXNjYWRlZCBwaW5zKVxyXG5cdFx0XHRcdFx0bWFyZ2luQ29sbGFwc2UgPSBfdXRpbC5pc01hcmdpbkNvbGxhcHNlVHlwZShfdXRpbC5jc3MoX3Bpbk9wdGlvbnMuc3BhY2VyLCBcImRpc3BsYXlcIikpLFxyXG5cdFx0XHRcdFx0Y3NzID0ge307XHJcblxyXG5cdFx0XHRcdC8vIHNldCBuZXcgc2l6ZVxyXG5cdFx0XHRcdC8vIGlmIHJlbHNpemU6IHNwYWNlciAtPiBwaW4gfCBlbHNlOiBwaW4gLT4gc3BhY2VyXHJcblx0XHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUud2lkdGggfHwgX3Bpbk9wdGlvbnMucmVsU2l6ZS5hdXRvRnVsbFdpZHRoKSB7XHJcblx0XHRcdFx0XHRpZiAoZHVyaW5nKSB7XHJcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhfcGluLCB7XHJcblx0XHRcdFx0XHRcdFx0XCJ3aWR0aFwiOiBfdXRpbC5nZXQud2lkdGgoX3Bpbk9wdGlvbnMuc3BhY2VyKVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhfcGluLCB7XHJcblx0XHRcdFx0XHRcdFx0XCJ3aWR0aFwiOiBcIjEwMCVcIlxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gbWlud2lkdGggaXMgbmVlZGVkIGZvciBjYXNjYWRlZCBwaW5zLlxyXG5cdFx0XHRcdFx0Y3NzW1wibWluLXdpZHRoXCJdID0gX3V0aWwuZ2V0LndpZHRoKHZlcnRpY2FsID8gX3BpbiA6IHBpblRhcmdldCwgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRjc3Mud2lkdGggPSBkdXJpbmcgPyBjc3NbXCJtaW4td2lkdGhcIl0gOiBcImF1dG9cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUuaGVpZ2h0KSB7XHJcblx0XHRcdFx0XHRpZiAoZHVyaW5nKSB7XHJcblx0XHRcdFx0XHRcdC8vIHRoZSBvbmx5IHBhZGRpbmcgdGhlIHNwYWNlciBzaG91bGQgZXZlciBpbmNsdWRlIGlzIHRoZSBkdXJhdGlvbiAoaWYgcHVzaEZvbGxvd2VycyA9IHRydWUpLCBzbyB3ZSBuZWVkIHRvIHN1YnN0cmFjdCB0aGF0LlxyXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xyXG5cdFx0XHRcdFx0XHRcdFwiaGVpZ2h0XCI6IF91dGlsLmdldC5oZWlnaHQoX3Bpbk9wdGlvbnMuc3BhY2VyKSAtIChfcGluT3B0aW9ucy5wdXNoRm9sbG93ZXJzID8gX29wdGlvbnMuZHVyYXRpb24gOiAwKVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhfcGluLCB7XHJcblx0XHRcdFx0XHRcdFx0XCJoZWlnaHRcIjogXCIxMDAlXCJcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIG1hcmdpbiBpcyBvbmx5IGluY2x1ZGVkIGlmIGl0J3MgYSBjYXNjYWRlZCBwaW4gdG8gcmVzb2x2ZSBhbiBJRTkgYnVnXHJcblx0XHRcdFx0XHRjc3NbXCJtaW4taGVpZ2h0XCJdID0gX3V0aWwuZ2V0LmhlaWdodCh2ZXJ0aWNhbCA/IHBpblRhcmdldCA6IF9waW4sIHRydWUsICFtYXJnaW5Db2xsYXBzZSk7IC8vIG5lZWRlZCBmb3IgY2FzY2FkaW5nIHBpbnNcclxuXHRcdFx0XHRcdGNzcy5oZWlnaHQgPSBkdXJpbmcgPyBjc3NbXCJtaW4taGVpZ2h0XCJdIDogXCJhdXRvXCI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBhZGQgc3BhY2UgZm9yIGR1cmF0aW9uIGlmIHB1c2hGb2xsb3dlcnMgaXMgdHJ1ZVxyXG5cdFx0XHRcdGlmIChfcGluT3B0aW9ucy5wdXNoRm9sbG93ZXJzKSB7XHJcblx0XHRcdFx0XHRjc3NbXCJwYWRkaW5nXCIgKyAodmVydGljYWwgPyBcIlRvcFwiIDogXCJMZWZ0XCIpXSA9IF9vcHRpb25zLmR1cmF0aW9uICogX3Byb2dyZXNzO1xyXG5cdFx0XHRcdFx0Y3NzW1wicGFkZGluZ1wiICsgKHZlcnRpY2FsID8gXCJCb3R0b21cIiA6IFwiUmlnaHRcIildID0gX29wdGlvbnMuZHVyYXRpb24gKiAoMSAtIF9wcm9ncmVzcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdF91dGlsLmNzcyhfcGluT3B0aW9ucy5zcGFjZXIsIGNzcyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGVzIHRoZSBQaW4gc3RhdGUgKGluIGNlcnRhaW4gc2NlbmFyaW9zKVxyXG5cdFx0ICogSWYgdGhlIGNvbnRyb2xsZXIgY29udGFpbmVyIGlzIG5vdCB0aGUgZG9jdW1lbnQgYW5kIHdlIGFyZSBtaWQtcGluLXBoYXNlIHNjcm9sbGluZyBvciByZXNpemluZyB0aGUgbWFpbiBkb2N1bWVudCBjYW4gcmVzdWx0IHRvIHdyb25nIHBpbiBwb3NpdGlvbnMuXHJcblx0XHQgKiBTbyB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiByZXNpemUgYW5kIHNjcm9sbCBvZiB0aGUgZG9jdW1lbnQuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlUGluSW5Db250YWluZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChfY29udHJvbGxlciAmJiBfcGluICYmIF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HICYmICFfY29udHJvbGxlci5pbmZvKFwiaXNEb2N1bWVudFwiKSkge1xyXG5cdFx0XHRcdHVwZGF0ZVBpblN0YXRlKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGVzIHRoZSBQaW4gc3BhY2VyIHNpemUgc3RhdGUgKGluIGNlcnRhaW4gc2NlbmFyaW9zKVxyXG5cdFx0ICogSWYgY29udGFpbmVyIGlzIHJlc2l6ZWQgZHVyaW5nIHBpbiBhbmQgcmVsYXRpdmVseSBzaXplZCB0aGUgc2l6ZSBvZiB0aGUgcGluIG1pZ2h0IG5lZWQgdG8gYmUgdXBkYXRlZC4uLlxyXG5cdFx0ICogU28gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgb24gcmVzaXplIG9mIHRoZSBjb250YWluZXIuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdXBkYXRlUmVsYXRpdmVQaW5TcGFjZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChfY29udHJvbGxlciAmJiBfcGluICYmIC8vIHdlbGwsIGR1aFxyXG5cdFx0XHRcdF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HICYmIC8vIGVsZW1lbnQgaW4gcGlubmVkIHN0YXRlP1xyXG5cdFx0XHRcdCggLy8gaXMgd2lkdGggb3IgaGVpZ2h0IHJlbGF0aXZlbHkgc2l6ZWQsIGJ1dCBub3QgaW4gcmVsYXRpb24gdG8gYm9keT8gdGhlbiB3ZSBuZWVkIHRvIHJlY2FsYy5cclxuXHRcdFx0XHRcdCgoX3Bpbk9wdGlvbnMucmVsU2l6ZS53aWR0aCB8fCBfcGluT3B0aW9ucy5yZWxTaXplLmF1dG9GdWxsV2lkdGgpICYmIF91dGlsLmdldC53aWR0aCh3aW5kb3cpICE9IF91dGlsLmdldC53aWR0aChfcGluT3B0aW9ucy5zcGFjZXIucGFyZW50Tm9kZSkpIHx8XHJcblx0XHRcdFx0XHQoX3Bpbk9wdGlvbnMucmVsU2l6ZS5oZWlnaHQgJiYgX3V0aWwuZ2V0LmhlaWdodCh3aW5kb3cpICE9IF91dGlsLmdldC5oZWlnaHQoX3Bpbk9wdGlvbnMuc3BhY2VyLnBhcmVudE5vZGUpKVxyXG5cdFx0XHRcdClcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSXMgY2FsbGVkLCB3aGVuIHRoZSBtb3VzZXdoZWwgaXMgdXNlZCB3aGlsZSBvdmVyIGEgcGlubmVkIGVsZW1lbnQgaW5zaWRlIGEgZGl2IGNvbnRhaW5lci5cclxuXHRcdCAqIElmIHRoZSBzY2VuZSBpcyBpbiBmaXhlZCBzdGF0ZSBzY3JvbGwgZXZlbnRzIHdvdWxkIGJlIGNvdW50ZWQgdG93YXJkcyB0aGUgYm9keS4gVGhpcyBmb3J3YXJkcyB0aGUgZXZlbnQgdG8gdGhlIHNjcm9sbCBjb250YWluZXIuXHJcblx0XHQgKiBAcHJpdmF0ZVxyXG5cdFx0ICovXHJcblx0XHR2YXIgb25Nb3VzZXdoZWVsT3ZlclBpbiA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGlmIChfY29udHJvbGxlciAmJiBfcGluICYmIF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HICYmICFfY29udHJvbGxlci5pbmZvKFwiaXNEb2N1bWVudFwiKSkgeyAvLyBpbiBwaW4gc3RhdGVcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0X2NvbnRyb2xsZXIuX3NldFNjcm9sbFBvcyhfY29udHJvbGxlci5pbmZvKFwic2Nyb2xsUG9zXCIpIC0gKChlLndoZWVsRGVsdGEgfHwgZVtfY29udHJvbGxlci5pbmZvKFwidmVydGljYWxcIikgPyBcIndoZWVsRGVsdGFZXCIgOiBcIndoZWVsRGVsdGFYXCJdKSAvIDMgfHwgLWUuZGV0YWlsICogMzApKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFBpbiBhbiBlbGVtZW50IGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIHNjZW5lLlxyXG5cdFx0ICogSWYgdGhlIHNjZW5lIGR1cmF0aW9uIGlzIDAgdGhlIGVsZW1lbnQgd2lsbCBvbmx5IGJlIHVucGlubmVkLCBpZiB0aGUgdXNlciBzY3JvbGxzIGJhY2sgcGFzdCB0aGUgc3RhcnQgcG9zaXRpb24uICBcclxuXHRcdCAqIE1ha2Ugc3VyZSBvbmx5IG9uZSBwaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IGF0IHRoZSBzYW1lIHRpbWUuXHJcblx0XHQgKiBBbiBlbGVtZW50IGNhbiBiZSBwaW5uZWQgbXVsdGlwbGUgdGltZXMsIGJ1dCBvbmx5IHN1Y2Nlc3NpdmVseS5cclxuXHRcdCAqIF8qKk5PVEU6KiogVGhlIG9wdGlvbiBgcHVzaEZvbGxvd2Vyc2AgaGFzIG5vIGVmZmVjdCwgd2hlbiB0aGUgc2NlbmUgZHVyYXRpb24gaXMgMC5fXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3NldFBpblxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHBpbiBlbGVtZW50IGFuZCBwdXNoIGFsbCBmb2xsb3dpbmcgZWxlbWVudHMgZG93biBieSB0aGUgYW1vdW50IG9mIHRoZSBwaW4gZHVyYXRpb24uXHJcblx0XHQgKiBzY2VuZS5zZXRQaW4oXCIjcGluXCIpO1xyXG5cdFx0ICpcclxuXHRcdCAqIC8vIHBpbiBlbGVtZW50IGFuZCBrZWVwaW5nIGFsbCBmb2xsb3dpbmcgZWxlbWVudHMgaW4gdGhlaXIgcGxhY2UuIFRoZSBwaW5uZWQgZWxlbWVudCB3aWxsIG1vdmUgcGFzdCB0aGVtLlxyXG5cdFx0ICogc2NlbmUuc2V0UGluKFwiI3BpblwiLCB7cHVzaEZvbGxvd2VyczogZmFsc2V9KTtcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gZWxlbWVudCAtIEEgU2VsZWN0b3IgdGFyZ2V0aW5nIGFuIGVsZW1lbnQgb3IgYSBET00gb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgcGlubmVkLlxyXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IFtzZXR0aW5nc10gLSBzZXR0aW5ncyBmb3IgdGhlIHBpblxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbc2V0dGluZ3MucHVzaEZvbGxvd2Vycz10cnVlXSAtIElmIGB0cnVlYCBmb2xsb3dpbmcgZWxlbWVudHMgd2lsbCBiZSBcInB1c2hlZFwiIGRvd24gZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgcGluLCBpZiBgZmFsc2VgIHRoZSBwaW5uZWQgZWxlbWVudCB3aWxsIGp1c3Qgc2Nyb2xsIHBhc3QgdGhlbS4gIFxyXG5cdFx0IFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIElnbm9yZWQsIHdoZW4gZHVyYXRpb24gaXMgYDBgLlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtzZXR0aW5ncy5zcGFjZXJDbGFzcz1cInNjcm9sbG1hZ2ljLXBpbi1zcGFjZXJcIl0gLSBDbGFzc25hbWUgb2YgdGhlIHBpbiBzcGFjZXIgZWxlbWVudCwgd2hpY2ggaXMgdXNlZCB0byByZXBsYWNlIHRoZSBlbGVtZW50LlxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuc2V0UGluID0gZnVuY3Rpb24gKGVsZW1lbnQsIHNldHRpbmdzKSB7XHJcblx0XHRcdHZhclxyXG5cdFx0XHRcdGRlZmF1bHRTZXR0aW5ncyA9IHtcclxuXHRcdFx0XHRcdHB1c2hGb2xsb3dlcnM6IHRydWUsXHJcblx0XHRcdFx0XHRzcGFjZXJDbGFzczogXCJzY3JvbGxtYWdpYy1waW4tc3BhY2VyXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR2YXIgcHVzaEZvbGxvd2Vyc0FjdGl2ZWx5U2V0ID0gc2V0dGluZ3MgJiYgc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoJ3B1c2hGb2xsb3dlcnMnKTtcclxuXHRcdFx0c2V0dGluZ3MgPSBfdXRpbC5leHRlbmQoe30sIGRlZmF1bHRTZXR0aW5ncywgc2V0dGluZ3MpO1xyXG5cclxuXHRcdFx0Ly8gdmFsaWRhdGUgRWxlbWVudFxyXG5cdFx0XHRlbGVtZW50ID0gX3V0aWwuZ2V0LmVsZW1lbnRzKGVsZW1lbnQpWzBdO1xyXG5cdFx0XHRpZiAoIWVsZW1lbnQpIHtcclxuXHRcdFx0XHRsb2coMSwgXCJFUlJPUiBjYWxsaW5nIG1ldGhvZCAnc2V0UGluKCknOiBJbnZhbGlkIHBpbiBlbGVtZW50IHN1cHBsaWVkLlwiKTtcclxuXHRcdFx0XHRyZXR1cm4gU2NlbmU7IC8vIGNhbmNlbFxyXG5cdFx0XHR9IGVsc2UgaWYgKF91dGlsLmNzcyhlbGVtZW50LCBcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcclxuXHRcdFx0XHRsb2coMSwgXCJFUlJPUiBjYWxsaW5nIG1ldGhvZCAnc2V0UGluKCknOiBQaW4gZG9lcyBub3Qgd29yayB3aXRoIGVsZW1lbnRzIHRoYXQgYXJlIHBvc2l0aW9uZWQgJ2ZpeGVkJy5cIik7XHJcblx0XHRcdFx0cmV0dXJuIFNjZW5lOyAvLyBjYW5jZWxcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKF9waW4pIHsgLy8gcHJlZXhpc3RpbmcgcGluP1xyXG5cdFx0XHRcdGlmIChfcGluID09PSBlbGVtZW50KSB7XHJcblx0XHRcdFx0XHQvLyBzYW1lIHBpbiB3ZSBhbHJlYWR5IGhhdmUgLT4gZG8gbm90aGluZ1xyXG5cdFx0XHRcdFx0cmV0dXJuIFNjZW5lOyAvLyBjYW5jZWxcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8ga2lsbCBvbGQgcGluXHJcblx0XHRcdFx0XHRTY2VuZS5yZW1vdmVQaW4oKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdF9waW4gPSBlbGVtZW50O1xyXG5cclxuXHRcdFx0dmFyXHJcblx0XHRcdFx0cGFyZW50RGlzcGxheSA9IF9waW4ucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5LFxyXG5cdFx0XHRcdGJvdW5kc1BhcmFtcyA9IFtcInRvcFwiLCBcImxlZnRcIiwgXCJib3R0b21cIiwgXCJyaWdodFwiLCBcIm1hcmdpblwiLCBcIm1hcmdpbkxlZnRcIiwgXCJtYXJnaW5SaWdodFwiLCBcIm1hcmdpblRvcFwiLCBcIm1hcmdpbkJvdHRvbVwiXTtcclxuXHJcblx0XHRcdF9waW4ucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvLyBoYWNrIHN0YXJ0IHRvIGZvcmNlIGNzcyB0byByZXR1cm4gc3R5bGVzaGVldCB2YWx1ZXMgaW5zdGVhZCBvZiBjYWxjdWxhdGVkIHB4IHZhbHVlcy5cclxuXHRcdFx0dmFyXHJcblx0XHRcdFx0aW5GbG93ID0gX3V0aWwuY3NzKF9waW4sIFwicG9zaXRpb25cIikgIT0gXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdHBpbkNTUyA9IF91dGlsLmNzcyhfcGluLCBib3VuZHNQYXJhbXMuY29uY2F0KFtcImRpc3BsYXlcIl0pKSxcclxuXHRcdFx0XHRzaXplQ1NTID0gX3V0aWwuY3NzKF9waW4sIFtcIndpZHRoXCIsIFwiaGVpZ2h0XCJdKTtcclxuXHRcdFx0X3Bpbi5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSBwYXJlbnREaXNwbGF5OyAvLyBoYWNrIGVuZC5cclxuXHJcblx0XHRcdGlmICghaW5GbG93ICYmIHNldHRpbmdzLnB1c2hGb2xsb3dlcnMpIHtcclxuXHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiBJZiB0aGUgcGlubmVkIGVsZW1lbnQgaXMgcG9zaXRpb25lZCBhYnNvbHV0ZWx5IHB1c2hGb2xsb3dlcnMgd2lsbCBiZSBkaXNhYmxlZC5cIik7XHJcblx0XHRcdFx0c2V0dGluZ3MucHVzaEZvbGxvd2VycyA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgLy8gd2FpdCB1bnRpbCBhbGwgZmluaXNoZWQsIGJlY2F1c2Ugd2l0aCByZXNwb25zaXZlIGR1cmF0aW9uIGl0IHdpbGwgb25seSBiZSBzZXQgYWZ0ZXIgc2NlbmUgaXMgYWRkZWQgdG8gY29udHJvbGxlclxyXG5cdFx0XHRcdGlmIChfcGluICYmIF9vcHRpb25zLmR1cmF0aW9uID09PSAwICYmIHB1c2hGb2xsb3dlcnNBY3RpdmVseVNldCAmJiBzZXR0aW5ncy5wdXNoRm9sbG93ZXJzKSB7XHJcblx0XHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiBwdXNoRm9sbG93ZXJzID1cIiwgdHJ1ZSwgXCJoYXMgbm8gZWZmZWN0LCB3aGVuIHNjZW5lIGR1cmF0aW9uIGlzIDAuXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMCk7XHJcblxyXG5cdFx0XHQvLyBjcmVhdGUgc3BhY2VyIGFuZCBpbnNlcnRcclxuXHRcdFx0dmFyXHJcblx0XHRcdFx0c3BhY2VyID0gX3Bpbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgX3BpbiksXHJcblx0XHRcdFx0c3BhY2VyQ1NTID0gX3V0aWwuZXh0ZW5kKHBpbkNTUywge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGluRmxvdyA/IFwicmVsYXRpdmVcIiA6IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdGJveFNpemluZzogXCJjb250ZW50LWJveFwiLFxyXG5cdFx0XHRcdFx0bW96Qm94U2l6aW5nOiBcImNvbnRlbnQtYm94XCIsXHJcblx0XHRcdFx0XHR3ZWJraXRCb3hTaXppbmc6IFwiY29udGVudC1ib3hcIlxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKCFpbkZsb3cpIHsgLy8gY29weSBzaXplIGlmIHBvc2l0aW9uZWQgYWJzb2x1dGVseSwgdG8gd29yayBmb3IgYm90dG9tL3JpZ2h0IHBvc2l0aW9uZWQgZWxlbWVudHMuXHJcblx0XHRcdFx0X3V0aWwuZXh0ZW5kKHNwYWNlckNTUywgX3V0aWwuY3NzKF9waW4sIFtcIndpZHRoXCIsIFwiaGVpZ2h0XCJdKSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdF91dGlsLmNzcyhzcGFjZXIsIHNwYWNlckNTUyk7XHJcblx0XHRcdHNwYWNlci5zZXRBdHRyaWJ1dGUoUElOX1NQQUNFUl9BVFRSSUJVVEUsIFwiXCIpO1xyXG5cdFx0XHRfdXRpbC5hZGRDbGFzcyhzcGFjZXIsIHNldHRpbmdzLnNwYWNlckNsYXNzKTtcclxuXHJcblx0XHRcdC8vIHNldCB0aGUgcGluIE9wdGlvbnNcclxuXHRcdFx0X3Bpbk9wdGlvbnMgPSB7XHJcblx0XHRcdFx0c3BhY2VyOiBzcGFjZXIsXHJcblx0XHRcdFx0cmVsU2l6ZTogeyAvLyBzYXZlIGlmIHNpemUgaXMgZGVmaW5lZCB1c2luZyAlIHZhbHVlcy4gaWYgc28sIGhhbmRsZSBzcGFjZXIgcmVzaXplIGRpZmZlcmVudGx5Li4uXHJcblx0XHRcdFx0XHR3aWR0aDogc2l6ZUNTUy53aWR0aC5zbGljZSgtMSkgPT09IFwiJVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBzaXplQ1NTLmhlaWdodC5zbGljZSgtMSkgPT09IFwiJVwiLFxyXG5cdFx0XHRcdFx0YXV0b0Z1bGxXaWR0aDogc2l6ZUNTUy53aWR0aCA9PT0gXCJhdXRvXCIgJiYgaW5GbG93ICYmIF91dGlsLmlzTWFyZ2luQ29sbGFwc2VUeXBlKHBpbkNTUy5kaXNwbGF5KVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cHVzaEZvbGxvd2Vyczogc2V0dGluZ3MucHVzaEZvbGxvd2VycyxcclxuXHRcdFx0XHRpbkZsb3c6IGluRmxvdywgLy8gc3RvcmVzIGlmIHRoZSBlbGVtZW50IHRha2VzIHVwIHNwYWNlIGluIHRoZSBkb2N1bWVudCBmbG93XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRpZiAoIV9waW4uX19fb3JpZ1N0eWxlKSB7XHJcblx0XHRcdFx0X3Bpbi5fX19vcmlnU3R5bGUgPSB7fTtcclxuXHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdHBpbklubGluZUNTUyA9IF9waW4uc3R5bGUsXHJcblx0XHRcdFx0XHRjb3B5U3R5bGVzID0gYm91bmRzUGFyYW1zLmNvbmNhdChbXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcInBvc2l0aW9uXCIsIFwiYm94U2l6aW5nXCIsIFwibW96Qm94U2l6aW5nXCIsIFwid2Via2l0Qm94U2l6aW5nXCJdKTtcclxuXHRcdFx0XHRjb3B5U3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xyXG5cdFx0XHRcdFx0X3Bpbi5fX19vcmlnU3R5bGVbdmFsXSA9IHBpbklubGluZUNTU1t2YWxdIHx8IFwiXCI7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIHJlbGF0aXZlIHNpemUsIHRyYW5zZmVyIGl0IHRvIHNwYWNlciBhbmQgbWFrZSBwaW4gY2FsY3VsYXRlIGl0Li4uXHJcblx0XHRcdGlmIChfcGluT3B0aW9ucy5yZWxTaXplLndpZHRoKSB7XHJcblx0XHRcdFx0X3V0aWwuY3NzKHNwYWNlciwge1xyXG5cdFx0XHRcdFx0d2lkdGg6IHNpemVDU1Mud2lkdGhcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoX3Bpbk9wdGlvbnMucmVsU2l6ZS5oZWlnaHQpIHtcclxuXHRcdFx0XHRfdXRpbC5jc3Moc3BhY2VyLCB7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IHNpemVDU1MuaGVpZ2h0XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIG5vdyBwbGFjZSB0aGUgcGluIGVsZW1lbnQgaW5zaWRlIHRoZSBzcGFjZXJcdFxyXG5cdFx0XHRzcGFjZXIuYXBwZW5kQ2hpbGQoX3Bpbik7XHJcblx0XHRcdC8vIGFuZCBzZXQgbmV3IGNzc1xyXG5cdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBpbkZsb3cgPyBcInJlbGF0aXZlXCIgOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0bWFyZ2luOiBcImF1dG9cIixcclxuXHRcdFx0XHR0b3A6IFwiYXV0b1wiLFxyXG5cdFx0XHRcdGxlZnQ6IFwiYXV0b1wiLFxyXG5cdFx0XHRcdGJvdHRvbTogXCJhdXRvXCIsXHJcblx0XHRcdFx0cmlnaHQ6IFwiYXV0b1wiXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUud2lkdGggfHwgX3Bpbk9wdGlvbnMucmVsU2l6ZS5hdXRvRnVsbFdpZHRoKSB7XHJcblx0XHRcdFx0X3V0aWwuY3NzKF9waW4sIHtcclxuXHRcdFx0XHRcdGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcblx0XHRcdFx0XHRtb3pCb3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG5cdFx0XHRcdFx0d2Via2l0Qm94U2l6aW5nOiBcImJvcmRlci1ib3hcIlxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBhZGQgbGlzdGVuZXIgdG8gZG9jdW1lbnQgdG8gdXBkYXRlIHBpbiBwb3NpdGlvbiBpbiBjYXNlIGNvbnRyb2xsZXIgaXMgbm90IHRoZSBkb2N1bWVudC5cclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZVBpbkluQ29udGFpbmVyKTtcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVBpbkluQ29udGFpbmVyKTtcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVJlbGF0aXZlUGluU3BhY2VyKTtcclxuXHRcdFx0Ly8gYWRkIG1vdXNld2hlZWwgbGlzdGVuZXIgdG8gY2F0Y2ggc2Nyb2xscyBvdmVyIGZpeGVkIGVsZW1lbnRzXHJcblx0XHRcdF9waW4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgb25Nb3VzZXdoZWVsT3ZlclBpbik7XHJcblx0XHRcdF9waW4uYWRkRXZlbnRMaXN0ZW5lcihcIkRPTU1vdXNlU2Nyb2xsXCIsIG9uTW91c2V3aGVlbE92ZXJQaW4pO1xyXG5cclxuXHRcdFx0bG9nKDMsIFwiYWRkZWQgcGluXCIpO1xyXG5cclxuXHRcdFx0Ly8gZmluYWxseSB1cGRhdGUgdGhlIHBpbiB0byBpbml0XHJcblx0XHRcdHVwZGF0ZVBpblN0YXRlKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlIHRoZSBwaW4gZnJvbSB0aGUgc2NlbmUuXHJcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3JlbW92ZVBpblxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHJlbW92ZSB0aGUgcGluIGZyb20gdGhlIHNjZW5lIHdpdGhvdXQgcmVzZXR0aW5nIGl0ICh0aGUgc3BhY2VyIGlzIG5vdCByZW1vdmVkKVxyXG5cdFx0ICogc2NlbmUucmVtb3ZlUGluKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gcmVtb3ZlIHRoZSBwaW4gZnJvbSB0aGUgc2NlbmUgYW5kIHJlc2V0IHRoZSBwaW4gZWxlbWVudCB0byBpdHMgaW5pdGlhbCBwb3NpdGlvbiAoc3BhY2VyIGlzIHJlbW92ZWQpXHJcblx0XHQgKiBzY2VuZS5yZW1vdmVQaW4odHJ1ZSk7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcmVzZXQ9ZmFsc2VdIC0gSWYgYGZhbHNlYCB0aGUgc3BhY2VyIHdpbGwgbm90IGJlIHJlbW92ZWQgYW5kIHRoZSBlbGVtZW50J3MgcG9zaXRpb24gd2lsbCBub3QgYmUgcmVzZXQuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnJlbW92ZVBpbiA9IGZ1bmN0aW9uIChyZXNldCkge1xyXG5cdFx0XHRpZiAoX3Bpbikge1xyXG5cdFx0XHRcdGlmIChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORykge1xyXG5cdFx0XHRcdFx0dXBkYXRlUGluU3RhdGUodHJ1ZSk7IC8vIGZvcmNlIHVucGluIGF0IHBvc2l0aW9uXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChyZXNldCB8fCAhX2NvbnRyb2xsZXIpIHsgLy8gaWYgdGhlcmUncyBubyBjb250cm9sbGVyIG5vIHByb2dyZXNzIHdhcyBtYWRlIGFueXdheS4uLlxyXG5cdFx0XHRcdFx0dmFyIHBpblRhcmdldCA9IF9waW5PcHRpb25zLnNwYWNlci5maXJzdENoaWxkOyAvLyB1c3VhbGx5IHRoZSBwaW4gZWxlbWVudCwgYnV0IG1heSBiZSBhbm90aGVyIHNwYWNlciAoY2FzY2FkZWQgcGlucykuLi5cclxuXHRcdFx0XHRcdGlmIChwaW5UYXJnZXQuaGFzQXR0cmlidXRlKFBJTl9TUEFDRVJfQVRUUklCVVRFKSkgeyAvLyBjb3B5IG1hcmdpbnMgdG8gY2hpbGQgc3BhY2VyXHJcblx0XHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlID0gX3Bpbk9wdGlvbnMuc3BhY2VyLnN0eWxlLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlcyA9IFtcIm1hcmdpblwiLCBcIm1hcmdpbkxlZnRcIiwgXCJtYXJnaW5SaWdodFwiLCBcIm1hcmdpblRvcFwiLCBcIm1hcmdpbkJvdHRvbVwiXSxcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW5zID0ge307XHJcblx0XHRcdFx0XHRcdHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW5zW3ZhbF0gPSBzdHlsZVt2YWxdIHx8IFwiXCI7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MocGluVGFyZ2V0LCBtYXJnaW5zKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF9waW5PcHRpb25zLnNwYWNlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwaW5UYXJnZXQsIF9waW5PcHRpb25zLnNwYWNlcik7XHJcblx0XHRcdFx0XHRfcGluT3B0aW9ucy5zcGFjZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfcGluT3B0aW9ucy5zcGFjZXIpO1xyXG5cdFx0XHRcdFx0aWYgKCFfcGluLnBhcmVudE5vZGUuaGFzQXR0cmlidXRlKFBJTl9TUEFDRVJfQVRUUklCVVRFKSkgeyAvLyBpZiBpdCdzIHRoZSBsYXN0IHBpbiBmb3IgdGhpcyBlbGVtZW50IC0+IHJlc3RvcmUgaW5saW5lIHN0eWxlc1xyXG5cdFx0XHRcdFx0XHQvLyBUT0RPOiBvbmx5IGNvcnJlY3RseSBzZXQgZm9yIGZpcnN0IHBpbiAod2hlbiBjYXNjYWRpbmcpIC0gaG93IHRvIGZpeD9cclxuXHRcdFx0XHRcdFx0X3V0aWwuY3NzKF9waW4sIF9waW4uX19fb3JpZ1N0eWxlKTtcclxuXHRcdFx0XHRcdFx0ZGVsZXRlIF9waW4uX19fb3JpZ1N0eWxlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlUGluSW5Db250YWluZXIpO1xyXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVQaW5JbkNvbnRhaW5lcik7XHJcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVJlbGF0aXZlUGluU3BhY2VyKTtcclxuXHRcdFx0XHRfcGluLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIG9uTW91c2V3aGVlbE92ZXJQaW4pO1xyXG5cdFx0XHRcdF9waW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTU1vdXNlU2Nyb2xsXCIsIG9uTW91c2V3aGVlbE92ZXJQaW4pO1xyXG5cdFx0XHRcdF9waW4gPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0bG9nKDMsIFwicmVtb3ZlZCBwaW4gKHJlc2V0OiBcIiArIChyZXNldCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiKSArIFwiKVwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHR2YXJcclxuXHRcdFx0X2Nzc0NsYXNzZXMsXHJcblx0XHRcdF9jc3NDbGFzc0VsZW1zID0gW107XHJcblxyXG5cdFx0U2NlbmVcclxuXHRcdFx0Lm9uKFwiZGVzdHJveS5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFNjZW5lLnJlbW92ZUNsYXNzVG9nZ2xlKGUucmVzZXQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdC8qKlxyXG5cdFx0ICogRGVmaW5lIGEgY3NzIGNsYXNzIG1vZGlmaWNhdGlvbiB3aGlsZSB0aGUgc2NlbmUgaXMgYWN0aXZlLiAgXHJcblx0XHQgKiBXaGVuIHRoZSBzY2VuZSB0cmlnZ2VycyB0aGUgY2xhc3NlcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBzdXBwbGllZCBlbGVtZW50IGFuZCByZW1vdmVkLCB3aGVuIHRoZSBzY2VuZSBpcyBvdmVyLlxyXG5cdFx0ICogSWYgdGhlIHNjZW5lIGR1cmF0aW9uIGlzIDAgdGhlIGNsYXNzZXMgd2lsbCBvbmx5IGJlIHJlbW92ZWQgaWYgdGhlIHVzZXIgc2Nyb2xscyBiYWNrIHBhc3QgdGhlIHN0YXJ0IHBvc2l0aW9uLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNzZXRDbGFzc1RvZ2dsZVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIGFkZCB0aGUgY2xhc3MgJ215Y2xhc3MnIHRvIHRoZSBlbGVtZW50IHdpdGggdGhlIGlkICdteS1lbGVtJyBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY2VuZVxyXG5cdFx0ICogc2NlbmUuc2V0Q2xhc3NUb2dnbGUoXCIjbXktZWxlbVwiLCBcIm15Y2xhc3NcIik7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gYWRkIG11bHRpcGxlIGNsYXNzZXMgdG8gbXVsdGlwbGUgZWxlbWVudHMgZGVmaW5lZCBieSB0aGUgc2VsZWN0b3IgJy5jbGFzc0NoYW5nZSdcclxuXHRcdCAqIHNjZW5lLnNldENsYXNzVG9nZ2xlKFwiLmNsYXNzQ2hhbmdlXCIsIFwiY2xhc3MxIGNsYXNzMiBjbGFzczNcIik7XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IGVsZW1lbnQgLSBBIFNlbGVjdG9yIHRhcmdldGluZyBvbmUgb3IgbW9yZSBlbGVtZW50cyBvciBhIERPTSBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSBtb2RpZmllZC5cclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc2VzIC0gT25lIG9yIG1vcmUgQ2xhc3NuYW1lcyAoc2VwYXJhdGVkIGJ5IHNwYWNlKSB0aGF0IHNob3VsZCBiZSBhZGRlZCB0byB0aGUgZWxlbWVudCBkdXJpbmcgdGhlIHNjZW5lLlxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuc2V0Q2xhc3NUb2dnbGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3Nlcykge1xyXG5cdFx0XHR2YXIgZWxlbXMgPSBfdXRpbC5nZXQuZWxlbWVudHMoZWxlbWVudCk7XHJcblx0XHRcdGlmIChlbGVtcy5sZW5ndGggPT09IDAgfHwgIV91dGlsLnR5cGUuU3RyaW5nKGNsYXNzZXMpKSB7XHJcblx0XHRcdFx0bG9nKDEsIFwiRVJST1IgY2FsbGluZyBtZXRob2QgJ3NldENsYXNzVG9nZ2xlKCknOiBJbnZhbGlkIFwiICsgKGVsZW1zLmxlbmd0aCA9PT0gMCA/IFwiZWxlbWVudFwiIDogXCJjbGFzc2VzXCIpICsgXCIgc3VwcGxpZWQuXCIpO1xyXG5cdFx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoX2Nzc0NsYXNzRWxlbXMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdC8vIHJlbW92ZSBvbGQgb25lc1xyXG5cdFx0XHRcdFNjZW5lLnJlbW92ZUNsYXNzVG9nZ2xlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0X2Nzc0NsYXNzZXMgPSBjbGFzc2VzO1xyXG5cdFx0XHRfY3NzQ2xhc3NFbGVtcyA9IGVsZW1zO1xyXG5cdFx0XHRTY2VuZS5vbihcImVudGVyLmludGVybmFsX2NsYXNzIGxlYXZlLmludGVybmFsX2NsYXNzXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dmFyIHRvZ2dsZSA9IGUudHlwZSA9PT0gXCJlbnRlclwiID8gX3V0aWwuYWRkQ2xhc3MgOiBfdXRpbC5yZW1vdmVDbGFzcztcclxuXHRcdFx0XHRfY3NzQ2xhc3NFbGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtLCBrZXkpIHtcclxuXHRcdFx0XHRcdHRvZ2dsZShlbGVtLCBfY3NzQ2xhc3Nlcyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gU2NlbmU7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlIHRoZSBjbGFzcyBiaW5kaW5nIGZyb20gdGhlIHNjZW5lLlxyXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNyZW1vdmVDbGFzc1RvZ2dsZVxyXG5cdFx0ICogQGV4YW1wbGVcclxuXHRcdCAqIC8vIHJlbW92ZSBjbGFzcyBiaW5kaW5nIGZyb20gdGhlIHNjZW5lIHdpdGhvdXQgcmVzZXRcclxuXHRcdCAqIHNjZW5lLnJlbW92ZUNsYXNzVG9nZ2xlKCk7XHJcblx0XHQgKlxyXG5cdFx0ICogLy8gcmVtb3ZlIGNsYXNzIGJpbmRpbmcgYW5kIHJlbW92ZSB0aGUgY2hhbmdlcyBpdCBjYXVzZWRcclxuXHRcdCAqIHNjZW5lLnJlbW92ZUNsYXNzVG9nZ2xlKHRydWUpO1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc2V0PWZhbHNlXSAtIElmIGBmYWxzZWAgYW5kIHRoZSBjbGFzc2VzIGFyZSBjdXJyZW50bHkgYWN0aXZlLCB0aGV5IHdpbGwgcmVtYWluIG9uIHRoZSBlbGVtZW50LiBJZiBgdHJ1ZWAgdGhleSB3aWxsIGJlIHJlbW92ZWQuXHJcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnJlbW92ZUNsYXNzVG9nZ2xlID0gZnVuY3Rpb24gKHJlc2V0KSB7XHJcblx0XHRcdGlmIChyZXNldCkge1xyXG5cdFx0XHRcdF9jc3NDbGFzc0VsZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsZW0sIGtleSkge1xyXG5cdFx0XHRcdFx0X3V0aWwucmVtb3ZlQ2xhc3MoZWxlbSwgX2Nzc0NsYXNzZXMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdFNjZW5lLm9mZihcInN0YXJ0LmludGVybmFsX2NsYXNzIGVuZC5pbnRlcm5hbF9jbGFzc1wiKTtcclxuXHRcdFx0X2Nzc0NsYXNzZXMgPSB1bmRlZmluZWQ7XHJcblx0XHRcdF9jc3NDbGFzc0VsZW1zID0gW107XHJcblx0XHRcdHJldHVybiBTY2VuZTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gSU5JVFxyXG5cdFx0Y29uc3RydWN0KCk7XHJcblx0XHRyZXR1cm4gU2NlbmU7XHJcblx0fTtcclxuXHJcblx0Ly8gc3RvcmUgcGFnZXdpZGUgc2NlbmUgb3B0aW9uc1xyXG5cdHZhciBTQ0VORV9PUFRJT05TID0ge1xyXG5cdFx0ZGVmYXVsdHM6IHtcclxuXHRcdFx0ZHVyYXRpb246IDAsXHJcblx0XHRcdG9mZnNldDogMCxcclxuXHRcdFx0dHJpZ2dlckVsZW1lbnQ6IHVuZGVmaW5lZCxcclxuXHRcdFx0dHJpZ2dlckhvb2s6IDAuNSxcclxuXHRcdFx0cmV2ZXJzZTogdHJ1ZSxcclxuXHRcdFx0bG9nbGV2ZWw6IDJcclxuXHRcdH0sXHJcblx0XHR2YWxpZGF0ZToge1xyXG5cdFx0XHRvZmZzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHR2YWwgPSBwYXJzZUZsb2F0KHZhbCk7XHJcblx0XHRcdFx0aWYgKCFfdXRpbC50eXBlLk51bWJlcih2YWwpKSB7XHJcblx0XHRcdFx0XHR0aHJvdyBbXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcIm9mZnNldFxcXCI6XCIsIHZhbF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB2YWw7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRyaWdnZXJFbGVtZW50OiBmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdFx0dmFsID0gdmFsIHx8IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRpZiAodmFsKSB7XHJcblx0XHRcdFx0XHR2YXIgZWxlbSA9IF91dGlsLmdldC5lbGVtZW50cyh2YWwpWzBdO1xyXG5cdFx0XHRcdFx0aWYgKGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlKSB7XHJcblx0XHRcdFx0XHRcdHZhbCA9IGVsZW07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aHJvdyBbXCJFbGVtZW50IGRlZmluZWQgaW4gb3B0aW9uIFxcXCJ0cmlnZ2VyRWxlbWVudFxcXCIgd2FzIG5vdCBmb3VuZDpcIiwgdmFsXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdFx0fSxcclxuXHRcdFx0dHJpZ2dlckhvb2s6IGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHR2YXIgdHJhbnNsYXRlID0ge1xyXG5cdFx0XHRcdFx0XCJvbkNlbnRlclwiOiAwLjUsXHJcblx0XHRcdFx0XHRcIm9uRW50ZXJcIjogMSxcclxuXHRcdFx0XHRcdFwib25MZWF2ZVwiOiAwXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRpZiAoX3V0aWwudHlwZS5OdW1iZXIodmFsKSkge1xyXG5cdFx0XHRcdFx0dmFsID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ocGFyc2VGbG9hdCh2YWwpLCAxKSk7IC8vICBtYWtlIHN1cmUgaXRzIGJldHdlZWVuIDAgYW5kIDFcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbCBpbiB0cmFuc2xhdGUpIHtcclxuXHRcdFx0XHRcdHZhbCA9IHRyYW5zbGF0ZVt2YWxdO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aHJvdyBbXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcInRyaWdnZXJIb29rXFxcIjogXCIsIHZhbF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB2YWw7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJldmVyc2U6IGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHRyZXR1cm4gISF2YWw7IC8vIGZvcmNlIGJvb2xlYW5cclxuXHRcdFx0fSxcclxuXHRcdFx0bG9nbGV2ZWw6IGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHR2YWwgPSBwYXJzZUludCh2YWwpO1xyXG5cdFx0XHRcdGlmICghX3V0aWwudHlwZS5OdW1iZXIodmFsKSB8fCB2YWwgPCAwIHx8IHZhbCA+IDMpIHtcclxuXHRcdFx0XHRcdHRocm93IFtcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwibG9nbGV2ZWxcXFwiOlwiLCB2YWxdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9LCAvLyBob2xkZXIgZm9yICB2YWxpZGF0aW9uIG1ldGhvZHMuIGR1cmF0aW9uIHZhbGlkYXRpb24gaXMgaGFuZGxlZCBpbiAnZ2V0dGVycy1zZXR0ZXJzLmpzJ1xyXG5cdFx0c2hpZnRzOiBbXCJkdXJhdGlvblwiLCBcIm9mZnNldFwiLCBcInRyaWdnZXJIb29rXCJdLCAvLyBsaXN0IG9mIG9wdGlvbnMgdGhhdCB0cmlnZ2VyIGEgYHNoaWZ0YCBldmVudFxyXG5cdH07XHJcblx0LypcclxuXHQgKiBtZXRob2QgdXNlZCB0byBhZGQgYW4gb3B0aW9uIHRvIFNjcm9sbE1hZ2ljIFNjZW5lcy5cclxuXHQgKiBUT0RPOiBET0MgKHByaXZhdGUgZm9yIGRldilcclxuXHQgKi9cclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5hZGRPcHRpb24gPSBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCB2YWxpZGF0aW9uQ2FsbGJhY2ssIHNoaWZ0cykge1xyXG5cdFx0aWYgKCEobmFtZSBpbiBTQ0VORV9PUFRJT05TLmRlZmF1bHRzKSkge1xyXG5cdFx0XHRTQ0VORV9PUFRJT05TLmRlZmF1bHRzW25hbWVdID0gZGVmYXVsdFZhbHVlO1xyXG5cdFx0XHRTQ0VORV9PUFRJT05TLnZhbGlkYXRlW25hbWVdID0gdmFsaWRhdGlvbkNhbGxiYWNrO1xyXG5cdFx0XHRpZiAoc2hpZnRzKSB7XHJcblx0XHRcdFx0U0NFTkVfT1BUSU9OUy5zaGlmdHMucHVzaChuYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0U2Nyb2xsTWFnaWMuX3V0aWwubG9nKDEsIFwiW3N0YXRpY10gU2Nyb2xsTWFnaWMuU2NlbmUgLT4gQ2Fubm90IGFkZCBTY2VuZSBvcHRpb24gJ1wiICsgbmFtZSArIFwiJywgYmVjYXVzZSBpdCBhbHJlYWR5IGV4aXN0cy5cIik7XHJcblx0XHR9XHJcblx0fTtcclxuXHQvLyBpbnN0YW5jZSBleHRlbnNpb24gZnVuY3Rpb24gZm9yIHBsdWdpbnNcclxuXHQvLyBUT0RPOiBET0MgKHByaXZhdGUgZm9yIGRldilcclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5zaW9uKSB7XHJcblx0XHR2YXIgb2xkQ2xhc3MgPSB0aGlzO1xyXG5cdFx0U2Nyb2xsTWFnaWMuU2NlbmUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdG9sZENsYXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHRoaXMuJHN1cGVyID0gX3V0aWwuZXh0ZW5kKHt9LCB0aGlzKTsgLy8gY29weSBwYXJlbnQgc3RhdGVcclxuXHRcdFx0cmV0dXJuIGV4dGVuc2lvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcblx0XHR9O1xyXG5cdFx0X3V0aWwuZXh0ZW5kKFNjcm9sbE1hZ2ljLlNjZW5lLCBvbGRDbGFzcyk7IC8vIGNvcHkgcHJvcGVydGllc1xyXG5cdFx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlID0gb2xkQ2xhc3MucHJvdG90eXBlOyAvLyBjb3B5IHByb3RvdHlwZVxyXG5cdFx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2Nyb2xsTWFnaWMuU2NlbmU7IC8vIHJlc3RvcmUgY29uc3RydWN0b3JcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFRPRE86IERPQ1MgKHByaXZhdGUgZm9yIGRldilcclxuXHQgKiBAY2xhc3NcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cclxuXHRTY3JvbGxNYWdpYy5FdmVudCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lc3BhY2UsIHRhcmdldCwgdmFycykge1xyXG5cdFx0dmFycyA9IHZhcnMgfHwge307XHJcblx0XHRmb3IgKHZhciBrZXkgaW4gdmFycykge1xyXG5cdFx0XHR0aGlzW2tleV0gPSB2YXJzW2tleV07XHJcblx0XHR9XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy50YXJnZXQgPSB0aGlzLmN1cnJlbnRUYXJnZXQgPSB0YXJnZXQ7XHJcblx0XHR0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZSB8fCAnJztcclxuXHRcdHRoaXMudGltZVN0YW1wID0gdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0LypcclxuXHQgKiBUT0RPOiBET0NTIChwcml2YXRlIGZvciBkZXYpXHJcblx0ICovXHJcblxyXG5cdHZhciBfdXRpbCA9IFNjcm9sbE1hZ2ljLl91dGlsID0gKGZ1bmN0aW9uICh3aW5kb3cpIHtcclxuXHRcdHZhciBVID0ge30sXHJcblx0XHRcdGk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIGludGVybmFsIGhlbHBlcnNcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0Ly8gcGFyc2UgZmxvYXQgYW5kIGZhbGwgYmFjayB0byAwLlxyXG5cdFx0dmFyIGZsb2F0dmFsID0gZnVuY3Rpb24gKG51bWJlcikge1xyXG5cdFx0XHRyZXR1cm4gcGFyc2VGbG9hdChudW1iZXIpIHx8IDA7XHJcblx0XHR9O1xyXG5cdFx0Ly8gZ2V0IGN1cnJlbnQgc3R5bGUgSUUgc2FmZSAob3RoZXJ3aXNlIElFIHdvdWxkIHJldHVybiBjYWxjdWxhdGVkIHZhbHVlcyBmb3IgJ2F1dG8nKVxyXG5cdFx0dmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZnVuY3Rpb24gKGVsZW0pIHtcclxuXHRcdFx0cmV0dXJuIGVsZW0uY3VycmVudFN0eWxlID8gZWxlbS5jdXJyZW50U3R5bGUgOiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gZ2V0IGVsZW1lbnQgZGltZW5zaW9uICh3aWR0aCBvciBoZWlnaHQpXHJcblx0XHR2YXIgX2RpbWVuc2lvbiA9IGZ1bmN0aW9uICh3aGljaCwgZWxlbSwgb3V0ZXIsIGluY2x1ZGVNYXJnaW4pIHtcclxuXHRcdFx0ZWxlbSA9IChlbGVtID09PSBkb2N1bWVudCkgPyB3aW5kb3cgOiBlbGVtO1xyXG5cdFx0XHRpZiAoZWxlbSA9PT0gd2luZG93KSB7XHJcblx0XHRcdFx0aW5jbHVkZU1hcmdpbiA9IGZhbHNlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKCFfdHlwZS5Eb21FbGVtZW50KGVsZW0pKSB7XHJcblx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdH1cclxuXHRcdFx0d2hpY2ggPSB3aGljaC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdoaWNoLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHR2YXIgZGltZW5zaW9uID0gKG91dGVyID8gZWxlbVsnb2Zmc2V0JyArIHdoaWNoXSB8fCBlbGVtWydvdXRlcicgKyB3aGljaF0gOiBlbGVtWydjbGllbnQnICsgd2hpY2hdIHx8IGVsZW1bJ2lubmVyJyArIHdoaWNoXSkgfHwgMDtcclxuXHRcdFx0aWYgKG91dGVyICYmIGluY2x1ZGVNYXJnaW4pIHtcclxuXHRcdFx0XHR2YXIgc3R5bGUgPSBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcclxuXHRcdFx0XHRkaW1lbnNpb24gKz0gd2hpY2ggPT09ICdIZWlnaHQnID8gZmxvYXR2YWwoc3R5bGUubWFyZ2luVG9wKSArIGZsb2F0dmFsKHN0eWxlLm1hcmdpbkJvdHRvbSkgOiBmbG9hdHZhbChzdHlsZS5tYXJnaW5MZWZ0KSArIGZsb2F0dmFsKHN0eWxlLm1hcmdpblJpZ2h0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZGltZW5zaW9uO1xyXG5cdFx0fTtcclxuXHRcdC8vIGNvbnZlcnRzICdtYXJnaW4tdG9wJyBpbnRvICdtYXJnaW5Ub3AnXHJcblx0XHR2YXIgX2NhbWVsQ2FzZSA9IGZ1bmN0aW9uIChzdHIpIHtcclxuXHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC9eW15hLXpdKyhbYS16XSkvZywgJyQxJykucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKGcpIHtcclxuXHRcdFx0XHRyZXR1cm4gZ1sxXS50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIGV4dGVybmFsIGhlbHBlcnNcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0Ly8gZXh0ZW5kIG9iaiDigJMgc2FtZSBhcyBqUXVlcnkuZXh0ZW5kKHt9LCBvYmpBLCBvYmpCKVxyXG5cdFx0VS5leHRlbmQgPSBmdW5jdGlvbiAob2JqKSB7XHJcblx0XHRcdG9iaiA9IG9iaiB8fCB7fTtcclxuXHRcdFx0Zm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmICghYXJndW1lbnRzW2ldKSB7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xyXG5cdFx0XHRcdFx0aWYgKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdFx0XHRcdG9ialtrZXldID0gYXJndW1lbnRzW2ldW2tleV07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBvYmo7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIGNoZWNrIGlmIGEgY3NzIGRpc3BsYXkgdHlwZSByZXN1bHRzIGluIG1hcmdpbi1jb2xsYXBzZSBvciBub3RcclxuXHRcdFUuaXNNYXJnaW5Db2xsYXBzZVR5cGUgPSBmdW5jdGlvbiAoc3RyKSB7XHJcblx0XHRcdHJldHVybiBbXCJibG9ja1wiLCBcImZsZXhcIiwgXCJsaXN0LWl0ZW1cIiwgXCJ0YWJsZVwiLCBcIi13ZWJraXQtYm94XCJdLmluZGV4T2Yoc3RyKSA+IC0xO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBpbXBsZW1lbnRhdGlvbiBvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuXHRcdC8vIGJhc2VkIG9uIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8xNTc5NjcxXHJcblx0XHR2YXJcclxuXHRcdFx0bGFzdFRpbWUgPSAwLFxyXG5cdFx0XHR2ZW5kb3JzID0gWydtcycsICdtb3onLCAnd2Via2l0JywgJ28nXTtcclxuXHRcdHZhciBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuXHRcdHZhciBfY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XHJcblx0XHQvLyB0cnkgdmVuZG9yIHByZWZpeGVzIGlmIHRoZSBhYm92ZSBkb2Vzbid0IHdvcmtcclxuXHRcdGZvciAoaSA9IDA7ICFfcmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmIGkgPCB2ZW5kb3JzLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1tpXSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuXHRcdFx0X2NhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fCB3aW5kb3dbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBmYWxsYmFja3NcclxuXHRcdGlmICghX3JlcXVlc3RBbmltYXRpb25GcmFtZSkge1xyXG5cdFx0XHRfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG5cdFx0XHRcdFx0dGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKSxcclxuXHRcdFx0XHRcdGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xyXG5cdFx0XHRcdFx0fSwgdGltZVRvQ2FsbCk7XHJcblx0XHRcdFx0bGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XHJcblx0XHRcdFx0cmV0dXJuIGlkO1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0aWYgKCFfY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcclxuXHRcdFx0X2NhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XHJcblx0XHRcdFx0d2luZG93LmNsZWFyVGltZW91dChpZCk7XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRVLnJBRiA9IF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpO1xyXG5cdFx0VS5jQUYgPSBfY2FuY2VsQW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpO1xyXG5cclxuXHRcdHZhclxyXG5cdFx0XHRsb2dsZXZlbHMgPSBbXCJlcnJvclwiLCBcIndhcm5cIiwgXCJsb2dcIl0sXHJcblx0XHRcdGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZSB8fCB7fTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyA9IGNvbnNvbGUubG9nIHx8IGZ1bmN0aW9uICgpIHt9OyAvLyBubyBjb25zb2xlIGxvZywgd2VsbCAtIGRvIG5vdGhpbmcgdGhlbi4uLlxyXG5cdFx0Ly8gbWFrZSBzdXJlIG1ldGhvZHMgZm9yIGFsbCBsZXZlbHMgZXhpc3QuXHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgbG9nbGV2ZWxzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBtZXRob2QgPSBsb2dsZXZlbHNbaV07XHJcblx0XHRcdGlmICghY29uc29sZVttZXRob2RdKSB7XHJcblx0XHRcdFx0Y29uc29sZVttZXRob2RdID0gY29uc29sZS5sb2c7IC8vIHByZWZlciAubG9nIG92ZXIgbm90aGluZ1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRVLmxvZyA9IGZ1bmN0aW9uIChsb2dsZXZlbCkge1xyXG5cdFx0XHRpZiAobG9nbGV2ZWwgPiBsb2dsZXZlbHMubGVuZ3RoIHx8IGxvZ2xldmVsIDw9IDApIGxvZ2xldmVsID0gbG9nbGV2ZWxzLmxlbmd0aDtcclxuXHRcdFx0dmFyIG5vdyA9IG5ldyBEYXRlKCksXHJcblx0XHRcdFx0dGltZSA9IChcIjBcIiArIG5vdy5nZXRIb3VycygpKS5zbGljZSgtMikgKyBcIjpcIiArIChcIjBcIiArIG5vdy5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKSArIFwiOlwiICsgKFwiMFwiICsgbm93LmdldFNlY29uZHMoKSkuc2xpY2UoLTIpICsgXCI6XCIgKyAoXCIwMFwiICsgbm93LmdldE1pbGxpc2Vjb25kcygpKS5zbGljZSgtMyksXHJcblx0XHRcdFx0bWV0aG9kID0gbG9nbGV2ZWxzW2xvZ2xldmVsIC0gMV0sXHJcblx0XHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxyXG5cdFx0XHRcdGZ1bmMgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKGNvbnNvbGVbbWV0aG9kXSwgY29uc29sZSk7XHJcblx0XHRcdGFyZ3MudW5zaGlmdCh0aW1lKTtcclxuXHRcdFx0ZnVuYy5hcHBseShjb25zb2xlLCBhcmdzKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAqIHR5cGUgdGVzdGluZ1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHJcblx0XHR2YXIgX3R5cGUgPSBVLnR5cGUgPSBmdW5jdGlvbiAodikge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpLnJlcGxhY2UoL15cXFtvYmplY3QgKC4rKVxcXSQvLCBcIiQxXCIpLnRvTG93ZXJDYXNlKCk7XHJcblx0XHR9O1xyXG5cdFx0X3R5cGUuU3RyaW5nID0gZnVuY3Rpb24gKHYpIHtcclxuXHRcdFx0cmV0dXJuIF90eXBlKHYpID09PSAnc3RyaW5nJztcclxuXHRcdH07XHJcblx0XHRfdHlwZS5GdW5jdGlvbiA9IGZ1bmN0aW9uICh2KSB7XHJcblx0XHRcdHJldHVybiBfdHlwZSh2KSA9PT0gJ2Z1bmN0aW9uJztcclxuXHRcdH07XHJcblx0XHRfdHlwZS5BcnJheSA9IGZ1bmN0aW9uICh2KSB7XHJcblx0XHRcdHJldHVybiBBcnJheS5pc0FycmF5KHYpO1xyXG5cdFx0fTtcclxuXHRcdF90eXBlLk51bWJlciA9IGZ1bmN0aW9uICh2KSB7XHJcblx0XHRcdHJldHVybiAhX3R5cGUuQXJyYXkodikgJiYgKHYgLSBwYXJzZUZsb2F0KHYpICsgMSkgPj0gMDtcclxuXHRcdH07XHJcblx0XHRfdHlwZS5Eb21FbGVtZW50ID0gZnVuY3Rpb24gKG8pIHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHR0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIEhUTUxFbGVtZW50ID09PSBcImZ1bmN0aW9uXCIgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbyBpbnN0YW5jZW9mIFNWR0VsZW1lbnQgOiAvL0RPTTJcclxuXHRcdFx0XHRvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gXCJzdHJpbmdcIlxyXG5cdFx0XHQpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICogRE9NIEVsZW1lbnQgaW5mb1xyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKi9cclxuXHRcdC8vIGFsd2F5cyByZXR1cm5zIGEgbGlzdCBvZiBtYXRjaGluZyBET00gZWxlbWVudHMsIGZyb20gYSBzZWxlY3RvciwgYSBET00gZWxlbWVudCBvciBhbiBsaXN0IG9mIGVsZW1lbnRzIG9yIGV2ZW4gYW4gYXJyYXkgb2Ygc2VsZWN0b3JzXHJcblx0XHR2YXIgX2dldCA9IFUuZ2V0ID0ge307XHJcblx0XHRfZ2V0LmVsZW1lbnRzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblx0XHRcdHZhciBhcnIgPSBbXTtcclxuXHRcdFx0aWYgKF90eXBlLlN0cmluZyhzZWxlY3RvcikpIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0c2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHRcdFx0XHR9IGNhdGNoIChlKSB7IC8vIGludmFsaWQgc2VsZWN0b3JcclxuXHRcdFx0XHRcdHJldHVybiBhcnI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChfdHlwZShzZWxlY3RvcikgPT09ICdub2RlbGlzdCcgfHwgX3R5cGUuQXJyYXkoc2VsZWN0b3IpIHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgcmVmID0gYXJyLmxlbmd0aCA9IHNlbGVjdG9yLmxlbmd0aDsgaSA8IHJlZjsgaSsrKSB7IC8vIGxpc3Qgb2YgZWxlbWVudHNcclxuXHRcdFx0XHRcdHZhciBlbGVtID0gc2VsZWN0b3JbaV07XHJcblx0XHRcdFx0XHRhcnJbaV0gPSBfdHlwZS5Eb21FbGVtZW50KGVsZW0pID8gZWxlbSA6IF9nZXQuZWxlbWVudHMoZWxlbSk7IC8vIGlmIG5vdCBhbiBlbGVtZW50LCB0cnkgdG8gcmVzb2x2ZSByZWN1cnNpdmVseVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChfdHlwZS5Eb21FbGVtZW50KHNlbGVjdG9yKSB8fCBzZWxlY3RvciA9PT0gZG9jdW1lbnQgfHwgc2VsZWN0b3IgPT09IHdpbmRvdykge1xyXG5cdFx0XHRcdGFyciA9IFtzZWxlY3Rvcl07IC8vIG9ubHkgdGhlIGVsZW1lbnRcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gYXJyO1xyXG5cdFx0fTtcclxuXHRcdC8vIGdldCBzY3JvbGwgdG9wIHZhbHVlXHJcblx0XHRfZ2V0LnNjcm9sbFRvcCA9IGZ1bmN0aW9uIChlbGVtKSB7XHJcblx0XHRcdHJldHVybiAoZWxlbSAmJiB0eXBlb2YgZWxlbS5zY3JvbGxUb3AgPT09ICdudW1iZXInKSA/IGVsZW0uc2Nyb2xsVG9wIDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IDA7XHJcblx0XHR9O1xyXG5cdFx0Ly8gZ2V0IHNjcm9sbCBsZWZ0IHZhbHVlXHJcblx0XHRfZ2V0LnNjcm9sbExlZnQgPSBmdW5jdGlvbiAoZWxlbSkge1xyXG5cdFx0XHRyZXR1cm4gKGVsZW0gJiYgdHlwZW9mIGVsZW0uc2Nyb2xsTGVmdCA9PT0gJ251bWJlcicpID8gZWxlbS5zY3JvbGxMZWZ0IDogd2luZG93LnBhZ2VYT2Zmc2V0IHx8IDA7XHJcblx0XHR9O1xyXG5cdFx0Ly8gZ2V0IGVsZW1lbnQgaGVpZ2h0XHJcblx0XHRfZ2V0LndpZHRoID0gZnVuY3Rpb24gKGVsZW0sIG91dGVyLCBpbmNsdWRlTWFyZ2luKSB7XHJcblx0XHRcdHJldHVybiBfZGltZW5zaW9uKCd3aWR0aCcsIGVsZW0sIG91dGVyLCBpbmNsdWRlTWFyZ2luKTtcclxuXHRcdH07XHJcblx0XHQvLyBnZXQgZWxlbWVudCB3aWR0aFxyXG5cdFx0X2dldC5oZWlnaHQgPSBmdW5jdGlvbiAoZWxlbSwgb3V0ZXIsIGluY2x1ZGVNYXJnaW4pIHtcclxuXHRcdFx0cmV0dXJuIF9kaW1lbnNpb24oJ2hlaWdodCcsIGVsZW0sIG91dGVyLCBpbmNsdWRlTWFyZ2luKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gZ2V0IGVsZW1lbnQgcG9zaXRpb24gKG9wdGlvbmFsbHkgcmVsYXRpdmUgdG8gdmlld3BvcnQpXHJcblx0XHRfZ2V0Lm9mZnNldCA9IGZ1bmN0aW9uIChlbGVtLCByZWxhdGl2ZVRvVmlld3BvcnQpIHtcclxuXHRcdFx0dmFyIG9mZnNldCA9IHtcclxuXHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0bGVmdDogMFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRpZiAoZWxlbSAmJiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkgeyAvLyBjaGVjayBpZiBhdmFpbGFibGVcclxuXHRcdFx0XHR2YXIgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdFx0b2Zmc2V0LnRvcCA9IHJlY3QudG9wO1xyXG5cdFx0XHRcdG9mZnNldC5sZWZ0ID0gcmVjdC5sZWZ0O1xyXG5cdFx0XHRcdGlmICghcmVsYXRpdmVUb1ZpZXdwb3J0KSB7IC8vIGNsaWVudFJlY3QgaXMgYnkgZGVmYXVsdCByZWxhdGl2ZSB0byB2aWV3cG9ydC4uLlxyXG5cdFx0XHRcdFx0b2Zmc2V0LnRvcCArPSBfZ2V0LnNjcm9sbFRvcCgpO1xyXG5cdFx0XHRcdFx0b2Zmc2V0LmxlZnQgKz0gX2dldC5zY3JvbGxMZWZ0KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBvZmZzZXQ7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQgKiBET00gRWxlbWVudCBtYW5pcHVsYXRpb25cclxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0ICovXHJcblxyXG5cdFx0VS5hZGRDbGFzcyA9IGZ1bmN0aW9uIChlbGVtLCBjbGFzc25hbWUpIHtcclxuXHRcdFx0aWYgKGNsYXNzbmFtZSkge1xyXG5cdFx0XHRcdGlmIChlbGVtLmNsYXNzTGlzdClcclxuXHRcdFx0XHRcdGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc25hbWUpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdGVsZW0uY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzbmFtZTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdFUucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoZWxlbSwgY2xhc3NuYW1lKSB7XHJcblx0XHRcdGlmIChjbGFzc25hbWUpIHtcclxuXHRcdFx0XHRpZiAoZWxlbS5jbGFzc0xpc3QpXHJcblx0XHRcdFx0XHRlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NuYW1lKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRlbGVtLmNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzbmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdC8vIGlmIG9wdGlvbnMgaXMgc3RyaW5nIC0+IHJldHVybnMgY3NzIHZhbHVlXHJcblx0XHQvLyBpZiBvcHRpb25zIGlzIGFycmF5IC0+IHJldHVybnMgb2JqZWN0IHdpdGggY3NzIHZhbHVlIHBhaXJzXHJcblx0XHQvLyBpZiBvcHRpb25zIGlzIG9iamVjdCAtPiBzZXQgbmV3IGNzcyB2YWx1ZXNcclxuXHRcdFUuY3NzID0gZnVuY3Rpb24gKGVsZW0sIG9wdGlvbnMpIHtcclxuXHRcdFx0aWYgKF90eXBlLlN0cmluZyhvcHRpb25zKSkge1xyXG5cdFx0XHRcdHJldHVybiBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKVtfY2FtZWxDYXNlKG9wdGlvbnMpXTtcclxuXHRcdFx0fSBlbHNlIGlmIChfdHlwZS5BcnJheShvcHRpb25zKSkge1xyXG5cdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0b2JqID0ge30sXHJcblx0XHRcdFx0XHRzdHlsZSA9IF9nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xyXG5cdFx0XHRcdG9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3B0aW9uLCBrZXkpIHtcclxuXHRcdFx0XHRcdG9ialtvcHRpb25dID0gc3R5bGVbX2NhbWVsQ2FzZShvcHRpb24pXTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gb2JqO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGZvciAodmFyIG9wdGlvbiBpbiBvcHRpb25zKSB7XHJcblx0XHRcdFx0XHR2YXIgdmFsID0gb3B0aW9uc1tvcHRpb25dO1xyXG5cdFx0XHRcdFx0aWYgKHZhbCA9PSBwYXJzZUZsb2F0KHZhbCkpIHsgLy8gYXNzdW1lIHBpeGVsIGZvciBzZWVtaW5nbHkgbnVtZXJpY2FsIHZhbHVlc1xyXG5cdFx0XHRcdFx0XHR2YWwgKz0gJ3B4JztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsZW0uc3R5bGVbX2NhbWVsQ2FzZShvcHRpb24pXSA9IHZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIFU7XHJcblx0fSh3aW5kb3cgfHwge30pKTtcclxuXHJcblxyXG5cdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5hZGRJbmRpY2F0b3JzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0U2Nyb2xsTWFnaWMuX3V0aWwubG9nKDEsICcoU2Nyb2xsTWFnaWMuU2NlbmUpIC0+IEVSUk9SIGNhbGxpbmcgYWRkSW5kaWNhdG9ycygpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdkZWJ1Zy5hZGRJbmRpY2F0b3JzXFwnLiBQbGVhc2UgbWFrZSBzdXJlIHRvIGluY2x1ZGUgcGx1Z2lucy9kZWJ1Zy5hZGRJbmRpY2F0b3JzLmpzJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlLnJlbW92ZUluZGljYXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyByZW1vdmVJbmRpY2F0b3JzKCkgZHVlIHRvIG1pc3NpbmcgUGx1Z2luIFxcJ2RlYnVnLmFkZEluZGljYXRvcnNcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2RlYnVnLmFkZEluZGljYXRvcnMuanMnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUuc2V0VHdlZW4gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyBzZXRUd2VlbigpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdhbmltYXRpb24uZ3NhcFxcJy4gUGxlYXNlIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHBsdWdpbnMvYW5pbWF0aW9uLmdzYXAuanMnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUucmVtb3ZlVHdlZW4gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyByZW1vdmVUd2VlbigpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdhbmltYXRpb24uZ3NhcFxcJy4gUGxlYXNlIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHBsdWdpbnMvYW5pbWF0aW9uLmdzYXAuanMnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUuc2V0VmVsb2NpdHkgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyBzZXRWZWxvY2l0eSgpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdhbmltYXRpb24udmVsb2NpdHlcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2FuaW1hdGlvbi52ZWxvY2l0eS5qcycpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5yZW1vdmVWZWxvY2l0eSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFNjcm9sbE1hZ2ljLl91dGlsLmxvZygxLCAnKFNjcm9sbE1hZ2ljLlNjZW5lKSAtPiBFUlJPUiBjYWxsaW5nIHJlbW92ZVZlbG9jaXR5KCkgZHVlIHRvIG1pc3NpbmcgUGx1Z2luIFxcJ2FuaW1hdGlvbi52ZWxvY2l0eVxcJy4gUGxlYXNlIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHBsdWdpbnMvYW5pbWF0aW9uLnZlbG9jaXR5LmpzJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHJldHVybiBTY3JvbGxNYWdpYztcclxufSkpOyIsImltcG9ydCAnLi9zYXNzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgaW5pdFBvcHVwIH0gZnJvbSAnLi9qcy92aWRlb3MnO1xuaW1wb3J0IHsgaW5pdFNjcm9sbCB9IGZyb20gJy4vanMvYW5pbWF0aW9ucyc7XG5cbiQgPSBqUXVlcnk7XG5cbndpbmRvdy4kID0gJDtcbndpbmRvdy5qUXVlcnkgPSBqUXVlcnk7XG5cbmluaXRQb3B1cCgpO1xuXG5pbml0U2Nyb2xsKCk7IiwiJCA9IGpRdWVyeTtcblxuaW1wb3J0IFNjcm9sbE1hZ2ljIGZyb20gJ3Njcm9sbG1hZ2ljJztcbi8vaW1wb3J0IFwiaW1wb3J0cy1sb2FkZXI/ZGVmaW5lPT5mYWxzZSFzY3JvbGxtYWdpYy9zY3JvbGxtYWdpYy91bmNvbXByZXNzZWQvcGx1Z2lucy9kZWJ1Zy5hZGRJbmRpY2F0b3JzLmpzXCI7XG5cblxuZnVuY3Rpb24gaW5pdFNjcm9sbCgpIHtcblxuICAgIHZhciBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoe30pO1xuXG5cbiAgICAkKFwiLnRpdGxlLWFuaW1hdGVcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuXG4gICAgICAgIHZhciBzY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckVsZW1lbnQ6IGAjJHtpZH1gLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgICAgIHRyaWdnZXJIb29rOiAwLjY2LFxuICAgICAgICAgICAgICAgIHJldmVyc2U6IGZhbHNlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgIC8vIC5hZGRJbmRpY2F0b3JzKClcbiAgICAgICAgLnNldENsYXNzVG9nZ2xlKGAjJHtpZH1gLCAnYW5pbWF0ZWQnKVxuICAgICAgICAgICAgLmFkZFRvKGNvbnRyb2xsZXIpO1xuICAgIH0pXG5cbiAgICAvLyBidWlsZCBzY2VuZVxuXG5cbn1cblxuZXhwb3J0IHtcbiAgICBpbml0U2Nyb2xsXG59OyIsImltcG9ydCB7IG1hZ25pZmljUG9wdXAgfSBmcm9tICdtYWduaWZpYy1wb3B1cCc7XG5cbmZ1bmN0aW9uIGluaXRQb3B1cCgpIHtcbiAgICAkKCcubGlnaHRib3gtdG9nZ2xlJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgIHR5cGU6ICdpZnJhbWUnXG4gICAgICAgIC8vIG90aGVyIG9wdGlvbnNcbiAgICAgIH0pXG4gICAgICAuZXh0ZW5kKHRydWUsICQubWFnbmlmaWNQb3B1cC5kZWZhdWx0cywgeyAgXG4gICAgICAgIGlmcmFtZToge1xuICAgICAgICAgICAgcGF0dGVybnM6IHtcbiAgICAgICAgICAgICAgIHlvdXR1YmU6IHtcbiAgICAgICAgICAgICAgICAgIGluZGV4OiAneW91dHViZS5jb20vJywgXG4gICAgICAgICAgICAgICAgICBpZDogJ3Y9JywgXG4gICAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8laWQlP2F1dG9wbGF5PTEnIFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2aW1lbzoge1xuICAgICAgICAgICAgICAgIGluZGV4OiAndmltZW8uY29tLycsXG4gICAgICAgICAgICAgICAgaWQ6ICcvJyxcbiAgICAgICAgICAgICAgICBzcmM6ICcvL3BsYXllci52aW1lby5jb20vdmlkZW8vJWlkJT9hdXRvcGxheT0xJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGluaXRQb3B1cCB9OyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==