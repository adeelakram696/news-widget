import React from 'react';
import { shallow } from 'enzyme';
import NewsTitle from 'components/NewsTitle.js';

describe('<NewsTitle />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<NewsTitle />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "newstitle-component"', function () {
      expect(component.hasClass('newstitle-component')).to.equal(true);
    });
  });
});
