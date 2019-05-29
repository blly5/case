
#!/usr/bin/env bash

if [ -n "$1" ]; then
    tsc ./server/*.ts --outDir ./dist-server/ -w
else
    tsc ./server/*.ts --outDir ./dist-server/
fi;

