// Netlify serverless function
// Returns API keys from environment variables — never exposed in GitHub
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/javascript',
      'Access-Control-Allow-Origin': '*',
    },
    body: `
window.SYNAPSE_KEYS = {
  openrouter: '${process.env.OPENROUTER_KEY || ''}',
  gemini: '${process.env.GEMINI_KEY || ''}',
};
    `.trim()
  }
}
