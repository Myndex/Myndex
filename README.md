# Myndex Links
_(Kinda like sausage, but pork free...)_


## New Featured Articles
- [**Better reading on the web**](https://uxdesign.cc/better-reading-on-the-web-c943c4cfc91a) published in UX Collective, this article discusses and demonstrates the problems with automated testing and WCAG 2 contrast.
- 
- [**Please Stop Using Grey Text**](https://atangledwebweweave.com/please-stop-using-grey-text-3d3e71acfca8) on Tangled Web, debunking one of the worst myths about design contrast.

- [**What's Red & Black & Also Not Read?**](https://atangledwebweweave.com/whats-red-black-also-not-read-573b9c0a97ed) Do the WCAG 2 Contrast Guidelines Help Color Vision Issues? The answer may surprise you.

- [**A Contrast of Errors**](https://atangledwebweweave.com/a-contrast-of-errors-373c2665d42a) A look into the history of the WCAG 2 contrast guidelines, and a discussion of the proposed replacement, the APCA (Advanced Perceptual Contrast Algorithm).


## My GitHub Gists & Articles
 
### _NEW!_ [Let's Flip for Color!](https://gist.github.com/Myndex/e1025706436736166561d339fd667493#lets-flip-for-color)
If you want your text to be either black or white if the user selects some random color, just where is that inflection point?        
**Hint: It's NOT 18% Y.**

-----
### _Contrast_ 
- [**Why APCA?**](https://github.com/Myndex/SAPC-APCA/WhyAPCA.md) A brief overview of WCAG_2 contrast issues and how APCA solves them.

- Part I: [**Orange You Wondering About Contrast?**](https://gist.github.com/Myndex/1dadb6dcac596f1cd7a5686a076f697f) Answering some contrast questions, and demonstrating a real solution to the infamous orange conundrum.
- Part II: [**The Lighter Side of Dark Backgrounds**](https://gist.github.com/Myndex/c30dba273aa5eca426ad9f5200917c9d) An article comparing some parts of APCA with the old WCAG 2 contrast methods, demonstrating how WCAG_2 contrast does not help color vision types.
- Part III: [**WCAG 2 vs APCA Contrast Shootout**](https://gist.github.com/Myndex/069a4079b0de2930e72d5401bde9af98#wcag-2-vs-apca-contrast-shootout)
 Answering some recent questions regarding APCA, with comparisons and examples of the old (WCAG 2 1.4.3) and the future WCAG 3 / APCA.

-----
### _Color_

- Part I: [**For The Luv of Color**](https://gist.github.com/Myndex/47c793f8a054041bd2b52caa7ad5271c#file-fortheluvofcolor-md) An article comparing CIE Lab and Luv colorspaces.
- Part II: [**Will Work for Color**](https://gist.github.com/Myndex/10caff6a68e844591e83eadeebfb4347) A follow-up article on working spaces and related considerations. Introduces the concept of "Web Working Spacelets".
- [**COLORSPACES - The Primal Frontier**](https://gist.github.com/Myndex/b21c2621072b93d3a7c1ef8939bc2adb) A brief Look at the math that helps model how we see. 
- [**How Many Colors in a Bushel?**](https://gist.github.com/Myndex/db30607d4fe697de9e582544335bbce6#how-many-colors-in-a-bushel) Just "how many" colors are there? Is that even an answerable question? 

-----
### _General_
On PASSWORDS: [**0u+_W!+h_+h3_01d-InWithTheNew!**](https://gist.github.com/Myndex/d71875ea431c88db3a22962e28abd164) In other words, "Out With The Old - In With The New" a realistic discussion on password security, with a more realistic approach to reducing "crackability". HINT: we've all been doing it wrong, LOL.

-----
## My Repos
 
- [**SAPC-APCA**](https://github.com/Myndex/SAPC-APCA) The main repository for the research and development of the new contrast method and algorithm being developed for the W3/AGWG accessibility guidelines, and for other standards and applications. This is the primary source for all things related to SAPC and APCA.
- ***SARCAM*** Coming Soon!
- [**APCA W3**](https://github.com/Myndex/apca-w3) This is the specific version of the APCA licensed to the W3 for the use in web accessibility guidelines such as the WCAG_3 guidelines.
- [**Bridge PCA**](https://github.com/Myndex/bridge-pca) BPCA is designed as a drop-in replacement for WCAG_2 contrast that is backwards compatible, but using APCA technology, to "bridge" toward the future of readability contrast.
- [**Fancy Font Flipping**](https://github.com/Myndex/fancyfontflipping/blob/master/README.md#fancy-font-flipping) Fancy Font Flipping is a demo I first put up in CodePen to illustrate the issues with flipping the text color from black to white based on a given estimated background luminance.
- [**Color Parsley**](https://github.com/Myndex/colorparsley) lightweight and versatile color parsing functions.
- [**See Lab**](https://github.com/Myndex/seelab) This is a library for sRGB colorstring parsing and CIE processing. Includes XYZ, xyY, Lab, Luv, LCh and more!
- [**Tiny Trim**](https://github.com/Myndex/tinytrim) This is a CSS sheet of terse classes, useful for quick adjustments without having to add a `style=""` great for site development when you have a client watching and breathing down your back, LOL.
- [**Color Styles**](https://github.com/Myndex/colorstyles) colorstyles is a CSS color stylesheet with a terse but easy to use methodology for color classes — in development, some of this is in TinyTrim.

-----
## My Issue Threads and Comments

### [**Here is an INDEX of Major Threads**](https://github.com/Myndex/Myndex/blob/main/IssuesIndex.md)
These are some of the larger, in-depth issue threads & posts I've created on GitHub including the infamous [thread #695](https://github.com/w3c/wcag/issues/695). These posts contain useful information and research. Some of the information here may be superseded as some of these thread date back to the beginnings of the contrast research project. I'm making this list largely for myself to collate the still relevant information into a single FAQ or similar explainer document. _Someday_.

-----
## Non-GitHub Content

### Myndex Web Apps
- [**APCA Simple Contrast Tools**](https://www.myndex.com/APCA/) The APCA contrast technology demonstrator.
- [**SAPC Contrast Research Tools**](https://www.myndex.com/SAPC/) Visual contrast development site for the ongoing study of visual contrast for web content accessibility guidelines and other standards & applications. Includes interactive experiments that demonstrate the concepts and technology.
- [**Bridge-PCA Contrast Tools**](https://www.myndex.com/BPCA/) Bridge-PCA or BPCA is a drop-in replacement for WCAG\_2 contrast that is backwards compatible with the existing guideline, but is using APCA technology for improved readability.
- [**Color Vision Deficiency Simulator**](https://www.myndex.com/CVD/) This simulator demonstrates the way someone with a Color Vision Deficiency _(incorrectly labeled "color blind")_ sees colors. This simulator uses the clinically accurate Brettel model of CVD simulation.

### The Myndex [APCA Linktree](https://linktr.ee/Myndex)
- A bunch of [links](https://linktr.ee/Myndex) relating to APCA contrast and color.

### Other Related Articles
- [**Modern Password Theory in a Nutshell**](https://medium.com/tangledweb/modern-password-theory-in-a-nutshell-da87db012c08) Would it surprise you to know that fistsmash passwords aren't really more secure than one you can actually remember? Article at _Tangled Web_
- [**A Contast of Contrasts**](https://atangledwebweweave.com/a-contrast-of-contrasts-3ddda0f4061b) Article at _Tangled Web_
- [**Basics of Luminance Contrast**](https://www.myndex.com/WEB/LuminanceContrast) A precursor to the Contrast FAQ.
- [**Creating Color Gradients, Part I**](https://www.myndex.com/WEB/Gradients)  Experiments and discussion of color spaces for gradient creation.
- [**Color Gradients, Part II**](https://www.myndex.com/WEB/GradientsPartTwo) More experiments and more color spaces...
- [**Improving SEO with Redirects**](https://www.myndex.com/WEB/RedirectsForSEO) Your server's case sensitivity and URL redirect strategies can affect your search ranking!
- [**PDF on Accessible Fonts**](https://www.myndex.com/PUB/PDF/AccessibleFontsD.pdf) A PDF that discusses key factors in fonts for readability.

<a href="https://stackexchange.com/users/14280387"><img src="https://stackexchange.com/users/flair/14280387.png" width="208" height="58" alt="profile for Myndex on Stack Exchange, a network of free, community-driven Q&amp;A sites" title="profile for Myndex on Stack Exchange, a network of free, community-driven Q&amp;A sites"></a>      
Top 3% on Stack Overflow!

------
## Past Times At...
### The Art and Science of Applied Probability
In this career, I was using Applied Probability Methodologies for the Risk Assessment of short term ROI predictions related to high-variance cash-flow opportunities in finite-sized non-cooperative bidding groups where information is obliquely concealed as a function of multivariate strategies facilitating the predominately range-based tactics driven by randomized but nevertheless deterministic outcomes.    

_(…Uh… this is more commonly known as Texas Hold ’Em Poker…)_

-----
### _Today's Mission Statement:_

#### *Proactive positive progress procured pursuing primary priorities of due diligence, determination, and dedication...*   
##### *...and also alliteration apparently.*

-----
### _Welcome to the very bottom of the page_

Here at the very bottom of the page, we dare to ask the question, _"do two lights make a dark?"_ And, just how many color scientists does it take to rotationally engage the helical conducting threads of an illumination apparatus further composed of a sealed, evacuated glass envelope containing a plurality of filament holders connecting and supporting a coiled filament preferentially fabricated from a tungsten alloy?

