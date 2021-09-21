# A demo site for my latest web techs
![Site pic](https://github.com/TheBigSasha/nasa-gallery/blob/5735c7ebfe70af178f56c0c046c956d5e4979bb3/Site-Screenshots.png)
## Likes & Account Tracking

### 🙋‍♀️ User account authentication
Users are individually authenticated with NASA API keys. This allows them to like posts and see who else liked them

### 🔗 HTTPS APIs

The Spring boot server is hosted locally on a dedicated servers using certbot and NGINX for
HTTPS. [Browse the API on PostMan](https://www.getpostman.com/collections/1703c1056154b3a622f4)

## Mind blowing speed

### 🖥 Server Side Rendering

Thanks to Gatsby's super fast static code output, as much of this site as possible is rendered server side. Only the
content from the NASA API is loaded in client side.

### 💤 Lazy Loading

All images and content are lazy loaded, enabling lightning fast load times. Everything which can be async is async.

## 🎞 Animations

### 👁 Opacity focus

Focus on the current text: the text in the middle of the screen has a higher opacity than the text at the edges, if your
screen is big enough.

### 🎬 Dynamic Animations

The site is animated using Framer Motion, with some animations disabled on small screen devices.

## Sashaphoto Gatsby Template

### 🔐 Fully TypeScript

All the components which can be written in TypeScript are written in TypeScript!

### 🎨 SASS Styling + Auto color palettes

You can specify colors in `colors.scss` and then it will automatically generate color palettes from them for you!

#### Auto Palettes
When you specify an accent color, style classes are auto generated for you for the accent color as well as variations like darker,
lighter, etc. [Learn more](https://sashaphoto.github.io/sashaphoto-gatsby-template/about-styling/)

### 🚀 Auto deploy to GH pages
Simply specify a personal access token with repo access in your repository secrets as `ACCESS_TOKEN` when you use this template and it should automatically publish to GitHub Pages on each push :)

### 📊 Automatic Google Analytics
Just specify your GTAG ID in GitHub secrets under `GATRACKINGID` and optionally `AWCONVERSIONID`, `DCFLOODIGHTID` to get started tracking your analytics.

#### No analytics in development
Analytics are tracked only in production builds with the IDs passed by GitHub actions or in `.env.production`

