import { useState, useEffect } from "react";

const SENHA_CORRETA = "me2026";

function TelaSenha({ onEntrar }) {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);

  const tentar = () => {
    if (senha === SENHA_CORRETA) {
      onEntrar();
    } else {
      setErro(true);
      setSenha("");
      setTimeout(() => setErro(false), 2000);
    }
  };

  return (
    <div style={{ minHeight:"100vh", background:"#F4EFE7", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"2rem", fontFamily:"Georgia,serif" }}>
      <div style={{ maxWidth:380, width:"100%", textAlign:"center" }}>
        <svg width="160" height="40" viewBox="0 0 230 40" fill="none" style={{ marginBottom:"0.5rem" }}>
          <text x="0" y="35" fontFamily="Georgia,serif" fontSize="40" fontWeight="bold" fill="#444C3E" letterSpacing="-2">ME</text>
          <line x1="82" y1="5" x2="82" y2="37" stroke="#AC6A37" strokeWidth="1.5"/>
          <text x="89" y="18" fontFamily="Georgia,serif" fontSize="12.5" fill="#AC6A37">Conteúdos</text>
          <text x="89" y="34" fontFamily="Georgia,serif" fontSize="12.5" fill="#AC6A37">&amp; Estratégias</text>
        </svg>
        <div style={{ width:40, height:2, background:"#AC6A37", margin:"1rem auto 2rem" }}/>
        <p style={{ color:"#784024", fontSize:"0.95rem", marginBottom:"2rem", lineHeight:1.7 }}>
          Área exclusiva para clientes.<br/>Digite a senha para acessar.
        </p>
        <input
          type="password"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          onKeyDown={e => e.key === "Enter" && tentar()}
          placeholder="Digite a senha..."
          style={{ width:"100%", background:"#fff", border:`1.5px solid ${erro ? "#784024" : "#EAE2D6"}`, borderRadius:"12px", padding:"1rem", color:"#342C1E", fontSize:"1rem", outline:"none", boxSizing:"border-box", fontFamily:"Georgia,serif", textAlign:"center", marginBottom:"0.8rem", transition:"border 0.2s" }}
        />
        {erro && <p style={{ color:"#784024", fontSize:"0.85rem", marginBottom:"0.8rem" }}>Senha incorreta. Tente novamente.</p>}
        <button onClick={tentar}
          style={{ background:"#444C3E", color:"#F4EFE7", border:"none", padding:"1rem", borderRadius:"50px", fontSize:"1rem", fontWeight:"bold", cursor:"pointer", width:"100%", boxShadow:"0 6px 24px #444C3E44" }}>
          Entrar →
        </button>
      </div>
    </div>
  );
}

const C = {
  creme: "#F4EFE7",
  cremeEscuro: "#EAE2D6",
  verde: "#444C3E",
  cobre: "#AC6A37",
  marrom: "#784024",
  escuro: "#342C1E",
};

const SCREENS = {
  HOME:"home", FEAR:"fear", RESULT:"result",
  OBJECTIVE:"objective", PREP:"prep", SCRIPT:"script",
  BREATHE:"breathe", DONE:"done",
};

const fears = [
  { id:"camera",  emoji:"📷", label:"Travo na frente da câmera" },
  { id:"voice",   emoji:"🗣️", label:"Não gosto da minha voz" },
  { id:"compare", emoji:"👀", label:"Me comparo com outros profissionais" },
  { id:"sell",    emoji:"💬", label:"Parece que estou me \"vendendo\"" },
  { id:"look",    emoji:"🪞", label:"Não me sinto à vontade na câmera" },
  { id:"blank",   emoji:"🧠", label:"Bate um branco e esqueço o que ia falar" },
];

const fearLabels = {
  camera:"trava na câmera",
  voice:"não gosta da própria voz",
  compare:"se compara com outros",
  sell:"tem medo de parecer que está se vendendo",
  look:"não se sente à vontade na câmera",
  blank:"bate um branco e esquece o que ia falar",
};

