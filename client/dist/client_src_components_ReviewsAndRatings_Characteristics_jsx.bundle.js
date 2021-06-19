/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontendcapstone"] = self["webpackChunkfrontendcapstone"] || []).push([["client_src_components_ReviewsAndRatings_Characteristics_jsx"],{

/***/ "./client/src/components/ReviewsAndRatings/Characteristics.jsx":
/*!*********************************************************************!*\
  !*** ./client/src/components/ReviewsAndRatings/Characteristics.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Characteristics_Size_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Characteristics/Size.jsx */ \"./client/src/components/ReviewsAndRatings/Characteristics/Size.jsx\");\n/* harmony import */ var _Characteristics_Width_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Characteristics/Width.jsx */ \"./client/src/components/ReviewsAndRatings/Characteristics/Width.jsx\");\n/* harmony import */ var _Characteristics_Comfort_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Characteristics/Comfort.jsx */ \"./client/src/components/ReviewsAndRatings/Characteristics/Comfort.jsx\");\n/* harmony import */ var _Characteristics_Quality_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Characteristics/Quality.jsx */ \"./client/src/components/ReviewsAndRatings/Characteristics/Quality.jsx\");\n/* harmony import */ var _Characteristics_Length_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Characteristics/Length.jsx */ \"./client/src/components/ReviewsAndRatings/Characteristics/Length.jsx\");\n/* harmony import */ var _Characteristics_Fit_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Characteristics/Fit.jsx */ \"./client/src/components/ReviewsAndRatings/Characteristics/Fit.jsx\");\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\n\n\nvar Slider = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  -webkit-appearance: none;\\n  column-count: 3;\\n  appearance: none;\\n  width: 100%;\\n  height: 4px;\\n  background: #eee;\\n  outline: none;\\n  opacity: 0.7;\\n  -webkit-transition: .2s;\\n  transition: opacity .2s;\\n\\n  &::-webkit-slider-thumb {\\n  -webkit-appearance: none;\\n  appearance: none;\\n  width: 0;\\n  height: 0;\\n  border-left: 5px solid transparent;\\n  border-right: 5px solid transparent;\\n  border-top: 10px solid black;\\n  background: none;\\n  cursor: pointer;\\n}\\n\"])));\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\ndisplay: flex;\\nfont-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;\\nfont-size: 14px;\\nfont-weight: 100;\\n\"])));\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\ndisplay: flex;\\nfont-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;\\njustify-content: space-between;\\nfont-size: 11px;\\nfont-weight: 100;\\n\"])));\nvar Labels = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.label(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([\"\\ndisplay: flex;\\nfont-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;\\nfont-size: 11px;\\nfont-weight: 100;\\n\"])));\nvar LineSpacing = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([\"\\npadding-bottom: 12px;\\n\"])));\nvar styles = {\n  title: Title,\n  text: Text,\n  slider: Slider,\n  labels: Labels,\n  lineSpacing: LineSpacing\n};\n\nfunction Characteristics(_ref) {\n  var characteristics = _ref.characteristics;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Characteristics_Size_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {\n    characteristics: characteristics,\n    styles: styles\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Characteristics_Width_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {\n    characteristics: characteristics,\n    styles: styles\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Characteristics_Comfort_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {\n    characteristics: characteristics,\n    styles: styles\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Characteristics_Quality_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {\n    characteristics: characteristics,\n    styles: styles\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Characteristics_Length_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {\n    characteristics: characteristics,\n    styles: styles\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Characteristics_Fit_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {\n    characteristics: characteristics,\n    styles: styles\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Characteristics);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZGNhcHN0b25lLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Jldmlld3NBbmRSYXRpbmdzL0NoYXJhY3RlcmlzdGljcy5qc3g/NjZmNyJdLCJuYW1lcyI6WyJTbGlkZXIiLCJzdHlsZWQiLCJUaXRsZSIsIlRleHQiLCJMYWJlbHMiLCJMaW5lU3BhY2luZyIsInN0eWxlcyIsInRpdGxlIiwidGV4dCIsInNsaWRlciIsImxhYmVscyIsImxpbmVTcGFjaW5nIiwiQ2hhcmFjdGVyaXN0aWNzIiwiY2hhcmFjdGVyaXN0aWNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsNERBQUgscWlCQUFaO0FBeUJBLElBQU1DLEtBQUssR0FBR0QsMERBQUgsMFBBQVg7QUFPQSxJQUFNRSxJQUFJLEdBQUdGLDBEQUFILDJSQUFWO0FBUUEsSUFBTUcsTUFBTSxHQUFHSCw0REFBSCwwUEFBWjtBQU9BLElBQU1JLFdBQVcsR0FBR0osMERBQUgsZ0dBQWpCO0FBSUEsSUFBTUssTUFBTSxHQUFHO0FBQ2JDLE9BQUssRUFBRUwsS0FETTtBQUViTSxNQUFJLEVBQUVMLElBRk87QUFHYk0sUUFBTSxFQUFFVCxNQUhLO0FBSWJVLFFBQU0sRUFBRU4sTUFKSztBQUtiTyxhQUFXLEVBQUVOO0FBTEEsQ0FBZjs7QUFRQSxTQUFTTyxlQUFULE9BQThDO0FBQUEsTUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjtBQUM1QyxzQkFDRSxpSEFDRSxpREFBQyw4REFBRDtBQUFNLG1CQUFlLEVBQUVBLGVBQXZCO0FBQXdDLFVBQU0sRUFBRVA7QUFBaEQsSUFERixlQUVFLGlEQUFDLCtEQUFEO0FBQU8sbUJBQWUsRUFBRU8sZUFBeEI7QUFBeUMsVUFBTSxFQUFFUDtBQUFqRCxJQUZGLGVBR0UsaURBQUMsaUVBQUQ7QUFBUyxtQkFBZSxFQUFFTyxlQUExQjtBQUEyQyxVQUFNLEVBQUVQO0FBQW5ELElBSEYsZUFJRSxpREFBQyxpRUFBRDtBQUFTLG1CQUFlLEVBQUVPLGVBQTFCO0FBQTJDLFVBQU0sRUFBRVA7QUFBbkQsSUFKRixlQUtFLGlEQUFDLGdFQUFEO0FBQVEsbUJBQWUsRUFBRU8sZUFBekI7QUFBMEMsVUFBTSxFQUFFUDtBQUFsRCxJQUxGLGVBTUUsaURBQUMsNkRBQUQ7QUFBSyxtQkFBZSxFQUFFTyxlQUF0QjtBQUF1QyxVQUFNLEVBQUVQO0FBQS9DLElBTkYsQ0FERjtBQVVEOztBQUVELGlFQUFlTSxlQUFmIiwiZmlsZSI6Ii4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Jldmlld3NBbmRSYXRpbmdzL0NoYXJhY3RlcmlzdGljcy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgU2l6ZSBmcm9tICcuL0NoYXJhY3RlcmlzdGljcy9TaXplLmpzeCc7XG5pbXBvcnQgV2lkdGggZnJvbSAnLi9DaGFyYWN0ZXJpc3RpY3MvV2lkdGguanN4JztcbmltcG9ydCBDb21mb3J0IGZyb20gJy4vQ2hhcmFjdGVyaXN0aWNzL0NvbWZvcnQuanN4JztcbmltcG9ydCBRdWFsaXR5IGZyb20gJy4vQ2hhcmFjdGVyaXN0aWNzL1F1YWxpdHkuanN4JztcbmltcG9ydCBMZW5ndGggZnJvbSAnLi9DaGFyYWN0ZXJpc3RpY3MvTGVuZ3RoLmpzeCc7XG5pbXBvcnQgRml0IGZyb20gJy4vQ2hhcmFjdGVyaXN0aWNzL0ZpdC5qc3gnO1xuXG5jb25zdCBTbGlkZXIgPSBzdHlsZWQuaW5wdXRgXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgY29sdW1uLWNvdW50OiAzO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xuXG4gICY6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxuZGlzcGxheTogZmxleDtcbmZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5mb250LXNpemU6IDE0cHg7XG5mb250LXdlaWdodDogMTAwO1xuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OiBmbGV4O1xuZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWYsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmZvbnQtc2l6ZTogMTFweDtcbmZvbnQtd2VpZ2h0OiAxMDA7XG5gO1xuXG5jb25zdCBMYWJlbHMgPSBzdHlsZWQubGFiZWxgXG5kaXNwbGF5OiBmbGV4O1xuZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWYsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbmZvbnQtc2l6ZTogMTFweDtcbmZvbnQtd2VpZ2h0OiAxMDA7XG5gO1xuXG5jb25zdCBMaW5lU3BhY2luZyA9IHN0eWxlZC5kaXZgXG5wYWRkaW5nLWJvdHRvbTogMTJweDtcbmA7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgdGl0bGU6IFRpdGxlLFxuICB0ZXh0OiBUZXh0LFxuICBzbGlkZXI6IFNsaWRlcixcbiAgbGFiZWxzOiBMYWJlbHMsXG4gIGxpbmVTcGFjaW5nOiBMaW5lU3BhY2luZyxcbn07XG5cbmZ1bmN0aW9uIENoYXJhY3RlcmlzdGljcyh7IGNoYXJhY3RlcmlzdGljcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTaXplIGNoYXJhY3RlcmlzdGljcz17Y2hhcmFjdGVyaXN0aWNzfSBzdHlsZXM9e3N0eWxlc30gLz5cbiAgICAgIDxXaWR0aCBjaGFyYWN0ZXJpc3RpY3M9e2NoYXJhY3RlcmlzdGljc30gc3R5bGVzPXtzdHlsZXN9IC8+XG4gICAgICA8Q29tZm9ydCBjaGFyYWN0ZXJpc3RpY3M9e2NoYXJhY3RlcmlzdGljc30gc3R5bGVzPXtzdHlsZXN9IC8+XG4gICAgICA8UXVhbGl0eSBjaGFyYWN0ZXJpc3RpY3M9e2NoYXJhY3RlcmlzdGljc30gc3R5bGVzPXtzdHlsZXN9IC8+XG4gICAgICA8TGVuZ3RoIGNoYXJhY3RlcmlzdGljcz17Y2hhcmFjdGVyaXN0aWNzfSBzdHlsZXM9e3N0eWxlc30gLz5cbiAgICAgIDxGaXQgY2hhcmFjdGVyaXN0aWNzPXtjaGFyYWN0ZXJpc3RpY3N9IHN0eWxlcz17c3R5bGVzfSAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJpc3RpY3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/ReviewsAndRatings/Characteristics.jsx\n");

