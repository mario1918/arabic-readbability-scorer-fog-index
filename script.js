function updateCount() {
  const text = document.getElementById('textInput').value;
  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  document.getElementById('charCount').textContent = `${chars.toLocaleString('ar')} حرف · ${words.toLocaleString('ar')} كلمة`;
}

function calculateFogIndex(text) {
  const sentences = text.split(/[.،؛؟!?\n]/).filter(s => s.trim().length > 0);
  const totalSentences = Math.max(sentences.length, 1);

  const rawWords = text.split(/\s+/).map(w => w.replace(/[^\w\u0600-\u06FF]/g, '')).filter(w => w.length > 0);
  const totalWords = Math.max(rawWords.length, 1);

  const complexWords = rawWords.filter(w => w.length >= 5);
  const totalComplex = complexWords.length;

  const asl = totalWords / totalSentences;
  const pcw = (totalComplex / totalWords) * 100;
  const fogIndex = 0.4 * (asl + pcw);

  return {
    score: Math.round(fogIndex * 10) / 10,
    sentences: totalSentences,
    words: totalWords,
    complex: totalComplex,
    asl: Math.round(asl * 10) / 10,
    pcw: Math.round(pcw * 10) / 10,
  };
}

function getLevel(score) {
  if (score <= 6)  return { label: 'سهل جداً · Very Easy',    cls: 'level-easy',   desc: 'النص واضح وسهل القراءة. مناسب لجميع المستويات.', en: 'Very Easy' };
  if (score <= 9)  return { label: 'مناسب · Standard',         cls: 'level-easy',   desc: 'النص في المستوى المعياري المناسب للقراءة العامة.', en: 'Standard' };
  if (score <= 12) return { label: 'متوسط الصعوبة · Moderate', cls: 'level-medium', desc: 'النص يحتاج إلى مستوى تعليمي متوسط لفهمه بوضوح.', en: 'Moderate' };
  if (score <= 16) return { label: 'صعب · Difficult',          cls: 'level-hard',   desc: 'النص متخصص ويحتاج إلى خلفية أكاديمية للفهم الجيد.', en: 'Difficult' };
  return               { label: 'صعب جداً · Very Difficult',  cls: 'level-hard',   desc: 'النص بالغ التعقيد. يُنصح بتبسيطه للجمهور العام.', en: 'Very Difficult' };
}

function evaluateText() {
  const text = document.getElementById('textInput').value.trim();
  if (!text) {
    document.getElementById('textInput').focus();
    return;
  }

  const btn = document.getElementById('evalBtn');
  btn.disabled = true;
  btn.textContent = 'جارٍ التحليل...';

  setTimeout(() => {
    const result = calculateFogIndex(text);
    const level  = getLevel(result.score);

    document.getElementById('scoreValue').textContent   = result.score.toFixed(1);
    document.getElementById('scoreLevel').className     = 'score-level ' + level.cls;
    document.getElementById('scoreLevel').textContent   = level.label;
    document.getElementById('scoreDesc').textContent    = level.desc;

    const pct = Math.min((result.score / 20) * 100, 100);
    document.getElementById('gaugeFill').style.width = pct + '%';

    document.getElementById('statSentences').textContent = result.sentences;
    document.getElementById('statWords').textContent     = result.words;
    document.getElementById('statComplex').textContent   = result.complex;
    document.getElementById('statASL').textContent       = result.asl;

    const resultsEl = document.getElementById('results');
    resultsEl.style.display = 'block';
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

    btn.disabled = false;
    btn.innerHTML = `
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
      تقييم مجدد`;
  }, 300);
}

document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') evaluateText();
});
