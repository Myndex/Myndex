/* ************************************************************************** */
/* *****  MYNDEX THEME SWITCHER v2 — Myndex 2026                     ******** */
/* *****  Floating button with expand-on-hover/tap                   ******** */
/* *****  Draggable to corners, persistent position                  ******** */
/* *****  Copyright © 2026 Andrew Somers. All Rights Reserved.       ******** */
/* ************************************************************************** */

(function () {
  'use strict';

  var THEME_KEY = 'myndex-theme';
  var POS_KEY = 'myndex-theme-pos';
  var root = document.documentElement;
  var darkMQ = window.matchMedia('(prefers-color-scheme: dark)');

  // --- SVG Icons (inline, no external deps) ---

  var ICONS = {
    sun: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    moon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    auto: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 7V1"/><path d="M12 23v-6"/><path d="M7 12H1"/><path d="M23 12h-6"/><line x1="12" y1="7" x2="12" y2="17" stroke-dasharray="2 2"/></svg>'
  };

  // --- Theme Logic ---

  function getEffectiveTheme(mode) {
    if (mode === 'dark') return 'dark';
    if (mode === 'light') return 'light';
    return darkMQ.matches ? 'dark' : 'light';
  }

  function applyTheme(mode) {
    var effective = getEffectiveTheme(mode);
    if (effective === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
    }
    updateButtonIcon(mode);
  }

  function setTheme(mode) {
    try { localStorage.setItem(THEME_KEY, mode); } catch (e) {}
    applyTheme(mode);
  }

  function getStoredTheme() {
    try { return localStorage.getItem(THEME_KEY) || 'auto'; } catch (e) { return 'auto'; }
  }

  // Listen for OS changes in auto mode
  darkMQ.addEventListener('change', function () {
    if (getStoredTheme() === 'auto') applyTheme('auto');
  });

  // --- Position Persistence ---

  function getStoredPos() {
    try {
      var p = localStorage.getItem(POS_KEY);
      return p ? JSON.parse(p) : null;
    } catch (e) { return null; }
  }

  function storePos(pos) {
    try { localStorage.setItem(POS_KEY, JSON.stringify(pos)); } catch (e) {}
  }

  // Snap to nearest corner/edge
  function snapPosition(x, y) {
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var pos = {};

    // Horizontal: left or right
    if (x < vw / 2) {
      pos.left = '12px'; pos.right = 'auto';
    } else {
      pos.right = '12px'; pos.left = 'auto';
    }

    // Vertical: top or bottom
    if (y < vh / 2) {
      pos.top = '12px'; pos.bottom = 'auto';
    } else {
      pos.bottom = '12px'; pos.top = 'auto';
    }

    return pos;
  }

  function applyPosition(el, pos) {
    el.style.top = pos.top;
    el.style.right = pos.right;
    el.style.bottom = pos.bottom;
    el.style.left = pos.left;
  }

  // --- Icon Update ---

  function updateButtonIcon(mode) {
    var btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;
    if (mode === 'light') {
      btn.innerHTML = ICONS.sun;
      btn.setAttribute('aria-label', 'Theme: Light. Click to change.');
    } else if (mode === 'dark') {
      btn.innerHTML = ICONS.moon;
      btn.setAttribute('aria-label', 'Theme: Dark. Click to change.');
    } else {
      btn.innerHTML = ICONS.auto;
      btn.setAttribute('aria-label', 'Theme: Auto. Click to change.');
    }
  }

  // --- Build the UI ---

  function buildSwitcher() {
    // Container
    var container = document.createElement('div');
    container.id = 'theme-switcher';
    container.setAttribute('role', 'group');
    container.setAttribute('aria-label', 'Color theme switcher');

    // Main button
    var btn = document.createElement('button');
    btn.id = 'theme-toggle-btn';
    btn.type = 'button';
    container.appendChild(btn);

    // Options panel
    var panel = document.createElement('div');
    panel.id = 'theme-panel';

    var modes = [
      { mode: 'auto', icon: ICONS.auto, label: 'Auto' },
      { mode: 'light', icon: ICONS.sun, label: 'Light' },
      { mode: 'dark', icon: ICONS.moon, label: 'Dark' }
    ];

    modes.forEach(function (m) {
      var opt = document.createElement('button');
      opt.type = 'button';
      opt.setAttribute('data-theme-set', m.mode);
      opt.setAttribute('aria-label', m.label + ' theme');
      opt.innerHTML = m.icon + '<span>' + m.label + '</span>';
      opt.addEventListener('click', function (e) {
        e.stopPropagation();
        setTheme(m.mode);
        closePanel();
      });
      panel.appendChild(opt);
    });

    container.appendChild(panel);

    // --- Interactions ---

    var panelOpen = false;
    var dragState = null;
    var didDrag = false;
    var holdTimer = null;

    function openPanel() {
      panelOpen = true;
      container.classList.add('open');
    }

    function closePanel() {
      panelOpen = false;
      container.classList.remove('open');
    }

    function togglePanel() {
      if (panelOpen) closePanel(); else openPanel();
    }

    // Desktop: hover
    container.addEventListener('mouseenter', function () {
      if (!dragState) openPanel();
    });
    container.addEventListener('mouseleave', function () {
      if (!dragState) closePanel();
    });

    // Mobile: tap toggles, but not if we dragged
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (!didDrag) togglePanel();
      didDrag = false;
    });

    // Close when clicking outside
    document.addEventListener('click', function () {
      closePanel();
    });
    container.addEventListener('click', function (e) {
      e.stopPropagation();
    });

    // --- Drag (hold to drag) ---

    function startHold(x, y) {
      didDrag = false;
      holdTimer = setTimeout(function () {
        dragState = { startX: x, startY: y };
        container.classList.add('dragging');
        closePanel();
      }, 400); // 400ms hold to start drag
    }

    function moveHold(x, y) {
      if (dragState) {
        didDrag = true;
        container.style.position = 'fixed';
        container.style.top = (y - 20) + 'px';
        container.style.left = (x - 20) + 'px';
        container.style.right = 'auto';
        container.style.bottom = 'auto';
      } else {
        // Cancel hold if finger moves before threshold
        if (holdTimer) {
          clearTimeout(holdTimer);
          holdTimer = null;
        }
      }
    }

    function endHold(x, y) {
      if (holdTimer) {
        clearTimeout(holdTimer);
        holdTimer = null;
      }
      if (dragState) {
        var pos = snapPosition(x, y);
        applyPosition(container, pos);
        storePos(pos);
        dragState = null;
        container.classList.remove('dragging');
      }
    }

    // Mouse drag
    btn.addEventListener('mousedown', function (e) {
      startHold(e.clientX, e.clientY);
    });
    document.addEventListener('mousemove', function (e) {
      moveHold(e.clientX, e.clientY);
    });
    document.addEventListener('mouseup', function (e) {
      endHold(e.clientX, e.clientY);
    });

    // Touch drag
    btn.addEventListener('touchstart', function (e) {
      var t = e.touches[0];
      startHold(t.clientX, t.clientY);
    }, { passive: true });
    document.addEventListener('touchmove', function (e) {
      if (dragState) {
        var t = e.touches[0];
        moveHold(t.clientX, t.clientY);
      }
    }, { passive: true });
    document.addEventListener('touchend', function (e) {
      var t = e.changedTouches[0];
      endHold(t.clientX, t.clientY);
    });

    // --- Position ---
    var storedPos = getStoredPos();
    if (storedPos) {
      applyPosition(container, storedPos);
    }
    // Default position is handled by CSS (bottom-right)

    // --- Insert ---
    document.body.appendChild(container);

    // Set initial icon
    updateButtonIcon(getStoredTheme());
  }

  // Apply theme immediately (before paint)
  applyTheme(getStoredTheme());

  // Build UI when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildSwitcher);
  } else {
    buildSwitcher();
  }

})();
