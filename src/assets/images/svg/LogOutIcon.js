import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const LogOutIcon = props => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 13 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7.8 0H5.2C2 0 0 2 0 5.2V9.25H4.44L2.37 7.18C2.22 7.03 2.15 6.84 2.15 6.65C2.15 6.46 2.22 6.27 2.37 6.12C2.66 5.83 3.14 5.83 3.43 6.12L6.78 9.47C7.07 9.76 7.07 10.24 6.78 10.53L3.43 13.88C3.14 14.17 2.66 14.17 2.37 13.88C2.08 13.59 2.08 13.11 2.37 12.82L4.44 10.75H0V14.8C0 18 2 20 5.2 20H7.79C10.99 20 12.99 18 12.99 14.8V5.2C13 2 11 0 7.8 0Z"
      fill={props.color}
    />
  </Svg>
);
export default LogOutIcon;
