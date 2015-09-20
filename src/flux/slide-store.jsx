export default class SlideStore {
  constructor() {
    this.bindActions(this.alt.getActions("SlideActions"));
    this.fragments = {};
  }

  onAddFragment(payload) {
    const fragments = this.fragments;
    const order = "order" + payload.id;
    if (!fragments.hasOwnProperty(payload.slide)) {
      fragments[payload.slide] = {};
      fragments[payload.slide][order] = payload;
    } else {
      const slide = fragments[payload.slide];
      if (!slide.hasOwnProperty(order)) {
        slide[order] = payload;
      }
    }
    this.setState({
      fragments
    });
  }
  onUpdateFragment(payload) {
    let fragments = this.fragments,
        slide = fragments[payload.fragment.slide];
    slide[`order${payload.fragment.id}`].visible = payload.visible;

    // sets the current step
    for(let step in slide){
      slide[step].prev = slide[step].id === payload.current - 1;
      slide[step].current = slide[step].id === payload.current;
      slide[step].next = slide[step].id === payload.current + 1;
    }

    this.setState({
      fragments
    });
  }
}