const fearResponses = {
  camera:  { title:"Travar é mais comum do que parece",           msg:"Profissionais de saúde estão acostumados a falar com o paciente na frente deles — não para uma câmera. Isso não é bloqueio, é adaptação. Com estrutura e prática, some.",                                                                action:"Vamos estruturar o que você vai falar antes de ligar a câmera." },
  voice:   { title:"Sua voz é parte da sua credibilidade",        msg:"A voz que seus pacientes confiam é exatamente essa. Quem te ouve no consultório vai reconhecer a mesma segurança no vídeo.",                                                                                                               action:"Vamos trabalhar a segurança no conteúdo — não na voz." },
  compare: { title:"Você não compete com criadores — você atende",msg:"Conteúdo de saúde não precisa ser viral. Precisa ser claro, verdadeiro e útil para quem já está te buscando. Isso você já sabe fazer.",                                                                                                   action:"Vamos focar no que você realmente quer comunicar." },
  sell:    { title:"Conteúdo de saúde não é propaganda",          msg:"Compartilhar o que você sabe não é se vender. É educação. Seu paciente chega mais preparado, a consulta rende mais, e a confiança já está construída antes do primeiro atendimento.",                                                     action:"Vamos montar um roteiro sem nenhum tom comercial." },
  look:    { title:"Presença não é aparência",                    msg:"O que prende atenção no conteúdo de saúde é clareza e relevância — não produção perfeita. Seus pacientes querem te ouvir, não te avaliar.",                                                                                               action:"Vamos criar um roteiro que te deixa confortável." },
  blank:   { title:"Branco é falta de estrutura, não de saber",   msg:"Você tem anos de formação e prática. O que falta é um fio condutor simples para organizar o que já está na sua cabeça antes de gravar.",                                                                                                  action:"Vamos montar esse fio condutor agora." },
};

const objectives = [
  { id:"ensinar",      emoji:"📚", label:"Ensinar",      desc:"Explicar algo que o paciente não entende de forma simples",      color:C.verde  },
  { id:"reposicionar", emoji:"🔄", label:"Reposicionar", desc:"Corrigir uma crença errada ou mito comum na sua área",           color:C.marrom },
  { id:"conectar",     emoji:"🤝", label:"Conectar",     desc:"Mostrar que você entende o que o paciente vive",                 color:C.cobre  },
];

const breatheSteps = [
  { label:"Inspire", duration:4, color:C.verde  },
  { label:"Segure",  duration:4, color:C.cobre  },
  { label:"Expire",  duration:6, color:C.marrom },
];

// ── Perguntas por objetivo ────────────────────────────────────────────────────
const PREPS = {
  ensinar:[
    { q:"Quem é o seu paciente? O que ele costuma não entender?",         ph:"Ex: pacientes com dor crônica que acham que repouso é sempre a solução" },
    { q:"Qual é a dúvida que você mais vê no consultório sobre esse tema?",ph:"Ex: confundem inflamação com infecção e param o tratamento cedo" },
    { q:"O que o paciente vai entender depois de assistir?",              ph:"Ex: que inflamação é parte do processo de cura, não sinal de piora" },
  ],
  reposicionar:[
    { q:"Quem é o seu paciente?",                                          ph:"Ex: pessoas que estão começando a cuidar da alimentação" },
    { q:"Qual crença errada ou mito você mais vê na sua prática?",        ph:"Ex: que cortar carboidrato é a única forma de emagrecer" },
    { q:"Qual é a perspectiva correta, na sua experiência clínica?",      ph:"Ex: o problema quase nunca é o carboidrato em si, mas o padrão alimentar como um todo" },
  ],
  conectar:[
    { q:"Quem é o seu paciente?",                                          ph:"Ex: mães que cuidam de tudo e esquecem da própria saúde" },
    { q:"Qual situação do dia a dia ele enfrenta?",                        ph:"Ex: adia a consulta porque sente que não tem tempo" },
    { q:"O que ele sente por dentro, mas raramente fala?",                ph:"Ex: culpa por não se cuidar, mas não sabe por onde começar" },
  ],
};

