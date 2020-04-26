module.exports = {
  alias: 'fwtw',
  extend: "apostrophe-widgets",
  label: "Full Width Text",
  beforeConstruct(self, options) {
    if (!options.addFields) {
      options.addFields = [] 
    }
    options.addFields = [
      ...options.addFields,
      {
        type: "boolean",
        name: "forceUppercase",
        def: false,
        label: "Uppercase?",
      },
    ];
  },
  skipInitialModal: true,
  construct(self, options) {
    console.log(options.fonts)
    const styles = options.fonts.map((font) => {
      return {
        name: font,
        element: "p", 
        styles: {
          'font-family': font
        },
      };
    });
    console.log(styles)
    self.addHelpers({
      fontStyles: styles
    });
    self.pushAsset("stylesheet", "widget");
    self.pushAsset("script", "fitty.min");
    self.pushAsset("script", "widget");
  },
};
