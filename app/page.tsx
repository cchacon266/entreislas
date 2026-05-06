import Image from "next/image";

/* ═══════════════════════════════════════════════════════════════════════════
   ENTRE ISLAS DOWNTOWN COZUMEL — Pixel-perfect visual landing
   Palette: cream #EDE8DC · teal #1E5060 · body #6b6256 · footer #9B9389
═══════════════════════════════════════════════════════════════════════════ */

const CREAM  = "#EDE8DC";
const CREAM2 = "#E5DFD1";
const TEAL   = "#1E5060";
const BODY   = "#6b6256";
const DARK   = "#2C251A";
const FOOTER = "#9B9389";

export default function Page() {
  return (
    <main>

      {/* ─────────────────────────────────────────────────────────────────
          1 · HERO — full-bleed aerial, dark overlay, white text
      ───────────────────────────────────────────────────────────────── */}
      <section className="relative w-full" style={{ height: "100vh", minHeight: 600 }}>
        <Image src="/images/hero-cozumel-aerial.jpg" alt="Cozumel" fill style={{ objectFit:"cover", objectPosition:"center" }} priority />
        <div className="absolute inset-0" style={{ background:"linear-gradient(to bottom,rgba(20,14,6,0.55) 0%,rgba(20,14,6,0.18) 45%,rgba(20,14,6,0.52) 100%)" }} />

        {/* Nav */}
        <nav className="absolute top-0 left-0 right-0 z-20 px-8 lg:px-10"
          style={{ display:"grid", gridTemplateColumns:"1fr auto 1fr", alignItems:"flex-end", paddingTop:"1.6rem", paddingBottom:"1rem" }}>

          {/* Logo — left, aligned to baseline */}
          <div style={{ display:"flex", flexDirection:"column", lineHeight:1.15, paddingBottom:"0.15rem" }}>
            <span style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:500, fontSize:"1.15rem", letterSpacing:"0.24em", textTransform:"uppercase", color:"#fff" }}>
              ENTRE ISLAS
            </span>
            <span style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:400, fontSize:"0.5rem", letterSpacing:"0.28em", textTransform:"uppercase", color:"rgba(255,255,255,0.75)", marginTop:"0.2rem" }}>
              Downtown Cozumel
            </span>
          </div>

          {/* Links — centered, bigger */}
          <div className="hidden lg:flex items-end gap-9" style={{ paddingBottom:"0.15rem" }}>
            {["Conoce Cozumel","Concierge","Amenidades","Ubicación","Trayectoria","Blog"].map(l=>(
              <a key={l} href="#" style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:400, fontSize:"0.82rem", letterSpacing:"0.06em", color:"#fff", whiteSpace:"nowrap" }}>{l}</a>
            ))}
          </div>

          {/* CTA — right, sits lower */}
          <div style={{ display:"flex", justifyContent:"flex-end", alignItems:"flex-end", paddingRight:"1.5rem" }}>
            <a href="#" style={{
              fontFamily:"'Montserrat',sans-serif",
              fontWeight:400,
              fontSize:"0.65rem",
              letterSpacing:"0.16em",
              textTransform:"uppercase",
              color:"#fff",
              border:"1px solid rgba(255,255,255,0.75)",
              padding:"0.6rem 1.5rem",
              background:"transparent",
              marginBottom:"0.15rem",
            }}>
              Recibir información
            </a>
          </div>
        </nav>

        {/* Hero copy — centered */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          {/* Small icon */}
          <svg width="28" height="36" viewBox="0 0 28 36" fill="none" style={{ marginBottom:"1.4rem", opacity:0.85 }}>
            <rect x="12" y="0" width="4" height="18" fill="white"/>
            <rect x="6" y="18" width="16" height="3" fill="white"/>
            <rect x="8" y="21" width="12" height="12" fill="white"/>
            <rect x="10" y="33" width="8" height="3" fill="white"/>
          </svg>
          <h1 className="h-xl" style={{ color:"#fff", maxWidth:780 }}>
            Tu <em>hogar vacacional,</em> es una isla que
            <br />se siente <em>como el paraíso.</em>
          </h1>
          <div style={{ width:1, height:36, background:"rgba(255,255,255,0.4)", margin:"1.8rem auto" }} />
          <a href="#" className="btn btn-white">Descubre Entre Islas</a>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          2 · MISIÓN / VISIÓN
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ background: CREAM, padding:"6rem 2rem" }}>
        <div style={{ maxWidth:780, margin:"0 auto", textAlign:"center" }}>
          <h2 className="h-lg" style={{ marginBottom:"2.5rem" }}>Tu lugar en Cozumel, todos los años.</h2>
          <p className="body" style={{ marginBottom:"1rem" }}>
            En Cozumel el tiempo se detiene. El mero hecho de llegar representa un ritual único.
          </p>
          <p className="body" style={{ marginBottom:"1rem" }}>
            La brisa del océano en el ferry para llegar, el espíritu libre de las personas al caminar por el downtown,
            las tiendas de marcas conocidas y restaurantes con conceptos diseñados para disfrutar, los escenarios naturales
            que imponen un tipo de sensación en ti…
          </p>
          <p className="body" style={{ marginBottom:"0.5rem" }}>que te hace sentir afortunado por el simple hecho de estar vivo.</p>
          <p className="body" style={{ marginBottom:"0.5rem" }}>Eso es Cozumel. Y tener un segundo hogar aquí, podría cambiar tu vida y la de los tuyos.</p>
          <p className="body" style={{ marginBottom:"4rem" }}>Esa es nuestra razón de existir.</p>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem", textAlign:"left", marginBottom:"4rem" }}>
            {[
              { title:"Nuestra Misión", body:"Ayudar a las personas a vivir los paraísos que ofrecen las islas del mundo, desde la comodidad de un segundo hogar." },
              { title:"Nuestra Visión", body:"Que adquirir una segunda propiedad se vuelva una forma natural de disfrutar la vida, para todos.\nTransformar la idea de propiedad en una experiencia recurrente." },
            ].map(({ title, body })=>(
              <div key={title}>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:"1rem", color:TEAL, marginBottom:"0.8rem" }}>{title}</p>
                <p className="body" style={{ whiteSpace:"pre-line" }}>{body}</p>
              </div>
            ))}
          </div>

          <div style={{ borderTop:`1px solid rgba(44,37,26,0.12)`, paddingTop:"1.8rem", display:"flex", justifyContent:"center", gap:"3rem", flexWrap:"wrap" }}>
            {["EXPERIENCIAS","DESTINOS","CONOCE ENTRE ISLAS","SOY SOCIO"].map(l=>(
              <a key={l} href="#" className="label" style={{ color:BODY, opacity:0.7 }}>{l}</a>
            ))}
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          3 · FORMULARIO VISUAL
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:640 }}>
        {/* Left — cream form */}
        <div style={{ background: CREAM2, padding:"5rem 4rem 5rem 5rem", display:"flex", flexDirection:"column", justifyContent:"center" }}>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:400, fontSize:"clamp(1.6rem,3vw,2.4rem)", lineHeight:1.25, color:DARK, marginBottom:"0.6rem" }}>
            Vacaciones aseguradas, cada año,<br />
            en familia, en tu isla. Descubre cómo<br />
            puedes dejar un legado patrimonial,<br />
            mientras alcanzas plenitud en tu vida.
          </h2>
          <div style={{ width:28, height:1, background:TEAL, margin:"1.6rem 0" }} />

          {/* Field group */}
          <p className="label" style={{ color:TEAL, marginBottom:"1.4rem" }}>Info</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0 2rem" }}>
            <FF label="tu nombre / apellido" />
            <FF label="número" />
          </div>
          <p className="label" style={{ color:TEAL, margin:"1.2rem 0 0.6rem" }}>Email</p>
          <FF label="tu dirección de correo" />
          <FF label="Charlemos, ¿por qué te interesa saber sobre este proyecto?" mt />
          <div style={{ display:"flex", gap:"2rem", margin:"1rem 0" }}>
            {["2 habitaciones / Penthouse / Spa","Otro"].map(o=>(
              <span key={o} className="body" style={{ fontSize:"0.72rem" }}>{o}</span>
            ))}
          </div>
          <FF label="tu mensaje" tall />
          <div style={{ marginTop:"1.8rem" }}>
            <button className="btn btn-dark">Enviar</button>
          </div>
        </div>

        {/* Right — 2 images stacked */}
        <div style={{ display:"grid", gridTemplateRows:"1fr 1fr" }}>
          <div style={{ position:"relative" }}>
            <Image src="/images/beach-chairs.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
          <div style={{ position:"relative" }}>
            <Image src="/images/ocean-detail.jpg" alt="" fill style={{ objectFit:"cover" }} />
            <div style={{ position:"absolute", bottom:20, right:20 }}>
              <a href="#" className="btn btn-white">Conocer el proyecto</a>
            </div>
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          4 · TEXTO EMOCIONAL
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ background: CREAM, padding:"6rem 2rem" }}>
        <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center" }}>
          <p className="body" style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.3rem,2.5vw,1.9rem)", fontWeight:400, lineHeight:1.5, color:DARK, marginBottom:"2.5rem" }}>
            No prometemos rendimientos. Ofrecemos algo mucho más valioso.<br />
            Sonrisas, memorias y sensaciones.<br />
            Todos los años, en tu segunda propiedad vacacional, para siempre...
          </p>
          <p className="body" style={{ marginBottom:"0.6rem" }}>Piensa en ti como un explorador.</p>
          <p className="body" style={{ marginBottom:"0.6rem" }}>Vas por cielo, mar y tierra. Buscas lo mejor y no te detienes hasta encontrarlo.</p>
          <p className="body" style={{ marginBottom:"0.6rem" }}>Conquistadores y piratas intentaron adueñarse de Cozumel en el pasado…</p>
          <p className="body" style={{ marginBottom:"0.6rem" }}>y no puedo culparlos.</p>
          <p className="body" style={{ fontStyle:"italic", marginBottom:"2rem" }}>¿Quién no quisiera tener todo ese paraíso?</p>
          <p className="body" style={{ marginBottom:"0.4rem" }}>Hoy no tienes que ser pirata, ni marinero, ni explorador.</p>
          <p className="body">Hoy, desde la comodidad de tu oficina o tu casa, puedes cambiar el resto de tu vida.</p>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          5 · FULLSCREEN ISLAND
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ position:"relative", width:"100%", height:"90vh", minHeight:520 }}>
        <Image src="/images/palm-aerial.jpg" alt="" fill style={{ objectFit:"cover", objectPosition:"center" }} />
        {/* Small faro icon centered */}
        <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <svg width="32" height="44" viewBox="0 0 32 44" fill="none">
            <rect x="14" y="0" width="4" height="22" fill="white" opacity="0.9"/>
            <rect x="7" y="22" width="18" height="3" fill="white" opacity="0.9"/>
            <rect x="9" y="25" width="14" height="16" fill="white" opacity="0.9"/>
            <rect x="11" y="41" width="10" height="3" fill="white" opacity="0.9"/>
          </svg>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          6 · INTRO ENTRE ISLAS + 3-IMAGE COLLAGE
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ background: CREAM }}>
        <div style={{ padding:"5rem 2rem 3rem", textAlign:"center" }}>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:"clamp(1.2rem,2.3vw,1.7rem)", lineHeight:1.7, color:DARK }}>
            ENTRE ISLAS es esa luz que ves desde el oceano…<br />
            ese faro que representa un puerto seguro.<br />
            Esa sensación de que ya casi estás en casa.<br />
            Y por casa, nos referimos a esto:
          </p>
        </div>
        {/* Three images — interior | hotel (2x wide) | lighthouse */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 2fr 1fr", height:420 }}>
          <div style={{ position:"relative" }}>
            <Image src="/images/interior-living.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
          <div style={{ position:"relative" }}>
            <Image src="/images/hotel-facade.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
          <div style={{ position:"relative" }}>
            <Image src="/images/lighthouse.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          7 · HOTEL BOUTIQUE
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ background: CREAM }}>
        {/* Same 3-image collage at top — continuation of scroll */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 2fr 1fr", height:320 }}>
          <div style={{ position:"relative" }}>
            <Image src="/images/interior-living.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
          <div style={{ position:"relative" }}>
            {/* FOTO IMPRESIONANTE placeholder */}
            <Image src="/images/hotel-facade.jpg" alt="" fill style={{ objectFit:"cover" }} />
            <div style={{ position:"absolute", inset:0, background:"rgba(44,37,26,0.35)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <div style={{ textAlign:"center" }}>
                <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"0.55rem", letterSpacing:"0.3em", textTransform:"uppercase", color:"rgba(255,255,255,0.7)", marginBottom:"0.4rem" }}>FOTO IMPRESIONANTE</p>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.6rem", fontWeight:400, color:"rgba(255,255,255,0.55)", letterSpacing:"0.2em" }}>DE LA FACHADA</p>
              </div>
            </div>
          </div>
          <div style={{ position:"relative" }}>
            <Image src="/images/lighthouse.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
        </div>

        <div style={{ padding:"4rem 2rem 5rem", maxWidth:680, margin:"0 auto", textAlign:"center" }}>
          <p className="body" style={{ marginBottom:"0.7rem" }}>Un hotel de categoría boutique, justo en el corazón de Cozumel.</p>
          <p className="body" style={{ marginBottom:"0.7rem" }}>Rodeado de vida, de arte y de colores. Con gimnasio, spa, infinity pool y un rooftop con vistas magníficas hacia el mar caribe.</p>
          <p className="body" style={{ marginBottom:"0.7rem" }}>Eso es llegar a tu casa en Cozumel. Es llegar a tu hotel.</p>
          <p className="body" style={{ marginBottom:"0.7rem" }}>Un hotel que tus hijos disfrutarán al crecer. Un hotel para recibir a la familia en navidad.</p>
          <p className="body">Un hotel para explorar la isla y para explorar la vida.</p>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          8 · PROPIEDAD FRACCIONAL
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ background: CREAM2, padding:"6rem 2rem" }}>
        <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center" }}>
          <h2 className="h-lg" style={{ marginBottom:"2rem" }}>
            Dos semanas (por lo menos) que pueden cambiar tu vida.
          </h2>
          <p className="body" style={{ marginBottom:"0.7rem" }}>Sé dueño de una fracción del hotel, respaldado por un fideicomiso que asegura tu patrimonio.</p>
          <p className="body" style={{ marginBottom:"0.7rem" }}>Tu departamento, con tu gimnasio, spa, sauna, rooftop y piscina. En tu isla, rodeado de mil actividades.</p>
          <p className="body" style={{ marginBottom:"2.5rem" }}>Todo por una fracción del precio, para disfrutar dos semanas al año.</p>
          <div style={{ display:"flex", justifyContent:"center", gap:"1.2rem", flexWrap:"wrap", marginBottom:"2rem" }}>
            <a href="#" className="btn btn-dark">Conocer más</a>
            <a href="#" className="btn btn-teal">AGENDAR UNA CITA CON FUNDADOR</a>
          </div>
          <p className="body" style={{ fontSize:"0.73rem", marginTop:"1rem" }}>
            No sera una cita con un asesor cualquiera que te va a estar molestando cada 2 días…<br />
            sino con nuestro socio fundador.
          </p>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          9 · AMENIDADES
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ background: CREAM, padding:"5rem 2rem 6rem" }}>
        <div style={{ maxWidth:760, margin:"0 auto", textAlign:"center" }}>
          <p className="body" style={{ marginBottom:"0.6rem" }}>Este primer proyecto de la cadena ENTRE ISLAS,</p>
          <p className="body" style={{ marginBottom:"0.6rem" }}>se ubica en el Downtown de Cozumel.</p>
          <p className="body" style={{ marginBottom:"0.6rem" }}>Ofrece departamentos de 1 y 2 recámaras, para 2 y 4 personas.</p>
          <p className="body" style={{ marginBottom:"0.5rem" }}>Está diseñado por una de las mejores firmas de arquitectos en el sureste de México,</p>
          <p className="body" style={{ marginBottom:"3rem" }}>prueba de ello son los espacios sociales que le añaden más comodidades a tu estadía en la isla.</p>

          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:400, fontSize:"clamp(1.8rem,3.5vw,2.8rem)", color:TEAL, marginBottom:"0.8rem" }}>
            Amenidades.
          </h2>
          <p className="label" style={{ color:BODY, marginBottom:"3rem" }}>LOBBY / SPA / GIMNASIO / ETC / INFINITY POOL / MIRADOR</p>

          {/* 6 circles */}
          <div style={{ display:"flex", justifyContent:"center", gap:"2.5rem", flexWrap:"wrap" }}>
            {["LOBBY","SPA","GIMNASIO","ETC","INFINITY POOL","MIRADOR"].map(n=>(
              <div key={n} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"0.7rem" }}>
                <div style={{ width:60, height:60, borderRadius:"50%", border:`1px solid rgba(30,80,96,0.35)` }} />
                <span className="label" style={{ color:BODY, fontSize:"0.52rem" }}>{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          10 · GALERÍA EXPERIENCIAL
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ background: CREAM }}>
        {/* 3 images full width */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 2fr 1fr", height:380 }}>
          <div style={{ position:"relative" }}>
            <Image src="/images/diving.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
          <div style={{ position:"relative" }}>
            <Image src="/images/coffee-balcony.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
          <div style={{ position:"relative" }}>
            <Image src="/images/cozumel-street.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
        </div>
        <div style={{ padding:"3.5rem 2rem", maxWidth:680, margin:"0 auto", textAlign:"center" }}>
          <p className="body" style={{ marginBottom:"0.6rem" }}>Rodeado de todas las cosas que hacen de un viaje, un recuerdo inolvidable.</p>
          <p className="body" style={{ marginBottom:"0.6rem" }}>Restaurantes, tours, artesanías, tiendas de lujo y cientos de personas explorando la isla como tu.</p>
          <p className="body">Si eres más de ver, que de leer… <a href="#" style={{ textDecoration:"underline", color:DARK }}>dale click aquí</a></p>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          11 · FARO FULLSCREEN
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ position:"relative", width:"100%", height:"88vh", minHeight:500 }}>
        <Image src="/images/scuba.jpg" alt="" fill style={{ objectFit:"cover", objectPosition:"center top" }} />
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          12 · TRAYECTORIA
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ background: CREAM, padding:"6rem 2rem" }}>
        <div style={{ maxWidth:760, margin:"0 auto", textAlign:"center" }}>
          <h2 className="h-lg" style={{ marginBottom:"2rem" }}>
            Tenemos experiencia en esta industria.<br />
            Ya hemos transformado la vida de cientos de inversionistas<br />
            y clientes, a través de nuestros 7 proyectos completados y 100% entregados.
          </h2>
          <p className="body" style={{ marginBottom:"0.7rem" }}>Somos un grupo inmobiliario consolidado en el sureste de México (Yucatán y Quintana Roo).</p>
          <p className="body" style={{ marginBottom:"0.7rem" }}>Nuestra trayectoria en el desarrollo inmobiliario es amplia. Con la experiencia que hemos adquirido,</p>
          <p className="body" style={{ marginBottom:"0.7rem" }}>cada proyecto es mejor que el anterior.</p>
          <p className="body" style={{ marginBottom:"0.7rem" }}>En los últimos años, nos hemos dedicado a conocer con profundidad</p>
          <p className="body" style={{ marginBottom:"0.7rem" }}>la industria de la hospitalidad y experiencias.</p>
          <p className="body" style={{ marginBottom:"0.7rem" }}>Entre Islas Downtown Cozumel es nuestra más reciente obra de arte.</p>
          <p className="body">Estaremos muy felices de que puedas conocerla.</p>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          13 · MAPA — circle map left, text right
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ background: CREAM2, display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:400 }}>
        {/* Map — circular crop */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", padding:"4rem" }}>
          <div style={{ position:"relative", width:280, height:280, borderRadius:"50%", overflow:"hidden" }}>
            <Image src="/images/yucatan-map.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
        </div>
        {/* Text */}
        <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", padding:"4rem 4rem 4rem 2rem" }}>
          <h2 className="h-lg" style={{ marginBottom:"0.5rem" }}>Conoce nuestra trayectoria.</h2>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:400, fontSize:"1.3rem", color:TEAL, marginBottom:"2rem" }}>
            Esta es nuestra razón de existir.
          </p>
          <a href="#" className="btn btn-teal" style={{ alignSelf:"flex-start" }}>Conocer el proyecto</a>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          14 · 4 RAZONES — 2 images top, italic text bottom
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ background: CREAM }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", height:380 }}>
          <div style={{ position:"relative" }}>
            <Image src="/images/beach-family.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
          <div style={{ position:"relative" }}>
            <Image src="/images/bed-sand.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
        </div>
        <div style={{ padding:"3.5rem 2rem 4rem", textAlign:"center" }}>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:400, fontSize:"clamp(1.5rem,3vw,2.3rem)", color:DARK, lineHeight:1.4 }}>
            Entre islas downtown Cozumel<br />brilla por estas 4 razones.
          </p>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          15 · RAZÓN 1 — left full image | right: top image + bottom text
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ background: CREAM, display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:560 }}>
        {/* Left — tall image */}
        <div style={{ position:"relative", minHeight:560 }}>
          <Image src="/images/razón1-left.jpg" alt="" fill style={{ objectFit:"cover" }} />
        </div>
        {/* Right — top image + bottom text */}
        <div style={{ display:"grid", gridTemplateRows:"1fr 1fr" }}>
          <div style={{ position:"relative" }}>
            <Image src="/images/razón1-right.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
          <div style={{ padding:"2.5rem 3rem", background: CREAM, display:"flex", flexDirection:"column", justifyContent:"center" }}>
            <p className="body" style={{ fontSize:"0.73rem", marginBottom:"0.5rem" }}>Si fueras dueño de un departamento completo en una isla,</p>
            <p className="body" style={{ fontSize:"0.73rem", marginBottom:"0.5rem" }}>cuantas veces al año viajarías? cuantos días realmente lo</p>
            <p className="body" style={{ fontSize:"0.73rem", marginBottom:"0.5rem" }}>usarías?</p>
            <p className="body" style={{ fontSize:"0.73rem", marginBottom:"1rem" }}>7 días? 10? 14 días? 2 semanas es el tiempo adecuado.</p>
            <p className="body" style={{ fontSize:"0.73rem" }}>Tiempo suficiente para recargar energía y para volver a la vida sin perder el control de nada (incluyendo tus finanzas).</p>
          </div>
        </div>
      </section>

      {/* Razón 1 — text panel below */}
      <section style={{ background: CREAM, padding:"3.5rem 2rem 4rem" }}>
        <div style={{ maxWidth:560, marginLeft:"2rem" }}>
          <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:400, fontSize:"clamp(1.5rem,2.8vw,2.1rem)", color:DARK, marginBottom:"0.5rem" }}>
            Propiedad fraccional:<br />Pagas solo el tiempo que usas
          </h3>
          <div style={{ width:24, height:1, background:TEAL, margin:"1rem 0" }} />
          <p className="body" style={{ marginBottom:"0.6rem" }}>Vacacionar es algo que muy pocos tienen el lujo de hacer.</p>
          <p className="body">Ahora… vacacionar EN UNA ISLA PARADISIACA es algo que ni el 0.001% del mundo puede hacer.</p>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          16 · RAZÓN 2 & 3
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ background: CREAM, display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:520 }}>
        {/* Left: top image + bottom text */}
        <div style={{ display:"grid", gridTemplateRows:"1fr auto" }}>
          <div style={{ position:"relative", minHeight:280 }}>
            <Image src="/images/razón2-left.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
          <div style={{ padding:"2.5rem 3rem", background: CREAM2 }}>
            <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:400, fontSize:"clamp(1.3rem,2.2vw,1.7rem)", color:DARK, marginBottom:"1rem" }}>
              Menor inversión, por más beneficios.<br />Una compra inteligente,
            </h3>
            <p className="body" style={{ marginBottom:"0.4rem" }}>Menos que una propiedad completa</p>
            <p className="body" style={{ marginBottom:"0.4rem" }}>gastos de mantenimiento</p>
            <p className="body">etc etc etc</p>
          </div>
        </div>
        {/* Right: top text + bottom image */}
        <div style={{ display:"grid", gridTemplateRows:"auto 1fr" }}>
          <div style={{ padding:"2.5rem 3rem", background: CREAM }}>
            <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:"clamp(1.3rem,2.2vw,1.7rem)", color:TEAL, marginBottom:"1rem" }}>
              Ubicación de ensueño.
            </h3>
            <p className="body" style={{ marginBottom:"0.7rem" }}>Lo único realmente primordial en el desarrollo inmobiliario es la ubicación. y que mas valiosos que un lugar como una isla que es escasa.</p>
            <p className="body" style={{ marginBottom:"0.7rem" }}>donde la demanda siempre superará a la oferta simple y sencillamente por la geografía. Aún más cuando el 65% de la isla es. Estarás POR SIEMPRE a solo 5 minutos caminando de la ÚNICA LLEGADA A LA ISLA POR FERRY…</p>
            <a href="#" className="btn btn-teal" style={{ marginTop:"1rem" }}>Conocer el proyecto</a>
          </div>
          <div style={{ position:"relative", minHeight:200 }}>
            <Image src="/images/razón2-right.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          17 · RAZÓN 3 (VARIANTE) — Un fin de aventuras
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ background: CREAM2, display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:520 }}>
        <div style={{ display:"grid", gridTemplateRows:"1fr auto" }}>
          <div style={{ position:"relative", minHeight:280 }}>
            <Image src="/images/razón2-left.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
          <div style={{ padding:"2.5rem 3rem", background: CREAM2 }}>
            <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:400, fontSize:"clamp(1.3rem,2.2vw,1.7rem)", color:DARK, marginBottom:"1rem" }}>
              Un fin de aventuras.
            </h3>
            <p className="body" style={{ marginBottom:"0.4rem" }}>Menos que una propiedad completa</p>
            <p className="body" style={{ marginBottom:"0.4rem" }}>gastos de mantenimiento</p>
            <p className="body">etc etc etc</p>
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateRows:"auto 1fr" }}>
          <div style={{ padding:"2.5rem 3rem", background: CREAM2 }}>
            <p className="body" style={{ marginBottom:"0.7rem" }}>Lo único realmente primordial en el desarrollo inmobiliario es la ubicación. y que mas valiosos que un lugar como una isla que es escasa.</p>
            <p className="body" style={{ marginBottom:"0.7rem" }}>donde la demanda siempre superará a la oferta simple y sencillamente por la geografía. Aún más cuando el 65% de la isla es. Estarás POR SIEMPRE a solo 5 minutos caminando de la ÚNICA LLEGADA A LA ISLA POR FERRY…</p>
            <a href="#" className="btn btn-teal" style={{ marginTop:"1rem" }}>Conocer el proyecto</a>
          </div>
          <div style={{ position:"relative", minHeight:200 }}>
            <Image src="/images/razón1-left.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          18 · RAZÓN 4 — Cuzamil / Historia
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:520 }}>
        {/* Left — cream text */}
        <div style={{ background: CREAM, padding:"5rem 4rem", display:"flex", flexDirection:"column", justifyContent:"center" }}>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:"clamp(1.6rem,3vw,2.4rem)", color:TEAL, lineHeight:1.2, marginBottom:"0.5rem" }}>
            Cuzamil. Tierra de golondrinas.
          </h2>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:400, fontSize:"clamp(1rem,1.8vw,1.4rem)", color:DARK, marginBottom:"1.5rem" }}>
            Conoce el origen de la magia de Cozumel.
          </p>
          <p className="body" style={{ marginBottom:"0.6rem" }}>El atractivo internacional de esta isla no solo es debido a sus escenarios naturales, sino también por su cultura y su historia.</p>
          <p className="body" style={{ marginBottom:"0.6rem" }}>Una isla moldeada por la historia global de los últimos 100 años.</p>
          <p className="body" style={{ marginBottom:"2rem" }}>Llegar a Cozumel es viajar en el tiempo.</p>
          <a href="#" className="btn btn-teal" style={{ alignSelf:"flex-start" }}>Conocer el proyecto</a>
        </div>
        {/* Right — full image */}
        <div style={{ position:"relative", minHeight:420 }}>
          <Image src="/images/historia-cozumel.jpg" alt="" fill style={{ objectFit:"cover" }} />
          <div style={{ position:"absolute", bottom:20, right:20 }}>
            <a href="#" className="btn btn-white">Conocer el proyecto</a>
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          19 · ESTILO DE VIDA — 2 images top, text bottom
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ background: CREAM }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", height:340 }}>
          <div style={{ position:"relative" }}>
            <Image src="/images/lifestyle-left.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
          <div style={{ position:"relative" }}>
            <Image src="/images/lifestyle-right.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
        </div>
        <div style={{ padding:"4rem 2rem", maxWidth:600, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:400, fontSize:"clamp(1.8rem,3.5vw,2.8rem)", color:DARK, marginBottom:"2rem" }}>
            Sin complicaciones,<br />Solo disfrutar la vida.
          </h2>
          <p className="body" style={{ marginBottom:"0.6rem" }}>Queremos convertirnos en la opción número uno en Yucatán y</p>
          <p className="body" style={{ marginBottom:"0.6rem" }}>Quintana Roo, elevando el estándar con profesionalismo, trato</p>
          <p className="body" style={{ marginBottom:"0.6rem" }}>personalizado y una obsesión por la calidad. Porque cada desarro-</p>
          <p className="body">llo es también una relación de confianza a largo plazo.</p>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          20 · 15 DÍAS — text top, 2 images bottom
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ background: CREAM2 }}>
        <div style={{ padding:"4rem 2rem 3rem", maxWidth:600, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:400, fontSize:"clamp(1.8rem,3.5vw,2.8rem)", color:DARK, marginBottom:"2rem" }}>
            15 días para vivir en el paraíso.
          </h2>
          <p className="body" style={{ marginBottom:"0.6rem" }}>Queremos convertirnos en la opción número uno en Yucatán y</p>
          <p className="body" style={{ marginBottom:"0.6rem" }}>Quintana Roo, elevando el estándar con profesionalismo, trato</p>
          <p className="body" style={{ marginBottom:"0.6rem" }}>personalizado y una obsesión por la calidad. Porque cada desarro-</p>
          <p className="body">llo es también una relación de confianza a largo plazo.</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", height:340 }}>
          <div style={{ position:"relative" }}>
            <Image src="/images/paraiso-left.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
          <div style={{ position:"relative" }}>
            <Image src="/images/paraiso-right.jpg" alt="" fill style={{ objectFit:"cover" }} />
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          21 · CIERRE EMOCIONAL — nearly empty cream, offset italic text
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ background: CREAM, padding:"8rem 5rem 8rem" }}>
        <div>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:400, fontSize:"clamp(2rem,4.5vw,3.5rem)", color:TEAL, lineHeight:1.3 }}>
            Experiencia de hotel,
          </p>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:400, fontSize:"clamp(2rem,4.5vw,3.5rem)", color:TEAL, lineHeight:1.3, textAlign:"right" }}>
            en tu propia casa...
          </p>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          22 · INVERSIÓN / COZUMEL — two columns with vertical divider
      ───────────────────────────────────────────────────────────────── */}
      <section style={{ background: CREAM2, display:"grid", gridTemplateColumns:"1fr 1px 1fr" }}>
        <div style={{ padding:"5rem 5rem 5rem 4rem" }}>
          <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:400, fontSize:"clamp(1.6rem,2.8vw,2.2rem)", color:TEAL, marginBottom:"1.5rem" }}>
            Cozumel cada año.
          </h3>
          <p className="body" style={{ textAlign:"center" }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nosconsequat. Duis auolore eu feugiat nulla
          </p>
        </div>
        {/* Vertical divider */}
        <div style={{ background:"rgba(44,37,26,0.15)" }} />
        <div style={{ padding:"5rem 4rem 5rem 5rem" }}>
          <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:"clamp(1.6rem,2.8vw,2.2rem)", color:TEAL, marginBottom:"1.5rem" }}>
            Inversión inteligente.
          </h3>
          <p className="body" style={{ textAlign:"center" }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nosconsequat. Duis auolore eu feugiat nulla
          </p>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          23 · FOOTER — warm gray, 3 columns
      ───────────────────────────────────────────────────────────────── */}
      <footer style={{ background: FOOTER, display:"grid", gridTemplateColumns:"1fr 1px 1fr 1px 1fr", padding:"4rem 5rem" }}>
        {/* Logo column */}
        <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", gap:"0.8rem" }}>
          {/* Lighthouse SVG icon */}
          <svg width="44" height="56" viewBox="0 0 44 56" fill="none" style={{ opacity:0.85 }}>
            <rect x="19" y="0" width="6" height="28" fill="white"/>
            <rect x="10" y="28" width="24" height="4" fill="white"/>
            <rect x="12" y="32" width="20" height="20" fill="white"/>
            <rect x="6" y="26" width="4" height="6" fill="white"/>
            <rect x="34" y="26" width="4" height="6" fill="white"/>
            <rect x="14" y="52" width="16" height="4" fill="white"/>
          </svg>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:500, fontSize:"0.95rem", letterSpacing:"0.22em", color:"#fff", textTransform:"uppercase" }}>ENTRE ISLAS</p>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:"0.6rem", letterSpacing:"0.25em", color:"rgba(255,255,255,0.7)", textTransform:"uppercase" }}>Downtown Cozumel</p>
        </div>

        {/* Divider */}
        <div style={{ background:"rgba(255,255,255,0.2)" }} />

        {/* Contact column */}
        <div style={{ padding:"0 3rem", display:"flex", flexDirection:"column", gap:"1.5rem" }}>
          <div>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:400, fontSize:"0.88rem", color:"rgba(255,255,255,0.75)", marginBottom:"0.3rem" }}>Número.</p>
            <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:"0.82rem", color:"#fff" }}>+(52) 9994 999 999</p>
          </div>
          <div>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:400, fontSize:"0.88rem", color:"rgba(255,255,255,0.75)", marginBottom:"0.3rem" }}>Escríbenos.</p>
            <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:"0.82rem", color:"#fff" }}>Cozumel@grupoentreislas.com</p>
          </div>
          <div>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontWeight:400, fontSize:"0.88rem", color:"rgba(255,255,255,0.75)", marginBottom:"0.3rem" }}>Dirección</p>
            <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:"0.82rem", color:"#fff", lineHeight:1.7 }}>Calle 37659 x 856 y 80<br />Downtown Cozumel</p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ background:"rgba(255,255,255,0.2)" }} />

        {/* Nav links */}
        <div style={{ padding:"0 0 0 3rem", display:"flex", flexDirection:"column", justifyContent:"center", gap:"1.1rem" }}>
          {["COZUMEL","NOSOTROS","PROYECTOS","REWARDS","CONTACTO"].map(l=>(
            <a key={l} href="#" style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:400, fontSize:"0.65rem", letterSpacing:"0.2em", color:"#fff", textTransform:"uppercase", opacity:0.85 }}>{l}</a>
          ))}
        </div>
      </footer>

    </main>
  );
}

/* ── Form field helper ─────────────────────────────────────────────────── */
function FF({ label, tall, mt }: { label: string; tall?: boolean; mt?: boolean }) {
  const base: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(44,37,26,0.18)",
    outline: "none",
    fontFamily: "'Montserrat',sans-serif",
    fontWeight: 300,
    fontSize: "0.72rem",
    color: "rgba(44,37,26,0.75)",
    letterSpacing: "0.03em",
    padding: "0.6rem 0",
    marginTop: mt ? "0.8rem" : 0,
    resize: "none",
    display: "block",
  };

  if (tall) {
    return (
      <textarea
        placeholder={label}
        rows={4}
        style={{ ...base, paddingBottom: "0.8rem" }}
      />
    );
  }
  return (
    <input
      type="text"
      placeholder={label}
      style={base}
    />
  );
}
