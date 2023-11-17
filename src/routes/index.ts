import { lazy } from 'react';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const FileManager = lazy(() => import('../pages/FileManager'));
//const Tables = lazy(() => import('../pages/Tables'));
const ListSalles = lazy(() => import('../pages/Salles/ListSalles'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));
const Sessions = lazy(() => import('../pages/Sessions'));
const CreateSession = lazy(() => import('../pages/Sessions/CreateSession'));
const EditSession = lazy(() => import('../pages/Sessions/EditSession'));
const FicheSession = lazy(() => import('../pages/Sessions/FicheSession'));
const ListUsers = lazy(() => import('../pages/Users/ListUsers'));
const CreateUsers = lazy(() => import('../pages/Users/CreateUsers'));
const EditUsers = lazy(() => import('../pages/Users/EditUsers'));
const FicheUsers = lazy(() => import('../pages/Users/FicheUsers'));
const CreateUserAccess = lazy(() => import('../pages/Users/CreateUserAccess'));
const EditUserAccess = lazy(() => import('../pages/Users/EditUserAccess'));
const FicheUserAccess = lazy(() => import('../pages/Users/FicheUserAccess'));
const ListUserAccess = lazy(() => import('../pages/Users/ListUserAccess'));
const ListCompagnies = lazy(() => import('../pages/Users/ListCompagnies'));
const CreateCompany = lazy(() => import('../pages/Users/CreateCompany'));
const EditCompany = lazy(() => import('../pages/Users/EditCompany'));
const ListCourses = lazy(() => import('../pages/Courses/ListCourses'));
const CreateCourse = lazy(() => import('../pages/Courses/CreateCourse'));
const EditCourse = lazy(() => import('../pages/Courses/EditCourse'));
const FicheCourse = lazy(() => import('../pages/Courses/FicheCourse'));
const ListRooms = lazy(() => import('../pages/Rooms/ListRooms'));
const CreateRoom = lazy(() => import('../pages/Rooms/CreateRoom'));
const ReactTable = lazy(() => import('../pages/ReactTable'));

const coreRoutes = [
  {
    path: '/courses',
    title: 'Formations',
    component: ListCourses,
  },
  {
    path: '/courses/create',
    title: 'Nouvelle formation',
    component: CreateCourse,
  },  
  {
    path: '/courses/edit/:id',
    title: 'Editer un programme de formation',
    component: EditCourse,
  }, 
  {
    path: '/courses/fiche/:id',
    title: 'Fiche programme de formation',
    component: FicheCourse,
  }, 
  {
    path: '/rooms',
    title: 'Salles',
    component: ListRooms,
  },
  {
    path: '/rooms/create',
    title: 'Nouvelle salle de formation',
    component: CreateRoom,
  }, 
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/salles',
    title: 'Salles',
    component: ListSalles,
  },
  {
    path: '/users',
    title: 'Users',
    component: ListUsers,
  },
  {
    path: '/users/create',
    title: 'Users',
    component: CreateUsers,
  },
  {
    path: '/users/edit/:id',
    title: 'Editer Users',
    component: EditUsers,
  },
  {
    path: '/users/fiche/:id',
    title: 'Fiche utilisateur',
    component: FicheUsers,
  },
  {
    path: '/useraccess',
    title: 'UsersAccess',
    component: ListUserAccess,
  },
  {
    path: '/useraccess/create',
    title: 'UsersAccess',
    component: CreateUserAccess,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
  {
    path: '/sessions',
    title: 'Sessions',
    component: Sessions
  },
  {
    path: '/sessions/create',
    title: 'Nouvelle session',
    component: CreateSession,
  },
  {
    path: '/sessions/edit/:id',
    title: 'Editer une session',
    component: EditSession,
  },
  {
    path: '/sessions/fiche/:id',
    title: 'Fiche session de formation',
    component: FicheSession,
  },
  {
    path: '/compagnies',
    title: 'Compagnies',
    component: ListCompagnies
  },
  {
    path: '/compagnies/create',
    title: 'Création entreprise',
    component: CreateCompany
  },
  {
    path: '/compagnies/edit/:id',
    title: 'Modifier une entreprise',
    component: EditCompany
  },  
  {
    path: '/react-table',
    title: 'Table avec filtre',
    component: ReactTable
  },  
  {
    path: '/filemanager',
    title: 'Gestionnaire de fichiers',
    component: FileManager
  },  

];

const routes = [...coreRoutes];
export default routes;
