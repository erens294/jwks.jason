/* ================================================================
   SJNAM — KONFIGURASI NEON (RAHASIA — JANGAN DI-COMMIT KE GIT)
   ================================================================
   File ini berisi URL Neon Data API + token akses dan TIDAK boleh
   diupload ke GitHub. WAJIB masuk .gitignore.

   TOKEN INI ROTASI KE-3 (2026-07-03). kid: "sjnam-key-3".
   Menggantikan sjnam-key-2 yang gagal divalidasi Neon Data API
   (error "jwk not found" walau JWKS terbukti benar & signature
   valid — kemungkinan bug di provider slot Neon setelah berkali-kali
   dihapus/ditambah ulang). sjnam-key-1 SUDAH DIANGGAP BOCOR (sempat
   ter-commit ke repo GitHub public) — JANGAN dipakai lagi.
   ================================================================ */
window.SJNAM_CONFIG = {
  NEON_DATA_API_URL: 'https://ep-small-king-aoggycwm.apirest.c-2.ap-southeast-1.aws.neon.tech/neondb/rest/v1',
  NEON_JWT: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNqbmFtLWtleS0zIn0.eyJyb2xlIjoiYW5vbnltb3VzIiwic3ViIjoic2puYW0tYXBwIiwiaWF0IjoxNzgzMDczODgyLCJleHAiOjMzNTk4NzM4ODJ9.MeJqnUXD2jnS7O3iUiKzW-sNs_Ym4HZ-6YIdJC7_CSg1xY2vMGxrHStPIqeu9gFUAD-k5v-uYyxBZen2FBpOoooYcRgQh14wNRuMm9lwhmKCZMVRzPT8jevSWBR39N4q0BbsURacH5K7rVF777pqVrL6MDCvXNsqo5i5cpEx_VCBqdq_LFwDC1Mtt3LLUSUFK9Bu-tVNc9vtKrjOS5DBwpYLmMfQqR_pH1SofPuhzBebRYCoqEhano5xh0l6XH2QrMGO_YDgqg4mrSeLFWfTNB0wXnm0SLaP6AJK6blxByGzrsbpJtRo_d8wsjDJk1Wv2tQVvmQnm8jNUqn63T_RVA'
};
