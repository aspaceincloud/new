:root{
  --bg: #ffffff;
  --text: #141414;
  --muted: #5c5c5c;
  --gold: #c9a24c;
  --gold2:#b88b2f;
  --card: #ffffff;
  --line: rgba(20,20,20,.12);
  --shadow: 0 18px 60px rgba(0,0,0,.08);
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family:Poppins,system-ui,-apple-system,Segoe UI,Roboto,Arial;
  color:var(--text);
  background:
    radial-gradient(900px 520px at 70% 10%, rgba(201,162,76,.16), transparent 60%),
    radial-gradient(900px 520px at 20% 80%, rgba(0,0,0,.05), transparent 65%),
    var(--bg);
}

a{color:inherit;text-decoration:none}

.container{
  width:min(1100px, 92vw);
  margin:0 auto;
}

.section{
  padding:72px 0;
  border-top:1px solid var(--line);
}

.section.alt{
  background: linear-gradient(180deg, rgba(201,162,76,.08), transparent 55%);
}

.section-title{
  font-family:"Playfair Display", serif;
  font-size:clamp(26px, 3vw, 42px);
  margin:0 0 12px;
  letter-spacing:.3px;
}

.section-desc{
  margin:0;
  max-width:760px;
  color:var(--muted);
  line-height:1.8;
}

.hint{
  color:rgba(20,20,20,.55);
  margin-top:16px;
  font-size:14px;
}

.gold{color:var(--gold)}

/* NAV */
.nav{
  position:sticky;
  top:0;
  z-index:999;
  border-bottom:1px solid var(--line);
  backdrop-filter: blur(12px);
  background: rgba(255,255,255,.78);
}
.nav-inner{
  width:min(1100px, 92vw);
  margin:0 auto;
  padding:14px 0;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
}
.brand{
  font-weight:700;
  letter-spacing:2px;
}
.nav-links{
  display:flex;
  gap:20px;
  font-size:14px;
  color:rgba(20,20,20,.85);
}
.nav-links a:hover{color:var(--gold)}
.nav-btn{
  display:none;
  border:1px solid var(--line);
  background:rgba(255,255,255,.75);
  color:var(--text);
  border-radius:12px;
  padding:8px 10px;
  cursor:pointer;
}

/* Mobile menu */
.mobile-menu{
  display:none;
  width:min(1100px, 92vw);
  margin:0 auto 12px;
  border:1px solid var(--line);
  background:rgba(255,255,255,.88);
  border-radius:14px;
  overflow:hidden;
  box-shadow: var(--shadow);
}
.mobile-menu a{
  display:block;
  padding:14px 16px;
  border-top:1px solid var(--line);
}
.mobile-menu a:first-child{border-top:none}
.mobile-menu a:hover{color:var(--gold)}

/* HERO */
.hero{
  position:relative;
  min-height:92vh;
  display:grid;
  place-items:center;
  overflow:hidden;
  border-bottom:1px solid var(--line);
  background:
    linear-gradient(180deg, rgba(255,255,255,.75), rgba(255,255,255,.9)),
    url("https://images.unsplash.com/photo-1523438097201-512ae7d59b3b?q=80&w=1600&auto=format&fit=crop")
    center/cover no-repeat;
}
.hero-content{
  width:min(980px, 92vw);
  padding:96px 10px 66px;
  text-align:center;
}
.hero-eyebrow{
  color:rgba(20,20,20,.72);
  letter-spacing:5px;
  text-transform:uppercase;
  font-size:12px;
  margin:0 0 14px;
}
.hero-title{
  font-family:"Playfair Display", serif;
  font-size:clamp(38px, 5vw, 68px);
  margin:0 0 12px;
  line-height:1.05;
}
.amp{font-weight:700}
.hero-subtitle{
  margin:0 auto 26px;
  color:rgba(20,20,20,.75);
  max-width:780px;
}
.hero-mini{
  margin:16px auto 0;
  max-width:820px;
  color:rgba(20,20,20,.65);
}

