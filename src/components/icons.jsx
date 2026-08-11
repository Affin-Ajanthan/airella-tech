function Icon({ children, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

export function IconCode(props) {
  return (
    <Icon {...props}>
      <path d="M9 18L4 12l5-6M15 6l5 6-5 6" />
    </Icon>
  )
}

export function IconNetwork(props) {
  return (
    <Icon {...props}>
      <circle cx="6" cy="7" r="2" />
      <circle cx="18" cy="7" r="2" />
      <circle cx="12" cy="17" r="2" />
      <path d="M7.7 8.3L10.6 15.4M16.3 8.3L13.4 15.4M8 7h8" />
    </Icon>
  )
}

export function IconCloud(props) {
  return (
    <Icon {...props}>
      <path d="M7 18a4 4 0 01-.6-7.96 5 5 0 019.8-1.53A4.5 4.5 0 0116.5 18H7z" />
    </Icon>
  )
}

export function IconPen(props) {
  return (
    <Icon {...props}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </Icon>
  )
}

export function IconPhone(props) {
  return (
    <Icon {...props}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </Icon>
  )
}

export function IconBrowser(props) {
  return (
    <Icon {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <circle cx="6" cy="6.5" r="0.4" fill="currentColor" />
      <circle cx="8.5" cy="6.5" r="0.4" fill="currentColor" />
    </Icon>
  )
}

export function IconChat(props) {
  return (
    <Icon {...props}>
      <path d="M21 11.5a8.38 8.38 0 01-9.4 8.3 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 018-8h.5a8.48 8.48 0 018.5 8v.5z" />
    </Icon>
  )
}

export function IconSun(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </Icon>
  )
}

export function IconMoon(props) {
  return (
    <Icon {...props}>
      <path d="M20 14.5A8.5 8.5 0 119.5 4a7 7 0 0010.5 10.5z" />
    </Icon>
  )
}
