/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/client/index.js: Unexpected token (22:4)\n\u001b[0m \u001b[90m 20 | \u001b[39m\u001b[36mconst\u001b[39m \u001b[33mRoot\u001b[39m \u001b[33m=\u001b[39m () \u001b[33m=>\u001b[39m {\n \u001b[90m 21 | \u001b[39m  \u001b[36mreturn\u001b[39m (\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 22 | \u001b[39m    \u001b[33m<\u001b[39m\u001b[33mApolloProvider\u001b[39m client\u001b[33m=\u001b[39m{client}\u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 23 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33mRouter\u001b[39m history\u001b[33m=\u001b[39m{hashHistory}\u001b[33m>\u001b[39m\n \u001b[90m 24 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mRoute\u001b[39m path\u001b[33m=\u001b[39m\u001b[32m\"/\"\u001b[39m component\u001b[33m=\u001b[39m{\u001b[33mApp\u001b[39m}\u001b[33m>\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mRoute\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 25 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mRouter\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Parser.pp$5.raise (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:4454:13)\n    at Parser.pp.unexpected (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:1761:8)\n    at Parser.pp$3.parseExprAtom (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3750:12)\n    at Parser.pp$3.parseExprSubscripts (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3494:19)\n    at Parser.pp$3.parseMaybeUnary (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3474:19)\n    at Parser.pp$3.parseExprOps (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3404:19)\n    at Parser.pp$3.parseMaybeConditional (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3381:19)\n    at Parser.pp$3.parseMaybeAssign (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3344:19)\n    at Parser.pp$3.parseParenAndDistinguishExpression (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3828:26)\n    at Parser.pp$3.parseExprAtom (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3709:19)\n    at Parser.pp$3.parseExprSubscripts (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3494:19)\n    at Parser.pp$3.parseMaybeUnary (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3474:19)\n    at Parser.pp$3.parseExprOps (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3404:19)\n    at Parser.pp$3.parseMaybeConditional (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3381:19)\n    at Parser.pp$3.parseMaybeAssign (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3344:19)\n    at Parser.pp$3.parseExpression (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3306:19)\n    at Parser.pp$1.parseReturnStatement (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:2078:26)\n    at Parser.pp$1.parseStatement (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:1848:19)\n    at Parser.pp$1.parseBlockBody (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:2268:21)\n    at Parser.pp$1.parseBlock (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:2247:8)\n    at Parser.pp$3.parseFunctionBody (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:4235:22)\n    at Parser.pp$3.parseArrowExpression (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:4190:8)\n    at Parser.pp$3.parseParenAndDistinguishExpression (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3855:17)\n    at Parser.pp$3.parseExprAtom (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3709:19)\n    at Parser.pp$3.parseExprSubscripts (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3494:19)\n    at Parser.pp$3.parseMaybeUnary (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3474:19)\n    at Parser.pp$3.parseExprOps (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3404:19)\n    at Parser.pp$3.parseMaybeConditional (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3381:19)\n    at Parser.pp$3.parseMaybeAssign (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:3344:19)\n    at Parser.pp$1.parseVar (/Users/kareemphillip-jackson/Desktop/Startups/nomad_planner/node_modules/babylon/lib/index.js:2340:24)");

/***/ }
/******/ ]);