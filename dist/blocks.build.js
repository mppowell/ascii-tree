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
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * BLOCK: ascii-tree\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\n// Import React components for wp\nvar PlainText = wp.blockEditor.PlainText;\nvar createRef = wp.element.createRef;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('cgb/block-ascii-tree', {\n  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n  title: __('ascii-tree - CGB Block'), // Block title.\n  icon: 'category', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n  category: 'formatting', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('ascii-tree — CGB Block'), __('CGB Example'), __('create-guten-block')],\n  attributes: {\n    content: { type: 'string' }\n  },\n\n  /**\n   * The edit function describes the structure of your block in the context of the editor.\n   * This represents what the editor will render when the block is used.\n   *\n   * The \"edit\" property must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   *\n   * @param {Object} props Props.\n   * @returns {Mixed} JSX Component.\n   */\n  edit: function edit(props) {\n    // Creates a <p class='wp-block-cgb-block-ascii-tree'></p>.\n    function updateContent(eventContent) {\n      props.setAttributes({ content: eventContent });\n    }\n\n    // Handle keypress and intercept tabs\n    function handleKeypress(event) {\n      //event.target.style.cssText = \"height:\" + event.target.scrollHeight + \"px\";\n      if (event.keyCode == 9 || event.which == 9) {\n        event.preventDefault();\n        var s = event.target.selectionStart;\n        event.target.value = event.target.value.substring(0, s) + \"    \" + event.target.value.substring(s);\n        event.target.selectionEnd = s + 4;\n      }\n    }\n\n    return wp.element.createElement(PlainText, {\n      onChange: updateContent,\n      onKeyDown: handleKeypress,\n      className: props.className,\n      placeholder: 'Type tree here',\n      keepPlaceholderOnFocus: true,\n      value: props.attributes.content\n    });\n  },\n\n  /**\n   * The save function defines the way in which the different attributes should be combined\n   * into the final markup, which is then serialized by Gutenberg into post_content.\n   *\n   * The \"save\" property must be specified and must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   *\n   * @param {Object} props Props.\n   * @returns {Mixed} JSX Frontend HTML.\n   */\n  save: function save(props) {\n    return wp.element.createElement(\n      'pre',\n      { className: props.className },\n      wp.element.createElement(\n        'code',\n        null,\n        generate(props.attributes.content)\n      )\n    );\n  }\n});\n\n/*\nThe following section is for custom functions needed for this block. Due to Javascript function hoisting,\nthese will be defined in the global scope and avaialble in the edit and save functions above.\n\nThe code used here is largely copied from the ascii-tree plugin for atom see here: https://github.com/ramtinsoltani/atom-ascii-tree\n*/\nfunction generate(selection) {\n\n  if (!selection || !selection.trim()) return;\n\n  var result = '';\n  var characters = {\n\n    child: '├── ',\n    lastChild: '└── ',\n    indentWithLine: '│   ',\n    indent: '    '\n\n  };\n\n  var object = parseToObject(selection);\n\n  var generated = [];\n\n  buildLinesFromObject(object, generated, characters);\n\n  return generated.join('\\n');\n}\n\nfunction parseToObject(selection) {\n  var object = {};\n  var lastParents = []; // To keep track of the last parents known on each level\n\n  var text = selection.replace(/\\r\\n/g, '\\n').replace(/\\n+/g, '\\n').replace(/^\\n/, '').replace(/\\n$/, '').split('\\n');\n\n  // Read each line\n  text.forEach(function (line, index) {\n\n    // If line is root (multiple roots are valid)\n    if (line.trim().substr(0, 3) !== '+--') {\n\n      object[index + ':' + line.trim()] = {};\n      lastParents[0] = index + ':' + line.trim();\n    } else {\n\n      var currentLevel = line.indexOf('+--') / 4 + 1;\n      var currentNode = index + ':' + line.replace('+--', '').trim();\n      var parentIndex = currentLevel - 1;\n      var ref = object;\n\n      // Add the current node to the right parent\n      for (var lastParentIndex in lastParents) {\n\n        ref = ref[lastParents[lastParentIndex]];\n\n        // If parent reached (note that lastParentIndex is a string)\n        if (lastParentIndex == parentIndex) {\n\n          if (!ref) return;\n\n          ref[currentNode] = {};\n\n          break;\n        }\n      }\n\n      // Determine if current node is a parent itself\n      if (text[index + 1]) {\n\n        var possibleParentIndicator = text[index + 1].substr(line.indexOf('+--') + 4, 3);\n\n        if (possibleParentIndicator === '+--') lastParents[currentLevel] = currentNode;\n      }\n    }\n  });\n\n  return object;\n}\n\nfunction buildLinesFromObject(object, generated, characters, prefix, level) {\n  // Default values\n  prefix = prefix || '';\n  level = level || 0;\n  var displayRootChar = false;\n\n  var nodes = Object.keys(object);\n\n  for (var index in nodes) {\n\n    var lastChild = !nodes[parseInt(index) + 1];\n\n    // Generate a new line with current node prefixed\n    generated.push(prefix + (!level && displayRootChar ? '.' : '') + (level ? lastChild ? characters.lastChild : characters.child : '') + nodes[index].replace(/^\\d+:/, ''));\n\n    var children = Object.keys(object[nodes[index]]);\n\n    if (children.length) {\n\n      var childPrefix = '';\n\n      // If current node is the last child, prefix it's children differently\n      if (level) {\n\n        childPrefix += lastChild ? prefix + characters.indent : prefix + characters.indentWithLine;\n      }\n\n      // Generate lines from child\n      buildLinesFromObject(object[nodes[index]], generated, characters, childPrefix, level + 1);\n    }\n  }\n}\n\n/*\n\n  __reverseGeneratedTree(selection, characters) {\n\n    let lines = selection\n                 .replace(/\\r\\n/g, '\\n')\n                 .replace(/\\n+/g, '\\n')\n                 .replace(/^\\n/, '')\n                 .replace(/\\n$/, '')\n                 .split('\\n');\n\n    let indentRegex = new RegExp(characters.indent, 'g');\n    let indentWithLineRegex = new RegExp(characters.indentWithLine, 'g');\n\n    lines.forEach((line, index) => {\n\n      if ( line.indexOf(characters.child) !== -1 || line.indexOf(characters.lastChild) !== -1 ) {\n\n        lines[index] = line\n                 .replace(characters.child, '+-- ')\n                 .replace(characters.lastChild, '+-- ')\n                 .replace(indentRegex, '    ')\n                 .replace(indentWithLineRegex, '    ');\n\n      }\n      else if ( atom.config.get('ascii-tree.characters.rootPrefix') ) {\n\n        lines[index] = line.replace(/^\\./, '');\n\n      }\n\n    });\n\n    return lines.join('\\n');\n\n  },\n\n  __interpretAsObject(selection) {\n\n    \n\n  },\n\n  __buildLinesFromObject(object, generated, characters, prefix, level) {\n\n    \n\n  }\n\n};\n*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGFzY2lpLXRyZWVcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG4vLyBJbXBvcnQgUmVhY3QgY29tcG9uZW50cyBmb3Igd3BcbnZhciBQbGFpblRleHQgPSB3cC5ibG9ja0VkaXRvci5QbGFpblRleHQ7XG52YXIgY3JlYXRlUmVmID0gd3AuZWxlbWVudC5jcmVhdGVSZWY7XG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnY2diL2Jsb2NrLWFzY2lpLXRyZWUnLCB7XG4gIC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuICB0aXRsZTogX18oJ2FzY2lpLXRyZWUgLSBDR0IgQmxvY2snKSwgLy8gQmxvY2sgdGl0bGUuXG4gIGljb246ICdjYXRlZ29yeScsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cbiAgY2F0ZWdvcnk6ICdmb3JtYXR0aW5nJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG4gIGtleXdvcmRzOiBbX18oJ2FzY2lpLXRyZWUg4oCUIENHQiBCbG9jaycpLCBfXygnQ0dCIEV4YW1wbGUnKSwgX18oJ2NyZWF0ZS1ndXRlbi1ibG9jaycpXSxcbiAgYXR0cmlidXRlczoge1xuICAgIGNvbnRlbnQ6IHsgdHlwZTogJ3N0cmluZycgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cbiAgICpcbiAgICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXG4gICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIENvbXBvbmVudC5cbiAgICovXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICAvLyBDcmVhdGVzIGEgPHAgY2xhc3M9J3dwLWJsb2NrLWNnYi1ibG9jay1hc2NpaS10cmVlJz48L3A+LlxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbnRlbnQoZXZlbnRDb250ZW50KSB7XG4gICAgICBwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgY29udGVudDogZXZlbnRDb250ZW50IH0pO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBrZXlwcmVzcyBhbmQgaW50ZXJjZXB0IHRhYnNcbiAgICBmdW5jdGlvbiBoYW5kbGVLZXlwcmVzcyhldmVudCkge1xuICAgICAgLy9ldmVudC50YXJnZXQuc3R5bGUuY3NzVGV4dCA9IFwiaGVpZ2h0OlwiICsgZXZlbnQudGFyZ2V0LnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDkgfHwgZXZlbnQud2hpY2ggPT0gOSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgcyA9IGV2ZW50LnRhcmdldC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlLnN1YnN0cmluZygwLCBzKSArIFwiICAgIFwiICsgZXZlbnQudGFyZ2V0LnZhbHVlLnN1YnN0cmluZyhzKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnNlbGVjdGlvbkVuZCA9IHMgKyA0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUGxhaW5UZXh0LCB7XG4gICAgICBvbkNoYW5nZTogdXBkYXRlQ29udGVudCxcbiAgICAgIG9uS2V5RG93bjogaGFuZGxlS2V5cHJlc3MsXG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIHBsYWNlaG9sZGVyOiAnVHlwZSB0cmVlIGhlcmUnLFxuICAgICAga2VlcFBsYWNlaG9sZGVyT25Gb2N1czogdHJ1ZSxcbiAgICAgIHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnRcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcbiAgICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuICAgKlxuICAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXG4gICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIEZyb250ZW5kIEhUTUwuXG4gICAqL1xuICBzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICdwcmUnLFxuICAgICAgeyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnY29kZScsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGdlbmVyYXRlKHByb3BzLmF0dHJpYnV0ZXMuY29udGVudClcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxuLypcblRoZSBmb2xsb3dpbmcgc2VjdGlvbiBpcyBmb3IgY3VzdG9tIGZ1bmN0aW9ucyBuZWVkZWQgZm9yIHRoaXMgYmxvY2suIER1ZSB0byBKYXZhc2NyaXB0IGZ1bmN0aW9uIGhvaXN0aW5nLFxudGhlc2Ugd2lsbCBiZSBkZWZpbmVkIGluIHRoZSBnbG9iYWwgc2NvcGUgYW5kIGF2YWlhbGJsZSBpbiB0aGUgZWRpdCBhbmQgc2F2ZSBmdW5jdGlvbnMgYWJvdmUuXG5cblRoZSBjb2RlIHVzZWQgaGVyZSBpcyBsYXJnZWx5IGNvcGllZCBmcm9tIHRoZSBhc2NpaS10cmVlIHBsdWdpbiBmb3IgYXRvbSBzZWUgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL3JhbXRpbnNvbHRhbmkvYXRvbS1hc2NpaS10cmVlXG4qL1xuZnVuY3Rpb24gZ2VuZXJhdGUoc2VsZWN0aW9uKSB7XG5cbiAgaWYgKCFzZWxlY3Rpb24gfHwgIXNlbGVjdGlvbi50cmltKCkpIHJldHVybjtcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBjaGFyYWN0ZXJzID0ge1xuXG4gICAgY2hpbGQ6ICfilJzilIDilIAgJyxcbiAgICBsYXN0Q2hpbGQ6ICfilJTilIDilIAgJyxcbiAgICBpbmRlbnRXaXRoTGluZTogJ+KUgiAgICcsXG4gICAgaW5kZW50OiAnICAgICdcblxuICB9O1xuXG4gIHZhciBvYmplY3QgPSBwYXJzZVRvT2JqZWN0KHNlbGVjdGlvbik7XG5cbiAgdmFyIGdlbmVyYXRlZCA9IFtdO1xuXG4gIGJ1aWxkTGluZXNGcm9tT2JqZWN0KG9iamVjdCwgZ2VuZXJhdGVkLCBjaGFyYWN0ZXJzKTtcblxuICByZXR1cm4gZ2VuZXJhdGVkLmpvaW4oJ1xcbicpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRvT2JqZWN0KHNlbGVjdGlvbikge1xuICB2YXIgb2JqZWN0ID0ge307XG4gIHZhciBsYXN0UGFyZW50cyA9IFtdOyAvLyBUbyBrZWVwIHRyYWNrIG9mIHRoZSBsYXN0IHBhcmVudHMga25vd24gb24gZWFjaCBsZXZlbFxuXG4gIHZhciB0ZXh0ID0gc2VsZWN0aW9uLnJlcGxhY2UoL1xcclxcbi9nLCAnXFxuJykucmVwbGFjZSgvXFxuKy9nLCAnXFxuJykucmVwbGFjZSgvXlxcbi8sICcnKS5yZXBsYWNlKC9cXG4kLywgJycpLnNwbGl0KCdcXG4nKTtcblxuICAvLyBSZWFkIGVhY2ggbGluZVxuICB0ZXh0LmZvckVhY2goZnVuY3Rpb24gKGxpbmUsIGluZGV4KSB7XG5cbiAgICAvLyBJZiBsaW5lIGlzIHJvb3QgKG11bHRpcGxlIHJvb3RzIGFyZSB2YWxpZClcbiAgICBpZiAobGluZS50cmltKCkuc3Vic3RyKDAsIDMpICE9PSAnKy0tJykge1xuXG4gICAgICBvYmplY3RbaW5kZXggKyAnOicgKyBsaW5lLnRyaW0oKV0gPSB7fTtcbiAgICAgIGxhc3RQYXJlbnRzWzBdID0gaW5kZXggKyAnOicgKyBsaW5lLnRyaW0oKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICB2YXIgY3VycmVudExldmVsID0gbGluZS5pbmRleE9mKCcrLS0nKSAvIDQgKyAxO1xuICAgICAgdmFyIGN1cnJlbnROb2RlID0gaW5kZXggKyAnOicgKyBsaW5lLnJlcGxhY2UoJystLScsICcnKS50cmltKCk7XG4gICAgICB2YXIgcGFyZW50SW5kZXggPSBjdXJyZW50TGV2ZWwgLSAxO1xuICAgICAgdmFyIHJlZiA9IG9iamVjdDtcblxuICAgICAgLy8gQWRkIHRoZSBjdXJyZW50IG5vZGUgdG8gdGhlIHJpZ2h0IHBhcmVudFxuICAgICAgZm9yICh2YXIgbGFzdFBhcmVudEluZGV4IGluIGxhc3RQYXJlbnRzKSB7XG5cbiAgICAgICAgcmVmID0gcmVmW2xhc3RQYXJlbnRzW2xhc3RQYXJlbnRJbmRleF1dO1xuXG4gICAgICAgIC8vIElmIHBhcmVudCByZWFjaGVkIChub3RlIHRoYXQgbGFzdFBhcmVudEluZGV4IGlzIGEgc3RyaW5nKVxuICAgICAgICBpZiAobGFzdFBhcmVudEluZGV4ID09IHBhcmVudEluZGV4KSB7XG5cbiAgICAgICAgICBpZiAoIXJlZikgcmV0dXJuO1xuXG4gICAgICAgICAgcmVmW2N1cnJlbnROb2RlXSA9IHt9O1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRGV0ZXJtaW5lIGlmIGN1cnJlbnQgbm9kZSBpcyBhIHBhcmVudCBpdHNlbGZcbiAgICAgIGlmICh0ZXh0W2luZGV4ICsgMV0pIHtcblxuICAgICAgICB2YXIgcG9zc2libGVQYXJlbnRJbmRpY2F0b3IgPSB0ZXh0W2luZGV4ICsgMV0uc3Vic3RyKGxpbmUuaW5kZXhPZignKy0tJykgKyA0LCAzKTtcblxuICAgICAgICBpZiAocG9zc2libGVQYXJlbnRJbmRpY2F0b3IgPT09ICcrLS0nKSBsYXN0UGFyZW50c1tjdXJyZW50TGV2ZWxdID0gY3VycmVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBidWlsZExpbmVzRnJvbU9iamVjdChvYmplY3QsIGdlbmVyYXRlZCwgY2hhcmFjdGVycywgcHJlZml4LCBsZXZlbCkge1xuICAvLyBEZWZhdWx0IHZhbHVlc1xuICBwcmVmaXggPSBwcmVmaXggfHwgJyc7XG4gIGxldmVsID0gbGV2ZWwgfHwgMDtcbiAgdmFyIGRpc3BsYXlSb290Q2hhciA9IGZhbHNlO1xuXG4gIHZhciBub2RlcyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgZm9yICh2YXIgaW5kZXggaW4gbm9kZXMpIHtcblxuICAgIHZhciBsYXN0Q2hpbGQgPSAhbm9kZXNbcGFyc2VJbnQoaW5kZXgpICsgMV07XG5cbiAgICAvLyBHZW5lcmF0ZSBhIG5ldyBsaW5lIHdpdGggY3VycmVudCBub2RlIHByZWZpeGVkXG4gICAgZ2VuZXJhdGVkLnB1c2gocHJlZml4ICsgKCFsZXZlbCAmJiBkaXNwbGF5Um9vdENoYXIgPyAnLicgOiAnJykgKyAobGV2ZWwgPyBsYXN0Q2hpbGQgPyBjaGFyYWN0ZXJzLmxhc3RDaGlsZCA6IGNoYXJhY3RlcnMuY2hpbGQgOiAnJykgKyBub2Rlc1tpbmRleF0ucmVwbGFjZSgvXlxcZCs6LywgJycpKTtcblxuICAgIHZhciBjaGlsZHJlbiA9IE9iamVjdC5rZXlzKG9iamVjdFtub2Rlc1tpbmRleF1dKTtcblxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcblxuICAgICAgdmFyIGNoaWxkUHJlZml4ID0gJyc7XG5cbiAgICAgIC8vIElmIGN1cnJlbnQgbm9kZSBpcyB0aGUgbGFzdCBjaGlsZCwgcHJlZml4IGl0J3MgY2hpbGRyZW4gZGlmZmVyZW50bHlcbiAgICAgIGlmIChsZXZlbCkge1xuXG4gICAgICAgIGNoaWxkUHJlZml4ICs9IGxhc3RDaGlsZCA/IHByZWZpeCArIGNoYXJhY3RlcnMuaW5kZW50IDogcHJlZml4ICsgY2hhcmFjdGVycy5pbmRlbnRXaXRoTGluZTtcbiAgICAgIH1cblxuICAgICAgLy8gR2VuZXJhdGUgbGluZXMgZnJvbSBjaGlsZFxuICAgICAgYnVpbGRMaW5lc0Zyb21PYmplY3Qob2JqZWN0W25vZGVzW2luZGV4XV0sIGdlbmVyYXRlZCwgY2hhcmFjdGVycywgY2hpbGRQcmVmaXgsIGxldmVsICsgMSk7XG4gICAgfVxuICB9XG59XG5cbi8qXG5cbiAgX19yZXZlcnNlR2VuZXJhdGVkVHJlZShzZWxlY3Rpb24sIGNoYXJhY3RlcnMpIHtcblxuICAgIGxldCBsaW5lcyA9IHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxyXFxuL2csICdcXG4nKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxuKy9nLCAnXFxuJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL15cXG4vLCAnJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcbiQvLCAnJylcbiAgICAgICAgICAgICAgICAgLnNwbGl0KCdcXG4nKTtcblxuICAgIGxldCBpbmRlbnRSZWdleCA9IG5ldyBSZWdFeHAoY2hhcmFjdGVycy5pbmRlbnQsICdnJyk7XG4gICAgbGV0IGluZGVudFdpdGhMaW5lUmVnZXggPSBuZXcgUmVnRXhwKGNoYXJhY3RlcnMuaW5kZW50V2l0aExpbmUsICdnJyk7XG5cbiAgICBsaW5lcy5mb3JFYWNoKChsaW5lLCBpbmRleCkgPT4ge1xuXG4gICAgICBpZiAoIGxpbmUuaW5kZXhPZihjaGFyYWN0ZXJzLmNoaWxkKSAhPT0gLTEgfHwgbGluZS5pbmRleE9mKGNoYXJhY3RlcnMubGFzdENoaWxkKSAhPT0gLTEgKSB7XG5cbiAgICAgICAgbGluZXNbaW5kZXhdID0gbGluZVxuICAgICAgICAgICAgICAgICAucmVwbGFjZShjaGFyYWN0ZXJzLmNoaWxkLCAnKy0tICcpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKGNoYXJhY3RlcnMubGFzdENoaWxkLCAnKy0tICcpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKGluZGVudFJlZ2V4LCAnICAgICcpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKGluZGVudFdpdGhMaW5lUmVnZXgsICcgICAgJyk7XG5cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCBhdG9tLmNvbmZpZy5nZXQoJ2FzY2lpLXRyZWUuY2hhcmFjdGVycy5yb290UHJlZml4JykgKSB7XG5cbiAgICAgICAgbGluZXNbaW5kZXhdID0gbGluZS5yZXBsYWNlKC9eXFwuLywgJycpO1xuXG4gICAgICB9XG5cbiAgICB9KTtcblxuICAgIHJldHVybiBsaW5lcy5qb2luKCdcXG4nKTtcblxuICB9LFxuXG4gIF9faW50ZXJwcmV0QXNPYmplY3Qoc2VsZWN0aW9uKSB7XG5cbiAgICBcblxuICB9LFxuXG4gIF9fYnVpbGRMaW5lc0Zyb21PYmplY3Qob2JqZWN0LCBnZW5lcmF0ZWQsIGNoYXJhY3RlcnMsIHByZWZpeCwgbGV2ZWwpIHtcblxuICAgIFxuXG4gIH1cblxufTtcbiovXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);