## School CI server

School CI server – client-side of service made with **React.js** (Redux / Next.js).

### ❗ Branches
`main` — **React.js + вёрстка** (state-management: **useReducer / useContext** hooks)

`redux` — `main` branch + **Redux**

`ssr` — `redux` branch + **SSR (with Next.js)**
<br/>
<br/>
### 💥 How to run «main» branch
```
git clone https://github.com/xaazias/yandex-academy-react
cd yandex-academy-react
npm install
npm run start
```
Open `http://localhost:3000` in web-browser
<br/>
<br/>
### ⚡ How to run «redux» branch
```
git clone https://github.com/xaazias/yandex-academy-react
cd yandex-academy-react
git checkout redux
npm install
npm run start
```
Open `http://localhost:3000` in web-browser
<br/>
<br/>
### 🔥 How to run «ssr» branch
```
git clone https://github.com/xaazias/yandex-academy-react
cd yandex-academy-react
git checkout ssr
npm install
npm run dev
```
or `npm run build` and then `npm run start` for better performance.

Open `http://localhost:3000` in web-browser
<br/>
<br/>
### ✔ Routes
`/` — **Start page** (if no settings configured), otherwise **Builds-History page**

`/settings` — **Settings page**
