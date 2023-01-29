---
layout: simple
---

# Q: Where did the WCAG 2 contrast formula come from? And the 4.5:1 threshold?


## *Short Answer*

The WCAG 2.x addition of 0.05 to the simple ratio calculation was intended to serve two purposes:

**1)** Prevent the ratio from calculating as infinite when one of the colors was black (zero).

**2)** The justification for the value 0.05 is based on *"Typical Viewing veiling glare is specified to be 5% of the maximum white-luminance level"* on the front of the glass CRT display, as recited under "typical" viewing conditions in IEC 61966-2-1.


## Longer Answer

WCAG 2.0 was developed by W3C WAI AGWG (which is short for *"World Wide Web Consortium Web Accessibility Initiative Accessibility Guidelines Working Group"*) And includes a number of a "success criteria" (SC) That are intended to improve accessibility for web based content.

Arguably, the most controversial of these is SC 1.4.3, which makes certain demands regarding contrast between text and a background.

It is controversial because it references some cherry-picked but nevertheless obsolete standards (ANSI 1988), and makes assertions or claims that are not actually based in rational science, have no empirical study, and no peer review.

***Significant flaws have been demonstrated, including:***
- WCAG 2.x contrast calculation is not perceptually uniform for supra-threshold contrast of text on a self-illuminated display.

- WCAG 2.x contrast can define color pairs that are more [harmful to readability¹][1] for some color vision deficiencies (the very people it was claimed help) than some related color pairs it improperly rejects.

- WCAG 2.x contrast can not properly calculate dark mode.

- WCAG 2.x contrast SC and thresholds are somewhat arbitrary, not consistent over the visual range, and not spatially aware.

As a result, for any given color pair the math and the related SC might be "okay", or might be grossly insufficient, or might be much more than needed.

I discuss the origins of the math and the 4.5:1 threshold in an [issue thread at the WCAG GitHub repo²][2] including links to some of the original references.


## *A Brief History of Web Contrast*

In the early 2000's, some conjectures discussed in a conference paper by a well-regarded optometrist and vision scientist were put forth. The ideas were:
- Derive luminance by using the **Y** result from the IEC's sRGB to CIEXYZ matrix, using the piecewise linearization and not the defined display gamma.
- Simplifying the Weber Contrast by inverting it and then adding a glare component to both inputs.
    - The end result is a simple ratio equation with 0.05 added to the text and to the background.
-  making the assertion that a certain threshold level of contrast would  accommodate poor acuity[²][2].
    - The threshold was set at 7:1

Importantly, his equation was intended to be used with a threshold of **7:1**.

But subsequently, the AGWG changed these to 4.5:1 and 3:1, which might be OK when the background is white, but this math grossly over-rates contrast when the colors are dark³. While it might not be noticed so much at 7:1, it renders lower contrast levels unreadable with dark colors.

Circa 2007, [problems were evident⁴][4], and objections were raised by stakeholders including IBM, yet nothing seems to have come of the objections, The SC was ultimately pushed through, becoming part of the WCAG AA level recommendations in 2008.

Up until that time, most sites were using pure black text, which is ideal. Eventually, after the specification was set to 4.5:1 in 2008, those same sites shifted to the current fallacy of [light grey text⁵][5].

In 2017, the vision scientist who suggested the original 7:1 wrote the provocative paper [ *"Rethinking ADA signage standards for low-vision accessibility"* ⁶][6] and describes many of the problems with contrast maths and contrast thresholds, particularly as they apply to architectural signage, but the concepts discussed apply here as well.

In April 2019 I went on record regarding the deficiencies of the WCAG contrast math and guidelines in issue thread #695 at the GitHub WCAG repo.  Subsequently developing methods to improve readability on the web, resulting in the [APCA (Accessible Perceptual Contrast Algorithm)⁷][7].


### Disclaimer and conflict of interest statement
While I am an invited expert of the W3C/AGWG, opinions stated are mine alone and do not necessarily reflect those of the W3C.

As research lead of a series of projects aimed at improving readability of content on self-illuminated displays, I created the APCA, and am focused on furthering the goal of [improved readability⁸][8].

----
*Notes:*
- ² *More recent science shows that there is not such a direct [correlation between contrast and acuity²][2] as was posited*.
- ³ *[Hwang/Peli Modified this³][3] by putting the 0.05 on one side only, however it still doesn't actually match perception for supra-threshold high-spatial-frequency stimuli*.


### REFERENCES:
1. [What’s Red & Black & Also Not Read? / TangledWeb][1]
1. [Issue thread discussing history of 4.5:1 / GitHub WCAG repo][2]
1. [Positive and negative polarity contrast sensitivity measuring app / PubMed][3]
1. [A Contrast of Errors / TangledWeb][4]
1. [Please Stop Using Grey Text / TangledWeb][5]
1. [Rethinking ADA signage standards for low-vision accessibility / PubMed][6]
1. [Why APCA / GitHub APCA repo][7]
1. [Better reading on the web / UX Collective][8]

  [1]: https://tangledweb.xyz/whats-red-black-also-not-read-573b9c0a97ed
  [2]: https://github.com/w3c/wcag/issues/1705#issuecomment-1027058976
  [3]: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5481843/
  [4]: https://tangledweb.xyz/a-contrast-of-errors-373c2665d42a
  [5]: https://tangledweb.xyz/please-stop-using-grey-text-3d3e71acfca8
  [6]: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5433805/
  [7]: https://git.apcacontrast.com/documentation/WhyAPCA
  [8]: https://uxdesign.cc/better-reading-on-the-web-c943c4cfc91a
