# CatBlender

CatBlender is a blending cat images tool built using nodejs and cat as a service API (https://cataas.com).

### Installation

```
git clone https://github.com/lakshanban/catblender.git
cd catblender
nvm use
nvm install
npm install
npm start
```

### updates to the code

- added package.json, .prettierrc, .nvmrc, .gitignore, readme.md files
- Converted all the messy callback based code to modern async/await style.
- Removed unnecessary console logs
- Promisified the callback based lib functions
- separated reusable functions
- Added unit tests to identify the changes of logic
