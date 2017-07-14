import React from 'react';
import { shallow } from 'enzyme';
import WidgetLayout from 'components/WidgetLayout.js';

describe('<WidgetLayout />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<WidgetLayout />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "widgetlayout-component"', function () {
      expect(component.hasClass('widgetlayout-component')).to.equal(true);
    });
  });
});
