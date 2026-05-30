// ─── School Data Types ────────────────────────────────────────────────────────

export interface Program {
  id: string
  name: string
  ageRange: string
  description: string
  icon: string
  color: string
  features: string[]
  duration?: string
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  color?: string
}

export interface Testimonial {
  id: string
  parentName: string
  childName: string
  childClass: string
  rating: number
  text: string
  avatarInitials: string
  avatarColor: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'classrooms' | 'activities' | 'celebrations' | 'playground' | 'students'
  caption?: string
}

export interface StaffMember {
  id: string
  name: string
  role: string
  qualification: string
  experience: string
  photo?: string
  initials: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  value?: string | number
}

// ─── Admission / Form Types ───────────────────────────────────────────────────

export interface AdmissionFormData {
  // Child Info
  childName: string
  gender: 'male' | 'female' | 'other'
  dateOfBirth: string
  age: string
  admissionClass: string
  foodAllergies?: string
  address: string
  phoneResidence?: string

  // Father Info
  fatherName: string
  fatherEducation: string
  fatherOccupation: string
  fatherOfficeAddress?: string
  fatherOfficePhone?: string
  fatherEmail: string

  // Mother Info
  motherName: string
  motherEducation: string
  motherOccupation: string
  motherOfficeAddress?: string
  motherOfficePhone?: string
  motherEmail: string

  // Documents checklist
  hasApplicationForm: boolean
  hasBirthCertificate: boolean
  hasChildPhotos: boolean
  hasProofOfResidence: boolean
  hasParentPhotos: boolean

  // Consent
  consentDataUse: boolean
  consentPolicies: boolean
  consentEmergency: boolean

  // Meta
  place?: string
  date?: string
}

export interface AppointmentFormData {
  parentName: string
  phone: string
  email?: string
  preferredDate: string
  preferredTime: string
  purpose: 'admission-inquiry' | 'school-visit' | 'fee-inquiry' | 'general'
  message?: string
}

export interface ContactFormData {
  name: string
  phone: string
  email?: string
  subject: string
  message: string
}

export interface EnquiryFormData {
  parentName: string
  phone: string
  email?: string
  childAge: string
  interestedClass: string
  message?: string
  howDidYouHear?: string
}

// ─── UI Component Types ───────────────────────────────────────────────────────

export type ButtonVariant = 'primary' | 'gold' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

export type BadgeVariant = 'navy' | 'gold' | 'emerald' | 'red' | 'purple' | 'blue' | 'orange'

export interface BadgeProps {
  variant?: BadgeVariant
  size?: 'sm' | 'md'
  dot?: boolean
  className?: string
  children: React.ReactNode
}

export interface CardProps {
  hover?: boolean
  shine?: boolean
  padding?: 'sm' | 'md' | 'lg' | 'none'
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
  onClick?: () => void
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
  fullWidth?: boolean
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  hint?: string
  options: { value: string; label: string }[]
  placeholder?: string
  fullWidth?: boolean
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  children: React.ReactNode
  showCloseButton?: boolean
}

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface Toast {
  id: string
  type: ToastType
  title: string
  message?: string
  duration?: number
}

// ─── Navigation Types ─────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

// ─── Context Types ────────────────────────────────────────────────────────────

export interface ToastContextValue {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
}

export interface ModalContextValue {
  openModal: (content: React.ReactNode, options?: { title?: string; size?: ModalProps['size'] }) => void
  closeModal: () => void
}

// ─── Page Meta ────────────────────────────────────────────────────────────────

export interface PageMeta {
  title: string
  description?: string
}
