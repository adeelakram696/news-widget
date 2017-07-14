import React from 'react';
import { shallow } from 'enzyme';
import NewsRow from 'components/NewsRow.js';

describe('<NewsRow />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<NewsRow />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "newsrow-component"', function () {
      expect(component.hasClass('newsrow-component')).to.equal(true);
    });
  });
});
