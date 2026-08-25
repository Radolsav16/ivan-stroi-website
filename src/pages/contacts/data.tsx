
import {
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

export const contactInfo = [
  {
    title: 'Телефон',
    value: '+359 000 000 000',
    description: 'Понеделник – Петък, 08:00 – 18:00',
    href: 'tel:+359000000000',
    icon: PhoneIcon,
  },
  {
    title: 'Email',
    value: 'office@ivan-stroi.bg',
    description: 'Отговаряме в рамките на работния ден',
    href: 'mailto:office@ivan-stroi.bg',
    icon: EnvelopeIcon,
  },
];

export const workingHours = [
  ['Понеделник – Петък', '08:00 – 18:00'],
  ['Събота', '09:00 – 14:00'],
  ['Неделя', 'Почивен ден'],
];