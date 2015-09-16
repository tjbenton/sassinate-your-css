export default class SlideStore {
  constructor() {
    this.bindActions(this.alt.getActions("SlideActions"));
    this.fragments = {};
  }

  onAddFragment(payload) {
    const fragments = this.fragments;
    const fid = "f" + payload.id;
    if (!fragments.hasOwnProperty(payload.slide)) {
      fragments[payload.slide] = {};
      fragments[payload.slide][fid] = payload;
    } else {
      const slide = fragments[payload.slide];
      if (!slide.hasOwnProperty(fid)) {
        slide[fid] = payload;
      }
    }
    this.setState({
      fragments
    });
  }
  onUpdateFragment(payload) {
    let fragments = this.fragments,
        slide = fragments[payload.fragment.slide];
    slide["f" + payload.fragment.id].visible = payload.visible;

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