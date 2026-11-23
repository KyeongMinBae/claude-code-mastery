// 인터랙션 스크립트 (ES6+)
// 기능: 모바일 메뉴, 다크 모드, 현재 섹션 하이라이트, 섹션 페이드인, 이메일 복사

(function () {
    'use strict';

    const root = document.documentElement;

    // ----- 1. 모바일 네비게이션 메뉴 토글 -----
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? '메뉴 열기' : '메뉴 닫기');
            mobileMenu.classList.toggle('hidden', isOpen);
        });

        // 메뉴 항목을 누르면 메뉴를 닫음
        mobileMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', '메뉴 열기');
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // ----- 2. 다크 모드 토글 (localStorage에 선택 저장) -----
    // 초기 적용은 head의 인라인 스크립트에서 처리됨
    const themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = root.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // ----- 3. 현재 섹션 하이라이트 (IntersectionObserver) -----
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section[id]');

    const setActiveLink = (id) => {
        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
    };

    if ('IntersectionObserver' in window && sections.length > 0) {
        // 화면 중앙을 지나는 섹션을 현재 섹션으로 판단
        const activeObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            { rootMargin: '-50% 0px -50% 0px' }
        );

        sections.forEach((section) => activeObserver.observe(section));
    }

    // ----- 4. 섹션 진입 시 페이드인 (IntersectionObserver) -----
    const fadeElements = document.querySelectorAll('.fade-in');

    if ('IntersectionObserver' in window) {
        const fadeObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // 한 번 나타난 섹션은 더 이상 관찰하지 않음
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        fadeElements.forEach((el) => fadeObserver.observe(el));
    } else {
        // IntersectionObserver를 지원하지 않는 브라우저에서는 바로 표시
        fadeElements.forEach((el) => el.classList.add('is-visible'));
    }

    // ----- 5. 이메일 복사 버튼 -----
    const copyButton = document.getElementById('copy-email');

    if (copyButton) {
        const originalText = copyButton.textContent;

        const showResult = (message) => {
            copyButton.textContent = message;
            setTimeout(() => {
                copyButton.textContent = originalText;
            }, 2000);
        };

        copyButton.addEventListener('click', async () => {
            const email = copyButton.dataset.email;

            try {
                await navigator.clipboard.writeText(email);
                showResult('복사되었습니다!');
            } catch (error) {
                // 클립보드 API를 쓸 수 없는 환경에서는 실패 메시지만 표시
                showResult('복사에 실패했습니다');
            }
        });
    }

    // ----- 푸터 연도 자동 갱신 -----
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }
})();
