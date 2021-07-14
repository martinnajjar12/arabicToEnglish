/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/arabic-name-to-en/app.js":
/*!***********************************************!*\
  !*** ./node_modules/arabic-name-to-en/app.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const trans = __webpack_require__(/*! ./translate */ \"./node_modules/arabic-name-to-en/translate.js\");\n\nfunction toEnName(str) {\n  let finalName = \"\";\n  let array = str.split(\" \");\n  for (index in array) {\n    enName = trans(array[index]);\n    finalName += enName + \" \";\n  }\n  return finalName;\n}\n\nmodule.exports = toEnName;\n\n\n//# sourceURL=webpack://arabicToEnglish/./node_modules/arabic-name-to-en/app.js?");

/***/ }),

/***/ "./node_modules/arabic-name-to-en/cases/firstLetter.cases.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arabic-name-to-en/cases/firstLetter.cases.js ***!
  \*******************************************************************/
/***/ ((module) => {

eval("module.exports = {\n  و: \"w\",\n  ي: \"y\",\n};\n\n\n//# sourceURL=webpack://arabicToEnglish/./node_modules/arabic-name-to-en/cases/firstLetter.cases.js?");

/***/ }),

/***/ "./node_modules/arabic-name-to-en/cases/lastLetter.cases.js":
/*!******************************************************************!*\
  !*** ./node_modules/arabic-name-to-en/cases/lastLetter.cases.js ***!
  \******************************************************************/
/***/ ((module) => {

eval("module.exports = {\n  ه: { action: \"slice\", ه: \"ah\" },\n  ة: { action: \"slice\", ة: \"ah\" },\n//   ي: { action: \"slice\", ي: \"y\" },\n  //   ح: { action: \"slice\", ح: \"ah\" },\n};\n\n\n//# sourceURL=webpack://arabicToEnglish/./node_modules/arabic-name-to-en/cases/lastLetter.cases.js?");

/***/ }),

/***/ "./node_modules/arabic-name-to-en/cases/main.cases.js":
/*!************************************************************!*\
  !*** ./node_modules/arabic-name-to-en/cases/main.cases.js ***!
  \************************************************************/
/***/ ((module) => {

eval("module.exports = {\n  أ: \"a\",\n  ب: \"b\",\n  ج: \"j\",\n  د: \"d\",\n  ه: \"h\",\n  و: \"o\",\n  ز: \"z\",\n  ح: \"h\",\n  ط: \"t\",\n  ي: \"i\",\n  ك: \"k\",\n  ل: \"l\",\n  م: \"m\",\n  ن: \"n\",\n  س: \"s\",\n  ع: \"a\",\n  ف: \"f\",\n  ص: \"s\",\n  ق: \"q\",\n  ر: \"r\",\n  ش: \"sh\",\n  ت: \"t\",\n  ث: \"th\",\n  خ: \"kh\",\n  ذ: \"th\",\n  ض: \"dh\",\n  ظ: \"z\",\n  غ: \"gh\",\n  ا: \"a\",\n  ئ: \"a\",\n  ى: \"a\",\n  ؤ: \"u\",\n  ء: \"a\",\n  ة: \"h\",\n  إ: \"i\",\n  آ: \"a\",\n  \" \": \" \",\n  \"َ\": \"\",\n  \"ً\": \"\",\n  \"ُ\": \"\",\n  \"ِ\": \"\",\n  \"ٍ\": \"\",\n  \"ْ\": \"\",\n  \"ِ\": \"\",\n  \"ٌ\": \"\",\n  \"ّ\": \"\",\n  ی: \"a\",\n};\n\n\n//# sourceURL=webpack://arabicToEnglish/./node_modules/arabic-name-to-en/cases/main.cases.js?");

/***/ }),