/***/ }),

/***/ "./client/src/components/ReviewsAndRatings/Characteristics/Comfort.jsx":
/*!*****************************************************************************!*\
  !*** ./client/src/components/ReviewsAndRatings/Characteristics/Comfort.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* eslint-disable no-else-return */\n\n\nfunction Comfort(props) {\n  if (props.characteristics.Comfort !== undefined) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.lineSpacing, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.title, null, \"Comfort\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.slider, {\n      type: \"range\",\n      min: \"1\",\n      max: \"5\",\n      value: props.characteristics.Comfort.value,\n      readOnly: true,\n      step: \"0.01\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.labels, null, \"Poor\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.labels, null, \"Perfect\")));\n  } else {\n    return null;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comfort);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZGNhcHN0b25lLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Jldmlld3NBbmRSYXRpbmdzL0NoYXJhY3RlcmlzdGljcy9Db21mb3J0LmpzeD9kY2JiIl0sIm5hbWVzIjpbIkNvbWZvcnQiLCJwcm9wcyIsImNoYXJhY3RlcmlzdGljcyIsInVuZGVmaW5lZCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDdEIsTUFBSUEsS0FBSyxDQUFDQyxlQUFOLENBQXNCRixPQUF0QixLQUFrQ0csU0FBdEMsRUFBaUQ7QUFDL0Msd0JBQ0UsaURBQUMsS0FBRCxDQUFPLE1BQVAsQ0FBYyxXQUFkLHFCQUNFLDZFQUNFLGlEQUFDLEtBQUQsQ0FBTyxNQUFQLENBQWMsS0FBZCxrQkFERixlQUVFLGlEQUFDLEtBQUQsQ0FBTyxNQUFQLENBQWMsTUFBZDtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsU0FBRyxFQUFDLEdBRk47QUFHRSxTQUFHLEVBQUMsR0FITjtBQUlFLFdBQUssRUFBRUYsS0FBSyxDQUFDQyxlQUFOLENBQXNCRixPQUF0QixDQUE4QkksS0FKdkM7QUFLRSxjQUFRLE1BTFY7QUFNRSxVQUFJLEVBQUM7QUFOUCxNQUZGLENBREYsZUFZRSxpREFBQyxLQUFELENBQU8sTUFBUCxDQUFjLElBQWQscUJBQ0UsaURBQUMsS0FBRCxDQUFPLE1BQVAsQ0FBYyxNQUFkLGVBREYsZUFFRSxpREFBQyxLQUFELENBQU8sTUFBUCxDQUFjLE1BQWQsa0JBRkYsQ0FaRixDQURGO0FBbUJELEdBcEJELE1Bb0JPO0FBQ0wsV0FBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxpRUFBZUosT0FBZiIsImZpbGUiOiIuL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZXZpZXdzQW5kUmF0aW5ncy9DaGFyYWN0ZXJpc3RpY3MvQ29tZm9ydC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1lbHNlLXJldHVybiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gQ29tZm9ydChwcm9wcykge1xuICBpZiAocHJvcHMuY2hhcmFjdGVyaXN0aWNzLkNvbWZvcnQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cHJvcHMuc3R5bGVzLmxpbmVTcGFjaW5nPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPHByb3BzLnN0eWxlcy50aXRsZT5Db21mb3J0PC9wcm9wcy5zdHlsZXMudGl0bGU+XG4gICAgICAgICAgPHByb3BzLnN0eWxlcy5zbGlkZXJcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgIG1heD1cIjVcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmNoYXJhY3RlcmlzdGljcy5Db21mb3J0LnZhbHVlfVxuICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8cHJvcHMuc3R5bGVzLnRleHQ+XG4gICAgICAgICAgPHByb3BzLnN0eWxlcy5sYWJlbHM+UG9vcjwvcHJvcHMuc3R5bGVzLmxhYmVscz5cbiAgICAgICAgICA8cHJvcHMuc3R5bGVzLmxhYmVscz5QZXJmZWN0PC9wcm9wcy5zdHlsZXMubGFiZWxzPlxuICAgICAgICA8L3Byb3BzLnN0eWxlcy50ZXh0PlxuICAgICAgPC9wcm9wcy5zdHlsZXMubGluZVNwYWNpbmc+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21mb3J0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/ReviewsAndRatings/Characteristics/Comfort.jsx\n");

