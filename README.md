To reproduce:

```
npm i
npx tsc --build
```

Error:

```
main.ts:12:6 - error TS2345: Argument of type 'import("/Users/bob/code/work/canvas/multiformats-cid-bug/node_modules/multiformats-old/dist/types/src/cid").CID<unknown, number, number, import("/Users/bob/code/work/canvas/multiformats-cid-bug/node_modules/multiformats-old/dist/types/src/link/interface").Version>' is not assignable to parameter of type 'import("/Users/bob/code/work/canvas/multiformats-cid-bug/node_modules/multiformats-new/dist/src/cid").CID<unknown, number, number, import("/Users/bob/code/work/canvas/multiformats-cid-bug/node_modules/multiformats-new/dist/src/link/interface").Version>'.
  The types of 'toV0()[Symbol.toStringTag]' are incompatible between these types.
    Type 'string' is not assignable to type '"CID"'.

12 func(oldCid)
        ~~~~~~


Found 1 error.
```