/***/ "./node_modules/arabic-name-to-en/cases/middleLetter.cases.js":
/*!********************************************************************!*\
  !*** ./node_modules/arabic-name-to-en/cases/middleLetter.cases.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("// middleLetter : { beforeLetter: { afterLetter: \"a\" } }\n\nmodule.exports = {\n  ب: {\n    ك: {\n      ر: \"a\",\n    },\n    ع: {\n      ر: \"a\",\n    },\n    خ: {\n      ر: \"a\",\n    },\n    ص: {\n      ا: \"a\",\n    },\n  },\n\n  ز: {\n    ا: {\n      ل: \"a\",\n    },\n    ع: {\n      ت: \"a\",\n    },\n  },\n  ي: {\n    د: {\n      ن: \"e\",\n    },\n    ش: {\n      ت: \"e\",\n      ن: \"e\",\n      م: \"e\",\n      ح: \"e\",\n    },\n    ت: {\n      ش: \"e\",\n      ن: \"e\",\n      م: \"e\",\n      ح: \"e\",\n    },\n  },\n  ه: {\n    ن: {\n      ر: \"u\",\n    },\n  },\n\n  ر: {\n    ج: {\n      ح: \"a\",\n    },\n    ح: {\n      ج: \"a\",\n    },\n  },\n  م: {\n    ح: {\n      د: \"a\",\n    },\n  },\n  ي: {\n    ن: {\n      ن: \"e\",\n    },\n  },\n\n  د: {\n    خ: {\n      ر: \"a\",\n    },\n    ا: {\n      ق: \"i\",\n    },\n    ع: {\n      ي: \"a\",\n    },\n    ا: {\n      م: \"a\",\n    },\n    أ: {\n      م: \"a\",\n    },\n    آ: {\n      م: \"a\",\n    },\n  },\n\n  ض: {\n    خ: {\n      ر: \"i\",\n    },\n  },\n  ف: {\n    ر: {\n      ل: \"a\",\n    },\n    ا: {\n      ي: \"i\",\n    },\n  },\n  ب: {\n    ز: {\n      ا: \"a\",\n    },\n  },\n\n  م: {\n    ز: {\n      ن: \"a\",\n    },\n  },\n  ن: {\n    ا: {\n      س: \"a\",\n      ي: \"e\",\n    },\n    أ: {\n      س: \"a\",\n      ي: \"e\",\n    },\n    إ: {\n      س: \"e\",\n      ي: \"e\",\n    },\n    س: {\n      د: \"a\",\n    },\n  },\n  ح: {\n    ا: {\n      ب: \"i\",\n    },\n    س: {\n      ر: \"a\",\n    },\n  },\n\n  ل: {\n    ع: {\n      ا: \"a\",\n      ك: \"a\",\n      م: \"a\",\n      ش: \"a\",\n      ق: \"a\",\n    },\n  },\n\n  ه: {\n    ا: {\n      ر: \"i\",\n    },\n  },\n\n  ج: {\n    ع: {\n      ب: \"a\",\n      ر: \"a\",\n    },\n    ن: {\n      ب: \"a\",\n      ر: \"a\",\n    },\n  },\n\n  ي: {\n    ف: {\n      ف: \"e\",\n    },\n  },\n};\n\n\n//# sourceURL=webpack://arabicToEnglish/./node_modules/arabic-name-to-en/cases/middleLetter.cases.js?");

/***/ }),

/***/ "./node_modules/arabic-name-to-en/cases/nextLetter.cases.js":
/*!******************************************************************!*\
  !*** ./node_modules/arabic-name-to-en/cases/nextLetter.cases.js ***!
  \******************************************************************/
