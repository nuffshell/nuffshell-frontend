import React from "react";
import { ModalWindow } from "../../ui";
import useNotifier from "./useNotifier";

function Notifier() {
  const { isNotifying, title, content } = useNotifier();
  return isNotifying ? (
    <ModalWindow title={title}>{content}</ModalWindow>
  ) : null;
}

export default Notifier;
