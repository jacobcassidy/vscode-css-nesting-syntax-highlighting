# README

All modern browsers support CSS nesting ([Can I Use](https://caniuse.com/css-nesting)), yet VSCode doesn't currently have CSS nesting syntax highlighting.

This extension provides the needed syntax highlighting and will be available until the new syntax rules merge into VSCode's core.

To learn more about CSS Nesting, see [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting).

## CSS Nesting Example

```css
  .example {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
```

## VSCode CSS Syntax Source

- [css.tmLanguage.json](https://github.com/Microsoft/vscode/blob/main/extensions/css/syntaxes/css.tmLanguage.json)
