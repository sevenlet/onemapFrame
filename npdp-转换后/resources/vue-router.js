"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
var VueRouter = function (exports, vue) {
  'use strict';

  var _ErrorTypeMessages;
  var hasSymbol = typeof Symbol === 'function' && _typeof(Symbol.toStringTag) === 'symbol';
  var PolySymbol = function PolySymbol(name) {
    return (
      // vr = vue router
      hasSymbol ? Symbol('[vue-router]: ' + name) : '[vue-router]: ' + name
    );
  };
  // rvlm = Router View Location Matched
  /**
   * RouteRecord being rendered by the closest ancestor Router View. Used for
   * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
   * Location Matched
   *
   * @internal
   */
  var matchedRouteKey = /*#__PURE__*/PolySymbol('router view location matched');
  /**
   * Allows overriding the router view depth to control which component in
   * `matched` is rendered. rvd stands for Router View Depth
   *
   * @internal
   */
  var viewDepthKey = /*#__PURE__*/PolySymbol('router view depth');
  /**
   * Allows overriding the router instance returned by `useRouter` in tests. r
   * stands for router
   *
   * @internal
   */
  var routerKey = /*#__PURE__*/PolySymbol('router');
  /**
   * Allows overriding the current route returned by `useRoute` in tests. rl
   * stands for route location
   *
   * @internal
   */
  var routeLocationKey = /*#__PURE__*/PolySymbol('route location');
  /**
   * Allows overriding the current route used by router-view. Internally this is
   * used when the `route` prop is passed.
   *
   * @internal
   */
  var routerViewLocationKey = /*#__PURE__*/PolySymbol('router view location');
  var isBrowser = typeof window !== 'undefined';
  function isESModule(obj) {
    return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === 'Module';
  }
  var assign = Object.assign;
  function applyToParams(fn, params) {
    var newParams = {};
    for (var key in params) {
      var value = params[key];
      newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
  }
  var noop = function noop() {};
  function warn(msg) {
    // avoid using ...args as it breaks in older Edge builds
    var args = Array.from(arguments).slice(1);
    console.warn.apply(console, ['[Vue Router warn]: ' + msg].concat(args));
  }
  var TRAILING_SLASH_RE = /\/$/;
  var removeTrailingSlash = function removeTrailingSlash(path) {
    return path.replace(TRAILING_SLASH_RE, '');
  };
  /**
   * Transforms an URI into a normalized history location
   *
   * @param parseQuery
   * @param location - URI to normalize
   * @param currentLocation - current absolute location. Allows resolving relative
   * paths. Must start with `/`. Defaults to `/`
   * @returns a normalized history location
   */
  function parseURL(parseQuery, location) {
    var currentLocation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/';
    var path,
      query = {},
      searchString = '',
      hash = '';
    // Could use URL and URLSearchParams but IE 11 doesn't support it
    var searchPos = location.indexOf('?');
    var hashPos = location.indexOf('#', searchPos > -1 ? searchPos : 0);
    if (searchPos > -1) {
      path = location.slice(0, searchPos);
      searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
      query = parseQuery(searchString);
    }
    if (hashPos > -1) {
      path = path || location.slice(0, hashPos);
      // keep the # character
      hash = location.slice(hashPos, location.length);
    }
    // no search and no query
    path = resolveRelativePath(path != null ? path : location, currentLocation);
    // empty path means a relative query or hash `?foo=f`, `#thing`
    return {
      fullPath: path + (searchString && '?') + searchString + hash,
      path: path,
      query: query,
      hash: hash
    };
  }
  /**
   * Stringifies a URL object
   *
   * @param stringifyQuery
   * @param location
   */
  function stringifyURL(stringifyQuery, location) {
    var query = location.query ? stringifyQuery(location.query) : '';
    return location.path + (query && '?') + query + (location.hash || '');
  }
  /**
   * Strips off the base from the beginning of a location.pathname in a non
   * case-sensitive way.
   *
   * @param pathname - location.pathname
   * @param base - base to strip off
   */
  function stripBase(pathname, base) {
    // no base or base is not found at the beginning
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
    return pathname.slice(base.length) || '/';
  }
  /**
   * Checks if two RouteLocation are equal. This means that both locations are
   * pointing towards the same {@link RouteRecord} and that all `params`, `query`
   * parameters and `hash` are the same
   *
   * @param a - first {@link RouteLocation}
   * @param b - second {@link RouteLocation}
   */
  function isSameRouteLocation(stringifyQuery, a, b) {
    var aLastIndex = a.matched.length - 1;
    var bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery(a.query) === stringifyQuery(b.query) && a.hash === b.hash;
  }
  /**
   * Check if two `RouteRecords` are equal. Takes into account aliases: they are
   * considered equal to the `RouteRecord` they are aliasing.
   *
   * @param a - first {@link RouteRecord}
   * @param b - second {@link RouteRecord}
   */
  function isSameRouteRecord(a, b) {
    // since the original record has an undefined value for aliasOf
    // but all aliases point to the original record, this will always compare
    // the original record
    return (a.aliasOf || a) === (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    for (var key in a) {
      if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
    }
    return true;
  }
  function isSameRouteLocationParamsValue(a, b) {
    return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
  }
  /**
   * Check if two arrays are the same or if an array with one single entry is the
   * same as another primitive value. Used to check query and parameters
   *
   * @param a - array of values
   * @param b - array of values or a single value
   */
  function isEquivalentArray(a, b) {
    return Array.isArray(b) ? a.length === b.length && a.every(function (value, i) {
      return value === b[i];
    }) : a.length === 1 && a[0] === b;
  }
  /**
   * Resolves a relative path that starts with `.`.
   *
   * @param to - path location we are resolving
   * @param from - currentLocation.path, should start with `/`
   */
  function resolveRelativePath(to, from) {
    if (to.startsWith('/')) return to;
    if (!from.startsWith('/')) {
      warn("Cannot resolve a relative location without an absolute path. Trying to resolve \"".concat(to, "\" from \"").concat(from, "\". It should look like \"/").concat(from, "\"."));
      return to;
    }
    if (!to) return from;
    var fromSegments = from.split('/');
    var toSegments = to.split('/');
    var position = fromSegments.length - 1;
    var toPosition;
    var segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
      segment = toSegments[toPosition];
      // can't go below zero
      if (position === 1 || segment === '.') continue;
      if (segment === '..') position--;
      // found something that is not relative path
      else break;
    }
    return fromSegments.slice(0, position).join('/') + '/' + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join('/');
  }
  var NavigationType;
  (function (NavigationType) {
    NavigationType["pop"] = "pop";
    NavigationType["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function (NavigationDirection) {
    NavigationDirection["back"] = "back";
    NavigationDirection["forward"] = "forward";
    NavigationDirection["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  /**
   * Starting location for Histories
   */
  var START = '';
  // Generic utils
  /**
   * Normalizes a base by removing any trailing slash and reading the base tag if
   * present.
   *
   * @param base - base to normalize
   */
  function normalizeBase(base) {
    if (!base) {
      if (isBrowser) {
        // respect <base> tag
        var baseEl = document.querySelector('base');
        base = baseEl && baseEl.getAttribute('href') || '/';
        // strip full URL origin
        base = base.replace(/^\w+:\/\/[^\/]+/, '');
      } else {
        base = '/';
      }
    }
    // ensure leading slash when it was removed by the regex above avoid leading
    // slash with hash because the file could be read from the disk like file://
    // and the leading slash would cause problems
    if (base[0] !== '/' && base[0] !== '#') base = '/' + base;
    // remove the trailing slash so all other method can just do `base + fullPath`
    // to build an href
    return removeTrailingSlash(base);
  }
  // remove any character before the hash
  var BEFORE_HASH_RE = /^[^#]+#/;
  function createHref(base, location) {
    return base.replace(BEFORE_HASH_RE, '#') + location;
  }
  function getElementPosition(el, offset) {
    var docRect = document.documentElement.getBoundingClientRect();
    var elRect = el.getBoundingClientRect();
    return {
      behavior: offset.behavior,
      left: elRect.left - docRect.left - (offset.left || 0),
      top: elRect.top - docRect.top - (offset.top || 0)
    };
  }
  var computeScrollPosition = function computeScrollPosition() {
    return {
      left: window.pageXOffset,
      top: window.pageYOffset
    };
  };
  function scrollToPosition(position) {
    var scrollToOptions;
    if ('el' in position) {
      var positionEl = position.el;
      var isIdSelector = typeof positionEl === 'string' && positionEl.startsWith('#');
      /**
       * `id`s can accept pretty much any characters, including CSS combinators
       * like `>` or `~`. It's still possible to retrieve elements using
       * `document.getElementById('~')` but it needs to be escaped when using
       * `document.querySelector('#\\~')` for it to be valid. The only
       * requirements for `id`s are them to be unique on the page and to not be
       * empty (`id=""`). Because of that, when passing an id selector, it should
       * be properly escaped for it to work with `querySelector`. We could check
       * for the id selector to be simple (no CSS combinators `+ >~`) but that
       * would make things inconsistent since they are valid characters for an
       * `id` but would need to be escaped when using `querySelector`, breaking
       * their usage and ending up in no selector returned. Selectors need to be
       * escaped:
       *
       * - `#1-thing` becomes `#\31 -thing`
       * - `#with~symbols` becomes `#with\\~symbols`
       *
       * - More information about  the topic can be found at
       *   https://mathiasbynens.be/notes/html5-id-class.
       * - Practical example: https://mathiasbynens.be/demo/html5-id
       */
      if (typeof position.el === 'string') {
        if (!isIdSelector || !document.getElementById(position.el.slice(1))) {
          try {
            var foundEl = document.querySelector(position.el);
            if (isIdSelector && foundEl) {
              warn("The selector \"".concat(position.el, "\" should be passed as \"el: document.querySelector('").concat(position.el, "')\" because it starts with \"#\"."));
              // return to avoid other warnings
              return;
            }
          } catch (err) {
            warn("The selector \"".concat(position.el, "\" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape)."));
            // return to avoid other warnings
            return;
          }
        }
      }
      var el = typeof positionEl === 'string' ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
      if (!el) {
        warn("Couldn't find element using selector \"".concat(position.el, "\" returned by scrollBehavior."));
        return;
      }
      scrollToOptions = getElementPosition(el, position);
    } else {
      scrollToOptions = position;
    }
    if ('scrollBehavior' in document.documentElement.style) window.scrollTo(scrollToOptions);else {
      window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
    }
  }
  function getScrollKey(path, delta) {
    var position = history.state ? history.state.position - delta : -1;
    return position + path;
  }
  var scrollPositions = new Map();
  function saveScrollPosition(key, scrollPosition) {
    scrollPositions.set(key, scrollPosition);
  }
  function getSavedScrollPosition(key) {
    var scroll = scrollPositions.get(key);
    // consume it so it's not used again
    scrollPositions["delete"](key);
    return scroll;
  }
  // TODO: RFC about how to save scroll position
  /**
   * ScrollBehavior instance used by the router to compute and restore the scroll
   * position when navigating.
   */
  // export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
  //   // returns a scroll position that can be saved in history
  //   compute(): ScrollPositionEntry
  //   // can take an extended ScrollPositionEntry
  //   scroll(position: ScrollPosition): void
  // }
  // export const scrollHandler: ScrollHandler<ScrollPosition> = {
  //   compute: computeScroll,
  //   scroll: scrollToPosition,
  // }

  var createBaseLocation = function createBaseLocation() {
    return location.protocol + '//' + location.host;
  };
  /**
   * Creates a normalized history location from a window.location object
   * @param location -
   */
  function createCurrentLocation(base, location) {
    var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
    // allows hash bases like #, /#, #/, #!, #!/, /#!/, or even /folder#end
    var hashPos = base.indexOf('#');
    if (hashPos > -1) {
      var slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
      var pathFromHash = hash.slice(slicePos);
      // prepend the starting slash to hash so the url starts with /#
      if (pathFromHash[0] !== '/') pathFromHash = '/' + pathFromHash;
      return stripBase(pathFromHash, '');
    }
    var path = stripBase(pathname, base);
    return path + search + hash;
  }
  function useHistoryListeners(base, historyState, currentLocation, replace) {
    var listeners = [];
    var teardowns = [];
    // TODO: should it be a stack? a Dict. Check if the popstate listener
    // can trigger twice
    var pauseState = null;
    var popStateHandler = function popStateHandler(_ref) {
      var state = _ref.state;
      var to = createCurrentLocation(base, location);
      var from = currentLocation.value;
      var fromState = historyState.value;
      var delta = 0;
      if (state) {
        currentLocation.value = to;
        historyState.value = state;
        // ignore the popstate and reset the pauseState
        if (pauseState && pauseState === from) {
          pauseState = null;
          return;
        }
        delta = fromState ? state.position - fromState.position : 0;
      } else {
        replace(to);
      }
      // console.log({ deltaFromCurrent })
      // Here we could also revert the navigation by calling history.go(-delta)
      // this listener will have to be adapted to not trigger again and to wait for the url
      // to be updated before triggering the listeners. Some kind of validation function would also
      // need to be passed to the listeners so the navigation can be accepted
      // call all listeners
      listeners.forEach(function (listener) {
        listener(currentLocation.value, from, {
          delta: delta,
          type: NavigationType.pop,
          direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
        });
      });
    };
    function pauseListeners() {
      pauseState = currentLocation.value;
    }
    function listen(callback) {
      // setup the listener and prepare teardown callbacks
      listeners.push(callback);
      var teardown = function teardown() {
        var index = listeners.indexOf(callback);
        if (index > -1) listeners.splice(index, 1);
      };
      teardowns.push(teardown);
      return teardown;
    }
    function beforeUnloadListener() {
      var _window = window,
        history = _window.history;
      if (!history.state) return;
      history.replaceState(assign({}, history.state, {
        scroll: computeScrollPosition()
      }), '');
    }
    function destroy() {
      var _iterator = _createForOfIteratorHelper(teardowns),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var teardown = _step.value;
          teardown();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      teardowns = [];
      window.removeEventListener('popstate', popStateHandler);
      window.removeEventListener('beforeunload', beforeUnloadListener);
    }
    // setup the listeners and prepare teardown callbacks
    window.addEventListener('popstate', popStateHandler);
    window.addEventListener('beforeunload', beforeUnloadListener);
    return {
      pauseListeners: pauseListeners,
      listen: listen,
      destroy: destroy
    };
  }
  /**
   * Creates a state object
   */
  function buildState(back, current, forward) {
    var replaced = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var computeScroll = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    return {
      back: back,
      current: current,
      forward: forward,
      replaced: replaced,
      position: window.history.length,
      scroll: computeScroll ? computeScrollPosition() : null
    };
  }
  function useHistoryStateNavigation(base) {
    var _window2 = window,
      history = _window2.history,
      location = _window2.location;
    // private variables
    var currentLocation = {
      value: createCurrentLocation(base, location)
    };
    var historyState = {
      value: history.state
    };
    // build current history entry as this is a fresh navigation
    if (!historyState.value) {
      changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        // the length is off by one, we need to decrease it
        position: history.length - 1,
        replaced: true,
        // don't add a scroll as the user may have an anchor and we want
        // scrollBehavior to be triggered without a saved position
        scroll: null
      }, true);
    }
    function changeLocation(to, state, replace) {
      /**
       * if a base tag is provided and we are on a normal domain, we have to
       * respect the provided `base` attribute because pushState() will use it and
       * potentially erase anything before the `#` like at
       * https://github.com/vuejs/vue-router-next/issues/685 where a base of
       * `/folder/#` but a base of `/` would erase the `/folder/` section. If
       * there is no host, the `<base>` tag makes no sense and if there isn't a
       * base tag we can just use everything after the `#`.
       */
      var hashIndex = base.indexOf('#');
      var url = hashIndex > -1 ? (location.host && document.querySelector('base') ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
      try {
        // BROWSER QUIRK
        // NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
        history[replace ? 'replaceState' : 'pushState'](state, '', url);
        historyState.value = state;
      } catch (err) {
        {
          warn('Error with push/replace State', err);
        }
        // Force the navigation, this also resets the call count
        location[replace ? 'replace' : 'assign'](url);
      }
    }
    function replace(to, data) {
      var state = assign({}, history.state, buildState(historyState.value.back,
      // keep back and forward entries but override current position
      to, historyState.value.forward, true), data, {
        position: historyState.value.position
      });
      changeLocation(to, state, true);
      currentLocation.value = to;
    }
    function push(to, data) {
      // Add to current entry the information of where we are going
      // as well as saving the current position
      var currentState = assign({},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/vue-router-next/issues/366
      historyState.value, history.state, {
        forward: to,
        scroll: computeScrollPosition()
      });
      if (!history.state) {
        warn("history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:\n\n" + "history.replaceState(history.state, '', url)\n\n" + "You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.");
      }
      changeLocation(currentState.current, currentState, true);
      var state = assign({}, buildState(currentLocation.value, to, null), {
        position: currentState.position + 1
      }, data);
      changeLocation(to, state, false);
      currentLocation.value = to;
    }
    return {
      location: currentLocation,
      state: historyState,
      push: push,
      replace: replace
    };
  }
  /**
   * Creates an HTML5 history. Most common history for single page applications.
   *
   * @param base -
   */
  function createWebHistory(base) {
    base = normalizeBase(base);
    var historyNavigation = useHistoryStateNavigation(base);
    var historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta) {
      var triggerListeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!triggerListeners) historyListeners.pauseListeners();
      history.go(delta);
    }
    var routerHistory = assign({
      // it's overridden right after
      location: '',
      base: base,
      go: go,
      createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, 'location', {
      enumerable: true,
      get: function get() {
        return historyNavigation.location.value;
      }
    });
    Object.defineProperty(routerHistory, 'state', {
      enumerable: true,
      get: function get() {
        return historyNavigation.state.value;
      }
    });
    return routerHistory;
  }

  /**
   * Creates a in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
   * It's up to the user to replace that location with the starter location by either calling `router.push` or `router.replace`.
   *
   * @param base - Base applied to all urls, defaults to '/'
   * @returns a history object that can be passed to the router constructor
   */
  function createMemoryHistory() {
    var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var listeners = [];
    var queue = [START];
    var position = 0;
    base = normalizeBase(base);
    function setLocation(location) {
      position++;
      if (position === queue.length) {
        // we are at the end, we can simply append a new entry
        queue.push(location);
      } else {
        // we are in the middle, we remove everything from here in the queue
        queue.splice(position);
        queue.push(location);
      }
    }
    function triggerListeners(to, from, _ref2) {
      var direction = _ref2.direction,
        delta = _ref2.delta;
      var info = {
        direction: direction,
        delta: delta,
        type: NavigationType.pop
      };
      var _iterator2 = _createForOfIteratorHelper(listeners),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var callback = _step2.value;
          callback(to, from, info);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    var routerHistory = {
      // rewritten by Object.defineProperty
      location: START,
      // TODO: should be kept in queue
      state: {},
      base: base,
      createHref: createHref.bind(null, base),
      replace: function replace(to) {
        // remove current entry and decrement position
        queue.splice(position--, 1);
        setLocation(to);
      },
      push: function push(to, data) {
        setLocation(to);
      },
      listen: function listen(callback) {
        listeners.push(callback);
        return function () {
          var index = listeners.indexOf(callback);
          if (index > -1) listeners.splice(index, 1);
        };
      },
      destroy: function destroy() {
        listeners = [];
        queue = [START];
        position = 0;
      },
      go: function go(delta) {
        var shouldTrigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var from = this.location;
        var direction =
        // we are considering delta === 0 going forward, but in abstract mode
        // using 0 for the delta doesn't make sense like it does in html5 where
        // it reloads the page
        delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
        position = Math.max(0, Math.min(position + delta, queue.length - 1));
        if (shouldTrigger) {
          triggerListeners(this.location, from, {
            direction: direction,
            delta: delta
          });
        }
      }
    };
    Object.defineProperty(routerHistory, 'location', {
      enumerable: true,
      get: function get() {
        return queue[position];
      }
    });
    return routerHistory;
  }

  /**
   * Creates a hash history. Useful for web applications with no host (e.g.
   * `file://`) or when configuring a server to handle any URL is not possible.
   *
   * @param base - optional base to provide. Defaults to `location.pathname +
   * location.search` If there is a `<base>` tag in the `head`, its value will be
   * ignored in favor of this parameter **but note it affects all the
   * history.pushState() calls**, meaning that if you use a `<base>` tag, it's
   * `href` value **has to match this parameter** (ignoring anything after the
   * `#`).
   *
   * @example
   * ```js
   * // at https://example.com/folder
   * createWebHashHistory() // gives a url of `https://example.com/folder#`
   * createWebHashHistory('/folder/') // gives a url of `https://example.com/folder/#`
   * // if the `#` is provided in the base, it won't be added by `createWebHashHistory`
   * createWebHashHistory('/folder/#/app/') // gives a url of `https://example.com/folder/#/app/`
   * // you should avoid doing this because it changes the original url and breaks copying urls
   * createWebHashHistory('/other-folder/') // gives a url of `https://example.com/other-folder/#`
   *
   * // at file:///usr/etc/folder/index.html
   * // for locations with no `host`, the base is ignored
   * createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc/folder/index.html#`
   * ```
   */
  function createWebHashHistory(base) {
    // Make sure this implementation is fine in terms of encoding, specially for IE11
    // for `file://`, directly use the pathname and ignore the base
    // location.pathname contains an initial `/` even at the root: `https://example.com`
    base = location.host ? base || location.pathname + location.search : '';
    // allow the user to provide a `#` in the middle: `/base/#/app`
    if (!base.includes('#')) base += '#';
    if (!base.endsWith('#/') && !base.endsWith('#')) {
      warn("A hash base must end with a \"#\":\n\"".concat(base, "\" should be \"").concat(base.replace(/#.*$/, '#'), "\"."));
    }
    return createWebHistory(base);
  }
  function isRouteLocation(route) {
    return typeof route === 'string' || route && _typeof(route) === 'object';
  }
  function isRouteName(name) {
    return typeof name === 'string' || _typeof(name) === 'symbol';
  }

  /**
   * Initial route location where the router is. Can be used in navigation guards
   * to differentiate the initial navigation.
   *
   * @example
   * ```js
   * import { START_LOCATION } from 'vue-router'
   *
   * router.beforeEach((to, from) => {
   *   if (from === START_LOCATION) {
   *     // initial navigation
   *   }
   * })
   * ```
   */
  var START_LOCATION_NORMALIZED = {
    path: '/',
    name: undefined,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: undefined
  };
  var NavigationFailureSymbol = /*#__PURE__*/PolySymbol('navigation failure');
  /**
   * Enumeration with all possible types for navigation failures. Can be passed to
   * {@link isNavigationFailure} to check for specific failures.
   */
  exports.NavigationFailureType = void 0;
  (function (NavigationFailureType) {
    /**
     * An aborted navigation is a navigation that failed because a navigation
     * guard returned `false` or called `next(false)`
     */
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    /**
     * A cancelled navigation is a navigation that failed because a more recent
     * navigation finished started (not necessarily finished).
     */
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    /**
     * A duplicated navigation is a navigation that failed because it was
     * initiated while already being at the exact same location.
     */
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
  })(exports.NavigationFailureType || (exports.NavigationFailureType = {}));
  // DEV only debug messages
  var ErrorTypeMessages = (_ErrorTypeMessages = {}, _defineProperty(_ErrorTypeMessages, 1 /* MATCHER_NOT_FOUND */, function _(_ref3) {
    var location = _ref3.location,
      currentLocation = _ref3.currentLocation;
    return "No match for\n ".concat(JSON.stringify(location)).concat(currentLocation ? '\nwhile being at\n' + JSON.stringify(currentLocation) : '');
  }), _defineProperty(_ErrorTypeMessages, 2 /* NAVIGATION_GUARD_REDIRECT */, function _(_ref4) {
    var from = _ref4.from,
      to = _ref4.to;
    return "Redirected from \"".concat(from.fullPath, "\" to \"").concat(stringifyRoute(to), "\" via a navigation guard.");
  }), _defineProperty(_ErrorTypeMessages, 4 /* NAVIGATION_ABORTED */, function _(_ref5) {
    var from = _ref5.from,
      to = _ref5.to;
    return "Navigation aborted from \"".concat(from.fullPath, "\" to \"").concat(to.fullPath, "\" via a navigation guard.");
  }), _defineProperty(_ErrorTypeMessages, 8 /* NAVIGATION_CANCELLED */, function _(_ref6) {
    var from = _ref6.from,
      to = _ref6.to;
    return "Navigation cancelled from \"".concat(from.fullPath, "\" to \"").concat(to.fullPath, "\" with a new navigation.");
  }), _defineProperty(_ErrorTypeMessages, 16 /* NAVIGATION_DUPLICATED */, function _(_ref7) {
    var from = _ref7.from,
      to = _ref7.to;
    return "Avoided redundant navigation to current location: \"".concat(from.fullPath, "\".");
  }), _ErrorTypeMessages);
  function createRouterError(type, params) {
    // keep full error messages in cjs versions
    {
      return assign(new Error(ErrorTypeMessages[type](params)), _defineProperty({
        type: type
      }, NavigationFailureSymbol, true), params);
    }
  }
  function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
  }
  var propertiesToLog = ['params', 'query', 'hash'];
  function stringifyRoute(to) {
    if (typeof to === 'string') return to;
    if ('path' in to) return to.path;
    var location = {};
    var _iterator3 = _createForOfIteratorHelper(propertiesToLog),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var key = _step3.value;
        if (key in to) location[key] = to[key];
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return JSON.stringify(location, null, 2);
  }

  // default pattern for a param: non greedy everything but /
  var BASE_PARAM_PATTERN = '[^/]+?';
  var BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  // Special Regex characters that must be escaped in static tokens
  var REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
  /**
   * Creates a path parser from an array of Segments (a segment is an array of Tokens)
   *
   * @param segments - array of segments returned by tokenizePath
   * @param extraOptions - optional options for the regexp
   * @returns a PathParser
   */
  function tokensToParser(segments, extraOptions) {
    var options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    // the amount of scores is the same as the length of segments except for the root segment "/"
    var score = [];
    // the regexp as a string
    var pattern = options.start ? '^' : '';
    // extracted keys
    var keys = [];
    var _iterator4 = _createForOfIteratorHelper(segments),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var segment = _step4.value;
        // the root segment needs special treatment
        var segmentScores = segment.length ? [] : [90 /* Root */];
        // allow trailing slash
        if (options.strict && !segment.length) pattern += '/';
        for (var tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
          var token = segment[tokenIndex];
          // resets the score if we are inside a sub segment /:a-other-:b
          var subSegmentScore = 40 /* Segment */ + (options.sensitive ? 0.25 /* BonusCaseSensitive */ : 0);
          if (token.type === 0 /* Static */) {
            // prepend the slash if we are starting a new segment
            if (!tokenIndex) pattern += '/';
            pattern += token.value.replace(REGEX_CHARS_RE, '\\$&');
            subSegmentScore += 40 /* Static */;
          } else if (token.type === 1 /* Param */) {
            var value = token.value,
              repeatable = token.repeatable,
              optional = token.optional,
              regexp = token.regexp;
            keys.push({
              name: value,
              repeatable: repeatable,
              optional: optional
            });
            var _re = regexp ? regexp : BASE_PARAM_PATTERN;
            // the user provided a custom regexp /:id(\\d+)
            if (_re !== BASE_PARAM_PATTERN) {
              subSegmentScore += 10 /* BonusCustomRegExp */;
              // make sure the regexp is valid before using it
              try {
                new RegExp("(".concat(_re, ")"));
              } catch (err) {
                throw new Error("Invalid custom RegExp for param \"".concat(value, "\" (").concat(_re, "): ") + err.message);
              }
            }
            // when we repeat we must take care of the repeating leading slash
            var subPattern = repeatable ? "((?:".concat(_re, ")(?:/(?:").concat(_re, "))*)") : "(".concat(_re, ")");
            // prepend the slash if we are starting a new segment
            if (!tokenIndex) subPattern =
            // avoid an optional / if there are more segments e.g. /:p?-static
            // or /:p?-:p2
            optional && segment.length < 2 ? "(?:/".concat(subPattern, ")") : '/' + subPattern;
            if (optional) subPattern += '?';
            pattern += subPattern;
            subSegmentScore += 20 /* Dynamic */;
            if (optional) subSegmentScore += -8 /* BonusOptional */;
            if (repeatable) subSegmentScore += -20 /* BonusRepeatable */;
            if (_re === '.*') subSegmentScore += -50 /* BonusWildcard */;
          }

          segmentScores.push(subSegmentScore);
        }
        // an empty array like /home/ -> [[{home}], []]
        // if (!segment.length) pattern += '/'
        score.push(segmentScores);
      }
      // only apply the strict bonus to the last score
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (options.strict && options.end) {
      var i = score.length - 1;
      score[i][score[i].length - 1] += 0.7000000000000001 /* BonusStrict */;
    }
    // TODO: dev only warn double trailing slash
    if (!options.strict) pattern += '/?';
    if (options.end) pattern += '$';
    // allow paths like /dynamic to only match dynamic or dynamic/... but not dynamic_something_else
    else if (options.strict) pattern += '(?:/|$)';
    var re = new RegExp(pattern, options.sensitive ? '' : 'i');
    function parse(path) {
      var match = path.match(re);
      var params = {};
      if (!match) return null;
      for (var _i = 1; _i < match.length; _i++) {
        var value = match[_i] || '';
        var key = keys[_i - 1];
        params[key.name] = value && key.repeatable ? value.split('/') : value;
      }
      return params;
    }
    function stringify(params) {
      var path = '';
      // for optional parameters to allow to be empty
      var avoidDuplicatedSlash = false;
      var _iterator5 = _createForOfIteratorHelper(segments),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var segment = _step5.value;
          if (!avoidDuplicatedSlash || !path.endsWith('/')) path += '/';
          avoidDuplicatedSlash = false;
          var _iterator6 = _createForOfIteratorHelper(segment),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var token = _step6.value;
              if (token.type === 0 /* Static */) {
                path += token.value;
              } else if (token.type === 1 /* Param */) {
                var value = token.value,
                  repeatable = token.repeatable,
                  optional = token.optional;
                var param = value in params ? params[value] : '';
                if (Array.isArray(param) && !repeatable) throw new Error("Provided param \"".concat(value, "\" is an array but it is not repeatable (* or + modifiers)"));
                var text = Array.isArray(param) ? param.join('/') : param;
                if (!text) {
                  if (optional) {
                    // if we have more than one optional param like /:a?-static we
                    // don't need to care about the optional param
                    if (segment.length < 2) {
                      // remove the last slash as we could be at the end
                      if (path.endsWith('/')) path = path.slice(0, -1);
                      // do not append a slash on the next iteration
                      else avoidDuplicatedSlash = true;
                    }
                  } else throw new Error("Missing required param \"".concat(value, "\""));
                }
                path += text;
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      return path;
    }
    return {
      re: re,
      score: score,
      keys: keys,
      parse: parse,
      stringify: stringify
    };
  }
  /**
   * Compares an array of numbers as used in PathParser.score and returns a
   * number. This function can be used to `sort` an array
   *
   * @param a - first array of numbers
   * @param b - second array of numbers
   * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
   * should be sorted first
   */
  function compareScoreArray(a, b) {
    var i = 0;
    while (i < a.length && i < b.length) {
      var diff = b[i] - a[i];
      // only keep going if diff === 0
      if (diff) return diff;
      i++;
    }
    // if the last subsegment was Static, the shorter segments should be sorted first
    // otherwise sort the longest segment first
    if (a.length < b.length) {
      return a.length === 1 && a[0] === 40 /* Static */ + 40 /* Segment */ ? -1 : 1;
    } else if (a.length > b.length) {
      return b.length === 1 && b[0] === 40 /* Static */ + 40 /* Segment */ ? 1 : -1;
    }
    return 0;
  }
  /**
   * Compare function that can be used with `sort` to sort an array of PathParser
   *
   * @param a - first PathParser
   * @param b - second PathParser
   * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
   */
  function comparePathParserScore(a, b) {
    var i = 0;
    var aScore = a.score;
    var bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
      var comp = compareScoreArray(aScore[i], bScore[i]);
      // do not return if both are equal
      if (comp) return comp;
      i++;
    }
    // if a and b share the same score entries but b has more, sort b first
    return bScore.length - aScore.length;
    // this is the ternary version
    // return aScore.length < bScore.length
    //   ? 1
    //   : aScore.length > bScore.length
    //   ? -1
    //   : 0
  }

  var ROOT_TOKEN = {
    type: 0 /* Static */,
    value: ''
  };
  var VALID_PARAM_RE = /[a-zA-Z0-9_]/;
  // After some profiling, the cache seems to be unnecessary because tokenizePath
  // (the slowest part of adding a route) is very fast
  // const tokenCache = new Map<string, Token[][]>()
  function tokenizePath(path) {
    if (!path) return [[]];
    if (path === '/') return [[ROOT_TOKEN]];
    if (!path.startsWith('/')) {
      throw new Error("Route paths should start with a \"/\": \"".concat(path, "\" should be \"/").concat(path, "\"."));
    }
    // if (tokenCache.has(path)) return tokenCache.get(path)!
    function crash(message) {
      throw new Error("ERR (".concat(state, ")/\"").concat(buffer, "\": ").concat(message));
    }
    var state = 0 /* Static */;
    var previousState = state;
    var tokens = [];
    // the segment will always be valid because we get into the initial state
    // with the leading /
    var segment;
    function finalizeSegment() {
      if (segment) tokens.push(segment);
      segment = [];
    }
    // index on the path
    var i = 0;
    // char at index
    var _char;
    // buffer of the value read
    var buffer = '';
    // custom regexp for a param
    var customRe = '';
    function consumeBuffer() {
      if (!buffer) return;
      if (state === 0 /* Static */) {
        segment.push({
          type: 0 /* Static */,
          value: buffer
        });
      } else if (state === 1 /* Param */ || state === 2 /* ParamRegExp */ || state === 3 /* ParamRegExpEnd */) {
        if (segment.length > 1 && (_char === '*' || _char === '+')) crash("A repeatable param (".concat(buffer, ") must be alone in its segment. eg: '/:ids+."));
        segment.push({
          type: 1 /* Param */,
          value: buffer,
          regexp: customRe,
          repeatable: _char === '*' || _char === '+',
          optional: _char === '*' || _char === '?'
        });
      } else {
        crash('Invalid state to consume buffer');
      }
      buffer = '';
    }
    function addCharToBuffer() {
      buffer += _char;
    }
    while (i < path.length) {
      _char = path[i++];
      if (_char === '\\' && state !== 2 /* ParamRegExp */) {
        previousState = state;
        state = 4 /* EscapeNext */;
        continue;
      }
      switch (state) {
        case 0 /* Static */:
          if (_char === '/') {
            if (buffer) {
              consumeBuffer();
            }
            finalizeSegment();
          } else if (_char === ':') {
            consumeBuffer();
            state = 1 /* Param */;
          } else {
            addCharToBuffer();
          }
          break;
        case 4 /* EscapeNext */:
          addCharToBuffer();
          state = previousState;
          break;
        case 1 /* Param */:
          if (_char === '(') {
            state = 2 /* ParamRegExp */;
          } else if (VALID_PARAM_RE.test(_char)) {
            addCharToBuffer();
          } else {
            consumeBuffer();
            state = 0 /* Static */;
            // go back one character if we were not modifying
            if (_char !== '*' && _char !== '?' && _char !== '+') i--;
          }
          break;
        case 2 /* ParamRegExp */:
          // TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
          // it already works by escaping the closing )
          // https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
          // is this really something people need since you can also write
          // /prefix_:p()_suffix
          if (_char === ')') {
            // handle the escaped )
            if (customRe[customRe.length - 1] == '\\') customRe = customRe.slice(0, -1) + _char;else state = 3 /* ParamRegExpEnd */;
          } else {
            customRe += _char;
          }
          break;
        case 3 /* ParamRegExpEnd */:
          // same as finalizing a param
          consumeBuffer();
          state = 0 /* Static */;
          // go back one character if we were not modifying
          if (_char !== '*' && _char !== '?' && _char !== '+') i--;
          customRe = '';
          break;
        default:
          crash('Unknown state');
          break;
      }
    }
    if (state === 2 /* ParamRegExp */) crash("Unfinished custom RegExp for param \"".concat(buffer, "\""));
    consumeBuffer();
    finalizeSegment();
    // tokenCache.set(path, tokens)
    return tokens;
  }
  function createRouteRecordMatcher(record, parent, options) {
    var parser = tokensToParser(tokenizePath(record.path), options);
    // warn against params with the same name
    {
      var existingKeys = new Set();
      var _iterator7 = _createForOfIteratorHelper(parser.keys),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var key = _step7.value;
          if (existingKeys.has(key.name)) warn("Found duplicated params with name \"".concat(key.name, "\" for path \"").concat(record.path, "\". Only the last one will be available on \"$route.params\"."));
          existingKeys.add(key.name);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
    var matcher = assign(parser, {
      record: record,
      parent: parent,
      // these needs to be populated by the parent
      children: [],
      alias: []
    });
    if (parent) {
      // both are aliases or both are not aliases
      // we don't want to mix them because the order is used when
      // passing originalRecord in Matcher.addRoute
      if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
    }
    return matcher;
  }

  /**
   * Creates a Router Matcher.
   *
   * @internal
   * @param routes - array of initial routes
   * @param globalOptions - global route options
   */
  function createRouterMatcher(routes, globalOptions) {
    // normalized ordered array of matchers
    var matchers = [];
    var matcherMap = new Map();
    globalOptions = mergeOptions({
      strict: false,
      end: true,
      sensitive: false
    }, globalOptions);
    function getRecordMatcher(name) {
      return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
      // used later on to remove by name
      var isRootAdd = !originalRecord;
      var mainNormalizedRecord = normalizeRouteRecord(record);
      // we might be the child of an alias
      mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
      var options = mergeOptions(globalOptions, record);
      // generate an array of records to correctly handle aliases
      var normalizedRecords = [mainNormalizedRecord];
      if ('alias' in record) {
        var aliases = typeof record.alias === 'string' ? [record.alias] : record.alias;
        var _iterator8 = _createForOfIteratorHelper(aliases),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var alias = _step8.value;
            normalizedRecords.push(assign({}, mainNormalizedRecord, {
              // this allows us to hold a copy of the `components` option
              // so that async components cache is hold on the original record
              components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
              path: alias,
              // we might be the child of an alias
              aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
              // the aliases are always of the same kind as the original since they
              // are defined on the same record
            }));
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
      var matcher;
      var originalMatcher;
      for (var _i2 = 0, _normalizedRecords = normalizedRecords; _i2 < _normalizedRecords.length; _i2++) {
        var normalizedRecord = _normalizedRecords[_i2];
        var path = normalizedRecord.path;
        // Build up the path for nested routes if the child isn't an absolute
        // route. Only add the / delimiter if the child path isn't empty and if the
        // parent path doesn't have a trailing slash
        if (parent && path[0] !== '/') {
          var parentPath = parent.record.path;
          var connectingSlash = parentPath[parentPath.length - 1] === '/' ? '' : '/';
          normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
        }
        if (normalizedRecord.path === '*') {
          throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\n' + 'See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');
        }
        // create the object before hand so it can be passed to children
        matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
        if (parent && path[0] === '/') checkMissingParamsInAbsolutePath(matcher, parent);
        // if we are an alias we must tell the original record that we exist
        // so we can be removed
        if (originalRecord) {
          originalRecord.alias.push(matcher);
          {
            checkSameParams(originalRecord, matcher);
          }
        } else {
          // otherwise, the first record is the original and others are aliases
          originalMatcher = originalMatcher || matcher;
          if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
          // remove the route if named and only for the top record (avoid in nested calls)
          // this works because the original record is the first one
          if (isRootAdd && record.name && !isAliasRecord(matcher)) removeRoute(record.name);
        }
        if ('children' in mainNormalizedRecord) {
          var children = mainNormalizedRecord.children;
          for (var i = 0; i < children.length; i++) {
            addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
          }
        }
        // if there was no original record, then the first one was not an alias and all
        // other alias (if any) need to reference this record when adding children
        originalRecord = originalRecord || matcher;
        // TODO: add normalized records for more flexibility
        // if (parent && isAliasRecord(originalRecord)) {
        //   parent.children.push(originalRecord)
        // }
        insertMatcher(matcher);
      }
      return originalMatcher ? function () {
        // since other matchers are aliases, they should be removed by the original matcher
        removeRoute(originalMatcher);
      } : noop;
    }
    function removeRoute(matcherRef) {
      if (isRouteName(matcherRef)) {
        var matcher = matcherMap.get(matcherRef);
        if (matcher) {
          matcherMap["delete"](matcherRef);
          matchers.splice(matchers.indexOf(matcher), 1);
          matcher.children.forEach(removeRoute);
          matcher.alias.forEach(removeRoute);
        }
      } else {
        var index = matchers.indexOf(matcherRef);
        if (index > -1) {
          matchers.splice(index, 1);
          if (matcherRef.record.name) matcherMap["delete"](matcherRef.record.name);
          matcherRef.children.forEach(removeRoute);
          matcherRef.alias.forEach(removeRoute);
        }
      }
    }
    function getRoutes() {
      return matchers;
    }
    function insertMatcher(matcher) {
      var i = 0;
      // console.log('i is', { i })
      while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0) {
        i++;
      }
      // console.log('END i is', { i })
      // while (i < matchers.length && matcher.score <= matchers[i].score) i++
      matchers.splice(i, 0, matcher);
      // only add the original record to the name map
      if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location, currentLocation) {
      var matcher;
      var params = {};
      var path;
      var name;
      if ('name' in location && location.name) {
        matcher = matcherMap.get(location.name);
        if (!matcher) throw createRouterError(1 /* MATCHER_NOT_FOUND */, {
          location: location
        });
        name = matcher.record.name;
        params = assign(
        // paramsFromLocation is a new object
        paramsFromLocation(currentLocation.params,
        // only keep params that exist in the resolved location
        // TODO: only keep optional params coming from a parent record
        matcher.keys.filter(function (k) {
          return !k.optional;
        }).map(function (k) {
          return k.name;
        })), location.params);
        // throws if cannot be stringified
        path = matcher.stringify(params);
      } else if ('path' in location) {
        // no need to resolve the path with the matcher as it was provided
        // this also allows the user to control the encoding
        path = location.path;
        if (!path.startsWith('/')) {
          warn("The Matcher cannot resolve relative paths but received \"".concat(path, "\". Unless you directly called `matcher.resolve(\"").concat(path, "\")`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-router-next."));
        }
        matcher = matchers.find(function (m) {
          return m.re.test(path);
        });
        // matcher should have a value after the loop
        if (matcher) {
          // TODO: dev warning of unused params if provided
          // we know the matcher works because we tested the regexp
          params = matcher.parse(path);
          name = matcher.record.name;
        }
        // location is a relative path
      } else {
        // match by name or path of current route
        matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find(function (m) {
          return m.re.test(currentLocation.path);
        });
        if (!matcher) throw createRouterError(1 /* MATCHER_NOT_FOUND */, {
          location: location,
          currentLocation: currentLocation
        });
        name = matcher.record.name;
        // since we are navigating to the same location, we don't need to pick the
        // params like when `name` is provided
        params = assign({}, currentLocation.params, location.params);
        path = matcher.stringify(params);
      }
      var matched = [];
      var parentMatcher = matcher;
      while (parentMatcher) {
        // reversed order so parents are at the beginning
        matched.unshift(parentMatcher.record);
        parentMatcher = parentMatcher.parent;
      }
      return {
        name: name,
        path: path,
        params: params,
        matched: matched,
        meta: mergeMetaFields(matched)
      };
    }
    // add initial routes
    routes.forEach(function (route) {
      return addRoute(route);
    });
    return {
      addRoute: addRoute,
      resolve: resolve,
      removeRoute: removeRoute,
      getRoutes: getRoutes,
      getRecordMatcher: getRecordMatcher
    };
  }
  function paramsFromLocation(params, keys) {
    var newParams = {};
    var _iterator9 = _createForOfIteratorHelper(keys),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var key = _step9.value;
        if (key in params) newParams[key] = params[key];
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    return newParams;
  }
  /**
   * Normalizes a RouteRecordRaw. Creates a copy
   *
   * @param record
   * @returns the normalized version
   */
  function normalizeRouteRecord(record) {
    return {
      path: record.path,
      redirect: record.redirect,
      name: record.name,
      meta: record.meta || {},
      aliasOf: undefined,
      beforeEnter: record.beforeEnter,
      props: normalizeRecordProps(record),
      children: record.children || [],
      instances: {},
      leaveGuards: new Set(),
      updateGuards: new Set(),
      enterCallbacks: {},
      components: 'components' in record ? record.components || {} : {
        "default": record.component
      }
    };
  }
  /**
   * Normalize the optional `props` in a record to always be an object similar to
   * components. Also accept a boolean for components.
   * @param record
   */
  function normalizeRecordProps(record) {
    var propsObject = {};
    // props does not exist on redirect records but we can set false directly
    var props = record.props || false;
    if ('component' in record) {
      propsObject["default"] = props;
    } else {
      // NOTE: we could also allow a function to be applied to every component.
      // Would need user feedback for use cases
      for (var name in record.components) {
        propsObject[name] = typeof props === 'boolean' ? props : props[name];
      }
    }
    return propsObject;
  }
  /**
   * Checks if a record or any of its parent is an alias
   * @param record
   */
  function isAliasRecord(record) {
    while (record) {
      if (record.record.aliasOf) return true;
      record = record.parent;
    }
    return false;
  }
  /**
   * Merge meta fields of an array of records
   *
   * @param matched - array of matched records
   */
  function mergeMetaFields(matched) {
    return matched.reduce(function (meta, record) {
      return assign(meta, record.meta);
    }, {});
  }
  function mergeOptions(defaults, partialOptions) {
    var options = {};
    for (var key in defaults) {
      options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
    }
    return options;
  }
  function isSameParam(a, b) {
    return a.name === b.name && a.optional === b.optional && a.repeatable === b.repeatable;
  }
  /**
   * Check if a path and its alias have the same required params
   *
   * @param a - original record
   * @param b - alias record
   */
  function checkSameParams(a, b) {
    var _iterator10 = _createForOfIteratorHelper(a.keys),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var key = _step10.value;
        if (!key.optional && !b.keys.find(isSameParam.bind(null, key))) return warn("Alias \"".concat(b.record.path, "\" and the original record: \"").concat(a.record.path, "\" should have the exact same param named \"").concat(key.name, "\""));
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    var _iterator11 = _createForOfIteratorHelper(b.keys),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var _key = _step11.value;
        if (!_key.optional && !a.keys.find(isSameParam.bind(null, _key))) return warn("Alias \"".concat(b.record.path, "\" and the original record: \"").concat(a.record.path, "\" should have the exact same param named \"").concat(_key.name, "\""));
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
  }
  function checkMissingParamsInAbsolutePath(record, parent) {
    var _iterator12 = _createForOfIteratorHelper(parent.keys),
      _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var key = _step12.value;
        if (!record.keys.find(isSameParam.bind(null, key))) return warn("Absolute path \"".concat(record.record.path, "\" should have the exact same param named \"").concat(key.name, "\" as its parent \"").concat(parent.record.path, "\"."));
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
  }

  /**
   * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
   * < > `
   *
   * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
   * defines some extra characters to be encoded. Most browsers do not encode them
   * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
   * also encode `!'()*`. Leaving unencoded only ASCII alphanumeric(`a-zA-Z0-9`)
   * plus `-._~`. This extra safety should be applied to query by patching the
   * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
   * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
   * into a `/` if directly typed in. The _backtick_ (`````) should also be
   * encoded everywhere because some browsers like FF encode it when directly
   * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
   */
  // const EXTRA_RESERVED_RE = /[!'()*]/g
  // const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)
  var HASH_RE = /#/g; // %23
  var AMPERSAND_RE = /&/g; // %26
  var SLASH_RE = /\//g; // %2F
  var EQUAL_RE = /=/g; // %3D
  var IM_RE = /\?/g; // %3F
  var PLUS_RE = /\+/g; // %2B
  /**
   * NOTE: It's not clear to me if we should encode the + symbol in queries, it
   * seems to be less flexible than not doing so and I can't find out the legacy
   * systems requiring this for regular requests like text/html. In the standard,
   * the encoding of the plus character is only mentioned for
   * application/x-www-form-urlencoded
   * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
   * leave the plus character as is in queries. To be more flexible, we allow the
   * plus character on the query but it can also be manually encoded by the user.
   *
   * Resources:
   * - https://url.spec.whatwg.org/#urlencoded-parsing
   * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
   */
  var ENC_BRACKET_OPEN_RE = /%5B/g; // [
  var ENC_BRACKET_CLOSE_RE = /%5D/g; // ]
  var ENC_CARET_RE = /%5E/g; // ^
  var ENC_BACKTICK_RE = /%60/g; // `
  var ENC_CURLY_OPEN_RE = /%7B/g; // {
  var ENC_PIPE_RE = /%7C/g; // |
  var ENC_CURLY_CLOSE_RE = /%7D/g; // }
  var ENC_SPACE_RE = /%20/g; // }
  /**
   * Encode characters that need to be encoded on the path, search and hash
   * sections of the URL.
   *
   * @internal
   * @param text - string to encode
   * @returns encoded string
   */
  function commonEncode(text) {
    return encodeURI('' + text).replace(ENC_PIPE_RE, '|').replace(ENC_BRACKET_OPEN_RE, '[').replace(ENC_BRACKET_CLOSE_RE, ']');
  }
  /**
   * Encode characters that need to be encoded on the hash section of the URL.
   *
   * @param text - string to encode
   * @returns encoded string
   */
  function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE, '{').replace(ENC_CURLY_CLOSE_RE, '}').replace(ENC_CARET_RE, '^');
  }
  /**
   * Encode characters that need to be encoded query values on the query
   * section of the URL.
   *
   * @param text - string to encode
   * @returns encoded string
   */
  function encodeQueryValue(text) {
    return commonEncode(text)
    // Encode the space as +, encode the + to differentiate it from the space
    .replace(PLUS_RE, '%2B').replace(ENC_SPACE_RE, '+').replace(HASH_RE, '%23').replace(AMPERSAND_RE, '%26').replace(ENC_BACKTICK_RE, '`').replace(ENC_CURLY_OPEN_RE, '{').replace(ENC_CURLY_CLOSE_RE, '}').replace(ENC_CARET_RE, '^');
  }
  /**
   * Like `encodeQueryValue` but also encodes the `=` character.
   *
   * @param text - string to encode
   */
  function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, '%3D');
  }
  /**
   * Encode characters that need to be encoded on the path section of the URL.
   *
   * @param text - string to encode
   * @returns encoded string
   */
  function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F');
  }
  /**
   * Encode characters that need to be encoded on the path section of the URL as a
   * param. This function encodes everything {@link encodePath} does plus the
   * slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
   * string instead.
   *
   * @param text - string to encode
   * @returns encoded string
   */
  function encodeParam(text) {
    return text == null ? '' : encodePath(text).replace(SLASH_RE, '%2F');
  }
  /**
   * Decode text using `decodeURIComponent`. Returns the original text if it
   * fails.
   *
   * @param text - string to decode
   * @returns decoded string
   */
  function decode(text) {
    try {
      return decodeURIComponent('' + text);
    } catch (err) {
      warn("Error decoding \"".concat(text, "\". Using original value"));
    }
    return '' + text;
  }

  /**
   * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
   * version with the leading `?` and without Should work as URLSearchParams
    * @internal
   *
   * @param search - search string to parse
   * @returns a query object
   */
  function parseQuery(search) {
    var query = {};
    // avoid creating an object with an empty key and empty value
    // because of split('&')
    if (search === '' || search === '?') return query;
    var hasLeadingIM = search[0] === '?';
    var searchParams = (hasLeadingIM ? search.slice(1) : search).split('&');
    for (var i = 0; i < searchParams.length; ++i) {
      // pre decode the + into space
      var searchParam = searchParams[i].replace(PLUS_RE, ' ');
      // allow the = character
      var eqPos = searchParam.indexOf('=');
      var key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
      var value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
      if (key in query) {
        // an extra variable for ts types
        var currentValue = query[key];
        if (!Array.isArray(currentValue)) {
          currentValue = query[key] = [currentValue];
        }
        currentValue.push(value);
      } else {
        query[key] = value;
      }
    }
    return query;
  }
  /**
   * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
   * doesn't prepend a `?`
   *
   * @internal
   *
   * @param query - query object to stringify
   * @returns string version of the query without the leading `?`
   */
  function stringifyQuery(query) {
    var search = '';
    var _loop = function _loop(_key2) {
      var value = query[_key2];
      _key2 = encodeQueryKey(_key2);
      if (value == null) {
        // only null adds the value
        if (value !== undefined) {
          search += (search.length ? '&' : '') + _key2;
        }
        key = _key2;
        return "continue";
      }
      // keep null values
      var values = Array.isArray(value) ? value.map(function (v) {
        return v && encodeQueryValue(v);
      }) : [value && encodeQueryValue(value)];
      values.forEach(function (value) {
        // skip undefined values in arrays as if they were not present
        // smaller code than using filter
        if (value !== undefined) {
          // only append & with non-empty search
          search += (search.length ? '&' : '') + _key2;
          if (value != null) search += '=' + value;
        }
      });
      key = _key2;
    };
    for (var key in query) {
      var _ret = _loop(key);
      if (_ret === "continue") continue;
    }
    return search;
  }
  /**
   * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
   * numbers into strings, removing keys with an undefined value and replacing
   * undefined with null in arrays
   *
   * @param query - query object to normalize
   * @returns a normalized query object
   */
  function normalizeQuery(query) {
    var normalizedQuery = {};
    for (var _key3 in query) {
      var value = query[_key3];
      if (value !== undefined) {
        normalizedQuery[_key3] = Array.isArray(value) ? value.map(function (v) {
          return v == null ? null : '' + v;
        }) : value == null ? value : '' + value;
      }
    }
    return normalizedQuery;
  }

  /**
   * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
   */
  function useCallbacks() {
    var handlers = [];
    function add(handler) {
      handlers.push(handler);
      return function () {
        var i = handlers.indexOf(handler);
        if (i > -1) handlers.splice(i, 1);
      };
    }
    function reset() {
      handlers = [];
    }
    return {
      add: add,
      list: function list() {
        return handlers;
      },
      reset: reset
    };
  }
  function registerGuard(record, name, guard) {
    var removeFromList = function removeFromList() {
      record[name]["delete"](guard);
    };
    vue.onUnmounted(removeFromList);
    vue.onDeactivated(removeFromList);
    vue.onActivated(function () {
      record[name].add(guard);
    });
    record[name].add(guard);
  }
  /**
   * Add a navigation guard that triggers whenever the component for the current
   * location is about to be left. Similar to {@link beforeRouteLeave} but can be
   * used in any component. The guard is removed when the component is unmounted.
   *
   * @param leaveGuard - {@link NavigationGuard}
   */
  function onBeforeRouteLeave(leaveGuard) {
    if (!vue.getCurrentInstance()) {
      warn('getCurrentInstance() returned null. onBeforeRouteLeave() must be called at the top of a setup function');
      return;
    }
    var activeRecord = vue.inject(matchedRouteKey,
    // to avoid warning
    {}).value;
    if (!activeRecord) {
      warn('No active route record was found when calling `onBeforeRouteLeave()`. Make sure you call this function inside of a component child of <router-view>. Maybe you called it inside of App.vue?');
      return;
    }
    registerGuard(activeRecord, 'leaveGuards', leaveGuard);
  }
  /**
   * Add a navigation guard that triggers whenever the current location is about
   * to be updated. Similar to {@link beforeRouteUpdate} but can be used in any
   * component. The guard is removed when the component is unmounted.
   *
   * @param updateGuard - {@link NavigationGuard}
   */
  function onBeforeRouteUpdate(updateGuard) {
    if (!vue.getCurrentInstance()) {
      warn('getCurrentInstance() returned null. onBeforeRouteUpdate() must be called at the top of a setup function');
      return;
    }
    var activeRecord = vue.inject(matchedRouteKey,
    // to avoid warning
    {}).value;
    if (!activeRecord) {
      warn('No active route record was found when calling `onBeforeRouteUpdate()`. Make sure you call this function inside of a component child of <router-view>. Maybe you called it inside of App.vue?');
      return;
    }
    registerGuard(activeRecord, 'updateGuards', updateGuard);
  }
  function guardToPromiseFn(guard, to, from, record, name) {
    // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
    var enterCallbackArray = record && (
    // name is defined if record is because of the function overload
    record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return function () {
      return new Promise(function (resolve, reject) {
        var next = function next(valid) {
          if (valid === false) reject(createRouterError(4 /* NAVIGATION_ABORTED */, {
            from: from,
            to: to
          }));else if (valid instanceof Error) {
            reject(valid);
          } else if (isRouteLocation(valid)) {
            reject(createRouterError(2 /* NAVIGATION_GUARD_REDIRECT */, {
              from: to,
              to: valid
            }));
          } else {
            if (enterCallbackArray &&
            // since enterCallbackArray is truthy, both record and name also are
            record.enterCallbacks[name] === enterCallbackArray && typeof valid === 'function') enterCallbackArray.push(valid);
            resolve();
          }
        };
        // wrapping with Promise.resolve allows it to work with both async and sync guards
        var guardReturn = guard.call(record && record.instances[name], to, from, canOnlyBeCalledOnce(next, to, from));
        var guardCall = Promise.resolve(guardReturn);
        if (guard.length < 3) guardCall = guardCall.then(next);
        if (guard.length > 2) {
          var message = "The \"next\" callback was never called inside of ".concat(guard.name ? '"' + guard.name + '"' : '', ":\n").concat(guard.toString(), "\n. If you are returning a value instead of calling \"next\", make sure to remove the \"next\" parameter from your function.");
          if (_typeof(guardReturn) === 'object' && 'then' in guardReturn) {
            guardCall = guardCall.then(function (resolvedValue) {
              // @ts-expect-error: _called is added at canOnlyBeCalledOnce
              if (!next._called) {
                warn(message);
                return Promise.reject(new Error('Invalid navigation guard'));
              }
              return resolvedValue;
            });
            // TODO: test me!
          } else if (guardReturn !== undefined) {
            // @ts-expect-error: _called is added at canOnlyBeCalledOnce
            if (!next._called) {
              warn(message);
              reject(new Error('Invalid navigation guard'));
              return;
            }
          }
        }
        guardCall["catch"](function (err) {
          return reject(err);
        });
      });
    };
  }
  function canOnlyBeCalledOnce(next, to, from) {
    var called = 0;
    return function () {
      if (called++ === 1) warn("The \"next\" callback was called more than once in one navigation guard when going from \"".concat(from.fullPath, "\" to \"").concat(to.fullPath, "\". It should be called exactly one time in each navigation guard. This will fail in production."));
      // @ts-expect-error: we put it in the original one because it's easier to check
      next._called = true;
      if (called === 1) next.apply(null, arguments);
    };
  }
  function extractComponentsGuards(matched, guardType, to, from) {
    var guards = [];
    var _iterator13 = _createForOfIteratorHelper(matched),
      _step13;
    try {
      var _loop2 = function _loop2() {
        var record = _step13.value;
        var _loop3 = function _loop3(name) {
          var rawComponent = record.components[name];
          {
            if (!rawComponent || _typeof(rawComponent) !== 'object' && typeof rawComponent !== 'function') {
              warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is not") + " a valid component. Received \"".concat(String(rawComponent), "\"."));
              // throw to ensure we stop here but warn to ensure the message isn't
              // missed by the user
              throw new Error('Invalid route component');
            } else if ('then' in rawComponent) {
              // warn if user wrote import('/component.vue') instead of () =>
              // import('./component.vue')
              warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is a ") + "Promise instead of a function that returns a Promise. Did you " + "write \"import('./MyPage.vue')\" instead of " + "\"() => import('./MyPage.vue')\" ? This will break in " + "production if not fixed.");
              var promise = rawComponent;
              rawComponent = function rawComponent() {
                return promise;
              };
            } else if (rawComponent.__asyncLoader &&
            // warn only once per component
            !rawComponent.__warnedDefineAsync) {
              rawComponent.__warnedDefineAsync = true;
              warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is defined ") + "using \"defineAsyncComponent()\". " + "Write \"() => import('./MyPage.vue')\" instead of " + "\"defineAsyncComponent(() => import('./MyPage.vue'))\".");
            }
          }
          // skip update and leave guards if the route component is not mounted
          if (guardType !== 'beforeRouteEnter' && !record.instances[name]) return "continue";
          if (isRouteComponent(rawComponent)) {
            // __vccOpts is added by vue-class-component and contain the regular options
            var options = rawComponent.__vccOpts || rawComponent;
            var guard = options[guardType];
            guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
          } else {
            // start requesting the chunk already
            var componentPromise = rawComponent();
            if (!('catch' in componentPromise)) {
              warn("Component \"".concat(name, "\" in record with path \"").concat(record.path, "\" is a function that does not return a Promise. If you were passing a functional component, make sure to add a \"displayName\" to the component. This will break in production if not fixed."));
              componentPromise = Promise.resolve(componentPromise);
            }
            guards.push(function () {
              return componentPromise.then(function (resolved) {
                if (!resolved) return Promise.reject(new Error("Couldn't resolve component \"".concat(name, "\" at \"").concat(record.path, "\"")));
                var resolvedComponent = isESModule(resolved) ? resolved["default"] : resolved;
                // replace the function with the resolved component
                record.components[name] = resolvedComponent;
                // __vccOpts is added by vue-class-component and contain the regular options
                var options = resolvedComponent.__vccOpts || resolvedComponent;
                var guard = options[guardType];
                return guard && guardToPromiseFn(guard, to, from, record, name)();
              });
            });
          }
        };
        for (var name in record.components) {
          var _ret2 = _loop3(name);
          if (_ret2 === "continue") continue;
        }
      };
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }
    return guards;
  }
  /**
   * Allows differentiating lazy components from functional components and vue-class-component
   *
   * @param component
   */
  function isRouteComponent(component) {
    return _typeof(component) === 'object' || 'displayName' in component || 'props' in component || '__vccOpts' in component;
  }

  // TODO: we could allow currentRoute as a prop to expose `isActive` and
  // `isExactActive` behavior should go through an RFC
  function useLink(props) {
    var router = vue.inject(routerKey);
    var currentRoute = vue.inject(routeLocationKey);
    var route = vue.computed(function () {
      return router.resolve(vue.unref(props.to));
    });
    var activeRecordIndex = vue.computed(function () {
      var matched = route.value.matched;
      var length = matched.length;
      var routeMatched = matched[length - 1];
      var currentMatched = currentRoute.matched;
      if (!routeMatched || !currentMatched.length) return -1;
      var index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
      if (index > -1) return index;
      // possible parent record
      var parentRecordPath = getOriginalPath(matched[length - 2]);
      return (
        // we are dealing with nested routes
        length > 1 &&
        // if the parent and matched route have the same path, this link is
        // referring to the empty child. Or we currently are on a different
        // child of the same parent
        getOriginalPath(routeMatched) === parentRecordPath &&
        // avoid comparing the child with its parent
        currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index
      );
    });
    var isActive = vue.computed(function () {
      return activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params);
    });
    var isExactActive = vue.computed(function () {
      return activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params);
    });
    function navigate() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (guardEvent(e)) {
        return router[vue.unref(props.replace) ? 'replace' : 'push'](vue.unref(props.to)
        // avoid uncaught errors are they are logged anyway
        )["catch"](noop);
      }
      return Promise.resolve();
    }
    // devtools only
    if (isBrowser) {
      var instance = vue.getCurrentInstance();
      if (instance) {
        var linkContextDevtools = {
          route: route.value,
          isActive: isActive.value,
          isExactActive: isExactActive.value
        };
        // @ts-expect-error: this is internal
        instance.__vrl_devtools = instance.__vrl_devtools || [];
        // @ts-expect-error: this is internal
        instance.__vrl_devtools.push(linkContextDevtools);
        vue.watchEffect(function () {
          linkContextDevtools.route = route.value;
          linkContextDevtools.isActive = isActive.value;
          linkContextDevtools.isExactActive = isExactActive.value;
        }, {
          flush: 'post'
        });
      }
    }
    return {
      route: route,
      href: vue.computed(function () {
        return route.value.href;
      }),
      isActive: isActive,
      isExactActive: isExactActive,
      navigate: navigate
    };
  }
  var RouterLinkImpl = /*#__PURE__*/vue.defineComponent({
    name: 'RouterLink',
    props: {
      to: {
        type: [String, Object],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      // inactiveClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        "default": 'page'
      }
    },
    useLink: useLink,
    setup: function setup(props, _ref8) {
      var slots = _ref8.slots;
      var link = vue.reactive(useLink(props));
      var _vue$inject = vue.inject(routerKey),
        options = _vue$inject.options;
      var elClass = vue.computed(function () {
        var _ref9;
        return _ref9 = {}, _defineProperty(_ref9, getLinkClass(props.activeClass, options.linkActiveClass, 'router-link-active'), link.isActive), _defineProperty(_ref9, getLinkClass(props.exactActiveClass, options.linkExactActiveClass, 'router-link-exact-active'), link.isExactActive), _ref9;
      });
      return function () {
        var children = slots["default"] && slots["default"](link);
        return props.custom ? children : vue.h('a', {
          'aria-current': link.isExactActive ? props.ariaCurrentValue : null,
          href: link.href,
          // this would override user added attrs but Vue will still add
          // the listener so we end up triggering both
          onClick: link.navigate,
          "class": elClass.value
        }, children);
      };
    }
  });
  // export the public type for h/tsx inference
  // also to avoid inline import() in generated d.ts files
  /**
   * Component to render a link that triggers a navigation on click.
   */
  var RouterLink = RouterLinkImpl;
  function guardEvent(e) {
    // don't redirect with control keys
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
    // don't redirect when preventDefault called
    if (e.defaultPrevented) return;
    // don't redirect on right click
    if (e.button !== undefined && e.button !== 0) return;
    // don't redirect if `target="_blank"`
    // @ts-expect-error getAttribute does exist
    if (e.currentTarget && e.currentTarget.getAttribute) {
      // @ts-expect-error getAttribute exists
      var target = e.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(target)) return;
    }
    // this may be a Weex event which doesn't have this method
    if (e.preventDefault) e.preventDefault();
    return true;
  }
  function includesParams(outer, inner) {
    var _loop4 = function _loop4(_key4) {
      var innerValue = inner[_key4];
      var outerValue = outer[_key4];
      if (typeof innerValue === 'string') {
        if (innerValue !== outerValue) return {
          v: false
        };
      } else {
        if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some(function (value, i) {
          return value !== outerValue[i];
        })) return {
          v: false
        };
      }
    };
    for (var _key4 in inner) {
      var _ret3 = _loop4(_key4);
      if (_typeof(_ret3) === "object") return _ret3.v;
    }
    return true;
  }
  /**
   * Get the original path value of a record by following its aliasOf
   * @param record
   */
  function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : '';
  }
  /**
   * Utility class to get the active class based on defaults.
   * @param propClass
   * @param globalClass
   * @param defaultClass
   */
  var getLinkClass = function getLinkClass(propClass, globalClass, defaultClass) {
    return propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
  };
  var RouterViewImpl = /*#__PURE__*/vue.defineComponent({
    name: 'RouterView',
    // #674 we manually inherit them
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        "default": 'default'
      },
      route: Object
    },
    setup: function setup(props, _ref10) {
      var attrs = _ref10.attrs,
        slots = _ref10.slots;
      warnDeprecatedUsage();
      var injectedRoute = vue.inject(routerViewLocationKey);
      var routeToDisplay = vue.computed(function () {
        return props.route || injectedRoute.value;
      });
      var depth = vue.inject(viewDepthKey, 0);
      var matchedRouteRef = vue.computed(function () {
        return routeToDisplay.value.matched[depth];
      });
      vue.provide(viewDepthKey, depth + 1);
      vue.provide(matchedRouteKey, matchedRouteRef);
      vue.provide(routerViewLocationKey, routeToDisplay);
      var viewRef = vue.ref();
      // watch at the same time the component instance, the route record we are
      // rendering, and the name
      vue.watch(function () {
        return [viewRef.value, matchedRouteRef.value, props.name];
      }, function (_ref11, _ref12) {
        var _ref13 = _slicedToArray(_ref11, 3),
          instance = _ref13[0],
          to = _ref13[1],
          name = _ref13[2];
        var _ref14 = _slicedToArray(_ref12, 3),
          oldInstance = _ref14[0],
          from = _ref14[1],
          oldName = _ref14[2];
        // copy reused instances
        if (to) {
          // this will update the instance for new instances as well as reused
          // instances when navigating to a new route
          to.instances[name] = instance;
          // the component instance is reused for a different route or name so
          // we copy any saved update or leave guards. With async setup, the
          // mounting component will mount before the matchedRoute changes,
          // making instance === oldInstance, so we check if guards have been
          // added before. This works because we remove guards when
          // unmounting/deactivating components
          if (from && from !== to && instance && instance === oldInstance) {
            if (!to.leaveGuards.size) {
              to.leaveGuards = from.leaveGuards;
            }
            if (!to.updateGuards.size) {
              to.updateGuards = from.updateGuards;
            }
          }
        }
        // trigger beforeRouteEnter next callbacks
        if (instance && to && (
        // if there is no instance but to and from are the same this might be
        // the first visit
        !from || !isSameRouteRecord(to, from) || !oldInstance)) {
          (to.enterCallbacks[name] || []).forEach(function (callback) {
            return callback(instance);
          });
        }
      }, {
        flush: 'post'
      });
      return function () {
        var route = routeToDisplay.value;
        var matchedRoute = matchedRouteRef.value;
        var ViewComponent = matchedRoute && matchedRoute.components[props.name];
        // we need the value at the time we render because when we unmount, we
        // navigated to a different location so the value is different
        var currentName = props.name;
        if (!ViewComponent) {
          return normalizeSlot(slots["default"], {
            Component: ViewComponent,
            route: route
          });
        }
        // props from route configuration
        var routePropsOption = matchedRoute.props[props.name];
        var routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === 'function' ? routePropsOption(route) : routePropsOption : null;
        var onVnodeUnmounted = function onVnodeUnmounted(vnode) {
          // remove the instance reference to prevent leak
          if (vnode.component.isUnmounted) {
            matchedRoute.instances[currentName] = null;
          }
        };
        var component = vue.h(ViewComponent, assign({}, routeProps, attrs, {
          onVnodeUnmounted: onVnodeUnmounted,
          ref: viewRef
        }));
        if (isBrowser && component.ref) {
          // TODO: can display if it's an alias, its props
          var info = {
            depth: depth,
            name: matchedRoute.name,
            path: matchedRoute.path,
            meta: matchedRoute.meta
          };
          var internalInstances = Array.isArray(component.ref) ? component.ref.map(function (r) {
            return r.i;
          }) : [component.ref.i];
          internalInstances.forEach(function (instance) {
            // @ts-expect-error
            instance.__vrv_devtools = info;
          });
        }
        return (
          // pass the vnode to the slot as a prop.
          // h and <component :is="..."> both accept vnodes
          normalizeSlot(slots["default"], {
            Component: component,
            route: route
          }) || component
        );
      };
    }
  });
  function normalizeSlot(slot, data) {
    if (!slot) return null;
    var slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
  }
  // export the public type for h/tsx inference
  // also to avoid inline import() in generated d.ts files
  /**
   * Component to display the current route the user is at.
   */
  var RouterView = RouterViewImpl;
  // warn against deprecated usage with <transition> & <keep-alive>
  // due to functional component being no longer eager in Vue 3
  function warnDeprecatedUsage() {
    var instance = vue.getCurrentInstance();
    var parentName = instance.parent && instance.parent.type.name;
    if (parentName && (parentName === 'KeepAlive' || parentName.includes('Transition'))) {
      var comp = parentName === 'KeepAlive' ? 'keep-alive' : 'transition';
      warn("<router-view> can no longer be used directly inside <transition> or <keep-alive>.\n" + "Use slot props instead:\n\n" + "<router-view v-slot=\"{ Component }\">\n" + "  <".concat(comp, ">\n") + "    <component :is=\"Component\" />\n" + "  </".concat(comp, ">\n") + "</router-view>");
    }
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    // @ts-ignore
    return typeof navigator !== 'undefined' && typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
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
              for (var _len = arguments.length, args = new Array(_len), _key5 = 0; _key5 < _len; _key5++) {
                args[_key5] = arguments[_key5];
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
              for (var _len2 = arguments.length, args = new Array(_len2), _key6 = 0; _key6 < _len2; _key6++) {
                args[_key6] = arguments[_key6];
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
              for (var _len3 = arguments.length, args = new Array(_len3), _key7 = 0; _key7 < _len3; _key7++) {
                args[_key7] = arguments[_key7];
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
          var _iterator14, _step14, _this$target$on, item, _iterator15, _step15, _this$target, _item;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.target = target;
                  _iterator14 = _createForOfIteratorHelper(this.onQueue);
                  try {
                    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                      item = _step14.value;
                      (_this$target$on = this.target.on)[item.method].apply(_this$target$on, _toConsumableArray(item.args));
                    }
                  } catch (err) {
                    _iterator14.e(err);
                  } finally {
                    _iterator14.f();
                  }
                  _iterator15 = _createForOfIteratorHelper(this.targetQueue);
                  _context.prev = 4;
                  _iterator15.s();
                case 6:
                  if ((_step15 = _iterator15.n()).done) {
                    _context.next = 15;
                    break;
                  }
                  _item = _step15.value;
                  _context.t0 = _item;
                  _context.next = 11;
                  return (_this$target = this.target)[_item.method].apply(_this$target, _toConsumableArray(_item.args));
                case 11:
                  _context.t1 = _context.sent;
                  _context.t0.resolve.call(_context.t0, _context.t1);
                case 13:
                  _context.next = 6;
                  break;
                case 15:
                  _context.next = 20;
                  break;
                case 17:
                  _context.prev = 17;
                  _context.t2 = _context["catch"](4);
                  _iterator15.e(_context.t2);
                case 20:
                  _context.prev = 20;
                  _iterator15.f();
                  return _context.finish(20);
                case 23:
                case "end":
                  return _context.stop();
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
  function formatRouteLocation(routeLocation, tooltip) {
    var copy = assign({}, routeLocation, {
      // remove variables that can contain vue instances
      matched: routeLocation.matched.map(function (matched) {
        return omit(matched, ['instances', 'children', 'aliasOf']);
      })
    });
    return {
      _custom: {
        type: null,
        readOnly: true,
        display: routeLocation.fullPath,
        tooltip: tooltip,
        value: copy
      }
    };
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display: display
      }
    };
  }
  // to support multiple router instances
  var routerId = 0;
  function addDevtools(app, router, matcher) {
    // Take over router.beforeEach and afterEach
    // make sure we are not registering the devtool twice
    if (router.__hasDevtools) return;
    router.__hasDevtools = true;
    // increment to support multiple router instances
    var id = routerId++;
    setupDevtoolsPlugin({
      id: 'org.vuejs.router' + (id ? '.' + id : ''),
      label: 'Vue Router',
      packageName: 'vue-router',
      homepage: 'https://next.router.vuejs.org/',
      logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
      componentStateTypes: ['Routing'],
      app: app
    }, function (api) {
      // display state added by the router
      api.on.inspectComponent(function (payload, ctx) {
        if (payload.instanceData) {
          payload.instanceData.state.push({
            type: 'Routing',
            key: '$route',
            editable: false,
            value: formatRouteLocation(router.currentRoute.value, 'Current Route')
          });
        }
      });
      // mark router-link as active and display tags on router views
      api.on.visitComponentTree(function (_ref15) {
        var node = _ref15.treeNode,
          componentInstance = _ref15.componentInstance;
        if (componentInstance.__vrv_devtools) {
          var info = componentInstance.__vrv_devtools;
          node.tags.push({
            label: (info.name ? "".concat(info.name.toString(), ": ") : '') + info.path,
            textColor: 0,
            tooltip: 'This component is rendered by &lt;router-view&gt;',
            backgroundColor: PINK_500
          });
        }
        // if multiple useLink are used
        if (Array.isArray(componentInstance.__vrl_devtools)) {
          componentInstance.__devtoolsApi = api;
          componentInstance.__vrl_devtools.forEach(function (devtoolsData) {
            var backgroundColor = ORANGE_400;
            var tooltip = '';
            if (devtoolsData.isExactActive) {
              backgroundColor = LIME_500;
              tooltip = 'This is exactly active';
            } else if (devtoolsData.isActive) {
              backgroundColor = BLUE_600;
              tooltip = 'This link is active';
            }
            node.tags.push({
              label: devtoolsData.route.path,
              textColor: 0,
              tooltip: tooltip,
              backgroundColor: backgroundColor
            });
          });
        }
      });
      vue.watch(router.currentRoute, function () {
        // refresh active state
        refreshRoutesView();
        api.notifyComponentUpdate();
        api.sendInspectorTree(routerInspectorId);
        api.sendInspectorState(routerInspectorId);
      });
      var navigationsLayerId = 'router:navigations:' + id;
      api.addTimelineLayer({
        id: navigationsLayerId,
        label: "Router".concat(id ? ' ' + id : '', " Navigations"),
        color: 0x40a8c4
      });
      // const errorsLayerId = 'router:errors'
      // api.addTimelineLayer({
      //   id: errorsLayerId,
      //   label: 'Router Errors',
      //   color: 0xea5455,
      // })
      router.onError(function (error, to) {
        api.addTimelineEvent({
          layerId: navigationsLayerId,
          event: {
            title: 'Error during Navigation',
            subtitle: to.fullPath,
            logType: 'error',
            time: Date.now(),
            data: {
              error: error
            },
            groupId: to.meta.__navigationId
          }
        });
      });
      // attached to `meta` and used to group events
      var navigationId = 0;
      router.beforeEach(function (to, from) {
        var data = {
          guard: formatDisplay('beforeEach'),
          from: formatRouteLocation(from, 'Current Location during this navigation'),
          to: formatRouteLocation(to, 'Target location')
        };
        // Used to group navigations together, hide from devtools
        Object.defineProperty(to.meta, '__navigationId', {
          value: navigationId++
        });
        api.addTimelineEvent({
          layerId: navigationsLayerId,
          event: {
            time: Date.now(),
            title: 'Start of navigation',
            subtitle: to.fullPath,
            data: data,
            groupId: to.meta.__navigationId
          }
        });
      });
      router.afterEach(function (to, from, failure) {
        var data = {
          guard: formatDisplay('afterEach')
        };
        if (failure) {
          data.failure = {
            _custom: {
              type: Error,
              readOnly: true,
              display: failure ? failure.message : '',
              tooltip: 'Navigation Failure',
              value: failure
            }
          };
          data.status = formatDisplay('❌');
        } else {
          data.status = formatDisplay('✅');
        }
        // we set here to have the right order
        data.from = formatRouteLocation(from, 'Current Location during this navigation');
        data.to = formatRouteLocation(to, 'Target location');
        api.addTimelineEvent({
          layerId: navigationsLayerId,
          event: {
            title: 'End of navigation',
            subtitle: to.fullPath,
            time: Date.now(),
            data: data,
            logType: failure ? 'warning' : 'default',
            groupId: to.meta.__navigationId
          }
        });
      });
      /**
       * Inspector of Existing routes
       */
      var routerInspectorId = 'router-inspector:' + id;
      api.addInspector({
        id: routerInspectorId,
        label: 'Routes' + (id ? ' ' + id : ''),
        icon: 'book',
        treeFilterPlaceholder: 'Search routes'
      });
      function refreshRoutesView() {
        // the routes view isn't active
        if (!activeRoutesPayload) return;
        var payload = activeRoutesPayload;
        // children routes will appear as nested
        var routes = matcher.getRoutes().filter(function (route) {
          return !route.parent;
        });
        // reset match state to false
        routes.forEach(resetMatchStateOnRouteRecord);
        // apply a match state if there is a payload
        if (payload.filter) {
          routes = routes.filter(function (route) {
            return (
              // save matches state based on the payload
              isRouteMatching(route, payload.filter.toLowerCase())
            );
          });
        }
        // mark active routes
        routes.forEach(function (route) {
          return markRouteRecordActive(route, router.currentRoute.value);
        });
        payload.rootNodes = routes.map(formatRouteRecordForInspector);
      }
      var activeRoutesPayload;
      api.on.getInspectorTree(function (payload) {
        activeRoutesPayload = payload;
        if (payload.app === app && payload.inspectorId === routerInspectorId) {
          refreshRoutesView();
        }
      });
      /**
       * Display information about the currently selected route record
       */
      api.on.getInspectorState(function (payload) {
        if (payload.app === app && payload.inspectorId === routerInspectorId) {
          var routes = matcher.getRoutes();
          var route = routes.find(function (route) {
            return route.record.__vd_id === payload.nodeId;
          });
          if (route) {
            payload.state = {
              options: formatRouteRecordMatcherForStateInspector(route)
            };
          }
        }
      });
      api.sendInspectorTree(routerInspectorId);
      api.sendInspectorState(routerInspectorId);
    });
  }
  function modifierForKey(key) {
    if (key.optional) {
      return key.repeatable ? '*' : '?';
    } else {
      return key.repeatable ? '+' : '';
    }
  }
  function formatRouteRecordMatcherForStateInspector(route) {
    var record = route.record;
    var fields = [{
      editable: false,
      key: 'path',
      value: record.path
    }];
    if (record.name != null) {
      fields.push({
        editable: false,
        key: 'name',
        value: record.name
      });
    }
    fields.push({
      editable: false,
      key: 'regexp',
      value: route.re
    });
    if (route.keys.length) {
      fields.push({
        editable: false,
        key: 'keys',
        value: {
          _custom: {
            type: null,
            readOnly: true,
            display: route.keys.map(function (key) {
              return "".concat(key.name).concat(modifierForKey(key));
            }).join(' '),
            tooltip: 'Param keys',
            value: route.keys
          }
        }
      });
    }
    if (record.redirect != null) {
      fields.push({
        editable: false,
        key: 'redirect',
        value: record.redirect
      });
    }
    if (route.alias.length) {
      fields.push({
        editable: false,
        key: 'aliases',
        value: route.alias.map(function (alias) {
          return alias.record.path;
        })
      });
    }
    fields.push({
      key: 'score',
      editable: false,
      value: {
        _custom: {
          type: null,
          readOnly: true,
          display: route.score.map(function (score) {
            return score.join(', ');
          }).join(' | '),
          tooltip: 'Score used to sort routes',
          value: route.score
        }
      }
    });
    return fields;
  }
  /**
   * Extracted from tailwind palette
   */
  var PINK_500 = 0xec4899;
  var BLUE_600 = 0x2563eb;
  var LIME_500 = 0x84cc16;
  var CYAN_400 = 0x22d3ee;
  var ORANGE_400 = 0xfb923c;
  // const GRAY_100 = 0xf4f4f5
  var DARK = 0x666666;
  function formatRouteRecordForInspector(route) {
    var tags = [];
    var record = route.record;
    if (record.name != null) {
      tags.push({
        label: String(record.name),
        textColor: 0,
        backgroundColor: CYAN_400
      });
    }
    if (record.aliasOf) {
      tags.push({
        label: 'alias',
        textColor: 0,
        backgroundColor: ORANGE_400
      });
    }
    if (route.__vd_match) {
      tags.push({
        label: 'matches',
        textColor: 0,
        backgroundColor: PINK_500
      });
    }
    if (route.__vd_exactActive) {
      tags.push({
        label: 'exact',
        textColor: 0,
        backgroundColor: LIME_500
      });
    }
    if (route.__vd_active) {
      tags.push({
        label: 'active',
        textColor: 0,
        backgroundColor: BLUE_600
      });
    }
    if (record.redirect) {
      tags.push({
        label: 'redirect: ' + (typeof record.redirect === 'string' ? record.redirect : 'Object'),
        textColor: 0xffffff,
        backgroundColor: DARK
      });
    }
    // add an id to be able to select it. Using the `path` is not possible because
    // empty path children would collide with their parents
    var id = record.__vd_id;
    if (id == null) {
      id = String(routeRecordId++);
      record.__vd_id = id;
    }
    return {
      id: id,
      label: record.path,
      tags: tags,
      children: route.children.map(formatRouteRecordForInspector)
    };
  }
  //  incremental id for route records and inspector state
  var routeRecordId = 0;
  var EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
  function markRouteRecordActive(route, currentRoute) {
    // no route will be active if matched is empty
    // reset the matching state
    var isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
    route.__vd_exactActive = route.__vd_active = isExactActive;
    if (!isExactActive) {
      route.__vd_active = currentRoute.matched.some(function (match) {
        return isSameRouteRecord(match, route.record);
      });
    }
    route.children.forEach(function (childRoute) {
      return markRouteRecordActive(childRoute, currentRoute);
    });
  }
  function resetMatchStateOnRouteRecord(route) {
    route.__vd_match = false;
    route.children.forEach(resetMatchStateOnRouteRecord);
  }
  function isRouteMatching(route, filter) {
    var found = String(route.re).match(EXTRACT_REGEXP_RE);
    route.__vd_match = false;
    if (!found || found.length < 3) {
      return false;
    }
    // use a regexp without $ at the end to match nested routes better
    var nonEndingRE = new RegExp(found[1].replace(/\$$/, ''), found[2]);
    if (nonEndingRE.test(filter)) {
      // mark children as matches
      route.children.forEach(function (child) {
        return isRouteMatching(child, filter);
      });
      // exception case: `/`
      if (route.record.path !== '/' || filter === '/') {
        route.__vd_match = route.re.test(filter);
        return true;
      }
      // hide the / route
      return false;
    }
    var path = route.record.path.toLowerCase();
    var decodedPath = decode(path);
    // also allow partial matching on the path
    if (!filter.startsWith('/') && (decodedPath.includes(filter) || path.includes(filter))) return true;
    if (decodedPath.startsWith(filter) || path.startsWith(filter)) return true;
    if (route.record.name && String(route.record.name).includes(filter)) return true;
    return route.children.some(function (child) {
      return isRouteMatching(child, filter);
    });
  }
  function omit(obj, keys) {
    var ret = {};
    for (var _key8 in obj) {
      if (!keys.includes(_key8)) {
        // @ts-expect-error
        ret[_key8] = obj[_key8];
      }
    }
    return ret;
  }

  /**
   * Creates a Router instance that can be used by a Vue app.
   *
   * @param options - {@link RouterOptions}
   */
  function createRouter(options) {
    var matcher = createRouterMatcher(options.routes, options);
    var parseQuery$1 = options.parseQuery || parseQuery;
    var stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    var routerHistory = options.history;
    if (!routerHistory) throw new Error('Provide the "history" option when calling "createRouter()":' + ' https://next.router.vuejs.org/api/#history.');
    var beforeGuards = useCallbacks();
    var beforeResolveGuards = useCallbacks();
    var afterGuards = useCallbacks();
    var currentRoute = vue.shallowRef(START_LOCATION_NORMALIZED);
    var pendingLocation = START_LOCATION_NORMALIZED;
    // leave the scrollRestoration if no scrollBehavior is provided
    if (isBrowser && options.scrollBehavior && 'scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    var normalizeParams = applyToParams.bind(null, function (paramValue) {
      return '' + paramValue;
    });
    var encodeParams = applyToParams.bind(null, encodeParam);
    var decodeParams =
    // @ts-expect-error: intentionally avoid the type check
    applyToParams.bind(null, decode);
    function addRoute(parentOrRoute, route) {
      var parent;
      var record;
      if (isRouteName(parentOrRoute)) {
        parent = matcher.getRecordMatcher(parentOrRoute);
        record = route;
      } else {
        record = parentOrRoute;
      }
      return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
      var recordMatcher = matcher.getRecordMatcher(name);
      if (recordMatcher) {
        matcher.removeRoute(recordMatcher);
      } else {
        warn("Cannot remove non-existent route \"".concat(String(name), "\""));
      }
    }
    function getRoutes() {
      return matcher.getRoutes().map(function (routeMatcher) {
        return routeMatcher.record;
      });
    }
    function hasRoute(name) {
      return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
      // const objectLocation = routerLocationAsObject(rawLocation)
      // we create a copy to modify it later
      currentLocation = assign({}, currentLocation || currentRoute.value);
      if (typeof rawLocation === 'string') {
        var locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
        var _matchedRoute = matcher.resolve({
          path: locationNormalized.path
        }, currentLocation);
        var _href = routerHistory.createHref(locationNormalized.fullPath);
        {
          if (_href.startsWith('//')) warn("Location \"".concat(rawLocation, "\" resolved to \"").concat(_href, "\". A resolved location cannot start with multiple slashes."));else if (!_matchedRoute.matched.length) {
            warn("No match found for location with path \"".concat(rawLocation, "\""));
          }
        }
        // locationNormalized is always a new object
        return assign(locationNormalized, _matchedRoute, {
          params: decodeParams(_matchedRoute.params),
          hash: decode(locationNormalized.hash),
          redirectedFrom: undefined,
          href: _href
        });
      }
      var matcherLocation;
      // path could be relative in object as well
      if ('path' in rawLocation) {
        if ('params' in rawLocation && !('name' in rawLocation) &&
        // @ts-expect-error: the type is never
        Object.keys(rawLocation.params).length) {
          warn("Path \"".concat(
          // @ts-expect-error: the type is never
          rawLocation.path, "\" was passed with params but they will be ignored. Use a named route alongside params instead."));
        }
        matcherLocation = assign({}, rawLocation, {
          path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
        });
      } else {
        // remove any nullish param
        var targetParams = assign({}, rawLocation.params);
        for (var _key9 in targetParams) {
          if (targetParams[_key9] == null) {
            delete targetParams[_key9];
          }
        }
        // pass encoded values to the matcher so it can produce encoded path and fullPath
        matcherLocation = assign({}, rawLocation, {
          params: encodeParams(rawLocation.params)
        });
        // current location params are decoded, we need to encode them in case the
        // matcher merges the params
        currentLocation.params = encodeParams(currentLocation.params);
      }
      var matchedRoute = matcher.resolve(matcherLocation, currentLocation);
      var hash = rawLocation.hash || '';
      if (hash && !hash.startsWith('#')) {
        warn("A `hash` should always start with the character \"#\". Replace \"".concat(hash, "\" with \"#").concat(hash, "\"."));
      }
      // decoding them) the matcher might have merged current location params so
      // we need to run the decoding again
      matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
      var fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
        hash: encodeHash(hash),
        path: matchedRoute.path
      }));
      var href = routerHistory.createHref(fullPath);
      {
        if (href.startsWith('//')) {
          warn("Location \"".concat(rawLocation, "\" resolved to \"").concat(href, "\". A resolved location cannot start with multiple slashes."));
        } else if (!matchedRoute.matched.length) {
          warn("No match found for location with path \"".concat('path' in rawLocation ? rawLocation.path : rawLocation, "\""));
        }
      }
      return assign({
        fullPath: fullPath,
        // keep the hash encoded so fullPath is effectively path + encodedQuery +
        // hash
        hash: hash,
        query:
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/vue-router-next/issues/328#issuecomment-649481567
        stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      }, matchedRoute, {
        redirectedFrom: undefined,
        href: href
      });
    }
    function locationAsObject(to) {
      return typeof to === 'string' ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
      if (pendingLocation !== to) {
        return createRouterError(8 /* NAVIGATION_CANCELLED */, {
          from: from,
          to: to
        });
      }
    }
    function push(to) {
      return pushWithRedirect(to);
    }
    function replace(to) {
      return push(assign(locationAsObject(to), {
        replace: true
      }));
    }
    function handleRedirectRecord(to) {
      var lastMatched = to.matched[to.matched.length - 1];
      if (lastMatched && lastMatched.redirect) {
        var redirect = lastMatched.redirect;
        var newTargetLocation = typeof redirect === 'function' ? redirect(to) : redirect;
        if (typeof newTargetLocation === 'string') {
          newTargetLocation = newTargetLocation.includes('?') || newTargetLocation.includes('#') ? newTargetLocation = locationAsObject(newTargetLocation) :
          // force empty params
          {
            path: newTargetLocation
          };
          // @ts-expect-error: force empty params when a string is passed to let
          // the router parse them again
          newTargetLocation.params = {};
        }
        if (!('path' in newTargetLocation) && !('name' in newTargetLocation)) {
          warn("Invalid redirect found:\n".concat(JSON.stringify(newTargetLocation, null, 2), "\n when navigating to \"").concat(to.fullPath, "\". A redirect must contain a name or path. This will break in production."));
          throw new Error('Invalid redirect');
        }
        return assign({
          query: to.query,
          hash: to.hash,
          params: to.params
        }, newTargetLocation);
      }
    }
    function pushWithRedirect(to, redirectedFrom) {
      var targetLocation = pendingLocation = resolve(to);
      var from = currentRoute.value;
      var data = to.state;
      var force = to.force;
      // to could be a string where `replace` is a function
      var replace = to.replace === true;
      var shouldRedirect = handleRedirectRecord(targetLocation);
      if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
        state: data,
        force: force,
        replace: replace
      }),
      // keep original redirectedFrom if it exists
      redirectedFrom || targetLocation);
      // if it was a redirect we already called `pushWithRedirect` above
      var toLocation = targetLocation;
      toLocation.redirectedFrom = redirectedFrom;
      var failure;
      if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
        failure = createRouterError(16 /* NAVIGATION_DUPLICATED */, {
          to: toLocation,
          from: from
        });
        // trigger scroll to allow scrolling to the same anchor
        handleScroll(from, from,
        // this is a push, the only way for it to be triggered from a
        // history.listen is with a redirect, which makes it become a push
        true,
        // This cannot be the first navigation because the initial location
        // cannot be manually navigated to
        false);
      }
      return (failure ? Promise.resolve(failure) : navigate(toLocation, from))["catch"](function (error) {
        return isNavigationFailure(error) ? error :
        // reject any unknown error
        triggerError(error, toLocation, from);
      }).then(function (failure) {
        if (failure) {
          if (isNavigationFailure(failure, 2 /* NAVIGATION_GUARD_REDIRECT */)) {
            if (
            // we are redirecting to the same location we were already at
            isSameRouteLocation(stringifyQuery$1, resolve(failure.to), toLocation) &&
            // and we have done it a couple of times
            redirectedFrom &&
            // @ts-expect-error: added only in dev
            (redirectedFrom._count = redirectedFrom._count ?
            // @ts-expect-error
            redirectedFrom._count + 1 : 1) > 10) {
              warn("Detected an infinite redirection in a navigation guard when going from \"".concat(from.fullPath, "\" to \"").concat(toLocation.fullPath, "\". Aborting to avoid a Stack Overflow. This will break in production if not fixed."));
              return Promise.reject(new Error('Infinite redirect in navigation guard'));
            }
            return pushWithRedirect(
            // keep options
            assign(locationAsObject(failure.to), {
              state: data,
              force: force,
              replace: replace
            }),
            // preserve the original redirectedFrom if any
            redirectedFrom || toLocation);
          }
        } else {
          // if we fail we don't finalize the navigation
          failure = finalizeNavigation(toLocation, from, true, replace, data);
        }
        triggerAfterEach(toLocation, from, failure);
        return failure;
      });
    }
    /**
     * Helper to reject and skip all navigation guards if a new navigation happened
     * @param to
     * @param from
     */
    function checkCanceledNavigationAndReject(to, from) {
      var error = checkCanceledNavigation(to, from);
      return error ? Promise.reject(error) : Promise.resolve();
    }
    // TODO: refactor the whole before guards by internally using router.beforeEach
    function navigate(to, from) {
      var guards;
      var _extractChangingRecor = extractChangingRecords(to, from),
        _extractChangingRecor2 = _slicedToArray(_extractChangingRecor, 3),
        leavingRecords = _extractChangingRecor2[0],
        updatingRecords = _extractChangingRecor2[1],
        enteringRecords = _extractChangingRecor2[2];
      // all components here have been resolved once because we are leaving
      guards = extractComponentsGuards(leavingRecords.reverse(), 'beforeRouteLeave', to, from);
      // leavingRecords is already reversed
      var _iterator16 = _createForOfIteratorHelper(leavingRecords),
        _step16;
      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var record = _step16.value;
          record.leaveGuards.forEach(function (guard) {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }
      var canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
      guards.push(canceledNavigationCheck);
      // run the queue of per route beforeRouteLeave guards
      return runGuardQueue(guards).then(function () {
        // check global guards beforeEach
        guards = [];
        var _iterator17 = _createForOfIteratorHelper(beforeGuards.list()),
          _step17;
        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var guard = _step17.value;
            guards.push(guardToPromiseFn(guard, to, from));
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(function () {
        // check in components beforeRouteUpdate
        guards = extractComponentsGuards(updatingRecords, 'beforeRouteUpdate', to, from);
        var _iterator18 = _createForOfIteratorHelper(updatingRecords),
          _step18;
        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
            var record = _step18.value;
            record.updateGuards.forEach(function (guard) {
              guards.push(guardToPromiseFn(guard, to, from));
            });
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
        }
        guards.push(canceledNavigationCheck);
        // run the queue of per route beforeEnter guards
        return runGuardQueue(guards);
      }).then(function () {
        // check the route beforeEnter
        guards = [];
        var _iterator19 = _createForOfIteratorHelper(to.matched),
          _step19;
        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var record = _step19.value;
            // do not trigger beforeEnter on reused views
            if (record.beforeEnter && !from.matched.includes(record)) {
              if (Array.isArray(record.beforeEnter)) {
                var _iterator20 = _createForOfIteratorHelper(record.beforeEnter),
                  _step20;
                try {
                  for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                    var beforeEnter = _step20.value;
                    guards.push(guardToPromiseFn(beforeEnter, to, from));
                  }
                } catch (err) {
                  _iterator20.e(err);
                } finally {
                  _iterator20.f();
                }
              } else {
                guards.push(guardToPromiseFn(record.beforeEnter, to, from));
              }
            }
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }
        guards.push(canceledNavigationCheck);
        // run the queue of per route beforeEnter guards
        return runGuardQueue(guards);
      }).then(function () {
        // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
        // clear existing enterCallbacks, these are added by extractComponentsGuards
        to.matched.forEach(function (record) {
          return record.enterCallbacks = {};
        });
        // check in-component beforeRouteEnter
        guards = extractComponentsGuards(enteringRecords, 'beforeRouteEnter', to, from);
        guards.push(canceledNavigationCheck);
        // run the queue of per route beforeEnter guards
        return runGuardQueue(guards);
      }).then(function () {
        // check global guards beforeResolve
        guards = [];
        var _iterator21 = _createForOfIteratorHelper(beforeResolveGuards.list()),
          _step21;
        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var guard = _step21.value;
            guards.push(guardToPromiseFn(guard, to, from));
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      })
      // catch any navigation canceled
      ["catch"](function (err) {
        return isNavigationFailure(err, 8 /* NAVIGATION_CANCELLED */) ? err : Promise.reject(err);
      });
    }
    function triggerAfterEach(to, from, failure) {
      // navigation is confirmed, call afterGuards
      // TODO: wrap with error handlers
      var _iterator22 = _createForOfIteratorHelper(afterGuards.list()),
        _step22;
      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var guard = _step22.value;
          guard(to, from, failure);
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }
    }
    /**
     * - Cleans up any navigation guards
     * - Changes the url if necessary
     * - Calls the scrollBehavior
     */
    function finalizeNavigation(toLocation, from, isPush, replace, data) {
      // a more recent navigation took place
      var error = checkCanceledNavigation(toLocation, from);
      if (error) return error;
      // only consider as push if it's not the first navigation
      var isFirstNavigation = from === START_LOCATION_NORMALIZED;
      var state = !isBrowser ? {} : history.state;
      // change URL only if the user did a push/replace and if it's not the initial navigation because
      // it's just reflecting the url
      if (isPush) {
        // on the initial navigation, we want to reuse the scroll position from
        // history state if it exists
        if (replace || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state && state.scroll
        }, data));else routerHistory.push(toLocation.fullPath, data);
      }
      // accept current navigation
      currentRoute.value = toLocation;
      handleScroll(toLocation, from, isPush, isFirstNavigation);
      markAsReady();
    }
    var removeHistoryListener;
    // attach listener to history to trigger navigations
    function setupListeners() {
      removeHistoryListener = routerHistory.listen(function (to, _from, info) {
        // cannot be a redirect route because it was in history
        var toLocation = resolve(to);
        // due to dynamic routing, and to hash history with manual navigation
        // (manually changing the url or calling history.hash = '#/somewhere'),
        // there could be a redirect record in history
        var shouldRedirect = handleRedirectRecord(toLocation);
        if (shouldRedirect) {
          pushWithRedirect(assign(shouldRedirect, {
            replace: true
          }), toLocation)["catch"](noop);
          return;
        }
        pendingLocation = toLocation;
        var from = currentRoute.value;
        // TODO: should be moved to web history?
        if (isBrowser) {
          saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
        }
        navigate(toLocation, from)["catch"](function (error) {
          if (isNavigationFailure(error, 4 /* NAVIGATION_ABORTED */ | 8 /* NAVIGATION_CANCELLED */)) {
            return error;
          }
          if (isNavigationFailure(error, 2 /* NAVIGATION_GUARD_REDIRECT */)) {
            // Here we could call if (info.delta) routerHistory.go(-info.delta,
            // false) but this is bug prone as we have no way to wait the
            // navigation to be finished before calling pushWithRedirect. Using
            // a setTimeout of 16ms seems to work but there is not guarantee for
            // it to work on every browser. So Instead we do not restore the
            // history entry and trigger a new navigation as requested by the
            // navigation guard.
            // the error is already handled by router.push we just want to avoid
            // logging the error
            pushWithRedirect(error.to, toLocation
            // avoid an uncaught rejection, let push call triggerError
            ).then(function (failure) {
              // manual change in hash history #916 ending up in the URL not
              // changing but it was changed by the manual url change, so we
              // need to manually change it ourselves
              if (isNavigationFailure(failure, 4 /* NAVIGATION_ABORTED */ | 16 /* NAVIGATION_DUPLICATED */) && !info.delta && info.type === NavigationType.pop) {
                routerHistory.go(-1, false);
              }
            })["catch"](noop);
            // avoid the then branch
            return Promise.reject();
          }
          // do not restore history on unknown direction
          if (info.delta) routerHistory.go(-info.delta, false);
          // unrecognized error, transfer to the global handler
          return triggerError(error, toLocation, from);
        }).then(function (failure) {
          failure = failure || finalizeNavigation(
          // after navigation, all matched components are resolved
          toLocation, from, false);
          // revert the navigation
          if (failure) {
            if (info.delta) {
              routerHistory.go(-info.delta, false);
            } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 /* NAVIGATION_ABORTED */ | 16 /* NAVIGATION_DUPLICATED */)) {
              // manual change in hash history #916
              // it's like a push but lacks the information of the direction
              routerHistory.go(-1, false);
            }
          }
          triggerAfterEach(toLocation, from, failure);
        })["catch"](noop);
      });
    }
    // Initialization and Errors
    var readyHandlers = useCallbacks();
    var errorHandlers = useCallbacks();
    var ready;
    /**
     * Trigger errorHandlers added via onError and throws the error as well
     *
     * @param error - error to throw
     * @param to - location we were navigating to when the error happened
     * @param from - location we were navigating from when the error happened
     * @returns the error as a rejected promise
     */
    function triggerError(error, to, from) {
      markAsReady(error);
      var list = errorHandlers.list();
      if (list.length) {
        list.forEach(function (handler) {
          return handler(error, to, from);
        });
      } else {
        {
          warn('uncaught error during route navigation:');
        }
        console.error(error);
      }
      return Promise.reject(error);
    }
    function isReady() {
      if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
      return new Promise(function (resolve, reject) {
        readyHandlers.add([resolve, reject]);
      });
    }
    /**
     * Mark the router as ready, resolving the promised returned by isReady(). Can
     * only be called once, otherwise does nothing.
     * @param err - optional error
     */
    function markAsReady(err) {
      if (ready) return;
      ready = true;
      setupListeners();
      readyHandlers.list().forEach(function (_ref16) {
        var _ref17 = _slicedToArray(_ref16, 2),
          resolve = _ref17[0],
          reject = _ref17[1];
        return err ? reject(err) : resolve();
      });
      readyHandlers.reset();
    }
    // Scroll behavior
    function handleScroll(to, from, isPush, isFirstNavigation) {
      var scrollBehavior = options.scrollBehavior;
      if (!isBrowser || !scrollBehavior) return Promise.resolve();
      var scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
      return vue.nextTick().then(function () {
        return scrollBehavior(to, from, scrollPosition);
      }).then(function (position) {
        return position && scrollToPosition(position);
      })["catch"](function (err) {
        return triggerError(err, to, from);
      });
    }
    var go = function go(delta) {
      return routerHistory.go(delta);
    };
    var started;
    var installedApps = new Set();
    var router = {
      currentRoute: currentRoute,
      addRoute: addRoute,
      removeRoute: removeRoute,
      hasRoute: hasRoute,
      getRoutes: getRoutes,
      resolve: resolve,
      options: options,
      push: push,
      replace: replace,
      go: go,
      back: function back() {
        return go(-1);
      },
      forward: function forward() {
        return go(1);
      },
      beforeEach: beforeGuards.add,
      beforeResolve: beforeResolveGuards.add,
      afterEach: afterGuards.add,
      onError: errorHandlers.add,
      isReady: isReady,
      install: function install(app) {
        var router = this;
        app.component('RouterLink', RouterLink);
        app.component('RouterView', RouterView);
        app.config.globalProperties.$router = router;
        Object.defineProperty(app.config.globalProperties, '$route', {
          enumerable: true,
          get: function get() {
            return vue.unref(currentRoute);
          }
        });
        // this initial navigation is only necessary on client, on server it doesn't
        // make sense because it will create an extra unnecessary navigation and could
        // lead to problems
        if (isBrowser &&
        // used for the initial navigation client side to avoid pushing
        // multiple times when the router is used in multiple apps
        !started && currentRoute.value === START_LOCATION_NORMALIZED) {
          // see above
          started = true;
          push(routerHistory.location)["catch"](function (err) {
            warn('Unexpected error when starting the router:', err);
          });
        }
        var reactiveRoute = {};
        var _loop5 = function _loop5(_key10) {
          // @ts-expect-error: the key matches
          reactiveRoute[_key10] = vue.computed(function () {
            return currentRoute.value[_key10];
          });
        };
        for (var _key10 in START_LOCATION_NORMALIZED) {
          _loop5(_key10);
        }
        app.provide(routerKey, router);
        app.provide(routeLocationKey, vue.reactive(reactiveRoute));
        app.provide(routerViewLocationKey, currentRoute);
        var unmountApp = app.unmount;
        installedApps.add(app);
        app.unmount = function () {
          installedApps["delete"](app);
          // the router is not attached to an app anymore
          if (installedApps.size < 1) {
            // invalidate the current navigation
            pendingLocation = START_LOCATION_NORMALIZED;
            removeHistoryListener && removeHistoryListener();
            currentRoute.value = START_LOCATION_NORMALIZED;
            started = false;
            ready = false;
          }
          unmountApp();
        };
        if (isBrowser) {
          addDevtools(app, router, matcher);
        }
      }
    };
    return router;
  }
  function runGuardQueue(guards) {
    return guards.reduce(function (promise, guard) {
      return promise.then(function () {
        return guard();
      });
    }, Promise.resolve());
  }
  function extractChangingRecords(to, from) {
    var leavingRecords = [];
    var updatingRecords = [];
    var enteringRecords = [];
    var len = Math.max(from.matched.length, to.matched.length);
    var _loop6 = function _loop6(i) {
      var recordFrom = from.matched[i];
      if (recordFrom) {
        if (to.matched.find(function (record) {
          return isSameRouteRecord(record, recordFrom);
        })) updatingRecords.push(recordFrom);else leavingRecords.push(recordFrom);
      }
      var recordTo = to.matched[i];
      if (recordTo) {
        // the type doesn't matter because we are comparing per reference
        if (!from.matched.find(function (record) {
          return isSameRouteRecord(record, recordTo);
        })) {
          enteringRecords.push(recordTo);
        }
      }
    };
    for (var i = 0; i < len; i++) {
      _loop6(i);
    }
    return [leavingRecords, updatingRecords, enteringRecords];
  }

  /**
   * Returns the router instance. Equivalent to using `$router` inside
   * templates.
   */
  function useRouter() {
    return vue.inject(routerKey);
  }
  /**
   * Returns the current route location. Equivalent to using `$route` inside
   * templates.
   */
  function useRoute() {
    return vue.inject(routeLocationKey);
  }
  exports.RouterLink = RouterLink;
  exports.RouterView = RouterView;
  exports.START_LOCATION = START_LOCATION_NORMALIZED;
  exports.createMemoryHistory = createMemoryHistory;
  exports.createRouter = createRouter;
  exports.createRouterMatcher = createRouterMatcher;
  exports.createWebHashHistory = createWebHashHistory;
  exports.createWebHistory = createWebHistory;
  exports.isNavigationFailure = isNavigationFailure;
  exports.matchedRouteKey = matchedRouteKey;
  exports.onBeforeRouteLeave = onBeforeRouteLeave;
  exports.onBeforeRouteUpdate = onBeforeRouteUpdate;
  exports.parseQuery = parseQuery;
  exports.routeLocationKey = routeLocationKey;
  exports.routerKey = routerKey;
  exports.routerViewLocationKey = routerViewLocationKey;
  exports.stringifyQuery = stringifyQuery;
  exports.useLink = useLink;
  exports.useRoute = useRoute;
  exports.useRouter = useRouter;
  exports.viewDepthKey = viewDepthKey;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  return exports;
}({}, Vue);