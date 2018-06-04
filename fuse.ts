import {
   CSSModules,
   CSSPlugin,
   CSSResourcePlugin,
   FuseBox,
   FuseBoxOptions,
   SassPlugin,
   Sparky
} from "fuse-box";
import TsTransformClasscat from "ts-transform-classcat";
import TsTransformInferno from "ts-transform-inferno";
/**
 * Some of FuseBoxOptions overrides by ts config (module, target, etc)
 * https://fuse-box.org/page/working-with-targets
 */
let fuse: FuseBox;
const fuseOptions: FuseBoxOptions = {
   homeDir: "./src",
   output: "dist/$name.js",
   sourceMaps: { inline: false, vendor: false },
   /**
    * Custom TypeScript Transformers (compile Inferno tsx to ts)
    */
   transformers: {
      before: [TsTransformClasscat(), TsTransformInferno()]
   },
   plugins: [
      /**
       * https://fuse-box.org/page/css-resource-plugin
       * Compile Sass {SassPlugin()}
       * Make .css files modules-like (allow import them like modules) {CSSModules}
       * Make .css files modules like and allow import it from node_modules too {CSSResourcePlugin}
       * Use them all and bundle with {CSSPlugin}
       * */
      [SassPlugin(), CSSModules(), CSSResourcePlugin(), CSSPlugin()]
   ]
};
Sparky.task("clean", () => {
   /**Clean distribute (dist) folder */
   Sparky.src("./").clean("/dist");
});
Sparky.task("config", () => {
   fuse = FuseBox.init(fuseOptions);
   fuse.dev();
});
Sparky.task("client", () => {
   fuse
      .bundle("client/bundle")
      .target("browser@esnext")
      .watch("./client/**")
      .hmr()
      .instructions("> client/index.tsx");
});
Sparky.task("server", () => {
   fuse
      .bundle("server/bundle")
      .watch("*./server/**")
      .target("server@esnext")
      .instructions("> [server/index.tsx]")
      .completed(proc => {
         proc.require({
            close: ({ FuseBox }) => FuseBox.import(FuseBox.mainFile).shutdown()
         });
      });
});
Sparky.task("dev", ["&clean", "&config", "server", "client"], () => {
   fuse.run();
});
