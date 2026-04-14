import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { Card, CardContent } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Github, Linkedin, Sun, Moon, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import FuturisticEffects from "./components/ui/FuturisticEffects"
import Company from "./pages/Company"

function Home() {
  const [dark,setDark]=useState(true)
  const [repos,setRepos]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)

  useEffect(()=>{
    fetch("https://api.github.com/users/yashwantji/repos")
    .then(r=>{
      if(!r.ok) throw new Error("GitHub API Error")
      return r.json()
    })
    .then(d=>{
      setRepos(d.slice(0,6))
      setLoading(false)
    })
    .catch(e=>{
      setError(e.message)
      setLoading(false)
    })
  },[])

  const theme=dark
  ? "bg-[#03040a] text-cyan-300"
  : "bg-white text-gray-800"

  return(
    <div className={`${theme} min-h-screen font-[Orbitron] relative overflow-hidden`}>

      <FuturisticEffects/>

      {/* animated background glow */}
      <div className="absolute inset-0 -z-10
      bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.12),transparent_40%),
      radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.15),transparent_40%)]"/>

      {/* NAVBAR */}
      <div className="flex justify-between items-center p-6
      border-b border-cyan-400/20 backdrop-blur-xl bg-white/5">

        <h1 className="text-2xl font-bold tracking-widest
        bg-gradient-to-r from-cyan-400 to-purple-500
        bg-clip-text text-transparent animate-pulse">
          WideBeast
        </h1>

        <div className="flex gap-4 items-center">

          <Button
            onClick={()=>setDark(!dark)}
            variant="outline"
            className="border-cyan-400 text-cyan-300 hover:bg-cyan-400/10">
            {dark?<Sun size={18}/>:<Moon size={18}/>}
          </Button>

          <a href="https://github.com/yashwantji" target="_blank">
            <Github className="hover:text-cyan-400 transition"/>
          </a>

          <a href="https://linkedin.com/in/yashwant-gupta-739259241" target="_blank">
            <Linkedin className="hover:text-purple-400 transition"/>
          </a>

          <Link to="/company" className="text-cyan-300 hover:text-cyan-400">WideBeast Company</Link>
        </div>
      </div>

      {/* HERO */}
      <section className="text-center py-28">

        <motion.h2
          initial={{opacity:0,y:50}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          className="text-6xl font-extrabold tracking-wide
          bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400
          bg-[length:200%_200%] animate-[gradient_6s_ease_infinite]
          text-transparent bg-clip-text">
          Yashwant Gupta
        </motion.h2>

        <p className="mt-6 text-gray-400 text-lg">
          Full Stack Developer • Blockchain Engineer • Tech Founder
        </p>

      </section>

      {/* ABOUT + SKILLS */}
      <section className="p-10 grid md:grid-cols-2 gap-8">

        <Tilt glareEnable glareMaxOpacity={0.25}>
          <Card className="bg-white/5 backdrop-blur-xl border border-cyan-400/30
          shadow-[0_0_25px_rgba(0,255,255,0.15)] hover:shadow-cyan-400/40 transition">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">About WideBeast</h3>
              <p className="text-gray-400">
                WideBeast builds scalable platforms in Web, AI, Blockchain and next-gen infrastructure.
              </p>
              <p className="text-gray-400 mt-3">
                A future-focused technology brand creating intelligent digital ecosystems for Web3.
              </p>
            </CardContent>
          </Card>
        </Tilt>

        <Tilt glareEnable glareMaxOpacity={0.25}>
          <Card className="bg-white/5 backdrop-blur-xl border border-purple-400/30
          shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:shadow-purple-400/40 transition">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Core Skills</h3>
              <ul className="space-y-2 text-gray-300">
                <li>MERN + Full Stack Systems</li>
                <li>Blockchain + Smart Contracts</li>
                <li>AWS Cloud + DevOps</li>
                <li>AI Systems Integration</li>
              </ul>
            </CardContent>
          </Card>
        </Tilt>

      </section>

      {/* EXPERIENCE */}
      <section className="p-10">
        <h3 className="text-3xl font-bold mb-10 text-center text-cyan-300">
          Experience Timeline
        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            {role:"Full Stack Developer & Team Lead",company:"GasBuddy India",time:"2024–Present"},
            {role:"Software Developer",company:"Anit Infotech",time:"2024"},
            {role:"Full Stack Developer",company:"Veenavani Digital",time:"2024"},
            {role:"Trainer + Developer",company:"IANT",time:"2023"}
          ].map((job,i)=>(

            <Tilt key={i}>
              <Card className="bg-white/5 border border-cyan-400/20 backdrop-blur-xl hover:scale-[1.03] transition">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-cyan-300">{job.role}</h4>
                  <p className="text-gray-300">{job.company}</p>
                  <span className="text-sm text-gray-500">{job.time}</span>
                </CardContent>
              </Card>
            </Tilt>

          ))}

        </div>
      </section>

      {/* GITHUB */}
      <section className="p-10">
        <h3 className="text-3xl text-center mb-8 text-purple-300">GitHub Projects</h3>

        {loading&&<p className="text-center">Loading repositories...</p>}
        {error&&<p className="text-center text-red-400">{error}</p>}

        <div className="grid md:grid-cols-3 gap-6">

          {!loading&&!error&&repos.map(r=>(

            <Tilt key={r.id}>
              <Card className="bg-white/5 border border-purple-400/30 backdrop-blur-xl hover:shadow-purple-500/20 hover:shadow-lg transition">

                <CardContent className="p-6">
                  <h4 className="font-bold text-cyan-300">{r.name}</h4>
                  <p className="text-sm text-gray-400">{r.description}</p>
                  <a href={r.html_url} className="text-purple-400 text-sm">View Repo →</a>
                </CardContent>

              </Card>
            </Tilt>

          ))}

        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="p-10 text-center">
        <h3 className="text-3xl font-bold mb-8 text-cyan-300">Certificates</h3>

        <div className="grid md:grid-cols-3 gap-6">

          {["IANT Certification","Blockchain Workshop IIT","Star Programming Certificate"].map((c,i)=>(
            <Tilt key={i}>
              <Card className="bg-white/5 border border-cyan-400/20 backdrop-blur-xl">
                <CardContent className="p-6 text-gray-300">{c}</CardContent>
              </Card>
            </Tilt>
          ))}

        </div>
      </section>

      {/* TOKEN */}
      <section className="p-10 text-center">
        <h3 className="text-3xl font-bold mb-6 text-purple-300">WideBeast Coin</h3>

        <p className="max-w-2xl mx-auto text-gray-400">
          WideBeast Coin powers Web3 payments, staking systems,
          and decentralized infrastructure tools for the next generation internet.
        </p>
      </section>

      {/* CONTACT */}
      <section className="p-10 text-center">
        <h3 className="text-3xl font-bold mb-6 text-cyan-300">Contact</h3>

        <p className="text-gray-400">Email: yashwant5082@gmail.com</p>


        <Button className="mt-6 border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 hover:scale-105 transition">
          <Mail className="mr-2"/> Send Message
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="text-center p-6 border-t border-cyan-500/30 text-gray-500">
        © {new Date().getFullYear()} WideBeast — Web3 Technology
      </footer>

    </div>
  )
}

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/company" element={<Company/>}/>
      </Routes>
    </BrowserRouter>
  )
}
