// Cloudflare Worker · sirve los assets estáticos de dist/
// (el contenido está encriptado por StatiCrypt, así que el worker no necesita hacer nada más)
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
