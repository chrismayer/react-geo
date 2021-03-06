/*eslint-env jest*/


import {
  StringUtil
} from '../../index';

describe('StringUtil', () => {

  describe('Basics', () => {
    it('is defined', () => {
      expect(StringUtil).toBeDefined();
    });
  });

  describe('Static methods', () => {
    describe('#urlify', () => {
      it('wraps any occurence of a link with an <a> tag', () => {
        let url = 'http://www.bvb.de';
        let text = `Visit ${url}`;
        let got = StringUtil.urlify(text);
        expect(got).toBe(`Visit <a href="${url}" target="_blank">${url}</a>`);

        url = 'https://www.bvb.de';
        text = `Visit ${url}`;
        got = StringUtil.urlify(text);
        expect(got).toBe(`Visit <a href="${url}" target="_blank">${url}</a>`);
      });
    });
  });

});
