describe('mapMenu', () => {
  it('should map menu even if there is no menu', () => {
    const menu = mapMenu();
    expect(menu).toEqual({});
  });

  it('should map menu if menu there are menu', () => {
    const menu = mapMenu({
      menu: {
        a: 'b',
      },
    });
    expect(menu).toEqual({ a: 'b' });
  });
});

