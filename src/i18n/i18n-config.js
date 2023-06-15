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
                'skills.ss11': 'Resolutiva',
                'skills.ss12': 'Autogestão',
                'skills.ss13': 'Adoraria compartilhar minhas experiências, vamos conversar?',
                'skills.ss14': 'CONTATO',
            },

            timeline: {
                'timel.ts1': 'Analista de Marketing ',
                'timel.ts2': 'no maior canal de TV do Brasil.',
                'timel.ts3': 'Pacote Office', 
                'timel.ts4': 'Inglês',
                'timel.ts5': 'Formatura em',
                'timel.ts6': 'Administração de Empresas',
                'timel.ts7': '- Universidade do Estado de Santa Catarina (UDESC/ ESAG), Florianópolis, Brasil.',
                'timel.ts8': 'Orçamento BZ',
                'timel.ts9': 'Mudança',
                'timel.ts10': 'para São Paulo.',
                'timel.ts11': 'Analista de Planejamento',
                'timel.ts12': 'Grupo RBS, São Paulo, Brasil.',
                'timel.ts13': 'Excel avançado',
                'timel.ts14': 'Pós-Graduada em Inteligência de Mercado',
                'timel.ts15': 'Fundação Instituto de Administração (FIA), São Paulo, Brasil.',
                'timel.ts16': 'Promovida à Coordenadora de Negócios',
                'timel.ts16a': 'no Grupo RBS.',
                'timel.ts17': 'Retorno para Santa Catarina.',
                'timel.ts18': 'Gestão de Pessoas',
                'timel.ts19': 'Avaliação de Desempenho',
                'timel.ts20': 'Casamento com',
                'timel.ts21': 'Promovida à Executiva de Contas',
                'timel.ts22': 'no maior canal de televisão do Brasil (TV Globo), filial Santa Catarina, Brasil.',
                'timel.ts23': 'Venda B2B',
                'timel.ts24': 'Pedi demissão e iniciei meu ',
                'timel.ts25': 'próprio negócio',
                'timel.ts26': ', Casa em Caixa, um e-commerce de produtos para organização da casa.',
                'timel.ts27': 'Venda B2C',
                'timel.ts28': 'Compras',
                'timel.ts29': 'Apoio na abertura de uma agência de publicidade, mantendo meu negócio.',
                'timel.ts30': 'Nascimento da minha filha',
                'timel.ts31': 'Plano de Negócios',
                'timel.ts32': 'Mergulhada na ',
                'timel.ts33': 'maternidade',
                'timel.ts34': 'e compartilhando em',
                'timel.ts35': 'Retomei o projeto Casa em Caixa, adicionei serviços e educação em organização.',
                'timel.ts36': 'Gestão de tempo',
                'timel.ts37': 'Nascimento do meu filho',
                'timel.ts38': 'Encerramento do Casa em Caixa.',
                'timel.ts39': 'Mergulhada na maternidade.',
                'timel.ts40': 'Início da pandemia. Foco no desenvolvimento dos meus filhos!',
                'timel.ts41': 'Mudança',
                'timel.ts42': 'para Valencia, ',
                'timel.ts43': 'Espanha',
                'timel.ts44': 'adaptação',
                'timel.ts45': ' da família à nova cultura.',
                'timel.ts46': 'Início ',
                'timel.ts47': 'Pós-Graduação em UX/UI e Desenvolvimento Front-End',
                'timel.ts48': ' (ESAT), Espanha.',
                'timel.ts49': 'Espanhol',
                'timel.ts50': 'Pós-Graduada em UX/UI e Desenvolvimento Front-End',
                'timel.ts51': ' (ESAT), Espanha',
                'timel.ts52': 'Estágio em Front-End',
                'timel.ts53': ' na startup AmFi.',
            },

            footer: {
                'Contact.s1': 'Contato',
                'Message.s2': 'Mensagem',
                'Send-msg.s3': 'Enviar',
                'Name.s4': 'Nome',
            },

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
                    profesional. Traigo mi experiencia como Administradora de Empresas hacia el desarrollo web\
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
                'skills.ss11': 'Resolutiva',
                'skills.ss12': 'Autogestión',
                'skills.ss13': 'Me encantaría compartir mis experiencias, ¿hablamos?',
                'skills.ss14': 'CONTACTO',
            },

            timeline: {
                'timel.ts1': 'Analista de Marketing ',
                'timel.ts2': 'en el mayor canal de TV de Brasil',
                'timel.ts3': 'Paquete Office', 
                'timel.ts4': 'Inglés',
                'timel.ts5': 'Graduación en ',
                'timel.ts6': 'Administración de Empresas',
                'timel.ts7': '- Universidade do Estado de Santa Catarina (UDESC/ ESAG), Florianópolis, Brasil',
                "timel.ts8": "Presupuesto de BC",
                'timel.ts9': 'Me trasladé ',
                'timel.ts10': 'a São Paulo',
                'timel.ts11': 'Analista de planificación',
                'timel.ts12': 'Grupo RBS, São Paulo, Brasil',
                'timel.ts13': 'Excel Avanzado',
                'timel.ts14': 'Postgrado en Inteligencia de Mercado',
                'timel.ts15': 'Fundação Instituto de Administração (FIA), São Paulo, Brasil',
                'timel.ts16': 'Promovida a Coordinadora de Negocios',
                'timel.ts16a': 'en el Grupo RBS',
                'timel.ts17': 'Regreso a Santa Catarina',
                'timel.ts18': 'Gestión de Personas',
                'timel.ts19': 'Evaluación del Desempeño',
                'timel.ts20': 'Matrimonio con',
                'timel.ts21': 'Promoción a Ejecutiva de Cuentas',
                'timel.ts22': 'en el mayor canal de TV de Brasil (TV Globo), sucursal de Santa Catarina, Brasil',
                'timel.ts23': 'Venta B2B',
                'timel.ts24': 'Renuncié y empecé mi ',
                'timel.ts25': 'negocio propio',
                'timel.ts26': ', Casa em Caixa, un comercio electrónico de productos de organización del hogar',
                'timel.ts27': 'Venta B2C',
                'timel.ts28': 'Compras',
                'timel.ts29': 'Apoyo en la apertura de una agencia de publicidad, manteniendo mi negocio',
                'timel.ts30': 'Nacimiento de mi hija',
                'timel.ts31': 'Plan de negocio',
                'timel.ts32': 'Inmersión en ',
                'timel.ts33': 'maternidad',
                'timel.ts34': 'y compartiendo en',
                'timel.ts35': 'Reanudado el proyecto Casa em Caixa, añadido servicios y educación en organizar.',
                'timel.ts36': 'Gestión del tiempo',
                'timel.ts37': 'Nacimiento de mi hijo',
                'timel.ts38': 'Cierre de Casa em Caixa',
                'timel.ts39': 'Sumergida en la maternidad',
                'timel.ts40': 'Comienzo de la pandemia. Centrada en el desarrollo de mis hijos',
                'timel.ts41': 'Mudanza',
                'timel.ts42': 'a Valencia, ',
                'timel.ts43': 'España',
                'timel.ts44': 'adaptación',
                'timel.ts45': 'de la familia a la nueva cultura',
                'timel.ts46': 'Inicio',
                'timel.ts47': 'Postgrado en UX/UI y Desarrollo Front-End',
                'timel.ts48': ' (ESAT), España',
                'timel.ts49': 'Español',
                'timel.ts50': 'Postgrado en UX/UI y Desarrollo Front-End',
                'timel.ts51': ' (ESAT), España',
                'timel.ts52': 'Prácticas en Front-End',
                'timel.ts53': ' en la startup AmFi',
            },

            footer: {
                'Contact.s1': 'Contacto',
                'Message.s2': 'Mensaje',
                'Send-msg.s3': 'Enviar',
                'Name.s4': 'Nombre',
            },
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
                's2': 'Brazilian, living in Spain and going on an exciting career transition journey.\
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
                'skills.ss11': 'Resolutive',
                'skills.ss12': 'Self-management',
                'skills.ss13': "I'd love to share my experiences, shall we talk?",
                'skills.ss14': 'CONTACT',
            },

            timeline: {
                'timel.ts1': 'Marketing Analyst ',
                'timel.ts2': 'on the biggest TV channel in Brazil',
                'timel.ts3': 'Office Package', 
                'timel.ts4': 'English',
                'timel.ts5': 'Graduation in',
                'timel.ts6': 'Business Administration',
                'timel.ts7': '- Universidade do Estado de Santa Catarina (UDESC/ ESAG), Florianópolis, Brazil',
                'timel.ts8': 'ZB Budget',
                'timel.ts9': 'Change',
                'timel.ts10': 'to São Paulo',
                'timel.ts11': 'Planning Analyst',
                'timel.ts12': 'Grupo RBS, São Paulo, Brazil',
                'timel.ts13': 'Advanced Excel',
                'timel.ts14': 'Postgraduate in Market Intelligence',
                'timel.ts15': 'Fundação Instituto de Administração (FIA), São Paulo, Brazil',
                'timel.ts16': 'Promoted to Business Coordinator',
                'timel.ts16a': 'at Grupo RBS',
                'timel.ts17': 'Returned to Santa Catarina.', 'timel.ts18': 'Promoted to Business Coordinator',
                'timel.ts18': 'People Management',
                'timel.ts19': 'Performance Evaluation',
                'timel.ts20': 'Marriage with',
                'timel.ts21': 'Promoted to Account Executive',
                'timel.ts22': 'at the biggest TV channel in Brazil (TV Globo), Santa Catarina branch, Brazil',
                'timel.ts23': 'B2B Sale',
                'timel.ts24': 'I resigned and started my ',
                'timel.ts25': 'own business',
                'timel.ts26': ', Casa em Caixa, an e-commerce of home organization products',
                'timel.ts27': 'B2C Sale',
                'timel.ts28': 'Purchase',
                'timel.ts29': 'Support in opening an advertising agency, keeping my business going',
                'timel.ts30': 'Birth of my daughter',
                'timel.ts31': 'Business plan',
                'timel.ts32': 'Diving into ',
                'timel.ts33': 'motherhood',
                'timel.ts34': 'and sharing in',
                'timel.ts35': 'Resumed the Casa em Caixa project, added services and education in organizing.',
                'timel.ts36': 'Time management',
                'timel.ts37': 'Birth of my son',
                'timel.ts38': 'Closing of the Boxed House',
                'timel.ts39': 'Plunged into motherhood.',
                'timel.ts40': "Start of the pandemic. Focus on my children's development!",
                'timel.ts41': 'Change',
                'timel.ts42': 'to Valencia, ',
                'timel.ts43': 'Spain',
                'timel.ts44': 'adaptation',
                'timel.ts45': 'from family to new culture',
                'timel.ts46': 'Beginning ',
                'timel.ts47': 'Graduate degree in UX/UI and Front-End Development',
                'timel.ts48': ' (ESAT), Spain',
                'timel.ts49': 'Spanish',
                'timel.ts50': 'Postgraduate in UX/UI and Front-End Development',
                'timel.ts51': ' (ESAT), Spain',
                'timel.ts52': 'Internship in Front-End',
                'timel.ts53': ' at AmFi startup',
                
            },

            footer: {
                'Contact.s1': 'Contact',
                'Message.s2': 'Message',
                'Send-msg.s3': 'Send',
                'Name.s4': 'Name',
            },
        },
    },

}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false
    }
  })

export default i18n;
