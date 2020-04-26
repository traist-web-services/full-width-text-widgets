apos.on('enhance', resizeAllFullWidthText)

const fontList = styleInPage('fontFamily');
// Get a list of fonts in use
const fontLoadingPromises = fontList.filter(f => f !== 'inherit').map(font => document.fonts.load(`16px ${font}`));

Promise.all(fontLoadingPromises)
  .then(() => {
    console.log('All fonts loaded')
    if (!isFacebookApp()) {
      resizeAllFullWidthText()
    }
  })

function resizeAllFullWidthText () {
  const options = {
    minSize: 12,
    maxSize: 300
  }
  document.querySelectorAll('.fittext').forEach(el => {
    fitty(el, options)
  })
  fitty.fitAll()
}

if (!isFacebookApp()) {
  resizeAllFullWidthText()
}

function styleInPage(css, verbose){
  if(typeof getComputedStyle== "undefined")
  getComputedStyle= function(elem){
      return elem.currentStyle;
  }
  var who, hoo, values= [], val,
  nodes= document.body.getElementsByTagName('*'),
  L= nodes.length;
  for(var i= 0; i<L; i++){
      who= nodes[i];
      if(who.style){
          hoo= '#'+(who.id || who.nodeName+'('+i+')');
          val= who.style.fontFamily || getComputedStyle(who, '')[css];
          if(val){
              if(verbose) values.push([hoo, val]);
              else if(values.indexOf(val)== -1) values.push(val);
          }
      }
  }
  return values;
}

function isFacebookApp() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
}