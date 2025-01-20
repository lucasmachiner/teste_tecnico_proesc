import { ThemeColors } from "@/theme/colors";
import React, { Component } from "react";
import { Animated, StyleSheet, Text, View, I18nManager } from "react-native";
import { RectButton, Swipeable } from "react-native-gesture-handler";

interface Props {
  children: React.ReactNode;
  translations: {
    something: string
  },
  theme: string,
}
interface State { }

export default class BasicSwipeableRow extends Component<Props, State> {
  private _swipeableRow: Swipeable | null = null;

  renderLeftActions = (progress: Animated.AnimatedInterpolation<number>, dragX: Animated.AnimatedInterpolation<number>) => {
    return (
      <RectButton style={styles(this.props.theme).leftAction} onPress={this.close}>
        <Text style={styles(this.props.theme).text}>
          {this.props.translations.something}
        </Text>
      </RectButton>
    );
  };

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
        leftThreshold={80}
        rightThreshold={41}
        renderLeftActions={this.renderLeftActions}
      >
        {children}
      </Swipeable>
    );
  }
}

const styles = (theme: string) => StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: ThemeColors(theme).leftActionGreen,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: I18nManager.isRTL ? "row" : "row-reverse",
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 10,
  },
  text: {
    color: ThemeColors(theme).text
  }
});
