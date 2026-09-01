// ================================================================
//  LINCOLN FC — UTILIDADES COMPARTIDAS
// ================================================================

// Protege una página: redirige al login si no hay sesión activa.
// callback recibe el objeto userData del usuario autenticado.
function requireAuth(callback, adminOnly = false) {
  auth.onAuthStateChanged(async (user) => {
    if (!user) { window.location.href = 'index.html'; return; }
    try {
      const snap = await db.collection('usuarios').doc(user.uid).get();
      if (!snap.exists || snap.data().activo === false) {
        await auth.signOut();
        window.location.href = 'index.html';
        return;
      }
      const userData = { uid: user.uid, email: user.email, ...snap.data() };
      if (adminOnly && userData.rol !== 'admin') {
        window.location.href = 'dashboard.html';
        return;
      }
      callback(userData);
    } catch (e) {
      console.error(e);
      window.location.href = 'index.html';
    }
  });
}

function logout() {
  auth.signOut().then(() => { window.location.href = 'index.html'; });
}

// Fecha local hoy en formato YYYY-MM-DD
function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

// 'YYYY-MM-DD' → 'Lunes, 1 de septiembre 2026'
function formatFecha(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  const dias = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  const meses = ['enero','febrero','marzo','abril','mayo','junio',
                 'julio','agosto','septiembre','octubre','noviembre','diciembre'];
  return `${dias[dt.getDay()]}, ${d} de ${meses[m-1]} ${y}`;
}

function showToast(msg, tipo = 'success') {
  const colores = {
    success: 'background:#16a34a',
    error:   'background:#BD202F',
    info:    'background:#193560',
    warning: 'background:#F5BB18;color:#20242A',
  };
  const t = document.createElement('div');
  t.className = 'toast';
  t.setAttribute('style', (colores[tipo] || colores.success));
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 350); }, 2400);
}

// Obtiene equipos activos de Firestore
async function getEquipos() {
  const snap = await db.collection('equipos').where('activo', '==', true).get();
  const rows = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  rows.sort((a, b) => a.nombre.localeCompare(b.nombre));
  return rows;
}

// Obtiene jugadores activos de un equipo
async function getJugadores(equipoId) {
  const snap = await db.collection('equipos').doc(equipoId)
    .collection('jugadores').where('activo', '==', true).get();
  const rows = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  rows.sort((a, b) => a.nombre.localeCompare(b.nombre));
  return rows;
}

// Renderiza el header compartido en un contenedor
function renderHeader(container, userData, titulo = '') {
  container.innerHTML = `
    <header class="bg-lfc-navy border-b border-white/10 px-4 py-3 flex items-center justify-between">
      <a href="dashboard.html" class="flex items-center gap-2 no-underline">
        <div class="w-8 h-8 rounded bg-lfc-red flex items-center justify-center shrink-0">
          <span class="text-white font-barlow font-bold text-sm leading-none">LFC</span>
        </div>
        <span class="text-white font-barlow font-bold text-lg tracking-wide leading-none">${titulo || 'Lincoln FC'}</span>
      </a>
      <div class="flex items-center gap-3">
        <span class="text-lfc-slate text-xs hidden sm:inline">${userData.nombre || userData.email}</span>
        <button onclick="logout()"
          class="text-lfc-slate hover:text-white text-xs font-semibold uppercase tracking-wider transition">
          Salir
        </button>
      </div>
    </header>`;
}
