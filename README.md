# Like Gatsby's default boilerplate except:

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

# Usage
## Setup Your Repo Name
Change out `sashaphoto-gatsby-template` for the name of your repository, or to be blank if you are using a custom domain.

## Setup secrets
Go to settings -> secrets in your repository and set:

- `ACCESS_TOKEN` to an [access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) with repo access
-  `GATRACKINGID` to the [GTAG ID](https://developers.google.com/analytics/devguides/collection/gtagjs) for your Google Analytics tracking

For more analytics tracking, you can also set `DCFLOODIGHTID` and `AWCONVERSIONID`


# Read the Full Docs
Browse to the [deployed verison](https://sashaphoto.github.io/sashaphoto-gatsby-template/) of this site to see the template in action and read about how to use it!
