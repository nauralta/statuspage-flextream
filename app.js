(function () {
  var api = "https://api.portal.nauralta.com";
  var pageId = "c0b8a52c-6fa0-4fe5-89ca-4f842bc692f0";
  var translations = {"en":{"brand.subtitle":"Status","hero.good":"All systems operational","hero.warn":"Degraded performance","hero.bad":"There is an outage","hero.info":"Scheduled maintenance","state.operational":"Operational","state.degraded":"Degraded","state.partialOutage":"Partially unavailable","state.majorOutage":"Unavailable","state.maintenance":"Maintenance","group.fallback":"Other services","group.empty":"No services have been published yet.","groups.expandAll":"Expand all","groups.collapseAll":"Collapse all","subscribe.title":"Stay informed","subscribe.categories":"Categories","subscribe.placeholder":"you@email.com","subscribe.button":"Subscribe","subscribe.thanks":"Thanks! Check your inbox to confirm your subscription.","subscribe.error":"Something went wrong. Please try again later.","confirm.ok":"Your subscription has been confirmed.","confirm.error":"This confirmation link is invalid or has expired.","unsubscribe.ok":"You have been unsubscribed.","unsubscribe.error":"This unsubscribe link is invalid.","manage.title":"Manage your subscription","manage.saveButton":"Save preferences","manage.saved":"Your preferences have been saved.","manage.error":"This link is invalid or has expired.","manage.loading":"Loading your preferences\u2026","updates.title":"Recent updates","updates.empty":"No updates yet.","severity.critical":"Critical","severity.warning":"Warning","severity.success":"Resolved","severity.info":"Info","updatestate.investigating":"Investigating","updatestate.identified":"Identified","updatestate.monitoring":"Monitoring","updatestate.resolved":"Resolved","footer.lastUpdated":"Last changed","history.today":"Today","history.daysAgo":"{0} days ago","history.uptime":"{0}% uptime","history.downtimeTitle":"Downtime","history.noDataTitle":"No data","history.downFor":"Down for {0}","history.degradedFor":"Degraded for {0}","duration.lessThanMinute":"Less than a minute","duration.minute":"minute","duration.minutes":"minutes","duration.hour":"hour","duration.hours":"hours","duration.day":"day","duration.days":"days"},"nl":{"brand.subtitle":"Status","hero.good":"Alle systemen operationeel","hero.warn":"Verminderde prestaties","hero.bad":"Er is een storing","hero.info":"Gepland onderhoud","state.operational":"Operationeel","state.degraded":"Gedegradeerd","state.partialOutage":"Gedeeltelijk onbeschikbaar","state.majorOutage":"Onbeschikbaar","state.maintenance":"Onderhoud","group.fallback":"Overige diensten","group.empty":"Er zijn nog geen diensten gepubliceerd.","groups.expandAll":"Alles uitklappen","groups.collapseAll":"Alles inklappen","subscribe.title":"Blijf op de hoogte","subscribe.categories":"Categorie\u00EBn","subscribe.placeholder":"jouw@email.nl","subscribe.button":"Aanmelden","subscribe.thanks":"Bedankt! Check je inbox om je aanmelding te bevestigen.","subscribe.error":"Er ging iets mis. Probeer het later opnieuw.","confirm.ok":"Je aanmelding is bevestigd.","confirm.error":"Deze bevestigingslink is ongeldig of verlopen.","unsubscribe.ok":"Je bent afgemeld.","unsubscribe.error":"Deze afmeldlink is ongeldig.","manage.title":"Beheer je voorkeuren","manage.saveButton":"Voorkeuren opslaan","manage.saved":"Je voorkeuren zijn opgeslagen.","manage.error":"Deze link is ongeldig of verlopen.","manage.loading":"Voorkeuren laden\u2026","updates.title":"Recente updates","updates.empty":"Nog geen updates.","severity.critical":"Kritiek","severity.warning":"Waarschuwing","severity.success":"Opgelost","severity.info":"Informatie","updatestate.investigating":"In onderzoek","updatestate.identified":"Oorzaak bekend","updatestate.monitoring":"Wordt gevolgd","updatestate.resolved":"Opgelost","footer.lastUpdated":"Laatste wijziging","history.today":"Vandaag","history.daysAgo":"{0} dagen geleden","history.uptime":"{0}% uptime","history.downtimeTitle":"Uitval","history.noDataTitle":"Geen data","history.downFor":"Uitgevallen voor {0}","history.degradedFor":"Verminderd voor {0}","duration.lessThanMinute":"Minder dan een minuut","duration.minute":"minuut","duration.minutes":"minuten","duration.hour":"uur","duration.hours":"uur","duration.day":"dag","duration.days":"dagen"},"de":{"brand.subtitle":"Status","hero.good":"Alle Systeme funktionieren","hero.warn":"Beeintr\u00E4chtigte Leistung","hero.bad":"Es liegt eine St\u00F6rung vor","hero.info":"Geplante Wartung","state.operational":"Betriebsbereit","state.degraded":"Beeintr\u00E4chtigt","state.partialOutage":"Teilweise nicht verf\u00FCgbar","state.majorOutage":"Nicht verf\u00FCgbar","state.maintenance":"Wartung","group.fallback":"Weitere Dienste","group.empty":"Es wurden noch keine Dienste ver\u00F6ffentlicht.","groups.expandAll":"Alle ausklappen","groups.collapseAll":"Alle einklappen","subscribe.title":"Auf dem Laufenden bleiben","subscribe.categories":"Kategorien","subscribe.placeholder":"du@email.de","subscribe.button":"Abonnieren","subscribe.thanks":"Danke! Bitte best\u00E4tige die Anmeldung \u00FCber den Link in deinem Posteingang.","subscribe.error":"Etwas ist schiefgelaufen. Bitte versuche es sp\u00E4ter erneut.","confirm.ok":"Deine Anmeldung wurde best\u00E4tigt.","confirm.error":"Dieser Best\u00E4tigungslink ist ung\u00FCltig oder abgelaufen.","unsubscribe.ok":"Du wurdest abgemeldet.","unsubscribe.error":"Dieser Abmeldelink ist ung\u00FCltig.","manage.title":"Einstellungen verwalten","manage.saveButton":"Einstellungen speichern","manage.saved":"Deine Einstellungen wurden gespeichert.","manage.error":"Dieser Link ist ung\u00FCltig oder abgelaufen.","manage.loading":"Einstellungen werden geladen\u2026","updates.title":"Letzte Updates","updates.empty":"Noch keine Updates.","severity.critical":"Kritisch","severity.warning":"Warnung","severity.success":"Behoben","severity.info":"Information","updatestate.investigating":"Wird untersucht","updatestate.identified":"Ursache bekannt","updatestate.monitoring":"Wird beobachtet","updatestate.resolved":"Behoben","footer.lastUpdated":"Letzte \u00C4nderung","history.today":"Heute","history.daysAgo":"vor {0} Tagen","history.uptime":"{0}% Verf\u00FCgbarkeit","history.downtimeTitle":"Ausfall","history.noDataTitle":"Keine Daten","history.downFor":"Ausgefallen f\u00FCr {0}","history.degradedFor":"Beeintr\u00E4chtigt f\u00FCr {0}","duration.lessThanMinute":"Weniger als eine Minute","duration.minute":"Minute","duration.minutes":"Minuten","duration.hour":"Stunde","duration.hours":"Stunden","duration.day":"Tag","duration.days":"Tage"},"fr":{"brand.subtitle":"Statut","hero.good":"Tous les syst\u00E8mes sont op\u00E9rationnels","hero.warn":"Performances d\u00E9grad\u00E9es","hero.bad":"Une panne est en cours","hero.info":"Maintenance planifi\u00E9e","state.operational":"Op\u00E9rationnel","state.degraded":"D\u00E9grad\u00E9","state.partialOutage":"Partiellement indisponible","state.majorOutage":"Indisponible","state.maintenance":"Maintenance","group.fallback":"Autres services","group.empty":"Aucun service n\u0027a encore \u00E9t\u00E9 publi\u00E9.","groups.expandAll":"Tout d\u00E9velopper","groups.collapseAll":"Tout r\u00E9duire","subscribe.title":"Restez inform\u00E9","subscribe.categories":"Cat\u00E9gories","subscribe.placeholder":"vous@email.fr","subscribe.button":"S\u0027abonner","subscribe.thanks":"Merci ! V\u00E9rifiez votre bo\u00EEte mail pour confirmer votre abonnement.","subscribe.error":"Une erreur s\u0027est produite. Veuillez r\u00E9essayer plus tard.","confirm.ok":"Votre abonnement a \u00E9t\u00E9 confirm\u00E9.","confirm.error":"Ce lien de confirmation est invalide ou a expir\u00E9.","unsubscribe.ok":"Vous avez \u00E9t\u00E9 d\u00E9sabonn\u00E9.","unsubscribe.error":"Ce lien de d\u00E9sabonnement est invalide.","manage.title":"G\u00E9rer votre abonnement","manage.saveButton":"Enregistrer les pr\u00E9f\u00E9rences","manage.saved":"Vos pr\u00E9f\u00E9rences ont \u00E9t\u00E9 enregistr\u00E9es.","manage.error":"Ce lien est invalide ou a expir\u00E9.","manage.loading":"Chargement de vos pr\u00E9f\u00E9rences\u2026","updates.title":"Mises \u00E0 jour r\u00E9centes","updates.empty":"Aucune mise \u00E0 jour pour le moment.","severity.critical":"Critique","severity.warning":"Avertissement","severity.success":"R\u00E9solu","severity.info":"Information","updatestate.investigating":"En cours d\u0027investigation","updatestate.identified":"Cause identifi\u00E9e","updatestate.monitoring":"Sous surveillance","updatestate.resolved":"R\u00E9solu","footer.lastUpdated":"Derni\u00E8re modification","history.today":"Aujourd\u0027hui","history.daysAgo":"il y a {0} jours","history.uptime":"{0} % de disponibilit\u00E9","history.downtimeTitle":"Panne","history.noDataTitle":"Aucune donn\u00E9e","history.downFor":"Indisponible pendant {0}","history.degradedFor":"D\u00E9grad\u00E9 pendant {0}","duration.lessThanMinute":"Moins d\u0027une minute","duration.minute":"minute","duration.minutes":"minutes","duration.hour":"heure","duration.hours":"heures","duration.day":"jour","duration.days":"jours"},"it":{"brand.subtitle":"Stato","hero.good":"Tutti i sistemi sono operativi","hero.warn":"Prestazioni ridotte","hero.bad":"\u00C8 in corso un\u0027interruzione","hero.info":"Manutenzione programmata","state.operational":"Operativo","state.degraded":"Degradato","state.partialOutage":"Parzialmente non disponibile","state.majorOutage":"Non disponibile","state.maintenance":"Manutenzione","group.fallback":"Altri servizi","group.empty":"Non \u00E8 stato ancora pubblicato alcun servizio.","groups.expandAll":"Espandi tutto","groups.collapseAll":"Comprimi tutto","subscribe.title":"Resta aggiornato","subscribe.categories":"Categorie","subscribe.placeholder":"tu@email.it","subscribe.button":"Iscriviti","subscribe.thanks":"Grazie! Controlla la tua casella di posta per confermare l\u0027iscrizione.","subscribe.error":"Qualcosa \u00E8 andato storto. Riprova pi\u00F9 tardi.","confirm.ok":"La tua iscrizione \u00E8 stata confermata.","confirm.error":"Questo link di conferma non \u00E8 valido o \u00E8 scaduto.","unsubscribe.ok":"Ti sei disiscritto.","unsubscribe.error":"Questo link di disiscrizione non \u00E8 valido.","manage.title":"Gestisci la tua iscrizione","manage.saveButton":"Salva preferenze","manage.saved":"Le tue preferenze sono state salvate.","manage.error":"Questo link non \u00E8 valido o \u00E8 scaduto.","manage.loading":"Caricamento delle preferenze\u2026","updates.title":"Aggiornamenti recenti","updates.empty":"Nessun aggiornamento per ora.","severity.critical":"Critico","severity.warning":"Avviso","severity.success":"Risolto","severity.info":"Informazione","updatestate.investigating":"In fase di analisi","updatestate.identified":"Causa identificata","updatestate.monitoring":"Sotto monitoraggio","updatestate.resolved":"Risolto","footer.lastUpdated":"Ultima modifica","history.today":"Oggi","history.daysAgo":"{0} giorni fa","history.uptime":"{0}% di uptime","history.downtimeTitle":"Interruzione","history.noDataTitle":"Nessun dato","history.downFor":"Non disponibile per {0}","history.degradedFor":"Degradato per {0}","duration.lessThanMinute":"Meno di un minuto","duration.minute":"minuto","duration.minutes":"minuti","duration.hour":"ora","duration.hours":"ore","duration.day":"giorno","duration.days":"giorni"}};
  var languages = [{"code":"en","name":"English"},{"code":"de","name":"Deutsch"},{"code":"nl","name":"Nederlands"},{"code":"fr","name":"Fran\u00E7ais"},{"code":"it","name":"Italiano"}];
  var supported = languages.map(function (l) { return l.code; });
  var storageKey = 'statuspage.lang';

  function resolveLang(code) {
    if (!code) { return 'en'; }
    var lang = code.split('-')[0].toLowerCase();
    return supported.indexOf(lang) !== -1 ? lang : 'en';
  }

  function detectLang() {
    try {
      var stored = localStorage.getItem(storageKey);
      if (stored && supported.indexOf(stored) !== -1) { return stored; }
    } catch (e) {}
    var nav = (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language;
    return resolveLang(nav);
  }

  var currentLang = detectLang();

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key])
      || (translations.en && translations.en[key])
      || key;
  }

  function formatDate(iso) {
    try {
      return new Intl.DateTimeFormat(currentLang, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(iso));
    } catch (e) {
      return iso;
    }
  }

  function formatNumber(value) {
    try {
      return new Intl.NumberFormat(currentLang, { maximumFractionDigits: 3 }).format(value);
    } catch (e) {
      return String(value);
    }
  }

  function pluralUnit(count, singularKey, pluralKey) {
    return formatNumber(count) + ' ' + t(count === 1 ? singularKey : pluralKey);
  }

  function formatDuration(seconds) {
    var totalMinutes = Math.round(seconds / 60);
    if (totalMinutes < 1) { return t('duration.lessThanMinute'); }
    var days = Math.floor(totalMinutes / 1440);
    if (days >= 1) { return pluralUnit(days, 'duration.day', 'duration.days'); }
    var hours = Math.floor(totalMinutes / 60);
    if (hours >= 1) { return pluralUnit(hours, 'duration.hour', 'duration.hours'); }
    return pluralUnit(totalMinutes, 'duration.minute', 'duration.minutes');
  }

  function applyLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
    document.querySelectorAll('[data-i18n-template]').forEach(function (el) {
      var raw = parseFloat(el.getAttribute('data-value'));
      var formatted = isNaN(raw) ? el.getAttribute('data-value') : formatNumber(raw);
      el.textContent = t(el.getAttribute('data-i18n-template')).replace('{0}', formatted);
    });
    document.querySelectorAll('time[data-iso]').forEach(function (el) {
      el.textContent = formatDate(el.getAttribute('data-iso'));
    });
    document.documentElement.lang = currentLang;
    document.documentElement.classList.remove('no-i18n');
  }

  var select = document.getElementById('lang-switch');
  languages.forEach(function (l) {
    var opt = document.createElement('option');
    opt.value = l.code;
    opt.textContent = l.name;
    select.appendChild(opt);
  });
  select.value = currentLang;
  select.addEventListener('change', function () {
    currentLang = select.value;
    try { localStorage.setItem(storageKey, currentLang); } catch (e) {}
    applyLanguage();
  });

  applyLanguage();

  // Collapsible categories, collapsed by default. Each group's open/closed state
  // is remembered per visitor (localStorage) as a departure from that default,
  // independent of every other group.
  var groupCards = document.querySelectorAll('.group');
  var toggleAllButton = document.getElementById('toggle-all-groups');

  function allGroupsCollapsed() {
    return groupCards.length > 0
      && Array.prototype.every.call(groupCards, function (card) { return card.classList.contains('collapsed'); });
  }

  function updateToggleAllLabel() {
    if (!toggleAllButton) { return; }
    var key = allGroupsCollapsed() ? 'groups.expandAll' : 'groups.collapseAll';
    toggleAllButton.setAttribute('data-i18n', key);
    toggleAllButton.textContent = t(key);
  }

  groupCards.forEach(function (card) {
    var storageKey = 'statuspage.group.' + card.getAttribute('data-group-id');

    try {
      if (localStorage.getItem(storageKey) === '0') {
        card.classList.remove('collapsed');
      }
    } catch (e) {}
  });

  updateToggleAllLabel();

  document.querySelectorAll('[data-group-toggle]').forEach(function (button) {
    var card = button.closest('.group');
    var storageKey = 'statuspage.group.' + card.getAttribute('data-group-id');

    button.addEventListener('click', function () {
      var collapsed = card.classList.toggle('collapsed');
      try { localStorage.setItem(storageKey, collapsed ? '1' : '0'); } catch (e) {}
      updateToggleAllLabel();
    });
  });

  if (toggleAllButton) {
    toggleAllButton.addEventListener('click', function () {
      var expand = allGroupsCollapsed();
      groupCards.forEach(function (card) {
        card.classList.toggle('collapsed', !expand);
        try {
          localStorage.setItem('statuspage.group.' + card.getAttribute('data-group-id'), expand ? '0' : '1');
        } catch (e) {}
      });
      updateToggleAllLabel();
    });
  }

  // History bar tooltips — a single shared popup, positioned over whichever bar
  // is hovered or focused, built fresh each time from that bar's data attributes
  // so it always reflects the current language.
  var tip = document.createElement('div');
  tip.className = 'hbar-tip';
  tip.hidden = true;
  document.body.appendChild(tip);

  function escapeHtml(value) {
    var div = document.createElement('div');
    div.textContent = value;
    return div.innerHTML;
  }

  function hideTip() {
    tip.hidden = true;
  }

  function showTip(bar) {
    var status = bar.getAttribute('data-status');
    var downSeconds = parseFloat(bar.getAttribute('data-down-seconds') || '0');
    var degradedSeconds = parseFloat(bar.getAttribute('data-degraded-seconds') || '0');
    var dateText;

    try {
      dateText = new Intl.DateTimeFormat(currentLang, { dateStyle: 'medium' })
        .format(new Date(bar.getAttribute('data-date') + 'T00:00:00Z'));
    } catch (e) {
      dateText = bar.getAttribute('data-date');
    }

    var headKey = 'state.operational';
    var bodyText = '';

    if (status === 'down') {
      headKey = 'history.downtimeTitle';
      bodyText = t('history.downFor').replace('{0}', formatDuration(downSeconds));
    } else if (status === 'degraded') {
      headKey = 'state.degraded';
      bodyText = t('history.degradedFor').replace('{0}', formatDuration(degradedSeconds));
    } else if (status === 'nodata') {
      headKey = 'history.noDataTitle';
    }

    tip.className = 'hbar-tip hbar-tip--' + status;
    tip.innerHTML = '<div class="hbar-tip-head"><span class="hbar-tip-icon"></span><b>' + escapeHtml(t(headKey)) + '</b></div>'
      + (bodyText ? '<div class="hbar-tip-body">' + escapeHtml(bodyText) + '</div>' : '')
      + '<div class="hbar-tip-date">' + escapeHtml(dateText) + '</div>';
    tip.hidden = false;

    var barRect = bar.getBoundingClientRect();
    var tipRect = tip.getBoundingClientRect();
    var left = barRect.left + barRect.width / 2 - tipRect.width / 2 + window.scrollX;
    var top = barRect.top - tipRect.height - 10 + window.scrollY;

    if (top < window.scrollY + 4) {
      top = barRect.bottom + 10 + window.scrollY;
    }

    var minLeft = window.scrollX + 8;
    var maxLeft = window.scrollX + document.documentElement.clientWidth - tipRect.width - 8;
    tip.style.left = Math.max(minLeft, Math.min(left, maxLeft)) + 'px';
    tip.style.top = top + 'px';
  }

  document.querySelectorAll('.hbar').forEach(function (bar) {
    bar.addEventListener('mouseenter', function () { showTip(bar); });
    bar.addEventListener('mouseleave', hideTip);
    bar.addEventListener('focus', function () { showTip(bar); });
    bar.addEventListener('blur', hideTip);
  });

  var result = document.getElementById('action-result');

  function showResult(ok, key) {
    result.textContent = t(key);
    result.className = 'action-result ' + (ok ? 'ok' : 'err');
    result.hidden = false;
  }

  // Reads which category checkboxes (of the given class) are checked, and
  // collapses "every one of them" down to an empty array — the server's own
  // meaning for "everything" — so a category added after this visitor last saved
  // is included automatically rather than silently left out.
  function selectedGroupIds(checkboxClass) {
    var all = Array.prototype.slice.call(document.querySelectorAll('.' + checkboxClass));
    var checked = all.filter(function (box) { return box.checked; });
    return (all.length > 0 && checked.length === all.length)
      ? []
      : checked.map(function (box) { return box.getAttribute('data-group-id'); });
  }

  var params = new URLSearchParams(location.search);
  var confirmToken = params.get('confirm');
  var unsubscribeToken = params.get('unsubscribe');
  var manageToken = params.get('manage');

  if (confirmToken) {
    fetch(api + '/api/status/public/subscribe/confirm?token=' + encodeURIComponent(confirmToken))
      .then(function (r) { showResult(r.ok, r.ok ? 'confirm.ok' : 'confirm.error'); })
      .catch(function () { showResult(false, 'confirm.error'); });
  } else if (unsubscribeToken) {
    fetch(api + '/api/status/public/unsubscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: unsubscribeToken })
    })
      .then(function (r) { showResult(r.ok, r.ok ? 'unsubscribe.ok' : 'unsubscribe.error'); })
      .catch(function () { showResult(false, 'unsubscribe.error'); });
  } else if (manageToken) {
    var manageSection = document.getElementById('manage-section');
    var manageResult = document.getElementById('manage-result');
    manageSection.hidden = false;
    manageResult.textContent = t('manage.loading');
    manageResult.hidden = false;

    fetch(api + '/api/status/public/manage?token=' + encodeURIComponent(manageToken))
      .then(function (r) { if (!r.ok) { throw new Error('manage lookup failed'); } return r.json(); })
      .then(function (data) {
        manageResult.hidden = true;
        var selected = data.groupIds || [];
        document.querySelectorAll('.manage-group').forEach(function (box) {
          box.checked = selected.length === 0 || selected.indexOf(box.getAttribute('data-group-id')) !== -1;
        });
      })
      .catch(function () {
        manageResult.textContent = t('manage.error');
        manageResult.hidden = false;
      });

    document.getElementById('manage-form').addEventListener('submit', function (e) {
      e.preventDefault();

      fetch(api + '/api/status/public/manage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: manageToken, groupIds: selectedGroupIds('manage-group') })
      })
        .then(function (r) { manageResult.textContent = t(r.ok ? 'manage.saved' : 'manage.error'); manageResult.hidden = false; })
        .catch(function () { manageResult.textContent = t('manage.error'); manageResult.hidden = false; });
    });
  }

  var form = document.getElementById('subscribe-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('subscribe-email').value;
    var out = document.getElementById('subscribe-result');

    fetch(api + '/api/status/public/' + pageId + '/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, groupIds: selectedGroupIds('subscribe-group'), language: currentLang })
    })
      .then(function () {
        out.textContent = t('subscribe.thanks');
        out.hidden = false;
        form.reset();
        document.querySelectorAll('.subscribe-group').forEach(function (box) { box.checked = true; });
      })
      .catch(function () {
        out.textContent = t('subscribe.error');
        out.hidden = false;
      });
  });
})();