(function () {
    const screen = document.getElementById('screen');
    const state = {
    user: 'quangbui',
    host: 'local',
    path: '~',
    history: [],
    historyIndex: -1
};

function renderAboutMe() {
    print('┌─────────────────────────── ABOUT ───────────────────────────┐', '');
    print('│ Name: <span class="accent">Quang Bui</span>                                             │', '');
    print('│ Role: <span class="accent">Builder, learner, and product-minded engineer</span>         │', '');
    print('│ Location: <span class="accent">Ho Chi Minh City, Vietnam</span>                         │', '');
    print('└─────────────────────────────────────────────────────────────┘', '');

    printBranch('Information', [
        {
        name: 'Strengths',
        descriptions: [
            'Systems thinking — break big goals into clear steps',
            'Calm execution — focus on signal, not noise',
            'Communication — write concise docs and runnable examples'
        ]
        },
        {
        name: 'Techstack',
        descriptions: [
            'Frontend: HTML/CSS/JS (TypeScript), React',
            'Backend: Node.js, Python (FastAPI)',
            'Tools: Git, Docker, Jira/Confluence, CI/CD'
        ]
        },
        {
        name: 'Interests',
        descriptions: [
            'Human-friendly UX for technical tools',
            'Automation and AI assistants for routine work',
            'Teaching: guides, workshops, internal playbooks'
        ]
        },
        {
        name: 'Working Principles',
        descriptions: [
            'Start small — prove value in one day if possible',
            'Prefer boring tech that is easy to maintain',
            'Measure outcomes — remove features that do not help'
        ]
        },
        {
        name: 'Contact',
        descriptions: [
            'Email: quang@example.com',
            'LinkedIn: <a href="https://www.linkedin.com/in/buiducquang/" target="_blank" class="accent">Duc Quang Bui</a>',
            'GitHub: <a href="https://github.com/duckyquang" target="_blank" class="accent">Duck Quang</a>'
        ]
        }
    ]);
    }


function promptText() {
    return `<span class="prompt glow">${state.user}@${state.host}</span>:<span class="accent">${state.path}</span>$`;
}

function focusCmd() {
    const cmd = document.getElementById('cmd');
    if (cmd) {
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(cmd);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
      cmd.focus();
    }
  }

function appendPrompt() {
    const wrap = document.createElement('div');
    wrap.className = 'line prompt-line';
    wrap.innerHTML = `
      <div>${promptText()}</div>
      <div id="cmd" contenteditable="true" spellcheck="false"></div>
    `;
    screen.appendChild(wrap);
    screen.scrollTop = screen.scrollHeight;
    focusCmd();
}

function print(text, cls) {
    const div = document.createElement('div');
    div.className = 'line' + (cls ? ' ' + cls : '');
    div.innerHTML = text;
    screen.appendChild(div);
    screen.scrollTop = screen.scrollHeight;
}

function printBranch(title, items) {
    print(title + ':', 'yellow');
    print('', '');
    items.forEach((obj) => {
        print(obj.name, 'tree-branch');
        obj.descriptions.forEach(d => {
            print('- ' + d, 'tree-sub');
        });
        print('', '');
    });
}

const CV_PATH = 'assets/QuangBui-CV.pdf';
const CV_FILENAME = 'QuangBui-CV.pdf';

function triggerDownload(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.rel = 'noopener';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    a.remove();
}

function handleCommand(input) {
    const cmd = input.trim().toLowerCase();
    switch (cmd) {
        case 'help':
            print(
            [
                '<span class="yellow">Available commands</span>',
                '  help             Show all commands',
                '  about            Info about Quang Bui',
                '  proj             List of projects',
                '  rs               List of researches',
                '  ecs              List of extracurriculars',
                '  aca              Show academic info',
                '  awards           List of notable awards',
                '  quote            Print a deep quote',
                '  download         Download CV',
            ].join('\n')
            );
            break;
        case 'download':
            print('Downloaded!', 'muted');
            triggerDownload(CV_PATH, CV_FILENAME);
            break;
        case 'about':
            renderAboutMe();
            break;
        case 'proj':
            printBranch('Projects', [
            { name: 'Rotten', descriptions: [
                'An AI-based translator for teachers to translate content into brainrot',
                'Trained the AI model with over 300 brainrot terms and use cases',
                'Built it as a part of the <a href="https://docs.google.com/document/d/1bwLQNPkNM9e9gQBsdeFPXFcPsPpu6jjfSB3ueGwxJIs/edit?usp=sharing" target="_blank" class="accent">IB MYP Personal Project</a>'
            ] },
            { name: 'Huzzlingo', descriptions: [
                'Duolingo for getting girls (huzz)',
                'Trained the final boss AI model to challenge users and return a Huzzlingo score',
                'Built the webapp with '
            ] },
            { name: 'Zyra', descriptions: [
                'Description #1',
                'Description #2',
                'Description #3'
            ] },
            ]);
            break;
        case 'rs':
            printBranch('Researches', [
            { name: 'Reinforcement Learning-based solution for Traffic Signal Control: An Alternative Rewarding System', descriptions: [
                'Description #1',
                'Description #2',
                'Description #3'
            ] },
            { name: 'Quantum vs. Classical Algorithms: Shortest Path Optimization Problem', descriptions: [
                'Description #1',
                'Description #2',
                'Description #3'
            ] },
            ]);
            break;
        case 'ecs':
            printBranch('Extracurriculars', [
            { name: 'Coding Club President (2024 - Present)', descriptions: [
                'Planned a 30-lesson curriculum for 30+ members',
                'Produced alumni with products helping the school community (i.e. <span class="underline">Class Scheduler</span>)',
                'Taught 20 beginners <span class="underine">Python and Scratch</span> to introduce them to the basics of programming'
            ] },
            { name: 'TedX Speaker (2025)', descriptions: [
                'Topic: "<span class="underline">How can we ethically abuse AI?</span>"',
                'Discussed about the uses of AI and how we can utilize it to benefit us',
                'Encouraged the school board to <span class="underline">allow AI usage</span>'
            ] },
            { name: 'Basketball Player (2022 - Present)', descriptions: [
                'Varsity Player - won multiple 3x3 and 5x5 leagues as a starter',
                'Nationals Player - played at the <span class="underline">national level</span> for the Hanoi Basketball Team',
                'Basketball Club Coordinator - organized <span class="underline">free basketball summer camps</span> for children and raised awareness about basketball in the community'
            ] },
            ]);
            break;
        case 'aca':
            printBranch('Academics', [
            { name: 'American International School Viennav (2025 - 2027)', descriptions: [
                'GPA: 3.8 UW',
                'IB Diploma: N/A',
                'AP(7): Calculus BC, Microeconomics, Macroeconmics, Physics C: E&M + Mechanics, Statistics, Chemistry'
            ] },
            { name: 'The Dewey Schools (2023 - 2025)', descriptions: [
                'GPA: 4.67 W',
                'IB MYP Year 5: 57/63',
                'AP(3): Precalculus, Physics 1, Computer Science A'
            ] },
            ]);
            break;
        case 'awards':
            printBranch('Notable Awards', [
            { name: 'Mathematics', descriptions: [
                'Top 0.5% Contestant, International Kangaroo Mathematics Competition, 2019 - 2024',
                'Silver Medal, Asian Science and Mathematics Olympiad, 2019 - 2023',
                'Bronze Medal, Thailand International Mathematics Olympiad, 2022'
            ] },
            { name: 'Robotics', descriptions: [
                'Gold Medal, World Robot Contest Festival International Finals, 2024',
                'Bronze Medal, Vietnam Robotics Open, 2024'
            ] },
            { name: 'Others', descriptions: [
                'Best Debater, "Should Vietnam use nuclear energy?", 2025',
                'Outstanding Delegate, Nguyen Sieu Model United Nations, 2024',
                'Top 3 & Youngest-ever Participant, International Trade Challenge, 2022',
            ] },
            ]);
            break;
        case 'quote':
            print('"Nothing is impossible; literally, the word says I\'m possible" – Quang Bui, probably', 'muted');
            break;
        case '':
            break;
        default:
            print(`command not found: <span class="red">${cmd}</span>`);
    }
  }

    function lockLine(lineEl) {
        const input = lineEl.querySelector('#cmd');
        if (!input) return;
        const value = input.textContent;
        const frozen = document.createElement('div');
        frozen.className = 'line';
        frozen.innerHTML = `${promptText()} ${escapeHtml(value)}`;
        lineEl.replaceWith(frozen);
        return value;
    }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    }[c]));
  }

  screen.addEventListener('keydown', (e) => {
    const cmd = document.getElementById('cmd');
    if (!cmd) return;
    if (e.key === 'Enter') {
        e.preventDefault();
        const line = cmd.closest('.prompt-line');
        const value = cmd.textContent;
        state.history.unshift(value);
        state.historyIndex = -1;
        const frozenValue = lockLine(line);
        handleCommand(frozenValue);
        appendPrompt();
    }
  });

  screen.addEventListener('mousedown', () => setTimeout(focusCmd, 0));
  appendPrompt();
})();