/***/ }),

/***/ "./client/src/components/ReviewsAndRatings/Characteristics/Fit.jsx":
/*!*************************************************************************!*\
  !*** ./client/src/components/ReviewsAndRatings/Characteristics/Fit.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* eslint-disable no-else-return */\n\n\nfunction Fit(props) {\n  if (props.characteristics.Fit !== undefined) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.lineSpacing, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.title, null, \"Fit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.slider, {\n      type: \"range\",\n      min: \"1\",\n      max: \"5\",\n      value: props.characteristics.Fit.value,\n      readOnly: true,\n      step: \"0.01\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.labels, null, \"Runs tight\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.labels, null, \"Perfect\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.labels, null, \"Runs long\"))); // eslint-disable-next-line no-else-return\n  } else {\n    return null;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZGNhcHN0b25lLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Jldmlld3NBbmRSYXRpbmdzL0NoYXJhY3RlcmlzdGljcy9GaXQuanN4P2E1MWQiXSwibmFtZXMiOlsiRml0IiwicHJvcHMiLCJjaGFyYWN0ZXJpc3RpY3MiLCJ1bmRlZmluZWQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLEdBQVQsQ0FBYUMsS0FBYixFQUFvQjtBQUNsQixNQUFJQSxLQUFLLENBQUNDLGVBQU4sQ0FBc0JGLEdBQXRCLEtBQThCRyxTQUFsQyxFQUE2QztBQUMzQyx3QkFDRSxpREFBQyxLQUFELENBQU8sTUFBUCxDQUFjLFdBQWQscUJBQ0UsNkVBQ0UsaURBQUMsS0FBRCxDQUFPLE1BQVAsQ0FBYyxLQUFkLGNBREYsZUFFRSxpREFBQyxLQUFELENBQU8sTUFBUCxDQUFjLE1BQWQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFNBQUcsRUFBQyxHQUZOO0FBR0UsU0FBRyxFQUFDLEdBSE47QUFJRSxXQUFLLEVBQUVGLEtBQUssQ0FBQ0MsZUFBTixDQUFzQkYsR0FBdEIsQ0FBMEJJLEtBSm5DO0FBS0UsY0FBUSxNQUxWO0FBTUUsVUFBSSxFQUFDO0FBTlAsTUFGRixDQURGLGVBWUUsaURBQUMsS0FBRCxDQUFPLE1BQVAsQ0FBYyxJQUFkLHFCQUNFLGlEQUFDLEtBQUQsQ0FBTyxNQUFQLENBQWMsTUFBZCxxQkFERixlQUVFLGlEQUFDLEtBQUQsQ0FBTyxNQUFQLENBQWMsTUFBZCxrQkFGRixlQUdFLGlEQUFDLEtBQUQsQ0FBTyxNQUFQLENBQWMsTUFBZCxvQkFIRixDQVpGLENBREYsQ0FEMkMsQ0FxQjNDO0FBQ0QsR0F0QkQsTUFzQk87QUFDTCxXQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELGlFQUFlSixHQUFmIiwiZmlsZSI6Ii4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Jldmlld3NBbmRSYXRpbmdzL0NoYXJhY3RlcmlzdGljcy9GaXQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tZWxzZS1yZXR1cm4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIEZpdChwcm9wcykge1xuICBpZiAocHJvcHMuY2hhcmFjdGVyaXN0aWNzLkZpdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxwcm9wcy5zdHlsZXMubGluZVNwYWNpbmc+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8cHJvcHMuc3R5bGVzLnRpdGxlPkZpdDwvcHJvcHMuc3R5bGVzLnRpdGxlPlxuICAgICAgICAgIDxwcm9wcy5zdHlsZXMuc2xpZGVyXG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICBtYXg9XCI1XCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5jaGFyYWN0ZXJpc3RpY3MuRml0LnZhbHVlfVxuICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8cHJvcHMuc3R5bGVzLnRleHQ+XG4gICAgICAgICAgPHByb3BzLnN0eWxlcy5sYWJlbHM+UnVucyB0aWdodDwvcHJvcHMuc3R5bGVzLmxhYmVscz5cbiAgICAgICAgICA8cHJvcHMuc3R5bGVzLmxhYmVscz5QZXJmZWN0PC9wcm9wcy5zdHlsZXMubGFiZWxzPlxuICAgICAgICAgIDxwcm9wcy5zdHlsZXMubGFiZWxzPlJ1bnMgbG9uZzwvcHJvcHMuc3R5bGVzLmxhYmVscz5cbiAgICAgICAgPC9wcm9wcy5zdHlsZXMudGV4dD5cbiAgICAgIDwvcHJvcHMuc3R5bGVzLmxpbmVTcGFjaW5nPlxuICAgICk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVsc2UtcmV0dXJuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRml0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/ReviewsAndRatings/Characteristics/Fit.jsx\n");

