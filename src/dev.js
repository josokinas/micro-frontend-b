(async () => {
  const { render, root } = await import('./index');
  document.body.appendChild(root);
  render();
})();
