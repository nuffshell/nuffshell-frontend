export default function getNotificationClassNames(isNotifying: boolean) {
  return {
    "overflow-hidden": isNotifying,
    "h-screen": isNotifying,
    "w-screen": isNotifying,
  };
}