/***/ }),

/***/ "./client/src/components/ReviewsAndRatings/Characteristics/Length.jsx":
/*!****************************************************************************!*\
  !*** ./client/src/components/ReviewsAndRatings/Characteristics/Length.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction Length(props) {\n  if (props.characteristics.Length !== undefined) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.lineSpacing, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.title, null, \"Length\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.slider, {\n      type: \"range\",\n      min: \"1\",\n      max: \"5\",\n      value: props.characteristics.Length.value,\n      readOnly: true,\n      step: \"0.01\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.labels, null, \"Runs short\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.labels, null, \"Perfect\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.labels, null, \"Runs long\"))); // eslint-disable-next-line no-else-return\n  } else {\n    return null;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Length);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZGNhcHN0b25lLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Jldmlld3NBbmRSYXRpbmdzL0NoYXJhY3RlcmlzdGljcy9MZW5ndGguanN4P2JlN2EiXSwibmFtZXMiOlsiTGVuZ3RoIiwicHJvcHMiLCJjaGFyYWN0ZXJpc3RpY3MiLCJ1bmRlZmluZWQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUNyQixNQUFJQSxLQUFLLENBQUNDLGVBQU4sQ0FBc0JGLE1BQXRCLEtBQWlDRyxTQUFyQyxFQUFnRDtBQUM5Qyx3QkFDRSxpREFBQyxLQUFELENBQU8sTUFBUCxDQUFjLFdBQWQscUJBQ0UsNkVBQ0UsaURBQUMsS0FBRCxDQUFPLE1BQVAsQ0FBYyxLQUFkLGlCQURGLGVBRUUsaURBQUMsS0FBRCxDQUFPLE1BQVAsQ0FBYyxNQUFkO0FBQ0UsVUFBSSxFQUFDLE9BRFA7QUFFRSxTQUFHLEVBQUMsR0FGTjtBQUdFLFNBQUcsRUFBQyxHQUhOO0FBSUUsV0FBSyxFQUFFRixLQUFLLENBQUNDLGVBQU4sQ0FBc0JGLE1BQXRCLENBQTZCSSxLQUp0QztBQUtFLGNBQVEsTUFMVjtBQU1FLFVBQUksRUFBQztBQU5QLE1BRkYsQ0FERixlQVlFLGlEQUFDLEtBQUQsQ0FBTyxNQUFQLENBQWMsSUFBZCxxQkFDRSxpREFBQyxLQUFELENBQU8sTUFBUCxDQUFjLE1BQWQscUJBREYsZUFFRSxpREFBQyxLQUFELENBQU8sTUFBUCxDQUFjLE1BQWQsa0JBRkYsZUFHRSxpREFBQyxLQUFELENBQU8sTUFBUCxDQUFjLE1BQWQsb0JBSEYsQ0FaRixDQURGLENBRDhDLENBcUI5QztBQUNELEdBdEJELE1Bc0JPO0FBQ0wsV0FBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxpRUFBZUosTUFBZiIsImZpbGUiOiIuL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZXZpZXdzQW5kUmF0aW5ncy9DaGFyYWN0ZXJpc3RpY3MvTGVuZ3RoLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExlbmd0aChwcm9wcykge1xuICBpZiAocHJvcHMuY2hhcmFjdGVyaXN0aWNzLkxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxwcm9wcy5zdHlsZXMubGluZVNwYWNpbmc+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8cHJvcHMuc3R5bGVzLnRpdGxlPkxlbmd0aDwvcHJvcHMuc3R5bGVzLnRpdGxlPlxuICAgICAgICAgIDxwcm9wcy5zdHlsZXMuc2xpZGVyXG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICBtYXg9XCI1XCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5jaGFyYWN0ZXJpc3RpY3MuTGVuZ3RoLnZhbHVlfVxuICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8cHJvcHMuc3R5bGVzLnRleHQ+XG4gICAgICAgICAgPHByb3BzLnN0eWxlcy5sYWJlbHM+UnVucyBzaG9ydDwvcHJvcHMuc3R5bGVzLmxhYmVscz5cbiAgICAgICAgICA8cHJvcHMuc3R5bGVzLmxhYmVscz5QZXJmZWN0PC9wcm9wcy5zdHlsZXMubGFiZWxzPlxuICAgICAgICAgIDxwcm9wcy5zdHlsZXMubGFiZWxzPlJ1bnMgbG9uZzwvcHJvcHMuc3R5bGVzLmxhYmVscz5cbiAgICAgICAgPC9wcm9wcy5zdHlsZXMudGV4dD5cbiAgICAgIDwvcHJvcHMuc3R5bGVzLmxpbmVTcGFjaW5nPlxuICAgICk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVsc2UtcmV0dXJuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVuZ3RoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/ReviewsAndRatings/Characteristics/Length.jsx\n");

/***/ }),