// ── Fallbacks reais por objetivo (usados quando API falha) ───────────────────
const FALLBACKS = {
  ensinar: (a,b,c) => `**Abertura**
${a.split(" ").slice(0,5).join(" ")}... Uma dúvida que aparece muito aqui no consultório é: ${b.toLowerCase().replace(/\.$/, "")}.

**Explicação**
${c}. Não é tão simples quanto parece nos textos que circulam — e faz diferença entender isso para o seu tratamento funcionar de verdade.

**Fechamento**
Se você tem essa dúvida, faz sentido trazer ela na sua próxima consulta. Cada caso é diferente, mas o primeiro passo é entender o que está acontecendo no seu corpo.`,

  reposicionar: (a,b,c) => `**Reconhecer**
${a.split(" ").slice(0,5).join(" ")}... Faz todo sentido acreditar que ${b.toLowerCase().replace(/\.$/, "")}. A gente ouve isso em todo lugar.

**Reposicionar**
Na prática clínica, o que mais vejo é que ${c.toLowerCase().replace(/\.$/, "")}. Não porque a informação anterior esteja completamente errada — mas porque ela é incompleta.

**Orientar**
Antes de mudar qualquer coisa por conta própria, vale conversar com seu profissional de saúde. O contexto do seu caso muda tudo.`,

  conectar: (a,b,c) => `**Reconhecer**
${a.split(" ").slice(0,5).join(" ")}... ${b}. Isso é mais comum do que parece — e ninguém fala muito sobre isso.

**Validar**
${c.replace(/\.$/, "")}. Faz sentido sentir isso. Não é frescura, não é falta de vontade — é o peso real de quem vive essa situação todo dia.

**Aproximar**
O próximo passo não precisa ser grande. Às vezes é só nomear o que está acontecendo e entender que você não precisa resolver tudo sozinho.`,
};

// ── Prompt para a API (combina medo + objetivo) ───────────────────────────────
function buildPrompt(fearId, objId, answers) {
  const fearCtx = fearLabels[fearId] || "tem dificuldade de aparecer em vídeo";
  const [a, b, c] = answers;

  const baseRules = `
CONTEXTO DO PROFISSIONAL: Esta pessoa ${fearCtx}. Leve isso em conta no tom — o roteiro deve parecer natural de falar, não difícil de memorizar.

REGRAS ABSOLUTAS:
- Tom: humano, direto, como se estivesse falando no consultório
- PROIBIDO: promessas de resultado, frases como "transforme sua vida", "você merece", "não perca essa chance", CTAs de venda, linguagem de coach ou marketing
- Frases curtas. Máximo 7 frases no total.
- Cada bloco tem título em **negrito** e 1–2 frases de conteúdo
- O roteiro deve soar real quando falado em voz alta`;

  if (objId === "ensinar") return `Crie um roteiro de vídeo curto para um profissional de saúde com objetivo de ENSINAR.
Público: ${a}
Dúvida comum que aparece no consultório: ${b}
O que o paciente vai entender: ${c}
${baseRules}
Estrutura: **Abertura** (identificar a dúvida), **Explicação** (ensinar de verdade, sem jargão), **Fechamento** (o que o paciente pode fazer com essa informação — sem call to action de venda)`;

  if (objId === "reposicionar") return `Crie um roteiro de vídeo curto para um profissional de saúde com objetivo de REPOSICIONAR uma crença errada.
Público: ${a}
Mito ou crença equivocada: ${b}
Perspectiva correta (baseada na prática clínica): ${c}
${baseRules}
Estrutura: **Reconhecer** (validar de onde vem a crença, sem atacar), **Reposicionar** (apresentar a perspectiva correta com base na experiência clínica, sem afirmações absolutas), **Orientar** (próximo passo simples e real)`;

  if (objId === "conectar") return `Crie um roteiro de vídeo curto para um profissional de saúde com objetivo de CONECTAR com seu paciente.
Público: ${a}
Situação que o paciente vive: ${b}
O que ele sente mas raramente fala: ${c}
${baseRules}
Estrutura: **Reconhecer** (nomear a situação sem dramatizar), **Validar** (mostrar que faz sentido sentir isso — sem frases motivacionais), **Aproximar** (próximo passo concreto e humano, sem pressionar)`;

  return "";
}

