function exampleDispatch() {
  window.dispatchEvent(new CustomEvent('event', {}));
}

describe('fury events', () => {
  // same with "window.window" and similar
  const dispatchEventSpy = jest.spyOn(global.window, 'dispatchEvent');
  
  it("should be called", () => {
    exampleDispatch();
    
    expect(dispatchEventSpy).toHaveBeenCalled();
  })
});