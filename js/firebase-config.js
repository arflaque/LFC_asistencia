// ================================================================
//  LINCOLN FC — CONFIGURACIÓN FIREBASE
//  Reemplaza los valores de REEMPLAZA_CON_... con los de tu
//  proyecto en Firebase Console → Configuración del proyecto
// ================================================================
const firebaseConfig = {
  apiKey: "AIzaSyDBMQeDonSnAdNBr-2YNXOklBoaS_ccBM8",
  authDomain: "lfc-asistencia.firebaseapp.com",
  projectId: "lfc-asistencia",
  storageBucket: "lfc-asistencia.firebasestorage.app",
  messagingSenderId: "440894606744",
  appId: "1:440894606744:web:7d7cd8742f4a28cc462fed",
  measurementId: "G-JKDYWD1NQG"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db   = firebase.firestore();

// Habilitar persistencia offline
db.enablePersistence({ synchronizeTabs: true }).catch(() => {});
