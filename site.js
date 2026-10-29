// Language: English by default, or the visitor's saved choice. Text lives in data-i keys below.
const T = {
  es: {
    nav_features: 'Funciones', nav_promise: 'Promesa de anuncios', nav_styles: 'Estilos',
    eyebrow: 'Reproductor de música y video para Android',
    h1a: 'Tu música,', h1b: 'sin interrupciones.',
    lead: 'Brisa reproduce la música y los videos que ya tienes en tu celular. Todas las funciones son gratis, para siempre, y ningún anuncio pausa tu canción.',
    soon: 'Muy pronto en Google Play', see: 'Mira lo que hace',
    f1: 'funciones gratis', f2: 'ligera en tu celular', f3: 'cuentas necesarias',
    feat_t: 'Todo lo que un gran reproductor necesita. Todo gratis.',
    c1t: 'Ecualizador de 10 bandas', c1: 'Presets, tus propias curvas, comparar A/B y un perfil por salida: bocina, audífonos y Bluetooth.',
    c2t: 'Música y video', c2: 'Reproductor de video completo con gestos, subtítulos, ventana flotante y modo solo audio.',
    c3t: 'Tus carpetas, tu orden', c3: 'Ordena por título, artista, fecha o nombre de archivo. Oculta audios cortos y carpetas que no quieras.',
    c4t: 'Letras desde tus archivos', c4: 'Letras .lrc sincronizadas e incrustadas. Toca una línea para saltar a ese momento.',
    c5t: 'Shuffle inteligente', c5: 'Evita repetir artista, baja lo que acabas de oír y sube lo que te gusta.',
    c6t: 'Videos a MP3', c6: 'Convierte a MP3 los videos que ya tienes. No se descarga nada de internet.',
    c7t: 'Wi-Fi Transfer', c7: 'Envía canciones desde tu computadora u otro celular por tu propio Wi-Fi, con un código de un solo uso.',
    c8t: 'Temporizador', c8: 'Baja el volumen suave y se detiene. Además Android Auto, widgets y controles de audífonos.',
    pr_t: 'Nuestra promesa de anuncios', pr: 'Brisa es gratis y se sostiene con anuncios, con reglas escritas en el código de la app:',
    pr1: 'Ningún anuncio pausa, corta ni baja tu música. Todos los anuncios van en silencio.',
    pr2: 'Tu primera semana no tiene ningún anuncio.',
    pr3: 'Los banners se quedan en espacios fijos. Como mucho, dos anuncios a pantalla completa al día, solo al cerrar el reproductor.',
    pr4: 'Nunca al abrir la app ni al cambiar de canción. Nunca en la pantalla de bloqueo ni en las notificaciones.',
    pr5: 'Sin notificaciones promocionales, sin cuentas y sin rastrear tu biblioteca.',
    st_t: 'Hazla tuya', st: 'Estilo Básico, Neón o Cristal, tu propia foto de fondo y animaciones que puedes activar o apagar.',
    pv_t: 'Privada desde el diseño', pv: 'Tu biblioteca, playlists, historial y ajustes nunca salen de tu celular. Sin registro. Brisa reproduce archivos que ya tienes; no es un descargador.',
    privacy: 'Política de privacidad', terms: 'Términos de uso', contact: 'Contacto', home: 'Inicio',
  },
  pt: {
    nav_features: 'Recursos', nav_promise: 'Promessa de anúncios', nav_styles: 'Estilos',
    eyebrow: 'Player de música e vídeo para Android',
    h1a: 'Sua música,', h1b: 'sem interrupções.',
    lead: 'O Brisa toca as músicas e os vídeos que já estão no seu celular. Todos os recursos são grátis, para sempre, e nenhum anúncio pausa sua música.',
    soon: 'Em breve no Google Play', see: 'Veja o que ele faz',
    f1: 'recursos grátis', f2: 'leve no seu celular', f3: 'contas necessárias',
    feat_t: 'Tudo o que um grande player precisa. Tudo grátis.',
    c1t: 'Equalizador de 10 bandas', c1: 'Predefinições, suas próprias curvas, comparação A/B e um perfil por saída: alto-falante, fone e Bluetooth.',
    c2t: 'Música e vídeo', c2: 'Player de vídeo completo com gestos, legendas, janela flutuante e modo só áudio.',
    c3t: 'Suas pastas, sua ordem', c3: 'Ordene por título, artista, data ou nome do arquivo. Oculte áudios curtos e pastas que não quer.',
    c4t: 'Letras dos seus arquivos', c4: 'Letras .lrc sincronizadas e incorporadas. Toque numa linha para pular para esse momento.',
    c5t: 'Aleatório inteligente', c5: 'Evita repetir artista, abaixa o que você acabou de ouvir e favorece o que você ama.',
    c6t: 'Vídeos em MP3', c6: 'Converta em MP3 os vídeos que já estão no seu celular. Nada é baixado da internet.',
    c7t: 'Wi-Fi Transfer', c7: 'Envie músicas do computador ou de outro celular pelo seu próprio Wi-Fi, com um código de uso único.',
    c8t: 'Timer', c8: 'Diminui o som com suavidade e para. Além de Android Auto, widgets e controles do fone.',
    pr_t: 'Nossa promessa sobre anúncios', pr: 'O Brisa é grátis e se mantém com anúncios, com regras escritas no código do app:',
    pr1: 'Nenhum anúncio pausa, corta ou abaixa sua música. Todos os anúncios ficam sem som.',
    pr2: 'Sua primeira semana não tem nenhum anúncio.',
    pr3: 'Os banners ficam em espaços fixos. No máximo dois anúncios em tela cheia por dia, só quando você fecha o player.',
    pr4: 'Nunca ao abrir o app nem ao trocar de música. Nunca na tela de bloqueio nem nas notificações.',
    pr5: 'Sem notificações promocionais, sem contas e sem rastrear sua biblioteca.',
    st_t: 'Do seu jeito', st: 'Estilo Básico, Neon ou Cristal, sua própria foto de fundo e animações que você liga ou desliga.',
    pv_t: 'Privado por design', pv: 'Sua biblioteca, playlists, histórico e configurações nunca saem do seu celular. Sem cadastro. O Brisa toca arquivos que você já tem; não é um app para baixar.',
    privacy: 'Política de privacidade', terms: 'Termos de uso', contact: 'Contato', home: 'Início',
  },
};

const EN = {};
document.querySelectorAll('[data-i]').forEach(el => { EN[el.dataset.i] = el.textContent; });

function pick() {
  // English is the main language; Spanish and Portuguese only when the visitor chooses them.
  try { const saved = localStorage.getItem('lang'); if (saved === 'es' || saved === 'pt') return saved; } catch (e) {}
  return 'en';
}

function apply(lang) {
  const dict = T[lang] || {};
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i]').forEach(el => { el.textContent = dict[el.dataset.i] || EN[el.dataset.i]; });
  document.querySelectorAll('[data-shot]').forEach(img => { img.src = `/img/${lang}_${img.dataset.shot}.webp`; });
  document.querySelectorAll('.legal [data-lang]').forEach(el => el.classList.toggle('on', el.dataset.lang === lang));
  const sel = document.getElementById('lang');
  if (sel) sel.value = lang;
}

const lang = pick();
apply(lang);
document.getElementById('lang')?.addEventListener('change', e => {
  try { localStorage.setItem('lang', e.target.value); } catch (err) {}
  apply(e.target.value);
});
