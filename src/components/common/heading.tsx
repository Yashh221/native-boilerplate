import {Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

interface HeadingProps extends React.ComponentProps<typeof Text> {
  children: React.ReactNode;
  // size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

const Heading = ({children, size = 'sm', ...args}: HeadingProps) => {
  return (
    <Text style={styles.text} fontSize={size} fontWeight={700} {...args}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito Sans',
    fontSize: 34,
    fontWeight: '600',
    lineHeight: 44,
  },
});

export default Heading;
