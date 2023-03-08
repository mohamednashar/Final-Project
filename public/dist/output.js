/******/ () => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/@firebase/firestore/dist/lite/index.browser.esm2017.js":
      /*!*****************************************************************************!*\
  !*** ./node_modules/@firebase/firestore/dist/lite/index.browser.esm2017.js ***!
  \*****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AggregateField: () => /* binding */ Tn,
          /* harmony export */ AggregateQuerySnapshot: () => /* binding */ An,
          /* harmony export */ Bytes: () => /* binding */ qn,
          /* harmony export */ CollectionReference: () => /* binding */ $n,
          /* harmony export */ DocumentReference: () => /* binding */ Pn,
          /* harmony export */ DocumentSnapshot: () => /* binding */ fr,
          /* harmony export */ FieldPath: () => /* binding */ On,
          /* harmony export */ FieldValue: () => /* binding */ Cn,
          /* harmony export */ Firestore: () => /* binding */ _n,
          /* harmony export */ FirestoreError: () => /* binding */ U,
          /* harmony export */ GeoPoint: () => /* binding */ Ln,
          /* harmony export */ Query: () => /* binding */ Vn,
          /* harmony export */ QueryCompositeFilterConstraint: () =>
            /* binding */ Er,
          /* harmony export */ QueryConstraint: () => /* binding */ gr,
          /* harmony export */ QueryDocumentSnapshot: () => /* binding */ dr,
          /* harmony export */ QueryEndAtConstraint: () => /* binding */ xr,
          /* harmony export */ QueryFieldFilterConstraint: () =>
            /* binding */ vr,
          /* harmony export */ QueryLimitConstraint: () => /* binding */ Pr,
          /* harmony export */ QueryOrderByConstraint: () => /* binding */ Ar,
          /* harmony export */ QuerySnapshot: () => /* binding */ wr,
          /* harmony export */ QueryStartAtConstraint: () => /* binding */ Nr,
          /* harmony export */ Timestamp: () => /* binding */ Vt,
          /* harmony export */ Transaction: () => /* binding */ fs,
          /* harmony export */ WriteBatch: () => /* binding */ rs,
          /* harmony export */ addDoc: () => /* binding */ Yr,
          /* harmony export */ aggregateQuerySnapshotEqual: () =>
            /* binding */ Jr,
          /* harmony export */ and: () => /* binding */ Tr,
          /* harmony export */ arrayRemove: () => /* binding */ es,
          /* harmony export */ arrayUnion: () => /* binding */ ts,
          /* harmony export */ collection: () => /* binding */ Nn,
          /* harmony export */ collectionGroup: () => /* binding */ Dn,
          /* harmony export */ connectFirestoreEmulator: () => /* binding */ En,
          /* harmony export */ deleteDoc: () => /* binding */ Kr,
          /* harmony export */ deleteField: () => /* binding */ Xr,
          /* harmony export */ doc: () => /* binding */ Fn,
          /* harmony export */ documentId: () => /* binding */ kn,
          /* harmony export */ endAt: () => /* binding */ qr,
          /* harmony export */ endBefore: () => /* binding */ Sr,
          /* harmony export */ getCount: () => /* binding */ Hr,
          /* harmony export */ getDoc: () => /* binding */ Qr,
          /* harmony export */ getDocs: () => /* binding */ zr,
          /* harmony export */ getFirestore: () => /* binding */ bn,
          /* harmony export */ increment: () => /* binding */ ns,
          /* harmony export */ initializeFirestore: () => /* binding */ vn,
          /* harmony export */ limit: () => /* binding */ Vr,
          /* harmony export */ limitToLast: () => /* binding */ $r,
          /* harmony export */ or: () => /* binding */ Ir,
          /* harmony export */ orderBy: () => /* binding */ Rr,
          /* harmony export */ query: () => /* binding */ _r,
          /* harmony export */ queryEqual: () => /* binding */ Sn,
          /* harmony export */ refEqual: () => /* binding */ xn,
          /* harmony export */ runTransaction: () => /* binding */ ds,
          /* harmony export */ serverTimestamp: () => /* binding */ Zr,
          /* harmony export */ setDoc: () => /* binding */ Wr,
          /* harmony export */ setLogLevel: () => /* binding */ p,
          /* harmony export */ snapshotEqual: () => /* binding */ mr,
          /* harmony export */ startAfter: () => /* binding */ Fr,
          /* harmony export */ startAt: () => /* binding */ Dr,
          /* harmony export */ terminate: () => /* binding */ In,
          /* harmony export */ updateDoc: () => /* binding */ Gr,
          /* harmony export */ where: () => /* binding */ br,
          /* harmony export */ writeBatch: () => /* binding */ is,
          /* harmony export */
        });
        /* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @firebase/app */ "./node_modules/@firebase/app/dist/esm/index.esm2017.js"
          );
        /* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @firebase/component */ "./node_modules/@firebase/component/dist/esm/index.esm2017.js"
          );
        /* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @firebase/logger */ "./node_modules/@firebase/logger/dist/esm/index.esm2017.js"
          );
        /* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js"
          );

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Simple wrapper around a nullable UID. Mostly exists to make code more
         * readable.
         */
        class d {
          constructor(t) {
            this.uid = t;
          }
          isAuthenticated() {
            return null != this.uid;
          }
          /**
           * Returns a key representing this user, suitable for inclusion in a
           * dictionary.
           */ toKey() {
            return this.isAuthenticated()
              ? "uid:" + this.uid
              : "anonymous-user";
          }
          isEqual(t) {
            return t.uid === this.uid;
          }
        }

        /** A user with a null UID. */ (d.UNAUTHENTICATED = new d(null)),
          // TODO(mikelehen): Look into getting a proper uid-equivalent for
          // non-FirebaseAuth providers.
          (d.GOOGLE_CREDENTIALS = new d("google-credentials-uid")),
          (d.FIRST_PARTY = new d("first-party-uid")),
          (d.MOCK_USER = new d("mock-user"));

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        let w = "9.15.0";

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        const m = new _firebase_logger__WEBPACK_IMPORTED_MODULE_2__.Logger(
          "@firebase/firestore"
        );

        /**
         * Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
         *
         * @param logLevel - The verbosity you set for activity and error logging. Can
         *   be any of the following values:
         *
         *   <ul>
         *     <li>`debug` for the most verbose logging level, primarily for
         *     debugging.</li>
         *     <li>`error` to log errors only.</li>
         *     <li><code>`silent` to turn off logging.</li>
         *   </ul>
         */ function p(t) {
          m.setLogLevel(t);
        }

        function y(t, ...e) {
          if (
            m.logLevel <=
            _firebase_logger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.DEBUG
          ) {
            const n = e.map(v);
            m.debug(`Firestore (${w}): ${t}`, ...n);
          }
        }

        function g(t, ...e) {
          if (
            m.logLevel <=
            _firebase_logger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.ERROR
          ) {
            const n = e.map(v);
            m.error(`Firestore (${w}): ${t}`, ...n);
          }
        }

        /**
         * @internal
         */ function _(t, ...e) {
          if (
            m.logLevel <=
            _firebase_logger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.WARN
          ) {
            const n = e.map(v);
            m.warn(`Firestore (${w}): ${t}`, ...n);
          }
        }

        /**
         * Converts an additional log parameter to a string representation.
         */ function v(t) {
          if ("string" == typeof t) return t;
          try {
            return (e = t), JSON.stringify(e);
          } catch (e) {
            // Converting to JSON failed, just log the object directly
            return t;
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */
          /** Formats an object as a JSON string, suitable for logging. */
          var e;
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Unconditionally fails, throwing an Error with the given message.
         * Messages are stripped in production builds.
         *
         * Returns `never` and can be used in expressions:
         * @example
         * let futureVar = fail('not implemented yet');
         */ function b(t = "Unexpected state") {
          // Log the failure in addition to throw an exception, just in case the
          // exception is swallowed.
          const e = `FIRESTORE (${w}) INTERNAL ASSERTION FAILED: ` + t;
          // NOTE: We don't use FirestoreError here because these are internal failures
          // that cannot be handled by the user. (Also it would create a circular
          // dependency between the error and assert modules which doesn't work.)
          throw (g(e), new Error(e));
        }

        /**
         * Fails if the given assertion condition is false, throwing an Error with the
         * given message if it did.
         *
         * Messages are stripped in production builds.
         */ function E(t, e) {
          t || b();
        }

        /**
         * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
         * instance of `T` before casting.
         */ function I(
          t,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          e
        ) {
          return t;
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const T = "ok",
          A = "cancelled",
          R = "unknown",
          P = "invalid-argument",
          V = "deadline-exceeded",
          $ = "not-found",
          N = "already-exists",
          D = "permission-denied",
          F = "unauthenticated",
          x = "resource-exhausted",
          S = "failed-precondition",
          q = "aborted",
          O = "out-of-range",
          k = "unimplemented",
          C = "internal",
          L = "unavailable",
          M = "data-loss";

        /** An error returned by a Firestore operation. */ class U extends _firebase_util__WEBPACK_IMPORTED_MODULE_3__.FirebaseError {
          /** @hideconstructor */
          constructor(
            /**
             * The backend error code associated with this error.
             */
            t,
            /**
             * A custom error description.
             */
            e
          ) {
            super(t, e),
              (this.code = t),
              (this.message = e),
              // HACK: We write a toString property directly because Error is not a real
              // class and so inheritance does not work correctly. We could alternatively
              // do the same "back-door inheritance" trick that FirebaseError does.
              (this.toString = () =>
                `${this.name}: [code=${this.code}]: ${this.message}`);
          }
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ class j {
          constructor() {
            this.promise = new Promise((t, e) => {
              (this.resolve = t), (this.reject = e);
            });
          }
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ class B {
          constructor(t, e) {
            (this.user = e),
              (this.type = "OAuth"),
              (this.headers = new Map()),
              this.headers.set("Authorization", `Bearer ${t}`);
          }
        }

        /**
         * A CredentialsProvider that always yields an empty token.
         * @internal
         */ class Q {
          getToken() {
            return Promise.resolve(null);
          }
          invalidateToken() {}
          start(t, e) {
            // Fire with initial user.
            t.enqueueRetryable(() => e(d.UNAUTHENTICATED));
          }
          shutdown() {}
        }

        /**
         * A CredentialsProvider that always returns a constant token. Used for
         * emulator token mocking.
         */ class z {
          constructor(t) {
            (this.token = t),
              /**
               * Stores the listener registered with setChangeListener()
               * This isn't actually necessary since the UID never changes, but we use this
               * to verify the listen contract is adhered to in tests.
               */
              (this.changeListener = null);
          }
          getToken() {
            return Promise.resolve(this.token);
          }
          invalidateToken() {}
          start(t, e) {
            (this.changeListener = e),
              // Fire with initial user.
              t.enqueueRetryable(() => e(this.token.user));
          }
          shutdown() {
            this.changeListener = null;
          }
        }

        /** Credential provider for the Lite SDK. */ class W {
          constructor(t) {
            (this.auth = null),
              t.onInit((t) => {
                this.auth = t;
              });
          }
          getToken() {
            return this.auth
              ? this.auth
                  .getToken()
                  .then((t) =>
                    t
                      ? (E("string" == typeof t.accessToken),
                        new B(t.accessToken, new d(this.auth.getUid())))
                      : null
                  )
              : Promise.resolve(null);
          }
          invalidateToken() {}
          start(t, e) {}
          shutdown() {}
        }

        /*
         * FirstPartyToken provides a fresh token each time its value
         * is requested, because if the token is too old, requests will be rejected.
         * Technically this may no longer be necessary since the SDK should gracefully
         * recover from unauthenticated errors (see b/33147818 for context), but it's
         * safer to keep the implementation as-is.
         */ class G {
          constructor(t, e, n, r) {
            (this.t = t),
              (this.i = e),
              (this.o = n),
              (this.u = r),
              (this.type = "FirstParty"),
              (this.user = d.FIRST_PARTY),
              (this.h = new Map());
          }
          /** Gets an authorization token, using a provided factory function, or falling back to First Party GAPI. */ l() {
            return this.u
              ? this.u()
              : // Make sure this really is a Gapi client.
                (E(
                  !(
                    "object" != typeof this.t ||
                    null === this.t ||
                    !this.t.auth ||
                    !this.t.auth.getAuthHeaderValueForFirstParty
                  )
                ),
                this.t.auth.getAuthHeaderValueForFirstParty([]));
          }
          get headers() {
            this.h.set("X-Goog-AuthUser", this.i);
            // Use array notation to prevent minification
            const t = this.l();
            return (
              t && this.h.set("Authorization", t),
              this.o && this.h.set("X-Goog-Iam-Authorization-Token", this.o),
              this.h
            );
          }
        }

        /*
         * Provides user credentials required for the Firestore JavaScript SDK
         * to authenticate the user, using technique that is only available
         * to applications hosted by Google.
         */ class K {
          constructor(t, e, n, r) {
            (this.t = t), (this.i = e), (this.o = n), (this.u = r);
          }
          getToken() {
            return Promise.resolve(new G(this.t, this.i, this.o, this.u));
          }
          start(t, e) {
            // Fire with initial uid.
            t.enqueueRetryable(() => e(d.FIRST_PARTY));
          }
          shutdown() {}
          invalidateToken() {}
        }

        class Y {
          constructor(t) {
            (this.value = t),
              (this.type = "AppCheck"),
              (this.headers = new Map()),
              t &&
                t.length > 0 &&
                this.headers.set("x-firebase-appcheck", this.value);
          }
        }

        /** AppCheck token provider for the Lite SDK. */ class H {
          constructor(t) {
            (this.m = t),
              (this.appCheck = null),
              t.onInit((t) => {
                this.appCheck = t;
              });
          }
          getToken() {
            return this.appCheck
              ? this.appCheck
                  .getToken()
                  .then((t) =>
                    t ? (E("string" == typeof t.token), new Y(t.token)) : null
                  )
              : Promise.resolve(null);
          }
          invalidateToken() {}
          start(t, e) {}
          shutdown() {}
        }

        /**
         * Builds a CredentialsProvider depending on the type of
         * the credentials passed in.
         */
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        class J {
          /**
           * Constructs a DatabaseInfo using the provided host, databaseId and
           * persistenceKey.
           *
           * @param databaseId - The database to use.
           * @param appId - The Firebase App Id.
           * @param persistenceKey - A unique identifier for this Firestore's local
           * storage (used in conjunction with the databaseId).
           * @param host - The Firestore backend host to connect to.
           * @param ssl - Whether to use SSL when connecting.
           * @param forceLongPolling - Whether to use the forceLongPolling option
           * when using WebChannel as the network transport.
           * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
           * option when using WebChannel as the network transport.
           * @param useFetchStreams Whether to use the Fetch API instead of
           * XMLHTTPRequest
           */
          constructor(t, e, n, r, s, i, o, u) {
            (this.databaseId = t),
              (this.appId = e),
              (this.persistenceKey = n),
              (this.host = r),
              (this.ssl = s),
              (this.forceLongPolling = i),
              (this.autoDetectLongPolling = o),
              (this.useFetchStreams = u);
          }
        }

        /** The default database name for a project. */
        /**
         * Represents the database ID a Firestore client is associated with.
         * @internal
         */
        class X {
          constructor(t, e) {
            (this.projectId = t), (this.database = e || "(default)");
          }
          static empty() {
            return new X("", "");
          }
          get isDefaultDatabase() {
            return "(default)" === this.database;
          }
          isEqual(t) {
            return (
              t instanceof X &&
              t.projectId === this.projectId &&
              t.database === this.database
            );
          }
        }

        /**
         * Path represents an ordered sequence of string segments.
         */
        class Z {
          constructor(t, e, n) {
            void 0 === e ? (e = 0) : e > t.length && b(),
              void 0 === n ? (n = t.length - e) : n > t.length - e && b(),
              (this.segments = t),
              (this.offset = e),
              (this.len = n);
          }
          get length() {
            return this.len;
          }
          isEqual(t) {
            return 0 === Z.comparator(this, t);
          }
          child(t) {
            const e = this.segments.slice(this.offset, this.limit());
            return (
              t instanceof Z
                ? t.forEach((t) => {
                    e.push(t);
                  })
                : e.push(t),
              this.construct(e)
            );
          }
          /** The index of one past the last segment of the path. */ limit() {
            return this.offset + this.length;
          }
          popFirst(t) {
            return (
              (t = void 0 === t ? 1 : t),
              this.construct(this.segments, this.offset + t, this.length - t)
            );
          }
          popLast() {
            return this.construct(this.segments, this.offset, this.length - 1);
          }
          firstSegment() {
            return this.segments[this.offset];
          }
          lastSegment() {
            return this.get(this.length - 1);
          }
          get(t) {
            return this.segments[this.offset + t];
          }
          isEmpty() {
            return 0 === this.length;
          }
          isPrefixOf(t) {
            if (t.length < this.length) return !1;
            for (let e = 0; e < this.length; e++)
              if (this.get(e) !== t.get(e)) return !1;
            return !0;
          }
          isImmediateParentOf(t) {
            if (this.length + 1 !== t.length) return !1;
            for (let e = 0; e < this.length; e++)
              if (this.get(e) !== t.get(e)) return !1;
            return !0;
          }
          forEach(t) {
            for (let e = this.offset, n = this.limit(); e < n; e++)
              t(this.segments[e]);
          }
          toArray() {
            return this.segments.slice(this.offset, this.limit());
          }
          static comparator(t, e) {
            const n = Math.min(t.length, e.length);
            for (let r = 0; r < n; r++) {
              const n = t.get(r),
                s = e.get(r);
              if (n < s) return -1;
              if (n > s) return 1;
            }
            return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
          }
        }

        /**
         * A slash-separated path for navigating resources (documents and collections)
         * within Firestore.
         *
         * @internal
         */ class tt extends Z {
          construct(t, e, n) {
            return new tt(t, e, n);
          }
          canonicalString() {
            // NOTE: The client is ignorant of any path segments containing escape
            // sequences (e.g. __id123__) and just passes them through raw (they exist
            // for legacy reasons and should not be used frequently).
            return this.toArray().join("/");
          }
          toString() {
            return this.canonicalString();
          }
          /**
           * Creates a resource path from the given slash-delimited string. If multiple
           * arguments are provided, all components are combined. Leading and trailing
           * slashes from all components are ignored.
           */ static fromString(...t) {
            // NOTE: The client is ignorant of any path segments containing escape
            // sequences (e.g. __id123__) and just passes them through raw (they exist
            // for legacy reasons and should not be used frequently).
            const e = [];
            for (const n of t) {
              if (n.indexOf("//") >= 0)
                throw new U(
                  P,
                  `Invalid segment (${n}). Paths must not contain // in them.`
                );
              // Strip leading and traling slashed.
              e.push(...n.split("/").filter((t) => t.length > 0));
            }
            return new tt(e);
          }
          static emptyPath() {
            return new tt([]);
          }
        }

        const et = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

        /**
         * A dot-separated path for navigating sub-objects within a document.
         * @internal
         */ class nt extends Z {
          construct(t, e, n) {
            return new nt(t, e, n);
          }
          /**
           * Returns true if the string could be used as a segment in a field path
           * without escaping.
           */ static isValidIdentifier(t) {
            return et.test(t);
          }
          canonicalString() {
            return this.toArray()
              .map(
                (t) => (
                  (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
                  nt.isValidIdentifier(t) || (t = "`" + t + "`"),
                  t
                )
              )
              .join(".");
          }
          toString() {
            return this.canonicalString();
          }
          /**
           * Returns true if this field references the key of a document.
           */ isKeyField() {
            return 1 === this.length && "__name__" === this.get(0);
          }
          /**
           * The field designating the key of a document.
           */ static keyField() {
            return new nt(["__name__"]);
          }
          /**
           * Parses a field string from the given server-formatted string.
           *
           * - Splitting the empty string is not allowed (for now at least).
           * - Empty segments within the string (e.g. if there are two consecutive
           *   separators) are not allowed.
           *
           * TODO(b/37244157): we should make this more strict. Right now, it allows
           * non-identifier path components, even if they aren't escaped.
           */ static fromServerFormat(t) {
            const e = [];
            let n = "",
              r = 0;
            const s = () => {
              if (0 === n.length)
                throw new U(
                  P,
                  `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
                );
              e.push(n), (n = "");
            };
            let i = !1;
            for (; r < t.length; ) {
              const e = t[r];
              if ("\\" === e) {
                if (r + 1 === t.length)
                  throw new U(P, "Path has trailing escape character: " + t);
                const e = t[r + 1];
                if ("\\" !== e && "." !== e && "`" !== e)
                  throw new U(P, "Path has invalid escape sequence: " + t);
                (n += e), (r += 2);
              } else
                "`" === e
                  ? ((i = !i), r++)
                  : "." !== e || i
                  ? ((n += e), r++)
                  : (s(), r++);
            }
            if ((s(), i)) throw new U(P, "Unterminated ` in path: " + t);
            return new nt(e);
          }
          static emptyPath() {
            return new nt([]);
          }
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * @internal
         */ class rt {
          constructor(t) {
            this.path = t;
          }
          static fromPath(t) {
            return new rt(tt.fromString(t));
          }
          static fromName(t) {
            return new rt(tt.fromString(t).popFirst(5));
          }
          static empty() {
            return new rt(tt.emptyPath());
          }
          get collectionGroup() {
            return this.path.popLast().lastSegment();
          }
          /** Returns true if the document is in the specified collectionId. */ hasCollectionId(
            t
          ) {
            return (
              this.path.length >= 2 && this.path.get(this.path.length - 2) === t
            );
          }
          /** Returns the collection group (i.e. the name of the parent collection) for this key. */ getCollectionGroup() {
            return this.path.get(this.path.length - 2);
          }
          /** Returns the fully qualified path to the parent collection. */ getCollectionPath() {
            return this.path.popLast();
          }
          isEqual(t) {
            return null !== t && 0 === tt.comparator(this.path, t.path);
          }
          toString() {
            return this.path.toString();
          }
          static comparator(t, e) {
            return tt.comparator(t.path, e.path);
          }
          static isDocumentKey(t) {
            return t.length % 2 == 0;
          }
          /**
           * Creates and returns a new document key with the given segments.
           *
           * @param segments - The segments of the path to the document
           * @returns A new instance of DocumentKey
           */ static fromSegments(t) {
            return new rt(new tt(t.slice()));
          }
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ function st(t, e, n) {
          if (!n)
            throw new U(
              P,
              `Function ${t}() cannot be called with an empty ${e}.`
            );
        }

        /**
         * Validates that two boolean options are not set at the same time.
         * @internal
         */
        /**
         * Validates that `path` refers to a document (indicated by the fact it contains
         * an even numbers of segments).
         */
        function it(t) {
          if (!rt.isDocumentKey(t))
            throw new U(
              P,
              `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`
            );
        }

        /**
         * Validates that `path` refers to a collection (indicated by the fact it
         * contains an odd numbers of segments).
         */ function ot(t) {
          if (rt.isDocumentKey(t))
            throw new U(
              P,
              `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`
            );
        }

        /**
         * Returns true if it's a non-null object without a custom prototype
         * (i.e. excludes Array, Date, etc.).
         */
        /** Returns a string describing the type / value of the provided input. */
        function ut(t) {
          if (void 0 === t) return "undefined";
          if (null === t) return "null";
          if ("string" == typeof t)
            return (
              t.length > 20 && (t = `${t.substring(0, 20)}...`),
              JSON.stringify(t)
            );
          if ("number" == typeof t || "boolean" == typeof t) return "" + t;
          if ("object" == typeof t) {
            if (t instanceof Array) return "an array";
            {
              const e =
                /** try to get the constructor name for an object. */
                (function (t) {
                  if (t.constructor) return t.constructor.name;
                  return null;
                })(
                  /**
                   * Casts `obj` to `T`, optionally unwrapping Compat types to expose the
                   * underlying instance. Throws if  `obj` is not an instance of `T`.
                   *
                   * This cast is used in the Lite and Full SDK to verify instance types for
                   * arguments passed to the public API.
                   * @internal
                   */ t
                );
              return e ? `a custom ${e} object` : "an object";
            }
          }
          return "function" == typeof t ? "a function" : b();
        }

        function ct(
          t,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          e
        ) {
          if (
            ("_delegate" in t &&
              // Unwrap Compat types
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (t = t._delegate),
            !(t instanceof e))
          ) {
            if (e.name === t.constructor.name)
              throw new U(
                P,
                "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
              );
            {
              const n = ut(t);
              throw new U(P, `Expected type '${e.name}', but it was: ${n}`);
            }
          }
          return t;
        }

        function at(t, e) {
          if (e <= 0)
            throw new U(
              P,
              `Function ${t}() requires a positive number, but it was: ${e}.`
            );
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Returns whether a variable is either undefined or null.
         */ function ht(t) {
          return null == t;
        }

        /** Returns whether the value represents -0. */ function lt(t) {
          // Detect if the value is -0.0. Based on polyfill from
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
          return 0 === t && 1 / t == -1 / 0;
        }

        /**
         * Returns whether a value is an integer and in the safe integer range
         * @param value - The value to test for being an integer and in the safe range
         */
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        const ft = {
          BatchGetDocuments: "batchGet",
          Commit: "commit",
          RunQuery: "runQuery",
          RunAggregationQuery: "runAggregationQuery",
        };

        /**
         * Maps RPC names to the corresponding REST endpoint name.
         *
         * We use array notation to avoid mangling.
         */
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Error Codes describing the different ways GRPC can fail. These are copied
         * directly from GRPC's sources here:
         *
         * https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
         *
         * Important! The names of these identifiers matter because the string forms
         * are used for reverse lookups from the webchannel stream. Do NOT change the
         * names of these identifiers or change this into a const enum.
         */
        var dt, wt;

        /**
         * Converts an HTTP Status Code to the equivalent error code.
         *
         * @param status - An HTTP Status Code, like 200, 404, 503, etc.
         * @returns The equivalent Code. Unknown status codes are mapped to
         *     Code.UNKNOWN.
         */
        function mt(t) {
          if (void 0 === t)
            return g("RPC_ERROR", "HTTP error has no status"), R;
          // The canonical error codes for Google APIs [1] specify mapping onto HTTP
          // status codes but the mapping is not bijective. In each case of ambiguity
          // this function chooses a primary error.

          // [1]
          // https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
          switch (t) {
            case 200:
              // OK
              return T;

            case 400:
              // Bad Request
              return S;

            // Other possibilities based on the forward mapping
            // return Code.INVALID_ARGUMENT;
            // return Code.OUT_OF_RANGE;
            case 401:
              // Unauthorized
              return F;

            case 403:
              // Forbidden
              return D;

            case 404:
              // Not Found
              return $;

            case 409:
              // Conflict
              return q;

            // Other possibilities:
            // return Code.ALREADY_EXISTS;
            case 416:
              // Range Not Satisfiable
              return O;

            case 429:
              // Too Many Requests
              return x;

            case 499:
              // Client Closed Request
              return A;

            case 500:
              // Internal Server Error
              return R;

            // Other possibilities:
            // return Code.INTERNAL;
            // return Code.DATA_LOSS;
            case 501:
              // Unimplemented
              return k;

            case 503:
              // Service Unavailable
              return L;

            case 504:
              // Gateway Timeout
              return V;

            default:
              return t >= 200 && t < 300
                ? T
                : t >= 400 && t < 500
                ? S
                : t >= 500 && t < 600
                ? C
                : R;
          }
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * A Rest-based connection that relies on the native HTTP stack
         * (e.g. `fetch` or a polyfill).
         */ ((wt = dt || (dt = {}))[(wt.OK = 0)] = "OK"),
          (wt[(wt.CANCELLED = 1)] = "CANCELLED"),
          (wt[(wt.UNKNOWN = 2)] = "UNKNOWN"),
          (wt[(wt.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
          (wt[(wt.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
          (wt[(wt.NOT_FOUND = 5)] = "NOT_FOUND"),
          (wt[(wt.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
          (wt[(wt.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
          (wt[(wt.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
          (wt[(wt.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
          (wt[(wt.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
          (wt[(wt.ABORTED = 10)] = "ABORTED"),
          (wt[(wt.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
          (wt[(wt.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
          (wt[(wt.INTERNAL = 13)] = "INTERNAL"),
          (wt[(wt.UNAVAILABLE = 14)] = "UNAVAILABLE"),
          (wt[(wt.DATA_LOSS = 15)] = "DATA_LOSS");

        class pt
          /**
           * Base class for all Rest-based connections to the backend (WebChannel and
           * HTTP).
           */
          extends class {
            constructor(t) {
              (this.databaseInfo = t), (this.databaseId = t.databaseId);
              const e = t.ssl ? "https" : "http";
              (this.p = e + "://" + t.host),
                (this.g =
                  "projects/" +
                  this.databaseId.projectId +
                  "/databases/" +
                  this.databaseId.database +
                  "/documents");
            }
            get v() {
              // Both `invokeRPC()` and `invokeStreamingRPC()` use their `path` arguments to determine
              // where to run the query, and expect the `request` to NOT specify the "path".
              return !1;
            }
            I(t, e, n, r, s) {
              const i = this.T(t, e);
              y("RestConnection", "Sending: ", i, n);
              const o = {};
              return (
                this.A(o, r, s),
                this.R(t, i, o, n).then(
                  (t) => (y("RestConnection", "Received: ", t), t),
                  (e) => {
                    throw (
                      (_(
                        "RestConnection",
                        `${t} failed with error: `,
                        e,
                        "url: ",
                        i,
                        "request:",
                        n
                      ),
                      e)
                    );
                  }
                )
              );
            }
            P(t, e, n, r, s, i) {
              // The REST API automatically aggregates all of the streamed results, so we
              // can just use the normal invoke() method.
              return this.I(t, e, n, r, s);
            }
            /**
             * Modifies the headers for a request, adding any authorization token if
             * present and any additional headers for the request.
             */ A(t, e, n) {
              (t["X-Goog-Api-Client"] = "gl-js/ fire/" + w),
                // Content-Type: text/plain will avoid preflight requests which might
                // mess with CORS and redirects by proxies. If we add custom headers
                // we will need to change this code to potentially use the $httpOverwrite
                // parameter supported by ESF to avoid triggering preflight requests.
                (t["Content-Type"] = "text/plain"),
                this.databaseInfo.appId &&
                  (t["X-Firebase-GMPID"] = this.databaseInfo.appId),
                e && e.headers.forEach((e, n) => (t[n] = e)),
                n && n.headers.forEach((e, n) => (t[n] = e));
            }
            T(t, e) {
              const n = ft[t];
              return `${this.p}/v1/${e}:${n}`;
            }
          }
        {
          /**
           * @param databaseInfo - The connection info.
           * @param fetchImpl - `fetch` or a Polyfill that implements the fetch API.
           */
          constructor(t, e) {
            super(t), (this.V = e);
          }
          $(t, e) {
            throw new Error("Not supported by FetchConnection");
          }
          async R(t, e, n, r) {
            var s;
            const i = JSON.stringify(r);
            let o;
            try {
              o = await this.V(e, {
                method: "POST",
                headers: n,
                body: i,
              });
            } catch (t) {
              const e = t;
              throw new U(
                mt(e.status),
                "Request failed with error: " + e.statusText
              );
            }
            if (!o.ok) {
              let t = await o.json();
              Array.isArray(t) && (t = t[0]);
              const e =
                null === (s = null == t ? void 0 : t.error) || void 0 === s
                  ? void 0
                  : s.message;
              throw new U(
                mt(o.status),
                `Request failed with error: ${null != e ? e : o.statusText}`
              );
            }
            return o.json();
          }
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /** Initializes the HTTP connection for the REST API. */
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Generates `nBytes` of random bytes.
         *
         * If `nBytes < 0` , an error will be thrown.
         */
        function yt(t) {
          // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
          const e =
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              "undefined" != typeof self && (self.crypto || self.msCrypto),
            n = new Uint8Array(t);
          if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n);
          // Falls back to Math.random
          else
            for (let e = 0; e < t; e++) n[e] = Math.floor(256 * Math.random());
          return n;
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ class gt {
          static N() {
            // Alphanumeric characters
            const t =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
              e = Math.floor(256 / t.length) * t.length;
            // The largest byte value that is a multiple of `char.length`.
            let n = "";
            for (; n.length < 20; ) {
              const r = yt(40);
              for (let s = 0; s < r.length; ++s)
                // Only accept values that are [0, maxMultiple), this ensures they can
                // be evenly mapped to indices of `chars` via a modulo operation.
                n.length < 20 && r[s] < e && (n += t.charAt(r[s] % t.length));
            }
            return n;
          }
        }

        function _t(t, e) {
          return t < e ? -1 : t > e ? 1 : 0;
        }

        /** Helper to compare arrays using isEqual(). */ function vt(t, e, n) {
          return t.length === e.length && t.every((t, r) => n(t, e[r]));
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ function bt(t) {
          let e = 0;
          for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
          return e;
        }

        function Et(t, e) {
          for (const n in t)
            Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Immutable class that represents a "proto" byte string.
         *
         * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
         * sent on the wire. This class abstracts away this differentiation by holding
         * the proto byte string in a common class that must be converted into a string
         * before being sent as a proto.
         * @internal
         */
        class It {
          constructor(t) {
            this.binaryString = t;
          }
          static fromBase64String(t) {
            const e = atob(t);
            return new It(e);
          }
          static fromUint8Array(t) {
            // TODO(indexing); Remove the copy of the byte string here as this method
            // is frequently called during indexing.
            const e =
              /**
               * Helper function to convert an Uint8array to a binary string.
               */
              (function (t) {
                let e = "";
                for (let n = 0; n < t.length; ++n)
                  e += String.fromCharCode(t[n]);
                return e;
              })(
                /**
                 * Helper function to convert a binary string to an Uint8Array.
                 */ t
              );
            return new It(e);
          }
          [Symbol.iterator]() {
            let t = 0;
            return {
              next: () =>
                t < this.binaryString.length
                  ? {
                      value: this.binaryString.charCodeAt(t++),
                      done: !1,
                    }
                  : {
                      value: void 0,
                      done: !0,
                    },
            };
          }
          toBase64() {
            return (t = this.binaryString), btoa(t);
            /** Converts a binary string to a Base64 encoded string. */
            var t;
          }
          toUint8Array() {
            return (function (t) {
              const e = new Uint8Array(t.length);
              for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
              return e;
            })(
              /**
               * @license
               * Copyright 2020 Google LLC
               *
               * Licensed under the Apache License, Version 2.0 (the "License");
               * you may not use this file except in compliance with the License.
               * You may obtain a copy of the License at
               *
               *   http://www.apache.org/licenses/LICENSE-2.0
               *
               * Unless required by applicable law or agreed to in writing, software
               * distributed under the License is distributed on an "AS IS" BASIS,
               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
               * See the License for the specific language governing permissions and
               * limitations under the License.
               */
              // A RegExp matching ISO 8601 UTC timestamps with optional fraction.
              this.binaryString
            );
          }
          approximateByteSize() {
            return 2 * this.binaryString.length;
          }
          compareTo(t) {
            return _t(this.binaryString, t.binaryString);
          }
          isEqual(t) {
            return this.binaryString === t.binaryString;
          }
        }

        It.EMPTY_BYTE_STRING = new It("");

        const Tt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

        /**
         * Converts the possible Proto values for a timestamp value into a "seconds and
         * nanos" representation.
         */ function At(t) {
          // The json interface (for the browser) will return an iso timestamp string,
          // while the proto js library (for node) will return a
          // google.protobuf.Timestamp instance.
          if ((E(!!t), "string" == typeof t)) {
            // The date string can have higher precision (nanos) than the Date class
            // (millis), so we do some custom parsing here.
            // Parse the nanos right out of the string.
            let e = 0;
            const n = Tt.exec(t);
            if ((E(!!n), n[1])) {
              // Pad the fraction out to 9 digits (nanos).
              let t = n[1];
              (t = (t + "000000000").substr(0, 9)), (e = Number(t));
            }
            // Parse the date to get the seconds.
            const r = new Date(t);
            return {
              seconds: Math.floor(r.getTime() / 1e3),
              nanos: e,
            };
          }
          return {
            seconds: Rt(t.seconds),
            nanos: Rt(t.nanos),
          };
        }

        /**
         * Converts the possible Proto types for numbers into a JavaScript number.
         * Returns 0 if the value is not numeric.
         */ function Rt(t) {
          // TODO(bjornick): Handle int64 greater than 53 bits.
          return "number" == typeof t
            ? t
            : "string" == typeof t
            ? Number(t)
            : 0;
        }

        /** Converts the possible Proto types for Blobs into a ByteString. */ function Pt(
          t
        ) {
          return "string" == typeof t
            ? It.fromBase64String(t)
            : It.fromUint8Array(t);
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        // The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
        /**
         * A `Timestamp` represents a point in time independent of any time zone or
         * calendar, represented as seconds and fractions of seconds at nanosecond
         * resolution in UTC Epoch time.
         *
         * It is encoded using the Proleptic Gregorian Calendar which extends the
         * Gregorian calendar backwards to year one. It is encoded assuming all minutes
         * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
         * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
         * 9999-12-31T23:59:59.999999999Z.
         *
         * For examples and further specifications, refer to the
         * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
         */
        class Vt {
          /**
           * Creates a new timestamp.
           *
           * @param seconds - The number of seconds of UTC time since Unix epoch
           *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
           *     9999-12-31T23:59:59Z inclusive.
           * @param nanoseconds - The non-negative fractions of a second at nanosecond
           *     resolution. Negative second values with fractions must still have
           *     non-negative nanoseconds values that count forward in time. Must be
           *     from 0 to 999,999,999 inclusive.
           */
          constructor(
            /**
             * The number of seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
             */
            t,
            /**
             * The fractions of a second at nanosecond resolution.*
             */
            e
          ) {
            if (((this.seconds = t), (this.nanoseconds = e), e < 0))
              throw new U(P, "Timestamp nanoseconds out of range: " + e);
            if (e >= 1e9)
              throw new U(P, "Timestamp nanoseconds out of range: " + e);
            if (t < -62135596800)
              throw new U(P, "Timestamp seconds out of range: " + t);
            // This will break in the year 10,000.
            if (t >= 253402300800)
              throw new U(P, "Timestamp seconds out of range: " + t);
          }
          /**
           * Creates a new timestamp with the current date, with millisecond precision.
           *
           * @returns a new timestamp representing the current date.
           */ static now() {
            return Vt.fromMillis(Date.now());
          }
          /**
           * Creates a new timestamp from the given date.
           *
           * @param date - The date to initialize the `Timestamp` from.
           * @returns A new `Timestamp` representing the same point in time as the given
           *     date.
           */ static fromDate(t) {
            return Vt.fromMillis(t.getTime());
          }
          /**
           * Creates a new timestamp from the given number of milliseconds.
           *
           * @param milliseconds - Number of milliseconds since Unix epoch
           *     1970-01-01T00:00:00Z.
           * @returns A new `Timestamp` representing the same point in time as the given
           *     number of milliseconds.
           */ static fromMillis(t) {
            const e = Math.floor(t / 1e3),
              n = Math.floor(1e6 * (t - 1e3 * e));
            return new Vt(e, n);
          }
          /**
           * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
           * causes a loss of precision since `Date` objects only support millisecond
           * precision.
           *
           * @returns JavaScript `Date` object representing the same point in time as
           *     this `Timestamp`, with millisecond precision.
           */ toDate() {
            return new Date(this.toMillis());
          }
          /**
           * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
           * epoch). This operation causes a loss of precision.
           *
           * @returns The point in time corresponding to this timestamp, represented as
           *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
           */ toMillis() {
            return 1e3 * this.seconds + this.nanoseconds / 1e6;
          }
          _compareTo(t) {
            return this.seconds === t.seconds
              ? _t(this.nanoseconds, t.nanoseconds)
              : _t(this.seconds, t.seconds);
          }
          /**
           * Returns true if this `Timestamp` is equal to the provided one.
           *
           * @param other - The `Timestamp` to compare against.
           * @returns true if this `Timestamp` is equal to the provided one.
           */ isEqual(t) {
            return (
              t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
            );
          }
          /** Returns a textual representation of this `Timestamp`. */ toString() {
            return (
              "Timestamp(seconds=" +
              this.seconds +
              ", nanoseconds=" +
              this.nanoseconds +
              ")"
            );
          }
          /** Returns a JSON-serializable representation of this `Timestamp`. */ toJSON() {
            return {
              seconds: this.seconds,
              nanoseconds: this.nanoseconds,
            };
          }
          /**
           * Converts this object to a primitive string, which allows `Timestamp` objects
           * to be compared using the `>`, `<=`, `>=` and `>` operators.
           */ valueOf() {
            // This method returns a string of the form <seconds>.<nanoseconds> where
            // <seconds> is translated to have a non-negative value and both <seconds>
            // and <nanoseconds> are left-padded with zeroes to be a consistent length.
            // Strings with this format then have a lexiographical ordering that matches
            // the expected ordering. The <seconds> translation is done to avoid having
            // a leading negative sign (i.e. a leading '-' character) in its string
            // representation, which would affect its lexiographical ordering.
            const t = this.seconds - -62135596800;
            // Note: Up to 12 decimal digits are required to represent all valid
            // 'seconds' values.
            return (
              String(t).padStart(12, "0") +
              "." +
              String(this.nanoseconds).padStart(9, "0")
            );
          }
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Represents a locally-applied ServerTimestamp.
         *
         * Server Timestamps are backed by MapValues that contain an internal field
         * `__type__` with a value of `server_timestamp`. The previous value and local
         * write time are stored in its `__previous_value__` and `__local_write_time__`
         * fields respectively.
         *
         * Notes:
         * - ServerTimestampValue instances are created as the result of applying a
         *   transform. They can only exist in the local view of a document. Therefore
         *   they do not need to be parsed or serialized.
         * - When evaluated locally (e.g. for snapshot.data()), they by default
         *   evaluate to `null`. This behavior can be configured by passing custom
         *   FieldValueOptions to value().
         * - With respect to other ServerTimestampValues, they sort by their
         *   localWriteTime.
         */ function $t(t) {
          var e, n;
          return (
            "server_timestamp" ===
            (null ===
              (n = (
                (null === (e = null == t ? void 0 : t.mapValue) || void 0 === e
                  ? void 0
                  : e.fields) || {}
              ).__type__) || void 0 === n
              ? void 0
              : n.stringValue)
          );
        }

        /**
         * Returns the value of the field before this ServerTimestamp was set.
         *
         * Preserving the previous values allows the user to display the last resoled
         * value until the backend responds with the timestamp.
         */ function Nt(t) {
          const e = t.mapValue.fields.__previous_value__;
          return $t(e) ? Nt(e) : e;
        }

        /**
         * Returns the local time at which this timestamp was first set.
         */ function Dt(t) {
          const e = At(t.mapValue.fields.__local_write_time__.timestampValue);
          return new Vt(e.seconds, e.nanos);
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const Ft = {
          fields: {
            __type__: {
              stringValue: "__max__",
            },
          },
        };

        /** Extracts the backend's type order for the provided value. */
        function xt(t) {
          return "nullValue" in t
            ? 0 /* TypeOrder.NullValue */
            : "booleanValue" in t
            ? 1 /* TypeOrder.BooleanValue */
            : "integerValue" in t || "doubleValue" in t
            ? 2 /* TypeOrder.NumberValue */
            : "timestampValue" in t
            ? 3 /* TypeOrder.TimestampValue */
            : "stringValue" in t
            ? 5 /* TypeOrder.StringValue */
            : "bytesValue" in t
            ? 6 /* TypeOrder.BlobValue */
            : "referenceValue" in t
            ? 7 /* TypeOrder.RefValue */
            : "geoPointValue" in t
            ? 8 /* TypeOrder.GeoPointValue */
            : "arrayValue" in t
            ? 9 /* TypeOrder.ArrayValue */
            : "mapValue" in t
            ? $t(t)
              ? 4 /* TypeOrder.ServerTimestampValue */
              : /** Returns true if the Value represents the canonical {@link #MAX_VALUE} . */
              (function (t) {
                  return (
                    "__max__" ===
                    (((t.mapValue || {}).fields || {}).__type__ || {})
                      .stringValue
                  );
                })(
                  /**
                   * @license
                   * Copyright 2022 Google LLC
                   *
                   * Licensed under the Apache License, Version 2.0 (the "License");
                   * you may not use this file except in compliance with the License.
                   * You may obtain a copy of the License at
                   *
                   *   http://www.apache.org/licenses/LICENSE-2.0
                   *
                   * Unless required by applicable law or agreed to in writing, software
                   * distributed under the License is distributed on an "AS IS" BASIS,
                   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                   * See the License for the specific language governing permissions and
                   * limitations under the License.
                   */
                  /**
                   * Represents a bound of a query.
                   *
                   * The bound is specified with the given components representing a position and
                   * whether it's just before or just after the position (relative to whatever the
                   * query order is).
                   *
                   * The position represents a logical index position for a query. It's a prefix
                   * of values for the (potentially implicit) order by clauses of a query.
                   *
                   * Bound provides a function to determine whether a document comes before or
                   * after a bound. This is influenced by whether the position is just before or
                   * just after the provided values.
                   */ t
                )
              ? 9007199254740991 /* TypeOrder.MaxValue */
              : 10 /* TypeOrder.ObjectValue */
            : b();
        }

        /** Tests `left` and `right` for equality based on the backend semantics. */ function St(
          t,
          e
        ) {
          if (t === e) return !0;
          const n = xt(t);
          if (n !== xt(e)) return !1;
          switch (n) {
            case 0 /* TypeOrder.NullValue */:
            case 9007199254740991 /* TypeOrder.MaxValue */:
              return !0;

            case 1 /* TypeOrder.BooleanValue */:
              return t.booleanValue === e.booleanValue;

            case 4 /* TypeOrder.ServerTimestampValue */:
              return Dt(t).isEqual(Dt(e));

            case 3 /* TypeOrder.TimestampValue */:
              return (function (t, e) {
                if (
                  "string" == typeof t.timestampValue &&
                  "string" == typeof e.timestampValue &&
                  t.timestampValue.length === e.timestampValue.length
                )
                  // Use string equality for ISO 8601 timestamps
                  return t.timestampValue === e.timestampValue;
                const n = At(t.timestampValue),
                  r = At(e.timestampValue);
                return n.seconds === r.seconds && n.nanos === r.nanos;
              })(t, e);

            case 5 /* TypeOrder.StringValue */:
              return t.stringValue === e.stringValue;

            case 6 /* TypeOrder.BlobValue */:
              return (function (t, e) {
                return Pt(t.bytesValue).isEqual(Pt(e.bytesValue));
              })(t, e);

            case 7 /* TypeOrder.RefValue */:
              return t.referenceValue === e.referenceValue;

            case 8 /* TypeOrder.GeoPointValue */:
              return (function (t, e) {
                return (
                  Rt(t.geoPointValue.latitude) ===
                    Rt(e.geoPointValue.latitude) &&
                  Rt(t.geoPointValue.longitude) ===
                    Rt(e.geoPointValue.longitude)
                );
              })(t, e);

            case 2 /* TypeOrder.NumberValue */:
              return (function (t, e) {
                if ("integerValue" in t && "integerValue" in e)
                  return Rt(t.integerValue) === Rt(e.integerValue);
                if ("doubleValue" in t && "doubleValue" in e) {
                  const n = Rt(t.doubleValue),
                    r = Rt(e.doubleValue);
                  return n === r ? lt(n) === lt(r) : isNaN(n) && isNaN(r);
                }
                return !1;
              })(t, e);

            case 9 /* TypeOrder.ArrayValue */:
              return vt(
                t.arrayValue.values || [],
                e.arrayValue.values || [],
                St
              );

            case 10 /* TypeOrder.ObjectValue */:
              return (function (t, e) {
                const n = t.mapValue.fields || {},
                  r = e.mapValue.fields || {};
                if (bt(n) !== bt(r)) return !1;
                for (const t in n)
                  if (
                    n.hasOwnProperty(t) &&
                    (void 0 === r[t] || !St(n[t], r[t]))
                  )
                    return !1;
                return !0;
              })(
                /** Returns true if the ArrayValue contains the specified element. */ t,
                e
              );

            default:
              return b();
          }
        }

        function qt(t, e) {
          return void 0 !== (t.values || []).find((t) => St(t, e));
        }

        function Ot(t, e) {
          if (t === e) return 0;
          const n = xt(t),
            r = xt(e);
          if (n !== r) return _t(n, r);
          switch (n) {
            case 0 /* TypeOrder.NullValue */:
            case 9007199254740991 /* TypeOrder.MaxValue */:
              return 0;

            case 1 /* TypeOrder.BooleanValue */:
              return _t(t.booleanValue, e.booleanValue);

            case 2 /* TypeOrder.NumberValue */:
              return (function (t, e) {
                const n = Rt(t.integerValue || t.doubleValue),
                  r = Rt(e.integerValue || e.doubleValue);
                return n < r
                  ? -1
                  : n > r
                  ? 1
                  : n === r
                  ? 0
                  : // one or both are NaN.
                  isNaN(n)
                  ? isNaN(r)
                    ? 0
                    : -1
                  : 1;
              })(t, e);

            case 3 /* TypeOrder.TimestampValue */:
              return kt(t.timestampValue, e.timestampValue);

            case 4 /* TypeOrder.ServerTimestampValue */:
              return kt(Dt(t), Dt(e));

            case 5 /* TypeOrder.StringValue */:
              return _t(t.stringValue, e.stringValue);

            case 6 /* TypeOrder.BlobValue */:
              return (function (t, e) {
                const n = Pt(t),
                  r = Pt(e);
                return n.compareTo(r);
              })(t.bytesValue, e.bytesValue);

            case 7 /* TypeOrder.RefValue */:
              return (function (t, e) {
                const n = t.split("/"),
                  r = e.split("/");
                for (let t = 0; t < n.length && t < r.length; t++) {
                  const e = _t(n[t], r[t]);
                  if (0 !== e) return e;
                }
                return _t(n.length, r.length);
              })(t.referenceValue, e.referenceValue);

            case 8 /* TypeOrder.GeoPointValue */:
              return (function (t, e) {
                const n = _t(Rt(t.latitude), Rt(e.latitude));
                if (0 !== n) return n;
                return _t(Rt(t.longitude), Rt(e.longitude));
              })(t.geoPointValue, e.geoPointValue);

            case 9 /* TypeOrder.ArrayValue */:
              return (function (t, e) {
                const n = t.values || [],
                  r = e.values || [];
                for (let t = 0; t < n.length && t < r.length; ++t) {
                  const e = Ot(n[t], r[t]);
                  if (e) return e;
                }
                return _t(n.length, r.length);
              })(t.arrayValue, e.arrayValue);

            case 10 /* TypeOrder.ObjectValue */:
              return (function (t, e) {
                if (t === Ft && e === Ft) return 0;
                if (t === Ft) return 1;
                if (e === Ft) return -1;
                const n = t.fields || {},
                  r = Object.keys(n),
                  s = e.fields || {},
                  i = Object.keys(s);
                // Even though MapValues are likely sorted correctly based on their insertion
                // order (e.g. when received from the backend), local modifications can bring
                // elements out of order. We need to re-sort the elements to ensure that
                // canonical IDs are independent of insertion order.
                r.sort(), i.sort();
                for (let t = 0; t < r.length && t < i.length; ++t) {
                  const e = _t(r[t], i[t]);
                  if (0 !== e) return e;
                  const o = Ot(n[r[t]], s[i[t]]);
                  if (0 !== o) return o;
                }
                return _t(r.length, i.length);
              })(
                /** Returns a reference value for the provided database and key. */ t.mapValue,
                e.mapValue
              );

            default:
              throw b();
          }
        }

        function kt(t, e) {
          if (
            "string" == typeof t &&
            "string" == typeof e &&
            t.length === e.length
          )
            return _t(t, e);
          const n = At(t),
            r = At(e),
            s = _t(n.seconds, r.seconds);
          return 0 !== s ? s : _t(n.nanos, r.nanos);
        }

        function Ct(t, e) {
          return {
            referenceValue: `projects/${t.projectId}/databases/${
              t.database
            }/documents/${e.path.canonicalString()}`,
          };
        }

        /** Returns true if `value` is an ArrayValue. */ function Lt(t) {
          return !!t && "arrayValue" in t;
        }

        /** Returns true if `value` is a NullValue. */ function Mt(t) {
          return !!t && "nullValue" in t;
        }

        /** Returns true if `value` is NaN. */ function Ut(t) {
          return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
        }

        /** Returns true if `value` is a MapValue. */ function jt(t) {
          return !!t && "mapValue" in t;
        }

        /** Creates a deep copy of `source`. */ function Bt(t) {
          if (t.geoPointValue)
            return {
              geoPointValue: Object.assign({}, t.geoPointValue),
            };
          if (t.timestampValue && "object" == typeof t.timestampValue)
            return {
              timestampValue: Object.assign({}, t.timestampValue),
            };
          if (t.mapValue) {
            const e = {
              mapValue: {
                fields: {},
              },
            };
            return (
              Et(t.mapValue.fields, (t, n) => (e.mapValue.fields[t] = Bt(n))), e
            );
          }
          if (t.arrayValue) {
            const e = {
              arrayValue: {
                values: [],
              },
            };
            for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
              e.arrayValue.values[n] = Bt(t.arrayValue.values[n]);
            return e;
          }
          return Object.assign({}, t);
        }

        class Qt {
          constructor(t, e) {
            (this.position = t), (this.inclusive = e);
          }
        }

        function zt(t, e) {
          if (null === t) return null === e;
          if (null === e) return !1;
          if (
            t.inclusive !== e.inclusive ||
            t.position.length !== e.position.length
          )
            return !1;
          for (let n = 0; n < t.position.length; n++) {
            if (!St(t.position[n], e.position[n])) return !1;
          }
          return !0;
        }

        /**
         * @license
         * Copyright 2022 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ class Wt {}

        class Gt extends Wt {
          constructor(t, e, n) {
            super(), (this.field = t), (this.op = e), (this.value = n);
          }
          /**
           * Creates a filter based on the provided arguments.
           */ static create(t, e, n) {
            return t.isKeyField()
              ? "in" /* Operator.IN */ === e ||
                "not-in" /* Operator.NOT_IN */ === e
                ? this.createKeyFieldInFilter(t, e, n)
                : new Ht(t, e, n)
              : "array-contains" /* Operator.ARRAY_CONTAINS */ === e
              ? new te(t, n)
              : "in" /* Operator.IN */ === e
              ? new ee(t, n)
              : "not-in" /* Operator.NOT_IN */ === e
              ? new ne(t, n)
              : "array-contains-any" /* Operator.ARRAY_CONTAINS_ANY */ === e
              ? new re(t, n)
              : new Gt(t, e, n);
          }
          static createKeyFieldInFilter(t, e, n) {
            return "in" /* Operator.IN */ === e ? new Jt(t, n) : new Xt(t, n);
          }
          matches(t) {
            const e = t.data.field(this.field);
            // Types do not have to match in NOT_EQUAL filters.
            return "!=" /* Operator.NOT_EQUAL */ === this.op
              ? null !== e && this.matchesComparison(Ot(e, this.value))
              : null !== e &&
                  xt(this.value) === xt(e) &&
                  this.matchesComparison(Ot(e, this.value));
            // Only compare types with matching backend order (such as double and int).
          }
          matchesComparison(t) {
            switch (this.op) {
              case "<" /* Operator.LESS_THAN */:
                return t < 0;

              case "<=" /* Operator.LESS_THAN_OR_EQUAL */:
                return t <= 0;

              case "==" /* Operator.EQUAL */:
                return 0 === t;

              case "!=" /* Operator.NOT_EQUAL */:
                return 0 !== t;

              case ">" /* Operator.GREATER_THAN */:
                return t > 0;

              case ">=" /* Operator.GREATER_THAN_OR_EQUAL */:
                return t >= 0;

              default:
                return b();
            }
          }
          isInequality() {
            return (
              [
                "<" /* Operator.LESS_THAN */,
                "<=" /* Operator.LESS_THAN_OR_EQUAL */,
                ">" /* Operator.GREATER_THAN */,
                ">=" /* Operator.GREATER_THAN_OR_EQUAL */,
                "!=" /* Operator.NOT_EQUAL */,
                "not-in" /* Operator.NOT_IN */,
              ].indexOf(this.op) >= 0
            );
          }
          getFlattenedFilters() {
            return [this];
          }
          getFilters() {
            return [this];
          }
          getFirstInequalityField() {
            return this.isInequality() ? this.field : null;
          }
        }

        class Kt extends Wt {
          constructor(t, e) {
            super(), (this.filters = t), (this.op = e), (this.D = null);
          }
          /**
           * Creates a filter based on the provided arguments.
           */ static create(t, e) {
            return new Kt(t, e);
          }
          matches(t) {
            return "and" /* CompositeOperator.AND */ === this.op
              ? void 0 === this.filters.find((e) => !e.matches(t))
              : void 0 !== this.filters.find((e) => e.matches(t));
          }
          getFlattenedFilters() {
            return (
              null !== this.D ||
                (this.D = this.filters.reduce(
                  (t, e) => t.concat(e.getFlattenedFilters()),
                  []
                )),
              this.D
            );
          }
          // Returns a mutable copy of `this.filters`
          getFilters() {
            return Object.assign([], this.filters);
          }
          getFirstInequalityField() {
            const t = this.F((t) => t.isInequality());
            return null !== t ? t.field : null;
          }
          // Performs a depth-first search to find and return the first FieldFilter in the composite filter
          // that satisfies the predicate. Returns `null` if none of the FieldFilters satisfy the
          // predicate.
          F(t) {
            for (const e of this.getFlattenedFilters()) if (t(e)) return e;
            return null;
          }
        }

        function Yt(t, e) {
          return t instanceof Gt
            ? (function (t, e) {
                return (
                  e instanceof Gt &&
                  t.op === e.op &&
                  t.field.isEqual(e.field) &&
                  St(t.value, e.value)
                );
              })(t, e)
            : t instanceof Kt
            ? (function (t, e) {
                if (
                  e instanceof Kt &&
                  t.op === e.op &&
                  t.filters.length === e.filters.length
                ) {
                  return t.filters.reduce(
                    (t, n, r) => t && Yt(n, e.filters[r]),
                    !0
                  );
                }
                return !1;
              })(
                /** Filter that matches on key fields (i.e. '__name__'). */ t,
                e
              )
            : void b();
        }

        class Ht extends Gt {
          constructor(t, e, n) {
            super(t, e, n), (this.key = rt.fromName(n.referenceValue));
          }
          matches(t) {
            const e = rt.comparator(t.key, this.key);
            return this.matchesComparison(e);
          }
        }

        /** Filter that matches on key fields within an array. */ class Jt extends Gt {
          constructor(t, e) {
            super(t, "in" /* Operator.IN */, e),
              (this.keys = Zt("in" /* Operator.IN */, e));
          }
          matches(t) {
            return this.keys.some((e) => e.isEqual(t.key));
          }
        }

        /** Filter that matches on key fields not present within an array. */ class Xt extends Gt {
          constructor(t, e) {
            super(t, "not-in" /* Operator.NOT_IN */, e),
              (this.keys = Zt("not-in" /* Operator.NOT_IN */, e));
          }
          matches(t) {
            return !this.keys.some((e) => e.isEqual(t.key));
          }
        }

        function Zt(t, e) {
          var n;
          return (
            (null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) ||
            []
          ).map((t) => rt.fromName(t.referenceValue));
        }

        /** A Filter that implements the array-contains operator. */ class te extends Gt {
          constructor(t, e) {
            super(t, "array-contains" /* Operator.ARRAY_CONTAINS */, e);
          }
          matches(t) {
            const e = t.data.field(this.field);
            return Lt(e) && qt(e.arrayValue, this.value);
          }
        }

        /** A Filter that implements the IN operator. */ class ee extends Gt {
          constructor(t, e) {
            super(t, "in" /* Operator.IN */, e);
          }
          matches(t) {
            const e = t.data.field(this.field);
            return null !== e && qt(this.value.arrayValue, e);
          }
        }

        /** A Filter that implements the not-in operator. */ class ne extends Gt {
          constructor(t, e) {
            super(t, "not-in" /* Operator.NOT_IN */, e);
          }
          matches(t) {
            if (
              qt(this.value.arrayValue, {
                nullValue: "NULL_VALUE",
              })
            )
              return !1;
            const e = t.data.field(this.field);
            return null !== e && !qt(this.value.arrayValue, e);
          }
        }

        /** A Filter that implements the array-contains-any operator. */ class re extends Gt {
          constructor(t, e) {
            super(t, "array-contains-any" /* Operator.ARRAY_CONTAINS_ANY */, e);
          }
          matches(t) {
            const e = t.data.field(this.field);
            return (
              !(!Lt(e) || !e.arrayValue.values) &&
              e.arrayValue.values.some((t) => qt(this.value.arrayValue, t))
            );
          }
        }

        /**
         * @license
         * Copyright 2022 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
         */ class se {
          constructor(t, e = "asc" /* Direction.ASCENDING */) {
            (this.field = t), (this.dir = e);
          }
        }

        function ie(t, e) {
          return t.dir === e.dir && t.field.isEqual(e.field);
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * A version of a document in Firestore. This corresponds to the version
         * timestamp, such as update_time or read_time.
         */ class oe {
          constructor(t) {
            this.timestamp = t;
          }
          static fromTimestamp(t) {
            return new oe(t);
          }
          static min() {
            return new oe(new Vt(0, 0));
          }
          static max() {
            return new oe(new Vt(253402300799, 999999999));
          }
          compareTo(t) {
            return this.timestamp._compareTo(t.timestamp);
          }
          isEqual(t) {
            return this.timestamp.isEqual(t.timestamp);
          }
          /** Returns a number representation of the version for use in spec tests. */ toMicroseconds() {
            // Convert to microseconds.
            return (
              1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
            );
          }
          toString() {
            return "SnapshotVersion(" + this.timestamp.toString() + ")";
          }
          toTimestamp() {
            return this.timestamp;
          }
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        // An immutable sorted map implementation, based on a Left-leaning Red-Black
        // tree.
        class ue {
          constructor(t, e) {
            (this.comparator = t), (this.root = e || ae.EMPTY);
          }
          // Returns a copy of the map, with the specified key/value added or replaced.
          insert(t, e) {
            return new ue(
              this.comparator,
              this.root
                .insert(t, e, this.comparator)
                .copy(null, null, ae.BLACK, null, null)
            );
          }
          // Returns a copy of the map, with the specified key removed.
          remove(t) {
            return new ue(
              this.comparator,
              this.root
                .remove(t, this.comparator)
                .copy(null, null, ae.BLACK, null, null)
            );
          }
          // Returns the value of the node with the given key, or null.
          get(t) {
            let e = this.root;
            for (; !e.isEmpty(); ) {
              const n = this.comparator(t, e.key);
              if (0 === n) return e.value;
              n < 0 ? (e = e.left) : n > 0 && (e = e.right);
            }
            return null;
          }
          // Returns the index of the element in this sorted map, or -1 if it doesn't
          // exist.
          indexOf(t) {
            // Number of nodes that were pruned when descending right
            let e = 0,
              n = this.root;
            for (; !n.isEmpty(); ) {
              const r = this.comparator(t, n.key);
              if (0 === r) return e + n.left.size;
              r < 0
                ? (n = n.left)
                : // Count all nodes left of the node plus the node itself
                  ((e += n.left.size + 1), (n = n.right));
            }
            // Node not found
            return -1;
          }
          isEmpty() {
            return this.root.isEmpty();
          }
          // Returns the total number of nodes in the map.
          get size() {
            return this.root.size;
          }
          // Returns the minimum key in the map.
          minKey() {
            return this.root.minKey();
          }
          // Returns the maximum key in the map.
          maxKey() {
            return this.root.maxKey();
          }
          // Traverses the map in key order and calls the specified action function
          // for each key/value pair. If action returns true, traversal is aborted.
          // Returns the first truthy value returned by action, or the last falsey
          // value returned by action.
          inorderTraversal(t) {
            return this.root.inorderTraversal(t);
          }
          forEach(t) {
            this.inorderTraversal((e, n) => (t(e, n), !1));
          }
          toString() {
            const t = [];
            return (
              this.inorderTraversal((e, n) => (t.push(`${e}:${n}`), !1)),
              `{${t.join(", ")}}`
            );
          }
          // Traverses the map in reverse key order and calls the specified action
          // function for each key/value pair. If action returns true, traversal is
          // aborted.
          // Returns the first truthy value returned by action, or the last falsey
          // value returned by action.
          reverseTraversal(t) {
            return this.root.reverseTraversal(t);
          }
          // Returns an iterator over the SortedMap.
          getIterator() {
            return new ce(this.root, null, this.comparator, !1);
          }
          getIteratorFrom(t) {
            return new ce(this.root, t, this.comparator, !1);
          }
          getReverseIterator() {
            return new ce(this.root, null, this.comparator, !0);
          }
          getReverseIteratorFrom(t) {
            return new ce(this.root, t, this.comparator, !0);
          }
        }

        // end SortedMap
        // An iterator over an LLRBNode.
        class ce {
          constructor(t, e, n, r) {
            (this.isReverse = r), (this.nodeStack = []);
            let s = 1;
            for (; !t.isEmpty(); )
              if (
                ((s = e ? n(t.key, e) : 1),
                // flip the comparison if we're going in reverse
                e && r && (s *= -1),
                s < 0)
              )
                // This node is less than our start key. ignore it
                t = this.isReverse ? t.left : t.right;
              else {
                if (0 === s) {
                  // This node is exactly equal to our start key. Push it on the stack,
                  // but stop iterating;
                  this.nodeStack.push(t);
                  break;
                }
                // This node is greater than our start key, add it to the stack and move
                // to the next one
                this.nodeStack.push(t), (t = this.isReverse ? t.right : t.left);
              }
          }
          getNext() {
            let t = this.nodeStack.pop();
            const e = {
              key: t.key,
              value: t.value,
            };
            if (this.isReverse)
              for (t = t.left; !t.isEmpty(); )
                this.nodeStack.push(t), (t = t.right);
            else
              for (t = t.right; !t.isEmpty(); )
                this.nodeStack.push(t), (t = t.left);
            return e;
          }
          hasNext() {
            return this.nodeStack.length > 0;
          }
          peek() {
            if (0 === this.nodeStack.length) return null;
            const t = this.nodeStack[this.nodeStack.length - 1];
            return {
              key: t.key,
              value: t.value,
            };
          }
        }

        // end SortedMapIterator
        // Represents a node in a Left-leaning Red-Black tree.
        class ae {
          constructor(t, e, n, r, s) {
            (this.key = t),
              (this.value = e),
              (this.color = null != n ? n : ae.RED),
              (this.left = null != r ? r : ae.EMPTY),
              (this.right = null != s ? s : ae.EMPTY),
              (this.size = this.left.size + 1 + this.right.size);
          }
          // Returns a copy of the current node, optionally replacing pieces of it.
          copy(t, e, n, r, s) {
            return new ae(
              null != t ? t : this.key,
              null != e ? e : this.value,
              null != n ? n : this.color,
              null != r ? r : this.left,
              null != s ? s : this.right
            );
          }
          isEmpty() {
            return !1;
          }
          // Traverses the tree in key order and calls the specified action function
          // for each node. If action returns true, traversal is aborted.
          // Returns the first truthy value returned by action, or the last falsey
          // value returned by action.
          inorderTraversal(t) {
            return (
              this.left.inorderTraversal(t) ||
              t(this.key, this.value) ||
              this.right.inorderTraversal(t)
            );
          }
          // Traverses the tree in reverse key order and calls the specified action
          // function for each node. If action returns true, traversal is aborted.
          // Returns the first truthy value returned by action, or the last falsey
          // value returned by action.
          reverseTraversal(t) {
            return (
              this.right.reverseTraversal(t) ||
              t(this.key, this.value) ||
              this.left.reverseTraversal(t)
            );
          }
          // Returns the minimum node in the tree.
          min() {
            return this.left.isEmpty() ? this : this.left.min();
          }
          // Returns the maximum key in the tree.
          minKey() {
            return this.min().key;
          }
          // Returns the maximum key in the tree.
          maxKey() {
            return this.right.isEmpty() ? this.key : this.right.maxKey();
          }
          // Returns new tree, with the key/value added.
          insert(t, e, n) {
            let r = this;
            const s = n(t, r.key);
            return (
              (r =
                s < 0
                  ? r.copy(null, null, null, r.left.insert(t, e, n), null)
                  : 0 === s
                  ? r.copy(null, e, null, null, null)
                  : r.copy(null, null, null, null, r.right.insert(t, e, n))),
              r.fixUp()
            );
          }
          removeMin() {
            if (this.left.isEmpty()) return ae.EMPTY;
            let t = this;
            return (
              t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()),
              (t = t.copy(null, null, null, t.left.removeMin(), null)),
              t.fixUp()
            );
          }
          // Returns new tree, with the specified item removed.
          remove(t, e) {
            let n,
              r = this;
            if (e(t, r.key) < 0)
              r.left.isEmpty() ||
                r.left.isRed() ||
                r.left.left.isRed() ||
                (r = r.moveRedLeft()),
                (r = r.copy(null, null, null, r.left.remove(t, e), null));
            else {
              if (
                (r.left.isRed() && (r = r.rotateRight()),
                r.right.isEmpty() ||
                  r.right.isRed() ||
                  r.right.left.isRed() ||
                  (r = r.moveRedRight()),
                0 === e(t, r.key))
              ) {
                if (r.right.isEmpty()) return ae.EMPTY;
                (n = r.right.min()),
                  (r = r.copy(n.key, n.value, null, null, r.right.removeMin()));
              }
              r = r.copy(null, null, null, null, r.right.remove(t, e));
            }
            return r.fixUp();
          }
          isRed() {
            return this.color;
          }
          // Returns new tree after performing any needed rotations.
          fixUp() {
            let t = this;
            return (
              t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()),
              t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()),
              t.left.isRed() && t.right.isRed() && (t = t.colorFlip()),
              t
            );
          }
          moveRedLeft() {
            let t = this.colorFlip();
            return (
              t.right.left.isRed() &&
                ((t = t.copy(null, null, null, null, t.right.rotateRight())),
                (t = t.rotateLeft()),
                (t = t.colorFlip())),
              t
            );
          }
          moveRedRight() {
            let t = this.colorFlip();
            return (
              t.left.left.isRed() &&
                ((t = t.rotateRight()), (t = t.colorFlip())),
              t
            );
          }
          rotateLeft() {
            const t = this.copy(null, null, ae.RED, null, this.right.left);
            return this.right.copy(null, null, this.color, t, null);
          }
          rotateRight() {
            const t = this.copy(null, null, ae.RED, this.left.right, null);
            return this.left.copy(null, null, this.color, null, t);
          }
          colorFlip() {
            const t = this.left.copy(null, null, !this.left.color, null, null),
              e = this.right.copy(null, null, !this.right.color, null, null);
            return this.copy(null, null, !this.color, t, e);
          }
          // For testing.
          checkMaxDepth() {
            const t = this.check();
            return Math.pow(2, t) <= this.size + 1;
          }
          // In a balanced RB tree, the black-depth (number of black nodes) from root to
          // leaves is equal on both sides.  This function verifies that or asserts.
          check() {
            if (this.isRed() && this.left.isRed()) throw b();
            if (this.right.isRed()) throw b();
            const t = this.left.check();
            if (t !== this.right.check()) throw b();
            return t + (this.isRed() ? 0 : 1);
          }
        }

        // end LLRBNode
        // Empty node is shared between all LLRB trees.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (ae.EMPTY = null), (ae.RED = !0), (ae.BLACK = !1);

        // end LLRBEmptyNode
        ae.EMPTY =
          new // Represents an empty node (a leaf node in the Red-Black Tree).
          (class {
            constructor() {
              this.size = 0;
            }
            get key() {
              throw b();
            }
            get value() {
              throw b();
            }
            get color() {
              throw b();
            }
            get left() {
              throw b();
            }
            get right() {
              throw b();
            }
            // Returns a copy of the current node.
            copy(t, e, n, r, s) {
              return this;
            }
            // Returns a copy of the tree, with the specified key/value added.
            insert(t, e, n) {
              return new ae(t, e);
            }
            // Returns a copy of the tree, with the specified key removed.
            remove(t, e) {
              return this;
            }
            isEmpty() {
              return !0;
            }
            inorderTraversal(t) {
              return !1;
            }
            reverseTraversal(t) {
              return !1;
            }
            minKey() {
              return null;
            }
            maxKey() {
              return null;
            }
            isRed() {
              return !1;
            }
            // For testing.
            checkMaxDepth() {
              return !0;
            }
            check() {
              return 0;
            }
          })();

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * SortedSet is an immutable (copy-on-write) collection that holds elements
         * in order specified by the provided comparator.
         *
         * NOTE: if provided comparator returns 0 for two elements, we consider them to
         * be equal!
         */
        class he {
          constructor(t) {
            (this.comparator = t), (this.data = new ue(this.comparator));
          }
          has(t) {
            return null !== this.data.get(t);
          }
          first() {
            return this.data.minKey();
          }
          last() {
            return this.data.maxKey();
          }
          get size() {
            return this.data.size;
          }
          indexOf(t) {
            return this.data.indexOf(t);
          }
          /** Iterates elements in order defined by "comparator" */ forEach(t) {
            this.data.inorderTraversal((e, n) => (t(e), !1));
          }
          /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */ forEachInRange(
            t,
            e
          ) {
            const n = this.data.getIteratorFrom(t[0]);
            for (; n.hasNext(); ) {
              const r = n.getNext();
              if (this.comparator(r.key, t[1]) >= 0) return;
              e(r.key);
            }
          }
          /**
           * Iterates over `elem`s such that: start &lt;= elem until false is returned.
           */ forEachWhile(t, e) {
            let n;
            for (
              n =
                void 0 !== e
                  ? this.data.getIteratorFrom(e)
                  : this.data.getIterator();
              n.hasNext();

            ) {
              if (!t(n.getNext().key)) return;
            }
          }
          /** Finds the least element greater than or equal to `elem`. */ firstAfterOrEqual(
            t
          ) {
            const e = this.data.getIteratorFrom(t);
            return e.hasNext() ? e.getNext().key : null;
          }
          getIterator() {
            return new le(this.data.getIterator());
          }
          getIteratorFrom(t) {
            return new le(this.data.getIteratorFrom(t));
          }
          /** Inserts or updates an element */ add(t) {
            return this.copy(this.data.remove(t).insert(t, !0));
          }
          /** Deletes an element */ delete(t) {
            return this.has(t) ? this.copy(this.data.remove(t)) : this;
          }
          isEmpty() {
            return this.data.isEmpty();
          }
          unionWith(t) {
            let e = this;
            // Make sure `result` always refers to the larger one of the two sets.
            return (
              e.size < t.size && ((e = t), (t = this)),
              t.forEach((t) => {
                e = e.add(t);
              }),
              e
            );
          }
          isEqual(t) {
            if (!(t instanceof he)) return !1;
            if (this.size !== t.size) return !1;
            const e = this.data.getIterator(),
              n = t.data.getIterator();
            for (; e.hasNext(); ) {
              const t = e.getNext().key,
                r = n.getNext().key;
              if (0 !== this.comparator(t, r)) return !1;
            }
            return !0;
          }
          toArray() {
            const t = [];
            return (
              this.forEach((e) => {
                t.push(e);
              }),
              t
            );
          }
          toString() {
            const t = [];
            return (
              this.forEach((e) => t.push(e)), "SortedSet(" + t.toString() + ")"
            );
          }
          copy(t) {
            const e = new he(this.comparator);
            return (e.data = t), e;
          }
        }

        class le {
          constructor(t) {
            this.iter = t;
          }
          getNext() {
            return this.iter.getNext().key;
          }
          hasNext() {
            return this.iter.hasNext();
          }
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Provides a set of fields that can be used to partially patch a document.
         * FieldMask is used in conjunction with ObjectValue.
         * Examples:
         *   foo - Overwrites foo entirely with the provided value. If foo is not
         *         present in the companion ObjectValue, the field is deleted.
         *   foo.bar - Overwrites only the field bar of the object foo.
         *             If foo is not an object, foo is replaced with an object
         *             containing foo
         */ class fe {
          constructor(t) {
            (this.fields = t),
              // TODO(dimond): validation of FieldMask
              // Sort the field mask to support `FieldMask.isEqual()` and assert below.
              t.sort(nt.comparator);
          }
          static empty() {
            return new fe([]);
          }
          /**
           * Returns a new FieldMask object that is the result of adding all the given
           * fields paths to this field mask.
           */ unionWith(t) {
            let e = new he(nt.comparator);
            for (const t of this.fields) e = e.add(t);
            for (const n of t) e = e.add(n);
            return new fe(e.toArray());
          }
          /**
           * Verifies that `fieldPath` is included by at least one field in this field
           * mask.
           *
           * This is an O(n) operation, where `n` is the size of the field mask.
           */ covers(t) {
            for (const e of this.fields) if (e.isPrefixOf(t)) return !0;
            return !1;
          }
          isEqual(t) {
            return vt(this.fields, t.fields, (t, e) => t.isEqual(e));
          }
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * An ObjectValue represents a MapValue in the Firestore Proto and offers the
         * ability to add and remove fields (via the ObjectValueBuilder).
         */ class de {
          constructor(t) {
            this.value = t;
          }
          static empty() {
            return new de({
              mapValue: {},
            });
          }
          /**
           * Returns the value at the given path or null.
           *
           * @param path - the path to search
           * @returns The value at the path or null if the path is not set.
           */ field(t) {
            if (t.isEmpty()) return this.value;
            {
              let e = this.value;
              for (let n = 0; n < t.length - 1; ++n)
                if (((e = (e.mapValue.fields || {})[t.get(n)]), !jt(e)))
                  return null;
              return (
                (e = (e.mapValue.fields || {})[t.lastSegment()]), e || null
              );
            }
          }
          /**
           * Sets the field to the provided value.
           *
           * @param path - The field path to set.
           * @param value - The value to set.
           */ set(t, e) {
            this.getFieldsMap(t.popLast())[t.lastSegment()] = Bt(e);
          }
          /**
           * Sets the provided fields to the provided values.
           *
           * @param data - A map of fields to values (or null for deletes).
           */ setAll(t) {
            let e = nt.emptyPath(),
              n = {},
              r = [];
            t.forEach((t, s) => {
              if (!e.isImmediateParentOf(s)) {
                // Insert the accumulated changes at this parent location
                const t = this.getFieldsMap(e);
                this.applyChanges(t, n, r),
                  (n = {}),
                  (r = []),
                  (e = s.popLast());
              }
              t ? (n[s.lastSegment()] = Bt(t)) : r.push(s.lastSegment());
            });
            const s = this.getFieldsMap(e);
            this.applyChanges(s, n, r);
          }
          /**
           * Removes the field at the specified path. If there is no field at the
           * specified path, nothing is changed.
           *
           * @param path - The field path to remove.
           */ delete(t) {
            const e = this.field(t.popLast());
            jt(e) &&
              e.mapValue.fields &&
              delete e.mapValue.fields[t.lastSegment()];
          }
          isEqual(t) {
            return St(this.value, t.value);
          }
          /**
           * Returns the map that contains the leaf element of `path`. If the parent
           * entry does not yet exist, or if it is not a map, a new map will be created.
           */ getFieldsMap(t) {
            let e = this.value;
            e.mapValue.fields ||
              (e.mapValue = {
                fields: {},
              });
            for (let n = 0; n < t.length; ++n) {
              let r = e.mapValue.fields[t.get(n)];
              (jt(r) && r.mapValue.fields) ||
                ((r = {
                  mapValue: {
                    fields: {},
                  },
                }),
                (e.mapValue.fields[t.get(n)] = r)),
                (e = r);
            }
            return e.mapValue.fields;
          }
          /**
           * Modifies `fieldsMap` by adding, replacing or deleting the specified
           * entries.
           */ applyChanges(t, e, n) {
            Et(e, (e, n) => (t[e] = n));
            for (const e of n) delete t[e];
          }
          clone() {
            return new de(Bt(this.value));
          }
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Represents a document in Firestore with a key, version, data and whether it
         * has local mutations applied to it.
         *
         * Documents can transition between states via `convertToFoundDocument()`,
         * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
         * not transition to one of these states even after all mutations have been
         * applied, `isValidDocument()` returns false and the document should be removed
         * from all views.
         */ class we {
          constructor(t, e, n, r, s, i, o) {
            (this.key = t),
              (this.documentType = e),
              (this.version = n),
              (this.readTime = r),
              (this.createTime = s),
              (this.data = i),
              (this.documentState = o);
          }
          /**
           * Creates a document with no known version or data, but which can serve as
           * base document for mutations.
           */ static newInvalidDocument(t) {
            return new we(
              t,
              0 /* DocumentType.INVALID */,
              /* version */ oe.min(),
              /* readTime */ oe.min(),
              /* createTime */ oe.min(),
              de.empty(),
              0 /* DocumentState.SYNCED */
            );
          }
          /**
           * Creates a new document that is known to exist with the given data at the
           * given version.
           */ static newFoundDocument(t, e, n, r) {
            return new we(
              t,
              1 /* DocumentType.FOUND_DOCUMENT */,
              /* version */ e,
              /* readTime */ oe.min(),
              /* createTime */ n,
              r,
              0 /* DocumentState.SYNCED */
            );
          }
          /** Creates a new document that is known to not exist at the given version. */ static newNoDocument(
            t,
            e
          ) {
            return new we(
              t,
              2 /* DocumentType.NO_DOCUMENT */,
              /* version */ e,
              /* readTime */ oe.min(),
              /* createTime */ oe.min(),
              de.empty(),
              0 /* DocumentState.SYNCED */
            );
          }
          /**
           * Creates a new document that is known to exist at the given version but
           * whose data is not known (e.g. a document that was updated without a known
           * base document).
           */ static newUnknownDocument(t, e) {
            return new we(
              t,
              3 /* DocumentType.UNKNOWN_DOCUMENT */,
              /* version */ e,
              /* readTime */ oe.min(),
              /* createTime */ oe.min(),
              de.empty(),
              2 /* DocumentState.HAS_COMMITTED_MUTATIONS */
            );
          }
          /**
           * Changes the document type to indicate that it exists and that its version
           * and data are known.
           */ convertToFoundDocument(t, e) {
            // If a document is switching state from being an invalid or deleted
            // document to a valid (FOUND_DOCUMENT) document, either due to receiving an
            // update from Watch or due to applying a local set mutation on top
            // of a deleted document, our best guess about its createTime would be the
            // version at which the document transitioned to a FOUND_DOCUMENT.
            return (
              !this.createTime.isEqual(oe.min()) ||
                (2 /* DocumentType.NO_DOCUMENT */ !== this.documentType &&
                  0 /* DocumentType.INVALID */ !== this.documentType) ||
                (this.createTime = t),
              (this.version = t),
              (this.documentType = 1) /* DocumentType.FOUND_DOCUMENT */,
              (this.data = e),
              (this.documentState = 0) /* DocumentState.SYNCED */,
              this
            );
          }
          /**
           * Changes the document type to indicate that it doesn't exist at the given
           * version.
           */ convertToNoDocument(t) {
            return (
              (this.version = t),
              (this.documentType = 2) /* DocumentType.NO_DOCUMENT */,
              (this.data = de.empty()),
              (this.documentState = 0) /* DocumentState.SYNCED */,
              this
            );
          }
          /**
           * Changes the document type to indicate that it exists at a given version but
           * that its data is not known (e.g. a document that was updated without a known
           * base document).
           */ convertToUnknownDocument(t) {
            return (
              (this.version = t),
              (this.documentType = 3) /* DocumentType.UNKNOWN_DOCUMENT */,
              (this.data = de.empty()),
              (this.documentState = 2) /* DocumentState.HAS_COMMITTED_MUTATIONS */,
              this
            );
          }
          setHasCommittedMutations() {
            return (
              (this.documentState = 2) /* DocumentState.HAS_COMMITTED_MUTATIONS */,
              this
            );
          }
          setHasLocalMutations() {
            return (
              (this.documentState = 1) /* DocumentState.HAS_LOCAL_MUTATIONS */,
              (this.version = oe.min()),
              this
            );
          }
          setReadTime(t) {
            return (this.readTime = t), this;
          }
          get hasLocalMutations() {
            return (
              1 /* DocumentState.HAS_LOCAL_MUTATIONS */ === this.documentState
            );
          }
          get hasCommittedMutations() {
            return (
              2 /* DocumentState.HAS_COMMITTED_MUTATIONS */ ===
              this.documentState
            );
          }
          get hasPendingWrites() {
            return this.hasLocalMutations || this.hasCommittedMutations;
          }
          isValidDocument() {
            return 0 /* DocumentType.INVALID */ !== this.documentType;
          }
          isFoundDocument() {
            return 1 /* DocumentType.FOUND_DOCUMENT */ === this.documentType;
          }
          isNoDocument() {
            return 2 /* DocumentType.NO_DOCUMENT */ === this.documentType;
          }
          isUnknownDocument() {
            return 3 /* DocumentType.UNKNOWN_DOCUMENT */ === this.documentType;
          }
          isEqual(t) {
            return (
              t instanceof we &&
              this.key.isEqual(t.key) &&
              this.version.isEqual(t.version) &&
              this.documentType === t.documentType &&
              this.documentState === t.documentState &&
              this.data.isEqual(t.data)
            );
          }
          mutableCopy() {
            return new we(
              this.key,
              this.documentType,
              this.version,
              this.readTime,
              this.createTime,
              this.data.clone(),
              this.documentState
            );
          }
          toString() {
            return `Document(${this.key}, ${this.version}, ${JSON.stringify(
              this.data.value
            )}, {createTime: ${this.createTime}}), {documentType: ${
              this.documentType
            }}), {documentState: ${this.documentState}})`;
          }
        }

        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        // Visible for testing
        class me {
          constructor(
            t,
            e = null,
            n = [],
            r = [],
            s = null,
            i = null,
            o = null
          ) {
            (this.path = t),
              (this.collectionGroup = e),
              (this.orderBy = n),
              (this.filters = r),
              (this.limit = s),
              (this.startAt = i),
              (this.endAt = o),
              (this.S = null);
          }
        }

        /**
         * Initializes a Target with a path and optional additional query constraints.
         * Path must currently be empty if this is a collection group query.
         *
         * NOTE: you should always construct `Target` from `Query.toTarget` instead of
         * using this factory method, because `Query` provides an implicit `orderBy`
         * property.
         */ function pe(
          t,
          e = null,
          n = [],
          r = [],
          s = null,
          i = null,
          o = null
        ) {
          return new me(t, e, n, r, s, i, o);
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Query encapsulates all the query attributes we support in the SDK. It can
         * be run against the LocalStore, as well as be converted to a `Target` to
         * query the RemoteStore results.
         *
         * Visible for testing.
         */
        class ye {
          /**
           * Initializes a Query with a path and optional additional query constraints.
           * Path must currently be empty if this is a collection group query.
           */
          constructor(
            t,
            e = null,
            n = [],
            r = [],
            s = null,
            i = "F" /* LimitType.First */,
            o = null,
            u = null
          ) {
            (this.path = t),
              (this.collectionGroup = e),
              (this.explicitOrderBy = n),
              (this.filters = r),
              (this.limit = s),
              (this.limitType = i),
              (this.startAt = o),
              (this.endAt = u),
              (this.q = null),
              // The corresponding `Target` of this `Query` instance.
              (this.O = null),
              this.startAt,
              this.endAt;
          }
        }

        /** Creates a new Query for a query that matches all documents at `path` */ function ge(
          t
        ) {
          return t.explicitOrderBy.length > 0
            ? t.explicitOrderBy[0].field
            : null;
        }

        function _e(t) {
          for (const e of t.filters) {
            const t = e.getFirstInequalityField();
            if (null !== t) return t;
          }
          return null;
        }

        /**
         * Creates a new Query for a collection group query that matches all documents
         * within the provided collection group.
         */
        /**
         * Returns whether the query matches a collection group rather than a specific
         * collection.
         */
        function ve(t) {
          return null !== t.collectionGroup;
        }

        /**
         * Returns the implicit order by constraint that is used to execute the Query,
         * which can be different from the order by constraints the user provided (e.g.
         * the SDK and backend always orders by `__name__`).
         */ function be(t) {
          const e = I(t);
          if (null === e.q) {
            e.q = [];
            const t = _e(e),
              n = ge(e);
            if (null !== t && null === n)
              // In order to implicitly add key ordering, we must also add the
              // inequality filter field for it to be a valid query.
              // Note that the default inequality field and key ordering is ascending.
              t.isKeyField() || e.q.push(new se(t)),
                e.q.push(
                  new se(nt.keyField(), "asc" /* Direction.ASCENDING */)
                );
            else {
              let t = !1;
              for (const n of e.explicitOrderBy)
                e.q.push(n), n.field.isKeyField() && (t = !0);
              if (!t) {
                // The order of the implicit key ordering always matches the last
                // explicit order by
                const t =
                  e.explicitOrderBy.length > 0
                    ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
                    : "asc"; /* Direction.ASCENDING */
                e.q.push(new se(nt.keyField(), t));
              }
            }
          }
          return e.q;
        }

        /**
         * Converts this `Query` instance to it's corresponding `Target` representation.
         */ function Ee(t) {
          const e = I(t);
          if (!e.O)
            if ("F" /* LimitType.First */ === e.limitType)
              e.O = pe(
                e.path,
                e.collectionGroup,
                be(e),
                e.filters,
                e.limit,
                e.startAt,
                e.endAt
              );
            else {
              // Flip the orderBy directions since we want the last results
              const t = [];
              for (const n of be(e)) {
                const e =
                  "desc" /* Direction.DESCENDING */ === n.dir
                    ? "asc" /* Direction.ASCENDING */
                    : "desc"; /* Direction.DESCENDING */
                t.push(new se(n.field, e));
              }
              // We need to swap the cursors to match the now-flipped query ordering.
              const n = e.endAt
                  ? new Qt(e.endAt.position, e.endAt.inclusive)
                  : null,
                r = e.startAt
                  ? new Qt(e.startAt.position, e.startAt.inclusive)
                  : null;
              // Now return as a LimitType.First query.
              e.O = pe(e.path, e.collectionGroup, t, e.filters, e.limit, n, r);
            }
          return e.O;
        }

        function Ie(t, e) {
          e.getFirstInequalityField(), _e(t);
          const n = t.filters.concat([e]);
          return new ye(
            t.path,
            t.collectionGroup,
            t.explicitOrderBy.slice(),
            n,
            t.limit,
            t.limitType,
            t.startAt,
            t.endAt
          );
        }

        function Te(t, e) {
          return (
            (function (t, e) {
              if (t.limit !== e.limit) return !1;
              if (t.orderBy.length !== e.orderBy.length) return !1;
              for (let n = 0; n < t.orderBy.length; n++)
                if (!ie(t.orderBy[n], e.orderBy[n])) return !1;
              if (t.filters.length !== e.filters.length) return !1;
              for (let n = 0; n < t.filters.length; n++)
                if (!Yt(t.filters[n], e.filters[n])) return !1;
              return (
                t.collectionGroup === e.collectionGroup &&
                !!t.path.isEqual(e.path) &&
                !!zt(t.startAt, e.startAt) &&
                zt(t.endAt, e.endAt)
              );
            })(Ee(t), Ee(e)) && t.limitType === e.limitType
          );
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Returns an DoubleValue for `value` that is encoded based the serializer's
         * `useProto3Json` setting.
         */
        /**
         * Returns a value for a number that's appropriate to put into a proto.
         * The return value is an IntegerValue if it can safely represent the value,
         * otherwise a DoubleValue is returned.
         */
        function Ae(t, e) {
          return (function (t) {
            return (
              "number" == typeof t &&
              Number.isInteger(t) &&
              !lt(t) &&
              t <= Number.MAX_SAFE_INTEGER &&
              t >= Number.MIN_SAFE_INTEGER
            );
          })(e)
            ? /**
               * Returns an IntegerValue for `value`.
               */
              (function (t) {
                return {
                  integerValue: "" + t,
                };
              })(e)
            : (function (t, e) {
                if (t.k) {
                  if (isNaN(e))
                    return {
                      doubleValue: "NaN",
                    };
                  if (e === 1 / 0)
                    return {
                      doubleValue: "Infinity",
                    };
                  if (e === -1 / 0)
                    return {
                      doubleValue: "-Infinity",
                    };
                }
                return {
                  doubleValue: lt(e) ? "-0" : e,
                };
              })(t, e);
        }

        /**
         * @license
         * Copyright 2018 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /** Used to represent a field transform on a mutation. */ class Re {
          constructor() {
            // Make sure that the structural type of `TransformOperation` is unique.
            // See https://github.com/microsoft/TypeScript/issues/5451
            this._ = void 0;
          }
        }

        /** Transforms a value into a server-generated timestamp. */ class Pe extends Re {}

        /** Transforms an array value via a union operation. */ class Ve extends Re {
          constructor(t) {
            super(), (this.elements = t);
          }
        }

        /** Transforms an array value via a remove operation. */ class $e extends Re {
          constructor(t) {
            super(), (this.elements = t);
          }
        }

        /**
         * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
         * transforms. Converts all field values to integers or doubles, but unlike the
         * backend does not cap integer values at 2^63. Instead, JavaScript number
         * arithmetic is used and precision loss can occur for values greater than 2^53.
         */ class Ne extends Re {
          constructor(t, e) {
            super(), (this.C = t), (this.L = e);
          }
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /** A field path and the TransformOperation to perform upon it. */ class De {
          constructor(t, e) {
            (this.field = t), (this.transform = e);
          }
        }

        /**
         * Encodes a precondition for a mutation. This follows the model that the
         * backend accepts with the special case of an explicit "empty" precondition
         * (meaning no precondition).
         */ class Fe {
          constructor(t, e) {
            (this.updateTime = t), (this.exists = e);
          }
          /** Creates a new empty Precondition. */ static none() {
            return new Fe();
          }
          /** Creates a new Precondition with an exists flag. */ static exists(
            t
          ) {
            return new Fe(void 0, t);
          }
          /** Creates a new Precondition based on a version a document exists at. */ static updateTime(
            t
          ) {
            return new Fe(t);
          }
          /** Returns whether this Precondition is empty. */ get isNone() {
            return void 0 === this.updateTime && void 0 === this.exists;
          }
          isEqual(t) {
            return (
              this.exists === t.exists &&
              (this.updateTime
                ? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
                : !t.updateTime)
            );
          }
        }

        /**
         * A mutation describes a self-contained change to a document. Mutations can
         * create, replace, delete, and update subsets of documents.
         *
         * Mutations not only act on the value of the document but also its version.
         *
         * For local mutations (mutations that haven't been committed yet), we preserve
         * the existing version for Set and Patch mutations. For Delete mutations, we
         * reset the version to 0.
         *
         * Here's the expected transition table.
         *
         * MUTATION           APPLIED TO            RESULTS IN
         *
         * SetMutation        Document(v3)          Document(v3)
         * SetMutation        NoDocument(v3)        Document(v0)
         * SetMutation        InvalidDocument(v0)   Document(v0)
         * PatchMutation      Document(v3)          Document(v3)
         * PatchMutation      NoDocument(v3)        NoDocument(v3)
         * PatchMutation      InvalidDocument(v0)   UnknownDocument(v3)
         * DeleteMutation     Document(v3)          NoDocument(v0)
         * DeleteMutation     NoDocument(v3)        NoDocument(v0)
         * DeleteMutation     InvalidDocument(v0)   NoDocument(v0)
         *
         * For acknowledged mutations, we use the updateTime of the WriteResponse as
         * the resulting version for Set and Patch mutations. As deletes have no
         * explicit update time, we use the commitTime of the WriteResponse for
         * Delete mutations.
         *
         * If a mutation is acknowledged by the backend but fails the precondition check
         * locally, we transition to an `UnknownDocument` and rely on Watch to send us
         * the updated version.
         *
         * Field transforms are used only with Patch and Set Mutations. We use the
         * `updateTransforms` message to store transforms, rather than the `transforms`s
         * messages.
         *
         * ## Subclassing Notes
         *
         * Every type of mutation needs to implement its own applyToRemoteDocument() and
         * applyToLocalView() to implement the actual behavior of applying the mutation
         * to some source document (see `setMutationApplyToRemoteDocument()` for an
         * example).
         */ class xe {}

        /**
         * A mutation that creates or replaces the document at the given key with the
         * object value contents.
         */ class Se extends xe {
          constructor(t, e, n, r = []) {
            super(),
              (this.key = t),
              (this.value = e),
              (this.precondition = n),
              (this.fieldTransforms = r),
              (this.type = 0) /* MutationType.Set */;
          }
          getFieldMask() {
            return null;
          }
        }

        /**
         * A mutation that modifies fields of the document at the given key with the
         * given values. The values are applied through a field mask:
         *
         *  * When a field is in both the mask and the values, the corresponding field
         *    is updated.
         *  * When a field is in neither the mask nor the values, the corresponding
         *    field is unmodified.
         *  * When a field is in the mask but not in the values, the corresponding field
         *    is deleted.
         *  * When a field is not in the mask but is in the values, the values map is
         *    ignored.
         */ class qe extends xe {
          constructor(t, e, n, r, s = []) {
            super(),
              (this.key = t),
              (this.data = e),
              (this.fieldMask = n),
              (this.precondition = r),
              (this.fieldTransforms = s),
              (this.type = 1) /* MutationType.Patch */;
          }
          getFieldMask() {
            return this.fieldMask;
          }
        }

        /** A mutation that deletes the document at the given key. */ class Oe extends xe {
          constructor(t, e) {
            super(),
              (this.key = t),
              (this.precondition = e),
              (this.type = 2) /* MutationType.Delete */,
              (this.fieldTransforms = []);
          }
          getFieldMask() {
            return null;
          }
        }

        /**
         * A mutation that verifies the existence of the document at the given key with
         * the provided precondition.
         *
         * The `verify` operation is only used in Transactions, and this class serves
         * primarily to facilitate serialization into protos.
         */ class ke extends xe {
          constructor(t, e) {
            super(),
              (this.key = t),
              (this.precondition = e),
              (this.type = 3) /* MutationType.Verify */,
              (this.fieldTransforms = []);
          }
          getFieldMask() {
            return null;
          }
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const Ce = (() => {
            const t = {
              asc: "ASCENDING",
              desc: "DESCENDING",
            };
            return t;
          })(),
          Le = (() => {
            const t = {
              "<": "LESS_THAN",
              "<=": "LESS_THAN_OR_EQUAL",
              ">": "GREATER_THAN",
              ">=": "GREATER_THAN_OR_EQUAL",
              "==": "EQUAL",
              "!=": "NOT_EQUAL",
              "array-contains": "ARRAY_CONTAINS",
              in: "IN",
              "not-in": "NOT_IN",
              "array-contains-any": "ARRAY_CONTAINS_ANY",
            };
            return t;
          })(),
          Me = (() => {
            const t = {
              and: "AND",
              or: "OR",
            };
            return t;
          })();

        /**
         * This class generates JsonObject values for the Datastore API suitable for
         * sending to either GRPC stub methods or via the JSON/HTTP REST API.
         *
         * The serializer supports both Protobuf.js and Proto3 JSON formats. By
         * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
         * format.
         *
         * For a description of the Proto3 JSON format check
         * https://developers.google.com/protocol-buffers/docs/proto3#json
         *
         * TODO(klimt): We can remove the databaseId argument if we keep the full
         * resource name in documents.
         */
        class Ue {
          constructor(t, e) {
            (this.databaseId = t), (this.k = e);
          }
        }

        /**
         * Returns a value for a number (or null) that's appropriate to put into
         * a google.protobuf.Int32Value proto.
         * DO NOT USE THIS FOR ANYTHING ELSE.
         * This method cheats. It's typed as returning "number" because that's what
         * our generated proto interfaces say Int32Value must be. But GRPC actually
         * expects a { value: <number> } struct.
         */
        /**
         * Returns a value for a Date that's appropriate to put into a proto.
         */
        function je(t, e) {
          if (t.k) {
            return `${new Date(1e3 * e.seconds)
              .toISOString()
              .replace(/\.\d*/, "")
              .replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`;
          }
          return {
            seconds: "" + e.seconds,
            nanos: e.nanoseconds,
          };
        }

        /**
         * Returns a value for bytes that's appropriate to put in a proto.
         *
         * Visible for testing.
         */
        function Be(t, e) {
          return t.k ? e.toBase64() : e.toUint8Array();
        }

        function Qe(t, e) {
          return je(t, e.toTimestamp());
        }

        function ze(t) {
          return (
            E(!!t),
            oe.fromTimestamp(
              (function (t) {
                const e = At(t);
                return new Vt(e.seconds, e.nanos);
              })(t)
            )
          );
        }

        function We(t, e) {
          return (function (t) {
            return new tt(["projects", t.projectId, "databases", t.database]);
          })(t)
            .child("documents")
            .child(e)
            .canonicalString();
        }

        function Ge(t, e) {
          return We(t.databaseId, e.path);
        }

        function Ke(t, e) {
          const n = (function (t) {
            const e = tt.fromString(t);
            return E(cn(e)), e;
          })(e);
          if (n.get(1) !== t.databaseId.projectId)
            throw new U(
              P,
              "Tried to deserialize key from different project: " +
                n.get(1) +
                " vs " +
                t.databaseId.projectId
            );
          if (n.get(3) !== t.databaseId.database)
            throw new U(
              P,
              "Tried to deserialize key from different database: " +
                n.get(3) +
                " vs " +
                t.databaseId.database
            );
          return new rt(
            (E((r = n).length > 4 && "documents" === r.get(4)), r.popFirst(5))
          );
          var r;
          /** Creates a Document proto from key and fields (but no create/update time) */
        }

        function Ye(t, e) {
          return We(t.databaseId, e);
        }

        function He(t) {
          return new tt([
            "projects",
            t.databaseId.projectId,
            "databases",
            t.databaseId.database,
          ]).canonicalString();
        }

        function Je(t, e, n) {
          return {
            name: Ge(t, e),
            fields: n.value.mapValue.fields,
          };
        }

        function Xe(t, e) {
          return "found" in e
            ? (function (t, e) {
                E(!!e.found), e.found.name, e.found.updateTime;
                const n = Ke(t, e.found.name),
                  r = ze(e.found.updateTime),
                  s = e.found.createTime ? ze(e.found.createTime) : oe.min(),
                  i = new de({
                    mapValue: {
                      fields: e.found.fields,
                    },
                  });
                return we.newFoundDocument(n, r, s, i);
              })(t, e)
            : "missing" in e
            ? (function (t, e) {
                E(!!e.missing), E(!!e.readTime);
                const n = Ke(t, e.missing),
                  r = ze(e.readTime);
                return we.newNoDocument(n, r);
              })(t, e)
            : b();
        }

        function Ze(t, e) {
          let n;
          if (e instanceof Se)
            n = {
              update: Je(t, e.key, e.value),
            };
          else if (e instanceof Oe)
            n = {
              delete: Ge(t, e.key),
            };
          else if (e instanceof qe)
            n = {
              update: Je(t, e.key, e.data),
              updateMask: un(e.fieldMask),
            };
          else {
            if (!(e instanceof ke)) return b();
            n = {
              verify: Ge(t, e.key),
            };
          }
          return (
            e.fieldTransforms.length > 0 &&
              (n.updateTransforms = e.fieldTransforms.map((t) =>
                (function (t, e) {
                  const n = e.transform;
                  if (n instanceof Pe)
                    return {
                      fieldPath: e.field.canonicalString(),
                      setToServerValue: "REQUEST_TIME",
                    };
                  if (n instanceof Ve)
                    return {
                      fieldPath: e.field.canonicalString(),
                      appendMissingElements: {
                        values: n.elements,
                      },
                    };
                  if (n instanceof $e)
                    return {
                      fieldPath: e.field.canonicalString(),
                      removeAllFromArray: {
                        values: n.elements,
                      },
                    };
                  if (n instanceof Ne)
                    return {
                      fieldPath: e.field.canonicalString(),
                      increment: n.L,
                    };
                  throw b();
                })(0, t)
              )),
            e.precondition.isNone ||
              (n.currentDocument = (function (t, e) {
                return void 0 !== e.updateTime
                  ? {
                      updateTime: Qe(t, e.updateTime),
                    }
                  : void 0 !== e.exists
                  ? {
                      exists: e.exists,
                    }
                  : b();
              })(t, e.precondition)),
            n
          );
        }

        function tn(t, e) {
          // Dissect the path into parent, collectionId, and optional key filter.
          const n = {
              structuredQuery: {},
            },
            r = e.path;
          null !== e.collectionGroup
            ? ((n.parent = Ye(t, r)),
              (n.structuredQuery.from = [
                {
                  collectionId: e.collectionGroup,
                  allDescendants: !0,
                },
              ]))
            : ((n.parent = Ye(t, r.popLast())),
              (n.structuredQuery.from = [
                {
                  collectionId: r.lastSegment(),
                },
              ]));
          const s = (function (t) {
            if (0 === t.length) return;
            return on(Kt.create(t, "and" /* CompositeOperator.AND */));
          })(e.filters);
          s && (n.structuredQuery.where = s);
          const i = (function (t) {
            if (0 === t.length) return;
            return t.map((t) =>
              // visible for testing
              (function (t) {
                return {
                  field: sn(t.field),
                  direction: en(t.dir),
                };
              })(
                // visible for testing
                t
              )
            );
          })(e.orderBy);
          i && (n.structuredQuery.orderBy = i);
          const o = (function (t, e) {
            return t.k || ht(e)
              ? e
              : {
                  value: e,
                };
          })(t, e.limit);
          var u;
          return (
            null !== o && (n.structuredQuery.limit = o),
            e.startAt &&
              (n.structuredQuery.startAt = {
                before: (u = e.startAt).inclusive,
                values: u.position,
              }),
            e.endAt &&
              (n.structuredQuery.endAt = (function (t) {
                return {
                  before: !t.inclusive,
                  values: t.position,
                };
              })(
                // visible for testing
                e.endAt
              )),
            n
          );
        }

        function en(t) {
          return Ce[t];
        }

        // visible for testing
        function nn(t) {
          return Le[t];
        }

        function rn(t) {
          return Me[t];
        }

        function sn(t) {
          return {
            fieldPath: t.canonicalString(),
          };
        }

        function on(t) {
          return t instanceof Gt
            ? (function (t) {
                if ("==" /* Operator.EQUAL */ === t.op) {
                  if (Ut(t.value))
                    return {
                      unaryFilter: {
                        field: sn(t.field),
                        op: "IS_NAN",
                      },
                    };
                  if (Mt(t.value))
                    return {
                      unaryFilter: {
                        field: sn(t.field),
                        op: "IS_NULL",
                      },
                    };
                } else if ("!=" /* Operator.NOT_EQUAL */ === t.op) {
                  if (Ut(t.value))
                    return {
                      unaryFilter: {
                        field: sn(t.field),
                        op: "IS_NOT_NAN",
                      },
                    };
                  if (Mt(t.value))
                    return {
                      unaryFilter: {
                        field: sn(t.field),
                        op: "IS_NOT_NULL",
                      },
                    };
                }
                return {
                  fieldFilter: {
                    field: sn(t.field),
                    op: nn(t.op),
                    value: t.value,
                  },
                };
              })(t)
            : t instanceof Kt
            ? (function (t) {
                const e = t.getFilters().map((t) => on(t));
                if (1 === e.length) return e[0];
                return {
                  compositeFilter: {
                    op: rn(t.op),
                    filters: e,
                  },
                };
              })(t)
            : b();
        }

        function un(t) {
          const e = [];
          return (
            t.fields.forEach((t) => e.push(t.canonicalString())),
            {
              fieldPaths: e,
            }
          );
        }

        function cn(t) {
          // Resource names have at least 4 components (project ID, database ID)
          return (
            t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2)
          );
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ function an(t) {
          return new Ue(t, /* useProto3Json= */ !0);
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * A helper for running delayed tasks following an exponential backoff curve
         * between attempts.
         *
         * Each delay is made up of a "base" delay which follows the exponential
         * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
         * base delay. This prevents clients from accidentally synchronizing their
         * delays causing spikes of load to the backend.
         */
        class hn {
          constructor(
            /**
             * The AsyncQueue to run backoff operations on.
             */
            t,
            /**
             * The ID to use when scheduling backoff operations on the AsyncQueue.
             */
            e,
            /**
             * The initial delay (used as the base delay on the first retry attempt).
             * Note that jitter will still be applied, so the actual delay could be as
             * little as 0.5*initialDelayMs.
             */
            n = 1e3,
            /**
             * The multiplier to use to determine the extended base delay after each
             * attempt.
             */ r = 1.5,
            /**
             * The maximum base delay after which no further backoff is performed.
             * Note that jitter will still be applied, so the actual delay could be as
             * much as 1.5*maxDelayMs.
             */ s = 6e4
          ) {
            (this.M = t),
              (this.timerId = e),
              (this.U = n),
              (this.j = r),
              (this.B = s),
              (this.W = 0),
              (this.G = null),
              /** The last backoff attempt, as epoch milliseconds. */
              (this.K = Date.now()),
              this.reset();
          }
          /**
           * Resets the backoff delay.
           *
           * The very next backoffAndWait() will have no delay. If it is called again
           * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
           * subsequent ones will increase according to the backoffFactor.
           */ reset() {
            this.W = 0;
          }
          /**
           * Resets the backoff delay to the maximum delay (e.g. for use after a
           * RESOURCE_EXHAUSTED error).
           */ Y() {
            this.W = this.B;
          }
          /**
           * Returns a promise that resolves after currentDelayMs, and increases the
           * delay for any subsequent attempts. If there was a pending backoff operation
           * already, it will be canceled.
           */ H(t) {
            // Cancel any pending backoff operation.
            this.cancel();
            // First schedule using the current base (which may be 0 and should be
            // honored as such).
            const e = Math.floor(this.W + this.J()),
              n = Math.max(0, Date.now() - this.K),
              r = Math.max(0, e - n);
            // Guard against lastAttemptTime being in the future due to a clock change.
            r > 0 &&
              y(
                "ExponentialBackoff",
                `Backing off for ${r} ms (base delay: ${this.W} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`
              ),
              (this.G = this.M.enqueueAfterDelay(
                this.timerId,
                r,
                () => ((this.K = Date.now()), t())
              )),
              // Apply backoff factor to determine next delay and ensure it is within
              // bounds.
              (this.W *= this.j),
              this.W < this.U && (this.W = this.U),
              this.W > this.B && (this.W = this.B);
          }
          X() {
            null !== this.G && (this.G.skipDelay(), (this.G = null));
          }
          cancel() {
            null !== this.G && (this.G.cancel(), (this.G = null));
          }
          /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ J() {
            return (Math.random() - 0.5) * this.W;
          }
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Datastore and its related methods are a wrapper around the external Google
         * Cloud Datastore grpc API, which provides an interface that is more convenient
         * for the rest of the client SDK architecture to consume.
         */
        /**
         * An implementation of Datastore that exposes additional state for internal
         * consumption.
         */
        class ln extends class {} {
          constructor(t, e, n, r) {
            super(),
              (this.authCredentials = t),
              (this.appCheckCredentials = e),
              (this.connection = n),
              (this.C = r),
              (this.Z = !1);
          }
          tt() {
            if (this.Z)
              throw new U(S, "The client has already been terminated.");
          }
          /** Invokes the provided RPC with auth and AppCheck tokens. */ I(
            t,
            e,
            n
          ) {
            return (
              this.tt(),
              Promise.all([
                this.authCredentials.getToken(),
                this.appCheckCredentials.getToken(),
              ])
                .then(([r, s]) => this.connection.I(t, e, n, r, s))
                .catch((t) => {
                  throw "FirebaseError" === t.name
                    ? (t.code === F &&
                        (this.authCredentials.invalidateToken(),
                        this.appCheckCredentials.invalidateToken()),
                      t)
                    : new U(R, t.toString());
                })
            );
          }
          /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */ P(
            t,
            e,
            n,
            r
          ) {
            return (
              this.tt(),
              Promise.all([
                this.authCredentials.getToken(),
                this.appCheckCredentials.getToken(),
              ])
                .then(([s, i]) => this.connection.P(t, e, n, s, i, r))
                .catch((t) => {
                  throw "FirebaseError" === t.name
                    ? (t.code === F &&
                        (this.authCredentials.invalidateToken(),
                        this.appCheckCredentials.invalidateToken()),
                      t)
                    : new U(R, t.toString());
                })
            );
          }
          terminate() {
            this.Z = !0;
          }
        }

        // TODO(firestorexp): Make sure there is only one Datastore instance per
        // firestore-exp client.
        async function fn(t, e) {
          const n = I(t),
            r = He(n.C) + "/documents",
            s = {
              writes: e.map((t) => Ze(n.C, t)),
            };
          await n.I("Commit", r, s);
        }

        async function dn(t, e) {
          const n = I(t),
            r = He(n.C) + "/documents",
            s = {
              documents: e.map((t) => Ge(n.C, t)),
            },
            i = await n.P("BatchGetDocuments", r, s, e.length),
            o = new Map();
          i.forEach((t) => {
            const e = Xe(n.C, t);
            o.set(e.key.toString(), e);
          });
          const u = [];
          return (
            e.forEach((t) => {
              const e = o.get(t.toString());
              E(!!e), u.push(e);
            }),
            u
          );
        }

        async function wn(t, e) {
          const n = I(t),
            r = tn(n.C, Ee(e));
          return (
            await n.P("RunQuery", r.parent, {
              structuredQuery: r.structuredQuery,
            })
          )
            .filter((t) => !!t.document)
            .map((t) =>
              (function (t, e, n) {
                const r = Ke(t, e.name),
                  s = ze(e.updateTime),
                  i = e.createTime ? ze(e.createTime) : oe.min(),
                  o = new de({
                    mapValue: {
                      fields: e.fields,
                    },
                  }),
                  u = we.newFoundDocument(r, s, i, o);
                return (
                  n && u.setHasCommittedMutations(),
                  n ? u.setHasCommittedMutations() : u
                );
              })(n.C, t.document, void 0)
            );
        }

        async function mn(t, e) {
          const n = I(t),
            r = (function (t, e) {
              const n = tn(t, e);
              return {
                structuredAggregationQuery: {
                  aggregations: [
                    {
                      count: {},
                      alias: "count_alias",
                    },
                  ],
                  structuredQuery: n.structuredQuery,
                },
                parent: n.parent,
              };
            })(n.C, Ee(e)),
            s = r.parent;
          n.connection.v || delete r.parent;
          return (
            await n.P("RunAggregationQuery", s, r, /*expectedResponseCount=*/ 1)
          )
            .filter((t) => !!t.result)
            .map((t) => t.result.aggregateFields);
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const pn = new Map();

        /**
         * An instance map that ensures only one Datastore exists per Firestore
         * instance.
         */
        /**
         * Returns an initialized and started Datastore for the given Firestore
         * instance. Callers must invoke removeComponents() when the Firestore
         * instance is terminated.
         */
        function yn(t) {
          if (t._terminated)
            throw new U(S, "The client has already been terminated.");
          if (!pn.has(t)) {
            y("ComponentProvider", "Initializing Datastore");
            const i = (function (t) {
                return new pt(t, fetch.bind(null));
              })(
                ((e = t._databaseId),
                (n = t.app.options.appId || ""),
                (r = t._persistenceKey),
                (s = t._freezeSettings()),
                new J(
                  e,
                  n,
                  r,
                  s.host,
                  s.ssl,
                  s.experimentalForceLongPolling,
                  s.experimentalAutoDetectLongPolling,
                  s.useFetchStreams
                ))
              ),
              o = an(t._databaseId),
              u = (function (t, e, n, r) {
                return new ln(t, e, n, r);
              })(t._authCredentials, t._appCheckCredentials, i, o);
            pn.set(t, u);
          }
          var e, n, r, s;
          /**
           * @license
           * Copyright 2018 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */ return pn.get(t);
        }

        /**
         * Removes all components associated with the provided instance. Must be called
         * when the `Firestore` instance is terminated.
         */
        /**
         * A concrete type describing all the values that can be applied via a
         * user-supplied `FirestoreSettings` object. This is a separate type so that
         * defaults can be supplied and the value can be checked for equality.
         */
        class gn {
          constructor(t) {
            var e;
            if (void 0 === t.host) {
              if (void 0 !== t.ssl)
                throw new U(
                  P,
                  "Can't provide ssl option if host option is not set"
                );
              (this.host = "firestore.googleapis.com"), (this.ssl = true);
            } else
              (this.host = t.host),
                (this.ssl = null === (e = t.ssl) || void 0 === e || e);
            if (
              ((this.credentials = t.credentials),
              (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
              void 0 === t.cacheSizeBytes)
            )
              this.cacheSizeBytes = 41943040;
            else {
              if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576)
                throw new U(P, "cacheSizeBytes must be at least 1048576");
              this.cacheSizeBytes = t.cacheSizeBytes;
            }
            (this.experimentalForceLongPolling =
              !!t.experimentalForceLongPolling),
              (this.experimentalAutoDetectLongPolling =
                !!t.experimentalAutoDetectLongPolling),
              (this.useFetchStreams = !!t.useFetchStreams),
              (function (t, e, n, r) {
                if (!0 === e && !0 === r)
                  throw new U(P, `${t} and ${n} cannot be used together.`);
              })(
                "experimentalForceLongPolling",
                t.experimentalForceLongPolling,
                "experimentalAutoDetectLongPolling",
                t.experimentalAutoDetectLongPolling
              );
          }
          isEqual(t) {
            return (
              this.host === t.host &&
              this.ssl === t.ssl &&
              this.credentials === t.credentials &&
              this.cacheSizeBytes === t.cacheSizeBytes &&
              this.experimentalForceLongPolling ===
                t.experimentalForceLongPolling &&
              this.experimentalAutoDetectLongPolling ===
                t.experimentalAutoDetectLongPolling &&
              this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
              this.useFetchStreams === t.useFetchStreams
            );
          }
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * The Cloud Firestore service interface.
         *
         * Do not call this constructor directly. Instead, use {@link (getFirestore:1)}.
         */ class _n {
          /** @hideconstructor */
          constructor(t, e, n, r) {
            (this._authCredentials = t),
              (this._appCheckCredentials = e),
              (this._databaseId = n),
              (this._app = r),
              /**
               * Whether it's a Firestore or Firestore Lite instance.
               */
              (this.type = "firestore-lite"),
              (this._persistenceKey = "(lite)"),
              (this._settings = new gn({})),
              (this._settingsFrozen = !1);
          }
          /**
           * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
           * instance.
           */ get app() {
            if (!this._app)
              throw new U(
                S,
                "Firestore was not initialized using the Firebase SDK. 'app' is not available"
              );
            return this._app;
          }
          get _initialized() {
            return this._settingsFrozen;
          }
          get _terminated() {
            return void 0 !== this._terminateTask;
          }
          _setSettings(t) {
            if (this._settingsFrozen)
              throw new U(
                S,
                "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
              );
            (this._settings = new gn(t)),
              void 0 !== t.credentials &&
                (this._authCredentials = (function (t) {
                  if (!t) return new Q();
                  switch (t.type) {
                    case "gapi":
                      const e = t.client;
                      return new K(
                        e,
                        t.sessionIndex || "0",
                        t.iamToken || null,
                        t.authTokenFactory || null
                      );

                    case "provider":
                      return t.client;

                    default:
                      throw new U(
                        P,
                        "makeAuthCredentialsProvider failed due to invalid credential type"
                      );
                  }
                })(t.credentials));
          }
          _getSettings() {
            return this._settings;
          }
          _freezeSettings() {
            return (this._settingsFrozen = !0), this._settings;
          }
          _delete() {
            return (
              this._terminateTask || (this._terminateTask = this._terminate()),
              this._terminateTask
            );
          }
          /** Returns a JSON-serializable representation of this `Firestore` instance. */ toJSON() {
            return {
              app: this._app,
              databaseId: this._databaseId,
              settings: this._settings,
            };
          }
          /**
           * Terminates all components used by this client. Subclasses can override
           * this method to clean up their own dependencies, but must also call this
           * method.
           *
           * Only ever called once.
           */ _terminate() {
            return (
              (function (t) {
                const e = pn.get(t);
                e &&
                  (y("ComponentProvider", "Removing Datastore"),
                  pn.delete(t),
                  e.terminate());
              })(this),
              Promise.resolve()
            );
          }
        }

        function vn(t, e, n) {
          n || (n = "(default)");
          const r = (0,
          _firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(
            t,
            "firestore/lite"
          );
          if (r.isInitialized(n))
            throw new U(S, "Firestore can only be initialized once per app.");
          return r.initialize({
            options: e,
            instanceIdentifier: n,
          });
        }

        function bn(e, n) {
          const r =
              "object" == typeof e
                ? e
                : (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)(),
            s = "string" == typeof e ? e : n || "(default)",
            i = (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(
              r,
              "firestore/lite"
            ).getImmediate({
              identifier: s,
            });
          if (!i._initialized) {
            const t = (0,
            _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getDefaultEmulatorHostnameAndPort)(
              "firestore"
            );
            t && En(i, ...t);
          }
          return i;
        }

        /**
         * Modify this instance to communicate with the Cloud Firestore emulator.
         *
         * Note: This must be called before this instance has been used to do any
         * operations.
         *
         * @param firestore - The `Firestore` instance to configure to connect to the
         * emulator.
         * @param host - the emulator host (ex: localhost).
         * @param port - the emulator port (ex: 9000).
         * @param options.mockUserToken - the mock auth token to use for unit testing
         * Security Rules.
         */ function En(t, e, n, r = {}) {
          var s;
          const i = (t = ct(t, _n))._getSettings();
          if (
            ("firestore.googleapis.com" !== i.host &&
              i.host !== e &&
              _(
                "Host has been set in both settings() and useEmulator(), emulator host will be used"
              ),
            t._setSettings(
              Object.assign(Object.assign({}, i), {
                host: `${e}:${n}`,
                ssl: !1,
              })
            ),
            r.mockUserToken)
          ) {
            let e, n;
            if ("string" == typeof r.mockUserToken)
              (e = r.mockUserToken), (n = d.MOCK_USER);
            else {
              // Let createMockUserToken validate first (catches common mistakes like
              // invalid field "uid" and missing field "sub" / "user_id".)
              e = (0,
              _firebase_util__WEBPACK_IMPORTED_MODULE_3__.createMockUserToken)(
                r.mockUserToken,
                null === (s = t._app) || void 0 === s
                  ? void 0
                  : s.options.projectId
              );
              const i = r.mockUserToken.sub || r.mockUserToken.user_id;
              if (!i)
                throw new U(
                  P,
                  "mockUserToken must contain 'sub' or 'user_id' field!"
                );
              n = new d(i);
            }
            t._authCredentials = new z(new B(e, n));
          }
        }

        /**
         * Terminates the provided `Firestore` instance.
         *
         * After calling `terminate()` only the `clearIndexedDbPersistence()` functions
         * may be used. Any other function will throw a `FirestoreError`. Termination
         * does not cancel any pending writes, and any promises that are awaiting a
         * response from the server will not be resolved.
         *
         * To restart after termination, create a new instance of `Firestore` with
         * {@link (getFirestore:1)}.
         *
         * Note: Under normal circumstances, calling `terminate()` is not required. This
         * function is useful only when you want to force this instance to release all of
         * its resources or in combination with {@link clearIndexedDbPersistence} to
         * ensure that all local state is destroyed between test runs.
         *
         * @param firestore - The `Firestore` instance to terminate.
         * @returns A `Promise` that is resolved when the instance has been successfully
         * terminated.
         */ function In(t) {
          return (
            (t = ct(t, _n)),
            (0,
            _firebase_app__WEBPACK_IMPORTED_MODULE_0__._removeServiceInstance)(
              t.app,
              "firestore/lite"
            ),
            t._delete()
          );
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * @license
         * Copyright 2022 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Represents an aggregation that can be performed by Firestore.
         */
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        class Tn {
          constructor() {
            /** A type string to uniquely identify instances of this class. */
            this.type = "AggregateField";
          }
        }

        /**
         * The results of executing an aggregation query.
         */ class An {
          /** @hideconstructor */
          constructor(t, e) {
            (this._data = e),
              /** A type string to uniquely identify instances of this class. */
              (this.type = "AggregateQuerySnapshot"),
              (this.query = t);
          }
          /**
           * Returns the results of the aggregations performed over the underlying
           * query.
           *
           * The keys of the returned object will be the same as those of the
           * `AggregateSpec` object specified to the aggregation method, and the values
           * will be the corresponding aggregation result.
           *
           * @returns The results of the aggregations performed over the underlying
           * query.
           */ data() {
            return this._data;
          }
        }

        /**
         * @license
         * Copyright 2022 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * CountQueryRunner encapsulates the logic needed to run the count aggregation
         * queries.
         */ class Rn {
          constructor(t, e, n) {
            (this.query = t), (this.datastore = e), (this.userDataWriter = n);
          }
          run() {
            return mn(this.datastore, this.query._query).then((t) => {
              E(void 0 !== t[0]);
              const e = Object.entries(t[0])
                .filter(([t, e]) => "count_alias" === t)
                .map(([t, e]) => this.userDataWriter.convertValue(e))[0];
              return (
                E("number" == typeof e),
                Promise.resolve(
                  new An(this.query, {
                    count: e,
                  })
                )
              );
            });
          }
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * A `DocumentReference` refers to a document location in a Firestore database
         * and can be used to write, read, or listen to the location. The document at
         * the referenced location may or may not exist.
         */ class Pn {
          /** @hideconstructor */
          constructor(
            t,
            /**
             * If provided, the `FirestoreDataConverter` associated with this instance.
             */
            e,
            n
          ) {
            (this.converter = e),
              (this._key = n),
              /** The type of this Firestore reference. */
              (this.type = "document"),
              (this.firestore = t);
          }
          get _path() {
            return this._key.path;
          }
          /**
           * The document's identifier within its collection.
           */ get id() {
            return this._key.path.lastSegment();
          }
          /**
           * A string representing the path of the referenced document (relative
           * to the root of the database).
           */ get path() {
            return this._key.path.canonicalString();
          }
          /**
           * The collection this `DocumentReference` belongs to.
           */ get parent() {
            return new $n(
              this.firestore,
              this.converter,
              this._key.path.popLast()
            );
          }
          withConverter(t) {
            return new Pn(this.firestore, t, this._key);
          }
        }

        /**
         * A `Query` refers to a query which you can read or listen to. You can also
         * construct refined `Query` objects by adding filters and ordering.
         */ class Vn {
          // This is the lite version of the Query class in the main SDK.
          /** @hideconstructor protected */
          constructor(
            t,
            /**
             * If provided, the `FirestoreDataConverter` associated with this instance.
             */
            e,
            n
          ) {
            (this.converter = e),
              (this._query = n),
              /** The type of this Firestore reference. */
              (this.type = "query"),
              (this.firestore = t);
          }
          withConverter(t) {
            return new Vn(this.firestore, t, this._query);
          }
        }

        /**
         * A `CollectionReference` object can be used for adding documents, getting
         * document references, and querying for documents (using {@link query}).
         */ class $n extends Vn {
          /** @hideconstructor */
          constructor(t, e, n) {
            super(t, e, new ye(n)),
              (this._path = n),
              /** The type of this Firestore reference. */
              (this.type = "collection");
          }
          /** The collection's identifier. */ get id() {
            return this._query.path.lastSegment();
          }
          /**
           * A string representing the path of the referenced collection (relative
           * to the root of the database).
           */ get path() {
            return this._query.path.canonicalString();
          }
          /**
           * A reference to the containing `DocumentReference` if this is a
           * subcollection. If this isn't a subcollection, the reference is null.
           */ get parent() {
            const t = this._path.popLast();
            return t.isEmpty()
              ? null
              : new Pn(this.firestore, /* converter= */ null, new rt(t));
          }
          withConverter(t) {
            return new $n(this.firestore, t, this._path);
          }
        }

        function Nn(t, e, ...n) {
          if (
            ((t = (0,
            _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(t)),
            st("collection", "path", e),
            t instanceof _n)
          ) {
            const r = tt.fromString(e, ...n);
            return ot(r), new $n(t, /* converter= */ null, r);
          }
          {
            if (!(t instanceof Pn || t instanceof $n))
              throw new U(
                P,
                "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
              );
            const r = t._path.child(tt.fromString(e, ...n));
            return ot(r), new $n(t.firestore, /* converter= */ null, r);
          }
        }

        // TODO(firestorelite): Consider using ErrorFactory -
        // https://github.com/firebase/firebase-js-sdk/blob/0131e1f/packages/util/src/errors.ts#L106
        /**
         * Creates and returns a new `Query` instance that includes all documents in the
         * database that are contained in a collection or subcollection with the
         * given `collectionId`.
         *
         * @param firestore - A reference to the root `Firestore` instance.
         * @param collectionId - Identifies the collections to query over. Every
         * collection or subcollection with this ID as the last segment of its path
         * will be included. Cannot contain a slash.
         * @returns The created `Query`.
         */ function Dn(t, e) {
          if (
            ((t = ct(t, _n)),
            st("collectionGroup", "collection id", e),
            e.indexOf("/") >= 0)
          )
            throw new U(
              P,
              `Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`
            );
          return new Vn(
            t,
            /* converter= */ null,
            (function (t) {
              return new ye(tt.emptyPath(), t);
            })(e)
          );
        }

        function Fn(t, e, ...n) {
          if (
            ((t = (0,
            _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(t)),
            // We allow omission of 'pathString' but explicitly prohibit passing in both
            // 'undefined' and 'null'.
            1 === arguments.length && (e = gt.N()),
            st("doc", "path", e),
            t instanceof _n)
          ) {
            const r = tt.fromString(e, ...n);
            return it(r), new Pn(t, /* converter= */ null, new rt(r));
          }
          {
            if (!(t instanceof Pn || t instanceof $n))
              throw new U(
                P,
                "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
              );
            const r = t._path.child(tt.fromString(e, ...n));
            return (
              it(r),
              new Pn(
                t.firestore,
                t instanceof $n ? t.converter : null,
                new rt(r)
              )
            );
          }
        }

        /**
         * Returns true if the provided references are equal.
         *
         * @param left - A reference to compare.
         * @param right - A reference to compare.
         * @returns true if the references point to the same location in the same
         * Firestore database.
         */ function xn(t, e) {
          return (
            (t = (0,
            _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(t)),
            (e = (0,
            _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(e)),
            (t instanceof Pn || t instanceof $n) &&
              (e instanceof Pn || e instanceof $n) &&
              t.firestore === e.firestore &&
              t.path === e.path &&
              t.converter === e.converter
          );
        }

        /**
         * Returns true if the provided queries point to the same collection and apply
         * the same constraints.
         *
         * @param left - A `Query` to compare.
         * @param right - A `Query` to compare.
         * @returns true if the references point to the same location in the same
         * Firestore database.
         */ function Sn(t, e) {
          return (
            (t = (0,
            _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(t)),
            (e = (0,
            _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(e)),
            t instanceof Vn &&
              e instanceof Vn &&
              t.firestore === e.firestore &&
              Te(t._query, e._query) &&
              t.converter === e.converter
          );
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * An immutable object representing an array of bytes.
         */ class qn {
          /** @hideconstructor */
          constructor(t) {
            this._byteString = t;
          }
          /**
           * Creates a new `Bytes` object from the given Base64 string, converting it to
           * bytes.
           *
           * @param base64 - The Base64 string used to create the `Bytes` object.
           */ static fromBase64String(t) {
            try {
              return new qn(It.fromBase64String(t));
            } catch (t) {
              throw new U(
                P,
                "Failed to construct data from Base64 string: " + t
              );
            }
          }
          /**
           * Creates a new `Bytes` object from the given Uint8Array.
           *
           * @param array - The Uint8Array used to create the `Bytes` object.
           */ static fromUint8Array(t) {
            return new qn(It.fromUint8Array(t));
          }
          /**
           * Returns the underlying bytes as a Base64-encoded string.
           *
           * @returns The Base64-encoded string created from the `Bytes` object.
           */ toBase64() {
            return this._byteString.toBase64();
          }
          /**
           * Returns the underlying bytes in a new `Uint8Array`.
           *
           * @returns The Uint8Array created from the `Bytes` object.
           */ toUint8Array() {
            return this._byteString.toUint8Array();
          }
          /**
           * Returns a string representation of the `Bytes` object.
           *
           * @returns A string representation of the `Bytes` object.
           */ toString() {
            return "Bytes(base64: " + this.toBase64() + ")";
          }
          /**
           * Returns true if this `Bytes` object is equal to the provided one.
           *
           * @param other - The `Bytes` object to compare against.
           * @returns true if this `Bytes` object is equal to the provided one.
           */ isEqual(t) {
            return this._byteString.isEqual(t._byteString);
          }
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * A `FieldPath` refers to a field in a document. The path may consist of a
         * single field name (referring to a top-level field in the document), or a
         * list of field names (referring to a nested field in the document).
         *
         * Create a `FieldPath` by providing field names. If more than one field
         * name is provided, the path will point to a nested field in a document.
         */ class On {
          /**
           * Creates a `FieldPath` from the provided field names. If more than one field
           * name is provided, the path will point to a nested field in a document.
           *
           * @param fieldNames - A list of field names.
           */
          constructor(...t) {
            for (let e = 0; e < t.length; ++e)
              if (0 === t[e].length)
                throw new U(
                  P,
                  "Invalid field name at argument $(i + 1). Field names must not be empty."
                );
            this._internalPath = new nt(t);
          }
          /**
           * Returns true if this `FieldPath` is equal to the provided one.
           *
           * @param other - The `FieldPath` to compare against.
           * @returns true if this `FieldPath` is equal to the provided one.
           */ isEqual(t) {
            return this._internalPath.isEqual(t._internalPath);
          }
        }

        /**
         * Returns a special sentinel `FieldPath` to refer to the ID of a document.
         * It can be used in queries to sort or filter by the document ID.
         */ function kn() {
          return new On("__name__");
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Sentinel values that can be used when writing document fields with `set()`
         * or `update()`.
         */ class Cn {
          /**
           * @param _methodName - The public API endpoint that returns this class.
           * @hideconstructor
           */
          constructor(t) {
            this._methodName = t;
          }
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * An immutable object representing a geographic location in Firestore. The
         * location is represented as latitude/longitude pair.
         *
         * Latitude values are in the range of [-90, 90].
         * Longitude values are in the range of [-180, 180].
         */ class Ln {
          /**
           * Creates a new immutable `GeoPoint` object with the provided latitude and
           * longitude values.
           * @param latitude - The latitude as number between -90 and 90.
           * @param longitude - The longitude as number between -180 and 180.
           */
          constructor(t, e) {
            if (!isFinite(t) || t < -90 || t > 90)
              throw new U(
                P,
                "Latitude must be a number between -90 and 90, but was: " + t
              );
            if (!isFinite(e) || e < -180 || e > 180)
              throw new U(
                P,
                "Longitude must be a number between -180 and 180, but was: " + e
              );
            (this._lat = t), (this._long = e);
          }
          /**
           * The latitude of this `GeoPoint` instance.
           */ get latitude() {
            return this._lat;
          }
          /**
           * The longitude of this `GeoPoint` instance.
           */ get longitude() {
            return this._long;
          }
          /**
           * Returns true if this `GeoPoint` is equal to the provided one.
           *
           * @param other - The `GeoPoint` to compare against.
           * @returns true if this `GeoPoint` is equal to the provided one.
           */ isEqual(t) {
            return this._lat === t._lat && this._long === t._long;
          }
          /** Returns a JSON-serializable representation of this GeoPoint. */ toJSON() {
            return {
              latitude: this._lat,
              longitude: this._long,
            };
          }
          /**
           * Actually private to JS consumers of our API, so this function is prefixed
           * with an underscore.
           */ _compareTo(t) {
            return _t(this._lat, t._lat) || _t(this._long, t._long);
          }
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const Mn = /^__.*__$/;

        /** The result of parsing document data (e.g. for a setData call). */ class Un {
          constructor(t, e, n) {
            (this.data = t), (this.fieldMask = e), (this.fieldTransforms = n);
          }
          toMutation(t, e) {
            return null !== this.fieldMask
              ? new qe(t, this.data, this.fieldMask, e, this.fieldTransforms)
              : new Se(t, this.data, e, this.fieldTransforms);
          }
        }

        /** The result of parsing "update" data (i.e. for an updateData call). */ class jn {
          constructor(
            t,
            // The fieldMask does not include document transforms.
            e,
            n
          ) {
            (this.data = t), (this.fieldMask = e), (this.fieldTransforms = n);
          }
          toMutation(t, e) {
            return new qe(
              t,
              this.data,
              this.fieldMask,
              e,
              this.fieldTransforms
            );
          }
        }

        function Bn(t) {
          switch (t) {
            case 0 /* UserDataSource.Set */:
            // fall through
            case 2 /* UserDataSource.MergeSet */:
            // fall through
            case 1 /* UserDataSource.Update */:
              return !0;

            case 3 /* UserDataSource.Argument */:
            case 4 /* UserDataSource.ArrayArgument */:
              return !1;

            default:
              throw b();
          }
        }

        /** A "context" object passed around while parsing user data. */ class Qn {
          /**
           * Initializes a ParseContext with the given source and path.
           *
           * @param settings - The settings for the parser.
           * @param databaseId - The database ID of the Firestore instance.
           * @param serializer - The serializer to use to generate the Value proto.
           * @param ignoreUndefinedProperties - Whether to ignore undefined properties
           * rather than throw.
           * @param fieldTransforms - A mutable list of field transforms encountered
           * while parsing the data.
           * @param fieldMask - A mutable list of field paths encountered while parsing
           * the data.
           *
           * TODO(b/34871131): We don't support array paths right now, so path can be
           * null to indicate the context represents any location within an array (in
           * which case certain features will not work and errors will be somewhat
           * compromised).
           */
          constructor(t, e, n, r, s, i) {
            (this.settings = t),
              (this.databaseId = e),
              (this.C = n),
              (this.ignoreUndefinedProperties = r),
              // Minor hack: If fieldTransforms is undefined, we assume this is an
              // external call and we need to validate the entire path.
              void 0 === s && this.et(),
              (this.fieldTransforms = s || []),
              (this.fieldMask = i || []);
          }
          get path() {
            return this.settings.path;
          }
          get nt() {
            return this.settings.nt;
          }
          /** Returns a new context with the specified settings overwritten. */ rt(
            t
          ) {
            return new Qn(
              Object.assign(Object.assign({}, this.settings), t),
              this.databaseId,
              this.C,
              this.ignoreUndefinedProperties,
              this.fieldTransforms,
              this.fieldMask
            );
          }
          st(t) {
            var e;
            const n =
                null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
              r = this.rt({
                path: n,
                it: !1,
              });
            return r.ot(t), r;
          }
          ut(t) {
            var e;
            const n =
                null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
              r = this.rt({
                path: n,
                it: !1,
              });
            return r.et(), r;
          }
          ct(t) {
            // TODO(b/34871131): We don't support array paths right now; so make path
            // undefined.
            return this.rt({
              path: void 0,
              it: !0,
            });
          }
          at(t) {
            return hr(
              t,
              this.settings.methodName,
              this.settings.ht || !1,
              this.path,
              this.settings.lt
            );
          }
          /** Returns 'true' if 'fieldPath' was traversed when creating this context. */ contains(
            t
          ) {
            return (
              void 0 !== this.fieldMask.find((e) => t.isPrefixOf(e)) ||
              void 0 !== this.fieldTransforms.find((e) => t.isPrefixOf(e.field))
            );
          }
          et() {
            // TODO(b/34871131): Remove null check once we have proper paths for fields
            // within arrays.
            if (this.path)
              for (let t = 0; t < this.path.length; t++)
                this.ot(this.path.get(t));
          }
          ot(t) {
            if (0 === t.length)
              throw this.at("Document fields must not be empty");
            if (Bn(this.nt) && Mn.test(t))
              throw this.at('Document fields cannot begin and end with "__"');
          }
        }

        /**
         * Helper for parsing raw user input (provided via the API) into internal model
         * classes.
         */ class zn {
          constructor(t, e, n) {
            (this.databaseId = t),
              (this.ignoreUndefinedProperties = e),
              (this.C = n || an(t));
          }
          /** Creates a new top-level parse context. */ ft(t, e, n, r = !1) {
            return new Qn(
              {
                nt: t,
                methodName: e,
                lt: n,
                path: nt.emptyPath(),
                it: !1,
                ht: r,
              },
              this.databaseId,
              this.C,
              this.ignoreUndefinedProperties
            );
          }
        }

        function Wn(t) {
          const e = t._freezeSettings(),
            n = an(t._databaseId);
          return new zn(t._databaseId, !!e.ignoreUndefinedProperties, n);
        }

        /** Parse document data from a set() call. */ function Gn(
          t,
          e,
          n,
          r,
          s,
          i = {}
        ) {
          const o = t.ft(
            i.merge || i.mergeFields
              ? 2 /* UserDataSource.MergeSet */
              : 0 /* UserDataSource.Set */,
            e,
            n,
            s
          );
          or("Data must be an object, but it was:", o, r);
          const u = sr(r, o);
          let c, a;
          if (i.merge) (c = new fe(o.fieldMask)), (a = o.fieldTransforms);
          else if (i.mergeFields) {
            const t = [];
            for (const r of i.mergeFields) {
              const s = ur(e, r, n);
              if (!o.contains(s))
                throw new U(
                  P,
                  `Field '${s}' is specified in your field mask but missing from your input data.`
                );
              lr(t, s) || t.push(s);
            }
            (c = new fe(t)),
              (a = o.fieldTransforms.filter((t) => c.covers(t.field)));
          } else (c = null), (a = o.fieldTransforms);
          return new Un(new de(u), c, a);
        }

        class Kn extends Cn {
          _toFieldTransform(t) {
            if (2 /* UserDataSource.MergeSet */ !== t.nt)
              throw 1 /* UserDataSource.Update */ === t.nt
                ? t.at(
                    `${this._methodName}() can only appear at the top level of your update data`
                  )
                : t.at(
                    `${this._methodName}() cannot be used with set() unless you pass {merge:true}`
                  );
            // No transform to add for a delete, but we need to add it to our
            // fieldMask so it gets deleted.
            return t.fieldMask.push(t.path), null;
          }
          isEqual(t) {
            return t instanceof Kn;
          }
        }

        /**
         * Creates a child context for parsing SerializableFieldValues.
         *
         * This is different than calling `ParseContext.contextWith` because it keeps
         * the fieldTransforms and fieldMask separate.
         *
         * The created context has its `dataSource` set to `UserDataSource.Argument`.
         * Although these values are used with writes, any elements in these FieldValues
         * are not considered writes since they cannot contain any FieldValue sentinels,
         * etc.
         *
         * @param fieldValue - The sentinel FieldValue for which to create a child
         *     context.
         * @param context - The parent context.
         * @param arrayElement - Whether or not the FieldValue has an array.
         */ function Yn(t, e, n) {
          return new Qn(
            {
              nt: 3 /* UserDataSource.Argument */,
              lt: e.settings.lt,
              methodName: t._methodName,
              it: n,
            },
            e.databaseId,
            e.C,
            e.ignoreUndefinedProperties
          );
        }

        class Hn extends Cn {
          _toFieldTransform(t) {
            return new De(t.path, new Pe());
          }
          isEqual(t) {
            return t instanceof Hn;
          }
        }

        class Jn extends Cn {
          constructor(t, e) {
            super(t), (this.dt = e);
          }
          _toFieldTransform(t) {
            const e = Yn(this, t, /*array=*/ !0),
              n = this.dt.map((t) => rr(t, e)),
              r = new Ve(n);
            return new De(t.path, r);
          }
          isEqual(t) {
            // TODO(mrschmidt): Implement isEquals
            return this === t;
          }
        }

        class Xn extends Cn {
          constructor(t, e) {
            super(t), (this.dt = e);
          }
          _toFieldTransform(t) {
            const e = Yn(this, t, /*array=*/ !0),
              n = this.dt.map((t) => rr(t, e)),
              r = new $e(n);
            return new De(t.path, r);
          }
          isEqual(t) {
            // TODO(mrschmidt): Implement isEquals
            return this === t;
          }
        }

        class Zn extends Cn {
          constructor(t, e) {
            super(t), (this.wt = e);
          }
          _toFieldTransform(t) {
            const e = new Ne(t.C, Ae(t.C, this.wt));
            return new De(t.path, e);
          }
          isEqual(t) {
            // TODO(mrschmidt): Implement isEquals
            return this === t;
          }
        }

        /** Parse update data from an update() call. */ function tr(
          t,
          e,
          n,
          r
        ) {
          const s = t.ft(1 /* UserDataSource.Update */, e, n);
          or("Data must be an object, but it was:", s, r);
          const i = [],
            o = de.empty();
          Et(r, (t, r) => {
            const u = ar(e, t, n);
            // For Compat types, we have to "extract" the underlying types before
            // performing validation.
            r = (0,
            _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(r);
            const c = s.ut(u);
            if (r instanceof Kn)
              // Add it to the field mask, but don't add anything to updateData.
              i.push(u);
            else {
              const t = rr(r, c);
              null != t && (i.push(u), o.set(u, t));
            }
          });
          const u = new fe(i);
          return new jn(o, u, s.fieldTransforms);
        }

        /** Parse update data from a list of field/value arguments. */ function er(
          t,
          e,
          n,
          r,
          s,
          i
        ) {
          const o = t.ft(1 /* UserDataSource.Update */, e, n),
            u = [ur(e, r, n)],
            c = [s];
          if (i.length % 2 != 0)
            throw new U(
              P,
              `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`
            );
          for (let t = 0; t < i.length; t += 2)
            u.push(ur(e, i[t])), c.push(i[t + 1]);
          const a = [],
            h = de.empty();
          // We iterate in reverse order to pick the last value for a field if the
          // user specified the field multiple times.
          for (let t = u.length - 1; t >= 0; --t)
            if (!lr(a, u[t])) {
              const e = u[t];
              let n = c[t];
              // For Compat types, we have to "extract" the underlying types before
              // performing validation.
              n = (0,
              _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(
                n
              );
              const r = o.ut(e);
              if (n instanceof Kn)
                // Add it to the field mask, but don't add anything to updateData.
                a.push(e);
              else {
                const t = rr(n, r);
                null != t && (a.push(e), h.set(e, t));
              }
            }
          const f = new fe(a);
          return new jn(h, f, o.fieldTransforms);
        }

        /**
         * Parse a "query value" (e.g. value in a where filter or a value in a cursor
         * bound).
         *
         * @param allowArrays - Whether the query value is an array that may directly
         * contain additional arrays (e.g. the operand of an `in` query).
         */ function nr(t, e, n, r = !1) {
          return rr(
            n,
            t.ft(
              r
                ? 4 /* UserDataSource.ArrayArgument */
                : 3 /* UserDataSource.Argument */,
              e
            )
          );
        }

        /**
         * Parses user data to Protobuf Values.
         *
         * @param input - Data to be parsed.
         * @param context - A context object representing the current path being parsed,
         * the source of the data being parsed, etc.
         * @returns The parsed value, or null if the value was a FieldValue sentinel
         * that should not be included in the resulting parsed data.
         */ function rr(t, e) {
          if (
            ir(
              // Unwrap the API type from the Compat SDK. This will return the API type
              // from firestore-exp.
              (t = (0,
              _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(
                t
              ))
            )
          )
            return or("Unsupported field value:", e, t), sr(t, e);
          if (t instanceof Cn)
            // FieldValues usually parse into transforms (except deleteField())
            // in which case we do not want to include this field in our parsed data
            // (as doing so will overwrite the field directly prior to the transform
            // trying to transform it). So we don't add this location to
            // context.fieldMask and we return null as our parsing result.
            /**
             * "Parses" the provided FieldValueImpl, adding any necessary transforms to
             * context.fieldTransforms.
             */
            return (
              (function (t, e) {
                // Sentinels are only supported with writes, and not within arrays.
                if (!Bn(e.nt))
                  throw e.at(
                    `${t._methodName}() can only be used with update() and set()`
                  );
                if (!e.path)
                  throw e.at(
                    `${t._methodName}() is not currently supported inside arrays`
                  );
                const n = t._toFieldTransform(e);
                n && e.fieldTransforms.push(n);
              })(
                /**
                 * Helper to parse a scalar value (i.e. not an Object, Array, or FieldValue)
                 *
                 * @returns The parsed value
                 */ t,
                e
              ),
              null
            );
          if (void 0 === t && e.ignoreUndefinedProperties)
            // If the input is undefined it can never participate in the fieldMask, so
            // don't handle this below. If `ignoreUndefinedProperties` is false,
            // `parseScalarValue` will reject an undefined value.
            return null;
          if (
            // If context.path is null we are inside an array and we don't support
            // field mask paths more granular than the top-level array.
            (e.path && e.fieldMask.push(e.path), t instanceof Array)
          ) {
            // TODO(b/34871131): Include the path containing the array in the error
            // message.
            // In the case of IN queries, the parsed data is an array (representing
            // the set of values to be included for the IN query) that may directly
            // contain additional arrays (each representing an individual field
            // value), so we disable this validation.
            if (e.settings.it && 4 /* UserDataSource.ArrayArgument */ !== e.nt)
              throw e.at("Nested arrays are not supported");
            return (function (t, e) {
              const n = [];
              let r = 0;
              for (const s of t) {
                let t = rr(s, e.ct(r));
                null == t &&
                  // Just include nulls in the array for fields being replaced with a
                  // sentinel.
                  (t = {
                    nullValue: "NULL_VALUE",
                  }),
                  n.push(t),
                  r++;
              }
              return {
                arrayValue: {
                  values: n,
                },
              };
            })(t, e);
          }
          return (function (t, e) {
            if (
              null ===
              (t = (0,
              _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(
                t
              ))
            )
              return {
                nullValue: "NULL_VALUE",
              };
            if ("number" == typeof t) return Ae(e.C, t);
            if ("boolean" == typeof t)
              return {
                booleanValue: t,
              };
            if ("string" == typeof t)
              return {
                stringValue: t,
              };
            if (t instanceof Date) {
              const n = Vt.fromDate(t);
              return {
                timestampValue: je(e.C, n),
              };
            }
            if (t instanceof Vt) {
              // Firestore backend truncates precision down to microseconds. To ensure
              // offline mode works the same with regards to truncation, perform the
              // truncation immediately without waiting for the backend to do that.
              const n = new Vt(
                t.seconds,
                1e3 * Math.floor(t.nanoseconds / 1e3)
              );
              return {
                timestampValue: je(e.C, n),
              };
            }
            if (t instanceof Ln)
              return {
                geoPointValue: {
                  latitude: t.latitude,
                  longitude: t.longitude,
                },
              };
            if (t instanceof qn)
              return {
                bytesValue: Be(e.C, t._byteString),
              };
            if (t instanceof Pn) {
              const n = e.databaseId,
                r = t.firestore._databaseId;
              if (!r.isEqual(n))
                throw e.at(
                  `Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`
                );
              return {
                referenceValue: We(
                  t.firestore._databaseId || e.databaseId,
                  t._key.path
                ),
              };
            }
            throw e.at(`Unsupported field value: ${ut(t)}`);
          })(
            /**
             * Checks whether an object looks like a JSON object that should be converted
             * into a struct. Normal class/prototype instances are considered to look like
             * JSON objects since they should be converted to a struct value. Arrays, Dates,
             * GeoPoints, etc. are not considered to look like JSON objects since they map
             * to specific FieldValue types other than ObjectValue.
             */ t,
            e
          );
        }

        function sr(t, e) {
          const n = {};
          return (
            !(function (t) {
              for (const e in t)
                if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
              return !0;
            })(
              /**
               * @license
               * Copyright 2020 Google LLC
               *
               * Licensed under the Apache License, Version 2.0 (the "License");
               * you may not use this file except in compliance with the License.
               * You may obtain a copy of the License at
               *
               *   http://www.apache.org/licenses/LICENSE-2.0
               *
               * Unless required by applicable law or agreed to in writing, software
               * distributed under the License is distributed on an "AS IS" BASIS,
               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
               * See the License for the specific language governing permissions and
               * limitations under the License.
               */
              /** Converts a Base64 encoded string to a binary string. */ t
            )
              ? Et(t, (t, r) => {
                  const s = rr(r, e.st(t));
                  null != s && (n[t] = s);
                })
              : // If we encounter an empty object, we explicitly add it to the update
                // mask to ensure that the server creates a map entry.
                e.path && e.path.length > 0 && e.fieldMask.push(e.path),
            {
              mapValue: {
                fields: n,
              },
            }
          );
        }

        function ir(t) {
          return !(
            "object" != typeof t ||
            null === t ||
            t instanceof Array ||
            t instanceof Date ||
            t instanceof Vt ||
            t instanceof Ln ||
            t instanceof qn ||
            t instanceof Pn ||
            t instanceof Cn
          );
        }

        function or(t, e, n) {
          if (
            !ir(n) ||
            !(function (t) {
              return (
                "object" == typeof t &&
                null !== t &&
                (Object.getPrototypeOf(t) === Object.prototype ||
                  null === Object.getPrototypeOf(t))
              );
            })(n)
          ) {
            const r = ut(n);
            throw "an object" === r
              ? e.at(t + " a custom object")
              : e.at(t + " " + r);
          }
        }

        /**
         * Helper that calls fromDotSeparatedString() but wraps any error thrown.
         */ function ur(t, e, n) {
          if (
            // If required, replace the FieldPath Compat class with with the firestore-exp
            // FieldPath.
            (e = (0,
            _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(
              e
            )) instanceof On
          )
            return e._internalPath;
          if ("string" == typeof e) return ar(t, e);
          throw hr(
            "Field path arguments must be of type string or ",
            t,
            /* hasConverter= */ !1,
            /* path= */ void 0,
            n
          );
        }

        /**
         * Matches any characters in a field path string that are reserved.
         */ const cr = new RegExp("[~\\*/\\[\\]]");

        /**
         * Wraps fromDotSeparatedString with an error message about the method that
         * was thrown.
         * @param methodName - The publicly visible method name
         * @param path - The dot-separated string form of a field path which will be
         * split on dots.
         * @param targetDoc - The document against which the field path will be
         * evaluated.
         */ function ar(t, e, n) {
          if (e.search(cr) >= 0)
            throw hr(
              `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
              t,
              /* hasConverter= */ !1,
              /* path= */ void 0,
              n
            );
          try {
            return new On(...e.split("."))._internalPath;
          } catch (r) {
            throw hr(
              `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
              t,
              /* hasConverter= */ !1,
              /* path= */ void 0,
              n
            );
          }
        }

        function hr(t, e, n, r, s) {
          const i = r && !r.isEmpty(),
            o = void 0 !== s;
          let u = `Function ${e}() called with invalid data`;
          n && (u += " (via `toFirestore()`)"), (u += ". ");
          let c = "";
          return (
            (i || o) &&
              ((c += " (found"),
              i && (c += ` in field ${r}`),
              o && (c += ` in document ${s}`),
              (c += ")")),
            new U(P, u + t + c)
          );
        }

        /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */ function lr(
          t,
          e
        ) {
          return t.some((t) => t.isEqual(e));
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * A `DocumentSnapshot` contains data read from a document in your Firestore
         * database. The data can be extracted with `.data()` or `.get(<field>)` to
         * get a specific field.
         *
         * For a `DocumentSnapshot` that points to a non-existing document, any data
         * access will return 'undefined'. You can use the `exists()` method to
         * explicitly verify a document's existence.
         */ class fr {
          // Note: This class is stripped down version of the DocumentSnapshot in
          // the legacy SDK. The changes are:
          // - No support for SnapshotMetadata.
          // - No support for SnapshotOptions.
          /** @hideconstructor protected */
          constructor(t, e, n, r, s) {
            (this._firestore = t),
              (this._userDataWriter = e),
              (this._key = n),
              (this._document = r),
              (this._converter = s);
          }
          /** Property of the `DocumentSnapshot` that provides the document's ID. */ get id() {
            return this._key.path.lastSegment();
          }
          /**
           * The `DocumentReference` for the document included in the `DocumentSnapshot`.
           */ get ref() {
            return new Pn(this._firestore, this._converter, this._key);
          }
          /**
           * Signals whether or not the document at the snapshot's location exists.
           *
           * @returns true if the document exists.
           */ exists() {
            return null !== this._document;
          }
          /**
           * Retrieves all fields in the document as an `Object`. Returns `undefined` if
           * the document doesn't exist.
           *
           * @returns An `Object` containing all fields in the document or `undefined`
           * if the document doesn't exist.
           */ data() {
            if (this._document) {
              if (this._converter) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                const t = new dr(
                  this._firestore,
                  this._userDataWriter,
                  this._key,
                  this._document,
                  /* converter= */ null
                );
                return this._converter.fromFirestore(t);
              }
              return this._userDataWriter.convertValue(
                this._document.data.value
              );
            }
          }
          /**
           * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
           * document or field doesn't exist.
           *
           * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
           * field.
           * @returns The data at the specified field location or undefined if no such
           * field exists in the document.
           */
          // We are using `any` here to avoid an explicit cast by our users.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          get(t) {
            if (this._document) {
              const e = this._document.data.field(
                pr("DocumentSnapshot.get", t)
              );
              if (null !== e) return this._userDataWriter.convertValue(e);
            }
          }
        }

        /**
         * A `QueryDocumentSnapshot` contains data read from a document in your
         * Firestore database as part of a query. The document is guaranteed to exist
         * and its data can be extracted with `.data()` or `.get(<field>)` to get a
         * specific field.
         *
         * A `QueryDocumentSnapshot` offers the same API surface as a
         * `DocumentSnapshot`. Since query results contain only existing documents, the
         * `exists` property will always be true and `data()` will never return
         * 'undefined'.
         */ class dr extends fr {
          /**
           * Retrieves all fields in the document as an `Object`.
           *
           * @override
           * @returns An `Object` containing all fields in the document.
           */
          data() {
            return super.data();
          }
        }

        /**
         * A `QuerySnapshot` contains zero or more `DocumentSnapshot` objects
         * representing the results of a query. The documents can be accessed as an
         * array via the `docs` property or enumerated using the `forEach` method. The
         * number of documents can be determined via the `empty` and `size`
         * properties.
         */ class wr {
          /** @hideconstructor */
          constructor(t, e) {
            (this._docs = e), (this.query = t);
          }
          /** An array of all the documents in the `QuerySnapshot`. */ get docs() {
            return [...this._docs];
          }
          /** The number of documents in the `QuerySnapshot`. */ get size() {
            return this.docs.length;
          }
          /** True if there are no documents in the `QuerySnapshot`. */ get empty() {
            return 0 === this.docs.length;
          }
          /**
           * Enumerates all of the documents in the `QuerySnapshot`.
           *
           * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
           * each document in the snapshot.
           * @param thisArg - The `this` binding for the callback.
           */ forEach(t, e) {
            this._docs.forEach(t, e);
          }
        }

        /**
         * Returns true if the provided snapshots are equal.
         *
         * @param left - A snapshot to compare.
         * @param right - A snapshot to compare.
         * @returns true if the snapshots are equal.
         */ function mr(t, e) {
          return (
            (t = (0,
            _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(t)),
            (e = (0,
            _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(e)),
            t instanceof fr && e instanceof fr
              ? t._firestore === e._firestore &&
                t._key.isEqual(e._key) &&
                (null === t._document
                  ? null === e._document
                  : t._document.isEqual(e._document)) &&
                t._converter === e._converter
              : t instanceof wr &&
                e instanceof wr &&
                Sn(t.query, e.query) &&
                vt(t.docs, e.docs, mr)
          );
        }

        /**
         * Helper that calls `fromDotSeparatedString()` but wraps any error thrown.
         */ function pr(t, e) {
          return "string" == typeof e
            ? ar(t, e)
            : e instanceof On
            ? e._internalPath
            : e._delegate._internalPath;
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * An `AppliableConstraint` is an abstraction of a constraint that can be applied
         * to a Firestore query.
         */
        class yr {}

        /**
         * A `QueryConstraint` is used to narrow the set of documents returned by a
         * Firestore query. `QueryConstraint`s are created by invoking {@link where},
         * {@link orderBy}, {@link startAt}, {@link startAfter}, {@link
         * endBefore}, {@link endAt}, {@link limit}, {@link limitToLast} and
         * can then be passed to {@link query} to create a new query instance that
         * also contains this `QueryConstraint`.
         */ class gr extends yr {}

        function _r(t, e, ...n) {
          let r = [];
          e instanceof yr && r.push(e),
            (r = r.concat(n)),
            (function (t) {
              const e = t.filter((t) => t instanceof Er).length,
                n = t.filter((t) => t instanceof vr).length;
              if (e > 1 || (e > 0 && n > 0))
                throw new U(
                  P,
                  "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`."
                );
            })(
              /**
               * @license
               * Copyright 2020 Google LLC
               *
               * Licensed under the Apache License, Version 2.0 (the "License");
               * you may not use this file except in compliance with the License.
               * You may obtain a copy of the License at
               *
               *   http://www.apache.org/licenses/LICENSE-2.0
               *
               * Unless required by applicable law or agreed to in writing, software
               * distributed under the License is distributed on an "AS IS" BASIS,
               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
               * See the License for the specific language governing permissions and
               * limitations under the License.
               */
              /**
               * Converts Firestore's internal types to the JavaScript types that we expose
               * to the user.
               *
               * @internal
               */ r
            );
          for (const e of r) t = e._apply(t);
          return t;
        }

        /**
         * A `QueryFieldFilterConstraint` is used to narrow the set of documents returned by
         * a Firestore query by filtering on one or more document fields.
         * `QueryFieldFilterConstraint`s are created by invoking {@link where} and can then
         * be passed to {@link query} to create a new query instance that also contains
         * this `QueryFieldFilterConstraint`.
         */ class vr extends gr {
          /**
           * @internal
           */
          constructor(t, e, n) {
            super(),
              (this._field = t),
              (this._op = e),
              (this._value = n),
              /** The type of this query constraint */
              (this.type = "where");
          }
          static _create(t, e, n) {
            return new vr(t, e, n);
          }
          _apply(t) {
            const e = this._parse(t);
            return (
              Lr(t._query, e), new Vn(t.firestore, t.converter, Ie(t._query, e))
            );
          }
          _parse(t) {
            const e = Wn(t.firestore),
              n = (function (t, e, n, r, s, i, o) {
                let u;
                if (s.isKeyField()) {
                  if (
                    "array-contains" /* Operator.ARRAY_CONTAINS */ === i ||
                    "array-contains-any" /* Operator.ARRAY_CONTAINS_ANY */ === i
                  )
                    throw new U(
                      P,
                      `Invalid Query. You can't perform '${i}' queries on documentId().`
                    );
                  if (
                    "in" /* Operator.IN */ === i ||
                    "not-in" /* Operator.NOT_IN */ === i
                  ) {
                    Cr(o, i);
                    const e = [];
                    for (const n of o) e.push(kr(r, t, n));
                    u = {
                      arrayValue: {
                        values: e,
                      },
                    };
                  } else u = kr(r, t, o);
                } else
                  ("in" /* Operator.IN */ !== i &&
                    "not-in" /* Operator.NOT_IN */ !== i &&
                    "array-contains-any" /* Operator.ARRAY_CONTAINS_ANY */ !==
                      i) ||
                    Cr(o, i),
                    (u = nr(
                      n,
                      e,
                      o,
                      /* allowArrays= */ "in" /* Operator.IN */ === i ||
                        "not-in" /* Operator.NOT_IN */ === i
                    ));
                return Gt.create(s, i, u);
              })(
                t._query,
                "where",
                e,
                t.firestore._databaseId,
                this._field,
                this._op,
                this._value
              );
            return n;
          }
        }

        /**
         * Creates a {@link QueryFieldFilterConstraint} that enforces that documents
         * must contain the specified field and that the value should satisfy the
         * relation constraint provided.
         *
         * @param fieldPath - The path to compare
         * @param opStr - The operation string (e.g "&lt;", "&lt;=", "==", "&lt;",
         *   "&lt;=", "!=").
         * @param value - The value for comparison
         * @returns The created {@link QueryFieldFilterConstraint}.
         */ function br(t, e, n) {
          const r = e,
            s = pr("where", t);
          return vr._create(s, r, n);
        }

        /**
         * A `QueryCompositeFilterConstraint` is used to narrow the set of documents
         * returned by a Firestore query by performing the logical OR or AND of multiple
         * {@link QueryFieldFilterConstraint}s or {@link QueryCompositeFilterConstraint}s.
         * `QueryCompositeFilterConstraint`s are created by invoking {@link or} or
         * {@link and} and can then be passed to {@link query} to create a new query
         * instance that also contains the `QueryCompositeFilterConstraint`.
         * @internal TODO remove this internal tag with OR Query support in the server
         */ class Er extends yr {
          /**
           * @internal
           */
          constructor(
            /** The type of this query constraint */
            t,
            e
          ) {
            super(), (this.type = t), (this._queryConstraints = e);
          }
          static _create(t, e) {
            return new Er(t, e);
          }
          _parse(t) {
            const e = this._queryConstraints
              .map((e) => e._parse(t))
              .filter((t) => t.getFilters().length > 0);
            return 1 === e.length ? e[0] : Kt.create(e, this._getOperator());
          }
          _apply(t) {
            const e = this._parse(t);
            return 0 === e.getFilters().length
              ? t
              : ((function (t, e) {
                  let n = t;
                  const r = e.getFlattenedFilters();
                  for (const t of r) Lr(n, t), (n = Ie(n, t));
                })(
                  // Checks if any of the provided filter operators are included in the given list of filters and
                  // returns the first one that is, or null if none are.
                  t._query,
                  e
                ),
                new Vn(t.firestore, t.converter, Ie(t._query, e)));
          }
          _getQueryConstraints() {
            return this._queryConstraints;
          }
          _getOperator() {
            return "and" === this.type
              ? "and" /* CompositeOperator.AND */
              : "or" /* CompositeOperator.OR */;
          }
        }

        /**
         * Creates a {@link QueryCompositeFilterConstraint} that performs a logical OR
         * of all the provided {@link QueryFilterConstraint}s.
         *
         * @param queryConstraints - Optional. The {@link QueryFilterConstraint}s
         * for OR operation. These must be created with calls to {@link where},
         * {@link or}, or {@link and}.
         * @returns The created {@link QueryCompositeFilterConstraint}.
         * @internal TODO remove this internal tag with OR Query support in the server
         */ function Ir(...t) {
          // Only support QueryFilterConstraints
          return (
            t.forEach((t) => Ur("or", t)),
            Er._create("or" /* CompositeOperator.OR */, t)
          );
        }

        /**
         * Creates a {@link QueryCompositeFilterConstraint} that performs a logical AND
         * of all the provided {@link QueryFilterConstraint}s.
         *
         * @param queryConstraints - Optional. The {@link QueryFilterConstraint}s
         * for AND operation. These must be created with calls to {@link where},
         * {@link or}, or {@link and}.
         * @returns The created {@link QueryCompositeFilterConstraint}.
         * @internal TODO remove this internal tag with OR Query support in the server
         */ function Tr(...t) {
          // Only support QueryFilterConstraints
          return (
            t.forEach((t) => Ur("and", t)),
            Er._create("and" /* CompositeOperator.AND */, t)
          );
        }

        /**
         * A `QueryOrderByConstraint` is used to sort the set of documents returned by a
         * Firestore query. `QueryOrderByConstraint`s are created by invoking
         * {@link orderBy} and can then be passed to {@link query} to create a new query
         * instance that also contains this `QueryOrderByConstraint`.
         *
         * Note: Documents that do not contain the orderBy field will not be present in
         * the query result.
         */ class Ar extends gr {
          /**
           * @internal
           */
          constructor(t, e) {
            super(),
              (this._field = t),
              (this._direction = e),
              /** The type of this query constraint */
              (this.type = "orderBy");
          }
          static _create(t, e) {
            return new Ar(t, e);
          }
          _apply(t) {
            const e = (function (t, e, n) {
              if (null !== t.startAt)
                throw new U(
                  P,
                  "Invalid query. You must not call startAt() or startAfter() before calling orderBy()."
                );
              if (null !== t.endAt)
                throw new U(
                  P,
                  "Invalid query. You must not call endAt() or endBefore() before calling orderBy()."
                );
              const r = new se(e, n);
              return (
                (function (t, e) {
                  if (null === ge(t)) {
                    // This is the first order by. It must match any inequality.
                    const n = _e(t);
                    null !== n && Mr(t, n, e.field);
                  }
                })(t, r),
                r
              );
            })(
              /**
               * Create a `Bound` from a query and a document.
               *
               * Note that the `Bound` will always include the key of the document
               * and so only the provided document will compare equal to the returned
               * position.
               *
               * Will throw if the document does not contain all fields of the order by
               * of the query or if any of the fields in the order by are an uncommitted
               * server timestamp.
               */ t._query,
              this._field,
              this._direction
            );
            return new Vn(
              t.firestore,
              t.converter,
              (function (t, e) {
                // TODO(dimond): validate that orderBy does not list the same key twice.
                const n = t.explicitOrderBy.concat([e]);
                return new ye(
                  t.path,
                  t.collectionGroup,
                  n,
                  t.filters.slice(),
                  t.limit,
                  t.limitType,
                  t.startAt,
                  t.endAt
                );
              })(t._query, e)
            );
          }
        }

        /**
         * Creates a {@link QueryOrderByConstraint} that sorts the query result by the
         * specified field, optionally in descending order instead of ascending.
         *
         * Note: Documents that do not contain the specified field will not be present
         * in the query result.
         *
         * @param fieldPath - The field to sort by.
         * @param directionStr - Optional direction to sort by ('asc' or 'desc'). If
         * not specified, order will be ascending.
         * @returns The created {@link QueryOrderByConstraint}.
         */ function Rr(t, e = "asc") {
          const n = e,
            r = pr("orderBy", t);
          return Ar._create(r, n);
        }

        /**
         * A `QueryLimitConstraint` is used to limit the number of documents returned by
         * a Firestore query.
         * `QueryLimitConstraint`s are created by invoking {@link limit} or
         * {@link limitToLast} and can then be passed to {@link query} to create a new
         * query instance that also contains this `QueryLimitConstraint`.
         */ class Pr extends gr {
          /**
           * @internal
           */
          constructor(
            /** The type of this query constraint */
            t,
            e,
            n
          ) {
            super(), (this.type = t), (this._limit = e), (this._limitType = n);
          }
          static _create(t, e, n) {
            return new Pr(t, e, n);
          }
          _apply(t) {
            return new Vn(
              t.firestore,
              t.converter,
              (function (t, e, n) {
                return new ye(
                  t.path,
                  t.collectionGroup,
                  t.explicitOrderBy.slice(),
                  t.filters.slice(),
                  e,
                  n,
                  t.startAt,
                  t.endAt
                );
              })(t._query, this._limit, this._limitType)
            );
          }
        }

        /**
         * Creates a {@link QueryLimitConstraint} that only returns the first matching
         * documents.
         *
         * @param limit - The maximum number of items to return.
         * @returns The created {@link QueryLimitConstraint}.
         */ function Vr(t) {
          return (
            at("limit", t), Pr._create("limit", t, "F" /* LimitType.First */)
          );
        }

        /**
         * Creates a {@link QueryLimitConstraint} that only returns the last matching
         * documents.
         *
         * You must specify at least one `orderBy` clause for `limitToLast` queries,
         * otherwise an exception will be thrown during execution.
         *
         * @param limit - The maximum number of items to return.
         * @returns The created {@link QueryLimitConstraint}.
         */ function $r(t) {
          return (
            at("limitToLast", t),
            Pr._create("limitToLast", t, "L" /* LimitType.Last */)
          );
        }

        /**
         * A `QueryStartAtConstraint` is used to exclude documents from the start of a
         * result set returned by a Firestore query.
         * `QueryStartAtConstraint`s are created by invoking {@link (startAt:1)} or
         * {@link (startAfter:1)} and can then be passed to {@link query} to create a
         * new query instance that also contains this `QueryStartAtConstraint`.
         */ class Nr extends gr {
          /**
           * @internal
           */
          constructor(
            /** The type of this query constraint */
            t,
            e,
            n
          ) {
            super(),
              (this.type = t),
              (this._docOrFields = e),
              (this._inclusive = n);
          }
          static _create(t, e, n) {
            return new Nr(t, e, n);
          }
          _apply(t) {
            const e = Or(t, this.type, this._docOrFields, this._inclusive);
            return new Vn(
              t.firestore,
              t.converter,
              (function (t, e) {
                return new ye(
                  t.path,
                  t.collectionGroup,
                  t.explicitOrderBy.slice(),
                  t.filters.slice(),
                  t.limit,
                  t.limitType,
                  e,
                  t.endAt
                );
              })(t._query, e)
            );
          }
        }

        function Dr(...t) {
          return Nr._create("startAt", t, /*inclusive=*/ !0);
        }

        function Fr(...t) {
          return Nr._create("startAfter", t, /*inclusive=*/ !1);
        }

        /**
         * A `QueryEndAtConstraint` is used to exclude documents from the end of a
         * result set returned by a Firestore query.
         * `QueryEndAtConstraint`s are created by invoking {@link (endAt:1)} or
         * {@link (endBefore:1)} and can then be passed to {@link query} to create a new
         * query instance that also contains this `QueryEndAtConstraint`.
         */ class xr extends gr {
          /**
           * @internal
           */
          constructor(
            /** The type of this query constraint */
            t,
            e,
            n
          ) {
            super(),
              (this.type = t),
              (this._docOrFields = e),
              (this._inclusive = n);
          }
          static _create(t, e, n) {
            return new xr(t, e, n);
          }
          _apply(t) {
            const e = Or(t, this.type, this._docOrFields, this._inclusive);
            return new Vn(
              t.firestore,
              t.converter,
              (function (t, e) {
                return new ye(
                  t.path,
                  t.collectionGroup,
                  t.explicitOrderBy.slice(),
                  t.filters.slice(),
                  t.limit,
                  t.limitType,
                  t.startAt,
                  e
                );
              })(t._query, e)
            );
          }
        }

        function Sr(...t) {
          return xr._create("endBefore", t, /*inclusive=*/ !1);
        }

        function qr(...t) {
          return xr._create("endAt", t, /*inclusive=*/ !0);
        }

        /** Helper function to create a bound from a document or fields */ function Or(
          t,
          e,
          n,
          r
        ) {
          if (
            ((n[0] = (0,
            _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(
              n[0]
            )),
            n[0] instanceof fr)
          )
            return (function (t, e, n, r, s) {
              if (!r)
                throw new U(
                  $,
                  `Can't use a DocumentSnapshot that doesn't exist for ${n}().`
                );
              const i = [];
              // Because people expect to continue/end a query at the exact document
              // provided, we need to use the implicit sort order rather than the explicit
              // sort order, because it's guaranteed to contain the document key. That way
              // the position becomes unambiguous and the query continues/ends exactly at
              // the provided document. Without the key (by using the explicit sort
              // orders), multiple documents could match the position, yielding duplicate
              // results.
              for (const n of be(t))
                if (n.field.isKeyField()) i.push(Ct(e, r.key));
                else {
                  const t = r.data.field(n.field);
                  if ($t(t))
                    throw new U(
                      P,
                      'Invalid query. You are trying to start or end a query using a document for which the field "' +
                        n.field +
                        '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)'
                    );
                  if (null === t) {
                    const t = n.field.canonicalString();
                    throw new U(
                      P,
                      `Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`
                    );
                  }
                  i.push(t);
                }
              return new Qt(i, s);
            })(
              /**
               * Converts a list of field values to a `Bound` for the given query.
               */ t._query,
              t.firestore._databaseId,
              e,
              n[0]._document,
              r
            );
          {
            const s = Wn(t.firestore);
            return (function (t, e, n, r, s, i) {
              // Use explicit order by's because it has to match the query the user made
              const o = t.explicitOrderBy;
              if (s.length > o.length)
                throw new U(
                  P,
                  `Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`
                );
              const u = [];
              for (let i = 0; i < s.length; i++) {
                const c = s[i];
                if (o[i].field.isKeyField()) {
                  if ("string" != typeof c)
                    throw new U(
                      P,
                      `Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`
                    );
                  if (!ve(t) && -1 !== c.indexOf("/"))
                    throw new U(
                      P,
                      `Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`
                    );
                  const n = t.path.child(tt.fromString(c));
                  if (!rt.isDocumentKey(n))
                    throw new U(
                      P,
                      `Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`
                    );
                  const s = new rt(n);
                  u.push(Ct(e, s));
                } else {
                  const t = nr(n, r, c);
                  u.push(t);
                }
              }
              return new Qt(u, i);
            })(
              /**
               * Parses the given `documentIdValue` into a `ReferenceValue`, throwing
               * appropriate errors if the value is anything other than a `DocumentReference`
               * or `string`, or if the string is malformed.
               */ t._query,
              t.firestore._databaseId,
              s,
              e,
              n,
              r
            );
          }
        }

        function kr(t, e, n) {
          if (
            "string" ==
            typeof (n = (0,
            _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(n))
          ) {
            if ("" === n)
              throw new U(
                P,
                "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string."
              );
            if (!ve(e) && -1 !== n.indexOf("/"))
              throw new U(
                P,
                `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`
              );
            const r = e.path.child(tt.fromString(n));
            if (!rt.isDocumentKey(r))
              throw new U(
                P,
                `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`
              );
            return Ct(t, new rt(r));
          }
          if (n instanceof Pn) return Ct(t, n._key);
          throw new U(
            P,
            `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ut(
              n
            )}.`
          );
        }

        /**
         * Validates that the value passed into a disjunctive filter satisfies all
         * array requirements.
         */ function Cr(t, e) {
          if (!Array.isArray(t) || 0 === t.length)
            throw new U(
              P,
              `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`
            );
          if (t.length > 10)
            throw new U(
              P,
              `Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`
            );
        }

        /**
         * Given an operator, returns the set of operators that cannot be used with it.
         *
         * Operators in a query must adhere to the following set of rules:
         * 1. Only one array operator is allowed.
         * 2. Only one disjunctive operator is allowed.
         * 3. `NOT_EQUAL` cannot be used with another `NOT_EQUAL` operator.
         * 4. `NOT_IN` cannot be used with array, disjunctive, or `NOT_EQUAL` operators.
         *
         * Array operators: `ARRAY_CONTAINS`, `ARRAY_CONTAINS_ANY`
         * Disjunctive operators: `IN`, `ARRAY_CONTAINS_ANY`, `NOT_IN`
         */ function Lr(t, e) {
          if (e.isInequality()) {
            const n = _e(t),
              r = e.field;
            if (null !== n && !n.isEqual(r))
              throw new U(
                P,
                `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`
              );
            const s = ge(t);
            null !== s && Mr(t, r, s);
          }
          const n = (function (t, e) {
            for (const n of t)
              for (const t of n.getFlattenedFilters())
                if (e.indexOf(t.op) >= 0) return t.op;
            return null;
          })(
            t.filters,
            (function (t) {
              switch (t) {
                case "!=" /* Operator.NOT_EQUAL */:
                  return [
                    "!=" /* Operator.NOT_EQUAL */,
                    "not-in" /* Operator.NOT_IN */,
                  ];

                case "array-contains" /* Operator.ARRAY_CONTAINS */:
                  return [
                    "array-contains" /* Operator.ARRAY_CONTAINS */,
                    "array-contains-any" /* Operator.ARRAY_CONTAINS_ANY */,
                    "not-in" /* Operator.NOT_IN */,
                  ];

                case "in" /* Operator.IN */:
                  return [
                    "array-contains-any" /* Operator.ARRAY_CONTAINS_ANY */,
                    "in" /* Operator.IN */,
                    "not-in" /* Operator.NOT_IN */,
                  ];

                case "array-contains-any" /* Operator.ARRAY_CONTAINS_ANY */:
                  return [
                    "array-contains" /* Operator.ARRAY_CONTAINS */,
                    "array-contains-any" /* Operator.ARRAY_CONTAINS_ANY */,
                    "in" /* Operator.IN */,
                    "not-in" /* Operator.NOT_IN */,
                  ];

                case "not-in" /* Operator.NOT_IN */:
                  return [
                    "array-contains" /* Operator.ARRAY_CONTAINS */,
                    "array-contains-any" /* Operator.ARRAY_CONTAINS_ANY */,
                    "in" /* Operator.IN */,
                    "not-in" /* Operator.NOT_IN */,
                    "!=" /* Operator.NOT_EQUAL */,
                  ];

                default:
                  return [];
              }
            })(e.op)
          );
          if (null !== n)
            // Special case when it's a duplicate op to give a slightly clearer error message.
            throw n === e.op
              ? new U(
                  P,
                  `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`
                )
              : new U(
                  P,
                  `Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`
                );
        }

        function Mr(t, e, n) {
          if (!n.isEqual(e))
            throw new U(
              P,
              `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`
            );
        }

        function Ur(t, e) {
          if (!(e instanceof vr || e instanceof Er))
            throw new U(
              P,
              `Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`
            );
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Converts custom model object of type T into `DocumentData` by applying the
         * converter if it exists.
         *
         * This function is used when converting user objects to `DocumentData`
         * because we want to provide the user with a more specific error message if
         * their `set()` or fails due to invalid data originating from a `toFirestore()`
         * call.
         */
        function jr(t, e, n) {
          let r;
          // Cast to `any` in order to satisfy the union type constraint on
          // toFirestore().
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return (
            (r = t
              ? n && (n.merge || n.mergeFields)
                ? t.toFirestore(e, n)
                : t.toFirestore(e)
              : e),
            r
          );
        }

        class Br extends class {
          convertValue(t, e = "none") {
            switch (xt(t)) {
              case 0 /* TypeOrder.NullValue */:
                return null;

              case 1 /* TypeOrder.BooleanValue */:
                return t.booleanValue;

              case 2 /* TypeOrder.NumberValue */:
                return Rt(t.integerValue || t.doubleValue);

              case 3 /* TypeOrder.TimestampValue */:
                return this.convertTimestamp(t.timestampValue);

              case 4 /* TypeOrder.ServerTimestampValue */:
                return this.convertServerTimestamp(t, e);

              case 5 /* TypeOrder.StringValue */:
                return t.stringValue;

              case 6 /* TypeOrder.BlobValue */:
                return this.convertBytes(Pt(t.bytesValue));

              case 7 /* TypeOrder.RefValue */:
                return this.convertReference(t.referenceValue);

              case 8 /* TypeOrder.GeoPointValue */:
                return this.convertGeoPoint(t.geoPointValue);

              case 9 /* TypeOrder.ArrayValue */:
                return this.convertArray(t.arrayValue, e);

              case 10 /* TypeOrder.ObjectValue */:
                return this.convertObject(t.mapValue, e);

              default:
                throw b();
            }
          }
          convertObject(t, e) {
            const n = {};
            return (
              Et(t.fields, (t, r) => {
                n[t] = this.convertValue(r, e);
              }),
              n
            );
          }
          convertGeoPoint(t) {
            return new Ln(Rt(t.latitude), Rt(t.longitude));
          }
          convertArray(t, e) {
            return (t.values || []).map((t) => this.convertValue(t, e));
          }
          convertServerTimestamp(t, e) {
            switch (e) {
              case "previous":
                const n = Nt(t);
                return null == n ? null : this.convertValue(n, e);

              case "estimate":
                return this.convertTimestamp(Dt(t));

              default:
                return null;
            }
          }
          convertTimestamp(t) {
            const e = At(t);
            return new Vt(e.seconds, e.nanos);
          }
          convertDocumentKey(t, e) {
            const n = tt.fromString(t);
            E(cn(n));
            const r = new X(n.get(1), n.get(3)),
              s = new rt(n.popFirst(5));
            return (
              r.isEqual(e) ||
                // TODO(b/64130202): Somehow support foreign references.
                g(
                  `Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`
                ),
              s
            );
          }
        } {
          constructor(t) {
            super(), (this.firestore = t);
          }
          convertBytes(t) {
            return new qn(t);
          }
          convertReference(t) {
            const e = this.convertDocumentKey(t, this.firestore._databaseId);
            return new Pn(this.firestore, /* converter= */ null, e);
          }
        }

        /**
         * Reads the document referred to by the specified document reference.
         *
         * All documents are directly fetched from the server, even if the document was
         * previously read or modified. Recent modifications are only reflected in the
         * retrieved `DocumentSnapshot` if they have already been applied by the
         * backend. If the client is offline, the read fails. If you like to use
         * caching or see local modifications, please use the full Firestore SDK.
         *
         * @param reference - The reference of the document to fetch.
         * @returns A Promise resolved with a `DocumentSnapshot` containing the current
         * document contents.
         */ function Qr(t) {
          const e = yn((t = ct(t, Pn)).firestore),
            n = new Br(t.firestore);
          return dn(e, [t._key]).then((e) => {
            E(1 === e.length);
            const r = e[0];
            return new fr(
              t.firestore,
              n,
              t._key,
              r.isFoundDocument() ? r : null,
              t.converter
            );
          });
        }

        /**
         * Executes the query and returns the results as a {@link QuerySnapshot}.
         *
         * All queries are executed directly by the server, even if the the query was
         * previously executed. Recent modifications are only reflected in the retrieved
         * results if they have already been applied by the backend. If the client is
         * offline, the operation fails. To see previously cached result and local
         * modifications, use the full Firestore SDK.
         *
         * @param query - The `Query` to execute.
         * @returns A Promise that will be resolved with the results of the query.
         */ function zr(t) {
          !(function (t) {
            if (
              "L" /* LimitType.Last */ === t.limitType &&
              0 === t.explicitOrderBy.length
            )
              throw new U(
                k,
                "limitToLast() queries require specifying at least one orderBy() clause"
              );
          })((t = ct(t, Vn))._query);
          const e = yn(t.firestore),
            n = new Br(t.firestore);
          return wn(e, t._query).then((e) => {
            const r = e.map(
              (e) => new dr(t.firestore, n, e.key, e, t.converter)
            );
            return (
              "L" /* LimitType.Last */ === t._query.limitType &&
                // Limit to last queries reverse the orderBy constraint that was
                // specified by the user. As such, we need to reverse the order of the
                // results to return the documents in the expected order.
                r.reverse(),
              new wr(t, r)
            );
          });
        }

        function Wr(t, e, n) {
          const r = jr((t = ct(t, Pn)).converter, e, n),
            s = Gn(
              Wn(t.firestore),
              "setDoc",
              t._key,
              r,
              null !== t.converter,
              n
            );
          return fn(yn(t.firestore), [s.toMutation(t._key, Fe.none())]);
        }

        function Gr(t, e, n, ...r) {
          const s = Wn((t = ct(t, Pn)).firestore);
          // For Compat types, we have to "extract" the underlying types before
          // performing validation.
          let i;
          i =
            "string" ==
              typeof (e = (0,
              _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(
                e
              )) || e instanceof On
              ? er(s, "updateDoc", t._key, e, n, r)
              : tr(s, "updateDoc", t._key, e);
          return fn(yn(t.firestore), [i.toMutation(t._key, Fe.exists(!0))]);
        }

        /**
         * Deletes the document referred to by the specified `DocumentReference`.
         *
         * The deletion will only be reflected in document reads that occur after the
         * returned promise resolves. If the client is offline, the
         * delete fails. If you would like to see local modifications or buffer writes
         * until the client is online, use the full Firestore SDK.
         *
         * @param reference - A reference to the document to delete.
         * @returns A `Promise` resolved once the document has been successfully
         * deleted from the backend.
         */ function Kr(t) {
          return fn(yn((t = ct(t, Pn)).firestore), [new Oe(t._key, Fe.none())]);
        }

        /**
         * Add a new document to specified `CollectionReference` with the given data,
         * assigning it a document ID automatically.
         *
         * The result of this write will only be reflected in document reads that occur
         * after the returned promise resolves. If the client is offline, the
         * write fails. If you would like to see local modifications or buffer writes
         * until the client is online, use the full Firestore SDK.
         *
         * @param reference - A reference to the collection to add this document to.
         * @param data - An Object containing the data for the new document.
         * @throws Error - If the provided input is not a valid Firestore document.
         * @returns A `Promise` resolved with a `DocumentReference` pointing to the
         * newly created document after it has been written to the backend.
         */ function Yr(t, e) {
          const n = Fn((t = ct(t, $n))),
            r = jr(t.converter, e),
            s = Gn(
              Wn(t.firestore),
              "addDoc",
              n._key,
              r,
              null !== n.converter,
              {}
            );
          return fn(yn(t.firestore), [
            s.toMutation(n._key, Fe.exists(!1)),
          ]).then(() => n);
        }

        /**
         * @license
         * Copyright 2022 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Calculates the number of documents in the result set of the given query,
         * without actually downloading the documents.
         *
         * Using this function to count the documents is efficient because only the
         * final count, not the documents' data, is downloaded. This function can even
         * count the documents if the result set would be prohibitively large to
         * download entirely (e.g. thousands of documents).
         *
         * @param query - The query whose result set size to calculate.
         * @returns A Promise that will be resolved with the count; the count can be
         * retrieved from `snapshot.data().count`, where `snapshot` is the
         * `AggregateQuerySnapshot` to which the returned Promise resolves.
         */ function Hr(t) {
          const e = ct(t.firestore, _n),
            n = yn(e),
            r = new Br(e);
          return new Rn(t, n, r).run();
        }

        /**
         * Compares two `AggregateQuerySnapshot` instances for equality.
         *
         * Two `AggregateQuerySnapshot` instances are considered "equal" if they have
         * underlying queries that compare equal, and the same data.
         *
         * @param left - The first `AggregateQuerySnapshot` to compare.
         * @param right - The second `AggregateQuerySnapshot` to compare.
         *
         * @returns `true` if the objects are "equal", as defined above, or `false`
         * otherwise.
         */ function Jr(t, e) {
          return (
            Sn(t.query, e.query) &&
            (0, _firebase_util__WEBPACK_IMPORTED_MODULE_3__.deepEqual)(
              t.data(),
              e.data()
            )
          );
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Returns a sentinel for use with {@link @firebase/firestore/lite#(updateDoc:1)} or
         * {@link @firebase/firestore/lite#(setDoc:1)} with `{merge: true}` to mark a field for deletion.
         */ function Xr() {
          return new Kn("deleteField");
        }

        /**
         * Returns a sentinel used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link @firebase/firestore/lite#(updateDoc:1)} to
         * include a server-generated timestamp in the written data.
         */ function Zr() {
          return new Hn("serverTimestamp");
        }

        /**
         * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
         * @firebase/firestore/lite#(updateDoc:1)} that tells the server to union the given elements with any array
         * value that already exists on the server. Each specified element that doesn't
         * already exist in the array will be added to the end. If the field being
         * modified is not already an array it will be overwritten with an array
         * containing exactly the specified elements.
         *
         * @param elements - The elements to union into the array.
         * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
         * `updateDoc()`.
         */ function ts(...t) {
          // NOTE: We don't actually parse the data until it's used in set() or
          // update() since we'd need the Firestore instance to do this.
          return new Jn("arrayUnion", t);
        }

        /**
         * Returns a special value that can be used with {@link (setDoc:1)} or {@link
         * updateDoc:1} that tells the server to remove the given elements from any
         * array value that already exists on the server. All instances of each element
         * specified will be removed from the array. If the field being modified is not
         * already an array it will be overwritten with an empty array.
         *
         * @param elements - The elements to remove from the array.
         * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
         * `updateDoc()`
         */ function es(...t) {
          // NOTE: We don't actually parse the data until it's used in set() or
          // update() since we'd need the Firestore instance to do this.
          return new Xn("arrayRemove", t);
        }

        /**
         * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
         * @firebase/firestore/lite#(updateDoc:1)} that tells the server to increment the field's current value by
         * the given value.
         *
         * If either the operand or the current field value uses floating point
         * precision, all arithmetic follows IEEE 754 semantics. If both values are
         * integers, values outside of JavaScript's safe number range
         * (`Number.MIN_SAFE_INTEGER` to `Number.MAX_SAFE_INTEGER`) are also subject to
         * precision loss. Furthermore, once processed by the Firestore backend, all
         * integer operations are capped between -2^63 and 2^63-1.
         *
         * If the current field value is not of type `number`, or if the field does not
         * yet exist, the transformation sets the field to the given value.
         *
         * @param n - The value to increment by.
         * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
         * `updateDoc()`
         */ function ns(t) {
          return new Zn("increment", t);
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * A write batch, used to perform multiple writes as a single atomic unit.
         *
         * A `WriteBatch` object can be acquired by calling {@link writeBatch}. It
         * provides methods for adding writes to the write batch. None of the writes
         * will be committed (or visible locally) until {@link WriteBatch.commit} is
         * called.
         */ class rs {
          /** @hideconstructor */
          constructor(t, e) {
            (this._firestore = t),
              (this._commitHandler = e),
              (this._mutations = []),
              (this._committed = !1),
              (this._dataReader = Wn(t));
          }
          set(t, e, n) {
            this._verifyNotCommitted();
            const r = ss(t, this._firestore),
              s = jr(r.converter, e, n),
              i = Gn(
                this._dataReader,
                "WriteBatch.set",
                r._key,
                s,
                null !== r.converter,
                n
              );
            return this._mutations.push(i.toMutation(r._key, Fe.none())), this;
          }
          update(t, e, n, ...r) {
            this._verifyNotCommitted();
            const s = ss(t, this._firestore);
            // For Compat types, we have to "extract" the underlying types before
            // performing validation.
            let i;
            return (
              (i =
                "string" ==
                  typeof (e = (0,
                  _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(
                    e
                  )) || e instanceof On
                  ? er(this._dataReader, "WriteBatch.update", s._key, e, n, r)
                  : tr(this._dataReader, "WriteBatch.update", s._key, e)),
              this._mutations.push(i.toMutation(s._key, Fe.exists(!0))),
              this
            );
          }
          /**
           * Deletes the document referred to by the provided {@link DocumentReference}.
           *
           * @param documentRef - A reference to the document to be deleted.
           * @returns This `WriteBatch` instance. Used for chaining method calls.
           */ delete(t) {
            this._verifyNotCommitted();
            const e = ss(t, this._firestore);
            return (
              (this._mutations = this._mutations.concat(
                new Oe(e._key, Fe.none())
              )),
              this
            );
          }
          /**
           * Commits all of the writes in this write batch as a single atomic unit.
           *
           * The result of these writes will only be reflected in document reads that
           * occur after the returned promise resolves. If the client is offline, the
           * write fails. If you would like to see local modifications or buffer writes
           * until the client is online, use the full Firestore SDK.
           *
           * @returns A `Promise` resolved once all of the writes in the batch have been
           * successfully written to the backend as an atomic unit (note that it won't
           * resolve while you're offline).
           */ commit() {
            return (
              this._verifyNotCommitted(),
              (this._committed = !0),
              this._mutations.length > 0
                ? this._commitHandler(this._mutations)
                : Promise.resolve()
            );
          }
          _verifyNotCommitted() {
            if (this._committed)
              throw new U(
                S,
                "A write batch can no longer be used after commit() has been called."
              );
          }
        }

        function ss(t, e) {
          if (
            (t = (0,
            _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(t))
              .firestore !== e
          )
            throw new U(
              P,
              "Provided document reference is from a different Firestore instance."
            );
          return t;
        }

        /**
         * Creates a write batch, used for performing multiple writes as a single
         * atomic operation. The maximum number of writes allowed in a single WriteBatch
         * is 500.
         *
         * The result of these writes will only be reflected in document reads that
         * occur after the returned promise resolves. If the client is offline, the
         * write fails. If you would like to see local modifications or buffer writes
         * until the client is online, use the full Firestore SDK.
         *
         * @returns A `WriteBatch` that can be used to atomically execute multiple
         * writes.
         */ function is(t) {
          const e = yn((t = ct(t, _n)));
          return new rs(t, (t) => fn(e, t));
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Internal transaction object responsible for accumulating the mutations to
         * perform and the base versions for any documents read.
         */ class os {
          constructor(t) {
            (this.datastore = t),
              // The version of each document that was read during this transaction.
              (this.readVersions = new Map()),
              (this.mutations = []),
              (this.committed = !1),
              /**
               * A deferred usage error that occurred previously in this transaction that
               * will cause the transaction to fail once it actually commits.
               */
              (this.lastWriteError = null),
              /**
               * Set of documents that have been written in the transaction.
               *
               * When there's more than one write to the same key in a transaction, any
               * writes after the first are handled differently.
               */
              (this.writtenDocs = new Set());
          }
          async lookup(t) {
            if ((this.ensureCommitNotCalled(), this.mutations.length > 0))
              throw new U(
                P,
                "Firestore transactions require all reads to be executed before all writes."
              );
            const e = await dn(this.datastore, t);
            return e.forEach((t) => this.recordVersion(t)), e;
          }
          set(t, e) {
            this.write(e.toMutation(t, this.precondition(t))),
              this.writtenDocs.add(t.toString());
          }
          update(t, e) {
            try {
              this.write(e.toMutation(t, this.preconditionForUpdate(t)));
            } catch (t) {
              this.lastWriteError = t;
            }
            this.writtenDocs.add(t.toString());
          }
          delete(t) {
            this.write(new Oe(t, this.precondition(t))),
              this.writtenDocs.add(t.toString());
          }
          async commit() {
            if ((this.ensureCommitNotCalled(), this.lastWriteError))
              throw this.lastWriteError;
            const t = this.readVersions;
            // For each mutation, note that the doc was written.
            this.mutations.forEach((e) => {
              t.delete(e.key.toString());
            }),
              // For each document that was read but not written to, we want to perform
              // a `verify` operation.
              t.forEach((t, e) => {
                const n = rt.fromPath(e);
                this.mutations.push(new ke(n, this.precondition(n)));
              }),
              await fn(this.datastore, this.mutations),
              (this.committed = !0);
          }
          recordVersion(t) {
            let e;
            if (t.isFoundDocument()) e = t.version;
            else {
              if (!t.isNoDocument()) throw b();
              // Represent a deleted doc using SnapshotVersion.min().
              e = oe.min();
            }
            const n = this.readVersions.get(t.key.toString());
            if (n) {
              if (!e.isEqual(n))
                // This transaction will fail no matter what.
                throw new U(q, "Document version changed between two reads.");
            } else this.readVersions.set(t.key.toString(), e);
          }
          /**
           * Returns the version of this document when it was read in this transaction,
           * as a precondition, or no precondition if it was not read.
           */ precondition(t) {
            const e = this.readVersions.get(t.toString());
            return !this.writtenDocs.has(t.toString()) && e
              ? e.isEqual(oe.min())
                ? Fe.exists(!1)
                : Fe.updateTime(e)
              : Fe.none();
          }
          /**
           * Returns the precondition for a document if the operation is an update.
           */ preconditionForUpdate(t) {
            const e = this.readVersions.get(t.toString());
            // The first time a document is written, we want to take into account the
            // read time and existence
            if (!this.writtenDocs.has(t.toString()) && e) {
              if (e.isEqual(oe.min()))
                // The document doesn't exist, so fail the transaction.
                // This has to be validated locally because you can't send a
                // precondition that a document does not exist without changing the
                // semantics of the backend write to be an insert. This is the reverse
                // of what we want, since we want to assert that the document doesn't
                // exist but then send the update and have it fail. Since we can't
                // express that to the backend, we have to validate locally.
                // Note: this can change once we can send separate verify writes in the
                // transaction.
                throw new U(P, "Can't update a document that doesn't exist.");
              // Document exists, base precondition on document update time.
              return Fe.updateTime(e);
            }
            // Document was not read, so we just use the preconditions for a blind
            // update.
            return Fe.exists(!0);
          }
          write(t) {
            this.ensureCommitNotCalled(), this.mutations.push(t);
          }
          ensureCommitNotCalled() {}
        }

        /**
         * @license
         * Copyright 2022 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ const us = {
          maxAttempts: 5,
        };

        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * TransactionRunner encapsulates the logic needed to run and retry transactions
         * with backoff.
         */
        class cs {
          constructor(t, e, n, r, s) {
            (this.asyncQueue = t),
              (this.datastore = e),
              (this.options = n),
              (this.updateFunction = r),
              (this.deferred = s),
              (this.yt = n.maxAttempts),
              (this.gt = new hn(
                this.asyncQueue,
                "transaction_retry" /* TimerId.TransactionRetry */
              ));
          }
          /** Runs the transaction and sets the result on deferred. */ run() {
            (this.yt -= 1), this._t();
          }
          _t() {
            this.gt.H(async () => {
              const t = new os(this.datastore),
                e = this.vt(t);
              e &&
                e
                  .then((e) => {
                    this.asyncQueue.enqueueAndForget(() =>
                      t
                        .commit()
                        .then(() => {
                          this.deferred.resolve(e);
                        })
                        .catch((t) => {
                          this.bt(t);
                        })
                    );
                  })
                  .catch((t) => {
                    this.bt(t);
                  });
            });
          }
          vt(t) {
            try {
              const e = this.updateFunction(t);
              return !ht(e) && e.catch && e.then
                ? e
                : (this.deferred.reject(
                    Error("Transaction callback must return a Promise")
                  ),
                  null);
            } catch (t) {
              // Do not retry errors thrown by user provided updateFunction.
              return this.deferred.reject(t), null;
            }
          }
          bt(t) {
            this.yt > 0 && this.Et(t)
              ? ((this.yt -= 1),
                this.asyncQueue.enqueueAndForget(
                  () => (this._t(), Promise.resolve())
                ))
              : this.deferred.reject(t);
          }
          Et(t) {
            if ("FirebaseError" === t.name) {
              // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
              // non-matching document versions with ABORTED. These errors should be retried.
              const e = t.code;
              return (
                "aborted" === e ||
                "failed-precondition" === e ||
                "already-exists" === e ||
                !(
                  /**
                   * Determines whether an error code represents a permanent error when received
                   * in response to a non-write operation.
                   *
                   * See isPermanentWriteError for classifying write errors.
                   */
                  (function (t) {
                    switch (t) {
                      default:
                        return b();

                      case A:
                      case R:
                      case V:
                      case x:
                      case C:
                      case L:
                      // Unauthenticated means something went wrong with our token and we need
                      // to retry with new credentials which will happen automatically.
                      case F:
                        return !1;

                      case P:
                      case $:
                      case N:
                      case D:
                      case S:
                      // Aborted might be retried in some scenarios, but that is dependant on
                      // the context and should handled individually by the calling code.
                      // See https://cloud.google.com/apis/design/errors.
                      case q:
                      case O:
                      case k:
                      case M:
                        return !0;
                    }
                  })(e)
                )
              );
            }
            return !1;
          }
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /** The Platform's 'document' implementation or null if not available. */ function as() {
          // `document` is not always available, e.g. in ReactNative and WebWorkers.
          // eslint-disable-next-line no-restricted-globals
          return "undefined" != typeof document ? document : null;
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Represents an operation scheduled to be run in the future on an AsyncQueue.
         *
         * It is created via DelayedOperation.createAndSchedule().
         *
         * Supports cancellation (via cancel()) and early execution (via skipDelay()).
         *
         * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
         * in newer versions of TypeScript defines `finally`, which is not available in
         * IE.
         */ class hs {
          constructor(t, e, n, r, s) {
            (this.asyncQueue = t),
              (this.timerId = e),
              (this.targetTimeMs = n),
              (this.op = r),
              (this.removalCallback = s),
              (this.deferred = new j()),
              (this.then = this.deferred.promise.then.bind(
                this.deferred.promise
              )),
              // It's normal for the deferred promise to be canceled (due to cancellation)
              // and so we attach a dummy catch callback to avoid
              // 'UnhandledPromiseRejectionWarning' log spam.
              this.deferred.promise.catch((t) => {});
          }
          /**
           * Creates and returns a DelayedOperation that has been scheduled to be
           * executed on the provided asyncQueue after the provided delayMs.
           *
           * @param asyncQueue - The queue to schedule the operation on.
           * @param id - A Timer ID identifying the type of operation this is.
           * @param delayMs - The delay (ms) before the operation should be scheduled.
           * @param op - The operation to run.
           * @param removalCallback - A callback to be called synchronously once the
           *   operation is executed or canceled, notifying the AsyncQueue to remove it
           *   from its delayedOperations list.
           *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
           *   the DelayedOperation class public.
           */ static createAndSchedule(t, e, n, r, s) {
            const i = Date.now() + n,
              o = new hs(t, e, i, r, s);
            return o.start(n), o;
          }
          /**
           * Starts the timer. This is called immediately after construction by
           * createAndSchedule().
           */ start(t) {
            this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t);
          }
          /**
           * Queues the operation to run immediately (if it hasn't already been run or
           * canceled).
           */ skipDelay() {
            return this.handleDelayElapsed();
          }
          /**
           * Cancels the operation if it hasn't already been executed or canceled. The
           * promise will be rejected.
           *
           * As long as the operation has not yet been run, calling cancel() provides a
           * guarantee that the operation will not be run.
           */ cancel(t) {
            null !== this.timerHandle &&
              (this.clearTimeout(),
              this.deferred.reject(
                new U(A, "Operation cancelled" + (t ? ": " + t : ""))
              ));
          }
          handleDelayElapsed() {
            this.asyncQueue.enqueueAndForget(() =>
              null !== this.timerHandle
                ? (this.clearTimeout(),
                  this.op().then((t) => this.deferred.resolve(t)))
                : Promise.resolve()
            );
          }
          clearTimeout() {
            null !== this.timerHandle &&
              (this.removalCallback(this),
              clearTimeout(this.timerHandle),
              (this.timerHandle = null));
          }
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ class ls {
          constructor() {
            // The last promise in the queue.
            (this.It = Promise.resolve()),
              // A list of retryable operations. Retryable operations are run in order and
              // retried with backoff.
              (this.Tt = []),
              // Is this AsyncQueue being shut down? Once it is set to true, it will not
              // be changed again.
              (this.At = !1),
              // Operations scheduled to be queued in the future. Operations are
              // automatically removed after they are run or canceled.
              (this.Rt = []),
              // visible for testing
              (this.Pt = null),
              // Flag set while there's an outstanding AsyncQueue operation, used for
              // assertion sanity-checks.
              (this.Vt = !1),
              // Enabled during shutdown on Safari to prevent future access to IndexedDB.
              (this.$t = !1),
              // List of TimerIds to fast-forward delays for.
              (this.Nt = []),
              // Backoff timer used to schedule retries for retryable operations
              (this.gt = new hn(
                this,
                "async_queue_retry" /* TimerId.AsyncQueueRetry */
              )),
              // Visibility handler that triggers an immediate retry of all retryable
              // operations. Meant to speed up recovery when we regain file system access
              // after page comes into foreground.
              (this.Dt = () => {
                const t = as();
                t &&
                  y(
                    "AsyncQueue",
                    "Visibility state changed to " + t.visibilityState
                  ),
                  this.gt.X();
              });
            const t = as();
            t &&
              "function" == typeof t.addEventListener &&
              t.addEventListener("visibilitychange", this.Dt);
          }
          get isShuttingDown() {
            return this.At;
          }
          /**
           * Adds a new operation to the queue without waiting for it to complete (i.e.
           * we ignore the Promise result).
           */ enqueueAndForget(t) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.enqueue(t);
          }
          enqueueAndForgetEvenWhileRestricted(t) {
            this.Ft(),
              // eslint-disable-next-line @typescript-eslint/no-floating-promises
              this.xt(t);
          }
          enterRestrictedMode(t) {
            if (!this.At) {
              (this.At = !0), (this.$t = t || !1);
              const e = as();
              e &&
                "function" == typeof e.removeEventListener &&
                e.removeEventListener("visibilitychange", this.Dt);
            }
          }
          enqueue(t) {
            if ((this.Ft(), this.At))
              // Return a Promise which never resolves.
              return new Promise(() => {});
            // Create a deferred Promise that we can return to the callee. This
            // allows us to return a "hanging Promise" only to the callee and still
            // advance the queue even when the operation is not run.
            const e = new j();
            return this.xt(() =>
              this.At && this.$t
                ? Promise.resolve()
                : (t().then(e.resolve, e.reject), e.promise)
            ).then(() => e.promise);
          }
          enqueueRetryable(t) {
            this.enqueueAndForget(() => (this.Tt.push(t), this.St()));
          }
          /**
           * Runs the next operation from the retryable queue. If the operation fails,
           * reschedules with backoff.
           */ async St() {
            if (0 !== this.Tt.length) {
              try {
                await this.Tt[0](), this.Tt.shift(), this.gt.reset();
              } catch (t) {
                if (
                  !(
                    /**
                     * @license
                     * Copyright 2017 Google LLC
                     *
                     * Licensed under the Apache License, Version 2.0 (the "License");
                     * you may not use this file except in compliance with the License.
                     * You may obtain a copy of the License at
                     *
                     *   http://www.apache.org/licenses/LICENSE-2.0
                     *
                     * Unless required by applicable law or agreed to in writing, software
                     * distributed under the License is distributed on an "AS IS" BASIS,
                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                     * See the License for the specific language governing permissions and
                     * limitations under the License.
                     */
                    /** Verifies whether `e` is an IndexedDbTransactionError. */
                    (function (t) {
                      // Use name equality, as instanceof checks on errors don't work with errors
                      // that wrap other errors.
                      return "IndexedDbTransactionError" === t.name;
                    })(
                      /**
                       * @license
                       * Copyright 2020 Google LLC
                       *
                       * Licensed under the Apache License, Version 2.0 (the "License");
                       * you may not use this file except in compliance with the License.
                       * You may obtain a copy of the License at
                       *
                       *   http://www.apache.org/licenses/LICENSE-2.0
                       *
                       * Unless required by applicable law or agreed to in writing, software
                       * distributed under the License is distributed on an "AS IS" BASIS,
                       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                       * See the License for the specific language governing permissions and
                       * limitations under the License.
                       */ t
                    )
                  )
                )
                  throw t;
                // Failure will be handled by AsyncQueue
                y("AsyncQueue", "Operation failed with retryable error: " + t);
              }
              this.Tt.length > 0 &&
                // If there are additional operations, we re-schedule `retryNextOp()`.
                // This is necessary to run retryable operations that failed during
                // their initial attempt since we don't know whether they are already
                // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
                // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
                // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
                // call scheduled here.
                // Since `backoffAndRun()` cancels an existing backoff and schedules a
                // new backoff on every call, there is only ever a single additional
                // operation in the queue.
                this.gt.H(() => this.St());
            }
          }
          xt(t) {
            const e = this.It.then(
              () => (
                (this.Vt = !0),
                t()
                  .catch((t) => {
                    (this.Pt = t), (this.Vt = !1);
                    const e =
                      /**
                       * Chrome includes Error.message in Error.stack. Other browsers do not.
                       * This returns expected output of message + stack when available.
                       * @param error - Error or FirestoreError
                       */
                      (function (t) {
                        let e = t.message || "";
                        t.stack &&
                          (e = t.stack.includes(t.message)
                            ? t.stack
                            : t.message + "\n" + t.stack);
                        return e;
                      })(
                        /**
                         * @license
                         * Copyright 2020 Google LLC
                         *
                         * Licensed under the Apache License, Version 2.0 (the "License");
                         * you may not use this file except in compliance with the License.
                         * You may obtain a copy of the License at
                         *
                         *   http://www.apache.org/licenses/LICENSE-2.0
                         *
                         * Unless required by applicable law or agreed to in writing, software
                         * distributed under the License is distributed on an "AS IS" BASIS,
                         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                         * See the License for the specific language governing permissions and
                         * limitations under the License.
                         */
                        // TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
                        // legacy SDK.
                        /**
                         * A reference to a transaction.
                         *
                         * The `Transaction` object passed to a transaction's `updateFunction` provides
                         * the methods to read and write data within the transaction context. See
                         * {@link runTransaction}.
                         */ t
                      );
                    // Re-throw the error so that this.tail becomes a rejected Promise and
                    // all further attempts to chain (via .then) will just short-circuit
                    // and return the rejected Promise.
                    throw (g("INTERNAL UNHANDLED ERROR: ", e), t);
                  })
                  .then((t) => ((this.Vt = !1), t))
              )
            );
            return (this.It = e), e;
          }
          enqueueAfterDelay(t, e, n) {
            this.Ft(),
              // Fast-forward delays for timerIds that have been overriden.
              this.Nt.indexOf(t) > -1 && (e = 0);
            const r = hs.createAndSchedule(this, t, e, n, (t) => this.qt(t));
            return this.Rt.push(r), r;
          }
          Ft() {
            this.Pt && b();
          }
          verifyOperationInProgress() {}
          /**
           * Waits until all currently queued tasks are finished executing. Delayed
           * operations are not run.
           */ async Ot() {
            // Operations in the queue prior to draining may have enqueued additional
            // operations. Keep draining the queue until the tail is no longer advanced,
            // which indicates that no more new operations were enqueued and that all
            // operations were executed.
            let t;
            do {
              (t = this.It), await t;
            } while (t !== this.It);
          }
          /**
           * For Tests: Determine if a delayed operation with a particular TimerId
           * exists.
           */ kt(t) {
            for (const e of this.Rt) if (e.timerId === t) return !0;
            return !1;
          }
          /**
           * For Tests: Runs some or all delayed operations early.
           *
           * @param lastTimerId - Delayed operations up to and including this TimerId
           * will be drained. Pass TimerId.All to run all delayed operations.
           * @returns a Promise that resolves once all operations have been run.
           */ Ct(t) {
            // Note that draining may generate more delayed ops, so we do that first.
            return this.Ot().then(() => {
              // Run ops in the same order they'd run if they ran naturally.
              this.Rt.sort((t, e) => t.targetTimeMs - e.targetTimeMs);
              for (const e of this.Rt)
                if (
                  (e.skipDelay(),
                  "all" /* TimerId.All */ !== t && e.timerId === t)
                )
                  break;
              return this.Ot();
            });
          }
          /**
           * For Tests: Skip all subsequent delays for a timer id.
           */ Lt(t) {
            this.Nt.push(t);
          }
          /** Called once a DelayedOperation is run or canceled. */ qt(t) {
            // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
            const e = this.Rt.indexOf(t);
            this.Rt.splice(e, 1);
          }
        }

        class fs {
          /** @hideconstructor */
          constructor(t, e) {
            (this._firestore = t),
              (this._transaction = e),
              (this._dataReader = Wn(t));
          }
          /**
           * Reads the document referenced by the provided {@link DocumentReference}.
           *
           * @param documentRef - A reference to the document to be read.
           * @returns A `DocumentSnapshot` with the read data.
           */ get(t) {
            const e = ss(t, this._firestore),
              n = new Br(this._firestore);
            return this._transaction.lookup([e._key]).then((t) => {
              if (!t || 1 !== t.length) return b();
              const r = t[0];
              if (r.isFoundDocument())
                return new fr(this._firestore, n, r.key, r, e.converter);
              if (r.isNoDocument())
                return new fr(this._firestore, n, e._key, null, e.converter);
              throw b();
            });
          }
          set(t, e, n) {
            const r = ss(t, this._firestore),
              s = jr(r.converter, e, n),
              i = Gn(
                this._dataReader,
                "Transaction.set",
                r._key,
                s,
                null !== r.converter,
                n
              );
            return this._transaction.set(r._key, i), this;
          }
          update(t, e, n, ...r) {
            const s = ss(t, this._firestore);
            // For Compat types, we have to "extract" the underlying types before
            // performing validation.
            let i;
            return (
              (i =
                "string" ==
                  typeof (e = (0,
                  _firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(
                    e
                  )) || e instanceof On
                  ? er(this._dataReader, "Transaction.update", s._key, e, n, r)
                  : tr(this._dataReader, "Transaction.update", s._key, e)),
              this._transaction.update(s._key, i),
              this
            );
          }
          /**
           * Deletes the document referred to by the provided {@link DocumentReference}.
           *
           * @param documentRef - A reference to the document to be deleted.
           * @returns This `Transaction` instance. Used for chaining method calls.
           */ delete(t) {
            const e = ss(t, this._firestore);
            return this._transaction.delete(e._key), this;
          }
        }

        /**
         * Executes the given `updateFunction` and then attempts to commit the changes
         * applied within the transaction. If any document read within the transaction
         * has changed, Cloud Firestore retries the `updateFunction`. If it fails to
         * commit after 5 attempts, the transaction fails.
         *
         * The maximum number of writes allowed in a single transaction is 500.
         *
         * @param firestore - A reference to the Firestore database to run this
         * transaction against.
         * @param updateFunction - The function to execute within the transaction
         * context.
         * @param options - An options object to configure maximum number of attempts to
         * commit.
         * @returns If the transaction completed successfully or was explicitly aborted
         * (the `updateFunction` returned a failed promise), the promise returned by the
         * `updateFunction `is returned here. Otherwise, if the transaction failed, a
         * rejected promise with the corresponding failure error is returned.
         */ function ds(t, e, n) {
          const r = yn((t = ct(t, _n))),
            s = Object.assign(Object.assign({}, us), n);
          !(function (t) {
            if (t.maxAttempts < 1)
              throw new U(P, "Max attempts must be at least 1");
          })(s);
          const i = new j();
          return (
            new cs(new ls(), r, s, (n) => e(new fs(t, n)), i).run(), i.promise
          );
        }

        /**
         * Firestore Lite
         *
         * @remarks Firestore Lite is a small online-only SDK that allows read
         * and write access to your Firestore database. All operations connect
         * directly to the backend, and `onSnapshot()` APIs are not supported.
         * @packageDocumentation
         */ !(function (t) {
          w = t;
        })(`${_firebase_app__WEBPACK_IMPORTED_MODULE_0__.SDK_VERSION}_lite`),
          (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(
            new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(
              "firestore/lite",
              (t, { instanceIdentifier: e, options: n }) => {
                const r = t.getProvider("app").getImmediate(),
                  s = new _n(
                    new W(t.getProvider("auth-internal")),
                    new H(t.getProvider("app-check-internal")),
                    (function (t, e) {
                      if (
                        !Object.prototype.hasOwnProperty.apply(t.options, [
                          "projectId",
                        ])
                      )
                        throw new U(
                          P,
                          '"projectId" not provided in firebase.initializeApp.'
                        );
                      return new X(t.options.projectId, e);
                    })(
                      /**
                       * @license
                       * Copyright 2017 Google LLC
                       *
                       * Licensed under the Apache License, Version 2.0 (the "License");
                       * you may not use this file except in compliance with the License.
                       * You may obtain a copy of the License at
                       *
                       *   http://www.apache.org/licenses/LICENSE-2.0
                       *
                       * Unless required by applicable law or agreed to in writing, software
                       * distributed under the License is distributed on an "AS IS" BASIS,
                       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                       * See the License for the specific language governing permissions and
                       * limitations under the License.
                       */ r,
                      e
                    ),
                    r
                  );
                return n && s._setSettings(n), s;
              },
              "PUBLIC"
            ).setMultipleInstances(!0)
          ),
          // RUNTIME_ENV and BUILD_TARGET are replaced by real values during the compilation
          (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(
            "firestore-lite",
            "3.8.0",
            ""
          ),
          (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(
            "firestore-lite",
            "3.8.0",
            "esm2017"
          );

        //# sourceMappingURL=index.browser.esm2017.js.map

        /***/
      },

    /***/ "./node_modules/@firebase/util/dist/index.esm2017.js":
      /*!***********************************************************!*\
  !*** ./node_modules/@firebase/util/dist/index.esm2017.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ CONSTANTS: () => /* binding */ CONSTANTS,
          /* harmony export */ Deferred: () => /* binding */ Deferred,
          /* harmony export */ ErrorFactory: () => /* binding */ ErrorFactory,
          /* harmony export */ FirebaseError: () => /* binding */ FirebaseError,
          /* harmony export */ MAX_VALUE_MILLIS: () =>
            /* binding */ MAX_VALUE_MILLIS,
          /* harmony export */ RANDOM_FACTOR: () => /* binding */ RANDOM_FACTOR,
          /* harmony export */ Sha1: () => /* binding */ Sha1,
          /* harmony export */ areCookiesEnabled: () =>
            /* binding */ areCookiesEnabled,
          /* harmony export */ assert: () => /* binding */ assert,
          /* harmony export */ assertionError: () =>
            /* binding */ assertionError,
          /* harmony export */ async: () => /* binding */ async,
          /* harmony export */ base64: () => /* binding */ base64,
          /* harmony export */ base64Decode: () => /* binding */ base64Decode,
          /* harmony export */ base64Encode: () => /* binding */ base64Encode,
          /* harmony export */ base64urlEncodeWithoutPadding: () =>
            /* binding */ base64urlEncodeWithoutPadding,
          /* harmony export */ calculateBackoffMillis: () =>
            /* binding */ calculateBackoffMillis,
          /* harmony export */ contains: () => /* binding */ contains,
          /* harmony export */ createMockUserToken: () =>
            /* binding */ createMockUserToken,
          /* harmony export */ createSubscribe: () =>
            /* binding */ createSubscribe,
          /* harmony export */ decode: () => /* binding */ decode,
          /* harmony export */ deepCopy: () => /* binding */ deepCopy,
          /* harmony export */ deepEqual: () => /* binding */ deepEqual,
          /* harmony export */ deepExtend: () => /* binding */ deepExtend,
          /* harmony export */ errorPrefix: () => /* binding */ errorPrefix,
          /* harmony export */ extractQuerystring: () =>
            /* binding */ extractQuerystring,
          /* harmony export */ getDefaultAppConfig: () =>
            /* binding */ getDefaultAppConfig,
          /* harmony export */ getDefaultEmulatorHost: () =>
            /* binding */ getDefaultEmulatorHost,
          /* harmony export */ getDefaultEmulatorHostnameAndPort: () =>
            /* binding */ getDefaultEmulatorHostnameAndPort,
          /* harmony export */ getExperimentalSetting: () =>
            /* binding */ getExperimentalSetting,
          /* harmony export */ getGlobal: () => /* binding */ getGlobal,
          /* harmony export */ getModularInstance: () =>
            /* binding */ getModularInstance,
          /* harmony export */ getUA: () => /* binding */ getUA,
          /* harmony export */ isAdmin: () => /* binding */ isAdmin,
          /* harmony export */ isBrowser: () => /* binding */ isBrowser,
          /* harmony export */ isBrowserExtension: () =>
            /* binding */ isBrowserExtension,
          /* harmony export */ isElectron: () => /* binding */ isElectron,
          /* harmony export */ isEmpty: () => /* binding */ isEmpty,
          /* harmony export */ isIE: () => /* binding */ isIE,
          /* harmony export */ isIndexedDBAvailable: () =>
            /* binding */ isIndexedDBAvailable,
          /* harmony export */ isMobileCordova: () =>
            /* binding */ isMobileCordova,
          /* harmony export */ isNode: () => /* binding */ isNode,
          /* harmony export */ isNodeSdk: () => /* binding */ isNodeSdk,
          /* harmony export */ isReactNative: () => /* binding */ isReactNative,
          /* harmony export */ isSafari: () => /* binding */ isSafari,
          /* harmony export */ isUWP: () => /* binding */ isUWP,
          /* harmony export */ isValidFormat: () => /* binding */ isValidFormat,
          /* harmony export */ isValidTimestamp: () =>
            /* binding */ isValidTimestamp,
          /* harmony export */ issuedAtTime: () => /* binding */ issuedAtTime,
          /* harmony export */ jsonEval: () => /* binding */ jsonEval,
          /* harmony export */ map: () => /* binding */ map,
          /* harmony export */ ordinal: () => /* binding */ ordinal,
          /* harmony export */ promiseWithTimeout: () =>
            /* binding */ promiseWithTimeout,
          /* harmony export */ querystring: () => /* binding */ querystring,
          /* harmony export */ querystringDecode: () =>
            /* binding */ querystringDecode,
          /* harmony export */ safeGet: () => /* binding */ safeGet,
          /* harmony export */ stringLength: () => /* binding */ stringLength,
          /* harmony export */ stringToByteArray: () =>
            /* binding */ stringToByteArray,
          /* harmony export */ stringify: () => /* binding */ stringify,
          /* harmony export */ uuidv4: () => /* binding */ uuidv4,
          /* harmony export */ validateArgCount: () =>
            /* binding */ validateArgCount,
          /* harmony export */ validateCallback: () =>
            /* binding */ validateCallback,
          /* harmony export */ validateContextObject: () =>
            /* binding */ validateContextObject,
          /* harmony export */ validateIndexedDBOpenable: () =>
            /* binding */ validateIndexedDBOpenable,
          /* harmony export */ validateNamespace: () =>
            /* binding */ validateNamespace,
          /* harmony export */
        });
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
         */
        const CONSTANTS = {
          /**
           * @define {boolean} Whether this is the client Node.js SDK.
           */
          NODE_CLIENT: false,
          /**
           * @define {boolean} Whether this is the Admin Node.js SDK.
           */
          NODE_ADMIN: false,
          /**
           * Firebase SDK Version
           */
          SDK_VERSION: "${JSCORE_VERSION}",
        };

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Throws an error if the provided assertion is falsy
         */
        const assert = function (assertion, message) {
          if (!assertion) {
            throw assertionError(message);
          }
        };
        /**
         * Returns an Error object suitable for throwing.
         */
        const assertionError = function (message) {
          return new Error(
            "Firebase Database (" +
              CONSTANTS.SDK_VERSION +
              ") INTERNAL ASSERT FAILED: " +
              message
          );
        };

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        const stringToByteArray$1 = function (str) {
          // TODO(user): Use native implementations if/when available
          const out = [];
          let p = 0;
          for (let i = 0; i < str.length; i++) {
            let c = str.charCodeAt(i);
            if (c < 128) {
              out[p++] = c;
            } else if (c < 2048) {
              out[p++] = (c >> 6) | 192;
              out[p++] = (c & 63) | 128;
            } else if (
              (c & 0xfc00) === 0xd800 &&
              i + 1 < str.length &&
              (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00
            ) {
              // Surrogate Pair
              c =
                0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
              out[p++] = (c >> 18) | 240;
              out[p++] = ((c >> 12) & 63) | 128;
              out[p++] = ((c >> 6) & 63) | 128;
              out[p++] = (c & 63) | 128;
            } else {
              out[p++] = (c >> 12) | 224;
              out[p++] = ((c >> 6) & 63) | 128;
              out[p++] = (c & 63) | 128;
            }
          }
          return out;
        };
        /**
         * Turns an array of numbers into the string given by the concatenation of the
         * characters to which the numbers correspond.
         * @param bytes Array of numbers representing characters.
         * @return Stringification of the array.
         */
        const byteArrayToString = function (bytes) {
          // TODO(user): Use native implementations if/when available
          const out = [];
          let pos = 0,
            c = 0;
          while (pos < bytes.length) {
            const c1 = bytes[pos++];
            if (c1 < 128) {
              out[c++] = String.fromCharCode(c1);
            } else if (c1 > 191 && c1 < 224) {
              const c2 = bytes[pos++];
              out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
            } else if (c1 > 239 && c1 < 365) {
              // Surrogate Pair
              const c2 = bytes[pos++];
              const c3 = bytes[pos++];
              const c4 = bytes[pos++];
              const u =
                (((c1 & 7) << 18) |
                  ((c2 & 63) << 12) |
                  ((c3 & 63) << 6) |
                  (c4 & 63)) -
                0x10000;
              out[c++] = String.fromCharCode(0xd800 + (u >> 10));
              out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
            } else {
              const c2 = bytes[pos++];
              const c3 = bytes[pos++];
              out[c++] = String.fromCharCode(
                ((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
              );
            }
          }
          return out.join("");
        };
        // We define it as an object literal instead of a class because a class compiled down to es5 can't
        // be treeshaked. https://github.com/rollup/rollup/issues/1691
        // Static lookup maps, lazily populated by init_()
        const base64 = {
          /**
           * Maps bytes to characters.
           */
          byteToCharMap_: null,
          /**
           * Maps characters to bytes.
           */
          charToByteMap_: null,
          /**
           * Maps bytes to websafe characters.
           * @private
           */
          byteToCharMapWebSafe_: null,
          /**
           * Maps websafe characters to bytes.
           * @private
           */
          charToByteMapWebSafe_: null,
          /**
           * Our default alphabet, shared between
           * ENCODED_VALS and ENCODED_VALS_WEBSAFE
           */
          ENCODED_VALS_BASE:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
            "abcdefghijklmnopqrstuvwxyz" +
            "0123456789",
          /**
           * Our default alphabet. Value 64 (=) is special; it means "nothing."
           */
          get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/=";
          },
          /**
           * Our websafe alphabet.
           */
          get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_.";
          },
          /**
           * Whether this browser supports the atob and btoa functions. This extension
           * started at Mozilla but is now implemented by many browsers. We use the
           * ASSUME_* variables to avoid pulling in the full useragent detection library
           * but still allowing the standard per-browser compilations.
           *
           */
          HAS_NATIVE_SUPPORT: typeof atob === "function",
          /**
           * Base64-encode an array of bytes.
           *
           * @param input An array of bytes (numbers with
           *     value in [0, 255]) to encode.
           * @param webSafe Boolean indicating we should use the
           *     alternative alphabet.
           * @return The base64 encoded string.
           */
          encodeByteArray(input, webSafe) {
            if (!Array.isArray(input)) {
              throw Error("encodeByteArray takes an array as a parameter");
            }
            this.init_();
            const byteToCharMap = webSafe
              ? this.byteToCharMapWebSafe_
              : this.byteToCharMap_;
            const output = [];
            for (let i = 0; i < input.length; i += 3) {
              const byte1 = input[i];
              const haveByte2 = i + 1 < input.length;
              const byte2 = haveByte2 ? input[i + 1] : 0;
              const haveByte3 = i + 2 < input.length;
              const byte3 = haveByte3 ? input[i + 2] : 0;
              const outByte1 = byte1 >> 2;
              const outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
              let outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
              let outByte4 = byte3 & 0x3f;
              if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                  outByte3 = 64;
                }
              }
              output.push(
                byteToCharMap[outByte1],
                byteToCharMap[outByte2],
                byteToCharMap[outByte3],
                byteToCharMap[outByte4]
              );
            }
            return output.join("");
          },
          /**
           * Base64-encode a string.
           *
           * @param input A string to encode.
           * @param webSafe If true, we should use the
           *     alternative alphabet.
           * @return The base64 encoded string.
           */
          encodeString(input, webSafe) {
            // Shortcut for Mozilla browsers that implement
            // a native base64 encoder in the form of "btoa/atob"
            if (this.HAS_NATIVE_SUPPORT && !webSafe) {
              return btoa(input);
            }
            return this.encodeByteArray(stringToByteArray$1(input), webSafe);
          },
          /**
           * Base64-decode a string.
           *
           * @param input to decode.
           * @param webSafe True if we should use the
           *     alternative alphabet.
           * @return string representing the decoded value.
           */
          decodeString(input, webSafe) {
            // Shortcut for Mozilla browsers that implement
            // a native base64 encoder in the form of "btoa/atob"
            if (this.HAS_NATIVE_SUPPORT && !webSafe) {
              return atob(input);
            }
            return byteArrayToString(
              this.decodeStringToByteArray(input, webSafe)
            );
          },
          /**
           * Base64-decode a string.
           *
           * In base-64 decoding, groups of four characters are converted into three
           * bytes.  If the encoder did not apply padding, the input length may not
           * be a multiple of 4.
           *
           * In this case, the last group will have fewer than 4 characters, and
           * padding will be inferred.  If the group has one or two characters, it decodes
           * to one byte.  If the group has three characters, it decodes to two bytes.
           *
           * @param input Input to decode.
           * @param webSafe True if we should use the web-safe alphabet.
           * @return bytes representing the decoded value.
           */
          decodeStringToByteArray(input, webSafe) {
            this.init_();
            const charToByteMap = webSafe
              ? this.charToByteMapWebSafe_
              : this.charToByteMap_;
            const output = [];
            for (let i = 0; i < input.length; ) {
              const byte1 = charToByteMap[input.charAt(i++)];
              const haveByte2 = i < input.length;
              const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
              ++i;
              const haveByte3 = i < input.length;
              const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
              ++i;
              const haveByte4 = i < input.length;
              const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
              ++i;
              if (
                byte1 == null ||
                byte2 == null ||
                byte3 == null ||
                byte4 == null
              ) {
                throw Error();
              }
              const outByte1 = (byte1 << 2) | (byte2 >> 4);
              output.push(outByte1);
              if (byte3 !== 64) {
                const outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                  const outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                  output.push(outByte3);
                }
              }
            }
            return output;
          },
          /**
           * Lazy static initialization function. Called before
           * accessing any of the static map variables.
           * @private
           */
          init_() {
            if (!this.byteToCharMap_) {
              this.byteToCharMap_ = {};
              this.charToByteMap_ = {};
              this.byteToCharMapWebSafe_ = {};
              this.charToByteMapWebSafe_ = {};
              // We want quick mappings back and forth, so we precompute two maps.
              for (let i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] =
                  this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                  this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                  this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
              }
            }
          },
        };
        /**
         * URL-safe base64 encoding
         */
        const base64Encode = function (str) {
          const utf8Bytes = stringToByteArray$1(str);
          return base64.encodeByteArray(utf8Bytes, true);
        };
        /**
         * URL-safe base64 encoding (without "." padding in the end).
         * e.g. Used in JSON Web Token (JWT) parts.
         */
        const base64urlEncodeWithoutPadding = function (str) {
          // Use base64url encoding and remove padding in the end (dot characters).
          return base64Encode(str).replace(/\./g, "");
        };
        /**
         * URL-safe base64 decoding
         *
         * NOTE: DO NOT use the global atob() function - it does NOT support the
         * base64Url variant encoding.
         *
         * @param str To be decoded
         * @return Decoded result, if possible
         */
        const base64Decode = function (str) {
          try {
            return base64.decodeString(str, true);
          } catch (e) {
            console.error("base64Decode failed: ", e);
          }
          return null;
        };

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Do a deep-copy of basic JavaScript Objects or Arrays.
         */
        function deepCopy(value) {
          return deepExtend(undefined, value);
        }
        /**
         * Copy properties from source to target (recursively allows extension
         * of Objects and Arrays).  Scalar values in the target are over-written.
         * If target is undefined, an object of the appropriate type will be created
         * (and returned).
         *
         * We recursively copy all child properties of plain Objects in the source- so
         * that namespace- like dictionaries are merged.
         *
         * Note that the target can be a function, in which case the properties in
         * the source Object are copied onto it as static properties of the Function.
         *
         * Note: we don't merge __proto__ to prevent prototype pollution
         */
        function deepExtend(target, source) {
          if (!(source instanceof Object)) {
            return source;
          }
          switch (source.constructor) {
            case Date:
              // Treat Dates like scalars; if the target date object had any child
              // properties - they will be lost!
              const dateValue = source;
              return new Date(dateValue.getTime());
            case Object:
              if (target === undefined) {
                target = {};
              }
              break;
            case Array:
              // Always copy the array source and overwrite the target.
              target = [];
              break;
            default:
              // Not a plain Object - treat it as a scalar.
              return source;
          }
          for (const prop in source) {
            // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
            if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
              continue;
            }
            target[prop] = deepExtend(target[prop], source[prop]);
          }
          return target;
        }
        function isValidKey(key) {
          return key !== "__proto__";
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Returns navigator.userAgent string or '' if it's not defined.
         * @return user agent string
         */
        function getUA() {
          if (
            typeof navigator !== "undefined" &&
            typeof navigator["userAgent"] === "string"
          ) {
            return navigator["userAgent"];
          } else {
            return "";
          }
        }
        /**
         * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
         *
         * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
         * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
         * wait for a callback.
         */
        function isMobileCordova() {
          return (
            typeof window !== "undefined" &&
            // @ts-ignore Setting up an broadly applicable index signature for Window
            // just to deal with this case would probably be a bad idea.
            !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) &&
            /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())
          );
        }
        /**
         * Detect Node.js.
         *
         * @return true if Node.js environment is detected.
         */
        // Node detection logic from: https://github.com/iliakan/detect-node/
        function isNode() {
          try {
            return (
              Object.prototype.toString.call(__webpack_require__.g.process) ===
              "[object process]"
            );
          } catch (e) {
            return false;
          }
        }
        /**
         * Detect Browser Environment
         */
        function isBrowser() {
          return typeof self === "object" && self.self === self;
        }
        function isBrowserExtension() {
          const runtime =
            typeof chrome === "object"
              ? chrome.runtime
              : typeof browser === "object"
              ? browser.runtime
              : undefined;
          return typeof runtime === "object" && runtime.id !== undefined;
        }
        /**
         * Detect React Native.
         *
         * @return true if ReactNative environment is detected.
         */
        function isReactNative() {
          return (
            typeof navigator === "object" &&
            navigator["product"] === "ReactNative"
          );
        }
        /** Detects Electron apps. */
        function isElectron() {
          return getUA().indexOf("Electron/") >= 0;
        }
        /** Detects Internet Explorer. */
        function isIE() {
          const ua = getUA();
          return ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
        }
        /** Detects Universal Windows Platform apps. */
        function isUWP() {
          return getUA().indexOf("MSAppHost/") >= 0;
        }
        /**
         * Detect whether the current SDK build is the Node version.
         *
         * @return true if it's the Node SDK build.
         */
        function isNodeSdk() {
          return (
            CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true
          );
        }
        /** Returns true if we are running in Safari. */
        function isSafari() {
          return (
            !isNode() &&
            navigator.userAgent.includes("Safari") &&
            !navigator.userAgent.includes("Chrome")
          );
        }
        /**
         * This method checks if indexedDB is supported by current browser/service worker context
         * @return true if indexedDB is supported by current browser/service worker context
         */
        function isIndexedDBAvailable() {
          try {
            return typeof indexedDB === "object";
          } catch (e) {
            return false;
          }
        }
        /**
         * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
         * if errors occur during the database open operation.
         *
         * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
         * private browsing)
         */
        function validateIndexedDBOpenable() {
          return new Promise((resolve, reject) => {
            try {
              let preExist = true;
              const DB_CHECK_NAME =
                "validate-browser-context-for-indexeddb-analytics-module";
              const request = self.indexedDB.open(DB_CHECK_NAME);
              request.onsuccess = () => {
                request.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist) {
                  self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                }
                resolve(true);
              };
              request.onupgradeneeded = () => {
                preExist = false;
              };
              request.onerror = () => {
                var _a;
                reject(
                  ((_a = request.error) === null || _a === void 0
                    ? void 0
                    : _a.message) || ""
                );
              };
            } catch (error) {
              reject(error);
            }
          });
        }
        /**
         *
         * This method checks whether cookie is enabled within current browser
         * @return true if cookie is enabled within current browser
         */
        function areCookiesEnabled() {
          if (typeof navigator === "undefined" || !navigator.cookieEnabled) {
            return false;
          }
          return true;
        }
        /**
         * Polyfill for `globalThis` object.
         * @returns the `globalThis` object for the given environment.
         */
        function getGlobal() {
          if (typeof self !== "undefined") {
            return self;
          }
          if (typeof window !== "undefined") {
            return window;
          }
          if (typeof __webpack_require__.g !== "undefined") {
            return __webpack_require__.g;
          }
          throw new Error("Unable to locate global object.");
        }

        /**
         * @license
         * Copyright 2022 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        const getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
        /**
         * Attempt to read defaults from a JSON string provided to
         * process.env.__FIREBASE_DEFAULTS__ or a JSON file whose path is in
         * process.env.__FIREBASE_DEFAULTS_PATH__
         */
        const getDefaultsFromEnvVariable = () => {
          if (
            typeof process === "undefined" ||
            typeof process.env === "undefined"
          ) {
            return;
          }
          const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
          if (defaultsJsonString) {
            return JSON.parse(defaultsJsonString);
          }
        };
        const getDefaultsFromCookie = () => {
          if (typeof document === "undefined") {
            return;
          }
          let match;
          try {
            match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
          } catch (e) {
            // Some environments such as Angular Universal SSR have a
            // `document` object but error on accessing `document.cookie`.
            return;
          }
          const decoded = match && base64Decode(match[1]);
          return decoded && JSON.parse(decoded);
        };
        /**
         * Get the __FIREBASE_DEFAULTS__ object. It checks in order:
         * (1) if such an object exists as a property of `globalThis`
         * (2) if such an object was provided on a shell environment variable
         * (3) if such an object exists in a cookie
         */
        const getDefaults = () => {
          try {
            return (
              getDefaultsFromGlobal() ||
              getDefaultsFromEnvVariable() ||
              getDefaultsFromCookie()
            );
          } catch (e) {
            /**
             * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
             * to any environment case we have not accounted for. Log to
             * info instead of swallowing so we can find these unknown cases
             * and add paths for them if needed.
             */
            console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
            return;
          }
        };
        /**
         * Returns emulator host stored in the __FIREBASE_DEFAULTS__ object
         * for the given product.
         * @returns a URL host formatted like `127.0.0.1:9999` or `[::1]:4000` if available
         * @public
         */
        const getDefaultEmulatorHost = (productName) => {
          var _a, _b;
          return (_b =
            (_a = getDefaults()) === null || _a === void 0
              ? void 0
              : _a.emulatorHosts) === null || _b === void 0
            ? void 0
            : _b[productName];
        };
        /**
         * Returns emulator hostname and port stored in the __FIREBASE_DEFAULTS__ object
         * for the given product.
         * @returns a pair of hostname and port like `["::1", 4000]` if available
         * @public
         */
        const getDefaultEmulatorHostnameAndPort = (productName) => {
          const host = getDefaultEmulatorHost(productName);
          if (!host) {
            return undefined;
          }
          const separatorIndex = host.lastIndexOf(":"); // Finding the last since IPv6 addr also has colons.
          if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
            throw new Error(
              `Invalid host ${host} with no separate hostname and port!`
            );
          }
          // eslint-disable-next-line no-restricted-globals
          const port = parseInt(host.substring(separatorIndex + 1), 10);
          if (host[0] === "[") {
            // Bracket-quoted `[ipv6addr]:port` => return "ipv6addr" (without brackets).
            return [host.substring(1, separatorIndex - 1), port];
          } else {
            return [host.substring(0, separatorIndex), port];
          }
        };
        /**
         * Returns Firebase app config stored in the __FIREBASE_DEFAULTS__ object.
         * @public
         */
        const getDefaultAppConfig = () => {
          var _a;
          return (_a = getDefaults()) === null || _a === void 0
            ? void 0
            : _a.config;
        };
        /**
         * Returns an experimental setting on the __FIREBASE_DEFAULTS__ object (properties
         * prefixed by "_")
         * @public
         */
        const getExperimentalSetting = (name) => {
          var _a;
          return (_a = getDefaults()) === null || _a === void 0
            ? void 0
            : _a[`_${name}`];
        };

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        class Deferred {
          constructor() {
            this.reject = () => {};
            this.resolve = () => {};
            this.promise = new Promise((resolve, reject) => {
              this.resolve = resolve;
              this.reject = reject;
            });
          }
          /**
           * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
           * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
           * and returns a node-style callback which will resolve or reject the Deferred's promise.
           */
          wrapCallback(callback) {
            return (error, value) => {
              if (error) {
                this.reject(error);
              } else {
                this.resolve(value);
              }
              if (typeof callback === "function") {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                this.promise.catch(() => {});
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                  callback(error);
                } else {
                  callback(error, value);
                }
              }
            };
          }
        }

        /**
         * @license
         * Copyright 2021 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function createMockUserToken(token, projectId) {
          if (token.uid) {
            throw new Error(
              'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
            );
          }
          // Unsecured JWTs use "none" as the algorithm.
          const header = {
            alg: "none",
            type: "JWT",
          };
          const project = projectId || "demo-project";
          const iat = token.iat || 0;
          const sub = token.sub || token.user_id;
          if (!sub) {
            throw new Error(
              "mockUserToken must contain 'sub' or 'user_id' field!"
            );
          }
          const payload = Object.assign(
            {
              // Set all required fields to decent defaults
              iss: `https://securetoken.google.com/${project}`,
              aud: project,
              iat,
              exp: iat + 3600,
              auth_time: iat,
              sub,
              user_id: sub,
              firebase: {
                sign_in_provider: "custom",
                identities: {},
              },
            },
            token
          );
          // Unsecured JWTs use the empty string as a signature.
          const signature = "";
          return [
            base64urlEncodeWithoutPadding(JSON.stringify(header)),
            base64urlEncodeWithoutPadding(JSON.stringify(payload)),
            signature,
          ].join(".");
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * @fileoverview Standardized Firebase Error.
         *
         * Usage:
         *
         *   // Typescript string literals for type-safe codes
         *   type Err =
         *     'unknown' |
         *     'object-not-found'
         *     ;
         *
         *   // Closure enum for type-safe error codes
         *   // at-enum {string}
         *   var Err = {
         *     UNKNOWN: 'unknown',
         *     OBJECT_NOT_FOUND: 'object-not-found',
         *   }
         *
         *   let errors: Map<Err, string> = {
         *     'generic-error': "Unknown error",
         *     'file-not-found': "Could not find file: {$file}",
         *   };
         *
         *   // Type-safe function - must pass a valid error code as param.
         *   let error = new ErrorFactory<Err>('service', 'Service', errors);
         *
         *   ...
         *   throw error.create(Err.GENERIC);
         *   ...
         *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
         *   ...
         *   // Service: Could not file file: foo.txt (service/file-not-found).
         *
         *   catch (e) {
         *     assert(e.message === "Could not find file: foo.txt.");
         *     if ((e as FirebaseError)?.code === 'service/file-not-found') {
         *       console.log("Could not read file: " + e['file']);
         *     }
         *   }
         */
        const ERROR_NAME = "FirebaseError";
        // Based on code from:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
        class FirebaseError extends Error {
          constructor(
            /** The error code for this error. */
            code,
            message,
            /** Custom data for this error. */
            customData
          ) {
            super(message);
            this.code = code;
            this.customData = customData;
            /** The custom name for all FirebaseErrors. */
            this.name = ERROR_NAME;
            // Fix For ES5
            // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
            Object.setPrototypeOf(this, FirebaseError.prototype);
            // Maintains proper stack trace for where our error was thrown.
            // Only available on V8.
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, ErrorFactory.prototype.create);
            }
          }
        }
        class ErrorFactory {
          constructor(service, serviceName, errors) {
            this.service = service;
            this.serviceName = serviceName;
            this.errors = errors;
          }
          create(code, ...data) {
            const customData = data[0] || {};
            const fullCode = `${this.service}/${code}`;
            const template = this.errors[code];
            const message = template
              ? replaceTemplate(template, customData)
              : "Error";
            // Service Name: Error message (service/code).
            const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
            const error = new FirebaseError(fullCode, fullMessage, customData);
            return error;
          }
        }
        function replaceTemplate(template, data) {
          return template.replace(PATTERN, (_, key) => {
            const value = data[key];
            return value != null ? String(value) : `<${key}?>`;
          });
        }
        const PATTERN = /\{\$([^}]+)}/g;

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Evaluates a JSON string into a javascript object.
         *
         * @param {string} str A string containing JSON.
         * @return {*} The javascript object representing the specified JSON.
         */
        function jsonEval(str) {
          return JSON.parse(str);
        }
        /**
         * Returns JSON representing a javascript object.
         * @param {*} data Javascript object to be stringified.
         * @return {string} The JSON contents of the object.
         */
        function stringify(data) {
          return JSON.stringify(data);
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Decodes a Firebase auth. token into constituent parts.
         *
         * Notes:
         * - May return with invalid / incomplete claims if there's no native base64 decoding support.
         * - Doesn't check if the token is actually valid.
         */
        const decode = function (token) {
          let header = {},
            claims = {},
            data = {},
            signature = "";
          try {
            const parts = token.split(".");
            header = jsonEval(base64Decode(parts[0]) || "");
            claims = jsonEval(base64Decode(parts[1]) || "");
            signature = parts[2];
            data = claims["d"] || {};
            delete claims["d"];
          } catch (e) {}
          return {
            header,
            claims,
            data,
            signature,
          };
        };
        /**
         * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
         * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
         *
         * Notes:
         * - May return a false negative if there's no native base64 decoding support.
         * - Doesn't check if the token is actually valid.
         */
        const isValidTimestamp = function (token) {
          const claims = decode(token).claims;
          const now = Math.floor(new Date().getTime() / 1000);
          let validSince = 0,
            validUntil = 0;
          if (typeof claims === "object") {
            if (claims.hasOwnProperty("nbf")) {
              validSince = claims["nbf"];
            } else if (claims.hasOwnProperty("iat")) {
              validSince = claims["iat"];
            }
            if (claims.hasOwnProperty("exp")) {
              validUntil = claims["exp"];
            } else {
              // token will expire after 24h by default
              validUntil = validSince + 86400;
            }
          }
          return (
            !!now &&
            !!validSince &&
            !!validUntil &&
            now >= validSince &&
            now <= validUntil
          );
        };
        /**
         * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
         *
         * Notes:
         * - May return null if there's no native base64 decoding support.
         * - Doesn't check if the token is actually valid.
         */
        const issuedAtTime = function (token) {
          const claims = decode(token).claims;
          if (typeof claims === "object" && claims.hasOwnProperty("iat")) {
            return claims["iat"];
          }
          return null;
        };
        /**
         * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
         *
         * Notes:
         * - May return a false negative if there's no native base64 decoding support.
         * - Doesn't check if the token is actually valid.
         */
        const isValidFormat = function (token) {
          const decoded = decode(token),
            claims = decoded.claims;
          return (
            !!claims &&
            typeof claims === "object" &&
            claims.hasOwnProperty("iat")
          );
        };
        /**
         * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
         *
         * Notes:
         * - May return a false negative if there's no native base64 decoding support.
         * - Doesn't check if the token is actually valid.
         */
        const isAdmin = function (token) {
          const claims = decode(token).claims;
          return typeof claims === "object" && claims["admin"] === true;
        };

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function contains(obj, key) {
          return Object.prototype.hasOwnProperty.call(obj, key);
        }
        function safeGet(obj, key) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return obj[key];
          } else {
            return undefined;
          }
        }
        function isEmpty(obj) {
          for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              return false;
            }
          }
          return true;
        }
        function map(obj, fn, contextObj) {
          const res = {};
          for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              res[key] = fn.call(contextObj, obj[key], key, obj);
            }
          }
          return res;
        }
        /**
         * Deep equal two objects. Support Arrays and Objects.
         */
        function deepEqual(a, b) {
          if (a === b) {
            return true;
          }
          const aKeys = Object.keys(a);
          const bKeys = Object.keys(b);
          for (const k of aKeys) {
            if (!bKeys.includes(k)) {
              return false;
            }
            const aProp = a[k];
            const bProp = b[k];
            if (isObject(aProp) && isObject(bProp)) {
              if (!deepEqual(aProp, bProp)) {
                return false;
              }
            } else if (aProp !== bProp) {
              return false;
            }
          }
          for (const k of bKeys) {
            if (!aKeys.includes(k)) {
              return false;
            }
          }
          return true;
        }
        function isObject(thing) {
          return thing !== null && typeof thing === "object";
        }

        /**
         * @license
         * Copyright 2022 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Rejects if the given promise doesn't resolve in timeInMS milliseconds.
         * @internal
         */
        function promiseWithTimeout(promise, timeInMS = 2000) {
          const deferredPromise = new Deferred();
          setTimeout(() => deferredPromise.reject("timeout!"), timeInMS);
          promise.then(deferredPromise.resolve, deferredPromise.reject);
          return deferredPromise.promise;
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
         * params object (e.g. {arg: 'val', arg2: 'val2'})
         * Note: You must prepend it with ? when adding it to a URL.
         */
        function querystring(querystringParams) {
          const params = [];
          for (const [key, value] of Object.entries(querystringParams)) {
            if (Array.isArray(value)) {
              value.forEach((arrayVal) => {
                params.push(
                  encodeURIComponent(key) + "=" + encodeURIComponent(arrayVal)
                );
              });
            } else {
              params.push(
                encodeURIComponent(key) + "=" + encodeURIComponent(value)
              );
            }
          }
          return params.length ? "&" + params.join("&") : "";
        }
        /**
         * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
         * (e.g. {arg: 'val', arg2: 'val2'})
         */
        function querystringDecode(querystring) {
          const obj = {};
          const tokens = querystring.replace(/^\?/, "").split("&");
          tokens.forEach((token) => {
            if (token) {
              const [key, value] = token.split("=");
              obj[decodeURIComponent(key)] = decodeURIComponent(value);
            }
          });
          return obj;
        }
        /**
         * Extract the query string part of a URL, including the leading question mark (if present).
         */
        function extractQuerystring(url) {
          const queryStart = url.indexOf("?");
          if (!queryStart) {
            return "";
          }
          const fragmentStart = url.indexOf("#", queryStart);
          return url.substring(
            queryStart,
            fragmentStart > 0 ? fragmentStart : undefined
          );
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * @fileoverview SHA-1 cryptographic hash.
         * Variable names follow the notation in FIPS PUB 180-3:
         * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
         *
         * Usage:
         *   var sha1 = new sha1();
         *   sha1.update(bytes);
         *   var hash = sha1.digest();
         *
         * Performance:
         *   Chrome 23:   ~400 Mbit/s
         *   Firefox 16:  ~250 Mbit/s
         *
         */
        /**
         * SHA-1 cryptographic hash constructor.
         *
         * The properties declared here are discussed in the above algorithm document.
         * @constructor
         * @final
         * @struct
         */
        class Sha1 {
          constructor() {
            /**
             * Holds the previous values of accumulated variables a-e in the compress_
             * function.
             * @private
             */
            this.chain_ = [];
            /**
             * A buffer holding the partially computed hash result.
             * @private
             */
            this.buf_ = [];
            /**
             * An array of 80 bytes, each a part of the message to be hashed.  Referred to
             * as the message schedule in the docs.
             * @private
             */
            this.W_ = [];
            /**
             * Contains data needed to pad messages less than 64 bytes.
             * @private
             */
            this.pad_ = [];
            /**
             * @private {number}
             */
            this.inbuf_ = 0;
            /**
             * @private {number}
             */
            this.total_ = 0;
            this.blockSize = 512 / 8;
            this.pad_[0] = 128;
            for (let i = 1; i < this.blockSize; ++i) {
              this.pad_[i] = 0;
            }
            this.reset();
          }
          reset() {
            this.chain_[0] = 0x67452301;
            this.chain_[1] = 0xefcdab89;
            this.chain_[2] = 0x98badcfe;
            this.chain_[3] = 0x10325476;
            this.chain_[4] = 0xc3d2e1f0;
            this.inbuf_ = 0;
            this.total_ = 0;
          }
          /**
           * Internal compress helper function.
           * @param buf Block to compress.
           * @param offset Offset of the block in the buffer.
           * @private
           */
          compress_(buf, offset) {
            if (!offset) {
              offset = 0;
            }
            const W = this.W_;
            // get 16 big endian words
            if (typeof buf === "string") {
              for (let i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                  (buf.charCodeAt(offset) << 24) |
                  (buf.charCodeAt(offset + 1) << 16) |
                  (buf.charCodeAt(offset + 2) << 8) |
                  buf.charCodeAt(offset + 3);
                offset += 4;
              }
            } else {
              for (let i = 0; i < 16; i++) {
                W[i] =
                  (buf[offset] << 24) |
                  (buf[offset + 1] << 16) |
                  (buf[offset + 2] << 8) |
                  buf[offset + 3];
                offset += 4;
              }
            }
            // expand to 80 words
            for (let i = 16; i < 80; i++) {
              const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
              W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
            }
            let a = this.chain_[0];
            let b = this.chain_[1];
            let c = this.chain_[2];
            let d = this.chain_[3];
            let e = this.chain_[4];
            let f, k;
            // TODO(user): Try to unroll this loop to speed up the computation.
            for (let i = 0; i < 80; i++) {
              if (i < 40) {
                if (i < 20) {
                  f = d ^ (b & (c ^ d));
                  k = 0x5a827999;
                } else {
                  f = b ^ c ^ d;
                  k = 0x6ed9eba1;
                }
              } else {
                if (i < 60) {
                  f = (b & c) | (d & (b | c));
                  k = 0x8f1bbcdc;
                } else {
                  f = b ^ c ^ d;
                  k = 0xca62c1d6;
                }
              }
              const t =
                (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
              e = d;
              d = c;
              c = ((b << 30) | (b >>> 2)) & 0xffffffff;
              b = a;
              a = t;
            }
            this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
            this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
            this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
            this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
            this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
          }
          update(bytes, length) {
            // TODO(johnlenz): tighten the function signature and remove this check
            if (bytes == null) {
              return;
            }
            if (length === undefined) {
              length = bytes.length;
            }
            const lengthMinusBlock = length - this.blockSize;
            let n = 0;
            // Using local instead of member variables gives ~5% speedup on Firefox 16.
            const buf = this.buf_;
            let inbuf = this.inbuf_;
            // The outer while loop should execute at most twice.
            while (n < length) {
              // When we have no data in the block to top up, we can directly process the
              // input buffer (assuming it contains sufficient data). This gives ~25%
              // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
              // the data is provided in large chunks (or in multiples of 64 bytes).
              if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                  this.compress_(bytes, n);
                  n += this.blockSize;
                }
              }
              if (typeof bytes === "string") {
                while (n < length) {
                  buf[inbuf] = bytes.charCodeAt(n);
                  ++inbuf;
                  ++n;
                  if (inbuf === this.blockSize) {
                    this.compress_(buf);
                    inbuf = 0;
                    // Jump to the outer loop so we use the full-block optimization.
                    break;
                  }
                }
              } else {
                while (n < length) {
                  buf[inbuf] = bytes[n];
                  ++inbuf;
                  ++n;
                  if (inbuf === this.blockSize) {
                    this.compress_(buf);
                    inbuf = 0;
                    // Jump to the outer loop so we use the full-block optimization.
                    break;
                  }
                }
              }
            }
            this.inbuf_ = inbuf;
            this.total_ += length;
          }
          /** @override */
          digest() {
            const digest = [];
            let totalBits = this.total_ * 8;
            // Add pad 0x80 0x00*.
            if (this.inbuf_ < 56) {
              this.update(this.pad_, 56 - this.inbuf_);
            } else {
              this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
            }
            // Add # bits.
            for (let i = this.blockSize - 1; i >= 56; i--) {
              this.buf_[i] = totalBits & 255;
              totalBits /= 256; // Don't use bit-shifting here!
            }
            this.compress_(this.buf_);
            let n = 0;
            for (let i = 0; i < 5; i++) {
              for (let j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
              }
            }
            return digest;
          }
        }

        /**
         * Helper to make a Subscribe function (just like Promise helps make a
         * Thenable).
         *
         * @param executor Function which can make calls to a single Observer
         *     as a proxy.
         * @param onNoObservers Callback when count of Observers goes to zero.
         */
        function createSubscribe(executor, onNoObservers) {
          const proxy = new ObserverProxy(executor, onNoObservers);
          return proxy.subscribe.bind(proxy);
        }
        /**
         * Implement fan-out for any number of Observers attached via a subscribe
         * function.
         */
        class ObserverProxy {
          /**
           * @param executor Function which can make calls to a single Observer
           *     as a proxy.
           * @param onNoObservers Callback when count of Observers goes to zero.
           */
          constructor(executor, onNoObservers) {
            this.observers = [];
            this.unsubscribes = [];
            this.observerCount = 0;
            // Micro-task scheduling by calling task.then().
            this.task = Promise.resolve();
            this.finalized = false;
            this.onNoObservers = onNoObservers;
            // Call the executor asynchronously so subscribers that are called
            // synchronously after the creation of the subscribe function
            // can still receive the very first value generated in the executor.
            this.task
              .then(() => {
                executor(this);
              })
              .catch((e) => {
                this.error(e);
              });
          }
          next(value) {
            this.forEachObserver((observer) => {
              observer.next(value);
            });
          }
          error(error) {
            this.forEachObserver((observer) => {
              observer.error(error);
            });
            this.close(error);
          }
          complete() {
            this.forEachObserver((observer) => {
              observer.complete();
            });
            this.close();
          }
          /**
           * Subscribe function that can be used to add an Observer to the fan-out list.
           *
           * - We require that no event is sent to a subscriber sychronously to their
           *   call to subscribe().
           */
          subscribe(nextOrObserver, error, complete) {
            let observer;
            if (
              nextOrObserver === undefined &&
              error === undefined &&
              complete === undefined
            ) {
              throw new Error("Missing Observer.");
            }
            // Assemble an Observer object when passed as callback functions.
            if (
              implementsAnyMethods(nextOrObserver, [
                "next",
                "error",
                "complete",
              ])
            ) {
              observer = nextOrObserver;
            } else {
              observer = {
                next: nextOrObserver,
                error,
                complete,
              };
            }
            if (observer.next === undefined) {
              observer.next = noop;
            }
            if (observer.error === undefined) {
              observer.error = noop;
            }
            if (observer.complete === undefined) {
              observer.complete = noop;
            }
            const unsub = this.unsubscribeOne.bind(this, this.observers.length);
            // Attempt to subscribe to a terminated Observable - we
            // just respond to the Observer with the final error or complete
            // event.
            if (this.finalized) {
              // eslint-disable-next-line @typescript-eslint/no-floating-promises
              this.task.then(() => {
                try {
                  if (this.finalError) {
                    observer.error(this.finalError);
                  } else {
                    observer.complete();
                  }
                } catch (e) {
                  // nothing
                }
                return;
              });
            }
            this.observers.push(observer);
            return unsub;
          }
          // Unsubscribe is synchronous - we guarantee that no events are sent to
          // any unsubscribed Observer.
          unsubscribeOne(i) {
            if (
              this.observers === undefined ||
              this.observers[i] === undefined
            ) {
              return;
            }
            delete this.observers[i];
            this.observerCount -= 1;
            if (this.observerCount === 0 && this.onNoObservers !== undefined) {
              this.onNoObservers(this);
            }
          }
          forEachObserver(fn) {
            if (this.finalized) {
              // Already closed by previous event....just eat the additional values.
              return;
            }
            // Since sendOne calls asynchronously - there is no chance that
            // this.observers will become undefined.
            for (let i = 0; i < this.observers.length; i++) {
              this.sendOne(i, fn);
            }
          }
          // Call the Observer via one of it's callback function. We are careful to
          // confirm that the observe has not been unsubscribed since this asynchronous
          // function had been queued.
          sendOne(i, fn) {
            // Execute the callback asynchronously
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(() => {
              if (
                this.observers !== undefined &&
                this.observers[i] !== undefined
              ) {
                try {
                  fn(this.observers[i]);
                } catch (e) {
                  // Ignore exceptions raised in Observers or missing methods of an
                  // Observer.
                  // Log error to console. b/31404806
                  if (typeof console !== "undefined" && console.error) {
                    console.error(e);
                  }
                }
              }
            });
          }
          close(err) {
            if (this.finalized) {
              return;
            }
            this.finalized = true;
            if (err !== undefined) {
              this.finalError = err;
            }
            // Proxy is no longer needed - garbage collect references
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(() => {
              this.observers = undefined;
              this.onNoObservers = undefined;
            });
          }
        }
        /** Turn synchronous function into one called asynchronously. */
        // eslint-disable-next-line @typescript-eslint/ban-types
        function async(fn, onError) {
          return (...args) => {
            Promise.resolve(true)
              .then(() => {
                fn(...args);
              })
              .catch((error) => {
                if (onError) {
                  onError(error);
                }
              });
          };
        }
        /**
         * Return true if the object passed in implements any of the named methods.
         */
        function implementsAnyMethods(obj, methods) {
          if (typeof obj !== "object" || obj === null) {
            return false;
          }
          for (const method of methods) {
            if (method in obj && typeof obj[method] === "function") {
              return true;
            }
          }
          return false;
        }
        function noop() {
          // do nothing
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Check to make sure the appropriate number of arguments are provided for a public function.
         * Throws an error if it fails.
         *
         * @param fnName The function name
         * @param minCount The minimum number of arguments to allow for the function call
         * @param maxCount The maximum number of argument to allow for the function call
         * @param argCount The actual number of arguments provided.
         */
        const validateArgCount = function (
          fnName,
          minCount,
          maxCount,
          argCount
        ) {
          let argError;
          if (argCount < minCount) {
            argError = "at least " + minCount;
          } else if (argCount > maxCount) {
            argError = maxCount === 0 ? "none" : "no more than " + maxCount;
          }
          if (argError) {
            const error =
              fnName +
              " failed: Was called with " +
              argCount +
              (argCount === 1 ? " argument." : " arguments.") +
              " Expects " +
              argError +
              ".";
            throw new Error(error);
          }
        };
        /**
         * Generates a string to prefix an error message about failed argument validation
         *
         * @param fnName The function name
         * @param argName The name of the argument
         * @return The prefix to add to the error thrown for validation.
         */
        function errorPrefix(fnName, argName) {
          return `${fnName} failed: ${argName} argument `;
        }
        /**
         * @param fnName
         * @param argumentNumber
         * @param namespace
         * @param optional
         */
        function validateNamespace(fnName, namespace, optional) {
          if (optional && !namespace) {
            return;
          }
          if (typeof namespace !== "string") {
            //TODO: I should do more validation here. We only allow certain chars in namespaces.
            throw new Error(
              errorPrefix(fnName, "namespace") +
                "must be a valid firebase namespace."
            );
          }
        }
        function validateCallback(
          fnName,
          argumentName,
          // eslint-disable-next-line @typescript-eslint/ban-types
          callback,
          optional
        ) {
          if (optional && !callback) {
            return;
          }
          if (typeof callback !== "function") {
            throw new Error(
              errorPrefix(fnName, argumentName) + "must be a valid function."
            );
          }
        }
        function validateContextObject(
          fnName,
          argumentName,
          context,
          optional
        ) {
          if (optional && !context) {
            return;
          }
          if (typeof context !== "object" || context === null) {
            throw new Error(
              errorPrefix(fnName, argumentName) +
                "must be a valid context object."
            );
          }
        }

        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        // Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
        // automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
        // so it's been modified.
        // Note that not all Unicode characters appear as single characters in JavaScript strings.
        // fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
        // use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
        // character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
        // pair).
        // See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
        /**
         * @param {string} str
         * @return {Array}
         */
        const stringToByteArray = function (str) {
          const out = [];
          let p = 0;
          for (let i = 0; i < str.length; i++) {
            let c = str.charCodeAt(i);
            // Is this the lead surrogate in a surrogate pair?
            if (c >= 0xd800 && c <= 0xdbff) {
              const high = c - 0xd800; // the high 10 bits.
              i++;
              assert(i < str.length, "Surrogate pair missing trail surrogate.");
              const low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
              c = 0x10000 + (high << 10) + low;
            }
            if (c < 128) {
              out[p++] = c;
            } else if (c < 2048) {
              out[p++] = (c >> 6) | 192;
              out[p++] = (c & 63) | 128;
            } else if (c < 65536) {
              out[p++] = (c >> 12) | 224;
              out[p++] = ((c >> 6) & 63) | 128;
              out[p++] = (c & 63) | 128;
            } else {
              out[p++] = (c >> 18) | 240;
              out[p++] = ((c >> 12) & 63) | 128;
              out[p++] = ((c >> 6) & 63) | 128;
              out[p++] = (c & 63) | 128;
            }
          }
          return out;
        };
        /**
         * Calculate length without actually converting; useful for doing cheaper validation.
         * @param {string} str
         * @return {number}
         */
        const stringLength = function (str) {
          let p = 0;
          for (let i = 0; i < str.length; i++) {
            const c = str.charCodeAt(i);
            if (c < 128) {
              p++;
            } else if (c < 2048) {
              p += 2;
            } else if (c >= 0xd800 && c <= 0xdbff) {
              // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
              p += 4;
              i++; // skip trail surrogate.
            } else {
              p += 3;
            }
          }
          return p;
        };

        /**
         * @license
         * Copyright 2022 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Copied from https://stackoverflow.com/a/2117523
         * Generates a new uuid.
         * @public
         */
        const uuidv4 = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            (c) => {
              const r = (Math.random() * 16) | 0,
                v = c === "x" ? r : (r & 0x3) | 0x8;
              return v.toString(16);
            }
          );
        };

        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * The amount of milliseconds to exponentially increase.
         */
        const DEFAULT_INTERVAL_MILLIS = 1000;
        /**
         * The factor to backoff by.
         * Should be a number greater than 1.
         */
        const DEFAULT_BACKOFF_FACTOR = 2;
        /**
         * The maximum milliseconds to increase to.
         *
         * <p>Visible for testing
         */
        const MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
        /**
         * The percentage of backoff time to randomize by.
         * See
         * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
         * for context.
         *
         * <p>Visible for testing
         */
        const RANDOM_FACTOR = 0.5;
        /**
         * Based on the backoff method from
         * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
         * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
         */
        function calculateBackoffMillis(
          backoffCount,
          intervalMillis = DEFAULT_INTERVAL_MILLIS,
          backoffFactor = DEFAULT_BACKOFF_FACTOR
        ) {
          // Calculates an exponentially increasing value.
          // Deviation: calculates value from count and a constant interval, so we only need to save value
          // and count to restore state.
          const currBaseValue =
            intervalMillis * Math.pow(backoffFactor, backoffCount);
          // A random "fuzz" to avoid waves of retries.
          // Deviation: randomFactor is required.
          const randomWait = Math.round(
            // A fraction of the backoff value to add/subtract.
            // Deviation: changes multiplication order to improve readability.
            RANDOM_FACTOR *
              currBaseValue *
              // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
              // if we add or subtract.
              (Math.random() - 0.5) *
              2
          );
          // Limits backoff to max to avoid effectively permanent backoff.
          return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
        }

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Provide English ordinal letters after a number
         */
        function ordinal(i) {
          if (!Number.isFinite(i)) {
            return `${i}`;
          }
          return i + indicator(i);
        }
        function indicator(i) {
          i = Math.abs(i);
          const cent = i % 100;
          if (cent >= 10 && cent <= 20) {
            return "th";
          }
          const dec = i % 10;
          if (dec === 1) {
            return "st";
          }
          if (dec === 2) {
            return "nd";
          }
          if (dec === 3) {
            return "rd";
          }
          return "th";
        }

        /**
         * @license
         * Copyright 2021 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function getModularInstance(service) {
          if (service && service._delegate) {
            return service._delegate;
          } else {
            return service;
          }
        }

        //# sourceMappingURL=index.esm2017.js.map

        /***/
      },

    /***/ "./node_modules/@firebase/app/dist/esm/index.esm2017.js":
      /*!**************************************************************!*\
  !*** ./node_modules/@firebase/app/dist/esm/index.esm2017.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ FirebaseError: () =>
            /* reexport safe */ _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError,
          /* harmony export */ SDK_VERSION: () => /* binding */ SDK_VERSION,
          /* harmony export */ _DEFAULT_ENTRY_NAME: () =>
            /* binding */ DEFAULT_ENTRY_NAME,
          /* harmony export */ _addComponent: () => /* binding */ _addComponent,
          /* harmony export */ _addOrOverwriteComponent: () =>
            /* binding */ _addOrOverwriteComponent,
          /* harmony export */ _apps: () => /* binding */ _apps,
          /* harmony export */ _clearComponents: () =>
            /* binding */ _clearComponents,
          /* harmony export */ _components: () => /* binding */ _components,
          /* harmony export */ _getProvider: () => /* binding */ _getProvider,
          /* harmony export */ _registerComponent: () =>
            /* binding */ _registerComponent,
          /* harmony export */ _removeServiceInstance: () =>
            /* binding */ _removeServiceInstance,
          /* harmony export */ deleteApp: () => /* binding */ deleteApp,
          /* harmony export */ getApp: () => /* binding */ getApp,
          /* harmony export */ getApps: () => /* binding */ getApps,
          /* harmony export */ initializeApp: () => /* binding */ initializeApp,
          /* harmony export */ onLog: () => /* binding */ onLog,
          /* harmony export */ registerVersion: () =>
            /* binding */ registerVersion,
          /* harmony export */ setLogLevel: () => /* binding */ setLogLevel,
          /* harmony export */
        });
        /* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @firebase/component */ "./node_modules/@firebase/component/dist/esm/index.esm2017.js"
          );
        /* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @firebase/logger */ "./node_modules/@firebase/logger/dist/esm/index.esm2017.js"
          );
        /* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js"
          );
        /* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! idb */ "./node_modules/idb/build/index.js");

        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        class PlatformLoggerServiceImpl {
          constructor(container) {
            this.container = container;
          }
          // In initial implementation, this will be called by installations on
          // auth token refresh, and installations will send this string.
          getPlatformInfoString() {
            const providers = this.container.getProviders();
            // Loop through providers and get library/version pairs from any that are
            // version components.
            return providers
              .map((provider) => {
                if (isVersionServiceProvider(provider)) {
                  const service = provider.getImmediate();
                  return `${service.library}/${service.version}`;
                } else {
                  return null;
                }
              })
              .filter((logString) => logString)
              .join(" ");
          }
        }
        /**
         *
         * @param provider check if this provider provides a VersionService
         *
         * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
         * provides VersionService. The provider is not necessarily a 'app-version'
         * provider.
         */
        function isVersionServiceProvider(provider) {
          const component = provider.getComponent();
          return (
            (component === null || component === void 0
              ? void 0
              : component.type) === "VERSION" /* ComponentType.VERSION */
          );
        }

        const name$o = "@firebase/app";
        const version$1 = "0.9.0";

        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        const logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_1__.Logger(
          "@firebase/app"
        );

        const name$n = "@firebase/app-compat";

        const name$m = "@firebase/analytics-compat";

        const name$l = "@firebase/analytics";

        const name$k = "@firebase/app-check-compat";

        const name$j = "@firebase/app-check";

        const name$i = "@firebase/auth";

        const name$h = "@firebase/auth-compat";

        const name$g = "@firebase/database";

        const name$f = "@firebase/database-compat";

        const name$e = "@firebase/functions";

        const name$d = "@firebase/functions-compat";

        const name$c = "@firebase/installations";

        const name$b = "@firebase/installations-compat";

        const name$a = "@firebase/messaging";

        const name$9 = "@firebase/messaging-compat";

        const name$8 = "@firebase/performance";

        const name$7 = "@firebase/performance-compat";

        const name$6 = "@firebase/remote-config";

        const name$5 = "@firebase/remote-config-compat";

        const name$4 = "@firebase/storage";

        const name$3 = "@firebase/storage-compat";

        const name$2 = "@firebase/firestore";

        const name$1 = "@firebase/firestore-compat";

        const name = "firebase";
        const version = "9.15.0";

        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * The default app name
         *
         * @internal
         */
        const DEFAULT_ENTRY_NAME = "[DEFAULT]";
        const PLATFORM_LOG_STRING = {
          [name$o]: "fire-core",
          [name$n]: "fire-core-compat",
          [name$l]: "fire-analytics",
          [name$m]: "fire-analytics-compat",
          [name$j]: "fire-app-check",
          [name$k]: "fire-app-check-compat",
          [name$i]: "fire-auth",
          [name$h]: "fire-auth-compat",
          [name$g]: "fire-rtdb",
          [name$f]: "fire-rtdb-compat",
          [name$e]: "fire-fn",
          [name$d]: "fire-fn-compat",
          [name$c]: "fire-iid",
          [name$b]: "fire-iid-compat",
          [name$a]: "fire-fcm",
          [name$9]: "fire-fcm-compat",
          [name$8]: "fire-perf",
          [name$7]: "fire-perf-compat",
          [name$6]: "fire-rc",
          [name$5]: "fire-rc-compat",
          [name$4]: "fire-gcs",
          [name$3]: "fire-gcs-compat",
          [name$2]: "fire-fst",
          [name$1]: "fire-fst-compat",
          "fire-js": "fire-js",
          [name]: "fire-js-all",
        };

        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * @internal
         */
        const _apps = new Map();
        /**
         * Registered components.
         *
         * @internal
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const _components = new Map();
        /**
         * @param component - the component being added to this app's container
         *
         * @internal
         */
        function _addComponent(app, component) {
          try {
            app.container.addComponent(component);
          } catch (e) {
            logger.debug(
              `Component ${component.name} failed to register with FirebaseApp ${app.name}`,
              e
            );
          }
        }
        /**
         *
         * @internal
         */
        function _addOrOverwriteComponent(app, component) {
          app.container.addOrOverwriteComponent(component);
        }
        /**
         *
         * @param component - the component to register
         * @returns whether or not the component is registered successfully
         *
         * @internal
         */
        function _registerComponent(component) {
          const componentName = component.name;
          if (_components.has(componentName)) {
            logger.debug(
              `There were multiple attempts to register component ${componentName}.`
            );
            return false;
          }
          _components.set(componentName, component);
          // add the component to existing app instances
          for (const app of _apps.values()) {
            _addComponent(app, component);
          }
          return true;
        }
        /**
         *
         * @param app - FirebaseApp instance
         * @param name - service name
         *
         * @returns the provider for the service with the matching name
         *
         * @internal
         */
        function _getProvider(app, name) {
          const heartbeatController = app.container
            .getProvider("heartbeat")
            .getImmediate({ optional: true });
          if (heartbeatController) {
            void heartbeatController.triggerHeartbeat();
          }
          return app.container.getProvider(name);
        }
        /**
         *
         * @param app - FirebaseApp instance
         * @param name - service name
         * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
         *
         * @internal
         */
        function _removeServiceInstance(
          app,
          name,
          instanceIdentifier = DEFAULT_ENTRY_NAME
        ) {
          _getProvider(app, name).clearInstance(instanceIdentifier);
        }
        /**
         * Test only
         *
         * @internal
         */
        function _clearComponents() {
          _components.clear();
        }

        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        const ERRORS = {
          ["no-app" /* AppError.NO_APP */]:
            "No Firebase App '{$appName}' has been created - " +
            "call Firebase App.initializeApp()",
          ["bad-app-name" /* AppError.BAD_APP_NAME */]:
            "Illegal App name: '{$appName}",
          ["duplicate-app" /* AppError.DUPLICATE_APP */]:
            "Firebase App named '{$appName}' already exists with different options or config",
          ["app-deleted" /* AppError.APP_DELETED */]:
            "Firebase App named '{$appName}' already deleted",
          ["no-options" /* AppError.NO_OPTIONS */]:
            "Need to provide options, when not being deployed to hosting via source.",
          ["invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */]:
            "firebase.{$appName}() takes either no argument or a " +
            "Firebase App instance.",
          ["invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */]:
            "First argument to `onLog` must be null or a function.",
          ["idb-open" /* AppError.IDB_OPEN */]:
            "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
          ["idb-get" /* AppError.IDB_GET */]:
            "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
          ["idb-set" /* AppError.IDB_WRITE */]:
            "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
          ["idb-delete" /* AppError.IDB_DELETE */]:
            "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
        };
        const ERROR_FACTORY =
          new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory(
            "app",
            "Firebase",
            ERRORS
          );

        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        class FirebaseAppImpl {
          constructor(options, config, container) {
            this._isDeleted = false;
            this._options = Object.assign({}, options);
            this._config = Object.assign({}, config);
            this._name = config.name;
            this._automaticDataCollectionEnabled =
              config.automaticDataCollectionEnabled;
            this._container = container;
            this.container.addComponent(
              new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component(
                "app",
                () => this,
                "PUBLIC" /* ComponentType.PUBLIC */
              )
            );
          }
          get automaticDataCollectionEnabled() {
            this.checkDestroyed();
            return this._automaticDataCollectionEnabled;
          }
          set automaticDataCollectionEnabled(val) {
            this.checkDestroyed();
            this._automaticDataCollectionEnabled = val;
          }
          get name() {
            this.checkDestroyed();
            return this._name;
          }
          get options() {
            this.checkDestroyed();
            return this._options;
          }
          get config() {
            this.checkDestroyed();
            return this._config;
          }
          get container() {
            return this._container;
          }
          get isDeleted() {
            return this._isDeleted;
          }
          set isDeleted(val) {
            this._isDeleted = val;
          }
          /**
           * This function will throw an Error if the App has already been deleted -
           * use before performing API actions on the App.
           */
          checkDestroyed() {
            if (this.isDeleted) {
              throw ERROR_FACTORY.create(
                "app-deleted" /* AppError.APP_DELETED */,
                { appName: this._name }
              );
            }
          }
        }

        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * The current SDK version.
         *
         * @public
         */
        const SDK_VERSION = version;
        function initializeApp(_options, rawConfig = {}) {
          let options = _options;
          if (typeof rawConfig !== "object") {
            const name = rawConfig;
            rawConfig = { name };
          }
          const config = Object.assign(
            { name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: false },
            rawConfig
          );
          const name = config.name;
          if (typeof name !== "string" || !name) {
            throw ERROR_FACTORY.create(
              "bad-app-name" /* AppError.BAD_APP_NAME */,
              {
                appName: String(name),
              }
            );
          }
          options ||
            (options = (0,
            _firebase_util__WEBPACK_IMPORTED_MODULE_2__.getDefaultAppConfig)());
          if (!options) {
            throw ERROR_FACTORY.create("no-options" /* AppError.NO_OPTIONS */);
          }
          const existingApp = _apps.get(name);
          if (existingApp) {
            // return the existing app if options and config deep equal the ones in the existing app.
            if (
              (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(
                options,
                existingApp.options
              ) &&
              (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(
                config,
                existingApp.config
              )
            ) {
              return existingApp;
            } else {
              throw ERROR_FACTORY.create(
                "duplicate-app" /* AppError.DUPLICATE_APP */,
                { appName: name }
              );
            }
          }
          const container =
            new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.ComponentContainer(
              name
            );
          for (const component of _components.values()) {
            container.addComponent(component);
          }
          const newApp = new FirebaseAppImpl(options, config, container);
          _apps.set(name, newApp);
          return newApp;
        }
        /**
         * Retrieves a {@link @firebase/app#FirebaseApp} instance.
         *
         * When called with no arguments, the default app is returned. When an app name
         * is provided, the app corresponding to that name is returned.
         *
         * An exception is thrown if the app being retrieved has not yet been
         * initialized.
         *
         * @example
         * ```javascript
         * // Return the default app
         * const app = getApp();
         * ```
         *
         * @example
         * ```javascript
         * // Return a named app
         * const otherApp = getApp("otherApp");
         * ```
         *
         * @param name - Optional name of the app to return. If no name is
         *   provided, the default is `"[DEFAULT]"`.
         *
         * @returns The app corresponding to the provided app name.
         *   If no app name is provided, the default app is returned.
         *
         * @public
         */
        function getApp(name = DEFAULT_ENTRY_NAME) {
          const app = _apps.get(name);
          if (!app && name === DEFAULT_ENTRY_NAME) {
            return initializeApp();
          }
          if (!app) {
            throw ERROR_FACTORY.create("no-app" /* AppError.NO_APP */, {
              appName: name,
            });
          }
          return app;
        }
        /**
         * A (read-only) array of all initialized apps.
         * @public
         */
        function getApps() {
          return Array.from(_apps.values());
        }
        /**
         * Renders this app unusable and frees the resources of all associated
         * services.
         *
         * @example
         * ```javascript
         * deleteApp(app)
         *   .then(function() {
         *     console.log("App deleted successfully");
         *   })
         *   .catch(function(error) {
         *     console.log("Error deleting app:", error);
         *   });
         * ```
         *
         * @public
         */
        async function deleteApp(app) {
          const name = app.name;
          if (_apps.has(name)) {
            _apps.delete(name);
            await Promise.all(
              app.container.getProviders().map((provider) => provider.delete())
            );
            app.isDeleted = true;
          }
        }
        /**
         * Registers a library's name and version for platform logging purposes.
         * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
         * @param version - Current version of that library.
         * @param variant - Bundle variant, e.g., node, rn, etc.
         *
         * @public
         */
        function registerVersion(libraryKeyOrName, version, variant) {
          var _a;
          // TODO: We can use this check to whitelist strings when/if we set up
          // a good whitelist system.
          let library =
            (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null &&
            _a !== void 0
              ? _a
              : libraryKeyOrName;
          if (variant) {
            library += `-${variant}`;
          }
          const libraryMismatch = library.match(/\s|\//);
          const versionMismatch = version.match(/\s|\//);
          if (libraryMismatch || versionMismatch) {
            const warning = [
              `Unable to register library "${library}" with version "${version}":`,
            ];
            if (libraryMismatch) {
              warning.push(
                `library name "${library}" contains illegal characters (whitespace or "/")`
              );
            }
            if (libraryMismatch && versionMismatch) {
              warning.push("and");
            }
            if (versionMismatch) {
              warning.push(
                `version name "${version}" contains illegal characters (whitespace or "/")`
              );
            }
            logger.warn(warning.join(" "));
            return;
          }
          _registerComponent(
            new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component(
              `${library}-version`,
              () => ({ library, version }),
              "VERSION" /* ComponentType.VERSION */
            )
          );
        }
        /**
         * Sets log handler for all Firebase SDKs.
         * @param logCallback - An optional custom log handler that executes user code whenever
         * the Firebase SDK makes a logging call.
         *
         * @public
         */
        function onLog(logCallback, options) {
          if (logCallback !== null && typeof logCallback !== "function") {
            throw ERROR_FACTORY.create(
              "invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */
            );
          }
          (0, _firebase_logger__WEBPACK_IMPORTED_MODULE_1__.setUserLogHandler)(
            logCallback,
            options
          );
        }
        /**
         * Sets log level for all Firebase SDKs.
         *
         * All of the log types above the current log level are captured (i.e. if
         * you set the log level to `info`, errors are logged, but `debug` and
         * `verbose` logs are not).
         *
         * @public
         */
        function setLogLevel(logLevel) {
          (0, _firebase_logger__WEBPACK_IMPORTED_MODULE_1__.setLogLevel)(
            logLevel
          );
        }

        /**
         * @license
         * Copyright 2021 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        const DB_NAME = "firebase-heartbeat-database";
        const DB_VERSION = 1;
        const STORE_NAME = "firebase-heartbeat-store";
        let dbPromise = null;
        function getDbPromise() {
          if (!dbPromise) {
            dbPromise = (0, idb__WEBPACK_IMPORTED_MODULE_3__.openDB)(
              DB_NAME,
              DB_VERSION,
              {
                upgrade: (db, oldVersion) => {
                  // We don't use 'break' in this switch statement, the fall-through
                  // behavior is what we want, because if there are multiple versions between
                  // the old version and the current version, we want ALL the migrations
                  // that correspond to those versions to run, not only the last one.
                  // eslint-disable-next-line default-case
                  switch (oldVersion) {
                    case 0:
                      db.createObjectStore(STORE_NAME);
                  }
                },
              }
            ).catch((e) => {
              throw ERROR_FACTORY.create("idb-open" /* AppError.IDB_OPEN */, {
                originalErrorMessage: e.message,
              });
            });
          }
          return dbPromise;
        }
        async function readHeartbeatsFromIndexedDB(app) {
          try {
            const db = await getDbPromise();
            return db
              .transaction(STORE_NAME)
              .objectStore(STORE_NAME)
              .get(computeKey(app));
          } catch (e) {
            if (
              e instanceof
              _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError
            ) {
              logger.warn(e.message);
            } else {
              const idbGetError = ERROR_FACTORY.create(
                "idb-get" /* AppError.IDB_GET */,
                {
                  originalErrorMessage:
                    e === null || e === void 0 ? void 0 : e.message,
                }
              );
              logger.warn(idbGetError.message);
            }
          }
        }
        async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
          try {
            const db = await getDbPromise();
            const tx = db.transaction(STORE_NAME, "readwrite");
            const objectStore = tx.objectStore(STORE_NAME);
            await objectStore.put(heartbeatObject, computeKey(app));
            return tx.done;
          } catch (e) {
            if (
              e instanceof
              _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError
            ) {
              logger.warn(e.message);
            } else {
              const idbGetError = ERROR_FACTORY.create(
                "idb-set" /* AppError.IDB_WRITE */,
                {
                  originalErrorMessage:
                    e === null || e === void 0 ? void 0 : e.message,
                }
              );
              logger.warn(idbGetError.message);
            }
          }
        }
        function computeKey(app) {
          return `${app.name}!${app.options.appId}`;
        }

        /**
         * @license
         * Copyright 2021 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        const MAX_HEADER_BYTES = 1024;
        // 30 days
        const STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1000;
        class HeartbeatServiceImpl {
          constructor(container) {
            this.container = container;
            /**
             * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
             * the header string.
             * Stores one record per date. This will be consolidated into the standard
             * format of one record per user agent string before being sent as a header.
             * Populated from indexedDB when the controller is instantiated and should
             * be kept in sync with indexedDB.
             * Leave public for easier testing.
             */
            this._heartbeatsCache = null;
            const app = this.container.getProvider("app").getImmediate();
            this._storage = new HeartbeatStorageImpl(app);
            this._heartbeatsCachePromise = this._storage
              .read()
              .then((result) => {
                this._heartbeatsCache = result;
                return result;
              });
          }
          /**
           * Called to report a heartbeat. The function will generate
           * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
           * to IndexedDB.
           * Note that we only store one heartbeat per day. So if a heartbeat for today is
           * already logged, subsequent calls to this function in the same day will be ignored.
           */
          async triggerHeartbeat() {
            const platformLogger = this.container
              .getProvider("platform-logger")
              .getImmediate();
            // This is the "Firebase user agent" string from the platform logger
            // service, not the browser user agent.
            const agent = platformLogger.getPlatformInfoString();
            const date = getUTCDateString();
            if (this._heartbeatsCache === null) {
              this._heartbeatsCache = await this._heartbeatsCachePromise;
            }
            // Do not store a heartbeat if one is already stored for this day
            // or if a header has already been sent today.
            if (
              this._heartbeatsCache.lastSentHeartbeatDate === date ||
              this._heartbeatsCache.heartbeats.some(
                (singleDateHeartbeat) => singleDateHeartbeat.date === date
              )
            ) {
              return;
            } else {
              // There is no entry for this date. Create one.
              this._heartbeatsCache.heartbeats.push({ date, agent });
            }
            // Remove entries older than 30 days.
            this._heartbeatsCache.heartbeats =
              this._heartbeatsCache.heartbeats.filter((singleDateHeartbeat) => {
                const hbTimestamp = new Date(
                  singleDateHeartbeat.date
                ).valueOf();
                const now = Date.now();
                return (
                  now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS
                );
              });
            return this._storage.overwrite(this._heartbeatsCache);
          }
          /**
           * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
           * It also clears all heartbeats from memory as well as in IndexedDB.
           *
           * NOTE: Consuming product SDKs should not send the header if this method
           * returns an empty string.
           */
          async getHeartbeatsHeader() {
            if (this._heartbeatsCache === null) {
              await this._heartbeatsCachePromise;
            }
            // If it's still null or the array is empty, there is no data to send.
            if (
              this._heartbeatsCache === null ||
              this._heartbeatsCache.heartbeats.length === 0
            ) {
              return "";
            }
            const date = getUTCDateString();
            // Extract as many heartbeats from the cache as will fit under the size limit.
            const { heartbeatsToSend, unsentEntries } =
              extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
            const headerString = (0,
            _firebase_util__WEBPACK_IMPORTED_MODULE_2__.base64urlEncodeWithoutPadding)(
              JSON.stringify({ version: 2, heartbeats: heartbeatsToSend })
            );
            // Store last sent date to prevent another being logged/sent for the same day.
            this._heartbeatsCache.lastSentHeartbeatDate = date;
            if (unsentEntries.length > 0) {
              // Store any unsent entries if they exist.
              this._heartbeatsCache.heartbeats = unsentEntries;
              // This seems more likely than emptying the array (below) to lead to some odd state
              // since the cache isn't empty and this will be called again on the next request,
              // and is probably safest if we await it.
              await this._storage.overwrite(this._heartbeatsCache);
            } else {
              this._heartbeatsCache.heartbeats = [];
              // Do not wait for this, to reduce latency.
              void this._storage.overwrite(this._heartbeatsCache);
            }
            return headerString;
          }
        }
        function getUTCDateString() {
          const today = new Date();
          // Returns date format 'YYYY-MM-DD'
          return today.toISOString().substring(0, 10);
        }
        function extractHeartbeatsForHeader(
          heartbeatsCache,
          maxSize = MAX_HEADER_BYTES
        ) {
          // Heartbeats grouped by user agent in the standard format to be sent in
          // the header.
          const heartbeatsToSend = [];
          // Single date format heartbeats that are not sent.
          let unsentEntries = heartbeatsCache.slice();
          for (const singleDateHeartbeat of heartbeatsCache) {
            // Look for an existing entry with the same user agent.
            const heartbeatEntry = heartbeatsToSend.find(
              (hb) => hb.agent === singleDateHeartbeat.agent
            );
            if (!heartbeatEntry) {
              // If no entry for this user agent exists, create one.
              heartbeatsToSend.push({
                agent: singleDateHeartbeat.agent,
                dates: [singleDateHeartbeat.date],
              });
              if (countBytes(heartbeatsToSend) > maxSize) {
                // If the header would exceed max size, remove the added heartbeat
                // entry and stop adding to the header.
                heartbeatsToSend.pop();
                break;
              }
            } else {
              heartbeatEntry.dates.push(singleDateHeartbeat.date);
              // If the header would exceed max size, remove the added date
              // and stop adding to the header.
              if (countBytes(heartbeatsToSend) > maxSize) {
                heartbeatEntry.dates.pop();
                break;
              }
            }
            // Pop unsent entry from queue. (Skipped if adding the entry exceeded
            // quota and the loop breaks early.)
            unsentEntries = unsentEntries.slice(1);
          }
          return {
            heartbeatsToSend,
            unsentEntries,
          };
        }
        class HeartbeatStorageImpl {
          constructor(app) {
            this.app = app;
            this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
          }
          async runIndexedDBEnvironmentCheck() {
            if (
              !(0,
              _firebase_util__WEBPACK_IMPORTED_MODULE_2__.isIndexedDBAvailable)()
            ) {
              return false;
            } else {
              return (0,
              _firebase_util__WEBPACK_IMPORTED_MODULE_2__.validateIndexedDBOpenable)()
                .then(() => true)
                .catch(() => false);
            }
          }
          /**
           * Read all heartbeats.
           */
          async read() {
            const canUseIndexedDB = await this._canUseIndexedDBPromise;
            if (!canUseIndexedDB) {
              return { heartbeats: [] };
            } else {
              const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(
                this.app
              );
              return idbHeartbeatObject || { heartbeats: [] };
            }
          }
          // overwrite the storage with the provided heartbeats
          async overwrite(heartbeatsObject) {
            var _a;
            const canUseIndexedDB = await this._canUseIndexedDBPromise;
            if (!canUseIndexedDB) {
              return;
            } else {
              const existingHeartbeatsObject = await this.read();
              return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate:
                  (_a = heartbeatsObject.lastSentHeartbeatDate) !== null &&
                  _a !== void 0
                    ? _a
                    : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: heartbeatsObject.heartbeats,
              });
            }
          }
          // add heartbeats
          async add(heartbeatsObject) {
            var _a;
            const canUseIndexedDB = await this._canUseIndexedDBPromise;
            if (!canUseIndexedDB) {
              return;
            } else {
              const existingHeartbeatsObject = await this.read();
              return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate:
                  (_a = heartbeatsObject.lastSentHeartbeatDate) !== null &&
                  _a !== void 0
                    ? _a
                    : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: [
                  ...existingHeartbeatsObject.heartbeats,
                  ...heartbeatsObject.heartbeats,
                ],
              });
            }
          }
        }
        /**
         * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
         * in a platform logging header JSON object, stringified, and converted
         * to base 64.
         */
        function countBytes(heartbeatsCache) {
          // base64 has a restricted set of characters, all of which should be 1 byte.
          return (0,
          _firebase_util__WEBPACK_IMPORTED_MODULE_2__.base64urlEncodeWithoutPadding)(
            // heartbeatsCache wrapper properties
            JSON.stringify({ version: 2, heartbeats: heartbeatsCache })
          ).length;
        }

        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function registerCoreComponents(variant) {
          _registerComponent(
            new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component(
              "platform-logger",
              (container) => new PlatformLoggerServiceImpl(container),
              "PRIVATE" /* ComponentType.PRIVATE */
            )
          );
          _registerComponent(
            new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component(
              "heartbeat",
              (container) => new HeartbeatServiceImpl(container),
              "PRIVATE" /* ComponentType.PRIVATE */
            )
          );
          // Register `app` package.
          registerVersion(name$o, version$1, variant);
          // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
          registerVersion(name$o, version$1, "esm2017");
          // Register platform SDK identifier (no version).
          registerVersion("fire-js", "");
        }

        /**
         * Firebase App
         *
         * @remarks This package coordinates the communication between the different Firebase components
         * @packageDocumentation
         */
        registerCoreComponents("");

        //# sourceMappingURL=index.esm2017.js.map

        /***/
      },

    /***/ "./node_modules/@firebase/component/dist/esm/index.esm2017.js":
      /*!********************************************************************!*\
  !*** ./node_modules/@firebase/component/dist/esm/index.esm2017.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Component: () => /* binding */ Component,
          /* harmony export */ ComponentContainer: () =>
            /* binding */ ComponentContainer,
          /* harmony export */ Provider: () => /* binding */ Provider,
          /* harmony export */
        });
        /* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js"
          );

        /**
         * Component for service name T, e.g. `auth`, `auth-internal`
         */
        class Component {
          /**
           *
           * @param name The public service name, e.g. app, auth, firestore, database
           * @param instanceFactory Service factory responsible for creating the public interface
           * @param type whether the service provided by the component is public or private
           */
          constructor(name, instanceFactory, type) {
            this.name = name;
            this.instanceFactory = instanceFactory;
            this.type = type;
            this.multipleInstances = false;
            /**
             * Properties to be added to the service namespace
             */
            this.serviceProps = {};
            this.instantiationMode = "LAZY" /* InstantiationMode.LAZY */;
            this.onInstanceCreated = null;
          }
          setInstantiationMode(mode) {
            this.instantiationMode = mode;
            return this;
          }
          setMultipleInstances(multipleInstances) {
            this.multipleInstances = multipleInstances;
            return this;
          }
          setServiceProps(props) {
            this.serviceProps = props;
            return this;
          }
          setInstanceCreatedCallback(callback) {
            this.onInstanceCreated = callback;
            return this;
          }
        }

        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        const DEFAULT_ENTRY_NAME = "[DEFAULT]";

        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
         * NameServiceMapping[T] is an alias for the type of the instance
         */
        class Provider {
          constructor(name, container) {
            this.name = name;
            this.container = container;
            this.component = null;
            this.instances = new Map();
            this.instancesDeferred = new Map();
            this.instancesOptions = new Map();
            this.onInitCallbacks = new Map();
          }
          /**
           * @param identifier A provider can provide mulitple instances of a service
           * if this.component.multipleInstances is true.
           */
          get(identifier) {
            // if multipleInstances is not supported, use the default name
            const normalizedIdentifier =
              this.normalizeInstanceIdentifier(identifier);
            if (!this.instancesDeferred.has(normalizedIdentifier)) {
              const deferred =
                new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.Deferred();
              this.instancesDeferred.set(normalizedIdentifier, deferred);
              if (
                this.isInitialized(normalizedIdentifier) ||
                this.shouldAutoInitialize()
              ) {
                // initialize the service if it can be auto-initialized
                try {
                  const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier,
                  });
                  if (instance) {
                    deferred.resolve(instance);
                  }
                } catch (e) {
                  // when the instance factory throws an exception during get(), it should not cause
                  // a fatal error. We just return the unresolved promise in this case.
                }
              }
            }
            return this.instancesDeferred.get(normalizedIdentifier).promise;
          }
          getImmediate(options) {
            var _a;
            // if multipleInstances is not supported, use the default name
            const normalizedIdentifier = this.normalizeInstanceIdentifier(
              options === null || options === void 0
                ? void 0
                : options.identifier
            );
            const optional =
              (_a =
                options === null || options === void 0
                  ? void 0
                  : options.optional) !== null && _a !== void 0
                ? _a
                : false;
            if (
              this.isInitialized(normalizedIdentifier) ||
              this.shouldAutoInitialize()
            ) {
              try {
                return this.getOrInitializeService({
                  instanceIdentifier: normalizedIdentifier,
                });
              } catch (e) {
                if (optional) {
                  return null;
                } else {
                  throw e;
                }
              }
            } else {
              // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
              if (optional) {
                return null;
              } else {
                throw Error(`Service ${this.name} is not available`);
              }
            }
          }
          getComponent() {
            return this.component;
          }
          setComponent(component) {
            if (component.name !== this.name) {
              throw Error(
                `Mismatching Component ${component.name} for Provider ${this.name}.`
              );
            }
            if (this.component) {
              throw Error(
                `Component for ${this.name} has already been provided`
              );
            }
            this.component = component;
            // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
            if (!this.shouldAutoInitialize()) {
              return;
            }
            // if the service is eager, initialize the default instance
            if (isComponentEager(component)) {
              try {
                this.getOrInitializeService({
                  instanceIdentifier: DEFAULT_ENTRY_NAME,
                });
              } catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
              }
            }
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (const [
              instanceIdentifier,
              instanceDeferred,
            ] of this.instancesDeferred.entries()) {
              const normalizedIdentifier =
                this.normalizeInstanceIdentifier(instanceIdentifier);
              try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                const instance = this.getOrInitializeService({
                  instanceIdentifier: normalizedIdentifier,
                });
                instanceDeferred.resolve(instance);
              } catch (e) {
                // when the instance factory throws an exception, it should not cause
                // a fatal error. We just leave the promise unresolved.
              }
            }
          }
          clearInstance(identifier = DEFAULT_ENTRY_NAME) {
            this.instancesDeferred.delete(identifier);
            this.instancesOptions.delete(identifier);
            this.instances.delete(identifier);
          }
          // app.delete() will call this method on every provider to delete the services
          // TODO: should we mark the provider as deleted?
          async delete() {
            const services = Array.from(this.instances.values());
            await Promise.all([
              ...services
                .filter((service) => "INTERNAL" in service) // legacy services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map((service) => service.INTERNAL.delete()),
              ...services
                .filter((service) => "_delete" in service) // modularized services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map((service) => service._delete()),
            ]);
          }
          isComponentSet() {
            return this.component != null;
          }
          isInitialized(identifier = DEFAULT_ENTRY_NAME) {
            return this.instances.has(identifier);
          }
          getOptions(identifier = DEFAULT_ENTRY_NAME) {
            return this.instancesOptions.get(identifier) || {};
          }
          initialize(opts = {}) {
            const { options = {} } = opts;
            const normalizedIdentifier = this.normalizeInstanceIdentifier(
              opts.instanceIdentifier
            );
            if (this.isInitialized(normalizedIdentifier)) {
              throw Error(
                `${this.name}(${normalizedIdentifier}) has already been initialized`
              );
            }
            if (!this.isComponentSet()) {
              throw Error(`Component ${this.name} has not been registered yet`);
            }
            const instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier,
              options,
            });
            // resolve any pending promise waiting for the service instance
            for (const [
              instanceIdentifier,
              instanceDeferred,
            ] of this.instancesDeferred.entries()) {
              const normalizedDeferredIdentifier =
                this.normalizeInstanceIdentifier(instanceIdentifier);
              if (normalizedIdentifier === normalizedDeferredIdentifier) {
                instanceDeferred.resolve(instance);
              }
            }
            return instance;
          }
          /**
           *
           * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
           * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
           *
           * @param identifier An optional instance identifier
           * @returns a function to unregister the callback
           */
          onInit(callback, identifier) {
            var _a;
            const normalizedIdentifier =
              this.normalizeInstanceIdentifier(identifier);
            const existingCallbacks =
              (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null &&
              _a !== void 0
                ? _a
                : new Set();
            existingCallbacks.add(callback);
            this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
            const existingInstance = this.instances.get(normalizedIdentifier);
            if (existingInstance) {
              callback(existingInstance, normalizedIdentifier);
            }
            return () => {
              existingCallbacks.delete(callback);
            };
          }
          /**
           * Invoke onInit callbacks synchronously
           * @param instance the service instance`
           */
          invokeOnInitCallbacks(instance, identifier) {
            const callbacks = this.onInitCallbacks.get(identifier);
            if (!callbacks) {
              return;
            }
            for (const callback of callbacks) {
              try {
                callback(instance, identifier);
              } catch (_a) {
                // ignore errors in the onInit callback
              }
            }
          }
          getOrInitializeService({ instanceIdentifier, options = {} }) {
            let instance = this.instances.get(instanceIdentifier);
            if (!instance && this.component) {
              instance = this.component.instanceFactory(this.container, {
                instanceIdentifier:
                  normalizeIdentifierForFactory(instanceIdentifier),
                options,
              });
              this.instances.set(instanceIdentifier, instance);
              this.instancesOptions.set(instanceIdentifier, options);
              /**
               * Invoke onInit listeners.
               * Note this.component.onInstanceCreated is different, which is used by the component creator,
               * while onInit listeners are registered by consumers of the provider.
               */
              this.invokeOnInitCallbacks(instance, instanceIdentifier);
              /**
               * Order is important
               * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
               * makes `isInitialized()` return true.
               */
              if (this.component.onInstanceCreated) {
                try {
                  this.component.onInstanceCreated(
                    this.container,
                    instanceIdentifier,
                    instance
                  );
                } catch (_a) {
                  // ignore errors in the onInstanceCreatedCallback
                }
              }
            }
            return instance || null;
          }
          normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
            if (this.component) {
              return this.component.multipleInstances
                ? identifier
                : DEFAULT_ENTRY_NAME;
            } else {
              return identifier; // assume multiple instances are supported before the component is provided.
            }
          }
          shouldAutoInitialize() {
            return (
              !!this.component &&
              this.component.instantiationMode !==
                "EXPLICIT" /* InstantiationMode.EXPLICIT */
            );
          }
        }
        // undefined should be passed to the service factory for the default instance
        function normalizeIdentifierForFactory(identifier) {
          return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
        }
        function isComponentEager(component) {
          return (
            component.instantiationMode ===
            "EAGER" /* InstantiationMode.EAGER */
          );
        }

        /**
         * @license
         * Copyright 2019 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
         */
        class ComponentContainer {
          constructor(name) {
            this.name = name;
            this.providers = new Map();
          }
          /**
           *
           * @param component Component being added
           * @param overwrite When a component with the same name has already been registered,
           * if overwrite is true: overwrite the existing component with the new component and create a new
           * provider with the new component. It can be useful in tests where you want to use different mocks
           * for different tests.
           * if overwrite is false: throw an exception
           */
          addComponent(component) {
            const provider = this.getProvider(component.name);
            if (provider.isComponentSet()) {
              throw new Error(
                `Component ${component.name} has already been registered with ${this.name}`
              );
            }
            provider.setComponent(component);
          }
          addOrOverwriteComponent(component) {
            const provider = this.getProvider(component.name);
            if (provider.isComponentSet()) {
              // delete the existing provider from the container, so we can register the new component
              this.providers.delete(component.name);
            }
            this.addComponent(component);
          }
          /**
           * getProvider provides a type safe interface where it can only be called with a field name
           * present in NameServiceMapping interface.
           *
           * Firebase SDKs providing services should extend NameServiceMapping interface to register
           * themselves.
           */
          getProvider(name) {
            if (this.providers.has(name)) {
              return this.providers.get(name);
            }
            // create a Provider for a service that hasn't registered with Firebase
            const provider = new Provider(name, this);
            this.providers.set(name, provider);
            return provider;
          }
          getProviders() {
            return Array.from(this.providers.values());
          }
        }

        //# sourceMappingURL=index.esm2017.js.map

        /***/
      },

    /***/ "./node_modules/@firebase/logger/dist/esm/index.esm2017.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/@firebase/logger/dist/esm/index.esm2017.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ LogLevel: () => /* binding */ LogLevel,
          /* harmony export */ Logger: () => /* binding */ Logger,
          /* harmony export */ setLogLevel: () => /* binding */ setLogLevel,
          /* harmony export */ setUserLogHandler: () =>
            /* binding */ setUserLogHandler,
          /* harmony export */
        });
        /**
         * @license
         * Copyright 2017 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /**
         * A container for all of the Logger instances
         */
        const instances = [];
        /**
         * The JS SDK supports 5 log levels and also allows a user the ability to
         * silence the logs altogether.
         *
         * The order is a follows:
         * DEBUG < VERBOSE < INFO < WARN < ERROR
         *
         * All of the log types above the current log level will be captured (i.e. if
         * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
         * `VERBOSE` logs will not)
         */
        var LogLevel;
        (function (LogLevel) {
          LogLevel[(LogLevel["DEBUG"] = 0)] = "DEBUG";
          LogLevel[(LogLevel["VERBOSE"] = 1)] = "VERBOSE";
          LogLevel[(LogLevel["INFO"] = 2)] = "INFO";
          LogLevel[(LogLevel["WARN"] = 3)] = "WARN";
          LogLevel[(LogLevel["ERROR"] = 4)] = "ERROR";
          LogLevel[(LogLevel["SILENT"] = 5)] = "SILENT";
        })(LogLevel || (LogLevel = {}));
        const levelStringToEnum = {
          debug: LogLevel.DEBUG,
          verbose: LogLevel.VERBOSE,
          info: LogLevel.INFO,
          warn: LogLevel.WARN,
          error: LogLevel.ERROR,
          silent: LogLevel.SILENT,
        };
        /**
         * The default log level
         */
        const defaultLogLevel = LogLevel.INFO;
        /**
         * By default, `console.debug` is not displayed in the developer console (in
         * chrome). To avoid forcing users to have to opt-in to these logs twice
         * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
         * logs to the `console.log` function.
         */
        const ConsoleMethod = {
          [LogLevel.DEBUG]: "log",
          [LogLevel.VERBOSE]: "log",
          [LogLevel.INFO]: "info",
          [LogLevel.WARN]: "warn",
          [LogLevel.ERROR]: "error",
        };
        /**
         * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
         * messages on to their corresponding console counterparts (if the log method
         * is supported by the current log level)
         */
        const defaultLogHandler = (instance, logType, ...args) => {
          if (logType < instance.logLevel) {
            return;
          }
          const now = new Date().toISOString();
          const method = ConsoleMethod[logType];
          if (method) {
            console[method](`[${now}]  ${instance.name}:`, ...args);
          } else {
            throw new Error(
              `Attempted to log a message with an invalid logType (value: ${logType})`
            );
          }
        };
        class Logger {
          /**
           * Gives you an instance of a Logger to capture messages according to
           * Firebase's logging scheme.
           *
           * @param name The name that the logs will be associated with
           */
          constructor(name) {
            this.name = name;
            /**
             * The log level of the given Logger instance.
             */
            this._logLevel = defaultLogLevel;
            /**
             * The main (internal) log handler for the Logger instance.
             * Can be set to a new function in internal package code but not by user.
             */
            this._logHandler = defaultLogHandler;
            /**
             * The optional, additional, user-defined log handler for the Logger instance.
             */
            this._userLogHandler = null;
            /**
             * Capture the current instance for later use
             */
            instances.push(this);
          }
          get logLevel() {
            return this._logLevel;
          }
          set logLevel(val) {
            if (!(val in LogLevel)) {
              throw new TypeError(
                `Invalid value "${val}" assigned to \`logLevel\``
              );
            }
            this._logLevel = val;
          }
          // Workaround for setter/getter having to be the same type.
          setLogLevel(val) {
            this._logLevel =
              typeof val === "string" ? levelStringToEnum[val] : val;
          }
          get logHandler() {
            return this._logHandler;
          }
          set logHandler(val) {
            if (typeof val !== "function") {
              throw new TypeError(
                "Value assigned to `logHandler` must be a function"
              );
            }
            this._logHandler = val;
          }
          get userLogHandler() {
            return this._userLogHandler;
          }
          set userLogHandler(val) {
            this._userLogHandler = val;
          }
          /**
           * The functions below are all based on the `console` interface
           */
          debug(...args) {
            this._userLogHandler &&
              this._userLogHandler(this, LogLevel.DEBUG, ...args);
            this._logHandler(this, LogLevel.DEBUG, ...args);
          }
          log(...args) {
            this._userLogHandler &&
              this._userLogHandler(this, LogLevel.VERBOSE, ...args);
            this._logHandler(this, LogLevel.VERBOSE, ...args);
          }
          info(...args) {
            this._userLogHandler &&
              this._userLogHandler(this, LogLevel.INFO, ...args);
            this._logHandler(this, LogLevel.INFO, ...args);
          }
          warn(...args) {
            this._userLogHandler &&
              this._userLogHandler(this, LogLevel.WARN, ...args);
            this._logHandler(this, LogLevel.WARN, ...args);
          }
          error(...args) {
            this._userLogHandler &&
              this._userLogHandler(this, LogLevel.ERROR, ...args);
            this._logHandler(this, LogLevel.ERROR, ...args);
          }
        }
        function setLogLevel(level) {
          instances.forEach((inst) => {
            inst.setLogLevel(level);
          });
        }
        function setUserLogHandler(logCallback, options) {
          for (const instance of instances) {
            let customLogLevel = null;
            if (options && options.level) {
              customLogLevel = levelStringToEnum[options.level];
            }
            if (logCallback === null) {
              instance.userLogHandler = null;
            } else {
              instance.userLogHandler = (instance, level, ...args) => {
                const message = args
                  .map((arg) => {
                    if (arg == null) {
                      return null;
                    } else if (typeof arg === "string") {
                      return arg;
                    } else if (
                      typeof arg === "number" ||
                      typeof arg === "boolean"
                    ) {
                      return arg.toString();
                    } else if (arg instanceof Error) {
                      return arg.message;
                    } else {
                      try {
                        return JSON.stringify(arg);
                      } catch (ignored) {
                        return null;
                      }
                    }
                  })
                  .filter((arg) => arg)
                  .join(" ");
                if (
                  level >=
                  (customLogLevel !== null && customLogLevel !== void 0
                    ? customLogLevel
                    : instance.logLevel)
                ) {
                  logCallback({
                    level: LogLevel[level].toLowerCase(),
                    message,
                    args,
                    type: instance.name,
                  });
                }
              };
            }
          }
        }

        //# sourceMappingURL=index.esm2017.js.map

        /***/
      },

    /***/ "./node_modules/firebase/app/dist/esm/index.esm.js":
      /*!*********************************************************!*\
  !*** ./node_modules/firebase/app/dist/esm/index.esm.js ***!
  \*********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ FirebaseError: () =>
            /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.FirebaseError,
          /* harmony export */ SDK_VERSION: () =>
            /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.SDK_VERSION,
          /* harmony export */ _DEFAULT_ENTRY_NAME: () =>
            /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._DEFAULT_ENTRY_NAME,
          /* harmony export */ _addComponent: () =>
            /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._addComponent,
          /* harmony export */ _addOrOverwriteComponent: () =>
            /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._addOrOverwriteComponent,
          /* harmony export */ _apps: () =>
            /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._apps,
          /* harmony export */ _clearComponents: () =>
            /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._clearComponents,
          /* harmony export */ _components: () =>
            /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._components,
          /* harmony export */ _getProvider: () =>
            /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider,
          /* harmony export */ _registerComponent: () =>
            /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent,
          /* harmony export */ _removeServiceInstance: () =>
            /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._removeServiceInstance,
          /* harmony export */ deleteApp: () =>
            /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.deleteApp,
          /* harmony export */ getApp: () =>
            /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp,
          /* harmony export */ getApps: () =>
            /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps,
          /* harmony export */ initializeApp: () =>
            /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp,
          /* harmony export */ onLog: () =>
            /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.onLog,
          /* harmony export */ registerVersion: () =>
            /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion,
          /* harmony export */ setLogLevel: () =>
            /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.setLogLevel,
          /* harmony export */
        });
        /* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @firebase/app */ "./node_modules/@firebase/app/dist/esm/index.esm2017.js"
          );

        var name = "firebase";
        var version = "9.15.0";

        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(
          name,
          version,
          "app"
        );
        //# sourceMappingURL=index.esm.js.map

        /***/
      },

    /***/ "./node_modules/firebase/firestore/lite/dist/esm/index.esm.js":
      /*!********************************************************************!*\
  !*** ./node_modules/firebase/firestore/lite/dist/esm/index.esm.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AggregateField: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.AggregateField,
          /* harmony export */ AggregateQuerySnapshot: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.AggregateQuerySnapshot,
          /* harmony export */ Bytes: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.Bytes,
          /* harmony export */ CollectionReference: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.CollectionReference,
          /* harmony export */ DocumentReference: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.DocumentReference,
          /* harmony export */ DocumentSnapshot: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.DocumentSnapshot,
          /* harmony export */ FieldPath: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.FieldPath,
          /* harmony export */ FieldValue: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.FieldValue,
          /* harmony export */ Firestore: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.Firestore,
          /* harmony export */ FirestoreError: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.FirestoreError,
          /* harmony export */ GeoPoint: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.GeoPoint,
          /* harmony export */ Query: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.Query,
          /* harmony export */ QueryCompositeFilterConstraint: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.QueryCompositeFilterConstraint,
          /* harmony export */ QueryConstraint: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.QueryConstraint,
          /* harmony export */ QueryDocumentSnapshot: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.QueryDocumentSnapshot,
          /* harmony export */ QueryEndAtConstraint: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.QueryEndAtConstraint,
          /* harmony export */ QueryFieldFilterConstraint: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.QueryFieldFilterConstraint,
          /* harmony export */ QueryLimitConstraint: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.QueryLimitConstraint,
          /* harmony export */ QueryOrderByConstraint: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.QueryOrderByConstraint,
          /* harmony export */ QuerySnapshot: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.QuerySnapshot,
          /* harmony export */ QueryStartAtConstraint: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.QueryStartAtConstraint,
          /* harmony export */ Timestamp: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.Timestamp,
          /* harmony export */ Transaction: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.Transaction,
          /* harmony export */ WriteBatch: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.WriteBatch,
          /* harmony export */ addDoc: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.addDoc,
          /* harmony export */ aggregateQuerySnapshotEqual: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.aggregateQuerySnapshotEqual,
          /* harmony export */ and: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.and,
          /* harmony export */ arrayRemove: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.arrayRemove,
          /* harmony export */ arrayUnion: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.arrayUnion,
          /* harmony export */ collection: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.collection,
          /* harmony export */ collectionGroup: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.collectionGroup,
          /* harmony export */ connectFirestoreEmulator: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.connectFirestoreEmulator,
          /* harmony export */ deleteDoc: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.deleteDoc,
          /* harmony export */ deleteField: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.deleteField,
          /* harmony export */ doc: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.doc,
          /* harmony export */ documentId: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.documentId,
          /* harmony export */ endAt: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.endAt,
          /* harmony export */ endBefore: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.endBefore,
          /* harmony export */ getCount: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.getCount,
          /* harmony export */ getDoc: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.getDoc,
          /* harmony export */ getDocs: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.getDocs,
          /* harmony export */ getFirestore: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.getFirestore,
          /* harmony export */ increment: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.increment,
          /* harmony export */ initializeFirestore: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.initializeFirestore,
          /* harmony export */ limit: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.limit,
          /* harmony export */ limitToLast: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.limitToLast,
          /* harmony export */ or: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.or,
          /* harmony export */ orderBy: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.orderBy,
          /* harmony export */ query: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.query,
          /* harmony export */ queryEqual: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.queryEqual,
          /* harmony export */ refEqual: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.refEqual,
          /* harmony export */ runTransaction: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.runTransaction,
          /* harmony export */ serverTimestamp: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp,
          /* harmony export */ setDoc: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.setDoc,
          /* harmony export */ setLogLevel: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.setLogLevel,
          /* harmony export */ snapshotEqual: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.snapshotEqual,
          /* harmony export */ startAfter: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.startAfter,
          /* harmony export */ startAt: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.startAt,
          /* harmony export */ terminate: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.terminate,
          /* harmony export */ updateDoc: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.updateDoc,
          /* harmony export */ where: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.where,
          /* harmony export */ writeBatch: () =>
            /* reexport safe */ _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__.writeBatch,
          /* harmony export */
        });
        /* harmony import */ var _firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @firebase/firestore/lite */ "./node_modules/@firebase/firestore/dist/lite/index.browser.esm2017.js"
          );

        //# sourceMappingURL=index.esm.js.map

        /***/
      },

    /***/ "./node_modules/idb/build/index.js":
      /*!*****************************************!*\
  !*** ./node_modules/idb/build/index.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ deleteDB: () => /* binding */ deleteDB,
          /* harmony export */ openDB: () => /* binding */ openDB,
          /* harmony export */ unwrap: () =>
            /* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u,
          /* harmony export */ wrap: () =>
            /* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w,
          /* harmony export */
        });
        /* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./wrap-idb-value.js */ "./node_modules/idb/build/wrap-idb-value.js"
          );

        /**
         * Open a database.
         *
         * @param name Name of the database.
         * @param version Schema version.
         * @param callbacks Additional callbacks.
         */
        function openDB(
          name,
          version,
          { blocked, upgrade, blocking, terminated } = {}
        ) {
          const request = indexedDB.open(name, version);
          const openPromise = (0,
          _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);
          if (upgrade) {
            request.addEventListener("upgradeneeded", (event) => {
              upgrade(
                (0, _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(
                  request.result
                ),
                event.oldVersion,
                event.newVersion,
                (0, _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(
                  request.transaction
                )
              );
            });
          }
          if (blocked) request.addEventListener("blocked", () => blocked());
          openPromise
            .then((db) => {
              if (terminated) db.addEventListener("close", () => terminated());
              if (blocking)
                db.addEventListener("versionchange", () => blocking());
            })
            .catch(() => {});
          return openPromise;
        }
        /**
         * Delete a database.
         *
         * @param name Name of the database.
         */
        function deleteDB(name, { blocked } = {}) {
          const request = indexedDB.deleteDatabase(name);
          if (blocked) request.addEventListener("blocked", () => blocked());
          return (0, _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(
            request
          ).then(() => undefined);
        }

        const readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
        const writeMethods = ["put", "add", "delete", "clear"];
        const cachedMethods = new Map();
        function getMethod(target, prop) {
          if (
            !(
              target instanceof IDBDatabase &&
              !(prop in target) &&
              typeof prop === "string"
            )
          ) {
            return;
          }
          if (cachedMethods.get(prop)) return cachedMethods.get(prop);
          const targetFuncName = prop.replace(/FromIndex$/, "");
          const useIndex = prop !== targetFuncName;
          const isWrite = writeMethods.includes(targetFuncName);
          if (
            // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
            !(
              targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype
            ) ||
            !(isWrite || readMethods.includes(targetFuncName))
          ) {
            return;
          }
          const method = async function (storeName, ...args) {
            // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
            const tx = this.transaction(
              storeName,
              isWrite ? "readwrite" : "readonly"
            );
            let target = tx.store;
            if (useIndex) target = target.index(args.shift());
            // Must reject if op rejects.
            // If it's a write operation, must reject if tx.done rejects.
            // Must reject with op rejection first.
            // Must resolve with op value.
            // Must handle both promises (no unhandled rejections)
            return (
              await Promise.all([
                target[targetFuncName](...args),
                isWrite && tx.done,
              ])
            )[0];
          };
          cachedMethods.set(prop, method);
          return method;
        }
        (0, _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({
          ...oldTraps,
          get: (target, prop, receiver) =>
            getMethod(target, prop) || oldTraps.get(target, prop, receiver),
          has: (target, prop) =>
            !!getMethod(target, prop) || oldTraps.has(target, prop),
        }));

        /***/
      },

    /***/ "./node_modules/idb/build/wrap-idb-value.js":
      /*!**************************************************!*\
  !*** ./node_modules/idb/build/wrap-idb-value.js ***!
  \**************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ a: () => /* binding */ reverseTransformCache,
          /* harmony export */ i: () => /* binding */ instanceOfAny,
          /* harmony export */ r: () => /* binding */ replaceTraps,
          /* harmony export */ u: () => /* binding */ unwrap,
          /* harmony export */ w: () => /* binding */ wrap,
          /* harmony export */
        });
        const instanceOfAny = (object, constructors) =>
          constructors.some((c) => object instanceof c);

        let idbProxyableTypes;
        let cursorAdvanceMethods;
        // This is a function to prevent it throwing up in node environments.
        function getIdbProxyableTypes() {
          return (
            idbProxyableTypes ||
            (idbProxyableTypes = [
              IDBDatabase,
              IDBObjectStore,
              IDBIndex,
              IDBCursor,
              IDBTransaction,
            ])
          );
        }
        // This is a function to prevent it throwing up in node environments.
        function getCursorAdvanceMethods() {
          return (
            cursorAdvanceMethods ||
            (cursorAdvanceMethods = [
              IDBCursor.prototype.advance,
              IDBCursor.prototype.continue,
              IDBCursor.prototype.continuePrimaryKey,
            ])
          );
        }
        const cursorRequestMap = new WeakMap();
        const transactionDoneMap = new WeakMap();
        const transactionStoreNamesMap = new WeakMap();
        const transformCache = new WeakMap();
        const reverseTransformCache = new WeakMap();
        function promisifyRequest(request) {
          const promise = new Promise((resolve, reject) => {
            const unlisten = () => {
              request.removeEventListener("success", success);
              request.removeEventListener("error", error);
            };
            const success = () => {
              resolve(wrap(request.result));
              unlisten();
            };
            const error = () => {
              reject(request.error);
              unlisten();
            };
            request.addEventListener("success", success);
            request.addEventListener("error", error);
          });
          promise
            .then((value) => {
              // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
              // (see wrapFunction).
              if (value instanceof IDBCursor) {
                cursorRequestMap.set(value, request);
              }
              // Catching to avoid "Uncaught Promise exceptions"
            })
            .catch(() => {});
          // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
          // is because we create many promises from a single IDBRequest.
          reverseTransformCache.set(promise, request);
          return promise;
        }
        function cacheDonePromiseForTransaction(tx) {
          // Early bail if we've already created a done promise for this transaction.
          if (transactionDoneMap.has(tx)) return;
          const done = new Promise((resolve, reject) => {
            const unlisten = () => {
              tx.removeEventListener("complete", complete);
              tx.removeEventListener("error", error);
              tx.removeEventListener("abort", error);
            };
            const complete = () => {
              resolve();
              unlisten();
            };
            const error = () => {
              reject(tx.error || new DOMException("AbortError", "AbortError"));
              unlisten();
            };
            tx.addEventListener("complete", complete);
            tx.addEventListener("error", error);
            tx.addEventListener("abort", error);
          });
          // Cache it for later retrieval.
          transactionDoneMap.set(tx, done);
        }
        let idbProxyTraps = {
          get(target, prop, receiver) {
            if (target instanceof IDBTransaction) {
              // Special handling for transaction.done.
              if (prop === "done") return transactionDoneMap.get(target);
              // Polyfill for objectStoreNames because of Edge.
              if (prop === "objectStoreNames") {
                return (
                  target.objectStoreNames ||
                  transactionStoreNamesMap.get(target)
                );
              }
              // Make tx.store return the only store in the transaction, or undefined if there are many.
              if (prop === "store") {
                return receiver.objectStoreNames[1]
                  ? undefined
                  : receiver.objectStore(receiver.objectStoreNames[0]);
              }
            }
            // Else transform whatever we get back.
            return wrap(target[prop]);
          },
          set(target, prop, value) {
            target[prop] = value;
            return true;
          },
          has(target, prop) {
            if (
              target instanceof IDBTransaction &&
              (prop === "done" || prop === "store")
            ) {
              return true;
            }
            return prop in target;
          },
        };
        function replaceTraps(callback) {
          idbProxyTraps = callback(idbProxyTraps);
        }
        function wrapFunction(func) {
          // Due to expected object equality (which is enforced by the caching in `wrap`), we
          // only create one new func per func.
          // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
          if (
            func === IDBDatabase.prototype.transaction &&
            !("objectStoreNames" in IDBTransaction.prototype)
          ) {
            return function (storeNames, ...args) {
              const tx = func.call(unwrap(this), storeNames, ...args);
              transactionStoreNamesMap.set(
                tx,
                storeNames.sort ? storeNames.sort() : [storeNames]
              );
              return wrap(tx);
            };
          }
          // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
          // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
          // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
          // with real promises, so each advance methods returns a new promise for the cursor object, or
          // undefined if the end of the cursor has been reached.
          if (getCursorAdvanceMethods().includes(func)) {
            return function (...args) {
              // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
              // the original object.
              func.apply(unwrap(this), args);
              return wrap(cursorRequestMap.get(this));
            };
          }
          return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            return wrap(func.apply(unwrap(this), args));
          };
        }
        function transformCachableValue(value) {
          if (typeof value === "function") return wrapFunction(value);
          // This doesn't return, it just creates a 'done' promise for the transaction,
          // which is later returned for transaction.done (see idbObjectHandler).
          if (value instanceof IDBTransaction)
            cacheDonePromiseForTransaction(value);
          if (instanceOfAny(value, getIdbProxyableTypes()))
            return new Proxy(value, idbProxyTraps);
          // Return the same value back if we're not going to transform it.
          return value;
        }
        function wrap(value) {
          // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
          // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
          if (value instanceof IDBRequest) return promisifyRequest(value);
          // If we've already transformed this value before, reuse the transformed value.
          // This is faster, but it also provides object equality.
          if (transformCache.has(value)) return transformCache.get(value);
          const newValue = transformCachableValue(value);
          // Not all types are transformed.
          // These may be primitive types, so they can't be WeakMap keys.
          if (newValue !== value) {
            transformCache.set(value, newValue);
            reverseTransformCache.set(newValue, value);
          }
          return newValue;
        }
        const unwrap = (value) => reverseTransformCache.get(value);

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  () => {
    /*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(
        /*! firebase/app */ "./node_modules/firebase/app/dist/esm/index.esm.js"
      );
    /* harmony import */ var firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(
        /*! firebase/firestore/lite */ "./node_modules/firebase/firestore/lite/dist/esm/index.esm.js"
      );

    const firebaseConfig = {
      apiKey: "AIzaSyBsBaihwh8F_UY8oYEsfcMlQEwEIgXcbxc",
      authDomain: "elmawkaabeta.firebaseapp.com",
      databaseURL: "https://elmawkaabeta.firebaseio.com",
      projectId: "elmawkaabeta",
      storageBucket: "elmawkaabeta.appspot.com",
      messagingSenderId: "808588970288",
      appId: "1:808588970288:web:6fb8d6b492c746efa820f5",
      measurementId: "G-G8FTTQ0EB2",
    };
    // "1:808588970288:web:6fb8d6b492c746efa820f5"

    (0, firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(
      firebaseConfig
    );
    const db = (0,
    firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();

    const lang = document.querySelector("html").lang; // get page's Lang to assign it to database

    const colRef = (0,
    firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_1__.collection)(
      db,
      "coaches",
      "languages",
      lang
    );

    // selecting the coaches Row in html file
    const coachesContent = document.getElementById("coaches-content");
    let coaches = []; // for fulling coaches in coaches page
    let html = ""; // content that we put in html
    coachesContent.innerHTML = ""; // empty coaches content before getting data

    async function getData() {
      // Fetching 'Getting' Data
      await (0, firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_1__.getDocs)(
        colRef
      )
        .then((snapshot) => {
          // Check if we in the home page or top coaches page
          snapshot.docs.forEach((doc) => {
            coaches.push({ ...doc.data(), id: doc.id });
          });
          coaches.sort((a, b) => a.order - b.order); // sort the array according to it's order
          // Adding Content of Data coming from Firebase to HTML
          if (coachesContent.classList.contains("top-coaches")) {
            // coaches = coaches.slice(0, topCoachesCount)
            coaches = coaches.filter((coach) => {
              return coach.order <= 3;
            });
          }
          // console.log(coaches);
          coaches.map((coach) => {
            html += `
				<div class="col-lg-4 col-md-6">
					<div class="member" data-aos="zoom-in">
						<div class="pic col-lg-11 m-auto" style="height: 380px;"><img src="${coach.image}" class="img-fluid" alt="Coach Image"></div>
							<div class="member-info coaches pricing">
								<div class='ps-3 pe-3'>
									<h5>${coach.name}</h5>
									<h4>${coach.jobTitle}</h4>
								</div>
								<span>${coach.pricing}</span>
				
								<a href="${coach.paymentLink}" target="_blank" class="btn-buy border-circle mt-2">Book Now</a>
							</div>
						</div>
					</div>
				</div>
				`;
          });
        })
        .catch((_) => {
          coachesContent.innerHTML = "No Coaches till now";
        });
    }

    getData().then(() => {
      coachesContent.innerHTML = html;
    });

    // <p class='detail-item mb-1 mt-1'>Details</p>
    // <h6>${coach.category}</h6>
    // <span>${coach.summary}</span>
    // <span>${coach.country}/${coach.city} - ${coach.rating} stars</span>
    // <div class="social">
    // 	<a href="${coach.SM_account}" target="_blank"><i class="bi bi-linkedin"></i></a>
    // </div>

    const inputFields = document.querySelectorAll(".input-field");

    // if click outside
    window.onclick = (e) => {
      if (!e.target.classList.contains("filter-el")) {
        inputFields.forEach((field) => field.classList.remove("on"));
      }
    };

    inputFields.forEach((field) => {
      field.addEventListener("click", () => {
        field.classList.toggle("on");
      });
    });

    // Select Dropdown menues
    const byIndustry = document.querySelectorAll(".dropdown.by-industry li");
    const byCountry = document.querySelectorAll(".dropdown.by-country li");
    const byJobTitle = document.querySelectorAll(".dropdown.by-job-title li");
    // adding checked to the first item in the list
    checkTheElement(byIndustry, "category");
    checkTheElement(byCountry, "country");
    checkTheElement(byJobTitle, "jobTitle");

    function checkTheElement(el, filterBy) {
      el.forEach((item) => {
        item.addEventListener("click", () => {
          el.forEach((item) => {
            if (item.classList.contains("on")) {
              item.classList.remove("on");
              item.querySelector("i").classList.remove("on");
            }
          });

          item.classList.add("on");
          item.querySelector("i").classList.add("on");

          // Search the Item
          let searchingVal = item.dataset.category;
          if (searchingVal != "all") {
            switch (filterBy) {
              case "category":
                filteredCoaches = coaches.filter((coach) => {
                  if (
                    coach.category.toLowerCase().indexOf(searchingVal) != -1
                  ) {
                    return coach;
                  }
                });
                showNewCoaches(filteredCoaches);
                break;
              case "country":
                filteredCoaches = coaches.filter((coach) => {
                  if (coach.country.toLowerCase().indexOf(searchingVal) != -1) {
                    return coach;
                  }
                });
                showNewCoaches(filteredCoaches);
                break;
              case "jobTitle":
                filteredCoaches = coaches.filter((coach) => {
                  if (
                    coach.jobTitle.toLowerCase().indexOf(searchingVal) != -1
                  ) {
                    return coach;
                  }
                });
                showNewCoaches(filteredCoaches);
                break;
              default:
                return coaches;
            }
          } else {
            showNewCoaches(coaches);
          }
        });
      });
    }

    // Handle Events of searching and filtering when inputs changes

    let searchField = document.getElementById("search-field");
    let filteredCoaches = coaches;
    let html_filtering_by_user = "";

    // Handle User searching
    searchField.addEventListener("keyup", () => {
      let searchFieldValue = searchField.value.toLowerCase();
      if (searchFieldValue !== "") {
        filteredCoaches = coaches.filter((coach) => {
          if (
            coach.category.toLowerCase().indexOf(searchFieldValue) != -1 ||
            coach.name.toLowerCase().indexOf(searchFieldValue) != -1 ||
            coach.jobTitle.toLowerCase().indexOf(searchFieldValue) != -1 ||
            coach.country.toLowerCase().indexOf(searchFieldValue) != -1
          ) {
            return coach;
          }
        });
        showNewCoaches(filteredCoaches);
      } else {
        return false;
      }
    });
    // Handle User Choosed Categories

    function showNewCoaches(coaches) {
      html_filtering_by_user = "";
      coaches.map((coach) => {
        html_filtering_by_user += `
		<div class="col-lg-4 col-md-6">
			<div class="member" data-aos="zoom-in">
				<div class="pic"><img src="${coach.image}" class="img-fluid" alt="Coach Image"></div>
					<div class="member-info coaches pricing">
						<div class='ps-3 pe-3'>
							<h5>${coach.name}</h5>
							<h4>${coach.jobTitle}</h4>
						</div>
						<span>${coach.pricing}</span>
						<a href="${coach.paymentLink}" target="_blank" class="btn-buy mt-2">Buy Now</a>
					</div>
				</div>
			</div>
		</div>
	`;
      });
      if (coaches.length > 0) {
        coachesContent.innerHTML = html_filtering_by_user;
      } else {
        if (lang == "ar") {
          coachesContent.innerHTML = `
				<h1 style='padding: 100px 0; text-align: center'>لا يوجد مدربون علي حسب اختيارك</h1>
			`;
        } else {
          coachesContent.innerHTML = `
			<h1 style='padding: 100px 0; text-align: center'>There are no Coaches according to your filtration</h1>
			`;
        }
      }
    }
  };

  /******/
};
