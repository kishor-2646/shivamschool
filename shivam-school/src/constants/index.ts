import type { Program, Feature, NavItem, FooterSection, Testimonial, Achievement } from '@/types'

// ─── School Info ──────────────────────────────────────────────────────────────

export const SCHOOL_INFO = {
  name: 'Shivam Public School',
  nameKannada: 'ಶಿವಂ ಪಬ್ಲಿಕ್ ಸ್ಕೂಲ್',
  trust: 'Shivam Educational and Charitable Trust',
  trustKannada: 'ಶಿವಂ ಎಜುಕೇಷನಲ್ ಮತ್ತು ಚಾರಿಟೇಬಲ್ ಟ್ರಸ್ಟ್',
  tagline: 'Knowledge · Values · Excellence',
  taglineSecondary: 'Nurturing Today\'s Young Minds for a Better Tomorrow',
  heroMessage: 'An Early Start Leads to a Bright Future!',
  location: {
    village: 'Kodipura',
    post: 'Kodipalli',
    taluk: 'Kanakapura Taluk',
    district: 'Bengaluru South District',
    state: 'Karnataka',
    pincode: '562119',
    fullAddress: 'Kodipura, Kodipalli Post, Kanakapura Taluk, Bengaluru South District – 562119',
    addressKannada: 'ಕೋಡಿಪುರ, ಕೋಡಿಹಳ್ಳಿ, ಕನಕಪುರ ತಾಲ್ಲೂಕು, ಬೆಂಗಳೂರು ದಕ್ಷಿಣ ಜಿಲ್ಲೆ',
    mapUrl: 'https://maps.google.com/?q=Kodipura+Kanakapura+Taluk+Bengaluru',
    coordinates: { lat: 12.5442, lng: 77.4317 },
  },
  contact: {
    phone1: '9886551304',
    phone2: '9900194111',
    phone1Display: '+91 98865 51304',
    phone2Display: '+91 99001 94111',
    whatsapp: '919886551304',
    email: 'info@shivampublicschool.in',
    admissionsEmail: 'admissions@shivampublicschool.in',
  },
  socialMedia: {
    facebook: 'https://facebook.com/shivampublicschool',
    instagram: 'https://instagram.com/shivampublicschool',
    youtube: 'https://youtube.com/@shivampublicschool',
    whatsapp: 'https://wa.me/919886551304',
  },
  timings: {
    weekdays: 'Monday – Friday: 8:30 AM – 1:30 PM',
    saturday: 'Saturday: 8:30 AM – 12:30 PM',
    office: 'Office: 8:00 AM – 5:00 PM',
  },
} as const

// ─── Programs ─────────────────────────────────────────────────────────────────

export const PROGRAMS: Program[] = [
  {
    id: 'daycare',
    name: 'Day Care',
    ageRange: '3 months – 3 years',
    description: 'Safe, nurturing, and loving environment for your little one while you work. Full-day care with trained staff, nutritious meals, and age-appropriate activities.',
    icon: '🍼',
    color: 'bg-pink-100 text-pink-700',
    features: ['Trained caregivers', 'Nutritious meals', 'Sleep schedule', 'Daily parent updates', 'CCTV monitored'],
    duration: 'Full Day (8 AM – 6 PM)',
  },
  {
    id: 'playgroup',
    name: 'Play Group',
    ageRange: '1.5 – 2.5 years',
    description: 'First step into structured learning through play. Children explore, discover, and develop social skills in a colorful, engaging environment.',
    icon: '🧸',
    color: 'bg-orange-100 text-orange-700',
    features: ['Sensory play', 'Motor development', 'Social skills', 'Music & movement', 'Art & craft'],
    duration: 'Half Day (3 hrs)',
  },
  {
    id: 'nursery',
    name: 'Nursery',
    ageRange: '2.5 – 3.5 years',
    description: 'Building blocks of early education. Introduction to letters, numbers, colors, and shapes through the playway learning method.',
    icon: '🌱',
    color: 'bg-green-100 text-green-700',
    features: ['Alphabet introduction', 'Number concepts', 'Colors & shapes', 'Rhymes & stories', 'Playway method'],
    duration: '3 – 4 hrs/day',
  },
  {
    id: 'lkg',
    name: 'LKG',
    ageRange: '3.5 – 4.5 years',
    description: 'Structured pre-primary learning with phonics, writing readiness, basic math, and social development through interactive classroom activities.',
    icon: '📖',
    color: 'bg-blue-100 text-blue-700',
    features: ['Pre-writing skills', 'Phonics foundation', 'Number work 1-20', 'Environmental studies', 'Smart classroom'],
    duration: 'Full school day',
  },
  {
    id: 'ukg',
    name: 'UKG',
    ageRange: '4.5 – 5.5 years',
    description: 'Advanced pre-primary curriculum preparing children for Class 1. Strong focus on reading readiness, mathematics, and overall development.',
    icon: '🔢',
    color: 'bg-purple-100 text-purple-700',
    features: ['Reading readiness', 'Math operations', 'Science concepts', 'Computer basics', 'Physical education'],
    duration: 'Full school day',
  },
  {
    id: 'phonics',
    name: 'Phonics',
    ageRange: '3 – 7 years',
    description: 'Specialized phonics program helping children decode and read fluently. Certified teachers using proven phonics methodology for strong reading foundations.',
    icon: '🔤',
    color: 'bg-yellow-100 text-yellow-700',
    features: ['Certified teachers', 'Systematic method', 'Reading fluency', 'Spelling skills', 'Small batch size'],
    duration: 'Flexible batches',
  },
  {
    id: 'ntt',
    name: 'NTT',
    ageRange: 'Adults (18+)',
    description: 'Nursery Teacher Training certification course for aspiring early childhood educators. Comprehensive curriculum covering child psychology, teaching methods, and classroom management.',
    icon: '👩‍🏫',
    color: 'bg-teal-100 text-teal-700',
    features: ['Certification course', 'Child psychology', 'Teaching methods', 'Practical training', 'Job placement help'],
    duration: '6 months / 1 year',
  },
  {
    id: 'tuitions',
    name: 'Tuitions',
    ageRange: 'Class 1 – 7',
    description: 'After-school tuition support for primary students. Experienced teachers providing personalized attention and academic support across all subjects.',
    icon: '✏️',
    color: 'bg-indigo-100 text-indigo-700',
    features: ['All subjects', 'Experienced teachers', 'Homework help', 'Exam preparation', 'Individual attention'],
    duration: '1 – 2 hrs/day',
  },
]

