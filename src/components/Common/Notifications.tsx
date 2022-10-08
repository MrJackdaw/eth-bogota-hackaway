import React, { useEffect, useMemo, useState } from "react";
import { Alert, removeNotification } from "state";
import styled from "styled-components";
import { noOp } from "utils";
import { FlexRow } from "./Containers";

const Wrapper = styled(FlexRow)`
  background-color: ${({ theme }) => theme.colors.bgColor};
  border-radius: ${({ theme }) => theme.presets.rounded};
  box-shadow: ${({ theme }) => theme.presets.elevated.md};
  margin-bottom: ${({ theme }) => theme.sizes.xs};
  pointer-events: all;
  width: 100%;

  .material-icons {
    background: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    display: inline-flex;
    margin-right: ${({ theme }) => theme.sizes.sm};
  }
`;

const ClearNotification = styled((p: NotificationProps) => (
  <button onClick={p.onClear} className="material-icons">
    close
  </button>
))<React.ComponentPropsWithRef<"button">>`
  color: ${({ theme }) => theme.colors.error};
`;

const Notification = styled((props: NotificationProps) => {
  const { error, notification, onClear = noOp } = props;

  return (
    <Wrapper className={props.className}>
      <ClearNotification onClear={onClear} />
      {error && <b className="label">Error:&nbsp;</b>}
      <span>{notification}</span>
    </Wrapper>
  );
})``;

export default Notification;

export const AutoDismissNotification = styled((props: ADNProps) => {
  const { timeout = 5000, className, notification } = props;
  const [visible, setVisible] = useState(Boolean(true));
  const cName = useMemo(() => {
    const base = `${className || ""}`.trim();
    const anim = visible ? "slide-in-left" : "slide-out-left";
    return `${base} ${anim}`;
  }, [visible, notification]);
  const clear = () => removeNotification(props.notification as Alert);

  useEffect(() => {
    const toggleVisible = () => setVisible(!visible);
    const t = setTimeout(toggleVisible, timeout);
    return () => {
      clearTimeout(t);
      clear();
    };
  }, []);

  return notification?.msg || notification ? (
    <Notification
      onClear={clear}
      className={cName}
      notification={notification.msg}
    />
  ) : (
    <></>
  );
})``;

type NotificationHandlers = {
  onClear(): void;
};

type NotificationBaseProps = {
  notification?: string | null | Alert;
  error?: boolean;
} & React.ComponentPropsWithRef<"div" | "section" | "button">;

type NotificationProps = NotificationBaseProps & NotificationHandlers;

type ADNProps = NotificationBaseProps & {
  notification: Alert;
  timeout?: number;
};

