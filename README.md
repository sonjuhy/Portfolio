# **NextJS를 이용한 github 페이지 배포**   
<br/>

## **Next JS 설정**

### package-json 수정
* scripts 내부에 deploy 추가   

#### package-json
```json
"deploy": "next build && next export && touch out/.nojekyll && git add -f out/ && git commit -m 'deploy' && git subtree push --prefix out origin portfolio-pages"
```
***

### next.config.js 수정
* 이미지, repository 정보 등 추가   
#### next.config.js 
```javascript
/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const repository = "Portfolio"

const nextConfig = {
  reactStrictMode: true,   
  assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로   
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록   
  images:{   
    path: '/',   
    loader: 'imgix',   
  },   

  mode: 'jit',   
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],   
  darkMode: 'class', // or 'media' or 'class'   
  theme: {   
    extend: {},   
  },   
  variants: {   
    extend: {},   
  },   
  plugins: [],   
}   

module.exports = nextConfig
```
***

### config.js 추가
이 프로젝트 기준 예시 코드

#### context.js   
```javascript
export const prefix =
  process.env.NODE_ENV === "production"
    ? "https://sonjuhy.github.io/Portfolio"
    : "";
```

***


### context.js 추가
context.js 에서 prefix를 가져와 추가
#### contest.js
```javascript
import React from "react";

const PortfolioContext = React.createContext();

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
```

***


### _app.tsx 수정

```javascript
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { PortfolioProvider } from '@/context/context'
import { prefix } from '@/config/config'

import 'tailwindcss/tailwind.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='bg-white dark:bg-black' style={{height:'100vh'}}>
    <PortfolioProvider value={{prefix}}> // 여기를 이렇게 감싸야 함.
    <ThemeProvider attribute='class' enableSystem={false}>
      {/* <Navigation/> */}
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
    </PortfolioProvider>
    </div>
}
```

***


### image 사용시 주의
prefix를 이용하여 링크를 걸어줘야 경로를 잘 찾아 이미지를 표시해준다.

#### 예시
```javascript
const prefix='https://sonjuhy.github.io/Portfolio'
...
<img
    alt="profile"
    src={`${prefix}/image/MyhomeIcon.png`}
    width={250}
    height={250}
    className="rounded-full"
/>
```

***


### 배포 방법
터미널에서 아래와 같이 명령어 입력
```bash
npm run deploy
```

***


#### 수정 후 배포 방법
기존 배포 방법과 동일하다.  
터미널에서 아래와 같이 명령어 입력
```bash
npm run deploy
```
***