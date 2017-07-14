import React from 'react';
import { shallow } from 'enzyme';
import NewsList from 'components/NewsList.js';

describe('<NewsList />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<NewsList />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "newslist-component"', function () {
      expect(component.hasClass('newslist-component')).to.equal(true);
    });
  });
});
