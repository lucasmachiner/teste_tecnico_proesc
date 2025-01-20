import { ThemeColors } from '@/theme/colors';
import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, I18nManager } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

type Props = {
  children: React.ReactNode;
  translations: {
    archive: string,
    more: string,
    flag: string,
  };
  theme: string,
}; // Add props types here if needed
type State = {}; // Add state types here if needed

export default class AppleStyleSwipeableRow extends Component<Props, State> {
  private _swipeableRow: Swipeable | null = null;

  renderLeftActions = (progress: Animated.AnimatedInterpolation<number>, dragX: Animated.AnimatedInterpolation<number>) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton style={styles(this.props.theme).leftAction} onPress={this.close}>
        <Animated.Text style={[styles(this.props.theme).actionText]}>
          {this.props.translations.archive}

        </Animated.Text>
      </RectButton>
    );
  };

  renderRightAction = (text: string, color: string, x: number, progress: Animated.AnimatedInterpolation<number>) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });

    const pressHandler = () => {
      if (this._swipeableRow) {
        this._swipeableRow.close();
      }
      alert(text);
    };

    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton style={[styles(this.props.theme).rightAction, { backgroundColor: color }]} onPress={pressHandler}>
          <Text style={styles(this.props.theme).actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  renderRightActions = (progress: Animated.AnimatedInterpolation<number>) => (
    <View style={{ width: 192, flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }}>
      {this.renderRightAction(this.props.translations.more, ThemeColors(this.props.theme).grey, 192, progress)}
      {this.renderRightAction(this.props.translations.flag, ThemeColors(this.props.theme).yellow, 128, progress)}
      {this.renderRightAction(this.props.translations.more, ThemeColors(this.props.theme).red, 64, progress)}
    </View>
  );

  updateRef = (ref: Swipeable) => {
    this._swipeableRow = ref;
  };

  close = () => {
    if (this._swipeableRow) {
      this._swipeableRow.close();
    }
  };

  render() {
    const { children } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        leftThreshold={30}
        rightThreshold={40}
        renderLeftActions={this.renderLeftActions}
        renderRightActions={this.renderRightActions}>
        {children}
      </Swipeable>
    );
  }
}

const styles = (theme: string) => StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: ThemeColors(theme).leftActionBlue,
    justifyContent: 'center',
  },
  actionText: {
    color: ThemeColors(theme).text,
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
