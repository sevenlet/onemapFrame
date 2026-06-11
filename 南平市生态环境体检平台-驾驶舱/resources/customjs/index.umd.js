(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.fetchEventSource = {}));
})(this, (function (exports) { 'use strict';

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
  };

  function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
  }

  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
  }

  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  /**
   * Converts a ReadableStream into a callback pattern.
   * @param stream The input ReadableStream.
   * @param onChunk A function that will be called on each new byte chunk in the stream.
   * @returns {Promise<void>} A promise that will be resolved when the stream closes.
   */
  function getBytes(stream, onChunk) {
      return __awaiter(this, void 0, void 0, function () {
          var reader, _a, done, value;
          return __generator(this, function (_b) {
              switch (_b.label) {
                  case 0:
                      reader = stream.getReader();
                      _b.label = 1;
                  case 1:
                      _b.trys.push([1, , 5, 6]);
                      _b.label = 2;
                  case 2:
                      return [4 /*yield*/, reader.read()];
                  case 3:
                      _a = _b.sent(), done = _a.done, value = _a.value;
                      if (done)
                          return [3 /*break*/, 4];
                      onChunk(value);
                      return [3 /*break*/, 2];
                  case 4: return [3 /*break*/, 6];
                  case 5:
                      reader.releaseLock();
                      return [7 /*endfinally*/];
                  case 6: return [2 /*return*/];
              }
          });
      });
  }
  /**
   * Parses arbitary byte chunks into EventSource line buffers.
   * Each line should be of the format "field: value" and ends with \r, \n, or \r\n.
   * @param onLine A function that will be called on each new EventSource line.
   * @returns A function that should be called for each incoming byte chunk.
   */
  function getLines(onLine) {
      var buffer;
      var position; // current read position
      var fieldLength; // length of the `field` portion of the line
      var discardTrailingNewline = false;
      // return a function that can process each incoming byte chunk:
      return function onChunk(arr) {
          if (buffer === undefined) {
              buffer = arr;
              position = 0;
              fieldLength = -1;
          }
          else {
              // we're still parsing the old line. Append the new bytes into buffer:
              buffer = concat(buffer, arr);
          }
          var bufLength = buffer.length;
          var lineStart = 0; // index where the current line starts
          while (position < bufLength) {
              if (discardTrailingNewline) {
                  if (buffer[position] === 10 /* ControlChars.NewLine */) {
                      lineStart = ++position; // skip to next char
                  }
                  discardTrailingNewline = false;
              }
              // start looking forward till the end of line:
              var lineEnd = -1; // index of the \r or \n char
              for (; position < bufLength && lineEnd === -1; ++position) {
                  switch (buffer[position]) {
                      case 58 /* ControlChars.Colon */:
                          if (fieldLength === -1) { // first colon in line
                              fieldLength = position - lineStart;
                          }
                          break;
                      // @ts-ignore:7029 \r case below should fallthrough to \n:
                      case 13 /* ControlChars.CarriageReturn */:
                          discardTrailingNewline = true;
                      case 10 /* ControlChars.NewLine */:
                          lineEnd = position;
                          break;
                  }
              }
              if (lineEnd === -1) {
                  // We reached the end of the buffer but the line hasn't ended.
                  // Wait for the next arr and then continue parsing:
                  break;
              }
              // we've reached the line end, send it out:
              onLine(buffer.subarray(lineStart, lineEnd), fieldLength);
              lineStart = position; // we're now on the next line
              fieldLength = -1;
          }
          if (lineStart === bufLength) {
              buffer = undefined; // we've finished reading it
          }
          else if (lineStart !== 0) {
              // Create a new view into buffer beginning at lineStart so we don't
              // need to copy over the previous lines when we get the new arr:
              buffer = buffer.subarray(lineStart);
              position -= lineStart;
          }
      };
  }
  /**
   * Parses line buffers into EventSourceMessages.
   * @param onId A function that will be called on each `id` field.
   * @param onRetry A function that will be called on each `retry` field.
   * @param onMessage A function that will be called on each message.
   * @returns A function that should be called for each incoming line buffer.
   */
  function getMessages(onId, onRetry, onMessage) {
      var message = newMessage();
      var decoder = new TextDecoder();
      // return a function that can process each incoming line buffer:
      return function onLine(line, fieldLength) {
          if (line.length === 0) {
              // empty line denotes end of message. Trigger the callback and start a new message:
              onMessage === null || onMessage === void 0 ? void 0 : onMessage(message);
              message = newMessage();
          }
          else if (fieldLength > 0) { // exclude comments and lines with no values
              // line is of format "<field>:<value>" or "<field>: <value>"
              // https://html.spec.whatwg.org/multipage/server-sent-events.html#event-stream-interpretation
              var field = decoder.decode(line.subarray(0, fieldLength));
              var valueOffset = fieldLength + (line[fieldLength + 1] === 32 /* ControlChars.Space */ ? 2 : 1);
              var value = decoder.decode(line.subarray(valueOffset));
              switch (field) {
                  case 'data':
                      // if this message already has data, append the new value to the old.
                      // otherwise, just set to the new value:
                      message.data = message.data
                          ? message.data + '\n' + value
                          : value; // otherwise, 
                      break;
                  case 'event':
                      message.event = value;
                      break;
                  case 'id':
                      onId(message.id = value);
                      break;
                  case 'retry':
                      var retry = parseInt(value, 10);
                      if (!isNaN(retry)) { // per spec, ignore non-integers
                          onRetry(message.retry = retry);
                      }
                      break;
              }
          }
      };
  }
  function concat(a, b) {
      var res = new Uint8Array(a.length + b.length);
      res.set(a);
      res.set(b, a.length);
      return res;
  }
  function newMessage() {
      // data, event, and id must be initialized to empty strings:
      // https://html.spec.whatwg.org/multipage/server-sent-events.html#event-stream-interpretation
      // retry should be initialized to undefined so we return a consistent shape
      // to the js engine all the time: https://mathiasbynens.be/notes/shapes-ics#takeaways
      return {
          data: '',
          event: '',
          id: '',
          retry: undefined,
      };
  }

  var EventStreamContentType = 'text/event-stream';
  var DefaultRetryInterval = 1000;
  var LastEventId = 'last-event-id';
  function fetchEventSource(input, _a) {
      var inputSignal = _a.signal, inputHeaders = _a.headers, inputOnOpen = _a.onopen, onmessage = _a.onmessage, onclose = _a.onclose, onerror = _a.onerror, openWhenHidden = _a.openWhenHidden, inputFetch = _a.fetch, rest = __rest(_a, ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "openWhenHidden", "fetch"]);
      return new Promise(function (resolve, reject) {
          // make a copy of the input headers since we may modify it below:
          var headers = __assign({}, inputHeaders);
          if (!headers.accept) {
              headers.accept = EventStreamContentType;
          }
          var curRequestController;
          function onVisibilityChange() {
              curRequestController.abort(); // close existing request on every visibility change
              if (!document.hidden) {
                  create(); // page is now visible again, recreate request.
              }
          }
          if (!openWhenHidden) {
              document.addEventListener('visibilitychange', onVisibilityChange);
          }
          var retryInterval = DefaultRetryInterval;
          var retryTimer = 0;
          function dispose() {
              document.removeEventListener('visibilitychange', onVisibilityChange);
              window.clearTimeout(retryTimer);
              curRequestController.abort();
          }
          // if the incoming signal aborts, dispose resources and resolve:
          inputSignal === null || inputSignal === void 0 ? void 0 : inputSignal.addEventListener('abort', function () {
              dispose();
              resolve(); // don't waste time constructing/logging errors
          });
          var fetch = inputFetch !== null && inputFetch !== void 0 ? inputFetch : window.fetch;
          var onopen = inputOnOpen !== null && inputOnOpen !== void 0 ? inputOnOpen : defaultOnOpen;
          function create() {
              var _a;
              return __awaiter(this, void 0, void 0, function () {
                  var currentController, response, err_1, interval;
                  return __generator(this, function (_b) {
                      switch (_b.label) {
                          case 0:
                              currentController = new AbortController();
                              curRequestController = currentController;
                              _b.label = 1;
                          case 1:
                              _b.trys.push([1, 5, , 6]);
                              return [4 /*yield*/, fetch(input, __assign(__assign({}, rest), { headers: headers, signal: curRequestController.signal }))];
                          case 2:
                              response = _b.sent();
                              return [4 /*yield*/, onopen(response)];
                          case 3:
                              _b.sent();
                              return [4 /*yield*/, getBytes(response.body, getLines(getMessages(function (id) {
                                      if (id) {
                                          // store the id and send it back on the next retry:
                                          headers[LastEventId] = id;
                                      }
                                      else {
                                          // don't send the last-event-id header anymore:
                                          delete headers[LastEventId];
                                      }
                                  }, function (retry) {
                                      retryInterval = retry;
                                  }, onmessage)))];
                          case 4:
                              _b.sent();
                              onclose === null || onclose === void 0 ? void 0 : onclose();
                              dispose();
                              resolve();
                              return [3 /*break*/, 6];
                          case 5:
                              err_1 = _b.sent();
                              // 不直接修改全局变量，而是修改局部变量
                              // if (!curRequestController.signal.aborted) {
                              if (!currentController.signal.aborted) {
                                  // if we haven't aborted the request ourselves:
                                  try {
                                      interval = (_a = onerror === null || onerror === void 0 ? void 0 : onerror(err_1)) !== null && _a !== void 0 ? _a : retryInterval;
                                      window.clearTimeout(retryTimer);
                                      retryTimer = window.setTimeout(create, interval);
                                  }
                                  catch (innerErr) {
                                      // we should not retry anymore:
                                      dispose();
                                      reject(innerErr);
                                  }
                              }
                              return [3 /*break*/, 6];
                          case 6: return [2 /*return*/];
                      }
                  });
              });
          }
          create();
      });
  }
  function defaultOnOpen(response) {
      var contentType = response.headers.get('content-type');
      if (!(contentType === null || contentType === void 0 ? void 0 : contentType.startsWith(EventStreamContentType))) {
          throw new Error("Expected content-type to be ".concat(EventStreamContentType, ", Actual: ").concat(contentType));
      }
  }

  exports.EventStreamContentType = EventStreamContentType;
  exports.fetchEventSource = fetchEventSource;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map
