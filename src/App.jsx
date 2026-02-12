
import {useState,useEffect} from "react"
import {Card,CardContent} from "./components/ui/card"
import {Button} from "./components/ui/button"
import {Github,Linkedin,Sun,Moon} from "lucide-react"
import {motion} from "framer-motion"

export default function App(){
const[dark,setDark]=useState(true)
const[repos,setRepos]=useState([])

useEffect(()=>{
fetch("https://api.github.com/users/yashwantji/repos")
.then(r=>r.json())
.then(d=>setRepos(d.slice(0,6)))
},[])

const theme=dark?"bg-black text-green-400":"bg-white text-gray-800"

return(
<div className={`${theme} min-h-screen`}>
<div className="flex justify-between p-6 border-b border-green-500">
<h1 className="text-2xl font-bold">WideBeast</h1>
<div className="flex gap-4">
<Button onClick={()=>setDark(!dark)}>
{dark?<Sun size={18}/>:<Moon size={18}/>}
</Button>
<a href="https://github.com/yashwantji"><Github/></a>
<a href="https://linkedin.com"><Linkedin/></a>
</div>
</div>

<section className="text-center py-20">
<motion.h2 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="text-5xl font-bold">
Yashwant Gupta
</motion.h2>
<p className="mt-6 text-gray-400">Full Stack Developer • Blockchain Builder • Tech Founder</p>
</section>

<section className="p-10 grid md:grid-cols-2 gap-6">
<Card><CardContent className="p-6">
<h3 className="text-2xl font-bold mb-4">About WideBeast</h3>
<p>WideBeast builds scalable platforms in Web, AI, and Blockchain.</p>
</CardContent></Card>

<Card><CardContent className="p-6">
<h3 className="text-2xl font-bold mb-4">Skills</h3>
<ul className="space-y-2">
<li>MERN Stack</li>
<li>Android + Flutter</li>
<li>AWS + Hosting</li>
<li>Blockchain</li>
</ul>
</CardContent></Card>
</section>

<section className="p-10">
<h3 className="text-3xl text-center mb-8">GitHub Projects</h3>
<div className="grid md:grid-cols-3 gap-6">
{repos.map(r=>(
<Card key={r.id}>
<CardContent className="p-6">
<h4 className="font-bold">{r.name}</h4>
<p className="text-sm text-gray-400">{r.description}</p>
<a href={r.html_url} className="text-green-400">View Repo</a>
</CardContent>
</Card>
))}
</div>
</section>

<footer className="text-center p-6 border-t border-green-500">
© {new Date().getFullYear()} WideBeast
</footer>
</div>
)
}
