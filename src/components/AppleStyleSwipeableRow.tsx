import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';
import { Animated, StyleSheet, Text, View, I18nManager } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

type Props = {
  children: React.ReactNode;
  translations: {
    archive: string,
    more: string,
    flag: string,
  };
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
      <RectButton style={styles.leftAction} onPress={this.close}>
        <Animated.Text style={[styles.actionText]}>
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
        <RectButton style={[styles.rightAction, { backgroundColor: color }]} onPress={pressHandler}>
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  renderRightActions = (progress: Animated.AnimatedInterpolation<number>) => (
    <View style={{ width: 192, flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }}>
      {this.renderRightAction(this.props.translations.more, '#C8C7CD', 192, progress)}
      {this.renderRightAction(this.props.translations.flag, '#ffab00', 128, progress)}
      {this.renderRightAction(this.props.translations.more, '#dd2c00', 64, progress)}
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

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
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
