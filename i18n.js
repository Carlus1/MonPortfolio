// ===== CarlusOne i18n System =====
const translations = {
  fr: {
    'meta.title': 'CarlusOne \u2014 Applications Web Professionnelles | GestTaches, GestBudget & Jeu de Mots',
    'meta.description': 'D\u00e9couvrez les applications web CarlusOne : GestTaches pour la gestion des t\u00e2ches d\u2019\u00e9quipe, GestBudget pour la gestion de budget personnel et Jeu de Mots pour l\u2019apprentissage interactif. Essai gratuit disponible.',

    // Nav
    'nav.apps': 'Applications',
    'nav.pricing': 'Tarifs',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge': '\uD83D\uDE80 Applications web modernes',
    'hero.title': 'Des outils <span class="gradient-text">puissants</span> pour votre quotidien',
    'hero.subtitle': 'Gestion de t\u00e2ches d\u2019\u00e9quipe et apprentissage interactif \u2014 con\u00e7us pour \u00eatre simples, efficaces et accessibles.',
    'hero.cta': 'D\u00e9couvrir nos applications',
    'hero.ctaPricing': 'Voir les tarifs',
    'hero.statApps': 'Applications',
    'hero.statFree': 'Gratuit',
    'hero.statFreeLabel': 'Essai disponible',
    'hero.stat247Label': 'Accessible partout',

    // Apps section
    'apps.badge': 'Nos applications',
    'apps.title': 'Des solutions adapt\u00e9es \u00e0 vos besoins',
    'apps.subtitle': 'Chaque application est con\u00e7ue avec soin pour offrir une exp\u00e9rience utilisateur exceptionnelle.',

    // GestTaches
    'gt.badge': 'Gestion d\u2019\u00e9quipe',
    'gt.desc': 'Application de <strong>gestion des t\u00e2ches d\u2019\u00e9quipe</strong> adapt\u00e9e \u00e0 tout type d\u2019organisation : cliniques, entreprises, associations et plus encore.',
    'gt.howTitle': 'Comment \u00e7a fonctionne ?',
    'gt.step1': '<strong>Cr\u00e9ez vos groupes</strong> et ajoutez vos membres d\u2019\u00e9quipe avec des r\u00f4les (propri\u00e9taire, administrateur, membre).',
    'gt.step2': '<strong>D\u00e9finissez vos t\u00e2ches</strong> \u2014 ponctuelles ou r\u00e9currentes (hebdomadaires, mensuelles, etc.) \u2014 et assignez-les \u00e0 vos groupes.',
    'gt.step3': '<strong>Les membres d\u00e9clarent leurs indisponibilit\u00e9s</strong> directement dans le calendrier.',
    'gt.step4': '<strong>Lancez la proposition automatique :</strong> l\u2019algorithme d\u2019optimisation g\u00e9n\u00e8re un calendrier \u00e9quilibr\u00e9 en r\u00e9partissant les t\u00e2ches \u00e9quitablement, en respectant les priorit\u00e9s et les disponibilit\u00e9s de chacun.',
    'gt.step5': '<strong>Validez et publiez</strong> \u2014 chaque membre voit ses t\u00e2ches assign\u00e9es dans son calendrier personnel.',
    'gt.rolesTitle': 'Deux r\u00f4les au choix lors de l\u2019inscription',
    'gt.rolesIntro': 'Lors de votre inscription, choisissez le r\u00f4le qui correspond \u00e0 votre usage :',
    'gt.roleAdminTitle': 'Administrateur',
    'gt.roleAdminDesc': 'Cr\u00e9ez et g\u00e9rez des <strong>groupes</strong>, d\u00e9finissez les <strong>t\u00e2ches</strong>, ajoutez des membres, lancez les <strong>propositions automatiques</strong> et acc\u00e9dez aux <strong>rapports</strong>. Id\u00e9al pour les responsables d\u2019\u00e9quipe.',
    'gt.roleUserTitle': 'Utilisateur',
    'gt.roleUserDesc': 'Rejoignez un <strong>groupe existant</strong>, consultez vos <strong>t\u00e2ches assign\u00e9es</strong> dans votre calendrier personnel et d\u00e9clarez vos <strong>indisponibilit\u00e9s</strong>. Id\u00e9al pour les membres d\u2019\u00e9quipe.',
    'gt.rolesNote': '\uD83D\uDCA1 Le r\u00f4le choisi est conserv\u00e9 apr\u00e8s l\u2019essai gratuit. Chaque utilisateur dispose de son propre abonnement.',
    'gt.feat1': 'Algorithme d\u2019optimisation avec r\u00e9partition \u00e9quitable',
    'gt.feat2': 'T\u00e2ches r\u00e9currentes et t\u00e2ches parentes',
    'gt.feat3': 'Gestion des groupes, r\u00f4les et disponibilit\u00e9s',
    'gt.feat4': 'Calendrier interactif, impression et p\u00e9riodes verrouill\u00e9es',
    'gt.feat5': 'Rapports, statistiques et notifications',
    'gt.cta': 'Essayer gratuitement',
    'gt.trial': '14 jours d\u2019essai gratuit \u2014 sans carte bancaire',

    // GestBudget
    'gb.badge': 'Finances personnelles',
    'gb.desc': 'Application de <strong>gestion de budget personnel</strong> compl\u00e8te : suivez vos <strong>revenus</strong>, vos <strong>d\u00e9penses</strong> et g\u00e9rez vos <strong>comptes</strong> en toute simplicit\u00e9.',
    'gb.howTitle': 'Comment \u00e7a fonctionne ?',
    'gb.step1': '<strong>Cr\u00e9ez vos comptes</strong> (bancaire, \u00e9pargne, esp\u00e8ces, carte de cr\u00e9dit, etc.) pour organiser vos finances.',
    'gb.step2': '<strong>Ajoutez vos transactions</strong> \u2014 revenus et d\u00e9penses \u2014 en choisissant une cat\u00e9gorie et un compte.',
    'gb.step3': '<strong>Consultez le tableau de bord</strong> pour visualiser vos d\u00e9penses par cat\u00e9gorie et suivre l\u2019\u00e9volution de votre budget.',
    'gb.step4': '<strong>Personnalisez vos cat\u00e9gories</strong> et types de comptes dans les r\u00e9glages pour adapter l\u2019application \u00e0 vos besoins.',
    'gb.feat1': 'Tableau de bord avec graphiques interactifs',
    'gb.feat2': 'Cat\u00e9gories de d\u00e9penses et revenus personnalisables',
    'gb.feat3': 'Gestion multi-comptes (banque, \u00e9pargne, esp\u00e8ces, etc.)',
    'gb.feat4': 'Suivi en temps r\u00e9el de vos finances',
    'gb.feat5': 'Multi-langues (FR, EN, ES)',
    'gb.cta': 'Essayer gratuitement',
    'gb.trial': '2 jours d\u2019essai gratuit \u2014 sans carte bancaire',

    // Jeu de Mots
    'jm.badge': '\u00c9ducation',
    'jm.desc': 'Application \u00e9ducative interactive pour <strong>apprendre en jouant</strong>. Id\u00e9ale pour les enfants et les \u00e9tudiants qui souhaitent am\u00e9liorer leur <strong>vocabulaire</strong> et leurs <strong>comp\u00e9tences en math\u00e9matiques</strong>.',
    'jm.howTitle': 'Comment \u00e7a fonctionne ?',
    'jm.howStep1': '<strong>1. Ajoutez vos \u00e9tudiants</strong> dans le menu <em>Pr\u00e9f\u00e9rences</em>. Chaque \u00e9tudiant aura sa propre liste de mots.',
    'jm.howStep2': '<strong>2. S\u00e9lectionnez un \u00e9tudiant</strong> puis chargez un fichier <strong>.txt</strong>. Le fichier est automatiquement sauvegard\u00e9 pour cet \u00e9tudiant.',
    'jm.howStep3': '<strong>3. C\u2019est tout !</strong> La prochaine fois, les mots se chargent automatiquement quand vous s\u00e9lectionnez l\u2019\u00e9tudiant. Deux formats :',
    'jm.fileLabel1': '\uD83D\uDCDD Vocabulaire fran\u00e7ais',
    'jm.fileDesc1': 'Un mot par ligne',
    'jm.fileLabel2': '\uD83C\uDDEC\uD83C\uDDE7 Anglais \u2194 Fran\u00e7ais',
    'jm.fileDesc2': 'Mot anglais<strong>;</strong>traduction fran\u00e7aise',
    'jm.howNote': 'Les listes sont sauvegard\u00e9es dans le cloud \u2014 accessibles depuis n\u2019importe quel appareil. Les flashcards d\u00e9filent automatiquement avec une vitesse r\u00e9glable.',
    'jm.feat1': 'Flashcards de vocabulaire personnalisables',
    'jm.feat2': 'Quiz de math\u00e9matiques : addition, soustraction, multiplication',
    'jm.feat3': 'Feuilles de calcul imprimables (addition, soustraction, multiplication et division)',
    'jm.feat4': 'Gestion des \u00e9tudiants et listes sauvegard\u00e9es dans le cloud',
    'jm.cta': 'Essayer gratuitement',
    'jm.trial': '2 jours d\u2019essai gratuit \u2014 sans carte bancaire',

    // Pricing
    'pricing.badge': 'Tarifs',
    'pricing.title': 'Des prix simples et transparents',
    'pricing.subtitle': 'Essayez gratuitement, puis choisissez le plan qui vous convient. Annulable \u00e0 tout moment.',
    'pricing.gtTagline': 'Gestion de t\u00e2ches d\u2019\u00e9quipe',
    'pricing.period': '/ mois',
    'pricing.gtTrial': '14 jours d\u2019essai gratuit',
    'pricing.gtFeat1': 'Calendrier interactif',
    'pricing.gtFeat2': 'Propositions automatiques',
    'pricing.gtFeat3': 'Gestion des groupes',
    'pricing.gtFeat4': 'Rapports et statistiques',
    'pricing.gtFeat5': 'Sans carte bancaire pour l\u2019essai',
    'pricing.gtCta': 'Commencer l\u2019essai gratuit',
    'pricing.popular': 'Populaire',
    'pricing.jmTagline': 'Apprentissage interactif',
    'pricing.jmTrial': '2 jours d\u2019essai gratuit',
    'pricing.jmFeat1': 'Flashcards de vocabulaire',
    'pricing.jmFeat2': 'Quiz math\u00e9matiques interactifs',
    'pricing.jmFeat3': 'Feuilles de calcul imprimables (addition, soustraction, multiplication et division)',
    'pricing.jmFeat4': 'Listes sauvegard\u00e9es dans le cloud',
    'pricing.jmFeat5': 'Multi-langues (FR, EN, ES)',
    'pricing.jmCta': 'Commencer l\u2019essai gratuit',
    'pricing.gbTagline': 'Gestion de budget personnel',
    'pricing.gbTrial': '2 jours d\u2019essai gratuit',
    'pricing.gbFeat1': 'Tableau de bord interactif',
    'pricing.gbFeat2': 'Cat\u00e9gories personnalisables',
    'pricing.gbFeat3': 'Gestion multi-comptes',
    'pricing.gbFeat4': 'Suivi des revenus et d\u00e9penses',
    'pricing.gbFeat5': 'Multi-langues (FR, EN, ES)',
    'pricing.gbCta': 'Commencer l\u2019essai gratuit',

    // FAQ
    'faq.title': 'Questions fr\u00e9quentes',
    'faq.q1': 'Comment fonctionne l\u2019essai gratuit ?',
    'faq.a1': 'Cr\u00e9ez simplement un compte et commencez \u00e0 utiliser l\u2019application imm\u00e9diatement. Aucune carte bancaire n\u2019est requise. \u00c0 la fin de la p\u00e9riode d\u2019essai, vous pourrez choisir de vous abonner pour continuer.',
    'faq.q2': 'Puis-je annuler \u00e0 tout moment ?',
    'faq.a2': 'Oui, absolument. Vous pouvez annuler votre abonnement \u00e0 tout moment depuis votre espace de gestion. Il n\u2019y a aucun engagement ni frais cach\u00e9s.',
    'faq.q3': 'Quels moyens de paiement acceptez-vous ?',
    'faq.a3': 'Nous utilisons Stripe, une plateforme de paiement s\u00e9curis\u00e9e. Vous pouvez payer par carte de cr\u00e9dit ou de d\u00e9bit (Visa, Mastercard, American Express).',
    'faq.q4': 'Mes donn\u00e9es sont-elles en s\u00e9curit\u00e9 ?',
    'faq.a4': 'Absolument. Nous utilisons des technologies de pointe (Firebase, Supabase) avec chiffrement des donn\u00e9es, authentification s\u00e9curis\u00e9e et conformit\u00e9 aux normes de protection des donn\u00e9es.',
    'faq.q5': 'Les applications fonctionnent-elles sur mobile ?',
    'faq.a5': 'Oui, nos applications sont enti\u00e8rement responsives et fonctionnent sur tous les appareils : ordinateurs, tablettes et t\u00e9l\u00e9phones mobiles. Vous pouvez m\u00eame les installer comme application sur votre t\u00e9l\u00e9phone.',
    'faq.q8': 'Comment installer GestTaches comme application sur mon t\u00e9l\u00e9phone ?',
    'faq.a8': 'GestTaches est une <strong>Progressive Web App (PWA)</strong>, ce qui signifie que vous pouvez l\u2019installer directement depuis votre navigateur, sans passer par un store.<br><br><strong>Sur iPhone / iPad (Safari) :</strong><br>1. Ouvrez GestTaches dans Safari.<br>2. Appuyez sur le bouton <strong>Partager</strong> (ic\u00f4ne carr\u00e9 avec fl\u00e8che vers le haut).<br>3. Faites d\u00e9filer et appuyez sur <strong>\u00ab Sur l\u2019\u00e9cran d\u2019accueil \u00bb</strong>.<br>4. Confirmez en appuyant sur <strong>\u00ab Ajouter \u00bb</strong>.<br><br><strong>Sur Android (Chrome) :</strong><br>1. Ouvrez GestTaches dans Chrome.<br>2. Appuyez sur le menu <strong>\u22ee</strong> (trois points en haut \u00e0 droite).<br>3. Appuyez sur <strong>\u00ab Installer l\u2019application \u00bb</strong> ou <strong>\u00ab Ajouter \u00e0 l\u2019\u00e9cran d\u2019accueil \u00bb</strong>.<br>4. Confirmez l\u2019installation.<br><br>L\u2019application appara\u00eetra sur votre \u00e9cran d\u2019accueil comme une application native, avec son ic\u00f4ne et un fonctionnement en plein \u00e9cran.',
    'faq.q7': 'Quelle est la diff\u00e9rence entre Administrateur et Utilisateur dans GestTaches ?',
    'faq.a7': 'L\u2019<strong>Administrateur</strong> peut cr\u00e9er et g\u00e9rer des groupes, d\u00e9finir des t\u00e2ches, ajouter des membres, lancer les propositions automatiques et consulter les rapports. L\u2019<strong>Utilisateur</strong> rejoint un groupe existant, consulte ses t\u00e2ches assign\u00e9es et d\u00e9clare ses indisponibilit\u00e9s. Vous choisissez votre r\u00f4le lors de l\u2019inscription et il est conserv\u00e9 apr\u00e8s l\u2019essai gratuit. Chaque personne dispose de son propre abonnement.',
    'faq.q6': 'Comment contacter le support ?',
    'faq.a6': 'Vous pouvez nous contacter via le formulaire de contact en bas de cette page ou directement par courriel. Nous r\u00e9pondons g\u00e9n\u00e9ralement sous 24 heures.',

    // Contact
    'contact.ctaTitle': 'Pr\u00eat \u00e0 commencer ?',
    'contact.ctaSubtitle': 'Essayez nos applications gratuitement d\u00e8s aujourd\u2019hui. Aucune carte bancaire requise.',
    'contact.formTitle': 'Une question ? Contactez-nous',
    'contact.formSubtitle': 'Nous vous r\u00e9pondrons sous 24 heures.',
    'contact.labelName': 'Nom',
    'contact.labelEmail': 'Courriel',
    'contact.labelSubject': 'Sujet',
    'contact.labelMessage': 'Message',
    'contact.phName': 'Votre nom',
    'contact.phEmail': 'votre@email.com',
    'contact.phMessage': 'Votre message...',
    'contact.optDefault': 'Choisir un sujet',
    'contact.optGt': 'Question sur GestTaches',
    'contact.optGb': 'Question sur GestBudget',
    'contact.optJm': 'Question sur Jeu de Mots',
    'contact.optGeneral': 'Question g\u00e9n\u00e9rale',
    'contact.optBug': 'Signaler un probl\u00e8me',
    'contact.optOther': 'Autre',
    'contact.submit': 'Envoyer le message',
    'contact.sending': 'Envoi en cours...',
    'contact.successTitle': 'Message envoy\u00e9 !',
    'contact.successMsg': 'Merci pour votre message. Nous vous r\u00e9pondrons dans les plus brefs d\u00e9lais.',
    'contact.error': 'Une erreur est survenue. Veuillez r\u00e9essayer.',

    // Footer
    'footer.tagline': 'Applications web modernes pour professionnels et \u00e9ducateurs.',
    'footer.appsTitle': 'Applications',
    'footer.resourcesTitle': 'Ressources',
    'footer.pricing': 'Tarifs',
    'footer.faq': 'FAQ',
    'footer.contact': 'Contact',
    'footer.copyright': '\u00a9 2026 CarlusOne. Tous droits r\u00e9serv\u00e9s.'
  },

  en: {
    'meta.title': 'CarlusOne \u2014 Professional Web Applications | GestTaches, GestBudget & Jeu de Mots',
    'meta.description': 'Discover CarlusOne web applications: GestTaches for team task management, GestBudget for personal budget management and Jeu de Mots for interactive learning. Free trial available.',

    'nav.apps': 'Applications',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',

    'hero.badge': '\uD83D\uDE80 Modern Web Applications',
    'hero.title': '<span class="gradient-text">Powerful</span> tools for your daily life',
    'hero.subtitle': 'Team task management and interactive learning \u2014 designed to be simple, efficient and accessible.',
    'hero.cta': 'Discover our applications',
    'hero.ctaPricing': 'View pricing',
    'hero.statApps': 'Applications',
    'hero.statFree': 'Free',
    'hero.statFreeLabel': 'Trial available',
    'hero.stat247Label': 'Accessible anywhere',

    'apps.badge': 'Our applications',
    'apps.title': 'Solutions tailored to your needs',
    'apps.subtitle': 'Each application is carefully designed to deliver an exceptional user experience.',

    'gt.badge': 'Team Management',
    'gt.desc': 'A <strong>team task management</strong> application suited for any type of organization: clinics, businesses, associations and more.',
    'gt.howTitle': 'How does it work?',
    'gt.step1': '<strong>Create your groups</strong> and add your team members with roles (owner, admin, member).',
    'gt.step2': '<strong>Define your tasks</strong> \u2014 one-time or recurring (weekly, monthly, etc.) \u2014 and assign them to your groups.',
    'gt.step3': '<strong>Members declare their unavailabilities</strong> directly in the calendar.',
    'gt.step4': '<strong>Launch the automatic proposal:</strong> the optimization algorithm generates a balanced schedule by distributing tasks fairly, respecting priorities and everyone\u2019s availability.',
    'gt.step5': '<strong>Validate and publish</strong> \u2014 each member sees their assigned tasks in their personal calendar.',
    'gt.rolesTitle': 'Two roles to choose from when signing up',
    'gt.rolesIntro': 'When you sign up, choose the role that fits your needs:',
    'gt.roleAdminTitle': 'Administrator',
    'gt.roleAdminDesc': 'Create and manage <strong>groups</strong>, define <strong>tasks</strong>, add members, launch <strong>automatic proposals</strong> and access <strong>reports</strong>. Ideal for team leaders.',
    'gt.roleUserTitle': 'User',
    'gt.roleUserDesc': 'Join an <strong>existing group</strong>, view your <strong>assigned tasks</strong> in your personal calendar and declare your <strong>unavailabilities</strong>. Ideal for team members.',
    'gt.rolesNote': '\uD83D\uDCA1 The chosen role is kept after the free trial. Each user has their own subscription.',
    'gt.feat1': 'Optimization algorithm with fair distribution',
    'gt.feat2': 'Recurring and parent tasks',
    'gt.feat3': 'Group, role and availability management',
    'gt.feat4': 'Interactive calendar, printing and locked periods',
    'gt.feat5': 'Reports, statistics and notifications',
    'gt.cta': 'Try for free',
    'gt.trial': '14-day free trial \u2014 no credit card required',

    'gb.badge': 'Personal Finance',
    'gb.desc': 'A complete <strong>personal budget management</strong> application: track your <strong>income</strong>, your <strong>expenses</strong> and manage your <strong>accounts</strong> with ease.',
    'gb.howTitle': 'How does it work?',
    'gb.step1': '<strong>Create your accounts</strong> (bank, savings, cash, credit card, etc.) to organize your finances.',
    'gb.step2': '<strong>Add your transactions</strong> \u2014 income and expenses \u2014 by choosing a category and an account.',
    'gb.step3': '<strong>View the dashboard</strong> to visualize your spending by category and track your budget evolution.',
    'gb.step4': '<strong>Customize your categories</strong> and account types in settings to adapt the application to your needs.',
    'gb.feat1': 'Dashboard with interactive charts',
    'gb.feat2': 'Customizable expense and income categories',
    'gb.feat3': 'Multi-account management (bank, savings, cash, etc.)',
    'gb.feat4': 'Real-time tracking of your finances',
    'gb.feat5': 'Multi-language (FR, EN, ES)',
    'gb.cta': 'Try for free',
    'gb.trial': '2-day free trial \u2014 no credit card required',

    'jm.badge': 'Education',
    'jm.desc': 'Interactive educational application for <strong>learning through play</strong>. Ideal for children and students who want to improve their <strong>vocabulary</strong> and <strong>math skills</strong>.',
    'jm.howTitle': 'How does it work?',
    'jm.howStep1': '<strong>1. Add your students</strong> in the <em>Preferences</em> menu. Each student will have their own word list.',
    'jm.howStep2': '<strong>2. Select a student</strong> then load a <strong>.txt</strong> file. The file is automatically saved for that student.',
    'jm.howStep3': '<strong>3. That\u2019s it!</strong> Next time, the words load automatically when you select the student. Two formats:',
    'jm.fileLabel1': '\uD83D\uDCDD French Vocabulary',
    'jm.fileDesc1': 'One word per line',
    'jm.fileLabel2': '\uD83C\uDDEC\uD83C\uDDE7 English \u2194 French',
    'jm.fileDesc2': 'English word<strong>;</strong>French translation',
    'jm.howNote': 'Word lists are saved in the cloud \u2014 accessible from any device. Flashcards cycle automatically with adjustable speed.',
    'jm.feat1': 'Customizable vocabulary flashcards',
    'jm.feat2': 'Math quizzes: addition, subtraction, multiplication',
    'jm.feat3': 'Printable worksheets (addition, subtraction, multiplication and division)',
    'jm.feat4': 'Student management and cloud-saved word lists',
    'jm.cta': 'Try for free',
    'jm.trial': '2-day free trial \u2014 no credit card required',

    'pricing.badge': 'Pricing',
    'pricing.title': 'Simple and transparent pricing',
    'pricing.subtitle': 'Try for free, then choose the plan that suits you. Cancel anytime.',
    'pricing.gtTagline': 'Team task management',
    'pricing.period': '/ month',
    'pricing.gtTrial': '14-day free trial',
    'pricing.gtFeat1': 'Interactive calendar',
    'pricing.gtFeat2': 'Automatic proposals',
    'pricing.gtFeat3': 'Group management',
    'pricing.gtFeat4': 'Reports and statistics',
    'pricing.gtFeat5': 'No credit card for trial',
    'pricing.gtCta': 'Start free trial',
    'pricing.popular': 'Popular',
    'pricing.jmTagline': 'Interactive learning',
    'pricing.jmTrial': '2-day free trial',
    'pricing.jmFeat1': 'Vocabulary flashcards',
    'pricing.jmFeat2': 'Interactive math quizzes',
    'pricing.jmFeat3': 'Printable worksheets (addition, subtraction, multiplication and division)',
    'pricing.jmFeat4': 'Cloud-saved word lists',
    'pricing.jmFeat5': 'Multi-language (FR, EN, ES)',
    'pricing.jmCta': 'Start free trial',
    'pricing.gbTagline': 'Personal budget management',
    'pricing.gbTrial': '2-day free trial',
    'pricing.gbFeat1': 'Interactive dashboard',
    'pricing.gbFeat2': 'Customizable categories',
    'pricing.gbFeat3': 'Multi-account management',
    'pricing.gbFeat4': 'Income and expense tracking',
    'pricing.gbFeat5': 'Multi-language (FR, EN, ES)',
    'pricing.gbCta': 'Start free trial',

    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'How does the free trial work?',
    'faq.a1': 'Simply create an account and start using the application immediately. No credit card required. At the end of the trial period, you can choose to subscribe to continue.',
    'faq.q2': 'Can I cancel at any time?',
    'faq.a2': 'Yes, absolutely. You can cancel your subscription at any time from your management portal. There are no commitments or hidden fees.',
    'faq.q3': 'What payment methods do you accept?',
    'faq.a3': 'We use Stripe, a secure payment platform. You can pay by credit or debit card (Visa, Mastercard, American Express).',
    'faq.q4': 'Is my data secure?',
    'faq.a4': 'Absolutely. We use cutting-edge technologies (Firebase, Supabase) with data encryption, secure authentication and compliance with data protection standards.',
    'faq.q5': 'Do the applications work on mobile?',
    'faq.a5': 'Yes, our applications are fully responsive and work on all devices: computers, tablets and mobile phones. You can even install them as an app on your phone.',
    'faq.q8': 'How do I install GestTaches as an app on my phone?',
    'faq.a8': 'GestTaches is a <strong>Progressive Web App (PWA)</strong>, which means you can install it directly from your browser without going through an app store.<br><br><strong>On iPhone / iPad (Safari):</strong><br>1. Open GestTaches in Safari.<br>2. Tap the <strong>Share</strong> button (square icon with an upward arrow).<br>3. Scroll down and tap <strong>"Add to Home Screen"</strong>.<br>4. Confirm by tapping <strong>"Add"</strong>.<br><br><strong>On Android (Chrome):</strong><br>1. Open GestTaches in Chrome.<br>2. Tap the <strong>\u22ee</strong> menu (three dots in the top right).<br>3. Tap <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.<br>4. Confirm the installation.<br><br>The app will appear on your home screen like a native app, with its own icon and full-screen experience.',
    'faq.q7': 'What is the difference between Administrator and User in GestTaches?',
    'faq.a7': 'The <strong>Administrator</strong> can create and manage groups, define tasks, add members, launch automatic proposals and view reports. The <strong>User</strong> joins an existing group, views their assigned tasks and declares their unavailabilities. You choose your role when signing up and it is kept after the free trial. Each person has their own subscription.',
    'faq.q6': 'How do I contact support?',
    'faq.a6': 'You can reach us through the contact form at the bottom of this page or directly by email. We typically respond within 24 hours.',

    'contact.ctaTitle': 'Ready to get started?',
    'contact.ctaSubtitle': 'Try our applications for free today. No credit card required.',
    'contact.formTitle': 'Have a question? Contact us',
    'contact.formSubtitle': 'We will respond within 24 hours.',
    'contact.labelName': 'Name',
    'contact.labelEmail': 'Email',
    'contact.labelSubject': 'Subject',
    'contact.labelMessage': 'Message',
    'contact.phName': 'Your name',
    'contact.phEmail': 'your@email.com',
    'contact.phMessage': 'Your message...',
    'contact.optDefault': 'Choose a subject',
    'contact.optGt': 'Question about GestTaches',
    'contact.optGb': 'Question about GestBudget',
    'contact.optJm': 'Question about Jeu de Mots',
    'contact.optGeneral': 'General question',
    'contact.optBug': 'Report a problem',
    'contact.optOther': 'Other',
    'contact.submit': 'Send message',
    'contact.sending': 'Sending...',
    'contact.successTitle': 'Message sent!',
    'contact.successMsg': 'Thank you for your message. We will get back to you as soon as possible.',
    'contact.error': 'An error occurred. Please try again.',

    'footer.tagline': 'Modern web applications for professionals and educators.',
    'footer.appsTitle': 'Applications',
    'footer.resourcesTitle': 'Resources',
    'footer.pricing': 'Pricing',
    'footer.faq': 'FAQ',
    'footer.contact': 'Contact',
    'footer.copyright': '\u00a9 2026 CarlusOne. All rights reserved.'
  },

  es: {
    'meta.title': 'CarlusOne \u2014 Aplicaciones Web Profesionales | GestTaches, GestBudget & Jeu de Mots',
    'meta.description': 'Descubra las aplicaciones web CarlusOne: GestTaches para la gesti\u00f3n de tareas de equipo, GestBudget para la gesti\u00f3n de presupuesto personal y Jeu de Mots para el aprendizaje interactivo. Prueba gratuita disponible.',

    'nav.apps': 'Aplicaciones',
    'nav.pricing': 'Precios',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contacto',

    'hero.badge': '\uD83D\uDE80 Aplicaciones web modernas',
    'hero.title': 'Herramientas <span class="gradient-text">poderosas</span> para su d\u00eda a d\u00eda',
    'hero.subtitle': 'Gesti\u00f3n de tareas de equipo y aprendizaje interactivo \u2014 dise\u00f1ados para ser simples, eficientes y accesibles.',
    'hero.cta': 'Descubrir nuestras aplicaciones',
    'hero.ctaPricing': 'Ver precios',
    'hero.statApps': 'Aplicaciones',
    'hero.statFree': 'Gratis',
    'hero.statFreeLabel': 'Prueba disponible',
    'hero.stat247Label': 'Accesible en todas partes',

    'apps.badge': 'Nuestras aplicaciones',
    'apps.title': 'Soluciones adaptadas a sus necesidades',
    'apps.subtitle': 'Cada aplicaci\u00f3n est\u00e1 cuidadosamente dise\u00f1ada para ofrecer una experiencia de usuario excepcional.',

    'gt.badge': 'Gesti\u00f3n de equipo',
    'gt.desc': 'Aplicaci\u00f3n de <strong>gesti\u00f3n de tareas de equipo</strong> adaptada a todo tipo de organizaci\u00f3n: cl\u00ednicas, empresas, asociaciones y m\u00e1s.',
    'gt.howTitle': '\u00bfC\u00f3mo funciona?',
    'gt.step1': '<strong>Cree sus grupos</strong> y agregue a los miembros de su equipo con roles (propietario, administrador, miembro).',
    'gt.step2': '<strong>Defina sus tareas</strong> \u2014 puntuales o recurrentes (semanales, mensuales, etc.) \u2014 y as\u00edgnelas a sus grupos.',
    'gt.step3': '<strong>Los miembros declaran sus indisponibilidades</strong> directamente en el calendario.',
    'gt.step4': '<strong>Lance la propuesta autom\u00e1tica:</strong> el algoritmo de optimizaci\u00f3n genera un calendario equilibrado distribuyendo las tareas equitativamente, respetando las prioridades y la disponibilidad de cada miembro.',
    'gt.step5': '<strong>Valide y publique</strong> \u2014 cada miembro ve sus tareas asignadas en su calendario personal.',
    'gt.rolesTitle': 'Dos roles a elegir al registrarse',
    'gt.rolesIntro': 'Al registrarse, elija el rol que corresponda a su uso:',
    'gt.roleAdminTitle': 'Administrador',
    'gt.roleAdminDesc': 'Cree y gestione <strong>grupos</strong>, defina las <strong>tareas</strong>, a\u00f1ada miembros, lance las <strong>propuestas autom\u00e1ticas</strong> y acceda a los <strong>informes</strong>. Ideal para responsables de equipo.',
    'gt.roleUserTitle': 'Usuario',
    'gt.roleUserDesc': '\u00danase a un <strong>grupo existente</strong>, consulte sus <strong>tareas asignadas</strong> en su calendario personal y declare sus <strong>indisponibilidades</strong>. Ideal para los miembros del equipo.',
    'gt.rolesNote': '\uD83D\uDCA1 El rol elegido se conserva despu\u00e9s de la prueba gratuita. Cada usuario tiene su propia suscripci\u00f3n.',
    'gt.feat1': 'Algoritmo de optimizaci\u00f3n con distribuci\u00f3n equitativa',
    'gt.feat2': 'Tareas recurrentes y tareas padre',
    'gt.feat3': 'Gesti\u00f3n de grupos, roles y disponibilidades',
    'gt.feat4': 'Calendario interactivo, impresi\u00f3n y per\u00edodos bloqueados',
    'gt.feat5': 'Informes, estad\u00edsticas y notificaciones',
    'gt.cta': 'Probar gratis',
    'gt.trial': '14 d\u00edas de prueba gratis \u2014 sin tarjeta de cr\u00e9dito',

    'gb.badge': 'Finanzas personales',
    'gb.desc': 'Aplicaci\u00f3n completa de <strong>gesti\u00f3n de presupuesto personal</strong>: siga sus <strong>ingresos</strong>, sus <strong>gastos</strong> y gestione sus <strong>cuentas</strong> con facilidad.',
    'gb.howTitle': '\u00bfC\u00f3mo funciona?',
    'gb.step1': '<strong>Cree sus cuentas</strong> (bancaria, ahorros, efectivo, tarjeta de cr\u00e9dito, etc.) para organizar sus finanzas.',
    'gb.step2': '<strong>A\u00f1ada sus transacciones</strong> \u2014 ingresos y gastos \u2014 eligiendo una categor\u00eda y una cuenta.',
    'gb.step3': '<strong>Consulte el panel de control</strong> para visualizar sus gastos por categor\u00eda y seguir la evoluci\u00f3n de su presupuesto.',
    'gb.step4': '<strong>Personalice sus categor\u00edas</strong> y tipos de cuentas en los ajustes para adaptar la aplicaci\u00f3n a sus necesidades.',
    'gb.feat1': 'Panel de control con gr\u00e1ficos interactivos',
    'gb.feat2': 'Categor\u00edas de gastos e ingresos personalizables',
    'gb.feat3': 'Gesti\u00f3n multi-cuentas (banco, ahorros, efectivo, etc.)',
    'gb.feat4': 'Seguimiento en tiempo real de sus finanzas',
    'gb.feat5': 'Multi-idiomas (FR, EN, ES)',
    'gb.cta': 'Probar gratis',
    'gb.trial': '2 d\u00edas de prueba gratis \u2014 sin tarjeta de cr\u00e9dito',

    'jm.badge': 'Educaci\u00f3n',
    'jm.desc': 'Aplicaci\u00f3n educativa interactiva para <strong>aprender jugando</strong>. Ideal para ni\u00f1os y estudiantes que desean mejorar su <strong>vocabulario</strong> y sus <strong>habilidades matem\u00e1ticas</strong>.',
    'jm.howTitle': '\u00bfC\u00f3mo funciona?',
    'jm.howStep1': '<strong>1. A\u00f1ada sus estudiantes</strong> en el men\u00fa <em>Preferencias</em>. Cada estudiante tendr\u00e1 su propia lista de palabras.',
    'jm.howStep2': '<strong>2. Seleccione un estudiante</strong> y cargue un archivo <strong>.txt</strong>. El archivo se guarda autom\u00e1ticamente para ese estudiante.',
    'jm.howStep3': '<strong>3. \u00a1Eso es todo!</strong> La pr\u00f3xima vez, las palabras se cargan autom\u00e1ticamente al seleccionar el estudiante. Dos formatos:',
    'jm.fileLabel1': '\uD83D\uDCDD Vocabulario franc\u00e9s',
    'jm.fileDesc1': 'Una palabra por l\u00ednea',
    'jm.fileLabel2': '\uD83C\uDDEC\uD83C\uDDE7 Ingl\u00e9s \u2194 Franc\u00e9s',
    'jm.fileDesc2': 'Palabra en ingl\u00e9s<strong>;</strong>traducci\u00f3n francesa',
    'jm.howNote': 'Las listas se guardan en la nube \u2014 accesibles desde cualquier dispositivo. Las flashcards avanzan autom\u00e1ticamente con velocidad ajustable.',
    'jm.feat1': 'Flashcards de vocabulario personalizables',
    'jm.feat2': 'Quiz de matem\u00e1ticas: suma, resta, multiplicaci\u00f3n',
    'jm.feat3': 'Hojas de c\u00e1lculo imprimibles (suma, resta, multiplicaci\u00f3n y divisi\u00f3n)',
    'jm.feat4': 'Gesti\u00f3n de estudiantes y listas guardadas en la nube',
    'jm.cta': 'Probar gratis',
    'jm.trial': '2 d\u00edas de prueba gratis \u2014 sin tarjeta de cr\u00e9dito',

    'pricing.badge': 'Precios',
    'pricing.title': 'Precios simples y transparentes',
    'pricing.subtitle': 'Pruebe gratis, luego elija el plan que m\u00e1s le convenga. Cancelable en cualquier momento.',
    'pricing.gtTagline': 'Gesti\u00f3n de tareas de equipo',
    'pricing.period': '/ mes',
    'pricing.gtTrial': '14 d\u00edas de prueba gratis',
    'pricing.gtFeat1': 'Calendario interactivo',
    'pricing.gtFeat2': 'Propuestas autom\u00e1ticas',
    'pricing.gtFeat3': 'Gesti\u00f3n de grupos',
    'pricing.gtFeat4': 'Informes y estad\u00edsticas',
    'pricing.gtFeat5': 'Sin tarjeta de cr\u00e9dito para la prueba',
    'pricing.gtCta': 'Comenzar prueba gratis',
    'pricing.popular': 'Popular',
    'pricing.jmTagline': 'Aprendizaje interactivo',
    'pricing.jmTrial': '2 d\u00edas de prueba gratis',
    'pricing.jmFeat1': 'Flashcards de vocabulario',
    'pricing.jmFeat2': 'Quiz de matem\u00e1ticas interactivos',
    'pricing.jmFeat3': 'Hojas de c\u00e1lculo imprimibles (suma, resta, multiplicaci\u00f3n y divisi\u00f3n)',
    'pricing.jmFeat4': 'Listas guardadas en la nube',
    'pricing.jmFeat5': 'Multi-idiomas (FR, EN, ES)',
    'pricing.jmCta': 'Comenzar prueba gratis',
    'pricing.gbTagline': 'Gesti\u00f3n de presupuesto personal',
    'pricing.gbTrial': '2 d\u00edas de prueba gratis',
    'pricing.gbFeat1': 'Panel de control interactivo',
    'pricing.gbFeat2': 'Categor\u00edas personalizables',
    'pricing.gbFeat3': 'Gesti\u00f3n multi-cuentas',
    'pricing.gbFeat4': 'Seguimiento de ingresos y gastos',
    'pricing.gbFeat5': 'Multi-idiomas (FR, EN, ES)',
    'pricing.gbCta': 'Comenzar prueba gratis',

    'faq.title': 'Preguntas frecuentes',
    'faq.q1': '\u00bfC\u00f3mo funciona la prueba gratuita?',
    'faq.a1': 'Simplemente cree una cuenta y comience a usar la aplicaci\u00f3n inmediatamente. No se requiere tarjeta de cr\u00e9dito. Al final del per\u00edodo de prueba, podr\u00e1 elegir suscribirse para continuar.',
    'faq.q2': '\u00bfPuedo cancelar en cualquier momento?',
    'faq.a2': 'S\u00ed, absolutamente. Puede cancelar su suscripci\u00f3n en cualquier momento desde su portal de gesti\u00f3n. No hay compromisos ni cargos ocultos.',
    'faq.q3': '\u00bfQu\u00e9 m\u00e9todos de pago aceptan?',
    'faq.a3': 'Utilizamos Stripe, una plataforma de pago segura. Puede pagar con tarjeta de cr\u00e9dito o d\u00e9bito (Visa, Mastercard, American Express).',
    'faq.q4': '\u00bfMis datos est\u00e1n seguros?',
    'faq.a4': 'Absolutamente. Utilizamos tecnolog\u00edas de vanguardia (Firebase, Supabase) con cifrado de datos, autenticaci\u00f3n segura y cumplimiento de las normas de protecci\u00f3n de datos.',
    'faq.q5': '\u00bfLas aplicaciones funcionan en m\u00f3vil?',
    'faq.a5': 'S\u00ed, nuestras aplicaciones son totalmente responsivas y funcionan en todos los dispositivos: computadoras, tabletas y tel\u00e9fonos m\u00f3viles. Incluso puede instalarlas como aplicaci\u00f3n en su tel\u00e9fono.',
    'faq.q8': '\u00bfC\u00f3mo instalar GestTaches como aplicaci\u00f3n en mi tel\u00e9fono?',
    'faq.a8': 'GestTaches es una <strong>Progressive Web App (PWA)</strong>, lo que significa que puede instalarla directamente desde su navegador, sin pasar por una tienda de aplicaciones.<br><br><strong>En iPhone / iPad (Safari):</strong><br>1. Abra GestTaches en Safari.<br>2. Pulse el bot\u00f3n <strong>Compartir</strong> (icono cuadrado con flecha hacia arriba).<br>3. Despl\u00e1cese hacia abajo y pulse <strong>\u00abA\u00f1adir a pantalla de inicio\u00bb</strong>.<br>4. Confirme pulsando <strong>\u00abA\u00f1adir\u00bb</strong>.<br><br><strong>En Android (Chrome):</strong><br>1. Abra GestTaches en Chrome.<br>2. Pulse el men\u00fa <strong>\u22ee</strong> (tres puntos arriba a la derecha).<br>3. Pulse <strong>\u00abInstalar aplicaci\u00f3n\u00bb</strong> o <strong>\u00abA\u00f1adir a pantalla de inicio\u00bb</strong>.<br>4. Confirme la instalaci\u00f3n.<br><br>La aplicaci\u00f3n aparecer\u00e1 en su pantalla de inicio como una aplicaci\u00f3n nativa, con su propio icono y funcionamiento a pantalla completa.',
    'faq.q7': '\u00bfCu\u00e1l es la diferencia entre Administrador y Usuario en GestTaches?',
    'faq.a7': 'El <strong>Administrador</strong> puede crear y gestionar grupos, definir tareas, a\u00f1adir miembros, lanzar las propuestas autom\u00e1ticas y consultar los informes. El <strong>Usuario</strong> se une a un grupo existente, consulta sus tareas asignadas y declara sus indisponibilidades. Usted elige su rol al registrarse y se conserva despu\u00e9s de la prueba gratuita. Cada persona tiene su propia suscripci\u00f3n.',
    'faq.q6': '\u00bfC\u00f3mo contactar al soporte?',
    'faq.a6': 'Puede contactarnos a trav\u00e9s del formulario de contacto en la parte inferior de esta p\u00e1gina o directamente por correo electr\u00f3nico. Generalmente respondemos en menos de 24 horas.',

    'contact.ctaTitle': '\u00bfListo para comenzar?',
    'contact.ctaSubtitle': 'Pruebe nuestras aplicaciones gratis hoy. Sin tarjeta de cr\u00e9dito.',
    'contact.formTitle': '\u00bfTiene una pregunta? Cont\u00e1ctenos',
    'contact.formSubtitle': 'Le responderemos en menos de 24 horas.',
    'contact.labelName': 'Nombre',
    'contact.labelEmail': 'Correo electr\u00f3nico',
    'contact.labelSubject': 'Asunto',
    'contact.labelMessage': 'Mensaje',
    'contact.phName': 'Su nombre',
    'contact.phEmail': 'su@email.com',
    'contact.phMessage': 'Su mensaje...',
    'contact.optDefault': 'Elegir un asunto',
    'contact.optGt': 'Pregunta sobre GestTaches',
    'contact.optGb': 'Pregunta sobre GestBudget',
    'contact.optJm': 'Pregunta sobre Jeu de Mots',
    'contact.optGeneral': 'Pregunta general',
    'contact.optBug': 'Reportar un problema',
    'contact.optOther': 'Otro',
    'contact.submit': 'Enviar mensaje',
    'contact.sending': 'Enviando...',
    'contact.successTitle': '\u00a1Mensaje enviado!',
    'contact.successMsg': 'Gracias por su mensaje. Le responderemos lo antes posible.',
    'contact.error': 'Ocurri\u00f3 un error. Por favor, int\u00e9ntelo de nuevo.',

    'footer.tagline': 'Aplicaciones web modernas para profesionales y educadores.',
    'footer.appsTitle': 'Aplicaciones',
    'footer.resourcesTitle': 'Recursos',
    'footer.pricing': 'Precios',
    'footer.faq': 'FAQ',
    'footer.contact': 'Contacto',
    'footer.copyright': '\u00a9 2026 CarlusOne. Todos los derechos reservados.'
  }
};

