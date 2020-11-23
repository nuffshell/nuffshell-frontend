import zustand from "zustand";

type State = {
  isLoggedIn: boolean;
  email: string | null;
  handleAuthenticationStateChange: (user: any) => void;
};

export default zustand<State>((set) => ({
  isLoggedIn: false,
  email: null,
  handleAuthenticationStateChange(user) {
    if (user) {
      set({ isLoggedIn: true, email: user.email });
    } else {
      set({ isLoggedIn: false, email: null });
    }
  },
}));
