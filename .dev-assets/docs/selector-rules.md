# Rules of Selectors


## Shared keywords for pseudo selectors and property value
- active
- paused
- open
- disabled
- default
- optional

## May Include

- & (nesting selector)
- selector[] (attribute selector)
- .selector (class selector)
- #selector (id selector)
- keyword (type selector) ... can be namespaced ns|h1 or |h1 ... aka elemental selector or tag name
- - (universal selector)

- selector.class
- selector#id

## Patterns

- -
- E
- E:(not|is|where|has)()
- E.class
- E#id
- E[attr]
- E:dir() - Directional pseudo-class
- E:lang() - Language pseudo-class
- E:(any-link|link|visited|local-link|target|target-within|scope) - Location pseudo-class
- E:(active|hover|focus|focus-within|focus-visible) - User Action Pseudo-classes
- E:(current|current()|past|future) - Time-dimensional Pseudo-classes

### Resource State Pseudo-classes

- E:(playing|paused|seeking) - Media Playback State
- E:(buffering|stalled) - Media Loading State
- E:(muted|volume-locked) - Sound States

- E:(open|popover-open|modal|fullscreen|picture-in-picture) - Element Display State Pseudo-classes

- E:(enabled|disabled|read-write|read-only|placeholder-shown|autofill|default|checked|indeterminate|valid|invalid|in-range|out-of-range|required|optional|blank|user-valid|user-invalid)

- E:(root|empty|nth-child()|nth-last-child()|first-child|last-child|only-child|nth-of-type()|nth-last-of-type()|first-of-type|last-of-type|only-of-type) - Tree-Structural pseudo-classes

### Grid-Structural Selectors

- E F | E > F | E + F | E ~ F ... combinator (>|+|~|\\s)
- F || E | E:(nth-col()|nth-last-col()) - Grid-Structural Selectors

## Complex Selectors

selector.class
selector#id
selector{combinator}
selector:pseudo-class
selector::pseudo-element

## 5 Aspects

1. tag name
2. namespace
3. ID
4. Class
5. Attribute (name-value pairs)

### May start or end with

\*|\\||\\#|\\.|combinator|,|&

### May start with

### May end with

:[\\w]+ | ::[\\w]+ | []

May NOT start with
digit

May NOT end with
:\\s+

- Universal selector \*
- Nesting selector &
- Namespace selector |
- Class selector .
- Id selector #
- Whitespace \\s
- Combinator ~|+|>
- Comma ,
- Closing bracket }|)|]
- Semicolon ;
- colon without whitespace :[^\\s]
- comment block \*/
