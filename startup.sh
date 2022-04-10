#!/usr/bin/env bash

git pull
npm run build
npm run start -- -p 3002
