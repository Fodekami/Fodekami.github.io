const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const year = document.querySelector("[data-year]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageStorageKey = "fodekami-language";
const contactEmail = "leeminyong830@gmail.com";
const githubUrl = "https://github.com/fodekami";

const translations = {
  en: {
    active: "Active",
    aboutApproachText1:
      "I care about software that feels calm to use and reasonable to maintain. That means clear structure, purposeful interaction design, and code that leaves useful clues for the next person reading it.",
    aboutApproachText2:
      "My default rhythm is to make progress visible early: draft the shape, test the workflow, reduce uncertainty, and refine once the real constraints are easier to see.",
    aboutApproachTitle: "How I approach work.",
    aboutHeroText:
      "I am Fodekami, a developer who enjoys turning open-ended ideas into readable systems, useful interfaces, and reusable knowledge.",
    aboutHeroTitle: "Practical engineering, clear thinking, and steady learning.",
    aboutProfileEyebrow: "Profile",
    aboutSkill1Text: "Responsive layouts, accessibility, performance, and thoughtful interface details.",
    aboutSkill1Title: "Frontend craft",
    aboutSkill2Text: "APIs, data boundaries, reusable modules, and practical architecture decisions.",
    aboutSkill2Title: "System design",
    aboutSkill3Text: "Prototypes that answer real questions and keep user workflows in view.",
    aboutSkill3Title: "Product sense",
    aboutSkill4Text: "Notes and writeups that preserve context instead of only recording outcomes.",
    aboutSkill4Title: "Documentation",
    backHome: "Back to home",
    emailLabel: "Email",
    githubProfile: "GitHub profile",
    homeTagline: "Welcome to Fode's personal site",
    navAbout: "About",
    navNotes: "Notes",
    navProjects: "Projects",
    note1Text:
      "How naming, file structure, and small interfaces reduce friction for future maintainers.",
    note1Title: "Readable code as a collaboration tool",
    note2Text: "Why the right prototype answers a question instead of imitating a finished product.",
    note2Title: "Designing useful prototypes",
    note3Text: "How notes, routines, and reusable references make technical work easier to restart.",
    note3Title: "Personal knowledge systems",
    note4Text: "When plain HTML, CSS, and JavaScript are enough, and how to keep them tidy.",
    note4Title: "Static sites that stay maintainable",
    notesHeroText:
      "This page is a home for compact essays, project logs, implementation notes, and patterns I want to remember.",
    notesHeroTitle: "Ideas, lessons, and engineering field notes.",
    ongoing: "Ongoing",
    project1Meta: "Portfolio",
    project1Text:
      "A fast static website organized around four clear sections, built for GitHub Pages without a framework or build pipeline.",
    project1Title: "Personal Website",
    project2Meta: "Prototype",
    project2Text:
      "A concept for collecting notes, project logs, reusable snippets, and references so long-running ideas are easier to resume.",
    project2Title: "Personal Knowledge Hub",
    project3Meta: "Open source",
    project3Text:
      "Lightweight utilities and reference projects built to practice one idea at a time without burying the important mechanics.",
    project3Title: "Small Tools",
    projectsHeroText:
      "A curated space for things I have built, prototypes I am exploring, and small tools that make technical work easier to understand.",
    projectsHeroTitle: "Selected work and experiments.",
    relatedNotes: "Related notes",
    repository: "Repository",
    skip: "Skip to content",
    toggleNav: "Toggle navigation"
  },
  zh: {
    active: "进行中",
    aboutApproachText1:
      "我重视让人用起来平静、维护起来清楚的软件。这意味着结构清晰、交互有目的，并且代码能为下一位阅读者留下足够线索。",
    aboutApproachText2:
      "我的工作节奏通常是先让进展可见：勾勒形状，测试流程，降低不确定性，再在真实约束更清晰后继续打磨。",
    aboutApproachTitle: "我的工作方式",
    aboutHeroText:
      "我是 Fodekami，一名喜欢把开放问题整理成可读系统、实用界面和可复用知识的开发者。",
    aboutHeroTitle: "务实工程，清晰思考，持续学习。",
    aboutProfileEyebrow: "简介",
    aboutSkill1Text: "响应式布局、可访问性、性能，以及细致的界面体验。",
    aboutSkill1Title: "前端工艺",
    aboutSkill2Text: "API、数据边界、可复用模块，以及务实的架构取舍。",
    aboutSkill2Title: "系统设计",
    aboutSkill3Text: "用原型回答真实问题，并始终关注用户工作流。",
    aboutSkill3Title: "产品意识",
    aboutSkill4Text: "用笔记和文档保留上下文，而不仅仅记录结果。",
    aboutSkill4Title: "技术文档",
    backHome: "返回首页",
    emailLabel: "邮箱",
    githubProfile: "GitHub 主页",
    homeTagline: "欢迎来到Fode的个人小站",
    navAbout: "关于",
    navNotes: "笔记",
    navProjects: "项目",
    note1Text: "命名、文件结构和小接口如何降低未来维护者的理解成本。",
    note1Title: "可读代码也是协作工具",
    note2Text: "合适的原型应该回答问题，而不是模仿一个已经完成的产品。",
    note2Title: "设计有用的原型",
    note3Text: "笔记、习惯和可复用参考如何让技术工作更容易重新启动。",
    note3Title: "个人知识系统",
    note4Text: "什么时候纯 HTML、CSS 和 JavaScript 就足够，以及如何保持它们整洁。",
    note4Title: "保持静态站点可维护",
    notesHeroText: "这里收集短文、项目日志、实现笔记，以及我希望反复回看的模式。",
    notesHeroTitle: "想法、经验和工程笔记。",
    ongoing: "持续中",
    project1Meta: "作品集",
    project1Text: "一个围绕四个清晰板块组织的快速静态网站，为 GitHub Pages 构建，无需框架或构建流程。",
    project1Title: "个人网站",
    project2Meta: "原型",
    project2Text: "一个用于收集笔记、项目日志、可复用片段和参考资料的概念，让长期想法更容易继续推进。",
    project2Title: "个人知识中心",
    project3Meta: "开源",
    project3Text: "轻量工具和参考项目，用来一次练习一个想法，同时不隐藏关键机制。",
    project3Title: "小工具",
    projectsHeroText: "这里展示我构建过的内容、正在探索的原型，以及帮助理解技术工作的轻量工具。",
    projectsHeroTitle: "精选项目与实验。",
    relatedNotes: "相关笔记",
    repository: "代码仓库",
    skip: "跳到正文",
    toggleNav: "切换导航"
  }
};

const pageMeta = {
  home: {
    en: {
      title: "Fodekami - Personal Website",
      description: "Fodekami's personal website with simple sections and quick contact links."
    },
    zh: {
      title: "Fodekami - 个人网站",
      description: "Fodekami 的个人网站，包含简洁板块和快速联系方式。"
    }
  },
  about: {
    en: {
      title: "About - Fodekami",
      description: "About Fodekami: background, focus, working style, and strengths."
    },
    zh: {
      title: "关于 - Fodekami",
      description: "关于 Fodekami：背景、关注方向、工作方式和核心能力。"
    }
  },
  projects: {
    en: {
      title: "Projects - Fodekami",
      description: "Selected projects, prototypes, and experiments by Fodekami."
    },
    zh: {
      title: "项目 - Fodekami",
      description: "Fodekami 的精选项目、原型和实验。"
    }
  },
  notes: {
    en: {
      title: "Notes - Fodekami",
      description: "Technical notes, learning logs, and writing topics by Fodekami."
    },
    zh: {
      title: "笔记 - Fodekami",
      description: "Fodekami 的技术笔记、学习记录和写作主题。"
    }
  },
};

if (year) {
  year.textContent = new Date().getFullYear();
}

function readSavedLanguage() {
  try {
    return window.localStorage?.getItem(languageStorageKey);
  } catch {
    return null;
  }
}

function saveLanguage(language) {
  try {
    window.localStorage?.setItem(languageStorageKey, language);
  } catch {
    // Language switching still works for the current page when storage is unavailable.
  }
}

function getInitialLanguage() {
  const savedLanguage = readSavedLanguage();
  if (savedLanguage === "en" || savedLanguage === "zh") return savedLanguage;
  return navigator.language?.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function updateMetadata(language) {
  const page = document.body.dataset.page || "home";
  const meta = pageMeta[page]?.[language];
  if (!meta) return;

  document.title = meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.description);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", meta.title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", meta.description);
}

