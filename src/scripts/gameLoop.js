let game;

const stateManager = () => {};
const eventManager = (() => {
  const next = (e) => {
    console.log(e);
  };

  return { next };
})();

export { eventManager };