// ─── Features / Why Choose Us ─────────────────────────────────────────────────

export const FEATURES: Feature[] = [
  { id: 'classrooms', title: 'Smart & Safe Classrooms', description: 'Technology-enabled classrooms with smart boards, projectors, and safe, child-friendly furniture designed for optimal learning.', icon: '🏫', color: 'navy' },
  { id: 'teachers', title: 'Trained & Certified Teachers', description: 'Our educators hold NTT, B.Ed, and early childhood certifications. Regular training keeps them updated with the latest methods.', icon: '👩‍🏫', color: 'emerald' },
  { id: 'playway', title: 'Playway Learning Method', description: 'Children learn best through play. Our curriculum integrates activities, games, and hands-on experiences for joyful learning.', icon: '🎮', color: 'gold' },
  { id: 'playground', title: 'Indoor & Outdoor Play Area', description: 'Dedicated indoor and outdoor play spaces with safe equipment, artificial turf, and age-appropriate toys for physical development.', icon: '🛝', color: 'navy' },
  { id: 'splash', title: 'Splash Pool & Art & Craft', description: 'Summer splash pool activities and a dedicated art & craft zone encourage creativity, sensory exploration, and self-expression.', icon: '🎨', color: 'emerald' },
  { id: 'hygiene', title: 'Hygienic & Child-Friendly', description: 'Impeccably clean premises with sanitization routines, hygienic food preparation, and child-safe materials throughout.', icon: '✨', color: 'gold' },
  { id: 'ratio', title: '1:10 Teacher–Student Ratio', description: 'Every child gets individual attention. Our low teacher-to-student ratio ensures personalized care and focused learning.', icon: '👥', color: 'navy' },
  { id: 'app', title: 'Daily Parent Communication App', description: 'Stay connected with real-time updates, photos, and daily reports on your child\'s activities and progress through our parent app.', icon: '📱', color: 'emerald' },
  { id: 'cctv', title: 'CCTV Surveillance', description: '24/7 CCTV coverage across all areas of the school ensuring maximum safety and security for every child in our care.', icon: '📹', color: 'gold' },
  { id: 'festivals', title: 'Festival Celebrations & Activities', description: 'Rich cultural calendar celebrating Deepavali, Ugadi, Independence Day, Christmas, and more. Children celebrate diversity and tradition.', icon: '🎉', color: 'navy' },
]

// ─── Stats ────────────────────────────────────────────────────────────────────

export const STATS = [
  { label: 'Happy Students', value: 500, suffix: '+', icon: '👶' },
  { label: 'Years of Excellence', value: 8, suffix: '+', icon: '🏆' },
  { label: 'Certified Teachers', value: 12, suffix: '+', icon: '👩‍🏫' },
  { label: 'Parent Satisfaction', value: 98, suffix: '%', icon: '❤️' },
] as const

