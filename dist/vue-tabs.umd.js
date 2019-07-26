(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require('vue'));
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports['vue-tabs'] = factory(require('vue'));
  else root['vue-tabs'] = factory(root.Vue);
}((typeof self !== 'undefined' ? self : this), __WEBPACK_EXTERNAL_MODULE__8bbf__ =>
/** *** */ (function (modules) { // webpackBootstrap
    /** *** */ 	// The module cache
    /** *** */ 	const installedModules = {};
    /** *** */
    /** *** */ 	// The require function
    /** *** */ 	function __webpack_require__(moduleId) {
      /** *** */
      /** *** */ 		// Check if module is in cache
      /** *** */ 		if (installedModules[moduleId]) {
        /** *** */ 			return installedModules[moduleId].exports;
        /** *** */ 		}
      /** *** */ 		// Create a new module (and put it into the cache)
      /** *** */ 		const module = installedModules[moduleId] = {
        /** *** */ 			i: moduleId,
        /** *** */ 			l: false,
        /** *** */ 			exports: {},
        /** *** */ 		};
      /** *** */
      /** *** */ 		// Execute the module function
      /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /** *** */
      /** *** */ 		// Flag the module as loaded
      /** *** */ 		module.l = true;
      /** *** */
      /** *** */ 		// Return the exports of the module
      /** *** */ 		return module.exports;
      /** *** */ 	}
    /** *** */
    /** *** */
    /** *** */ 	// expose the modules object (__webpack_modules__)
    /** *** */ 	__webpack_require__.m = modules;
    /** *** */
    /** *** */ 	// expose the module cache
    /** *** */ 	__webpack_require__.c = installedModules;
    /** *** */
    /** *** */ 	// define getter function for harmony exports
    /** *** */ 	__webpack_require__.d = function (exports, name, getter) {
      /** *** */ 		if (!__webpack_require__.o(exports, name)) {
        /** *** */ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /** *** */ 		}
      /** *** */ 	};
    /** *** */
    /** *** */ 	// define __esModule on exports
    /** *** */ 	__webpack_require__.r = function (exports) {
      /** *** */ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /** *** */ 		}
      /** *** */ 		Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */ 	};
    /** *** */
    /** *** */ 	// create a fake namespace object
    /** *** */ 	// mode & 1: value is a module id, require it
    /** *** */ 	// mode & 2: merge all properties of value into the ns
    /** *** */ 	// mode & 4: return value when already ns object
    /** *** */ 	// mode & 8|1: behave like require
    /** *** */ 	__webpack_require__.t = function (value, mode) {
      /** *** */ 		if (mode & 1) value = __webpack_require__(value);
      /** *** */ 		if (mode & 8) return value;
      /** *** */ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
      /** *** */ 		const ns = Object.create(null);
      /** *** */ 		__webpack_require__.r(ns);
      /** *** */ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
      /** *** */ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, (key => value[key]).bind(null, key));
      /** *** */ 		return ns;
      /** *** */ 	};
    /** *** */
    /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
    /** *** */ 	__webpack_require__.n = function (module) {
      /** *** */ 		const getter = module && module.__esModule
      /** *** */ 			? function getDefault() { return module.default; }
      /** *** */ 			: function getModuleExports() { return module; };
      /** *** */ 		__webpack_require__.d(getter, 'a', getter);
      /** *** */ 		return getter;
      /** *** */ 	};
    /** *** */
    /** *** */ 	// Object.prototype.hasOwnProperty.call
    /** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /** *** */
    /** *** */ 	// __webpack_public_path__
    /** *** */ 	__webpack_require__.p = '';
    /** *** */
    /** *** */
    /** *** */ 	// Load entry module and return exports
    /** *** */ 	return __webpack_require__(__webpack_require__.s = 'fae3');
    /** *** */ }({

    /** */ '0d58':
    /** */ (function (module, exports, __webpack_require__) {
      // 19.1.2.14 / 15.2.3.14 Object.keys(O)
      const $keys = __webpack_require__('ce10');
      const enumBugKeys = __webpack_require__('e11e');

      module.exports = Object.keys || function keys(O) {
        return $keys(O, enumBugKeys);
      };
      /** */ }),

    /** */ '11e9':
    /** */ (function (module, exports, __webpack_require__) {
      const pIE = __webpack_require__('52a7');
      const createDesc = __webpack_require__('4630');
      const toIObject = __webpack_require__('6821');
      const toPrimitive = __webpack_require__('6a99');
      const has = __webpack_require__('69a8');
      const IE8_DOM_DEFINE = __webpack_require__('c69a');
      const gOPD = Object.getOwnPropertyDescriptor;

      exports.f = __webpack_require__('9e1e') ? gOPD : function getOwnPropertyDescriptor(O, P) {
        O = toIObject(O);
        P = toPrimitive(P, true);
        if (IE8_DOM_DEFINE) {
          try {
            return gOPD(O, P);
          } catch (e) { /* empty */ }
        }
        if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
      };
      /** */ }),

    /** */ 1495:
    /** */ (function (module, exports, __webpack_require__) {
      const dP = __webpack_require__('86cc');
      const anObject = __webpack_require__('cb7c');
      const getKeys = __webpack_require__('0d58');

      module.exports = __webpack_require__('9e1e') ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        const keys = getKeys(Properties);
        const { length } = keys;
        let i = 0;
        let P;
        while (length > i) dP.f(O, P = keys[i++], Properties[P]);
        return O;
      };
      /** */ }),

    /** */ '230e':
    /** */ (function (module, exports, __webpack_require__) {
      const isObject = __webpack_require__('d3f4');
      const { document } = __webpack_require__('7726');
      // typeof document.createElement is 'object' in old IE
      const is = isObject(document) && isObject(document.createElement);
      module.exports = function (it) {
        return is ? document.createElement(it) : {};
      };
      /** */ }),

    /** */ '2aba':
    /** */ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__('7726');
      const hide = __webpack_require__('32e9');
      const has = __webpack_require__('69a8');
      const SRC = __webpack_require__('ca5a')('src');
      const $toString = __webpack_require__('fa5b');
      const TO_STRING = 'toString';
      const TPL = (`${$toString}`).split(TO_STRING);

      __webpack_require__('8378').inspectSource = function (it) {
        return $toString.call(it);
      };

      (module.exports = function (O, key, val, safe) {
        const isFunction = typeof val === 'function';
        if (isFunction) has(val, 'name') || hide(val, 'name', key);
        if (O[key] === val) return;
        if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? `${O[key]}` : TPL.join(String(key)));
        if (O === global) {
          O[key] = val;
        } else if (!safe) {
          delete O[key];
          hide(O, key, val);
        } else if (O[key]) {
          O[key] = val;
        } else {
          hide(O, key, val);
        }
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
      })(Function.prototype, TO_STRING, function toString() {
        return typeof this === 'function' && this[SRC] || $toString.call(this);
      });
      /** */ }),

    /** */ '2aeb':
    /** */ (function (module, exports, __webpack_require__) {
      // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
      const anObject = __webpack_require__('cb7c');
      const dPs = __webpack_require__('1495');
      const enumBugKeys = __webpack_require__('e11e');
      const IE_PROTO = __webpack_require__('613b')('IE_PROTO');
      const Empty = function () { /* empty */ };
      const PROTOTYPE = 'prototype';

      // Create object with fake `null` prototype: use iframe Object with cleared prototype
      var createDict = function () {
        // Thrash, waste and sodomy: IE GC bug
        const iframe = __webpack_require__('230e')('iframe');
        let i = enumBugKeys.length;
        const lt = '<';
        const gt = '>';
        let iframeDocument;
        iframe.style.display = 'none';
        __webpack_require__('fab2').appendChild(iframe);
        iframe.src = 'javascript:'; // eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(`${lt}script${gt}document.F=Object${lt}/script${gt}`);
        iframeDocument.close();
        createDict = iframeDocument.F;
        while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
        return createDict();
      };

      module.exports = Object.create || function create(O, Properties) {
        let result;
        if (O !== null) {
          Empty[PROTOTYPE] = anObject(O);
          result = new Empty();
          Empty[PROTOTYPE] = null;
          // add "__proto__" for Object.getPrototypeOf polyfill
          result[IE_PROTO] = O;
        } else result = createDict();
        return Properties === undefined ? result : dPs(result, Properties);
      };
      /** */ }),

    /** */ '2d00':
    /** */ (function (module, exports) {
      module.exports = false;
      /** */ }),

    /** */ '2d95':
    /** */ (function (module, exports) {
      const { toString } = {};

      module.exports = function (it) {
        return toString.call(it).slice(8, -1);
      };
      /** */ }),

    /** */ '32e9':
    /** */ (function (module, exports, __webpack_require__) {
      const dP = __webpack_require__('86cc');
      const createDesc = __webpack_require__('4630');
      module.exports = __webpack_require__('9e1e') ? function (object, key, value) {
        return dP.f(object, key, createDesc(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };
      /** */ }),

    /** */ 4588:
    /** */ (function (module, exports) {
      // 7.1.4 ToInteger
      const { ceil } = Math;
      const { floor } = Math;
      module.exports = function (it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
      };
      /** */ }),

    /** */ 4630:
    /** */ (function (module, exports) {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value,
        };
      };
      /** */ }),

    /** */ '52a7':
    /** */ (function (module, exports) {
      exports.f = {}.propertyIsEnumerable;
      /** */ }),

    /** */ 5537:
    /** */ (function (module, exports, __webpack_require__) {
      const core = __webpack_require__('8378');
      const global = __webpack_require__('7726');
      const SHARED = '__core-js_shared__';
      const store = global[SHARED] || (global[SHARED] = {});

      (module.exports = function (key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {});
      })('versions', []).push({
        version: core.version,
        mode: __webpack_require__('2d00') ? 'pure' : 'global',
        copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
      });
      /** */ }),

    /** */ '5c0b':
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      /* harmony import */ const _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('5e27');
      /* harmony import */ const _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
      /* unused harmony reexport * */
      /* unused harmony default export */ const _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a);
      /** */ }),

    /** */ '5ca1':
    /** */ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__('7726');
      const core = __webpack_require__('8378');
      const hide = __webpack_require__('32e9');
      const redefine = __webpack_require__('2aba');
      const ctx = __webpack_require__('9b43');
      const PROTOTYPE = 'prototype';

      var $export = function (type, name, source) {
        const IS_FORCED = type & $export.F;
        const IS_GLOBAL = type & $export.G;
        const IS_STATIC = type & $export.S;
        const IS_PROTO = type & $export.P;
        const IS_BIND = type & $export.B;
        const target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
        const exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
        const expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
        let key; let own; let out; let
          exp;
        if (IS_GLOBAL) source = name;
        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && target[key] !== undefined;
          // export native or passed
          out = (own ? target : source)[key];
          // bind timers to global for call from export context
          exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out === 'function' ? ctx(Function.call, out) : out;
          // extend global
          if (target) redefine(target, key, out, type & $export.U);
          // export
          if (exports[key] != out) hide(exports, key, exp);
          if (IS_PROTO && expProto[key] != out) expProto[key] = out;
        }
      };
      global.core = core;
      // type bitmap
      $export.F = 1; // forced
      $export.G = 2; // global
      $export.S = 4; // static
      $export.P = 8; // proto
      $export.B = 16; // bind
      $export.W = 32; // wrap
      $export.U = 64; // safe
      $export.R = 128; // real proto method for `library`
      module.exports = $export;
      /** */ }),

    /** */ '5dbc':
    /** */ (function (module, exports, __webpack_require__) {
      const isObject = __webpack_require__('d3f4');
      const setPrototypeOf = __webpack_require__('8b97').set;
      module.exports = function (that, target, C) {
        const S = target.constructor;
        let P;
        if (S !== C && typeof S === 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
          setPrototypeOf(that, P);
        } return that;
      };
      /** */ }),

    /** */ '5e27':
    /** */ (function (module, exports, __webpack_require__) {

      // extracted by mini-css-extract-plugin

      /** */ }),

    /** */ '613b':
    /** */ (function (module, exports, __webpack_require__) {
      const shared = __webpack_require__('5537')('keys');
      const uid = __webpack_require__('ca5a');
      module.exports = function (key) {
        return shared[key] || (shared[key] = uid(key));
      };
      /** */ }),

    /** */ '626a':
    /** */ (function (module, exports, __webpack_require__) {
      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      const cof = __webpack_require__('2d95');
      // eslint-disable-next-line no-prototype-builtins
      module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
        return cof(it) == 'String' ? it.split('') : Object(it);
      };
      /** */ }),

    /** */ 6821:
    /** */ (function (module, exports, __webpack_require__) {
      // to indexed object, toObject with fallback for non-array-like ES3 strings
      const IObject = __webpack_require__('626a');
      const defined = __webpack_require__('be13');
      module.exports = function (it) {
        return IObject(defined(it));
      };
      /** */ }),

    /** */ '69a8':
    /** */ (function (module, exports) {
      const { hasOwnProperty } = {};
      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key);
      };
      /** */ }),

    /** */ '6a99':
    /** */ (function (module, exports, __webpack_require__) {
      // 7.1.1 ToPrimitive(input [, PreferredType])
      const isObject = __webpack_require__('d3f4');
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      module.exports = function (it, S) {
        if (!isObject(it)) return it;
        let fn; let
          val;
        if (S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val;
        if (typeof (fn = it.valueOf) === 'function' && !isObject(val = fn.call(it))) return val;
        if (!S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
      };
      /** */ }),

    /** */ '6f10':
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      /* harmony import */ const _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('9048');
      /* harmony import */ const _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
      /* unused harmony reexport * */
      /* unused harmony default export */ const _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a);
      /** */ }),

    /** */ 7726:
    /** */ (function (module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      const global = module.exports = typeof window !== 'undefined' && window.Math == Math
        ? window : typeof self !== 'undefined' && self.Math == Math ? self
        // eslint-disable-next-line no-new-func
          : Function('return this')();
      if (typeof __g === 'number') __g = global; // eslint-disable-line no-undef
      /** */ }),

    /** */ '77f1':
    /** */ (function (module, exports, __webpack_require__) {
      const toInteger = __webpack_require__('4588');
      const { max } = Math;
      const { min } = Math;
      module.exports = function (index, length) {
        index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      };
      /** */ }),

    /** */ '79e5':
    /** */ (function (module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
      /** */ }),

    /** */ '7f7f':
    /** */ (function (module, exports, __webpack_require__) {
      const dP = __webpack_require__('86cc').f;
      const FProto = Function.prototype;
      const nameRE = /^\s*function ([^ (]*)/;
      const NAME = 'name';

      // 19.2.4.2 name
      NAME in FProto || __webpack_require__('9e1e') && dP(FProto, NAME, {
        configurable: true,
        get() {
          try {
            return (`${this}`).match(nameRE)[1];
          } catch (e) {
            return '';
          }
        },
      });
      /** */ }),

    /** */ 8378:
    /** */ (function (module, exports) {
      const core = module.exports = { version: '2.6.9' };
      if (typeof __e === 'number') __e = core; // eslint-disable-line no-undef
      /** */ }),

    /** */ '86cc':
    /** */ (function (module, exports, __webpack_require__) {
      const anObject = __webpack_require__('cb7c');
      const IE8_DOM_DEFINE = __webpack_require__('c69a');
      const toPrimitive = __webpack_require__('6a99');
      const dP = Object.defineProperty;

      exports.f = __webpack_require__('9e1e') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) {
          try {
            return dP(O, P, Attributes);
          } catch (e) { /* empty */ }
        }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
      };
      /** */ }),

    /** */ '8b97':
    /** */ (function (module, exports, __webpack_require__) {
      // Works with __proto__ only. Old v8 can't work with null proto objects.
      /* eslint-disable no-proto */
      const isObject = __webpack_require__('d3f4');
      const anObject = __webpack_require__('cb7c');
      const check = function (O, proto) {
        anObject(O);
        if (!isObject(proto) && proto !== null) throw TypeError(`${proto}: can't set as prototype!`);
      };
      module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
          (function (test, buggy, set) {
            try {
              set = __webpack_require__('9b43')(Function.call, __webpack_require__('11e9').f(Object.prototype, '__proto__').set, 2);
              set(test, []);
              buggy = !(test instanceof Array);
            } catch (e) { buggy = true; }
            return function setPrototypeOf(O, proto) {
              check(O, proto);
              if (buggy) O.__proto__ = proto;
              else set(O, proto);
              return O;
            };
          }({}, false)) : undefined),
        check,
      };
      /** */ }),

    /** */ '8bbf':
    /** */ (function (module, exports) {
      module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;
      /** */ }),

    /** */ 9048:
    /** */ (function (module, exports, __webpack_require__) {

      // extracted by mini-css-extract-plugin

      /** */ }),

    /** */ 9093:
    /** */ (function (module, exports, __webpack_require__) {
      // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
      const $keys = __webpack_require__('ce10');
      const hiddenKeys = __webpack_require__('e11e').concat('length', 'prototype');

      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return $keys(O, hiddenKeys);
      };
      /** */ }),

    /** */ '9b43':
    /** */ (function (module, exports, __webpack_require__) {
      // optional / simple context binding
      const aFunction = __webpack_require__('d8e8');
      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 1: return function (a) {
            return fn.call(that, a);
          };
          case 2: return function (a, b) {
            return fn.call(that, a, b);
          };
          case 3: return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
        }
        return function (/* ...args */) {
          return fn.apply(that, arguments);
        };
      };
      /** */ }),

    /** */ '9def':
    /** */ (function (module, exports, __webpack_require__) {
      // 7.1.15 ToLength
      const toInteger = __webpack_require__('4588');
      const { min } = Math;
      module.exports = function (it) {
        return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
      };
      /** */ }),

    /** */ '9e1e':
    /** */ (function (module, exports, __webpack_require__) {
      // Thank's IE8 for his funny defineProperty
      module.exports = !__webpack_require__('79e5')(() => Object.defineProperty({}, 'a', { get() { return 7; } }).a != 7);
      /** */ }),

    /** */ aa77:
    /** */ (function (module, exports, __webpack_require__) {
      const $export = __webpack_require__('5ca1');
      const defined = __webpack_require__('be13');
      const fails = __webpack_require__('79e5');
      const spaces = __webpack_require__('fdef');
      const space = `[${spaces}]`;
      const non = '\u200b\u0085';
      const ltrim = RegExp(`^${space}${space}*`);
      const rtrim = RegExp(`${space + space}*$`);

      const exporter = function (KEY, exec, ALIAS) {
        const exp = {};
        const FORCE = fails(() => !!spaces[KEY]() || non[KEY]() != non);
        const fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
        if (ALIAS) exp[ALIAS] = fn;
        $export($export.P + $export.F * FORCE, 'String', exp);
      };

      // 1 -> String#trimLeft
      // 2 -> String#trimRight
      // 3 -> String#trim
      var trim = exporter.trim = function (string, TYPE) {
        string = String(defined(string));
        if (TYPE & 1) string = string.replace(ltrim, '');
        if (TYPE & 2) string = string.replace(rtrim, '');
        return string;
      };

      module.exports = exporter;
      /** */ }),

    /** */ be13:
    /** */ (function (module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError(`Can't call method on  ${it}`);
        return it;
      };
      /** */ }),

    /** */ c366:
    /** */ (function (module, exports, __webpack_require__) {
      // false -> Array#indexOf
      // true  -> Array#includes
      const toIObject = __webpack_require__('6821');
      const toLength = __webpack_require__('9def');
      const toAbsoluteIndex = __webpack_require__('77f1');
      module.exports = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          const O = toIObject($this);
          const length = toLength(O.length);
          let index = toAbsoluteIndex(fromIndex, length);
          let value;
          // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare
          if (IS_INCLUDES && el != el) {
            while (length > index) {
              value = O[index++];
              // eslint-disable-next-line no-self-compare
              if (value != value) return true;
            // Array#indexOf ignores holes, Array#includes - not
            }
          } else {
            for (;length > index; index++) {
              if (IS_INCLUDES || index in O) {
                if (O[index] === el) return IS_INCLUDES || index || 0;
              }
            }
          } return !IS_INCLUDES && -1;
        };
      };
      /** */ }),

    /** */ c5f6:
    /** */ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__('7726');
      const has = __webpack_require__('69a8');
      const cof = __webpack_require__('2d95');
      const inheritIfRequired = __webpack_require__('5dbc');
      const toPrimitive = __webpack_require__('6a99');
      const fails = __webpack_require__('79e5');
      const gOPN = __webpack_require__('9093').f;
      const gOPD = __webpack_require__('11e9').f;
      const dP = __webpack_require__('86cc').f;
      const $trim = __webpack_require__('aa77').trim;
      const NUMBER = 'Number';
      let $Number = global[NUMBER];
      const Base = $Number;
      const proto = $Number.prototype;
      // Opera ~12 has broken Object#toString
      const BROKEN_COF = cof(__webpack_require__('2aeb')(proto)) == NUMBER;
      const TRIM = 'trim' in String.prototype;

      // 7.1.3 ToNumber(argument)
      const toNumber = function (argument) {
        let it = toPrimitive(argument, false);
        if (typeof it === 'string' && it.length > 2) {
          it = TRIM ? it.trim() : $trim(it, 3);
          const first = it.charCodeAt(0);
          let third; let radix; let
            maxCode;
          if (first === 43 || first === 45) {
            third = it.charCodeAt(2);
            if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
          } else if (first === 48) {
            switch (it.charCodeAt(1)) {
              case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
              case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
              default: return +it;
            }
            for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
              code = digits.charCodeAt(i);
              // parseInt parses a string to a first unavailable symbol
              // but ToNumber should return NaN if a string contains unavailable symbols
              if (code < 48 || code > maxCode) return NaN;
            } return parseInt(digits, radix);
          }
        } return +it;
      };

      if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
        $Number = function Number(value) {
          const it = arguments.length < 1 ? 0 : value;
          const that = this;
          return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(() => { proto.valueOf.call(that); }) : cof(that) != NUMBER)
            ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
        };
        for (var keys = __webpack_require__('9e1e') ? gOPN(Base) : (
          // ES3:
            'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,'
    // ES6 (in case, if modules with ES6 Number statics required before):
    + 'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,'
    + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
          ).split(','), j = 0, key; keys.length > j; j++) {
          if (has(Base, key = keys[j]) && !has($Number, key)) {
            dP($Number, key, gOPD(Base, key));
          }
        }
        $Number.prototype = proto;
        proto.constructor = $Number;
        __webpack_require__('2aba')(global, NUMBER, $Number);
      }
      /** */ }),

    /** */ c69a:
    /** */ (function (module, exports, __webpack_require__) {
      module.exports = !__webpack_require__('9e1e') && !__webpack_require__('79e5')(() => Object.defineProperty(__webpack_require__('230e')('div'), 'a', { get() { return 7; } }).a != 7);
      /** */ }),

    /** */ ca5a:
    /** */ (function (module, exports) {
      let id = 0;
      const px = Math.random();
      module.exports = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
      };
      /** */ }),

    /** */ cb7c:
    /** */ (function (module, exports, __webpack_require__) {
      const isObject = __webpack_require__('d3f4');
      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(`${it} is not an object!`);
        return it;
      };
      /** */ }),

    /** */ ce10:
    /** */ (function (module, exports, __webpack_require__) {
      const has = __webpack_require__('69a8');
      const toIObject = __webpack_require__('6821');
      const arrayIndexOf = __webpack_require__('c366')(false);
      const IE_PROTO = __webpack_require__('613b')('IE_PROTO');

      module.exports = function (object, names) {
        const O = toIObject(object);
        let i = 0;
        const result = [];
        let key;
        for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
        // Don't enum bug & hidden keys
        while (names.length > i) {
          if (has(O, key = names[i++])) {
            ~arrayIndexOf(result, key) || result.push(key);
          }
        }
        return result;
      };
      /** */ }),

    /** */ d3f4:
    /** */ (function (module, exports) {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };
      /** */ }),

    /** */ d8e8:
    /** */ (function (module, exports) {
      module.exports = function (it) {
        if (typeof it !== 'function') throw TypeError(`${it} is not a function!`);
        return it;
      };
      /** */ }),

    /** */ e11e:
    /** */ (function (module, exports) {
      // IE 8- don't enum bug keys
      module.exports = (
        'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
      ).split(',');
      /** */ }),

    /** */ f6fd:
    /** */ (function (module, exports) {
      // document.currentScript polyfill by Adam Miller

      // MIT license

      (function (document) {
        const currentScript = 'currentScript';
        const scripts = document.getElementsByTagName('script'); // Live NodeList collection

        // If browser needs currentScript polyfill, add get currentScript() to the document object
        if (!(currentScript in document)) {
          Object.defineProperty(document, currentScript, {
            get() {
              // IE 6-10 supports script readyState
              // IE 10+ support stack trace
              try { throw new Error(); } catch (err) {
                // Find the second match for the "at" string to get file src url from stack.
                // Specifically works with the format of stack traces in IE.
                let i; const
                  res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

                // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
                for (i in scripts) {
                  if (scripts[i].src == res || scripts[i].readyState == 'interactive') {
                    return scripts[i];
                  }
                }

                // If no match, return null
                return null;
              }
            },
          });
        }
      }(document));
      /** */ }),

    /** */ fa5b:
    /** */ (function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__('5537')('native-function-to-string', Function.toString);
      /** */ }),

    /** */ fab2:
    /** */ (function (module, exports, __webpack_require__) {
      const { document } = __webpack_require__('7726');
      module.exports = document && document.documentElement;
      /** */ }),

    /** */ fae3:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);

      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
      // This file is imported into lib/wc client bundles.

      if (typeof window !== 'undefined') {
        if (true) {
          __webpack_require__('f6fd');
        }

        let i;
        if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
        }
      }

      // Indicate to webpack that this file can be concatenated
      /* harmony default export */ const setPublicPath = (null);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
      const es6_function_name = __webpack_require__('7f7f');

      // EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
      const external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__('8bbf');
      const external_commonjs_vue_commonjs2_vue_root_Vue_default = /* #__PURE__ */__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"43a29416-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=1fe07929&
      const Appvue_type_template_id_1fe07929_render = function () { const _vm = this; const _h = _vm.$createElement; const _c = _vm._self._c || _h; return _c('div', { attrs: { id: 'app' } }, [_c('tabs', [_c('tab', { attrs: { title: 'Tab1' } }, [_c('h1', [_vm._v('Tab 1 content')]), _c('p', [_vm._v('Lorem ipsum dolor sit amet consectetur adipisicing elit. !')])]), _c('tab', { attrs: { title: 'Tab2' } }, [_c('h1', [_vm._v('Tab 2 content')]), _c('p', [_vm._v('Inventore provident enim eos sint, alias dicta,\n        totam in quo laborum aspernatur officiis.')])]), _c('tab', { attrs: { title: 'Tab3' } }, [_c('h1', [_vm._v('Tab 3 content')]), _c('p', [_vm._v('Quis harum dicta, facere incidunt suscipit voluptatum!')])]), _c('tab', { attrs: { title: 'Tab4' } }, [_c('h1', [_vm._v('Tab 4 content')]), _c('p', [_vm._v('Some example content!')])])], 1)], 1); };
      const staticRenderFns = [];


      // CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=1fe07929&

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
      const es6_number_constructor = __webpack_require__('c5f6');

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tabs.vue?vue&type=script&lang=js&

      //
      /* harmony default export */ const Tabsvue_type_script_lang_js_ = ({
        name: 'vue-tabs-container',
        props: {
          defaultIndex: {
            type: Number,
            default: 0,
          },
        },
        data: function data() {
          return {
            activeIndex: this.defaultIndex,
          };
        },
        computed: {
          tabs: function tabs() {
            return this.$slots.default.filter((_ref) => {
              const { tag } = _ref;
              return tag === 'vue-component-2-vue-tabs-item';
            });
          },
          tabsNavigation: function tabsNavigation() {
            const _this = this;

            const h = this.$createElement;
            return this.tabs.map((_ref2, index) => {
              const { componentOptions } = _ref2;
              const { title } = componentOptions.propsData;
              return h('div', {
                class: 'vue-tabs__nav-item',
                attrs: {
                  role: 'tab',
                  'aria-selected': 'false',
                  'aria-controls': index,
                },
                on: {
                  click: function click(e) {
                    return _this.switchTab(e, index);
                  },
                },
              }, [title]);
            });
          },
          tabsNavWrapper: function tabsNavWrapper() {
            const h = this.$createElement;
            return h('div', {
              class: 'vue-tabs__nav',
              attrs: {
                role: 'tablist',
              },
            }, [this.tabsNavigation]);
          },
          tabsContent: function tabsContent() {
            const h = this.$createElement;
            return h('div', {
              class: 'vue-tabs__content',
              attrs: {
                role: 'tabpanel',
              },
            }, [h('transition', {
              attrs: {
                name: 'fade',
                mode: 'out-in',
              },
            }, [h('div', {
              key: this.activeIndex,
            }, [this.tabs[this.activeIndex]])])]);
          },
        },
        methods: {
          switchTab: function switchTab(e, index) {
            this.activeIndex = index;
          },
        },
        render: function render() {
          const h = arguments[0];
          return h('div', {
            class: 'vue-tabs',
          }, [this.tabsNavWrapper, this.tabsContent]);
        },
      });
      // CONCATENATED MODULE: ./src/components/Tabs.vue?vue&type=script&lang=js&
      /* harmony default export */ const components_Tabsvue_type_script_lang_js_ = (Tabsvue_type_script_lang_js_);
      // EXTERNAL MODULE: ./src/components/Tabs.vue?vue&type=style&index=0&lang=scss&
      const Tabsvue_type_style_index_0_lang_scss_ = __webpack_require__('6f10');

      // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
      /* globals __VUE_SSR_CONTEXT__ */

      // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
      // This module is a runtime utility for cleaner component module output and will
      // be included in the final webpack user bundle.

      function normalizeComponent(
        scriptExports,
        render,
        staticRenderFns,
        functionalTemplate,
        injectStyles,
        scopeId,
        moduleIdentifier, /* server only */
        shadowMode, /* vue-cli only */
      ) {
        // Vue.extend constructor export interop
        const options = typeof scriptExports === 'function'
          ? scriptExports.options
          : scriptExports;

        // render functions
        if (render) {
          options.render = render;
          options.staticRenderFns = staticRenderFns;
          options._compiled = true;
        }

        // functional template
        if (functionalTemplate) {
          options.functional = true;
        }

        // scopedId
        if (scopeId) {
          options._scopeId = `data-v-${scopeId}`;
        }

        let hook;
        if (moduleIdentifier) { // server build
          hook = function (context) {
            // 2.3 injection
            context = context // cached call
        || (this.$vnode && this.$vnode.ssrContext) // stateful
        || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (injectStyles) {
              injectStyles.call(this, context);
            }
            // register component module identifier for async chunk inferrence
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
        } else if (injectStyles) {
          hook = shadowMode
            ? function () { injectStyles.call(this, this.$root.$options.shadowRoot); }
            : injectStyles;
        }

        if (hook) {
          if (options.functional) {
            // for template-only hot-reload because in that case the render fn doesn't
            // go through the normalizer
            options._injectStyles = hook;
            // register for functioal component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context);
            };
          } else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing
              ? [].concat(existing, hook)
              : [hook];
          }
        }

        return {
          exports: scriptExports,
          options,
        };
      }

      // CONCATENATED MODULE: ./src/components/Tabs.vue
      let Tabs_render; let
        Tabs_staticRenderFns;


      /* normalize component */

      const component = normalizeComponent(
        components_Tabsvue_type_script_lang_js_,
        Tabs_render,
        Tabs_staticRenderFns,
        false,
        null,
        null,
        null,

      );

      /* harmony default export */ const Tabs = (component.exports);
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"43a29416-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tab.vue?vue&type=template&id=5252fcbb&
      const Tabvue_type_template_id_5252fcbb_render = function () { const _vm = this; const _h = _vm.$createElement; const _c = _vm._self._c || _h; return _c('div', { staticClass: 'vue-tabs__item' }, [_vm._t('default')], 2); };
      const Tabvue_type_template_id_5252fcbb_staticRenderFns = [];


      // CONCATENATED MODULE: ./src/components/Tab.vue?vue&type=template&id=5252fcbb&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tab.vue?vue&type=script&lang=js&
      //
      //
      //
      //
      //
      //
      /* harmony default export */ const Tabvue_type_script_lang_js_ = ({
        name: 'vue-tabs-item',
        props: {
          title: {
            type: String,
            required: true,
          },
          isDisabled: {
            type: Boolean,
            default: false,
          },
        },
      });
      // CONCATENATED MODULE: ./src/components/Tab.vue?vue&type=script&lang=js&
      /* harmony default export */ const components_Tabvue_type_script_lang_js_ = (Tabvue_type_script_lang_js_);
      // CONCATENATED MODULE: ./src/components/Tab.vue


      /* normalize component */

      const Tab_component = normalizeComponent(
        components_Tabvue_type_script_lang_js_,
        Tabvue_type_template_id_5252fcbb_render,
        Tabvue_type_template_id_5252fcbb_staticRenderFns,
        false,
        null,
        null,
        null,

      );

      /* harmony default export */ const Tab = (Tab_component.exports);
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //


      /* harmony default export */ const Appvue_type_script_lang_js_ = ({
        name: 'app',
        components: {
          Tabs,
          Tab,
        },
      });
      // CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
      /* harmony default export */ const src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_);
      // EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=scss&
      const Appvue_type_style_index_0_lang_scss_ = __webpack_require__('5c0b');

      // CONCATENATED MODULE: ./src/App.vue


      /* normalize component */

      const App_component = normalizeComponent(
        src_Appvue_type_script_lang_js_,
        Appvue_type_template_id_1fe07929_render,
        staticRenderFns,
        false,
        null,
        null,
        null,

      );

      /* harmony default export */ const App = (App_component.exports);
      // CONCATENATED MODULE: ./src/main.js


      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.config.productionTip = false;
      new external_commonjs_vue_commonjs2_vue_root_Vue_default.a({
        render: function render(h) {
          return h(App);
        },
      }).$mount('#app');

      const main_install = function install(VueLib) {
        VueLib.component(Tabs.name, Tabs);
        VueLib.component(Tab.name, Tab);
      };


      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
      /* concated harmony reexport Tabs */__webpack_require__.d(__webpack_exports__, 'Tabs', () => Tabs);
      /* concated harmony reexport Tab */__webpack_require__.d(__webpack_exports__, 'Tab', () => Tab);
      /* concated harmony reexport install */__webpack_require__.d(__webpack_exports__, 'install', () => main_install);
      /** */ }),

    /** */ fdef:
    /** */ (function (module, exports) {
      module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003'
  + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
      /** */ }),

    /** *** */ }))));
// # sourceMappingURL=vue-tabs.umd.js.map
