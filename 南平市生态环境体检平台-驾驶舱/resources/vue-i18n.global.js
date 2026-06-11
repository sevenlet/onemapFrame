"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * vue-i18n v9.2.0-beta.17
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
var VueI18n = function (exports, vue) {
  'use strict';

  /**
   * Original Utilities
   * written by kazuya kawaguchi
   */
  var _errorMessages$, _pathStateMachine$, _pathStateMachine$2, _pathStateMachine$3, _pathStateMachine$4, _pathStateMachine$5, _pathStateMachine$6, _pathStateMachine$7, _warnMessages$, _errorMessages$2, _warnMessages, _errorMessages, _VueDevToolsLabels;
  var inBrowser = typeof window !== 'undefined';
  var mark;
  var measure;
  {
    var perf = inBrowser && window.performance;
    if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
      mark = function mark(tag) {
        return perf.mark(tag);
      };
      measure = function measure(name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
      };
    }
  }
  var RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
  /* eslint-disable */
  function format(message) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (args.length === 1 && isObject(args[0])) {
      args = args[0];
    }
    if (!args || !args.hasOwnProperty) {
      args = {};
    }
    return message.replace(RE_ARGS, function (match, identifier) {
      return args.hasOwnProperty(identifier) ? args[identifier] : '';
    });
  }
  var hasSymbol = typeof Symbol === 'function' && _typeof(Symbol.toStringTag) === 'symbol';
  var makeSymbol = function makeSymbol(name) {
    return hasSymbol ? Symbol(name) : name;
  };
  var generateFormatCacheKey = function generateFormatCacheKey(locale, key, source) {
    return friendlyJSONstringify({
      l: locale,
      k: key,
      s: source
    });
  };
  var friendlyJSONstringify = function friendlyJSONstringify(json) {
    return JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
  };
  var isNumber = function isNumber(val) {
    return typeof val === 'number' && isFinite(val);
  };
  var isDate = function isDate(val) {
    return toTypeString(val) === '[object Date]';
  };
  var isRegExp = function isRegExp(val) {
    return toTypeString(val) === '[object RegExp]';
  };
  var isEmptyObject = function isEmptyObject(val) {
    return isPlainObject(val) && Object.keys(val).length === 0;
  };
  function warn(msg, err) {
    if (typeof console !== 'undefined') {
      console.warn("[intlify] " + msg);
      /* istanbul ignore if */
      if (err) {
        console.warn(err.stack);
      }
    }
  }
  var assign = Object.assign;
  var _globalThis;
  var getGlobalThis = function getGlobalThis() {
    // prettier-ignore
    return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
  };
  function escapeHtml(rawText) {
    return rawText.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }
  /* eslint-enable */
  /**
   * Useful Utilities By Evan you
   * Modified by kazuya kawaguchi
   * MIT License
   * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
   * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
   */
  var isArray = Array.isArray;
  var isFunction = function isFunction(val) {
    return typeof val === 'function';
  };
  var isString = function isString(val) {
    return typeof val === 'string';
  };
  var isBoolean = function isBoolean(val) {
    return typeof val === 'boolean';
  };
  var isObject = function isObject(val) {
    return (
      // eslint-disable-line
      val !== null && _typeof(val) === 'object'
    );
  };
  var objectToString = Object.prototype.toString;
  var toTypeString = function toTypeString(value) {
    return objectToString.call(value);
  };
  var isPlainObject = function isPlainObject(val) {
    return toTypeString(val) === '[object Object]';
  };
  // for converting list and named values to displayed strings.
  var toDisplayString = function toDisplayString(val) {
    return val == null ? '' : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
  };
  var RANGE = 2;
  function generateCodeFrame(source) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];
    for (var i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (var j = i - RANGE; j <= i + RANGE || end > count; j++) {
          if (j < 0 || j >= lines.length) continue;
          var line = j + 1;
          res.push("".concat(line).concat(' '.repeat(3 - String(line).length), "|  ").concat(lines[j]));
          var lineLength = lines[j].length;
          if (j === i) {
            // push underline
            var pad = start - (count - lineLength) + 1;
            var length = Math.max(1, end > count ? lineLength - pad : end - start);
            res.push("   |  " + ' '.repeat(pad) + '^'.repeat(length));
          } else if (j > i) {
            if (end > count) {
              var _length = Math.max(Math.min(end - count, lineLength), 1);
              res.push("   |  " + '^'.repeat(_length));
            }
            count += lineLength + 1;
          }
        }
        break;
      }
    }
    return res.join('\n');
  }

  /**
   * Event emitter, forked from the below:
   * - original repository url: https://github.com/developit/mitt
   * - code url: https://github.com/developit/mitt/blob/master/src/index.ts
   * - author: Jason Miller (https://github.com/developit)
   * - license: MIT
   */
  /**
   * Create a event emitter
   *
   * @returns An event emitter
   */
  function createEmitter() {
    var events = new Map();
    var emitter = {
      events: events,
      on: function on(event, handler) {
        var handlers = events.get(event);
        var added = handlers && handlers.push(handler);
        if (!added) {
          events.set(event, [handler]);
        }
      },
      off: function off(event, handler) {
        var handlers = events.get(event);
        if (handlers) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        }
      },
      emit: function emit(event, payload) {
        (events.get(event) || []).slice().map(function (handler) {
          return handler(payload);
        });
        (events.get('*') || []).slice().map(function (handler) {
          return handler(event, payload);
        });
      }
    };
    return emitter;
  }
  var CompileErrorCodes = {
    // tokenizer error codes
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    // parser error codes
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    // Special value for higher-order compilers to pick up the last code
    // to avoid collision of error codes. This should always be kept as the last
    // item.
    __EXTEND_POINT__: 15
  };
  /** @internal */
  var errorMessages$2 = (_errorMessages$ = {}, _defineProperty(_errorMessages$, CompileErrorCodes.EXPECTED_TOKEN, "Expected token: '{0}'"), _defineProperty(_errorMessages$, CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, "Invalid token in placeholder: '{0}'"), _defineProperty(_errorMessages$, CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, "Unterminated single quote in placeholder"), _defineProperty(_errorMessages$, CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, "Unknown escape sequence: \\{0}"), _defineProperty(_errorMessages$, CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, "Invalid unicode escape sequence: {0}"), _defineProperty(_errorMessages$, CompileErrorCodes.UNBALANCED_CLOSING_BRACE, "Unbalanced closing brace"), _defineProperty(_errorMessages$, CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, "Unterminated closing brace"), _defineProperty(_errorMessages$, CompileErrorCodes.EMPTY_PLACEHOLDER, "Empty placeholder"), _defineProperty(_errorMessages$, CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, "Not allowed nest placeholder"), _defineProperty(_errorMessages$, CompileErrorCodes.INVALID_LINKED_FORMAT, "Invalid linked format"), _defineProperty(_errorMessages$, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, "Plural must have messages"), _defineProperty(_errorMessages$, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, "Unexpected empty linked modifier"), _defineProperty(_errorMessages$, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, "Unexpected empty linked key"), _defineProperty(_errorMessages$, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, "Unexpected lexical analysis in token: '{0}'"), _errorMessages$);
  function createCompileError(code, loc) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var domain = options.domain,
      messages = options.messages,
      args = options.args;
    var msg = format.apply(void 0, [(messages || errorMessages$2)[code] || ''].concat(_toConsumableArray(args || [])));
    var error = new SyntaxError(String(msg));
    error.code = code;
    if (loc) {
      error.location = loc;
    }
    error.domain = domain;
    return error;
  }
  /** @internal */
  function defaultOnError(error) {
    throw error;
  }
  function createPosition(line, column, offset) {
    return {
      line: line,
      column: column,
      offset: offset
    };
  }
  function createLocation(start, end, source) {
    var loc = {
      start: start,
      end: end
    };
    if (source != null) {
      loc.source = source;
    }
    return loc;
  }
  var CHAR_SP = ' ';
  var CHAR_CR = '\r';
  var CHAR_LF = '\n';
  var CHAR_LS = String.fromCharCode(0x2028);
  var CHAR_PS = String.fromCharCode(0x2029);
  function createScanner(str) {
    var _buf = str;
    var _index = 0;
    var _line = 1;
    var _column = 1;
    var _peekOffset = 0;
    var isCRLF = function isCRLF(index) {
      return _buf[index] === CHAR_CR && _buf[index + 1] === CHAR_LF;
    };
    var isLF = function isLF(index) {
      return _buf[index] === CHAR_LF;
    };
    var isPS = function isPS(index) {
      return _buf[index] === CHAR_PS;
    };
    var isLS = function isLS(index) {
      return _buf[index] === CHAR_LS;
    };
    var isLineEnd = function isLineEnd(index) {
      return isCRLF(index) || isLF(index) || isPS(index) || isLS(index);
    };
    var index = function index() {
      return _index;
    };
    var line = function line() {
      return _line;
    };
    var column = function column() {
      return _column;
    };
    var peekOffset = function peekOffset() {
      return _peekOffset;
    };
    var charAt = function charAt(offset) {
      return isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
    };
    var currentChar = function currentChar() {
      return charAt(_index);
    };
    var currentPeek = function currentPeek() {
      return charAt(_index + _peekOffset);
    };
    function next() {
      _peekOffset = 0;
      if (isLineEnd(_index)) {
        _line++;
        _column = 0;
      }
      if (isCRLF(_index)) {
        _index++;
      }
      _index++;
      _column++;
      return _buf[_index];
    }
    function peek() {
      if (isCRLF(_index + _peekOffset)) {
        _peekOffset++;
      }
      _peekOffset++;
      return _buf[_index + _peekOffset];
    }
    function reset() {
      _index = 0;
      _line = 1;
      _column = 1;
      _peekOffset = 0;
    }
    function resetPeek() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      _peekOffset = offset;
    }
    function skipToPeek() {
      var target = _index + _peekOffset;
      // eslint-disable-next-line no-unmodified-loop-condition
      while (target !== _index) {
        next();
      }
      _peekOffset = 0;
    }
    return {
      index: index,
      line: line,
      column: column,
      peekOffset: peekOffset,
      charAt: charAt,
      currentChar: currentChar,
      currentPeek: currentPeek,
      next: next,
      peek: peek,
      reset: reset,
      resetPeek: resetPeek,
      skipToPeek: skipToPeek
    };
  }
  var EOF = undefined;
  var LITERAL_DELIMITER = "'";
  var ERROR_DOMAIN$1 = 'tokenizer';
  function createTokenizer(source) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var location = options.location !== false;
    var _scnr = createScanner(source);
    var currentOffset = function currentOffset() {
      return _scnr.index();
    };
    var currentPosition = function currentPosition() {
      return createPosition(_scnr.line(), _scnr.column(), _scnr.index());
    };
    var _initLoc = currentPosition();
    var _initOffset = currentOffset();
    var _context = {
      currentType: 14 /* EOF */,
      offset: _initOffset,
      startLoc: _initLoc,
      endLoc: _initLoc,
      lastType: 14 /* EOF */,
      lastOffset: _initOffset,
      lastStartLoc: _initLoc,
      lastEndLoc: _initLoc,
      braceNest: 0,
      inLinked: false,
      text: ''
    };
    var context = function context() {
      return _context;
    };
    var onError = options.onError;
    function emitError(code, pos, offset) {
      var ctx = context();
      pos.column += offset;
      pos.offset += offset;
      if (onError) {
        var loc = createLocation(ctx.startLoc, pos);
        for (var _len2 = arguments.length, args = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
          args[_key2 - 3] = arguments[_key2];
        }
        var err = createCompileError(code, loc, {
          domain: ERROR_DOMAIN$1,
          args: args
        });
        onError(err);
      }
    }
    function getToken(context, type, value) {
      context.endLoc = currentPosition();
      context.currentType = type;
      var token = {
        type: type
      };
      if (location) {
        token.loc = createLocation(context.startLoc, context.endLoc);
      }
      if (value != null) {
        token.value = value;
      }
      return token;
    }
    var getEndToken = function getEndToken(context) {
      return getToken(context, 14 /* EOF */);
    };
    function eat(scnr, ch) {
      if (scnr.currentChar() === ch) {
        scnr.next();
        return ch;
      } else {
        emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
        return '';
      }
    }
    function peekSpaces(scnr) {
      var buf = '';
      while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
        buf += scnr.currentPeek();
        scnr.peek();
      }
      return buf;
    }
    function skipSpaces(scnr) {
      var buf = peekSpaces(scnr);
      scnr.skipToPeek();
      return buf;
    }
    function isIdentifierStart(ch) {
      if (ch === EOF) {
        return false;
      }
      var cc = ch.charCodeAt(0);
      return cc >= 97 && cc <= 122 ||
      // a-z
      cc >= 65 && cc <= 90 ||
      // A-Z
      cc === 95 // _
      ;
    }

    function isNumberStart(ch) {
      if (ch === EOF) {
        return false;
      }
      var cc = ch.charCodeAt(0);
      return cc >= 48 && cc <= 57; // 0-9
    }

    function isNamedIdentifierStart(scnr, context) {
      var currentType = context.currentType;
      if (currentType !== 2 /* BraceLeft */) {
        return false;
      }
      peekSpaces(scnr);
      var ret = isIdentifierStart(scnr.currentPeek());
      scnr.resetPeek();
      return ret;
    }
    function isListIdentifierStart(scnr, context) {
      var currentType = context.currentType;
      if (currentType !== 2 /* BraceLeft */) {
        return false;
      }
      peekSpaces(scnr);
      var ch = scnr.currentPeek() === '-' ? scnr.peek() : scnr.currentPeek();
      var ret = isNumberStart(ch);
      scnr.resetPeek();
      return ret;
    }
    function isLiteralStart(scnr, context) {
      var currentType = context.currentType;
      if (currentType !== 2 /* BraceLeft */) {
        return false;
      }
      peekSpaces(scnr);
      var ret = scnr.currentPeek() === LITERAL_DELIMITER;
      scnr.resetPeek();
      return ret;
    }
    function isLinkedDotStart(scnr, context) {
      var currentType = context.currentType;
      if (currentType !== 8 /* LinkedAlias */) {
        return false;
      }
      peekSpaces(scnr);
      var ret = scnr.currentPeek() === "." /* LinkedDot */;
      scnr.resetPeek();
      return ret;
    }
    function isLinkedModifierStart(scnr, context) {
      var currentType = context.currentType;
      if (currentType !== 9 /* LinkedDot */) {
        return false;
      }
      peekSpaces(scnr);
      var ret = isIdentifierStart(scnr.currentPeek());
      scnr.resetPeek();
      return ret;
    }
    function isLinkedDelimiterStart(scnr, context) {
      var currentType = context.currentType;
      if (!(currentType === 8 /* LinkedAlias */ || currentType === 12 /* LinkedModifier */)) {
        return false;
      }
      peekSpaces(scnr);
      var ret = scnr.currentPeek() === ":" /* LinkedDelimiter */;
      scnr.resetPeek();
      return ret;
    }
    function isLinkedReferStart(scnr, context) {
      var currentType = context.currentType;
      if (currentType !== 10 /* LinkedDelimiter */) {
        return false;
      }
      var fn = function fn() {
        var ch = scnr.currentPeek();
        if (ch === "{" /* BraceLeft */) {
          return isIdentifierStart(scnr.peek());
        } else if (ch === "@" /* LinkedAlias */ || ch === "%" /* Modulo */ || ch === "|" /* Pipe */ || ch === ":" /* LinkedDelimiter */ || ch === "." /* LinkedDot */ || ch === CHAR_SP || !ch) {
          return false;
        } else if (ch === CHAR_LF) {
          scnr.peek();
          return fn();
        } else {
          // other characters
          return isIdentifierStart(ch);
        }
      };
      var ret = fn();
      scnr.resetPeek();
      return ret;
    }
    function isPluralStart(scnr) {
      peekSpaces(scnr);
      var ret = scnr.currentPeek() === "|" /* Pipe */;
      scnr.resetPeek();
      return ret;
    }
    function isTextStart(scnr) {
      var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var fn = function fn() {
        var hasSpace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var prev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var detectModulo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var ch = scnr.currentPeek();
        if (ch === "{" /* BraceLeft */) {
          return prev === "%" /* Modulo */ ? false : hasSpace;
        } else if (ch === "@" /* LinkedAlias */ || !ch) {
          return prev === "%" /* Modulo */ ? true : hasSpace;
        } else if (ch === "%" /* Modulo */) {
          scnr.peek();
          return fn(hasSpace, "%" /* Modulo */, true);
        } else if (ch === "|" /* Pipe */) {
          return prev === "%" /* Modulo */ || detectModulo ? true : !(prev === CHAR_SP || prev === CHAR_LF);
        } else if (ch === CHAR_SP) {
          scnr.peek();
          return fn(true, CHAR_SP, detectModulo);
        } else if (ch === CHAR_LF) {
          scnr.peek();
          return fn(true, CHAR_LF, detectModulo);
        } else {
          return true;
        }
      };
      var ret = fn();
      reset && scnr.resetPeek();
      return ret;
    }
    function takeChar(scnr, fn) {
      var ch = scnr.currentChar();
      if (ch === EOF) {
        return EOF;
      }
      if (fn(ch)) {
        scnr.next();
        return ch;
      }
      return null;
    }
    function takeIdentifierChar(scnr) {
      var closure = function closure(ch) {
        var cc = ch.charCodeAt(0);
        return cc >= 97 && cc <= 122 ||
        // a-z
        cc >= 65 && cc <= 90 ||
        // A-Z
        cc >= 48 && cc <= 57 ||
        // 0-9
        cc === 95 ||
        // _
        cc === 36 // $
        ;
      };

      return takeChar(scnr, closure);
    }
    function takeDigit(scnr) {
      var closure = function closure(ch) {
        var cc = ch.charCodeAt(0);
        return cc >= 48 && cc <= 57; // 0-9
      };

      return takeChar(scnr, closure);
    }
    function takeHexDigit(scnr) {
      var closure = function closure(ch) {
        var cc = ch.charCodeAt(0);
        return cc >= 48 && cc <= 57 ||
        // 0-9
        cc >= 65 && cc <= 70 ||
        // A-F
        cc >= 97 && cc <= 102; // a-f
      };

      return takeChar(scnr, closure);
    }
    function getDigits(scnr) {
      var ch = '';
      var num = '';
      while (ch = takeDigit(scnr)) {
        num += ch;
      }
      return num;
    }
    function readText(scnr) {
      var buf = '';
      while (true) {
        var ch = scnr.currentChar();
        if (ch === "{" /* BraceLeft */ || ch === "}" /* BraceRight */ || ch === "@" /* LinkedAlias */ || ch === "|" /* Pipe */ || !ch) {
          break;
        } else if (ch === "%" /* Modulo */) {
          if (isTextStart(scnr)) {
            buf += ch;
            scnr.next();
          } else {
            break;
          }
        } else if (ch === CHAR_SP || ch === CHAR_LF) {
          if (isTextStart(scnr)) {
            buf += ch;
            scnr.next();
          } else if (isPluralStart(scnr)) {
            break;
          } else {
            buf += ch;
            scnr.next();
          }
        } else {
          buf += ch;
          scnr.next();
        }
      }
      return buf;
    }
    function readNamedIdentifier(scnr) {
      skipSpaces(scnr);
      var ch = '';
      var name = '';
      while (ch = takeIdentifierChar(scnr)) {
        name += ch;
      }
      if (scnr.currentChar() === EOF) {
        emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
      }
      return name;
    }
    function readListIdentifier(scnr) {
      skipSpaces(scnr);
      var value = '';
      if (scnr.currentChar() === '-') {
        scnr.next();
        value += "-".concat(getDigits(scnr));
      } else {
        value += getDigits(scnr);
      }
      if (scnr.currentChar() === EOF) {
        emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
      }
      return value;
    }
    function readLiteral(scnr) {
      skipSpaces(scnr);
      eat(scnr, "'");
      var ch = '';
      var literal = '';
      var fn = function fn(x) {
        return x !== LITERAL_DELIMITER && x !== CHAR_LF;
      };
      while (ch = takeChar(scnr, fn)) {
        if (ch === '\\') {
          literal += readEscapeSequence(scnr);
        } else {
          literal += ch;
        }
      }
      var current = scnr.currentChar();
      if (current === CHAR_LF || current === EOF) {
        emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
        // TODO: Is it correct really?
        if (current === CHAR_LF) {
          scnr.next();
          eat(scnr, "'");
        }
        return literal;
      }
      eat(scnr, "'");
      return literal;
    }
    function readEscapeSequence(scnr) {
      var ch = scnr.currentChar();
      switch (ch) {
        case '\\':
        case "'":
          scnr.next();
          return "\\".concat(ch);
        case 'u':
          return readUnicodeEscapeSequence(scnr, ch, 4);
        case 'U':
          return readUnicodeEscapeSequence(scnr, ch, 6);
        default:
          emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
          return '';
      }
    }
    function readUnicodeEscapeSequence(scnr, unicode, digits) {
      eat(scnr, unicode);
      var sequence = '';
      for (var i = 0; i < digits; i++) {
        var ch = takeHexDigit(scnr);
        if (!ch) {
          emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, "\\".concat(unicode).concat(sequence).concat(scnr.currentChar()));
          break;
        }
        sequence += ch;
      }
      return "\\".concat(unicode).concat(sequence);
    }
    function readInvalidIdentifier(scnr) {
      skipSpaces(scnr);
      var ch = '';
      var identifiers = '';
      var closure = function closure(ch) {
        return ch !== "{" /* BraceLeft */ && ch !== "}" /* BraceRight */ && ch !== CHAR_SP && ch !== CHAR_LF;
      };
      while (ch = takeChar(scnr, closure)) {
        identifiers += ch;
      }
      return identifiers;
    }
    function readLinkedModifier(scnr) {
      var ch = '';
      var name = '';
      while (ch = takeIdentifierChar(scnr)) {
        name += ch;
      }
      return name;
    }
    function readLinkedRefer(scnr) {
      var fn = function fn() {
        var detect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var buf = arguments.length > 1 ? arguments[1] : undefined;
        var ch = scnr.currentChar();
        if (ch === "{" /* BraceLeft */ || ch === "%" /* Modulo */ || ch === "@" /* LinkedAlias */ || ch === "|" /* Pipe */ || !ch) {
          return buf;
        } else if (ch === CHAR_SP) {
          return buf;
        } else if (ch === CHAR_LF) {
          buf += ch;
          scnr.next();
          return fn(detect, buf);
        } else {
          buf += ch;
          scnr.next();
          return fn(true, buf);
        }
      };
      return fn(false, '');
    }
    function readPlural(scnr) {
      skipSpaces(scnr);
      var plural = eat(scnr, "|" /* Pipe */);
      skipSpaces(scnr);
      return plural;
    }
    // TODO: We need refactoring of token parsing ...
    function readTokenInPlaceholder(scnr, context) {
      var token = null;
      var ch = scnr.currentChar();
      switch (ch) {
        case "{" /* BraceLeft */:
          if (context.braceNest >= 1) {
            emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
          }
          scnr.next();
          token = getToken(context, 2 /* BraceLeft */, "{" /* BraceLeft */);
          skipSpaces(scnr);
          context.braceNest++;
          return token;
        case "}" /* BraceRight */:
          if (context.braceNest > 0 && context.currentType === 2 /* BraceLeft */) {
            emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
          }
          scnr.next();
          token = getToken(context, 3 /* BraceRight */, "}" /* BraceRight */);
          context.braceNest--;
          context.braceNest > 0 && skipSpaces(scnr);
          if (context.inLinked && context.braceNest === 0) {
            context.inLinked = false;
          }
          return token;
        case "@" /* LinkedAlias */:
          if (context.braceNest > 0) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          }
          token = readTokenInLinked(scnr, context) || getEndToken(context);
          context.braceNest = 0;
          return token;
        default:
          var validNamedIdentifier = true;
          var validListIdentifier = true;
          var validLiteral = true;
          if (isPluralStart(scnr)) {
            if (context.braceNest > 0) {
              emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
            }
            token = getToken(context, 1 /* Pipe */, readPlural(scnr));
            // reset
            context.braceNest = 0;
            context.inLinked = false;
            return token;
          }
          if (context.braceNest > 0 && (context.currentType === 5 /* Named */ || context.currentType === 6 /* List */ || context.currentType === 7 /* Literal */)) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
            context.braceNest = 0;
            return readToken(scnr, context);
          }
          if (validNamedIdentifier = isNamedIdentifierStart(scnr, context)) {
            token = getToken(context, 5 /* Named */, readNamedIdentifier(scnr));
            skipSpaces(scnr);
            return token;
          }
          if (validListIdentifier = isListIdentifierStart(scnr, context)) {
            token = getToken(context, 6 /* List */, readListIdentifier(scnr));
            skipSpaces(scnr);
            return token;
          }
          if (validLiteral = isLiteralStart(scnr, context)) {
            token = getToken(context, 7 /* Literal */, readLiteral(scnr));
            skipSpaces(scnr);
            return token;
          }
          if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
            // TODO: we should be re-designed invalid cases, when we will extend message syntax near the future ...
            token = getToken(context, 13 /* InvalidPlace */, readInvalidIdentifier(scnr));
            emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
            skipSpaces(scnr);
            return token;
          }
          break;
      }
      return token;
    }
    // TODO: We need refactoring of token parsing ...
    function readTokenInLinked(scnr, context) {
      var currentType = context.currentType;
      var token = null;
      var ch = scnr.currentChar();
      if ((currentType === 8 /* LinkedAlias */ || currentType === 9 /* LinkedDot */ || currentType === 12 /* LinkedModifier */ || currentType === 10 /* LinkedDelimiter */) && (ch === CHAR_LF || ch === CHAR_SP)) {
        emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
      }
      switch (ch) {
        case "@" /* LinkedAlias */:
          scnr.next();
          token = getToken(context, 8 /* LinkedAlias */, "@" /* LinkedAlias */);
          context.inLinked = true;
          return token;
        case "." /* LinkedDot */:
          skipSpaces(scnr);
          scnr.next();
          return getToken(context, 9 /* LinkedDot */, "." /* LinkedDot */);
        case ":" /* LinkedDelimiter */:
          skipSpaces(scnr);
          scnr.next();
          return getToken(context, 10 /* LinkedDelimiter */, ":" /* LinkedDelimiter */);
        default:
          if (isPluralStart(scnr)) {
            token = getToken(context, 1 /* Pipe */, readPlural(scnr));
            // reset
            context.braceNest = 0;
            context.inLinked = false;
            return token;
          }
          if (isLinkedDotStart(scnr, context) || isLinkedDelimiterStart(scnr, context)) {
            skipSpaces(scnr);
            return readTokenInLinked(scnr, context);
          }
          if (isLinkedModifierStart(scnr, context)) {
            skipSpaces(scnr);
            return getToken(context, 12 /* LinkedModifier */, readLinkedModifier(scnr));
          }
          if (isLinkedReferStart(scnr, context)) {
            skipSpaces(scnr);
            if (ch === "{" /* BraceLeft */) {
              // scan the placeholder
              return readTokenInPlaceholder(scnr, context) || token;
            } else {
              return getToken(context, 11 /* LinkedKey */, readLinkedRefer(scnr));
            }
          }
          if (currentType === 8 /* LinkedAlias */) {
            emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
          }
          context.braceNest = 0;
          context.inLinked = false;
          return readToken(scnr, context);
      }
    }
    // TODO: We need refactoring of token parsing ...
    function readToken(scnr, context) {
      var token = {
        type: 14 /* EOF */
      };
      if (context.braceNest > 0) {
        return readTokenInPlaceholder(scnr, context) || getEndToken(context);
      }
      if (context.inLinked) {
        return readTokenInLinked(scnr, context) || getEndToken(context);
      }
      var ch = scnr.currentChar();
      switch (ch) {
        case "{" /* BraceLeft */:
          return readTokenInPlaceholder(scnr, context) || getEndToken(context);
        case "}" /* BraceRight */:
          emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
          scnr.next();
          return getToken(context, 3 /* BraceRight */, "}" /* BraceRight */);
        case "@" /* LinkedAlias */:
          return readTokenInLinked(scnr, context) || getEndToken(context);
        default:
          if (isPluralStart(scnr)) {
            token = getToken(context, 1 /* Pipe */, readPlural(scnr));
            // reset
            context.braceNest = 0;
            context.inLinked = false;
            return token;
          }
          if (isTextStart(scnr)) {
            return getToken(context, 0 /* Text */, readText(scnr));
          }
          if (ch === "%" /* Modulo */) {
            scnr.next();
            return getToken(context, 4 /* Modulo */, "%" /* Modulo */);
          }

          break;
      }
      return token;
    }
    function nextToken() {
      var currentType = _context.currentType,
        offset = _context.offset,
        startLoc = _context.startLoc,
        endLoc = _context.endLoc;
      _context.lastType = currentType;
      _context.lastOffset = offset;
      _context.lastStartLoc = startLoc;
      _context.lastEndLoc = endLoc;
      _context.offset = currentOffset();
      _context.startLoc = currentPosition();
      if (_scnr.currentChar() === EOF) {
        return getToken(_context, 14 /* EOF */);
      }

      return readToken(_scnr, _context);
    }
    return {
      nextToken: nextToken,
      currentOffset: currentOffset,
      currentPosition: currentPosition,
      context: context
    };
  }
  var ERROR_DOMAIN = 'parser';
  // Backslash backslash, backslash quote, uHHHH, UHHHHHH.
  var KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
  function fromEscapeSequence(match, codePoint4, codePoint6) {
    switch (match) {
      case "\\\\":
        return "\\";
      case "\\'":
        return "'";
      default:
        {
          var codePoint = parseInt(codePoint4 || codePoint6, 16);
          if (codePoint <= 0xd7ff || codePoint >= 0xe000) {
            return String.fromCodePoint(codePoint);
          }
          // invalid ...
          // Replace them with U+FFFD REPLACEMENT CHARACTER.
          return '�';
        }
    }
  }
  function createParser() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var location = options.location !== false;
    var onError = options.onError;
    function emitError(tokenzer, code, start, offset) {
      var end = tokenzer.currentPosition();
      end.offset += offset;
      end.column += offset;
      if (onError) {
        var loc = createLocation(start, end);
        for (var _len3 = arguments.length, args = new Array(_len3 > 4 ? _len3 - 4 : 0), _key3 = 4; _key3 < _len3; _key3++) {
          args[_key3 - 4] = arguments[_key3];
        }
        var err = createCompileError(code, loc, {
          domain: ERROR_DOMAIN,
          args: args
        });
        onError(err);
      }
    }
    function startNode(type, offset, loc) {
      var node = {
        type: type,
        start: offset,
        end: offset
      };
      if (location) {
        node.loc = {
          start: loc,
          end: loc
        };
      }
      return node;
    }
    function endNode(node, offset, pos, type) {
      node.end = offset;
      if (type) {
        node.type = type;
      }
      if (location && node.loc) {
        node.loc.end = pos;
      }
    }
    function parseText(tokenizer, value) {
      var context = tokenizer.context();
      var node = startNode(3 /* Text */, context.offset, context.startLoc);
      node.value = value;
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    function parseList(tokenizer, index) {
      var context = tokenizer.context();
      var offset = context.lastOffset,
        loc = context.lastStartLoc; // get brace left loc
      var node = startNode(5 /* List */, offset, loc);
      node.index = parseInt(index, 10);
      tokenizer.nextToken(); // skip brach right
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    function parseNamed(tokenizer, key) {
      var context = tokenizer.context();
      var offset = context.lastOffset,
        loc = context.lastStartLoc; // get brace left loc
      var node = startNode(4 /* Named */, offset, loc);
      node.key = key;
      tokenizer.nextToken(); // skip brach right
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    function parseLiteral(tokenizer, value) {
      var context = tokenizer.context();
      var offset = context.lastOffset,
        loc = context.lastStartLoc; // get brace left loc
      var node = startNode(9 /* Literal */, offset, loc);
      node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
      tokenizer.nextToken(); // skip brach right
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    function parseLinkedModifier(tokenizer) {
      var token = tokenizer.nextToken();
      var context = tokenizer.context();
      var offset = context.lastOffset,
        loc = context.lastStartLoc; // get linked dot loc
      var node = startNode(8 /* LinkedModifier */, offset, loc);
      if (token.type !== 12 /* LinkedModifier */) {
        // empty modifier
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
        node.value = '';
        endNode(node, offset, loc);
        return {
          nextConsumeToken: token,
          node: node
        };
      }
      // check token
      if (token.value == null) {
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
      }
      node.value = token.value || '';
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return {
        node: node
      };
    }
    function parseLinkedKey(tokenizer, value) {
      var context = tokenizer.context();
      var node = startNode(7 /* LinkedKey */, context.offset, context.startLoc);
      node.value = value;
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    function parseLinked(tokenizer) {
      var context = tokenizer.context();
      var linkedNode = startNode(6 /* Linked */, context.offset, context.startLoc);
      var token = tokenizer.nextToken();
      if (token.type === 9 /* LinkedDot */) {
        var parsed = parseLinkedModifier(tokenizer);
        linkedNode.modifier = parsed.node;
        token = parsed.nextConsumeToken || tokenizer.nextToken();
      }
      // asset check token
      if (token.type !== 10 /* LinkedDelimiter */) {
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
      }
      token = tokenizer.nextToken();
      // skip brace left
      if (token.type === 2 /* BraceLeft */) {
        token = tokenizer.nextToken();
      }
      switch (token.type) {
        case 11 /* LinkedKey */:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          linkedNode.key = parseLinkedKey(tokenizer, token.value || '');
          break;
        case 5 /* Named */:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          linkedNode.key = parseNamed(tokenizer, token.value || '');
          break;
        case 6 /* List */:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          linkedNode.key = parseList(tokenizer, token.value || '');
          break;
        case 7 /* Literal */:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          linkedNode.key = parseLiteral(tokenizer, token.value || '');
          break;
        default:
          // empty key
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
          var nextContext = tokenizer.context();
          var emptyLinkedKeyNode = startNode(7 /* LinkedKey */, nextContext.offset, nextContext.startLoc);
          emptyLinkedKeyNode.value = '';
          endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
          linkedNode.key = emptyLinkedKeyNode;
          endNode(linkedNode, nextContext.offset, nextContext.startLoc);
          return {
            nextConsumeToken: token,
            node: linkedNode
          };
      }
      endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
      return {
        node: linkedNode
      };
    }
    function parseMessage(tokenizer) {
      var context = tokenizer.context();
      var startOffset = context.currentType === 1 /* Pipe */ ? tokenizer.currentOffset() : context.offset;
      var startLoc = context.currentType === 1 /* Pipe */ ? context.endLoc : context.startLoc;
      var node = startNode(2 /* Message */, startOffset, startLoc);
      node.items = [];
      var nextToken = null;
      do {
        var token = nextToken || tokenizer.nextToken();
        nextToken = null;
        switch (token.type) {
          case 0 /* Text */:
            if (token.value == null) {
              emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
            }
            node.items.push(parseText(tokenizer, token.value || ''));
            break;
          case 6 /* List */:
            if (token.value == null) {
              emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
            }
            node.items.push(parseList(tokenizer, token.value || ''));
            break;
          case 5 /* Named */:
            if (token.value == null) {
              emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
            }
            node.items.push(parseNamed(tokenizer, token.value || ''));
            break;
          case 7 /* Literal */:
            if (token.value == null) {
              emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
            }
            node.items.push(parseLiteral(tokenizer, token.value || ''));
            break;
          case 8 /* LinkedAlias */:
            var parsed = parseLinked(tokenizer);
            node.items.push(parsed.node);
            nextToken = parsed.nextConsumeToken || null;
            break;
        }
      } while (context.currentType !== 14 /* EOF */ && context.currentType !== 1 /* Pipe */);
      // adjust message node loc
      var endOffset = context.currentType === 1 /* Pipe */ ? context.lastOffset : tokenizer.currentOffset();
      var endLoc = context.currentType === 1 /* Pipe */ ? context.lastEndLoc : tokenizer.currentPosition();
      endNode(node, endOffset, endLoc);
      return node;
    }
    function parsePlural(tokenizer, offset, loc, msgNode) {
      var context = tokenizer.context();
      var hasEmptyMessage = msgNode.items.length === 0;
      var node = startNode(1 /* Plural */, offset, loc);
      node.cases = [];
      node.cases.push(msgNode);
      do {
        var msg = parseMessage(tokenizer);
        if (!hasEmptyMessage) {
          hasEmptyMessage = msg.items.length === 0;
        }
        node.cases.push(msg);
      } while (context.currentType !== 14 /* EOF */);
      if (hasEmptyMessage) {
        emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
      }
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    function parseResource(tokenizer) {
      var context = tokenizer.context();
      var offset = context.offset,
        startLoc = context.startLoc;
      var msgNode = parseMessage(tokenizer);
      if (context.currentType === 14 /* EOF */) {
        return msgNode;
      } else {
        return parsePlural(tokenizer, offset, startLoc, msgNode);
      }
    }
    function parse(source) {
      var tokenizer = createTokenizer(source, assign({}, options));
      var context = tokenizer.context();
      var node = startNode(0 /* Resource */, context.offset, context.startLoc);
      if (location && node.loc) {
        node.loc.source = source;
      }
      node.body = parseResource(tokenizer);
      // assert whether achieved to EOF
      if (context.currentType !== 14 /* EOF */) {
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || '');
      }
      endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
      return node;
    }
    return {
      parse: parse
    };
  }
  function getTokenCaption(token) {
    if (token.type === 14 /* EOF */) {
      return 'EOF';
    }
    var name = (token.value || '').replace(/\r?\n/g, '\\n');
    return name.length > 10 ? name.slice(0, 9) + '…' : name;
  }
  function createTransformer(ast) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _context = {
      ast: ast,
      helpers: new Set()
    };
    var context = function context() {
      return _context;
    };
    var helper = function helper(name) {
      _context.helpers.add(name);
      return name;
    };
    return {
      context: context,
      helper: helper
    };
  }
  function traverseNodes(nodes, transformer) {
    for (var i = 0; i < nodes.length; i++) {
      traverseNode(nodes[i], transformer);
    }
  }
  function traverseNode(node, transformer) {
    // TODO: if we need pre-hook of transform, should be implemented to here
    switch (node.type) {
      case 1 /* Plural */:
        traverseNodes(node.cases, transformer);
        transformer.helper("plural" /* PLURAL */);
        break;
      case 2 /* Message */:
        traverseNodes(node.items, transformer);
        break;
      case 6 /* Linked */:
        var linked = node;
        traverseNode(linked.key, transformer);
        transformer.helper("linked" /* LINKED */);
        break;
      case 5 /* List */:
        transformer.helper("interpolate" /* INTERPOLATE */);
        transformer.helper("list" /* LIST */);
        break;
      case 4 /* Named */:
        transformer.helper("interpolate" /* INTERPOLATE */);
        transformer.helper("named" /* NAMED */);
        break;
    }
    // TODO: if we need post-hook of transform, should be implemented to here
  }
  // transform AST
  function transform(ast) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var transformer = createTransformer(ast);
    transformer.helper("normalize" /* NORMALIZE */);
    // traverse
    ast.body && traverseNode(ast.body, transformer);
    // set meta information
    var context = transformer.context();
    ast.helpers = Array.from(context.helpers);
  }
  function createCodeGenerator(ast, options) {
    var sourceMap = options.sourceMap,
      filename = options.filename,
      breakLineCode = options.breakLineCode,
      _needIndent = options.needIndent;
    var _context = {
      source: ast.loc.source,
      filename: filename,
      code: '',
      column: 1,
      line: 1,
      offset: 0,
      map: undefined,
      breakLineCode: breakLineCode,
      needIndent: _needIndent,
      indentLevel: 0
    };
    var context = function context() {
      return _context;
    };
    function push(code, node) {
      _context.code += code;
    }
    function _newline(n) {
      var withBreakLine = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var _breakLineCode = withBreakLine ? breakLineCode : '';
      push(_needIndent ? _breakLineCode + "  ".repeat(n) : _breakLineCode);
    }
    function indent() {
      var withNewLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var level = ++_context.indentLevel;
      withNewLine && _newline(level);
    }
    function deindent() {
      var withNewLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var level = --_context.indentLevel;
      withNewLine && _newline(level);
    }
    function newline() {
      _newline(_context.indentLevel);
    }
    var helper = function helper(key) {
      return "_".concat(key);
    };
    var needIndent = function needIndent() {
      return _context.needIndent;
    };
    return {
      context: context,
      push: push,
      indent: indent,
      deindent: deindent,
      newline: newline,
      helper: helper,
      needIndent: needIndent
    };
  }
  function generateLinkedNode(generator, node) {
    var helper = generator.helper;
    generator.push("".concat(helper("linked" /* LINKED */), "("));
    generateNode(generator, node.key);
    if (node.modifier) {
      generator.push(", ");
      generateNode(generator, node.modifier);
    }
    generator.push(")");
  }
  function generateMessageNode(generator, node) {
    var helper = generator.helper,
      needIndent = generator.needIndent;
    generator.push("".concat(helper("normalize" /* NORMALIZE */), "(["));
    generator.indent(needIndent());
    var length = node.items.length;
    for (var i = 0; i < length; i++) {
      generateNode(generator, node.items[i]);
      if (i === length - 1) {
        break;
      }
      generator.push(', ');
    }
    generator.deindent(needIndent());
    generator.push('])');
  }
  function generatePluralNode(generator, node) {
    var helper = generator.helper,
      needIndent = generator.needIndent;
    if (node.cases.length > 1) {
      generator.push("".concat(helper("plural" /* PLURAL */), "(["));
      generator.indent(needIndent());
      var length = node.cases.length;
      for (var i = 0; i < length; i++) {
        generateNode(generator, node.cases[i]);
        if (i === length - 1) {
          break;
        }
        generator.push(', ');
      }
      generator.deindent(needIndent());
      generator.push("])");
    }
  }
  function generateResource(generator, node) {
    if (node.body) {
      generateNode(generator, node.body);
    } else {
      generator.push('null');
    }
  }
  function generateNode(generator, node) {
    var helper = generator.helper;
    switch (node.type) {
      case 0 /* Resource */:
        generateResource(generator, node);
        break;
      case 1 /* Plural */:
        generatePluralNode(generator, node);
        break;
      case 2 /* Message */:
        generateMessageNode(generator, node);
        break;
      case 6 /* Linked */:
        generateLinkedNode(generator, node);
        break;
      case 8 /* LinkedModifier */:
        generator.push(JSON.stringify(node.value), node);
        break;
      case 7 /* LinkedKey */:
        generator.push(JSON.stringify(node.value), node);
        break;
      case 5 /* List */:
        generator.push("".concat(helper("interpolate" /* INTERPOLATE */), "(").concat(helper("list" /* LIST */), "(").concat(node.index, "))"), node);
        break;
      case 4 /* Named */:
        generator.push("".concat(helper("interpolate" /* INTERPOLATE */), "(").concat(helper("named" /* NAMED */), "(").concat(JSON.stringify(node.key), "))"), node);
        break;
      case 9 /* Literal */:
        generator.push(JSON.stringify(node.value), node);
        break;
      case 3 /* Text */:
        generator.push(JSON.stringify(node.value), node);
        break;
      default:
        {
          throw new Error("unhandled codegen node type: ".concat(node.type));
        }
    }
  }
  // generate code from AST
  var generate = function generate(ast) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var mode = isString(options.mode) ? options.mode : 'normal';
    var filename = isString(options.filename) ? options.filename : 'message.intl';
    var sourceMap = !!options.sourceMap;
    // prettier-ignore
    var breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === 'arrow' ? ';' : '\n';
    var needIndent = options.needIndent ? options.needIndent : mode !== 'arrow';
    var helpers = ast.helpers || [];
    var generator = createCodeGenerator(ast, {
      mode: mode,
      filename: filename,
      sourceMap: sourceMap,
      breakLineCode: breakLineCode,
      needIndent: needIndent
    });
    generator.push(mode === 'normal' ? "function __msg__ (ctx) {" : "(ctx) => {");
    generator.indent(needIndent);
    if (helpers.length > 0) {
      generator.push("const { ".concat(helpers.map(function (s) {
        return "".concat(s, ": _").concat(s);
      }).join(', '), " } = ctx"));
      generator.newline();
    }
    generator.push("return ");
    generateNode(generator, ast);
    generator.deindent(needIndent);
    generator.push("}");
    var _generator$context = generator.context(),
      code = _generator$context.code,
      map = _generator$context.map;
    return {
      ast: ast,
      code: code,
      map: map ? map.toJSON() : undefined // eslint-disable-line @typescript-eslint/no-explicit-any
    };
  };

  function baseCompile(source) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var assignedOptions = assign({}, options);
    // parse source codes
    var parser = createParser(assignedOptions);
    var ast = parser.parse(source);
    // transform ASTs
    transform(ast, assignedOptions);
    // generate javascript codes
    return generate(ast, assignedOptions);
  }
  var pathStateMachine = [];
  pathStateMachine[0 /* BEFORE_PATH */] = (_pathStateMachine$ = {}, _defineProperty(_pathStateMachine$, "w" /* WORKSPACE */, [0 /* BEFORE_PATH */]), _defineProperty(_pathStateMachine$, "i" /* IDENT */, [3 /* IN_IDENT */, 0 /* APPEND */]), _defineProperty(_pathStateMachine$, "[" /* LEFT_BRACKET */, [4 /* IN_SUB_PATH */]), _defineProperty(_pathStateMachine$, "o" /* END_OF_FAIL */, [7 /* AFTER_PATH */]), _pathStateMachine$);
  pathStateMachine[1 /* IN_PATH */] = (_pathStateMachine$2 = {}, _defineProperty(_pathStateMachine$2, "w" /* WORKSPACE */, [1 /* IN_PATH */]), _defineProperty(_pathStateMachine$2, "." /* DOT */, [2 /* BEFORE_IDENT */]), _defineProperty(_pathStateMachine$2, "[" /* LEFT_BRACKET */, [4 /* IN_SUB_PATH */]), _defineProperty(_pathStateMachine$2, "o" /* END_OF_FAIL */, [7 /* AFTER_PATH */]), _pathStateMachine$2);
  pathStateMachine[2 /* BEFORE_IDENT */] = (_pathStateMachine$3 = {}, _defineProperty(_pathStateMachine$3, "w" /* WORKSPACE */, [2 /* BEFORE_IDENT */]), _defineProperty(_pathStateMachine$3, "i" /* IDENT */, [3 /* IN_IDENT */, 0 /* APPEND */]), _defineProperty(_pathStateMachine$3, "0" /* ZERO */, [3 /* IN_IDENT */, 0 /* APPEND */]), _pathStateMachine$3);
  pathStateMachine[3 /* IN_IDENT */] = (_pathStateMachine$4 = {}, _defineProperty(_pathStateMachine$4, "i" /* IDENT */, [3 /* IN_IDENT */, 0 /* APPEND */]), _defineProperty(_pathStateMachine$4, "0" /* ZERO */, [3 /* IN_IDENT */, 0 /* APPEND */]), _defineProperty(_pathStateMachine$4, "w" /* WORKSPACE */, [1 /* IN_PATH */, 1 /* PUSH */]), _defineProperty(_pathStateMachine$4, "." /* DOT */, [2 /* BEFORE_IDENT */, 1 /* PUSH */]), _defineProperty(_pathStateMachine$4, "[" /* LEFT_BRACKET */, [4 /* IN_SUB_PATH */, 1 /* PUSH */]), _defineProperty(_pathStateMachine$4, "o" /* END_OF_FAIL */, [7 /* AFTER_PATH */, 1 /* PUSH */]), _pathStateMachine$4);
  pathStateMachine[4 /* IN_SUB_PATH */] = (_pathStateMachine$5 = {}, _defineProperty(_pathStateMachine$5, "'" /* SINGLE_QUOTE */, [5 /* IN_SINGLE_QUOTE */, 0 /* APPEND */]), _defineProperty(_pathStateMachine$5, "\"" /* DOUBLE_QUOTE */, [6 /* IN_DOUBLE_QUOTE */, 0 /* APPEND */]), _defineProperty(_pathStateMachine$5, "[" /* LEFT_BRACKET */, [4 /* IN_SUB_PATH */, 2 /* INC_SUB_PATH_DEPTH */]), _defineProperty(_pathStateMachine$5, "]" /* RIGHT_BRACKET */, [1 /* IN_PATH */, 3 /* PUSH_SUB_PATH */]), _defineProperty(_pathStateMachine$5, "o" /* END_OF_FAIL */, 8), _defineProperty(_pathStateMachine$5, "l" /* ELSE */, [4 /* IN_SUB_PATH */, 0 /* APPEND */]), _pathStateMachine$5);
  pathStateMachine[5 /* IN_SINGLE_QUOTE */] = (_pathStateMachine$6 = {}, _defineProperty(_pathStateMachine$6, "'" /* SINGLE_QUOTE */, [4 /* IN_SUB_PATH */, 0 /* APPEND */]), _defineProperty(_pathStateMachine$6, "o" /* END_OF_FAIL */, 8), _defineProperty(_pathStateMachine$6, "l" /* ELSE */, [5 /* IN_SINGLE_QUOTE */, 0 /* APPEND */]), _pathStateMachine$6);
  pathStateMachine[6 /* IN_DOUBLE_QUOTE */] = (_pathStateMachine$7 = {}, _defineProperty(_pathStateMachine$7, "\"" /* DOUBLE_QUOTE */, [4 /* IN_SUB_PATH */, 0 /* APPEND */]), _defineProperty(_pathStateMachine$7, "o" /* END_OF_FAIL */, 8), _defineProperty(_pathStateMachine$7, "l" /* ELSE */, [6 /* IN_DOUBLE_QUOTE */, 0 /* APPEND */]), _pathStateMachine$7);
  /**
   * Check if an expression is a literal value.
   */
  var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function isLiteral(exp) {
    return literalValueRE.test(exp);
  }
  /**
   * Strip quotes from a string
   */
  function stripQuotes(str) {
    var a = str.charCodeAt(0);
    var b = str.charCodeAt(str.length - 1);
    return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
  }
  /**
   * Determine the type of a character in a keypath.
   */
  function getPathCharType(ch) {
    if (ch === undefined || ch === null) {
      return "o" /* END_OF_FAIL */;
    }

    var code = ch.charCodeAt(0);
    switch (code) {
      case 0x5b: // [
      case 0x5d: // ]
      case 0x2e: // .
      case 0x22: // "
      case 0x27:
        // '
        return ch;
      case 0x5f: // _
      case 0x24: // $
      case 0x2d:
        // -
        return "i" /* IDENT */;
      case 0x09: // Tab (HT)
      case 0x0a: // Newline (LF)
      case 0x0d: // Return (CR)
      case 0xa0: // No-break space (NBSP)
      case 0xfeff: // Byte Order Mark (BOM)
      case 0x2028: // Line Separator (LS)
      case 0x2029:
        // Paragraph Separator (PS)
        return "w" /* WORKSPACE */;
    }

    return "i" /* IDENT */;
  }
  /**
   * Format a subPath, return its plain form if it is
   * a literal string or number. Otherwise prepend the
   * dynamic indicator (*).
   */
  function formatSubPath(path) {
    var trimmed = path.trim();
    // invalid leading 0
    if (path.charAt(0) === '0' && isNaN(parseInt(path))) {
      return false;
    }
    return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" /* ASTARISK */ + trimmed;
  }
  /**
   * Parse a string path into an array of segments
   */
  function parse(path) {
    var keys = [];
    var index = -1;
    var mode = 0 /* BEFORE_PATH */;
    var subPathDepth = 0;
    var c;
    var key; // eslint-disable-line
    var newChar;
    var type;
    var transition;
    var action;
    var typeMap;
    var actions = [];
    actions[0 /* APPEND */] = function () {
      if (key === undefined) {
        key = newChar;
      } else {
        key += newChar;
      }
    };
    actions[1 /* PUSH */] = function () {
      if (key !== undefined) {
        keys.push(key);
        key = undefined;
      }
    };
    actions[2 /* INC_SUB_PATH_DEPTH */] = function () {
      actions[0 /* APPEND */]();
      subPathDepth++;
    };
    actions[3 /* PUSH_SUB_PATH */] = function () {
      if (subPathDepth > 0) {
        subPathDepth--;
        mode = 4 /* IN_SUB_PATH */;
        actions[0 /* APPEND */]();
      } else {
        subPathDepth = 0;
        if (key === undefined) {
          return false;
        }
        key = formatSubPath(key);
        if (key === false) {
          return false;
        } else {
          actions[1 /* PUSH */]();
        }
      }
    };

    function maybeUnescapeQuote() {
      var nextChar = path[index + 1];
      if (mode === 5 /* IN_SINGLE_QUOTE */ && nextChar === "'" /* SINGLE_QUOTE */ || mode === 6 /* IN_DOUBLE_QUOTE */ && nextChar === "\"" /* DOUBLE_QUOTE */) {
        index++;
        newChar = '\\' + nextChar;
        actions[0 /* APPEND */]();
        return true;
      }
    }
    while (mode !== null) {
      index++;
      c = path[index];
      if (c === '\\' && maybeUnescapeQuote()) {
        continue;
      }
      type = getPathCharType(c);
      typeMap = pathStateMachine[mode];
      transition = typeMap[type] || typeMap["l" /* ELSE */] || 8 /* ERROR */;
      // check parse error
      if (transition === 8 /* ERROR */) {
        return;
      }
      mode = transition[0];
      if (transition[1] !== undefined) {
        action = actions[transition[1]];
        if (action) {
          newChar = c;
          if (action() === false) {
            return;
          }
        }
      }
      // check parse finish
      if (mode === 7 /* AFTER_PATH */) {
        return keys;
      }
    }
  }
  // path token cache
  var cache = new Map();
  /**
   * key-value message resolver
   *
   * @remarks
   * Resolves messages with the key-value structure. Note that messages with a hierarchical structure such as objects cannot be resolved
   *
   * @param obj - A target object to be resolved with path
   * @param path - A {@link Path | path} to resolve the value of message
   *
   * @returns A resolved {@link PathValue | path value}
   *
   * @VueI18nGeneral
   */
  function resolveWithKeyValue(obj, path) {
    return isObject(obj) ? obj[path] : null;
  }
  /**
   * message resolver
   *
   * @remarks
   * Resolves messages. messages with a hierarchical structure such as objects can be resolved. This resolver is used in VueI18n as default.
   *
   * @param obj - A target object to be resolved with path
   * @param path - A {@link Path | path} to resolve the value of message
   *
   * @returns A resolved {@link PathValue | path value}
   *
   * @VueI18nGeneral
   */
  function resolveValue(obj, path) {
    // check object
    if (!isObject(obj)) {
      return null;
    }
    // parse path
    var hit = cache.get(path);
    if (!hit) {
      hit = parse(path);
      if (hit) {
        cache.set(path, hit);
      }
    }
    // check hit
    if (!hit) {
      return null;
    }
    // resolve path value
    var len = hit.length;
    var last = obj;
    var i = 0;
    while (i < len) {
      var val = last[hit[i]];
      if (val === undefined) {
        return null;
      }
      last = val;
      i++;
    }
    return last;
  }
  var DEFAULT_MODIFIER = function DEFAULT_MODIFIER(str) {
    return str;
  };
  var DEFAULT_MESSAGE = function DEFAULT_MESSAGE(ctx) {
    return '';
  }; // eslint-disable-line
  var DEFAULT_MESSAGE_DATA_TYPE = 'text';
  var DEFAULT_NORMALIZE = function DEFAULT_NORMALIZE(values) {
    return values.length === 0 ? '' : values.join('');
  };
  var DEFAULT_INTERPOLATE = toDisplayString;
  function pluralDefault(choice, choicesLength) {
    choice = Math.abs(choice);
    if (choicesLength === 2) {
      // prettier-ignore
      return choice ? choice > 1 ? 1 : 0 : 1;
    }
    return choice ? Math.min(choice, 2) : 0;
  }
  function getPluralIndex(options) {
    // prettier-ignore
    var index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
    // prettier-ignore
    return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index : index;
  }
  function normalizeNamed(pluralIndex, props) {
    if (!props.count) {
      props.count = pluralIndex;
    }
    if (!props.n) {
      props.n = pluralIndex;
    }
  }
  function createMessageContext() {
    var _ctx;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var locale = options.locale;
    var pluralIndex = getPluralIndex(options);
    var pluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
    var orgPluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? pluralDefault : undefined;
    var plural = function plural(messages) {
      return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
    };
    var _list = options.list || [];
    var list = function list(index) {
      return _list[index];
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var _named = options.named || {};
    isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
    var named = function named(key) {
      return _named[key];
    };
    // TODO: need to design resolve message function?
    function message(key) {
      // prettier-ignore
      var msg = isFunction(options.messages) ? options.messages(key) : isObject(options.messages) ? options.messages[key] : false;
      return !msg ? options.parent ? options.parent.message(key) // resolve from parent messages
      : DEFAULT_MESSAGE : msg;
    }
    var _modifier = function _modifier(name) {
      return options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
    };
    var normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
    var interpolate = isPlainObject(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
    var type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
    var ctx = (_ctx = {}, _defineProperty(_ctx, "list" /* LIST */, list), _defineProperty(_ctx, "named" /* NAMED */, named), _defineProperty(_ctx, "plural" /* PLURAL */, plural), _defineProperty(_ctx, "linked" /* LINKED */, function linked(key, modifier) {
      // TODO: should check `key`
      var msg = message(key)(ctx);
      return isString(modifier) ? _modifier(modifier)(msg) : msg;
    }), _defineProperty(_ctx, "message" /* MESSAGE */, message), _defineProperty(_ctx, "type" /* TYPE */, type), _defineProperty(_ctx, "interpolate" /* INTERPOLATE */, interpolate), _defineProperty(_ctx, "normalize" /* NORMALIZE */, normalize), _ctx);
    return ctx;
  }
  var IntlifyDevToolsHooks = {
    I18nInit: 'i18n:init',
    FunctionTranslate: 'function:translate'
  };
  var devtools = null;
  function setDevToolsHook(hook) {
    devtools = hook;
  }
  function initI18nDevTools(i18n, version, meta) {
    // TODO: queue if devtools is undefined
    devtools && devtools.emit(IntlifyDevToolsHooks.I18nInit, {
      timestamp: Date.now(),
      i18n: i18n,
      version: version,
      meta: meta
    });
  }
  var translateDevTools = /* #__PURE__*/createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
  function createDevToolsHook(hook) {
    return function (payloads) {
      return devtools && devtools.emit(hook, payloads);
    };
  }
  var CoreWarnCodes = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    __EXTEND_POINT__: 7
  };
  /** @internal */
  var warnMessages$1 = (_warnMessages$ = {}, _defineProperty(_warnMessages$, CoreWarnCodes.NOT_FOUND_KEY, "Not found '{key}' key in '{locale}' locale messages."), _defineProperty(_warnMessages$, CoreWarnCodes.FALLBACK_TO_TRANSLATE, "Fall back to translate '{key}' key with '{target}' locale."), _defineProperty(_warnMessages$, CoreWarnCodes.CANNOT_FORMAT_NUMBER, "Cannot format a number value due to not supported Intl.NumberFormat."), _defineProperty(_warnMessages$, CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT, "Fall back to number format '{key}' key with '{target}' locale."), _defineProperty(_warnMessages$, CoreWarnCodes.CANNOT_FORMAT_DATE, "Cannot format a date value due to not supported Intl.DateTimeFormat."), _defineProperty(_warnMessages$, CoreWarnCodes.FALLBACK_TO_DATE_FORMAT, "Fall back to datetime format '{key}' key with '{target}' locale."), _warnMessages$);
  function getWarnMessage$1(code) {
    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }
    return format.apply(void 0, [warnMessages$1[code]].concat(args));
  }

  /**
   * Fallback with simple implemenation
   *
   * @remarks
   * A fallback locale function implemented with a simple fallback algorithm.
   *
   * Basically, it returns the value as specified in the `fallbackLocale` props, and is processed with the fallback inside intlify.
   *
   * @param ctx - A {@link CoreContext | context}
   * @param fallback - A {@link FallbackLocale | fallback locale}
   * @param start - A starting {@link Locale | locale}
   *
   * @returns Fallback locales
   *
   * @VueI18nGeneral
   */
  function fallbackWithSimple(ctx, fallback, start // eslint-disable-line @typescript-eslint/no-unused-vars
  ) {
    // prettier-ignore
    return _toConsumableArray(new Set([start].concat(_toConsumableArray(isArray(fallback) ? fallback : isObject(fallback) ? Object.keys(fallback) : isString(fallback) ? [fallback] : [start]))));
  }
  /**
   * Fallback with locale chain
   *
   * @remarks
   * A fallback locale function implemented with a fallback chain algorithm. It's used in VueI18n as default.
   *
   * @param ctx - A {@link CoreContext | context}
   * @param fallback - A {@link FallbackLocale | fallback locale}
   * @param start - A starting {@link Locale | locale}
   *
   * @returns Fallback locales
   *
   * @VueI18nSee [Fallbacking](../guide/essentials/fallback)
   *
   * @VueI18nGeneral
   */
  function fallbackWithLocaleChain(ctx, fallback, start) {
    var startLocale = isString(start) ? start : DEFAULT_LOCALE;
    var context = ctx;
    if (!context.__localeChainCache) {
      context.__localeChainCache = new Map();
    }
    var chain = context.__localeChainCache.get(startLocale);
    if (!chain) {
      chain = [];
      // first block defined by start
      var block = [start];
      // while any intervening block found
      while (isArray(block)) {
        block = appendBlockToChain(chain, block, fallback);
      }
      // prettier-ignore
      // last block defined by default
      var defaults = isArray(fallback) || !isPlainObject(fallback) ? fallback : fallback['default'] ? fallback['default'] : null;
      // convert defaults to array
      block = isString(defaults) ? [defaults] : defaults;
      if (isArray(block)) {
        appendBlockToChain(chain, block, false);
      }
      context.__localeChainCache.set(startLocale, chain);
    }
    return chain;
  }
  function appendBlockToChain(chain, block, blocks) {
    var follow = true;
    for (var i = 0; i < block.length && isBoolean(follow); i++) {
      var locale = block[i];
      if (isString(locale)) {
        follow = appendLocaleToChain(chain, block[i], blocks);
      }
    }
    return follow;
  }
  function appendLocaleToChain(chain, locale, blocks) {
    var follow;
    var tokens = locale.split('-');
    do {
      var target = tokens.join('-');
      follow = appendItemToChain(chain, target, blocks);
      tokens.splice(-1, 1);
    } while (tokens.length && follow === true);
    return follow;
  }
  function appendItemToChain(chain, target, blocks) {
    var follow = false;
    if (!chain.includes(target)) {
      follow = true;
      if (target) {
        follow = target[target.length - 1] !== '!';
        var locale = target.replace(/!/g, '');
        chain.push(locale);
        if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale] // eslint-disable-line @typescript-eslint/no-explicit-any
        ) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          follow = blocks[locale];
        }
      }
    }
    return follow;
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  /**
   * Intlify core-base version
   * @internal
   */
  var VERSION$1 = '9.2.0-beta.17';
  var NOT_REOSLVED = -1;
  var DEFAULT_LOCALE = 'en-US';
  var MISSING_RESOLVE_VALUE = '';
  function getDefaultLinkedModifiers() {
    return {
      upper: function upper(val) {
        return isString(val) ? val.toUpperCase() : val;
      },
      lower: function lower(val) {
        return isString(val) ? val.toLowerCase() : val;
      },
      // prettier-ignore
      capitalize: function capitalize(val) {
        return isString(val) ? "".concat(val.charAt(0).toLocaleUpperCase()).concat(val.substr(1)) : val;
      }
    };
  }
  var _compiler;
  function registerMessageCompiler(compiler) {
    _compiler = compiler;
  }
  var _resolver;
  /**
   * Register the message resolver
   *
   * @param resolver - A {@link MessageResolver} function
   *
   * @VueI18nGeneral
   */
  function registerMessageResolver(resolver) {
    _resolver = resolver;
  }
  var _fallbacker;
  /**
   * Register the locale fallbacker
   *
   * @param fallbacker - A {@link LocaleFallbacker} function
   *
   * @VueI18nGeneral
   */
  function registerLocaleFallbacker(fallbacker) {
    _fallbacker = fallbacker;
  }
  // Additional Meta for Intlify DevTools
  var _additionalMeta = null;
  var setAdditionalMeta = function setAdditionalMeta(meta) {
    _additionalMeta = meta;
  };
  var getAdditionalMeta = function getAdditionalMeta() {
    return _additionalMeta;
  };
  // ID for CoreContext
  var _cid = 0;
  function createCoreContext() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // setup options
    var version = isString(options.version) ? options.version : VERSION$1;
    var locale = isString(options.locale) ? options.locale : DEFAULT_LOCALE;
    var fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
    var messages = isPlainObject(options.messages) ? options.messages : _defineProperty({}, locale, {});
    var datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : _defineProperty({}, locale, {});
    var numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : _defineProperty({}, locale, {});
    var modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
    var pluralRules = options.pluralRules || {};
    var missing = isFunction(options.missing) ? options.missing : null;
    var missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
    var fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
    var fallbackFormat = !!options.fallbackFormat;
    var unresolving = !!options.unresolving;
    var postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
    var processor = isPlainObject(options.processor) ? options.processor : null;
    var warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    var escapeParameter = !!options.escapeParameter;
    var messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
    var messageResolver = isFunction(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
    var localeFallbacker = isFunction(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
    var onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
    // setup internal options
    var internalOptions = options;
    var __datetimeFormatters = isObject(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : new Map();
    var __numberFormatters = isObject(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : new Map();
    var __meta = isObject(internalOptions.__meta) ? internalOptions.__meta : {};
    _cid++;
    var context = {
      version: version,
      cid: _cid,
      locale: locale,
      fallbackLocale: fallbackLocale,
      messages: messages,
      modifiers: modifiers,
      pluralRules: pluralRules,
      missing: missing,
      missingWarn: missingWarn,
      fallbackWarn: fallbackWarn,
      fallbackFormat: fallbackFormat,
      unresolving: unresolving,
      postTranslation: postTranslation,
      processor: processor,
      warnHtmlMessage: warnHtmlMessage,
      escapeParameter: escapeParameter,
      messageCompiler: messageCompiler,
      messageResolver: messageResolver,
      localeFallbacker: localeFallbacker,
      onWarn: onWarn,
      __meta: __meta
    };
    {
      context.datetimeFormats = datetimeFormats;
      context.numberFormats = numberFormats;
      context.__datetimeFormatters = __datetimeFormatters;
      context.__numberFormatters = __numberFormatters;
    }
    // for vue-devtools timeline event
    {
      context.__v_emitter = internalOptions.__v_emitter != null ? internalOptions.__v_emitter : undefined;
    }
    // NOTE: experimental !!
    {
      initI18nDevTools(context, version, __meta);
    }
    return context;
  }
  /** @internal */
  function isTranslateFallbackWarn(fallback, key) {
    return fallback instanceof RegExp ? fallback.test(key) : fallback;
  }
  /** @internal */
  function isTranslateMissingWarn(missing, key) {
    return missing instanceof RegExp ? missing.test(key) : missing;
  }
  /** @internal */
  function handleMissing(context, key, locale, missingWarn, type) {
    var missing = context.missing,
      onWarn = context.onWarn;
    // for vue-devtools timeline event
    {
      var emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("missing" /* MISSING */, {
          locale: locale,
          key: key,
          type: type,
          groupId: "".concat(type, ":").concat(key)
        });
      }
    }
    if (missing !== null) {
      var ret = missing(context, locale, key, type);
      return isString(ret) ? ret : key;
    } else {
      if (isTranslateMissingWarn(missingWarn, key)) {
        onWarn(getWarnMessage$1(CoreWarnCodes.NOT_FOUND_KEY, {
          key: key,
          locale: locale
        }));
      }
      return key;
    }
  }
  /** @internal */
  function updateFallbackLocale(ctx, locale, fallback) {
    var context = ctx;
    context.__localeChainCache = new Map();
    ctx.localeFallbacker(ctx, fallback, locale);
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */

  var RE_HTML_TAG = /<\/?[\w\s="/.':;#-\/]+>/;
  var WARN_MESSAGE = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
  function checkHtmlMessage(source, options) {
    var warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    if (warnHtmlMessage && RE_HTML_TAG.test(source)) {
      warn(format(WARN_MESSAGE, {
        source: source
      }));
    }
  }
  var defaultOnCacheKey = function defaultOnCacheKey(source) {
    return source;
  };
  var compileCache = Object.create(null);
  function compileToFunction(source) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    {
      // check HTML message
      checkHtmlMessage(source, options);
      // check caches
      var onCacheKey = options.onCacheKey || defaultOnCacheKey;
      var key = onCacheKey(source);
      var cached = compileCache[key];
      if (cached) {
        return cached;
      }
      // compile error detecting
      var occurred = false;
      var onError = options.onError || defaultOnError;
      options.onError = function (err) {
        occurred = true;
        onError(err);
      };
      // compile
      var _baseCompile = baseCompile(source, options),
        _code = _baseCompile.code;
      // evaluate function
      var msg = new Function("return ".concat(_code))();
      // if occurred compile error, don't cache
      return !occurred ? compileCache[key] = msg : msg;
    }
  }
  var code$2 = CompileErrorCodes.__EXTEND_POINT__;
  var inc$2 = function inc$2() {
    return code$2++;
  };
  var CoreErrorCodes = {
    INVALID_ARGUMENT: code$2,
    INVALID_DATE_ARGUMENT: inc$2(),
    INVALID_ISO_DATE_ARGUMENT: inc$2(),
    __EXTEND_POINT__: inc$2() // 18
  };

  function createCoreError(code) {
    return createCompileError(code, null, {
      messages: errorMessages$1
    });
  }
  /** @internal */
  var errorMessages$1 = (_errorMessages$2 = {}, _defineProperty(_errorMessages$2, CoreErrorCodes.INVALID_ARGUMENT, 'Invalid arguments'), _defineProperty(_errorMessages$2, CoreErrorCodes.INVALID_DATE_ARGUMENT, 'The date provided is an invalid Date object.' + 'Make sure your Date represents a valid date.'), _defineProperty(_errorMessages$2, CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT, 'The argument provided is not a valid ISO date string'), _errorMessages$2);
  var NOOP_MESSAGE_FUNCTION = function NOOP_MESSAGE_FUNCTION() {
    return '';
  };
  var isMessageFunction = function isMessageFunction(val) {
    return isFunction(val);
  };
  // implementation of `translate` function
  function translate(context) {
    var fallbackFormat = context.fallbackFormat,
      postTranslation = context.postTranslation,
      unresolving = context.unresolving,
      fallbackLocale = context.fallbackLocale,
      messages = context.messages;
    for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      args[_key5 - 1] = arguments[_key5];
    }
    var _parseTranslateArgs = parseTranslateArgs.apply(void 0, args),
      _parseTranslateArgs2 = _slicedToArray(_parseTranslateArgs, 2),
      key = _parseTranslateArgs2[0],
      options = _parseTranslateArgs2[1];
    var missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    var fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    var escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
    var resolvedMessage = !!options.resolvedMessage;
    // prettier-ignore
    var defaultMsgOrKey = isString(options["default"]) || isBoolean(options["default"]) // default by function option
    ? !isBoolean(options["default"]) ? options["default"] : key : fallbackFormat // default by `fallbackFormat` option
    ? key : '';
    var enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== '';
    var locale = isString(options.locale) ? options.locale : context.locale;
    // escape params
    escapeParameter && escapeParams(options);
    // resolve message format
    // eslint-disable-next-line prefer-const
    var _ref4 = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [key, locale, messages[locale] || {}],
      _ref5 = _slicedToArray(_ref4, 3),
      formatScope = _ref5[0],
      targetLocale = _ref5[1],
      message = _ref5[2];
    // NOTE:
    //  Fix to work around `ssrTransfrom` bug in Vite.
    //  https://github.com/vitejs/vite/issues/4306
    //  To get around this, use temporary variables.
    //  https://github.com/nuxt/framework/issues/1461#issuecomment-954606243
    var format = formatScope;
    // if you use default message, set it as message format!
    var cacheBaseKey = key;
    if (!resolvedMessage && !(isString(format) || isMessageFunction(format))) {
      if (enableDefaultMsg) {
        format = defaultMsgOrKey;
        cacheBaseKey = format;
      }
    }
    // checking message format and target locale
    if (!resolvedMessage && (!(isString(format) || isMessageFunction(format)) || !isString(targetLocale))) {
      return unresolving ? NOT_REOSLVED : key;
    }
    if (isString(format) && context.messageCompiler == null) {
      warn("The message format compilation is not supported in this build. " + "Because message compiler isn't included. " + "You need to pre-compilation all message format. " + "So translate function return '".concat(key, "'."));
      return key;
    }
    // setup compile error detecting
    var occurred = false;
    var errorDetector = function errorDetector() {
      occurred = true;
    };
    // compile message format
    var msg = !isMessageFunction(format) ? compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) : format;
    // if occurred compile error, return the message format
    if (occurred) {
      return format;
    }
    // evaluate message with context
    var ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
    var msgContext = createMessageContext(ctxOptions);
    var messaged = evaluateMessage(context, msg, msgContext);
    // if use post translation option, proceed it with handler
    var ret = postTranslation ? postTranslation(messaged) : messaged;
    // NOTE: experimental !!
    {
      // prettier-ignore
      var payloads = {
        timestamp: Date.now(),
        key: isString(key) ? key : isMessageFunction(format) ? format.key : '',
        locale: targetLocale || (isMessageFunction(format) ? format.locale : ''),
        format: isString(format) ? format : isMessageFunction(format) ? format.source : '',
        message: ret
      };
      payloads.meta = assign({}, context.__meta, getAdditionalMeta() || {});
      translateDevTools(payloads);
    }
    return ret;
  }
  function escapeParams(options) {
    if (isArray(options.list)) {
      options.list = options.list.map(function (item) {
        return isString(item) ? escapeHtml(item) : item;
      });
    } else if (isObject(options.named)) {
      Object.keys(options.named).forEach(function (key) {
        if (isString(options.named[key])) {
          options.named[key] = escapeHtml(options.named[key]);
        }
      });
    }
  }
  function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
    var messages = context.messages,
      onWarn = context.onWarn,
      resolveValue = context.messageResolver,
      localeFallbacker = context.localeFallbacker;
    var locales = localeFallbacker(context, fallbackLocale, locale); // eslint-disable-line @typescript-eslint/no-explicit-any
    var message = {};
    var targetLocale;
    var format = null;
    var from = locale;
    var to = null;
    var type = 'translate';
    for (var i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_TRANSLATE, {
          key: key,
          target: targetLocale
        }));
      }
      // for vue-devtools timeline event
      if (locale !== targetLocale) {
        var emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback" /* FALBACK */, {
            type: type,
            key: key,
            from: from,
            to: to,
            groupId: "".concat(type, ":").concat(key)
          });
        }
      }
      message = messages[targetLocale] || {};
      // for vue-devtools timeline event
      var start = null;
      var startTag = void 0;
      var endTag = void 0;
      if (inBrowser) {
        start = window.performance.now();
        startTag = 'intlify-message-resolve-start';
        endTag = 'intlify-message-resolve-end';
        mark && mark(startTag);
      }
      if ((format = resolveValue(message, key)) === null) {
        // if null, resolve with object key path
        format = message[key]; // eslint-disable-line @typescript-eslint/no-explicit-any
      }
      // for vue-devtools timeline event
      if (inBrowser) {
        var end = window.performance.now();
        var _emitter = context.__v_emitter;
        if (_emitter && start && format) {
          _emitter.emit("message-resolve" /* MESSAGE_RESOLVE */, {
            type: "message-resolve" /* MESSAGE_RESOLVE */,
            key: key,
            message: format,
            time: end - start,
            groupId: "".concat(type, ":").concat(key)
          });
        }
        if (startTag && endTag && mark && measure) {
          mark(endTag);
          measure('intlify message resolve', startTag, endTag);
        }
      }
      if (isString(format) || isFunction(format)) break;
      var missingRet = handleMissing(context,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      key, targetLocale, missingWarn, type);
      if (missingRet !== key) {
        format = missingRet;
      }
      from = to;
    }
    return [format, targetLocale, message];
  }
  function compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) {
    var messageCompiler = context.messageCompiler,
      warnHtmlMessage = context.warnHtmlMessage;
    if (isMessageFunction(format)) {
      var _msg = format;
      _msg.locale = _msg.locale || targetLocale;
      _msg.key = _msg.key || key;
      return _msg;
    }
    // for vue-devtools timeline event
    var start = null;
    var startTag;
    var endTag;
    if (inBrowser) {
      start = window.performance.now();
      startTag = 'intlify-message-compilation-start';
      endTag = 'intlify-message-compilation-end';
      mark && mark(startTag);
    }
    var msg = messageCompiler(format, getCompileOptions(context, targetLocale, cacheBaseKey, format, warnHtmlMessage, errorDetector));
    // for vue-devtools timeline event
    if (inBrowser) {
      var end = window.performance.now();
      var emitter = context.__v_emitter;
      if (emitter && start) {
        emitter.emit("message-compilation" /* MESSAGE_COMPILATION */, {
          type: "message-compilation" /* MESSAGE_COMPILATION */,
          message: format,
          time: end - start,
          groupId: 'translate'.concat(":", key)
        });
      }
      if (startTag && endTag && mark && measure) {
        mark(endTag);
        measure('intlify message compilation', startTag, endTag);
      }
    }
    msg.locale = targetLocale;
    msg.key = key;
    msg.source = format;
    return msg;
  }
  function evaluateMessage(context, msg, msgCtx) {
    // for vue-devtools timeline event
    var start = null;
    var startTag;
    var endTag;
    if (inBrowser) {
      start = window.performance.now();
      startTag = 'intlify-message-evaluation-start';
      endTag = 'intlify-message-evaluation-end';
      mark && mark(startTag);
    }
    var messaged = msg(msgCtx);
    // for vue-devtools timeline event
    if (inBrowser) {
      var end = window.performance.now();
      var emitter = context.__v_emitter;
      if (emitter && start) {
        emitter.emit("message-evaluation" /* MESSAGE_EVALUATION */, {
          type: "message-evaluation" /* MESSAGE_EVALUATION */,
          value: messaged,
          time: end - start,
          groupId: 'translate'.concat(":", msg.key)
        });
      }
      if (startTag && endTag && mark && measure) {
        mark(endTag);
        measure('intlify message evaluation', startTag, endTag);
      }
    }
    return messaged;
  }
  /** @internal */
  function parseTranslateArgs() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    var arg1 = args[0],
      arg2 = args[1],
      arg3 = args[2];
    var options = {};
    if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1)) {
      throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    // prettier-ignore
    var key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
    if (isNumber(arg2)) {
      options.plural = arg2;
    } else if (isString(arg2)) {
      options["default"] = arg2;
    } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
      options.named = arg2;
    } else if (isArray(arg2)) {
      options.list = arg2;
    }
    if (isNumber(arg3)) {
      options.plural = arg3;
    } else if (isString(arg3)) {
      options["default"] = arg3;
    } else if (isPlainObject(arg3)) {
      assign(options, arg3);
    }
    return [key, options];
  }
  function getCompileOptions(context, locale, key, source, warnHtmlMessage, errorDetector) {
    return {
      warnHtmlMessage: warnHtmlMessage,
      onError: function onError(err) {
        errorDetector && errorDetector(err);
        {
          var message = "Message compilation error: ".concat(err.message);
          var codeFrame = err.location && generateCodeFrame(source, err.location.start.offset, err.location.end.offset);
          var emitter = context.__v_emitter;
          if (emitter) {
            emitter.emit("compile-error" /* COMPILE_ERROR */, {
              message: source,
              error: err.message,
              start: err.location && err.location.start.offset,
              end: err.location && err.location.end.offset,
              groupId: 'translate'.concat(":", key)
            });
          }
          console.error(codeFrame ? "".concat(message, "\n").concat(codeFrame) : message);
        }
      },
      onCacheKey: function onCacheKey(source) {
        return generateFormatCacheKey(locale, key, source);
      }
    };
  }
  function getMessageContextOptions(context, locale, message, options) {
    var modifiers = context.modifiers,
      pluralRules = context.pluralRules,
      resolveValue = context.messageResolver;
    var resolveMessage = function resolveMessage(key) {
      var val = resolveValue(message, key);
      if (isString(val)) {
        var occurred = false;
        var errorDetector = function errorDetector() {
          occurred = true;
        };
        var msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
        return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
      } else if (isMessageFunction(val)) {
        return val;
      } else {
        // TODO: should be implemented warning message
        return NOOP_MESSAGE_FUNCTION;
      }
    };
    var ctxOptions = {
      locale: locale,
      modifiers: modifiers,
      pluralRules: pluralRules,
      messages: resolveMessage
    };
    if (context.processor) {
      ctxOptions.processor = context.processor;
    }
    if (options.list) {
      ctxOptions.list = options.list;
    }
    if (options.named) {
      ctxOptions.named = options.named;
    }
    if (isNumber(options.plural)) {
      ctxOptions.pluralIndex = options.plural;
    }
    return ctxOptions;
  }
  var intlDefined = typeof Intl !== 'undefined';
  var Availabilities = {
    dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== 'undefined',
    numberFormat: intlDefined && typeof Intl.NumberFormat !== 'undefined'
  };

  // implementation of `datetime` function
  function datetime(context) {
    var datetimeFormats = context.datetimeFormats,
      unresolving = context.unresolving,
      fallbackLocale = context.fallbackLocale,
      onWarn = context.onWarn,
      localeFallbacker = context.localeFallbacker;
    var __datetimeFormatters = context.__datetimeFormatters;
    if (!Availabilities.dateTimeFormat) {
      onWarn(getWarnMessage$1(CoreWarnCodes.CANNOT_FORMAT_DATE));
      return MISSING_RESOLVE_VALUE;
    }
    for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
      args[_key7 - 1] = arguments[_key7];
    }
    var _parseDateTimeArgs = parseDateTimeArgs.apply(void 0, args),
      _parseDateTimeArgs2 = _slicedToArray(_parseDateTimeArgs, 4),
      key = _parseDateTimeArgs2[0],
      value = _parseDateTimeArgs2[1],
      options = _parseDateTimeArgs2[2],
      overrides = _parseDateTimeArgs2[3];
    var missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    var fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    var part = !!options.part;
    var locale = isString(options.locale) ? options.locale : context.locale;
    var locales = localeFallbacker(context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale, locale);
    if (!isString(key) || key === '') {
      return new Intl.DateTimeFormat(locale).format(value);
    }
    // resolve format
    var datetimeFormat = {};
    var targetLocale;
    var format = null;
    var from = locale;
    var to = null;
    var type = 'datetime format';
    for (var i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_DATE_FORMAT, {
          key: key,
          target: targetLocale
        }));
      }
      // for vue-devtools timeline event
      if (locale !== targetLocale) {
        var emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback" /* FALBACK */, {
            type: type,
            key: key,
            from: from,
            to: to,
            groupId: "".concat(type, ":").concat(key)
          });
        }
      }
      datetimeFormat = datetimeFormats[targetLocale] || {};
      format = datetimeFormat[key];
      if (isPlainObject(format)) break;
      handleMissing(context, key, targetLocale, missingWarn, type); // eslint-disable-line @typescript-eslint/no-explicit-any
      from = to;
    }
    // checking format and target locale
    if (!isPlainObject(format) || !isString(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    var id = "".concat(targetLocale, "__").concat(key);
    if (!isEmptyObject(overrides)) {
      id = "".concat(id, "__").concat(JSON.stringify(overrides));
    }
    var formatter = __datetimeFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format, overrides));
      __datetimeFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  /** @internal */
  function parseDateTimeArgs() {
    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }
    var arg1 = args[0],
      arg2 = args[1],
      arg3 = args[2],
      arg4 = args[3];
    var options = {};
    var overrides = {};
    var value;
    if (isString(arg1)) {
      // Only allow ISO strings - other date formats are often supported,
      // but may cause different results in different browsers.
      var matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
      if (!matches) {
        throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
      }
      // Some browsers can not parse the iso datetime separated by space,
      // this is a compromise solution by replace the 'T'/' ' with 'T'
      var dateTime = matches[3] ? matches[3].trim().startsWith('T') ? "".concat(matches[1].trim()).concat(matches[3].trim()) : "".concat(matches[1].trim(), "T").concat(matches[3].trim()) : matches[1].trim();
      value = new Date(dateTime);
      try {
        // This will fail if the date is not valid
        value.toISOString();
      } catch (e) {
        throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
      }
    } else if (isDate(arg1)) {
      if (isNaN(arg1.getTime())) {
        throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
      }
      value = arg1;
    } else if (isNumber(arg1)) {
      value = arg1;
    } else {
      throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    if (isString(arg2)) {
      options.key = arg2;
    } else if (isPlainObject(arg2)) {
      options = arg2;
    }
    if (isString(arg3)) {
      options.locale = arg3;
    } else if (isPlainObject(arg3)) {
      overrides = arg3;
    }
    if (isPlainObject(arg4)) {
      overrides = arg4;
    }
    return [options.key || '', value, options, overrides];
  }
  /** @internal */
  function clearDateTimeFormat(ctx, locale, format) {
    var context = ctx;
    for (var key in format) {
      var id = "".concat(locale, "__").concat(key);
      if (!context.__datetimeFormatters.has(id)) {
        continue;
      }
      context.__datetimeFormatters["delete"](id);
    }
  }

  // implementation of `number` function
  function number(context) {
    var numberFormats = context.numberFormats,
      unresolving = context.unresolving,
      fallbackLocale = context.fallbackLocale,
      onWarn = context.onWarn,
      localeFallbacker = context.localeFallbacker;
    var __numberFormatters = context.__numberFormatters;
    if (!Availabilities.numberFormat) {
      onWarn(getWarnMessage$1(CoreWarnCodes.CANNOT_FORMAT_NUMBER));
      return MISSING_RESOLVE_VALUE;
    }
    for (var _len9 = arguments.length, args = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
      args[_key9 - 1] = arguments[_key9];
    }
    var _parseNumberArgs = parseNumberArgs.apply(void 0, args),
      _parseNumberArgs2 = _slicedToArray(_parseNumberArgs, 4),
      key = _parseNumberArgs2[0],
      value = _parseNumberArgs2[1],
      options = _parseNumberArgs2[2],
      overrides = _parseNumberArgs2[3];
    var missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    var fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    var part = !!options.part;
    var locale = isString(options.locale) ? options.locale : context.locale;
    var locales = localeFallbacker(context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale, locale);
    if (!isString(key) || key === '') {
      return new Intl.NumberFormat(locale).format(value);
    }
    // resolve format
    var numberFormat = {};
    var targetLocale;
    var format = null;
    var from = locale;
    var to = null;
    var type = 'number format';
    for (var i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT, {
          key: key,
          target: targetLocale
        }));
      }
      // for vue-devtools timeline event
      if (locale !== targetLocale) {
        var emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback" /* FALBACK */, {
            type: type,
            key: key,
            from: from,
            to: to,
            groupId: "".concat(type, ":").concat(key)
          });
        }
      }
      numberFormat = numberFormats[targetLocale] || {};
      format = numberFormat[key];
      if (isPlainObject(format)) break;
      handleMissing(context, key, targetLocale, missingWarn, type); // eslint-disable-line @typescript-eslint/no-explicit-any
      from = to;
    }
    // checking format and target locale
    if (!isPlainObject(format) || !isString(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    var id = "".concat(targetLocale, "__").concat(key);
    if (!isEmptyObject(overrides)) {
      id = "".concat(id, "__").concat(JSON.stringify(overrides));
    }
    var formatter = __numberFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.NumberFormat(targetLocale, assign({}, format, overrides));
      __numberFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  /** @internal */
  function parseNumberArgs() {
    for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      args[_key10] = arguments[_key10];
    }
    var arg1 = args[0],
      arg2 = args[1],
      arg3 = args[2],
      arg4 = args[3];
    var options = {};
    var overrides = {};
    if (!isNumber(arg1)) {
      throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    var value = arg1;
    if (isString(arg2)) {
      options.key = arg2;
    } else if (isPlainObject(arg2)) {
      options = arg2;
    }
    if (isString(arg3)) {
      options.locale = arg3;
    } else if (isPlainObject(arg3)) {
      overrides = arg3;
    }
    if (isPlainObject(arg4)) {
      overrides = arg4;
    }
    return [options.key || '', value, options, overrides];
  }
  /** @internal */
  function clearNumberFormat(ctx, locale, format) {
    var context = ctx;
    for (var key in format) {
      var id = "".concat(locale, "__").concat(key);
      if (!context.__numberFormatters.has(id)) {
        continue;
      }
      context.__numberFormatters["delete"](id);
    }
  }

  /**
   * Vue I18n Version
   *
   * @remarks
   * Semver format. Same format as the package.json `version` field.
   *
   * @VueI18nGeneral
   */
  var VERSION = '9.2.0-beta.17';
  /**
   * This is only called development env
   * istanbul-ignore-next
   */
  function initDev() {
    {
      {
        console.info("You are running a development build of vue-i18n.\n" + "Make sure to use the production build (*.prod.js) when deploying for production.");
      }
    }
  }
  var code$1 = CoreWarnCodes.__EXTEND_POINT__;
  var inc$1 = function inc$1() {
    return code$1++;
  };
  var I18nWarnCodes = {
    FALLBACK_TO_ROOT: code$1,
    NOT_SUPPORTED_PRESERVE: inc$1(),
    NOT_SUPPORTED_FORMATTER: inc$1(),
    NOT_SUPPORTED_PRESERVE_DIRECTIVE: inc$1(),
    NOT_SUPPORTED_GET_CHOICE_INDEX: inc$1(),
    COMPONENT_NAME_LEGACY_COMPATIBLE: inc$1(),
    NOT_FOUND_PARENT_SCOPE: inc$1(),
    NOT_SUPPORT_MULTI_I18N_INSTANCE: inc$1() // 14
  };

  var warnMessages = (_warnMessages = {}, _defineProperty(_warnMessages, I18nWarnCodes.FALLBACK_TO_ROOT, "Fall back to {type} '{key}' with root locale."), _defineProperty(_warnMessages, I18nWarnCodes.NOT_SUPPORTED_PRESERVE, "Not supported 'preserve'."), _defineProperty(_warnMessages, I18nWarnCodes.NOT_SUPPORTED_FORMATTER, "Not supported 'formatter'."), _defineProperty(_warnMessages, I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE, "Not supported 'preserveDirectiveContent'."), _defineProperty(_warnMessages, I18nWarnCodes.NOT_SUPPORTED_GET_CHOICE_INDEX, "Not supported 'getChoiceIndex'."), _defineProperty(_warnMessages, I18nWarnCodes.COMPONENT_NAME_LEGACY_COMPATIBLE, "Component name legacy compatible: '{name}' -> 'i18n'"), _defineProperty(_warnMessages, I18nWarnCodes.NOT_FOUND_PARENT_SCOPE, "Not found parent scope. use the global scope."), _defineProperty(_warnMessages, I18nWarnCodes.NOT_SUPPORT_MULTI_I18N_INSTANCE, "Not support multi i18n instance."), _warnMessages);
  function getWarnMessage(code) {
    for (var _len11 = arguments.length, args = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
      args[_key11 - 1] = arguments[_key11];
    }
    return format.apply(void 0, [warnMessages[code]].concat(args));
  }
  var code = CompileErrorCodes.__EXTEND_POINT__;
  var inc = function inc() {
    return code++;
  };
  var I18nErrorCodes = {
    // composer module errors
    UNEXPECTED_RETURN_TYPE: code,
    // legacy module errors
    INVALID_ARGUMENT: inc(),
    // i18n module errors
    MUST_BE_CALL_SETUP_TOP: inc(),
    NOT_INSLALLED: inc(),
    NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
    // directive module errors
    REQUIRED_VALUE: inc(),
    INVALID_VALUE: inc(),
    // vue-devtools errors
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
    NOT_INSLALLED_WITH_PROVIDE: inc(),
    // unexpected error
    UNEXPECTED_ERROR: inc(),
    // not compatible legacy vue-i18n constructor
    NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
    // bridge support vue 2.x only
    BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
    // for enhancement
    __EXTEND_POINT__: inc() // 27
  };

  function createI18nError(code) {
    for (var _len12 = arguments.length, args = new Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
      args[_key12 - 1] = arguments[_key12];
    }
    return createCompileError(code, null, {
      messages: errorMessages,
      args: args
    });
  }
  var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, I18nErrorCodes.UNEXPECTED_RETURN_TYPE, 'Unexpected return type in composer'), _defineProperty(_errorMessages, I18nErrorCodes.INVALID_ARGUMENT, 'Invalid argument'), _defineProperty(_errorMessages, I18nErrorCodes.MUST_BE_CALL_SETUP_TOP, 'Must be called at the top of a `setup` function'), _defineProperty(_errorMessages, I18nErrorCodes.NOT_INSLALLED, 'Need to install with `app.use` function'), _defineProperty(_errorMessages, I18nErrorCodes.UNEXPECTED_ERROR, 'Unexpected error'), _defineProperty(_errorMessages, I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE, 'Not available in legacy mode'), _defineProperty(_errorMessages, I18nErrorCodes.REQUIRED_VALUE, "Required in value: {0}"), _defineProperty(_errorMessages, I18nErrorCodes.INVALID_VALUE, "Invalid value"), _defineProperty(_errorMessages, I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN, "Cannot setup vue-devtools plugin"), _defineProperty(_errorMessages, I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE, 'Need to install with `provide` function'), _defineProperty(_errorMessages, I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N, 'Not compatible legacy VueI18n.'), _defineProperty(_errorMessages, I18nErrorCodes.BRIDGE_SUPPORT_VUE_2_ONLY, 'vue-i18n-bridge support Vue 2.x only'), _errorMessages);
  var TransrateVNodeSymbol = /* #__PURE__*/makeSymbol('__transrateVNode');
  var DatetimePartsSymbol = /* #__PURE__*/makeSymbol('__datetimeParts');
  var NumberPartsSymbol = /* #__PURE__*/makeSymbol('__numberParts');
  var EnableEmitter = /* #__PURE__*/makeSymbol('__enableEmitter');
  var DisableEmitter = /* #__PURE__*/makeSymbol('__disableEmitter');
  var SetPluralRulesSymbol = makeSymbol('__setPluralRules');
  var InejctWithOption = /* #__PURE__*/makeSymbol('__injectWithOption');

  /* eslint-disable @typescript-eslint/no-explicit-any */
  /**
   * Transform flat json in obj to normal json in obj
   */
  function handleFlatJson(obj) {
    // check obj
    if (!isObject(obj)) {
      return obj;
    }
    for (var key in obj) {
      // check key
      if (!hasOwn(obj, key)) {
        continue;
      }
      // handle for normal json
      if (!key.includes('.')) {
        // recursive process value if value is also a object
        if (isObject(obj[key])) {
          handleFlatJson(obj[key]);
        }
      }
      // handle for flat json, transform to normal json
      else {
        // go to the last object
        var subKeys = key.split('.');
        var lastIndex = subKeys.length - 1;
        var currentObj = obj;
        for (var i = 0; i < lastIndex; i++) {
          if (!(subKeys[i] in currentObj)) {
            currentObj[subKeys[i]] = {};
          }
          currentObj = currentObj[subKeys[i]];
        }
        // update last object value, delete old property
        currentObj[subKeys[lastIndex]] = obj[key];
        delete obj[key];
        // recursive process value if value is also a object
        if (isObject(currentObj[subKeys[lastIndex]])) {
          handleFlatJson(currentObj[subKeys[lastIndex]]);
        }
      }
    }
    return obj;
  }
  function getLocaleMessages(locale, options) {
    var messages = options.messages,
      __i18n = options.__i18n,
      messageResolver = options.messageResolver,
      flatJson = options.flatJson;
    // prettier-ignore
    var ret = isPlainObject(messages) ? messages : isArray(__i18n) ? {} : _defineProperty({}, locale, {});
    // merge locale messages of i18n custom block
    if (isArray(__i18n)) {
      __i18n.forEach(function (custom) {
        if ('locale' in custom && 'resource' in custom) {
          var _locale2 = custom.locale,
            resource = custom.resource;
          if (_locale2) {
            ret[_locale2] = ret[_locale2] || {};
            deepCopy(resource, ret[_locale2]);
          } else {
            deepCopy(resource, ret);
          }
        } else {
          isString(custom) && deepCopy(JSON.parse(custom), ret);
        }
      });
    }
    // handle messages for flat json
    if (messageResolver == null && flatJson) {
      for (var key in ret) {
        if (hasOwn(ret, key)) {
          handleFlatJson(ret[key]);
        }
      }
    }
    return ret;
  }
  var isNotObjectOrIsArray = function isNotObjectOrIsArray(val) {
    return !isObject(val) || isArray(val);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  function deepCopy(src, des) {
    // src and des should both be objects, and non of then can be a array
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
      throw createI18nError(I18nErrorCodes.INVALID_VALUE);
    }
    for (var key in src) {
      if (hasOwn(src, key)) {
        if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
          // replace with src[key] when:
          // src[key] or des[key] is not a object, or
          // src[key] or des[key] is a array
          des[key] = src[key];
        } else {
          // src[key] and des[key] are both object, merge them
          deepCopy(src[key], des[key]);
        }
      }
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getComponentOptions(instance) {
    return instance.type;
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */

  /* eslint-disable @typescript-eslint/no-explicit-any */
  var DEVTOOLS_META = '__INTLIFY_META__';
  var composerID = 0;
  function defineCoreMissingHandler(missing) {
    return function (ctx, locale, key, type) {
      return missing(locale, key, vue.getCurrentInstance() || undefined, type);
    };
  }
  // for Intlify DevTools
  var getMetaInfo = function getMetaInfo() {
    var instance = vue.getCurrentInstance();
    var meta = null; // eslint-disable-line @typescript-eslint/no-explicit-any
    return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? _defineProperty({}, DEVTOOLS_META, meta) // eslint-disable-line @typescript-eslint/no-explicit-any
    : null;
  };
  /**
   * Create composer interface factory
   *
   * @internal
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  function createComposer() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var VueI18nLegacy = arguments.length > 1 ? arguments[1] : undefined;
    var __root = options.__root;
    var _isGlobal = __root === undefined;
    var _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
    var _locale = vue.ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE);
    var _fallbackLocale = vue.ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value);
    var _messages = vue.ref(getLocaleMessages(_locale.value, options));
    // prettier-ignore
    var _datetimeFormats = vue.ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : _defineProperty({}, _locale.value, {}));
    // prettier-ignore
    var _numberFormats = vue.ref(isPlainObject(options.numberFormats) ? options.numberFormats : _defineProperty({}, _locale.value, {}));
    // warning suppress options
    // prettier-ignore
    var _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
    // prettier-ignore
    var _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
    // prettier-ignore
    var _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
    // configure fall back to root
    var _fallbackFormat = !!options.fallbackFormat;
    // runtime missing
    var _missing = isFunction(options.missing) ? options.missing : null;
    var _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
    // postTranslation handler
    var _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
    var _warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    var _escapeParameter = !!options.escapeParameter;
    // custom linked modifiers
    // prettier-ignore
    var _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
    // pluralRules
    var _pluralRules = options.pluralRules || __root && __root.pluralRules;
    // runtime context
    // eslint-disable-next-line prefer-const
    var _context;
    function getCoreContext() {
      var ctxOptions = {
        version: VERSION,
        locale: _locale.value,
        fallbackLocale: _fallbackLocale.value,
        messages: _messages.value,
        modifiers: _modifiers,
        pluralRules: _pluralRules,
        missing: _runtimeMissing === null ? undefined : _runtimeMissing,
        missingWarn: _missingWarn,
        fallbackWarn: _fallbackWarn,
        fallbackFormat: _fallbackFormat,
        unresolving: true,
        postTranslation: _postTranslation === null ? undefined : _postTranslation,
        warnHtmlMessage: _warnHtmlMessage,
        escapeParameter: _escapeParameter,
        messageResolver: options.messageResolver,
        __meta: {
          framework: 'vue'
        }
      };
      {
        ctxOptions.datetimeFormats = _datetimeFormats.value;
        ctxOptions.numberFormats = _numberFormats.value;
        ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : undefined;
        ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : undefined;
      }
      {
        ctxOptions.__v_emitter = isPlainObject(_context) ? _context.__v_emitter : undefined;
      }
      return createCoreContext(ctxOptions);
    }
    _context = getCoreContext();
    updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
    // track reactivity
    function trackReactivityValues() {
      return [_locale.value, _fallbackLocale.value, _messages.value, _datetimeFormats.value, _numberFormats.value];
    }
    // locale
    var locale = vue.computed({
      get: function get() {
        return _locale.value;
      },
      set: function set(val) {
        _locale.value = val;
        _context.locale = _locale.value;
      }
    });
    // fallbackLocale
    var fallbackLocale = vue.computed({
      get: function get() {
        return _fallbackLocale.value;
      },
      set: function set(val) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = _fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, val);
      }
    });
    // messages
    var messages = vue.computed(function () {
      return _messages.value;
    });
    // datetimeFormats
    var datetimeFormats = /* #__PURE__*/vue.computed(function () {
      return _datetimeFormats.value;
    });
    // numberFormats
    var numberFormats = /* #__PURE__*/vue.computed(function () {
      return _numberFormats.value;
    });
    // getPostTranslationHandler
    function getPostTranslationHandler() {
      return isFunction(_postTranslation) ? _postTranslation : null;
    }
    // setPostTranslationHandler
    function setPostTranslationHandler(handler) {
      _postTranslation = handler;
      _context.postTranslation = handler;
    }
    // getMissingHandler
    function getMissingHandler() {
      return _missing;
    }
    // setMissingHandler
    function setMissingHandler(handler) {
      if (handler !== null) {
        _runtimeMissing = defineCoreMissingHandler(handler);
      }
      _missing = handler;
      _context.missing = _runtimeMissing;
    }
    function isResolvedTranslateMessage(type, arg // eslint-disable-line @typescript-eslint/no-explicit-any
    ) {
      return type !== 'translate' || !arg.resolvedMessage;
    }
    function wrapWithDeps(fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) {
      trackReactivityValues(); // track reactive dependency
      // NOTE: experimental !!
      var ret;
      {
        try {
          setAdditionalMeta(getMetaInfo());
          ret = fn(_context);
        } finally {
          setAdditionalMeta(null);
        }
      }
      if (isNumber(ret) && ret === NOT_REOSLVED) {
        var _argumentParser = argumentParser(),
          _argumentParser2 = _slicedToArray(_argumentParser, 2),
          key = _argumentParser2[0],
          arg2 = _argumentParser2[1];
        if (__root && isString(key) && isResolvedTranslateMessage(warnType, arg2)) {
          if (_fallbackRoot && (isTranslateFallbackWarn(_fallbackWarn, key) || isTranslateMissingWarn(_missingWarn, key))) {
            warn(getWarnMessage(I18nWarnCodes.FALLBACK_TO_ROOT, {
              key: key,
              type: warnType
            }));
          }
          // for vue-devtools timeline event
          {
            var _context2 = _context,
              emitter = _context2.__v_emitter;
            if (emitter && _fallbackRoot) {
              emitter.emit("fallback" /* FALBACK */, {
                type: warnType,
                key: key,
                to: 'global',
                groupId: "".concat(warnType, ":").concat(key)
              });
            }
          }
        }
        return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
      } else if (successCondition(ret)) {
        return ret;
      } else {
        /* istanbul ignore next */
        throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
      }
    }
    // t
    function t() {
      for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        args[_key13] = arguments[_key13];
      }
      return wrapWithDeps(function (context) {
        return Reflect.apply(translate, null, [context].concat(args));
      }, function () {
        return parseTranslateArgs.apply(void 0, args);
      }, 'translate', function (root) {
        return Reflect.apply(root.t, root, [].concat(args));
      }, function (key) {
        return key;
      }, function (val) {
        return isString(val);
      });
    }
    // rt
    function rt() {
      for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        args[_key14] = arguments[_key14];
      }
      var arg1 = args[0],
        arg2 = args[1],
        arg3 = args[2];
      if (arg3 && !isObject(arg3)) {
        throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
      }
      return t.apply(void 0, [arg1, arg2, assign({
        resolvedMessage: true
      }, arg3 || {})]);
    }
    // d
    function d() {
      for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
        args[_key15] = arguments[_key15];
      }
      return wrapWithDeps(function (context) {
        return Reflect.apply(datetime, null, [context].concat(args));
      }, function () {
        return parseDateTimeArgs.apply(void 0, args);
      }, 'datetime format', function (root) {
        return Reflect.apply(root.d, root, [].concat(args));
      }, function () {
        return MISSING_RESOLVE_VALUE;
      }, function (val) {
        return isString(val);
      });
    }
    // n
    function n() {
      for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
        args[_key16] = arguments[_key16];
      }
      return wrapWithDeps(function (context) {
        return Reflect.apply(number, null, [context].concat(args));
      }, function () {
        return parseNumberArgs.apply(void 0, args);
      }, 'number format', function (root) {
        return Reflect.apply(root.n, root, [].concat(args));
      }, function () {
        return MISSING_RESOLVE_VALUE;
      }, function (val) {
        return isString(val);
      });
    }
    // for custom processor
    function normalize(values) {
      return values.map(function (val) {
        return isString(val) ? vue.createVNode(vue.Text, null, val, 0) : val;
      });
    }
    var interpolate = function interpolate(val) {
      return val;
    };
    var processor = {
      normalize: normalize,
      interpolate: interpolate,
      type: 'vnode'
    };
    // transrateVNode, using for `i18n-t` component
    function transrateVNode() {
      for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
        args[_key17] = arguments[_key17];
      }
      return wrapWithDeps(function (context) {
        var ret;
        var _context = context;
        try {
          _context.processor = processor;
          ret = Reflect.apply(translate, null, [_context].concat(args));
        } finally {
          _context.processor = null;
        }
        return ret;
      }, function () {
        return parseTranslateArgs.apply(void 0, args);
      }, 'translate',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function (root) {
        return root[TransrateVNodeSymbol].apply(root, args);
      }, function (key) {
        return [vue.createVNode(vue.Text, null, key, 0)];
      }, function (val) {
        return isArray(val);
      });
    }
    // numberParts, using for `i18n-n` component
    function numberParts() {
      for (var _len18 = arguments.length, args = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
        args[_key18] = arguments[_key18];
      }
      return wrapWithDeps(function (context) {
        return Reflect.apply(number, null, [context].concat(args));
      }, function () {
        return parseNumberArgs.apply(void 0, args);
      }, 'number format',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function (root) {
        return root[NumberPartsSymbol].apply(root, args);
      }, function () {
        return [];
      }, function (val) {
        return isString(val) || isArray(val);
      });
    }
    // datetimeParts, using for `i18n-d` component
    function datetimeParts() {
      for (var _len19 = arguments.length, args = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
        args[_key19] = arguments[_key19];
      }
      return wrapWithDeps(function (context) {
        return Reflect.apply(datetime, null, [context].concat(args));
      }, function () {
        return parseDateTimeArgs.apply(void 0, args);
      }, 'datetime format',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function (root) {
        return root[DatetimePartsSymbol].apply(root, args);
      }, function () {
        return [];
      }, function (val) {
        return isString(val) || isArray(val);
      });
    }
    function setPluralRules(rules) {
      _pluralRules = rules;
      _context.pluralRules = _pluralRules;
    }
    // te
    function te(key, locale) {
      var targetLocale = isString(locale) ? locale : _locale.value;
      var message = getLocaleMessage(targetLocale);
      return _context.messageResolver(message, key) !== null;
    }
    function resolveMessages(key) {
      var messages = null;
      var locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
      for (var i = 0; i < locales.length; i++) {
        var targetLocaleMessages = _messages.value[locales[i]] || {};
        var messageValue = _context.messageResolver(targetLocaleMessages, key);
        if (messageValue != null) {
          messages = messageValue;
          break;
        }
      }
      return messages;
    }
    // tm
    function tm(key) {
      var messages = resolveMessages(key);
      // prettier-ignore
      return messages != null ? messages : __root ? __root.tm(key) || {} : {};
    }
    // getLocaleMessage
    function getLocaleMessage(locale) {
      return _messages.value[locale] || {};
    }
    // setLocaleMessage
    function setLocaleMessage(locale, message) {
      _messages.value[locale] = message;
      _context.messages = _messages.value;
    }
    // mergeLocaleMessage
    function mergeLocaleMessage(locale, message) {
      _messages.value[locale] = _messages.value[locale] || {};
      deepCopy(message, _messages.value[locale]);
      _context.messages = _messages.value;
    }
    // getDateTimeFormat
    function getDateTimeFormat(locale) {
      return _datetimeFormats.value[locale] || {};
    }
    // setDateTimeFormat
    function setDateTimeFormat(locale, format) {
      _datetimeFormats.value[locale] = format;
      _context.datetimeFormats = _datetimeFormats.value;
      clearDateTimeFormat(_context, locale, format);
    }
    // mergeDateTimeFormat
    function mergeDateTimeFormat(locale, format) {
      _datetimeFormats.value[locale] = assign(_datetimeFormats.value[locale] || {}, format);
      _context.datetimeFormats = _datetimeFormats.value;
      clearDateTimeFormat(_context, locale, format);
    }
    // getNumberFormat
    function getNumberFormat(locale) {
      return _numberFormats.value[locale] || {};
    }
    // setNumberFormat
    function setNumberFormat(locale, format) {
      _numberFormats.value[locale] = format;
      _context.numberFormats = _numberFormats.value;
      clearNumberFormat(_context, locale, format);
    }
    // mergeNumberFormat
    function mergeNumberFormat(locale, format) {
      _numberFormats.value[locale] = assign(_numberFormats.value[locale] || {}, format);
      _context.numberFormats = _numberFormats.value;
      clearNumberFormat(_context, locale, format);
    }
    // for debug
    composerID++;
    // watch root locale & fallbackLocale
    if (__root) {
      vue.watch(__root.locale, function (val) {
        if (_inheritLocale) {
          _locale.value = val;
          _context.locale = val;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      });
      vue.watch(__root.fallbackLocale, function (val) {
        if (_inheritLocale) {
          _fallbackLocale.value = val;
          _context.fallbackLocale = val;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      });
    }
    // define basic composition API!
    var composer = _defineProperty({
      id: composerID,
      locale: locale,
      fallbackLocale: fallbackLocale,
      get inheritLocale() {
        return _inheritLocale;
      },
      set inheritLocale(val) {
        _inheritLocale = val;
        if (val && __root) {
          _locale.value = __root.locale.value;
          _fallbackLocale.value = __root.fallbackLocale.value;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      },
      get availableLocales() {
        return Object.keys(_messages.value).sort();
      },
      messages: messages,
      get modifiers() {
        return _modifiers;
      },
      get pluralRules() {
        return _pluralRules || {};
      },
      get isGlobal() {
        return _isGlobal;
      },
      get missingWarn() {
        return _missingWarn;
      },
      set missingWarn(val) {
        _missingWarn = val;
        _context.missingWarn = _missingWarn;
      },
      get fallbackWarn() {
        return _fallbackWarn;
      },
      set fallbackWarn(val) {
        _fallbackWarn = val;
        _context.fallbackWarn = _fallbackWarn;
      },
      get fallbackRoot() {
        return _fallbackRoot;
      },
      set fallbackRoot(val) {
        _fallbackRoot = val;
      },
      get fallbackFormat() {
        return _fallbackFormat;
      },
      set fallbackFormat(val) {
        _fallbackFormat = val;
        _context.fallbackFormat = _fallbackFormat;
      },
      get warnHtmlMessage() {
        return _warnHtmlMessage;
      },
      set warnHtmlMessage(val) {
        _warnHtmlMessage = val;
        _context.warnHtmlMessage = val;
      },
      get escapeParameter() {
        return _escapeParameter;
      },
      set escapeParameter(val) {
        _escapeParameter = val;
        _context.escapeParameter = val;
      },
      t: t,
      getLocaleMessage: getLocaleMessage,
      setLocaleMessage: setLocaleMessage,
      mergeLocaleMessage: mergeLocaleMessage,
      getPostTranslationHandler: getPostTranslationHandler,
      setPostTranslationHandler: setPostTranslationHandler,
      getMissingHandler: getMissingHandler,
      setMissingHandler: setMissingHandler
    }, SetPluralRulesSymbol, setPluralRules);
    {
      composer.datetimeFormats = datetimeFormats;
      composer.numberFormats = numberFormats;
      composer.rt = rt;
      composer.te = te;
      composer.tm = tm;
      composer.d = d;
      composer.n = n;
      composer.getDateTimeFormat = getDateTimeFormat;
      composer.setDateTimeFormat = setDateTimeFormat;
      composer.mergeDateTimeFormat = mergeDateTimeFormat;
      composer.getNumberFormat = getNumberFormat;
      composer.setNumberFormat = setNumberFormat;
      composer.mergeNumberFormat = mergeNumberFormat;
      composer[InejctWithOption] = options.__injectWithOption;
      {
        composer[TransrateVNodeSymbol] = transrateVNode;
        composer[NumberPartsSymbol] = numberParts;
        composer[DatetimePartsSymbol] = datetimeParts;
      }
    }
    // for vue-devtools timeline event
    {
      composer[EnableEmitter] = function (emitter) {
        _context.__v_emitter = emitter;
      };
      composer[DisableEmitter] = function () {
        _context.__v_emitter = undefined;
      };
    }
    return composer;
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */

  /* eslint-disable @typescript-eslint/no-explicit-any */
  /**
   * Convert to I18n Composer Options from VueI18n Options
   *
   * @internal
   */
  function convertComposerOptions(options) {
    var locale = isString(options.locale) ? options.locale : DEFAULT_LOCALE;
    var fallbackLocale = isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
    var missing = isFunction(options.missing) ? options.missing : undefined;
    var missingWarn = isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
    var fallbackWarn = isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
    var fallbackRoot = isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
    var fallbackFormat = !!options.formatFallbackMessages;
    var modifiers = isPlainObject(options.modifiers) ? options.modifiers : {};
    var pluralizationRules = options.pluralizationRules;
    var postTranslation = isFunction(options.postTranslation) ? options.postTranslation : undefined;
    var warnHtmlMessage = isString(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== 'off' : true;
    var escapeParameter = !!options.escapeParameterHtml;
    var inheritLocale = isBoolean(options.sync) ? options.sync : true;
    if (options.formatter) {
      warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_FORMATTER));
    }
    if (options.preserveDirectiveContent) {
      warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
    }
    var messages = options.messages;
    if (isPlainObject(options.sharedMessages)) {
      var sharedMessages = options.sharedMessages;
      var locales = Object.keys(sharedMessages);
      messages = locales.reduce(function (messages, locale) {
        var message = messages[locale] || (messages[locale] = {});
        assign(message, sharedMessages[locale]);
        return messages;
      }, messages || {});
    }
    var __i18n = options.__i18n,
      __root = options.__root,
      __injectWithOption = options.__injectWithOption;
    var datetimeFormats = options.datetimeFormats;
    var numberFormats = options.numberFormats;
    var flatJson = options.flatJson;
    return {
      locale: locale,
      fallbackLocale: fallbackLocale,
      messages: messages,
      flatJson: flatJson,
      datetimeFormats: datetimeFormats,
      numberFormats: numberFormats,
      missing: missing,
      missingWarn: missingWarn,
      fallbackWarn: fallbackWarn,
      fallbackRoot: fallbackRoot,
      fallbackFormat: fallbackFormat,
      modifiers: modifiers,
      pluralRules: pluralizationRules,
      postTranslation: postTranslation,
      warnHtmlMessage: warnHtmlMessage,
      escapeParameter: escapeParameter,
      messageResolver: options.messageResolver,
      inheritLocale: inheritLocale,
      __i18n: __i18n,
      __root: __root,
      __injectWithOption: __injectWithOption
    };
  }
  /**
   * create VueI18n interface factory
   *
   * @internal
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  function createVueI18n() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var VueI18nLegacy = arguments.length > 1 ? arguments[1] : undefined;
    {
      var composer = createComposer(convertComposerOptions(options));
      // defines VueI18n
      var vueI18n = {
        // id
        id: composer.id,
        // locale
        get locale() {
          return composer.locale.value;
        },
        set locale(val) {
          composer.locale.value = val;
        },
        // fallbackLocale
        get fallbackLocale() {
          return composer.fallbackLocale.value;
        },
        set fallbackLocale(val) {
          composer.fallbackLocale.value = val;
        },
        // messages
        get messages() {
          return composer.messages.value;
        },
        // datetimeFormats
        get datetimeFormats() {
          return composer.datetimeFormats.value;
        },
        // numberFormats
        get numberFormats() {
          return composer.numberFormats.value;
        },
        // availableLocales
        get availableLocales() {
          return composer.availableLocales;
        },
        // formatter
        get formatter() {
          warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_FORMATTER));
          // dummy
          return {
            interpolate: function interpolate() {
              return [];
            }
          };
        },
        set formatter(val) {
          warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_FORMATTER));
        },
        // missing
        get missing() {
          return composer.getMissingHandler();
        },
        set missing(handler) {
          composer.setMissingHandler(handler);
        },
        // silentTranslationWarn
        get silentTranslationWarn() {
          return isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
        },
        set silentTranslationWarn(val) {
          composer.missingWarn = isBoolean(val) ? !val : val;
        },
        // silentFallbackWarn
        get silentFallbackWarn() {
          return isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
        },
        set silentFallbackWarn(val) {
          composer.fallbackWarn = isBoolean(val) ? !val : val;
        },
        // modifiers
        get modifiers() {
          return composer.modifiers;
        },
        // formatFallbackMessages
        get formatFallbackMessages() {
          return composer.fallbackFormat;
        },
        set formatFallbackMessages(val) {
          composer.fallbackFormat = val;
        },
        // postTranslation
        get postTranslation() {
          return composer.getPostTranslationHandler();
        },
        set postTranslation(handler) {
          composer.setPostTranslationHandler(handler);
        },
        // sync
        get sync() {
          return composer.inheritLocale;
        },
        set sync(val) {
          composer.inheritLocale = val;
        },
        // warnInHtmlMessage
        get warnHtmlInMessage() {
          return composer.warnHtmlMessage ? 'warn' : 'off';
        },
        set warnHtmlInMessage(val) {
          composer.warnHtmlMessage = val !== 'off';
        },
        // escapeParameterHtml
        get escapeParameterHtml() {
          return composer.escapeParameter;
        },
        set escapeParameterHtml(val) {
          composer.escapeParameter = val;
        },
        // preserveDirectiveContent
        get preserveDirectiveContent() {
          warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
          return true;
        },
        set preserveDirectiveContent(val) {
          warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
        },
        // pluralizationRules
        get pluralizationRules() {
          return composer.pluralRules || {};
        },
        // for internal
        __composer: composer,
        // t
        t: function t() {
          for (var _len20 = arguments.length, args = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
            args[_key20] = arguments[_key20];
          }
          var arg1 = args[0],
            arg2 = args[1],
            arg3 = args[2];
          var options = {};
          var list = null;
          var named = null;
          if (!isString(arg1)) {
            throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
          }
          var key = arg1;
          if (isString(arg2)) {
            options.locale = arg2;
          } else if (isArray(arg2)) {
            list = arg2;
          } else if (isPlainObject(arg2)) {
            named = arg2;
          }
          if (isArray(arg3)) {
            list = arg3;
          } else if (isPlainObject(arg3)) {
            named = arg3;
          }
          // return composer.t(key, (list || named || {}) as any, options)
          return Reflect.apply(composer.t, composer, [key, list || named || {}, options]);
        },
        rt: function rt() {
          for (var _len21 = arguments.length, args = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
            args[_key21] = arguments[_key21];
          }
          return Reflect.apply(composer.rt, composer, [].concat(args));
        },
        // tc
        tc: function tc() {
          for (var _len22 = arguments.length, args = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
            args[_key22] = arguments[_key22];
          }
          var arg1 = args[0],
            arg2 = args[1],
            arg3 = args[2];
          var options = {
            plural: 1
          };
          var list = null;
          var named = null;
          if (!isString(arg1)) {
            throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
          }
          var key = arg1;
          if (isString(arg2)) {
            options.locale = arg2;
          } else if (isNumber(arg2)) {
            options.plural = arg2;
          } else if (isArray(arg2)) {
            list = arg2;
          } else if (isPlainObject(arg2)) {
            named = arg2;
          }
          if (isString(arg3)) {
            options.locale = arg3;
          } else if (isArray(arg3)) {
            list = arg3;
          } else if (isPlainObject(arg3)) {
            named = arg3;
          }
          // return composer.t(key, (list || named || {}) as any, options)
          return Reflect.apply(composer.t, composer, [key, list || named || {}, options]);
        },
        // te
        te: function te(key, locale) {
          return composer.te(key, locale);
        },
        // tm
        tm: function tm(key) {
          return composer.tm(key);
        },
        // getLocaleMessage
        getLocaleMessage: function getLocaleMessage(locale) {
          return composer.getLocaleMessage(locale);
        },
        // setLocaleMessage
        setLocaleMessage: function setLocaleMessage(locale, message) {
          composer.setLocaleMessage(locale, message);
        },
        // mergeLocaleMessage
        mergeLocaleMessage: function mergeLocaleMessage(locale, message) {
          composer.mergeLocaleMessage(locale, message);
        },
        // d
        d: function d() {
          for (var _len23 = arguments.length, args = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
            args[_key23] = arguments[_key23];
          }
          return Reflect.apply(composer.d, composer, [].concat(args));
        },
        // getDateTimeFormat
        getDateTimeFormat: function getDateTimeFormat(locale) {
          return composer.getDateTimeFormat(locale);
        },
        // setDateTimeFormat
        setDateTimeFormat: function setDateTimeFormat(locale, format) {
          composer.setDateTimeFormat(locale, format);
        },
        // mergeDateTimeFormat
        mergeDateTimeFormat: function mergeDateTimeFormat(locale, format) {
          composer.mergeDateTimeFormat(locale, format);
        },
        // n
        n: function n() {
          for (var _len24 = arguments.length, args = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
            args[_key24] = arguments[_key24];
          }
          return Reflect.apply(composer.n, composer, [].concat(args));
        },
        // getNumberFormat
        getNumberFormat: function getNumberFormat(locale) {
          return composer.getNumberFormat(locale);
        },
        // setNumberFormat
        setNumberFormat: function setNumberFormat(locale, format) {
          composer.setNumberFormat(locale, format);
        },
        // mergeNumberFormat
        mergeNumberFormat: function mergeNumberFormat(locale, format) {
          composer.mergeNumberFormat(locale, format);
        },
        // getChoiceIndex
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        getChoiceIndex: function getChoiceIndex(choice, choicesLength) {
          warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_GET_CHOICE_INDEX));
          return -1;
        },
        // for internal
        __onComponentInstanceCreated: function __onComponentInstanceCreated(target) {
          var componentInstanceCreatedListener = options.componentInstanceCreatedListener;
          if (componentInstanceCreatedListener) {
            componentInstanceCreatedListener(target, vueI18n);
          }
        }
      };
      // for vue-devtools timeline event
      {
        vueI18n.__enableEmitter = function (emitter) {
          var __composer = composer;
          __composer[EnableEmitter] && __composer[EnableEmitter](emitter);
        };
        vueI18n.__disableEmitter = function () {
          var __composer = composer;
          __composer[DisableEmitter] && __composer[DisableEmitter]();
        };
      }
      return vueI18n;
    }
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */

  var baseFormatProps = {
    tag: {
      type: [String, Object]
    },
    locale: {
      type: String
    },
    scope: {
      type: String,
      // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
      validator: function validator(val /* ComponetI18nScope */) {
        return val === 'parent' || val === 'global';
      },
      "default": 'parent' /* ComponetI18nScope */
    },

    i18n: {
      type: Object
    }
  };

  /**
   * Translation Component
   *
   * @remarks
   * See the following items for property about details
   *
   * @VueI18nSee [TranslationProps](component#translationprops)
   * @VueI18nSee [BaseFormatProps](component#baseformatprops)
   * @VueI18nSee [Component Interpolation](../guide/advanced/component)
   *
   * @example
   * ```html
   * <div id="app">
   *   <!-- ... -->
   *   <i18n path="term" tag="label" for="tos">
   *     <a :href="url" target="_blank">{{ $t('tos') }}</a>
   *   </i18n>
   *   <!-- ... -->
   * </div>
   * ```
   * ```js
   * import { createApp } from 'vue'
   * import { createI18n } from 'vue-i18n'
   *
   * const messages = {
   *   en: {
   *     tos: 'Term of Service',
   *     term: 'I accept xxx {0}.'
   *   },
   *   ja: {
   *     tos: '利用規約',
   *     term: '私は xxx の{0}に同意します。'
   *   }
   * }
   *
   * const i18n = createI18n({
   *   locale: 'en',
   *   messages
   * })
   *
   * const app = createApp({
   *   data: {
   *     url: '/term'
   *   }
   * }).use(i18n).mount('#app')
   * ```
   *
   * @VueI18nComponent
   */
  var Translation = /* #__PURE__*/vue.defineComponent({
    /* eslint-disable */
    name: 'i18n-t',
    props: assign({
      keypath: {
        type: String,
        required: true
      },
      plural: {
        type: [Number, String],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        validator: function validator(val) {
          return isNumber(val) || !isNaN(val);
        }
      }
    }, baseFormatProps),
    /* eslint-enable */setup: function setup(props, context) {
      var slots = context.slots,
        attrs = context.attrs;
      // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
      var i18n = props.i18n || useI18n({
        useScope: props.scope,
        __useComponent: true
      });
      var keys = Object.keys(slots).filter(function (key) {
        return key !== '_';
      });
      return function () {
        var options = {};
        if (props.locale) {
          options.locale = props.locale;
        }
        if (props.plural !== undefined) {
          options.plural = isString(props.plural) ? +props.plural : props.plural;
        }
        var arg = getInterpolateArg(context, keys);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var children = i18n[TransrateVNodeSymbol](props.keypath, arg, options);
        var assignedAttrs = assign({}, attrs);
        var tag = isString(props.tag) || isObject(props.tag) ? props.tag : vue.Fragment;
        return vue.h(tag, assignedAttrs, children);
      };
    }
  });
  function getInterpolateArg(_ref10, keys) {
    var slots = _ref10.slots;
    if (keys.length === 1 && keys[0] === 'default') {
      // default slot only
      return slots["default"] ? slots["default"]() : [];
    } else {
      // named slots
      return keys.reduce(function (arg, key) {
        var slot = slots[key];
        if (slot) {
          arg[key] = slot();
        }
        return arg;
      }, {});
    }
  }
  function renderFormatter(props, context, slotKeys, partFormatter) {
    var slots = context.slots,
      attrs = context.attrs;
    return function () {
      var options = {
        part: true
      };
      var overrides = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (isString(props.format)) {
        options.key = props.format;
      } else if (isObject(props.format)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (isString(props.format.key)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          options.key = props.format.key;
        }
        // Filter out number format options only
        overrides = Object.keys(props.format).reduce(function (options, prop) {
          return slotKeys.includes(prop) ? assign({}, options, _defineProperty({}, prop, props.format[prop])) // eslint-disable-line @typescript-eslint/no-explicit-any
          : options;
        }, {});
      }
      var parts = partFormatter.apply(void 0, [props.value, options, overrides]);
      var children = [options.key];
      if (isArray(parts)) {
        children = parts.map(function (part, index) {
          var _slot;
          var slot = slots[part.type];
          return slot ? slot((_slot = {}, _defineProperty(_slot, part.type, part.value), _defineProperty(_slot, "index", index), _defineProperty(_slot, "parts", parts), _slot)) : [part.value];
        });
      } else if (isString(parts)) {
        children = [parts];
      }
      var assignedAttrs = assign({}, attrs);
      var tag = isString(props.tag) || isObject(props.tag) ? props.tag : vue.Fragment;
      return vue.h(tag, assignedAttrs, children);
    };
  }
  var NUMBER_FORMAT_KEYS = ['localeMatcher', 'style', 'unit', 'unitDisplay', 'currency', 'currencyDisplay', 'useGrouping', 'numberingSystem', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'notation', 'formatMatcher'];
  /**
   * Number Format Component
   *
   * @remarks
   * See the following items for property about details
   *
   * @VueI18nSee [FormattableProps](component#formattableprops)
   * @VueI18nSee [BaseFormatProps](component#baseformatprops)
   * @VueI18nSee [Custom Formatting](../guide/essentials/number#custom-formatting)
   *
   * @VueI18nDanger
   * Not supported IE, due to no support `Intl.NumberFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts)
   *
   * If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-numberformat)
   *
   * @VueI18nComponent
   */
  var NumberFormat = /* #__PURE__*/vue.defineComponent({
    /* eslint-disable */
    name: 'i18n-n',
    props: assign({
      value: {
        type: Number,
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    /* eslint-enable */setup: function setup(props, context) {
      var i18n = props.i18n || useI18n({
        useScope: 'parent',
        __useComponent: true
      });
      return renderFormatter(props, context, NUMBER_FORMAT_KEYS, function () {
        return (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          i18n[NumberPartsSymbol].apply(i18n, arguments)
        );
      });
    }
  });
  var DATETIME_FORMAT_KEYS = ['dateStyle', 'timeStyle', 'fractionalSecondDigits', 'calendar', 'dayPeriod', 'numberingSystem', 'localeMatcher', 'timeZone', 'hour12', 'hourCycle', 'formatMatcher', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName'];
  /**
   * Datetime Format Component
   *
   * @remarks
   * See the following items for property about details
   *
   * @VueI18nSee [FormattableProps](component#formattableprops)
   * @VueI18nSee [BaseFormatProps](component#baseformatprops)
   * @VueI18nSee [Custom Formatting](../guide/essentials/datetime#custom-formatting)
   *
   * @VueI18nDanger
   * Not supported IE, due to no support `Intl.DateTimeFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts)
   *
   * If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-datetimeformat)
   *
   * @VueI18nComponent
   */
  var DatetimeFormat = /* #__PURE__*/vue.defineComponent({
    /* eslint-disable */
    name: 'i18n-d',
    props: assign({
      value: {
        type: [Number, Date],
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    /* eslint-enable */setup: function setup(props, context) {
      var i18n = props.i18n || useI18n({
        useScope: 'parent',
        __useComponent: true
      });
      return renderFormatter(props, context, DATETIME_FORMAT_KEYS, function () {
        return (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          i18n[DatetimePartsSymbol].apply(i18n, arguments)
        );
      });
    }
  });
  function getComposer$2(i18n, instance) {
    var i18nInternal = i18n;
    if (i18n.mode === 'composition') {
      return i18nInternal.__getInstance(instance) || i18n.global;
    } else {
      var vueI18n = i18nInternal.__getInstance(instance);
      return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
    }
  }
  function vTDirective(i18n) {
    var bind = function bind(el, _ref11) {
      var instance = _ref11.instance,
        value = _ref11.value,
        modifiers = _ref11.modifiers;
      /* istanbul ignore if */
      if (!instance || !instance.$) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      var composer = getComposer$2(i18n, instance.$);
      if (modifiers.preserve) {
        warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE));
      }
      var parsedValue = parseValue(value);
      // el.textContent = composer.t(...makeParams(parsedValue))
      el.textContent = Reflect.apply(composer.t, composer, _toConsumableArray(makeParams(parsedValue)));
    };
    return {
      beforeMount: bind,
      beforeUpdate: bind
    };
  }
  function parseValue(value) {
    if (isString(value)) {
      return {
        path: value
      };
    } else if (isPlainObject(value)) {
      if (!('path' in value)) {
        throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, 'path');
      }
      return value;
    } else {
      throw createI18nError(I18nErrorCodes.INVALID_VALUE);
    }
  }
  function makeParams(value) {
    var path = value.path,
      locale = value.locale,
      args = value.args,
      choice = value.choice,
      plural = value.plural;
    var options = {};
    var named = args || {};
    if (isString(locale)) {
      options.locale = locale;
    }
    if (isNumber(choice)) {
      options.plural = choice;
    }
    if (isNumber(plural)) {
      options.plural = plural;
    }
    return [path, named, options];
  }
  function apply(app, i18n) {
    var pluginOptions = isPlainObject(arguments.length <= 2 ? undefined : arguments[2]) ? arguments.length <= 2 ? undefined : arguments[2] : {};
    var useI18nComponentName = !!pluginOptions.useI18nComponentName;
    var globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
    if (globalInstall && useI18nComponentName) {
      warn(getWarnMessage(I18nWarnCodes.COMPONENT_NAME_LEGACY_COMPATIBLE, {
        name: Translation.name
      }));
    }
    if (globalInstall) {
      // install components
      app.component(!useI18nComponentName ? Translation.name : 'i18n', Translation);
      app.component(NumberFormat.name, NumberFormat);
      app.component(DatetimeFormat.name, DatetimeFormat);
    }
    // install directive
    {
      app.directive('t', vTDirective(i18n));
    }
  }
  var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    // @ts-ignore
    return typeof navigator !== 'undefined' && typeof window !== 'undefined' ? window : typeof global$1 !== 'undefined' ? global$1 : {};
  }
  var isProxyAvailable = typeof Proxy === 'function';
  var HOOK_SETUP = 'devtools-plugin:setup';
  var HOOK_PLUGIN_SETTINGS_SET = 'plugin:settings:set';
  var ApiProxy = /*#__PURE__*/function () {
    function ApiProxy(plugin, hook) {
      var _this = this;
      _classCallCheck(this, ApiProxy);
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      var defaultSettings = {};
      if (plugin.settings) {
        for (var id in plugin.settings) {
          var item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      var localSettingsSaveId = "__vue-devtools-plugin-settings__".concat(plugin.id);
      var currentSettings = _objectSpread({}, defaultSettings);
      try {
        var raw = localStorage.getItem(localSettingsSaveId);
        var data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
        // noop
      }
      this.fallbacks = {
        getSettings: function getSettings() {
          return currentSettings;
        },
        setSettings: function setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
            // noop
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, function (pluginId, value) {
        if (pluginId === _this.plugin.id) {
          _this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: function get(_target, prop) {
          if (_this.target) {
            return _this.target.on[prop];
          } else {
            return function () {
              for (var _len25 = arguments.length, args = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
                args[_key25] = arguments[_key25];
              }
              _this.onQueue.push({
                method: prop,
                args: args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: function get(_target, prop) {
          if (_this.target) {
            return _this.target[prop];
          } else if (prop === 'on') {
            return _this.proxiedOn;
          } else if (Object.keys(_this.fallbacks).includes(prop)) {
            return function () {
              var _this$fallbacks;
              for (var _len26 = arguments.length, args = new Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
                args[_key26] = arguments[_key26];
              }
              _this.targetQueue.push({
                method: prop,
                args: args,
                resolve: function resolve() {}
              });
              return (_this$fallbacks = _this.fallbacks)[prop].apply(_this$fallbacks, args);
            };
          } else {
            return function () {
              for (var _len27 = arguments.length, args = new Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
                args[_key27] = arguments[_key27];
              }
              return new Promise(function (resolve) {
                _this.targetQueue.push({
                  method: prop,
                  args: args,
                  resolve: resolve
                });
              });
            };
          }
        }
      });
    }
    _createClass(ApiProxy, [{
      key: "setRealTarget",
      value: function () {
        var _setRealTarget = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(target) {
          var _iterator, _step, _this$target$on, item, _iterator2, _step2, _this$target, _item;
          return _regeneratorRuntime().wrap(function _callee$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.target = target;
                  _iterator = _createForOfIteratorHelper(this.onQueue);
                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      item = _step.value;
                      (_this$target$on = this.target.on)[item.method].apply(_this$target$on, _toConsumableArray(item.args));
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                  _iterator2 = _createForOfIteratorHelper(this.targetQueue);
                  _context3.prev = 4;
                  _iterator2.s();
                case 6:
                  if ((_step2 = _iterator2.n()).done) {
                    _context3.next = 15;
                    break;
                  }
                  _item = _step2.value;
                  _context3.t0 = _item;
                  _context3.next = 11;
                  return (_this$target = this.target)[_item.method].apply(_this$target, _toConsumableArray(_item.args));
                case 11:
                  _context3.t1 = _context3.sent;
                  _context3.t0.resolve.call(_context3.t0, _context3.t1);
                case 13:
                  _context3.next = 6;
                  break;
                case 15:
                  _context3.next = 20;
                  break;
                case 17:
                  _context3.prev = 17;
                  _context3.t2 = _context3["catch"](4);
                  _iterator2.e(_context3.t2);
                case 20:
                  _context3.prev = 20;
                  _iterator2.f();
                  return _context3.finish(20);
                case 23:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee, this, [[4, 17, 20, 23]]);
        }));
        function setRealTarget(_x2) {
          return _setRealTarget.apply(this, arguments);
        }
        return setRealTarget;
      }()
    }]);
    return ApiProxy;
  }();
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    var target = getTarget();
    var hook = getDevtoolsGlobalHook();
    var enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      var proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      var list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: pluginDescriptor,
        setupFn: setupFn,
        proxy: proxy
      });
      if (proxy) setupFn(proxy.proxiedTarget);
    }
  }
  var VueDevToolsLabels = (_VueDevToolsLabels = {}, _defineProperty(_VueDevToolsLabels, "vue-devtools-plugin-vue-i18n" /* PLUGIN */, 'Vue I18n devtools'), _defineProperty(_VueDevToolsLabels, "vue-i18n-resource-inspector" /* CUSTOM_INSPECTOR */, 'I18n Resources'), _defineProperty(_VueDevToolsLabels, "vue-i18n-timeline" /* TIMELINE */, 'Vue I18n'), _VueDevToolsLabels);
  var VueDevToolsPlaceholders = _defineProperty({}, "vue-i18n-resource-inspector" /* CUSTOM_INSPECTOR */, 'Search for scopes ...');
  var VueDevToolsTimelineColors = _defineProperty({}, "vue-i18n-timeline" /* TIMELINE */, 0xffcd19);
  var VUE_I18N_COMPONENT_TYPES = 'vue-i18n: composer properties';
  var devtoolsApi;
  function enableDevTools(_x3, _x4) {
    return _enableDevTools.apply(this, arguments);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function _enableDevTools() {
    _enableDevTools = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(app, i18n) {
      return _regeneratorRuntime().wrap(function _callee4$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", new Promise(function (resolve, reject) {
                try {
                  setupDevtoolsPlugin({
                    id: "vue-devtools-plugin-vue-i18n" /* PLUGIN */,
                    label: VueDevToolsLabels["vue-devtools-plugin-vue-i18n" /* PLUGIN */],
                    packageName: 'vue-i18n',
                    homepage: 'https://vue-i18n.intlify.dev',
                    logo: 'https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png',
                    componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
                    app: app
                  }, function (api) {
                    devtoolsApi = api;
                    api.on.visitComponentTree(function (_ref12) {
                      var componentInstance = _ref12.componentInstance,
                        treeNode = _ref12.treeNode;
                      updateComponentTreeTags(componentInstance, treeNode, i18n);
                    });
                    api.on.inspectComponent(function (_ref13) {
                      var componentInstance = _ref13.componentInstance,
                        instanceData = _ref13.instanceData;
                      if (componentInstance.vnode.el && componentInstance.vnode.el.__VUE_I18N__ && instanceData) {
                        if (i18n.mode === 'legacy') {
                          // ignore global scope on legacy mode
                          if (componentInstance.vnode.el.__VUE_I18N__ !== i18n.global.__composer) {
                            inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
                          }
                        } else {
                          inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
                        }
                      }
                    });
                    api.addInspector({
                      id: "vue-i18n-resource-inspector" /* CUSTOM_INSPECTOR */,
                      label: VueDevToolsLabels["vue-i18n-resource-inspector" /* CUSTOM_INSPECTOR */],
                      icon: 'language',
                      treeFilterPlaceholder: VueDevToolsPlaceholders["vue-i18n-resource-inspector" /* CUSTOM_INSPECTOR */]
                    });

                    api.on.getInspectorTree(function (payload) {
                      if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector" /* CUSTOM_INSPECTOR */) {
                        registerScope(payload, i18n);
                      }
                    });
                    var roots = new Map();
                    api.on.getInspectorState( /*#__PURE__*/function () {
                      var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(payload) {
                        var _yield$api$getCompone, _yield$api$getCompone2, root, instance;
                        return _regeneratorRuntime().wrap(function _callee3$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                if (!(payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector" /* CUSTOM_INSPECTOR */)) {
                                  _context5.next = 16;
                                  break;
                                }
                                api.unhighlightElement();
                                inspectScope(payload, i18n);
                                if (!(payload.nodeId === 'global')) {
                                  _context5.next = 14;
                                  break;
                                }
                                if (roots.has(payload.app)) {
                                  _context5.next = 11;
                                  break;
                                }
                                _context5.next = 7;
                                return api.getComponentInstances(payload.app);
                              case 7:
                                _yield$api$getCompone = _context5.sent;
                                _yield$api$getCompone2 = _slicedToArray(_yield$api$getCompone, 1);
                                root = _yield$api$getCompone2[0];
                                roots.set(payload.app, root);
                              case 11:
                                api.highlightElement(roots.get(payload.app));
                                _context5.next = 16;
                                break;
                              case 14:
                                instance = getComponentInstance(payload.nodeId, i18n);
                                instance && api.highlightElement(instance);
                              case 16:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee3);
                      }));
                      return function (_x5) {
                        return _ref14.apply(this, arguments);
                      };
                    }());
                    api.on.editInspectorState(function (payload) {
                      if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector" /* CUSTOM_INSPECTOR */) {
                        editScope(payload, i18n);
                      }
                    });
                    api.addTimelineLayer({
                      id: "vue-i18n-timeline" /* TIMELINE */,
                      label: VueDevToolsLabels["vue-i18n-timeline" /* TIMELINE */],
                      color: VueDevToolsTimelineColors["vue-i18n-timeline" /* TIMELINE */]
                    });

                    resolve(true);
                  });
                } catch (e) {
                  console.error(e);
                  reject(false);
                }
              }));
            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee4);
    }));
    return _enableDevTools.apply(this, arguments);
  }
  function getI18nScopeLable(instance) {
    return instance.type.name || instance.type.displayName || instance.type.__file || 'Anonymous';
  }
  function updateComponentTreeTags(instance,
  // eslint-disable-line @typescript-eslint/no-explicit-any
  treeNode, i18n) {
    // prettier-ignore
    var global = i18n.mode === 'composition' ? i18n.global : i18n.global.__composer;
    if (instance && instance.vnode.el && instance.vnode.el.__VUE_I18N__) {
      // add custom tags local scope only
      if (instance.vnode.el.__VUE_I18N__ !== global) {
        var tag = {
          label: "i18n (".concat(getI18nScopeLable(instance), " Scope)"),
          textColor: 0x000000,
          backgroundColor: 0xffcd19
        };
        treeNode.tags.push(tag);
      }
    }
  }
  function inspectComposer(instanceData, composer) {
    var type = VUE_I18N_COMPONENT_TYPES;
    instanceData.state.push({
      type: type,
      key: 'locale',
      editable: true,
      value: composer.locale.value
    });
    instanceData.state.push({
      type: type,
      key: 'availableLocales',
      editable: false,
      value: composer.availableLocales
    });
    instanceData.state.push({
      type: type,
      key: 'fallbackLocale',
      editable: true,
      value: composer.fallbackLocale.value
    });
    instanceData.state.push({
      type: type,
      key: 'inheritLocale',
      editable: true,
      value: composer.inheritLocale
    });
    instanceData.state.push({
      type: type,
      key: 'messages',
      editable: false,
      value: getLocaleMessageValue(composer.messages.value)
    });
    {
      instanceData.state.push({
        type: type,
        key: 'datetimeFormats',
        editable: false,
        value: composer.datetimeFormats.value
      });
      instanceData.state.push({
        type: type,
        key: 'numberFormats',
        editable: false,
        value: composer.numberFormats.value
      });
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getLocaleMessageValue(messages) {
    var value = {};
    Object.keys(messages).forEach(function (key) {
      var v = messages[key];
      if (isFunction(v) && 'source' in v) {
        value[key] = getMessageFunctionDetails(v);
      } else if (isObject(v)) {
        value[key] = getLocaleMessageValue(v);
      } else {
        value[key] = v;
      }
    });
    return value;
  }
  var ESC = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '&': '&amp;'
  };
  function escape(s) {
    return s.replace(/[<>"&]/g, escapeChar);
  }
  function escapeChar(a) {
    return ESC[a] || a;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getMessageFunctionDetails(func) {
    var argString = func.source ? "(\"".concat(escape(func.source), "\")") : "(?)";
    return {
      _custom: {
        type: 'function',
        display: "<span>\u0192</span> ".concat(argString)
      }
    };
  }
  function registerScope(payload, i18n) {
    payload.rootNodes.push({
      id: 'global',
      label: 'Global Scope'
    });
    // prettier-ignore
    var global = i18n.mode === 'composition' ? i18n.global : i18n.global.__composer;
    var _iterator3 = _createForOfIteratorHelper(i18n.__instances),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = _slicedToArray(_step3.value, 2),
          keyInstance = _step3$value[0],
          instance = _step3$value[1];
        // prettier-ignore
        var composer = i18n.mode === 'composition' ? instance : instance.__composer;
        if (global === composer) {
          continue;
        }
        payload.rootNodes.push({
          id: composer.id.toString(),
          label: "".concat(getI18nScopeLable(keyInstance), " Scope")
        });
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
  function getComponentInstance(nodeId, i18n) {
    var instance = null;
    if (nodeId !== 'global') {
      var _iterator4 = _createForOfIteratorHelper(i18n.__instances.entries()),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _step4$value = _slicedToArray(_step4.value, 2),
            component = _step4$value[0],
            composer = _step4$value[1];
          if (composer.id.toString() === nodeId) {
            instance = component;
            break;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    return instance;
  }
  function getComposer$1(nodeId, i18n) {
    if (nodeId === 'global') {
      return i18n.mode === 'composition' ? i18n.global : i18n.global.__composer;
    } else {
      var instance = Array.from(i18n.__instances.values()).find(function (item) {
        return item.id.toString() === nodeId;
      });
      if (instance) {
        return i18n.mode === 'composition' ? instance : instance.__composer;
      } else {
        return null;
      }
    }
  }
  function inspectScope(payload, i18n
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) {
    var composer = getComposer$1(payload.nodeId, i18n);
    if (composer) {
      // TODO:
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      payload.state = makeScopeInspectState(composer);
    }
    return null;
  }
  function makeScopeInspectState(composer) {
    var state = {};
    var localeType = 'Locale related info';
    var localeStates = [{
      type: localeType,
      key: 'locale',
      editable: true,
      value: composer.locale.value
    }, {
      type: localeType,
      key: 'fallbackLocale',
      editable: true,
      value: composer.fallbackLocale.value
    }, {
      type: localeType,
      key: 'availableLocales',
      editable: false,
      value: composer.availableLocales
    }, {
      type: localeType,
      key: 'inheritLocale',
      editable: true,
      value: composer.inheritLocale
    }];
    state[localeType] = localeStates;
    var localeMessagesType = 'Locale messages info';
    var localeMessagesStates = [{
      type: localeMessagesType,
      key: 'messages',
      editable: false,
      value: getLocaleMessageValue(composer.messages.value)
    }];
    state[localeMessagesType] = localeMessagesStates;
    {
      var datetimeFormatsType = 'Datetime formats info';
      var datetimeFormatsStates = [{
        type: datetimeFormatsType,
        key: 'datetimeFormats',
        editable: false,
        value: composer.datetimeFormats.value
      }];
      state[datetimeFormatsType] = datetimeFormatsStates;
      var numberFormatsType = 'Datetime formats info';
      var numberFormatsStates = [{
        type: numberFormatsType,
        key: 'numberFormats',
        editable: false,
        value: composer.numberFormats.value
      }];
      state[numberFormatsType] = numberFormatsStates;
    }
    return state;
  }
  function addTimelineEvent(event, payload) {
    if (devtoolsApi) {
      var groupId;
      if (payload && 'groupId' in payload) {
        groupId = payload.groupId;
        delete payload.groupId;
      }
      devtoolsApi.addTimelineEvent({
        layerId: "vue-i18n-timeline" /* TIMELINE */,
        event: {
          title: event,
          groupId: groupId,
          time: Date.now(),
          meta: {},
          data: payload || {},
          logType: event === "compile-error" /* COMPILE_ERROR */ ? 'error' : event === "fallback" /* FALBACK */ || event === "missing" /* MISSING */ ? 'warning' : 'default'
        }
      });
    }
  }
  function editScope(payload, i18n) {
    var composer = getComposer$1(payload.nodeId, i18n);
    if (composer) {
      var _payload$path = _slicedToArray(payload.path, 1),
        field = _payload$path[0];
      if (field === 'locale' && isString(payload.state.value)) {
        composer.locale.value = payload.state.value;
      } else if (field === 'fallbackLocale' && (isString(payload.state.value) || isArray(payload.state.value) || isObject(payload.state.value))) {
        composer.fallbackLocale.value = payload.state.value;
      } else if (field === 'inheritLocale' && isBoolean(payload.state.value)) {
        composer.inheritLocale = payload.state.value;
      }
    }
  }

  /**
   * Supports compatibility for legacy vue-i18n APIs
   * This mixin is used when we use vue-i18n@v9.x or later
   */
  function defineMixin(vuei18n, composer, i18n) {
    return {
      beforeCreate: function beforeCreate() {
        var _this2 = this;
        var instance = vue.getCurrentInstance();
        /* istanbul ignore if */
        if (!instance) {
          throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
        }
        var options = this.$options;
        if (options.i18n) {
          var optionsI18n = options.i18n;
          if (options.__i18n) {
            optionsI18n.__i18n = options.__i18n;
          }
          optionsI18n.__root = composer;
          if (this === this.$root) {
            this.$i18n = mergeToRoot(vuei18n, optionsI18n);
          } else {
            optionsI18n.__injectWithOption = true;
            this.$i18n = createVueI18n(optionsI18n);
          }
        } else if (options.__i18n) {
          if (this === this.$root) {
            this.$i18n = mergeToRoot(vuei18n, options);
          } else {
            this.$i18n = createVueI18n({
              __i18n: options.__i18n,
              __injectWithOption: true,
              __root: composer
            });
          }
        } else {
          // set global
          this.$i18n = vuei18n;
        }
        vuei18n.__onComponentInstanceCreated(this.$i18n);
        i18n.__setInstance(instance, this.$i18n);
        // defines vue-i18n legacy APIs
        this.$t = function () {
          var _this2$$i18n;
          return (_this2$$i18n = _this2.$i18n).t.apply(_this2$$i18n, arguments);
        };
        this.$rt = function () {
          var _this2$$i18n2;
          return (_this2$$i18n2 = _this2.$i18n).rt.apply(_this2$$i18n2, arguments);
        };
        this.$tc = function () {
          var _this2$$i18n3;
          return (_this2$$i18n3 = _this2.$i18n).tc.apply(_this2$$i18n3, arguments);
        };
        this.$te = function (key, locale) {
          return _this2.$i18n.te(key, locale);
        };
        this.$d = function () {
          var _this2$$i18n4;
          return (_this2$$i18n4 = _this2.$i18n).d.apply(_this2$$i18n4, arguments);
        };
        this.$n = function () {
          var _this2$$i18n5;
          return (_this2$$i18n5 = _this2.$i18n).n.apply(_this2$$i18n5, arguments);
        };
        this.$tm = function (key) {
          return _this2.$i18n.tm(key);
        };
      },
      mounted: function mounted() {
        /* istanbul ignore if */
        {
          this.$el.__VUE_I18N__ = this.$i18n.__composer;
          var emitter = this.__v_emitter = createEmitter();
          var _vueI18n = this.$i18n;
          _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
          emitter.on('*', addTimelineEvent);
        }
      },
      unmounted: function unmounted() {
        var _this3 = this;
        var instance = vue.getCurrentInstance();
        /* istanbul ignore if */
        if (!instance) {
          throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
        }
        vue.nextTick(function () {
          /* istanbul ignore if */
          {
            if (_this3.__v_emitter) {
              _this3.__v_emitter.off('*', addTimelineEvent);
              delete _this3.__v_emitter;
            }
            var _vueI18n = _this3.$i18n;
            _vueI18n.__disableEmitter && _vueI18n.__disableEmitter();
            delete _this3.$el.__VUE_I18N__;
          }
          delete _this3.$t;
          delete _this3.$rt;
          delete _this3.$tc;
          delete _this3.$te;
          delete _this3.$d;
          delete _this3.$n;
          delete _this3.$tm;
          i18n.__deleteInstance(instance);
          delete _this3.$i18n;
        });
      }
    };
  }
  function mergeToRoot(root, options) {
    root.locale = options.locale || root.locale;
    root.fallbackLocale = options.fallbackLocale || root.fallbackLocale;
    root.missing = options.missing || root.missing;
    root.silentTranslationWarn = options.silentTranslationWarn || root.silentFallbackWarn;
    root.silentFallbackWarn = options.silentFallbackWarn || root.silentFallbackWarn;
    root.formatFallbackMessages = options.formatFallbackMessages || root.formatFallbackMessages;
    root.postTranslation = options.postTranslation || root.postTranslation;
    root.warnHtmlInMessage = options.warnHtmlInMessage || root.warnHtmlInMessage;
    root.escapeParameterHtml = options.escapeParameterHtml || root.escapeParameterHtml;
    root.sync = options.sync || root.sync;
    root.__composer[SetPluralRulesSymbol](options.pluralizationRules || root.pluralizationRules);
    var messages = getLocaleMessages(root.locale, {
      messages: options.messages,
      __i18n: options.__i18n
    });
    Object.keys(messages).forEach(function (locale) {
      return root.mergeLocaleMessage(locale, messages[locale]);
    });
    if (options.datetimeFormats) {
      Object.keys(options.datetimeFormats).forEach(function (locale) {
        return root.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
      });
    }
    if (options.numberFormats) {
      Object.keys(options.numberFormats).forEach(function (locale) {
        return root.mergeNumberFormat(locale, options.numberFormats[locale]);
      });
    }
    return root;
  }

  /**
   * Injection key for {@link useI18n}
   *
   * @remarks
   * The global injection key for I18n instances with `useI18n`. this injection key is used in Web Components.
   * Specify the i18n instance created by {@link createI18n} together with `provide` function.
   *
   * @VueI18nGeneral
   */
  var I18nInjectionKey = /* #__PURE__*/makeSymbol('global-vue-i18n');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  function createI18n() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var VueI18nLegacy = arguments.length > 1 ? arguments[1] : undefined;
    // prettier-ignore
    var __legacyMode = isBoolean(options.legacy) ? options.legacy : true;
    // prettier-ignore
    var __globalInjection = !!options.globalInjection;
    var __instances = new Map();
    var __global = createGlobal(options, __legacyMode);
    var symbol = makeSymbol('vue-i18n');
    function __getInstance(component) {
      return __instances.get(component) || null;
    }
    function __setInstance(component, instance) {
      __instances.set(component, instance);
    }
    function __deleteInstance(component) {
      __instances["delete"](component);
    }
    {
      var i18n = {
        // mode
        get mode() {
          return __legacyMode ? 'legacy' : 'composition';
        },
        // install plugin
        install: function install(app) {
          var _arguments = arguments;
          return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _len28, options, _key28, ret, emitter, _vueI18n, _composer;
            return _regeneratorRuntime().wrap(function _callee2$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    app.__VUE_I18N__ = i18n;
                    app.__VUE_I18N_SYMBOL__ = symbol;
                    app.provide(app.__VUE_I18N_SYMBOL__, i18n);
                    // global method and properties injection for Composition API
                    if (!__legacyMode && __globalInjection) {
                      injectGlobalFields(app, i18n.global);
                    }
                    // install built-in components and directive
                    for (_len28 = _arguments.length, options = new Array(_len28 > 1 ? _len28 - 1 : 0), _key28 = 1; _key28 < _len28; _key28++) {
                      options[_key28 - 1] = _arguments[_key28];
                    }
                    apply.apply(void 0, [app, i18n].concat(options));
                    // setup mixin for Legacy API
                    if (__legacyMode) {
                      app.mixin(defineMixin(__global, __global.__composer, i18n));
                    }
                    // setup vue-devtools plugin
                    _context4.next = 9;
                    return enableDevTools(app, i18n);
                  case 9:
                    ret = _context4.sent;
                    if (ret) {
                      _context4.next = 12;
                      break;
                    }
                    throw createI18nError(I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
                  case 12:
                    emitter = createEmitter();
                    if (__legacyMode) {
                      _vueI18n = __global;
                      _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
                    } else {
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      _composer = __global;
                      _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
                    }
                    emitter.on('*', addTimelineEvent);
                  case 15:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee2);
          }))();
        },
        // global accessor
        get global() {
          return __global;
        },
        // @internal
        __instances: __instances,
        // @internal
        __getInstance: __getInstance,
        // @internal
        __setInstance: __setInstance,
        // @internal
        __deleteInstance: __deleteInstance
      };
      return i18n;
    }
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  function useI18n() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var instance = vue.getCurrentInstance();
    if (instance == null) {
      throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
    }
    if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
      throw createI18nError(I18nErrorCodes.NOT_INSLALLED);
    }
    var i18n = getI18nInstance(instance);
    var global = getGlobalComposer(i18n);
    var componentOptions = getComponentOptions(instance);
    var scope = getScope(options, componentOptions);
    if (scope === 'global') {
      adjustI18nResources(global, options, componentOptions);
      return global;
    }
    if (scope === 'parent') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var _composer3 = getComposer(i18n, instance, options.__useComponent);
      if (_composer3 == null) {
        {
          warn(getWarnMessage(I18nWarnCodes.NOT_FOUND_PARENT_SCOPE));
        }
        _composer3 = global;
      }
      return _composer3;
    }
    // scope 'local' case
    if (i18n.mode === 'legacy') {
      throw createI18nError(I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE);
    }
    var i18nInternal = i18n;
    var composer = i18nInternal.__getInstance(instance);
    if (composer == null) {
      var composerOptions = assign({}, options);
      if ('__i18n' in componentOptions) {
        composerOptions.__i18n = componentOptions.__i18n;
      }
      if (global) {
        composerOptions.__root = global;
      }
      composer = createComposer(composerOptions);
      setupLifeCycle(i18nInternal, instance, composer);
      i18nInternal.__setInstance(instance, composer);
    }
    return composer;
  }
  function createGlobal(options, legacyMode, VueI18nLegacy // eslint-disable-line @typescript-eslint/no-explicit-any
  ) {
    {
      return legacyMode ? createVueI18n(options) : createComposer(options);
    }
  }
  function getI18nInstance(instance) {
    {
      var i18n = vue.inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
      /* istanbul ignore if */
      if (!i18n) {
        throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE);
      }
      return i18n;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getScope(options, componentOptions) {
    // prettier-ignore
    return isEmptyObject(options) ? '__i18n' in componentOptions ? 'local' : 'global' : !options.useScope ? 'local' : options.useScope;
  }
  function getGlobalComposer(i18n) {
    // prettier-ignore
    return i18n.mode === 'composition' ? i18n.global : i18n.global.__composer;
  }
  function adjustI18nResources(global, options, componentOptions // eslint-disable-line @typescript-eslint/no-explicit-any
  ) {
    var messages = isObject(options.messages) ? options.messages : {};
    if ('__i18nGlobal' in componentOptions) {
      messages = getLocaleMessages(global.locale.value, {
        messages: messages,
        __i18n: componentOptions.__i18nGlobal
      });
    }
    // merge locale messages
    var locales = Object.keys(messages);
    if (locales.length) {
      locales.forEach(function (locale) {
        global.mergeLocaleMessage(locale, messages[locale]);
      });
    }
    {
      // merge datetime formats
      if (isObject(options.datetimeFormats)) {
        var _locales = Object.keys(options.datetimeFormats);
        if (_locales.length) {
          _locales.forEach(function (locale) {
            global.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
          });
        }
      }
      // merge number formats
      if (isObject(options.numberFormats)) {
        var _locales2 = Object.keys(options.numberFormats);
        if (_locales2.length) {
          _locales2.forEach(function (locale) {
            global.mergeNumberFormat(locale, options.numberFormats[locale]);
          });
        }
      }
    }
  }
  function getComposer(i18n, target) {
    var useComponent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var composer = null;
    var root = target.root;
    var current = target.parent;
    while (current != null) {
      var i18nInternal = i18n;
      if (i18n.mode === 'composition') {
        composer = i18nInternal.__getInstance(current);
      } else {
        {
          var vueI18n = i18nInternal.__getInstance(current);
          if (vueI18n != null) {
            composer = vueI18n.__composer;
            if (useComponent && composer && !composer[InejctWithOption] // eslint-disable-line @typescript-eslint/no-explicit-any
            ) {
              composer = null;
            }
          }
        }
      }
      if (composer != null) {
        break;
      }
      if (root === current) {
        break;
      }
      current = current.parent;
    }
    return composer;
  }
  function setupLifeCycle(i18n, target, composer) {
    var emitter = null;
    {
      vue.onMounted(function () {
        // inject composer instance to DOM for intlify-devtools
        if (target.vnode.el) {
          target.vnode.el.__VUE_I18N__ = composer;
          emitter = createEmitter();
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          var _composer = composer;
          _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
          emitter.on('*', addTimelineEvent);
        }
      }, target);
      vue.onUnmounted(function () {
        // remove composer instance from DOM for intlify-devtools
        if (target.vnode.el && target.vnode.el.__VUE_I18N__) {
          emitter && emitter.off('*', addTimelineEvent);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          var _composer = composer;
          _composer[DisableEmitter] && _composer[DisableEmitter]();
          delete target.vnode.el.__VUE_I18N__;
        }
        i18n.__deleteInstance(target);
      }, target);
    }
  }
  var globalExportProps = ['locale', 'fallbackLocale', 'availableLocales'];
  var globalExportMethods = ['t', 'rt', 'd', 'n', 'tm'];
  function injectGlobalFields(app, composer) {
    var i18n = Object.create(null);
    globalExportProps.forEach(function (prop) {
      var desc = Object.getOwnPropertyDescriptor(composer, prop);
      if (!desc) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      var wrap = vue.isRef(desc.value) // check computed props
      ? {
        get: function get() {
          return desc.value.value;
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        set: function set(val) {
          desc.value.value = val;
        }
      } : {
        get: function get() {
          return desc.get && desc.get();
        }
      };
      Object.defineProperty(i18n, prop, wrap);
    });
    app.config.globalProperties.$i18n = i18n;
    globalExportMethods.forEach(function (method) {
      var desc = Object.getOwnPropertyDescriptor(composer, method);
      if (!desc || !desc.value) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      Object.defineProperty(app.config.globalProperties, "$".concat(method), desc);
    });
  }

  // register message compiler at vue-i18n
  registerMessageCompiler(compileToFunction);
  // register message resolver at vue-i18n
  registerMessageResolver(resolveValue);
  // register fallback locale at vue-i18n
  registerLocaleFallbacker(fallbackWithLocaleChain);
  // NOTE: experimental !!
  {
    var target = getGlobalThis();
    target.__INTLIFY__ = true;
    setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
  }
  {
    initDev();
  }
  exports.DatetimeFormat = DatetimeFormat;
  exports.I18nInjectionKey = I18nInjectionKey;
  exports.NumberFormat = NumberFormat;
  exports.Translation = Translation;
  exports.VERSION = VERSION;
  exports.createI18n = createI18n;
  exports.useI18n = useI18n;
  exports.vTDirective = vTDirective;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  return exports;
}({}, Vue);