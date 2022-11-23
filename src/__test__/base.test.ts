describe('Generic test', () => {
  describe('Given a value', () => {
    it('should pass all the tests', () => {
      const a = [1, 2, 3];

      expect(a).toBeArrayOfSize(3);
    });
  });
});