/***/ ((module) => {

eval("module.exports = {\n  م: {\n    ح: \"u\",\n    ث: \"u\",\n    ص: \"u\",\n    خ: \"u\",\n    ر: \"a\",\n    ه: \"u\",\n    ق: \"u\",\n    ع: \"u\",\n    ف: \"u\",\n    ن: \"u\",\n    ك: \"a\",\n    ي: \"a\",\n  },\n  س: {\n    ه: \"u\",\n    ن: \"a\",\n    و: \"a\",\n    ي: \"a\",\n    ل: \"a\",\n    ع: \"a\",\n    د: \"a\",\n    م: \"a\",\n    ح: \"a\",\n  },\n  ن: {\n    ب: \"a\",\n    د: \"a\",\n    ج: \"a\",\n    ص: \"a\",\n    ز: \"a\",\n    ش: \"a\",\n    ظ: \"i\",\n    س: \"i\",\n    ه: \"u\",\n  },\n  ح: {\n    س: \"u\",\n    ي: \"a\",\n    م: \"a\",\n    ق: \"a\",\n    ز: \"u\",\n    ن: \"a\",\n    ب: \"a\",\n    ج: \"a\",\n    ر: \"a\",\n  },\n  ر: {\n    ح: \"a\",\n    ف: \"a\",\n    ب: \"a\",\n    ض: \"a\",\n  },\n  ت: {\n    ق: \"u\",\n    ن: \"i\",\n  },\n  ز: {\n    ه: \"u\",\n    ي: \"a\",\n    ن: \"i\",\n  },\n  غ: {\n    ف: \"u\",\n    م: \"a\",\n  },\n  ك: {\n    م: \"a\",\n    ر: \"a\",\n    ل: \"a\",\n  },\n  د: {\n    ع: \"u\",\n  },\n  ض: {\n    ح: \"u\",\n    ر: \"u\",\n  },\n  ق: {\n    ي: \"a\",\n    ص: \"u\",\n    ر: \"u\",\n    ت: \"u\",\n    د: \"a\",\n    ح: \"a\",\n  },\n  ج: {\n    د: \"a\",\n    ب: \"a\",\n    ه: \"a\",\n  },\n  ب: {\n    د: \"a\",\n  },\n  ؤ: {\n    ي: \"a\",\n  },\n  ط: {\n    ن: \"a\",\n    ي: \"a\",\n  },\n  خ: {\n    ل: \"a\",\n    ت: \"i\",\n  },\n  ي: {\n    م: \"a\",\n    ز: \"a\",\n  },\n  و: {\n      ر: \"a\",\n    // ر: \"\",\n  },\n  ه: {\n    د: \"a\",\n  },\n  ش: {\n    ه: \"a\",\n  },\n  ص: {\n    د: \"a\",\n    ر: \"a\",\n    ف: \"a\",\n    ك: \"a\",\n    ن: \"a\",\n    ه: \"u\",\n  },\n  ف: {\n    ذ: \"a\",\n    ن: \"a\",\n    ر: \"a\",\n    ض: \"a\",\n    ج: \"a\",\n    ك: \"i\",\n    ق: \"a\",\n    خ: \"a\",\n    ز: \"a\",\n  },\n\n  ل: {\n    م: \"a\",\n    ي: \"a\",\n    ق: \"i\",\n  },\n};\n\n\n//# sourceURL=webpack://arabicToEnglish/./node_modules/arabic-name-to-en/cases/nextLetter.cases.js?");

/***/ }),

/***/ "./node_modules/arabic-name-to-en/cases/specialLetter.cases.js":
/*!*********************************************************************!*\
  !*** ./node_modules/arabic-name-to-en/cases/specialLetter.cases.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("module.exports = {\n  و: {\n    ا: \"w\",\n    ج: \"w\",\n    action: \"slice\",\n  },\n  م: {\n    ع: \"u\",\n    action: \"\",\n  },\n  ئ: {\n    ل: \"e\",\n    action: \"slice\",\n  },\n  ا: {\n    ش: \"I\",\n    action: \"slice\",\n  },\n};\n\n\n//# sourceURL=webpack://arabicToEnglish/./node_modules/arabic-name-to-en/cases/specialLetter.cases.js?");

/***/ }),