// ─── Achievements ─────────────────────────────────────────────────────────────

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'award1', title: 'India\'s Most Promising Pre-School', description: 'Recognized as one of India\'s most promising pre-schools for excellence in early childhood education.', icon: '🏆', value: '2023' },
  { id: 'award2', title: 'Best NTT Training Center', description: 'Awarded for outstanding teacher training programs and curriculum quality.', icon: '🎓', value: '2022' },
  { id: 'award3', title: 'Community Excellence Award', description: 'Honored for exceptional contribution to early education in rural Karnataka.', icon: '⭐', value: '2023' },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    parentName: 'Rashmi Gowda',
    childName: 'Aryan',
    childClass: 'LKG',
    rating: 5,
    text: 'My son Aryan has blossomed at Shivam! The teachers are so caring and patient. He loves going to school every single day. The daily updates on the parent app are really reassuring.',
    avatarInitials: 'RG',
    avatarColor: 'bg-pink-100 text-pink-700',
  },
  {
    id: 't2',
    parentName: 'Suresh Kumar',
    childName: 'Priya',
    childClass: 'UKG',
    rating: 5,
    text: 'The facilities are excellent and the teachers are well-trained. Priya has developed so much confidence in just one year. The phonics program especially has made her a strong reader.',
    avatarInitials: 'SK',
    avatarColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 't3',
    parentName: 'Anitha Reddy',
    childName: 'Rohan',
    childClass: 'Nursery',
    rating: 5,
    text: 'The playway method is wonderful. Rohan learns through activities and comes home so excited to tell us what he learned. The 1:10 teacher ratio means every child gets personal attention.',
    avatarInitials: 'AR',
    avatarColor: 'bg-green-100 text-green-700',
  },
  {
    id: 't4',
    parentName: 'Kavitha Naik',
    childName: 'Shreya',
    childClass: 'Daycare',
    rating: 5,
    text: 'As working parents, we were worried about daycare. But Shivam has been a blessing. The CCTV, trained staff, and daily photos give us complete peace of mind. Highly recommended!',
    avatarInitials: 'KN',
    avatarColor: 'bg-purple-100 text-purple-700',
  },
]

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about#story' },
      { label: 'Vision & Mission', href: '/about#mission' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'Infrastructure', href: '/about#infrastructure' },
    ],
  },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'Day Care', href: '/programs/daycare' },
      { label: 'Play Group', href: '/programs/playgroup' },
      { label: 'Nursery', href: '/programs/nursery' },
      { label: 'LKG', href: '/programs/lkg' },
      { label: 'UKG', href: '/programs/ukg' },
      { label: 'Phonics', href: '/programs/phonics' },
      { label: 'NTT Course', href: '/programs/ntt' },
      { label: 'Tuitions', href: '/programs/tuitions' },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions',
    children: [
      { label: 'Apply Online', href: '/admissions/apply' },
      { label: 'Requirements', href: '/admissions#requirements' },
      { label: 'Fee Structure', href: '/admissions#fees' },
      { label: 'Book Appointment', href: '/appointments' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

// ─── Footer ───────────────────────────────────────────────────────────────────

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Programs',
    links: [
      { label: 'Day Care', href: '/programs/daycare' },
      { label: 'Play Group', href: '/programs/playgroup' },
      { label: 'Nursery', href: '/programs/nursery' },
      { label: 'LKG & UKG', href: '/programs/lkg' },
      { label: 'Phonics', href: '/programs/phonics' },
      { label: 'NTT Course', href: '/programs/ntt' },
      { label: 'Tuitions', href: '/programs/tuitions' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'About School', href: '/about' },
      { label: 'Admissions', href: '/admissions' },
      { label: 'Apply Online', href: '/admissions/apply' },
      { label: 'Book Appointment', href: '/appointments' },
      { label: 'Photo Gallery', href: '/gallery' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Information',
    links: [
      { label: 'Fee Structure', href: '/admissions#fees' },
      { label: 'School Timings', href: '/about#timings' },
      { label: 'Van Facilities', href: '/about#transport' },
      { label: 'Parent App', href: '/about#app' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  },
]

// ─── Admission Classes ────────────────────────────────────────────────────────

export const ADMISSION_CLASSES = [
  { value: 'daycare', label: 'Day Care (3 months – 3 years)' },
  { value: 'playgroup', label: 'Play Group (1.5 – 2.5 years)' },
  { value: 'nursery', label: 'Nursery (2.5 – 3.5 years)' },
  { value: 'lkg', label: 'LKG (3.5 – 4.5 years)' },
  { value: 'ukg', label: 'UKG (4.5 – 5.5 years)' },
  { value: 'phonics', label: 'Phonics Program' },
  { value: 'ntt', label: 'NTT Course' },
  { value: 'tuition', label: 'Tuitions (Class 1–7)' },
]

// ─── Appointment Time Slots ───────────────────────────────────────────────────

export const APPOINTMENT_TIMES = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM',
]

// ─── Appointment Purposes ─────────────────────────────────────────────────────

export const APPOINTMENT_PURPOSES = [
  { value: 'admission-inquiry', label: 'Admission Inquiry' },
  { value: 'school-visit', label: 'School Visit / Tour' },
  { value: 'fee-inquiry', label: 'Fee Inquiry' },
  { value: 'general', label: 'General Inquiry' },
]

// ─── Documents Required ───────────────────────────────────────────────────────

export const ADMISSION_DOCUMENTS = [
  { id: 'hasApplicationForm', label: 'Completed Application Form' },
  { id: 'hasBirthCertificate', label: 'Photocopy of Birth Certificate' },
  { id: 'hasChildPhotos', label: '4 Passport Size Photos of Child' },
  { id: 'hasProofOfResidence', label: 'Proof of Residence' },
  { id: 'hasParentPhotos', label: '1 Passport Size Photo of each Parent' },
]