/***/ "./client/src/components/ReviewsAndRatings/Characteristics/Quality.jsx":
/*!*****************************************************************************!*\
  !*** ./client/src/components/ReviewsAndRatings/Characteristics/Quality.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction Quality(props) {\n  if (props.characteristics.Quality !== undefined) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.lineSpacing, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.title, null, \"Quality\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.slider, {\n      type: \"range\",\n      min: \"1\",\n      max: \"5\",\n      value: props.characteristics.Quality.value,\n      readOnly: true,\n      step: \"0.01\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.labels, null, \"Poor\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.labels, null, \"Perfect\"))); // eslint-disable-next-line no-else-return\n  } else {\n    return null;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quality);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZGNhcHN0b25lLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Jldmlld3NBbmRSYXRpbmdzL0NoYXJhY3RlcmlzdGljcy9RdWFsaXR5LmpzeD9iMmEyIl0sIm5hbWVzIjpbIlF1YWxpdHkiLCJwcm9wcyIsImNoYXJhY3RlcmlzdGljcyIsInVuZGVmaW5lZCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ3RCLE1BQUlBLEtBQUssQ0FBQ0MsZUFBTixDQUFzQkYsT0FBdEIsS0FBa0NHLFNBQXRDLEVBQWlEO0FBQy9DLHdCQUNFLGlEQUFDLEtBQUQsQ0FBTyxNQUFQLENBQWMsV0FBZCxxQkFDRSw2RUFDRSxpREFBQyxLQUFELENBQU8sTUFBUCxDQUFjLEtBQWQsa0JBREYsZUFFRSxpREFBQyxLQUFELENBQU8sTUFBUCxDQUFjLE1BQWQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFNBQUcsRUFBQyxHQUZOO0FBR0UsU0FBRyxFQUFDLEdBSE47QUFJRSxXQUFLLEVBQUVGLEtBQUssQ0FBQ0MsZUFBTixDQUFzQkYsT0FBdEIsQ0FBOEJJLEtBSnZDO0FBS0UsY0FBUSxNQUxWO0FBTUUsVUFBSSxFQUFDO0FBTlAsTUFGRixDQURGLGVBWUUsaURBQUMsS0FBRCxDQUFPLE1BQVAsQ0FBYyxJQUFkLHFCQUNFLGlEQUFDLEtBQUQsQ0FBTyxNQUFQLENBQWMsTUFBZCxlQURGLGVBRUUsaURBQUMsS0FBRCxDQUFPLE1BQVAsQ0FBYyxNQUFkLGtCQUZGLENBWkYsQ0FERixDQUQrQyxDQW9CL0M7QUFDRCxHQXJCRCxNQXFCTztBQUNMLFdBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsaUVBQWVKLE9BQWYiLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUmV2aWV3c0FuZFJhdGluZ3MvQ2hhcmFjdGVyaXN0aWNzL1F1YWxpdHkuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gUXVhbGl0eShwcm9wcykge1xuICBpZiAocHJvcHMuY2hhcmFjdGVyaXN0aWNzLlF1YWxpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cHJvcHMuc3R5bGVzLmxpbmVTcGFjaW5nPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPHByb3BzLnN0eWxlcy50aXRsZT5RdWFsaXR5PC9wcm9wcy5zdHlsZXMudGl0bGU+XG4gICAgICAgICAgPHByb3BzLnN0eWxlcy5zbGlkZXJcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgIG1heD1cIjVcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmNoYXJhY3RlcmlzdGljcy5RdWFsaXR5LnZhbHVlfVxuICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8cHJvcHMuc3R5bGVzLnRleHQ+XG4gICAgICAgICAgPHByb3BzLnN0eWxlcy5sYWJlbHM+UG9vcjwvcHJvcHMuc3R5bGVzLmxhYmVscz5cbiAgICAgICAgICA8cHJvcHMuc3R5bGVzLmxhYmVscz5QZXJmZWN0PC9wcm9wcy5zdHlsZXMubGFiZWxzPlxuICAgICAgICA8L3Byb3BzLnN0eWxlcy50ZXh0PlxuICAgICAgPC9wcm9wcy5zdHlsZXMubGluZVNwYWNpbmc+XG4gICAgKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZWxzZS1yZXR1cm5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBRdWFsaXR5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/ReviewsAndRatings/Characteristics/Quality.jsx\n");

/***/ }),

