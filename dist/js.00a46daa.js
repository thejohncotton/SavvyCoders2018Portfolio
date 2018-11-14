// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"components/Navigation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navigation;

function handleNavigation(event) {
  // pull the component name from the text in the anchor tag
  var component = event.target.textContent;
  event.preventDefault(); // select a piece of the state tree by component

  render(state[component]);
}

function buildLinks(linkArray) {
  var i = 0;
  var links = "";

  while (i < linkArray.length) {
    links += "\n              <li>\n                  <a href='/".concat(linkArray[i], "'>").concat(linkArray[i], "</a>\n              </li>\n          ");
    i++;
  }

  return links;
}

function Navigation(state) {
  return "\n      <div class=\"navigation\">\n          <ul>\n              ".concat(buildLinks(state.links), "\n          </ul>\n      </div>\n      ");
}
},{}],"components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

function Header(state) {
  return "\n<div class=\"container header\">\n<div id=\"greeting\"></div>\n<h1>".concat(state.title, "</h1>\n\n</div>\n");
}
},{}],"components/Content.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(state) {
  if (state.content) {
    return "".concat(state.content);
  } else return "\n<div class=\"container content-area\">\n\n        <img src=\"https://media.licdn.com/dms/image/C5603AQGFPv_1wQbm9Q/profile-displayphoto-shrink_200_200/0?e=1545264000&v=beta&t=YJahIpva-5JfTeHe2oqLyUzBvbwJ_uan_mQmZiVRXyU\" alt=\"John's Photo\" id=\"profile-photo\">\n        <p class=\"icons\">\uD83C\uDFB5 \uD83D\uDCBB \uD83D\uDC15</p>\n    </div>\n";
}
},{}],"components/Footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(state) {
  return "\n<div class=\"footer\">\n        <ul>\n                <li><a href=\"mailto:john@johncotton.us\"><i class=\"fas fa-envelope\"></i></a></li>\n                <li><a href=\"https://twitter.com/thejohncotton\"><i class=\"fab fa-twitter\"></i></a></li>\n                <li><a href=\"https://github.com/thejohncotton\"><i class=\"fab fa-github\"></i></a></li>\n        </ul>\n        <p>&copy; 2018 John Cotton All Rights Reserved</p>\n    </div>\n";
}
},{}],"components/Blog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default() {
  return "<div class=\"container content-area\" id=\"blog-content-area\">\n    <div class=\"blog-post\">\n    <h2>Hello World</h2>\n    <p>It is almost a rite of passage for a developer on their journey of learning a language to create a <span class=\"highlighted\">Hello World</span>\n    Application of some kind. This application simply produces the greating 'hello world.' So far, I have created my 'hello world' app in the following languages:</p>\n    <ul>\n        <li>C</li>\n        <li>C++</li>\n        <li>Javascript</li>\n        <li>Java</li>\n        <li>HTML</li>\n        <li>Ruby</li>\n        <li>Python</li>\n        <li>Elixir</li>\n        <li>Objective-C</li>\n        <li>Swift</li>\n    </ul>\n    <p>I look forward to adding more!</p>\n    <hr>\n</div>\n<div class=\"blog-post\">\n    <h2>Daily Minimum Reps</h2>\n    <p>There is a lot of research into the human brain and how we humans learn through a pattern of stress and recovery.\n        While we learn programming it is important to keep this in mind. That brain pain you are experiencing <strong>is good for you!</strong>\n        Try to focus on the following every day:\n    </p>\n    <ul>\n        <li>Write new code.</li>\n        <li>Update old code.</li>\n        <li>Try new things!</li>\n        <li>Break things.</li>\n        <li>Fix them.</li>\n        <li>Use the command line over your typical file system.</li>\n        <li>PUSH your code.</li>\n    </ul>\n    <hr>\n</div>\n</div>";
}
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _Navigation = _interopRequireDefault(require("~/components/Navigation"));

var _Header = _interopRequireDefault(require("~/components/Header"));

var _Content = _interopRequireDefault(require("~/components/Content"));

var _Footer = _interopRequireDefault(require("~/components/Footer"));

var _Blog = _interopRequireDefault(require("~/components/Blog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  Home: {
    title: "Welcome to John's Savvy Coders Portfolio",
    links: ["home", "projects", "blog", "contact"]
  },
  Blog: {
    title: "Welcome to my blog!",
    links: ["home", "projects", "blog", "contact"],
    content: (0, _Blog.default)()
  },
  Projects: {
    title: "Welcome to my projects page!",
    links: ["home", "projects", "blog", "contact"]
  },
  Contact: {
    title: "Welcome to my Contact Page!",
    links: ["home", "projects", "blog", "contact"]
  }
};

function handleNavigation(event) {
  // pull the component name from the text in the anchor tag
  var component = event.target.textContent;
  event.preventDefault(); // select a piece of the state tree by component

  render(state[component]);
}

var root = document.querySelector("#root"); // this doesn't need to be queried every time we re-render

function render(state) {
  root.innerHTML = "\n        ".concat((0, _Navigation.default)(state), "\n        ").concat((0, _Header.default)(state), "\n        ").concat((0, _Content.default)(state), "\n        ").concat((0, _Footer.default)(state), "\n      ");
}

render(state.Home); // var firstName = prompt("Hi there! What's your first name?")
// var lastName = prompt("What's your last name?")
// var output = document.querySelector("#greeting")
//         function checkName(){
//             if (firstName && firstName != 'null' && lastName && lastName != 'null'){
//                 output.innerHTML = `<p>Thanks for visiting <span class="highlighted">${firstName} ${lastName}.</span></p>`
//             } else {
//                 firstName = prompt('For real, what is your first name?')
//                 lastName = prompt("For real, what's your last name?")
//                 checkName()
//             }
//         } 
//         checkName()
},{"~/components/Navigation":"components/Navigation.js","~/components/Header":"components/Header.js","~/components/Content":"components/Content.js","~/components/Footer":"components/Footer.js","~/components/Blog":"components/Blog.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51823" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.map