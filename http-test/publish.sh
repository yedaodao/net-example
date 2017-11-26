#!/usr/bin/env bash

npm install
webpack
npm prune --production
tar -zxf http-test.tar.gz ../http-test