/***/ "./node_modules/arabic-name-to-en/cases/threeLetters.cases.js":
/*!********************************************************************!*\
  !*** ./node_modules/arabic-name-to-en/cases/threeLetters.cases.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("module.exports = {\n  م: {\n    ح: {\n      م: \"u\",\n      ا: \"a\",\n      أ: \"a\",\n      ب: \"a\",\n      ف: \"a\",\n      ج: \"a\",\n    },\n    ي: {\n      ر: \"e\",\n      ث: \"e\",\n    },\n    ج: {\n      ي: \"a\",\n    },\n    ن: {\n      ي: \"a\",\n    },\n  },\n  و: {\n    س: {\n      ف: \"u\",\n    },\n  },\n  س: {\n    ل: {\n      ي: \"u\",\n    },\n    م: {\n      ا: \"a\",\n    },\n    ف: {\n      ي: \"u\",\n    },\n    ق: {\n      ي: \"u\",\n    },\n    و: {\n      ا: \"a\",\n    },\n    ي: {\n      ا: \"a\",\n    },\n    م: {\n      ر: \"a\",\n      ا: \"a\",\n    },\n    ن: {\n      ا: \"a\",\n      د: \"a\",\n    },\n    ر: {\n      ى: \"u\",\n    },\n  },\n  ع: {\n    م: {\n      ا: \"m\",\n    },\n    د: {\n      ي: \"u\",\n    },\n    ز: {\n      ت: \"i\",\n    },\n    ط: {\n      ا: \"a\",\n      ب: \"a\",\n      س: \"a\",\n      ي: \"a\",\n      ز: \"a\",\n      ر: \"i\",\n      ق: \"a\",\n      ش: \"a\",\n      ف: \"a\",\n      ا: \"a\",\n    },\n  },\n  ب: {\n    ر: {\n      ا: \"a\",\n    },\n    د: {\n      ر: \"a\",\n    },\n    ل: {\n      ا: \"i\",\n    },\n  },\n  خ: {\n    د: {\n      ر: \"a\",\n    },\n    ض: {\n      ر: \"i\",\n    },\n    ط: {\n      ا: \"a\",\n    },\n    ظ: {\n      ا: \"a\",\n    },\n    م: {\n      ا: \"a\",\n      ي: \"a\",\n    },\n    ي: {\n      ر: \"a\",\n    },\n  },\n  ح: {\n    ظ: {\n      ي: \"a\",\n    },\n    ك: {\n      ي: \"a\",\n    },\n    ل: {\n      و: \"i\",\n      ي: \"a\",\n    },\n    س: {\n      ن: \"a\",\n    },\n  },\n  ش: {\n    م: {\n      س: \"a\",\n    },\n    ر: {\n      و: \"u\",\n    },\n    ه: {\n      ر: \"u\",\n    },\n    ي: {\n      ت: \"e\",\n    },\n    ج: {\n      ر: \"a\",\n    },\n  },\n  د: {\n    ر: {\n      و: \"a\",\n    },\n  },\n  ز: {\n    م: {\n      ن: \"a\",\n      ا: \"a\",\n    },\n    ه: {\n      ي: \"u\",\n      ر: \"u\",\n    },\n    ي: {\n      د: \"a\",\n      ن: \"a\",\n    },\n  },\n  ر: {\n    ق: {\n      ي: \"u\",\n    },\n    و: {\n      ا: \"a\",\n    },\n    ي: {\n      ا: \"a\",\n    },\n  },\n  ل: {\n    م: {\n      ى: \"u\",\n    },\n  },\n  ن: {\n    و: {\n      ر: \"\",\n    },\n  },\n  ه: {\n    ي: {\n      ف: \"a\",\n      ل: \"a\",\n      م: \"a\",\n    },\n  },\n  ص: {\n    ب: {\n      ا: \"a\",\n      ر: \"a\",\n    },\n  },\n  ط: {\n    ل: {\n      ا: \"a\",\n    },\n  },\n};\n\n\n//# sourceURL=webpack://arabicToEnglish/./node_modules/arabic-name-to-en/cases/threeLetters.cases.js?");

/***/ }),

