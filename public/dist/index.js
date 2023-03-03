// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})(
  {
    '4v3rH': [
      function (require, module, exports) {
        var HMR_HOST = null;
        var HMR_PORT = 1234;
        var HMR_SECURE = false;
        var HMR_ENV_HASH = '83b73b2c5796cc5c';
        module.bundle.HMR_BUNDLE_ID = 'a00d5664e8b54be4';
        ('use strict');
        /* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
        var OldModule = module.bundle.Module;
        function Module(moduleName) {
          OldModule.call(this, moduleName);
          this.hot = {
            data: module.bundle.hotData[moduleName],
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function (fn) {
              this._acceptCallbacks.push(fn || function () {});
            },
            dispose: function (fn) {
              this._disposeCallbacks.push(fn);
            },
          };
          module.bundle.hotData[moduleName] = undefined;
        }
        module.bundle.Module = Module;
        module.bundle.hotData = {};
        var checkedAssets,
          assetsToDispose,
          assetsToAccept /*: Array<[ParcelRequire, string]> */;
        function getHostname() {
          return (
            HMR_HOST ||
            (location.protocol.indexOf('http') === 0
              ? location.hostname
              : 'localhost')
          );
        }
        function getPort() {
          return HMR_PORT || location.port;
        } // eslint-disable-next-line no-redeclare
        var parent = module.bundle.parent;
        if (
          (!parent || !parent.isParcelRequire) &&
          typeof WebSocket !== 'undefined'
        ) {
          var hostname = getHostname();
          var port = getPort();
          var protocol =
            HMR_SECURE ||
            (location.protocol == 'https:' &&
              !/localhost|127.0.0.1|0.0.0.0/.test(hostname))
              ? 'wss'
              : 'ws';
          var ws = new WebSocket(
            protocol + '://' + hostname + (port ? ':' + port : '') + '/'
          ); // Web extension context
          var extCtx =
            typeof chrome === 'undefined'
              ? typeof browser === 'undefined'
                ? null
                : browser
              : chrome; // Safari doesn't support sourceURL in error stacks.
          // eval may also be disabled via CSP, so do a quick check.
          var supportsSourceURL = false;
          try {
            (0, eval)('throw new Error("test"); //# sourceURL=test.js');
          } catch (err) {
            supportsSourceURL = err.stack.includes('test.js');
          } // $FlowFixMe
          ws.onmessage = async function (event) {
            checkedAssets = {} /*: {|[string]: boolean|} */;
            assetsToAccept = [];
            assetsToDispose = [];
            var data = JSON.parse(event.data);
            if (data.type === 'update') {
              // Remove error overlay if there is one
              if (typeof document !== 'undefined') removeErrorOverlay();
              let assets = data.assets.filter(
                (asset) => asset.envHash === HMR_ENV_HASH
              ); // Handle HMR Update
              let handled = assets.every((asset) => {
                return (
                  asset.type === 'css' ||
                  (asset.type === 'js' &&
                    hmrAcceptCheck(
                      module.bundle.root,
                      asset.id,
                      asset.depsByBundle
                    ))
                );
              });
              if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (
                  typeof window !== 'undefined' &&
                  typeof CustomEvent !== 'undefined'
                )
                  window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {}; /*: {|[string]: boolean|} */
                for (let i = 0; i < assetsToDispose.length; i++) {
                  let id = assetsToDispose[i][1];
                  if (!processedAssets[id]) {
                    hmrDispose(assetsToDispose[i][0], id);
                    processedAssets[id] = true;
                  }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for (let i = 0; i < assetsToAccept.length; i++) {
                  let id = assetsToAccept[i][1];
                  if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                  }
                }
              } else fullReload();
            }
            if (data.type === 'error') {
              // Log parcel errors to console
              for (let ansiDiagnostic of data.diagnostics.ansi) {
                let stack = ansiDiagnostic.codeframe
                  ? ansiDiagnostic.codeframe
                  : ansiDiagnostic.stack;
                console.error(
                  '\uD83D\uDEA8 [parcel]: ' +
                    ansiDiagnostic.message +
                    '\n' +
                    stack +
                    '\n\n' +
                    ansiDiagnostic.hints.join('\n')
                );
              }
              if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
              }
            }
          };
          ws.onerror = function (e) {
            console.error(e.message);
          };
          ws.onclose = function () {
            console.warn(
              '[parcel] \uD83D\uDEA8 Connection to the HMR server was lost'
            );
          };
        }
        function removeErrorOverlay() {
          var overlay = document.getElementById(OVERLAY_ID);
          if (overlay) {
            overlay.remove();
            console.log('[parcel] ✨ Error resolved');
          }
        }
        function createErrorOverlay(diagnostics) {
          var overlay = document.createElement('div');
          overlay.id = OVERLAY_ID;
          let errorHTML =
            '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
          for (let diagnostic of diagnostics) {
            let stack = diagnostic.frames.length
              ? diagnostic.frames.reduce((p, frame) => {
                  return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(
                    frame.location
                  )}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${
                    frame.location
                  }</a>
${frame.code}`;
                }, '')
              : diagnostic.stack;
            errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints
            .map((hint) => '<div>\uD83D\uDCA1 ' + hint + '</div>')
            .join('')}
        </div>
        ${
          diagnostic.documentation
            ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>`
            : ''
        }
      </div>
    `;
          }
          errorHTML += '</div>';
          overlay.innerHTML = errorHTML;
          return overlay;
        }
        function fullReload() {
          if ('reload' in location) location.reload();
          else if (extCtx && extCtx.runtime && extCtx.runtime.reload)
            extCtx.runtime.reload();
        }
        function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
          var modules = bundle.modules;
          if (!modules) return [];
          var parents = [];
          var k, d, dep;
          for (k in modules)
            for (d in modules[k][1]) {
              dep = modules[k][1][d];
              if (
                dep === id ||
                (Array.isArray(dep) && dep[dep.length - 1] === id)
              )
                parents.push([bundle, k]);
            }
          if (bundle.parent)
            parents = parents.concat(getParents(bundle.parent, id));
          return parents;
        }
        function updateLink(link) {
          var newLink = link.cloneNode();
          newLink.onload = function () {
            if (link.parentNode !== null)
              // $FlowFixMe
              link.parentNode.removeChild(link);
          };
          newLink.setAttribute(
            'href',
            link.getAttribute('href').split('?')[0] + '?' + Date.now()
          ); // $FlowFixMe
          link.parentNode.insertBefore(newLink, link.nextSibling);
        }
        var cssTimeout = null;
        function reloadCSS() {
          if (cssTimeout) return;
          cssTimeout = setTimeout(function () {
            var links = document.querySelectorAll('link[rel="stylesheet"]');
            for (var i = 0; i < links.length; i++) {
              // $FlowFixMe[incompatible-type]
              var href = links[i].getAttribute('href');
              var hostname = getHostname();
              var servedFromHMRServer =
                hostname === 'localhost'
                  ? new RegExp(
                      '^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' +
                        getPort()
                    ).test(href)
                  : href.indexOf(hostname + ':' + getPort());
              var absolute =
                /^https?:\/\//i.test(href) &&
                href.indexOf(location.origin) !== 0 &&
                !servedFromHMRServer;
              if (!absolute) updateLink(links[i]);
            }
            cssTimeout = null;
          }, 50);
        }
        function hmrDownload(asset) {
          if (asset.type === 'js') {
            if (typeof document !== 'undefined') {
              let script = document.createElement('script');
              script.src = asset.url + '?t=' + Date.now();
              if (asset.outputFormat === 'esmodule') script.type = 'module';
              return new Promise((resolve, reject) => {
                var _document$head;
                script.onload = () => resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null ||
                  _document$head === void 0 ||
                  _document$head.appendChild(script);
              });
            } else if (typeof importScripts === 'function') {
              // Worker scripts
              if (asset.outputFormat === 'esmodule')
                return import(asset.url + '?t=' + Date.now());
              else
                return new Promise((resolve, reject) => {
                  try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                  } catch (err) {
                    reject(err);
                  }
                });
            }
          }
        }
        async function hmrApplyUpdates(assets) {
          global.parcelHotUpdate = Object.create(null);
          let scriptsToRemove;
          try {
            // If sourceURL comments aren't supported in eval, we need to load
            // the update from the dev server over HTTP so that stack traces
            // are correct in errors/logs. This is much slower than eval, so
            // we only do it if needed (currently just Safari).
            // https://bugs.webkit.org/show_bug.cgi?id=137297
            // This path is also taken if a CSP disallows eval.
            if (!supportsSourceURL) {
              let promises = assets.map((asset) => {
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null ||
                  _hmrDownload === void 0
                  ? void 0
                  : _hmrDownload.catch((err) => {
                      // Web extension bugfix for Chromium
                      // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                      if (
                        extCtx &&
                        extCtx.runtime &&
                        extCtx.runtime.getManifest().manifest_version == 3
                      ) {
                        if (
                          typeof ServiceWorkerGlobalScope != 'undefined' &&
                          global instanceof ServiceWorkerGlobalScope
                        ) {
                          extCtx.runtime.reload();
                          return;
                        }
                        asset.url = extCtx.runtime.getURL(
                          '/__parcel_hmr_proxy__?url=' +
                            encodeURIComponent(asset.url + '?t=' + Date.now())
                        );
                        return hmrDownload(asset);
                      }
                      throw err;
                    });
              });
              scriptsToRemove = await Promise.all(promises);
            }
            assets.forEach(function (asset) {
              hmrApply(module.bundle.root, asset);
            });
          } finally {
            delete global.parcelHotUpdate;
            if (scriptsToRemove)
              scriptsToRemove.forEach((script) => {
                if (script) {
                  var _document$head2;
                  (_document$head2 = document.head) === null ||
                    _document$head2 === void 0 ||
                    _document$head2.removeChild(script);
                }
              });
          }
        }
        function hmrApply(bundle, asset) {
          var modules = bundle.modules;
          if (!modules) return;
          if (asset.type === 'css') reloadCSS();
          else if (asset.type === 'js') {
            let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
            if (deps) {
              if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for (let dep in oldDeps)
                  if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                  }
              }
              if (supportsSourceURL)
                // Global eval. We would use `new Function` here but browser
                // support for source maps is better with eval.
                (0, eval)(asset.output);
              // $FlowFixMe
              let fn = global.parcelHotUpdate[asset.id];
              modules[asset.id] = [fn, deps];
            } else if (bundle.parent) hmrApply(bundle.parent, asset);
          }
        }
        function hmrDelete(bundle, id) {
          let modules = bundle.modules;
          if (!modules) return;
          if (modules[id]) {
            // Collect dependencies that will become orphaned when this module is deleted.
            let deps = modules[id][1];
            let orphans = [];
            for (let dep in deps) {
              let parents = getParents(module.bundle.root, deps[dep]);
              if (parents.length === 1) orphans.push(deps[dep]);
            } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
            delete modules[id];
            delete bundle.cache[id]; // Now delete the orphans.
            orphans.forEach((id) => {
              hmrDelete(module.bundle.root, id);
            });
          } else if (bundle.parent) hmrDelete(bundle.parent, id);
        }
        function hmrAcceptCheck(bundle, id, depsByBundle) {
          if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
          // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
          let parents = getParents(module.bundle.root, id);
          let accepted = false;
          while (parents.length > 0) {
            let v = parents.shift();
            let a = hmrAcceptCheckOne(v[0], v[1], null);
            if (a)
              // If this parent accepts, stop traversing upward, but still consider siblings.
              accepted = true;
            else {
              // Otherwise, queue the parents in the next level upward.
              let p = getParents(module.bundle.root, v[1]);
              if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
              }
              parents.push(...p);
            }
          }
          return accepted;
        }
        function hmrAcceptCheckOne(bundle, id, depsByBundle) {
          var modules = bundle.modules;
          if (!modules) return;
          if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
            // If we reached the root bundle without finding where the asset should go,
            // there's nothing to do. Mark as "accepted" so we don't reload the page.
            if (!bundle.parent) return true;
            return hmrAcceptCheck(bundle.parent, id, depsByBundle);
          }
          if (checkedAssets[id]) return true;
          checkedAssets[id] = true;
          var cached = bundle.cache[id];
          assetsToDispose.push([bundle, id]);
          if (!cached || (cached.hot && cached.hot._acceptCallbacks.length)) {
            assetsToAccept.push([bundle, id]);
            return true;
          }
        }
        function hmrDispose(bundle, id) {
          var cached = bundle.cache[id];
          bundle.hotData[id] = {};
          if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
          if (cached && cached.hot && cached.hot._disposeCallbacks.length)
            cached.hot._disposeCallbacks.forEach(function (cb) {
              cb(bundle.hotData[id]);
            });
          delete bundle.cache[id];
        }
        function hmrAccept(bundle, id) {
          // Execute the module.
          bundle(id); // Run the accept callbacks in the new version of the module.
          var cached = bundle.cache[id];
          if (cached && cached.hot && cached.hot._acceptCallbacks.length)
            cached.hot._acceptCallbacks.forEach(function (cb) {
              var assetsToAlsoAccept = cb(function () {
                return getParents(module.bundle.root, id);
              });
              if (assetsToAlsoAccept && assetsToAccept.length) {
                assetsToAlsoAccept.forEach(function (a) {
                  hmrDispose(a[0], a[1]);
                }); // $FlowFixMe[method-unbinding]
                assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
              }
            });
        }
      },
      {},
    ],
    '9ZDGW': [
      function (require, module, exports) {
        /* eslint-disable */ var _esRegexpFlagsJs = require('core-js/modules/es.regexp.flags.js');
        var _mapbox = require('./mapbox');
        var _login = require('./login');
        var _updateSettings = require('./updateSettings');
        // DOM ELEMENTS
        const mapBox = document.getElementById('map');
        const loginForm = document.querySelector('.form--login');
        const logOutBtn = document.querySelector('.nav__el--logout');
        const userDataForm = document.querySelector('.form-user-data');
        const userPasswordForm = document.querySelector('.form-user-password');
        // DELEGATION
        if (mapBox) {
          const locations = JSON.parse(mapBox.dataset.locations);
          (0, _mapbox.displayMap)(locations);
        }
        if (loginForm)
          loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            (0, _login.login)(email, password);
          });
        if (logOutBtn) logOutBtn.addEventListener('click', (0, _login.logout));
        if (userDataForm)
          userDataForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const form = new FormData();
            form.append('name', document.getElementById('name').value);
            form.append('email', document.getElementById('email').value);
            form.append('photo', document.getElementById('photo').files[0]);
            console.log(form);
            (0, _updateSettings.updateSettings)(form, 'data');
          });
        if (userPasswordForm)
          userPasswordForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            document.querySelector('.btn--save-password').textContent =
              'Updating...';
            const passwordCurrent =
              document.getElementById('password-current').value;
            const password = document.getElementById('password').value;
            const passwordConfirm =
              document.getElementById('password-confirm').value;
            await (0, _updateSettings.updateSettings)(
              {
                passwordCurrent,
                password,
                passwordConfirm,
              },
              'password'
            );
            document.querySelector('.btn--save-password').textContent =
              'Save password';
            document.getElementById('password-current').value = '';
            document.getElementById('password').value = '';
            document.getElementById('password-confirm').value = '';
          });
      },
      {
        'core-js/modules/es.regexp.flags.js': '1UI36',
        './mapbox': 'bLG5h',
        './login': 'lJYvj',
        './updateSettings': 'h6FHa',
      },
    ],
    '1UI36': [
      function (require, module, exports) {
        var global = require('b77e6432988a9940');
        var DESCRIPTORS = require('c846babb3de24c4b');
        var defineBuiltInAccessor = require('500e6d214e12ad08');
        var regExpFlags = require('61d6fe22b6db1590');
        var fails = require('9d844ec3ff192401');
        // babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
        var RegExp = global.RegExp;
        var RegExpPrototype = RegExp.prototype;
        var FORCED =
          DESCRIPTORS &&
          fails(function () {
            var INDICES_SUPPORT = true;
            try {
              RegExp('.', 'd');
            } catch (error) {
              INDICES_SUPPORT = false;
            }
            var O = {};
            // modern V8 bug
            var calls = '';
            var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';
            var addGetter = function (key, chr) {
              // eslint-disable-next-line es/no-object-defineproperty -- safe
              Object.defineProperty(O, key, {
                get: function () {
                  calls += chr;
                  return true;
                },
              });
            };
            var pairs = {
              dotAll: 's',
              global: 'g',
              ignoreCase: 'i',
              multiline: 'm',
              sticky: 'y',
            };
            if (INDICES_SUPPORT) pairs.hasIndices = 'd';
            for (var key in pairs) addGetter(key, pairs[key]);
            // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
            var result = Object.getOwnPropertyDescriptor(
              RegExpPrototype,
              'flags'
            ).get.call(O);
            return result !== expected || calls !== expected;
          });
        // `RegExp.prototype.flags` getter
        // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
        if (FORCED)
          defineBuiltInAccessor(RegExpPrototype, 'flags', {
            configurable: true,
            get: regExpFlags,
          });
      },
      {
        b77e6432988a9940: 'iXoXQ',
        c846babb3de24c4b: '26KWG',
        '500e6d214e12ad08': '5CbWg',
        '61d6fe22b6db1590': '2ATSy',
        '9d844ec3ff192401': 'aNusG',
      },
    ],
    iXoXQ: [
      function (require, module, exports) {
        var check = function (it) {
          return it && it.Math == Math && it;
        };
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        module.exports = // eslint-disable-next-line es/no-global-this -- safe
          check(typeof globalThis == 'object' && globalThis) ||
          check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
          check(typeof self == 'object' && self) ||
          check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func -- fallback
          (function () {
            return this;
          })() ||
          Function('return this')();
      },
      {},
    ],
    '26KWG': [
      function (require, module, exports) {
        var fails = require('c9e01465a39218a0');
        // Detect IE8's incomplete defineProperty implementation
        module.exports = !fails(function () {
          // eslint-disable-next-line es/no-object-defineproperty -- required for testing
          return (
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1] != 7
          );
        });
      },
      { c9e01465a39218a0: 'aNusG' },
    ],
    aNusG: [
      function (require, module, exports) {
        module.exports = function (exec) {
          try {
            return !!exec();
          } catch (error) {
            return true;
          }
        };
      },
      {},
    ],
    '5CbWg': [
      function (require, module, exports) {
        var makeBuiltIn = require('8032a6333d6aa3d0');
        var defineProperty = require('dd236efacdb86c49');
        module.exports = function (target, name, descriptor) {
          if (descriptor.get)
            makeBuiltIn(descriptor.get, name, {
              getter: true,
            });
          if (descriptor.set)
            makeBuiltIn(descriptor.set, name, {
              setter: true,
            });
          return defineProperty.f(target, name, descriptor);
        };
      },
      { '8032a6333d6aa3d0': '5wlsQ', dd236efacdb86c49: 'cmdwU' },
    ],
    '5wlsQ': [
      function (require, module, exports) {
        var uncurryThis = require('20f340f91f32a514');
        var fails = require('1acee60db5202c0d');
        var isCallable = require('ed0f4b082488a4a8');
        var hasOwn = require('f689e9fd0b84c4cf');
        var DESCRIPTORS = require('661ed29e90f6483f');
        var CONFIGURABLE_FUNCTION_NAME =
          require('8480aee27af1bbfe').CONFIGURABLE;
        var inspectSource = require('5da2e0fd427c9f39');
        var InternalStateModule = require('82d209981f50e4f1');
        var enforceInternalState = InternalStateModule.enforce;
        var getInternalState = InternalStateModule.get;
        var $String = String;
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        var defineProperty = Object.defineProperty;
        var stringSlice = uncurryThis(''.slice);
        var replace = uncurryThis(''.replace);
        var join = uncurryThis([].join);
        var CONFIGURABLE_LENGTH =
          DESCRIPTORS &&
          !fails(function () {
            return (
              defineProperty(function () {}, 'length', {
                value: 8,
              }).length !== 8
            );
          });
        var TEMPLATE = String(String).split('String');
        var makeBuiltIn = (module.exports = function (value, name, options) {
          if (stringSlice($String(name), 0, 7) === 'Symbol(')
            name =
              '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
          if (options && options.getter) name = 'get ' + name;
          if (options && options.setter) name = 'set ' + name;
          if (
            !hasOwn(value, 'name') ||
            (CONFIGURABLE_FUNCTION_NAME && value.name !== name)
          ) {
            if (DESCRIPTORS)
              defineProperty(value, 'name', {
                value: name,
                configurable: true,
              });
            else value.name = name;
          }
          if (
            CONFIGURABLE_LENGTH &&
            options &&
            hasOwn(options, 'arity') &&
            value.length !== options.arity
          )
            defineProperty(value, 'length', {
              value: options.arity,
            });
          try {
            if (
              options &&
              hasOwn(options, 'constructor') &&
              options.constructor
            ) {
              if (DESCRIPTORS)
                defineProperty(value, 'prototype', {
                  writable: false,
                });
            } else if (value.prototype) value.prototype = undefined;
          } catch (error) {}
          var state = enforceInternalState(value);
          if (!hasOwn(state, 'source'))
            state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
          return value;
        });
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        // eslint-disable-next-line no-extend-native -- required
        Function.prototype.toString = makeBuiltIn(function toString() {
          return (
            (isCallable(this) && getInternalState(this).source) ||
            inspectSource(this)
          );
        }, 'toString');
      },
      {
        '20f340f91f32a514': 'cmrS8',
        '1acee60db5202c0d': 'aNusG',
        ed0f4b082488a4a8: 'a71HS',
        f689e9fd0b84c4cf: 'cchmf',
        '661ed29e90f6483f': '26KWG',
        '8480aee27af1bbfe': 'jDQrM',
        '5da2e0fd427c9f39': 'gW8vK',
        '82d209981f50e4f1': 'jFkEg',
      },
    ],
    cmrS8: [
      function (require, module, exports) {
        var NATIVE_BIND = require('62914f744604b655');
        var FunctionPrototype = Function.prototype;
        var call = FunctionPrototype.call;
        var uncurryThisWithBind =
          NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
        module.exports = NATIVE_BIND
          ? uncurryThisWithBind
          : function (fn) {
              return function () {
                return call.apply(fn, arguments);
              };
            };
      },
      { '62914f744604b655': '1kGZX' },
    ],
    '1kGZX': [
      function (require, module, exports) {
        var fails = require('2d2a6acfe3c1cb3');
        module.exports = !fails(function () {
          // eslint-disable-next-line es/no-function-prototype-bind -- safe
          var test = function () {}.bind();
          // eslint-disable-next-line no-prototype-builtins -- safe
          return typeof test != 'function' || test.hasOwnProperty('prototype');
        });
      },
      { '2d2a6acfe3c1cb3': 'aNusG' },
    ],
    a71HS: [
      function (require, module, exports) {
        var $documentAll = require('bff611dae0fe3c78');
        var documentAll = $documentAll.all;
        // `IsCallable` abstract operation
        // https://tc39.es/ecma262/#sec-iscallable
        module.exports = $documentAll.IS_HTMLDDA
          ? function (argument) {
              return typeof argument == 'function' || argument === documentAll;
            }
          : function (argument) {
              return typeof argument == 'function';
            };
      },
      { bff611dae0fe3c78: 'i64Dd' },
    ],
    i64Dd: [
      function (require, module, exports) {
        var documentAll = typeof document == 'object' && document.all;
        // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
        // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
        var IS_HTMLDDA =
          typeof documentAll == 'undefined' && documentAll !== undefined;
        module.exports = {
          all: documentAll,
          IS_HTMLDDA: IS_HTMLDDA,
        };
      },
      {},
    ],
    cchmf: [
      function (require, module, exports) {
        var uncurryThis = require('1d2834066b822df2');
        var toObject = require('a5b1e33c1f29ef8');
        var hasOwnProperty = uncurryThis({}.hasOwnProperty);
        // `HasOwnProperty` abstract operation
        // https://tc39.es/ecma262/#sec-hasownproperty
        // eslint-disable-next-line es/no-object-hasown -- safe
        module.exports =
          Object.hasOwn ||
          function hasOwn(it, key) {
            return hasOwnProperty(toObject(it), key);
          };
      },
      { '1d2834066b822df2': 'cmrS8', a5b1e33c1f29ef8: '3dPL6' },
    ],
    '3dPL6': [
      function (require, module, exports) {
        var requireObjectCoercible = require('8e567ebbf3d769e3');
        var $Object = Object;
        // `ToObject` abstract operation
        // https://tc39.es/ecma262/#sec-toobject
        module.exports = function (argument) {
          return $Object(requireObjectCoercible(argument));
        };
      },
      { '8e567ebbf3d769e3': 'cZkPu' },
    ],
    cZkPu: [
      function (require, module, exports) {
        var isNullOrUndefined = require('fe33e60a5259f6f6');
        var $TypeError = TypeError;
        // `RequireObjectCoercible` abstract operation
        // https://tc39.es/ecma262/#sec-requireobjectcoercible
        module.exports = function (it) {
          if (isNullOrUndefined(it))
            throw $TypeError("Can't call method on " + it);
          return it;
        };
      },
      { fe33e60a5259f6f6: 'h2dPC' },
    ],
    h2dPC: [
      function (require, module, exports) {
        // we can't use just `it == null` since of `document.all` special case
        // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
        module.exports = function (it) {
          return it === null || it === undefined;
        };
      },
      {},
    ],
    jDQrM: [
      function (require, module, exports) {
        var DESCRIPTORS = require('37cb4aa7c9517e8');
        var hasOwn = require('b1bea36e71f23c51');
        var FunctionPrototype = Function.prototype;
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
        var EXISTS = hasOwn(FunctionPrototype, 'name');
        // additional protection from minified / mangled / dropped function names
        var PROPER = EXISTS && function something() {}.name === 'something';
        var CONFIGURABLE =
          EXISTS &&
          (!DESCRIPTORS ||
            (DESCRIPTORS &&
              getDescriptor(FunctionPrototype, 'name').configurable));
        module.exports = {
          EXISTS: EXISTS,
          PROPER: PROPER,
          CONFIGURABLE: CONFIGURABLE,
        };
      },
      { '37cb4aa7c9517e8': '26KWG', b1bea36e71f23c51: 'cchmf' },
    ],
    gW8vK: [
      function (require, module, exports) {
        var uncurryThis = require('c5fa94862cecb60d');
        var isCallable = require('92e2bf2e0f20783b');
        var store = require('2009473cd74bd7a2');
        var functionToString = uncurryThis(Function.toString);
        // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
        if (!isCallable(store.inspectSource))
          store.inspectSource = function (it) {
            return functionToString(it);
          };
        module.exports = store.inspectSource;
      },
      {
        c5fa94862cecb60d: 'cmrS8',
        '92e2bf2e0f20783b': 'a71HS',
        '2009473cd74bd7a2': 'ixlBA',
      },
    ],
    ixlBA: [
      function (require, module, exports) {
        var global = require('ffe62da117c61d84');
        var defineGlobalProperty = require('c32a223d6e4335c0');
        var SHARED = '__core-js_shared__';
        var store = global[SHARED] || defineGlobalProperty(SHARED, {});
        module.exports = store;
      },
      { ffe62da117c61d84: 'iXoXQ', c32a223d6e4335c0: 'bB8aO' },
    ],
    bB8aO: [
      function (require, module, exports) {
        var global = require('ed7290b1ecc54428');
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        var defineProperty = Object.defineProperty;
        module.exports = function (key, value) {
          try {
            defineProperty(global, key, {
              value: value,
              configurable: true,
              writable: true,
            });
          } catch (error) {
            global[key] = value;
          }
          return value;
        };
      },
      { ed7290b1ecc54428: 'iXoXQ' },
    ],
    jFkEg: [
      function (require, module, exports) {
        var NATIVE_WEAK_MAP = require('c5247220143e39e6');
        var global = require('cb6b217757c96bb');
        var isObject = require('4fca4c10c17fc87e');
        var createNonEnumerableProperty = require('21efb939f3e09bea');
        var hasOwn = require('d75b6d4524301d1d');
        var shared = require('43192b282ec6c16');
        var sharedKey = require('4e1162c1a69de8ca');
        var hiddenKeys = require('63daedc5b4a245b5');
        var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
        var TypeError = global.TypeError;
        var WeakMap = global.WeakMap;
        var set, get, has;
        var enforce = function (it) {
          return has(it) ? get(it) : set(it, {});
        };
        var getterFor = function (TYPE) {
          return function (it) {
            var state;
            if (!isObject(it) || (state = get(it)).type !== TYPE)
              throw TypeError('Incompatible receiver, ' + TYPE + ' required');
            return state;
          };
        };
        if (NATIVE_WEAK_MAP || shared.state) {
          var store = shared.state || (shared.state = new WeakMap());
          /* eslint-disable no-self-assign -- prototype methods protection */ store.get =
            store.get;
          store.has = store.has;
          store.set = store.set;
          /* eslint-enable no-self-assign -- prototype methods protection */ set =
            function (it, metadata) {
              if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
              metadata.facade = it;
              store.set(it, metadata);
              return metadata;
            };
          get = function (it) {
            return store.get(it) || {};
          };
          has = function (it) {
            return store.has(it);
          };
        } else {
          var STATE = sharedKey('state');
          hiddenKeys[STATE] = true;
          set = function (it, metadata) {
            if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
            metadata.facade = it;
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
          };
          get = function (it) {
            return hasOwn(it, STATE) ? it[STATE] : {};
          };
          has = function (it) {
            return hasOwn(it, STATE);
          };
        }
        module.exports = {
          set: set,
          get: get,
          has: has,
          enforce: enforce,
          getterFor: getterFor,
        };
      },
      {
        c5247220143e39e6: 'j5dIb',
        cb6b217757c96bb: 'iXoXQ',
        '4fca4c10c17fc87e': 'g13Yv',
        '21efb939f3e09bea': 'iK64h',
        d75b6d4524301d1d: 'cchmf',
        '43192b282ec6c16': 'ixlBA',
        '4e1162c1a69de8ca': 'bCLjm',
        '63daedc5b4a245b5': 'jK9CC',
      },
    ],
    j5dIb: [
      function (require, module, exports) {
        var global = require('9c1ec0a8ff55e828');
        var isCallable = require('5cdeda907a42c5bd');
        var WeakMap = global.WeakMap;
        module.exports =
          isCallable(WeakMap) && /native code/.test(String(WeakMap));
      },
      { '9c1ec0a8ff55e828': 'iXoXQ', '5cdeda907a42c5bd': 'a71HS' },
    ],
    g13Yv: [
      function (require, module, exports) {
        var isCallable = require('c122d6dd16be3bfa');
        var $documentAll = require('4961df54ae289d40');
        var documentAll = $documentAll.all;
        module.exports = $documentAll.IS_HTMLDDA
          ? function (it) {
              return typeof it == 'object'
                ? it !== null
                : isCallable(it) || it === documentAll;
            }
          : function (it) {
              return typeof it == 'object' ? it !== null : isCallable(it);
            };
      },
      { c122d6dd16be3bfa: 'a71HS', '4961df54ae289d40': 'i64Dd' },
    ],
    iK64h: [
      function (require, module, exports) {
        var DESCRIPTORS = require('18eb3d6a96909f58');
        var definePropertyModule = require('604482c720fd6c05');
        var createPropertyDescriptor = require('7dcc2051c6555b87');
        module.exports = DESCRIPTORS
          ? function (object, key, value) {
              return definePropertyModule.f(
                object,
                key,
                createPropertyDescriptor(1, value)
              );
            }
          : function (object, key, value) {
              object[key] = value;
              return object;
            };
      },
      {
        '18eb3d6a96909f58': '26KWG',
        '604482c720fd6c05': 'cmdwU',
        '7dcc2051c6555b87': '3v4Dm',
      },
    ],
    cmdwU: [
      function (require, module, exports) {
        var DESCRIPTORS = require('c7f9f2b6c8f10b7e');
        var IE8_DOM_DEFINE = require('ba14363ae826de40');
        var V8_PROTOTYPE_DEFINE_BUG = require('883ab9d45f9da76f');
        var anObject = require('355d8eed397f52ef');
        var toPropertyKey = require('dc0fe52c8afafd59');
        var $TypeError = TypeError;
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        var $defineProperty = Object.defineProperty;
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var ENUMERABLE = 'enumerable';
        var CONFIGURABLE = 'configurable';
        var WRITABLE = 'writable';
        // `Object.defineProperty` method
        // https://tc39.es/ecma262/#sec-object.defineproperty
        exports.f = DESCRIPTORS
          ? V8_PROTOTYPE_DEFINE_BUG
            ? function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPropertyKey(P);
                anObject(Attributes);
                if (
                  typeof O === 'function' &&
                  P === 'prototype' &&
                  'value' in Attributes &&
                  WRITABLE in Attributes &&
                  !Attributes[WRITABLE]
                ) {
                  var current = $getOwnPropertyDescriptor(O, P);
                  if (current && current[WRITABLE]) {
                    O[P] = Attributes.value;
                    Attributes = {
                      configurable:
                        CONFIGURABLE in Attributes
                          ? Attributes[CONFIGURABLE]
                          : current[CONFIGURABLE],
                      enumerable:
                        ENUMERABLE in Attributes
                          ? Attributes[ENUMERABLE]
                          : current[ENUMERABLE],
                      writable: false,
                    };
                  }
                }
                return $defineProperty(O, P, Attributes);
              }
            : $defineProperty
          : function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPropertyKey(P);
              anObject(Attributes);
              if (IE8_DOM_DEFINE)
                try {
                  return $defineProperty(O, P, Attributes);
                } catch (error) {}
              if ('get' in Attributes || 'set' in Attributes)
                throw $TypeError('Accessors not supported');
              if ('value' in Attributes) O[P] = Attributes.value;
              return O;
            };
      },
      {
        c7f9f2b6c8f10b7e: '26KWG',
        ba14363ae826de40: 'jKssS',
        '883ab9d45f9da76f': 'itVvg',
        '355d8eed397f52ef': 'd4biZ',
        dc0fe52c8afafd59: 'gQDBu',
      },
    ],
    jKssS: [
      function (require, module, exports) {
        var DESCRIPTORS = require('407ad69d9442bab3');
        var fails = require('7c2c57b992eb13d7');
        var createElement = require('7c9ee90a9ac6840a');
        // Thanks to IE8 for its funny defineProperty
        module.exports =
          !DESCRIPTORS &&
          !fails(function () {
            // eslint-disable-next-line es/no-object-defineproperty -- required for testing
            return (
              Object.defineProperty(createElement('div'), 'a', {
                get: function () {
                  return 7;
                },
              }).a != 7
            );
          });
      },
      {
        '407ad69d9442bab3': '26KWG',
        '7c2c57b992eb13d7': 'aNusG',
        '7c9ee90a9ac6840a': 'jH9Wj',
      },
    ],
    jH9Wj: [
      function (require, module, exports) {
        var global = require('ab2ed5186414042f');
        var isObject = require('6a5149119667ac9c');
        var document = global.document;
        // typeof document.createElement is 'object' in old IE
        var EXISTS = isObject(document) && isObject(document.createElement);
        module.exports = function (it) {
          return EXISTS ? document.createElement(it) : {};
        };
      },
      { ab2ed5186414042f: 'iXoXQ', '6a5149119667ac9c': 'g13Yv' },
    ],
    itVvg: [
      function (require, module, exports) {
        var DESCRIPTORS = require('a6f709c3762d859');
        var fails = require('d56b1b0335635760');
        // V8 ~ Chrome 36-
        // https://bugs.chromium.org/p/v8/issues/detail?id=3334
        module.exports =
          DESCRIPTORS &&
          fails(function () {
            // eslint-disable-next-line es/no-object-defineproperty -- required for testing
            return (
              Object.defineProperty(function () {}, 'prototype', {
                value: 42,
                writable: false,
              }).prototype != 42
            );
          });
      },
      { a6f709c3762d859: '26KWG', d56b1b0335635760: 'aNusG' },
    ],
    d4biZ: [
      function (require, module, exports) {
        var isObject = require('8a2a1050f1359e1f');
        var $String = String;
        var $TypeError = TypeError;
        // `Assert: Type(argument) is Object`
        module.exports = function (argument) {
          if (isObject(argument)) return argument;
          throw $TypeError($String(argument) + ' is not an object');
        };
      },
      { '8a2a1050f1359e1f': 'g13Yv' },
    ],
    gQDBu: [
      function (require, module, exports) {
        var toPrimitive = require('4674d76f87ae2afb');
        var isSymbol = require('efefddda7c462326');
        // `ToPropertyKey` abstract operation
        // https://tc39.es/ecma262/#sec-topropertykey
        module.exports = function (argument) {
          var key = toPrimitive(argument, 'string');
          return isSymbol(key) ? key : key + '';
        };
      },
      { '4674d76f87ae2afb': '96B2p', efefddda7c462326: 'iTQIu' },
    ],
    '96B2p': [
      function (require, module, exports) {
        var call = require('664fae157998df7b');
        var isObject = require('e50e08bd4eeca9c3');
        var isSymbol = require('9d9293a18196f21');
        var getMethod = require('98f6749c79bacaf1');
        var ordinaryToPrimitive = require('2c5f2a80d28d0bd0');
        var wellKnownSymbol = require('c750d69cd4df4a8');
        var $TypeError = TypeError;
        var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
        // `ToPrimitive` abstract operation
        // https://tc39.es/ecma262/#sec-toprimitive
        module.exports = function (input, pref) {
          if (!isObject(input) || isSymbol(input)) return input;
          var exoticToPrim = getMethod(input, TO_PRIMITIVE);
          var result;
          if (exoticToPrim) {
            if (pref === undefined) pref = 'default';
            result = call(exoticToPrim, input, pref);
            if (!isObject(result) || isSymbol(result)) return result;
            throw $TypeError("Can't convert object to primitive value");
          }
          if (pref === undefined) pref = 'number';
          return ordinaryToPrimitive(input, pref);
        };
      },
      {
        '664fae157998df7b': '8vege',
        e50e08bd4eeca9c3: 'g13Yv',
        '9d9293a18196f21': 'iTQIu',
        '98f6749c79bacaf1': 'fxr58',
        '2c5f2a80d28d0bd0': '2VdlC',
        c750d69cd4df4a8: 'bIvl7',
      },
    ],
    '8vege': [
      function (require, module, exports) {
        var NATIVE_BIND = require('ef2e56e4110459e');
        var call = Function.prototype.call;
        module.exports = NATIVE_BIND
          ? call.bind(call)
          : function () {
              return call.apply(call, arguments);
            };
      },
      { ef2e56e4110459e: '1kGZX' },
    ],
    iTQIu: [
      function (require, module, exports) {
        var getBuiltIn = require('cc552302db35bb60');
        var isCallable = require('206eb102fbe9e621');
        var isPrototypeOf = require('bd21656dc3d45177');
        var USE_SYMBOL_AS_UID = require('23a06c1d66c50e02');
        var $Object = Object;
        module.exports = USE_SYMBOL_AS_UID
          ? function (it) {
              return typeof it == 'symbol';
            }
          : function (it) {
              var $Symbol = getBuiltIn('Symbol');
              return (
                isCallable($Symbol) &&
                isPrototypeOf($Symbol.prototype, $Object(it))
              );
            };
      },
      {
        cc552302db35bb60: 'cd3qg',
        '206eb102fbe9e621': 'a71HS',
        bd21656dc3d45177: '8FuRS',
        '23a06c1d66c50e02': 'czA26',
      },
    ],
    cd3qg: [
      function (require, module, exports) {
        var global = require('93b91b9ebd7b4a80');
        var isCallable = require('2bf5926c154da6dd');
        var aFunction = function (argument) {
          return isCallable(argument) ? argument : undefined;
        };
        module.exports = function (namespace, method) {
          return arguments.length < 2
            ? aFunction(global[namespace])
            : global[namespace] && global[namespace][method];
        };
      },
      { '93b91b9ebd7b4a80': 'iXoXQ', '2bf5926c154da6dd': 'a71HS' },
    ],
    '8FuRS': [
      function (require, module, exports) {
        var uncurryThis = require('33f8d3f871466e8');
        module.exports = uncurryThis({}.isPrototypeOf);
      },
      { '33f8d3f871466e8': 'cmrS8' },
    ],
    czA26: [
      function (require, module, exports) {
        /* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require('97429ad9d1fce5fc');
        module.exports =
          NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';
      },
      { '97429ad9d1fce5fc': '9Xp0s' },
    ],
    '9Xp0s': [
      function (require, module, exports) {
        /* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require('7d9fa90fededd46e');
        var fails = require('80fc5643065263fd');
        // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
        module.exports =
          !!Object.getOwnPropertySymbols &&
          !fails(function () {
            var symbol = Symbol();
            // Chrome 38 Symbol has incorrect toString conversion
            // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
            return (
              !String(symbol) ||
              !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
              (!Symbol.sham && V8_VERSION && V8_VERSION < 41)
            );
          });
      },
      { '7d9fa90fededd46e': '6gagz', '80fc5643065263fd': 'aNusG' },
    ],
    '6gagz': [
      function (require, module, exports) {
        var global = require('c49a57144f1f9c0c');
        var userAgent = require('bdb2bf4a3a822796');
        var process = global.process;
        var Deno = global.Deno;
        var versions = (process && process.versions) || (Deno && Deno.version);
        var v8 = versions && versions.v8;
        var match, version;
        if (v8) {
          match = v8.split('.');
          // in old Chrome, versions of V8 isn't V8 = Chrome / 10
          // but their correct versions are not interesting for us
          version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
        }
        // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
        // so check `userAgent` even if `.v8` exists, but 0
        if (!version && userAgent) {
          match = userAgent.match(/Edge\/(\d+)/);
          if (!match || match[1] >= 74) {
            match = userAgent.match(/Chrome\/(\d+)/);
            if (match) version = +match[1];
          }
        }
        module.exports = version;
      },
      { c49a57144f1f9c0c: 'iXoXQ', bdb2bf4a3a822796: 'hA8G7' },
    ],
    hA8G7: [
      function (require, module, exports) {
        module.exports =
          (typeof navigator != 'undefined' && String(navigator.userAgent)) ||
          '';
      },
      {},
    ],
    fxr58: [
      function (require, module, exports) {
        var aCallable = require('51d751cf83a6efa8');
        var isNullOrUndefined = require('2d366e45f56304f5');
        // `GetMethod` abstract operation
        // https://tc39.es/ecma262/#sec-getmethod
        module.exports = function (V, P) {
          var func = V[P];
          return isNullOrUndefined(func) ? undefined : aCallable(func);
        };
      },
      { '51d751cf83a6efa8': '8sS9x', '2d366e45f56304f5': 'h2dPC' },
    ],
    '8sS9x': [
      function (require, module, exports) {
        var isCallable = require('cade7e6ba5ce5378');
        var tryToString = require('f21ade50f38e35d8');
        var $TypeError = TypeError;
        // `Assert: IsCallable(argument) is true`
        module.exports = function (argument) {
          if (isCallable(argument)) return argument;
          throw $TypeError(tryToString(argument) + ' is not a function');
        };
      },
      { cade7e6ba5ce5378: 'a71HS', f21ade50f38e35d8: 'bOSt0' },
    ],
    bOSt0: [
      function (require, module, exports) {
        var $String = String;
        module.exports = function (argument) {
          try {
            return $String(argument);
          } catch (error) {
            return 'Object';
          }
        };
      },
      {},
    ],
    '2VdlC': [
      function (require, module, exports) {
        var call = require('123bd8f55ace0431');
        var isCallable = require('7ae3c580e483a0e6');
        var isObject = require('d8910c27a650f72d');
        var $TypeError = TypeError;
        // `OrdinaryToPrimitive` abstract operation
        // https://tc39.es/ecma262/#sec-ordinarytoprimitive
        module.exports = function (input, pref) {
          var fn, val;
          if (
            pref === 'string' &&
            isCallable((fn = input.toString)) &&
            !isObject((val = call(fn, input)))
          )
            return val;
          if (
            isCallable((fn = input.valueOf)) &&
            !isObject((val = call(fn, input)))
          )
            return val;
          if (
            pref !== 'string' &&
            isCallable((fn = input.toString)) &&
            !isObject((val = call(fn, input)))
          )
            return val;
          throw $TypeError("Can't convert object to primitive value");
        };
      },
      {
        '123bd8f55ace0431': '8vege',
        '7ae3c580e483a0e6': 'a71HS',
        d8910c27a650f72d: 'g13Yv',
      },
    ],
    bIvl7: [
      function (require, module, exports) {
        var global = require('7c7fe35d2e52ed36');
        var shared = require('3751b7dfb08970ec');
        var hasOwn = require('5700411cdc4466c2');
        var uid = require('cf77e0da7c57be85');
        var NATIVE_SYMBOL = require('70b15f402ecfe26f');
        var USE_SYMBOL_AS_UID = require('a6926dbabee63b0e');
        var Symbol = global.Symbol;
        var WellKnownSymbolsStore = shared('wks');
        var createWellKnownSymbol = USE_SYMBOL_AS_UID
          ? Symbol['for'] || Symbol
          : (Symbol && Symbol.withoutSetter) || uid;
        module.exports = function (name) {
          if (!hasOwn(WellKnownSymbolsStore, name))
            WellKnownSymbolsStore[name] =
              NATIVE_SYMBOL && hasOwn(Symbol, name)
                ? Symbol[name]
                : createWellKnownSymbol('Symbol.' + name);
          return WellKnownSymbolsStore[name];
        };
      },
      {
        '7c7fe35d2e52ed36': 'iXoXQ',
        '3751b7dfb08970ec': 'cL0kZ',
        '5700411cdc4466c2': 'cchmf',
        cf77e0da7c57be85: 'P3D1M',
        '70b15f402ecfe26f': '9Xp0s',
        a6926dbabee63b0e: 'czA26',
      },
    ],
    cL0kZ: [
      function (require, module, exports) {
        var IS_PURE = require('98ab479d2f18d750');
        var store = require('d91fb18db56cecda');
        (module.exports = function (key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })('versions', []).push({
          version: '3.29.0',
          mode: IS_PURE ? 'pure' : 'global',
          copyright: '\xa9 2014-2023 Denis Pushkarev (zloirock.ru)',
          license: 'https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE',
          source: 'https://github.com/zloirock/core-js',
        });
      },
      { '98ab479d2f18d750': '6ABeq', d91fb18db56cecda: 'ixlBA' },
    ],
    '6ABeq': [
      function (require, module, exports) {
        module.exports = false;
      },
      {},
    ],
    P3D1M: [
      function (require, module, exports) {
        var uncurryThis = require('61766624da08049c');
        var id = 0;
        var postfix = Math.random();
        var toString = uncurryThis((1.0).toString);
        module.exports = function (key) {
          return (
            'Symbol(' +
            (key === undefined ? '' : key) +
            ')_' +
            toString(++id + postfix, 36)
          );
        };
      },
      { '61766624da08049c': 'cmrS8' },
    ],
    '3v4Dm': [
      function (require, module, exports) {
        module.exports = function (bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value,
          };
        };
      },
      {},
    ],
    bCLjm: [
      function (require, module, exports) {
        var shared = require('3e3c213bc1482902');
        var uid = require('4c53cc9907830a13');
        var keys = shared('keys');
        module.exports = function (key) {
          return keys[key] || (keys[key] = uid(key));
        };
      },
      { '3e3c213bc1482902': 'cL0kZ', '4c53cc9907830a13': 'P3D1M' },
    ],
    jK9CC: [
      function (require, module, exports) {
        module.exports = {};
      },
      {},
    ],
    '2ATSy': [
      function (require, module, exports) {
        'use strict';
        var anObject = require('5665a897f36d3812');
        // `RegExp.prototype.flags` getter implementation
        // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
        module.exports = function () {
          var that = anObject(this);
          var result = '';
          if (that.hasIndices) result += 'd';
          if (that.global) result += 'g';
          if (that.ignoreCase) result += 'i';
          if (that.multiline) result += 'm';
          if (that.dotAll) result += 's';
          if (that.unicode) result += 'u';
          if (that.unicodeSets) result += 'v';
          if (that.sticky) result += 'y';
          return result;
        };
      },
      { '5665a897f36d3812': 'd4biZ' },
    ],
    bLG5h: [
      function (require, module, exports) {
        /* eslint-disable */ var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'displayMap', () => displayMap);
        const displayMap = (locations) => {
          mapboxgl.accessToken =
            'pk.eyJ1IjoiZmVib210ZW1wbyIsImEiOiJjbGVvb3NnanIwNGZ3NDNteHB4bzJ0dWJ0In0.pFFKCgOyNZl_VDwv5DgWwg';
          var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v10',
            scrollZoom: false,
          });
          const bounds = new mapboxgl.LngLatBounds();
          locations.forEach((loc) => {
            // Create marker
            const el = document.createElement('div');
            el.className = 'marker';
            // Add marker
            new mapboxgl.Marker({
              element: el,
              anchor: 'bottom',
            })
              .setLngLat(loc.coordinates)
              .addTo(map);
            // Add popup
            new mapboxgl.Popup({
              offset: 30,
            })
              .setLngLat(loc.coordinates)
              .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
              .addTo(map);
            // Extend map bounds to include current location
            bounds.extend(loc.coordinates);
          });
          map.fitBounds(bounds, {
            padding: {
              top: 200,
              bottom: 150,
              left: 100,
              right: 100,
            },
          });
        };
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'iNctU' },
    ],
    iNctU: [
      function (require, module, exports) {
        exports.interopDefault = function (a) {
          return a && a.__esModule
            ? a
            : {
                default: a,
              };
        };
        exports.defineInteropFlag = function (a) {
          Object.defineProperty(a, '__esModule', {
            value: true,
          });
        };
        exports.exportAll = function (source, dest) {
          Object.keys(source).forEach(function (key) {
            if (
              key === 'default' ||
              key === '__esModule' ||
              dest.hasOwnProperty(key)
            )
              return;
            Object.defineProperty(dest, key, {
              enumerable: true,
              get: function () {
                return source[key];
              },
            });
          });
          return dest;
        };
        exports.export = function (dest, destName, get) {
          Object.defineProperty(dest, destName, {
            enumerable: true,
            get: get,
          });
        };
      },
      {},
    ],
    lJYvj: [
      function (require, module, exports) {
        /* eslint-disable */ var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'login', () => login);
        parcelHelpers.export(exports, 'logout', () => logout);
        var _axios = require('axios');
        var _axiosDefault = parcelHelpers.interopDefault(_axios);
        var _alerts = require('./alerts');
        const login = async (email, password) => {
          try {
            const res = await (0, _axiosDefault.default)({
              method: 'POST',
              url: 'http://127.0.0.1:3000/api/v1/users/login',
              data: {
                email,
                password,
              },
            });
            if (res.data.status === 'success') {
              (0, _alerts.showAlert)('success', 'Logged in successfully!');
              window.setTimeout(() => {
                location.assign('/');
              }, 1500);
            }
          } catch (err) {
            (0, _alerts.showAlert)('error', err.response.data.message);
          }
        };
        const logout = async () => {
          try {
            const res = await (0, _axiosDefault.default)({
              method: 'GET',
              url: 'http://127.0.0.1:3000/api/v1/users/logout',
            });
            res.data.status = 'success';
            location.reload(true);
          } catch (err) {
            console.log(err.response);
            (0, _alerts.showAlert)('error', 'Error logging out! Try again.');
          }
        };
      },
      {
        axios: 'axios',
        './alerts': '9CQ7p',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'iNctU',
      },
    ],
    '9CQ7p': [
      function (require, module, exports) {
        /* eslint-disable */ var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'hideAlert', () => hideAlert);
        parcelHelpers.export(exports, 'showAlert', () => showAlert);
        const hideAlert = () => {
          const el = document.querySelector('.alert');
          if (el) el.parentElement.removeChild(el);
        };
        const showAlert = (type, msg) => {
          hideAlert();
          const markup = `<div class="alert alert--${type}">${msg}</div>`;
          document
            .querySelector('body')
            .insertAdjacentHTML('afterbegin', markup);
          window.setTimeout(hideAlert, 5000);
        };
      },
      { '@parcel/transformer-js/src/esmodule-helpers.js': 'iNctU' },
    ],
    h6FHa: [
      function (require, module, exports) {
        /* eslint-disable */ var parcelHelpers = require('@parcel/transformer-js/src/esmodule-helpers.js');
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, 'updateSettings', () => updateSettings);
        var _axios = require('axios');
        var _axiosDefault = parcelHelpers.interopDefault(_axios);
        var _alerts = require('./alerts');
        const updateSettings = async (data, type) => {
          try {
            const url =
              type === 'password'
                ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword'
                : 'http://127.0.0.1:3000/api/v1/users/updateMe';
            const res = await (0, _axiosDefault.default)({
              method: 'PATCH',
              url,
              data,
            });
            if (res.data.status === 'success')
              (0, _alerts.showAlert)(
                'success',
                `${type.toUpperCase()} updated successfully!`
              );
          } catch (err) {
            (0, _alerts.showAlert)('error', err.response.data.message);
          }
        };
      },
      {
        axios: 'axios',
        './alerts': '9CQ7p',
        '@parcel/transformer-js/src/esmodule-helpers.js': 'iNctU',
      },
    ],
  },
  ['4v3rH', '9ZDGW'],
  '9ZDGW',
  'parcelRequire11c7'
);

//# sourceMappingURL=index.js.map
