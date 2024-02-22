# Change Log

All notable changes to the "CSS Nesting Syntax Highlighting" extension will be documented in this file.

## v0.0.8

_2024-02-22_

### Added

- Added `#arithmetic-operators` for functions (clamp, min, max) operator syntax highlighting.

```css
.arithmetic-operators-example {
  font-size: clamp(1.1rem, 0.7153rem + 1.6368vw, 1.5rem);
  width: max(300px, 50% + 20px);
}
```

## v0.0.7

_2024-02-22_

### Modified

- Revert package.json language keyword to lowercase as extension doesn't work if it is uppercase.

## v0.0.6

_2024-02-22_

### Added

- Added syntax highlighting for functions in media-query header.
- Added syntax highlighting for nested `calc()` functions.

```css
/* Example of a nested calc function */
  .example {
    max-width: calc( (768 / 16) * 1rem) ) {
  }
   /* Example of functions in media-query header */
   @media only screen and (max-width: calc( var(--size) * 1rem)) {}
```

## v0.0.5

_2024-02-21_

### Added

- Added note to reload VSCode after installing this extension.

## v0.0.4

_2024-02-19_

### Modified

- Added border to logo image for contrast on dark backgrounds.

## v0.0.3

_2024-02-19_

### Added

- Added `.dev-assets` directory with CSS files containing syntax errors, a rule lists, and a getSharedNames() function for finding shared names between `#tag-names` and `#property-names`.
- Added `&` to the allowed list of characters that can be appended to a tag, class, or ID, so it can be used as a CSS nesting compound selector.
- Added `#nesting-selector` rule with `&`.
- Added `#nesting-rules` and `#nesting-at-rules` to include CSS nesting syntax highlighting.
- Added `"include": "$self"` to `rule-list` for nested `{}`.
- Added extension's logo image.
- Added `.prettierrc` file for formatting json with tabs.

### Modified

- Updated demo CSS.
- Updated other CSS for review and testing.

### Removed

- Remove `&` from invalid punctuation so it can be used as a CSS nesting selector.
- Removed `language-configuration.json` and package.json's language contribution block pointing to it.

## v0.0.2

_2024-02-17_

### Added

- Added demo CSS files for testing and review.

## v0.0.1

_2024-02-16_

### Added

- Added initial files to match VSCode core CSS syntax highlighting.
