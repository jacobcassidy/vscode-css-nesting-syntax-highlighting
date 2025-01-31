# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2025-01-31

### Added

- Added sheild.io badges to top of `README.md`.

## [0.3.0] - 2025-01-07

### Added

- Added `aspect-ratio` property to list of property-names, matching the latest commit to VSCode.
- Added `light-dark` to list of color functions for proper syntax highlighting.

## [0.2.0] - 2025-01-06

### Added

- Added nesting syntax highlighting for body of `@support` rule.

### Changed

- Updated CHANGELOG.md to follow formatting set by [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [0.1.1] - 2024-08-25

### Changed

- Updated `README.md` with Table of Contents and better organization.

## [0.1.0] - 2024-03-15

### Changed

- Changed `package.json` vscode engine to v1.84.0 and above to allow users on older versions to use the extension.

## [0.0.9] - 2024-02-24

### Added

- Added tokens for `@container` syntax highlighting.

```css
/* Nested @container example */
@container summary (width > 400px) {
  @container (min-width: 800px) {
    .card {
      margin: 50px;
    }
    @container (min-width: calc( var(--width) * 1rem)) {
      .card {
        margin: 0;
      }
    }
  }
}
```

## [0.0.8] - 2024-02-22

### Added

- Added `#arithmetic-operators` for functions (clamp, min, max) operator syntax highlighting.

```css
.arithmetic-operators-example {
  font-size: clamp(1.1rem, 0.7153rem + 1.6368vw, 1.5rem);
  width: max(300px, 50% + 20px);
}
```

## [0.0.7] - 2024-02-22

### Changed

- Revert package.json language keyword to lowercase as extension doesn't work if it is uppercase.

## [0.0.6] - 2024-02-22

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

## [0.0.5] - 2024-02-21

### Added

- Added note to reload VSCode after installing this extension.

## [0.0.4] - 2024-02-19

### Changed

- Added border to logo image for contrast on dark backgrounds.

## [0.0.3] - 2024-02-19

### Added

- Added `.dev-assets` directory with CSS files containing syntax errors, a rule lists, and a getSharedNames() function for finding shared names between `#tag-names` and `#property-names`.
- Added `&` to the allowed list of characters that can be appended to a tag, class, or ID, so it can be used as a CSS nesting compound selector.
- Added `#nesting-selector` rule with `&`.
- Added `#nesting-rules` and `#nesting-at-rules` to include CSS nesting syntax highlighting.
- Added `"include": "$self"` to `rule-list` for nested `{}`.
- Added extension's logo image.
- Added `.prettierrc` file for formatting json with tabs.

### Changed

- Updated demo CSS.
- Updated other CSS for review and testing.

### Removed

- Removed `&` from invalid punctuation so it can be used as a CSS nesting selector.
- Removed `language-configuration.json` and package.json's language contribution block pointing to it.

## [0.0.2] - 2024-02-17

### Added

- Added demo CSS files for testing and review.

## [0.0.1] - 2024-02-16

### Added

- Added initial files to match VSCode core CSS syntax highlighting.
