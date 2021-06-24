import React from 'react';
import PropTypes from 'prop-types';
import {
  Svg, G, Path, View, StyleSheet
} from '@react-pdf/renderer';

export const Logo = ({ theme }) => {
  const styles = StyleSheet.create({
    logoWrapper: {
      width: '150px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '20px'
    },
    logo: {
      width: '35%',
      margin: 'auto'
    }
  });

  return (
    <View style={styles.logoWrapper}>
      <Svg
        style={styles.logo}
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G fill={theme.palette.primary.main} transform="translate(-36 45.5)">
          <Path
            id="border"
            d="M246.7 1c-4.5 1.2-11.1 4.4-15.3 7.6-3.8 3-10.6 5.4-15 5.4-1.8 0-6.3-.7-10.1-1.6-9.8-2.3-17.9-1.4-27 3.1-7.2 3.5-11.1 7.2-18.6 17.4-4 5.6-10.3 8.9-19.3 10.2-17.3 2.4-31.2 14.9-34.5 30.9-2.2 10.8-6.9 16.9-16.8 21.9-6.2 3.2-13.2 10.6-16.7 17.6-2.8 5.8-2.9 6.4-3 21.5 0 17.3-.5 19-6.5 26.2-12.4 14.8-13.9 30-4.8 48.4 4.9 9.9 5.4 16 2 25.8-5.7 16.2-.6 32.7 14 45.5 7.6 6.7 9.4 10.6 10.8 23.5 2 19.3 10.9 30.2 30 36.7 6 2.1 12.1 6.3 12.1 8.3 0 .7-9.5 24.2-21.1 52.2-19.9 48-21.1 51.2-20.7 56.1.6 6.5 4.4 11.8 10.6 14.5 6 2.7 8 2.3 35.6-6.2 17.2-5.3 23.2-6.8 24.2-5.9.7.6 6.3 10.6 12.5 22.2 6.1 11.7 12.3 22.5 13.8 24.1 6.9 7.5 18.3 7.4 25.4-.1 1.9-2.1 9.7-19.7 24.6-55.7 12.1-29 22.2-53 22.5-53.3.3-.4.9-.4 1.2 0 .3.3 10.4 24.3 22.4 53.3 15 36.1 22.8 53.6 24.7 55.7 7.1 7.5 18.5 7.6 25.4.1 1.5-1.6 7.7-12.4 13.8-24.1 6.2-11.6 11.8-21.6 12.6-22.3 1-.8 6.7.6 24.2 6 27.6 8.5 29.5 8.9 35.5 6.2 6.2-2.7 10-8 10.6-14.5.4-4.9-.8-8.1-20.7-56.1-11.6-28-21.1-51.5-21.1-52.2 0-2 6.1-6.2 12.1-8.3 8.7-3 13.8-5.9 18.8-11 7-6.9 10-13.8 11.2-25.7 1.4-12.9 3.2-16.8 10.8-23.5 14.8-12.9 19.4-28.2 13.9-45.5-3.3-10.6-2.9-15.8 2.2-25.9 9-18.3 7.5-33.6-4.9-48.3-6.2-7.3-7.2-11.3-6.5-25.6.6-10.7.4-12.8-1.4-18-2.7-7.5-8.8-15.5-14.6-19.2-2.5-1.6-6.6-4.2-9.1-5.7-5.5-3.5-9.1-9.3-11.4-18.5-4.2-17.1-17.1-28.7-34.5-31.1-8.9-1.3-15.3-4.6-19.3-10.2-7.5-10.2-11.4-13.9-18.6-17.4-9.1-4.5-17.2-5.4-27-3.1-3.8.9-8.3 1.6-10.1 1.6-4.5 0-11.2-2.5-15.3-5.6-6.4-4.9-13.9-7.6-22.1-8-4.2-.2-9.4.1-11.5.6zm17.4 15.5c2.3.9 5.8 2.7 7.6 4.1 9.9 7.6 21.1 9.7 35.3 6.8 7.7-1.5 9.8-1.6 13.8-.5 6.8 1.8 11.6 5.3 16.1 11.9 6.9 10.3 15.2 15.9 26.6 18.1 18.6 3.7 23.6 7.8 27.5 22.6 3.6 13.6 10.3 22.5 21.1 28 5.9 3.1 10.7 7.9 13 13.1 1.6 3.4 1.8 6.4 1.6 18.5-.2 13.4 0 14.8 2.3 19.9 1.3 3 4.3 7.8 6.6 10.6 6.7 8.2 7.8 11 7.8 18.9 0 6.2-.4 7.9-4.2 15-6.4 12.5-7.3 22.9-2.8 35.4 2.2 5.9 2 14.6-.3 19.7-1.1 2.3-3.8 5.9-6.2 8-13.4 12-16.3 17.4-18.3 33.4-2 15.8-6.6 22.5-18.1 26-12.5 3.8-21.5 11.5-26.8 23-4.3 9.1-6.9 12.2-12.9 15.5-4.6 2.5-6.2 2.8-16.2 3-15.4.3-21 2.5-32.1 12.5-3.7 3.4-8.3 6.8-10.1 7.6-5.7 2.4-13.7 1.8-22.2-1.8-6.8-2.8-8.8-3.2-17.2-3.2-8.4 0-10.4.4-17.2 3.2-8.5 3.6-16.5 4.2-22.2 1.8-1.8-.8-6.4-4.2-10.1-7.6-11.1-10-16.7-12.2-32.1-12.5-10-.2-11.6-.5-16.2-3-6-3.3-8.6-6.4-12.9-15.5-5.3-11.5-14.3-19.2-26.8-23-11.5-3.5-16.1-10.1-18-25.9-2-16-4.9-21.3-18.4-33.6-2.4-2.2-5.2-5.8-6.2-8-2.3-5-2.4-13.8-.3-19.6 4.5-12.5 3.6-22.9-2.8-35.4-3.8-7.1-4.2-8.8-4.2-15 0-7.9 1.1-10.7 7.8-18.9 2.3-2.8 5.3-7.6 6.6-10.6 2.3-5.1 2.5-6.5 2.3-19.9-.2-12.1 0-15.1 1.6-18.5 2.3-5.2 7.1-10 13-13.1 10.7-5.5 17.5-14.4 21.1-27.9 2.3-8.5 4.2-11.9 9.2-16.1 4-3.4 6.4-4.3 15.8-5.9 13-2.3 21.8-8 29.1-18.8 4.5-6.6 9.3-10.1 16.1-11.9 4-1.1 6.1-1 13.8.5 14.2 2.9 25.4.8 35.3-6.8 7-5.4 15.8-6.9 23.8-4.1zM139.3 368.4c1 2.6 10.6 9.4 16.4 11.6 4.5 1.8 8.2 2.3 16.8 2.4 13 .3 16.2 1.5 25.7 10.3 3.3 3 8.5 6.7 11.7 8.2 4.9 2.3 6.9 2.6 15.9 2.6 8.7 0 10.1.2 9.7 1.5-3.5 9.4-37.2 89.9-38.1 90.9-.7.7-1.9 1.1-2.7.8-.8-.3-6.5-10.3-12.8-22.3-6.3-11.9-12.9-23.2-14.6-25-3.7-3.7-10-5.9-14.7-5-1.8.3-13.4 3.8-26 7.7-12.6 3.8-23.5 6.8-24.3 6.4-1-.3-1.4-1.4-1.1-2.8.7-3.4 36.2-88.7 36.9-88.7.4 0 .9.6 1.2 1.4zm253.2 41.8c9.8 23.8 18.1 44.3 18.3 45.5.3 1.4-.1 2.5-1 2.8-.9.4-11.7-2.6-24.2-6.4-12.5-3.9-24.2-7.3-26-7.6-4.9-1-11.2 1.1-14.9 4.9-1.7 1.8-8.4 13.1-14.6 25.1-6.3 11.9-12.1 22-12.9 22.2-.7.3-1.9-.1-2.6-.8-.9-1-34.6-81.5-38.1-90.9-.4-1.3 1-1.5 9.7-1.5 9.1 0 11-.3 16.2-2.8 3.2-1.5 8.6-5.3 12.1-8.5 9-8.4 11.8-9.5 25-9.8 8.6-.1 12.3-.6 16.8-2.4 5.8-2.2 15.4-9 16.4-11.6.3-.8.8-1.4 1.2-1.4.4 0 8.7 19.5 18.6 43.2z"
          />
        </G>

        <Path
          id="border"
          d="M232 54.4c-46.5 8.3-84.7 35.5-107.7 76.6-7.7 13.6-16.1 39.9-16.6 51.7-.2 4.7.1 5.7 2.2 7.4 3 2.4 7.6 2.4 9.9.1 1.2-1.2 2.5-5.3 3.6-11.3 9.9-54.4 49.7-95.6 105.1-108.5 6.4-1.5 11.9-1.9 28-1.9 18.4 0 20.8.2 30.8 2.8 39.5 9.9 71.6 35.5 89.6 71.5 4.5 8.9 9.7 25 11.7 36.1 1.1 6 2.4 10.1 3.6 11.3 2.3 2.3 6.9 2.3 9.9-.1 2.9-2.3 2.9-6.3.4-18.4-12-57.9-57.3-103.1-116.5-116.2-10.2-2.3-43.6-2.9-54-1.1z"
          fill="none"
          stroke={theme.palette.primary.main}
        />
        <Path
          id="border"
          d="M251.5 95c-6 1.8-7.9 5.2-18.5 34.5-5.6 15.4-10.5 28.4-10.9 28.8-.4.4-13.6 1.2-29.2 1.8-15.6.5-29.9 1.2-31.7 1.5-4.6.7-9.9 5.7-11.3 10.6-.9 3.3-.7 4.9.6 8.5 1.5 3.9 4.3 6.4 26.1 23.4 13.4 10.5 24.4 19.4 24.4 19.7 0 .4-3.6 13.3-8 28.7-4.4 15.4-8 29.8-8 32 0 9.3 9.3 16.1 17.9 13.2 2-.7 14.6-8.6 27.8-17.5C244 271.3 255.4 264 256 264c.6 0 12 7.3 25.3 16.2 13.2 8.9 25.8 16.8 27.8 17.5 8.6 2.9 17.9-3.9 17.9-13.2 0-2.2-3.6-16.6-8-32-4.4-15.4-8-28.3-8-28.6 0-.4 11-9.3 24.3-19.7 25.9-20.2 27.3-21.7 27.1-29.5-.2-4.2-2.4-7.9-6.8-11.1-2.5-1.9-4.8-2.2-24.9-2.9-12.2-.4-26.5-1.1-31.7-1.5l-9.4-.7-10.1-27.6c-5.6-15.2-10.9-28.8-11.8-30.2-3.4-5.2-10.1-7.5-16.2-5.7zm15 44.1c5.4 14.9 10.7 28.2 11.8 29.5 3.8 4.9 5.7 5.3 36.8 6.4 16.2.6 29.8 1.2 30.3 1.4.5.1-9.7 8.5-22.7 18.6-12.9 10.2-24.3 19.7-25.1 21.2-.9 1.4-1.6 4.3-1.6 6.5 0 2.1 3.5 16.2 7.9 31.3 4.3 15.1 7.7 27.6 7.6 27.8-.2.2-11.2-6.9-24.5-15.8-13.4-9-25.8-16.7-27.6-17.3-2.3-.7-4.5-.7-6.7 0-1.8.5-14.2 8.3-27.6 17.2-13.3 8.9-24.4 16.1-24.6 15.9-.1-.2 3.3-12.7 7.6-27.8 4.4-15.1 7.9-29.3 7.9-31.5 0-2.2-.8-5.2-1.8-6.7s-12.3-10.9-25.1-21c-12.8-10-22.9-18.3-22.5-18.5.5-.1 14.1-.7 30.3-1.3 31.1-1.1 33-1.5 36.8-6.4 1.1-1.3 6.4-14.6 11.8-29.5S255.6 112 256 112c.4 0 5.1 12.2 10.5 27.1z"
          fill="none"
          stroke={theme.palette.primary.main}
        />
        <Path
          id="border"
          d="M110.3 214.4c-3.3 2.9-3.4 6.7-.4 20.3 6.4 28.5 19.2 51.5 40.5 72.9 22.1 22 45.9 34.9 77 41.6 14.5 3.1 42.7 3.1 57.2 0 31.2-6.7 54.8-19.5 77-41.6 21.3-21.3 33.8-43.8 40.3-72.6 3.5-15.6 3.5-16.7.2-20.1-3.5-3.5-6.1-3.7-9.5-.7-2.1 1.9-2.8 4.1-4.1 11.6-4.3 25.3-16.9 50.1-35.3 69.4-18.4 19.2-41.5 32.2-68.5 38.5-9.8 2.3-13.3 2.7-28.7 2.7-15.4 0-18.9-.4-28.7-2.7-25.3-5.9-46.3-17.1-64.7-34.7-20-19.1-34.7-46.6-39.2-73.4-1.2-7.3-2-9.5-4-11.4-3.2-2.8-5.6-2.8-9.1.2z"
          fill="none"
          stroke={theme.palette.primary.main}
        />
      </Svg>
    </View>
  );
};

Logo.propTypes = {
  theme: PropTypes.object.isRequired
};
