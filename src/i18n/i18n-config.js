import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {

  pt: {
        translation: {
            menu: { 
                'home': 'Início',
                'about': 'Sobre Mim',
                'skills': 'Habilidades',
                'projects': 'Projetos',
                'contact': 'Contato',
            },

            cover: {
                's1': 'EU SOU JULIANA',
                's2': 'Brasileira, vivendo na Espanha e embarcando em uma empolgante \
                    jornada de transição de carreira. Levo minha bagagem como Administradora de Empresas\
                    rumo ao desenvolvimento web Front-End e focada em projetos cheios de propósito.',
                's3': 'Me conheça',
            },

            about: {
                'text': 'Sou brasileira e atualmente vivo em Valencia, Espanha. Sou casada com João,\
                    meu parceiro de vida e mãe da Maria Antônia e do Romeo, que me ensinam diariamente sobre amor.\
                    Adoro jogar beach tennis, compartilhar conhecimento e contribuir para que todos tenham \
                    oportunidades semelhantes. Também me interesso muito por alimentação saudável, consumo\
                    consciente e julgo disciplina positiva uma ferramenta útil para toda a sociedade!\
                    Tenho alguns anos de experiência em publicidade, entretanto, com o nascimento dos meus\
                    filhos, escolhi me dedicar exclusivamente à eles, mesmo sabendo que o desafio do retorno \
                    seria enorme. Chegou a hora! Estou segura e animada para equilibrar esses interesses e \
                    retomar minha carreira profissional!',
                'firstw': 'Sobre',
                'secondw': 'mim',
            },

            projects: {
                'pfirstw': 'Meus',
                'psecondw': 'Projetos',
                'ps1': 'Calculadora',
                'ps2': 'Calculadora para executar operações básicas de matemática. Este projeto foi baseado\
                    na calculadora do sistema iOS.',
                'ps3': 'SAIBA MAIS',
                'ps4': 'Calculadora IMC',
                'ps5': 'Calculadora para identificar o Índice de Massa Corpórea (IMC), um dos fatores\
                    usados por profissionais da saúde para identificar sobrepeso.',
                'ps6': 'DETALHES',
                'ps7': 'Lista de Tarefas',
                'ps8': 'Sistema para controle de produtividade, inclusão de tarefas, alteração de status e prazos.',
                'ps9': "Página de 'About me'",
                'ps10': 'Meu primeiro projeto, feito com HTML5, CSS e JS. Ainda há muitos aprimoramentos a serem \
                    feitos, tanto no código quanto no design, mas estou orgulhosa de cada degrau dessa escada evolutiva!',
            },

            skills: {
                'skills.ss1': 'Adaptação',
                'skills.ss2': 'Já vivi em 6 cidades, 4 estados e 2 países diferentes!',
                'skills.ss3': 'Organização',
                'skills.ss4': 'Ministrei cursos focados em organização, otimização da rotina e, \
                por consequência, da qualidade de vida.',
                'skills.ss5': 'Comprometimento & Orientação à negócio',
                'skills.ss6': '“Juliana é uma excelente profissional: Excelente motivação e energia, senso \
                    de negócios com fortes habilidades de gestão. Grande iniciativa e condução. \
                    Eu a recomendo para todos os projetos, especialmente aqueles em que a \
                    dedicação é a chave.”',
                'skills.ss7': 'Entusiasmo',
                'skills.ss8': 'Responsabilidade',
                'skills.ss9': 'Trabalho em equipe',
                'skills.ss10': 'Falar em público',
                'skills.ss11': 'Foco em solução',
                'skills.ss12': 'Autogestão',
                'skills.ss13': 'Adoraria compartilhar minhas experiências, vamos conversar?',
                'skills.ss14': 'CONTATO',
            }

        },
    },

    es: {
        translation: {
            menu: { 
                'home': 'Inicio',
                'about': 'Sobre mí',
                'skills': 'Habilidades',
                'projects': 'Proyectos',
                'contact': 'Contacto',
            },

            cover: {
                's1': 'YO SOY JULIANA',
                's2': 'Brasileña, residente en España y embarcada en un emocionante viaje de transición\
                    profesional. Traigo mi experiencia como Administrador de Empresas hacia el desarrollo web\
                    Front-End y centrado en proyectos llenos de propósito.',
                's3': 'CONÓCEME',
            },
    
            about: {
                'text': 'Soy brasileña y actualmente vivo en Valencia, España. Soy casada con João, mi\
                    compañero de vida y mamá de Maria Antônia y Romeo, que me enseñan a diario sobre el amor.\
                    Me encanta jugar al tenis playa, compartir conocimientos y contribuir para que todos tengan\
                    oportunidades similares. También me interesa mucho la alimentación sana, el consumo consciente\
                    y creo que la disciplina positiva es una herramienta útil para toda la sociedad. Tengo algunos\
                    años de experiencia en publicidad, sin embargo, con el nacimiento de mis hijos, opté por\
                    dedicarme exclusivamente a ellos, aún sabiendo que el reto del regreso sería enorme.\
                    ¡Ha llegado el momento! ¡Estoy segura e ilusionada de poder compaginar estos intereses\
                    y retomar mi carrera profesional!',
                'firstw': 'Sobre',
                'secondw': 'mí',
            },

            projects: {
                'pfirstw': 'Mis',
                'psecondw': 'Proyectos',
                'ps1': 'Calculadora',
                'ps2': 'Calculadora para realizar operaciones matemáticas básicas. Este proyecto se basó en\
                    la calculadora del sistema iOS.',                 
                'ps3': 'SAIBA MAIS',
                'ps4': 'Calculadora IMC',
                'ps5': 'Calculadora para identificar el Índice de Masa Corporal (IMC), uno de los factores\
                    utilizados por los profesionales sanitarios para identificar el sobrepeso.',                
                'ps6': 'DETALLES',
                'ps7': 'Lista de Tareas',
                'ps8': 'istema de control de productividad, inclusión de tareas, cambio de estado y plazos.',
                'ps9': "Página de 'About me'",
                'ps10': 'Mi primer proyecto, hecho con HTML5, CSS y JS. Se pueden hacer muchas mejoras,\
                    tanto en código como en diseño, ¡pero estoy orgullosa de cada paso en esta escala de evolución!',
            },

            skills: {
                'skills.ss1': 'Adaptación',
                'skills.ss2': 'He vivido en 6 ciudades diferentes, 4 estados y 2 países',
                'skills.ss3': 'Organización',
                'skills.ss4':'He impartido cursos centrados en la organización, la optimización de la rutina y\
                    y consecuentemente de la calidad de vida',
                'skills.ss5': 'Compromiso y orientación empresarial',
                'skills.ss6': '"Juliana es una excelente profesional: Excelente motivación y energía, sentido de \
                    los negocios con fuertes habilidades de gestión.\
                    sentido de los negocios con fuertes habilidades de gestión. Gran iniciativa y empuje. \
                    La recomiendo para todos los proyectos, especialmente aquellos en los que \
                    dedicación es clave."',
                'skills.ss7': 'Entusiasmo',
                'skills.ss8': 'Responsabilidad',
                'skills.ss9': 'Trabajo en equipo',
                'skills.ss10': 'Hablar en público',
                'skills.ss11': 'Concentración en las soluciones',
                'skills.ss12': 'Autogestión',
                'skills.ss13': 'Me encantaría compartir mis experiencias, ¿hablamos?',
                'skills.ss14': 'CONTACTO',
            }
        },
    },    

    en: {
        translation: {
            menu: { 
                'home': 'Home',
                'about': 'About',
                'skills': 'Skills',
                'projects': 'Projects',
                'contact': 'Contact',
            },

            cover: {
                's1': 'I AM JULIANA',
                's2': 'Brazilian, living in Spain and embarking on an exciting career transition journey.\
                    I bring my background as a Business Administrator towards Front-End web development\
                    and focus on purposeful projects',
                's3': 'KNOW ME',
                },
    
            about: {
                'text': 'I am Brazilian and currently living in Valencia, Spain. I am married to João,\
                    my life partner, and mom of Maria Antônia and Romeo, who teach me daily about love.\
                    I love playing beach tennis, sharing knowledge and contributing so that everyone\
                    has similar opportunities. I am also very interested in healthy eating, conscious\
                    consumption, and consider positive discipline a useful tool for society as a whole!\
                    I have some years of experience in advertising; however, with the birth of my children,\
                    I chose to dedicate myself exclusively to them, even knowing that the challenge of the\
                    return would be enormous. The time has come! I am confident and excited to balance these \
                    interests and resume my professional career!',
                'firstw': 'About',
                'secondw': 'me',
            },

            projects: {
                'pfirstw': 'My',
                'psecondw': 'Projects',
                'ps1': 'Calculator',
                'ps2': 'Calculator to perform basic math operations. This project was based on the calculator in the iOS system.',
                'ps3': 'LEARN MORE',
                'ps4': 'BMI Calculator',
                'ps5': 'Calculator to identify Body Mass Index (BMI), one of the factors used by health\
                    professionals to identify overweight.',
                'ps6': 'DETAILS',
                'ps7': 'To Do List',
                'ps8': 'System for productivity control, adding tasks, changing status and deadlines.',
                'ps9': "'About me' page",
                'ps10': "My first project, made with HTML5, CSS and JS. Lots of improvements can be made,\
                    both in code and design, but I'm proud of every step on this evolutionary ladder!",
            },

            skills: {
                'skills.ss1': 'Adaptation',
                'skills.ss2': "I've lived in 6 different cities, 4 states and 2 countries!",
                'skills.ss3': 'Organization',
                'skills.ss4': 'I teach courses focused on organization, routine optimization and\
                    and consequently of the quality of life',
                'skills.ss5': 'Commitment & Business Orientation',
                'skills.ss6': '"Juliana is an excellent professional: Excellent motivation and energy, business sense\
                    business sense with strong management skills. Great initiative and drive. \
                    I recommend her for all projects, especially those where \
                    dedication is key."',
                'skills.ss7': 'Enthusiasm',
                'skills.ss8': 'Responsibility',
                'skills.ss9': 'Teamwork',
                'skills.ss10': 'Public speaking',
                'skills.ss11': 'Solution focus',
                'skills.ss12': 'Self-management',
                'skills.ss13': "I'd love to share my experiences, shall we talk?",
                'skills.ss14': 'CONTACT',
            }
        },
    },
},

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;