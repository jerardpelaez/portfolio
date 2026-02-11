export interface ContactInfo {
  icon: string
  label: string
  value: string
  href: string | null
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}

export const contactInfo: ContactInfo[] = [
  {
    icon: 'email',
    label: 'Email',
    value: 'pelaezjerard@gmail.com',
    href: 'mailto:pelaezjerard@gmail.com'
  },
  {
    icon: 'location',
    label: 'Location',
    value: 'Las Piñas, Philippines',
    href: null
  },
  {
    icon: 'availability',
    label: 'Availability',
    value: 'Open to opportunities',
    href: null
  }
]

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/jerardpelaez', icon: 'github' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jerard-pelaez-770a46198/', icon: 'linkedin' },
]
