// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A selection of projects showcasing my recent work and interests.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "A collection of my academic and AI/ML projects — automatically fetched from my GitHub profiles.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Summary of courses taught and instructional roles across multiple institutions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-how-machines-learn-to-rebuild-particle-showers",
        
          title: "How Machines Learn to Rebuild Particle Showers",
        
        description: "An intuitive explainer on how AI models evaluate reconstruction quality — using ARI, Purity, and Efficiency.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ai-reconstructs-particle-showers/";
          
        },
      },{id: "post-dark-matter",
        
          title: "Dark Matter",
        
        description: "Understanding the invisible mass of the universe — its evidence, classification, and candidates from baryonic MACHOs to supersymmetric WIMPs.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/dark-matter-evolution-history-of-universe/";
          
        },
      },{id: "post-evolution-history-of-universe-from-10-seconds-to-10-billion-years",
        
          title: "Evolution History of Universe: From 10 Seconds to 10 Billion Years",
        
        description: "From the photon epoch to the formation of galaxies — tracing how the universe evolved from seconds to billions of years.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/evolution-history-of-universe-10-seconds-to-10-billion-years/";
          
        },
      },{id: "post-evolution-history-of-universe-a-story-from-zero-to-ten-seconds",
        
          title: "Evolution History of Universe: A Story from Zero to Ten Seconds",
        
        description: "From the Planck era to the lepton epoch — how our universe evolved in its first ten seconds.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/evolution-history-of-universe-zero-to-ten-seconds/";
          
        },
      },{id: "post-causal-metric-hypothesis-i",
        
          title: "Causal Metric Hypothesis–I",
        
        description: "Exploring the causal metric hypothesis, its philosophical roots, and its role in defining the discrete structure of spacetime within causal set theory.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/causal-metric-hypothesis-I/";
          
        },
      },{id: "post-a-picture-and-an-equation",
        
          title: "A Picture and an Equation",
        
        description: "Exploring the connection between equations and diagrams — from Feynman’s visualization to causal structures in discrete spacetime.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/a-picture-and-an-equation/";
          
        },
      },{id: "post-why-do-we-need-quantum-gravity",
        
          title: "Why do we need “Quantum Gravity”?",
        
        description: "Motivation behind quantum gravity and causal sets.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/why-do-we-need-quantum-gravity/";
          
        },
      },{id: "post-riazuddin-the-self-effacing-quintessential-physicist-of-pakistan",
        
          title: "Riazuddin: The Self-Effacing Quintessential Physicist of Pakistan",
        
        description: "Tribute article on Professor Riazuddin — one of Pakistan’s greatest theoretical physicists and a close collaborator of Abdus Salam.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/Riazuddin/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-when-spacetime-becomes-countable-causal-sets-and-the-fluctuating-lambda",
          title: 'When Spacetime Becomes Countable: Causal Sets and the Fluctuating Lambda',
          description: "How discreteness, causality, and quantum uncertainty might explain the ever-changing cosmological constant.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_cst_fluctuating_lambda/";
            },},{id: "projects-how-the-universe-learned-to-expand-the-story-of-the-friedmann-equations",
          title: 'How the Universe Learned to Expand: The Story of the Friedmann Equations',
          description: "A brief journey through the insight that turned Einstein’s geometry into the heartbeat of an evolving cosmos.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_friedmann_equations/";
            },},{id: "projects-when-quantum-became-geometry-the-hidden-shape-of-hilbert-space",
          title: 'When Quantum Became Geometry: The Hidden Shape of Hilbert Space',
          description: "A journey into the deep structure of quantum mechanics — where complex vectors curve into geometry and Schrödinger’s equation becomes a Hamiltonian flow.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_geometry_of_qm/";
            },},{id: "projects-the-strange-symmetry-of-majorana-fermions",
          title: 'The Strange Symmetry of Majorana Fermions',
          description: "From coffee mugs to quantum computers — how topology meets superconductivity in the hunt for self-conjugate particles.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_majorana/";
            },},{id: "projects-how-big-is-everything-the-geometry-and-volume-of-a-closed-universe",
          title: 'How Big Is Everything? The Geometry and Volume of a Closed Universe',
          description: "A story about the universe’s possible shapes — open, flat, or closed — and how its very volume might whisper secrets about the quantum nature of spacetime.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_volume_of_closed_universe/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%7A%61%6D@%61%6E%6C.%67%6F%76", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mbilalazam", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/2047024", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/muhammad-bilal-azam", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-0272-8287", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=WfHM6RIAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/teckyonAI", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
