import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in state", () => {
    const component = create(<ProfileStatus status='MY STATUS' />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("MY STATUS");
  });

  test("there is should be span instead of input", () => {
    const component = create(<ProfileStatus status='MY STATUS' />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("there is no input after render", () => {
    const component = create(<ProfileStatus status='MY STATUS' />);
    const root = component.root;

    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("callback should be used", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status='MY STATUS' updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deactivateEditMode();

    expect(mockCallback.mock.calls.length).toBe(1);
  });

  // test("input shows if EditMode is enabled", () => {
  //   const component = create(<ProfileStatus status='MY STATUS' />);
  //   const root = component.root;
  //   let span = root.findByType("span");
  //   span.props.onDoubleClick();
  //   let input = root.findByType("input");
  //   expect(input).not.toBeNull();
  // });
});
