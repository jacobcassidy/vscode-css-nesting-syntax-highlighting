(function getSharedValues() {
  const valueColorKeywords = `
    aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow

    |aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood
    |cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan
    |darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange
    |darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise
    |darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen
    |gainsboro|ghostwhite|gold|goldenrod|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki
    |lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow
    |lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray
    |lightslategrey|lightsteelblue|lightyellow|limegreen|linen|magenta|mediumaquamarine|mediumblue
    |mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise
    |mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered
    |orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum
    |powderblue|rebeccapurple|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell
    |sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato
    |transparent|turquoise|violet|wheat|whitesmoke|yellowgreen

    |currentColor

    |ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow
    |ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption
    |InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow
    |ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowTex
  `.replace(/\s/g, "");

  const valueKeywords = `
    above|absolute|active|add|additive|after-edge|alias|all|all-petite-caps|all-scroll|all-small-caps|alpha|alphabetic|alternate|alternate-reverse
    |always|antialiased|auto|auto-fill|auto-fit|auto-pos|available|avoid|avoid-column|avoid-page|avoid-region|backwards|balance|baseline|before-edge|below|bevel
    |bidi-override|blink|block|block-axis|block-start|block-end|bold|bolder|border|border-box|both|bottom|bottom-outside|break-all|break-word|bullets
    |butt|capitalize|caption|cell|center|central|char|circle|clip|clone|close-quote|closest-corner|closest-side|col-resize|collapse|color|color-burn
    |color-dodge|column|column-reverse|common-ligatures|compact|condensed|contain|content|content-box|contents|context-menu|contextual|copy|cover
    |crisp-edges|crispEdges|crosshair|cyclic|dark|darken|dashed|decimal|default|dense|diagonal-fractions|difference|digits|disabled|disc|discretionary-ligatures
    |distribute|distribute-all-lines|distribute-letter|distribute-space|dot|dotted|double|double-circle|downleft|downright|e-resize|each-line|ease|ease-in
    |ease-in-out|ease-out|economy|ellipse|ellipsis|embed|end|evenodd|ew-resize|exact|exclude|exclusion|expanded|extends|extra-condensed|extra-expanded
    |fallback|farthest-corner|farthest-side|fill|fill-available|fill-box|filled|fit-content|fixed|flat|flex|flex-end|flex-start|flip|flow-root|forwards|freeze
    |from-image|full-width|geometricPrecision|georgian|grab|grabbing|grayscale|grid|groove|hand|hanging|hard-light|help|hidden|hide
    |historical-forms|historical-ligatures|horizontal|horizontal-tb|hue|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space
    |ideographic|inactive|infinite|inherit|initial|inline|inline-axis|inline-block|inline-end|inline-flex|inline-grid|inline-list-item|inline-start
    |inline-table|inset|inside|inter-character|inter-ideograph|inter-word|intersect|invert|isolate|isolate-override|italic|jis04|jis78|jis83
    |jis90|justify|justify-all|kannada|keep-all|landscape|large|larger|left|light|lighten|lighter|line|line-edge|line-through|linear|linearRGB
    |lining-nums|list-item|local|loose|lowercase|lr|lr-tb|ltr|luminance|luminosity|main-size|mandatory|manipulation|manual|margin-box|match-parent
    |match-source|mathematical|max-content|medium|menu|message-box|middle|min-content|miter|mixed|move|multiply|n-resize|narrower|ne-resize
    |nearest-neighbor|nesw-resize|newspaper|no-change|no-clip|no-close-quote|no-common-ligatures|no-contextual|no-discretionary-ligatures
    |no-drop|no-historical-ligatures|no-open-quote|no-repeat|none|nonzero|normal|not-allowed|nowrap|ns-resize|numbers|numeric|nw-resize|nwse-resize
    |oblique|oldstyle-nums|open|open-quote|optimizeLegibility|optimizeQuality|optimizeSpeed|optional|ordinal|outset|outside|over|overlay|overline|padding
    |padding-box|page|painted|pan-down|pan-left|pan-right|pan-up|pan-x|pan-y|paused|petite-caps|pixelated|plaintext|pointer|portrait|pre|pre-line
    |pre-wrap|preserve-3d|progress|progressive|proportional-nums|proportional-width|proximity|radial|recto|region|relative|remove|repeat|repeat-[xy]
    |reset-size|reverse|revert|ridge|right|rl|rl-tb|round|row|row-resize|row-reverse|row-severse|rtl|ruby|ruby-base|ruby-base-container|ruby-text
    |ruby-text-container|run-in|running|s-resize|saturation|scale-down|screen|scroll|scroll-position|se-resize|semi-condensed|semi-expanded|separate
    |sesame|show|sideways|sideways-left|sideways-lr|sideways-right|sideways-rl|simplified|slashed-zero|slice|small|small-caps|small-caption|smaller
    |smooth|soft-light|solid|space|space-around|space-between|space-evenly|spell-out|square|sRGB|stacked-fractions|start|static|status-bar|swap
    |step-end|step-start|sticky|stretch|strict|stroke|stroke-box|style|sub|subgrid|subpixel-antialiased|subtract|super|sw-resize|symbolic|table
    |table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row|table-row-group|tabular-nums|tb|tb-rl
    |text|text-after-edge|text-before-edge|text-bottom|text-top|thick|thin|titling-caps|top|top-outside|touch|traditional|transparent|triangle
    |ultra-condensed|ultra-expanded|under|underline|unicase|unset|upleft|uppercase|upright|use-glyph-orientation|use-script|verso|vertical
    |vertical-ideographic|vertical-lr|vertical-rl|vertical-text|view-box|visible|visibleFill|visiblePainted|visibleStroke|w-resize|wait|wavy
    |weight|whitespace|wider|words|wrap|wrap-reverse|x|x-large|x-small|xx-large|xx-small|y|zero|zoom-in|zoom-out

    |arabic-indic|armenian|bengali|cambodian|circle|cjk-decimal|cjk-earthly-branch|cjk-heavenly-stem|cjk-ideographic
    |decimal|decimal-leading-zero|devanagari|disc|disclosure-closed|disclosure-open|ethiopic-halehame-am
    |ethiopic-halehame-ti-e[rt]|ethiopic-numeric|georgian|gujarati|gurmukhi|hangul|hangul-consonant|hebrew
    |hiragana|hiragana-iroha|japanese-formal|japanese-informal|kannada|katakana|katakana-iroha|khmer
    |korean-hangul-formal|korean-hanja-formal|korean-hanja-informal|lao|lower-alpha|lower-armenian|lower-greek
    |lower-latin|lower-roman|malayalam|mongolian|myanmar|oriya|persian|simp-chinese-formal|simp-chinese-informal
    |square|tamil|telugu|thai|tibetan|trad-chinese-formal|trad-chinese-informal|upper-alpha|upper-armenian
    |upper-latin|upper-roman|urdu

    |-ah-|-apple-|-atsc-|-epub-|-hp-|-khtml-|-moz-|-ms-|-o-|-rim-|-ro-|-tc-|-wap-|-webkit-|-xv-
    |mso-|prince-

    |arial|century|comic|courier|garamond|georgia|helvetica|impact|lucida|symbol|system-ui|system|tahoma|times|trebuchet|ui-monospace|ui-rounded|ui-sans-serif|ui-serif|utopia|verdana|webdings|sans-serif|serif|monospace
  `.replace(/\s/g, "");

  const pseudoFunction = `
    dir
    |lang
    |not|has|matches|where|is
    |nth-child|nth-last-child|nth-of-type|nth-last-of-type
  `.replace(/\s/g, "");

  const pseudoClasses = `
    active|any-link|checked|default|disabled|empty|enabled|first
    |first-child|first-of-type|last-child|last-of-type|only-child|only-of-type|focus|focus-visible|focus-within|fullscreen|host|hover
    | in-range|indeterminate|invalid|left|link|optional|out-of-range
    | read-only|read-write|required|right|root|scope|target|unresolved
    | valid|visited
  `.replace(/\s/g, "");

  const pseudoElements = `
    after
    | before
    | first-letter
    | first-line
    | -ah-|-apple-|-atsc-|-epub-|-hp-|-khtml-|-moz-
    |-ms-|-o-|-rim-|-ro-|-tc-|-wap-|-webkit-|-xv-)
    |mso-|prince-
    | backdrop
    | content
    | grammar-error
    | marker
    | placeholder
    | selection
    | shadow
    | spelling-error
  `.replace(/\s/g, "");

  const valueColorKeywordsArray = valueColorKeywords.split("|");
  const valueKeywordsArray = valueKeywords.split("|");
  const pseudoFunctionArray = pseudoFunction.split("|");
  const pseudoClassesArray = pseudoClasses.split("|");
  const pseudoElementsArray = pseudoElements.split("|");
  const allValuesArray = [...valueColorKeywordsArray, ...valueKeywordsArray];
  const allPseudoArray = [
    ...pseudoFunctionArray,
    ...pseudoClassesArray,
    ...pseudoElementsArray,
  ];
  const testSet = new Set(allPseudoArray);
  const sharedValues = allValuesArray
    .filter((item) => testSet.has(item))
    .sort();

  console.log(sharedValues);
})();

