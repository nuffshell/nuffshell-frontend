import zustand from "zustand";
import { ReactNode } from "react";

interface NotificationData {
  title: string;
  content: ReactNode;
}

type State = {
  isNotifying: boolean;
  title: string;
  content: ReactNode;
  notify: (notificationData: NotificationData) => void;
};

export default zustand<State>((set) => ({
  isNotifying: false,
  title: "",
  content: null,
  notify({ title, content }: NotificationData) {
    set({ isNotifying: true, title, content });
  },
}));
