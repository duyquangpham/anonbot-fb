var conf = module.exports = {
  WEBHOOK: "/messenger",
  VERIFY_TOKEN: 'Quang1999',
  PAGE_TOKEN: 'EAAf7VyY35rYBANHsaCribKhz7aH2hkklhh9ZB8V6ZAZCPw5LhBz8tzbuzXY5Gcx0GP73Xy5UsOF0zwydVbjm18q4ZCg1ZAdKxkmakyXQXOFMilBfrEgtilbEP9SKiY0iQ9kQIa95iBFX6v0IwUs6KD9CMTjVrItrodzAZBhOPLoynPhwBmyrCd',
  FB_ENDPOINT_URL: 'https://graph.facebook.com/v2.6/me/messages',
  FB_SETTINGS_URL: 'https://graph.facebook.com/v2.6/me/thread_settings',
  USER_TIMEOUT: 1000 * 60 * 60 * 18,
  ACCEPTED_ATTACHMENT_TYPES: [
    'image',
    'audio',
    'file',
    'video'
  ],
  PORT: 443,
  SSL_CONFIG: {
    KEY: "/etc/letsencrypt/archive/anonbot.gq/privkey1.pem",
    CERT: "/etc/letsencrypt/archive/anonbot.gq/fullchain1.pem",
    CA: "/etc/letsencrypt/archive/anonbot.gq/chain1.pem"
  },
  DB_URL: "mongodb://localhost:27017/anonbot"
};