// Detect browser language
function detectLanguage() {
  const stored = localStorage.getItem('carlusone-lang');
  if (stored && translations[stored]) return stored;
  const browserLang = (navigator.language || navigator.userLanguage || 'fr').substring(0, 2).toLowerCase();
  return translations[browserLang] ? browserLang : 'fr';
}

let currentLang = 'fr';

// Get translation (returns null if key not found, to preserve fallback HTML)
function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.fr[key] || null;
}

// Apply all translations to the page
function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('carlusone-lang', lang);
  document.documentElement.lang = lang;

  // Update page title and meta description
  document.title = t('meta.title');
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));

  // Update Open Graph and Twitter meta tags for social sharing
  const localeMap = { fr: 'fr_CA', en: 'en_CA', es: 'es_ES' };
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', localeMap[lang] || 'fr_CA');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', t('meta.title'));
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', t('meta.description'));
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', t('meta.title'));
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', t('meta.description'));

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.dataset.i18n);
    if (val) el.textContent = val;
  });

  // Update HTML content (for elements with <strong>, <span>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = t(el.dataset.i18nHtml);
    if (val) el.innerHTML = val;
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = t(el.dataset.i18nPlaceholder);
    if (val) el.placeholder = val;
  });

  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Make t() available globally for script.js
window.t = t;

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(detectLanguage());

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyTranslations(btn.dataset.lang);
    });
  });
});
