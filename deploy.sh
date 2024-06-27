yarn install
yarn cache clean
yarn build
pm2 delete zealth
pm2 start yarn --name zealth -- serve