/* Buttons */
.hero-actions{
  display:flex;
  gap:12px;
  justify-content:center;
  flex-wrap:wrap;
  margin-bottom:26px;
}

.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:12px 18px;
  border-radius:16px;
  border:1px solid var(--line);
  transition:.2s ease;
  font-weight:500;
  background: rgba(255,255,255,.7);
}
.btn.primary{
  background: linear-gradient(180deg, rgba(201,162,76,.98), rgba(184,139,47,.92));
  color:#111;
  border:none;
  box-shadow: 0 14px 35px rgba(201,162,76,.22);
}
.btn.primary:hover{transform:translateY(-1px)}
.btn.ghost:hover{border-color:rgba(201,162,76,.6); color:var(--gold2)}
.btn.big{padding:14px 24px; border-radius:18px; font-size:16px}

/* Countdown */
.countdown{
  margin:20px auto 0;
  display:flex;
  justify-content:center;
  gap:10px;
  flex-wrap:wrap;
}
.cd-box{
  width:96px;
  padding:12px 10px;
  border-radius:18px;
  border:1px solid var(--line);
  background:rgba(255,255,255,.75);
  box-shadow: var(--shadow);
}
.cd-box span{
  font-size:26px;
  font-weight:600;
}
.cd-box small{
  display:block;
  color:rgba(20,20,20,.65);
  margin-top:3px;
}

/* Events cards */
.grid{
  display:grid;
  gap:16px;
  margin-top:22px;
}
.grid.events{
  grid-template-columns: repeat(4, 1fr);
}
.card{
  border-radius:22px;
  border:1px solid var(--line);
  background:rgba(255,255,255,.82);
  padding:18px;
  box-shadow: var(--shadow);
}
.card h3{
  margin:0 0 8px;
  font-family:"Playfair Display", serif;
}
.card p{
  margin:0 0 14px;
  color:rgba(20,20,20,.70);
}
.tag{
  display:inline-block;
  font-size:12px;
  padding:6px 10px;
  border-radius:999px;
  background:rgba(201,162,76,.14);
  border:1px solid rgba(201,162,76,.22);
  color:rgba(184,139,47,.95);
}

/* Gallery */
.gallery{
  margin-top:20px;
  display:grid;
  gap:14px;
  grid-template-columns: repeat(3, 1fr);
}
.gallery img{
  width:100%;
  height:250px;
  object-fit:cover;
  border-radius:22px;
  border:1px solid var(--line);
  transition:.25s ease;
  box-shadow: var(--shadow);
}
.gallery img:hover{transform:scale(1.02)}

/* Venue */
.venue-wrap{
  margin-top:22px;
  display:grid;
  grid-template-columns: 1fr 1.2fr;
  gap:16px;
}
.venue-card{
  border-radius:22px;
  border:1px solid var(--line);
  background:rgba(255,255,255,.85);
  padding:20px;
  box-shadow: var(--shadow);
}
.venue-card h3{
  margin:0 0 10px;
  font-family:"Playfair Display", serif;
}
.venue-card p{
  margin:0 0 18px;
  color:rgba(20,20,20,.70);
  line-height:1.7;
}
.venue-actions{display:flex; gap:10px; flex-wrap:wrap}
.venue-map iframe{
  width:100%;
  height:100%;
  min-height:280px;
  border-radius:22px;
  border:1px solid var(--line);
  background:#fff;
  box-shadow: var(--shadow);
}

/* RSVP */
.rsvp{
  margin-top:18px;
  display:flex;
  justify-content:center;
  gap:12px;
  flex-wrap:wrap;
}

/* Footer */
.footer{
  padding:30px 0;
  text-align:center;
  color:rgba(20,20,20,.55);
}

/* Responsive */
@media (max-width: 860px){
  .grid.events{grid-template-columns: repeat(2, 1fr)}
  .gallery{grid-template-columns: repeat(2, 1fr)}
  .venue-wrap{grid-template-columns: 1fr}
}
@media (max-width: 620px){
  .nav-links{display:none}
  .nav-btn{display:inline-flex}
  .gallery{grid-template-columns: 1fr}
  .cd-box{width:80px}
}
