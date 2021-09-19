// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../utility/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const AboutStyling: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <Seo title="🎨 Styling Guide" />
    <h2>How to start fresh</h2>
    <p>
      To throw away all my styles, simply delete all the .scss files except <code>styles.scss</code>, empty out <code>styles.scss</code> and you're set.
    </p>
    <hr/>
    <h2>Reasons to not start fresh</h2>
    <p>
      These stylesheets are made to simplify your life while maintaining your potential to customize everything.
    </p>
    <hr/>
    <h3>Auto-pallettes</h3>
    <h4>Setting the base color</h4>
    <p>Your probably have some colour you want to use as your accent color. Simply set it as <code>$accent</code> in <code>colors.scss</code> and your palette will be built for you.</p>
    <h4>Generated Colours</h4>
    <p>Your specified <code className={'background-accent-base'}>$accent</code> is used to generate a <code className={'background-complement-base'}>$complement</code>. Both of these colours generate <b>palettes</b>, <code className={'ShowPalette'}>$accent-palette</code> & <code className={'ShowComplementPalette'}>$complement-palette</code></p>
    <p>Available tones for a palette are <code className={'background-accent-lightest'}>lightest</code>, <code className={'background-accent-lighter'}>lighter</code>, <code className={'background-accent-light'}>light</code>, <code className={'background-accent-base'}>base</code>, <code className={'background-accent-dark'}>dark</code>,  <code className={'background-accent-darker'}>darker</code>, <code className={'background-accent-darkest'}>darkest</code></p>
    <h4>Your current palettes</h4>
    <b className={'color-accent-base'}>Accent</b>
    <div style={{width: '100%', height: '40px', marginBlockEnd: '10px'}} className={'ShowPalette'}>    </div>
    <b className={'color-complement-base'}>Complement</b>
    <div style={{width: '100%', height: '40px', marginBlockEnd: '10px'}} className={'ShowComplementPalette'}>    </div>
    <h4>Using a palette in SCSS</h4>
    <p>To use the palette defined by your base color, you can use one of the getter functions for a colour, such as <code>base($accent-palette)</code> or  <code>darker($accent-palette)</code>.</p>
    <h4>Using a palette in HTML / JSX</h4>
    <p>Classnames are auto generated for your accent and complement palette as <code>(background || color)-(name of palette)-(tone)</code>, for example <code className={'background-accent-light'}>background-accent-light</code> or <code className={'color-complement-base'}>color-complement-base</code></p>
    <h4>Adding a palette</h4>
    <p>If you need to go above and beyond the accent and complement, you can add another palette with full functionality by first assigning it to a variable in the same place in <code>colors-autotheme.scss</code> as <code>$accent-palette</code> & <code>$complement-palette</code> (line 232) and then adding the <code>@include</code> for your theme under <code>.color</code> and <code>.background</code> in the same way as it is done for accent and complement.</p>
    <hr/>
    <h4>Customizing base palette</h4>
    <p>The palette is built by calculating offsets based on a starting "base palette". You can redefine this palette by changing <code>$base-palette</code> (line 58) of <code>colors-autotheme.scss</code></p>
    <h3>Different files explained</h3>
    <ul>
      <li><code>animations.scss</code> defines keyframes and mixins for animated components</li>
      <li><code>colors.scss</code> defines all the color variables (including DARK THEME)</li>
      <li><code>colors-autotheme.scss</code> contains code for generating palettes</li>
      <li><code>cssreset.scss</code> a css reset so that the app looks the same across browsers</li>
      <li><code>fonts.scss</code> defines fonts for the app</li>
      <li><code>styles.scss</code> the star of the show, our custom styling goes here</li>
    </ul>
    <Link to="/" className={'Magic'}>Go back to the homepage</Link>
  </Layout>
)

export default AboutStyling
