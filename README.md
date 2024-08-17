SvelteKit manualChunks bug explanation

Broken version:

```
npm run build && FOO=bar node build/index.js
🔥 Initializing Firebase Admin SDK
FOO ENV VAR IS undefined
```
FOO is undefined although we set it.

But when going to http://localhost:3000/ we get it:

```
Env vars {"env":"bar"}
```

Then, remove the `manualChunks` option from `vite.config.ts` and run again:

```
npm run build && FOO=bar node build/index.js

🔥 Initializing Firebase Admin SDK
FOO ENV VAR IS bar
Listening on 0.0.0.0:3000
```

Now FOO is set and  works correctly both during init and on web. 