// ── Logo ─────────────────────────────────────────────────────────────────────
function BrandLogo({ height = 40 }) {
  const sc = height / 40;
  return (
    <svg width={230 * sc} height={height} viewBox="0 0 230 40" fill="none">
      <text x="0" y="35" fontFamily="Georgia,serif" fontSize="40" fontWeight="bold" fill={C.verde} letterSpacing="-2">ME</text>
      <line x1="82" y1="5" x2="82" y2="37" stroke={C.cobre} strokeWidth="1.5"/>
      <text x="89" y="18" fontFamily="Georgia,serif" fontSize="12.5" fill={C.cobre}>Conteúdos</text>
      <text x="89" y="34" fontFamily="Georgia,serif" fontSize="12.5" fill={C.cobre}>&amp; Estratégias</text>
    </svg>
  );
}

// ── Respiração ────────────────────────────────────────────────────────────────
function BreathingExercise({ onDone }) {
  const [phase, setPhase] = useState(0);
  const [count, setCount] = useState(breatheSteps[0].duration);
  const [round, setRound] = useState(1);
  const [sz, setSz] = useState(120);

  useEffect(() => {
    if (round > 3) { setTimeout(onDone, 800); return; }
    const id = setInterval(() => {
      setCount(c => {
        if (c <= 1) {
          setPhase(p => {
            const nx = (p + 1) % breatheSteps.length;
            if (nx === 0) setRound(r => r + 1);
            setSz(nx === 0 ? 120 : nx === 1 ? 158 : 88);
            return nx;
          });
          return breatheSteps[(phase + 1) % breatheSteps.length].duration;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [phase, round]);

  const step = breatheSteps[phase];
  return (
    <div style={{ minHeight:"100vh", background:C.creme, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"2rem", fontFamily:"Georgia,serif" }}>
      <BrandLogo height={32}/>
      <p style={{ color:C.cobre, fontSize:"0.85rem", fontStyle:"italic", marginTop:"0.8rem", marginBottom:"2.5rem", textAlign:"center" }}>Respira antes de aparecer</p>
      <div style={{ width:sz, height:sz, borderRadius:"50%", background:`${step.color}18`, border:`3px solid ${step.color}`, display:"flex", alignItems:"center", justifyContent:"center", transition:"all 1s ease", boxShadow:`0 0 50px ${step.color}30`, marginBottom:"2.5rem" }}>
        <span style={{ color:step.color, fontSize:"2.2rem", fontWeight:"bold" }}>{count}</span>
      </div>
      <p style={{ color:step.color, fontSize:"1.5rem", fontWeight:"bold" }}>{step.label}</p>
      <p style={{ color:"#9a8f84", fontSize:"0.82rem", marginTop:"0.4rem" }}>{phase===0?"pelo nariz":phase===1?"com calma":"pela boca"}</p>
      <p style={{ color:C.cobre, fontSize:"0.8rem", marginTop:"2rem" }}>Rodada {Math.min(round,3)} de 3</p>
      <div style={{ display:"flex", gap:"0.5rem", marginTop:"1rem" }}>
        {[1,2,3].map(r => <div key={r} style={{ width:8, height:8, borderRadius:"50%", background:r<=round?C.verde:C.cremeEscuro, transition:"background 0.3s" }}/>)}
      </div>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [liberado, setLiberado] = useState(() => { try { return sessionStorage.getItem("me_acesso") === "ok"; } catch { return false; } });
  const [screen,      setScreen]      = useState(SCREENS.HOME);
  const [selectedFear,setSelectedFear]= useState(null);
  const [selectedObj, setSelectedObj] = useState(null);
  const [answers,     setAnswers]     = useState(["","",""]);
  const [currentQ,    setCurrentQ]    = useState(0);
  const [script,      setScript]      = useState("");
  const [loading,     setLoading]     = useState(false);
  const [apiError,    setApiError]    = useState(false);

  if (!liberado) return <TelaSenha onEntrar={() => { try { sessionStorage.setItem("me_acesso","ok"); } catch {} setLiberado(true); }} />;

  const preps = selectedObj ? PREPS[selectedObj] : [];
  const objInfo = objectives.find(o => o.id === selectedObj);

  const generateScript = async () => {
    setLoading(true);
    setApiError(false);
    setScreen(SCREENS.SCRIPT);
    const prompt = buildPrompt(selectedFear, selectedObj, answers);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          model:"claude-sonnet-4-20250514",
          max_tokens:700,
          messages:[{ role:"user", content:prompt }],
        }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      const text = data.content?.find(b => b.type==="text")?.text || "";
      if (!text) throw new Error("empty");
      setScript(text);
    } catch {
      setApiError(true);
      const fb = FALLBACKS[selectedObj];
      setScript(fb ? fb(answers[0], answers[1], answers[2]) : "");
    }
    setLoading(false);
  };

  const renderScript = text =>
    text.split("\n").map((line, i) => {
      const html = line.replace(/\*\*(.*?)\*\*/g, (_, m) => `<strong style="color:${C.verde};font-size:1.05rem">${m}</strong>`);
      return <p key={i} dangerouslySetInnerHTML={{ __html:html }} style={{ margin:"0.5rem 0", lineHeight:1.9, color:C.escuro }}/>;
    });

  const base = { fontFamily:"Georgia,serif", maxWidth:420, margin:"0 auto" };

  const reset = () => {
    setScreen(SCREENS.HOME); setSelectedFear(null); setSelectedObj(null);
    setAnswers(["","",""]); setCurrentQ(0); setScript(""); setApiError(false);
  };

  const resetToObj = () => {
    setScreen(SCREENS.OBJECTIVE); setSelectedObj(null);
    setAnswers(["","",""]); setCurrentQ(0); setScript(""); setApiError(false);
  };

  // ── HOME ──────────────────────────────────────────────────────────────────
  if (screen === SCREENS.HOME) return (
    <div style={{ minHeight:"100vh", background:C.creme, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"2rem" }}>
      <div style={{ ...base, textAlign:"center", width:"100%" }}>
        <BrandLogo height={48}/>
        <div style={{ width:48, height:2, background:C.cobre, margin:"1.2rem auto" }}/>
        <h1 style={{ color:C.escuro, fontSize:"1.75rem", fontWeight:"bold", lineHeight:1.35, marginBottom:"1rem" }}>
          Você <em style={{ color:C.cobre }}>sabe</em> o que faz.<br/>Agora vamos mostrar.
        </h1>
        <p style={{ color:C.marrom, fontSize:"0.97rem", lineHeight:1.8, marginBottom:"2.5rem" }}>
          Para profissionais de saúde que travam na câmera,<br/>se comparam ou não sabem por onde começar.
        </p>
        <button onClick={() => setScreen(SCREENS.FEAR)}
          style={{ background:C.verde, color:C.creme, border:"none", padding:"1rem 2rem", borderRadius:"50px", fontSize:"1rem", fontWeight:"bold", cursor:"pointer", width:"100%", boxShadow:`0 6px 24px ${C.verde}44` }}>
          Quero aparecer com confiança →
        </button>
        <p style={{ color:"#b8a99a", fontSize:"0.75rem", marginTop:"1.2rem" }}>Sem scripts genéricos. Sem linguagem de marketing.</p>
      </div>
    </div>
  );

  // ── FEAR ──────────────────────────────────────────────────────────────────
  if (screen === SCREENS.FEAR) return (
    <div style={{ minHeight:"100vh", background:C.creme, padding:"2rem", fontFamily:"Georgia,serif" }}>
      <div style={base}>
        <button onClick={() => setScreen(SCREENS.HOME)} style={{ background:"none", border:"none", color:C.cobre, cursor:"pointer", fontSize:"0.9rem", marginBottom:"1.5rem", padding:0 }}>← Voltar</button>
        <h2 style={{ color:C.escuro, fontSize:"1.35rem", marginBottom:"0.4rem" }}>O que te trava?</h2>
        <p style={{ color:C.marrom, fontSize:"0.88rem", marginBottom:"1.8rem" }}>Escolha o que mais faz sentido pra você.</p>
        <div style={{ display:"flex", flexDirection:"column", gap:"0.7rem" }}>
          {fears.map(f => (
            <button key={f.id} onClick={() => { setSelectedFear(f.id); setScreen(SCREENS.RESULT); }}
              style={{ background:"#fff", border:`1.5px solid ${C.cremeEscuro}`, borderRadius:"14px", padding:"1rem 1.2rem", color:C.escuro, fontSize:"0.97rem", cursor:"pointer", textAlign:"left", display:"flex", alignItems:"center", gap:"0.9rem", boxShadow:"0 2px 8px #0000000a" }}>
              <span style={{ fontSize:"1.4rem" }}>{f.emoji}</span>
              <span>{f.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // ── RESULT ────────────────────────────────────────────────────────────────
  if (screen === SCREENS.RESULT && selectedFear) {
    const r = fearResponses[selectedFear];
    return (
      <div style={{ minHeight:"100vh", background:C.creme, padding:"2rem", fontFamily:"Georgia,serif", display:"flex", flexDirection:"column" }}>
        <div style={{ ...base, flex:1, display:"flex", flexDirection:"column", width:"100%" }}>
          <button onClick={() => setScreen(SCREENS.FEAR)} style={{ background:"none", border:"none", color:C.cobre, cursor:"pointer", fontSize:"0.9rem", marginBottom:"1.8rem", padding:0 }}>← Voltar</button>
          <div style={{ background:"#fff", border:`1.5px solid ${C.cremeEscuro}`, borderLeft:`4px solid ${C.verde}`, borderRadius:"16px", padding:"1.8rem", marginBottom:"1.2rem", boxShadow:"0 4px 20px #0000000d" }}>
            <h2 style={{ color:C.verde, fontSize:"1.2rem", marginBottom:"0.8rem", lineHeight:1.4 }}>{r.title}</h2>
            <p style={{ color:C.escuro, lineHeight:1.85, fontSize:"0.95rem" }}>{r.msg}</p>
          </div>
          <div style={{ background:C.cremeEscuro, borderRadius:"12px", padding:"1rem 1.2rem", marginBottom:"2rem" }}>
            <p style={{ color:C.marrom, fontSize:"0.88rem" }}>👉 {r.action}</p>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem", marginTop:"auto" }}>
            <button onClick={() => setScreen(SCREENS.BREATHE)}
              style={{ background:"#fff", color:C.verde, border:`2px solid ${C.verde}`, padding:"1rem", borderRadius:"50px", fontSize:"0.97rem", cursor:"pointer", fontWeight:"bold" }}>
              🌬️ Respiração antes de gravar
            </button>
            <button onClick={() => setScreen(SCREENS.OBJECTIVE)}
              style={{ background:C.verde, color:C.creme, border:"none", padding:"1rem", borderRadius:"50px", fontSize:"0.97rem", cursor:"pointer", fontWeight:"bold", boxShadow:`0 4px 18px ${C.verde}44` }}>
              ✍️ Montar meu roteiro →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── OBJECTIVE ─────────────────────────────────────────────────────────────
  if (screen === SCREENS.OBJECTIVE) return (
    <div style={{ minHeight:"100vh", background:C.creme, padding:"2rem", fontFamily:"Georgia,serif" }}>
      <div style={base}>
        <button onClick={() => setScreen(SCREENS.RESULT)} style={{ background:"none", border:"none", color:C.cobre, cursor:"pointer", fontSize:"0.9rem", marginBottom:"1.5rem", padding:0 }}>← Voltar</button>
        <h2 style={{ color:C.escuro, fontSize:"1.3rem", marginBottom:"0.4rem" }}>Qual é o objetivo do vídeo?</h2>
        <p style={{ color:C.marrom, fontSize:"0.88rem", marginBottom:"1.8rem" }}>O roteiro vai ser diferente para cada objetivo.</p>
        <div style={{ display:"flex", flexDirection:"column", gap:"0.9rem" }}>
          {objectives.map(obj => (
            <button key={obj.id} onClick={() => { setSelectedObj(obj.id); setAnswers(["","",""]); setCurrentQ(0); setScreen(SCREENS.PREP); }}
              style={{ background:"#fff", border:`1.5px solid ${C.cremeEscuro}`, borderRadius:"16px", padding:"1.2rem 1.4rem", color:C.escuro, cursor:"pointer", textAlign:"left", boxShadow:"0 2px 8px #0000000a" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"0.8rem", marginBottom:"0.4rem" }}>
                <span style={{ fontSize:"1.5rem" }}>{obj.emoji}</span>
                <strong style={{ color:obj.color, fontSize:"1.05rem" }}>{obj.label}</strong>
              </div>
              <p style={{ color:C.marrom, fontSize:"0.85rem", margin:0, lineHeight:1.5 }}>{obj.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // ── PREP ──────────────────────────────────────────────────────────────────
  if (screen === SCREENS.PREP && selectedObj) return (
    <div style={{ minHeight:"100vh", background:C.creme, padding:"2rem", fontFamily:"Georgia,serif" }}>
      <div style={base}>
        <button onClick={() => setScreen(SCREENS.OBJECTIVE)} style={{ background:"none", border:"none", color:C.cobre, cursor:"pointer", fontSize:"0.9rem", marginBottom:"1.5rem", padding:0 }}>← Voltar</button>
        <div style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", background:C.verde, color:C.creme, borderRadius:"50px", padding:"0.3rem 0.9rem", fontSize:"0.8rem", marginBottom:"1.2rem" }}>
          <span>{objInfo?.emoji}</span><span>{objInfo?.label}</span>
        </div>
        <div style={{ display:"flex", gap:"0.4rem", marginBottom:"2rem" }}>
          {preps.map((_,i) => <div key={i} style={{ flex:1, height:"3px", borderRadius:"2px", background:i<=currentQ?C.verde:C.cremeEscuro, transition:"background 0.3s" }}/>)}
        </div>
        <p style={{ color:C.cobre, fontSize:"0.78rem", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.5rem" }}>Pergunta {currentQ+1} de {preps.length}</p>
        <h2 style={{ color:C.escuro, fontSize:"1.15rem", marginBottom:"1.5rem", lineHeight:1.6 }}>{preps[currentQ].q}</h2>
        <textarea
          value={answers[currentQ]}
          onChange={e => { const u=[...answers]; u[currentQ]=e.target.value; setAnswers(u); }}
          placeholder={preps[currentQ].ph}
          rows={3}
          style={{ width:"100%", background:"#fff", border:`1.5px solid ${C.cremeEscuro}`, borderRadius:"12px", padding:"1rem", color:C.escuro, fontSize:"0.97rem", resize:"none", outline:"none", boxSizing:"border-box", fontFamily:"Georgia,serif", lineHeight:1.7 }}
        />
        <button
          disabled={!answers[currentQ].trim()}
          onClick={() => currentQ < preps.length-1 ? setCurrentQ(currentQ+1) : generateScript()}
          style={{ marginTop:"1.5rem", background:answers[currentQ].trim()?C.verde:C.cremeEscuro, color:answers[currentQ].trim()?C.creme:"#b8a99a", border:"none", padding:"1rem", borderRadius:"50px", fontSize:"1rem", cursor:answers[currentQ].trim()?"pointer":"not-allowed", fontWeight:"bold", width:"100%" }}>
          {currentQ < preps.length-1 ? "Próxima →" : "✨ Gerar roteiro"}
        </button>
      </div>
    </div>
  );

  // ── SCRIPT ────────────────────────────────────────────────────────────────
  if (screen === SCREENS.SCRIPT) return (
    <div style={{ minHeight:"100vh", background:C.creme, padding:"2rem", fontFamily:"Georgia,serif" }}>
      <div style={base}>
        <button onClick={() => { setScreen(SCREENS.PREP); setCurrentQ(0); setScript(""); }}
          style={{ background:"none", border:"none", color:C.cobre, cursor:"pointer", fontSize:"0.9rem", marginBottom:"1.5rem", padding:0 }}>← Editar respostas</button>

        {objInfo && (
          <div style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", background:C.verde, color:C.creme, borderRadius:"50px", padding:"0.3rem 0.9rem", fontSize:"0.8rem", marginBottom:"1rem" }}>
            <span>{objInfo.emoji}</span><span>Roteiro para {objInfo.label}</span>
          </div>
        )}

        <h2 style={{ color:C.escuro, fontSize:"1.25rem", marginBottom:"0.4rem" }}>Seu roteiro</h2>
        <p style={{ color:C.marrom, fontSize:"0.85rem", marginBottom:"1.5rem" }}>Adapte com suas palavras. A essência é sua.</p>

        {loading ? (
          <div style={{ textAlign:"center", padding:"3rem" }}>
            <div style={{ width:48, height:48, border:`3px solid ${C.cremeEscuro}`, borderTop:`3px solid ${C.verde}`, borderRadius:"50%", animation:"spin 1s linear infinite", margin:"0 auto" }}/>
            <p style={{ color:C.cobre, marginTop:"1.2rem", fontStyle:"italic" }}>Criando seu roteiro...</p>
            <style>{`@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}`}</style>
          </div>
        ) : (
          <>
            {apiError && (
              <div style={{ background:"#fff8f0", border:`1px solid ${C.cobre}44`, borderRadius:"12px", padding:"0.8rem 1rem", marginBottom:"1rem", fontSize:"0.82rem", color:C.marrom }}>
                ⚠️ Roteiro gerado localmente — sem conexão com a IA no momento.
              </div>
            )}
            <div style={{ background:"#fff", border:`1.5px solid ${C.cremeEscuro}`, borderRadius:"16px", padding:"1.5rem 1.5rem 0.5rem", marginBottom:"1.2rem", boxShadow:"0 4px 16px #0000000a" }}>
              {renderScript(script)}
            </div>
            <div style={{ background:C.cremeEscuro, borderRadius:"12px", padding:"1rem 1.2rem", marginBottom:"1.8rem" }}>
              <p style={{ color:C.marrom, fontSize:"0.85rem", lineHeight:1.7 }}>
                💡 <strong>Dica:</strong> Leia 2 vezes em voz alta antes de gravar. Mude o que soar artificial — o roteiro é um guia, não um script fixo.
              </p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
              <button onClick={() => setScreen(SCREENS.BREATHE)}
                style={{ background:C.verde, color:C.creme, border:"none", padding:"1rem", borderRadius:"50px", fontSize:"0.97rem", cursor:"pointer", fontWeight:"bold", boxShadow:`0 4px 18px ${C.verde}44` }}>
                🌬️ Respiração antes de gravar
              </button>
              <button onClick={resetToObj}
                style={{ background:"none", color:C.cobre, border:`1.5px solid ${C.cobre}`, padding:"0.8rem", borderRadius:"50px", fontSize:"0.9rem", cursor:"pointer" }}>
                🔄 Criar outro roteiro
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  // ── BREATHE ───────────────────────────────────────────────────────────────
  if (screen === SCREENS.BREATHE) return <BreathingExercise onDone={() => setScreen(SCREENS.DONE)}/>;

  // ── DONE ──────────────────────────────────────────────────────────────────
  if (screen === SCREENS.DONE) return (
    <div style={{ minHeight:"100vh", background:C.creme, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"2rem", fontFamily:"Georgia,serif", textAlign:"center" }}>
      <div style={{ ...base, width:"100%" }}>
        <BrandLogo height={44}/>
        <div style={{ width:48, height:2, background:C.cobre, margin:"1.2rem auto" }}/>
        <h2 style={{ color:C.escuro, fontSize:"1.6rem", marginBottom:"1rem", lineHeight:1.45 }}>
          Você está pronta(o).<br/><em style={{ color:C.cobre }}>Agora vai gravar.</em>
        </h2>
        <p style={{ color:C.marrom, lineHeight:1.85, marginBottom:"2.5rem", fontSize:"0.97rem" }}>
          Imperfeição ao vivo é melhor do que<br/>perfeição que nunca foi gravada.<br/><br/>
          Seu paciente quer te ouvir —<br/>não uma versão editada de você.
        </p>
        <div style={{ background:"#fff", border:`1px solid ${C.cremeEscuro}`, borderRadius:"16px", padding:"1.2rem", marginBottom:"2rem" }}>
          <p style={{ color:C.verde, fontSize:"0.88rem", fontStyle:"italic", margin:0, lineHeight:1.7 }}>
            "Conteúdo de saúde não é propaganda.<br/>É a continuação do seu atendimento."
          </p>
        </div>
        <button onClick={reset}
          style={{ background:C.verde, color:C.creme, border:"none", padding:"1rem 2rem", borderRadius:"50px", fontSize:"1rem", cursor:"pointer", fontWeight:"bold", width:"100%", boxShadow:`0 4px 18px ${C.verde}44` }}>
          Criar novo roteiro 🔄
        </button>
      </div>
    </div>
  );

  return null;
}
