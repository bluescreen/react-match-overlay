import Shiaijo from './Shiaijo';
import Match from '../models/Match';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, configure } from 'enzyme';
import { Stage, Layer, Text, Image } from 'react-konva';




configure({ adapter: new Adapter() });

const match: Match = {
  Shiaijo: 'A',
  NameTareWhite: 'Bob',
  NameTareRed: 'John',
  NumberTareWhite: 'GER-1',
  NumberTareRed: 'BEL-1'
  
}

describe("Shiaijo Overlay", () => {
  let instance: any;
  

  beforeEach(() => {
    const wrapper = mount(<Shiaijo data={match} />);
    instance = wrapper.instance();
  });

  test("render match", () => {
    const stageRef = instance.stage;
    expect(stageRef.getStage() instanceof Stage).to.equal(true);
  })
})