/***/ "./node_modules/arabic-name-to-en/translate.js":
/*!*****************************************************!*\
  !*** ./node_modules/arabic-name-to-en/translate.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const tools = __webpack_require__(/*! ./utility */ \"./node_modules/arabic-name-to-en/utility.js\");\n\nmodule.exports = trans = (name) => {\n  if (!name) return \"\";\n  let enName = \"\";\n  for (index in name) {\n    i = parseInt(index);\n    if (tools.firstLetter(i)) enName = tools.convertTheFirstLetters(name[i]);\n    else enName += tools.convertLetter(name[i], i);\n    if (!tools.isItLastLetter(i, name)) {\n      if (tools.checkThreeLetters(name[i], name[i + 1], name[i + 2]))\n        enName += tools.checkThreeLetters(name[i], name[i + 1], name[i + 2]);\n      else enName += tools.checkNextLetter(name[i], name[i + 1]);\n      enName += tools.checkMiddleLetters(name[i], name[i - 1], name[i + 1]);\n      enName = tools.checkSpecialLetter(enName, name[i], name[i + 1]);\n    }\n  }\n  enName = tools.checkLastLetter(enName, name[name.length - 1]);\n  return tools.capitalize(enName);\n};\n\n\n//# sourceURL=webpack://arabicToEnglish/./node_modules/arabic-name-to-en/translate.js?");

/***/ }),

