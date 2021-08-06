(async () => {
  await import('./index');
  document.body.appendChild(window.MFE.B.root);
  window.MFE.B.render();
})();
