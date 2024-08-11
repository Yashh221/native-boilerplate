import {Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

interface ParagraphProps extends React.ComponentProps<typeof Text> {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'body' | 'secondary' | 'tertiary' | 'tab';
  style?: any;
}

const Paragraph = ({
  children,
  variant = 'body',
  size = 'sm',
  style,
  ...args
}: ParagraphProps) => {
  return (
    <Text style={{...styles[variant], ...style}} {...args}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    lineHeight: 27,
    fontWeight: '500',
  },
  secondary: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    lineHeight: 25,
    fontWeight: '500',
  },
  tertiary: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    lineHeight: 23,
    fontWeight: '500',
  },
  tab: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    lineHeight: 20,
    fontWeight: '500',
  },
});

export default Paragraph;