/***/ "./client/src/components/ReviewsAndRatings/Characteristics/Size.jsx":
/*!**************************************************************************!*\
  !*** ./client/src/components/ReviewsAndRatings/Characteristics/Size.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction Size(props) {\n  if (props.characteristics.Size !== undefined) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.lineSpacing, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.title, null, \"Size\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.slider, {\n      type: \"range\",\n      min: \"1\",\n      max: \"5\",\n      value: props.characteristics.Size.value,\n      readOnly: true,\n      step: \"0.01\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.labels, null, \"Too small\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.labels, null, \"Perfect\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.labels, null, \"Too large\"))); // eslint-disable-next-line no-else-return\n  } else {\n    return null;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Size);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZGNhcHN0b25lLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Jldmlld3NBbmRSYXRpbmdzL0NoYXJhY3RlcmlzdGljcy9TaXplLmpzeD8xMDE2Il0sIm5hbWVzIjpbIlNpemUiLCJwcm9wcyIsImNoYXJhY3RlcmlzdGljcyIsInVuZGVmaW5lZCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNuQixNQUFJQSxLQUFLLENBQUNDLGVBQU4sQ0FBc0JGLElBQXRCLEtBQStCRyxTQUFuQyxFQUE4QztBQUM1Qyx3QkFDRSxpREFBQyxLQUFELENBQU8sTUFBUCxDQUFjLFdBQWQscUJBQ0UsNkVBQ0UsaURBQUMsS0FBRCxDQUFPLE1BQVAsQ0FBYyxLQUFkLGVBREYsZUFFRSxpREFBQyxLQUFELENBQU8sTUFBUCxDQUFjLE1BQWQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFNBQUcsRUFBQyxHQUZOO0FBR0UsU0FBRyxFQUFDLEdBSE47QUFJRSxXQUFLLEVBQUVGLEtBQUssQ0FBQ0MsZUFBTixDQUFzQkYsSUFBdEIsQ0FBMkJJLEtBSnBDO0FBS0UsY0FBUSxNQUxWO0FBTUUsVUFBSSxFQUFDO0FBTlAsTUFGRixDQURGLGVBWUUsaURBQUMsS0FBRCxDQUFPLE1BQVAsQ0FBYyxJQUFkLHFCQUNFLGlEQUFDLEtBQUQsQ0FBTyxNQUFQLENBQWMsTUFBZCxvQkFERixlQUVFLGlEQUFDLEtBQUQsQ0FBTyxNQUFQLENBQWMsTUFBZCxrQkFGRixlQUdFLGlEQUFDLEtBQUQsQ0FBTyxNQUFQLENBQWMsTUFBZCxvQkFIRixDQVpGLENBREYsQ0FENEMsQ0FxQjVDO0FBQ0QsR0F0QkQsTUFzQk87QUFDTCxXQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELGlFQUFlSixJQUFmIiwiZmlsZSI6Ii4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Jldmlld3NBbmRSYXRpbmdzL0NoYXJhY3RlcmlzdGljcy9TaXplLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIFNpemUocHJvcHMpIHtcbiAgaWYgKHByb3BzLmNoYXJhY3RlcmlzdGljcy5TaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHByb3BzLnN0eWxlcy5saW5lU3BhY2luZz5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxwcm9wcy5zdHlsZXMudGl0bGU+U2l6ZTwvcHJvcHMuc3R5bGVzLnRpdGxlPlxuICAgICAgICAgIDxwcm9wcy5zdHlsZXMuc2xpZGVyXG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICBtYXg9XCI1XCJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5jaGFyYWN0ZXJpc3RpY3MuU2l6ZS52YWx1ZX1cbiAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICBzdGVwPVwiMC4wMVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHByb3BzLnN0eWxlcy50ZXh0PlxuICAgICAgICAgIDxwcm9wcy5zdHlsZXMubGFiZWxzPlRvbyBzbWFsbDwvcHJvcHMuc3R5bGVzLmxhYmVscz5cbiAgICAgICAgICA8cHJvcHMuc3R5bGVzLmxhYmVscz5QZXJmZWN0PC9wcm9wcy5zdHlsZXMubGFiZWxzPlxuICAgICAgICAgIDxwcm9wcy5zdHlsZXMubGFiZWxzPlRvbyBsYXJnZTwvcHJvcHMuc3R5bGVzLmxhYmVscz5cbiAgICAgICAgPC9wcm9wcy5zdHlsZXMudGV4dD5cbiAgICAgIDwvcHJvcHMuc3R5bGVzLmxpbmVTcGFjaW5nPlxuICAgICk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVsc2UtcmV0dXJuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2l6ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/ReviewsAndRatings/Characteristics/Size.jsx\n");

/***/ }),