/***/ "./node_modules/arabic-name-to-en/utility.js":
/*!***************************************************!*\
  !*** ./node_modules/arabic-name-to-en/utility.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const caseObj = __webpack_require__(/*! ./cases/main.cases */ \"./node_modules/arabic-name-to-en/cases/main.cases.js\");\nconst nextObj = __webpack_require__(/*! ./cases/nextLetter.cases */ \"./node_modules/arabic-name-to-en/cases/nextLetter.cases.js\");\nconst firstObj = __webpack_require__(/*! ./cases/firstLetter.cases */ \"./node_modules/arabic-name-to-en/cases/firstLetter.cases.js\");\nconst specialObj = __webpack_require__(/*! ./cases/specialLetter.cases */ \"./node_modules/arabic-name-to-en/cases/specialLetter.cases.js\");\nconst lastObj = __webpack_require__(/*! ./cases/lastLetter.cases */ \"./node_modules/arabic-name-to-en/cases/lastLetter.cases.js\");\nconst threeObj = __webpack_require__(/*! ./cases/threeLetters.cases */ \"./node_modules/arabic-name-to-en/cases/threeLetters.cases.js\");\nconst middleObj = __webpack_require__(/*! ./cases/middleLetter.cases */ \"./node_modules/arabic-name-to-en/cases/middleLetter.cases.js\");\n\nlet tools = {};\n\n/**\n * Check if the loop on the first letter\n * I've added this function to make the code more readable\n * @param {number} index\n * @example\n * firstLetter(1) => false\n */\ntools.firstLetter = (index) => !index;\n\n/**\n * Change the first letter cases\n * @param {string} letter\n * @example\n * convertTheFirstLetters('و') => 'w'\n */\ntools.convertTheFirstLetters = (letter) =>\n  firstObj[letter] ? firstObj[letter] : tools.convertLetter(letter);\n\n/**\n * Change the ordenary letters and convert them\n * @param {string} letter\n * @param {number} index\n * @example\n * convertLetter('م') => 'm'\n */\ntools.convertLetter = (letter, index) =>\n  caseObj[letter] ? caseObj[letter] : letter;\n\n/**\n * Some Letters depends on the coming next one to add some extra letters in between\n * @param {string} letter\n * @param {string} nextLetter\n * @example\n * checkNextLetter('م', 'ح') => 'muh'\n */\ntools.checkNextLetter = (letter, nextLetter) =>\n  nextObj[letter] != undefined\n    ? nextObj[letter][nextLetter]\n      ? nextObj[letter][nextLetter]\n      : \"\"\n    : \"\";\n\n/**\n * modify the whole word if there is a special cas\n * @param {string} enName\n * @param {string} letter\n * @param {string} nextLetter\n * @example\n * checkSpecialLetter('mar', 'و', 'ا') => 'Marwa'\n */\ntools.checkSpecialLetter = (enName, letter, nextLetter) =>\n  specialObj[letter] != undefined\n    ? specialObj[letter][nextLetter]\n      ? specialObj[letter][\"action\"] == \"slice\"\n        ? enName.slice(0, -1) + specialObj[letter][nextLetter]\n        : enName\n      : enName\n    : enName;\n\n/**\n * Changing the last letter if necessary\n * @param {string} enName\n * @param {string} letter\n * @example\n * checkLastLetter('sara', 'ة') => 'sarah'\n */\ntools.checkLastLetter = (enName, letter) =>\n  lastObj[letter]\n    ? lastObj[letter][\"action\"] == \"slice\"\n      ? enName.slice(0, -1) + lastObj[letter][letter]\n      : enName\n    : enName;\n\n/**\n * Check if the letter was the last one in the word or not\n * @param {number} index\n * @param {string} arName\n * @example\n * isItLastLetter(4, 'حمدون') => false\n */\ntools.isItLastLetter = (index, arName) => index == arName.length - 1;\n\n/**\n *\n * @param {string} firstLetter\n * @param {string} secondLetter\n * @param {string} ThirdLetter\n */\ntools.checkThreeLetters = (firstLetter, secondLetter, thirdLetter) =>\n  threeObj[firstLetter]\n    ? threeObj[firstLetter][secondLetter]\n      ? threeObj[firstLetter][secondLetter][thirdLetter]\n        ? threeObj[firstLetter][secondLetter][thirdLetter]\n        : \"\"\n      : \"\"\n    : \"\";\n\n/**\n *\n * @param {string} firstLetter\n * @param {string} secondLetter\n * @param {string} ThirdLetter\n */\ntools.checkMiddleLetters = (middle, beforeLetter, afterLetter) =>\n  middleObj[middle]\n    ? middleObj[middle][beforeLetter]\n      ? middleObj[middle][beforeLetter][afterLetter]\n        ? middleObj[middle][beforeLetter][afterLetter]\n        : \"\"\n      : \"\"\n    : \"\";\n\n/**\n * Return the En name with first letter as capital\n * @param {string} string\n * @example\n * capitalize('marwan') => 'Marwan'\n */\ntools.capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);\n\nmodule.exports = tools;\n\n\n//# sourceURL=webpack://arabicToEnglish/./node_modules/arabic-name-to-en/utility.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var arabic_name_to_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! arabic-name-to-en */ \"./node_modules/arabic-name-to-en/app.js\");\n/* harmony import */ var arabic_name_to_en__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(arabic_name_to_en__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\nvar textareaField = document.querySelector('#textarea');\nvar submitButton = document.querySelector('#submit');\nvar resultDiv = document.querySelector('#result');\n\nvar romanize = function romanize(e) {\n  e.preventDefault();\n  console.log(arabic_name_to_en__WEBPACK_IMPORTED_MODULE_0___default()(textareaField.value));\n  resultDiv.innerHTML = arabic_name_to_en__WEBPACK_IMPORTED_MODULE_0___default()(textareaField.value);\n};\n\nsubmitButton.addEventListener('click', romanize);\n\n//# sourceURL=webpack://arabicToEnglish/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #f1f1f1;\\n}\\n\\n.form {\\n  max-width: 500px;\\n  margin: 0 auto;\\n}\\n\\n.form-control {\\n  direction: rtl;\\n}\\n\\n.result {\\n  white-space: pre-line;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://arabicToEnglish/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://arabicToEnglish/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://arabicToEnglish/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://arabicToEnglish/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://arabicToEnglish/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://arabicToEnglish/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://arabicToEnglish/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://arabicToEnglish/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://arabicToEnglish/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;