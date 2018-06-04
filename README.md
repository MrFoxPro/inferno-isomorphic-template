# Simple Inferno Isomorphic (SSR) FuseBox template
Includes:
-  Inferno 5.0.6
-  Express 4.16.0
-  TypeScript 2.9.1
-  FuseBox 3.2.2 (easy alternative to webpack)

# Installation:
```
npm i

npm run dev
```
If you are not Windows user, please change dev script in package.json: remove `set` word.  
Note: debug mode works only for vscode (check out .vscode/launch.json)
# Q&A:

Q: Why npm run dev uses **node**, not **ts-node**?  
A: https://github.com/TypeStrong/ts-node#programmatic

Q: Why in launch.json port set to 9229?  
A: Node default inspect port is 9229 https://nodejs.org/en/docs/guides/debugging-getting-started/
You can specify port by change --inspect=<PORT> in package.json and launch.json

Q: How to debug both server and client?  
A: Use "Start both" configuration. More: https://github.com/fuse-box/fuse-box/blob/master/docs/guides/debugging-with-vscode.md#server-debugging

Q: Why we used bundle.js in our HTML template?  
A: Explanation how it works:
   1. The server renders markups with renderToString
   2. We have got only plain text document without any JS
   3. Bundle.js is loaded and create Inferno instance, that "clings" DOM
   4. Inferno binds events
      Good explanation: https://medium.com/@justinjung04/react-server-side-rendering-and-hot-reloading-ffb87ca81a89

Q: Why **ts-node** installed as devDependency?  
A: https://stackoverflow.com/a/44249080/8086153

Q: I have an error  
A: Please submit new issue with detailed description of your problem
