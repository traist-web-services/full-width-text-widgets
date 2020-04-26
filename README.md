# Full Width Text Widgets

This is an Apostrophe CMS module which adds full width text widget by wrapping [Fitty](https://github.com/rikschennink/fitty) for use with Apostrophe.

All credit to Rik from PQINA for fitty.js.

# Usage
In your `app.js`:

````js
module.exports = {
  modules: {
    ...
    full-width-text-widgets: {
      fonts: ['A list', 'of custom', fonts']
    }
  }
}
```

You are responsible for loading the fonts yourself!