// LOGS:
// '-ah-',
// '-apple-',
// '-atsc-',
// '-epub-',
// '-hp-',
// '-khtml-',
// '-moz-',
// '-ms-',
// '-o-',
// '-rim-',
// '-ro-',
// '-tc-',
// '-wap-',
// '-webkit-',
// 'active',
// 'content',
// 'default',
// 'disabled',
// 'left',
// 'mso-',
// 'optional',
// 'prince-',
// 'right'

// LOGGED VENDOR-PREFIXES: (Use as property values)
// '-ah-',
// '-apple-',
// '-atsc-',
// '-epub-',
// '-hp-',
// '-khtml-',
// '-moz-',
// '-ms-',
// '-o-',
// '-rim-',
// '-ro-',
// '-tc-',
// '-wap-',
// '-webkit-',
// 'mso-',
// 'prince-',

// LOGGED NON-VENDOR-PREFIXES:
// Use as a property value when condensed name:value format used:
// 'left',      (Such as `text-align: left;` and `float: left;`) [example selector @page :left {}]
// 'right'      (Such as `text-align: right;` and `float: right;`) [example selector @page :right {}]

// Use as a pseudo-type selector:
// 'active',    (pseudo-class) [unknown use-case for a property value]
// 'disabled',  (such as `button:disabled` and `input:disabled`) [unknown use-case for a property value]

// Depends on the name tag:
// 'default',   (Such as `cursor: default;` and `appearance: default;` for properties)( `input:default` and `option:default` are pseudo-classes)
// 'optional',  (Such as `font-display: optional;` for a property value) ('input:optional' is a pseudo-class)

// The :default pseudo-class is limited to form elements:
// button
// input
// option
// select

// The :optional pseudo-class is limited to form elements:
// input
// textarea
// select

// Unknown use-cases:
// 'content',   (requires a double colon as a pseudo-element, but unknown use-case) [unknown use-case for a property value as well]
