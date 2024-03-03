import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/photo1.jpg';
import Work2 from './assets/photo.jpg';
import Work3 from './assets/photo3.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Mehriniso',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Jurayeva',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '16 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Uzbek',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Uzbekistan',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+998957073216',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'jurayevamehriniso1@mail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: '',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Russian, English, Uzbek',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: `Years of <br /> Experience`,
  },

  {
    id: 2,
    no: '2+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '5+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '2+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title: 'Junior Degree <span> Record IT Academy </span>',
    desc: 'Successfully completed Course',
  },

  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Beginner Degree <span> TenX IT Academy </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title: 'Starting Degree <span> Secondary School </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '85',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '70',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '80',
  },

  {
    id: 4,
    title: 'React',
    percentage: '65',
  },

  {
    id: 5,
    title: 'Bootstrap',
    percentage: '80',
  },

  {
    id: 6,
    title: 'Tailwind',
    percentage: '60',
  },

  {
    id: 7,
    title: 'Typescript',
    percentage: '40',
  },

  {
    id: 8,
    title: 'SCSS',
    percentage: '85',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'To Do',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title:'Preview: ',
        desc: <a href="https://coruscating-otter-e2a27e.netlify.app/" style={{color:"white"}}>Click for preview</a>,
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Ecommerce',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Redux',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://fabulous-narwhal-1eec85.netlify.app/" style={{color:"white"}}>Click for preview</a>,
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Weather app',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href="https://phenomenal-piroshki-fca053.netlify.app/" style={{color:"white"}}>Click for preview</a>,
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