/***/ "./client/src/components/ReviewsAndRatings/Characteristics/Width.jsx":
/*!***************************************************************************!*\
  !*** ./client/src/components/ReviewsAndRatings/Characteristics/Width.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction Width(props) {\n  if (props.characteristics.Width !== undefined) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.lineSpacing, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.title, null, \"Width\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.slider, {\n      type: \"range\",\n      min: \"1\",\n      max: \"5\",\n      value: props.characteristics.Width.value,\n      readOnly: true,\n      step: \"0.01\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.labels, null, \"Too narrow\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.labels, null, \"Perfect\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.styles.labels, null, \"Too wide\"))); // eslint-disable-next-line no-else-return\n  } else {\n    return null;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Width);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZGNhcHN0b25lLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Jldmlld3NBbmRSYXRpbmdzL0NoYXJhY3RlcmlzdGljcy9XaWR0aC5qc3g/Y2FiOSJdLCJuYW1lcyI6WyJXaWR0aCIsInByb3BzIiwiY2hhcmFjdGVyaXN0aWNzIiwidW5kZWZpbmVkIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3BCLE1BQUlBLEtBQUssQ0FBQ0MsZUFBTixDQUFzQkYsS0FBdEIsS0FBZ0NHLFNBQXBDLEVBQStDO0FBQzdDLHdCQUNFLGlEQUFDLEtBQUQsQ0FBTyxNQUFQLENBQWMsV0FBZCxxQkFDRSw2RUFDRSxpREFBQyxLQUFELENBQU8sTUFBUCxDQUFjLEtBQWQsZ0JBREYsZUFFRSxpREFBQyxLQUFELENBQU8sTUFBUCxDQUFjLE1BQWQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFNBQUcsRUFBQyxHQUZOO0FBR0UsU0FBRyxFQUFDLEdBSE47QUFJRSxXQUFLLEVBQUVGLEtBQUssQ0FBQ0MsZUFBTixDQUFzQkYsS0FBdEIsQ0FBNEJJLEtBSnJDO0FBS0UsY0FBUSxNQUxWO0FBTUUsVUFBSSxFQUFDO0FBTlAsTUFGRixDQURGLGVBWUUsaURBQUMsS0FBRCxDQUFPLE1BQVAsQ0FBYyxJQUFkLHFCQUNFLGlEQUFDLEtBQUQsQ0FBTyxNQUFQLENBQWMsTUFBZCxxQkFERixlQUVFLGlEQUFDLEtBQUQsQ0FBTyxNQUFQLENBQWMsTUFBZCxrQkFGRixlQUdFLGlEQUFDLEtBQUQsQ0FBTyxNQUFQLENBQWMsTUFBZCxtQkFIRixDQVpGLENBREYsQ0FENkMsQ0FxQjdDO0FBQ0QsR0F0QkQsTUFzQk87QUFDTCxXQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELGlFQUFlSixLQUFmIiwiZmlsZSI6Ii4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Jldmlld3NBbmRSYXRpbmdzL0NoYXJhY3RlcmlzdGljcy9XaWR0aC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBXaWR0aChwcm9wcykge1xuICBpZiAocHJvcHMuY2hhcmFjdGVyaXN0aWNzLldpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHByb3BzLnN0eWxlcy5saW5lU3BhY2luZz5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxwcm9wcy5zdHlsZXMudGl0bGU+V2lkdGg8L3Byb3BzLnN0eWxlcy50aXRsZT5cbiAgICAgICAgICA8cHJvcHMuc3R5bGVzLnNsaWRlclxuICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgbWF4PVwiNVwiXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuY2hhcmFjdGVyaXN0aWNzLldpZHRoLnZhbHVlfVxuICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8cHJvcHMuc3R5bGVzLnRleHQ+XG4gICAgICAgICAgPHByb3BzLnN0eWxlcy5sYWJlbHM+VG9vIG5hcnJvdzwvcHJvcHMuc3R5bGVzLmxhYmVscz5cbiAgICAgICAgICA8cHJvcHMuc3R5bGVzLmxhYmVscz5QZXJmZWN0PC9wcm9wcy5zdHlsZXMubGFiZWxzPlxuICAgICAgICAgIDxwcm9wcy5zdHlsZXMubGFiZWxzPlRvbyB3aWRlPC9wcm9wcy5zdHlsZXMubGFiZWxzPlxuICAgICAgICA8L3Byb3BzLnN0eWxlcy50ZXh0PlxuICAgICAgPC9wcm9wcy5zdHlsZXMubGluZVNwYWNpbmc+XG4gICAgKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZWxzZS1yZXR1cm5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaWR0aDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/ReviewsAndRatings/Characteristics/Width.jsx\n");

/***/ })

}]);