yarn install
yarn cache clean
yarn build
pm2 kill zealth
pm2 start yarn --name zealth --interpreter=bash -- serve