function applyLanguage(language) {
  const dictionary = translations[language];
  if (!dictionary) return;

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key && dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  if (languageToggle) {
    const nextLanguage = language === "zh" ? "English" : "中文";
    languageToggle.textContent = nextLanguage;
    languageToggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
  }

  updateMetadata(language);
  saveLanguage(language);
}

function createContactDock() {
  if (document.querySelector("[data-contact-dock]")) return;

  const dock = document.createElement("aside");
  dock.className = "contact-dock";
  dock.dataset.contactDock = "";
  dock.setAttribute("aria-label", "Contact links");
  dock.innerHTML = `
    <a class="contact-icon" href="${githubUrl}" rel="me" aria-label="GitHub">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18a2.65 2.65 0 0 0-1.11-1.46c-.91-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1.03 2.13 2.13 0 0 0 2.91.83 2.14 2.14 0 0 1 .63-1.34c-2.22-.25-4.56-1.11-4.56-4.94a3.87 3.87 0 0 1 1.03-2.69 3.6 3.6 0 0 1 .1-2.65s.84-.27 2.75 1.03a9.48 9.48 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.37.84.4 1.79.1 2.65a3.86 3.86 0 0 1 1.03 2.69c0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/>
      </svg>
    </a>
    <details class="email-note">
      <summary class="contact-icon" aria-label="Email">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 3.2V17h16V8.2l-8 5.3-8-5.3zm1.2-1.2 6.8 4.5L18.8 7H5.2z"/>
        </svg>
      </summary>
      <div class="note-paper">
        <span data-i18n="emailLabel">Email</span>
        <a href="mailto:${contactEmail}">${contactEmail}</a>
      </div>
    </details>
  `;
  document.body.append(dock);
}

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

function closeNavigation() {
  if (!navToggle || !navLinks) return;
  document.body.classList.remove("nav-open");
  navLinks.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const currentLanguage = document.documentElement.lang.startsWith("zh") ? "zh" : "en";
    applyLanguage(currentLanguage === "zh" ? "en" : "zh");
  });
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeNavigation();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNavigation();
    }
  });
}

createContactDock();
applyLanguage(getInitialLanguage());
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });
