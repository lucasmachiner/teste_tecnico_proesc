import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "../../src/components/Button";
import { TextStyle } from "react-native";

describe("Button", () => {
  const mockOnPress = jest.fn();

  it("the componet render Button with title", () => {
    const { getByText } = render(
      <Button title="Click" onPress={mockOnPress} />
    );

    const buttonText = getByText("Click");
    expect(buttonText).toBeTruthy();
  });

  it("change styles for text when 'styleText' is defined", () => {
    const customStyle: TextStyle = { color: "red", fontSize: 18 };
    const { getByText } = render(
      <Button title="Custom Style" onPress={mockOnPress} styleText={customStyle} />
    );

    const buttonText = getByText("Custom Style");
    expect(buttonText.props.style).toMatchObject(customStyle);
  });

  it("use style default when 'styleText' no defined", () => {
    const { getByText } = render(
      <Button title="Style default" onPress={mockOnPress} />
    );

    const buttonText = getByText("Style default");
    expect(buttonText.props.style).toBeDefined();
  });

  it("call the function 'onPress' when press this button", () => {
    const { getByText } = render(
      <Button title="Press" onPress={mockOnPress} />
    );

    const button = getByText("Press");
    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
