apos.on('enhance', resizeAllFullWidthText);

function resizeAllFullWidthText () {
  document.querySelectorAll(".fittext").forEach((el) => {
    fitty(el, {
      maxSize: 100,
      minSize: 20
    });
  });
}

(async function () {
  await document.fonts.ready
  fitty.fitAll({
    maxSize: 100,
    minSize: 20
  })
  setTimeout(resizeAllFullWidthText,500);
})();

resizeAllFullWidthText();