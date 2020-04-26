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
      {
        type: 'singleton',
        name: 'textContent',
        contextualOnly: true
      }
    ];
  },
  skipInitialModal: true,
  construct(self, options) {
    const styleDeclarationsArray = options.fonts.map((f, i) => {
      // Create a class name based on the name and the index
      // We can use this to create dynamic style blocks to
      // feed to Tip Tap
      return `.c-full-width-text__text--${f.split(' ')[0]}${i} {
        font-family: '${f}'
      }` 
    });

    const styles = options.fonts.map((font, i) => {
      return {
        tag: 'span',
        label: `${font}`,
        'class': `c-full-width-text__text--${font.split(' ')[0]}${i}`
      };
    });
    self.addHelpers({
      fontStyles: [{
          tag: 'p',
          label: 'Default',        
        },
        ...styles],
      styleDeclarations: styleDeclarationsArray.join('\n')
    });
    self.pushAsset("stylesheet", "widget");
    self.pushAsset("script", "fitty.min");
    self.pushAsset("script", "widget");
  },
};
