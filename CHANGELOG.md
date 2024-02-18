# Change Log

All notable changes to the "CSS Nesting Syntax Highlighting" extension will be documented in this file.

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
