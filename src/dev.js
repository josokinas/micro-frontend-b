let loaded = false;

const load = async () => {
  await import('./index');
  document.body.appendChild(window.MFE.B.root);
  loaded = true;
};

let timesRendered = 0;

const render = (props) => {
  if (!loaded) return;
  window.MFE.B.render(props);
};

load();
setInterval(() => render({ timesRendered: timesRendered++ }), 2000);
