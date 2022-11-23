describe('Generic test', () => {
  describe('Given a value', () => {
    it('should pass all the tests', () => {
      expect([1, 2, 3]).toBeArrayOfSize(3);
    });
  });
});
