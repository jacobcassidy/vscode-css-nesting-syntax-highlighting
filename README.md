# CSS Nesting Syntax Highlighting

> Note: You may need to reload VSCode after installing this extension for it to take effect.

All modern browsers support CSS nesting ([Can I Use](https://caniuse.com/css-nesting)), but Visual Studio Code doesn't currently have CSS nesting syntax highlighting. This extension rectifies that by updating the CSS syntax highlighting to include nesting.

To learn more about CSS Nesting, see [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting).

The core CSS syntax file this extension updates can be found in the [official vscode repo](https://github.com/Microsoft/vscode/blob/main/extensions/css/syntaxes/css.tmLanguage.json).

## CSS Nesting Example

```css
.example {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

/* The browser parses this as: */
.example {
  text-decoration: none;
}
.example:hover {
  text-decoration: underline;
}
```

## Installation

Search for `CSS Nesting Syntax Highlighting` in the VSCode's Extensions Marketplace panel or click the install button on the [CSS Nesting Syntax Highlighting Marketplace page](https://marketplace.visualstudio.com/items?itemName=jacobcassidy.css-nesting-syntax-highlighting).

You can also manually install the extension by cloning the [github repository](https://github.com/jacobcassidy/vscode-css-nesting-syntax-highlighting) into `~/.vscode/extensions` and restarting the VSCode editor.

## Companion Theme

CSS Nesting Syntax Highlighting works excellent with the [Cassidy Dark Theme](https://marketplace.visualstudio.com/items?itemName=jacobcassidy.cassidy-dark).

## What's New?

View the [Changelog](https://github.com/jacobcassidy/vscode-css-nesting-syntax-highlighting/blob/main/CHANGELOG.md).

## Known Issues

- When nested, a few obscure `#tag-names` are overridden by the same `#property-names`. Those names are:
  - **HTML tags**: `content`, `font`, `image`, `marquee`, `mask`, `shadow`, `style`.
  - **SVG tags**: `color-profile`, `cursor`, `filter`, `line`, `text`.
- Nesting syntax highlighting for `at rules`, except for `@media`, has not been added.

## Issues?

If you come across any issues, please feel free to [report them here](https://github.com/jacobcassidy/vscode-css-nesting-syntax-highlighting/issues). You can also [create a pull request](https://github.com/jacobcassidy/vscode-css-nesting-syntax-highlighting/pulls) to add any improvements.
